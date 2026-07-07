---
title: "Replace deprecated `new crypto.Hash()` and `new crypto.Hmac()` with factory methods"
sidebar_label: "Replace deprecated `new crypto.Hash()` and `new crypto.Hmac()` with factory methods"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace deprecated `new crypto.Hash()` and `new crypto.Hmac()` with factory methods"}
  description={"Replace deprecated `new crypto.Hash(algorithm)` constructor calls with `crypto.createHash(algorithm)` and `new crypto.Hmac(algorithm, key)` with `crypto.createHmac(algorithm, key)` factory methods."}
  fqName={"org.openrewrite.node.migrate.crypto.replace-hash-constructor"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["DEP0179","DEP0181"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.crypto.replace-hash-constructor"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.crypto.replace-hash-constructor"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/crypto/replace-hash-constructor.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace deprecated `new crypto.Hash()` and `new crypto.Hmac()` with factory methods</RecipeHeader.Title>

<RecipeHeader.Description>Replace deprecated `new crypto.Hash(algorithm)` constructor calls with `crypto.createHash(algorithm)` and `new crypto.Hmac(algorithm, key)` with `crypto.createHmac(algorithm, key)` factory methods.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.crypto.replace-hash-constructor","displayName":"Replace deprecated `new crypto.Hash()` and `new crypto.Hmac()` with factory methods","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

