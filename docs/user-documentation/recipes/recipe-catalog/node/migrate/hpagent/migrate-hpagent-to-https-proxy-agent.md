---
title: "Migrate `hpagent` to `https-proxy-agent`"
sidebar_label: "Migrate `hpagent` to `https-proxy-agent`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `hpagent` to `https-proxy-agent`"}
  description={"Replaces the unmaintained `hpagent` package with `https-proxy-agent`. Both of hpagent's agent classes tunnel through the proxy with `CONNECT`, which is what `https-proxy-agent` does, upgrading the tunnel to TLS only for an `https:` target — so `HttpProxyAgent` and `HttpsProxyAgent` both become `https-proxy-agent`'s `HttpsProxyAgent`. The proxy URL moves from the `proxy` option to the constructor's first argument, `proxyRequestOptions` members move up into the options object, and the dependency is swapped in each `package.json` that declares it, with the lock file updated to match.\n\nTwo things do not carry over, and both are reported in the `HpagentManualMigrationSteps` data table rather than rewritten. A TLS option set at the top level of hpagent's `HttpsProxyAgent` (`ca`, `rejectUnauthorized`, `cert`, ...) configured the handshake with the **destination**, because that class extends `https.Agent`; `https-proxy-agent` spends its constructor options on the connection to the **proxy** and takes the destination's TLS options from each request, so such an option has to move to the request or the client library. Agent options that aren't written as an object literal can't be split into the new two-argument form either. The dependency is swapped regardless, so migrate every reported site before building."}
  fqName={"org.openrewrite.node.migrate.hpagent.migrate-hpagent-to-https-proxy-agent"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["https-proxy-agent","hpagent"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.hpagent.migrate-hpagent-to-https-proxy-agent"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.hpagent.migrate-hpagent-to-https-proxy-agent"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/hpagent/migrate-hpagent-to-https-proxy-agent.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `hpagent` to `https-proxy-agent`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces the unmaintained `hpagent` package with `https-proxy-agent`. Both of hpagent's agent classes tunnel through the proxy with `CONNECT`, which is what `https-proxy-agent` does, upgrading the tunnel to TLS only for an `https:` target — so `HttpProxyAgent` and `HttpsProxyAgent` both become `https-proxy-agent`'s `HttpsProxyAgent`. The proxy URL moves from the `proxy` option to the constructor's first argument, `proxyRequestOptions` members move up into the options object, and the dependency is swapped in each `package.json` that declares it, with the lock file updated to match.  Two things do not carry over, and both are reported in the `HpagentManualMigrationSteps` data table rather than rewritten. A TLS option set at the top level of hpagent's `HttpsProxyAgent` (`ca`, `rejectUnauthorized`, `cert`, ...) configured the handshake with the **destination**, because that class extends `https.Agent`; `https-proxy-agent` spends its constructor options on the connection to the **proxy** and takes the destination's TLS options from each request, so such an option has to move to the request or the client library. Agent options that aren't written as an object literal can't be split into the new two-argument form either. The dependency is swapped regardless, so migrate every reported site before building.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Replace `hpagent` with `https-proxy-agent`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/hpagent/replace-hpagent/"},{"name":"Find hpagent usages that need manual migration","href":"/user-documentation/recipes/recipe-catalog/node/migrate/hpagent/find-hpagent-manual-migrations/"},{"name":"Swap the `hpagent` dependency for `https-proxy-agent`","href":"/user-documentation/recipes/recipe-catalog/node/migrate/hpagent/swap-hpagent-dependency/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"version","required":false,"description":"The version range to declare for `https-proxy-agent`. The default keeps hpagent's Node 14 floor; `https-proxy-agent` 9 and later require Node 20.","example":"^7.0.6"},{"type":"String","name":"migrateSpreadOptions","required":false,"description":"Also migrate options that spread another object, as in `{...shared, proxy: url}`. Off by default, since the spread may carry a `proxyRequestOptions` or a destination TLS option that has to move rather than be passed through."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.hpagent.migrate-hpagent-to-https-proxy-agent","displayName":"Migrate `hpagent` to `https-proxy-agent`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

