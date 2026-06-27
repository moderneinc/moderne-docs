---
title: "Spring Security 5.4 introduces the ability to configure `HttpSecurity` by creating a `SecurityFilterChain` bean"
sidebar_label: "Spring Security 5.4 introduces the ability to configure `HttpSecurity` by creating a `SecurityFilterChain` bean"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/security5/websecurityconfigureradapter" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Spring Security 5.4 introduces the ability to configure `HttpSecurity` by creating a `SecurityFilterChain` bean"}
  description={"The Spring Security `WebSecurityConfigurerAdapter` was deprecated 5.7, this recipe will transform `WebSecurityConfigurerAdapter` classes by using a component based approach. Check out the [spring-security-without-the-websecurityconfigureradapter](https://spring.io/blog/2022/02/21/spring-security-without-the-websecurityconfigureradapter) blog for more details."}
  fqName={"org.openrewrite.java.spring.security5.WebSecurityConfigurerAdapter"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/security5/WebSecurityConfigurerAdapter.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.security5.WebSecurityConfigurerAdapter"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.security5.WebSecurityConfigurerAdapter"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/security5/websecurityconfigureradapter.md"}
>

<RecipeHeader.Title>Spring Security 5.4 introduces the ability to configure `HttpSecurity` by creating a `SecurityFilterChain` bean</RecipeHeader.Title>

<RecipeHeader.Description>The Spring Security `WebSecurityConfigurerAdapter` was deprecated 5.7, this recipe will transform `WebSecurityConfigurerAdapter` classes by using a component based approach. Check out the [spring-security-without-the-websecurityconfigureradapter](https://spring.io/blog/2022/02/21/spring-security-without-the-websecurityconfigureradapter) blog for more details.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"package com.example.websecuritydemo;\n\nimport static org.springframework.security.config.Customizer.withDefaults;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\n\n@Configuration\npublic class SecurityConfiguration extends WebSecurityConfigurerAdapter {\n\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests((authz) -> authz\n                .anyRequest().authenticated()\n            )\n            .httpBasic(withDefaults());\n    }\n\n    void someMethod() {}\n\n}\n","after":"package com.example.websecuritydemo;\n\nimport static org.springframework.security.config.Customizer.withDefaults;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.web.SecurityFilterChain;\n\n@Configuration\npublic class SecurityConfiguration {\n\n    @Bean\n    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests((authz) -> authz\n                .anyRequest().authenticated()\n            )\n            .httpBasic(withDefaults());\n        return http.build();\n    }\n\n    void someMethod() {}\n\n}\n","diff":"@@ -4,0 +4,2 @@\n\nimport static org.springframework.security.config.Customizer.withDefaults;\n+\n+import org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n@@ -5,1 +7,0 @@\nimport static org.springframework.security.config.Customizer.withDefaults;\nimport org.springframework.context.annotation.Configuration;\n-import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\n@@ -7,0 +8,1 @@\nimport org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\n+import org.springframework.security.web.SecurityFilterChain;\n\n@@ -9,1 +11,1 @@\n\n@Configuration\n-public class SecurityConfiguration extends WebSecurityConfigurerAdapter {\n+public class SecurityConfiguration {\n\n@@ -11,2 +13,2 @@\npublic class SecurityConfiguration extends WebSecurityConfigurerAdapter {\n\n-   @Override\n-   protected void configure(HttpSecurity http) throws Exception {\n+   @Bean\n+   SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n@@ -18,0 +20,1 @@\n            )\n            .httpBasic(withDefaults());\n+       return http.build();\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.security5.WebSecurityConfigurerAdapter","displayName":"Spring Security 5.4 introduces the ability to configure `HttpSecurity` by creating a `SecurityFilterChain` bean","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

