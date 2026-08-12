---
title: "Enable hybrid TLS key exchange"
sidebar_label: "Enable hybrid TLS key exchange"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Enable hybrid TLS key exchange"}
  description={"Prepends an ML-KEM hybrid key-exchange group to explicitly configured named-group lists in Java and `.properties` sources, and reports the sites that cannot be rewritten safely. Code that configures no named groups is deliberately left alone: on JDK 27 and BouncyCastle 1.81 the provider default already offers a hybrid group, so inserting a literal list there would freeze today's defaults forever."}
  fqName={"io.moderne.cryptography.pqc.EnableHybridTlsKeyExchange"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.cryptography.pqc.EnableHybridTlsKeyExchange"}
  artifact={"io.moderne.recipe:rewrite-cryptography"}
  appLink={"https://app.moderne.io/recipes/io.moderne.cryptography.pqc.EnableHybridTlsKeyExchange"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/cryptography/pqc/enablehybridtlskeyexchange.md"}
  moderneOnly
>

<RecipeHeader.Title>Enable hybrid TLS key exchange</RecipeHeader.Title>

<RecipeHeader.Description>Prepends an ML-KEM hybrid key-exchange group to explicitly configured named-group lists in Java and `.properties` sources, and reports the sites that cannot be rewritten safely. Code that configures no named groups is deliberately left alone: on JDK 27 and BouncyCastle 1.81 the provider default already offers a hybrid group, so inserting a literal list there would freeze today's defaults forever.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Offer a hybrid ML-KEM key exchange group first","href":"/user-documentation/recipes/recipe-catalog/cryptography/pqc/addhybridtlsnamedgroup/"},{"name":"Offer a hybrid ML-KEM key exchange group first in properties files","href":"/user-documentation/recipes/recipe-catalog/cryptography/pqc/addhybridtlsnamedgrouptoproperties/"},{"name":"Find TLS key exchange sites that cannot be made hybrid automatically","href":"/user-documentation/recipes/recipe-catalog/cryptography/pqc/findmissinghybridtlsnamedgroups/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"io.moderne.cryptography.pqc.EnableHybridTlsKeyExchange","displayName":"Enable hybrid TLS key exchange","groupId":"io.moderne.recipe","artifactId":"rewrite-cryptography","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_CRYPTOGRAPHY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.cryptography.pqc.table.HybridKexEnforcementTable","displayName":"Hybrid TLS key exchange enforcement","description":"Named-group configuration rewritten to offer an ML-KEM hybrid group first, and sites flagged as needing manual review because the value is not statically resolvable or the transformation would need a BouncyCastle upgrade to compile. `-D` flags outside the scanned repository are invisible, so an unchanged repository is not evidence of a hybrid-ready runtime.","columns":[{"name":"Configuration surface","description":"The API or configuration key that produced the row: `SSLParameters.setNamedGroups`, `BCSSLParameters.setNamedGroups`, `System.setProperty(jdk.tls.namedGroups)`, `properties file entry`, `TlsClient.getSupportedGroups`, `SSLEngine.setSSLParameters` or `SSLSocket.setSSLParameters`. The token vocabulary is shared with the TLS named groups inventory so discovery and enforcement rows can be joined."},{"name":"Named groups","description":"The groups found at the site before the change, comma-joined in the order they were offered, e.g. `x25519,secp256r1`. Empty when the value is not statically resolvable or no groups are configured."},{"name":"Classification","description":"`transformed` when the hybrid group was prepended. `report-only: non-literal argument` when the named groups arrive as a runtime value. `report-only: no named groups configured` when SSL parameters are applied without any named-groups call — remediation there is a JDK 27 / BouncyCastle 1.81 upgrade, not an edit, because the provider default already offers a hybrid first. `report-only: low-level BC client without hybrid groups` for a `getSupportedGroups` override, where generated code naming `NamedGroup.X25519MLKEM768` would only compile against bctls 1.81 or later."},{"name":"Hybrid group added","description":"The hybrid group prepended at this site, e.g. `X25519MLKEM768`. Empty on report-only rows."},{"name":"Code snippet","description":"The source code of the detected API usage, e.g. Cipher.getInstance(\"DES\")."},{"name":"Library name","description":"The TLS stack the surface belongs to: `JSSE` or `BouncyCastle`. `jdk.tls.namedGroups` rows are recorded as `JSSE` even though BCJSSE honours the same property, because the property is a JDK-level surface."},{"name":"Library language","description":"The language of the source the row was found in: `Java` or `Properties`."},{"name":"File location","description":"The path of the source file relative to the repository root."},{"name":"Start line","description":"1-based line of the start of the API usage."},{"name":"Start column","description":"0-based column of the start of the API usage, or -1 when unavailable."},{"name":"Start offset","description":"0-based character offset of the start of the API usage, or -1 when unavailable."},{"name":"End line","description":"1-based line of the end of the API usage."},{"name":"End column","description":"0-based column of the end of the API usage, or -1 when unavailable."},{"name":"End offset","description":"0-based character offset of the end of the API usage, or -1 when unavailable."},{"name":"Repository name","description":"The repository name from Git provenance, e.g. payment-service. Empty when unknown."},{"name":"Scan source","description":"Where the source was scanned from, derived from Git provenance, e.g. GitHub, GitLab, Local Repository."},{"name":"Branch","description":"The branch from Git provenance, e.g. main. Empty when unknown."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

