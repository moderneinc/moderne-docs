---
title: "Remove the `fs-extra` dependency"
sidebar_label: "Remove the `fs-extra` dependency"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove the `fs-extra` dependency"}
  description={"Removes `fs-extra` and `@types/fs-extra` from each `package.json` that declares them, and updates the lock file to match."}
  fqName={"org.openrewrite.node.migrate.fs-extra.remove-unused-fs-extra-dependency"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["fs-extra"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.fs-extra.remove-unused-fs-extra-dependency"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.fs-extra.remove-unused-fs-extra-dependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/remove-unused-fs-extra-dependency.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove the `fs-extra` dependency</RecipeHeader.Title>

<RecipeHeader.Description>Removes `fs-extra` and `@types/fs-extra` from each `package.json` that declares them, and updates the lock file to match.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"org.openrewrite.javascript.RemoveDependency","href":"/user-documentation/recipes/recipe-catalog/javascript/removedependency/"},{"name":"org.openrewrite.javascript.RemoveDependency","href":"/user-documentation/recipes/recipe-catalog/javascript/removedependency/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.fs-extra.remove-unused-fs-extra-dependency","displayName":"Remove the `fs-extra` dependency","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

