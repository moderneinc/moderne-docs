---
title: "Migrate `ResourceServerConfigurerAdapter` to a `SecurityFilterChain` bean"
sidebar_label: "Migrate `ResourceServerConfigurerAdapter` to a `SecurityFilterChain` bean"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `ResourceServerConfigurerAdapter` to a `SecurityFilterChain` bean"}
  description={"Replaces the Spring Security OAuth `@EnableResourceServer` and `ResourceServerConfigurerAdapter` combination with a `SecurityFilterChain` bean calling `oauth2ResourceServer(..)`, as provided by `spring-security-oauth2-resource-server`. Classes that also override `configure(ResourceServerSecurityConfigurer)` are left untouched and marked instead: those calls have no faithful equivalent, and dropping `resourceId` in particular would silently stop the resource server validating the `aud` claim."}
  fqName={"io.moderne.java.spring.security.oauth.MigrateResourceServerConfigurerAdapter"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.security.oauth.MigrateResourceServerConfigurerAdapter"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.security.oauth.MigrateResourceServerConfigurerAdapter"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/security/oauth/migrateresourceserverconfigureradapter.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `ResourceServerConfigurerAdapter` to a `SecurityFilterChain` bean</RecipeHeader.Title>

<RecipeHeader.Description>Replaces the Spring Security OAuth `@EnableResourceServer` and `ResourceServerConfigurerAdapter` combination with a `SecurityFilterChain` bean calling `oauth2ResourceServer(..)`, as provided by `spring-security-oauth2-resource-server`. Classes that also override `configure(ResourceServerSecurityConfigurer)` are left untouched and marked instead: those calls have no faithful equivalent, and dropping `resourceId` in particular would silently stop the resource server validating the `aud` claim.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;\nimport org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;\n\n@Configuration\n@EnableResourceServer\npublic class ResourceServerConfig extends ResourceServerConfigurerAdapter {\n\n    @Override\n    public void configure(HttpSecurity http) throws Exception {\n        http.authorizeRequests().anyRequest().authenticated();\n    }\n}\n","after":"import org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.Customizer;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.web.SecurityFilterChain;\n\n@Configuration\npublic class ResourceServerConfig {\n\n    @Bean\n    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.authorizeRequests().anyRequest().authenticated();\n        return http.oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults())).build();\n    }\n}\n","diff":"@@ -1,0 +1,1 @@\n+import org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n@@ -2,0 +3,1 @@\nimport org.springframework.context.annotation.Configuration;\n+import org.springframework.security.config.Customizer;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\n@@ -3,2 +5,1 @@\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\n-import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;\n-import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;\n+import org.springframework.security.web.SecurityFilterChain;\n\n@@ -7,2 +8,1 @@\n\n@Configuration\n-@EnableResourceServer\n-public class ResourceServerConfig extends ResourceServerConfigurerAdapter {\n+public class ResourceServerConfig {\n\n@@ -10,2 +10,2 @@\npublic class ResourceServerConfig extends ResourceServerConfigurerAdapter {\n\n-   @Override\n-   public void configure(HttpSecurity http) throws Exception {\n+   @Bean\n+   SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.authorizeRequests().anyRequest().authenticated();\n@@ -13,0 +13,1 @@\n    public void configure(HttpSecurity http) throws Exception {\n        http.authorizeRequests().anyRequest().authenticated();\n+       return http.oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults())).build();\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.security.oauth.MigrateResourceServerConfigurerAdapter","displayName":"Migrate `ResourceServerConfigurerAdapter` to a `SecurityFilterChain` bean","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

