---
sidebar_label: Setting up mass ingest
description: Instructions for ingesting a large number of repositories with Moderne.
---

# Mass ingest

One of the first steps of integrating your code with Moderne is setting up a pipeline that builds and publishes [LST](../references/lossless-semantic-trees.md) artifacts to an artifact repository that you control.

To do this, we recommend that you set up a Docker image to pull the CLI, configure it, build the LSTs, and publish said artifacts. You would then run this image on a schedule (typically once per day) so that Moderne can have the latest LST artifacts available.

For detailed instructions on how to set up ingestion, please follow the directions in the [Moderne mass ingest example repository](https://github.com/moderneinc/mass-ingest-example/blob/main/README.md). You may also find it useful to check out our [documentation on creating a repos.csv file](../../../user-documentation/moderne-cli/references/repos-csv.md).

:::warning
If you are using **Nexus 3** as your artifact repository, the maven2 hosted repository **must** have its **layout policy set to Permissive**. Mass ingest uploads build logs alongside LSTs using paths that do not follow Maven coordinate structure, and Nexus will reject these with HTTP 400 if the layout policy is set to Strict. See the [Maven repository configuration](./agent-configuration/configure-an-agent-with-maven-repository-access.md) for details.
:::

## Next Steps

* [Configure the Moderne agent](./agent-configuration/agent-config.md)
