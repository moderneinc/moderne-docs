---
title: "Update `tsconfig.json` module settings for Ivy"
sidebar_label: "Update `tsconfig.json` module settings for Ivy"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Update `tsconfig.json` module settings for Ivy

**org.openrewrite.angular.migration.update-tsconfig-module**

_Updates `compilerOptions.module` to `esnext` and `compilerOptions.moduleResolution` to `node` in `tsconfig.json`. Angular 9's Ivy compiler requires ES module format. Already-current values like `es2020`, `node16`, `nodenext`, or `bundler` are left unchanged._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.update-tsconfig-module"
  displayName="Update `tsconfig.json` module settings for Ivy"
  npmPackage="@openrewrite/recipes-angular"
/>
