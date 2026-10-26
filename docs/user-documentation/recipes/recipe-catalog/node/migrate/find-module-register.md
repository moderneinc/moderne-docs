---
title: "Find `module.register()` usage"
sidebar_label: "Find `module.register()` usage"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `module.register()` usage"}
  description={"`module.register()` for loading ESM loader hooks is runtime-deprecated in Node.js 26 (DEP0205). Use the `--import` CLI flag with a loader module instead."}
  fqName={"org.openrewrite.node.migrate.find-module-register"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["DEP0205"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.find-module-register"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.find-module-register"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/find-module-register.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `module.register()` usage</RecipeHeader.Title>

<RecipeHeader.Description>`module.register()` for loading ESM loader hooks is runtime-deprecated in Node.js 26 (DEP0205). Use the `--import` CLI flag with a loader module instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.find-module-register","displayName":"Find `module.register()` usage","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

