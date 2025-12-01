---
sidebar_label: Moderne Recipe catalog search
description: A comprehensive guide on how to effectively find recipes in the Moderne Platform.
---

# Moderne Recipe catalog search

The Moderne Platform provides a powerful unified search experience that combines natural language with precise field-based searching. This allows you to quickly find or discover recipes that are important to you.

Let's walk through the different ways you can search for recipes to get the most out of the Moderne Platform.

## Natural language search

The recipe search understands natural language queries, making it easy to discover recipes even when you don't know their exact names. You can approach searching in several intuitive ways:

### Ask questions

Frame your search as a question to discover recipes that address your needs:

* "How can I make my code more secure?"
* "What can help me upgrade Spring?"
* "How do I find vulnerable dependencies?"

### Use keywords

Enter relevant keywords to find recipes related to specific technologies or concepts:

* "JUnit"
* "Jakarta"
* "Security"
* "Performance"

### Express intent

Describe what you want to accomplish:

* "I want to upgrade Spring"
* "Migrate from JUnit 4 to JUnit 5"
* "Fix common code issues"

## Precise search techniques

When you know exactly what you're looking for or want to filter results more precisely, you can use do the following:

### Search by recipe ID

Use the `id:` prefix to search by the exact recipe identifier:

* `id:org.openrewrite.java.dependencies.DependencyVulnerabilityCheck`
* `id:org.openrewrite.staticanalysis.CommonStaticAnalysis`

Note: When using the `id:` prefix, wrap the ID in quotes if it contains special characters.

### Search by tags

Find recipes with specific tags:

* `tags:"RSPEC-2204"` - finds all recipes with this specific tag
* `tags:"CVE"` - finds recipes related to CVE fixes

## Search tips and best practices

* **Combine approaches**: You can mix natural language with precise search techniques. For example, start with a natural language query to explore, then refine with specific fields.

* **Quote multi-word phrases**: When searching for exact matches with spaces, always use quotes: `"Find and fix"` rather than `Find and fix`.

* **No spaces after colons**: When using field searches (id:, tags:, etc.), don't put a space between the colon and the search term.

* **Start broad, then narrow**: If you're not finding what you need, start with broader keywords and then add more specific terms to refine your results.

* **Use autocomplete suggestions**: The search interface provides suggestions as you type, which can help you discover related recipes and refine your search.
