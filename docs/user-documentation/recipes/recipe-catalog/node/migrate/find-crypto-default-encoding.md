---
title: "Find deprecated `crypto.DEFAULT_ENCODING` usage"
sidebar_label: "Find deprecated `crypto.DEFAULT_ENCODING` usage"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find deprecated `crypto.DEFAULT_ENCODING` usage"}
  description={"The `crypto.DEFAULT_ENCODING` property was deprecated in Node.js 10 (DEP0091) and removed in Node.js 20. Each API that accepted an encoding (hash, hmac, cipher, etc.) now requires the encoding to be passed explicitly. Occurrences must be reviewed and fixed by hand."}
  fqName={"org.openrewrite.node.migrate.find-crypto-default-encoding"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["DEP0091"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.find-crypto-default-encoding"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.find-crypto-default-encoding"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/find-crypto-default-encoding.md"}
  moderneOnly
>

<RecipeHeader.Title>Find deprecated `crypto.DEFAULT_ENCODING` usage</RecipeHeader.Title>

<RecipeHeader.Description>The `crypto.DEFAULT_ENCODING` property was deprecated in Node.js 10 (DEP0091) and removed in Node.js 20. Each API that accepted an encoding (hash, hmac, cipher, etc.) now requires the encoding to be passed explicitly. Occurrences must be reviewed and fixed by hand.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.find-crypto-default-encoding","displayName":"Find deprecated `crypto.DEFAULT_ENCODING` usage","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

