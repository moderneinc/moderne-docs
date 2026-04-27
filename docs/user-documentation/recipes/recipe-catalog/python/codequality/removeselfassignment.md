---
sidebar_label: "Remove self-assignments"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove self-assignments

**org.openrewrite.python.codequality.RemoveSelfAssignment**

_Remove statements that assign a variable to itself (`x = x`, `self.x = self.x`), since they have no effect._

### Tags

* [RSPEC-S1656](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S1656&open=java%3AS1656)
* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.codequality.RemoveSelfAssignment"
  displayName="Remove self-assignments"
  pipPackage="openrewrite-migrate-python"
/>
