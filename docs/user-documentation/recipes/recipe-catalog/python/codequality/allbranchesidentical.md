---
sidebar_label: "Remove conditional with identical branches"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove conditional with identical branches

**org.openrewrite.python.codequality.AllBranchesIdentical**

_Replace `if`/`elif`/`else` chains where every branch has the same body with just the body, since the condition has no effect on what code executes._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [RSPEC-S3923](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S3923&open=java%3AS3923)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.codequality.AllBranchesIdentical"
  displayName="Remove conditional with identical branches"
  pipPackage="openrewrite-migrate-python"
/>
