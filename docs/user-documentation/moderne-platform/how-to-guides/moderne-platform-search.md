---
title: Moderne recipe catalog search
sidebar_label: Moderne recipe catalog search
description: A comprehensive guide on how to effectively find recipes in the Moderne Platform.
---

import VersionBanner from '@site/src/components/VersionBanner';

<VersionBanner version="v2" linkPath="/user-documentation/moderne-platform-v1/how-to-guides/moderne-platform-search" />

# Moderne recipe catalog search

The Moderne Platform search bar helps you quickly find recipes by keyword, recipe ID, or tag. When you already have a sense of what you're after, it's the fastest way to get to the right recipe.

Let's walk through the different ways you can search for recipes to get the most out of the Moderne Platform.

## Search by keyword

Enter relevant keywords to find recipes related to a specific technology or concept. The search bar matches your terms against recipe names, descriptions, and metadata, so a few well-chosen words are often enough:

* "JUnit"
* "Jakarta"
* "Security"
* "Performance"

## Search by recipe ID

Use the `id:` prefix to search by the exact recipe identifier:

* `id:org.openrewrite.java.dependencies.DependencyVulnerabilityCheck`
* `id:org.openrewrite.staticanalysis.CommonStaticAnalysis`

Note: When using the `id:` prefix, wrap the ID in quotes if it contains special characters.

## Search by tags

Find recipes with specific tags:

* `tags:"RSPEC-2204"` - finds all recipes with this specific tag
* `tags:"CVE"` - finds recipes related to CVE fixes

## Search tips and best practices

* **Quote multi-word phrases**: When searching for exact matches with spaces, always use quotes: `"Find and fix"` rather than `Find and fix`.

* **No spaces after colons**: When using field searches (id:, tags:, etc.), don't put a space between the colon and the search term.

* **Start broad, then narrow**: If you're not finding what you need, start with broader keywords and then add more specific terms to refine your results.

* **Use autocomplete suggestions**: The search interface provides suggestions as you type, which can help you discover related recipes and refine your search.

## Natural language search

While the search bar _can_ interpret natural language queries, it isn't optimized for them - so the results are often hit or miss. When you want to search for recipes via more natural language, you should use [Moddy](../../moddy/moddy-platform.md) instead. With Moddy, you can ask questions like, "How can I make my code more secure?" or "Help me upgrade to Spring Boot 4" and it will find and execute the relevant recipes for you.
