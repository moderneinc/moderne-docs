---
sidebar_label: "Mark imports of removed PrimeNG modules with TODO stubs"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Mark imports of removed PrimeNG modules with TODO stubs

**org.openrewrite.primeng.MarkRemovedPrimengModules**

_For each `import` of a PrimeNG module that no longer exists in v18 (`primeng/chips`, `primeng/tristatecheckbox`, `primeng/messages`, `primeng/dataviewlayoutoptions`), replaces the broken import statement with a `const <Name>: any = null;` stub annotated by a TODO comment that describes the v18 replacement. Also strips the corresponding entries from `@NgModule` `imports`, `declarations`, and `exports` arrays since Angular's compiler rejects `null` values there. Each flagged site is also recorded in the `ManualMigrationSteps` data table so downstream tooling can enumerate the remaining work._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade PrimeNG components to 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/upgradecomponentsto18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.primeng.MarkRemovedPrimengModules"
  displayName="Mark imports of removed PrimeNG modules with TODO stubs"
  npmPackage="@openrewrite/recipes-angular"
/>
