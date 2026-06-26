---
title: "Upgrade to Angular 18"
sidebar_label: "Upgrade to Angular 18"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to Angular 18"}
  description={"Migrates Angular 17.x applications to Angular 18. This includes replacing the deprecated `async` test helper with `waitForAsync`, migrating `HttpClientModule` to `provideHttpClient()`, moving Transfer State APIs to `@angular/core`, and flagging removed platform APIs."}
  fqName={"org.openrewrite.angular.UpgradeToAngular18"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Upgrade to Angular 18"}
  description={"Migrates Angular 17.x applications to Angular 18. This includes replacing the deprecated `async` test helper with `waitForAsync`, migrating `HttpClientModule` to `provideHttpClient()`, moving Transfer State APIs to `@angular/core`, and flagging removed platform APIs."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.UpgradeToAngular18"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.UpgradeToAngular18"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/upgradetoangular18.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Upgrade to Angular 17","href":"angular/upgradetoangular17"},{"name":"Replace `async` with `waitForAsync`","href":"angular/migration/replace-async-with-wait-for-async"},{"name":"Replace `HttpClientModule` with `provideHttpClient()`","href":"angular/migration/replace-http-client-module"},{"name":"Change import","href":"javascript/change-import"},{"name":"Change import","href":"javascript/change-import"},{"name":"Change import","href":"javascript/change-import"},{"name":"Find `isPlatformWorkerUi` and `isPlatformWorkerApp` usage","href":"angular/search/find-platform-worker-usage"},{"name":"Find `platformDynamicServer` usage","href":"angular/search/find-platform-dynamic-server-usage"},{"name":"Find `ServerTransferStateModule` usage","href":"angular/search/find-server-transfer-state-module-usage"},{"name":"Find `RESOURCE_CACHE_PROVIDER` usage","href":"angular/search/find-resource-cache-provider-usage"},{"name":"Find removed Testability pending request methods","href":"angular/search/find-testability-pending-request-usage"},{"name":"Find `AnimationDriver.matchesElement` usage","href":"angular/search/find-animation-driver-matches-element"},{"name":"Upgrade npm dependency version","href":"javascript/upgradedependencyversion"},{"name":"Upgrade known Angular peer libraries to versions compatible with Angular 18","href":""},{"name":"Upgrade npm dependency version","href":"javascript/upgradedependencyversion"},{"name":"Upgrade npm dependency version","href":"javascript/upgradedependencyversion"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.angular.UpgradeToAngular18","displayName":"Upgrade to Angular 18","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

