---
title: "Upgrade to Angular 8"
sidebar_label: "Upgrade to Angular 8"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to Angular 8"}
  description={"Migrates Angular 7.x applications to Angular 8. This includes adding the now-required `static: false` to `@ViewChild` and `@ContentChild` decorators, moving the `DOCUMENT` import from `@angular/platform-browser` to `@angular/common`, removing `rxjs-compat` and flagging any remaining RxJS 5-style imports, flagging removed `@angular/http` imports, converting deprecated string-based `loadChildren` to dynamic imports, and upgrading Angular, TypeScript, and related dependency versions."}
  fqName={"org.openrewrite.angular.UpgradeToAngular8"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Upgrade to Angular 8"}
  description={"Migrates Angular 7.x applications to Angular 8. This includes adding the now-required `static: false` to `@ViewChild` and `@ContentChild` decorators, moving the `DOCUMENT` import from `@angular/platform-browser` to `@angular/common`, removing `rxjs-compat` and flagging any remaining RxJS 5-style imports, flagging removed `@angular/http` imports, converting deprecated string-based `loadChildren` to dynamic imports, and upgrading Angular, TypeScript, and related dependency versions."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.UpgradeToAngular8"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.UpgradeToAngular8"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/upgradetoangular8.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Add `static: false` to view queries","href":"angular/migration/add-static-false-to-view-queries"},{"name":"Move `DOCUMENT` import to `@angular/common`","href":"angular/migration/move-document-import"},{"name":"Find RxJS 5-style imports requiring `rxjs-compat`","href":"angular/search/find-rxjs-compat-usage"},{"name":"Replace string-based `loadChildren` with dynamic `import()`","href":"angular/migration/replace-load-children-string"},{"name":"Find removed `@angular/http` usage","href":"angular/search/find-angular-http-usage"},{"name":"Find removed `@angular/platform-webworker` usage","href":"angular/search/find-platform-webworker-usage"},{"name":"Remove npm dependency","href":"javascript/removedependency"},{"name":"Upgrade npm dependency version","href":"javascript/upgradedependencyversion"},{"name":"Upgrade npm dependency version","href":"javascript/upgradedependencyversion"},{"name":"Upgrade npm dependency version","href":"javascript/upgradedependencyversion"},{"name":"Upgrade npm dependency version","href":"javascript/upgradedependencyversion"},{"name":"Upgrade npm dependency version","href":"javascript/upgradedependencyversion"},{"name":"Upgrade npm dependency version","href":"javascript/upgradedependencyversion"},{"name":"Upgrade npm dependency version","href":"javascript/upgradedependencyversion"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.angular.UpgradeToAngular8","displayName":"Upgrade to Angular 8","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

