---
sidebar_label: Proof of value prerequisites
description: What your team needs to prepare before starting a Moderne DX proof of value.
---

# Proof of value (POV) prerequisites

Before starting a Moderne DX proof of value, your team will need to:

* Set up source control and artifact repository access
* Prepare a repository list

This page covers everything you need to do so nothing is missed on day one.

## Checklist

| # | Requirement                                                                                 | Details                                                                                            |
|---|---------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| 1 | [SCM service account](#source-control-access) with read access to all in-scope repositories | Used by the CLI and mass ingest to clone and build repositories                                    |
| 2 | [SCM OAuth application](#source-control-access) (GitHub App, GitLab OAuth, etc.)            | Allows users to commit changes through the Moderne CLI                                             |
| 3 | [Dedicated LST artifact repository](#artifact-repository) with read/write access            | New Maven 2 repo (Artifactory/Nexus) or dedicated S3 bucket                                        |
| 4 | [Repository list](#preparing-your-repository-list) (repos.csv)                              | Generated with our [repository fetcher scripts](https://github.com/moderneinc/repository-fetchers) |

## Source control access

You will need a source control management (SCM) service account with **read access** to all in-scope repositories. This is used by the Moderne CLI and mass ingest to clone repositories and build LSTs. Credentials are mounted at runtime and never baked into images. The [mass ingest source control credentials documentation](https://github.com/moderneinc/mass-ingest-example#source-control-credentials) has setup details.


### Preparing your repository list

You will need a [repos.csv file](../../../user-documentation/moderne-cli/references/repos-csv.md) that lists the repositories to work with. The more repositories you include, the more value you will see from the POV — Moderne's strength is working across repositories at scale.

The easiest way to generate this file is with our [repository fetcher scripts](https://github.com/moderneinc/repository-fetchers), which are available for GitHub, GitLab, Bitbucket (Data Center and Cloud), and Azure DevOps. These scripts query your SCM's API and produce a ready-to-use `repos.csv` file.

## Artifact repository

You need a dedicated location for storing and retrieving LST artifacts. Mass ingest needs **write access** to publish LST artifacts, and the CLI needs **read access** to retrieve them. Choose one of the following options:

### Option 1: Maven-formatted repository (Artifactory or Nexus)

Create a **new Maven 2 type repository** dedicated to LST artifacts. We strongly recommend keeping LSTs in their own repository rather than mixing them into an existing one — this makes cleanup and troubleshooting much easier.

* For **Nexus 3** or other Maven repositories, the repository must have its **layout policy set to Permissive** — mass ingest uploads build logs alongside LSTs using paths that do not follow Maven coordinate structure, and Nexus will reject these with HTTP 400 if the layout policy is Strict.

### Option 2: Amazon S3 (or S3-compatible storage)

Create a **dedicated S3 bucket** for LST artifacts. The bucket must only contain LST artifacts — other objects in the bucket will slow down operations as the CLI scans all objects.

## Mass ingest

While mass ingest is typically set up after the initial POV rather than during it, you may want to plan for it early. Mass ingest builds all of your repositories and creates the [LST artifacts](../../moderne-platform/references/lossless-semantic-trees.md) that recipes run against. It runs as a Docker container.

| Resource | Minimum |
|----------|---------|
| CPU      | 2 cores |
| Memory   | 16 GB   |
| Disk     | 32 GB   |

These resources are sufficient for up to ~1,000 repositories. For larger organizations, mass ingest can be scaled using cloud batch services like AWS Batch, Google Cloud Batch, or Azure Batch. See the [mass ingest documentation](../how-to-guides/mass-ingest-dx.md) for detailed setup instructions.

:::tip
If you have a standard base image that includes your existing certificates or other configuration, we can build on top of that. If you don't, we'll build from standard open-source base images and configure it with any certificates, credentials, and build tool settings during the engagement.
:::

## What Moderne provides

During the POV process, Moderne will provide:

* A **Moderne CLI license** for running recipes across your repositories
* **Technical support** throughout the setup and evaluation process

## Next steps

Once these prerequisites are in place, proceed to the [proof of value process](../../../user-documentation/moderne-platform/getting-started/proof-of-value.md) to start running recipes against your code.
