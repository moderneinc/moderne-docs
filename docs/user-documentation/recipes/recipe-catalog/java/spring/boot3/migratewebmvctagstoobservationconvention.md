---
title: "Migrate `WebMvcTagsProvider` to `DefaultServerRequestObservationConvention`"
sidebar_label: "Migrate `WebMvcTagsProvider` to `DefaultServerRequestObservationConvention`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/boot3/migratewebmvctagstoobservationconvention" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `WebMvcTagsProvider` to `DefaultServerRequestObservationConvention`"}
  description={"Migrate `WebMvcTagsProvider` to `DefaultServerRequestObservationConvention` as part of Spring Boot 3.2 removals."}
  fqName={"org.openrewrite.java.spring.boot3.MigrateWebMvcTagsToObservationConvention"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot3/MigrateWebMvcTagsToObservationConvention.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.boot3.MigrateWebMvcTagsToObservationConvention"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.MigrateWebMvcTagsToObservationConvention"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot3/migratewebmvctagstoobservationconvention.md"}
>

<RecipeHeader.Title>Migrate `WebMvcTagsProvider` to `DefaultServerRequestObservationConvention`</RecipeHeader.Title>

<RecipeHeader.Description>Migrate `WebMvcTagsProvider` to `DefaultServerRequestObservationConvention` as part of Spring Boot 3.2 removals.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import io.micrometer.core.instrument.Tag;\nimport io.micrometer.core.instrument.Tags;\nimport jakarta.servlet.http.HttpServletRequest;\nimport jakarta.servlet.http.HttpServletResponse;\nimport org.springframework.boot.actuate.metrics.web.servlet.WebMvcTags;\nimport org.springframework.boot.actuate.metrics.web.servlet.WebMvcTagsProvider;\n\nclass CustomWebMvcTagsProvider implements WebMvcTagsProvider {\n\n    @Override\n    public Iterable<Tag> getTags(HttpServletRequest request, HttpServletResponse response, Object handler, Throwable exception) {\n        Tags tags = Tags.of(WebMvcTags.method(request), WebMvcTags.uri(request, response), WebMvcTags.status(response), WebMvcTags.outcome(response));\n\n        String customHeader = request.getHeader(\"X-Custom-Header\");\n        if (customHeader != null) {\n            tags = tags.and(\"custom.header\", customHeader);\n        }\n        return tags;\n    }\n}\n","after":"import io.micrometer.common.KeyValue;\nimport io.micrometer.common.KeyValues;\nimport jakarta.servlet.http.HttpServletRequest;\nimport org.springframework.http.server.observation.DefaultServerRequestObservationConvention;\nimport org.springframework.http.server.observation.ServerRequestObservationContext;\n\nclass CustomWebMvcTagsProvider extends DefaultServerRequestObservationConvention {\n\n    @Override\n    public KeyValues getHighCardinalityKeyValues(ServerRequestObservationContext context) {\n        HttpServletRequest request = context.getCarrier();\n        KeyValues values = super.getHighCardinalityKeyValues(context);\n\n        String customHeader = request.getHeader(\"X-Custom-Header\");\n        if (customHeader != null) {\n            values.and(KeyValue.of(\"custom.header\", customHeader));\n        }\n        return values;\n    }\n}\n","diff":"@@ -1,2 +1,2 @@\n-import io.micrometer.core.instrument.Tag;\n-import io.micrometer.core.instrument.Tags;\n+import io.micrometer.common.KeyValue;\n+import io.micrometer.common.KeyValues;\nimport jakarta.servlet.http.HttpServletRequest;\n@@ -4,3 +4,2 @@\nimport io.micrometer.core.instrument.Tags;\nimport jakarta.servlet.http.HttpServletRequest;\n-import jakarta.servlet.http.HttpServletResponse;\n-import org.springframework.boot.actuate.metrics.web.servlet.WebMvcTags;\n-import org.springframework.boot.actuate.metrics.web.servlet.WebMvcTagsProvider;\n+import org.springframework.http.server.observation.DefaultServerRequestObservationConvention;\n+import org.springframework.http.server.observation.ServerRequestObservationContext;\n\n@@ -8,1 +7,1 @@\nimport org.springframework.boot.actuate.metrics.web.servlet.WebMvcTagsProvider;\n\n-class CustomWebMvcTagsProvider implements WebMvcTagsProvider {\n+class CustomWebMvcTagsProvider extends DefaultServerRequestObservationConvention {\n\n@@ -11,2 +10,3 @@\n\n    @Override\n-   public Iterable<Tag> getTags(HttpServletRequest request, HttpServletResponse response, Object handler, Throwable exception) {\n-       Tags tags = Tags.of(WebMvcTags.method(request), WebMvcTags.uri(request, response), WebMvcTags.status(response), WebMvcTags.outcome(response));\n+   public KeyValues getHighCardinalityKeyValues(ServerRequestObservationContext context) {\n+       HttpServletRequest request = context.getCarrier();\n+       KeyValues values = super.getHighCardinalityKeyValues(context);\n\n@@ -16,1 +16,1 @@\n        String customHeader = request.getHeader(\"X-Custom-Header\");\n        if (customHeader != null) {\n-           tags = tags.and(\"custom.header\", customHeader);\n+           values.and(KeyValue.of(\"custom.header\", customHeader));\n        }\n@@ -18,1 +18,1 @@\n            tags = tags.and(\"custom.header\", customHeader);\n        }\n-       return tags;\n+       return values;\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.boot3.MigrateWebMvcTagsToObservationConvention","displayName":"Migrate `WebMvcTagsProvider` to `DefaultServerRequestObservationConvention`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

