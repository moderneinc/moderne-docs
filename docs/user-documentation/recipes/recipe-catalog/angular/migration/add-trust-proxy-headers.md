---
title: "Add `trustProxyHeaders` to the Angular app engine"
sidebar_label: "Add `trustProxyHeaders` to the Angular app engine"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add `trustProxyHeaders` to the Angular app engine"}
  description={"Adds `trustProxyHeaders: ['x-forwarded-host', 'x-forwarded-proto']` to `new AngularNodeAppEngine()` and `new AngularAppEngine()`. Angular 22 stopped trusting forwarded headers by default; the option restores the previous behavior and carries a TODO to remove it when the server does not sit behind a trusted proxy."}
  fqName={"org.openrewrite.angular.migration.add-trust-proxy-headers"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.add-trust-proxy-headers"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.add-trust-proxy-headers"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/add-trust-proxy-headers.md"}
  moderneOnly
>

<RecipeHeader.Title>Add `trustProxyHeaders` to the Angular app engine</RecipeHeader.Title>

<RecipeHeader.Description>Adds `trustProxyHeaders: ['x-forwarded-host', 'x-forwarded-proto']` to `new AngularNodeAppEngine()` and `new AngularAppEngine()`. Angular 22 stopped trusting forwarded headers by default; the option restores the previous behavior and carries a TODO to remove it when the server does not sit behind a trusted proxy.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.add-trust-proxy-headers","displayName":"Add `trustProxyHeaders` to the Angular app engine","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

