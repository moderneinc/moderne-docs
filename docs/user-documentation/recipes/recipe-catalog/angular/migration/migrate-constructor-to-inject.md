---
title: "Migrate constructor injection to `inject()`"
sidebar_label: "Migrate constructor injection to `inject()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate constructor injection to `inject()`"}
  description={"Converts constructor parameter properties in Angular classes to field declarations using the `inject()` function. For example, `constructor(private svc: MyService) {}` becomes `private svc = inject(MyService);`."}
  fqName={"org.openrewrite.angular.migration.migrate-constructor-to-inject"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Migrate constructor injection to `inject()`"}
  description={"Converts constructor parameter properties in Angular classes to field declarations using the `inject()` function. For example, `constructor(private svc: MyService) {}` becomes `private svc = inject(MyService);`."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.migrate-constructor-to-inject"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.migrate-constructor-to-inject"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/migrate-constructor-to-inject.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.migrate-constructor-to-inject","displayName":"Migrate constructor injection to `inject()`","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

