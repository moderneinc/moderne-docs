---
title: "Add `providePrimeNG` with a detected theme preset to the root NgModule"
sidebar_label: "Add `providePrimeNG` with a detected theme preset to the root NgModule"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add `providePrimeNG` with a detected theme preset to the root NgModule"}
  description={"Wires the v18 styled mode into an NgModule-based app by adding `providePrimeNG({ theme: { preset: <Preset> } })` to the root `@NgModule`'s providers array (detected by the presence of a `bootstrap:` field). The preset is chosen by scanning `angular.json` for a `primeng/resources/themes/<themeName>/theme.css` entry: `lara-*` maps to Lara, `md-*`/`mdc-*` to Material, `nora`/`nano` to Nora, and any other v17 theme (mira, nova, saga, vela, soho, fluent, viva, rhea, tailwind, bootstrap4, arya, luna, ...) falls back to Aura. The matching imports for `providePrimeNG` and the chosen preset are added automatically. Also deletes the now-defunct `primeng/resources` style entries from `angular.json` so the build doesn't try to load missing files. Idempotent: skips files that already call `providePrimeNG`."}
  fqName={"org.openrewrite.primeng.AddPrimengProvider"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.primeng.AddPrimengProvider"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.primeng.AddPrimengProvider"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/primeng/addprimengprovider.md"}
  moderneOnly
>

<RecipeHeader.Title>Add `providePrimeNG` with a detected theme preset to the root NgModule</RecipeHeader.Title>

<RecipeHeader.Description>Wires the v18 styled mode into an NgModule-based app by adding `providePrimeNG({ theme: { preset: <Preset> } })` to the root `@NgModule`'s providers array (detected by the presence of a `bootstrap:` field). The preset is chosen by scanning `angular.json` for a `primeng/resources/themes/<themeName>/theme.css` entry: `lara-*` maps to Lara, `md-*`/`mdc-*` to Material, `nora`/`nano` to Nora, and any other v17 theme (mira, nova, saga, vela, soho, fluent, viva, rhea, tailwind, bootstrap4, arya, luna, ...) falls back to Aura. The matching imports for `providePrimeNG` and the chosen preset are added automatically. Also deletes the now-defunct `primeng/resources` style entries from `angular.json` so the build doesn't try to load missing files. Idempotent: skips files that already call `providePrimeNG`.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Remove `primeng/resources` style references from `angular.json`","href":""}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.primeng.AddPrimengProvider","displayName":"Add `providePrimeNG` with a detected theme preset to the root NgModule","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

