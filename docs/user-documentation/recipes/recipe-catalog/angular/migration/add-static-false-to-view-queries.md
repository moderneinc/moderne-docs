---
title: "Add `static: false` to view queries"
sidebar_label: "Add `static: false` to view queries"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add `static: false` to view queries"}
  description={"Adds `static: false` to `@ViewChild` and `@ContentChild` decorators that don't have the `static` property. Angular 8 requires an explicit `static` flag for view query decorators. Using `static: false` preserves the Angular 7 default behavior (queries resolved after change detection)."}
  fqName={"org.openrewrite.angular.migration.add-static-false-to-view-queries"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.add-static-false-to-view-queries"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.add-static-false-to-view-queries"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/add-static-false-to-view-queries.md"}
  moderneOnly
>

<RecipeHeader.Title>Add `static: false` to view queries</RecipeHeader.Title>

<RecipeHeader.Description>Adds `static: false` to `@ViewChild` and `@ContentChild` decorators that don't have the `static` property. Angular 8 requires an explicit `static` flag for view query decorators. Using `static: false` preserves the Angular 7 default behavior (queries resolved after change detection).</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.add-static-false-to-view-queries","displayName":"Add `static: false` to view queries","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

