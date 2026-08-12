---
title: "Audit post-quantum TLS readiness of build files"
sidebar_label: "Audit post-quantum TLS readiness of build files"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Audit post-quantum TLS readiness of build files"}
  description={"Reports how far each Maven and Gradle module is from post-quantum TLS by joining its JDK level with the BouncyCastle artifacts it resolves. Modules with no BouncyCastle get a row too, so absence is reported rather than inferred from an empty table."}
  fqName={"io.moderne.cryptography.pqc.PqcReadinessAudit"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.cryptography.pqc.PqcReadinessAudit"}
  artifact={"io.moderne.recipe:rewrite-cryptography"}
  appLink={"https://app.moderne.io/recipes/io.moderne.cryptography.pqc.PqcReadinessAudit"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/cryptography/pqc/pqcreadinessaudit.md"}
  moderneOnly
>

<RecipeHeader.Title>Audit post-quantum TLS readiness of build files</RecipeHeader.Title>

<RecipeHeader.Description>Reports how far each Maven and Gradle module is from post-quantum TLS by joining its JDK level with the BouncyCastle artifacts it resolves. Modules with no BouncyCastle get a row too, so absence is reported rather than inferred from an empty table.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Post-quantum TLS readiness report","href":"/user-documentation/recipes/recipe-catalog/cryptography/pqc/pqcreadinessreport/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"io.moderne.cryptography.pqc.PqcReadinessAudit","displayName":"Audit post-quantum TLS readiness of build files","groupId":"io.moderne.recipe","artifactId":"rewrite-cryptography","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_CRYPTOGRAPHY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.cryptography.pqc.table.PqcReadinessTable","displayName":"PQC readiness","description":"Per-module post-quantum TLS readiness derived from the resolved Maven and Gradle dependency models and the `JavaVersion` markers of the module's Java sources. Modules built by tools OpenRewrite does not parse (Bazel, Ant) and BouncyCastle shaded into fat jars are invisible here, so an absent row is not evidence of health.","columns":[{"name":"Module","description":"Module identity: the Maven `groupId:artifactId` of the pom, or the Gradle project name from the `GradleProject` marker."},{"name":"JDK version","description":"The module's bytecode/source level, the highest of source and target compatibility across the module's `JavaVersion` markers, or -1 when there are no Java sources or the level is unparseable (toolchain-only builds)."},{"name":"JDK created by","description":"Major version of the JDK that compiled the sources, or -1 when unknown. A secondary signal: JSSE capability depends on the runtime JDK, of which the target level is only a lower bound."},{"name":"JDK classification","description":"One of `jdk-native-hybrid-capable` (JEP 527 hybrid key exchange in JSSE), `jdk-pqc-algos-only` (JEP 496/497 ML-KEM and ML-DSA providers, TLS an explicit non-goal), `jdk-not-pqc`, or `jdk-level-unknown`."},{"name":"Library name","description":"The `org.bouncycastle` artifactId, e.g. `bctls-jdk18on`. Empty when the module has no BouncyCastle. `bcutil` is deliberately absent: it is an internal support artifact declared with version ranges, and its whole subtree is pruned from the graph walk. Maps to AgileSec `crypto.library.name`."},{"name":"Library version","description":"The resolved version, so that property-, BOM-, parent- and version-catalog-declared versions all appear concrete. Empty when the module has no BouncyCastle. Maps to AgileSec `crypto.library.version`."},{"name":"Library language","description":"Always `Java`: the row inventories a JVM module — its JDK level and the BouncyCastle artifacts it resolves. Maps to AgileSec `crypto.library.language`."},{"name":"BouncyCastle artifact line","description":"The artifact line parsed from the artifactId: `jdk18on`, `jdk15to18`, `jdk15on`, `jdk14`, `lts8on`, `fips`, or empty. Lines carry their own version schemes: `jdk15on` ends at 1.70, and `fips` and `lts8on` are numbered separately from the mainline."},{"name":"BouncyCastle dependency type","description":"`direct` when the module declares the artifact itself, `transitive` when it arrives through another dependency, empty on no-BouncyCastle rows."},{"name":"BouncyCastle classification","description":"The module-level TLS bucket, repeated on every row of the module: `bctls-hybrid-capable`, `bctls-too-old`, `bctls-line-eol`, `bctls-absent-but-bcprov-present`, `no-bc`, `bc-fips-line-needs-separate-assessment`, `bc-lts-line-needs-separate-assessment`, or `build-file-not-resolved` when the module's build tool never ran so its dependencies were never resolved — a row that must not be read as `no-bc`. BouncyCastle managed but not consumed (a `dependencyManagement` pin the module never depends on) is not on the resolved graph and therefore reads as `no-bc`, as do vendored jars wired up with Gradle `fileTree`/`flatDir` or Maven `system` scope and BouncyCastle shaded into a fat jar, none of which carry coordinates."},{"name":"Code snippet","description":"The resolved coordinate `org.bouncycastle:<artifactId>:<version>`. Empty on no-BouncyCastle rows."},{"name":"File location","description":"The path of the module's build file relative to the repository root."},{"name":"Start line","description":"1-based line of the start of the dependency declaration, or -1 for transitive, version-catalog-indirected and no-BouncyCastle rows."},{"name":"Start column","description":"0-based column of the start of the dependency declaration, or -1 when unavailable."},{"name":"Start offset","description":"0-based character offset of the start of the dependency declaration, or -1 when unavailable."},{"name":"End line","description":"1-based line of the end of the dependency declaration, or -1 when unavailable."},{"name":"End column","description":"0-based column of the end of the dependency declaration, or -1 when unavailable."},{"name":"End offset","description":"0-based character offset of the end of the dependency declaration, or -1 when unavailable."},{"name":"Repository name","description":"The repository name from Git provenance, e.g. payment-service. Empty when unknown."},{"name":"Scan source","description":"Where the source was scanned from, derived from Git provenance, e.g. GitHub, GitLab, Local Repository."},{"name":"Branch","description":"The branch from Git provenance, e.g. main. Empty when unknown."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

