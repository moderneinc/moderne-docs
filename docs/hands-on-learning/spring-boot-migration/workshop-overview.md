---
sidebar_label: Workshop overview
description: A high-level overview of the Spring Boot migration workshop.
---

# Overview: Preparing for Spring Boot migration

Spring Boot migrations are rarely just a version bump. You need to understand your repositories, identify hidden dependencies, align build tooling, and plan release waves so downstream services can upgrade safely. This workshop walks you through a realistic, end-to-end prep flow using the Moderne Platform and CLI so you can move into a Spring Boot 4 migration with fewer surprises.

Throughout the workshop, you will see screenshot placeholders and collapsible **Reference output** sections. Use them as quick sanity checks to confirm you are on the right path. Do not worry if your output differs slightly (CLI versions, repository counts, and file paths can vary).

## What you'll learn

* How to perform a dry run and understand what failed
* How to find which Java and Spring Boot versions you're using
* How to plan upgrade waves using dependency data
* How to set a stable baseline before major upgrades
* How to diagnose third-party blockers like QueryDSL with `mod search`
* How to build custom recipes with AI assistance

## Prerequisites

To get the most out of this workshop, you should:

* Have intermediate Java knowledge, including Maven dependency management
* Be familiar with Spring Boot fundamentals
* Be comfortable running CLI commands and managing git changes

You will also need:

* A [Moderne Platform](https://app.moderne.io) account with access to the **Moderne - Training** organization (your workshop facilitator will provide access)
* [Moderne CLI](../../user-documentation/moderne-cli/getting-started/cli-intro.md) (version 4.x recommended), authenticated against the Moderne Platform (`mod config moderne edit`)
* A JDK installed locally (Java 17 or higher recommended)
* Git installed locally
* Python 3 and [uv](https://docs.astral.sh/uv/) (optional, for the wave planning notebook in Module 2)

## Workshop modules

* [Module 1: Migration assessment](./module-1-migration-assessment.md) - Run an initial migration and gather code insight data
* [Module 2: Wave planning](./module-2-wave-planning.md) - Build LSTs, analyze dependencies, and organize upgrade waves
* [Module 3: Establish a baseline](./module-3-establish-baseline.md) - Normalize Maven, Java, and Spring Boot versions across the portfolio
* [Module 4: Raise baseline and smoke test](./module-4-smoke-test.md) - Raise the baseline and validate readiness
* [Module 5: Build the QueryDSL recipe](./module-5-build-querydsl-recipe.md) - Diagnose the blocker and build a custom recipe with AI
* [Module 6: Finish migration in waves](./module-6-wave-migration.md) - Compose a freight-train recipe and complete the migration in waves
