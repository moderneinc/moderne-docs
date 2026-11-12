---
sidebar_label: Mass ingest
description: Instructions for ingesting a large number of repositories with Moderne.
---

# Mass ingest

One of the first steps of integrating your code with Moderne is setting up a pipeline that builds and publishes [LST](../../../user-documentation/recipes/authoring-recipes/concepts/lossless-semantic-trees.md) artifacts to an artifact repository that you control. Developers and [mass run](./mass-run-dx.md) download the LSTs from there instead of building them. This pipeline is called mass ingest, and it typically runs once per day.

Building LSTs on a schedule rather than in CI keeps every repository current. That includes the repositories that rarely build, and the ones whose code has not changed but whose dependencies have. To understand why we recommend this over building LSTs in CI, see [mass ingest vs CI-integrated LST builds](../../moderne-platform/references/mass-ingest-vs-ci.md).

In this guide, we will walk you through how mass ingest works, what you will need to arrange before you start, how to set it up from the Moderne mass ingest example repository, and how to size and scale it. We will also cover running it on the same machine as DX, without containers or an artifact repository.

## How mass ingest works

Each mass ingest run is one Moderne CLI command: `mod publish --sync-csv`. The container image and scheduler that the rest of this guide sets up exist to run that command every day. You will give the command a `repos.csv` file that lists your repositories.

For each repository in that list, the CLI will:

1. Clone the repository.
2. Build its LST.
3. Publish the LST to your artifact repository.
4. Record the result in a `repos-lock.csv` file stored next to the `repos.csv` file.
5. Delete the checkout and move on to the next repository.

On later runs, the CLI skips any repository whose `repos-lock.csv` row shows that a rebuild would produce the same LST. For a repository to be skipped, all of the following must be true:

* The row records the commit at the repository's current remote HEAD.
* The row was written by the same CLI version that is running now.
* The last build was reproducible. It resolved no dynamic dependency versions. If the build tool supports lock files, it used one.

If any of these are false, the CLI rebuilds the repository. Additionally, there are two kinds of repositories that are rebuilt on every run:

* Bazel repositories (as the CLI cannot tell whether a Bazel build would come out the same).
* Repositories whose last build or publish failed.

