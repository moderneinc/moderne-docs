---
sidebar_label: "Module 4: Trigrep"
description: Build a trigram search index with mod postbuild search index, then explore literal, regex, and structural queries across your workspace.
---

# Module 4: Trigrep

In this module, you'll build a trigram search index across the workspace from [Module 1](./module-1-cli-and-lsts.md) and explore what indexed search makes possible. You'll run literal queries, regex, and Comby-style structural patterns, and you'll see how Trigrep's Java-aware filters (`visibility:`, `extends:`, `returns:`, etc.) push beyond what `grep` can do.

For the deep reference on syntax and semantics, see [Moderne Trigrep](../../user-documentation/agent-tools/trigrep.md). This module is hands-on practice.

## Exercise 4-1: Build the search index

### Goals for this exercise

* Generate a trigram index over every repository in your workspace
* Understand what `mod postbuild search index` produces and where it's stored

### Steps

#### Step 1: Build the index

From your workspace root:

```bash
mod postbuild search index .
```

The CLI walks every repository with an LST and produces a trigram index per repo. Indexes live in `.moderne/mcp/search/` inside each repository and use the `.zoekt` extension. Index size is roughly 10-20% of the source size.

<details>
<summary>Sample output</summary>

```text
● Generating search indexes
  ...
  9% (3s)     ▶ awslabs/aws-saas-boost@main (no LST)
  9% (3s)         Skipped: no LST artifact
 18% (3s)     ▶ finos/messageml-utils@main
 18% (3s)         ✓ Indexed
 ...
100% (4s)     Done

Generated search indexes: 10 indexed, 1 skipped, 0 failed

● What to do next
    > 1 repository have no LST artifact. Run mod build first.
```

The `1 skipped` count corresponds to the same `awslabs/aws-saas-boost` repo whose LST failed to download in [Module 1](./module-1-cli-and-lsts.md). Without an LST, there's nothing to index.

</details>

:::tip
Re-run the same command after significant code changes (or after a fresh `mod build`). Add `--force` if you want to regenerate even when the index already exists.
:::

#### Step 2: Run a sanity-check search

Pick a term you'd expect in a Spring workspace:

```bash
mod search . "@RestController"
```

You should get sub-second results showing every file that mentions `@RestController`, with line numbers and a snippet. Try a few more:

```bash
mod search . "spring.datasource"
mod search . "System.out.println"
mod search . "@Autowired"
```

Notice how each search returns in well under a second, even though the workspace contains thousands of files. The index does the work.

<details>
<summary>Sample output for <code>mod search . "@RestController"</code></summary>

```text
● Searching for: @RestController
  0% (1s)     ▶ apache/maven-doxia@master
  0% (1s)         ✓ No matches
  9% (1s)     ▶ awslabs/aws-saas-boost@main
  9% (1s)         No search index
  ...
 27% (1s)     ▶ finos/spring-bot@spring-bot-master
 27% (1s)         ● File(libs/.../BotController.java)
 27% (1s)              36   @RestController
 27% (1s)              37   public class BotController {
 27% (1s)         ✓ 1 matches in 1 files
  ...
Found 12 matches in 12 files across 10 repositories.

● What to do next
    > 1 repository has no search index. Run mod postbuild search index to generate indexes from existing LSTs.
```

The `No search index` line for `awslabs/aws-saas-boost` is expected — that repo's LST didn't sync (see [Module 1 Step 2](./module-1-cli-and-lsts.md)), so the index couldn't be built. The other 10 repos searched fine.

</details>

:::tip
Zero matches just means none of these repos use the keyword — for example, the `Default` org has no Spring Kafka, no JMS, and no `@KafkaListener` annotations. Try a Spring annotation that the petclinic and spring-data-commons repos definitely use (`@Repository`, `@Transactional`, `findById`) to see plenty of hits.
:::

### Takeaways

* `mod postbuild search index` is a one-time setup step per workspace (run again after big code changes).
* Indexes are local — there's no server to manage.

---

## Exercise 4-2: Explore Trigrep's three query paradigms

### Goals for this exercise

* Use literal, regex, and structural queries on the same workspace
* Recognize when each paradigm is the right tool

### Steps

#### Step 1: Literal queries with boolean operators

Literal search supports implicit AND, explicit OR, and negation. Pass each token as its own argument so the CLI parses the query as Sourcegraph syntax instead of a literal phrase (see the warning below):

```bash
mod search . @Repository findById        # implicit AND
mod search . @Service or @Controller     # explicit OR
mod search . @Autowired not test         # negation
```

:::note
Sourcegraph's negation operator is also written as `-test`, but `mod` parses leading-dash arguments as CLI flags and rejects them. Use `not` (or `NOT`) instead, or pass the rest of the query after a `--` separator.
:::

