---
sidebar_label: Configure telemetry
description: How Moderne DX deployments collect CLI telemetry and get it into BI by self-publishing from the CLI wrapper.
---

# Configuring telemetry for Moderne DX

The Moderne CLI generates telemetry on every LST build, recipe run, and git operation. With the Moderne Platform, a signed-in CLI pushes this telemetry to your tenant automatically, and Moderne can replicate it into storage you own. A Moderne DX deployment has no Moderne tenant to push to, so self-publishing from the CLI is the only path into BI. You collect the telemetry yourself and send it to storage you control.

The mechanics are shared with the rest of the documentation. This page is the DX-specific entry point and links to each step.

## How telemetry works

Before configuring anything, read the [full guide on CLI telemetry](../../../user-documentation/moderne-cli/how-to-guides/cli-telemetry.md) to understand what the CLI records, the `trace.json` and aggregate CSV formats, and the fields available for reporting.

## Collect: publish telemetry from the CLI wrapper

Because there is no tenant gateway to receive it, telemetry stays on each machine until you publish it. The recommended way to do this is to customize the [`modw` wrapper](../../../user-documentation/moderne-cli/how-to-guides/cli-wrapper.md) so it uploads each new trace CSV to storage you control after every command. Your platform team maintains the customized wrapper centrally and distributes it, the same way you already distribute the CLI (see [deploying the CLI from an internal Maven Central mirror](../../../user-documentation/moderne-cli/getting-started/cli-internal-mirror.md)). CLI users keep running `mod` as usual.

For the complete worked example (the `modw` and `modw.cmd` edits, the configuration file, and an upload to Amazon S3), follow [Exporting CLI telemetry to Amazon S3](../../../user-documentation/moderne-cli/how-to-guides/cli-telemetry-s3-export.md). S3 is the worked example, but the same wrapper hook can target any object store or BI endpoint.

## Query: build reports from the collected data

If you follow the worked example, the wrapper writes the same `tenant`/`source`/`type`/`year`/`month`/`day` partition layout that Moderne's platform replication produces, so you query your data exactly like a replicated tenant would. See [Querying and BI](../../moderne-platform/how-to-guides/configuring-telemetry-exports/querying-and-bi.md) for the AWS Athena walkthrough, notes for other engines such as Snowflake, BigQuery, Databricks, and Fabric, and the Moderne BI templates starter pack.

Because you own the wrapper, you can upload a different path structure if you prefer. Nothing depends on matching the replication layout except the ready-made table definitions, so if you diverge, adjust those to match the paths you actually write.

## Next steps

* [Set up mass ingest](./mass-ingest-dx.md) to keep LSTs current for the repositories you report on.
* [Learn about the architecture](../references/moderne-dx-architecture.md) and how Moderne DX compares to Moderne Platform.
