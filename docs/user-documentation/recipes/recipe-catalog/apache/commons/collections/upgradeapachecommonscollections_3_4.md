---
title: "Migrates to Apache Commons Collections 4.x"
sidebar_label: "Migrates to Apache Commons Collections 4.x"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/apache/commons/collections/upgradeapachecommonscollections_3_4" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrates to Apache Commons Collections 4.x"}
  description={"Migrate applications to the latest Apache Commons Collections 4.x release. This recipe modifies application's build files, make changes to deprecated/preferred APIs, and migrates configuration settings that have changes between versions."}
  fqName={"org.openrewrite.apache.commons.collections.UpgradeApacheCommonsCollections_3_4"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-apache/blob/main/src/main/resources/META-INF/rewrite/apache-commons-collections-3-4.yml"}
/>

<RecipeHeader
  displayName={"Migrates to Apache Commons Collections 4.x"}
  description={"Migrate applications to the latest Apache Commons Collections 4.x release. This recipe modifies application's build files, make changes to deprecated/preferred APIs, and migrates configuration settings that have changes between versions."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["apache","collections","commons"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.apache.commons.collections.UpgradeApacheCommonsCollections_3_4"}
  artifact={"org.openrewrite.recipe:rewrite-apache"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.apache.commons.collections.UpgradeApacheCommonsCollections_3_4"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/apache/commons/collections/upgradeapachecommonscollections_3_4.md"}
/>

<RecipeList recipes={[{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change static field access to static method access","href":"java/changestaticfieldtomethod"},{"name":"Change static field access to static method access","href":"java/changestaticfieldtomethod"},{"name":"Rename package name","href":"java/changepackage"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.apache.commons.collections.CollectionUtils;\nimport org.apache.commons.collections.map.IdentityMap;\nimport org.apache.commons.collections.ListUtils;\nimport org.apache.commons.collections.MapUtils;\nimport org.apache.commons.collections.FastArrayList;\n\nimport java.util.List;\nimport java.util.Map;\n\nclass Test {\n    static void helloApacheCollections() {\n        Object[] input = new Object[] { \"one\", \"two\" };\n        CollectionUtils.reverseArray(input);\n        IdentityMap identityMap = new IdentityMap();\n        Map emptyMap = MapUtils.EMPTY_MAP;\n        FastArrayList fastList = new FastArrayList(100);\n        List emptyList = ListUtils.EMPTY_LIST;\n    }\n}\n","after":"import org.apache.commons.collections4.CollectionUtils;\n\nimport java.util.Collections;\nimport java.util.IdentityHashMap;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.concurrent.CopyOnWriteArrayList;\n\nclass Test {\n    static void helloApacheCollections() {\n        Object[] input = new Object[] { \"one\", \"two\" };\n        CollectionUtils.reverseArray(input);\n        IdentityHashMap identityMap = new IdentityHashMap();\n        Map emptyMap = Collections.emptyMap();\n        CopyOnWriteArrayList fastList = new CopyOnWriteArrayList(100);\n        List emptyList = Collections.emptyList();\n    }\n}\n","diff":"@@ -1,5 +1,1 @@\n-import org.apache.commons.collections.CollectionUtils;\n-import org.apache.commons.collections.map.IdentityMap;\n-import org.apache.commons.collections.ListUtils;\n-import org.apache.commons.collections.MapUtils;\n-import org.apache.commons.collections.FastArrayList;\n+import org.apache.commons.collections4.CollectionUtils;\n\n@@ -7,0 +3,2 @@\nimport org.apache.commons.collections.FastArrayList;\n\n+import java.util.Collections;\n+import java.util.IdentityHashMap;\nimport java.util.List;\n@@ -9,0 +7,1 @@\nimport java.util.List;\nimport java.util.Map;\n+import java.util.concurrent.CopyOnWriteArrayList;\n\n@@ -14,4 +13,4 @@\n        Object[] input = new Object[] { \"one\", \"two\" };\n        CollectionUtils.reverseArray(input);\n-       IdentityMap identityMap = new IdentityMap();\n-       Map emptyMap = MapUtils.EMPTY_MAP;\n-       FastArrayList fastList = new FastArrayList(100);\n-       List emptyList = ListUtils.EMPTY_LIST;\n+       IdentityHashMap identityMap = new IdentityHashMap();\n+       Map emptyMap = Collections.emptyMap();\n+       CopyOnWriteArrayList fastList = new CopyOnWriteArrayList(100);\n+       List emptyList = Collections.emptyList();\n    }\n","newFile":false}]},{"variants":[{"language":"java","before":"import org.apache.commons.collections.CollectionUtils;\nimport org.apache.commons.collections.map.IdentityMap;\nimport org.apache.commons.collections.ListUtils;\nimport org.apache.commons.collections.MapUtils;\nimport org.apache.commons.collections.FastArrayList;\n\nimport java.util.List;\nimport java.util.Map;\n\nclass Test {\n    static void helloApacheCollections() {\n        Object[] input = new Object[] { \"one\", \"two\" };\n        CollectionUtils.reverseArray(input);\n        IdentityMap identityMap = new IdentityMap();\n        Map emptyMap = MapUtils.EMPTY_MAP;\n        FastArrayList fastList = new FastArrayList(100);\n        List emptyList = ListUtils.EMPTY_LIST;\n    }\n}\n","after":"import org.apache.commons.collections4.CollectionUtils;\n\nimport java.util.Collections;\nimport java.util.IdentityHashMap;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.concurrent.CopyOnWriteArrayList;\n\nclass Test {\n    static void helloApacheCollections() {\n        Object[] input = new Object[] { \"one\", \"two\" };\n        CollectionUtils.reverseArray(input);\n        IdentityHashMap identityMap = new IdentityHashMap();\n        Map emptyMap = Collections.emptyMap();\n        CopyOnWriteArrayList fastList = new CopyOnWriteArrayList(100);\n        List emptyList = Collections.emptyList();\n    }\n}\n","diff":"@@ -1,5 +1,1 @@\n-import org.apache.commons.collections.CollectionUtils;\n-import org.apache.commons.collections.map.IdentityMap;\n-import org.apache.commons.collections.ListUtils;\n-import org.apache.commons.collections.MapUtils;\n-import org.apache.commons.collections.FastArrayList;\n+import org.apache.commons.collections4.CollectionUtils;\n\n@@ -7,0 +3,2 @@\nimport org.apache.commons.collections.FastArrayList;\n\n+import java.util.Collections;\n+import java.util.IdentityHashMap;\nimport java.util.List;\n@@ -9,0 +7,1 @@\nimport java.util.List;\nimport java.util.Map;\n+import java.util.concurrent.CopyOnWriteArrayList;\n\n@@ -14,4 +13,4 @@\n        Object[] input = new Object[] { \"one\", \"two\" };\n        CollectionUtils.reverseArray(input);\n-       IdentityMap identityMap = new IdentityMap();\n-       Map emptyMap = MapUtils.EMPTY_MAP;\n-       FastArrayList fastList = new FastArrayList(100);\n-       List emptyList = ListUtils.EMPTY_LIST;\n+       IdentityHashMap identityMap = new IdentityHashMap();\n+       Map emptyMap = Collections.emptyMap();\n+       CopyOnWriteArrayList fastList = new CopyOnWriteArrayList(100);\n+       List emptyList = Collections.emptyList();\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.apache.commons.collections.UpgradeApacheCommonsCollections_3_4","displayName":"Migrates to Apache Commons Collections 4.x","groupId":"org.openrewrite.recipe","artifactId":"rewrite-apache","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

