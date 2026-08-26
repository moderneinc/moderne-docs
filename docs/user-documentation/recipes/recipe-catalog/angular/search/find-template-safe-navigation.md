---
title: "Find safe navigation in Angular templates"
sidebar_label: "Find safe navigation in Angular templates"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find safe navigation in Angular templates"}
  description={"Finds `?.` in HTML templates and in inline `template` metadata. Angular 22 changed safe navigation in templates to return `undefined` instead of `null`, which changes bindings that tell the two apart. Angular ships a `$safeNavigationMigration()` wrapper for this; this recipe reports the templates to review rather than rewriting the expressions."}
  fqName={"org.openrewrite.angular.search.find-template-safe-navigation"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.search.find-template-safe-navigation"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.search.find-template-safe-navigation"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/search/find-template-safe-navigation.md"}
  moderneOnly
>

<RecipeHeader.Title>Find safe navigation in Angular templates</RecipeHeader.Title>

<RecipeHeader.Description>Finds `?.` in HTML templates and in inline `template` metadata. Angular 22 changed safe navigation in templates to return `undefined` instead of `null`, which changes bindings that tell the two apart. Angular ships a `$safeNavigationMigration()` wrapper for this; this recipe reports the templates to review rather than rewriting the expressions.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Find safe navigation in HTML templates","href":""},{"name":"Find safe navigation in inline templates","href":""}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.angular.search.find-template-safe-navigation","displayName":"Find safe navigation in Angular templates","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

