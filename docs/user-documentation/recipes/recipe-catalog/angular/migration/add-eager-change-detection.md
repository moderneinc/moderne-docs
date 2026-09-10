---
title: "Add `ChangeDetectionStrategy.Eager` to components"
sidebar_label: "Add `ChangeDetectionStrategy.Eager` to components"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add `ChangeDetectionStrategy.Eager` to components"}
  description={"Adds `changeDetection: ChangeDetectionStrategy.Eager` to `@Component` decorators that do not specify a change detection strategy. Angular 22 changed the default for such components to `ChangeDetectionStrategy.OnPush`; making the previous check-always behavior explicit keeps them working unchanged."}
  fqName={"org.openrewrite.angular.migration.add-eager-change-detection"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.add-eager-change-detection"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.add-eager-change-detection"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/add-eager-change-detection.md"}
  moderneOnly
>

<RecipeHeader.Title>Add `ChangeDetectionStrategy.Eager` to components</RecipeHeader.Title>

<RecipeHeader.Description>Adds `changeDetection: ChangeDetectionStrategy.Eager` to `@Component` decorators that do not specify a change detection strategy. Angular 22 changed the default for such components to `ChangeDetectionStrategy.OnPush`; making the previous check-always behavior explicit keeps them working unchanged.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.add-eager-change-detection","displayName":"Add `ChangeDetectionStrategy.Eager` to components","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

