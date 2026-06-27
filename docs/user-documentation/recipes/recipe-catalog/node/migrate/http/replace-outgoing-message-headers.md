---
title: "Replace `OutgoingMessage._headers` and `._headerNames` with public methods"
sidebar_label: "Replace `OutgoingMessage._headers` and `._headerNames` with public methods"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `OutgoingMessage._headers` and `._headerNames` with public methods"}
  description={"Replace deprecated `OutgoingMessage.prototype._headers` with `getHeaders()`, `setHeader()`, `removeHeader()` and `OutgoingMessage.prototype._headerNames` with `getHeaderNames()` to address DEP0066 deprecation."}
  fqName={"org.openrewrite.node.migrate.http.replace-outgoing-message-headers"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["DEP0066"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.http.replace-outgoing-message-headers"}
  artifact={"org.openrewrite.recipe:rewrite-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.http.replace-outgoing-message-headers"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/http/replace-outgoing-message-headers.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `OutgoingMessage._headers` and `._headerNames` with public methods</RecipeHeader.Title>

<RecipeHeader.Description>Replace deprecated `OutgoingMessage.prototype._headers` with `getHeaders()`, `setHeader()`, `removeHeader()` and `OutgoingMessage.prototype._headerNames` with `getHeaderNames()` to address DEP0066 deprecation.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.http.replace-outgoing-message-headers","displayName":"Replace `OutgoingMessage._headers` and `._headerNames` with public methods","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

