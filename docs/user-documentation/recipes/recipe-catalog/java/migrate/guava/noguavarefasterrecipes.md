---
title: "Refaster style Guava to Java migration recipes"
sidebar_label: "Refaster style Guava to Java migration recipes"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/guava/noguavarefasterrecipes" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Refaster style Guava to Java migration recipes"}
  description={"Recipes that migrate from Guava to Java, using Refaster style templates for cases beyond what declarative recipes can cover."}
  fqName={"org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/guava/NoGuavaRefaster.java"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes.md"}
>

<RecipeHeader.Title>Refaster style Guava to Java migration recipes</RecipeHeader.Title>

<RecipeHeader.Description>Recipes that migrate from Guava to Java, using Refaster style templates for cases beyond what declarative recipes can cover.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Replace `Preconditions.checkNotNull` with `Objects.requireNonNull`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$preconditionschecknotnulltoobjectsrequirenonnullrecipe/"},{"name":"Replace `Preconditions.checkNotNull` taking a `String` message with `Objects.requireNonNull`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$preconditionschecknotnullwithmessagetoobjectsrequirenonnullrecipe/"},{"name":"Replace `Preconditions.checkNotNull` taking an `Object` message with `Objects.requireNonNull` and `String.valueOf`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$preconditionschecknotnullwithmessagetoobjectsrequirenonnullmessagetypeobjectrecipe/"},{"name":"Prefer `new ArrayList<>()`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$listsnewarraylistrecipe/"},{"name":"Prefer `new ArrayList<>(Collection)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$listsnewarraylistfromcollectionrecipe/"},{"name":"Prefer `new ArrayList<>(int)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$listsnewarraylistwithcapacityrecipe/"},{"name":"Prefer `new CopyOnWriteArrayList<>()`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$listsnewcopyonwritearraylistrecipe/"},{"name":"Prefer `new CopyOnWriteArrayList<>(Collection)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$listsnewcopyonwritearraylistfromcollectionrecipe/"},{"name":"Prefer `new LinkedList<>()`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$listsnewlinkedlistrecipe/"},{"name":"Prefer `new LinkedList<>(Collection)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$listsnewlinkedlistfromcollectionrecipe/"},{"name":"Prefer `new HashMap<>()`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$mapsnewhashmaprecipe/"},{"name":"Prefer `new HashMap<>(Map)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$mapsnewhashmapfrommaprecipe/"},{"name":"Prefer `new LinkedHashMap<>()`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$mapsnewlinkedhashmaprecipe/"},{"name":"Prefer `new LinkedHashMap<>(Map)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$mapsnewlinkedhashmapfrommaprecipe/"},{"name":"Prefer `new TreeMap<>()`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$mapsnewtreemaprecipe/"},{"name":"Prefer `new TreeMap<>(Comparator)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$mapsnewtreemapwithcomparatorrecipe/"},{"name":"Prefer `new TreeMap<>(SortedMap)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$mapsnewtreemapfromsortedmaprecipe/"},{"name":"Prefer `Collections.newSetFromMap(new ConcurrentHashMap<>())`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$setsnewconcurrenthashsetrecipe/"},{"name":"Prefer `new LinkedHashSet<>()`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$setsnewlinkedhashsetrecipe/"},{"name":"Prefer `new LinkedHashSet<>(Collection)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$setsnewlinkedhashsetfromcollectionrecipe/"},{"name":"Prefer `new LinkedHashSet<>(int)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$setsnewlinkedhashsetwithexpectedsizerecipe/"},{"name":"Prefer `Collection.stream().allMatch(Predicate)`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$iterablesallrecipe/"},{"name":"Prefer `Collection.stream().map(Function)` over `Collections2.transform`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavarefasterrecipes$collections2transformrecipe/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import com.google.common.base.Preconditions;\n\nclass A {\n    Object foo(Object obj) {\n        return Preconditions.checkNotNull(obj);\n    }\n}\n","after":"import static java.util.Objects.requireNonNull;\n\nclass A {\n    Object foo(Object obj) {\n        return requireNonNull(obj);\n    }\n}\n","diff":"@@ -1,1 +1,1 @@\n-import com.google.common.base.Preconditions;\n+import static java.util.Objects.requireNonNull;\n\n@@ -5,1 +5,1 @@\nclass A {\n    Object foo(Object obj) {\n-       return Preconditions.checkNotNull(obj);\n+       return requireNonNull(obj);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes","displayName":"Refaster style Guava to Java migration recipes","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

