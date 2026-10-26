---
title: "Replace fs-extra `emptyDir` with `mkdir` and `rm` of each entry"
sidebar_label: "Replace fs-extra `emptyDir` with `mkdir` and `rm` of each entry"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace fs-extra `emptyDir` with `mkdir` and `rm` of each entry"}
  description={"Replaces fs-extra's `emptyDir`/`emptyDirSync` with a recursive `mkdir` of the directory followed by an `rm` of each entry `readdir` returns. Emptying the directory rather than replacing it is what fs-extra does, and it keeps the directory's own inode and permissions, which removing and recreating it would not. `mkdir` runs first so a missing directory is created, as `emptyDir` does when `readdir` fails. A path that isn't safe to evaluate twice is hoisted into a `const` first; since both need a statement to sit in, a call in expression position is left alone, as are callback-form calls."}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-empty-dir"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-empty-dir"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.fs-extra.replace-fs-extra-empty-dir"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-empty-dir.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace fs-extra `emptyDir` with `mkdir` and `rm` of each entry</RecipeHeader.Title>

<RecipeHeader.Description>Replaces fs-extra's `emptyDir`/`emptyDirSync` with a recursive `mkdir` of the directory followed by an `rm` of each entry `readdir` returns. Emptying the directory rather than replacing it is what fs-extra does, and it keeps the directory's own inode and permissions, which removing and recreating it would not. `mkdir` runs first so a missing directory is created, as `emptyDir` does when `readdir` fails. A path that isn't safe to evaluate twice is hoisted into a `const` first; since both need a statement to sit in, a call in expression position is left alone, as are callback-form calls.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-empty-dir","displayName":"Replace fs-extra `emptyDir` with `mkdir` and `rm` of each entry","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

