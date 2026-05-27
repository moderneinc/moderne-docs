---
sidebar_label: "Use bracket access for ``re.Match`` groups"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use bracket access for ``re.Match`` groups

**org.openrewrite.python.cleanup.UseGetitemForReMatchGroups**

_Replace ``match.group(n)`` with ``match[n]`` to use the shorter subscript syntax available since Python 3.6._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.UseGetitemForReMatchGroups"
  displayName="Use bracket access for ``re.Match`` groups"
  pipPackage="openrewrite-static-analysis"
/>
