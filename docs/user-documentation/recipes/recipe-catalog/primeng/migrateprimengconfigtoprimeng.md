---
title: "Migrate `PrimeNGConfig` to `PrimeNG`"
sidebar_label: "Migrate `PrimeNGConfig` to `PrimeNG`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `PrimeNGConfig` to `PrimeNG`"}
  description={"Renames the `PrimeNGConfig` import from `primeng/api` to `PrimeNG` from `primeng/config`, renames all identifier usages, and flags injection sites that should be migrated to `providePrimeNG()` in application providers."}
  fqName={"org.openrewrite.primeng.MigratePrimeNgConfigToPrimeNG"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.primeng.MigratePrimeNgConfigToPrimeNG"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.primeng.MigratePrimeNgConfigToPrimeNG"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/primeng/migrateprimengconfigtoprimeng.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `PrimeNGConfig` to `PrimeNG`</RecipeHeader.Title>

<RecipeHeader.Description>Renames the `PrimeNGConfig` import from `primeng/api` to `PrimeNG` from `primeng/config`, renames all identifier usages, and flags injection sites that should be migrated to `providePrimeNG()` in application providers.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Rename `PrimeNGConfig` identifiers to `PrimeNG`","href":""},{"name":"Change import","href":"/user-documentation/recipes/recipe-catalog/javascript/change-import/"},{"name":"Find `PrimeNGConfig` / `PrimeNG` service injection","href":""}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.primeng.MigratePrimeNgConfigToPrimeNG","displayName":"Migrate `PrimeNGConfig` to `PrimeNG`","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

