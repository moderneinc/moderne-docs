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