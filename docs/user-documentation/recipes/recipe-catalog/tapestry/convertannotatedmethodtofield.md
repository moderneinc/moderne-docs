---
title: "Convert annotated abstract method to field"
sidebar_label: "Convert annotated abstract method to field"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Convert annotated abstract method to field"}
  description={"Converts abstract getter methods annotated with `sourceAnnotation` to private fields annotated with `targetAnnotation`. Also removes corresponding abstract setter methods."}
  fqName={"org.openrewrite.tapestry.ConvertAnnotatedMethodToField"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Convert annotated abstract method to field"}
  description={"Converts abstract getter methods annotated with `sourceAnnotation` to private fields annotated with `targetAnnotation`. Also removes corresponding abstract setter methods."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.tapestry.ConvertAnnotatedMethodToField"}
  artifact={"io.moderne.recipe:rewrite-tapestry"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.tapestry.ConvertAnnotatedMethodToField"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/tapestry/convertannotatedmethodtofield.md"}
  moderneOnly
/>

<OptionsTable options={[{"type":"String","name":"sourceAnnotation","required":true,"description":"The fully qualified name of the annotation to find on abstract getter methods.","example":"org.apache.tapestry.annotations.InjectObject"},{"type":"String","name":"targetAnnotation","required":true,"description":"The fully qualified name of the annotation to add to the generated field.","example":"org.apache.tapestry5.ioc.annotations.Inject"},{"type":"Boolean","name":"preserveAnnotationArguments","required":false,"description":"When true, copies the source annotation's arguments to the target annotation. Use this when the annotation arguments carry semantic meaning in the target framework (e.g., @Persist(\"session\"), @Parameter(required=true)).","example":"true"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"sourceAnnotation","value":"org.apache.tapestry.annotations.InjectObject"},{"parameter":"targetAnnotation","value":"org.apache.tapestry5.ioc.annotations.Inject"},{"parameter":"preserveAnnotationArguments","value":"null"}],"variants":[{"language":"java","before":"import org.apache.tapestry.annotations.InjectObject;\n\npublic abstract class MyPage {\n\n    @InjectObject(\"service:myService\")\n    public abstract MyService getMyService();\n\n    public void doWork() {\n        getMyService().doSomething();\n    }\n}\n","after":"import org.apache.tapestry5.ioc.annotations.Inject;\n\npublic abstract class MyPage {\n    @Inject private MyService myService;\n\n    public void doWork() {\n        getMyService().doSomething();\n    }\n}\n","diff":"@@ -1,1 +1,1 @@\n-import org.apache.tapestry.annotations.InjectObject;\n+import org.apache.tapestry5.ioc.annotations.Inject;\n\n@@ -4,0 +4,1 @@\n\npublic abstract class MyPage {\n+   @Inject private MyService myService;\n\n@@ -5,3 +6,0 @@\npublic abstract class MyPage {\n\n-   @InjectObject(\"service:myService\")\n-   public abstract MyService getMyService();\n-\n    public void doWork() {\n","newFile":false}]},{"parameters":[{"parameter":"sourceAnnotation","value":"org.apache.tapestry.annotations.Persist"},{"parameter":"targetAnnotation","value":"org.apache.tapestry5.annotations.Persist"},{"parameter":"preserveAnnotationArguments","value":"true"}],"variants":[{"language":"java","before":"import org.apache.tapestry.annotations.Persist;\n\npublic abstract class MyPage {\n\n    @Persist\n    public abstract String getMessage();\n}\n","after":"import org.apache.tapestry5.annotations.Persist;\n\npublic abstract class MyPage {\n    @Persist private String message;\n}\n","diff":"@@ -1,1 +1,1 @@\n-import org.apache.tapestry.annotations.Persist;\n+import org.apache.tapestry5.annotations.Persist;\n\n@@ -4,3 +4,1 @@\n\npublic abstract class MyPage {\n-\n-   @Persist\n-   public abstract String getMessage();\n+   @Persist private String message;\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.tapestry.ConvertAnnotatedMethodToField","displayName":"Convert annotated abstract method to field","groupId":"io.moderne.recipe","artifactId":"rewrite-tapestry","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_TAPESTRY","requiresConfiguration":true,"cliOptions":" --recipe-option \"sourceAnnotation=org.apache.tapestry.annotations.InjectObject\" --recipe-option \"targetAnnotation=org.apache.tapestry5.ioc.annotations.Inject\" --recipe-option \"preserveAnnotationArguments=true\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

