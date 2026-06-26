---
title: "Rename bean"
sidebar_label: "Rename bean"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/renamebean" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Rename bean"}
  description={"Renames a Spring bean, both declaration and references."}
  fqName={"org.openrewrite.java.spring.RenameBean"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/RenameBean.java"}
/>

<RecipeHeader
  displayName={"Rename bean"}
  description={"Renames a Spring bean, both declaration and references."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.RenameBean"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.RenameBean"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/renamebean.md"}
/>

<OptionsTable options={[{"type":"String","name":"type","required":false,"description":"The fully qualified name of the bean type to rename. If omitted, beans are matched by name alone.","example":"foo.MyType"},{"type":"String","name":"oldName","required":true,"description":"The existing name of the bean to rename.","example":"fooBean"},{"type":"String","name":"newName","required":true,"description":"The new name to give the matching bean.","example":"barBean"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"type","value":"sample.Foo"},{"parameter":"oldName","value":"foo"},{"parameter":"newName","value":"bar"}],"variants":[{"language":"java","before":"package sample;\n\nimport org.springframework.context.annotation.Configuration;\nimport sample.MyType;\n\n@Configuration\nclass Foo {\n}\n","after":"package sample;\n\nimport org.springframework.context.annotation.Configuration;\nimport sample.MyType;\n\n@Configuration\nclass Bar {\n}\n","diff":"@@ -7,1 +7,1 @@\n\n@Configuration\n-class Foo {\n+class Bar {\n}\n","newFile":false}]},{"parameters":[{"parameter":"type","value":"sample.MyType"},{"parameter":"oldName","value":"foo"},{"parameter":"newName","value":"bar"}],"variants":[{"language":"java","before":"package sample;\n\nimport org.springframework.context.annotation.Bean;\nimport sample.MyType;\n\nclass A {\n    @Bean\n    public MyType foo() {\n        return new MyType();\n    }\n}\n","after":"package sample;\n\nimport org.springframework.context.annotation.Bean;\nimport sample.MyType;\n\nclass A {\n    @Bean\n    public MyType bar() {\n        return new MyType();\n    }\n}\n","diff":"@@ -8,1 +8,1 @@\nclass A {\n    @Bean\n-   public MyType foo() {\n+   public MyType bar() {\n        return new MyType();\n","newFile":false}]},{"parameters":[{"parameter":"type","value":"sample.MyType"},{"parameter":"oldName","value":"foo"},{"parameter":"newName","value":"bar"}],"variants":[{"language":"java","before":"package sample;\n\nimport org.springframework.beans.factory.annotation.Qualifier;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport sample.MyType;\n\n@Configuration\nclass A {\n    @Bean\n    public String myBean(@Qualifier(\"foo\") MyType myType) {\n        return \"\";\n    }\n}\n","after":"package sample;\n\nimport org.springframework.beans.factory.annotation.Qualifier;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport sample.MyType;\n\n@Configuration\nclass A {\n    @Bean\n    public String myBean(@Qualifier(\"bar\") MyType myType) {\n        return \"\";\n    }\n}\n","diff":"@@ -11,1 +11,1 @@\nclass A {\n    @Bean\n-   public String myBean(@Qualifier(\"foo\") MyType myType) {\n+   public String myBean(@Qualifier(\"bar\") MyType myType) {\n        return \"\";\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.RenameBean","displayName":"Rename bean","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":true,"cliOptions":" --recipe-option \"type=foo.MyType\" --recipe-option \"oldName=fooBean\" --recipe-option \"newName=barBean\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

