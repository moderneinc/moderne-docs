---
sidebar_label: "Migrate to solution-style tsconfig"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to solution-style tsconfig

**org.openrewrite.angular.migration.migrate-to-solution-style-tsconfig**

_Migrates a project to use a solution-style `tsconfig.json`. The original `tsconfig.json` content is moved to `tsconfig.base.json` (with project-specific fields removed), and `tsconfig.json` is replaced with a solution-style config that references the project's TypeScript configurations. Other tsconfig files that extend `./tsconfig.json` are updated to extend `./tsconfig.base.json`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular10)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.migrate-to-solution-style-tsconfig"
  displayName="Migrate to solution-style tsconfig"
  npmPackage="@openrewrite/recipes-angular"
/>
