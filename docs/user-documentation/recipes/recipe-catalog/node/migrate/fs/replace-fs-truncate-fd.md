---
title: "Replace `fs.truncate()` with file descriptor to `fs.ftruncate()`"
sidebar_label: "Replace `fs.truncate()` with file descriptor to `fs.ftruncate()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `fs.truncate()` with file descriptor to `fs.ftruncate()`"}
  description={"Replace deprecated `fs.truncate(fd, ...)` and `fs.truncateSync(fd, ...)` calls with `fs.ftruncate(fd, ...)` and `fs.ftruncateSync(fd, ...)` when the first argument is a file descriptor (number)."}
  fqName={"org.openrewrite.node.migrate.fs.replace-fs-truncate-fd"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Replace `fs.truncate()` with file descriptor to `fs.ftruncate()`"}
  description={"Replace deprecated `fs.truncate(fd, ...)` and `fs.truncateSync(fd, ...)` calls with `fs.ftruncate(fd, ...)` and `fs.ftruncateSync(fd, ...)` when the first argument is a file descriptor (number)."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["DEP0081"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.fs.replace-fs-truncate-fd"}
  artifact={"org.openrewrite.recipe:rewrite-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.fs.replace-fs-truncate-fd"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/fs/replace-fs-truncate-fd.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.fs.replace-fs-truncate-fd","displayName":"Replace `fs.truncate()` with file descriptor to `fs.ftruncate()`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

