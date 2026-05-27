---
sidebar_label: "Simplify boolean literal comparisons"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Simplify boolean literal comparisons

**org.openrewrite.python.codequality.SimplifyBooleanLiteral**

_Replace comparisons against boolean literals (`== True`, `!= False`, `is True`, etc.) with the simpler equivalent boolean expression._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)
* [RSPEC-S1125](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S1125&open=java%3AS1125)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.codequality.SimplifyBooleanLiteral"
  displayName="Simplify boolean literal comparisons"
  pipPackage="openrewrite-migrate-python"
/>
