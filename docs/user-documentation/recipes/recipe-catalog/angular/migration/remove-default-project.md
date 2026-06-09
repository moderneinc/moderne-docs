---
title: "Remove `defaultProject` from `angular.json`"
sidebar_label: "Remove `defaultProject` from `angular.json`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `defaultProject` from `angular.json`

**org.openrewrite.angular.migration.remove-default-project**

_Removes the deprecated `defaultProject` property from `angular.json`. The `defaultProject` option was deprecated in Angular 13 and the CLI infers the default project from the workspace._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.remove-default-project"
  displayName="Remove `defaultProject` from `angular.json`"
  npmPackage="@openrewrite/recipes-angular"
/>
