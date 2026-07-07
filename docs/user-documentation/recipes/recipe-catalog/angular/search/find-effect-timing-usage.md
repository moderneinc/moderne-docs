---
title: "Find `effect()` usage affected by Angular 19 timing changes"
sidebar_label: "Find `effect()` usage affected by Angular 19 timing changes"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `effect()` usage affected by Angular 19 timing changes"}
  description={"Finds `effect()` calls from `@angular/core`. In Angular 19, effects triggered outside change detection now run as part of the change detection process instead of as a microtask, and effects triggered during change detection run earlier, before the component's template."}
  fqName={"org.openrewrite.angular.search.find-effect-timing-usage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.search.find-effect-timing-usage"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.search.find-effect-timing-usage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/search/find-effect-timing-usage.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `effect()` usage affected by Angular 19 timing changes</RecipeHeader.Title>

<RecipeHeader.Description>Finds `effect()` calls from `@angular/core`. In Angular 19, effects triggered outside change detection now run as part of the change detection process instead of as a microtask, and effects triggered during change detection run earlier, before the component's template.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.search.find-effect-timing-usage","displayName":"Find `effect()` usage affected by Angular 19 timing changes","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

