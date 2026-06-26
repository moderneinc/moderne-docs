---
title: "Change supertype"
sidebar_label: "Change supertype"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change supertype"}
  description={"Changes the supertype of a class, optionally converting from extends to implements."}
  fqName={"io.moderne.java.dropwizard.boot.method.ChangeSuperType"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Change supertype"}
  description={"Changes the supertype of a class, optionally converting from extends to implements."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.dropwizard.boot.method.ChangeSuperType"}
  artifact={"io.moderne.recipe:rewrite-dropwizard"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.dropwizard.boot.method.ChangeSuperType"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/method/changesupertype.md"}
  moderneOnly
/>

<OptionsTable options={[{"type":"String","name":"targetClass","required":true,"description":"The fully qualified name of the class whose superclass should be changed.","example":"com.myorg.MyClass"},{"type":"String","name":"newSuperclass","required":true,"description":"The fully qualified name of the new superclass to extend or interface to implement.","example":"com.myorg.NewSuperclass"},{"type":"Boolean","name":"keepTypeParameters","required":false,"description":"Whether to keep existing type parameters on the target class declaration."},{"type":"Boolean","name":"convertToInterface","required":false,"description":"If the new supertype is an interface, setting this to true converts 'extends' to 'implements'."},{"type":"Boolean","name":"removeUnnecessaryOverrides","required":false,"description":"Remove method Override annotations that override methods from the *old* superclass but are no longer necessary with the new superclass."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"targetClass","value":"java.util.Vector"},{"parameter":"newSuperclass","value":"java.util.ArrayList"},{"parameter":"keepTypeParameters","value":"false"},{"parameter":"convertToInterface","value":"false"},{"parameter":"removeUnnecessaryOverrides","value":"false"}],"variants":[{"language":"java","before":"package org.example;\n\npublic class Child extends java.util.Vector<String> {\n    public void someMethod() {\n        this.add(\"test\");\n    }\n}\n","after":"package org.example;\n\nimport java.util.ArrayList;\n\npublic class Child extends ArrayList {\n    public void someMethod() {\n        this.add(\"test\");\n    }\n}\n","diff":"@@ -3,1 +3,3 @@\npackage org.example;\n\n-public class Child extends java.util.Vector<String> {\n+import java.util.ArrayList;\n+\n+public class Child extends ArrayList {\n    public void someMethod() {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.dropwizard.boot.method.ChangeSuperType","displayName":"Change supertype","groupId":"io.moderne.recipe","artifactId":"rewrite-dropwizard","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_DROPWIZARD","requiresConfiguration":true,"cliOptions":" --recipe-option \"targetClass=com.myorg.MyClass\" --recipe-option \"newSuperclass=com.myorg.NewSuperclass\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

