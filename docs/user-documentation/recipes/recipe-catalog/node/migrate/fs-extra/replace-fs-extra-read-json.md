---
title: "Replace fs-extra `readJson` with `JSON.parse` of `readFile`"
sidebar_label: "Replace fs-extra `readJson` with `JSON.parse` of `readFile`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace fs-extra `readJson` with `JSON.parse` of `readFile`"}
  description={"Replaces fs-extra's `readJson`/`readJSON` and `readJsonSync`/`readJSONSync` with `JSON.parse` of `readFile` from `node:fs/promises` or `readFileSync` from `node:fs`. An awaited call becomes `JSON.parse(await readFile(file, 'utf8'))`, any other promise use `readFile(file, 'utf8').then(JSON.parse)`. An encoding passed as a string or `{encoding}` is kept. Calls passing `throws`, `reviver`, or other options, and callback-style calls, are left alone. Unlike fs-extra, `JSON.parse` does not strip a leading byte order mark."}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-read-json"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-read-json"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.fs-extra.replace-fs-extra-read-json"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-read-json.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace fs-extra `readJson` with `JSON.parse` of `readFile`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces fs-extra's `readJson`/`readJSON` and `readJsonSync`/`readJSONSync` with `JSON.parse` of `readFile` from `node:fs/promises` or `readFileSync` from `node:fs`. An awaited call becomes `JSON.parse(await readFile(file, 'utf8'))`, any other promise use `readFile(file, 'utf8').then(JSON.parse)`. An encoding passed as a string or `{encoding}` is kept. Calls passing `throws`, `reviver`, or other options, and callback-style calls, are left alone. Unlike fs-extra, `JSON.parse` does not strip a leading byte order mark.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-read-json","displayName":"Replace fs-extra `readJson` with `JSON.parse` of `readFile`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

