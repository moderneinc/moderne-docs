---
title: "Replace `InjectFlags` with options object"
sidebar_label: "Replace `InjectFlags` with options object"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `InjectFlags` with options object

**org.openrewrite.angular.migration.replace-inject-flags**

_Replaces deprecated `InjectFlags` enum usage in `inject()` calls with the corresponding options object. For example, `inject(MyService, InjectFlags.Optional)` becomes `inject(MyService, { optional: true })`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.replace-inject-flags"
  displayName="Replace `InjectFlags` with options object"
  npmPackage="@openrewrite/recipes-angular"
/>
