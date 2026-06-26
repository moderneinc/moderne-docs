---
title: "Migrate `@Input()` to signal-based `input()`"
sidebar_label: "Migrate `@Input()` to signal-based `input()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `@Input()` to signal-based `input()`"}
  description={"Converts `@Input()` decorated properties in Angular classes to signal-based `input()` declarations. For example, `@Input() name: string` becomes `name = input<string>()`, and `@Input({ required: true }) name!: string` becomes `name = input.required<string>()`."}
  fqName={"org.openrewrite.angular.migration.migrate-input-to-signal"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Migrate `@Input()` to signal-based `input()`"}
  description={"Converts `@Input()` decorated properties in Angular classes to signal-based `input()` declarations. For example, `@Input() name: string` becomes `name = input<string>()`, and `@Input({ required: true }) name!: string` becomes `name = input.required<string>()`."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.migrate-input-to-signal"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.migrate-input-to-signal"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/migrate-input-to-signal.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.migrate-input-to-signal","displayName":"Migrate `@Input()` to signal-based `input()`","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

