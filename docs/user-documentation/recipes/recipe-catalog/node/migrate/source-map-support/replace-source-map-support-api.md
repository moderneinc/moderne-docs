---
title: "Replace source-map-support's API with functions written into the file"
sidebar_label: "Replace source-map-support's API with functions written into the file"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace source-map-support's API with functions written into the file"}
  description={"Writes the part of source-map-support that Node has no equivalent for into each file that uses it, built on Node's own source map decoder (`node:module`'s `SourceMap`): `install()` with a custom `retrieveSourceMap` or `retrieveFile`, or with options that can't be read statically, becomes `installSourceMapSupport()`, and `wrapCallSite`, `getErrorSource`, `mapSourcePosition`, `retrieveSourceMap` and `resetRetrieveHandlers` become functions of the same name, along with the types they take from `@types/source-map-support`. Only the functions a file calls, and what they depend on, are written, after its other statements. An `install()` configured for a browser is removed: browsers map stack traces in their developer tools, and Node's source maps don't run there."}
  fqName={"org.openrewrite.node.migrate.source-map-support.replace-source-map-support-api"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["source-map-support"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.source-map-support.replace-source-map-support-api"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.source-map-support.replace-source-map-support-api"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/source-map-support/replace-source-map-support-api.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace source-map-support's API with functions written into the file</RecipeHeader.Title>

<RecipeHeader.Description>Writes the part of source-map-support that Node has no equivalent for into each file that uses it, built on Node's own source map decoder (`node:module`'s `SourceMap`): `install()` with a custom `retrieveSourceMap` or `retrieveFile`, or with options that can't be read statically, becomes `installSourceMapSupport()`, and `wrapCallSite`, `getErrorSource`, `mapSourcePosition`, `retrieveSourceMap` and `resetRetrieveHandlers` become functions of the same name, along with the types they take from `@types/source-map-support`. Only the functions a file calls, and what they depend on, are written, after its other statements. An `install()` configured for a browser is removed: browsers map stack traces in their developer tools, and Node's source maps don't run there.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.source-map-support.replace-source-map-support-api","displayName":"Replace source-map-support's API with functions written into the file","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

