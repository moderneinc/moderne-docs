---
sidebar_label: CLI releases
description: The current version of the Moderne CLI and links to useful CLI documentation.
---

# CLI releases

## Latest versions

| Component             | Current version |
| --------------------- | --------------- |
| CLI version (Stable)  | 3.47.0          |
| CLI version (Staging) | 3.48.7          |

## Understanding stable and staging releases

The Moderne CLI follows a two-track release model to balance innovation with stability:

* **Staging releases** contain the latest features and improvements, including updates to the OpenRewrite framework. These releases undergo user acceptance testing and go/no-go evaluation before shipping. While thoroughly tested, staging releases may occasionally contain bugs as new features are developed and integrated.

* **Stable releases** are staging releases that have been validated through extended production usage, particularly for LST (Lossless Semantic Tree) integrity. The promotion process involves running mass ingestion on diverse repositories and validating that flagship recipes execute successfully without degradation.

### Why two release tracks exist

The dual-track approach exists primarily to protect production LST generation at scale. Since LST production for large organizations can take several days, and rebuilding after an integrity failure would cause multi-day outages, we validate staging releases extensively before promoting them to stable. 

This validation includes:

* Running OSS tenant mass-ingestion and monitoring failure ratios (typically 2+ days)
* Executing flagship recipes (migrations, vulnerability remediations, code analytics) across diverse repositories
* Monitoring for issues that only manifest at scale (such as Gradle daemon issues)

## When to use each version

### Use stable releases for:

* **Production mass ingestion in SaaS deployments** - Critical for maintaining LST integrity
* **Any production pipeline where LST integrity is paramount** - When rebuilding would be costly

### Use staging releases for:

* **Local developer usage** - Recommended to access the latest features and improvements
* **On-premise mass run pipelines** - No lasting harm from potential issues; you can always rerun with a different version
* **Testing new features** - Get early access to new capabilities
* **Non-production LST generation** - Test staging features at scale without impacting production

## Handling issues

If you encounter issues with a staging release:

1. Report the issue to the Moderne team
2. Downgrade to an earlier version (either the stable release or a previous staging release)
3. Check release notes for any "not recommended" staging versions

Remember that the Moderne CLI is a developer tool designed to complement your SDLC, not a mission-critical production system. Any released CLI version is recommended for local usage, and issues can be resolved by reporting and downgrading without lasting impact.

## Additional reading

* [How to update to the latest version of the CLI](../user-documentation/moderne-cli/how-to-guides/cli-upgrade.md)
* [Moderne CLI reference docs](../user-documentation/moderne-cli/cli-reference.md)
* [CLI / DX changelog](./cli-dx.md)
