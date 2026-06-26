---
title: "Migrate `PrimeNG` config field assignments to `.set()`"
sidebar_label: "Migrate `PrimeNG` config field assignments to `.set()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `PrimeNG` config field assignments to `.set()`"}
  description={"In PrimeNG 18, fields on the `PrimeNG` config service like `ripple`, `inputStyle`, `inputVariant`, and `csp` are `WritableSignal<T>` rather than plain fields. Direct assignment (`service.ripple = true`) no longer compiles. This recipe rewrites such assignments to use the signal's `set()` method (`service.ripple.set(true)`) when the file imports `PrimeNG` from `primeng/config`."}
  fqName={"org.openrewrite.primeng.MigratePrimeNGSignalAssignments"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Migrate `PrimeNG` config field assignments to `.set()`"}
  description={"In PrimeNG 18, fields on the `PrimeNG` config service like `ripple`, `inputStyle`, `inputVariant`, and `csp` are `WritableSignal<T>` rather than plain fields. Direct assignment (`service.ripple = true`) no longer compiles. This recipe rewrites such assignments to use the signal's `set()` method (`service.ripple.set(true)`) when the file imports `PrimeNG` from `primeng/config`."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.primeng.MigratePrimeNGSignalAssignments"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.primeng.MigratePrimeNGSignalAssignments"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/primeng/migrateprimengsignalassignments.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.primeng.MigratePrimeNGSignalAssignments","displayName":"Migrate `PrimeNG` config field assignments to `.set()`","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

