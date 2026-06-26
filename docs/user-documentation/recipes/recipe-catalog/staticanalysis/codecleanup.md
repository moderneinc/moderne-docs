---
title: "Code cleanup"
sidebar_label: "Code cleanup"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/codecleanup" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Code cleanup"}
  description={"Automatically cleanup code, e.g. remove unnecessary parentheses, simplify expressions."}
  fqName={"org.openrewrite.staticanalysis.CodeCleanup"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/resources/META-INF/rewrite/static-analysis.yml"}
/>

<RecipeHeader
  displayName={"Code cleanup"}
  description={"Automatically cleanup code, e.g. remove unnecessary parentheses, simplify expressions."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.CodeCleanup"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CodeCleanup"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/codecleanup.md"}
/>

<RecipeList recipes={[{"name":"Default comes last","href":"staticanalysis/defaultcomeslast"},{"name":"Remove empty blocks","href":"staticanalysis/emptyblock"},{"name":"End files with a single newline","href":"java/format/emptynewlineatendoffile"},{"name":"`for` loop counters should use postfix operators","href":"staticanalysis/forloopcontrolvariablepostfixoperators"},{"name":"Finalize private fields","href":"staticanalysis/finalizeprivatefields"},{"name":"Method parameter padding","href":"java/format/methodparampad"},{"name":"No whitespace after","href":"java/format/nowhitespaceafter"},{"name":"No whitespace before","href":"java/format/nowhitespacebefore"},{"name":"Pad empty `for` loop components","href":"java/format/pademptyforloopcomponents"},{"name":"Typecast parenthesis padding","href":"staticanalysis/typecastparenpad"},{"name":"Equals avoids null","href":"staticanalysis/equalsavoidsnull"},{"name":"Explicit initialization","href":"staticanalysis/explicitinitialization"},{"name":"Fall through","href":"staticanalysis/fallthrough"},{"name":"Hide utility class constructor","href":"staticanalysis/hideutilityclassconstructor"},{"name":"Fix missing braces","href":"staticanalysis/needbraces"},{"name":"Operator wrapping","href":"staticanalysis/operatorwrap"},{"name":"Remove unnecessary parentheses","href":"staticanalysis/unnecessaryparentheses"},{"name":"Replace calls to `Thread.run()` with `Thread.start()`","href":"staticanalysis/replacethreadrunwiththreadstart"},{"name":"Chain `StringBuilder.append()` calls","href":"staticanalysis/chainstringbuilderappendcalls"},{"name":"Remove methods that only call super","href":"staticanalysis/removemethodsonlycallsuper"},{"name":"Replace `StringBuilder#append` with `String`","href":"staticanalysis/replacestringbuilderwithstring"},{"name":"Add imports for fully qualified references to types","href":"java/shortenfullyqualifiedtypereferences"},{"name":"Simplify single-element annotation","href":"java/simplifysingleelementannotation"},{"name":"Order imports","href":"java/orderimports"},{"name":"Remove unused labels","href":"staticanalysis/removeunusedlabels"}]} preconditions={[{"name":"Singleton","href":"core/singleton"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.CodeCleanup","displayName":"Code cleanup","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

