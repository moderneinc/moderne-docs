---
sidebar_label: "Simplify redundant logical expressions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Simplify redundant logical expressions

**org.openrewrite.python.codequality.SimplifyRedundantLogicalExpression**

_Replace `x and x` with `x` and `x or x` with `x`. Identical operands in a logical expression are redundant and often indicate a copy-paste mistake._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)
* [RSPEC-S1764](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S1764&open=java%3AS1764)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.codequality.SimplifyRedundantLogicalExpression"
  displayName="Simplify redundant logical expressions"
  pipPackage="openrewrite-migrate-python"
/>
