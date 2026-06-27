---
title: "Remove unneeded `oauth2Login` config when upgrading to Spring Security 6"
sidebar_label: "Remove unneeded `oauth2Login` config when upgrading to Spring Security 6"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/security6/removeoauth2loginconfig" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove unneeded `oauth2Login` config when upgrading to Spring Security 6"}
  description={"`oauth2Login()` is a Spring Security feature that allows users to authenticate with an OAuth2 or OpenID Connect 1.0 provider. When a user is authenticated using this feature, they are granted a set of authorities that determines what actions they are allowed to perform within the application.\n\nIn Spring Security 5, the default authority given to a user authenticated with an OAuth2 or OpenID Connect 1.0 provider via `oauth2Login()` is `ROLE_USER`. This means that the user is allowed to access the application's resources as a regular user.\n\nHowever, in Spring Security 6, the default authority given to a user authenticated with an OAuth2 provider is `OAUTH2_USER`, and the default authority given to a user authenticated with an OpenID Connect 1.0 provider is `OIDC_USER`. These authorities are more specific and allow for better customization of the user's permissions within the application.\n\nIf you are upgrading to Spring Security 6 and you have previously configured a `GrantedAuthoritiesMapper` to handle the authorities of users authenticated via `oauth2Login()`, you can remove it completely as the new default authorities should be sufficient."}
  fqName={"org.openrewrite.java.spring.security6.RemoveOauth2LoginConfig"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/security6/RemoveOauth2LoginConfig.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.security6.RemoveOauth2LoginConfig"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.security6.RemoveOauth2LoginConfig"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/security6/removeoauth2loginconfig.md"}
>

<RecipeHeader.Title>Remove unneeded `oauth2Login` config when upgrading to Spring Security 6</RecipeHeader.Title>

<RecipeHeader.Description>`oauth2Login()` is a Spring Security feature that allows users to authenticate with an OAuth2 or OpenID Connect 1.0 provider. When a user is authenticated using this feature, they are granted a set of authorities that determines what actions they are allowed to perform within the application.  In Spring Security 5, the default authority given to a user authenticated with an OAuth2 or OpenID Connect 1.0 provider via `oauth2Login()` is `ROLE_USER`. This means that the user is allowed to access the application's resources as a regular user.  However, in Spring Security 6, the default authority given to a user authenticated with an OAuth2 provider is `OAUTH2_USER`, and the default authority given to a user authenticated with an OpenID Connect 1.0 provider is `OIDC_USER`. These authorities are more specific and allow for better customization of the user's permissions within the application.  If you are upgrading to Spring Security 6 and you have previously configured a `GrantedAuthoritiesMapper` to handle the authorities of users authenticated via `oauth2Login()`, you can remove it completely as the new default authorities should be sufficient.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.web.SecurityFilterChain;\n\nimport java.util.HashSet;\nimport java.util.Set;\n\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http.authorizeHttpRequests(authorize -> authorize\n                .requestMatchers(\"/public\", \"/public/*\").permitAll()\n                .requestMatchers(\"/login\").permitAll()\n                .anyRequest().authenticated())\n            .oauth2Login()\n            .userInfoEndpoint()\n                .userAuthoritiesMapper(null);\n        return http.build();\n    }\n}\n","after":"import org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.web.SecurityFilterChain;\n\nimport java.util.HashSet;\nimport java.util.Set;\n\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http.authorizeHttpRequests(authorize -> authorize\n                .requestMatchers(\"/public\", \"/public/*\").permitAll()\n                .requestMatchers(\"/login\").permitAll()\n                .anyRequest().authenticated());\n        return http.build();\n    }\n}\n","diff":"@@ -18,4 +18,1 @@\n                .requestMatchers(\"/public\", \"/public/*\").permitAll()\n                .requestMatchers(\"/login\").permitAll()\n-               .anyRequest().authenticated())\n-           .oauth2Login()\n-           .userInfoEndpoint()\n-               .userAuthoritiesMapper(null);\n+               .anyRequest().authenticated());\n        return http.build();\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.security6.RemoveOauth2LoginConfig","displayName":"Remove unneeded `oauth2Login` config when upgrading to Spring Security 6","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

