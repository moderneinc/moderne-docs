---
title: "Replace deprecated `fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK` with `fs.constants.*`"
sidebar_label: "Replace deprecated `fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK` with `fs.constants.*`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace deprecated `fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK` with `fs.constants.*`"}
  description={"Replace deprecated file access constants (`fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK`) with their equivalents from `fs.constants`. These constants were removed in Node.js v24+ and should be accessed through the constants namespace."}
  fqName={"org.openrewrite.node.migrate.fs.replace-fs-access-constants"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Replace deprecated `fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK` with `fs.constants.*`"}
  description={"Replace deprecated file access constants (`fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK`) with their equivalents from `fs.constants`. These constants were removed in Node.js v24+ and should be accessed through the constants namespace."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["DEP0176"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.fs.replace-fs-access-constants"}
  artifact={"org.openrewrite.recipe:rewrite-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.fs.replace-fs-access-constants"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/fs/replace-fs-access-constants.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.fs.replace-fs-access-constants","displayName":"Replace deprecated `fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK` with `fs.constants.*`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

