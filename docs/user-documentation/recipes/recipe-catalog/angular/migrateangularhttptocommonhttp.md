---
title: "Migrate `@angular/http` to `@angular/common/http`"
sidebar_label: "Migrate `@angular/http` to `@angular/common/http`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `@angular/http` to `@angular/common/http`"}
  description={"Ports the `@angular/http` API that `@angular/common/http` replaces: `Http`, `Headers`, `HttpModule`, `JsonpModule` and `QueryEncoder` become `HttpClient`, `HttpHeaders`, `HttpClientModule`, `HttpClientJsonpModule` and `HttpUrlEncodingCodec`, `new RequestOptions({...})` becomes the options object `HttpClient` takes, `ResponseContentType.Blob` becomes `'blob'`, and the `map` that `HttpClient` makes redundant is dropped. `Http.request` takes the method first, and every other request asks for its body as text, which is what `Http` handed back. `URLSearchParams`, the backends, the XSRF strategies and `@angular/http/testing` have no equivalent of the same shape, so they are flagged for a hand migration instead. The dependency is dropped either way, since no release of it resolves against Angular 8 or later: its last release pins `@angular/core` to an exact 7.x, so keeping it leaves a tree npm refuses to install, while dropping it turns whatever is left to migrate into a compile error on the lines that need the work."}
  fqName={"org.openrewrite.angular.MigrateAngularHttpToCommonHttp"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.MigrateAngularHttpToCommonHttp"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.MigrateAngularHttpToCommonHttp"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migrateangularhttptocommonhttp.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `@angular/http` to `@angular/common/http`</RecipeHeader.Title>

<RecipeHeader.Description>Ports the `@angular/http` API that `@angular/common/http` replaces: `Http`, `Headers`, `HttpModule`, `JsonpModule` and `QueryEncoder` become `HttpClient`, `HttpHeaders`, `HttpClientModule`, `HttpClientJsonpModule` and `HttpUrlEncodingCodec`, `new RequestOptions({...})` becomes the options object `HttpClient` takes, `ResponseContentType.Blob` becomes `'blob'`, and the `map` that `HttpClient` makes redundant is dropped. `Http.request` takes the method first, and every other request asks for its body as text, which is what `Http` handed back. `URLSearchParams`, the backends, the XSRF strategies and `@angular/http/testing` have no equivalent of the same shape, so they are flagged for a hand migration instead. The dependency is dropped either way, since no release of it resolves against Angular 8 or later: its last release pins `@angular/core` to an exact 7.x, so keeping it leaves a tree npm refuses to install, while dropping it turns whatever is left to migrate into a compile error on the lines that need the work.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate `@angular/http` to `@angular/common/http` (code changes)","href":""},{"name":"org.openrewrite.javascript.RemoveDependency","href":"/user-documentation/recipes/recipe-catalog/javascript/removedependency/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.angular.MigrateAngularHttpToCommonHttp","displayName":"Migrate `@angular/http` to `@angular/common/http`","npmPackage":"@openrewrite/recipes-angular","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-javascript","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_JAVASCRIPT"}]}}>

## Usage

</UsageList>

