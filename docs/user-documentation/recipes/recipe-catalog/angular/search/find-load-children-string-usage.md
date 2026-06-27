---
title: "Find deprecated string-based `loadChildren` usage"
sidebar_label: "Find deprecated string-based `loadChildren` usage"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find deprecated string-based `loadChildren` usage"}
  description={"Finds usages of the deprecated string-based `loadChildren` syntax (e.g. `loadChildren: './path/to/module#ModuleName'`). String-based lazy loading was deprecated in Angular 8 and removed in Angular 11. Use dynamic imports instead: `loadChildren: () => import('./path/to/module').then(m => m.ModuleName)`."}
  fqName={"org.openrewrite.angular.search.find-load-children-string-usage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.search.find-load-children-string-usage"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.search.find-load-children-string-usage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/search/find-load-children-string-usage.md"}
  moderneOnly
>

<RecipeHeader.Title>Find deprecated string-based `loadChildren` usage</RecipeHeader.Title>

<RecipeHeader.Description>Finds usages of the deprecated string-based `loadChildren` syntax (e.g. `loadChildren: './path/to/module#ModuleName'`). String-based lazy loading was deprecated in Angular 8 and removed in Angular 11. Use dynamic imports instead: `loadChildren: () => import('./path/to/module').then(m => m.ModuleName)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.search.find-load-children-string-usage","displayName":"Find deprecated string-based `loadChildren` usage","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

