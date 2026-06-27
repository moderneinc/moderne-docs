---
title: "Remove `ReactDOM.render` callback argument"
sidebar_label: "Remove `ReactDOM.render` callback argument"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove `ReactDOM.render` callback argument"}
  description={"Removes the third callback argument from `ReactDOM.render(element, container, callback)` calls. Callbacks are not supported in React 18's `createRoot` API."}
  fqName={"org.openrewrite.react.18.replace-render-callback"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.react.18.replace-render-callback"}
  artifact={"io.moderne.recipe:rewrite-react"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.react.18.replace-render-callback"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/react/18/replace-render-callback.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove `ReactDOM.render` callback argument</RecipeHeader.Title>

<RecipeHeader.Description>Removes the third callback argument from `ReactDOM.render(element, container, callback)` calls. Callbacks are not supported in React 18's `createRoot` API.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.react.18.replace-render-callback","displayName":"Remove `ReactDOM.render` callback argument","npmPackage":"@openrewrite/recipes-react"}}>

## Usage

</UsageList>

