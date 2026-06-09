---
sidebar_label: Downloading LSTs without a Moderne tenant
description: How to publish and download LSTs through an artifact repository when you use only the Moderne CLI, with no Moderne Platform or DX tenant.
---

# Downloading LSTs without a Moderne tenant

If you use only the Moderne CLI – with no Moderne Platform or Moderne DX (Developer Experience) tenant – you can still share pre-built Lossless Semantic Trees (LSTs) across your team by publishing them to an artifact repository (such as Artifactory, a Maven-formatted repository, S3, or Azure Blob Storage) and downloading them from there. No Moderne tenant is required.

This guide explains how that works and which commands to use.

## Why `mod build` reports "No Moderne tenant configuration found"

When you run `mod build`, the CLI tries to avoid rebuilding an LST that already exists by discovering a matching, pre-built one. It can discover that LST in **two** ways:

1. **Through a Moderne tenant.** The CLI asks your connected tenant (configured with `mod config moderne`) for the latest published LST of each repository.
2. **Through a `publishUri` already recorded for the repository** – the column that `mod publish` writes into a `repos-lock.csv` file. This route uses **no tenant at all**.

If you have not configured a tenant, only the first route is unavailable, and `mod build` logs a message like:

```
Build log for org/sub-org/my-repo@main
Not checking for matching LST in Moderne because:
  * No Moderne tenant configuration found for this repository
```

This message is **informational, not an error** – `mod build` simply notes that it cannot consult a tenant and continues. To download already-published LSTs without a tenant, you use the second route: a published `repos-lock.csv`. The key point is that **`mod build` is not the command you use to download LSTs in a tenant-less setup** – `mod git sync csv` is.

:::info
The `repos-lock.csv` file is what carries each repository's published LST location (its `publishUri`). The [Creating and sharing a repos-lock.csv file](./repos-lock-csv.md) guide describes this file in depth; this page focuses on the tenant-less publish-and-download workflow that relies on it.
:::

## Producer side: build and publish LSTs

One machine (typically a CI / mass-ingest job) builds the LSTs and publishes them to your artifact repository.

### 1. Configure the artifact repository

Configure the location LSTs are **published to and downloaded from**. This is the `lsts.artifacts` configuration – distinct from `recipes.artifacts`, which is only for recipe artifacts.

```bash
mod config lsts artifacts artifactory add https://artifactory.company.com/artifactory/moderne-ingest --user lstuser --password secret1
```

S3 and Azure Blob Storage are also supported – see `mod config lsts artifacts s3 add` and `mod config lsts artifacts azure-blob add`.

### 2. Clone, build, and publish

```bash
mod git sync csv --with-sources /path/to/repos /path/to/repos.csv
mod build   /path/to/repos
mod publish /path/to/repos
```

`mod publish` uploads each LST to the artifact repository and records its location in the `publishUri` column of `repos-lock.csv`. It also uploads a merged, central `repos-lock.csv` to the root of the artifact repository (for example, `https://artifactory.company.com/artifactory/moderne-ingest/repos-lock.csv`), so consumers have a single file to point at.

## Consumer side: download the published LSTs

Anyone on the team can download the pre-built LSTs without a tenant.

### 1. Configure the same artifact repository

Downloads authenticate using the `lsts.artifacts` entry whose host matches the download URL, so configure it on the consumer machine as well:

```bash
mod config lsts artifacts artifactory add https://artifactory.company.com/artifactory/moderne-ingest --user lstuser --password secret1
```

### 2. Sync against the published `repos-lock.csv`

Point `mod git sync csv` at the published `repos-lock.csv`. The CLI reads each `publishUri` and downloads the corresponding LST directly from the artifact repository:

```bash
mod git sync csv /path/to/repos https://artifactory.company.com/artifactory/moderne-ingest/repos-lock.csv
```

By default this downloads LSTs only, which is all that's needed to run recipes. Add `--with-sources` if you also want the repositories' source code checked out:

```bash
mod git sync csv /path/to/repos https://artifactory.company.com/artifactory/moderne-ingest/repos-lock.csv --with-sources
```

The `csv` argument accepts a local path or a remote URI (HTTP(S), `s3://`, or Azure Blob), so you can also distribute the `repos-lock.csv` file however suits your team.

## Troubleshooting

* **Nothing downloads / LSTs are skipped.** The `repos-lock.csv` you sync against must have a populated `publishUri` column, which is only added by `mod publish`. If the column is missing, re-run `mod publish` on the producer side, and make sure it published to the same artifact repository you're downloading from.
* **Authentication failures on download.** Make sure the consumer has run `mod config lsts artifacts artifactory add` (or the S3 / Azure Blob equivalent) for the **same host** as the `publishUri` values. The `recipes.artifacts` configuration does not apply to LST downloads.
* **You keep seeing "No Moderne tenant configuration found."** That line comes from `mod build`. In a tenant-less setup, use `mod git sync csv` against the published `repos-lock.csv` to obtain LSTs rather than relying on `mod build` to discover them.

## Related guides

* [Creating and sharing a repos-lock.csv file](./repos-lock-csv.md)
* [mod git sync csv](../cli-reference.md#mod-git-sync-csv) and [mod config lsts artifacts artifactory add](../cli-reference.md#mod-config-lsts-artifacts-artifactory-add) in the CLI reference
* [Creating a repos.csv file](../references/repos-csv.md)
