---
sidebar_label: "Migrate deprecated `.append()` to `pd.concat()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate deprecated `.append()` to `pd.concat()`

**org.openrewrite.python.cleanup.DataframeAppendToConcat**

_`DataFrame.append()` no longer exists in pandas 2.0+. This recipe rewrites `.append(x)` calls to `pd.concat([df, x])`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.DataframeAppendToConcat"
  displayName="Migrate deprecated `.append()` to `pd.concat()`"
  pipPackage="openrewrite-static-analysis"
/>
