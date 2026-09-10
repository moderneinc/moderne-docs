---
title: "Find router configuration relying on the default `paramsInheritanceStrategy`"
sidebar_label: "Find router configuration relying on the default `paramsInheritanceStrategy`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find router configuration relying on the default `paramsInheritanceStrategy`"}
  description={"Finds `provideRouter()` and `RouterModule.forRoot()` calls that do not set `paramsInheritanceStrategy`. Angular 22 changed the default from `emptyOnly` to `always`, so route parameters and data are now inherited from all parent routes."}
  fqName={"org.openrewrite.angular.search.find-implicit-params-inheritance"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.search.find-implicit-params-inheritance"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.search.find-implicit-params-inheritance"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/search/find-implicit-params-inheritance.md"}
  moderneOnly
>

<RecipeHeader.Title>Find router configuration relying on the default `paramsInheritanceStrategy`</RecipeHeader.Title>

<RecipeHeader.Description>Finds `provideRouter()` and `RouterModule.forRoot()` calls that do not set `paramsInheritanceStrategy`. Angular 22 changed the default from `emptyOnly` to `always`, so route parameters and data are now inherited from all parent routes.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.search.find-implicit-params-inheritance","displayName":"Find router configuration relying on the default `paramsInheritanceStrategy`","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

