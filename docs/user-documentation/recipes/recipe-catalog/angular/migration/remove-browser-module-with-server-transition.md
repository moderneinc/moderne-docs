---
title: "Remove `BrowserModule.withServerTransition`"
sidebar_label: "Remove `BrowserModule.withServerTransition`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove `BrowserModule.withServerTransition`"}
  description={"Replaces `BrowserModule.withServerTransition({ appId: '...' })` with `BrowserModule` and adds `{ provide: APP_ID, useValue: '...' }` to the NgModule providers. The `withServerTransition` method was removed in Angular 19."}
  fqName={"org.openrewrite.angular.migration.remove-browser-module-with-server-transition"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Remove `BrowserModule.withServerTransition`"}
  description={"Replaces `BrowserModule.withServerTransition({ appId: '...' })` with `BrowserModule` and adds `{ provide: APP_ID, useValue: '...' }` to the NgModule providers. The `withServerTransition` method was removed in Angular 19."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.remove-browser-module-with-server-transition"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.remove-browser-module-with-server-transition"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/remove-browser-module-with-server-transition.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.remove-browser-module-with-server-transition","displayName":"Remove `BrowserModule.withServerTransition`","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

