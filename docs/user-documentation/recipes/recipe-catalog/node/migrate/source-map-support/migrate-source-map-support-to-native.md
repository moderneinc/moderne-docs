---
title: "Migrate `source-map-support` to Node.js native source maps"
sidebar_label: "Migrate `source-map-support` to Node.js native source maps"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `source-map-support` to Node.js native source maps"}
  description={"Replaces the `source-map-support` package with Node.js's built-in source map support. Where Node is launched from `package.json` scripts or mocha/ava configuration, `source-map-support/register` becomes the `--enable-source-maps` flag; in code, `install()` and `register` imports become `process.setSourceMapsEnabled(true)` where that maps everything the module loads. Where it would not — in an ES module every `import` is evaluated before any statement runs — the flag goes on the launcher instead, in the package's `bin` shebang or a `node` script, and the entry point is removed as redundant. Uses with no native equivalent (custom `retrieveSourceMap`, browser bundles, webpack banners) are left in place, and the dependency is removed from each `package.json` that declares it, with the lock file updated to match. Everything left in place is recorded in the `SourceMapSupportManualMigrationSteps` data table with a suggested replacement, and has to be migrated before building, since the dependency is removed regardless."}
  fqName={"org.openrewrite.node.migrate.source-map-support.migrate-source-map-support-to-native"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["source-map-support"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.source-map-support.migrate-source-map-support-to-native"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.source-map-support.migrate-source-map-support-to-native"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/source-map-support/migrate-source-map-support-to-native.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `source-map-support` to Node.js native source maps</RecipeHeader.Title>

<RecipeHeader.Description>Replaces the `source-map-support` package with Node.js's built-in source map support. Where Node is launched from `package.json` scripts or mocha/ava configuration, `source-map-support/register` becomes the `--enable-source-maps` flag; in code, `install()` and `register` imports become `process.setSourceMapsEnabled(true)` where that maps everything the module loads. Where it would not — in an ES module every `import` is evaluated before any statement runs — the flag goes on the launcher instead, in the package's `bin` shebang or a `node` script, and the entry point is removed as redundant. Uses with no native equivalent (custom `retrieveSourceMap`, browser bundles, webpack banners) are left in place, and the dependency is removed from each `package.json` that declares it, with the lock file updated to match. Everything left in place is recorded in the `SourceMapSupportManualMigrationSteps` data table with a suggested replacement, and has to be migrated before building, since the dependency is removed regardless.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Replace `source-map-support/register` with `--enable-source-maps` in `package.json`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/source-map-support/replace-source-map-support-register-in-package-json/"},{"name":"Replace `source-map-support/register` with `enable-source-maps` in mocha config","href":"/user-documentation/recipes/recipe-catalog/node/migrate/source-map-support/replace-source-map-support-register-in-mocha-config/"},{"name":"Replace `source-map-support` with `process.setSourceMapsEnabled()`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/source-map-support/replace-source-map-support-install/"},{"name":"Enable native source maps at launch and drop `source-map-support`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/source-map-support/enable-source-maps-at-launch/"},{"name":"Find source-map-support usages that need manual migration","href":"/user-documentation/recipes/recipe-catalog/node/migrate/source-map-support/find-source-map-support-manual-migrations/"},{"name":"Remove the `source-map-support` dependency","href":"/user-documentation/recipes/recipe-catalog/node/migrate/source-map-support/remove-unused-source-map-support-dependency/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.source-map-support.migrate-source-map-support-to-native","displayName":"Migrate `source-map-support` to Node.js native source maps","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

