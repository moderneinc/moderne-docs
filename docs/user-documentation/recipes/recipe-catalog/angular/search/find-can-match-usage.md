---
title: "Find two argument `canMatch` guard calls"
sidebar_label: "Find two argument `canMatch` guard calls"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find two argument `canMatch` guard calls"}
  description={"Finds calls to a `canMatch` guard that pass only a route and its segments. Angular 22 made the `currentSnapshot` parameter of `CanMatch` and `CanMatchFn` required, so those calls no longer compile. Guards that declare fewer parameters keep working and are not reported."}
  fqName={"org.openrewrite.angular.search.find-can-match-usage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.search.find-can-match-usage"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.search.find-can-match-usage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/search/find-can-match-usage.md"}
  moderneOnly
>

<RecipeHeader.Title>Find two argument `canMatch` guard calls</RecipeHeader.Title>

<RecipeHeader.Description>Finds calls to a `canMatch` guard that pass only a route and its segments. Angular 22 made the `currentSnapshot` parameter of `CanMatch` and `CanMatchFn` required, so those calls no longer compile. Guards that declare fewer parameters keep working and are not reported.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.search.find-can-match-usage","displayName":"Find two argument `canMatch` guard calls","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

