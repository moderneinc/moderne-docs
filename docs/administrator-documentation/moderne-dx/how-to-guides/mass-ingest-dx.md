---
sidebar_label: Mass ingest
description: Instructions for ingesting a large number of repositories with Moderne.
---

# Mass ingest

One of the first steps of integrating your code with Moderne is setting up a pipeline that builds and publishes [LST](../../../user-documentation/recipes/authoring-recipes/concepts/lossless-semantic-trees.md) artifacts to an artifact repository that you control. Developers and [mass run](./mass-run-dx.md) download the LSTs from there instead of building them. This pipeline is called mass ingest, and it typically runs once per day.

Building LSTs on a schedule rather than in CI keeps every repository current. That includes the repositories that rarely build, and the ones whose code has not changed but whose dependencies have. To understand why we recommend this over building LSTs in CI, see [mass ingest vs CI-integrated LST builds](../../moderne-platform/references/mass-ingest-vs-ci.md).

In this guide, we will walk you through how mass ingest works, how to set it up from the Moderne mass ingest example repository, and how to size and scale it.

## How mass ingest works

Each mass ingest run is one Moderne CLI command: `mod publish --sync-csv`. The container image and scheduler that the rest of this guide sets up exist to run that command every day. You will give the command a `repos.csv` file that lists your repositories.

For each repository in that list, the CLI will:

1. Clone the repository.
2. Build its LST.
3. Publish the LST to your artifact repository.
4. Record the result in a `repos-lock.csv` file stored next to the `repos.csv` file.
5. Delete the checkout and move on to the next repository.

As a result, the workspace never holds more than one repository at a time.

On later runs, the CLI skips any repository whose `repos-lock.csv` row shows that a rebuild would produce the same LST. For a repository to be skipped, all of the following must be true:

* The row records the commit at the repository's current remote HEAD.
* The row was written by the same CLI version that is running now.
* The last build was reproducible. This means it resolved no dynamic dependency versions and, if the ecosystem has lock files, it used one.

If any of these are false, the CLI rebuilds the repository. Additionally, there are two kinds of repositories that are rebuilt on every run:

* Bazel repositories (as the CLI cannot tell whether a Bazel build would come out the same).
* Repositories whose last build or publish failed.

