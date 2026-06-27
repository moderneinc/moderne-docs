---
title: "Upgrade to Angular 9"
sidebar_label: "Upgrade to Angular 9"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to Angular 9"}
  description={"Migrates Angular 8.x applications to Angular 9. This includes removing the now-default `static: false` from view query decorators, replacing `TestBed.get()` with `TestBed.inject()`, adding generic type parameters to `ModuleWithProviders`, enabling AOT compilation in `angular.json`, updating `tsconfig.json` module settings for Ivy, flagging removed View Engine APIs (`Renderer`, `RenderComponentType`, `RootRenderer`), and upgrading Angular, TypeScript, and related dependency versions."}
  fqName={"org.openrewrite.angular.UpgradeToAngular9"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.UpgradeToAngular9"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.UpgradeToAngular9"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/upgradetoangular9.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade to Angular 9</RecipeHeader.Title>

<RecipeHeader.Description>Migrates Angular 8.x applications to Angular 9. This includes removing the now-default `static: false` from view query decorators, replacing `TestBed.get()` with `TestBed.inject()`, adding generic type parameters to `ModuleWithProviders`, enabling AOT compilation in `angular.json`, updating `tsconfig.json` module settings for Ivy, flagging removed View Engine APIs (`Renderer`, `RenderComponentType`, `RootRenderer`), and upgrading Angular, TypeScript, and related dependency versions.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade to Angular 8","href":"/user-documentation/recipes/recipe-catalog/angular/upgradetoangular8/"},{"name":"Remove `static: false` from view queries","href":"/user-documentation/recipes/recipe-catalog/angular/migration/remove-static-false/"},{"name":"Enable AOT compilation in `angular.json`","href":"/user-documentation/recipes/recipe-catalog/angular/migration/enable-aot-build/"},{"name":"Update `tsconfig.json` module settings for Ivy","href":"/user-documentation/recipes/recipe-catalog/angular/migration/update-tsconfig-module/"},{"name":"Replace `TestBed.get()` with `TestBed.inject()`","href":"/user-documentation/recipes/recipe-catalog/angular/migration/replace-testbed-get-with-inject/"},{"name":"Add generic type to `ModuleWithProviders`","href":"/user-documentation/recipes/recipe-catalog/angular/migration/add-module-with-providers-generic/"},{"name":"Find deprecated `Renderer` usage","href":"/user-documentation/recipes/recipe-catalog/angular/search/find-renderer-usage/"},{"name":"Find deprecated `RenderComponentType` usage","href":"/user-documentation/recipes/recipe-catalog/angular/search/find-render-component-type-usage/"},{"name":"Find deprecated `RootRenderer` usage","href":"/user-documentation/recipes/recipe-catalog/angular/search/find-root-renderer-usage/"},{"name":"Find HammerJS usage","href":"/user-documentation/recipes/recipe-catalog/angular/search/find-hammer-js-usage/"},{"name":"Find deprecated string-based `loadChildren` usage","href":"/user-documentation/recipes/recipe-catalog/angular/search/find-load-children-string-usage/"},{"name":"Find undecorated classes with Angular features","href":"/user-documentation/recipes/recipe-catalog/angular/search/find-undecorated-angular-class/"},{"name":"Find classes with DI dependencies but missing `@Injectable()`","href":"/user-documentation/recipes/recipe-catalog/angular/search/find-missing-injectable/"},{"name":"Find deprecated `ANALYZE_FOR_ENTRY_COMPONENTS` usage","href":"/user-documentation/recipes/recipe-catalog/angular/search/find-analyze-for-entry-components-usage/"},{"name":"Upgrade npm dependency version","href":"/user-documentation/recipes/recipe-catalog/javascript/upgradedependencyversion/"},{"name":"Upgrade npm dependency version","href":"/user-documentation/recipes/recipe-catalog/javascript/upgradedependencyversion/"},{"name":"Upgrade npm dependency version","href":"/user-documentation/recipes/recipe-catalog/javascript/upgradedependencyversion/"},{"name":"Upgrade npm dependency version","href":"/user-documentation/recipes/recipe-catalog/javascript/upgradedependencyversion/"},{"name":"Upgrade npm dependency version","href":"/user-documentation/recipes/recipe-catalog/javascript/upgradedependencyversion/"},{"name":"Upgrade npm dependency version","href":"/user-documentation/recipes/recipe-catalog/javascript/upgradedependencyversion/"},{"name":"Upgrade npm dependency version","href":"/user-documentation/recipes/recipe-catalog/javascript/upgradedependencyversion/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.angular.UpgradeToAngular9","displayName":"Upgrade to Angular 9","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

