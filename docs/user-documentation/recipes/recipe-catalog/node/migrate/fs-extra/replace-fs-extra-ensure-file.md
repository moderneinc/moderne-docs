---
title: "Replace fs-extra `ensureFile` with `fs.mkdir` and `fs.writeFile`"
sidebar_label: "Replace fs-extra `ensureFile` with `fs.mkdir` and `fs.writeFile`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace fs-extra `ensureFile` with `fs.mkdir` and `fs.writeFile`"}
  description={"Replaces fs-extra's `ensureFile`/`createFile` (and their `Sync` variants) with `mkdir(dirname(file), { recursive: true })` followed by `writeFile(file, '', { flag: 'a' })`, which creates the file without truncating an existing one. A call standing alone as a statement becomes two statements; other promise-form calls chain the two with `.then`. A path that isn't safe to evaluate twice is hoisted into a `const` first, which needs a statement to sit before, so such a call in expression position is left alone, as are callback-form calls and sync calls used as expressions."}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-ensure-file"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-ensure-file"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.fs-extra.replace-fs-extra-ensure-file"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-ensure-file.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace fs-extra `ensureFile` with `fs.mkdir` and `fs.writeFile`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces fs-extra's `ensureFile`/`createFile` (and their `Sync` variants) with `mkdir(dirname(file), { recursive: true })` followed by `writeFile(file, '', { flag: 'a' })`, which creates the file without truncating an existing one. A call standing alone as a statement becomes two statements; other promise-form calls chain the two with `.then`. A path that isn't safe to evaluate twice is hoisted into a `const` first, which needs a statement to sit before, so such a call in expression position is left alone, as are callback-form calls and sync calls used as expressions.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-ensure-file","displayName":"Replace fs-extra `ensureFile` with `fs.mkdir` and `fs.writeFile`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

