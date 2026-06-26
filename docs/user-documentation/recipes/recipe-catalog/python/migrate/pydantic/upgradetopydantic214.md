---
title: "Upgrade to Pydantic 2.14"
sidebar_label: "Upgrade to Pydantic 2.14"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Pydantic 2.14

**org.openrewrite.python.migrate.pydantic.UpgradeToPydantic214**

_Migrate code affected by changes introduced in Pydantic 2.14 (and 2.10-2.13). Flags `eval_type_backport` usage, whose support 2.14 removed. Note: 2.14 is in prerelease; verify against the 2.14.0 GA release._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [pydantic](/user-documentation/recipes/lists/recipes-by-tag#pydantic)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [2.14](/user-documentation/recipes/lists/recipes-by-tag#214)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.pydantic.UpgradeToPydantic214"
  displayName="Upgrade to Pydantic 2.14"
  pipPackage="openrewrite-migrate-python"
/>
