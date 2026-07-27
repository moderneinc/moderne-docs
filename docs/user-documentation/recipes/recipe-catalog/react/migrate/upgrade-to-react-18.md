---
title: "Upgrade to React 18"
sidebar_label: "Upgrade to React 18"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to React 18"}
  description={"Migrate deprecated APIs for React 18 compatibility. Includes all React 16 and 17 migrations plus the createRoot API migration, removal of unstable_batchedUpdates, unmountComponentAtNode replacement, and render callback removal."}
  fqName={"org.openrewrite.react.migrate.upgrade-to-react-18"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.react.migrate.upgrade-to-react-18"}
  artifact={"@openrewrite/recipes-react"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.react.migrate.upgrade-to-react-18"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-18.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade to React 18</RecipeHeader.Title>

<RecipeHeader.Description>Migrate deprecated APIs for React 18 compatibility. Includes all React 16 and 17 migrations plus the createRoot API migration, removal of unstable_batchedUpdates, unmountComponentAtNode replacement, and render callback removal.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade to React 17","href":"/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-17/"},{"name":"Replace `ReactDOM.render` with `createRoot`","href":"/user-documentation/recipes/recipe-catalog/react/18/replace-reactdom-render/"},{"name":"Remove `unstable_batchedUpdates`","href":"/user-documentation/recipes/recipe-catalog/react/18/remove-unstable-batched-updates/"},{"name":"Replace `unmountComponentAtNode` with `createRoot().unmount()`","href":"/user-documentation/recipes/recipe-catalog/react/18/replace-unmount-component-at-node/"},{"name":"Remove `ReactDOM.render` callback argument","href":"/user-documentation/recipes/recipe-catalog/react/18/replace-render-callback/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.react.migrate.upgrade-to-react-18","displayName":"Upgrade to React 18","npmPackage":"@openrewrite/recipes-react"}}>

## Usage

</UsageList>

