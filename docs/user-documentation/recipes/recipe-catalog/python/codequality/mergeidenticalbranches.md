---
sidebar_label: "Merge consecutive branches with identical bodies"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Merge consecutive branches with identical bodies

**org.openrewrite.python.codequality.MergeIdenticalBranches**

_Combine consecutive `if`/`elif` branches that have the same body into a single branch with conditions joined by `or`._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)
* [RSPEC-S1871](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S1871&open=java%3AS1871)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.codequality.MergeIdenticalBranches"
  displayName="Merge consecutive branches with identical bodies"
  pipPackage="openrewrite-migrate-python"
/>
