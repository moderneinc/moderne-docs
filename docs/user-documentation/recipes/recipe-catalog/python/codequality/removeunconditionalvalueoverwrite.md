---
sidebar_label: "Remove unconditional value overwrites"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove unconditional value overwrites

**org.openrewrite.python.codequality.RemoveUnconditionalValueOverwrite**

_Remove consecutive assignments that write to the same dict key or object attribute, since the first value is immediately overwritten and never used._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [RSPEC-S4143](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S4143&open=java%3AS4143)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.codequality.RemoveUnconditionalValueOverwrite"
  displayName="Remove unconditional value overwrites"
  pipPackage="openrewrite-migrate-python"
/>
