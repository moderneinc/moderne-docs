---
title: "Find `pathMatch` route properties that may need type narrowing"
sidebar_label: "Find `pathMatch` route properties that may need type narrowing"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `pathMatch` route properties that may need type narrowing"}
  description={"Finds `pathMatch` property assignments in route configurations. In Angular 14, the `pathMatch` type was narrowed from `string` to `'full' | 'prefix'`. Routes defined as plain objects without explicit `Route` or `Routes` typing may fail type checking."}
  fqName={"org.openrewrite.angular.search.find-path-match-type-usage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find `pathMatch` route properties that may need type narrowing"}
  description={"Finds `pathMatch` property assignments in route configurations. In Angular 14, the `pathMatch` type was narrowed from `string` to `'full' | 'prefix'`. Routes defined as plain objects without explicit `Route` or `Routes` typing may fail type checking."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.search.find-path-match-type-usage"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.search.find-path-match-type-usage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/search/find-path-match-type-usage.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.angular.search.find-path-match-type-usage","displayName":"Find `pathMatch` route properties that may need type narrowing","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

