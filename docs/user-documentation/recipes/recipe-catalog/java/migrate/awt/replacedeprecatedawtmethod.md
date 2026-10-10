---
title: "Replace a deprecated AWT method"
sidebar_label: "Replace a deprecated AWT method"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/awt/replacedeprecatedawtmethod" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace a deprecated AWT method"}
  description={"Replace calls to an AWT method deprecated since JDK 1.1 with calls to the method that replaced it. Declarations and `super` calls are left alone: the replacements delegate back to the deprecated methods, so a rewritten `super` call would reach overrides it used to bypass."}
  fqName={"org.openrewrite.java.migrate.awt.ReplaceDeprecatedAwtMethod"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/awt/ReplaceDeprecatedAwtMethod.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.awt.ReplaceDeprecatedAwtMethod"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.awt.ReplaceDeprecatedAwtMethod"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/awt/replacedeprecatedawtmethod.md"}
>

<RecipeHeader.Title>Replace a deprecated AWT method</RecipeHeader.Title>

<RecipeHeader.Description>Replace calls to an AWT method deprecated since JDK 1.1 with calls to the method that replaced it. Declarations and `super` calls are left alone: the replacements delegate back to the deprecated methods, so a rewritten `super` call would reach overrides it used to bypass.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"methodPattern","required":true,"description":"A method pattern matching the deprecated method; overrides of it are matched as well.","example":"java.awt.Component show()"},{"type":"String","name":"newMethodName","required":true,"description":"The name of the method that replaces the deprecated one.","example":"setVisible"},{"type":"Boolean","name":"booleanArgument","required":false,"description":"A boolean literal to pass as an extra, last argument to the new method.","example":"true"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.awt.ReplaceDeprecatedAwtMethod","displayName":"Replace a deprecated AWT method","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":true,"cliOptions":" --recipe-option \"methodPattern=java.awt.Component show()\" --recipe-option \"newMethodName=setVisible\"","optionalCliOptions":" --recipe-option \"booleanArgument=true\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

