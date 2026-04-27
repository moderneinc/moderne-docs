---
sidebar_label: "Merge collapsible if statements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Merge collapsible if statements

**org.openrewrite.python.codequality.CollapsibleIfStatements**

_Combine nested `if` statements that have no `else` branch into a single `if` joined with `and`._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [RSPEC-S1066](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S1066&open=java%3AS1066)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.codequality.CollapsibleIfStatements"
  displayName="Merge collapsible if statements"
  pipPackage="openrewrite-migrate-python"
/>
