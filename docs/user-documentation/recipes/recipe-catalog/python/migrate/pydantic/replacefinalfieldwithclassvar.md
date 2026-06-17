---
title: "Replace `Final` model fields with a default with `ClassVar`"
sidebar_label: "Replace `Final` model fields with a default with `ClassVar`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `Final` model fields with a default with `ClassVar`

**org.openrewrite.python.migrate.pydantic.ReplaceFinalFieldWithClassVar**

_Pydantic 2.11 deprecates annotating a model field as `Final` with a default value (such fields were treated as class variables). Replace `Final[X] = default` with `ClassVar[X] = default`, which preserves the existing class-variable behavior and is the replacement Pydantic recommends._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [pydantic](/user-documentation/recipes/lists/recipes-by-tag#pydantic)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [2.11](/user-documentation/recipes/lists/recipes-by-tag#211)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Pydantic 2.11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/upgradetopydantic211)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.pydantic.ReplaceFinalFieldWithClassVar"
  displayName="Replace `Final` model fields with a default with `ClassVar`"
  pipPackage="openrewrite-migrate-python"
/>
