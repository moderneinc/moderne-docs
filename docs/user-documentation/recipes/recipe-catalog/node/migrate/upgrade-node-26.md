---
title: "Upgrade to Node.js 26"
sidebar_label: "Upgrade to Node.js 26"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to Node.js 26"}
  description={"Migrate deprecated APIs for Node.js 26 compatibility. Includes all migrations from Node.js 24, plus Node 25 and Node 26 deprecations."}
  fqName={"org.openrewrite.node.migrate.upgrade-node-26"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.upgrade-node-26"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.upgrade-node-26"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-26.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade to Node.js 26</RecipeHeader.Title>

<RecipeHeader.Description>Migrate deprecated APIs for Node.js 26 compatibility. Includes all migrations from Node.js 24, plus Node 25 and Node 26 deprecations.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Increase Node.js engine version","href":"/user-documentation/recipes/recipe-catalog/node/migrate/increase-node-engine-version/"},{"name":"Increase Node.js version in GitHub Actions","href":"/user-documentation/recipes/recipe-catalog/node/migrate/increase-node-engine-version-in-github-actions/"},{"name":"org.openrewrite.nodejs.migrate.UpgradeNodeVersion","href":"/user-documentation/recipes/recipe-catalog/nodejs/migrate/upgradenodeversion/"},{"name":"Upgrade to Node.js 24","href":"/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-24/"},{"name":"Replace `ServerResponse.writeHeader()` with `writeHead()`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/http/replace-server-response-write-header/"},{"name":"Replace deprecated `node:_stream_*` with `node:stream`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/stream/replace-internal-modules/"},{"name":"Find `crypto.createDecipheriv()` for AEAD ciphers without `authTagLength`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/crypto/find-aead-decipheriv-without-auth-tag-length/"},{"name":"Find `Duplex.toWeb()` calls passing `options.type`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/stream/find-duplex-to-web-type/"},{"name":"Find `module.register()` usage","href":"/user-documentation/recipes/recipe-catalog/node/migrate/find-module-register/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.upgrade-node-26","displayName":"Upgrade to Node.js 26","npmPackage":"@openrewrite/recipes-nodejs","companionJars":[{"groupId":"org.openrewrite.recipe","artifactId":"rewrite-nodejs","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_NODEJS"}]}}>

## Usage

</UsageList>

