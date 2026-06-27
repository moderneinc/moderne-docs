---
title: "Migrate `@Output()` to signal-based `output()`"
sidebar_label: "Migrate `@Output()` to signal-based `output()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `@Output()` to signal-based `output()`"}
  description={"Converts `@Output()` decorated properties using `EventEmitter` in Angular classes to signal-based `output()` declarations. For example, `@Output() clicked = new EventEmitter<void>()` becomes `clicked = output<void>()`."}
  fqName={"org.openrewrite.angular.migration.migrate-output-to-signal"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.migrate-output-to-signal"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.migrate-output-to-signal"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/migrate-output-to-signal.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `@Output()` to signal-based `output()`</RecipeHeader.Title>

<RecipeHeader.Description>Converts `@Output()` decorated properties using `EventEmitter` in Angular classes to signal-based `output()` declarations. For example, `@Output() clicked = new EventEmitter<void>()` becomes `clicked = output<void>()`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.migrate-output-to-signal","displayName":"Migrate `@Output()` to signal-based `output()`","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

