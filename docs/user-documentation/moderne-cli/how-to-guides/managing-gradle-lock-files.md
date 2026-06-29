---
sidebar_label: Managing Gradle lock files
description: How to update Gradle lock files after Moderne commits change dependencies.
---

# Managing Gradle lock files after Moderne commits

When Moderne recipes modify dependencies in projects that use [Gradle lock files](https://docs.gradle.org/current/userguide/dependency_locking.html), the lock file may become out of sync with the declared dependencies, causing build failures.

## Why this happens

Gradle lock files speed up dependency resolution by caching the resolved dependency graph. When a recipe changes dependencies, the lock file no longer matches the requested dependencies and the build fails.

Since dependency resolution is complex (involving dependency management plugins, constraints, catalogs, etc.), recipes cannot reliably update lock files directly. Only Gradle itself can guarantee correct lock file updates.

## Solution: Update lock files in CI

Configure your CI workflow to run `resolveAndLockAll` when Moderne creates or pushes to a branch. You can trigger this based on:

* Branch name convention
* Commit message footer matching
* Other custom triggers

Some CI/CD systems allow you to run this step only when dependency files (`*.gradle(.kts)`) change. Your CI tooling will determine how to commit the updated lock file back to the repository (skipping CI for that commit to avoid loops).

After the initial push from Moderne, the branch will be updated with a valid lock file state within moments.

For more details, see [Gradle's documentation on locking all configurations](https://docs.gradle.org/current/userguide/dependency_locking.html#sec:lock-all-configurations-in-one-build-execution).
