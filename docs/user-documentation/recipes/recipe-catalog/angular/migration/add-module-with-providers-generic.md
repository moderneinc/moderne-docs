---
title: "Add generic type to `ModuleWithProviders`"
sidebar_label: "Add generic type to `ModuleWithProviders`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add generic type to `ModuleWithProviders`"}
  description={"Adds the required generic type parameter to bare `ModuleWithProviders` return types. Angular 10 requires `ModuleWithProviders<T>` where `T` is the NgModule type. The module type is inferred from the `ngModule` property in the return statement."}
  fqName={"org.openrewrite.angular.migration.add-module-with-providers-generic"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.add-module-with-providers-generic"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.add-module-with-providers-generic"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/add-module-with-providers-generic.md"}
  moderneOnly
>

<RecipeHeader.Title>Add generic type to `ModuleWithProviders`</RecipeHeader.Title>

<RecipeHeader.Description>Adds the required generic type parameter to bare `ModuleWithProviders` return types. Angular 10 requires `ModuleWithProviders<T>` where `T` is the NgModule type. The module type is inferred from the `ngModule` property in the return statement.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.add-module-with-providers-generic","displayName":"Add generic type to `ModuleWithProviders`","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

