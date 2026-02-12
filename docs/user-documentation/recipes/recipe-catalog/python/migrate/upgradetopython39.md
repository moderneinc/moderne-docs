---
sidebar_label: "Upgrade to Python 3.9"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade to Python 3.9

**org.openrewrite.python.migrate.UpgradeToPython39**

_Migrate deprecated APIs for Python 3.9 compatibility. This includes PEP 585 built-in generics, removed base64 functions, and deprecated XML Element methods._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.9](/user-documentation/recipes/lists/recipes-by-tag#3.9)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.UpgradeToPython39](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.UpgradeToPython39),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Upgrade to Python 3.8](../../python/migrate/upgradetopython38)
* [Replace `base64.encodestring()` with `base64.encodebytes()`](../../python/migrate/replacebase64encodestring)
* [Replace `base64.decodestring()` with `base64.decodebytes()`](../../python/migrate/replacebase64decodestring)
* [Replace `typing.List` with `list`](../../python/migrate/replacetypinglistwithbuiltin)
* [Replace `typing.Dict` with `dict`](../../python/migrate/replacetypingdictwithbuiltin)
* [Replace `typing.Set` with `set`](../../python/migrate/replacetypingsetwithbuiltin)
* [Replace `typing.FrozenSet` with `frozenset`](../../python/migrate/replacetypingfrozensetwithbuiltin)
* [Replace `typing.Tuple` with `tuple`](../../python/migrate/replacetypingtuplewithbuiltin)
* [Replace `typing.Type` with `type`](../../python/migrate/replacetypingtypewithbuiltin)
* [Replace `typing.Callable` with `collections.abc.Callable`](../../python/migrate/replacetypingcallablewithcollectionsabccallable)
* [Replace `typing.Deque` with `collections.deque`](../../python/migrate/replacetypingdequewithcollectionsdeque)
* [Replace `typing.DefaultDict` with `collections.defaultdict`](../../python/migrate/replacetypingdefaultdictwithcollectionsdefaultdict)
* [Replace `typing.OrderedDict` with `collections.OrderedDict`](../../python/migrate/replacetypingordereddictwithcollectionsordereddict)
* [Replace `typing.Counter` with `collections.Counter`](../../python/migrate/replacetypingcounterwithcollectionscounter)
* [Replace `typing.ChainMap` with `collections.ChainMap`](../../python/migrate/replacetypingchainmapwithcollectionschainmap)
* [Replace `typing.Pattern` with `re.Pattern`](../../python/migrate/replacetypingpatternwithrepattern)
* [Replace `typing.Match` with `re.Match`](../../python/migrate/replacetypingmatchwithrematch)
* [Replace `typing.ContextManager` with `contextlib.AbstractContextManager`](../../python/migrate/replacetypingcontextmanagerwithcontextlib)
* [Replace `typing.AsyncContextManager` with `contextlib.AbstractAsyncContextManager`](../../python/migrate/replacetypingasynccontextmanagerwithcontextlib)
* [Replace `typing.Iterable` with `collections.abc.Iterable`](../../python/migrate/replacetypingiterablewithcollectionsabciterable)
* [Replace `typing.Iterator` with `collections.abc.Iterator`](../../python/migrate/replacetypingiteratorwithcollectionsabciterator)
* [Replace `typing.Generator` with `collections.abc.Generator`](../../python/migrate/replacetypinggeneratorwithcollectionsabcgenerator)
* [Replace `typing.Sequence` with `collections.abc.Sequence`](../../python/migrate/replacetypingsequencewithcollectionsabcsequence)
* [Replace `typing.MutableSequence` with `collections.abc.MutableSequence`](../../python/migrate/replacetypingmutablesequencewithcollectionsabcmutablesequence)
* [Replace `typing.Mapping` with `collections.abc.Mapping`](../../python/migrate/replacetypingmappingwithcollectionsabcmapping)
* [Replace `typing.MutableMapping` with `collections.abc.MutableMapping`](../../python/migrate/replacetypingmutablemappingwithcollectionsabcmutablemapping)
* [Replace `typing.AbstractSet` with `collections.abc.Set`](../../python/migrate/replacetypingabstractsetwithcollectionsabcset)
* [Replace `typing.MutableSet` with `collections.abc.MutableSet`](../../python/migrate/replacetypingmutablesetwithcollectionsabcmutableset)
* [Replace `typing.Awaitable` with `collections.abc.Awaitable`](../../python/migrate/replacetypingawaitablewithcollectionsabcawaitable)
* [Replace `typing.Coroutine` with `collections.abc.Coroutine`](../../python/migrate/replacetypingcoroutinewithcollectionsabccoroutine)
* [Replace `typing.AsyncIterable` with `collections.abc.AsyncIterable`](../../python/migrate/replacetypingasynciterablewithcollectionsabcasynciterable)
* [Replace `typing.AsyncIterator` with `collections.abc.AsyncIterator`](../../python/migrate/replacetypingasynciteratorwithcollectionsabcasynciterator)
* [Replace `typing.AsyncGenerator` with `collections.abc.AsyncGenerator`](../../python/migrate/replacetypingasyncgeneratorwithcollectionsabcasyncgenerator)
* [Replace `typing.Reversible` with `collections.abc.Reversible`](../../python/migrate/replacetypingreversiblewithcollectionsabcreversible)
* [Replace `typing.Container` with `collections.abc.Container`](../../python/migrate/replacetypingcontainerwithcollectionsabccontainer)
* [Replace `typing.Collection` with `collections.abc.Collection`](../../python/migrate/replacetypingcollectionwithcollectionsabccollection)
* [Replace `typing.MappingView` with `collections.abc.MappingView`](../../python/migrate/replacetypingmappingviewwithcollectionsabcmappingview)
* [Replace `typing.KeysView` with `collections.abc.KeysView`](../../python/migrate/replacetypingkeysviewwithcollectionsabckeysview)
* [Replace `typing.ItemsView` with `collections.abc.ItemsView`](../../python/migrate/replacetypingitemsviewwithcollectionsabcitemsview)
* [Replace `typing.ValuesView` with `collections.abc.ValuesView`](../../python/migrate/replacetypingvaluesviewwithcollectionsabcvaluesview)
* [Replace `Element.getiterator()` with `Element.iter()`](../../python/migrate/replaceelementgetiterator)
* [Find deprecated `Element.getchildren()` usage](../../python/migrate/findelementgetchildren)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.python.migrate.UpgradeToPython39
displayName: Upgrade to Python 3.9
description: |
  Migrate deprecated APIs for Python 3.9 compatibility. This includes PEP 585 built-in generics, removed base64 functions, and deprecated XML Element methods.
tags:
  - python
  - migration
  - 3.9
recipeList:
  - org.openrewrite.python.migrate.UpgradeToPython38
  - org.openrewrite.python.migrate.ReplaceBase64Encodestring
  - org.openrewrite.python.migrate.ReplaceBase64Decodestring
  - org.openrewrite.python.migrate.ReplaceTypingListWithBuiltin
  - org.openrewrite.python.migrate.ReplaceTypingDictWithBuiltin
  - org.openrewrite.python.migrate.ReplaceTypingSetWithBuiltin
  - org.openrewrite.python.migrate.ReplaceTypingFrozenSetWithBuiltin
  - org.openrewrite.python.migrate.ReplaceTypingTupleWithBuiltin
  - org.openrewrite.python.migrate.ReplaceTypingTypeWithBuiltin
  - org.openrewrite.python.migrate.ReplaceTypingCallableWithCollectionsAbcCallable
  - org.openrewrite.python.migrate.ReplaceTypingDequeWithCollectionsDeque
  - org.openrewrite.python.migrate.ReplaceTypingDefaultDictWithCollectionsDefaultdict
  - org.openrewrite.python.migrate.ReplaceTypingOrderedDictWithCollectionsOrderedDict
  - org.openrewrite.python.migrate.ReplaceTypingCounterWithCollectionsCounter
  - org.openrewrite.python.migrate.ReplaceTypingChainMapWithCollectionsChainMap
  - org.openrewrite.python.migrate.ReplaceTypingPatternWithRePattern
  - org.openrewrite.python.migrate.ReplaceTypingMatchWithReMatch
  - org.openrewrite.python.migrate.ReplaceTypingContextManagerWithContextlib
  - org.openrewrite.python.migrate.ReplaceTypingAsyncContextManagerWithContextlib
  - org.openrewrite.python.migrate.ReplaceTypingIterableWithCollectionsAbcIterable
  - org.openrewrite.python.migrate.ReplaceTypingIteratorWithCollectionsAbcIterator
  - org.openrewrite.python.migrate.ReplaceTypingGeneratorWithCollectionsAbcGenerator
  - org.openrewrite.python.migrate.ReplaceTypingSequenceWithCollectionsAbcSequence
  - org.openrewrite.python.migrate.ReplaceTypingMutableSequenceWithCollectionsAbcMutableSequence
  - org.openrewrite.python.migrate.ReplaceTypingMappingWithCollectionsAbcMapping
  - org.openrewrite.python.migrate.ReplaceTypingMutableMappingWithCollectionsAbcMutableMapping
  - org.openrewrite.python.migrate.ReplaceTypingAbstractSetWithCollectionsAbcSet
  - org.openrewrite.python.migrate.ReplaceTypingMutableSetWithCollectionsAbcMutableSet
  - org.openrewrite.python.migrate.ReplaceTypingAwaitableWithCollectionsAbcAwaitable
  - org.openrewrite.python.migrate.ReplaceTypingCoroutineWithCollectionsAbcCoroutine
  - org.openrewrite.python.migrate.ReplaceTypingAsyncIterableWithCollectionsAbcAsyncIterable
  - org.openrewrite.python.migrate.ReplaceTypingAsyncIteratorWithCollectionsAbcAsyncIterator
  - org.openrewrite.python.migrate.ReplaceTypingAsyncGeneratorWithCollectionsAbcAsyncGenerator
  - org.openrewrite.python.migrate.ReplaceTypingReversibleWithCollectionsAbcReversible
  - org.openrewrite.python.migrate.ReplaceTypingContainerWithCollectionsAbcContainer
  - org.openrewrite.python.migrate.ReplaceTypingCollectionWithCollectionsAbcCollection
  - org.openrewrite.python.migrate.ReplaceTypingMappingViewWithCollectionsAbcMappingView
  - org.openrewrite.python.migrate.ReplaceTypingKeysViewWithCollectionsAbcKeysView
  - org.openrewrite.python.migrate.ReplaceTypingItemsViewWithCollectionsAbcItemsView
  - org.openrewrite.python.migrate.ReplaceTypingValuesViewWithCollectionsAbcValuesView
  - org.openrewrite.python.migrate.ReplaceElementGetiterator
  - org.openrewrite.python.migrate.FindElementGetchildren

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython310)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.UpgradeToPython39
```
