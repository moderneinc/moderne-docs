---
title: "Replace deprecated `Buffer()` constructor with `Buffer.alloc()` and `Buffer.from()`"
sidebar_label: "Replace deprecated `Buffer()` constructor with `Buffer.alloc()` and `Buffer.from()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace deprecated `Buffer()` constructor with `Buffer.alloc()` and `Buffer.from()`"}
  description={"Replace deprecated `new Buffer(...)` and `Buffer(...)` calls with `Buffer.alloc(size)` for a numeric size and `Buffer.from(...)` for strings, arrays, buffers and array buffers. Calls are left unchanged when the argument's type doesn't show which one applies, such as an untyped value, `any`, or `string | number`."}
  fqName={"org.openrewrite.node.migrate.buffer.replace-deprecated-constructor"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["DEP0005"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.buffer.replace-deprecated-constructor"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.buffer.replace-deprecated-constructor"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/buffer/replace-deprecated-constructor.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace deprecated `Buffer()` constructor with `Buffer.alloc()` and `Buffer.from()`</RecipeHeader.Title>

<RecipeHeader.Description>Replace deprecated `new Buffer(...)` and `Buffer(...)` calls with `Buffer.alloc(size)` for a numeric size and `Buffer.from(...)` for strings, arrays, buffers and array buffers. Calls are left unchanged when the argument's type doesn't show which one applies, such as an untyped value, `any`, or `string | number`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.buffer.replace-deprecated-constructor","displayName":"Replace deprecated `Buffer()` constructor with `Buffer.alloc()` and `Buffer.from()`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

