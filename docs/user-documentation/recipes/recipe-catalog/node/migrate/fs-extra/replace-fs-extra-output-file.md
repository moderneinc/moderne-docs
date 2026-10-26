---
title: "Replace fs-extra `outputFile` and `outputJson` with `mkdir` + `writeFile`"
sidebar_label: "Replace fs-extra `outputFile` and `outputJson` with `mkdir` + `writeFile`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace fs-extra `outputFile` and `outputJson` with `mkdir` + `writeFile`"}
  description={"Replaces fs-extra's `outputFile`, `outputJson` and their sync variants with a recursive `mkdir` of the parent directory followed by `writeFile` from `node:fs/promises` or `node:fs`. JSON is written the way jsonfile does, as `JSON.stringify(data, replacer, spaces) + '\\n'`. A path that isn't safe to evaluate twice is hoisted into a `const` first, which needs a statement to sit before, so such a call in expression position is left alone — as are callback-style calls and JSON options a native rewrite can't reproduce (non-literal options, a custom `fs`, an `EOL` other than `'\\n'`)."}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-output-file"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-output-file"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.fs-extra.replace-fs-extra-output-file"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-output-file.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace fs-extra `outputFile` and `outputJson` with `mkdir` + `writeFile`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces fs-extra's `outputFile`, `outputJson` and their sync variants with a recursive `mkdir` of the parent directory followed by `writeFile` from `node:fs/promises` or `node:fs`. JSON is written the way jsonfile does, as `JSON.stringify(data, replacer, spaces) + '\n'`. A path that isn't safe to evaluate twice is hoisted into a `const` first, which needs a statement to sit before, so such a call in expression position is left alone — as are callback-style calls and JSON options a native rewrite can't reproduce (non-literal options, a custom `fs`, an `EOL` other than `'\n'`).</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.fs-extra.replace-fs-extra-output-file","displayName":"Replace fs-extra `outputFile` and `outputJson` with `mkdir` + `writeFile`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

