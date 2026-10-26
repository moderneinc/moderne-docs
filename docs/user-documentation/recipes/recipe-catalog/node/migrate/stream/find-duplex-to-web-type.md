---
title: "Find `Duplex.toWeb()` calls passing `options.type`"
sidebar_label: "Find `Duplex.toWeb()` calls passing `options.type`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `Duplex.toWeb()` calls passing `options.type`"}
  description={"Passing `options.type` to `stream.Duplex.toWeb()` is runtime-deprecated in Node.js 26 (DEP0201). The `type` field controls the readable-side ReadableStream chunk type; drop it from the options and set the type on the resulting `ReadableStream` instead."}
  fqName={"org.openrewrite.node.migrate.stream.find-duplex-to-web-type"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["DEP0201"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.stream.find-duplex-to-web-type"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.stream.find-duplex-to-web-type"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/stream/find-duplex-to-web-type.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `Duplex.toWeb()` calls passing `options.type`</RecipeHeader.Title>

<RecipeHeader.Description>Passing `options.type` to `stream.Duplex.toWeb()` is runtime-deprecated in Node.js 26 (DEP0201). The `type` field controls the readable-side ReadableStream chunk type; drop it from the options and set the type on the resulting `ReadableStream` instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.stream.find-duplex-to-web-type","displayName":"Find `Duplex.toWeb()` calls passing `options.type`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

