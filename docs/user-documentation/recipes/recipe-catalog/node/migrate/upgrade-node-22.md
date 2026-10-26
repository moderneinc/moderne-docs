---
title: "Upgrade to Node.js 22"
sidebar_label: "Upgrade to Node.js 22"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to Node.js 22"}
  description={"Migrate deprecated APIs for Node.js 22 compatibility. Includes all migrations from Node.js 20, plus Node 21 and Node 22 deprecations."}
  fqName={"org.openrewrite.node.migrate.upgrade-node-22"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.upgrade-node-22"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.upgrade-node-22"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-22.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade to Node.js 22</RecipeHeader.Title>

<RecipeHeader.Description>Migrate deprecated APIs for Node.js 22 compatibility. Includes all migrations from Node.js 20, plus Node 21 and Node 22 deprecations.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Increase Node.js engine version","href":"/user-documentation/recipes/recipe-catalog/node/migrate/increase-node-engine-version/"},{"name":"Increase Node.js version in GitHub Actions","href":"/user-documentation/recipes/recipe-catalog/node/migrate/increase-node-engine-version-in-github-actions/"},{"name":"org.openrewrite.nodejs.migrate.UpgradeNodeVersion","href":"/user-documentation/recipes/recipe-catalog/nodejs/migrate/upgradenodeversion/"},{"name":"Upgrade to Node.js 20","href":"/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-20/"},{"name":"Replace deprecated `util.types.isWebAssemblyCompiledModule()`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/util/replace-is-webassembly-compiled-module/"},{"name":"Find deprecated `punycode` module usage","href":"/user-documentation/recipes/recipe-catalog/node/migrate/find-punycode-usage/"},{"name":"Find deprecated `crypto.createCipher()` and `crypto.createDecipher()` usage","href":"/user-documentation/recipes/recipe-catalog/node/migrate/crypto/find-create-cipher/"},{"name":"Replace deprecated `util.isX()` methods with native JavaScript","href":"/user-documentation/recipes/recipe-catalog/node/migrate/util/use-native-type-checking-methods/"},{"name":"Replace deprecated `util._extend()` with `Object.assign()`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/util/replace-util-extend/"},{"name":"Replace deprecated `new crypto.Hash()` and `new crypto.Hmac()` with factory methods","href":"/user-documentation/recipes/recipe-catalog/node/migrate/crypto/replace-hash-constructor/"},{"name":"Replace deprecated `Buffer.slice()` with `Buffer.subarray()`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/buffer/replace-deprecated-slice/"},{"name":"Remove usage of deprecated `process.features.tls_*` properties","href":"/user-documentation/recipes/recipe-catalog/node/migrate/process/remove-usage-of-features-tls-underscore_constants/"},{"name":"Remove unnecessary `util.promisify()` on Promise-returning functions","href":"/user-documentation/recipes/recipe-catalog/node/migrate/util/remove-promisify-on-promise/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.upgrade-node-22","displayName":"Upgrade to Node.js 22","npmPackage":"@openrewrite/recipes-nodejs","companionJars":[{"groupId":"org.openrewrite.recipe","artifactId":"rewrite-nodejs","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_NODEJS"}]}}>

## Usage

</UsageList>

