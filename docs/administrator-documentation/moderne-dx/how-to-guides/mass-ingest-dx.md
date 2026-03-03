---
sidebar_label: Mass ingest
description: Instructions for ingesting a large number of repositories with Moderne.
---

# Mass ingest

One of the first steps of integrating your code with Moderne is setting up a pipeline that builds and publishes [LST](../../moderne-platform/references/lossless-semantic-trees.md) artifacts to an artifact repository that you control.

To do this, we recommend that you set up a Docker image to pull the CLI, configure it, build the LSTs, and publish said artifacts. You would then run this image on a schedule (typically once per day) so that Moderne can have the latest LST artifacts available.

For detailed instructions on how to set up ingestion, follow the directions in the [Moderne mass ingest example repository](https://github.com/moderneinc/mass-ingest-example/blob/main/README.md). You may also want to check out the [repos.csv documentation](../../../user-documentation/moderne-cli/references/repos-csv.md).

### Including source code with `--with-sources`

By default, `mod git sync` only creates the directory structure and downloads LSTs, which is sufficient for most analysis and recipe operations. If you also need the source code (for example, to commit changes or create pull requests), add the `--with-sources` flag:

```bash
mod git sync csv /path/to/repos ./repos.csv --with-sources
```

You don't need to decide up front. You can always start without sources, run recipes, and review patch files. If you later decide to act on the changes, run `mod git sync` again with `--with-sources` to overlay the source code onto your existing directory structure without disturbing the LSTs.