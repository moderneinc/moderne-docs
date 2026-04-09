---
sidebar_label: "Replace deprecated distutils.version usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace deprecated distutils.version usage

**org.openrewrite.python.migrate.ReplaceDistutilsVersion**

_Detect usage of deprecated `distutils.version.LooseVersion` and `distutils.version.StrictVersion`. These should be migrated to `packaging.version.Version`. Note: Manual migration is required as `packaging.version.Version` is not a drop-in replacement._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython312)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceDistutilsVersion"
  displayName="Replace deprecated distutils.version usage"
  pipPackage="openrewrite-migrate-python"
/>
