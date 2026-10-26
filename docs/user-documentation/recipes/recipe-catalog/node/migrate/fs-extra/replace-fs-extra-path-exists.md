---
title: "Replace fs-extra `pathExists` with `fs.access`/`fs.existsSync`"
sidebar_label: "Replace fs-extra `pathExists` with `fs.access`/`fs.existsSync`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace fs-extra `pathExists` with `fs.access`/`fs.existsSync`"}
  description={"Replaces fs-extra's `pathExistsSync(path)` with `existsSync(path)` from `node:fs`, which is what fs-extra exports under that name, and the promise form of `pathExists(path)` with `access(path).then(() => true, () => false)` from `node:fs/promises`, matching fs-extra's implementation. The callback form is left in place."}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-path-exists"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-path-exists"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.fs-extra.replace-fs-extra-path-exists"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-path-exists.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace fs-extra `pathExists` with `fs.access`/`fs.existsSync`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces fs-extra's `pathExistsSync(path)` with `existsSync(path)` from `node:fs`, which is what fs-extra exports under that name, and the promise form of `pathExists(path)` with `access(path).then(() => true, () => false)` from `node:fs/promises`, matching fs-extra's implementation. The callback form is left in place.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-path-exists","displayName":"Replace fs-extra `pathExists` with `fs.access`/`fs.existsSync`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

