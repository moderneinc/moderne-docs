---
sidebar_label: "Remove duplicate conditions in if/elif chains"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove duplicate conditions in if/elif chains

**org.openrewrite.python.codequality.RemoveDuplicateConditions**

_Remove `elif` branches whose condition is identical to an earlier branch in the same `if`/`elif` chain, since the duplicate branch is dead code that can never execute._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)
* [RSPEC-S1862](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S1862&open=java%3AS1862)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.codequality.RemoveDuplicateConditions"
  displayName="Remove duplicate conditions in if/elif chains"
  pipPackage="openrewrite-migrate-python"
/>
