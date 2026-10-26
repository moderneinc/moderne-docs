---
title: "Replace `source-map-support/register` with `enable-source-maps` in mocha config"
sidebar_label: "Replace `source-map-support/register` with `enable-source-maps` in mocha config"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `source-map-support/register` with `enable-source-maps` in mocha config"}
  description={"Replaces `source-map-support/register` in the `require` list of `.mocharc.js`/`.mocharc.cjs` with `'enable-source-maps': true`, which mocha forwards to Node as `--enable-source-maps`, and `--require source-map-support/register` in `mocha.opts` with `--enable-source-maps`."}
  fqName={"org.openrewrite.node.migrate.source-map-support.replace-source-map-support-register-in-mocha-config"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["source-map-support"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.source-map-support.replace-source-map-support-register-in-mocha-config"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.source-map-support.replace-source-map-support-register-in-mocha-config"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/source-map-support/replace-source-map-support-register-in-mocha-config.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `source-map-support/register` with `enable-source-maps` in mocha config</RecipeHeader.Title>

<RecipeHeader.Description>Replaces `source-map-support/register` in the `require` list of `.mocharc.js`/`.mocharc.cjs` with `'enable-source-maps': true`, which mocha forwards to Node as `--enable-source-maps`, and `--require source-map-support/register` in `mocha.opts` with `--enable-source-maps`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.source-map-support.replace-source-map-support-register-in-mocha-config","displayName":"Replace `source-map-support/register` with `enable-source-maps` in mocha config","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

