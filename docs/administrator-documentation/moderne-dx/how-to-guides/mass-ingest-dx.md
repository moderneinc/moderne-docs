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

A large repository list finishes sooner when it is split into shards. You choose how many shards there are and how many run at once. You never assign repositories to shards yourself. Each container works out its own share of the list. Every repository goes in exactly one shard. A container runs one shard when its publish command includes `--shard i/M`, where `M` is the number of shards and `i` is its own index. Any scheduler that runs containers can do this.

The example repository shows two ways to do this. [Running on one machine](https://github.com/moderneinc/mass-ingest-example/blob/main/docs/docker.md) uses a short shell script that starts one container per shard on a single large VM. [Running on Kubernetes](https://github.com/moderneinc/mass-ingest-example/blob/main/docs/kubernetes.md) uses an indexed Job, where Kubernetes creates one pod per shard and fills in each pod's index. On Amazon EKS, the example also includes a node pool that adds a spot instance for each pod and scales to zero between runs. Both pages explain what happens when a build fails. To keep LSTs current, start a run every night from cron, CI, or a Kubernetes CronJob.

## Sizing

Each container runs one build at a time. To run more builds at once, you will need to run more containers. The example Job requests the following for each pod, which fits a 4 vCPU, 16 GiB node:

| Resource | Per container                |
|----------|------------------------------|
| CPU      | 3.5 cores                    |
| Memory   | 12 GiB                       |
| Disk     | 150 GiB of ephemeral storage |

These are what the example provisions, not the minimum. Any host that passes `mod doctor` can run a shard. The check fails on fewer than 2 CPUs and warns below 16 GiB of memory or 10 GiB of free disk.

You should set a memory limit on each container, equal to its memory request. The CLI keeps each build's memory below that limit. If a build runs out of memory, only that build fails, and the container moves on to the next repository. Without a limit, Kubernetes would stop the whole container.

Your disk should be slightly larger than your largest repository. This is because only repository is on disk at a time. You can lower the storage request if nothing you build comes close to 150 GiB.

On one machine, the same numbers apply to each shard. Give each shard about 4 vCPUs and 16 GiB of the VM, and plan disk for your largest repository times the number of shards. The example's script caps each container at 12 GiB of memory.

The number of shards sets how long each container runs. Shorter runs mean a lost container has less to redo. About four shards per concurrent container keeps each run to a few hours. You can change both numbers between runs without causing extra rebuilds.

### Pinning the CLI version

By default, the image installs the newest CLI release each time a container starts. After each new CLI release, the next run rebuilds every repository, because the CLI only skips repositories that the same version built. An unpinned image will rebuild everything often, because CLI releases are frequent. To control when those full rebuilds happen, pin the version with the `MODERNE_WRAPPER_VERSION` environment variable, as [customizing the image](https://github.com/moderneinc/mass-ingest-example/blob/main/docs/image.md#the-cli-version) describes.

:::warning
Do not pin to a version prior to 4.9.0.
:::

## Running mass ingest on the DX machine

The setup described earlier in this doc needs containers and an artifact repository. You can skip both if you run DX and mass ingest on the same machine, as long as that machine can reach your code. In that case, the CLI will build each LST into a directory on the machine - and DX will then serve LSTs from there.

:::note
If you run mass ingest on the DX machine, developers on other machines won't be able to sync the repositories it builds with their CLI. DX gives each LST's location as a path on its own machine. Other machines can't open that path.
:::

Before you start, you will need a [`repos.csv` file](#creating-the-reposcsv-file) that lists the repositories to build. You will also need Moderne CLI 4.12.6 or later.

### Setting up the LST directory

The first thing you'll need to do is tell the CLI where to put the LSTs it builds. Normally, this would be an artifact repository. But, since we are configuring this locally, it will be a directory on the DX machine.

While you're setting this up, you'll also need to tell the CLI to build V3 LSTs (since that's the format code search in DX expects). Once that's done, copy your `repos.csv` file into the same directory. That's where the CLI will look for the list of repositories to build.

Here are the commands to do all of that:

```bash
mod config features lst --version 3
mod config lsts artifacts file edit ~/moderne/lsts
cp repos.csv ~/moderne/lsts/
```

### Building the LSTs

Now that the CLI knows where to put the LSTs, you're ready to run mass ingest. As part of that, you'll need to specify a workspace directory - which is a folder the CLI can use to clone and build each repository:

```bash
mod publish ~/moderne/workspace --sync-csv
```

After that, the CLI will work through your list one repository at a time, [the same way it does in any mass ingest run](#how-mass-ingest-works). As each LST is built, the CLI will copy it into your LST directory and add it to a `repos-lock.csv` file there (it updates that file every few minutes while it builds).

When you want to refresh the LSTs later on, just run the same command again. The CLI will only rebuild the repositories that have changed. Each new LST will replace the old one.

### Pointing DX at the directory

The last step is to tell DX where to find the LSTs you just built. If you haven't installed DX on this machine yet, [follow the install guide](../getting-started/installing-moderne-dx.md) first.

Once DX is installed, open the `moderne.yml` file that `init` wrote. By default, it has an `http` organization source that points to some public sample repositories. You'll want to replace that with a `file` source that points to the `repos-lock.csv` file in your LST directory:

```yaml title="moderne.yml"
moderne:
  organization:
    sources:
      file:
        - path: /Users/you/moderne/lsts/repos-lock.csv
          lst-version: 3
```

You'll need to use the full path to the file here (a path that starts with `~` won't work). The `lst-version: 3` line tells DX that these are V3 LSTs.

To check that everything is set up correctly, run `java -jar moderne-dx.jar doctor`. It should report that every organization source publishes V3 LSTs. After that, you can start DX. Each repository will show up in code search a few minutes after its LST is built.

## Next steps

* [Set up mass run](./mass-run-dx.md) to run recipes across your repositories. It syncs the LSTs from the `repos-lock.csv` file that mass ingest writes.
* [Send mass ingest's telemetry to DX](./configure-telemetry-dx.md#including-telemetry-from-mass-ingest). Without this, it is lost when each container stops.
