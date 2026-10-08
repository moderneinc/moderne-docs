---
title: "Replace a PMD rule in a ruleset"
sidebar_label: "Replace a PMD rule in a ruleset"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/pmd/replacepmdrule" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace a PMD rule in a ruleset"}
  description={"Updates `<rule ref=\"...\"/>` references and `<exclude name=\"...\"/>` elements in PMD ruleset XML files to name a rule's replacement. An `<exclude>` is only renamed when the replacement lives in the same ruleset file, because an exclusion can only name a rule from the ruleset its enclosing `<rule>` refers to; when the replacement moved to another ruleset file the exclusion no longer names a rule PMD knows, so it is removed instead."}
  fqName={"org.openrewrite.java.pmd.ReplacePmdRule"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-pmd/blob/main/src/main/java/org/openrewrite/java/pmd/ReplacePmdRule.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.pmd.ReplacePmdRule"}
  artifact={"org.openrewrite.recipe:rewrite-pmd"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.pmd.ReplacePmdRule"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/pmd/replacepmdrule.md"}
>

<RecipeHeader.Title>Replace a PMD rule in a ruleset</RecipeHeader.Title>

<RecipeHeader.Description>Updates `<rule ref="..."/>` references and `<exclude name="..."/>` elements in PMD ruleset XML files to name a rule's replacement. An `<exclude>` is only renamed when the replacement lives in the same ruleset file, because an exclusion can only name a rule from the ruleset its enclosing `<rule>` refers to; when the replacement moved to another ruleset file the exclusion no longer names a rule PMD knows, so it is removed instead.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"oldRule","required":true,"description":"The rule to replace, either a fully qualified reference such as `category/java/errorprone.xml/MissingBreakInSwitch` or just the rule name, in which case the rule is replaced regardless of which ruleset file it is referenced from.","example":"category/java/errorprone.xml/MissingBreakInSwitch"},{"type":"String","name":"newRule","required":true,"description":"The rule to replace it with. Give a fully qualified reference when the replacement lives in a different ruleset file; a bare rule name keeps the existing ruleset file.","example":"ImplicitSwitchFallThrough"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.java.pmd.ReplacePmdRule","displayName":"Replace a PMD rule in a ruleset","groupId":"org.openrewrite.recipe","artifactId":"rewrite-pmd","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_PMD","requiresConfiguration":true,"cliOptions":" --recipe-option \"oldRule=category/java/errorprone.xml/MissingBreakInSwitch\" --recipe-option \"newRule=ImplicitSwitchFallThrough\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

