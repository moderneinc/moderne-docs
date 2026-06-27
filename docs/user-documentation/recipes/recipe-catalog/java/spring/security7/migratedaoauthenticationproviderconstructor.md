---
title: "Use constructor injection for `DaoAuthenticationProvider`"
sidebar_label: "Use constructor injection for `DaoAuthenticationProvider`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use constructor injection for `DaoAuthenticationProvider`"}
  description={"Spring Security 7.0 removed the no-arg `DaoAuthenticationProvider()` constructor and the `setUserDetailsService(UserDetailsService)` setter; `UserDetailsService` is now a required constructor argument. This recipe folds `setUserDetailsService(x)` into the constructor (`new DaoAuthenticationProvider(x)`) and removes the setter when the provider is created with the no-arg constructor in the same block, for both Java and Kotlin sources. `setPasswordEncoder(...)` and other configuration are preserved. When the setter cannot be safely folded, a TODO comment with migration guidance is added instead."}
  fqName={"io.moderne.java.spring.security7.MigrateDaoAuthenticationProviderConstructor"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.security7.MigrateDaoAuthenticationProviderConstructor"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.security7.MigrateDaoAuthenticationProviderConstructor"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/security7/migratedaoauthenticationproviderconstructor.md"}
  moderneOnly
>

<RecipeHeader.Title>Use constructor injection for `DaoAuthenticationProvider`</RecipeHeader.Title>

<RecipeHeader.Description>Spring Security 7.0 removed the no-arg `DaoAuthenticationProvider()` constructor and the `setUserDetailsService(UserDetailsService)` setter; `UserDetailsService` is now a required constructor argument. This recipe folds `setUserDetailsService(x)` into the constructor (`new DaoAuthenticationProvider(x)`) and removes the setter when the provider is created with the no-arg constructor in the same block, for both Java and Kotlin sources. `setPasswordEncoder(...)` and other configuration are preserved. When the setter cannot be safely folded, a TODO comment with migration guidance is added instead.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.springframework.security.authentication.dao.DaoAuthenticationProvider;\nimport org.springframework.security.core.userdetails.UserDetailsService;\nimport org.springframework.security.crypto.password.PasswordEncoder;\n\nclass SecurityConfig {\n    void configure(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder) {\n        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();\n        provider.setUserDetailsService(userDetailsService);\n        provider.setPasswordEncoder(passwordEncoder);\n    }\n}\n","after":"import org.springframework.security.authentication.dao.DaoAuthenticationProvider;\nimport org.springframework.security.core.userdetails.UserDetailsService;\nimport org.springframework.security.crypto.password.PasswordEncoder;\n\nclass SecurityConfig {\n    void configure(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder) {\n        DaoAuthenticationProvider provider = new DaoAuthenticationProvider(userDetailsService);\n        provider.setPasswordEncoder(passwordEncoder);\n    }\n}\n","diff":"@@ -7,2 +7,1 @@\nclass SecurityConfig {\n    void configure(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder) {\n-       DaoAuthenticationProvider provider = new DaoAuthenticationProvider();\n-       provider.setUserDetailsService(userDetailsService);\n+       DaoAuthenticationProvider provider = new DaoAuthenticationProvider(userDetailsService);\n        provider.setPasswordEncoder(passwordEncoder);\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.security7.MigrateDaoAuthenticationProviderConstructor","displayName":"Use constructor injection for `DaoAuthenticationProvider`","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

