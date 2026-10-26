---
title: "Enable native source maps at launch and drop `source-map-support`"
sidebar_label: "Enable native source maps at launch and drop `source-map-support`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Enable native source maps at launch and drop `source-map-support`"}
  description={"Where `source-map-support` is installed too late for `process.setSourceMapsEnabled(true)` to stand in for it — in an ES module, every `import` is evaluated before any statement runs, so the call would only map what loads after it — this puts `--enable-source-maps` on whatever launches the process instead, which Node applies before the first module loads. The flag goes into the package's `bin` shebang (as `#!/usr/bin/env -S node --enable-source-maps`) and into any `package.json` script that runs `node` or `mocha` directly. The `install()` call and `register` import are then redundant and are removed, rather than replaced by a call that would map less. A package with no launcher this recipe can reach is left alone and reported by `FindSourceMapSupportManualMigrations`."}
  fqName={"org.openrewrite.node.migrate.source-map-support.enable-source-maps-at-launch"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["source-map-support"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.source-map-support.enable-source-maps-at-launch"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.source-map-support.enable-source-maps-at-launch"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/source-map-support/enable-source-maps-at-launch.md"}
  moderneOnly
>

<RecipeHeader.Title>Enable native source maps at launch and drop `source-map-support`</RecipeHeader.Title>

<RecipeHeader.Description>Where `source-map-support` is installed too late for `process.setSourceMapsEnabled(true)` to stand in for it — in an ES module, every `import` is evaluated before any statement runs, so the call would only map what loads after it — this puts `--enable-source-maps` on whatever launches the process instead, which Node applies before the first module loads. The flag goes into the package's `bin` shebang (as `#!/usr/bin/env -S node --enable-source-maps`) and into any `package.json` script that runs `node` or `mocha` directly. The `install()` call and `register` import are then redundant and are removed, rather than replaced by a call that would map less. A package with no launcher this recipe can reach is left alone and reported by `FindSourceMapSupportManualMigrations`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.source-map-support.enable-source-maps-at-launch","displayName":"Enable native source maps at launch and drop `source-map-support`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

