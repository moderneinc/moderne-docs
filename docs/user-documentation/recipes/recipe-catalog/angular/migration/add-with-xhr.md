---
title: "Add `withXhr()` to `provideHttpClient()`"
sidebar_label: "Add `withXhr()` to `provideHttpClient()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add `withXhr()` to `provideHttpClient()`"}
  description={"Adds `withXhr()` to `provideHttpClient()` calls that select neither a `withFetch()` nor a `withXhr()` backend. Angular 22 made `FetchBackend` the default `HttpBackend`; `withXhr()` keeps the previous `XMLHttpRequest` based backend, which is also the only one that reports upload progress."}
  fqName={"org.openrewrite.angular.migration.add-with-xhr"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.add-with-xhr"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.add-with-xhr"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/add-with-xhr.md"}
  moderneOnly
>

<RecipeHeader.Title>Add `withXhr()` to `provideHttpClient()`</RecipeHeader.Title>

<RecipeHeader.Description>Adds `withXhr()` to `provideHttpClient()` calls that select neither a `withFetch()` nor a `withXhr()` backend. Angular 22 made `FetchBackend` the default `HttpBackend`; `withXhr()` keeps the previous `XMLHttpRequest` based backend, which is also the only one that reports upload progress.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.add-with-xhr","displayName":"Add `withXhr()` to `provideHttpClient()`","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

