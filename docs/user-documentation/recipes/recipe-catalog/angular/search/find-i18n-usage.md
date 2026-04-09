---
sidebar_label: "Find i18n usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find i18n usage

**org.openrewrite.angular.search.find-i18n-usage**

_Finds i18n usage indicators: legacy i18n configuration in `angular.json` (`i18nLocale`, `i18nFile`, `i18nFormat`, `i18nMissingTranslation`), `$localize` tagged template literals, and `@angular/localize` imports. Projects with these markers need `@angular/localize` installed and `import '@angular/localize/init'` in `polyfills.ts` for Angular 9+._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-i18n-usage"
  displayName="Find i18n usage"
  npmPackage="@openrewrite/recipes-angular"
/>
