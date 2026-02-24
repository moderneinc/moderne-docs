---
sidebar_label: Moderne Trigrep
description: Fast trigram-indexed code search for finding patterns across repositories.
---

# Moderne Trigrep

Moderne Trigrep provides fast, indexed search across your entire codebase, delivering sub-second search times even across thousands of repositories. It operates within the context of a Moderne organization, so you can scope searches to specific business units, teams, or application portfolios.

Moderne Trigrep supports [Sourcegraph query syntax](https://sourcegraph.com/docs/code-search/queries) and [Comby structural patterns](https://comby.dev/docs/syntax-reference), so AI models already trained on those tools can use Moderne Trigrep without learning a new query language. Beyond standard Sourcegraph filters, Moderne Trigrep adds Java-specific semantic filters like `visibility:`, `extends:`, and `implements:` powered by Lossless Semantic Tree (LST) metadata.

Search results can feed directly into OpenRewrite recipe execution, allowing you to use cheap text searches as prefilters for expensive code transformations.

## Why use Moderne Trigrep

Traditional text search tools struggle with enterprise codebases for several reasons:

1. Linear file scanning scales poorly as repositories multiply.
2. Regular expressions without indexing are even worse (they require full file reads to evaluate patterns).
3. They lack an understanding of code structure. For example, they treat a method named `getUserById` in the same way they treat a comment that happens to mention it.

**Moderne Trigrep addresses these challenges** by building trigram indexes during the repository build process. Once indexed, queries run against pre-computed data structures rather than raw files.

The search engine also understands code structure, so you can filter by:

* Symbol type (class, method, field)
* Visibility (public, private, protected)
* Inheritance relationships (extends, implements)
* Return types and thrown exceptions

This combination of speed and structural awareness makes exploratory queries practical (the kind of queries you wouldn't even bother attempting with grep).

For example, consider the situation where you want to search for all public methods that return a `List` across 500 repositories. A naive `grep` run would need to read every Java file and manually parse method signatures. Moderne Trigrep, on the other hand, answers the same question in under a second.

## Getting started

To get started with Moderne Trigrep, you'll first need to sync an organization to your local machine and then build the indexes on it. After that, you can search across all of the repositories in the working set:

```bash
# Sync the Spring organization to the working-set directory
mod git sync moderne working-set --organization Spring

# Build the indexes on every repository in the working-set directory
mod postbuild zoekt update working-set

# Search for the term "KafkaTemplate" across them all
mod search working-set "KafkaTemplate"
```

Below, we'll dive into various ways you can refine your searches based on your needs.

## Three ways to search

Moderne Trigrep supports three query paradigms, each suited to different tasks. You can combine them freely in a single search.

### Literal and Sourcegraph-style queries

The simplest searches are literal text matches. For example, searching for `System.out.println` finds _every_ occurrence of that _exact_ string.

To refine your search, you can combine terms with boolean logic:

* **AND** (implicit) — Multiple terms are combined with AND. For example, `@Service getUserById` only matches files containing both.
* **OR** — Use `or` for either term to match. For example, `@Service or @Controller` matches files with either annotation.
* **NOT** — Prefix with `-` to exclude. For example, `-test` filters out files containing `test`.
* **Grouping** — Parentheses control precedence. For example, `(@Service or @Controller) getUserById` finds files with `getUserById` that also have either annotation.

You can also combine literal searches with [filters](#filters) to narrow results by file path, repository, language, or Java-specific properties like visibility and inheritance.

<details>
<summary>Common literal queries</summary>

| Category     | Command                                                         | What it finds                                             |
|--------------|-----------------------------------------------------------------|-----------------------------------------------------------|
| Logging      | `mod search working-set "System.out.println"`                   | Console output that should use a logger                   |
| Logging      | `mod search working-set "e.printStackTrace()"`                  | Exception handling that swallows stack traces             |
| Logging      | `mod search working-set "log.debug"`                            | Debug logging (useful for auditing verbosity)             |
| Spring       | `mod search working-set "@Autowired"`                           | Field injection (often flagged for constructor injection) |
| Spring       | `mod search working-set "@RequestMapping"`                      | Legacy request mapping annotations                        |
| Spring       | `mod search working-set "extends WebSecurityConfigurerAdapter"` | Deprecated Spring Security configuration                  |
| Spring       | `mod search working-set "@EnableWebSecurity"`                   | Security configuration entry points                       |
| Kafka        | `mod search working-set "@KafkaListener"`                       | Kafka consumer endpoints                                  |
| Kafka        | `mod search working-set "KafkaTemplate"`                        | Kafka producer usage                                      |
| Kafka        | `mod search working-set "ConsumerConfig."`                      | Consumer configuration constants                          |
| Security     | `mod search working-set "@PreAuthorize"`                        | Method-level security annotations                         |
| Security     | `mod search working-set "BCryptPasswordEncoder"`                | Password encoding implementations                         |
| Security     | `mod search working-set "csrf().disable()"`                     | Disabled CSRF protection                                  |
| Security     | `mod search working-set "permitAll()"`                          | Open endpoints without authentication                     |
| Cryptography | `mod search working-set 'getInstance("SHA-1")'`                 | Weak hash algorithms                                      |
| Cryptography | `mod search working-set 'getInstance("MD5")'`                   | Broken hash algorithms                                    |
| Cryptography | `mod search working-set 'getInstance("DES")'`                   | Weak encryption algorithms                                |
| Cryptography | `mod search working-set "SecureRandom"`                         | Cryptographic random number generation                    |

</details>

### Regular expressions

When literal matching isn't enough, you can use regular expressions to match patterns rather than exact text. To do so, wrap your pattern in forward slashes. For example, `/log\.(info|debug|warn)\(/` finds logging calls at any of three levels.

Moderne Trigrep optimizes regex searches by extracting literal fragments from your pattern to narrow down candidate files first, so most regex searches are nearly as fast as literal ones.

<details>
<summary>Common regex queries</summary>

| Category                        | Command                                                                    | What it finds                          |
|---------------------------------|----------------------------------------------------------------------------|----------------------------------------|
| Logging                         | `mod search working-set '/log\.(trace\|debug\|info\|warn\|error)\(/'`      | All SLF4J/Logback logging calls        |
| Spring                          | `mod search working-set '/Logger\.(getLogger\|getAnonymousLogger)/'`       | Logger instantiation                   |
| Spring                          | `mod search working-set '/@(Get\|Post\|Put\|Delete\|Patch)Mapping/'`       | REST endpoint annotations              |
| Spring                          | `mod search working-set '/@Value\("\$\{[^}]+\}"\)/'`                       | Property injection with SpEL           |
| Spring                          | `mod search working-set '/@(Service\|Repository\|Component\|Controller)/'` | Spring stereotype annotations          |
| Spring                          | `mod search working-set '/spring\.(datasource\|jpa\|security)\./'`         | Spring configuration properties        |
| Kafka                           | `mod search working-set '/kafka\.(bootstrap\|consumer\|producer)\./'`      | Kafka configuration properties         |
| Kafka                           | `mod search working-set '/@KafkaListener\([^)]*topics/'`                   | Kafka listeners with topic definitions |
| Kafka                           | `mod search working-set '/ProducerRecord<[^>]+>/'`                         | Typed Kafka producer records           |
| Security                        | `mod search working-set '/password\s*=\s*"[^"]+"/'`                        | Hardcoded passwords                    |
| Security                        | `mod search working-set '/(api[_-]?key\|apikey)\s*[:=]/'`                  | API key assignments                    |
| Cryptography                    | `mod search working-set '/Cipher\.getInstance\("[^"]+"\)/'`                | Cipher algorithm selection             |
| Cryptography                    | `mod search working-set '/MessageDigest\.getInstance\("(MD5\|SHA-1)"\)/'`  | Weak digest algorithms                 |
| PQC (Post-Quantum Cryptography) | `mod search working-set '/ML-KEM-(512\|768\|1024)/'`                       | NIST ML-KEM parameter sets             |
| PQC                             | `mod search working-set '/ML-DSA-(44\|65\|87)/'`                           | NIST ML-DSA parameter sets             |
| PQC                             | `mod search working-set '/(SLH-DSA\|SPHINCS\+)/'`                          | Hash-based signature schemes           |

</details>

### Structural pattern matching

When you need to match code shapes that regular expressions struggle with (like balanced parentheses or nested generics), you can use structural pattern matching. Instead of working with raw text, structural matching understands code as code.

The key concept is the **hole**, written as `:[name]`. A hole matches content and optionally captures it for reference. For example, the pattern `logger.:[level](:[message])` matches any logger call, capturing the log level and message separately. Unlike the regex equivalent, this correctly handles nested parentheses in the message argument.

You can use typed holes to constrain what they match:

* `:[name:e]` matches a syntactically complete expression, respecting balanced parentheses, brackets, and braces. For example, `doSomething(:[args:e])` correctly matches `doSomething(foo(bar), baz)` where a naive regex would stop at the first closing paren.
* `:[name:id]` matches a valid identifier.
* `:[name:stmt]` matches to the next semicolon or newline.
* `:[name:block]` matches balanced braces, useful for capturing method bodies or control flow blocks.
* `:[name:g]` extends expression matching to include angle brackets, handling Java generics like `List<Map<String, Integer>>`.

You can also add constraints to holes:

* `:[method~get.*]` requires the captured text to match a regex pattern.
* `:[level:!debug,trace]` excludes specific values.
* `:[port:1..65535]` constrains to a numeric range.
* `:[name?]` makes the hole optional.
* `...` or `:[_]` matches without capturing.

Structural matching also respects string and comment boundaries, so a pattern won't match text inside a string literal or comment unless you explicitly want it to.

<details>
<summary>Common structural queries</summary>

| Category     | Command                                                                       | What it finds                                         |
|--------------|-------------------------------------------------------------------------------|-------------------------------------------------------|
| Logging      | `mod search working-set 'logger.:[level](:[msg] + :[rest])'`                  | String concatenation in log calls (performance issue) |
| Logging      | `mod search working-set 'log.:[level:!trace,debug](:[args:e])'`               | Non-debug logging only                                |
| Logging      | `mod search working-set 'catch (:[ex:e] :[var:id]) { :[_].printStackTrace()'` | Catch blocks that only print stack traces             |
| Logging      | `mod search working-set 'if (log.isDebugEnabled()) :[body:block]'`            | Guarded debug logging                                 |
| Spring       | `mod search working-set '@RequestMapping(:[attrs:e])'`                        | Request mappings with any attributes                  |
| Spring       | `mod search working-set '@Autowired :[type:id] :[field:id]'`                  | Field injection candidates                            |
| Spring       | `mod search working-set '@Value(":[expr]") :[type:id] :[field:id]'`           | Value-injected fields                                 |
| Spring       | `mod search working-set 'ResponseEntity<:[type:g]>'`                          | Typed REST responses                                  |
| Spring       | `mod search working-set '@Transactional(:[attrs:e])'`                         | Transactional methods with attributes                 |
| Kafka        | `mod search working-set 'kafkaTemplate.send(:[topic:e], :[payload:e])'`       | Kafka message sends                                   |
| Kafka        | `mod search working-set '@KafkaListener(topics = :[topics:e])'`               | Kafka listener topic bindings                         |
| Kafka        | `mod search working-set 'new ProducerRecord<>(:[args:e])'`                    | Producer record construction                          |
| Kafka        | `mod search working-set 'ConsumerRecords<:[key:g], :[val:g]>'`                | Typed consumer records                                |
| Security     | `mod search working-set 'http.:[method](:[args:e]).permitAll()'`              | Endpoints with permitAll                              |
| Security     | `mod search working-set '.antMatchers(:[patterns:e]).:[auth]()'`              | Ant matcher security rules                            |
| Security     | `mod search working-set '@PreAuthorize(":[expr]")'`                           | Method security expressions                           |
| Security     | `mod search working-set 'new BCryptPasswordEncoder(:[strength:e])'`           | BCrypt with configurable strength                     |
| Cryptography | `mod search working-set 'Cipher.getInstance(:[algo:e], :[provider:e])'`       | Cipher with explicit provider                         |
| Cryptography | `mod search working-set 'KeyFactory.getInstance(:[algo:e])'`                  | Key factory algorithm selection                       |
| Cryptography | `mod search working-set 'SecretKeySpec(:[key:e], :[algo:e])'`                 | Secret key construction                               |
| PQC          | `mod search working-set 'KeyPairGenerator.getInstance(:[algo~ML-.*])'`        | ML-KEM/ML-DSA key generation                          |
| PQC          | `mod search working-set 'Signature.getInstance(:[algo:e], :[pqc~.*PQC.*])'`   | PQC signature with provider                           |

</details>

## Using search as a prefilter for recipes

Running an OpenRewrite recipe across thousands of repositories can be expensive since each one requires parsing its LST and running visitor patterns across the entire tree. If you know a recipe will only affect files containing a specific pattern, you can search first to skip repositories that don't match.

To do this, use the `--last-search` flag on the run command:

```bash
mod search working-set "KafkaTemplate or KafkaProducer or @SendTo"
mod run working-set --recipe=io.moderne.java.spring.kafka.KafkaMigration --last-search
```

The first command runs in under a second, identifying which repositories contain any Kafka producer patterns. The second command then processes only those repositories, skipping everything else. If your search found matches in 47 repositories out of 10,000 total, the recipe run processes 47 instead of 10,000.

This is particularly useful for migrations. Before converting all usages of a deprecated API, you can verify the scope with an instant search. The results also serve as a checklist for verifying that the recipe transformed every occurrence.

If you need to reference an older search rather than the most recent one, you can do so by taking advantage of the unique search identifier each search gets: `--search=<id>`.

## Output modes

The `mod search` command offers two options for how results are displayed.

### Rich mode (default)

Rich mode gives you colorized output with the file path, line number, and a code snippet with matches highlighted:

```bash
mod search working-set "@Deprecated"
```

By default, output truncates after 10 files or 50 lines. If you need more results, use the `--max` flag.

### Plain mode

Plain mode produces minimal output optimized for AI coding agents like Claude Code or Cursor. Each match appears as a single line with the file name, line number, and truncated content (100 characters max):

```bash
mod search working-set "@Deprecated" --output plain
```

Use plain mode when integrating with automated workflows or when you don't need the visual formatting.

## Query reference

This section provides a quick reference for all query operators, filters, and structural hole types.

### Boolean operators

Terms separated by space are implicitly ANDed. The `or` keyword creates disjunction. Parentheses group terms. A leading `-` negates a term.

### Filters

| Filter        | Description                             | Example                  |
|---------------|-----------------------------------------|--------------------------|
| `file:`       | Match file paths (globs or regex)       | `file:src/**/*.java`     |
| `repo:`       | Match repository names                  | `repo:user-service@main` |
| `branch:`     | Match git branch names                  | `branch:feature-*`       |
| `lang:`       | Filter by language                      | `lang:java`              |
| `case:`       | Control case sensitivity                | `case:yes findById`      |
| `sym:`        | Restrict to symbol definitions          | `sym:UserRepository`     |
| `visibility:` | Filter by access modifier               | `visibility:public`      |
| `static:`     | Filter for static modifier              | `static:yes`             |
| `final:`      | Filter for final modifier               | `final:yes`              |
| `extends:`    | Match classes extending a type          | `extends:BaseService`    |
| `implements:` | Match classes implementing an interface | `implements:Repository`  |
| `returns:`    | Match methods by return type            | `returns:List`           |
| `throws:`     | Match methods by declared exceptions    | `throws:IOException`     |

### Structural holes

| Syntax            | Description                                |
|-------------------|--------------------------------------------|
| `:[name]`         | Matches anything non-greedily              |
| `:[name:e]`       | Matches balanced expressions               |
| `:[name:id]`      | Matches identifiers                        |
| `:[name:stmt]`    | Matches statements                         |
| `:[name:block]`   | Matches balanced braces                    |
| `:[name:g]`       | Matches generics (includes angle brackets) |
| `:[name:ws]`      | Matches whitespace                         |
| `:[name~pattern]` | Constrains by regex                        |
| `:[name:!a,b]`    | Excludes specific values                   |
| `:[name?]`        | Makes the hole optional                    |
| `:[name:1..100]`  | Constrains to numeric range                |
| `...` or `:[_]`   | Matches without capturing                  |

## Limitations and when to use recipes

Moderne Trigrep is fast, but because it operates on text and indexed metadata rather than fully resolved semantic models, there are some questions it can't answer precisely. For those cases, you'll want to use OpenRewrite recipes instead. Recipes have access to the full LST, which means they can resolve types, understand inheritance hierarchies, and track relationships across your codebase.

### Method reference searches

Moderne Trigrep can't find all call locations of a method by its full signature. For example, a query like `sym:add` finds symbols named `add`, but can't distinguish between `java.util.List.add(Object)`, `java.util.Set.add(Object)`, and your own `ShoppingCart.add(Item)`.

If you need to find method invocations by their fully qualified signature, use the `org.openrewrite.java.search.FindMethods` recipe instead. It resolves types at every call site.

### Type hierarchy awareness

The `extends:` and `implements:` filters only match declared relationships. For example, a search for `implements:List` finds classes that directly declare it, but misses classes that inherit `List` through a parent class.

If you need to search the full type hierarchy, use the `org.openrewrite.java.search.FindTypes` recipe instead. It finds all references to a type including its subtypes.

### Cross-reference and call graph analysis

Moderne Trigrep treats each match independently. It can't answer relational questions like "find all methods that call this method" or "find all fields that are written but never read."

If you need this kind of analysis, use OpenRewrite's [scanning recipes](https://docs.openrewrite.org/concepts-and-explanations/recipes#scanning-recipes). They can accumulate information across files.

### Semantic equivalence

Moderne Trigrep matches text, not semantic meaning. For example, the query `returns:List` matches methods whose return type literally contains `List`, but won't recognize that `ArrayList<String>` is semantically a `List`.

If you need type equivalence, use recipes instead. They resolve fully qualified types and can recognize all common variants.

### Refactoring and transformation

Moderne Trigrep is read-only. Once you find problematic patterns, you'll need recipes to fix them.

For example, searching for `@Deprecated` only finds where your code _declares_ deprecations, not where you _call_ deprecated methods from libraries. The `org.openrewrite.java.search.FindDeprecatedUses` recipe resolves each method call and checks whether the target carries the annotation. Once identified, another recipe can migrate to replacement APIs.

### When to start with search

Despite these limitations, Moderne Trigrep is still valuable as a first step in many workflows. You can use it to gauge the scope of a migration before writing or running a recipe. For example, a quick search for `extends:AbstractController` tells you how many classes inherit from a base class you plan to refactor.

Moderne Trigrep also helps during recipe development. When you're building a recipe to find a specific pattern, you can use Moderne Trigrep to locate examples in real code first. These examples become test cases and help you understand the variations you need to handle.

<details>
<summary>How trigram indexing works</summary>

Trigram indexing has been referenced in research papers since the 1940s. In 2012, Russ Cox [described the approach](https://swtch.com/~rsc/regexp/regexp4.html) he used to build Google Code Search. Google later open-sourced [Zoekt](https://github.com/google/zoekt), a trigram-based search engine, which Sourcegraph subsequently forked. Moderne Trigrep is a from-scratch Java implementation that is compatible with Sourcegraph's query syntax but does not share any code with the Google or Sourcegraph implementations.

A trigram is a sequence of three consecutive characters. A sliding window moves across the text, extracting each overlapping triple:

```
g e t M e s s a g e
└─┬─┘                 → "get"
  └─┬─┘               → "etM"
    └─┬─┘             → "tMe"
      └─┬─┘           → "Mes"
        └─┬─┘         → "ess"
          └─┬─┘       → "ssa"
            └─┬─┘     → "sag"
              └─┬─┘   → "age"
```

During indexing, every position where each trigram appears is recorded. When you search for `getMessage`, the engine looks up the posting lists for each trigram and intersects them. Only files containing all required trigrams at consecutive positions are candidates for a full match. Most files are rejected by the index lookup alone, which is why trigram search is so fast.

Even in a codebase with millions of files, the intersection of posting lists typically narrows the search to a handful of files that need actual verification. A typical trigram index runs about 10-20% of the original source code size.

Moderne Trigrep generates its indexes from LSTs rather than raw source code, which gives the index access to symbol information, type data, and other semantic details that wouldn't be available from text alone. This is what powers semantic filters like `sym:`, `extends:`, and `visibility:`.

The index files use the `.zoekt` extension and live in the `.moderne/search/` directory within each repository. You can use the `--force` flag to regenerate indexes even if they already exist, which is useful after significant code changes.

</details>

## Further reading

Since Moderne Trigrep uses Sourcegraph-compatible query syntax and Comby-style structural patterns, documentation for those tools applies directly here:

* [Sourcegraph query syntax](https://sourcegraph.com/docs/code-search/queries) covers the full query language including boolean operators, filters, and regex patterns.
* [Comby documentation](https://comby.dev/docs/syntax-reference) explains hole types and matching semantics in depth. The [Comby playground](https://comby.live/) lets you experiment with patterns interactively.
* [How Trigram Indexing Works](https://swtch.com/~rsc/regexp/regexp4.html) by Russ Cox explains the theory behind trigram indexes.
* [Zoekt](https://github.com/google/zoekt) is the open-source trigram search engine whose index format Moderne Trigrep is compatible with.

## Next steps

* [Moderne CLI reference](../moderne-cli/cli-reference.md) for the full `mod search` command documentation.
* [Type-aware code search](../moderne-platform/how-to-guides/introduction-to-type-aware-code-search.md) for the web-based search experience on the Moderne Platform.
* [Recipe authoring fundamentals](../../hands-on-learning/fundamentals/workshop-overview.md) to learn how to build recipes for searches that require full type resolution.
