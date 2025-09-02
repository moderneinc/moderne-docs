---
sidebar_label: CLI 3.45.0 changes (telemetry)
description: Telemetry and workflow tracking features in Moderne CLI 3.45.0.
---

# Moderne CLI 3.45.0 changes

Moderne CLI `3.45.0` is a fast-follow release to `3.44.0` that introduces **command workflow telemetry** designed for integration with internal Business Intelligence (BI) systems. This telemetry enables operational and business-level reporting across your install base.

While `3.44.0` brought full organizational structure support to the CLI, `3.45.0` focuses on helping you understand how the CLI is being used across your organization. This document covers the new telemetry features, how to configure them, and implementation details for integration with your BI systems.

## Trace files emitted from commands

Multi-repository commands now produce telemetry on a per-repository level and aggregate that telemetry into a CSV format (paired with a [Frictionless Schema](https://specs.frictionlessdata.io/)). This data is designed to be shipped to internal BI systems like ELK or pubsub sinks for reporting on activity across your install base.

Each command produces a `trace.json` file in its corresponding directory within the repository's `.moderne` folder. As you progress through a workflow, subsequent commands concatenate the columns from previous operations, maintaining a complete history of the workflow.

## What metrics are captured

The telemetry system captures comprehensive metrics about each operation, including:

* Repository clone success/failure rates
* Build times and success rates  
* Recipe execution times and outcomes
* Parse errors and source file counts
* Tool versions and configurations
* Organizational hierarchy information

This data enables you to:

* Track CLI adoption across teams
* Identify performance bottlenecks
* Monitor recipe success rates
* Understand which recipes are most commonly used
* Track error rates and common failure patterns

## Configuring telemetry publishing

The Moderne CLI doesn't directly push telemetry to BI systems due to the fact that there are too many potential destinations, and we don't want to tie the CLI to any particular system. Instead, the CLI produces CSV and schema data that's broadly consumable by a wide variety of BI systems.

### Recommended approach: wrapper script

Our recommendation for publishing telemetry is to wrap the Moderne CLI in a `mod.sh` wrapper script that's similar in function to a Maven or Gradle wrapper. This wrapper script is what you would put on the end user's `PATH`, not the Moderne CLI directly.

The wrapper script should:

1. **Optional**: Check whether the CLI version matches a minimum expected version you wish your users to be on. Either suggest or require an update depending on how opinionated you want to be about this.

2. Execute `java -jar mod.jar $@` (or the equivalent native binary) by passing forward the arguments supplied to `mod.sh` to the CLI binary.

3. Iterate over the contents of `~/.moderne/cli/trace`, posting each CSV found to your BI system. Delete the CSVs on successful post.

:::tip
Don't hesitate to engage your Moderne technical account manager or support team to help you craft the script. We're happy to help work through connecting this telemetry to your internal system(s) of record.
:::

## Integration with existing workflows

The telemetry system is designed to work seamlessly with your existing CLI workflows:

* All telemetry generation is automatic – no changes to commands or scripts required
* Trace files are generated in the background without impacting performance
* The wrapper script approach means you can add telemetry publishing to existing installations without modifying the CLI itself

## Implementation specifications for trace files

While typical CLI users don't need to understand the internal structure of trace files, this section documents the behavior for those implementing telemetry integration.

### Directory structure and trace file hierarchy

The following mockup shows how trace files are created in individual repositories, aggregated into organization directories, and ultimately copied to a central `$MODERNE_HOME` based directory that scripts can use to publish telemetry to BI systems:

```bash
~/.moderne/cli/trace
  run/
    trace-20252323213213-sl5m8.csv
    trace-20252323213213-jgvdm.csv

.moderne/
    repos-lock.csv
    sync/
      trace.csv
    build/
      20252323213213-rewrewd/
        trace.csv
    run/
      20252323213213-fdsfds/
        # Aggregated here before being copied to ~/.moderne/cli/trace. 
        # Survives post-publication cleanup in the user home dir.
        trace.csv
org/
    repo/
      .moderne/
        clone/
          trace.json
        sync/
          sync.log
        build/
          20252323213213-dabs/
            lst-ast.jar
            publish.properties
            trace.csv
            build.log
        run/                             # mod run . --recipe <RECIPE>
          20252323213213-fdsfds/
            trace.json
        apply/
          20252323213213-fdsfds/         # mod git apply . --last-recipe-run
            trace.json
        commit/                          # mod git commit . --last-recipe-run
          20252323213213-fdsfds/
            trace.json
        study/
          20252323213213-utyhrfd/        # mod study . --last-recipe-run
            trace.json
```

### Trace file workflow

Starting with `mod git sync`, if the `--with-sources` option is used, a `trace.json` will appear in each repository's `.moderne/clone` folder. There can only be one clone for a repository, so this is the only trace file that doesn't have an ID or timestamp associated with it.

When a `mod build` is performed, a `trace.json` is produced in the `.moderne/build/<BUILD_ID>` folder. This trace file contains detailed information about:

* How long builds took
* The versions of build tools that were used
* The number of source files parsed
* What parse errors there were (if any)

It then concatenates this file with all of the columns from the original clone. This concatenation means you can associate a failure to clone a repository to an ultimate failure to build that repository (since you need the clone to be successful in order to build).

When a `mod run` is performed, a `trace.json` is produced in the run folder. This concatenates all the columns from the build that this run is using (which in turn concatenates the columns from clone).

### Post-recipe run operations

The next possible parts of a workflow designed to produce code changes would be:

* Applying the patch
* Possibly creating/checking out a branch (i.e., feature or fix branch)
* Committing the result

The corresponding `mod git` commands will similarly create `trace.json` files in their corresponding directories. Note that the ID that we use for such an operation (for example, apply) will match the run ID. That's because these mod git commands require either a `--last-recipe-run` or `--recipe-run` argument. They are conceptually post-recipe run commands and are always tied to a particular recipe run. The trace files for these commands will successively concatenate the columns from prior operations.

`mod study` is an alternative, non-change-producing, post-recipe run command. Since it is possible to produce multiple data tables using `mod study` with the same recipe run, the ID under the study folder will be unique and not match the run ID.

### Aggregation and cleanup

Trace files from individual repositories are aggregated at the organization level before being copied to `~/.moderne/cli/trace`. This aggregated location serves as the collection point for your wrapper script to publish telemetry to BI systems.

The aggregated trace files survive post-publication cleanup in the user home directory, ensuring you have a complete record of operations even after the CSVs have been published and deleted from the central location.
