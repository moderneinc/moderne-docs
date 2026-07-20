---
description: How to browse the recipe catalog and search indexed open source code on the Code Genome Project.
---

# Searching recipes and open source code

The Code Genome Project gives you two things to search, both from
[codegenomeproject.org](https://codegenomeproject.org) and both open to everyone without an
account:

* The **recipe catalog**, so you can find OpenRewrite recipes and see the artifact and
  license for each one.
* The **code search dataset**, so you can search across the source code of indexed open
  source libraries by text or by resolved type relationships.

Searching is free and needs no token. You only need a token to *download* an artifact, as
described in [Accessing the Code Genome Project](./accessing-the-code-genome-project.md).

## Browsing the recipe catalog

The **Recipes** tab lists every recipe available in the repository. For each recipe you can
see its name and description, the Maven artifact you add to get it, and its license
(Apache 2.0, Moderne Source Available License, or Moderne proprietary).

Use the catalog to find a recipe and the artifact that provides it, then add that artifact to
your build using the snippets in the
[access guide](./accessing-the-code-genome-project.md#configuring-your-build-tools). OSS
recipes are available to anyone with a token; MSAL and proprietary recipes require a customer
entitlement.

## Searching open source code

The **Search** tab searches the code search dataset, which indexes the published sources of
open source Java libraries. Because the index is built with the same engine as the Moderne
CLI, you can search not only by text but also by resolved type relationships, such as every
call site of a method or every implementer of an interface.

Enter a query in the search bar and results stream in as matching files are found. Select any
result to view the surrounding source, and select an artifact to scope your next search to
it.

### Searching by text

Text queries match against file content:

* `LoggerFactory.getLogger` matches that literal. Literals must be at least three characters,
  because the index is trigram-based.
* Multiple terms are combined with an implicit AND, so `foo bar` requires both terms, not the
  phrase.
* `"exact phrase"` matches the quoted text, including whitespace and punctuation.
* `/re.?gex/` matches a regular expression. Regex and literal matching are case-sensitive by
  default; add `case:no` to relax it.
* Combine terms with `OR`, `AND`, `NOT`, or a leading `-`, and group with parentheses. `AND`
  binds more tightly than `OR`.

### Searching the type graph

Type-graph operators resolve against the parsed code, not just its text, so they find true
usages rather than string matches. Each takes a fully qualified name (`java.util.List`), a
simple name (`List`), a glob, or a `/regex/`:

* `ref:` finds references to a type.
* `calls:` finds call sites of a method.
* `extends:` finds subtypes of a class.
* `implements:` finds implementers of an interface.
* `returns:` finds methods that return a type.
* `throws:` finds methods that declare an exception.
* `annotated:` finds elements carrying an annotation.

For example, `ref:java.util.List` finds where `List` is used as a type, and
`calls:org.slf4j.Logger.info` finds call sites of `Logger.info`.

:::info
In globs, `*` matches within a single package segment and `..` matches any number of
packages, following the OpenRewrite and AspectJ convention rather than grep. So `..List`
matches any package, while `*.List` matches a single segment. If you think in grep, use a
`/regex/` instead, which matches against the whole fully qualified name (for example,
`/.*List/`).
:::

### Scoping and filtering a search

Filter names are lowercase, and you can combine them with any query:

* `gav:groupId:artifactId:version` scopes the search to a single artifact. Selecting an
  artifact in the results adds this filter for you.
* `lang:` restricts results by language.
* `file:` filters by file path.
* `sym:` jumps to a symbol by name.
* `content:` searches file content explicitly.

You can also change how a search runs with `case:` (case sensitivity), `type:`
(file, path, or symbol), `select:` (narrow symbol results), `count:` (maximum results), and
`patternType:` or `struct:` for Comby structural patterns.

:::tip
Press <kbd>⌘</kbd> + <kbd>/</kbd> (or <kbd>Ctrl</kbd> + <kbd>/</kbd>) in the search bar to
open the full query syntax reference, which is generated from the live grammar so it always
matches what the bar parses.
:::

## Searching programmatically

The search bar is backed by a JSON endpoint that you can call directly. A `GET` request to
`/search` on the site returns the same results:

```shell
curl "https://codegenomeproject.org/search?q=calls:org.slf4j.Logger.info&max=20"
```

You can pass `groupId`, `artifactId`, and `version` parameters (or a `gav:` token in `q`) to
scope the search to one artifact, and `max`, `offset`, and `context` to control the result
window and how many surrounding lines each match returns.

## Requesting an artifact be indexed

The dataset grows over time as artifacts are indexed. If you search for an artifact that has
not been indexed yet, it can be queued for indexing so that it becomes searchable once its
sources have been processed. Already-indexed artifacts return their results immediately.
