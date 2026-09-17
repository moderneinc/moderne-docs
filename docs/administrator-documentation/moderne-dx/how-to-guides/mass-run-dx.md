---
sidebar_label: Mass run
description: Instructions for running recipes against a large number of repositories with Moderne.
---

# Mass run

Mass run is a central worker (or set of workers) that uses the Moderne CLI to run recipes across all of your repositories at scale.

With mass run, central teams and business unit leaders can do things like:

* Run search recipes to extract org-wide insights
* Push critical security fixes out to teams across the organization
* Generate reports and DevCenter dashboards

## Prerequisites

Before setting up mass run, you'll need to have [mass ingest](./mass-ingest-dx.md) configured and running.

## Getting started

For detailed instructions on how to set up mass run, please follow the directions in the [Moderne mass run example repository](https://github.com/moderneinc/mass-run-example?tab=readme-ov-file#mass-run).

## Including source code with `--with-sources`

By default, `mod git sync` only creates the directory structure and downloads LSTs. This is typically sufficient for most analysis and recipe operations. However, if you also need the source code (for example, to commit changes or create pull requests), you can do so by adding the `--with-sources` flag:

```bash
mod git sync csv /path/to/repos ./repos-lock.csv --with-sources
```

Keep in mind that you don't need to decide this up front. You can always start without sources, run recipes, and review patch files. If you later decide to act on the change, you can run `mod git sync` again with the `--with-sources` flag to overlay the source code onto your existing directory structure without disturbing the LSTs.