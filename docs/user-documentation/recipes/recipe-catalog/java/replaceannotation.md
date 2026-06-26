---
title: "Replace annotation"
sidebar_label: "Replace annotation"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/replaceannotation" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace annotation"}
  description={"Replace an Annotation with another one if the annotation pattern matches. Only fixed parameters can be set in the replacement."}
  fqName={"org.openrewrite.java.ReplaceAnnotation"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ReplaceAnnotation.java"}
/>

<RecipeHeader
  displayName={"Replace annotation"}
  description={"Replace an Annotation with another one if the annotation pattern matches. Only fixed parameters can be set in the replacement."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.ReplaceAnnotation"}
  artifact={"org.openrewrite:rewrite-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.ReplaceAnnotation"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/replaceannotation.md"}
/>

<OptionsTable options={[{"type":"String","name":"annotationPatternToReplace","required":true,"description":"An annotation matcher, expressed as a method pattern to replace.","example":"@org.jetbrains.annotations.NotNull(\"Test\")"},{"type":"String","name":"annotationTemplateToInsert","required":true,"description":"An annotation template to add instead of original one, will be parsed with `JavaTemplate`.","example":"@org.jetbrains.annotations.NotNull(\"Null not permitted\")"},{"type":"String","name":"classpathResourceName","required":false,"description":"If the annotation's type is defined by a jar within the META-INF/rewrite/classpath directory provide its name here so that it can be loaded. When this parameter is not passed the runtime classpath of the recipe is provided to the parser producing the new annotation. This is necessary when the annotation is not on the runtime classpath of the recipe and isn't in the Java standard library.","example":"annotations"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"annotationPatternToReplace","value":"@org.jetbrains.annotations.NotNull(\"Test\")"},{"parameter":"annotationTemplateToInsert","value":"@lombok.NonNull"},{"parameter":"classpathResourceName","value":"null"}],"variants":[{"language":"java","before":"import org.jetbrains.annotations.NotNull;\n\nclass A {\n    @NotNull(\"Test\")\n    String testMethod() {}\n}\n","after":"import lombok.NonNull;\n\nclass A {\n    @NonNull\n    String testMethod() {}\n}\n","diff":"@@ -1,1 +1,1 @@\n-import org.jetbrains.annotations.NotNull;\n+import lombok.NonNull;\n\n@@ -4,1 +4,1 @@\n\nclass A {\n-   @NotNull(\"Test\")\n+   @NonNull\n    String testMethod() {}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.ReplaceAnnotation","displayName":"Replace annotation","groupId":"org.openrewrite","artifactId":"rewrite-java","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_JAVA","requiresConfiguration":true,"cliOptions":" --recipe-option \"annotationPatternToReplace='@org.jetbrains.annotations.NotNull(\"Test\")'\" --recipe-option \"annotationTemplateToInsert='@org.jetbrains.annotations.NotNull(\"Null not permitted\")'\" --recipe-option \"classpathResourceName=annotations\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

