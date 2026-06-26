---
title: "Replace AWT `getPeer()` method"
sidebar_label: "Replace AWT `getPeer()` method"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/replaceawtgetpeermethod" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace AWT `getPeer()` method"}
  description={"This recipe replaces the use of `getPeer()` method in `java.awt.*` classes. `component.getPeer() != null` is replaced with `component.isDisplayable()` and `component.getPeer() instanceof LightweightPeer` is replaced with `component.isLightweight()`."}
  fqName={"org.openrewrite.java.migrate.ReplaceAWTGetPeerMethod"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/ReplaceAWTGetPeerMethod.java"}
/>

<RecipeHeader
  displayName={"Replace AWT `getPeer()` method"}
  description={"This recipe replaces the use of `getPeer()` method in `java.awt.*` classes. `component.getPeer() != null` is replaced with `component.isDisplayable()` and `component.getPeer() instanceof LightweightPeer` is replaced with `component.isLightweight()`."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.ReplaceAWTGetPeerMethod"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.ReplaceAWTGetPeerMethod"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/replaceawtgetpeermethod.md"}
/>

<OptionsTable options={[{"type":"String","name":"getPeerMethodPattern","required":false,"description":"The method pattern to match and replace.","example":"java.awt.* getPeer()"},{"type":"String","name":"lightweightPeerFQCN","required":false,"description":"The fully qualified class name of the LightweightPeer interface to replace in `instanceof`.","example":"java.awt.peer.LightweightPeer"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"getPeerMethodPattern","value":"com.test.Component1 getPeer()"},{"parameter":"lightweightPeerFQCN","value":"com.test.TestDummy"}],"variants":[{"language":"java","before":"import com.test.Component1;\nimport com.test.TestDummy;\nclass Test {\n    void foo() {\n        Test t1 = new Test();\n        Component1 c = new Component1();\n        if (c.getPeer() instanceof com.test.TestDummy) {\n        }\n        if (c.getPeer() instanceof TestDummy) {\n        }\n        Component1 y = new Component1();\n        if (y.getPeer() != null) {\n        }\n        if (null != y.getPeer()) {\n        }\n    }\n}\n","after":"import com.test.Component1;\nclass Test {\n    void foo() {\n        Test t1 = new Test();\n        Component1 c = new Component1();\n        if (c.isLightweight()) {\n        }\n        if (c.isLightweight()) {\n        }\n        Component1 y = new Component1();\n        if (y.isDisplayable()) {\n        }\n        if (y.isDisplayable()) {\n        }\n    }\n}\n","diff":"@@ -2,1 +2,0 @@\nimport com.test.Component1;\n-import com.test.TestDummy;\nclass Test {\n@@ -7,1 +6,1 @@\n        Test t1 = new Test();\n        Component1 c = new Component1();\n-       if (c.getPeer() instanceof com.test.TestDummy) {\n+       if (c.isLightweight()) {\n        }\n@@ -9,1 +8,1 @@\n        if (c.getPeer() instanceof com.test.TestDummy) {\n        }\n-       if (c.getPeer() instanceof TestDummy) {\n+       if (c.isLightweight()) {\n        }\n@@ -12,1 +11,1 @@\n        }\n        Component1 y = new Component1();\n-       if (y.getPeer() != null) {\n+       if (y.isDisplayable()) {\n        }\n@@ -14,1 +13,1 @@\n        if (y.getPeer() != null) {\n        }\n-       if (null != y.getPeer()) {\n+       if (y.isDisplayable()) {\n        }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.ReplaceAWTGetPeerMethod","displayName":"Replace AWT `getPeer()` method","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

