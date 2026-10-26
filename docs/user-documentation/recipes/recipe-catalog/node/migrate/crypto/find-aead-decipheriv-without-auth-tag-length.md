---
title: "Find `crypto.createDecipheriv()` for AEAD ciphers without `authTagLength`"
sidebar_label: "Find `crypto.createDecipheriv()` for AEAD ciphers without `authTagLength`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `crypto.createDecipheriv()` for AEAD ciphers without `authTagLength`"}
  description={"Accepting shorter-than-default authentication tags for AEAD ciphers (`aes-*-gcm`, `aes-*-ccm`, `aes-*-ocb`, `chacha20-poly1305`) in `crypto.createDecipheriv()` is end-of-life in Node.js 26 (DEP0182). Pass an explicit `authTagLength` in the options so the tag length is validated at decipher construction instead of at `setAuthTag()` time."}
  fqName={"org.openrewrite.node.migrate.crypto.find-aead-decipheriv-without-auth-tag-length"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["DEP0182"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.crypto.find-aead-decipheriv-without-auth-tag-length"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.crypto.find-aead-decipheriv-without-auth-tag-length"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/crypto/find-aead-decipheriv-without-auth-tag-length.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `crypto.createDecipheriv()` for AEAD ciphers without `authTagLength`</RecipeHeader.Title>

<RecipeHeader.Description>Accepting shorter-than-default authentication tags for AEAD ciphers (`aes-*-gcm`, `aes-*-ccm`, `aes-*-ocb`, `chacha20-poly1305`) in `crypto.createDecipheriv()` is end-of-life in Node.js 26 (DEP0182). Pass an explicit `authTagLength` in the options so the tag length is validated at decipher construction instead of at `setAuthTag()` time.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.crypto.find-aead-decipheriv-without-auth-tag-length","displayName":"Find `crypto.createDecipheriv()` for AEAD ciphers without `authTagLength`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

