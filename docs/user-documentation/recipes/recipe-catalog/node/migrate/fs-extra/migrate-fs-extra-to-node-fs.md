---
title: "Migrate `fs-extra` to Node.js `fs`"
sidebar_label: "Migrate `fs-extra` to Node.js `fs`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `fs-extra` to Node.js `fs`"}
  description={"Replaces `fs-extra` with the Node.js standard library (`node:fs`, `node:fs/promises`, `node:path`). fs-extra's own methods (`remove`, `ensureDir`, `pathExists`, `readJson`, `writeJson`, `outputFile`, `outputJson`, `ensureFile`, `copy`, `emptyDir`) are rewritten to their native equivalents and the `fs` methods fs-extra re-exports are bound from `node:fs` or `node:fs/promises` directly. `move` becomes a call to a helper written into the same file, since `rename` alone doesn't create the destination's parent, refuse an existing destination, or work across devices. Calls without a faithful native equivalent (`ensureSymlink`, `ensureLink`, ...) are left in place and listed in the `FsExtraManualMigrationSteps` data table. `fs-extra` and `@types/fs-extra` are removed from each `package.json` that declares them, with the lock file updated to match. They are removed even where a call listed in the data table still uses fs-extra, so migrate those before building. Tests that mock or spy on fs-extra itself (`vi.mock('fs-extra')`, `vi.spyOn(fs, 'outputFile')`, ...) keep watching a module the migrated code no longer calls, so they fail until they mock `node:fs` / `node:fs/promises` instead. Every such site is listed in the data table; migrate them together with the code they cover."}
  fqName={"org.openrewrite.node.migrate.fs-extra.migrate-fs-extra-to-node-fs"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["fs-extra"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.fs-extra.migrate-fs-extra-to-node-fs"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.fs-extra.migrate-fs-extra-to-node-fs"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/migrate-fs-extra-to-node-fs.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `fs-extra` to Node.js `fs`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces `fs-extra` with the Node.js standard library (`node:fs`, `node:fs/promises`, `node:path`). fs-extra's own methods (`remove`, `ensureDir`, `pathExists`, `readJson`, `writeJson`, `outputFile`, `outputJson`, `ensureFile`, `copy`, `emptyDir`) are rewritten to their native equivalents and the `fs` methods fs-extra re-exports are bound from `node:fs` or `node:fs/promises` directly. `move` becomes a call to a helper written into the same file, since `rename` alone doesn't create the destination's parent, refuse an existing destination, or work across devices. Calls without a faithful native equivalent (`ensureSymlink`, `ensureLink`, ...) are left in place and listed in the `FsExtraManualMigrationSteps` data table. `fs-extra` and `@types/fs-extra` are removed from each `package.json` that declares them, with the lock file updated to match. They are removed even where a call listed in the data table still uses fs-extra, so migrate those before building. Tests that mock or spy on fs-extra itself (`vi.mock('fs-extra')`, `vi.spyOn(fs, 'outputFile')`, ...) keep watching a module the migrated code no longer calls, so they fail until they mock `node:fs` / `node:fs/promises` instead. Every such site is listed in the data table; migrate them together with the code they cover.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Replace fs-extra `remove` with `fs.rm`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-remove/"},{"name":"Replace fs-extra `ensureDir`/`mkdirp`/`mkdirs` with `fs.mkdir`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-mkdirs/"},{"name":"Replace fs-extra `pathExists` with `fs.access`/`fs.existsSync`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-path-exists/"},{"name":"Replace fs-extra `readJson` with `JSON.parse` of `readFile`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-read-json/"},{"name":"Replace fs-extra `writeJson` with `fs.writeFile`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-write-json/"},{"name":"Replace fs-extra `outputFile` and `outputJson` with `mkdir` + `writeFile`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-output-file/"},{"name":"Replace fs-extra `ensureFile` with `fs.mkdir` and `fs.writeFile`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-ensure-file/"},{"name":"Replace fs-extra `emptyDir` with `mkdir` and `rm` of each entry","href":"/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-empty-dir/"},{"name":"Replace fs-extra `move` with a generated helper","href":"/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-move/"},{"name":"Replace fs-extra `copy` with `fs.cp`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-copy/"},{"name":"Replace fs-extra's re-exported `fs` methods with `node:fs`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/replace-fs-extra-native-methods/"},{"name":"Find fs-extra usages that need manual migration","href":"/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/find-fs-extra-manual-migrations/"},{"name":"Remove the `fs-extra` dependency","href":"/user-documentation/recipes/recipe-catalog/node/migrate/fs-extra/remove-unused-fs-extra-dependency/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.fs-extra.migrate-fs-extra-to-node-fs","displayName":"Migrate `fs-extra` to Node.js `fs`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

