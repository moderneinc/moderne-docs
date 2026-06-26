---
title: "Flag deprecated suffix pattern matching usage for manual review"
sidebar_label: "Flag deprecated suffix pattern matching usage for manual review"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Flag deprecated suffix pattern matching usage for manual review"}
  description={"Handles deprecated `setUseSuffixPatternMatch()` and `setUseRegisteredSuffixPatternMatch()` calls. When suffix pattern matching is explicitly enabled, adds TODO comments and search markers since there is no automatic migration path. When explicitly disabled, the call is safely removed since `false` is already the default since Spring Framework 5.3."}
  fqName={"io.moderne.java.spring.framework.FlagSuffixPatternMatchUsage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Flag deprecated suffix pattern matching usage for manual review"}
  description={"Handles deprecated `setUseSuffixPatternMatch()` and `setUseRegisteredSuffixPatternMatch()` calls. When suffix pattern matching is explicitly enabled, adds TODO comments and search markers since there is no automatic migration path. When explicitly disabled, the call is safely removed since `false` is already the default since Spring Framework 5.3."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.framework.FlagSuffixPatternMatchUsage"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.framework.FlagSuffixPatternMatchUsage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/framework/flagsuffixpatternmatchusage.md"}
  moderneOnly
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.springframework.context.annotation.Configuration;\nimport org.springframework.web.servlet.config.annotation.PathMatchConfigurer;\nimport org.springframework.web.servlet.config.annotation.WebMvcConfigurer;\n\n@Configuration\npublic class MyWebConfiguration implements WebMvcConfigurer {\n    @Override\n    public void configurePathMatch(PathMatchConfigurer configurer) {\n        configurer.setUseSuffixPatternMatch(true);\n    }\n}\n","after":"import org.springframework.context.annotation.Configuration;\nimport org.springframework.web.servlet.config.annotation.PathMatchConfigurer;\nimport org.springframework.web.servlet.config.annotation.WebMvcConfigurer;\n\n@Configuration\npublic class MyWebConfiguration implements WebMvcConfigurer {\n    @Override\n    public void configurePathMatch(PathMatchConfigurer configurer) {\n        // TODO: Suffix pattern matching has been removed in Spring Framework 7.0. If your application relies on URL extensions like /users.json or /users.xml, migrate to content negotiation via Accept headers or use favorParameter(true) with a query parameter. See https://github.com/spring-projects/spring-framework/wiki/Spring-Framework-7.0-Release-Notes\n/*~~(Suffix pattern matching has been removed in Spring Framework 7.0. This configuration requires manual migration.)~~>*/configurer.setUseSuffixPatternMatch(true);\n    }\n}\n","diff":"@@ -9,1 +9,2 @@\n    @Override\n    public void configurePathMatch(PathMatchConfigurer configurer) {\n-       configurer.setUseSuffixPatternMatch(true);\n+       // TODO: Suffix pattern matching has been removed in Spring Framework 7.0. If your application relies on URL extensions like /users.json or /users.xml, migrate to content negotiation via Accept headers or use favorParameter(true) with a query parameter. See https://github.com/spring-projects/spring-framework/wiki/Spring-Framework-7.0-Release-Notes\n+/*~~(Suffix pattern matching has been removed in Spring Framework 7.0. This configuration requires manual migration.)~~>*/configurer.setUseSuffixPatternMatch(true);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.framework.FlagSuffixPatternMatchUsage","displayName":"Flag deprecated suffix pattern matching usage for manual review","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

