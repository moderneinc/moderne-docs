---
description: Stdlib OpenRewrite recipes.
---

# Stdlib

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Apply Kotlin collection shorthands](./collectionshorthands$ktrecipe.md)
* [Apply Kotlin standard-library idioms](./stdlib$ktrecipe.md)
* [Apply Kotlin string shorthands](./stringshorthands$ktrecipe.md)
* [Prefer `emptyList()` / `emptySet()` / `emptyMap()` over zero-arg builders](./emptyconstructorshorthands$ktrecipe.md)

## Recipes

* [Use `distinct()` instead of `toHashSet().toList()`](./usedistinctfortohashsettolist$ktrecipe.md)
* [Use `distinct()` instead of `toSet().toList()`](./usedistinctfortosettolist$ktrecipe.md)
* [Use `distinct().toMutableList()` instead of `toSet().toMutableList()`](./usedistinctfortosettomutablelist$ktrecipe.md)
* [Use `drop(n)` instead of `substring(n)` on a `String`](./usestringdropforsubstring$ktrecipe.md)
* [Use `emptyList&lt;T&gt;()` instead of `listOf&lt;T&gt;()`](./useemptylistforlistofnoargs$ktrecipe.md)
* [Use `emptyMap&lt;K, V&gt;()` instead of `mapOf&lt;K, V&gt;()`](./useemptymapformapofnoargs$ktrecipe.md)
* [Use `emptySet&lt;T&gt;()` instead of `setOf&lt;T&gt;()`](./useemptysetforsetofnoargs$ktrecipe.md)
* [Use `isBlank()` instead of `trim().isEmpty()` on a `String`](./usestringisblankfortrimisempty$ktrecipe.md)
* [Use `isNotBlank()` instead of `trim().isNotEmpty()` on a `String`](./usestringisnotblankfortrimisnotempty$ktrecipe.md)
* [Use `take(n)` instead of `subList(0, n)`](./usetakeforsublistfromzero$ktrecipe.md)
* [Use `take(n)` instead of `substring(0, n)` on a `String`](./usestringtakeforsubstringfromzero$ktrecipe.md)
* [Use `toList()` instead of `asSequence().toList()`](./useassequencetolistidentity$ktrecipe.md)
* [Use `toList()` instead of `toMutableList().toList()`](./usetolistforlisttolist$ktrecipe.md)
* [Use `toSet()` instead of `toList().toSet()`](./usetosetfortolisttoset$ktrecipe.md)
* [Use `toSet()` instead of `toMutableSet().toSet()`](./usesetformutablesettoset$ktrecipe.md)


