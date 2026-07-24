---
description: What the Code Genome Project is, what you can do with it, and why it is launching now.
---

# Code Genome Project overview

Enterprise software is built on a vast substrate of open source and third-party components, stitched together for business functionality. Artifact repositories store that substrate, but they do not help you understand it. The [Code Genome Project](https://codegenomeproject.org) does: it sequences the open source genome and gives you the tools to splice it.

Concretely, the Code Genome Project lets you:

* **Search the open source substrate.** A trigram index over the source code of open source libraries lets you search the corpus by text or by resolved type relationships, and do reverse lookups such as every call site of a method. It is available through a web UI and through a Model Context Protocol (MCP) endpoint, so your agents can put the genome to work in their own workflows.
* **Get the tools that edit it.** A hosted catalogue of OpenRewrite recipes and the Moderne CLI, served from a Maven-compatible repository you can resolve from your builds.

Searching is open to everyone and needs no account. Downloading artifacts requires a free token, and some recipes require a customer entitlement. See [Accessing the Code Genome Project](./accessing-the-code-genome-project.md) to get set up, and [Searching recipes and open source code](./searching-the-code-genome-project.md) to start searching.

## What you can do with it

The Code Genome Project has four parts that work together:

* **Search**: run code search across the indexed open source corpus, by text or by type graph, and follow references back to where they come from.
* **Recipes**: browse the catalogue of OpenRewrite recipes and see the artifact and license for each one.
* **MCP**: connect an agent to the search endpoint and query the genome programmatically.
* **CLI**: resolve the Moderne CLI from the same repository that hosts the recipes.

## Why now

The Code Genome Project is launching now because the way OpenRewrite's recipes have been distributed is changing. Those recipes have historically been published to the Central Repository (Maven Central), operated by Sonatype. Sonatype is introducing limits on public publishing, including a cap on the number of releases per month and a size cap per release.

Those limits do not fit how OpenRewrite is built and shipped:

* A single release of OpenRewrite's primary repository exceeds both the release-count and size limits on its own.
* OpenRewrite releases frequently, often several times per week.

Rather than let another party's constraints dictate how these tools reach you, Moderne now hosts OpenRewrite's recipes and the Moderne CLI in the Code Genome Project. The recipes and CLI stay reliably available to everyone, customers get a single place to get the licensed recipes as well, and the same infrastructure powers the search and MCP capabilities above.

## What is supported today

Today, the Code Genome Project supports the **Maven** ecosystem:

* The repository serves Maven and Gradle clients over HTTP.
* The code search dataset indexes the sources of Java artifacts published to Maven Central.

## What is planned

Support for additional package ecosystems is on the roadmap. The intent is to extend both the repository and the search dataset beyond Maven to other ecosystems such as **PyPI** (Python), **npm** (JavaScript and TypeScript), and **NuGet** (.NET) over time.

If a specific ecosystem is important to your team, let your Moderne contact know so it can be prioritized.

## Next steps

* [Accessing the Code Genome Project](./accessing-the-code-genome-project.md): sign in, get a token, and configure Maven, Gradle, and MCP clients.
* [Searching recipes and open source code](./searching-the-code-genome-project.md): browse the recipe catalog and search indexed source code.
