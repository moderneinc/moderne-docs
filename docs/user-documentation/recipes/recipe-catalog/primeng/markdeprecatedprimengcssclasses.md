---
sidebar_label: "Mark deprecated PrimeNG CSS classes with TODO comments"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Mark deprecated PrimeNG CSS classes with TODO comments

**org.openrewrite.primeng.MarkDeprecatedPrimengCssClasses**

_For every HTML template that references a CSS class removed in PrimeNG 18 (`.p-link`, `.p-highlight`, `.p-fluid`), inserts a `<!-- TODO: ... -->` comment immediately before the offending element and writes a row to the `ManualMigrationSteps` data table. The class itself is left in place — the replacements are context-dependent (component-specific selectors, the new `fluid` input, etc.) and need a human or AI agent to apply._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade PrimeNG components to 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/upgradecomponentsto18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.primeng.MarkDeprecatedPrimengCssClasses"
  displayName="Mark deprecated PrimeNG CSS classes with TODO comments"
  npmPackage="@openrewrite/recipes-angular"
/>
