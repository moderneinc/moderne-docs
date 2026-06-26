---
title: "Find i18n usage"
sidebar_label: "Find i18n usage"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find i18n usage"}
  description={"Finds i18n usage indicators: legacy i18n configuration in `angular.json` (`i18nLocale`, `i18nFile`, `i18nFormat`, `i18nMissingTranslation`), `$localize` tagged template literals, and `@angular/localize` imports. Projects with these markers need `@angular/localize` installed and `import '@angular/localize/init'` in `polyfills.ts` for Angular 9+."}
  fqName={"org.openrewrite.angular.search.find-i18n-usage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find i18n usage"}
  description={"Finds i18n usage indicators: legacy i18n configuration in `angular.json` (`i18nLocale`, `i18nFile`, `i18nFormat`, `i18nMissingTranslation`), `$localize` tagged template literals, and `@angular/localize` imports. Projects with these markers need `@angular/localize` installed and `import '@angular/localize/init'` in `polyfills.ts` for Angular 9+."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.search.find-i18n-usage"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.search.find-i18n-usage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/search/find-i18n-usage.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Find i18n configuration in `angular.json`","href":""},{"name":"Find `$localize` usage in TypeScript","href":""}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.angular.search.find-i18n-usage","displayName":"Find i18n usage","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

