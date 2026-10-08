---
title: "Replace fs-extra `ensureDir`/`mkdirp`/`mkdirs` with `fs.mkdir`"
sidebar_label: "Replace fs-extra `ensureDir`/`mkdirp`/`mkdirs` with `fs.mkdir`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace fs-extra `ensureDir`/`mkdirp`/`mkdirs` with `fs.mkdir`"}
  description={"Replaces fs-extra's `ensureDir`, `mkdirp`, and `mkdirs` (and their `Sync` variants) with `mkdir`/`mkdirSync` from `node:fs/promises` and `node:fs`, passing `{ recursive: true }` as fs-extra does internally. A numeric mode or an options object's `mode` carries over; the callback form maps to the callback `mkdir` from `node:fs`. Options that can't be read statically are left alone."}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-mkdirs"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-mkdirs"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.fs-extra.replace-fs-extra-mkdirs"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-mkdirs.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace fs-extra `ensureDir`/`mkdirp`/`mkdirs` with `fs.mkdir`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces fs-extra's `ensureDir`, `mkdirp`, and `mkdirs` (and their `Sync` variants) with `mkdir`/`mkdirSync` from `node:fs/promises` and `node:fs`, passing `{ recursive: true }` as fs-extra does internally. A numeric mode or an options object's `mode` carries over; the callback form maps to the callback `mkdir` from `node:fs`. Options that can't be read statically are left alone.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-mkdirs","displayName":"Replace fs-extra `ensureDir`/`mkdirp`/`mkdirs` with `fs.mkdir`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

