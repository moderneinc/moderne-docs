---
title: "Replace `express-request-id` with an inline middleware"
sidebar_label: "Replace `express-request-id` with an inline middleware"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `express-request-id` with an inline middleware"}
  description={"Replaces the `express-request-id` middleware factory with an equivalent inline middleware that reuses an incoming `X-Request-Id` header or generates an id with `randomUUID()` from `node:crypto` (Node.js 14.17+), stores it on the request and echoes it in the response header. The `setHeader`, `headerName`, `attributeName` and `generator` options carry over; calls with other options, or options that aren't literals, are left alone. `attributeName` is honored as in 1.x; versions 2 and 3 ignore it and always set `req.id`. In TypeScript the id is set with `Object.assign` so no `Request` augmentation is needed, and a middleware stored in a variable is typed as Express's `RequestHandler`."}
  fqName={"org.openrewrite.node.migrate.express-request-id.replace-express-request-id"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["express-request-id"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.express-request-id.replace-express-request-id"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.express-request-id.replace-express-request-id"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/express-request-id/replace-express-request-id.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `express-request-id` with an inline middleware</RecipeHeader.Title>

<RecipeHeader.Description>Replaces the `express-request-id` middleware factory with an equivalent inline middleware that reuses an incoming `X-Request-Id` header or generates an id with `randomUUID()` from `node:crypto` (Node.js 14.17+), stores it on the request and echoes it in the response header. The `setHeader`, `headerName`, `attributeName` and `generator` options carry over; calls with other options, or options that aren't literals, are left alone. `attributeName` is honored as in 1.x; versions 2 and 3 ignore it and always set `req.id`. In TypeScript the id is set with `Object.assign` so no `Request` augmentation is needed, and a middleware stored in a variable is typed as Express's `RequestHandler`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.express-request-id.replace-express-request-id","displayName":"Replace `express-request-id` with an inline middleware","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

