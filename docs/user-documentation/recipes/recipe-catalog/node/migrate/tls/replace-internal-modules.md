---
title: "Replace deprecated `node:_tls_common` and `node:_tls_wrap` with `node:tls`"
sidebar_label: "Replace deprecated `node:_tls_common` and `node:_tls_wrap` with `node:tls`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace deprecated `node:_tls_common` and `node:_tls_wrap` with `node:tls`"}
  description={"Replace deprecated internal TLS module imports `require('node:_tls_common')` and `require('node:_tls_wrap')` with the public `node:tls` module."}
  fqName={"org.openrewrite.node.migrate.tls.replace-internal-modules"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["DEP0192"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.tls.replace-internal-modules"}
  artifact={"org.openrewrite.recipe:rewrite-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.tls.replace-internal-modules"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/tls/replace-internal-modules.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace deprecated `node:_tls_common` and `node:_tls_wrap` with `node:tls`</RecipeHeader.Title>

<RecipeHeader.Description>Replace deprecated internal TLS module imports `require('node:_tls_common')` and `require('node:_tls_wrap')` with the public `node:tls` module.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.tls.replace-internal-modules","displayName":"Replace deprecated `node:_tls_common` and `node:_tls_wrap` with `node:tls`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

