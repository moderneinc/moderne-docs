---
sidebar_label: "Mark deprecated PrimeNG components with TODO comments"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Mark deprecated PrimeNG components with TODO comments

**org.openrewrite.primeng.MarkDeprecatedPrimengComponents**

_For every TS file that imports a component / module deprecated in PrimeNG 18 (`TabMenu`, `Steps`, `InlineMessage`, `TabView`, `pDefer`), prepends a TODO comment to the import describing the recommended v18 replacement and writes a row to the `ManualMigrationSteps` data table. The import itself is left intact — these modules still exist in v18 but their replacements have different APIs that require manual migration._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade PrimeNG components to 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/upgradecomponentsto18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.primeng.MarkDeprecatedPrimengComponents"
  displayName="Mark deprecated PrimeNG components with TODO comments"
  npmPackage="@openrewrite/recipes-angular"
/>
