---
title: "Remediate OWASP A03:2021 Injection"
sidebar_label: "Remediate OWASP A03:2021 Injection"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remediate OWASP A03:2021 Injection"}
  description={"OWASP [A03:2021](https://owasp.org/Top10/A03_2021-Injection/) describes failures related to user-supplied data being used to influence program state to operate outside of its intended bounds. This recipe seeks to remediate these vulnerabilities."}
  fqName={"org.openrewrite.java.security.OwaspA03"}
  languages={["Java"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.java.security.OwaspA03"}
  artifact={"org.openrewrite.recipe:rewrite-java-security"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.security.OwaspA03"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/security/owaspa03.md"}
  moderneOnly
>

<RecipeHeader.Title>Remediate OWASP A03:2021 Injection</RecipeHeader.Title>

<RecipeHeader.Description>OWASP [A03:2021](https://owasp.org/Top10/A03_2021-Injection/) describes failures related to user-supplied data being used to influence program state to operate outside of its intended bounds. This recipe seeks to remediate these vulnerabilities.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Regular Expression Denial of Service (ReDOS)","href":"/user-documentation/recipes/recipe-catalog/java/security/regularexpressiondenialofservice/"},{"name":"Use comparison rather than equality checks in for conditions","href":"/user-documentation/recipes/recipe-catalog/staticanalysis/noequalityinforcondition/"},{"name":"Insecure cookies","href":"/user-documentation/recipes/recipe-catalog/java/security/servlet/cookiesetsecure/"},{"name":"Fix XSS vulnerabilities","href":"/user-documentation/recipes/recipe-catalog/java/security/xss/fixxssvulnerability/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.java.security.OwaspA03","displayName":"Remediate OWASP A03:2021 Injection","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-security","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

