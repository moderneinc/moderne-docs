---
sidebar_label: "Replace `datetime.utcnow()` with `datetime.now(UTC)`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `datetime.utcnow()` with `datetime.now(UTC)`

**org.openrewrite.python.migrate.ReplaceDatetimeUtcNow**

_The `datetime.utcnow()` method is deprecated in Python 3.12. Replace it with `datetime.now(datetime.UTC)` for timezone-aware datetime objects._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython312)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceDatetimeUtcNow"
  displayName="Replace `datetime.utcnow()` with `datetime.now(UTC)`"
  pipPackage="openrewrite-migrate-python"
/>
