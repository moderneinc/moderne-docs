---
title: "Remove zone.js polyfill from angular.json"
sidebar_label: "Remove zone.js polyfill from angular.json"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove zone.js polyfill from angular.json"}
  description={"Removes zone.js entries from the `polyfills` array in `angular.json`. Angular 20 supports zoneless change detection via `provideZonelessChangeDetection()`, making the zone.js polyfill unnecessary."}
  fqName={"org.openrewrite.angular.migration.remove-zone-js-polyfill"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Remove zone.js polyfill from angular.json"}
  description={"Removes zone.js entries from the `polyfills` array in `angular.json`. Angular 20 supports zoneless change detection via `provideZonelessChangeDetection()`, making the zone.js polyfill unnecessary."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.remove-zone-js-polyfill"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.remove-zone-js-polyfill"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/remove-zone-js-polyfill.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.remove-zone-js-polyfill","displayName":"Remove zone.js polyfill from angular.json","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

