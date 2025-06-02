---
sidebar_label: Mass ingest
description: Instructions for ingesting a large number of repositories with Moderne.
---

# Mass ingest

One of the first steps of integrating your code with Moderne is setting up a pipeline that builds and publishes [LST](../../moderne-platform/references/lossless-semantic-trees.md) artifacts to an artifact repository that you control.

To do this, we recommend that you set up a Docker image to pull the CLI, configure it, build the LSTs, and publish said artifacts. You would then run this image on a schedule (typically once per day) so that Moderne can have the latest LST artifacts available.

For detailed instructions on how to set up ingestion, please follow the directions in the [Moderne mass ingest example repository](https://github.com/moderneinc/mass-ingest-example/blob/main/README.md). You may also find it useful to check out [our documentation on creating a repos.csv file](../../references/repos-csv.md).