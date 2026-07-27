---
title: "Replace deep `zone.js` imports"
sidebar_label: "Replace deep `zone.js` imports"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace deep `zone.js` imports"}
  description={"Replaces legacy deep imports from `zone.js` such as `zone.js/dist/zone` or `zone.js/bundles/zone-testing.js` with the standard `zone.js` or `zone.js/testing` imports, in both TypeScript files and `angular.json` polyfills. Deep imports are no longer allowed in Angular 17."}
  fqName={"org.openrewrite.angular.migration.replace-deep-zone-js-imports"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.replace-deep-zone-js-imports"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.replace-deep-zone-js-imports"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/replace-deep-zone-js-imports.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace deep `zone.js` imports</RecipeHeader.Title>

<RecipeHeader.Description>Replaces legacy deep imports from `zone.js` such as `zone.js/dist/zone` or `zone.js/bundles/zone-testing.js` with the standard `zone.js` or `zone.js/testing` imports, in both TypeScript files and `angular.json` polyfills. Deep imports are no longer allowed in Angular 17.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Replace deep `zone.js` TypeScript imports","href":""},{"name":"Replace deep `zone.js` polyfills in `angular.json`","href":""}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.replace-deep-zone-js-imports","displayName":"Replace deep `zone.js` imports","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

