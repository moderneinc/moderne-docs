---
title: "Coerce `process.exit()` and `process.exitCode` to integer"
sidebar_label: "Coerce `process.exit()` and `process.exitCode` to integer"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Coerce `process.exit()` and `process.exitCode` to integer"}
  description={"Wraps non-integer values passed to `process.exit()` or assigned to `process.exitCode` with `Math.trunc()` to avoid the DEP0164 deprecation warning about implicit coercion to integer."}
  fqName={"org.openrewrite.node.migrate.process.coerce-process-exit-code"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["DEP0164"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.process.coerce-process-exit-code"}
  artifact={"org.openrewrite.recipe:rewrite-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.process.coerce-process-exit-code"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/process/coerce-process-exit-code.md"}
  moderneOnly
>

<RecipeHeader.Title>Coerce `process.exit()` and `process.exitCode` to integer</RecipeHeader.Title>

<RecipeHeader.Description>Wraps non-integer values passed to `process.exit()` or assigned to `process.exitCode` with `Math.trunc()` to avoid the DEP0164 deprecation warning about implicit coercion to integer.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.process.coerce-process-exit-code","displayName":"Coerce `process.exit()` and `process.exitCode` to integer","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

