---
title: "Replace deprecated `SlowBuffer` with `Buffer.allocUnsafeSlow()`"
sidebar_label: "Replace deprecated `SlowBuffer` with `Buffer.allocUnsafeSlow()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace deprecated `SlowBuffer` with `Buffer.allocUnsafeSlow()`"}
  description={"Replace deprecated `new SlowBuffer(size)` calls with `Buffer.allocUnsafeSlow(size)`. SlowBuffer was used to create un-pooled Buffer instances, but has been removed in favor of the explicit Buffer.allocUnsafeSlow() method."}
  fqName={"org.openrewrite.node.migrate.buffer.replace-slow-buffer"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["DEP0030"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.buffer.replace-slow-buffer"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.buffer.replace-slow-buffer"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/buffer/replace-slow-buffer.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace deprecated `SlowBuffer` with `Buffer.allocUnsafeSlow()`</RecipeHeader.Title>

<RecipeHeader.Description>Replace deprecated `new SlowBuffer(size)` calls with `Buffer.allocUnsafeSlow(size)`. SlowBuffer was used to create un-pooled Buffer instances, but has been removed in favor of the explicit Buffer.allocUnsafeSlow() method.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.buffer.replace-slow-buffer","displayName":"Replace deprecated `SlowBuffer` with `Buffer.allocUnsafeSlow()`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

