---
title: "Find Spring MVC handlers missing authorization"
sidebar_label: "Find Spring MVC handlers missing authorization"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Spring MVC handlers missing authorization"}
  description={"Flags Spring MVC (and WebFlux) controller methods reachable to anonymous users — either matched by `permitAll()` in a `SecurityFilterChain` / `SecurityWebFilterChain` bean (or in a legacy `WebSecurityConfigurerAdapter.configure(HttpSecurity)` override) or with no matching rule at all — and which do not carry an explicit authorization annotation (`@PreAuthorize`, `@PostAuthorize`, `@Secured`, `@RolesAllowed`, `@PermitAll`, `@DenyAll`), including annotations inherited from a superclass or overridden parent method. Security rules are read from both the Java fluent API (`requestMatchers(...).permitAll()`) and the Kotlin DSL (`authorize(\"/path\", permitAll)`). Detector only; does not modify code."}
  fqName={"org.openrewrite.java.security.search.FindMissingSpringAuthorization"}
  languages={["Java"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={["CWE-862","security","RSPEC-S4502"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.java.security.search.FindMissingSpringAuthorization"}
  artifact={"org.openrewrite.recipe:rewrite-java-security"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.security.search.FindMissingSpringAuthorization"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/security/search/findmissingspringauthorization.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Spring MVC handlers missing authorization</RecipeHeader.Title>

<RecipeHeader.Description>Flags Spring MVC (and WebFlux) controller methods reachable to anonymous users — either matched by `permitAll()` in a `SecurityFilterChain` / `SecurityWebFilterChain` bean (or in a legacy `WebSecurityConfigurerAdapter.configure(HttpSecurity)` override) or with no matching rule at all — and which do not carry an explicit authorization annotation (`@PreAuthorize`, `@PostAuthorize`, `@Secured`, `@RolesAllowed`, `@PermitAll`, `@DenyAll`), including annotations inherited from a superclass or overridden parent method. Security rules are read from both the Java fluent API (`requestMatchers(...).permitAll()`) and the Kotlin DSL (`authorize("/path", permitAll)`). Detector only; does not modify code.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.springframework.stereotype.Controller;\nimport org.springframework.web.bind.annotation.GetMapping;\n\n@Controller\nclass AccountController {\n    @GetMapping(\"/account/{id}\")\n    public String show() {\n        return \"account\";\n    }\n}\n","after":"import org.springframework.stereotype.Controller;\nimport org.springframework.web.bind.annotation.GetMapping;\n\n@Controller\nclass AccountController {\n    @GetMapping(\"/account/{id}\")\n    public String /*~~(No authorization annotation and no matching SecurityFilterChain rule for `/account/{id}`)~~>*/show() {\n        return \"account\";\n    }\n}\n","diff":"@@ -7,1 +7,1 @@\nclass AccountController {\n    @GetMapping(\"/account/{id}\")\n-   public String show() {\n+   public String /*~~(No authorization annotation and no matching SecurityFilterChain rule for `/account/{id}`)~~>*/show() {\n        return \"account\";\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.security.search.FindMissingSpringAuthorization","displayName":"Find Spring MVC handlers missing authorization","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-security","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.java.security.table.MissingAuthorization","displayName":"Missing authorization","description":"Spring MVC handler methods reachable to anonymous users without an explicit authorization annotation.","columns":[{"name":"Source path","description":"The path to the source file containing the handler method."},{"name":"Controller class","description":"The fully qualified name of the controller class."},{"name":"Handler method","description":"The name of the handler method."},{"name":"HTTP method","description":"The HTTP method served by the handler."},{"name":"URL pattern","description":"The combined class- and method-level request mapping pattern."},{"name":"Reason","description":"Why the handler is considered to be missing authorization."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

