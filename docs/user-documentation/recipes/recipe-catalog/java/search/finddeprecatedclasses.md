---
title: "Find uses of deprecated classes"
sidebar_label: "Find uses of deprecated classes"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/search/finddeprecatedclasses" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find uses of deprecated classes"}
  description={"Find uses of deprecated classes, optionally ignoring those classes that are inside deprecated scopes."}
  fqName={"org.openrewrite.java.search.FindDeprecatedClasses"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/search/FindDeprecatedClasses.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.search.FindDeprecatedClasses"}
  artifact={"org.openrewrite:rewrite-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.search.FindDeprecatedClasses"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/search/finddeprecatedclasses.md"}
>

<RecipeHeader.Title>Find uses of deprecated classes</RecipeHeader.Title>

<RecipeHeader.Description>Find uses of deprecated classes, optionally ignoring those classes that are inside deprecated scopes.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"typePattern","required":false,"description":"A type pattern that is used to find matching classes.","example":"org.springframework..*"},{"type":"Boolean","name":"matchInherited","required":false,"description":"When enabled, find types that inherit from a deprecated type."},{"type":"Boolean","name":"ignoreDeprecatedScopes","required":false,"description":"When a deprecated type is used in a deprecated method or class, ignore it."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"typePattern","value":"org.old..*"},{"parameter":"matchInherited","value":"false"},{"parameter":"ignoreDeprecatedScopes","value":"true"}],"variants":[{"language":"java","before":"import org.old.types.D;\nclass Test {\n    D d;\n}\n","after":"import org.old.types.D;\nclass Test {\n    /*~~>*/D d;\n}\n","diff":"@@ -3,1 +3,1 @@\nimport org.old.types.D;\nclass Test {\n-   D d;\n+   /*~~>*/D d;\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.search.FindDeprecatedClasses","displayName":"Find uses of deprecated classes","groupId":"org.openrewrite","artifactId":"rewrite-java","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

