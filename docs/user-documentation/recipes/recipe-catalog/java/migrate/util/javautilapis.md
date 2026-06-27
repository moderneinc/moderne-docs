---
title: "Use modernized `java.util` APIs"
sidebar_label: "Use modernized `java.util` APIs"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/util/javautilapis" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use modernized `java.util` APIs"}
  description={"Certain java util APIs have been introduced and are favored over previous APIs."}
  fqName={"org.openrewrite.java.migrate.util.JavaUtilAPIs"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-util-apis.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.util.JavaUtilAPIs"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.util.JavaUtilAPIs"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/util/javautilapis.md"}
>

<RecipeHeader.Title>Use modernized `java.util` APIs</RecipeHeader.Title>

<RecipeHeader.Description>Certain java util APIs have been introduced and are favored over previous APIs.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Replace `iterator().next()` with `getFirst()`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/iteratornext/"},{"name":"Replace `List.get(int)`, `add(int, Object)`, and `remove(int)` with `SequencedCollection` `*First` and `*Last` methods","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/listfirstandlast/"},{"name":"Prefer `List.of()`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/migratecollectionsemptylist/"},{"name":"Prefer `Map.of()`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/migratecollectionsemptymap/"},{"name":"Prefer `Set.of()`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/migratecollectionsemptyset/"},{"name":"Prefer `List.of(..)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/migratecollectionssingletonlist/"},{"name":"Prefer `Map.of(..)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/migratecollectionssingletonmap/"},{"name":"Prefer `Set.of(..)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/migratecollectionssingletonset/"},{"name":"Prefer `List.of(..)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/migratecollectionsunmodifiablelist/"},{"name":"Prefer `Set.of(..)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/migratecollectionsunmodifiableset/"},{"name":"Use `Reader.of(CharSequence)` for non-synchronized readers","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/migratestringreadertoreaderof/"},{"name":"Prefer `Optional.isPresent()`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/optionalnotemptytoispresent/"},{"name":"Prefer `Optional.isEmpty()`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/optionalnotpresenttoisempty/"},{"name":"`Stream<Optional>` idiom recipe","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/optionalstreamrecipe/"},{"name":"Remove invocations of deprecated invocations from Deflater, Inflater, ZipFile ","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/removefinalizerfromzip/"},{"name":"Replace `java.lang.Math random()` with `ThreadLocalRandom nextDouble()`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/replacemathrandomwiththreadlocalrandomrecipe/"},{"name":"Replace `Stream.collect(Collectors.toUnmodifiableList())` with `Stream.toList()`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/replacestreamcollectwithtolist/"},{"name":"Use `getFirst()` instead of `stream().findFirst().orElseThrow()`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/streamfindfirst/"},{"name":"Prefer `EnumSet of(..)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/useenumsetof/"},{"name":"Prefer `List.of(..)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/uselistof/"},{"name":"Prefer `Locale.of(..)` over `new Locale(..)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/uselocaleof/"},{"name":"Prefer `Map.of(..)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/usemapof/"},{"name":"Prefer `Predicate.not(..)` over casting to `Predicate` and calling `negate()`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/usepredicatenot/"},{"name":"Prefer `Set.of(..)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/util/usesetof/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.util.JavaUtilAPIs","displayName":"Use modernized `java.util` APIs","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

