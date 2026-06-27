---
title: "Upgrade to Node.js 24"
sidebar_label: "Upgrade to Node.js 24"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to Node.js 24"}
  description={"Migrate deprecated APIs for Node.js 24 compatibility. Includes all migrations from Node.js 22, plus Node 23 and Node 24 deprecations."}
  fqName={"org.openrewrite.node.migrate.upgrade-node-24"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.upgrade-node-24"}
  artifact={"org.openrewrite.recipe:rewrite-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.upgrade-node-24"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-24.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade to Node.js 24</RecipeHeader.Title>

<RecipeHeader.Description>Migrate deprecated APIs for Node.js 24 compatibility. Includes all migrations from Node.js 22, plus Node 23 and Node 24 deprecations.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Increase Node.js engine version","href":"/user-documentation/recipes/recipe-catalog/node/migrate/increase-node-engine-version/"},{"name":"Increase Node.js version in GitHub Actions","href":"/user-documentation/recipes/recipe-catalog/node/migrate/increase-node-engine-version-in-github-actions/"},{"name":"Upgrade to Node.js 22","href":"/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-22/"},{"name":"Replace deprecated `util.log()` with `console.log()`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/util/replace-util-log/"},{"name":"Replace deprecated `zlib.bytesRead` with `zlib.bytesWritten`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/zlib/replace-bytes-read/"},{"name":"Find deprecated `process.assert()` usage","href":"/user-documentation/recipes/recipe-catalog/node/migrate/find-process-assert/"},{"name":"Replace `OutgoingMessage._headers` and `._headerNames` with public methods","href":"/user-documentation/recipes/recipe-catalog/node/migrate/http/replace-outgoing-message-headers/"},{"name":"Replace `fs.truncate()` with file descriptor to `fs.ftruncate()`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/fs/replace-fs-truncate-fd/"},{"name":"Replace `dirent.path` with `dirent.parentPath`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/fs/replace-dirent-path/"},{"name":"Find deprecated `tls.SecurePair` and `tls.createSecurePair()` usage","href":"/user-documentation/recipes/recipe-catalog/node/migrate/tls/find-tls-secure-pair/"},{"name":"Find deprecated `timers.active()` and `timers._unrefActive()` usage","href":"/user-documentation/recipes/recipe-catalog/node/migrate/timers/find-timers-active/"},{"name":"Replace deprecated `crypto.fips` with `crypto.getFips()` and `crypto.setFips()`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/crypto/replace-crypto-fips/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.upgrade-node-24","displayName":"Upgrade to Node.js 24","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

