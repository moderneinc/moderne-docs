---
sidebar_label: Code search
description: Fast trigram-based code search for finding patterns across repositories.
---

# Code search

Code search provides fast, trigram-indexed search across your entire codebase. Built on the same technology that powers Sourcegraph's code search, it enables sub-linear search times even across thousands of repositories. Instead of scanning every file linearly, trigram indexing pre-computes which files might contain your search terms, then verifies only those candidates. This transforms searches that would take minutes into operations that complete in milliseconds.

## Why use code search

Traditional text search tools struggle with enterprise codebases for several reasons. Linear file scanning scales poorly as repositories multiply, turning what should be a quick lookup into a tedious wait. Regular expressions without indexing are even worse, requiring full file reads to evaluate patterns. These tools also lack understanding of code structure, treating a method named `getUserById` the same as a comment that happens to mention it.

Code search addresses these challenges by building indexes during the initial repository build process. Once indexed, queries execute against pre-computed data structures rather than raw files. The search engine understands code semantics too, so you can filter by symbol type, visibility, inheritance relationships, and more. This combination of speed and awareness makes code search practical for the kinds of exploratory queries that would otherwise be too slow to bother with.

Consider the difference when searching for all public methods that return a `List` across 500 repositories. A naive grep would need to read every Java file, parse enough context to understand method signatures, and filter results manually. Code search answers the same question in under a second because the type information is already indexed.

## What code search provides

Code search combines several capabilities that work together to answer complex queries quickly.

Trigram indexing breaks text into three-character sequences, creating a compact index that can eliminate most files before any full-text matching occurs. A search for `@Autowired` only examines files whose trigram index confirms they contain the sequences `@Au`, `Aut`, `uto`, `tow`, `owi`, `wir`, `ire`, and `red`. This filtering typically reduces the search space by 99% or more.

Full regular expression support lets you match patterns rather than just literal text. The query `/get[A-Z]\w*\(\)/` finds method calls like `getName()` or `getValue()` without listing every variation. The indexer extracts trigrams from regex patterns where possible, so even complex patterns benefit from index acceleration.

Symbol-aware search understands the difference between a class declaration, a method call, and a variable reference. You can search specifically for symbols using the `sym:` filter, then narrow further by visibility (`public`, `private`, `protected`), modifiers (`static`, `final`, `abstract`), or type relationships (`extends`, `implements`, `returns`, `throws`).

Language filtering restricts searches to specific programming languages, avoiding false matches in configuration files or documentation. The `lang:java` filter ensures your Java-specific queries do not return hits from similarly-named files in other languages.

Structural pattern matching uses Comby syntax to find code shapes rather than literal text. The pattern `struct:"try { :[body] } catch (:[ex])"` matches any try-catch block regardless of the specific code inside, letting you find error handling patterns across your codebase.

## How code search works

When you build repositories using the Moderne CLI, the build process generates Lossless Semantic Tree (LST) artifacts that capture the full structure of your code. These LSTs contain type information, symbol definitions, and semantic relationships that traditional text search cannot access.

The search indexing phase processes these LSTs to create trigram indexes stored alongside each repository. Each index contains the trigram postings that map three-character sequences to file locations, plus additional metadata about symbols, types, and code structure. The indexes use memory-mapped I/O for efficient access without loading entire index files into memory.

When you execute a search query, the engine first parses your query into an abstract syntax tree, then extracts trigrams from literal and regex patterns. These trigrams filter the candidate file set before any full-text matching occurs. For symbol queries, the engine consults the symbol index directly rather than scanning file contents. The final results combine matches from multiple repositories, ranked by relevance and limited according to your specified constraints.

## Building search indexes

Search indexes are built as a post-processing step after your LST artifacts exist. Run the following command to generate indexes for a working set:

```bash
mod postbuild zoekt update /path/to/working-set
```

This command examines each repository in your working set and creates trigram indexes in the `.moderne/search/` directory. The index format is compatible with Zoekt, the search engine that powers Sourcegraph. If indexes already exist and the underlying code has not changed, the command skips regeneration to save time.

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

