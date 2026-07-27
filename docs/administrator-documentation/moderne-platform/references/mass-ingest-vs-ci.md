---
title: Why use mass ingest instead of CI-integrated LST builds
sidebar_label: Mass ingest vs CI builds
description: Why Moderne recommends producing LST artifacts through mass ingest rather than as part of CI.
---

# Why use mass ingest instead of CI-integrated LST builds

If your repositories already build in a CI system, it's natural to wonder why you shouldn't produce their [Lossless Semantic Tree (LST)](../../../user-documentation/recipes/authoring-recipes/concepts/lossless-semantic-trees.md) artifacts there too, instead of running a separate [mass ingest](../how-to-guides/mass-ingest.md) pipeline.

In short, mass ingest gives you a complete, current set of LSTs across every repository - whereas CI builds can't. This page explains why, and walks through the objections that come up most often.

## Mass ingest keeps every repository current

The strongest reason to use mass ingest is coverage. A single mass ingest pipeline builds an LST for every repository you specify, on a consistent, predictable schedule. CI only produces an LST as a _side effect_ of a build that happens to run - which means it can't guarantee that every repository is covered (especially repositories that are important but rarely built) or that LSTs are refreshed on a regular cadence.

It's also a mistake to assume an LST is current just because your source code hasn't changed. Transitive dependencies evolve over time, so an LST built from the last CI run can drift out of date even when the code it represents is identical. A scheduled mass ingest run picks up those changes - a build triggered only by code changes does not.

At the same time, LSTs don't need to track the very latest commit to be useful. This mirrors how distributed Git already works: developers work from their own checked-out copies of the source and rebase before committing. Moderne applies the same model when it [reconciles recipe results with the latest branch head](./how-moderne-applies-changes.md), so a recipe run against an LST that is a few days old still produces correct, mergeable changes in the vast majority of cases.

Together, these mean a periodic schedule is the sweet spot: frequent enough to keep dependencies current across every repository, without the cost of rebuilding on every commit.

## Broad remediation depends on rebuilding everything

Some of the most valuable things you can do with Moderne are organization-wide: searching all of your code for a system-wide vulnerability like Log4Shell, or pushing a fix out to every affected repository at once. These depend on being able to build current LSTs for all of your repositories quickly, from one place.

This is also where dependency drift causes the most problems. Remediating a vulnerability in a transitive dependency requires LSTs whose dependencies are up-to-date, which CI-built LSTs can't guarantee. Even if you do produce LSTs in CI, you would still need a way to rebuild everything on demand.

## Mass ingest keeps your LSTs up to date with the CLI

The Moderne CLI is constantly being updated with new LST elements - especially for languages where our support is still evolving (e.g., JavaScript, Python, C#). Because mass ingest rebuilds every repository on a schedule, your LSTs pick up these updates quickly, so the recipes you run against them produce more complete, accurate results. With CI, a repository's LST is only ever as current as its last build, so one that rarely builds can quietly fall behind on an older version of the CLI. Additionally, in cases where you need to get a new CLI version across the company (be it to get a new LST element or a fix to an issue you were running into), it is a herculean effort to get every team to update their CI to take in this new CLI version.

None of this means you have to chase every release. Moderne maintains best-effort backward compatibility, so LSTs built by older CLI versions keep working, and it's rare that a new version requires a full rebuild. That being said, mass ingest keeps you close enough to current on its own - simply by rebuilding on a regular cadence.

## Common objections

A few objections come up regularly. None of them favor CI over mass ingest:

* **"I don't want to spend compute rebuilding repositories that haven't changed."** An LST isn't current just because the source is unchanged. Transitive dependencies and the CLI version still drift. Mass ingest cadence is configurable, so you can tune how often you rebuild to balance freshness against compute, but rebuilding only when source changes leaves that drift unaddressed.

* **"We already build our code in CI, so that's the natural place to build LSTs."** CI can't guarantee coverage or a consistent cadence across all of your repositories - and it leaves you without a way to rebuild everything quickly when you need to remediate a vulnerability. Mass ingest is purpose-built for both.

* **"No single central team has access to all of our repositories."** This one is valid, and we have several customers in this exact situation. But the answer is still mass ingest, not CI. Each line of business can run its own mass ingest pipeline, with guidance from (and even an image/pipeline built by) a central team, so that coverage and cadence are preserved without requiring one team to access every repository.

## Additional reading

* [Set up mass ingest](../how-to-guides/mass-ingest.md) - build and publish LSTs on a schedule
* [How LST artifacts are produced](./how-lst-artifacts-are-produced.md) - what the Moderne CLI does during a build
