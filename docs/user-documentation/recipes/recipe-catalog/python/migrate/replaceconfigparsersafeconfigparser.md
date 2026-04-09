---
sidebar_label: "Replace `configparser.SafeConfigParser` with `ConfigParser`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `configparser.SafeConfigParser` with `ConfigParser`

**org.openrewrite.python.migrate.ReplaceConfigparserSafeConfigParser**

_The `configparser.SafeConfigParser` class was deprecated in Python 3.2 and removed in Python 3.12. Replace with `configparser.ConfigParser`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython311)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceConfigparserSafeConfigParser"
  displayName="Replace `configparser.SafeConfigParser` with `ConfigParser`"
  pipPackage="openrewrite-migrate-python"
/>