Multiple terms in a query are combined with implicit AND. The query `@Service getUserById` matches files containing both `@Service` and `getUserById`. Explicit OR uses the `or` keyword or pipe character: `@Service or @Controller` matches files containing either term. Negation uses the minus sign or `not` keyword: `-test` excludes files containing `test`.

Parentheses group expressions to control precedence. The query `(@Service or @Controller) getUserById` finds files with `getUserById` that also contain either `@Service` or `@Controller`.

### Filter reference

Filters narrow your search to specific files, repositories, or code elements. Each filter uses the syntax `filter:value` where the value can be a literal string, glob pattern, or in some cases a regular expression.

| Filter | Aliases | Description | Example |
|--------|---------|-------------|---------|
| `file:` | `f:` | Match file paths using glob patterns | `file:*Service.java` |
| `repo:` | `r:` | Match repository names, optionally with branch | `repo:user-service@main` |
| `branch:` | `b:` | Match git branch names | `branch:feature-*` |
| `lang:` | `language:` | Restrict to a programming language | `lang:java` |
| `case:` | | Control case sensitivity | `case:yes findById` |
| `type:` | | Limit search scope | `type:symbol` |
| `count:` | | Maximum number of results | `count:100` |

The `type:` filter accepts three values: `path` searches only file names, `file` searches only file content, and `symbol` searches only the symbol index.

### Symbol filters

Symbol search finds code elements like classes, methods, and fields rather than arbitrary text. The `sym:` filter activates symbol search mode, and additional filters refine the results.

| Filter | Description | Example |
|--------|-------------|---------|
| `sym:` or `symbol:` | Search for symbol names | `sym:UserRepository` |
| `select:` | Filter by symbol kind | `select:symbol.METHOD` |
| `visibility:` | Filter by access modifier | `visibility:public` |
| `static:` | Filter for static modifier | `static:yes` |
| `final:` | Filter for final modifier | `final:yes` |
| `abstract:` | Filter for abstract modifier | `abstract:yes` |

Visibility accepts `public`, `private`, `protected`, or `package`. The modifier filters accept `yes` or `no`.

### Type relationship filters

These filters find symbols based on their relationships in the type hierarchy.

| Filter | Description | Example |
|--------|-------------|---------|
| `extends:` | Match classes extending a type | `extends:BaseService` |
| `implements:` | Match classes implementing an interface | `implements:Repository` |
| `returns:` | Match methods by return type | `returns:List` |
| `throws:` | Match methods by declared exceptions | `throws:IOException` |

Type names match against simple names, so `returns:List` matches methods returning `java.util.List`, `List<String>`, or any other List type.

### Structural patterns

Structural pattern matching finds code shapes using Comby syntax. Wrap patterns in `struct:` to activate this mode.

| Syntax | Description | Example |
|--------|-------------|---------|
| `:[name]` | Named hole matching any text | `struct:"log.:[level](:[msg])"` |
| `:[name:e]` | Expression hole respecting delimiters | `struct:"if (:[cond:e]) { :[body] }"` |
| `:[_]` | Anonymous hole discarding the match | `struct:"@Autowired :[_]"` |
| `...` | Ellipsis shorthand for `:[_]` | `struct:"try { ... } catch (...)"` |

Structural patterns are powerful for finding code idioms that cannot be expressed with regular expressions alone.

## Output modes

The `mod search` command supports two output modes optimized for different use cases.

### Rich mode

Rich mode is the default and provides a human-friendly visualization of search results. Output uses ANSI colors to highlight matches within their surrounding context. Each result shows the file path, line number, and a snippet of code with the matched text emphasized.

```bash
mod search /path/to/working-set "@Deprecated"
```

Rich mode creates a run directory at `.moderne/search/` containing structured data about the results. The `before/` subdirectory holds the original file content, `after-fenced/` contains the same files with UUID markers around each match, and `changes.json` provides machine-readable metadata. This structure enables integration with tools that process search results programmatically while still providing readable terminal output.

