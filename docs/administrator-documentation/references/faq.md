# Frequently asked questions

## My build is broken after dependency changes when using Gradle lockfiles

Gradle has many ways to declare dependencies and their versions. The [Gradle lockfile](https://docs.gradle.org/current/userguide/dependency_locking.html) is a way to speed up dependency resolution. However, when a recipe impacts the dependencies which should be resolved, the Gradle lockfile/state/snapshot no longer matches the requested dependencies and the build will fail.

Since actual dependency resolution is very complex, a recipe cannot provide a 100% success ratio on updating lockfiles (dependency management plugin, constraints, catalogs, etc. can each impact the resolved version). Only Gradle itself can provide this guarantee.

Therefore, we recommend editing your CI workflows to [run resolveAndLockAll on the initial branch](https://docs.gradle.org/current/userguide/dependency_locking.html#sec:lock-all-configurations-in-one-build-execution) creation/push from Moderne. There are several ways you could implement this:

* Branch name convention
* Commit message footer matching
* Other custom triggers

Some CI/CD systems will even allow you to run this step only if a file declaring dependencies (`*.gradle(.kts)`) was changed. It is then CI-tooling specific how you can commit back the result of the Gradle task to the repo (skipping the CI - at least the `resolveAndLockAll` task - of that new commit).

This way, a few moments after the initial push from the platform (or DX), the branch will be updated with a valid lockfile state.
