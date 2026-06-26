---
title: "Order imports"
sidebar_label: "Order imports"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/orderimports" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Order imports"}
  description={"Groups and orders import statements. If a [style has been defined](https://docs.openrewrite.org/concepts-and-explanations/styles), this recipe will order the imports according to that style. If no style is detected, this recipe will default to ordering imports in the same way that IntelliJ IDEA does."}
  fqName={"org.openrewrite.java.OrderImports"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/OrderImports.java"}
/>

<RecipeHeader
  displayName={"Order imports"}
  description={"Groups and orders import statements. If a [style has been defined](https://docs.openrewrite.org/concepts-and-explanations/styles), this recipe will order the imports according to that style. If no style is detected, this recipe will default to ordering imports in the same way that IntelliJ IDEA does."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.OrderImports"}
  artifact={"org.openrewrite:rewrite-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.OrderImports"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/orderimports.md"}
/>

<OptionsTable options={[{"type":"Boolean","name":"removeUnused","required":false,"description":"Remove unnecessary imports."},{"type":"String","name":"style","required":false,"description":"An OpenRewrite [style](https://docs.openrewrite.org/concepts-and-explanations/styles) formatted in YAML.","example":"type: specs.openrewrite.org/v1beta/style\nname: com.yourorg.CustomImportLayout\nstyleConfigs:\n  - org.openrewrite.java.style.ImportLayoutStyle:\n      classCountToUseStarImport: 999\n      nameCountToUseStarImport: 999\n      layout:\n        - 'import java.*'\n        - 'import javax.*'\n        - '<blank line>'\n        - 'import all other imports'\n        - '<blank line>'\n        - 'import static all other imports'\n      packagesToFold:\n        - 'import java.awt.*'\n        - 'import static org.junit.jupiter.api.Assertions.*"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"removeUnused","value":"false"},{"parameter":"style","value":"null"}],"variants":[{"language":"java","before":"import java.util.List;\nimport java.util.ArrayList;\nimport java.util.regex.Pattern;\nimport java.util.Objects;\nimport java.util.Set;\nimport java.util.Map;\n","after":"import java.util.*;\nimport java.util.regex.Pattern;\n","diff":"@@ -1,2 +1,1 @@\n-import java.util.List;\n-import java.util.ArrayList;\n+import java.util.*;\nimport java.util.regex.Pattern;\n@@ -4,3 +3,0 @@\nimport java.util.ArrayList;\nimport java.util.regex.Pattern;\n-import java.util.Objects;\n-import java.util.Set;\n-import java.util.Map;\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.OrderImports","displayName":"Order imports","groupId":"org.openrewrite","artifactId":"rewrite-java","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

