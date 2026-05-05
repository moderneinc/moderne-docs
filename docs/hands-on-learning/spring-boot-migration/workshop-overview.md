---
sidebar_label: Workshop overview
description: A high-level overview of the Spring Boot migration workshop.
---

# Overview: Preparing for Spring Boot migration

Spring Boot migrations are rarely just a version bump. You need to understand your repositories, identify hidden dependencies, align build tooling, and plan release **waves** — small batches of repos upgraded together so downstream consumers can follow safely. This workshop walks you through a realistic, end-to-end prep flow using the Moderne Platform and CLI so you can move into a Spring Boot 4 migration with fewer surprises.

Throughout the workshop, you will see screenshot placeholders and collapsible **Reference output** sections. Use them as quick sanity checks to confirm you are on the right path. Do not worry if your output differs slightly (CLI versions, repository counts, and file paths can vary).

## What you'll learn

* How to perform a dry run and understand what failed
* How to find which Java and Spring Boot versions you're using
* How to plan upgrade waves using dependency data
* How to set a stable baseline — a known-good starting point where every repo runs the same Maven, Java, and Spring Boot versions — before major upgrades
* How to diagnose third-party blockers like QueryDSL with `mod search`
* How to drive an AI coding agent (with prompting and `mod search`) to author a custom OpenRewrite recipe — or install pre-built recipes if you prefer to skip the authoring step
* How to compose recipes into a freight-train and complete the migration in waves

## What you'll build

* A wave-organized workspace mirroring your portfolio's upgrade order, which you can reuse as the template for your real migration
* A hand-authored OpenRewrite recipe for QueryDSL 4 → 5 that you can commit to your organization's recipe repository
* A composite "freight-train" recipe YAML bundling prerequisites and the Spring Boot 4 upgrade — the deliverable you carry out of the workshop

:::note Freight-train recipe

A composite OpenRewrite recipe that bundles prerequisite upgrades together with the target upgrade so they apply atomically. Composition is what turns one-off recipes into reusable migration infrastructure you can run across an entire portfolio.

:::

## Prerequisites

To get the most out of this workshop, you should:

* Have intermediate Java knowledge, including Maven dependency management
* Be familiar with Spring Boot fundamentals
* Be comfortable running CLI commands and managing git changes
* Prior OpenRewrite recipe authoring is helpful but not required

Custom recipes are normally written by engineers with OpenRewrite expertise. In Module 5 you delegate that work to an AI coding agent, using prompting and `mod search` to discover what needs to change. If you prefer not to use an agent, you can install the pre-built QueryDSL recipes from the Moderne training organization — the same recipes you would have built.

You will also need:

* A [Moderne Platform](https://app.moderne.io) account with access to the **Moderne - Training** organization (your workshop facilitator will provide access)
* [Moderne CLI](../../user-documentation/moderne-cli/getting-started/cli-intro.md) (version 4.x recommended), authenticated against the Moderne Platform (`mod config moderne edit`)
* A JDK installed locally (Java 17 or higher recommended)
* Git installed locally

## Workshop modules

* [Module 1: Migration assessment](./module-1-migration-assessment.md) - Run an initial migration and gather code insight data
* [Module 2: Wave planning](./module-2-wave-planning.md) - Analyze dependencies in the platform and organize upgrade waves
* [Module 3: Establish a baseline](./module-3-establish-baseline.md) - Normalize Maven, Java, and Spring Boot versions across the portfolio
* [Module 4: Java 17 upgrade and Spring Boot 4 smoke test](./module-4-smoke-test.md) - Raise Java version to 17 and smoke test the Spring Boot 4 migration
* [Module 5: Building the QueryDSL upgrade recipe](./module-5-build-querydsl-recipe.md) - Diagnose the blocker and build a custom recipe with an AI agent — or install the pre-built recipes from the Moderne training organization
* [Module 6: Finish migration in waves](./module-6-wave-migration.md) - Compose a freight-train recipe and complete the migration in waves

Modules 4 and 5 produce the recipes that Module 6 composes into the freight-train YAML you run across the portfolio.

## Companion workshops

The two recipe-authoring activities you encounter in Module 5 — writing OpenRewrite recipes by hand and using AI agents to explore an organization and produce recipes — are each topics in their own right. Both are delivered as separate, regular-cadence workshops:

* [Fundamentals of recipe development](../fundamentals/workshop-overview.md) - Author OpenRewrite recipes yourself: declarative YAML, Refaster templates, and imperative visitors
* [Teaching AI to write better OpenRewrite recipes](../ai-recipes/workshop-overview.md) - Drive an AI agent through a plan-build-test workflow to scaffold, generate, and validate recipes

Ask your facilitator about the next scheduled session for either workshop.
