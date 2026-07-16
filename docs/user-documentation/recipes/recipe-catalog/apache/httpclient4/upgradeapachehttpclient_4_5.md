---
title: "Migrates to ApacheHttpClient 4.5.x"
sidebar_label: "Migrates to ApacheHttpClient 4.5.x"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/apache/httpclient4/upgradeapachehttpclient_4_5" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrates to ApacheHttpClient 4.5.x"}
  description={"Migrate applications to the latest Apache HttpClient 4.5.x release. This recipe modifies application's build files, make changes to deprecated/preferred APIs, and migrates configuration settings that have changes between versions."}
  fqName={"org.openrewrite.apache.httpclient4.UpgradeApacheHttpClient_4_5"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-apache/blob/main/src/main/resources/META-INF/rewrite/apache-httpclient-4-5.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["httpclient","apache"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.apache.httpclient4.UpgradeApacheHttpClient_4_5"}
  artifact={"org.openrewrite.recipe:rewrite-apache"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.apache.httpclient4.UpgradeApacheHttpClient_4_5"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/apache/httpclient4/upgradeapachehttpclient_4_5.md"}
>

<RecipeHeader.Title>Migrates to ApacheHttpClient 4.5.x</RecipeHeader.Title>

<RecipeHeader.Description>Migrate applications to the latest Apache HttpClient 4.5.x release. This recipe modifies application's build files, make changes to deprecated/preferred APIs, and migrates configuration settings that have changes between versions.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Maps deprecated classes from Apache HttpClient 4.5.x to suggested replacements","href":"/user-documentation/recipes/recipe-catalog/apache/httpclient4/mappingdeprecatedclasses/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.apache.http.client.params.CookiePolicy;\n\nclass A {\n    void method() {\n        String c1 = CookiePolicy.BROWSER_COMPATIBILITY;\n        String c2 = CookiePolicy.NETSCAPE;\n        String c3 = CookiePolicy.RFC_2109;\n        String c4 = CookiePolicy.RFC_2965;\n        String c5 = CookiePolicy.BEST_MATCH;\n        String c6 = CookiePolicy.IGNORE_COOKIES;\n    }\n}\n","after":"import org.apache.http.client.config.CookieSpecs;\n\nclass A {\n    void method() {\n        String c1 = CookieSpecs.BROWSER_COMPATIBILITY;\n        String c2 = CookieSpecs.NETSCAPE;\n        String c3 = CookieSpecs.STANDARD;\n        String c4 = CookieSpecs.STANDARD_STRICT;\n        String c5 = CookieSpecs.BEST_MATCH;\n        String c6 = CookieSpecs.IGNORE_COOKIES;\n    }\n}\n","diff":"@@ -1,1 +1,1 @@\n-import org.apache.http.client.params.CookiePolicy;\n+import org.apache.http.client.config.CookieSpecs;\n\n@@ -5,6 +5,6 @@\nclass A {\n    void method() {\n-       String c1 = CookiePolicy.BROWSER_COMPATIBILITY;\n-       String c2 = CookiePolicy.NETSCAPE;\n-       String c3 = CookiePolicy.RFC_2109;\n-       String c4 = CookiePolicy.RFC_2965;\n-       String c5 = CookiePolicy.BEST_MATCH;\n-       String c6 = CookiePolicy.IGNORE_COOKIES;\n+       String c1 = CookieSpecs.BROWSER_COMPATIBILITY;\n+       String c2 = CookieSpecs.NETSCAPE;\n+       String c3 = CookieSpecs.STANDARD;\n+       String c4 = CookieSpecs.STANDARD_STRICT;\n+       String c5 = CookieSpecs.BEST_MATCH;\n+       String c6 = CookieSpecs.IGNORE_COOKIES;\n    }\n","newFile":false}]},{"variants":[{"language":"java","before":"import org.apache.http.client.params.CookiePolicy;\n\nclass A {\n    void method() {\n        String c1 = CookiePolicy.BROWSER_COMPATIBILITY;\n        String c2 = CookiePolicy.NETSCAPE;\n        String c3 = CookiePolicy.RFC_2109;\n        String c4 = CookiePolicy.RFC_2965;\n        String c5 = CookiePolicy.BEST_MATCH;\n        String c6 = CookiePolicy.IGNORE_COOKIES;\n    }\n}\n","after":"import org.apache.http.client.config.CookieSpecs;\n\nclass A {\n    void method() {\n        String c1 = CookieSpecs.BROWSER_COMPATIBILITY;\n        String c2 = CookieSpecs.NETSCAPE;\n        String c3 = CookieSpecs.STANDARD;\n        String c4 = CookieSpecs.STANDARD_STRICT;\n        String c5 = CookieSpecs.BEST_MATCH;\n        String c6 = CookieSpecs.IGNORE_COOKIES;\n    }\n}\n","diff":"@@ -1,1 +1,1 @@\n-import org.apache.http.client.params.CookiePolicy;\n+import org.apache.http.client.config.CookieSpecs;\n\n@@ -5,6 +5,6 @@\nclass A {\n    void method() {\n-       String c1 = CookiePolicy.BROWSER_COMPATIBILITY;\n-       String c2 = CookiePolicy.NETSCAPE;\n-       String c3 = CookiePolicy.RFC_2109;\n-       String c4 = CookiePolicy.RFC_2965;\n-       String c5 = CookiePolicy.BEST_MATCH;\n-       String c6 = CookiePolicy.IGNORE_COOKIES;\n+       String c1 = CookieSpecs.BROWSER_COMPATIBILITY;\n+       String c2 = CookieSpecs.NETSCAPE;\n+       String c3 = CookieSpecs.STANDARD;\n+       String c4 = CookieSpecs.STANDARD_STRICT;\n+       String c5 = CookieSpecs.BEST_MATCH;\n+       String c6 = CookieSpecs.IGNORE_COOKIES;\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.apache.httpclient4.UpgradeApacheHttpClient_4_5","displayName":"Migrates to ApacheHttpClient 4.5.x","groupId":"org.openrewrite.recipe","artifactId":"rewrite-apache","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

