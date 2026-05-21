---
sidebar_label: "Find deprecated `ssl.match_hostname()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `ssl.match_hostname()`

**org.openrewrite.python.migrate.FindSslMatchHostname**

_Find usage of the deprecated `ssl.match_hostname()` function which was removed in Python 3.12. Use `ssl.SSLContext.check_hostname` instead._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython312)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.FindSslMatchHostname"
  displayName="Find deprecated `ssl.match_hostname()`"
  pipPackage="openrewrite-migrate-python"
/>
