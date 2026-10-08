---
title: "Replace fs-extra `writeJson` with `fs.writeFile`"
sidebar_label: "Replace fs-extra `writeJson` with `fs.writeFile`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace fs-extra `writeJson` with `fs.writeFile`"}
  description={"Replaces fs-extra's `writeJson`/`writeJSON` and their sync forms with `writeFile`/`writeFileSync` from `node:fs/promises` and `node:fs`, serializing with `JSON.stringify(obj, replacer, spaces) + '\\n'` exactly as fs-extra does. Calls with a callback, non-literal options, or a non-default `EOL` are left in place."}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-write-json"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-write-json"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.fs-extra.replace-fs-extra-write-json"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-write-json.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace fs-extra `writeJson` with `fs.writeFile`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces fs-extra's `writeJson`/`writeJSON` and their sync forms with `writeFile`/`writeFileSync` from `node:fs/promises` and `node:fs`, serializing with `JSON.stringify(obj, replacer, spaces) + '\n'` exactly as fs-extra does. Calls with a callback, non-literal options, or a non-default `EOL` are left in place.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-write-json","displayName":"Replace fs-extra `writeJson` with `fs.writeFile`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

