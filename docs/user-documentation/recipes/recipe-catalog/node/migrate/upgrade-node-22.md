---
title: "Upgrade to Node.js 22"
sidebar_label: "Upgrade to Node.js 22"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to Node.js 22"}
  description={"Migrate deprecated APIs for Node.js 22 compatibility. Addresses Node 22 runtime deprecations and deprecations from earlier versions."}
  fqName={"org.openrewrite.node.migrate.upgrade-node-22"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Upgrade to Node.js 22"}
  description={"Migrate deprecated APIs for Node.js 22 compatibility. Addresses Node 22 runtime deprecations and deprecations from earlier versions."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.upgrade-node-22"}
  artifact={"org.openrewrite.recipe:rewrite-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.upgrade-node-22"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-22.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Increase Node.js engine version","href":"node/migrate/increase-node-engine-version"},{"name":"Increase Node.js version in GitHub Actions","href":"node/migrate/increase-node-engine-version-in-github-actions"},{"name":"Replace deprecated `util.types.isWebAssemblyCompiledModule()`","href":"node/migrate/util/replace-is-webassembly-compiled-module"},{"name":"Find deprecated `punycode` module usage","href":"node/migrate/find-punycode-usage"},{"name":"Find deprecated `crypto.createCipher()` and `crypto.createDecipher()` usage","href":"node/migrate/crypto/find-create-cipher"},{"name":"Replace deprecated `util.isX()` methods with native JavaScript","href":"node/migrate/util/use-native-type-checking-methods"},{"name":"Replace deprecated `util._extend()` with `Object.assign()`","href":"node/migrate/util/replace-util-extend"},{"name":"Replace deprecated `new crypto.Hash()` and `new crypto.Hmac()` with factory methods","href":"node/migrate/crypto/replace-hash-constructor"},{"name":"Coerce `process.exit()` and `process.exitCode` to integer","href":"node/migrate/process/coerce-process-exit-code"},{"name":"Replace deprecated `Buffer.slice()` with `Buffer.subarray()`","href":"node/migrate/buffer/replace-deprecated-slice"},{"name":"Remove usage of deprecated `process.features.tls_*` properties","href":"node/migrate/process/remove-usage-of-features-tls-underscore_constants"},{"name":"Remove unnecessary `util.promisify()` on Promise-returning functions","href":"node/migrate/util/remove-promisify-on-promise"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.upgrade-node-22","displayName":"Upgrade to Node.js 22","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

