---
title: "Find undecorated classes with Angular features"
sidebar_label: "Find undecorated classes with Angular features"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find undecorated classes with Angular features"}
  description={"Finds classes that use Angular member decorators (`@Input`, `@Output`, `@ViewChild`, etc.) or implement lifecycle hooks (`ngOnInit`, `ngOnDestroy`, etc.) but lack a class-level Angular decorator. Angular 9 with Ivy requires all classes using Angular features to have an explicit decorator."}
  fqName={"org.openrewrite.angular.search.find-undecorated-angular-class"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.search.find-undecorated-angular-class"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.search.find-undecorated-angular-class"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/search/find-undecorated-angular-class.md"}
  moderneOnly
>

<RecipeHeader.Title>Find undecorated classes with Angular features</RecipeHeader.Title>

<RecipeHeader.Description>Finds classes that use Angular member decorators (`@Input`, `@Output`, `@ViewChild`, etc.) or implement lifecycle hooks (`ngOnInit`, `ngOnDestroy`, etc.) but lack a class-level Angular decorator. Angular 9 with Ivy requires all classes using Angular features to have an explicit decorator.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.search.find-undecorated-angular-class","displayName":"Find undecorated classes with Angular features","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

