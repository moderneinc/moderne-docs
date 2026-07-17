---
sidebar_label: Moderne Trigrep
description: Fast trigram-indexed code search for finding patterns across repositories.
---

import ReactPlayer from '@site/src/components/VideoPlayer';

# Moderne Trigrep

Moderne Trigrep provides fast, indexed search across your entire codebase, delivering sub-second search times even across thousands of repositories. It operates within the context of a Moderne organization, so you can scope searches to specific business units, teams, or application portfolios.

Moderne Trigrep supports [Sourcegraph query syntax](https://sourcegraph.com/docs/code-search/queries) and [Comby structural patterns](https://comby.dev/docs/syntax-reference), so AI models already trained on those tools can use Moderne Trigrep without learning a new query language. Beyond standard Sourcegraph filters, Moderne Trigrep adds semantic filters like `visibility:`, `extends:`, and `implements:` powered by Lossless Semantic Tree (LST) metadata.

Search results can feed directly into OpenRewrite recipe execution, allowing you to use cheap text searches as prefilters for expensive code transformations.

<ReactPlayer className="reactPlayer" url='https://www.youtube.com/watch?v=FuOaGA7JYTc' controls="true" />

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

To get started with Moderne Trigrep, you'll first need to sync an organization to your local machine and then build the repositories. The trigram search index is produced inline by `mod build` alongside the LST artifacts. After that, you can search across all of the repositories in the working set:

```bash
# Sync the Spring organization to the working-set directory
mod git sync moderne working-set --organization Spring

# Build LSTs and trigram indexes for every repository in the working-set directory
mod build working-set

# Search for the term "KafkaTemplate" across them all
mod search working-set "KafkaTemplate"
```

Below, we'll dive into various ways you can refine your searches based on your needs.

## Three ways to search

Moderne Trigrep supports three query paradigms, each suited to different tasks. You can combine them freely in a single search.

### Literal and Sourcegraph-style queries

The simplest searches are literal text matches. For example, searching for `System.out.println` finds _every_ occurrence of that _exact_ string.

To refine your search, you can combine terms with boolean logic:

* **AND** (implicit): Multiple terms are combined with AND. For example, `@Service getUserById` only matches files containing both.
* **OR**: Use `or` for either term to match. For example, `@Service or @Controller` matches files with either annotation.
* **NOT**: Prefix with `-` to exclude. Because the CLI intercepts leading `-` as an option marker, insert `--` between the path and the query: `mod search . -- @RestController -test` finds files containing `@RestController` but not `test`.
* **Grouping**: Parentheses control precedence. For example, `(@Service or @Controller) getUserById` finds files with `getUserById` that also have either annotation.

You can also combine literal searches with [filters](#filters) to narrow results by file path, repository, language, or semantic properties like visibility and inheritance.

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

To use structural matching, add the `struct:` prefix (or its `structural:` alias) before your pattern (e.g., `mod search working-set struct:'logger.:[level](:[message])'`). Without this prefix, hole syntax is treated as literal text. In Sourcegraph mode you can also enter structural mode with `patternType:structural`, which lets bare terms in the rest of the query be parsed as Comby patterns.

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

| Category     | Command                                                                              | What it finds                                         |
|--------------|--------------------------------------------------------------------------------------|-------------------------------------------------------|
| Logging      | `mod search working-set struct:'logger.:[level](:[msg] + :[rest])'`                  | String concatenation in log calls (performance issue) |
| Logging      | `mod search working-set struct:'log.:[level:!trace,debug](:[args:e])'`               | Non-debug logging only                                |
| Logging      | `mod search working-set struct:'catch (:[ex:e] :[var:id]) { :[_].printStackTrace()'` | Catch blocks that only print stack traces             |
| Logging      | `mod search working-set struct:'if (log.isDebugEnabled()) :[body:block]'`            | Guarded debug logging                                 |
| Spring       | `mod search working-set struct:'@RequestMapping(:[attrs:e])'`                        | Request mappings with any attributes                  |
| Spring       | `mod search working-set struct:'@Autowired :[type:id] :[field:id]'`                  | Field injection candidates                            |
| Spring       | `mod search working-set struct:'@Value(":[expr]") :[type:id] :[field:id]'`           | Value-injected fields                                 |
| Spring       | `mod search working-set struct:'ResponseEntity<:[type:g]>'`                          | Typed REST responses                                  |
| Spring       | `mod search working-set struct:'@Transactional(:[attrs:e])'`                         | Transactional methods with attributes                 |
| Kafka        | `mod search working-set struct:'kafkaTemplate.send(:[topic:e], :[payload:e])'`       | Kafka message sends                                   |
| Kafka        | `mod search working-set struct:'@KafkaListener(topics = :[topics:e])'`               | Kafka listener topic bindings                         |
| Kafka        | `mod search working-set struct:'new ProducerRecord<>(:[args:e])'`                    | Producer record construction                          |
| Kafka        | `mod search working-set struct:'ConsumerRecords<:[key:g], :[val:g]>'`                | Typed consumer records                                |
| Security     | `mod search working-set struct:'http.:[method](:[args:e]).permitAll()'`              | Endpoints with permitAll                              |
| Security     | `mod search working-set struct:'.antMatchers(:[patterns:e]).:[auth]()'`              | Ant matcher security rules                            |
| Security     | `mod search working-set struct:'@PreAuthorize(":[expr]")'`                           | Method security expressions                           |
| Security     | `mod search working-set struct:'new BCryptPasswordEncoder(:[strength:e])'`           | BCrypt with configurable strength                     |
| Cryptography | `mod search working-set struct:'Cipher.getInstance(:[algo:e], :[provider:e])'`       | Cipher with explicit provider                         |
| Cryptography | `mod search working-set struct:'KeyFactory.getInstance(:[algo:e])'`                  | Key factory algorithm selection                       |
| Cryptography | `mod search working-set struct:'SecretKeySpec(:[key:e], :[algo:e])'`                 | Secret key construction                               |
| PQC          | `mod search working-set struct:'KeyPairGenerator.getInstance(:[algo~ML-.*])'`        | ML-KEM/ML-DSA key generation                          |
| PQC          | `mod search working-set struct:'Signature.getInstance(:[algo:e], :[pqc~.*PQC.*])'`   | PQC signature with provider                           |

</details>

## Choosing a query syntax

Moderne Trigrep supports two query language dialects: **Sourcegraph** and **Zoekt**. You can switch between them with the `--syntax` flag:

```bash
# Sourcegraph syntax (default), path: is a Sourcegraph alias for file:
mod search working-set 'path:*.java' @Autowired

# Zoekt syntax uses file: directly
mod search working-set --syntax zoekt 'file:*.java' @Autowired
```

The default is `sourcegraph`, which is what most online documentation and AI training data use. If you're already familiar with the original [Zoekt query language](https://github.com/google/zoekt), you can switch to `zoekt` to use its native syntax directly.

### Differences between the two syntaxes

Both dialects share the same core query features: literal search, regex, boolean operators, filters like `file:`, `repo:`, `sym:`, and all of the semantic filters (`visibility:`, `extends:`, `implements:`, etc.). The differences are mostly syntactic shortcuts that Sourcegraph adds on top of Zoekt:

| Feature                | Sourcegraph                  | Zoekt                         |
|------------------------|------------------------------|-------------------------------|
| Explicit AND keyword   | `foo AND bar`                | `foo bar` (implicit AND)      |
| Path filter alias      | `path:*.java`                | `file:*.java`                 |
| Language shorthand     | `l:java`                     | `lang:java`                   |
| Content prefix         | `content:"text"`             | `"text"` (bare literal)       |
| Pattern type switching | `patternType:regexp foo.bar` | `/foo.bar/` (slash-delimited) |
| Revision filter        | `rev:main`                   | `branch:main`                 |

### Example queries in both syntaxes

**Filter by file path:**

```bash
# Sourcegraph, path: is an alias for file:
mod search working-set 'path:*.java' @Deprecated

# Zoekt uses file: directly
mod search working-set --syntax zoekt 'file:*.java' @Deprecated
```

**Explicit AND vs implicit AND:**

```bash
# Sourcegraph supports the explicit AND keyword
mod search working-set KafkaTemplate AND @Autowired

# Zoekt allows implicit AND only (terms separated by space)
mod search working-set --syntax zoekt KafkaTemplate @Autowired
```

## Using search as a prefilter for recipes

Running an OpenRewrite recipe across thousands of repositories can be expensive since each one requires parsing its LST and running visitor patterns across the entire tree. If you know a recipe will only affect files containing a specific pattern, you can search first to skip repositories that don't match.

To do this, use the `--last-search` flag on the run command:

```bash
mod search working-set KafkaTemplate or KafkaProducer or @SendTo
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

Terms separated by space are implicitly ANDed. The `or` keyword creates disjunction. Parentheses group terms. A leading `-` negates a term (requires `--` between the path and the query; see the [NOT example above](#literal-and-sourcegraph-style-queries)).

### Filters

| Filter         | Description                                                                                                                              | Example                      |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|
| `file:`        | Match file paths (globs or regex). Aliases: `f:`, `path:` (Sourcegraph)                                                                  | `file:src/**/*.java`         |
| `repo:`        | Match repository names. Use `name@branch` to also filter by branch. Alias: `r:`                                                          | `repo:user-service@main`     |
| `branch:`      | Match git branch names. Alias: `b:`                                                                                                      | `branch:feature-*`           |
| `rev:`         | Sourcegraph-only branch/tag filter. Alias: `revision:`                                                                                   | `rev:main`                   |
| `lang:`        | Filter by language. Aliases: `language:`, `l:` (Sourcegraph)                                                                             | `lang:java`                  |
| `case:`        | Control case sensitivity (`yes`/`no`)                                                                                                    | `case:yes findById`          |
| `type:`        | Restrict matching surface: `file` (content, default), `path` (file names only), or `symbol` (symbol declarations only, for literal terms; see note below) | `type:symbol Person`         |
| `sym:`         | Match symbols by substring on their fully qualified name. Pass a FQN (`sym:java.util.Collection.add`) for a precise match; bare names (`sym:add`) match every symbol whose FQN contains the substring. At index time, each method call is also recorded under every ancestor FQN that declares its own overload of the method by name and arity (resolved through the source set's type-table chain: JDK, dependencies, and the source set's own types), so a query against an ancestor FQN matches the subtype call site. Zoekt-native; trigrep also accepts it in Sourcegraph mode. Alias: `symbol:` | `sym:UserRepository`         |
| `select:`      | Filter symbol matches by kind: `symbol.class`, `symbol.interface`, `symbol.enum`, `symbol.method`, `symbol.constructor`, `symbol.field`, `symbol.javadoc-ref` | `select:symbol.method`       |
| `count:`       | Cap total results returned by the query                                                                                                  | `count:500`                  |
| `content:`     | Search file content explicitly (Sourcegraph). Pairs with `patternType:` and disambiguates literals that look like a filter prefix        | `content:"text"`             |
| `patternType:` | Sourcegraph-only. Switch how bare terms are interpreted: `keyword` (default), `literal`, `regexp`, or `structural`                       | `patternType:regexp foo.bar` |
| `visibility:`  | Filter by access modifier: `public`, `private`, `protected`, `package` (or `package-private`), or `any` (Sourcegraph; matches everything) | `visibility:public`          |
| `static:`      | Filter for static modifier (`yes`/`no`)                                                                                                  | `static:yes`                 |
| `final:`       | Filter for final modifier (`yes`/`no`)                                                                                                   | `final:yes`                  |
| `abstract:`    | Filter for abstract modifier (`yes`/`no`)                                                                                                | `abstract:yes`               |
| `extends:`     | Match classes whose transitive ancestor chain (any `extends` link, computed at index time) includes the given type                       | `extends:BaseService`        |
| `implements:`  | Match classes whose transitive interface closure (any `implements`/`extends` link, computed at index time) includes the given interface  | `implements:Repository`      |
| `annotated:`   | Match declarations (class, method, or field) annotated with the given annotation type                                                   | `annotated:AutoConfiguration` |
| `returns:`     | Match methods by return type                                                                                                             | `returns:List`               |
| `throws:`      | Match methods by declared exceptions                                                                                                     | `throws:IOException`         |
| `ref:`         | Match where a type is used as a type (like OpenRewrite's `FindTypes`). Kind-qualify with `ref.call:`, `ref.field:`, etc. See [Reference filters](#reference-filters-ref-and-call). Alias: `references:` | `ref:java.util.List`         |
| `call:`        | Match method and constructor call sites by the called method's declaring type and name, subclass-aware. See [Reference filters](#reference-filters-ref-and-call). Alias: `calls:` | `call:java.util.List.add`    |

:::info[Which filters require symbol data]
The symbol-aware filters read from LST symbol metadata rather than raw text, which trigrep extracts from source code. They come in two groups. Declaration filters (`sym:`, `select:`, `type:symbol`, `visibility:`, `static:`, `final:`, `abstract:`) read a symbol's name, kind, and modifiers off the parse tree, so they work across all supported source languages: Java, Kotlin, Groovy, Scala, Python, JavaScript, TypeScript, Go, and C#. Type-reference filters (`extends:`, `implements:`, `annotated:`, `returns:`, `throws:`, `ref:`, `call:`) resolve types through the LST, so how much they find depends on the language's type attribution, which is most complete for Java.

Configuration and data files (XML, JSON, YAML, and the like) are indexed for text only. Literal search, regex, and the text-oriented filters (`file:`, `repo:`, `branch:`, `rev:`, `lang:`, `case:`, `content:`, `count:`, `patternType:`) work everywhere; the symbol-aware filters above do not apply to text-only files.
:::

:::info
The Sourcegraph filters `context:`, `fork:`, `archived:`, and `timeout:` are parsed but have no effect on local indexes; they emit a warning and are dropped from the query.
:::

:::info[type:symbol vs sym:]
`type:symbol` and `sym:` are not synonyms:

* `type:symbol Person` matches `Person` at symbol *declaration sites* only: class headers, method/constructor signatures, and field declarations. So `class PersonRepository`, `Person currentPerson;`, and `void savePerson(Person p)` all match, but uses inside method bodies, imports, and comments do not. This restriction applies to literal terms; regex patterns (`type:symbol /Person/`) currently bypass it and search the full file.
* `sym:Person` matches every symbol whose fully qualified name contains `Person`. That covers `Person`, `PersonRepository`, etc., plus every method and field inside them (`Person.getFirstName`, `PersonRepository.findByLastName`, ...) because each member's FQN inherits the containing class name. The match is still constrained to symbols; it won't surface string literals, comments, or other non-symbol text.

Bare `Person` is broader still: every textual occurrence including imports, comments, and string literals.
:::

:::warning[Quoting multi-token queries]
The CLI treats a single-arg query as a **literal phrase** and re-emits it quoted in the `Searching for:` line. As a result, multi-token queries wrapped in a single pair of shell quotes lose their Sourcegraph semantics and almost always return 0 matches. Examples:

* `'@Service or @Controller'` is searched as the literal phrase `@Service or @Controller` (which appears nowhere), so 0 matches.
* `'visibility:public returns:List'` is parsed as a single filter with value `public returns:List`, so it fails with `Unknown visibility: public returns:List`.
* `'KafkaTemplate -test'` is searched as the literal phrase `KafkaTemplate -test`, so 0 matches. To use `-` negation, pass terms unquoted with `--`: `mod search . -- KafkaTemplate -test`.

Pass each token as its own argument, or quote each individually:

```bash
# Works
mod search . @Service or @Controller
mod search . visibility:public returns:List
mod search . "@Service" or "@Controller"

# Fails (literal phrase)
mod search . "@Service or @Controller"
mod search . 'visibility:public returns:List'
```

Quoting a single token to protect it from the shell (e.g. `"file:**/*Test.java"` to prevent glob expansion) is fine.
:::

### Reference filters: ref: and call:

`ref:` and `call:` resolve each occurrence through the LST type tables rather than matching text, so they're subclass-aware.

**`ref:T`, where a type is used.** Every occurrence the index records carries a *kind*. Bare `ref:T` matches where `T` appears **as a type** (a written type-name position, a `new T()`, or a Javadoc link), the same surface as OpenRewrite's `FindTypes`. It deliberately leaves out references that are merely an *expression* of type `T` (a method call or field access on a `T` value), which would otherwise flood a search for a common type like `List`. Narrow or widen to specific kinds with a dotted qualifier:

| Query              | Matches                                                                                          |
|--------------------|--------------------------------------------------------------------------------------------------|
| `ref:T`            | `T` as a type: type-name positions ∪ `new T()` ∪ Javadoc links (the default; `ref.usage:` is an explicit alias) |
| `ref.type:T`       | a written type-name position only                                                                |
| `ref.new:T`        | a `new T()` constructor call                                                                      |
| `ref.doc:T`        | a Javadoc `{@link}` or `@see`                                                                     |
| `ref.call:T`       | a method call on a `T` value (by receiver / declaring type)                                       |
| `ref.field:T`      | a field access whose owner is `T`                                                                 |
| `ref.fieldtype:T`  | a field-access expression whose result type is `T` (`this.list` where `list` is a `List`)         |
| `ref.owner:T`      | members **declared in** `T` (its surface), not uses of it                                        |
| `ref.[type,call]:T`| a union of the listed kinds                                                                      |
| `ref.any:T`        | the kind-blind union of every kind                                                               |

**`call:Type.method`, where a method is called.** `call:` matches method and constructor **call sites** by the called method's declaring type and name: `call:java.util.List.add` finds every site that calls `List.add`, and `call:java.util.ArrayList.<init>` finds every `new ArrayList<>()`. Because the type closure is subclass-aware, a query against a supertype's method (`call:java.util.Collection.add`) also matches calls made through a subtype receiver. Values take the same forms as the type filters (FQN, AspectJ glob, or `/regex/`). The index records only the declaring type and method name, not argument types, so `call:` can't disambiguate overloads by parameter types; full method-signature matching belongs in a recipe's `MethodMatcher`.

### Structural holes

These holes require the `struct:` prefix (see [structural pattern matching](#structural-pattern-matching)).

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

`sym:` matches by substring on the symbol's FQN, not by full method signature. Bare names (`sym:add`) match every symbol whose FQN contains the substring, so there's no way to distinguish `java.util.List.add(Object)` from your own `ShoppingCart.add(Item)`. The `call:` filter is more precise for call sites (`call:java.util.List.add` targets calls to that method by declaring type and name, subclass-aware), but it, too, records no argument types, so overloads still can't be pinned by parameter types. An AspectJ-style pattern like `java.util.List add(..)` isn't expressible; full method-signature matching belongs in a recipe's `MethodMatcher`.

### Type hierarchy awareness

`extends:` and `implements:` are class-definition filters: they identify whether a class has a given type in its ancestor closure, not where that type (or any subtype) is referenced elsewhere in the code. The closure itself is computed at index time over the source set's full type-table chain (JDK, every dependency, and the source set's own types), so ancestry reached through third-party library types is matched.

### Cross-reference and call graph analysis

Moderne Trigrep treats each match independently. The `call:` filter finds a method's call sites, but trigrep can't chain matches into a call graph or answer relational questions like "which methods transitively reach this one" or "find all fields that are written but never read."

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

Moderne Trigrep generates its indexes from LSTs rather than raw source code, which gives the index access to symbol information, type data, and other semantic details that wouldn't be available from text alone. This is what powers semantic filters like `sym:`, `extends:`, and `visibility:`. Each symbol's related types are stored as compact V3 type-table slots (resolved at search time through the source set's type tables) rather than duplicated inline strings, so a query like `sym:`, `extends:`, or `implements:` narrows the candidate file set before any byte reads.

The index is produced inline by `mod build` as `.zoekt` shards. Each source set writes its own shard under `.moderne/build/{buildId}/sources/{sourceSet}/shard-*.zoekt`, and `mod build` then assembles them into a single repo-level index at `.moderne/build/{buildId}/index/merged-*.zoekt` (split into size-bounded chunks) with a sidecar `assembly.csv` recording per-part content digests. A `.complete` sentinel is written last, so a search racing a build sees a complete index or none, never a partial one. Each shard stores the document's content as the LST's printed form (`SourceFile.printAll()`), with a checksum to catch any drift between the printer and the index. Source code gets structured symbol extraction; configuration and data files (XML, JSON, YAML, and the like) get a content-only document where full-text trigram search works but the symbol-aware filters don't apply. To regenerate the index after significant code changes, simply re-run `mod build`.

</details>

## Further reading

Since Moderne Trigrep supports both Sourcegraph and Zoekt query syntax as well as Comby-style structural patterns, documentation for those tools applies directly here:

* [Sourcegraph query syntax](https://sourcegraph.com/docs/code-search/queries) covers the full Sourcegraph query language including boolean operators, filters, and regex patterns. This is the default syntax for `mod search`.
* [Zoekt query syntax](https://github.com/google/zoekt) documents the original Zoekt query language. Use `--syntax zoekt` to switch to this dialect.
* [Comby documentation](https://comby.dev/docs/syntax-reference) explains hole types and matching semantics in depth. The [Comby playground](https://comby.live/) lets you experiment with patterns interactively.
* [How Trigram Indexing Works](https://swtch.com/~rsc/regexp/regexp4.html) by Russ Cox explains the theory behind trigram indexes.

## Next steps

{/* Hidden until ready to share publicly: * [Try the hands-on agent tools workshop](../../hands-on-learning/agent-tools/workshop-overview.md) to practice Trigrep queries on a sample workspace. */}
* [Moderne CLI reference](../moderne-cli/cli-reference.md) for the full `mod search` command documentation.
* [Type-aware code search](../moderne-platform/how-to-guides/introduction-to-type-aware-code-search.md) for the web-based search experience on the Moderne Platform.
* [Recipe authoring fundamentals](../../hands-on-learning/fundamentals/workshop-overview.md) to learn how to build recipes for searches that require full type resolution.
