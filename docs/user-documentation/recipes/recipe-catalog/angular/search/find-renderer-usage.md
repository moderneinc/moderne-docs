---
title: "Find deprecated `Renderer` usage"
sidebar_label: "Find deprecated `Renderer` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `Renderer` usage

**org.openrewrite.angular.search.find-renderer-usage**

_Finds imports of the deprecated `Renderer` from `@angular/core`. `Renderer` was deprecated in Angular 4 and removed in Angular 9. Users should use `Renderer2` instead._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-renderer-usage"
  displayName="Find deprecated `Renderer` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
