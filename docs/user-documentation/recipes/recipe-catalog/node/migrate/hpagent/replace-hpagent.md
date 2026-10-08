---
title: "Replace `hpagent` with `https-proxy-agent`"
sidebar_label: "Replace `hpagent` with `https-proxy-agent`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `hpagent` with `https-proxy-agent`"}
  description={"Replaces `hpagent`'s `HttpProxyAgent` and `HttpsProxyAgent` with `https-proxy-agent`'s `HttpsProxyAgent`, whose constructor takes the proxy URL as its first argument rather than as a `proxy` option: `new HttpsProxyAgent({proxy: url, keepAlive: true})` becomes `new HttpsProxyAgent(url, {keepAlive: true})`. Both hpagent classes tunnel with `CONNECT`, and `https-proxy-agent` upgrades the tunnel to TLS only for an `https:` target, so one class serves both. `proxyRequestOptions` members move up into the options object, where `https-proxy-agent` applies them to the connection to the proxy. hpagent accepted a missing proxy until a request needed it, but `https-proxy-agent` reads it in the constructor, so in JavaScript a proxy that may be missing, such as `process.env.HTTP_PROXY`, guards the construction: `proxy ? new HttpsProxyAgent(proxy) : undefined`. Calls whose options aren't an object literal, or that set a TLS option for the destination handshake (`ca`, `rejectUnauthorized`, `cert`, ...), are left alone: `https-proxy-agent` would apply those to the proxy hop instead. `FindHpagentManualMigrations` reports every usage left behind."}
  fqName={"org.openrewrite.node.migrate.hpagent.replace-hpagent"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["https-proxy-agent","hpagent"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.hpagent.replace-hpagent"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.hpagent.replace-hpagent"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/hpagent/replace-hpagent.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `hpagent` with `https-proxy-agent`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces `hpagent`'s `HttpProxyAgent` and `HttpsProxyAgent` with `https-proxy-agent`'s `HttpsProxyAgent`, whose constructor takes the proxy URL as its first argument rather than as a `proxy` option: `new HttpsProxyAgent({proxy: url, keepAlive: true})` becomes `new HttpsProxyAgent(url, {keepAlive: true})`. Both hpagent classes tunnel with `CONNECT`, and `https-proxy-agent` upgrades the tunnel to TLS only for an `https:` target, so one class serves both. `proxyRequestOptions` members move up into the options object, where `https-proxy-agent` applies them to the connection to the proxy. hpagent accepted a missing proxy until a request needed it, but `https-proxy-agent` reads it in the constructor, so in JavaScript a proxy that may be missing, such as `process.env.HTTP_PROXY`, guards the construction: `proxy ? new HttpsProxyAgent(proxy) : undefined`. Calls whose options aren't an object literal, or that set a TLS option for the destination handshake (`ca`, `rejectUnauthorized`, `cert`, ...), are left alone: `https-proxy-agent` would apply those to the proxy hop instead. `FindHpagentManualMigrations` reports every usage left behind.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"migrateSpreadOptions","required":false,"description":"Also migrate options that spread another object, as in `{...shared, proxy: url}`, passing the spread through to the new options object. Left off by default: the spread may itself carry a `proxyRequestOptions`, which has to be flattened, or a TLS option for the destination handshake, which `https-proxy-agent` would apply to the proxy connection instead. Enable it once the spread objects in the codebase are known to hold plain agent options. A spread that resolves to a literal of plain agent options in the same file is migrated either way, since there it can be checked rather than assumed."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.hpagent.replace-hpagent","displayName":"Replace `hpagent` with `https-proxy-agent`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

