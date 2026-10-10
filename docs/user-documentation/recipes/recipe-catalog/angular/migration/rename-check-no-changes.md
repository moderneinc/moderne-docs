---
title: "Rename `provideExperimentalCheckNoChangesForDebug` to `provideCheckNoChangesConfig`"
sidebar_label: "Rename `provideExperimentalCheckNoChangesForDebug` to `provideCheckNoChangesConfig`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Rename `provideExperimentalCheckNoChangesForDebug` to `provideCheckNoChangesConfig`"}
  description={"Renames `provideExperimentalCheckNoChangesForDebug` to `provideCheckNoChangesConfig` in imports and usages, the name the experimental API took when it became developer preview in Angular 20. Angular 20 also made `exhaustive` required, so it is added as `true` to match the Angular 19 default, dropped `useNgZoneOnStable`, and no longer accepts `interval` alongside `exhaustive: false`."}
  fqName={"org.openrewrite.angular.migration.rename-check-no-changes"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.rename-check-no-changes"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.rename-check-no-changes"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/rename-check-no-changes.md"}
  moderneOnly
>

<RecipeHeader.Title>Rename `provideExperimentalCheckNoChangesForDebug` to `provideCheckNoChangesConfig`</RecipeHeader.Title>

<RecipeHeader.Description>Renames `provideExperimentalCheckNoChangesForDebug` to `provideCheckNoChangesConfig` in imports and usages, the name the experimental API took when it became developer preview in Angular 20. Angular 20 also made `exhaustive` required, so it is added as `true` to match the Angular 19 default, dropped `useNgZoneOnStable`, and no longer accepts `interval` alongside `exhaustive: false`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.rename-check-no-changes","displayName":"Rename `provideExperimentalCheckNoChangesForDebug` to `provideCheckNoChangesConfig`","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

