---
title: "Replace `source-map-support` with `process.setSourceMapsEnabled()`"
sidebar_label: "Replace `source-map-support` with `process.setSourceMapsEnabled()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `source-map-support` with `process.setSourceMapsEnabled()`"}
  description={"Replaces `require('source-map-support').install()`, `import 'source-map-support/register'` and their variants with Node's native `process.setSourceMapsEnabled(true)` (Node.js 16.6+). Calls passing options Node has no equivalent for (`retrieveSourceMap`, `retrieveFile`, `environment: 'browser'`, ...) are left alone. Native source maps only apply to modules loaded after they are enabled, where `source-map-support` maps every stack frame, so by default a call is only replaced where no other module is loaded before it: no other runtime import in the file, and no earlier `require`. Elsewhere, launch Node with `--enable-source-maps`, which `ReplaceSourceMapSupportRegisterInPackageJson` sets in `package.json` scripts."}
  fqName={"org.openrewrite.node.migrate.source-map-support.replace-source-map-support-install"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["source-map-support"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.source-map-support.replace-source-map-support-install"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.source-map-support.replace-source-map-support-install"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/source-map-support/replace-source-map-support-install.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `source-map-support` with `process.setSourceMapsEnabled()`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces `require('source-map-support').install()`, `import 'source-map-support/register'` and their variants with Node's native `process.setSourceMapsEnabled(true)` (Node.js 16.6+). Calls passing options Node has no equivalent for (`retrieveSourceMap`, `retrieveFile`, `environment: 'browser'`, ...) are left alone. Native source maps only apply to modules loaded after they are enabled, where `source-map-support` maps every stack frame, so by default a call is only replaced where no other module is loaded before it: no other runtime import in the file, and no earlier `require`. Elsewhere, launch Node with `--enable-source-maps`, which `ReplaceSourceMapSupportRegisterInPackageJson` sets in `package.json` scripts.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"allowPartialMapping","required":false,"description":"Also replace calls made after other modules are loaded, such as in an ES module with static imports. Stack frames in the modules loaded first are then no longer source-mapped."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.source-map-support.replace-source-map-support-install","displayName":"Replace `source-map-support` with `process.setSourceMapsEnabled()`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

