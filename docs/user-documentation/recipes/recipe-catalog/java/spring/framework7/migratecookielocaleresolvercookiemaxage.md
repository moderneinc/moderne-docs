---
title: "Migrate `CookieLocaleResolver#setCookieMaxAge(Integer)` to `Duration`"
sidebar_label: "Migrate `CookieLocaleResolver#setCookieMaxAge(Integer)` to `Duration`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `CookieLocaleResolver#setCookieMaxAge(Integer)` to `Duration`"}
  description={"`CookieLocaleResolver#setCookieMaxAge(Integer)` was deprecated in Spring Framework 6.0 and removed in Spring Framework 7.0, leaving only the `Duration` overload. This recipe wraps the seconds argument in `Duration.ofSeconds(..)`."}
  fqName={"io.moderne.java.spring.framework7.MigrateCookieLocaleResolverCookieMaxAge"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.framework7.MigrateCookieLocaleResolverCookieMaxAge"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.framework7.MigrateCookieLocaleResolverCookieMaxAge"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/framework7/migratecookielocaleresolvercookiemaxage.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `CookieLocaleResolver#setCookieMaxAge(Integer)` to `Duration`</RecipeHeader.Title>

<RecipeHeader.Description>`CookieLocaleResolver#setCookieMaxAge(Integer)` was deprecated in Spring Framework 6.0 and removed in Spring Framework 7.0, leaving only the `Duration` overload. This recipe wraps the seconds argument in `Duration.ofSeconds(..)`.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.springframework.web.servlet.i18n.CookieLocaleResolver;\n\nclass LocaleConfig {\n    void configure() {\n        CookieLocaleResolver resolver = new CookieLocaleResolver(\"locale\");\n        resolver.setCookieMaxAge(3600);\n    }\n}\n","after":"import org.springframework.web.servlet.i18n.CookieLocaleResolver;\n\nimport java.time.Duration;\n\nclass LocaleConfig {\n    void configure() {\n        CookieLocaleResolver resolver = new CookieLocaleResolver(\"locale\");\n        resolver.setCookieMaxAge(Duration.ofSeconds(3600));\n    }\n}\n","diff":"@@ -3,0 +3,2 @@\nimport org.springframework.web.servlet.i18n.CookieLocaleResolver;\n\n+import java.time.Duration;\n+\nclass LocaleConfig {\n@@ -6,1 +8,1 @@\n    void configure() {\n        CookieLocaleResolver resolver = new CookieLocaleResolver(\"locale\");\n-       resolver.setCookieMaxAge(3600);\n+       resolver.setCookieMaxAge(Duration.ofSeconds(3600));\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.framework7.MigrateCookieLocaleResolverCookieMaxAge","displayName":"Migrate `CookieLocaleResolver#setCookieMaxAge(Integer)` to `Duration`","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