Combine with [filters](../../user-documentation/agent-tools/trigrep.md#filters) to narrow by file path, language, or symbol type:

```bash
mod search . lang:java visibility:public @RestController
mod search . "file:**/*Test.java" @Mock
```

:::warning Quoting
Don't wrap a multi-token query in a single pair of shell quotes. The CLI treats a single-arg query as a literal phrase and re-emits it quoted in the `Searching for:` line — so `"@Service or @Controller"` looks for the phrase `@Service or @Controller` (which appears nowhere) and returns 0 matches. The same trap applies to `"visibility:public returns:List"`, which fails with `Unknown visibility: public returns:List`. Either pass each token as its own argument, or quote each one individually:

```bash
# Works
mod search . @Service or @Controller
mod search . "@Service" or "@Controller"

# Fails (literal phrase)
mod search . "@Service or @Controller"
```

Quoting a single token (e.g. `"file:**/*Test.java"` to keep the shell from expanding the glob) is fine.
:::

#### Step 2: Regex queries

Wrap a pattern in `/.../` to switch into regex mode. Trigrep extracts literal fragments to keep the search fast:

```bash
mod search . '/log\.(info|debug|warn|error)\(/'
mod search . '/@(Get|Post|Put|Delete|Patch)Mapping/'
```

Use regex when literal search isn't expressive enough but you don't need to respect language structure (parens, braces, etc.).

#### Step 3: Structural queries with Comby holes

Prefix a query with `struct:` to switch into [structural matching](../../user-documentation/agent-tools/trigrep.md#structural-pattern-matching). Holes (`:[name]`) match content while respecting balanced delimiters, which lets you express things regex can't:

```bash
# Find findById calls regardless of receiver expression
mod search . struct:'repository.findById(:[id:e])'

# String concatenation inside log calls (a known performance smell)
mod search . struct:'logger.:[level](:[msg] + :[rest])'

# Catch blocks that only print stack traces (illustrative — 0 matches in
# the Default org, but try it on your own codebase)
mod search . struct:'catch (:[ex:e] :[var:id]) { :[_].printStackTrace()'
```

The hole syntax includes typed variants like `:[name:e]` (balanced expression), `:[name:id]` (identifier), `:[name:block]` (balanced braces), and `:[name:g]` (generics). See [Structural holes](../../user-documentation/agent-tools/trigrep.md#structural-holes) for the full reference.

#### Step 4: Java-specific semantic filters

Trigrep extends Sourcegraph's filter syntax with Java-specific filters that read from LST metadata. These are the queries `grep` simply can't answer:

```bash
# All public methods that return a List
mod search . visibility:public returns:List

# Classes that extend a Spring base class
mod search . extends:WebSecurityConfigurerAdapter

# Methods that throw a checked exception
mod search . throws:IOException
```

<details>
<summary>Sample output for <code>mod search . throws:IOException</code></summary>

```text
● Searching for: throws:IOException
  0% (1s)     ▶ apache/maven-doxia@master
  0% (1s)         doxia-sink-api/src/main/java/.../SinkFactory.java
  0% (1s)           L41: Sink createSink(File outputDir, String outputName) throws IOException;
  0% (1s)           L54: Sink createSink(File outputDir, String outputName, String encoding) throws IOException;
  ...
```

</details>

### Takeaways

* Literal queries are fast and obvious. Reach for them first.
* Regex covers patterns literal search can't, and Trigrep optimizes them by extracting literal fragments.
* Structural queries respect language structure (parens, braces, generics), which makes them reliable on patterns regex would miss or false-match.
* Semantic filters (`visibility:`, `extends:`, `returns:`, `throws:`) are unique to Trigrep and rely on LST metadata.

---

## Exercise 4-3: Use search as a recipe prefilter

### Goals for this exercise

* See how Trigrep narrows the scope of an expensive recipe run
* Understand the `--last-search` integration with `mod run`

### Steps

#### Step 1: Search for the targets

Suppose you want to run a static-analysis pass only over the transactional-persistence repos in your workspace. Find them first:

```bash
mod search . @Transactional
```

In the `Default` org, this matches 3 of the 10 indexed repos (`finos/symphony-wdk`, `spring-projects/spring-data-commons`, `spring-projects/spring-petclinic`). The search finishes in under a second.

#### Step 2: Run a recipe scoped to the matched repos

Use `--last-search` to make the next `mod run` only process repositories the search hit:

```bash
mod run . --recipe org.openrewrite.staticanalysis.CommonStaticAnalysis --last-search
```

If the search matched 3 of 10 repositories, the recipe processes 3 instead of 10. On larger workspaces (think thousands of repos) this is the difference between a coffee break and overnight.

See [Using search as a prefilter for recipes](../../user-documentation/agent-tools/trigrep.md#using-search-as-a-prefilter-for-recipes) for more on this pattern.

### Takeaways

* Search-as-prefilter is one of the highest-leverage uses of Trigrep, especially at scale.
* The same `--last-search` flag works for any recipe, not just the static analysis one above.

---

## Exercise 4-4 (optional): Use plain output for agents

### Goals for this exercise

* See how `--output plain` produces minimal, agent-friendly output
* Recognize when to use it

### Steps

Run any search with `--output plain`:

```bash
mod search . "@Deprecated" --output plain
```

The output drops the colorized formatting and truncates each match to a single line of file:line:snippet. This is the format AI agents prefer when invoking `mod search` from a tool call (it parses cleanly and uses fewer tokens). The MCP server's `trigrep_search` tool uses the same plain format under the hood — you'll see this in [Module 5](./module-5-mcp.md).

### Takeaways

* Default rich output is for humans. Plain output is for agents.
* The MCP server is the more typical way an agent will use Trigrep, but `--output plain` is a useful escape hatch when you want to script it directly.

## Next up

In [Module 5](./module-5-mcp.md), you'll see how the Moderne MCP server exposes the Trigrep search you just learned (plus semantic navigation and refactoring) directly to your AI coding agent.
