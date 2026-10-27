---
title: "Migrate to Spring for GraphQL 2.0"
sidebar_label: "Migrate to Spring for GraphQL 2.0"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to Spring for GraphQL 2.0"}
  description={"Migrate applications to Spring for GraphQL 2.0. This upgrades explicitly versioned Spring for GraphQL, GraphQL Java, Java DataLoader and Apollo Federation dependencies to the versions Spring for GraphQL 2.0 requires, and rewrites APIs deprecated for removal to their replacements."}
  fqName={"io.moderne.java.spring.boot4.UpgradeSpringGraphQl_2_0"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["spring","graphql"]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.boot4.UpgradeSpringGraphQl_2_0"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.boot4.UpgradeSpringGraphQl_2_0"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot4/upgradespringgraphql_2_0.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate to Spring for GraphQL 2.0</RecipeHeader.Title>

<RecipeHeader.Description>Migrate applications to Spring for GraphQL 2.0. This upgrades explicitly versioned Spring for GraphQL, GraphQL Java, Java DataLoader and Apollo Federation dependencies to the versions Spring for GraphQL 2.0 requires, and rewrites APIs deprecated for removal to their replacements.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Add a `null` method argument","href":"/user-documentation/recipes/recipe-catalog/java/addnullmethodargument/"},{"name":"Add a `null` method argument","href":"/user-documentation/recipes/recipe-catalog/java/addnullmethodargument/"},{"name":"Add a `null` method argument","href":"/user-documentation/recipes/recipe-catalog/java/addnullmethodargument/"},{"name":"Add a `null` method argument","href":"/user-documentation/recipes/recipe-catalog/java/addnullmethodargument/"},{"name":"Migrate `defaultScrollSubrange(ScrollSubrange)` to `defaultScrollSubrange(int, Function)`","href":"/user-documentation/recipes/recipe-catalog/java/spring/graphql/migratedefaultscrollsubrange/"},{"name":"Migrate `GraphQlArgumentBinder` constructors to `GraphQlArgumentBinder.Options`","href":"/user-documentation/recipes/recipe-catalog/java/spring/graphql/migrategraphqlargumentbinderconstructor/"},{"name":"Migrate `setFallBackOnDirectFieldAccess` to `configureBinder`","href":"/user-documentation/recipes/recipe-catalog/java/spring/graphql/migratesetfallbackondirectfieldaccess/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.net.URI;\nimport java.util.Collections;\nimport java.util.Locale;\nimport java.util.Map;\n\nimport org.springframework.graphql.server.WebGraphQlRequest;\nimport org.springframework.http.HttpHeaders;\n\nclass InterceptorTest {\n    WebGraphQlRequest request(Map<String, Object> body) {\n        return new WebGraphQlRequest(URI.create(\"/graphql\"), new HttpHeaders(), null,\n                Collections.emptyMap(), body, \"1\", Locale.ENGLISH);\n    }\n}\n","after":"import java.net.URI;\nimport java.util.Collections;\nimport java.util.Locale;\nimport java.util.Map;\n\nimport org.springframework.graphql.server.WebGraphQlRequest;\nimport org.springframework.http.HttpHeaders;\n\nclass InterceptorTest {\n    WebGraphQlRequest request(Map<String, Object> body) {\n        return new WebGraphQlRequest(URI.create(\"/graphql\"), new HttpHeaders(), null, null,\n                Collections.emptyMap(), body, \"1\", Locale.ENGLISH);\n    }\n}\n","diff":"@@ -11,1 +11,1 @@\nclass InterceptorTest {\n    WebGraphQlRequest request(Map<String, Object> body) {\n-       return new WebGraphQlRequest(URI.create(\"/graphql\"), new HttpHeaders(), null,\n+       return new WebGraphQlRequest(URI.create(\"/graphql\"), new HttpHeaders(), null, null,\n                Collections.emptyMap(), body, \"1\", Locale.ENGLISH);\n","newFile":false}]},{"variants":[{"language":"java","before":"import java.net.URI;\nimport java.util.Collections;\nimport java.util.Locale;\nimport java.util.Map;\n\nimport org.springframework.graphql.server.WebGraphQlRequest;\nimport org.springframework.http.HttpHeaders;\n\nclass InterceptorTest {\n    WebGraphQlRequest request(Map<String, Object> body) {\n        return new WebGraphQlRequest(URI.create(\"/graphql\"), new HttpHeaders(), null,\n                Collections.emptyMap(), body, \"1\", Locale.ENGLISH);\n    }\n}\n","after":"import java.net.URI;\nimport java.util.Collections;\nimport java.util.Locale;\nimport java.util.Map;\n\nimport org.springframework.graphql.server.WebGraphQlRequest;\nimport org.springframework.http.HttpHeaders;\n\nclass InterceptorTest {\n    WebGraphQlRequest request(Map<String, Object> body) {\n        return new WebGraphQlRequest(URI.create(\"/graphql\"), new HttpHeaders(), null, null,\n                Collections.emptyMap(), body, \"1\", Locale.ENGLISH);\n    }\n}\n","diff":"@@ -11,1 +11,1 @@\nclass InterceptorTest {\n    WebGraphQlRequest request(Map<String, Object> body) {\n-       return new WebGraphQlRequest(URI.create(\"/graphql\"), new HttpHeaders(), null,\n+       return new WebGraphQlRequest(URI.create(\"/graphql\"), new HttpHeaders(), null, null,\n                Collections.emptyMap(), body, \"1\", Locale.ENGLISH);\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.boot4.UpgradeSpringGraphQl_2_0","displayName":"Migrate to Spring for GraphQL 2.0","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

