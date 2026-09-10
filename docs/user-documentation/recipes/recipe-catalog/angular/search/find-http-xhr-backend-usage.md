---
title: "Find `HttpXhrBackend` usage"
sidebar_label: "Find `HttpXhrBackend` usage"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `HttpXhrBackend` usage"}
  description={"Finds imports of `HttpXhrBackend` from `@angular/common/http`. Angular 22 uses the Fetch API by default; add `withXhr()` to `provideHttpClient()` to keep using `XMLHttpRequest`, which is also required for upload progress reports."}
  fqName={"org.openrewrite.angular.search.find-http-xhr-backend-usage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.search.find-http-xhr-backend-usage"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.search.find-http-xhr-backend-usage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/search/find-http-xhr-backend-usage.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `HttpXhrBackend` usage</RecipeHeader.Title>

<RecipeHeader.Description>Finds imports of `HttpXhrBackend` from `@angular/common/http`. Angular 22 uses the Fetch API by default; add `withXhr()` to `provideHttpClient()` to keep using `XMLHttpRequest`, which is also required for upload progress reports.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.search.find-http-xhr-backend-usage","displayName":"Find `HttpXhrBackend` usage","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

