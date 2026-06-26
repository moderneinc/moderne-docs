---
title: "Find deprecated `timers.active()` and `timers._unrefActive()` usage"
sidebar_label: "Find deprecated `timers.active()` and `timers._unrefActive()` usage"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find deprecated `timers.active()` and `timers._unrefActive()` usage"}
  description={"`timers.active()` (DEP0126) and `timers._unrefActive()` (DEP0127) were deprecated and removed in Node.js 24. Use `timeout.refresh()` instead."}
  fqName={"org.openrewrite.node.migrate.timers.find-timers-active"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find deprecated `timers.active()` and `timers._unrefActive()` usage"}
  description={"`timers.active()` (DEP0126) and `timers._unrefActive()` (DEP0127) were deprecated and removed in Node.js 24. Use `timeout.refresh()` instead."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["DEP0126","DEP0127"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.timers.find-timers-active"}
  artifact={"org.openrewrite.recipe:rewrite-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.timers.find-timers-active"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/timers/find-timers-active.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.timers.find-timers-active","displayName":"Find deprecated `timers.active()` and `timers._unrefActive()` usage","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

