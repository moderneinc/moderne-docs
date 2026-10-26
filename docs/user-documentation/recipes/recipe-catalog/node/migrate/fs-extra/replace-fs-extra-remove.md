---
title: "Replace fs-extra `remove` with `fs.rm`"
sidebar_label: "Replace fs-extra `remove` with `fs.rm`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace fs-extra `remove` with `fs.rm`"}
  description={"Replaces fs-extra's `remove(path)` and `removeSync(path)` with `rm`/`rmSync` from `node:fs/promises` and `node:fs`, passing `{ recursive: true, force: true }` as fs-extra does internally. The callback form maps to the callback `rm` from `node:fs`."}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-remove"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-remove"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.fs-extra.replace-fs-extra-remove"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-remove.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace fs-extra `remove` with `fs.rm`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces fs-extra's `remove(path)` and `removeSync(path)` with `rm`/`rmSync` from `node:fs/promises` and `node:fs`, passing `{ recursive: true, force: true }` as fs-extra does internally. The callback form maps to the callback `rm` from `node:fs`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-remove","displayName":"Replace fs-extra `remove` with `fs.rm`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

