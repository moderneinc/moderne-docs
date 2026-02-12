---
sidebar_label: "Replace `typing.OrderedDict` with `collections.OrderedDict`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace `typing.OrderedDict` with `collections.OrderedDict`

**org.openrewrite.python.migrate.ReplaceTypingOrderedDictWithCollectionsOrderedDict**

_Replace `typing.OrderedDict` with `collections.OrderedDict`. Available in Python 3.9+ (PEP 585)._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [typing](/user-documentation/recipes/lists/recipes-by-tag#typing)
* [PEP 585](/user-documentation/recipes/lists/recipes-by-tag#pep-585)
* [3.9](/user-documentation/recipes/lists/recipes-by-tag#3.9)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceTypingOrderedDictWithCollectionsOrderedDict](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceTypingOrderedDictWithCollectionsOrderedDict),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython39)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.ReplaceTypingOrderedDictWithCollectionsOrderedDict
```
