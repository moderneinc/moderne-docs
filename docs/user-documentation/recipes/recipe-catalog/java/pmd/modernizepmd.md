---
title: "Modernize a PMD ruleset"
sidebar_label: "Modernize a PMD ruleset"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/pmd/modernizepmd" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Modernize a PMD ruleset"}
  description={"Bring a PMD ruleset XML file up to date with current PMD, by updating the `<rule>` references and `<exclude>` elements to name each rule as PMD knows it today. This runs both the PMD 6 to 7 migration, which replaces the rules PMD 7 deleted and drops the ones deleted without a successor, and the PMD 7 rule renames, which adopt the current name of each rule PMD renamed within the PMD 7 line. Rules whose replacement requires a judgement call, either because PMD split one rule across several successors or because the successor reports something different, are left alone. The result requires PMD 7.27.0 or later; an earlier PMD 7 fails to load a name that its version does not know yet."}
  fqName={"org.openrewrite.java.pmd.ModernizePmd"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-pmd/blob/main/src/main/resources/META-INF/rewrite/pmd.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.pmd.ModernizePmd"}
  artifact={"org.openrewrite.recipe:rewrite-pmd"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.pmd.ModernizePmd"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/pmd/modernizepmd.md"}
>

<RecipeHeader.Title>Modernize a PMD ruleset</RecipeHeader.Title>

<RecipeHeader.Description>Bring a PMD ruleset XML file up to date with current PMD, by updating the `<rule>` references and `<exclude>` elements to name each rule as PMD knows it today. This runs both the PMD 6 to 7 migration, which replaces the rules PMD 7 deleted and drops the ones deleted without a successor, and the PMD 7 rule renames, which adopt the current name of each rule PMD renamed within the PMD 7 line. Rules whose replacement requires a judgement call, either because PMD split one rule across several successors or because the successor reports something different, are left alone. The result requires PMD 7.27.0 or later; an earlier PMD 7 fails to load a name that its version does not know yet.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate a PMD 6 ruleset to PMD 7","href":"/user-documentation/recipes/recipe-catalog/java/pmd/pmd6to7migration/"},{"name":"Rename PMD rules that were renamed within the PMD 7 line","href":"/user-documentation/recipes/recipe-catalog/java/pmd/pmd7rulerenames/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.java.pmd.ModernizePmd","displayName":"Modernize a PMD ruleset","groupId":"org.openrewrite.recipe","artifactId":"rewrite-pmd","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_PMD","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

