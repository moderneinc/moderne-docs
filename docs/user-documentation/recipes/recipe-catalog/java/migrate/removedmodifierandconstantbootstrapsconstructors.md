---
title: "Change `java.lang.reflect.Modifier` and ` java.lang.invoke.ConstantBootstraps` method calls to static"
sidebar_label: "Change `java.lang.reflect.Modifier` and ` java.lang.invoke.ConstantBootstraps` method calls to static"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/removedmodifierandconstantbootstrapsconstructors" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change `java.lang.reflect.Modifier` and ` java.lang.invoke.ConstantBootstraps` method calls to static"}
  description={"The `java.lang.reflect.Modifier()` and `java.lang.invoke.ConstantBootstraps()` constructors have been removed in Java SE 15 because both classes only contain static methods. This recipe converts the usage of all methods in the two classes to be  static. See https://docs.oracle.com/en/java/javase/15/migrate/index.html#GUID-233853B8-0782-429E-BEF7-7532EE610E63 for more information on these changes."}
  fqName={"org.openrewrite.java.migrate.RemovedModifierAndConstantBootstrapsConstructors"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-version-17.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.RemovedModifierAndConstantBootstrapsConstructors"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.RemovedModifierAndConstantBootstrapsConstructors"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/removedmodifierandconstantbootstrapsconstructors.md"}
>

<RecipeHeader.Title>Change `java.lang.reflect.Modifier` and ` java.lang.invoke.ConstantBootstraps` method calls to static</RecipeHeader.Title>

<RecipeHeader.Description>The `java.lang.reflect.Modifier()` and `java.lang.invoke.ConstantBootstraps()` constructors have been removed in Java SE 15 because both classes only contain static methods. This recipe converts the usage of all methods in the two classes to be  static. See https://docs.oracle.com/en/java/javase/15/migrate/index.html#GUID-233853B8-0782-429E-BEF7-7532EE610E63 for more information on these changes.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change method target to static","href":"/user-documentation/recipes/recipe-catalog/java/changemethodtargettostatic/"},{"name":"Change method target to static","href":"/user-documentation/recipes/recipe-catalog/java/changemethodtargettostatic/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.lang.invoke.ConstantBootstraps;\nimport java.lang.reflect.Modifier;\n\nclass RemovedModifierAndConstantBootstrapsConstructorsApp {\n     public void testModifier(Modifier modifier) throws Exception {\n         modifier.classModifiers();\n         modifier.fieldModifiers();\n         modifier.isFinal(1);\n         modifier.isStatic(1);\n         Modifier.isPublic(0);\n     }\n     public void testConstantBootstraps(ConstantBootstraps constantBootstraps) throws Exception {\n         constantBootstraps.enumConstant(null,null,null);\n         constantBootstraps.primitiveClass(null,null,null);\n         ConstantBootstraps.nullConstant(null, null, null);\n     }\n}\n","after":"import java.lang.invoke.ConstantBootstraps;\nimport java.lang.reflect.Modifier;\n\nclass RemovedModifierAndConstantBootstrapsConstructorsApp {\n     public void testModifier(Modifier modifier) throws Exception {\n         Modifier.classModifiers();\n         Modifier.fieldModifiers();\n         Modifier.isFinal(1);\n         Modifier.isStatic(1);\n         Modifier.isPublic(0);\n     }\n     public void testConstantBootstraps(ConstantBootstraps constantBootstraps) throws Exception {\n         ConstantBootstraps.enumConstant(null,null,null);\n         ConstantBootstraps.primitiveClass(null,null,null);\n         ConstantBootstraps.nullConstant(null, null, null);\n     }\n}\n","diff":"@@ -6,4 +6,4 @@\nclass RemovedModifierAndConstantBootstrapsConstructorsApp {\n     public void testModifier(Modifier modifier) throws Exception {\n-        modifier.classModifiers();\n-        modifier.fieldModifiers();\n-        modifier.isFinal(1);\n-        modifier.isStatic(1);\n+        Modifier.classModifiers();\n+        Modifier.fieldModifiers();\n+        Modifier.isFinal(1);\n+        Modifier.isStatic(1);\n         Modifier.isPublic(0);\n@@ -13,2 +13,2 @@\n     }\n     public void testConstantBootstraps(ConstantBootstraps constantBootstraps) throws Exception {\n-        constantBootstraps.enumConstant(null,null,null);\n-        constantBootstraps.primitiveClass(null,null,null);\n+        ConstantBootstraps.enumConstant(null,null,null);\n+        ConstantBootstraps.primitiveClass(null,null,null);\n         ConstantBootstraps.nullConstant(null, null, null);\n","newFile":false}]},{"variants":[{"language":"java","before":"import java.lang.invoke.ConstantBootstraps;\nimport java.lang.reflect.Modifier;\n\nclass RemovedModifierAndConstantBootstrapsConstructorsApp {\n     public void testModifier(Modifier modifier) throws Exception {\n         modifier.classModifiers();\n         modifier.fieldModifiers();\n         modifier.isFinal(1);\n         modifier.isStatic(1);\n         Modifier.isPublic(0);\n     }\n     public void testConstantBootstraps(ConstantBootstraps constantBootstraps) throws Exception {\n         constantBootstraps.enumConstant(null,null,null);\n         constantBootstraps.primitiveClass(null,null,null);\n         ConstantBootstraps.nullConstant(null, null, null);\n     }\n}\n","after":"import java.lang.invoke.ConstantBootstraps;\nimport java.lang.reflect.Modifier;\n\nclass RemovedModifierAndConstantBootstrapsConstructorsApp {\n     public void testModifier(Modifier modifier) throws Exception {\n         Modifier.classModifiers();\n         Modifier.fieldModifiers();\n         Modifier.isFinal(1);\n         Modifier.isStatic(1);\n         Modifier.isPublic(0);\n     }\n     public void testConstantBootstraps(ConstantBootstraps constantBootstraps) throws Exception {\n         ConstantBootstraps.enumConstant(null,null,null);\n         ConstantBootstraps.primitiveClass(null,null,null);\n         ConstantBootstraps.nullConstant(null, null, null);\n     }\n}\n","diff":"@@ -6,4 +6,4 @@\nclass RemovedModifierAndConstantBootstrapsConstructorsApp {\n     public void testModifier(Modifier modifier) throws Exception {\n-        modifier.classModifiers();\n-        modifier.fieldModifiers();\n-        modifier.isFinal(1);\n-        modifier.isStatic(1);\n+        Modifier.classModifiers();\n+        Modifier.fieldModifiers();\n+        Modifier.isFinal(1);\n+        Modifier.isStatic(1);\n         Modifier.isPublic(0);\n@@ -13,2 +13,2 @@\n     }\n     public void testConstantBootstraps(ConstantBootstraps constantBootstraps) throws Exception {\n-        constantBootstraps.enumConstant(null,null,null);\n-        constantBootstraps.primitiveClass(null,null,null);\n+        ConstantBootstraps.enumConstant(null,null,null);\n+        ConstantBootstraps.primitiveClass(null,null,null);\n         ConstantBootstraps.nullConstant(null, null, null);\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.RemovedModifierAndConstantBootstrapsConstructors","displayName":"Change `java.lang.reflect.Modifier` and ` java.lang.invoke.ConstantBootstraps` method calls to static","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

