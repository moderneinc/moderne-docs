---
title: "Remove `ComponentFactoryResolver`"
sidebar_label: "Remove `ComponentFactoryResolver`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove `ComponentFactoryResolver`"}
  description={"Replaces `resolver.resolveComponentFactory(Component)` with just `Component` and removes the `ComponentFactoryResolver` import. Since Ivy, `ViewContainerRef.createComponent` accepts the component class directly. `ComponentFactoryResolver` was deprecated in Angular 13 and removed in Angular 16."}
  fqName={"org.openrewrite.angular.migration.remove-component-factory-resolver"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.remove-component-factory-resolver"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.remove-component-factory-resolver"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/remove-component-factory-resolver.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove `ComponentFactoryResolver`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces `resolver.resolveComponentFactory(Component)` with just `Component` and removes the `ComponentFactoryResolver` import. Since Ivy, `ViewContainerRef.createComponent` accepts the component class directly. `ComponentFactoryResolver` was deprecated in Angular 13 and removed in Angular 16.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.remove-component-factory-resolver","displayName":"Remove `ComponentFactoryResolver`","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

