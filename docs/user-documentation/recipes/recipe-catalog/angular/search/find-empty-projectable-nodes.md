---
title: "Find `createComponent` calls with empty `projectableNodes`"
sidebar_label: "Find `createComponent` calls with empty `projectableNodes`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `createComponent` calls with empty `projectableNodes`"}
  description={"Finds `createComponent()` calls that pass empty arrays in `projectableNodes`. In Angular 19, passing an empty array now renders the default `ng-content` fallback content. To suppress fallback content, pass `[document.createTextNode('')]` instead."}
  fqName={"org.openrewrite.angular.search.find-empty-projectable-nodes"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.search.find-empty-projectable-nodes"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.search.find-empty-projectable-nodes"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/search/find-empty-projectable-nodes.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `createComponent` calls with empty `projectableNodes`</RecipeHeader.Title>

<RecipeHeader.Description>Finds `createComponent()` calls that pass empty arrays in `projectableNodes`. In Angular 19, passing an empty array now renders the default `ng-content` fallback content. To suppress fallback content, pass `[document.createTextNode('')]` instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.search.find-empty-projectable-nodes","displayName":"Find `createComponent` calls with empty `projectableNodes`","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

