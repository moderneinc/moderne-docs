---
title: "Replace `TestBed.get()` with `TestBed.inject()`"
sidebar_label: "Replace `TestBed.get()` with `TestBed.inject()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `TestBed.get()` with `TestBed.inject()`

**org.openrewrite.angular.migration.replace-testbed-get-with-inject**

_Replaces deprecated `TestBed.get()` calls with `TestBed.inject()`. `TestBed.get()` was deprecated in Angular 9 and removed in Angular 13._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.replace-testbed-get-with-inject"
  displayName="Replace `TestBed.get()` with `TestBed.inject()`"
  npmPackage="@openrewrite/recipes-angular"
/>
