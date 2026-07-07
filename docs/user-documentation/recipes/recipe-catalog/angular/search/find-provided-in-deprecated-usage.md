---
title: "Find deprecated `providedIn` values"
sidebar_label: "Find deprecated `providedIn` values"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find deprecated `providedIn` values"}
  description={"Finds usages of `providedIn: 'any'` and `providedIn: NgModule` in `@Injectable` and `InjectionToken` declarations. These were deprecated in Angular 15. Use `providedIn: 'root'` or add the service to `NgModule.providers` instead."}
  fqName={"org.openrewrite.angular.search.find-provided-in-deprecated-usage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.search.find-provided-in-deprecated-usage"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.search.find-provided-in-deprecated-usage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/search/find-provided-in-deprecated-usage.md"}
  moderneOnly
>

<RecipeHeader.Title>Find deprecated `providedIn` values</RecipeHeader.Title>

<RecipeHeader.Description>Finds usages of `providedIn: 'any'` and `providedIn: NgModule` in `@Injectable` and `InjectionToken` declarations. These were deprecated in Angular 15. Use `providedIn: 'root'` or add the service to `NgModule.providers` instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.search.find-provided-in-deprecated-usage","displayName":"Find deprecated `providedIn` values","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

