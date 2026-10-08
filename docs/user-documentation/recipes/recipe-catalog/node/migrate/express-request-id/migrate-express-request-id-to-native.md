---
title: "Migrate `express-request-id` to an inline middleware"
sidebar_label: "Migrate `express-request-id` to an inline middleware"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `express-request-id` to an inline middleware"}
  description={"Replaces the `express-request-id` middleware with an equivalent inline middleware built on `randomUUID()` from `node:crypto`, then removes the dependency from each `package.json` that declares it, updating the lock file to match."}
  fqName={"org.openrewrite.node.migrate.express-request-id.migrate-express-request-id-to-native"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["express-request-id"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.express-request-id.migrate-express-request-id-to-native"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.express-request-id.migrate-express-request-id-to-native"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/express-request-id/migrate-express-request-id-to-native.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `express-request-id` to an inline middleware</RecipeHeader.Title>

<RecipeHeader.Description>Replaces the `express-request-id` middleware with an equivalent inline middleware built on `randomUUID()` from `node:crypto`, then removes the dependency from each `package.json` that declares it, updating the lock file to match.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Replace `express-request-id` with an inline middleware","href":"/user-documentation/recipes/recipe-catalog/node/migrate/express-request-id/replace-express-request-id/"},{"name":"Remove the `express-request-id` dependency","href":"/user-documentation/recipes/recipe-catalog/node/migrate/express-request-id/remove-unused-express-request-id-dependency/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.express-request-id.migrate-express-request-id-to-native","displayName":"Migrate `express-request-id` to an inline middleware","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

