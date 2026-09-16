---
sidebar_label: Proof of value prerequisites
description: What your team needs to prepare before starting a Moderne DX proof of value.
---

# Proof of value (POV) prerequisites

Before starting a Moderne DX proof of value, your team will need to:

* Set up source control access
* Prepare a repository list

This page covers everything you need to do so nothing is missed on day one.

## Checklist

| # | Requirement                                                                                 | Details                                                                                            |
|---|---------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| 1 | [SCM service account](#source-control-access) with read access to all in-scope repositories | Used by the CLI and mass ingest to clone and build repositories                                    |
| 2 | [SCM OAuth application](#source-control-access) (GitHub App, GitLab OAuth, etc.)            | Allows users to commit changes through the Moderne CLI                                             |
| 3 | [Repository list](#preparing-your-repository-list) (repos.csv)                              | Generated with our [repository fetcher scripts](https://github.com/moderneinc/repository-fetchers) |

## Source control access

You will need a source control management (SCM) service account with **read access** to all in-scope repositories. This is used by the Moderne CLI and mass ingest to clone repositories and build LSTs. Credentials are mounted at runtime and never baked into images. The [mass ingest source control credentials documentation](https://github.com/moderneinc/mass-ingest-example#source-control-credentials) has setup details.

### Preparing your repository list

You will need a [repos.csv file](../../../user-documentation/moderne-cli/references/repos-csv.md) that lists the repositories to work with. The more repositories you include, the more value you will see from the POV — Moderne's strength is working across repositories at scale.

The easiest way to generate this file is with our [repository fetcher scripts](https://github.com/moderneinc/repository-fetchers), which are available for GitHub, GitLab, Bitbucket (Data Center and Cloud), and Azure DevOps. These scripts query your SCM's API and produce a ready-to-use `repos.csv` file.

## Mass ingest

While mass ingest is typically set up after the initial POV rather than during it, you may want to plan for it early. Mass ingest builds all of your repositories and creates the [LST artifacts](../../../user-documentation/recipes/authoring-recipes/concepts/lossless-semantic-trees.md) that recipes run against. It runs as a container. You can host that container on a VM or in a Kubernetes cluster.

| Resource | Minimum    | Recommended                                                                   |
|----------|------------|-------------------------------------------------------------------------------|
| CPU      | 2 cores    | 4 cores                                                                       |
| Memory   | 16 GB      | 16 GB                                                                         |
| Disk     | 10 GB free | Sized to your largest repository (the example Kubernetes Job requests 150 GB) |

The minimums are what `mod doctor` checks before you start. The check fails on fewer than 2 CPUs and warns when memory or free disk is below the other two. The recommended figures are the size of the machine that the example Kubernetes Job runs each shard on.

Only one repository is stored on disk at a time. This is because each container builds one repository at a time and then deletes it once its LST is published.

To finish a large repository list sooner, you can run several containers in parallel. You will need to choose the number of shards you want - the CLI will then assign the repositories to them automatically.

The [mass ingest guide](../how-to-guides/mass-ingest-dx.md#sizing) covers sizing and sharding. The [mass ingest example repository](https://github.com/moderneinc/mass-ingest-example) has a Kubernetes Job that runs the shards for you.

:::tip
If you have a standard base image that includes your existing certificates or other configuration, we can build on top of that. If you don't, we'll build from standard open-source base images and configure it with any certificates, credentials, and build tool settings during the engagement.
:::

## What Moderne provides

During the POV process, Moderne will provide:

* A **Moderne CLI license** for running recipes across your repositories
* **Technical support** throughout the setup and evaluation process

## Next steps

Once these prerequisites are in place, proceed to the [proof of value process](../../../user-documentation/moderne-platform/getting-started/proof-of-value.md) to start running recipes against your code.
