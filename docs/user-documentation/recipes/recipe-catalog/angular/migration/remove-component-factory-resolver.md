---
title: "Remove `ComponentFactoryResolver`"
sidebar_label: "Remove `ComponentFactoryResolver`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove `ComponentFactoryResolver`"}
  description={"Replaces `resolver.resolveComponentFactory(Component)` with just `Component` only when passed directly to `createComponent`. Since Ivy, `ViewContainerRef.createComponent` accepts the component class directly. Retains factories used through their own `create` method."}
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
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.remove-component-factory-resolver"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/remove-component-factory-resolver.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove `ComponentFactoryResolver`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces `resolver.resolveComponentFactory(Component)` with just `Component` only when passed directly to `createComponent`. Since Ivy, `ViewContainerRef.createComponent` accepts the component class directly. Retains factories used through their own `create` method.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.remove-component-factory-resolver","displayName":"Remove `ComponentFactoryResolver`","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

