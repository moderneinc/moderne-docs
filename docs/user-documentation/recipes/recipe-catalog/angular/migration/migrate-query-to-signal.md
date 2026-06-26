---
title: "Migrate query decorators to signal-based functions"
sidebar_label: "Migrate query decorators to signal-based functions"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate query decorators to signal-based functions"}
  description={"Converts `@ViewChild()`, `@ViewChildren()`, `@ContentChild()`, and `@ContentChildren()` decorated properties to signal-based query functions. For example, `@ViewChild('ref') el: ElementRef` becomes `el = viewChild<ElementRef>('ref')`."}
  fqName={"org.openrewrite.angular.migration.migrate-query-to-signal"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Migrate query decorators to signal-based functions"}
  description={"Converts `@ViewChild()`, `@ViewChildren()`, `@ContentChild()`, and `@ContentChildren()` decorated properties to signal-based query functions. For example, `@ViewChild('ref') el: ElementRef` becomes `el = viewChild<ElementRef>('ref')`."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.migrate-query-to-signal"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.migrate-query-to-signal"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/migrate-query-to-signal.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.migrate-query-to-signal","displayName":"Migrate query decorators to signal-based functions","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