The output truncates after 10 files or 50 lines by default to keep results manageable. Use the `--max` flag to increase the limit when you need more results.

### Plain mode

Plain mode produces minimal output optimized for consumption by AI coding agents like Claude Code or Cursor. Each match appears as a simple line showing the file name, line number, and truncated content.

```bash
mod search /path/to/working-set "@Deprecated" --output plain
```

Output in plain mode contains no ANSI escape codes and truncates each line to 100 characters. This format parses easily and minimizes token usage when feeding results to language models. The plain output skips the run directory creation, making it faster for quick lookups.

Choose plain mode when integrating code search into automated workflows or when the visual formatting of rich mode is not needed.

## Common query patterns

The following examples demonstrate how to combine query features to answer real questions about your codebase. These patterns draw inspiration from common Sourcegraph use cases adapted for Java and enterprise codebases.

### Finding deprecated public APIs

Locating deprecated methods that are still part of your public API helps prioritize cleanup work.

```bash
mod search /path/to/working-set "lang:java @Deprecated visibility:public sym:METHOD"
```

This query restricts to Java files, looks for the `@Deprecated` annotation, then filters to public methods in the symbol index. The results show methods that external consumers might still depend on despite being marked for removal.

### Locating repository implementations by return type

Finding all repository methods that return collections helps understand data access patterns.

```bash
mod search /path/to/working-set "implements:JpaRepository returns:List"
```

This finds classes implementing Spring Data's `JpaRepository` interface that have methods returning `List`. You might extend this to find pagination-related queries:

```bash
mod search /path/to/working-set "implements:JpaRepository returns:Page"
```

### Searching for potential SQL injection patterns

Structural patterns can identify code that builds SQL queries through string concatenation rather than parameterized statements.

```bash
mod search /path/to/working-set 'struct:"createQuery(:[sql])" file:*.java'
```

This finds calls to `createQuery` and captures the argument. Manual review of results reveals whether the SQL argument comes from concatenated strings (risky) or parameterized builders (safe).

### Finding static factory methods

The combination of modifier filters locates specific patterns like singleton accessors.

```bash
mod search /path/to/working-set "lang:java static:yes visibility:public returns:Optional sym:get"
```

This finds public static methods with names containing `get` that return `Optional`, a common pattern for optional singleton accessors or cache lookups.

### Searching across specific branches

When investigating differences between release branches, filter by branch name.

```bash
mod search /path/to/working-set "branch:release-* @VisibleForTesting"
```

This searches only release branches for uses of Guava's `@VisibleForTesting` annotation, which might indicate test-only code that accidentally shipped.

### Finding REST endpoints by path pattern

Combining annotation search with symbol filters locates specific endpoint patterns.

```bash
mod search /path/to/working-set 'lang:java @GetMapping file:*Controller.java "/api/v1"'
```

This finds GET endpoints in controller files that include `/api/v1` in their path, useful when auditing versioned API surfaces.

### Locating exception handling patterns

Structural patterns excel at finding try-catch idioms.

```bash
mod search /path/to/working-set 'struct:"catch (:[ex]) { :[_].printStackTrace()" lang:java'
```

This finds catch blocks that call `printStackTrace()` on exceptions, which often indicates logging that should be replaced with proper logging framework calls.

### Finding all implementations of a marker interface

When tracking usage of marker interfaces or custom annotations, combine interface and symbol filters.

```bash
mod search /path/to/working-set "lang:java implements:Auditable sym:class"
```

This locates all classes implementing an `Auditable` interface, useful when reviewing audit trail coverage.

## Limitations and when to use recipes

Code search excels at fast, approximate matching across large codebases, but it operates primarily on text and indexed metadata rather than fully resolved semantic models. Understanding these boundaries helps you choose the right tool for each task.

### Method reference searches

