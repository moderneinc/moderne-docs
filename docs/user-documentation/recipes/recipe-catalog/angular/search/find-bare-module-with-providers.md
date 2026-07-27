---
title: "Find `ModuleWithProviders` without generic type"
sidebar_label: "Find `ModuleWithProviders` without generic type"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `ModuleWithProviders` without generic type"}
  description={"Finds imports of `ModuleWithProviders` from `@angular/core`. Starting in Angular 10, `ModuleWithProviders` requires a generic type parameter (e.g. `ModuleWithProviders<MyModule>`). Ensure all usages specify the module type."}
  fqName={"org.openrewrite.angular.search.find-bare-module-with-providers"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.search.find-bare-module-with-providers"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.search.find-bare-module-with-providers"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/search/find-bare-module-with-providers.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `ModuleWithProviders` without generic type</RecipeHeader.Title>

<RecipeHeader.Description>Finds imports of `ModuleWithProviders` from `@angular/core`. Starting in Angular 10, `ModuleWithProviders` requires a generic type parameter (e.g. `ModuleWithProviders<MyModule>`). Ensure all usages specify the module type.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.search.find-bare-module-with-providers","displayName":"Find `ModuleWithProviders` without generic type","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

