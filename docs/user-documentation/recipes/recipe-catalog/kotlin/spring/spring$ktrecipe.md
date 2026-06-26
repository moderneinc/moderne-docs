---
title: "Modernize Spring Boot Kotlin code"
sidebar_label: "Modernize Spring Boot Kotlin code"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Modernize Spring Boot Kotlin code"}
  description={"Find Kotlin-idiomatic violations in Spring Boot applications: Java-style `SpringApplication.run`, `@Autowired` / `@Inject` field injection, missing `open` on Spring-proxied classes, blocking `Mono.block()` calls, `@RequestMapping` candidates for `@GetMapping`, `Mono<T>` controllers that could be suspending, `@ConfigurationProperties` data class candidates, `@Entity` data class plugin reminders, `@Transactional`/`@Async`/`@Cacheable` on private/final methods, deprecated `RestTemplate` allocations, Mono/Flux ergonomic shapes, reactive-coroutine interop hazards, Spring annotation shapes, repository access patterns, and WebClient/ResponseEntity shapes."}
  fqName={"org.openrewrite.kotlin.spring.Spring$KtRecipe"}
  languages={["Kotlin"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Modernize Spring Boot Kotlin code"}
  description={"Find Kotlin-idiomatic violations in Spring Boot applications: Java-style `SpringApplication.run`, `@Autowired` / `@Inject` field injection, missing `open` on Spring-proxied classes, blocking `Mono.block()` calls, `@RequestMapping` candidates for `@GetMapping`, `Mono<T>` controllers that could be suspending, `@ConfigurationProperties` data class candidates, `@Entity` data class plugin reminders, `@Transactional`/`@Async`/`@Cacheable` on private/final methods, deprecated `RestTemplate` allocations, Mono/Flux ergonomic shapes, reactive-coroutine interop hazards, Spring annotation shapes, repository access patterns, and WebClient/ResponseEntity shapes."}
  type={"Composite recipe"}
  languages={["Kotlin"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kotlin.spring.Spring$KtRecipe"}
  artifact={"io.moderne.recipe:recipes-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kotlin.spring.Spring$KtRecipe"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kotlin/spring/spring$ktrecipe.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Find Spring Boot bootstrapping smells","href":"kotlin/spring/findspringbootstrappingsmells$ktrecipe"},{"name":"Find Spring dependency-injection smells","href":"kotlin/spring/findspringdependencyinjectionsmells$ktrecipe"},{"name":"Find Spring configuration smells","href":"kotlin/spring/findspringconfigurationsmells$ktrecipe"},{"name":"Find Spring Web / WebFlux smells","href":"kotlin/spring/findspringwebsmells$ktrecipe"},{"name":"Find Spring coroutine-migration candidates","href":"kotlin/spring/findspringcoroutinecandidates$ktrecipe"},{"name":"Find Spring Data smells","href":"kotlin/spring/findspringdatasmells$ktrecipe"},{"name":"Find Spring testing smells","href":"kotlin/spring/findspringtestingsmells$ktrecipe"},{"name":"Find Spring proxied-annotation smells","href":"kotlin/spring/findspringproxiedannotationsmells$ktrecipe"},{"name":"Find Spring legacy / deprecated API smells","href":"kotlin/spring/findspringlegacyapismells$ktrecipe"},{"name":"Find Mono/Flux ergonomic smells","href":"kotlin/spring/findmonofluxsmells$ktrecipe"},{"name":"Find reactive / coroutine interop hazards","href":"kotlin/spring/findreactivecoroutineinterop$ktrecipe"},{"name":"Find Spring annotation-shape smells","href":"kotlin/spring/findspringannotationsmells$ktrecipe"},{"name":"Find Spring Data / repository access smells","href":"kotlin/spring/finddataaccesssmells$ktrecipe"},{"name":"Find WebClient / RestTemplate / ResponseEntity smells","href":"kotlin/spring/findwebclientresttemplatesmells$ktrecipe"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.kotlin.spring.Spring$KtRecipe","displayName":"Modernize Spring Boot Kotlin code","groupId":"io.moderne.recipe","artifactId":"recipes-kotlin","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_KOTLIN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

