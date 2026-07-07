---
title: "Find classes with DI dependencies but missing `@Injectable()`"
sidebar_label: "Find classes with DI dependencies but missing `@Injectable()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find classes with DI dependencies but missing `@Injectable()`"}
  description={"Finds classes that have constructor parameters (suggesting dependency injection) but lack an `@Injectable()` or other Angular class-level decorator. Angular 9 with Ivy requires an explicit `@Injectable()` decorator for all services that use dependency injection."}
  fqName={"org.openrewrite.angular.search.find-missing-injectable"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.search.find-missing-injectable"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.search.find-missing-injectable"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/search/find-missing-injectable.md"}
  moderneOnly
>

<RecipeHeader.Title>Find classes with DI dependencies but missing `@Injectable()`</RecipeHeader.Title>

<RecipeHeader.Description>Finds classes that have constructor parameters (suggesting dependency injection) but lack an `@Injectable()` or other Angular class-level decorator. Angular 9 with Ivy requires an explicit `@Injectable()` decorator for all services that use dependency injection.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.search.find-missing-injectable","displayName":"Find classes with DI dependencies but missing `@Injectable()`","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