Code search cannot find all call sites of a specific method by its full signature. A query like `sym:add` finds symbols named `add`, but it cannot distinguish between `java.util.List.add(Object)`, `java.util.Set.add(Object)`, and your own `ShoppingCart.add(Item)`. The indexes do not contain the full type resolution needed to answer questions like "find all places that call `String.substring(int, int)`."

When you need to find method invocations by their fully qualified signature, use the `org.openrewrite.java.search.FindMethods` recipe instead. This recipe leverages OpenRewrite's Lossless Semantic Tree (LST) to resolve types at every call site, giving you precise results that code search cannot provide. For example, finding all calls to `java.util.Collections.unmodifiableList(..)` requires the recipe approach because code search sees only the text `unmodifiableList` without knowing which `Collections` class it belongs to.

### Type hierarchy awareness

While code search provides `extends:` and `implements:` filters, these match against declared relationships only. A search for `implements:List` finds classes that directly declare `implements List`, but misses classes that implement `List` through an intermediate interface like `implements RandomAccess, List` declared on a parent class.

The LST maintains complete type attribution, so OpenRewrite recipes can answer questions about the full type hierarchy. The `org.openrewrite.java.search.FindTypes` recipe finds all references to a type including its subtypes, something code search cannot do reliably.

### Cross-reference and call graph analysis

Code search treats each match independently. It cannot answer relational questions like "find all methods that call this method" or "find all fields that are written but never read." These queries require building a call graph or data flow model that spans the entire codebase.

OpenRewrite's scanning recipes can accumulate information across files to answer these questions. A custom recipe can collect all method declarations in one pass, then identify which ones are never called in a second pass. Code search has no mechanism for this kind of multi-pass analysis.

### Semantic equivalence

Code search matches text patterns, not semantic meaning. The query `returns:List` matches methods whose return type literally contains the text `List`, but it cannot recognize that a method returning `ArrayList<String>` is semantically returning a `List`. Similarly, searching for `@Nullable` finds that exact annotation text but misses `@javax.annotation.Nullable` or `@org.jetbrains.annotations.Nullable` unless you search for each variant explicitly.

OpenRewrite recipes understand type equivalence through the LST. A recipe searching for nullable annotations can recognize all the common variants because it resolves the fully qualified type of each annotation.

### Refactoring and transformation

Code search is read-only by design. Once you find problematic patterns, you need a separate mechanism to fix them. This is where OpenRewrite recipes provide the complete solution. A recipe can both find instances of a pattern and transform them in place, handling edge cases like import management, formatting preservation, and type resolution that would be error-prone to do manually.

Consider the workflow of finding deprecated API usage. You might think to search for `@Deprecated`, but this only finds places where your own code declares deprecations, not where you call deprecated methods from third-party libraries. The deprecation annotation lives on the library's method definition, not at your call site. Finding all usages of deprecated APIs requires the `org.openrewrite.java.search.FindDeprecatedUses` recipe, which resolves each method call and checks whether the target method carries the annotation.

Once you identify deprecated usages with a recipe, migrating them to replacement APIs requires another recipe that understands both the old and new signatures, adjusts arguments as needed, and updates imports.

### When to start with search

Despite these limitations, code search remains valuable as a first step in many workflows. Use it to gauge the scope of a migration before writing or running a recipe. A quick search for `extends:AbstractController` tells you how many classes inherit from a base class you plan to refactor. Searching for `struct:"new Gson()"` reveals how many places instantiate Gson directly versus through a factory.

Code search also helps during recipe development. When building a recipe to find a specific pattern, first use code search to locate examples in real code. These examples become test cases and help you understand the variations you need to handle. The search is fast enough for interactive exploration, while recipes provide the precision and transformation capabilities for the actual work.

## Next steps

* [Moderne CLI reference](../moderne-cli/cli-reference.md) for the full `mod search` command documentation
* [Type-aware code search](../moderne-platform/how-to-guides/introduction-to-type-aware-code-search.md) for the web-based search experience on the Moderne Platform
* [Recipe authoring fundamentals](../../hands-on-learning/fundamentals/workshop-overview.md) to learn how to build recipes for searches that require full type resolution
