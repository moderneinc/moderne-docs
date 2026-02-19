---
sidebar_label: PoV prerequisites
description: What your team needs to prepare before starting a Moderne SaaS proof of value.
---

# Proof of value prerequisites

Before starting a Moderne SaaS proof of value (PoV), your team will need to prepare two environments, set up source control and artifact repository access, and open a small number of network paths. This page consolidates everything you need so nothing is missed.

## Checklist

| # | Requirement                                                                                 | Details                                                                                            |
|---|---------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| 1 | VM for [mass ingest](#mass-ingest) (2 CPU, 16 GB RAM, 32 GB disk)                           | Builds your repositories and publishes LST artifacts                                               |
| 2 | VM for the [Moderne agent](#moderne-agent) (2 CPU, 8 GB RAM, 10 GB storage)                 | Connects your environment to the Moderne SaaS tenant                                               |
| 3 | [SCM service account](#source-control-access) with read access to all in-scope repositories | Used by mass ingest to clone and build repositories                                                |
| 4 | [SCM OAuth application](#source-control-access) (GitHub App, GitLab OAuth, etc.)            | Allows users to view code and commit changes through Moderne                                       |
| 5 | [Dedicated LST artifact repository](#artifact-repository) with read/write access            | New Maven 2 repo (Artifactory/Nexus) or dedicated S3 bucket                                        |
| 6 | [Repository list](#preparing-your-repository-list) (repos.csv)                              | Generated with our [repository fetcher scripts](https://github.com/moderneinc/repository-fetchers) |
| 7 | [Network egress](#network-requirements) from the agent to `https://api.TENANT.moderne.io`   | Outbound HTTPS required; mass ingest may also need outbound access to cloud SCMs                   |

## Environments

You will need two separate environments provisioned and ready:

### Mass ingest

The mass ingest environment builds all of your repositories and creates the [LST artifacts](../../../administrator-documentation/moderne-platform/references/lossless-semantic-trees.md) that recipes run against. It runs as a Docker container. When using a self-hosted SCM, it operates entirely within your network. When using a cloud SCM (github.com, gitlab.com, etc.), it requires outbound HTTPS to that service.

| Resource | Minimum |
|----------|---------|
| CPU      | 2 cores |
| Memory   | 16 GB   |
| Disk     | 32 GB   |

These resources are sufficient for up to around 1,000 repositories. For larger organizations, mass ingest can be scaled using cloud batch services like AWS Batch or Azure Batch. The [mass ingest repository](https://github.com/moderneinc/mass-ingest-example) has scaling tiers and detailed setup instructions.

:::tip
If you have a standard base image that includes your existing certificates or other configuration, we can build on top of that. If you don't, we'll build from standard open-source base images and configure it with any certificates, credentials, and build tool settings during the first few days of the engagement.
:::

### Moderne agent

The Moderne agent is responsible for communicating between your environment and your Moderne SaaS tenant. It runs as an OCI container (Docker/Podman) or a Spring Boot executable JAR.

| Resource | Minimum                     |
|----------|-----------------------------|
| CPU      | 2 cores                     |
| Memory   | 8 GB                        |
| Storage  | 10 GB (persistent or local) |

The [agent configuration guide](../../../administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-config.md) covers detailed configuration options and deployment instructions.

## Source control access

Both environments need access to your source control management system (SCM), but for different purposes:

* **Mass ingest** needs a service account with **read access** to all in-scope repositories. This is used to clone repositories and build LSTs. Credentials are mounted at runtime and never baked into images. The [mass ingest source control credentials documentation](https://github.com/moderneinc/mass-ingest-example#source-control-credentials) has setup details.

* **The Moderne agent** needs an **OAuth application** configured in your SCM. This enables users to authenticate through the Moderne platform to view code and commit changes back to your repositories. You will need to set up an OAuth app with a callback URL of `https://TENANT.moderne.io`.

SCM-specific configuration guides:

* [GitHub](../../../administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-github.md) (GitHub App or OAuth App)
* [GitLab](../../../administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-gitlab.md)
* [Bitbucket Data Center](../../../administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-bitbucket-to-agent.md)
* [Bitbucket Cloud](../../../administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-bitbucket-cloud-to-agent.md)
* [Azure DevOps](../../../administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-azure-devops-services.md)

### Preparing your repository list

You will need a [repos.csv file](../../moderne-cli/references/repos-csv.md) that lists the repositories to ingest. The more repositories you include, the more value you will see from the PoV — Moderne's strength is working across repositories at scale. We recommend including as many repositories as a single mass ingest container can build in a day.

The easiest way to generate this file is with our [repository fetcher scripts](https://github.com/moderneinc/repository-fetchers), which are available for GitHub, GitLab, Bitbucket (Data Center and Cloud), and Azure DevOps. These scripts query your SCM's API and produce a ready-to-use `repos.csv` file.

## Artifact repository

You need a dedicated location for storing and retrieving LST artifacts. Mass ingest needs **write access** to publish LST artifacts, and the Moderne agent needs **read access** to index and retrieve them. Choose one of the following options:

### Option 1: Maven-formatted repository (Artifactory or Nexus)

Create a **new Maven 2 type repository** dedicated to LST artifacts. We strongly recommend keeping LSTs in their own repository rather than mixing them into an existing one — this makes indexing, cleanup, and troubleshooting much easier.

* For **Artifactory**, the agent uses [Artifactory Query Language (AQL)](../../../administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-artifactory-access.md) for near real-time artifact discovery.
* For **Nexus 3** or other Maven repositories, you must [enable Maven Indexer publishing](../../../administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-maven-repository-access.md#configure-the-maven-indexer) on the LST repository so the agent can discover new artifacts. The [Maven repository configuration guide](../../../administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-maven-repository-access.md) has full setup instructions.

### Option 2: Amazon S3 (or S3-compatible storage)

Create a **dedicated S3 bucket** for LST artifacts. The bucket must only contain LST artifacts — other objects in the bucket will slow down indexing as the agent scans all objects on every sync. The [S3 configuration guide](../../../administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-s3-access.md) covers authentication options (IAM role, AWS profile, or access keys) and setup instructions.

:::info
The agent also needs read access to any artifact repositories that contain **dependencies** for the projects you will be running recipes against.
:::

## Network requirements

| Component          | Destination                        | Direction                  | Required |
|--------------------|------------------------------------|----------------------------|----------|
| Mass ingest        | Your SCM (e.g., GitHub Enterprise) | Internal or outbound HTTPS | Yes      |
| Mass ingest        | Your artifact repository           | Internal only              | Yes      |
| Agent              | `https://api.TENANT.moderne.io`    | Outbound HTTPS             | Yes      |
| Agent              | Your SCM                           | Internal or outbound HTTPS | Yes      |
| Agent              | Your artifact repository           | Internal                   | Yes      |
| Developer machines | `https://TENANT.moderne.io`        | Outbound HTTPS             | Yes      |
| Developer machines | `https://login.TENANT.moderne.io`  | Outbound HTTPS             | Yes      |
| Developer machines | `https://api.TENANT.moderne.io`    | Outbound HTTPS             | Yes      |

**Mass ingest** requires egress access to all SCMs that live outside your network (if any), but otherwise requires no ingress or egress access.

**The Moderne agent** requires outbound HTTPS to your Moderne tenant's API at `https://api.TENANT.moderne.io`. If your repositories are hosted on a cloud SCM, the agent also requires outbound HTTPS to that service. Moderne never initiates inbound connections to the agent — the agent establishes the connection using the [RSocket](https://rsocket.io/) protocol over HTTPS.

If your environment requires an HTTP proxy for outbound traffic, the agent supports [proxy configuration](../../../administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-to-connect-to-moderne-via-an-http-proxy.md).

## What Moderne provides

During the PoV engagement, Moderne will provide:

* A **dedicated SaaS tenant** provisioned in your chosen cloud provider and region (takes approximately 1 hour)
* An **agent token** for authenticating the agent with the Moderne platform
* Guidance on generating the **symmetric encryption key** (AES-256) used to encrypt data in transit
* **Technical support** throughout the setup and evaluation process

## Next steps

Once these prerequisites are in place, proceed to the [proof of value process](./proof-of-value.md) to start running recipes against your code.
