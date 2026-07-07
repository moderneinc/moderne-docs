---
title: "Rename `Message` interface to `ToastMessageOptions`"
sidebar_label: "Rename `Message` interface to `ToastMessageOptions`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Rename `Message` interface to `ToastMessageOptions`"}
  description={"Renames the `Message` interface import from `primeng/api` to `ToastMessageOptions` and updates all identifier usages. The `Message` interface was renamed in PrimeNG 18 due to name collision with the `Message` component."}
  fqName={"org.openrewrite.primeng.RenameMessageInterface"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.primeng.RenameMessageInterface"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.primeng.RenameMessageInterface"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/primeng/renamemessageinterface.md"}
  moderneOnly
>

<RecipeHeader.Title>Rename `Message` interface to `ToastMessageOptions`</RecipeHeader.Title>

<RecipeHeader.Description>Renames the `Message` interface import from `primeng/api` to `ToastMessageOptions` and updates all identifier usages. The `Message` interface was renamed in PrimeNG 18 due to name collision with the `Message` component.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Rename `Message` identifiers to `ToastMessageOptions`","href":""},{"name":"Change import","href":"/user-documentation/recipes/recipe-catalog/javascript/change-import/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.primeng.RenameMessageInterface","displayName":"Rename `Message` interface to `ToastMessageOptions`","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

