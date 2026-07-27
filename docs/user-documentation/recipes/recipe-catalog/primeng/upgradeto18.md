---
title: "Upgrade to PrimeNG 18"
sidebar_label: "Upgrade to PrimeNG 18"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to PrimeNG 18"}
  description={"Migrates PrimeNG 17.x applications to PrimeNG 18. Renames components, migrates `PrimeNGConfig` to `PrimeNG` (with signal-backed setters), comments out the obsolete `primeng/resources` style entries in `angular.json`, wires `providePrimeNG({ theme: { preset: Aura } })` into the root NgModule and adds `@primeng/themes` to `package.json`. Anything that can't be deterministically migrated (removed-and-no-direct-replacement components, deprecated CSS classes, structural template changes) gets a TODO comment in source plus a row in the `ManualMigrationSteps` data table for an agent or human to finish."}
  fqName={"org.openrewrite.primeng.UpgradeTo18"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.primeng.UpgradeTo18"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.primeng.UpgradeTo18"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/primeng/upgradeto18.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade to PrimeNG 18</RecipeHeader.Title>

<RecipeHeader.Description>Migrates PrimeNG 17.x applications to PrimeNG 18. Renames components, migrates `PrimeNGConfig` to `PrimeNG` (with signal-backed setters), comments out the obsolete `primeng/resources` style entries in `angular.json`, wires `providePrimeNG({ theme: { preset: Aura } })` into the root NgModule and adds `@primeng/themes` to `package.json`. Anything that can't be deterministically migrated (removed-and-no-direct-replacement components, deprecated CSS classes, structural template changes) gets a TODO comment in source plus a row in the `ManualMigrationSteps` data table for an agent or human to finish.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade to Angular 18","href":"/user-documentation/recipes/recipe-catalog/angular/upgradetoangular18/"},{"name":"Upgrade PrimeNG components to 18","href":"/user-documentation/recipes/recipe-catalog/primeng/upgradecomponentsto18/"},{"name":"Migrate `PrimeNGConfig` to `PrimeNG`","href":"/user-documentation/recipes/recipe-catalog/primeng/migrateprimengconfigtoprimeng/"},{"name":"Migrate `PrimeNG` config field assignments to `.set()`","href":"/user-documentation/recipes/recipe-catalog/primeng/migrateprimengsignalassignments/"},{"name":"Add `providePrimeNG` with a detected theme preset to the root NgModule","href":"/user-documentation/recipes/recipe-catalog/primeng/addprimengprovider/"},{"name":"Add npm dependency","href":"/user-documentation/recipes/recipe-catalog/javascript/adddependency/"},{"name":"Upgrade npm dependency version","href":"/user-documentation/recipes/recipe-catalog/javascript/upgradedependencyversion/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.primeng.UpgradeTo18","displayName":"Upgrade to PrimeNG 18","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