:::note
Both `--sync-csv` and the `--shard` option described below are incubating. Their behavior may shift between CLI releases. The [CLI reference](../../../user-documentation/moderne-cli/cli-reference.md#mod-publish) has the current options.
:::

## Prerequisites

The [mass ingest example repository's README](https://github.com/moderneinc/mass-ingest-example#what-youll-need) lists what you will need before you can set up mass ingest.

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

* **Tell the container where to publish the LSTs.** Set the environment variables for your artifact repository. The example's [Artifact stores](https://github.com/moderneinc/mass-ingest-example/blob/main/docs/stores.md) page lists them for S3, Google Cloud Storage, Azure Blob Storage, Artifactory, and Nexus or other Maven repositories.
* **Give it your license key.** Set `MOD_LICENSE_KEY` to your Moderne DX license key. The CLI doesn't send anything to Moderne. Each container does download the CLI from Moderne when it starts. If your network blocks that, see [air-gapped installations](https://github.com/moderneinc/mass-ingest-example/blob/main/docs/image.md#air-gapped-installations).
* **Give it credentials for private repositories.** The CLI clones with Git, which reads credentials from a `.git-credentials` file in the home directory of the container's user. You will need to mount yours at `/home/moderne/.git-credentials`. The example's Kubernetes Job mounts it from a secret, and its single-machine script mounts it from your home directory. If every repository is public, an empty file is enough.

:::warning
An LST contains the full source code of its repository. Anyone who can read the artifact repository can download it.
:::

You should start with `mod doctor`, which checks that everything is in place without changing anything and suggests a fix for anything that is not. Once it passes, run the image itself. The README shows both commands.

## Running mass ingest every day

A large repository list finishes sooner when it is split into shards. You choose how many shards there are and how many run at once. You never assign repositories to shards yourself. Each container works out its own share of the list, and every repository goes in exactly one shard. A container runs one shard when its publish command includes `--shard i/M`, where `M` is the number of shards and `i` is its own index. Any scheduler that runs containers can do this.

The example repository shows two ways to do this. [Running on one machine](https://github.com/moderneinc/mass-ingest-example/blob/main/docs/docker.md) uses a short shell script that starts one container per shard on a single large VM. [Running on Kubernetes](https://github.com/moderneinc/mass-ingest-example/blob/main/docs/kubernetes.md) uses an indexed Job, where Kubernetes creates one pod per shard and fills in each pod's index. On Amazon EKS, the example also includes a node pool that adds a spot instance for each pod and scales to zero between runs. Both pages explain what happens when a build fails. To keep LSTs current, start a run every night from cron, CI, or a Kubernetes CronJob.

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

The number of shards sets how long each container runs. Shorter runs mean a lost container has less to redo. About four shards per concurrent container keeps each one to a few hours. You can change both numbers between runs without causing extra rebuilds.

### Pinning the CLI version

By default, the image installs the newest CLI release each time a container starts. After each new CLI release, the next run rebuilds every repository, because the CLI only skips repositories that the same version built. CLI releases are frequent. To choose when that happens, pin the version with the `MODERNE_WRAPPER_VERSION` environment variable, as [customizing the image](https://github.com/moderneinc/mass-ingest-example/blob/main/docs/image.md#the-cli-version) describes.

:::warning
Do not pin to a version prior to 4.9.0.
:::

## Running mass ingest on the DX machine

If DX runs on a machine that can reach your code, you can run mass ingest on that machine too. The CLI builds each LST into a directory on the machine, and DX serves the LSTs from there. You won't need containers or an artifact repository.

You will need a `repos.csv` file that lists the repositories to build. You will also need a Moderne CLI that has the `mod config lsts artifacts file` command.

### Publishing LSTs to a directory

Configure the CLI to build V3 LSTs and publish them to a directory. Then copy your `repos.csv` file into that directory:

```bash
mod config features lst --version 3
mod config lsts artifacts file edit ~/moderne/lsts
cp repos.csv ~/moderne/lsts/
```

Code search reads V3 LSTs as they are. DX won't need to make V3 copies of them.

### Building the LSTs

Run mass ingest from a workspace directory:

```bash
mod publish ~/moderne/workspace --sync-csv
```

The CLI works through your list one repository at a time, [as in any mass ingest run](#how-mass-ingest-works). It copies each LST into the directory and lists it in a `repos-lock.csv` file there. While it builds, it updates that file every few minutes.

To refresh the LSTs, run the command again. The CLI rebuilds only the repositories that changed. Each new LST replaces the repository's old one.

### Pointing DX at the directory

[Install DX](../getting-started/installing-moderne-dx.md) as usual. In the `moderne.yml` file that `init` wrote, remove the public `http` organization source and add a `file` source that reads the directory's `repos-lock.csv` file:

```yaml title="moderne.yml"
moderne:
  organization:
    sources:
      file:
        - path: /Users/you/moderne/lsts/repos-lock.csv
          lst-version: 3
```

You will need to give the full path to the file. The `lst-version: 3` setting tells DX that the LSTs are V3.

When you run `java -jar moderne-dx.jar doctor`, it should report that every organization source publishes V3 LSTs. After DX starts, code search finds a repository a few minutes after its LST is built.

:::note
Only a CLI on this machine can download these LSTs. DX gives each LST's location as a path on this machine, so developers on other machines can't sync these repositories with the CLI.
:::

## Next steps

* [Set up mass run](./mass-run-dx.md) to run recipes across your repositories. It syncs the LSTs from the `repos-lock.csv` file that mass ingest writes.
* [Send mass ingest's telemetry to DX](./configure-telemetry-dx.md#including-telemetry-from-mass-ingest). Without this, it is lost when each container stops.
