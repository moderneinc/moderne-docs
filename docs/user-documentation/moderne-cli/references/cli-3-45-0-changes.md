---
sidebar_label: CLI 3.45.0 changes (telemetry)
description: Telemetry and workflow tracking features in Moderne CLI 3.45.0.
---

# Moderne CLI 3.45.0 changes

Moderne CLI `3.45.0` is a fast-follow release to `3.44.0` that introduced **command workflow telemetry** for integration with internal Business Intelligence (BI) systems. Where `3.44.0` brought full organizational structure support to the CLI, `3.45.0` added visibility into how the CLI is used across your organization.

On every build, recipe run, and git operation, the CLI emits per-repository trace files and an aggregate CSV suitable for BI reporting on adoption, impact, and failure patterns.

Telemetry has evolved considerably in CLI 4.x, which ships a supported `modw` wrapper and pushes telemetry to your tenant automatically on license-lease refresh, or on demand with `mod telemetry publish`. For current, complete documentation, see:

* [CLI telemetry](../how-to-guides/cli-telemetry.md): how telemetry is generated, the trace schema, and how to collect it.
* [Configuring telemetry exports and reports](../../../administrator-documentation/moderne-platform/how-to-guides/configuring-telemetry-exports/overview.md): receiving a copy in your own cloud account and building BI reports.
* [Exporting CLI telemetry to Amazon S3](../how-to-guides/cli-telemetry-s3-export.md): a worked example of publishing telemetry yourself via the CLI wrapper.
