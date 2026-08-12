---
title: "Enforce a TLS 1.3 floor"
sidebar_label: "Enforce a TLS 1.3 floor"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Enforce a TLS 1.3 floor"}
  description={"Rewrites JSSE, BouncyCastle and Spring Boot protocol configuration to a TLS 1.3 floor across Java, `.properties` and YAML sources, so that JEP 527 hybrid key exchange — which exists for TLS 1.3 only — can negotiate. Surfaces that cannot be rewritten safely are recorded as `Report only` rows rather than changed."}
  fqName={"io.moderne.cryptography.pqc.EnforceTls13"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.cryptography.pqc.EnforceTls13"}
  artifact={"io.moderne.recipe:rewrite-cryptography"}
  appLink={"https://app.moderne.io/recipes/io.moderne.cryptography.pqc.EnforceTls13"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/cryptography/pqc/enforcetls13.md"}
  moderneOnly
>

<RecipeHeader.Title>Enforce a TLS 1.3 floor</RecipeHeader.Title>

<RecipeHeader.Description>Rewrites JSSE, BouncyCastle and Spring Boot protocol configuration to a TLS 1.3 floor across Java, `.properties` and YAML sources, so that JEP 527 hybrid key exchange — which exists for TLS 1.3 only — can negotiate. Surfaces that cannot be rewritten safely are recorded as `Report only` rows rather than changed.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Enforce a TLS 1.3 floor in Java sources","href":"/user-documentation/recipes/recipe-catalog/cryptography/pqc/enforcetls13java/"},{"name":"Enforce a TLS 1.3 floor in properties files","href":"/user-documentation/recipes/recipe-catalog/cryptography/pqc/enforcetls13properties/"},{"name":"Enforce a TLS 1.3 floor in YAML files","href":"/user-documentation/recipes/recipe-catalog/cryptography/pqc/enforcetls13yaml/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"io.moderne.cryptography.pqc.EnforceTls13","displayName":"Enforce a TLS 1.3 floor","groupId":"io.moderne.recipe","artifactId":"rewrite-cryptography","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_CRYPTOGRAPHY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.cryptography.pqc.table.ProtocolEnforcementTable","displayName":"TLS protocol enforcement","description":"Protocol configuration surfaces rewritten to a TLS 1.3 floor, and surfaces flagged as needing manual review because rewriting them would change behaviour in a way a source scan cannot justify. Rows describe declared configuration only: a JVM's `java.security` file, container `-D` flags and environment variables are invisible here, so an enforced source does not prove an enforced runtime.","columns":[{"name":"Configuration surface","description":"The API or configuration key that produced the row, e.g. `SSLContext.getInstance`, `SSLSocket.setEnabledProtocols`, `SSLServerSocket.setEnabledProtocols`, `SSLEngine.setEnabledProtocols`, `SSLParameters.setProtocols`, `https.protocols`, `jdk.tls.client.protocols`, `jdk.tls.server.protocols`, `jdk.tls.disabledAlgorithms`, `AbstractTlsPeer.getSupportedVersions`, `server.ssl.enabled-protocols`, `server.ssl.protocol`. The token vocabulary is shared with the TLS configuration inventory so discovery and enforcement rows can be joined."},{"name":"Action","description":"`Rewritten` when the recipe changed the source, or `Report only` when the surface was flagged but deliberately not transformed — a protocol array shared with non-TLS code, or a `jdk.tls.disabledAlgorithms` assignment that replaces rather than extends the JDK default list."},{"name":"Protocols before","description":"Comma-joined protocol tokens found before the change, e.g. `TLSv1.1,TLSv1.2`. BouncyCastle `downTo` ranges are expanded to their JSSE spelling, e.g. `TLSv1.2,TLSv1.1,TLSv1`. For a `jdk.tls.disabledAlgorithms` row this is the raw property value."},{"name":"Protocols after","description":"Comma-joined protocol tokens after the change, e.g. `TLSv1.3`, or `TLSv1.3,TLSv1.2` where an exception retains TLS 1.2. Empty for `Report only` rows."},{"name":"Code snippet","description":"The source code of the detected API usage, e.g. Cipher.getInstance(\"DES\")."},{"name":"Library name","description":"The library providing the configuration surface: `JSSE`, `BouncyCastle` or `Spring Boot`."},{"name":"Library language","description":"The language of the source the row was found in: `Java`, `Properties` or `YAML`."},{"name":"File location","description":"The path of the source file relative to the repository root."},{"name":"Start line","description":"1-based line of the start of the API usage."},{"name":"Start column","description":"0-based column of the start of the API usage, or -1 when unavailable."},{"name":"Start offset","description":"0-based character offset of the start of the API usage, or -1 when unavailable."},{"name":"End line","description":"1-based line of the end of the API usage."},{"name":"End column","description":"0-based column of the end of the API usage, or -1 when unavailable."},{"name":"End offset","description":"0-based character offset of the end of the API usage, or -1 when unavailable."},{"name":"Repository name","description":"The repository name from Git provenance, e.g. payment-service. Empty when unknown."},{"name":"Scan source","description":"Where the source was scanned from, derived from Git provenance, e.g. GitHub, GitLab, Local Repository."},{"name":"Branch","description":"The branch from Git provenance, e.g. main. Empty when unknown."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

