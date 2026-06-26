---
title: "Adds missing method implementations"
sidebar_label: "Adds missing method implementations"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/addmissingmethodimplementation" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Adds missing method implementations"}
  description={"Check for missing methods required by interfaces and adds them."}
  fqName={"org.openrewrite.java.migrate.AddMissingMethodImplementation"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/AddMissingMethodImplementation.java"}
/>

<RecipeHeader
  displayName={"Adds missing method implementations"}
  description={"Check for missing methods required by interfaces and adds them."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.AddMissingMethodImplementation"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.AddMissingMethodImplementation"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/addmissingmethodimplementation.md"}
/>

<OptionsTable options={[{"type":"String","name":"fullyQualifiedClassName","required":true,"description":"A fully qualified class being implemented with missing method.","example":"com.yourorg.FooBar"},{"type":"String","name":"methodPattern","required":true,"description":"A method pattern for matching required method definition.","example":"*..* hello(..)"},{"type":"String","name":"methodTemplateString","required":true,"description":"Template of method to add","example":"public String hello() { return \\\"Hello from #{}!\\\"; }"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"fullyQualifiedClassName","value":"I1"},{"parameter":"methodPattern","value":"*..* m1()"},{"parameter":"methodTemplateString","value":"public void m1() { System.out.println(\"m1\"); }"}],"variants":[{"language":"java","before":"interface I1 {}\nclass C2 implements I1 {}\n","after":"interface I1 {}\nclass C2 implements I1 {\n    public void m1() {\n        System.out.println(\"m1\");\n    }}\n","diff":"@@ -2,1 +2,4 @@\ninterface I1 {}\n-class C2 implements I1 {}\n+class C2 implements I1 {\n+   public void m1() {\n+       System.out.println(\"m1\");\n+   }}\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.AddMissingMethodImplementation","displayName":"Adds missing method implementations","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":true,"cliOptions":" --recipe-option \"fullyQualifiedClassName=com.yourorg.FooBar\" --recipe-option \"methodPattern='*..* hello(..)'\" --recipe-option \"methodTemplateString=public String hello() { return \\\"Hello from #{}!\\\"; }\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

