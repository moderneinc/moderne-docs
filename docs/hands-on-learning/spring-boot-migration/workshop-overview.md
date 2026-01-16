---
sidebar_label: Workshop overview
description: A high-level overview of the Spring Boot migration workshop.
---

# Overview: Preparing for Spring Boot migration

Spring Boot migrations are rarely just a version bump. You need to understand your portfolio, identify hidden dependencies, align build tooling, and plan release waves so downstream services can upgrade safely. This workshop walks you through a realistic, end-to-end prep flow using the Moderne Platform and CLI so you can move into a Spring Boot 4 migration with fewer surprises.

Throughout the workshop, you will see screenshot placeholders and collapsible **Reference output** sections. Use them as quick sanity checks to confirm you are on the right path. Do not worry if your output differs slightly (for example, CLI versions, repository counts, and file paths can vary).

## What you'll learn

* How to run an initial migration dry run and interpret failures
* How to inventory Java and Spring Boot usage across a portfolio
* How to plan upgrade waves using repository dependency data
* How to establish a stable baseline before major upgrades
* How to handle third-party blockers (like QueryDSL) during a migration

## Prerequisites

To get the most out of this workshop, you should have:

* Basic Java knowledge
* A working knowledge of Maven
* Comfort running CLI commands and managing git changes

You will also need:

* The Moderne CLI (v3.54.5 or higher recommended)
* A JDK installed locally (Java 17 or higher recommended)
* Access to the Moderne Platform at [app.moderne.io](https://app.moderne.io/)

## Workshop modules

* [Module 1: Migration assessment in the Moderne Platform](./module-1-migration-assessment.md) - Run an initial migration and gather code insight data
* [Module 2: Wave planning with the Moderne CLI](./module-2-wave-planning.md) - Build LSTs, analyze dependencies, and organize upgrade waves
* [Module 3: Establish a baseline](./module-3-establish-baseline.md) - Normalize Maven, Java, and Spring Boot versions across the portfolio
* [Module 4: Java 17 upgrade and Spring Boot 4 smoke test](./module-4-java17-and-smoke-test.md) - Raise the baseline and validate readiness
* [Module 5: QueryDSL and Spring Boot 4 wave upgrades](./module-5-querydsl-and-wave-upgrades.md) - Use a custom recipe to complete the migration in waves
