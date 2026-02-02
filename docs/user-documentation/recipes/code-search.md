---
sidebar_label: Code search
description: Fast indexed code search for finding patterns across repositories.
---

# Code search

Code search provides fast, indexed search across your entire codebase. Built on the same technology that powers Sourcegraph's code search, it enables sub-second search times even across thousands of repositories.

## Why use code search

Traditional text search tools struggle with enterprise codebases for several reasons:

1. Linear file scanning scales poorly as repositories multiply.
2. Regular expressions without indexing are even worse (they require full file reads to evaluate patterns).
3. They lack an understanding of code structure. For example, they treat a method named `getUserById` in the same way they treat a comment that happens to mention it.

Code search addresses these challenges by building indexes during the repository build process. Once indexed, queries run against pre-computed data structures rather than raw files.

The search engine also understands code structure, so you can filter by:

* Symbol type (class, method, field)
* Visibility (public, private, protected)
* Inheritance relationships (extends, implements)
* Return types and thrown exceptions

This combination of speed and structural awareness makes exploratory queries practical (the kind of queries you wouldn't even bother attempting with grep). 

**Example**: Searching for all public methods that return a `List` across 500 repositories. A naive grep would need to read every Java file and manually parse method signatures. Code search answers the same question in under a second.

## What code search provides

Code search combines several capabilities:

* **Regular expressions** — Match patterns rather than just literal text. For example, if you search for `/get[A-Z]\w*\(\)/`, you would find method calls like `getName()` or `getValue()` without listing every variation.

* **Symbol-aware search** — Distinguish between class declarations, method calls, and variable references. You can use the `sym:` filter, then narrow by visibility (`public`, `private`, `protected`), modifiers (`static`, `final`, `abstract`), or type relationships (`extends`, `implements`, `returns`, `throws`).

* **Language filtering** — Restrict searches to specific programming languages. For example, if you use `lang:java`, your queries won't return hits from similarly-named files in other languages.

* **Structural patterns** — Find code shapes using [Comby syntax](https://comby.dev/docs/syntax-reference). For example, if you search for `struct:"try { :[body] } catch (:[ex])"`, you would find any try-catch block regardless of the specific code inside.

<details>
<summary>How it works under the hood</summary>

Code search uses **trigram indexing** to achieve its speed. Trigrams are three-character sequences extracted from your code. When you search for `@Autowired`, the engine first checks which files contain the trigrams `@Au`, `Aut`, `uto`, `tow`, `owi`, `wir`, `ire`, and `red`. This filtering typically eliminates 99% of files before any full-text matching occurs.

When you build repositories using the Moderne CLI, the build process generates Lossless Semantic Tree (LST) artifacts. The search indexing phase processes these LSTs to create trigram indexes stored alongside each repository, plus additional metadata about symbols, types, and code structure.

When you execute a query, the engine extracts trigrams from your search pattern, filters the candidate files, then performs full matching only on the remaining candidates. For symbol queries, it consults the symbol index directly rather than scanning file contents.

</details>

## Building search indexes

Search indexes are built as a post-processing step after your LST artifacts exist. Run the following command to generate indexes for a working set:

```bash
mod postbuild zoekt update /path/to/working-set
```

This command examines each repository in your working set and creates trigram indexes in the `.moderne/search/` directory. The index format is compatible with [Zoekt](https://github.com/sourcegraph/zoekt), the search engine that powers Sourcegraph. If indexes already exist and the underlying code has not changed, the command skips regeneration to save time.

To force regeneration of indexes even when they appear current, add the `--force` flag:

```bash
mod postbuild zoekt update /path/to/working-set --force
```

Once indexes exist, you can search across all repositories in the working set using the `mod search` command:

```bash
mod search /path/to/working-set "@Autowired"
```

## Query syntax

Code search supports a rich query language inspired by Sourcegraph. Queries combine content patterns with filters to express precisely what you are looking for.

### Content patterns

The simplest query is a literal string. Searching for `@Autowired` finds all occurrences of that exact text. If your search term contains spaces, wrap it in double quotes: `"public void"` matches those two words appearing together.

Regular expressions are delimited by forward slashes. The pattern `/get[A-Z]\w*\(\)/` matches method calls starting with `get` followed by a capital letter and any word characters, ending with parentheses. Common regex features like character classes, quantifiers, and alternation work as expected.

### Logical operators

You can combine search terms in different ways:

* **AND** (implicit) — If you include multiple terms, they're combined with AND. For example, `@Service getUserById` only matches files containing both.
* **OR** — If you want either term to match, use `or` or the pipe character. For example, `@Service or @Controller` matches files with either annotation.
* **NOT** — If you want to exclude something, prefix it with `-` or `not`. For example, `-test` filters out files containing `test`.
* **Grouping** — If you need to control precedence, use parentheses. For example, `(@Service or @Controller) getUserById` finds files with `getUserById` that also have either annotation.

### Filter reference

Filters narrow your search to specific files, repositories, or code elements. Each filter uses the syntax `filter:value` where the value can be a literal string, glob pattern, or in some cases a regular expression.

| Filter    | Aliases     | Description                                    | Example                  |
|-----------|-------------|------------------------------------------------|--------------------------|
| `file:`   | `f:`        | Match file paths using glob patterns           | `file:*Service.java`     |
| `repo:`   | `r:`        | Match repository names, optionally with branch | `repo:user-service@main` |
| `branch:` | `b:`        | Match git branch names                         | `branch:feature-*`       |
| `lang:`   | `language:` | Restrict to a programming language             | `lang:java`              |
| `case:`   |             | Control case sensitivity                       | `case:yes findById`      |
| `type:`   |             | Limit search scope                             | `type:symbol`            |
| `count:`  |             | Maximum number of results                      | `count:100`              |

The `type:` filter accepts three values: `path` searches only file names, `file` searches only file content, and `symbol` searches only the symbol index.

### Symbol filters

Symbol search finds code elements like classes, methods, and fields rather than arbitrary text. The `sym:` filter activates symbol search mode, and additional filters refine the results.

| Filter              | Description                  | Example                |
|---------------------|------------------------------|------------------------|
| `sym:` or `symbol:` | Search for symbol names      | `sym:UserRepository`   |
| `select:`           | Filter by symbol kind        | `select:symbol.METHOD` |
| `visibility:`       | Filter by access modifier    | `visibility:public`    |
| `static:`           | Filter for static modifier   | `static:yes`           |
| `final:`            | Filter for final modifier    | `final:yes`            |
| `abstract:`         | Filter for abstract modifier | `abstract:yes`         |

Visibility accepts `public`, `private`, `protected`, or `package`. The modifier filters accept `yes` or `no`.

### Type relationship filters

These filters find symbols based on their relationships in the type hierarchy.

| Filter        | Description                             | Example                 |
|---------------|-----------------------------------------|-------------------------|
| `extends:`    | Match classes extending a type          | `extends:BaseService`   |
| `implements:` | Match classes implementing an interface | `implements:Repository` |
| `returns:`    | Match methods by return type            | `returns:List`          |
| `throws:`     | Match methods by declared exceptions    | `throws:IOException`    |

Type names match against simple names, so `returns:List` matches methods returning `java.util.List`, `List<String>`, or any other List type.

### Structural patterns

Structural pattern matching finds code shapes using Comby syntax. Wrap patterns in `struct:` to activate this mode.

| Syntax      | Description                           | Example                               |
|-------------|---------------------------------------|---------------------------------------|
| `:[name]`   | Named hole matching any text          | `struct:"log.:[level](:[msg])"`       |
| `:[name:e]` | Expression hole respecting delimiters | `struct:"if (:[cond:e]) { :[body] }"` |
| `:[_]`      | Anonymous hole discarding the match   | `struct:"@Autowired :[_]"`            |
| `...`       | Ellipsis shorthand for `:[_]`         | `struct:"try { ... } catch (...)"`    |

Structural patterns are powerful for finding code idioms that cannot be expressed with regular expressions alone.

## Output modes

The `mod search` command supports two output modes.

### Rich mode (default)

Rich mode gives you a fuller, colorized output. You'll see the file path, line number, and a code snippet with matches highlighted.

```bash
mod search /path/to/working-set "@Deprecated"
```

By default, output truncates after 10 files or 50 lines. If you need more results, use the `--max` flag.

If you want to process results programmatically, rich mode also creates a run directory with structured data.

<details>
<summary>Run directory structure</summary>

Rich mode creates a run directory at `.moderne/search/` containing:

* `before/` — The original file content
* `after-fenced/` — The same files with UUID markers around each match
* `changes.json` — Machine-readable metadata

</details>

### Plain mode

Plain mode produces minimal output optimized for AI coding agents like Claude Code or Cursor. Each match appears as a single line with the file name, line number, and truncated content (100 characters max).

```bash
mod search /path/to/working-set "@Deprecated" --output plain
```

Use plain mode when integrating with automated workflows or when you don't need the visual formatting.

## Common query patterns

Here are some common patterns for real-world searches:

### Finding deprecated public APIs

If you want to find deprecated methods that are still part of your public API, this query helps prioritize cleanup work:

```bash
mod search /path/to/working-set "lang:java @Deprecated visibility:public sym:METHOD"
```

> This query restricts to Java files, looks for the `@Deprecated` annotation, then filters to public methods in the symbol index. The results show methods that external consumers might still depend on despite being marked for removal.

### Locating repository implementations by return type

If you want to understand data access patterns, you can find all repository methods that return collections:

```bash
mod search /path/to/working-set "implements:JpaRepository returns:List"
```

> This finds classes implementing Spring Data's `JpaRepository` interface that have methods returning `List`. You might extend this to find pagination-related queries:

```bash
mod search /path/to/working-set "implements:JpaRepository returns:Page"
```

### Searching for potential SQL injection patterns

If you want to find code that might be vulnerable to SQL injection, structural patterns can identify string concatenation in queries:

```bash
mod search /path/to/working-set 'struct:"createQuery(:[sql])" file:*.java'
```

> This finds calls to `createQuery` and captures the argument. Manual review of results reveals whether the SQL argument comes from concatenated strings (risky) or parameterized builders (safe).

### Finding static factory methods

If you want to find singleton accessors or cache lookups, you can combine modifier filters:

```bash
mod search /path/to/working-set "lang:java static:yes visibility:public returns:Optional sym:get"
```

> This finds public static methods with names containing `get` that return `Optional`, a common pattern for optional singleton accessors or cache lookups.

### Searching across specific branches

If you want to investigate differences between release branches, you can filter by branch name:

```bash
mod search /path/to/working-set "branch:release-* @VisibleForTesting"
```

> This searches only release branches for uses of Guava's `@VisibleForTesting` annotation, which might indicate test-only code that accidentally shipped.

### Finding REST endpoints by path pattern

If you want to audit versioned API surfaces, you can combine annotation search with file filters:

```bash
mod search /path/to/working-set 'lang:java @GetMapping file:*Controller.java "/api/v1"'
```

> This finds GET endpoints in controller files that include `/api/v1` in their path, useful when auditing versioned API surfaces.

### Locating exception handling patterns

If you want to find catch blocks that use `printStackTrace()` (which should usually be replaced with proper logging):

```bash
mod search /path/to/working-set 'struct:"catch (:[ex]) { :[_].printStackTrace()" lang:java'
```

> This finds catch blocks that call `printStackTrace()` on exceptions, which often indicates logging that should be replaced with proper logging framework calls.

### Finding all implementations of a marker interface

If you want to track which classes implement a marker interface or custom annotation:

```bash
mod search /path/to/working-set "lang:java implements:Auditable sym:class"
```

> This locates all classes implementing an `Auditable` interface, useful when reviewing audit trail coverage.

## Limitations and when to use recipes

Code search is optimized for speed. It can scan thousands of repositories in under a second. That being said, this speed comes with a few tradeoffs. Because it operates on text and indexed metadata rather than fully resolved semantic models, there are certain questions that it can't answer precisely.

For those cases, you'll want to use OpenRewrite recipes instead. Recipes have access to the full Lossless Semantic Tree (LST), which means they can resolve types, understand inheritance hierarchies, and track relationships across your codebase.

Below, you'll find common limitations and which recipes to use instead.

### Method reference searches

Code search can't find all call locations of a method by its full signature. A query like `sym:add` finds symbols named `add`, but can't distinguish between `java.util.List.add(Object)`, `java.util.Set.add(Object)`, and your own `ShoppingCart.add(Item)`.

If you need to find method invocations by their fully qualified signature, use the `org.openrewrite.java.search.FindMethods` recipe instead. It resolves types at every call site, giving you precise results that code search cannot provide.

### Type hierarchy awareness

Code search's `extends:` and `implements:` filters only match declared relationships. A search for `implements:List` finds classes that directly declare it, but misses classes that inherit `List` through a parent class.

If you need to search the full type hierarchy, use the `org.openrewrite.java.search.FindTypes` recipe. It finds all references to a type including its subtypes.

### Cross-reference and call graph analysis

Code search treats each match independently. It can't answer relational questions like "find all methods that call this method" or "find all fields that are written but never read."

If you need this kind of analysis, use OpenRewrite's [scanning recipes](https://docs.openrewrite.org/concepts-and-explanations/recipes#scanning-recipes). They can accumulate information across files. For example, a custom recipe can collect all method declarations in one pass, then identify which ones are never called in a second pass.

### Semantic equivalence

Code search matches text, not semantic meaning. The query `returns:List` matches methods whose return type literally contains `List`, but won't recognize that `ArrayList<String>` is semantically a `List`. Similarly, `@Nullable` won't find `@javax.annotation.Nullable` or `@org.jetbrains.annotations.Nullable`.

If you need type equivalence, use recipes. They resolve fully qualified types and can recognize all common variants.

### Refactoring and transformation

Code search is read-only. Once you find problematic patterns, you need recipes to fix them.

Consider finding deprecated API usage. Searching for `@Deprecated` only finds where your code _declares_ deprecations, not where you _call_ deprecated methods from libraries. The `org.openrewrite.java.search.FindDeprecatedUses` recipe resolves each method call and checks whether the target carries the annotation. Once identified, another recipe can migrate to replacement APIs.

### When to start with search

Despite these limitations, code search remains valuable as a first step in many workflows. Use it to gauge the scope of a migration before writing or running a recipe. A quick search for `extends:AbstractController` tells you how many classes inherit from a base class you plan to refactor. Searching for `struct:"new Gson()"` reveals how many places instantiate `Gson` directly versus through a factory.

Code search also helps during recipe development. When building a recipe to find a specific pattern, first use code search to locate examples in real code. These examples become test cases and help you understand the variations you need to handle. The search is fast enough for interactive exploration, while recipes provide the precision and transformation capabilities for the actual work.

## Next steps

* [Moderne CLI reference](../moderne-cli/cli-reference.md) for the full `mod search` command documentation
* [Type-aware code search](../moderne-platform/how-to-guides/introduction-to-type-aware-code-search.md) for the web-based search experience on the Moderne Platform
* [Recipe authoring fundamentals](../../hands-on-learning/fundamentals/workshop-overview.md) to learn how to build recipes for searches that require full type resolution
