---
sidebar_label: "Boolean checks should not be inverted"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Boolean checks should not be inverted

**org.openrewrite.python.codequality.BooleanChecksNotInverted**

_Replace inverted boolean comparisons like `not (a == b)` with the equivalent direct operator (`a != b`), and remove double negations like `not (not x)`._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)
* [RSPEC-S1940](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S1940&open=java%3AS1940)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.codequality.BooleanChecksNotInverted"
  displayName="Boolean checks should not be inverted"
  pipPackage="openrewrite-migrate-python"
/>