:::note
Both `--sync-csv` and the `--shard` option described below are incubating. Their behavior may shift between CLI releases. The [CLI reference](../../../user-documentation/moderne-cli/cli-reference.md#mod-publish) has the current options.
:::

## Setting up mass ingest

The [Moderne mass ingest example repository](https://github.com/moderneinc/mass-ingest-example) packages mass ingest as a container image, with scripts to run it on one machine with Docker or as a Kubernetes Job. You should start from its README, which walks you through the three steps below. Its [docs directory](https://github.com/moderneinc/mass-ingest-example/tree/main/docs) covers the details of each one.

### Creating the `repos.csv` file

First, you will need a `repos.csv` file that lists the repositories to ingest. The easiest way to create one is with the [repository fetcher scripts](https://github.com/moderneinc/repository-fetchers). They query GitHub, GitLab, Bitbucket, or Azure DevOps and produce a file that is ready to use. If you want to write or edit the file by hand, the [repos.csv reference](../../../user-documentation/moderne-cli/references/repos-csv.md) describes every column.

Once you have the file, put it at the root of the artifact repository your LSTs will go to. The CLI reads it from there at the start of every run.

:::note
An artifact repository with a strict Maven layout, such as Nexus, rejects files at its root. On those, you will need to put the `repos.csv` file at a Maven coordinate instead. See [where the central CSV files live](../../../user-documentation/moderne-cli/how-to-guides/repos-lock-csv.md) for the paths.
:::

### Building the image

The example's Dockerfile contains the build tools for JVM, JavaScript, Python, .NET, and Go repositories. It also installs the Moderne CLI each time a container starts. You will need to build the image and push it to a registry your scheduler can pull from. [Customizing the image](https://github.com/moderneinc/mass-ingest-example/blob/main/docs/image.md) covers pinning the CLI version, air-gapped installations, internal package mirrors, and self-signed certificates.

### Running the image

You will need to do three things to configure the container (via environment variables and one mounted file):

* **Tell the container where to publish the LSTs.** Set the environment variables for your artifact repository, which the example's [S3](https://github.com/moderneinc/mass-ingest-example/blob/main/docs/s3.md) and [Artifactory](https://github.com/moderneinc/mass-ingest-example/blob/main/docs/artifactory.md) pages list. The Artifactory page also covers [Nexus and other Maven repositories](https://github.com/moderneinc/mass-ingest-example/blob/main/docs/artifactory.md#nexus-and-other-maven-repositories).
* **Give it your license key.** Set `MOD_LICENSE_KEY` to your Moderne DX license key. The CLI never contacts Moderne. The image does download the CLI from Moderne's artifact host when a container starts. If your network blocks that, see [air-gapped installations](https://github.com/moderneinc/mass-ingest-example/blob/main/docs/image.md#air-gapped-installations).
* **Give it credentials for private repositories.** The CLI clones with Git, which reads credentials from a `.git-credentials` file in the home directory of the container's user. You will need to mount yours at `/home/moderne/.git-credentials`. The example's Kubernetes Job mounts it from a secret, and its single-machine script mounts it from your home directory. If every repository is public, an empty file is enough.

You should start with `mod doctor`, which checks that everything is in place without changing anything and suggests a fix for anything that is not. Once it passes, run the image itself. The README shows both commands.

## Running mass ingest every day

A large repository list finishes sooner when it is split into shards. You choose how many shards there are and how many run at once. The CLI decides which repositories belong to each shard by hashing each repository's origin, path, and branch. The containers split one list without coordinating, and you never assign repositories to shards yourself. A container runs one shard when its publish command includes `--shard i/M`, where `M` is the number of shards and `i` is its own index. Any scheduler that runs containers can do this.

The example repository shows two ways to do this. [Running on one machine](https://github.com/moderneinc/mass-ingest-example/blob/main/docs/docker.md) uses a short shell script that starts one container per shard on a single large VM. [Running on Kubernetes](https://github.com/moderneinc/mass-ingest-example/blob/main/docs/kubernetes.md) uses an indexed Job, where Kubernetes creates one pod per shard and fills in each pod's index. On Amazon EKS, the example also includes a node pool that adds a spot instance for each pod and scales to zero between runs. Both pages explain what happens when a build fails. Keeping LSTs current is then a matter of starting a run every night, from cron, CI, or a CronJob.

## Sizing

Each container runs one build at a time. To run more builds at once, you run more containers. The example Job requests the following for each pod, which fits a 4 vCPU, 16 GiB node:

| Resource | Per container                |
|----------|------------------------------|
| CPU      | 3.5 cores                    |
| Memory   | 12 GiB                       |
| Disk     | 150 GiB of ephemeral storage |

These are what the example provisions, not the minimum. Any host that passes `mod doctor` can run a shard. The check fails on fewer than 2 CPUs and warns below 16 GiB of memory or 10 GiB of free disk.

You should keep the memory limit equal to the request. The CLI holds each build below that limit. A build that runs out of memory fails on its own, and the container moves on to the next repository.

Only one repository is on disk at a time. Size the disk for your largest one. Lower the storage request if nothing you build comes close to 150 GiB.

On one machine, the same numbers apply to each shard. Give each shard about 4 vCPUs and 16 GiB of the VM, and plan disk for your largest repository times the number of shards. The example's script caps each container at 12 GiB of memory.

The number of shards sets how long each container runs. Shorter runs mean a lost container has less to redo. About four shards per concurrent container keeps each one to a few hours. You can change both numbers between runs. The lock tracks each repository, not the shard that built it.

### Pinning the CLI version

By default, the image installs the newest CLI release each time a container starts. Every CLI release then rebuilds every repository once. The lock only skips a repository that the same CLI version built. CLI releases are frequent, and an unpinned image will rebuild everything on many nights. To choose when that happens, pin the version with the `MODERNE_WRAPPER_VERSION` environment variable, as [customizing the image](https://github.com/moderneinc/mass-ingest-example/blob/main/docs/image.md#the-cli-version) describes.

:::warning
The `--sync-csv` option was added to `mod publish` in CLI 4.8.1. Do not pin to an earlier version.
:::

## Next steps

* [Set up mass run](./mass-run-dx.md) to run recipes across your repositories. It syncs the LSTs from the `repos-lock.csv` file that mass ingest writes.
