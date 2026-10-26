---
title: "Replace fs-extra `copy` with `fs.cp`"
sidebar_label: "Replace fs-extra `copy` with `fs.cp`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace fs-extra `copy` with `fs.cp`"}
  description={"Replaces fs-extra's `copy(src, dest[, options])` and `copySync` with `cp`/`cpSync` from `node:fs/promises` and `node:fs`, adding `recursive: true` and mapping `overwrite`/`clobber` to `force`; `errorOnExist`, `dereference`, `preserveTimestamps` and `filter` carry over unchanged. The callback form maps to the callback `cp` from `node:fs`. Calls whose options aren't an object literal of known options are left alone. Note that `fs.cp` is experimental before Node.js 22.3 (it emits an `ExperimentalWarning` on 16.7–22.2), and that copying a file onto an existing directory copies it into that directory where fs-extra throws."}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-copy"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-copy"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.fs-extra.replace-fs-extra-copy"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-copy.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace fs-extra `copy` with `fs.cp`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces fs-extra's `copy(src, dest[, options])` and `copySync` with `cp`/`cpSync` from `node:fs/promises` and `node:fs`, adding `recursive: true` and mapping `overwrite`/`clobber` to `force`; `errorOnExist`, `dereference`, `preserveTimestamps` and `filter` carry over unchanged. The callback form maps to the callback `cp` from `node:fs`. Calls whose options aren't an object literal of known options are left alone. Note that `fs.cp` is experimental before Node.js 22.3 (it emits an `ExperimentalWarning` on 16.7–22.2), and that copying a file onto an existing directory copies it into that directory where fs-extra throws.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-copy","displayName":"Replace fs-extra `copy` with `fs.cp`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

