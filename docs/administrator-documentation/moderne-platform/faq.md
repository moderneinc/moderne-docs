---
sidebar_label: FAQ
description: Frequently asked questions related to administrating the Moderne Platform.
---

# Frequently asked questions (FAQ)

## Why do artifact scanners detect vulnerabilities in recipe artifacts/JARs?

In order to modernize and upgrade old or vulnerable code, some OpenRewrite recipe modules bundle copies of old libraries. Libraries bundled into recipe modules are never executed. That being said, these libraries are **never executed**.

OpenRewrite exercises the Java compiler internally to compile code patterns that exist in these old and/or vulnerable libraries. These patterns are then used to **match** old or vulnerable code for the sake of modernizing or repairing it.

Using a library in compilation in this way **does not trigger class initialization** in the way that reflection might, for example. In other words, code paths in libraries used in compilation are **never executed**.

As an example of this, consider the case of [rewrite-spring](https://github.com/openrewrite/rewrite-spring). It has libraries bundled inside of the [META-INF/rewrite/classpath directory](https://github.com/openrewrite/rewrite-spring/tree/main/src/main/resources/META-INF/rewrite). However, those JARs are not made into a Fat Jar or a shaded library in the traditional sense. It is not possible that by using `rewrite-spring` that one of those libraries gets called.

## Why do we need to provide a full list of repositories for the Organizations service?

We have noticed that if companies do not provide a complete list of repositories that there is confusion around the results from some recipes/data tables/visualizations. 

For instance, many companies track vulnerability remediations through Moderne. Once Moderne shows no results found for said remediation, people may believe that the vulnerability is completely fixed. However, as there are hundreds or thousands of repositories unaccounted for, the vulnerability may still exist, and more work will need to be done.

By providing a list of every repository, even if they aren't ingested into the Moderne Platform, you will be able to understand how complete an impact analysis or remediation is.

If you need help configuring your Organizations service to return all repositories, please see our [reference implementation](https://github.com/moderneinc/moderne-organizations) which uses a [repos.csv](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/repos.csv) to expose all repositories – as well as [scripts that you can use to identify those repositories in your source control](https://github.com/moderneinc/repository-fetchers).

Of course, you're also welcome to build your own service that fulfills [the GraphQL contract we provide](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/schema/organizations.graphqls).

## How does Moderne use Artifactory, and how can I reduce usage?

Artifactory is used in three different areas of the Moderne Platform:

### 1. Mass ingest

Mass ingest compiles every repository. To perform that compilation, all project dependencies must be downloaded first.

**How to limit Artifactory usage**: You can attach a persistent volume to the mass ingest process and relocate the `.m2` local Maven repository there. Over time, all dependencies will be cached locally and won't need to be re-downloaded.

### 2. Recipe loading

Your custom recipe JARs are stored in your Artifactory. In order to load them into the Moderne Platform, the agent must have access to pull them from your Artifactory instance.

If your organization wants to reduce dependency on external repositories like Maven Central, all recipe JARs (including OpenRewrite recipes) and their dependencies can be served from your Artifactory.

**How to limit Artifactory usage**: Enable the in-memory POM cache on the agent. The Moderne Platform also maintains a POM cache on the service that manages recipes.

### 3. Recipe execution

When running Maven or Gradle upgrade recipes, Moderne uses the POM or Gradle file to determine which repositories a project depends on. It then checks those repositories for available dependency versions to determine valid upgrade targets.

For example, if a recipe fixes a vulnerability in Spring Web `4.2.6` that's resolved in version `4.2.9`, but your Artifactory doesn't have `4.2.9`, Moderne won't perform the upgrade. Following the "do no harm" principle of OpenRewrite recipes, upgrades are skipped when the target version isn't available in your repositories.

**How to limit Artifactory usage**: Enable the in-memory POM cache on the agent.

## Why are Artifactory requests slow?

When Moderne experiences slowness with Artifactory, it's often because a virtual repository references at least one remote repository that is either:

* No longer accessible
* Has invalid credentials configured

We recommend working with your Artifactory team to verify that all remote repositories referenced by your virtual repositories are accessible and properly configured.
