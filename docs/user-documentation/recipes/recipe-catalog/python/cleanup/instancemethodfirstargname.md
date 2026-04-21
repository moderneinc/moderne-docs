---
sidebar_label: "Standardize instance method first parameter to `self`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Standardize instance method first parameter to `self`

**org.openrewrite.python.cleanup.InstanceMethodFirstArgName**

_Ensure instance methods use `self` as their first parameter per PEP 8 and rename all body references. Methods decorated with `@staticmethod` or `@classmethod` are not affected._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [cleanup](/user-documentation/recipes/lists/recipes-by-tag#cleanup)
* [naming](/user-documentation/recipes/lists/recipes-by-tag#naming)
* [pep8](/user-documentation/recipes/lists/recipes-by-tag#pep8)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.InstanceMethodFirstArgName"
  displayName="Standardize instance method first parameter to `self`"
  pipPackage="openrewrite-static-analysis"
/>
