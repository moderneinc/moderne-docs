---
title: "Upgrade to Angular 15"
sidebar_label: "Upgrade to Angular 15"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to Angular 15"}
  description={"Migrates Angular 14.x applications to Angular 15. This includes removing the `relativeLinkResolution` option from `RouterModule.forRoot()`, removing the `enableIvy` compiler option from `tsconfig.json`, flagging the deprecated `DATE_PIPE_DEFAULT_TIMEZONE` token and `providedIn: NgModule`/`'any'` usage, and upgrading Angular, TypeScript, and related dependency versions."}
  fqName={"org.openrewrite.angular.UpgradeToAngular15"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Upgrade to Angular 15"}
  description={"Migrates Angular 14.x applications to Angular 15. This includes removing the `relativeLinkResolution` option from `RouterModule.forRoot()`, removing the `enableIvy` compiler option from `tsconfig.json`, flagging the deprecated `DATE_PIPE_DEFAULT_TIMEZONE` token and `providedIn: NgModule`/`'any'` usage, and upgrading Angular, TypeScript, and related dependency versions."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.UpgradeToAngular15"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.UpgradeToAngular15"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/upgradetoangular15.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Upgrade to Angular 14","href":"angular/upgradetoangular14"},{"name":"Remove `relativeLinkResolution`","href":"angular/migration/remove-relative-link-resolution"},{"name":"Remove `enableIvy` compiler option","href":"angular/migration/remove-enable-ivy"},{"name":"Find `DATE_PIPE_DEFAULT_TIMEZONE` usage","href":"angular/search/find-date-pipe-default-timezone-usage"},{"name":"Find deprecated `providedIn` values","href":"angular/search/find-provided-in-deprecated-usage"},{"name":"Upgrade npm dependency version","href":"javascript/upgradedependencyversion"},{"name":"Upgrade npm dependency version","href":"javascript/upgradedependencyversion"},{"name":"Upgrade npm dependency version","href":"javascript/upgradedependencyversion"},{"name":"Upgrade npm dependency version","href":"javascript/upgradedependencyversion"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.angular.UpgradeToAngular15","displayName":"Upgrade to Angular 15","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

