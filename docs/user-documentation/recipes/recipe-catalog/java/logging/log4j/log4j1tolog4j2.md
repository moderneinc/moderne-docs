---
title: "Migrate Log4j 1.x to Log4j 2.x"
sidebar_label: "Migrate Log4j 1.x to Log4j 2.x"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/logging/log4j/log4j1tolog4j2" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate Log4j 1.x to Log4j 2.x"}
  description={"Migrates Log4j 1.x to Log4j 2.x."}
  fqName={"org.openrewrite.java.logging.log4j.Log4j1ToLog4j2"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/resources/META-INF/rewrite/log4j.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["logging","log4j"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.logging.log4j.Log4j1ToLog4j2"}
  artifact={"org.openrewrite.recipe:rewrite-logging-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.logging.log4j.Log4j1ToLog4j2"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/logging/log4j/log4j1tolog4j2.md"}
>

<RecipeHeader.Title>Migrate Log4j 1.x to Log4j 2.x</RecipeHeader.Title>

<RecipeHeader.Description>Migrates Log4j 1.x to Log4j 2.x.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Replace any Lombok log annotations with target logging framework annotation","href":"/user-documentation/recipes/recipe-catalog/java/logging/changelomboklogannotation/"},{"name":"Change method target to static","href":"/user-documentation/recipes/recipe-catalog/java/changemethodtargettostatic/"},{"name":"Change method target to static","href":"/user-documentation/recipes/recipe-catalog/java/changemethodtargettostatic/"},{"name":"Convert Log4j `Logger.setLevel` to Log4j2 `Configurator.setLevel`","href":"/user-documentation/recipes/recipe-catalog/java/logging/log4j/loggersetleveltoconfiguratorrecipe/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change method target to static","href":"/user-documentation/recipes/recipe-catalog/java/changemethodtargettostatic/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Rename package name","href":"/user-documentation/recipes/recipe-catalog/java/changepackage/"},{"name":"Parameterize Log4j 2.x logging statements","href":"/user-documentation/recipes/recipe-catalog/java/logging/log4j/parameterizedlogging/"},{"name":"Add Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/adddependency/"},{"name":"Add Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/adddependency/"},{"name":"Remove a Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/removedependency/"},{"name":"Remove a Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/removedependency/"},{"name":"Add Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/adddependency/"},{"name":"Add Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/adddependency/"},{"name":"Change Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/changedependency/"},{"name":"Change Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/changedependency/"},{"name":"Upgrade Log4j 2.x dependency version","href":"/user-documentation/recipes/recipe-catalog/java/logging/log4j/upgradelog4j2dependencyversion/"},{"name":"Inline `log4j-api-2` methods annotated with `@InlineMe`","href":"/user-documentation/recipes/recipe-catalog/apache/logging/log4j/inlinelog4japimethods/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.apache.log4j.Logger;\n\nclass Test {\n    Logger logger = Logger.getLogger(Test.class);\n}\n","after":"import org.apache.logging.log4j.Logger;\nimport org.apache.logging.log4j.LogManager;\n\nclass Test {\n    Logger logger = LogManager.getLogger(Test.class);\n}\n","diff":"@@ -1,1 +1,2 @@\n-import org.apache.log4j.Logger;\n+import org.apache.logging.log4j.Logger;\n+import org.apache.logging.log4j.LogManager;\n\n@@ -4,1 +5,1 @@\n\nclass Test {\n-   Logger logger = Logger.getLogger(Test.class);\n+   Logger logger = LogManager.getLogger(Test.class);\n}\n","newFile":false}]},{"variants":[{"language":"java","before":"import org.apache.log4j.Logger;\n\nclass Test {\n    Logger logger = Logger.getLogger(Test.class);\n}\n","after":"import org.apache.logging.log4j.Logger;\nimport org.apache.logging.log4j.LogManager;\n\nclass Test {\n    Logger logger = LogManager.getLogger(Test.class);\n}\n","diff":"@@ -1,1 +1,2 @@\n-import org.apache.log4j.Logger;\n+import org.apache.logging.log4j.Logger;\n+import org.apache.logging.log4j.LogManager;\n\n@@ -4,1 +5,1 @@\n\nclass Test {\n-   Logger logger = Logger.getLogger(Test.class);\n+   Logger logger = LogManager.getLogger(Test.class);\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.logging.log4j.Log4j1ToLog4j2","displayName":"Migrate Log4j 1.x to Log4j 2.x","groupId":"org.openrewrite.recipe","artifactId":"rewrite-logging-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

