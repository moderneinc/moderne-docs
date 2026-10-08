---
title: "Remove the `express-request-id` dependency"
sidebar_label: "Remove the `express-request-id` dependency"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove the `express-request-id` dependency"}
  description={"Removes `express-request-id` and `@types/express-request-id` from each `package.json` that declares them, and updates the lock file to match. `uuid` is kept, since the application may use it directly."}
  fqName={"org.openrewrite.node.migrate.express-request-id.remove-unused-express-request-id-dependency"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["express-request-id"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.express-request-id.remove-unused-express-request-id-dependency"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.express-request-id.remove-unused-express-request-id-dependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/express-request-id/remove-unused-express-request-id-dependency.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove the `express-request-id` dependency</RecipeHeader.Title>

<RecipeHeader.Description>Removes `express-request-id` and `@types/express-request-id` from each `package.json` that declares them, and updates the lock file to match. `uuid` is kept, since the application may use it directly.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"org.openrewrite.javascript.RemoveDependency","href":"/user-documentation/recipes/recipe-catalog/javascript/removedependency/"},{"name":"org.openrewrite.javascript.RemoveDependency","href":"/user-documentation/recipes/recipe-catalog/javascript/removedependency/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.express-request-id.remove-unused-express-request-id-dependency","displayName":"Remove the `express-request-id` dependency","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

