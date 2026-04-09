---
sidebar_label: "Add `@angular/localize/init` polyfill import"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add `@angular/localize/init` polyfill import

**org.openrewrite.angular.migration.add-localize-polyfill**

_Adds `import '@angular/localize/init'` to `polyfills.ts`. Angular 9 introduced the `$localize` runtime API for i18n. Projects using internationalization must import this polyfill or the application will fail at runtime with `$localize is not defined`. The `@angular/localize` package must also be added as a dependency._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.add-localize-polyfill"
  displayName="Add `@angular/localize/init` polyfill import"
  npmPackage="@openrewrite/recipes-angular"
/>
