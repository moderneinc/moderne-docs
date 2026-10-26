---
title: "Replace `ServerResponse.writeHeader()` with `writeHead()`"
sidebar_label: "Replace `ServerResponse.writeHeader()` with `writeHead()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `ServerResponse.writeHeader()` with `writeHead()`"}
  description={"`ServerResponse.prototype.writeHeader()` was an undocumented alias for `writeHead()` that was deprecated in Node.js 11 (DEP0063) and removed in Node.js 26. The signatures are identical."}
  fqName={"org.openrewrite.node.migrate.http.replace-server-response-write-header"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["DEP0063"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.http.replace-server-response-write-header"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.http.replace-server-response-write-header"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/http/replace-server-response-write-header.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `ServerResponse.writeHeader()` with `writeHead()`</RecipeHeader.Title>

<RecipeHeader.Description>`ServerResponse.prototype.writeHeader()` was an undocumented alias for `writeHead()` that was deprecated in Node.js 11 (DEP0063) and removed in Node.js 26. The signatures are identical.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.http.replace-server-response-write-header","displayName":"Replace `ServerResponse.writeHeader()` with `writeHead()`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

