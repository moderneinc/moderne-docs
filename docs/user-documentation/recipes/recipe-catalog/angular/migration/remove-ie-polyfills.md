---
title: "Remove IE11 polyfills"
sidebar_label: "Remove IE11 polyfills"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove IE11 polyfills"}
  description={"Removes IE11-specific polyfill imports (`core-js`, `classlist.js`, `web-animations-js`) from `polyfills.ts` and `angular.json`. Angular 13 dropped IE11 support, making these polyfills unnecessary."}
  fqName={"org.openrewrite.angular.migration.remove-ie-polyfills"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.remove-ie-polyfills"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.remove-ie-polyfills"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/remove-ie-polyfills.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove IE11 polyfills</RecipeHeader.Title>

<RecipeHeader.Description>Removes IE11-specific polyfill imports (`core-js`, `classlist.js`, `web-animations-js`) from `polyfills.ts` and `angular.json`. Angular 13 dropped IE11 support, making these polyfills unnecessary.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Remove IE polyfill imports from `polyfills.ts`","href":""},{"name":"Remove IE polyfills from `angular.json`","href":""}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.remove-ie-polyfills","displayName":"Remove IE11 polyfills","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

