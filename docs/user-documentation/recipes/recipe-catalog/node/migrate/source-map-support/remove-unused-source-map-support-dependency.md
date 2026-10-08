---
title: "Remove the `source-map-support` dependency"
sidebar_label: "Remove the `source-map-support` dependency"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove the `source-map-support` dependency"}
  description={"Removes `source-map-support` and `@types/source-map-support` from each `package.json` that declares them, and updates the lock file to match."}
  fqName={"org.openrewrite.node.migrate.source-map-support.remove-unused-source-map-support-dependency"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["source-map-support"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.source-map-support.remove-unused-source-map-support-dependency"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.source-map-support.remove-unused-source-map-support-dependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/source-map-support/remove-unused-source-map-support-dependency.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove the `source-map-support` dependency</RecipeHeader.Title>

<RecipeHeader.Description>Removes `source-map-support` and `@types/source-map-support` from each `package.json` that declares them, and updates the lock file to match.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"org.openrewrite.javascript.RemoveDependency","href":"/user-documentation/recipes/recipe-catalog/javascript/removedependency/"},{"name":"org.openrewrite.javascript.RemoveDependency","href":"/user-documentation/recipes/recipe-catalog/javascript/removedependency/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.source-map-support.remove-unused-source-map-support-dependency","displayName":"Remove the `source-map-support` dependency","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

