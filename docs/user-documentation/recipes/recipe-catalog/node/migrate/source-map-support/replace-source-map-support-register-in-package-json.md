---
title: "Replace `source-map-support/register` with `--enable-source-maps` in `package.json`"
sidebar_label: "Replace `source-map-support/register` with `--enable-source-maps` in `package.json`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `source-map-support/register` with `--enable-source-maps` in `package.json`"}
  description={"Replaces `-r source-map-support/register` with Node's `--enable-source-maps` flag in `package.json` scripts that run `node` or `mocha`, including through `nyc`, `c8` or `cross-env`. Mocha's `require` list (in `package.json` or `.mocharc.json`) gets `\"enable-source-maps\": true`, which mocha forwards to Node, and ava's `require` list `nodeArguments: [\"--enable-source-maps\"]`. Jest `setupFiles` entries are dropped, since Jest maps stack traces itself. Scripts running other tools are left alone."}
  fqName={"org.openrewrite.node.migrate.source-map-support.replace-source-map-support-register-in-package-json"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["source-map-support"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.source-map-support.replace-source-map-support-register-in-package-json"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.source-map-support.replace-source-map-support-register-in-package-json"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/source-map-support/replace-source-map-support-register-in-package-json.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `source-map-support/register` with `--enable-source-maps` in `package.json`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces `-r source-map-support/register` with Node's `--enable-source-maps` flag in `package.json` scripts that run `node` or `mocha`, including through `nyc`, `c8` or `cross-env`. Mocha's `require` list (in `package.json` or `.mocharc.json`) gets `"enable-source-maps": true`, which mocha forwards to Node, and ava's `require` list `nodeArguments: ["--enable-source-maps"]`. Jest `setupFiles` entries are dropped, since Jest maps stack traces itself. Scripts running other tools are left alone.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.source-map-support.replace-source-map-support-register-in-package-json","displayName":"Replace `source-map-support/register` with `--enable-source-maps` in `package.json`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

