---
title: "Upgrade to React 16"
sidebar_label: "Upgrade to React 16"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to React 16"}
  description={"Migrate deprecated APIs for React 16 compatibility. Includes PropTypes extraction, ReactDOM split, DOM factory replacement, createFactory replacement, and error boundary API updates."}
  fqName={"org.openrewrite.react.migrate.upgrade-to-react-16"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Upgrade to React 16"}
  description={"Migrate deprecated APIs for React 16 compatibility. Includes PropTypes extraction, ReactDOM split, DOM factory replacement, createFactory replacement, and error boundary API updates."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.react.migrate.upgrade-to-react-16"}
  artifact={"io.moderne.recipe:rewrite-react"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.react.migrate.upgrade-to-react-16"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-16.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Move `React.PropTypes` to `prop-types` package","href":"react/16/react-prop-types"},{"name":"Replace `React.DOM` factories with `createElement`","href":"react/16/react-dom-factories"},{"name":"Split `React` DOM methods to `ReactDOM`","href":"react/16/react-to-react-dom"},{"name":"Replace `getDOMNode()` with `React.findDOMNode()`","href":"react/16/find-dom-node"},{"name":"Rename `unstable_handleError` to `componentDidCatch`","href":"react/16/error-boundaries"},{"name":"Replace `React.createFactory` with `React.createElement`","href":"react/16/replace-create-factory"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.react.migrate.upgrade-to-react-16","displayName":"Upgrade to React 16","npmPackage":"@openrewrite/recipes-react"}}>

## Usage

</UsageList>

