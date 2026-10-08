---
title: "Swap the `hpagent` dependency for `https-proxy-agent`"
sidebar_label: "Swap the `hpagent` dependency for `https-proxy-agent`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Swap the `hpagent` dependency for `https-proxy-agent`"}
  description={"Replaces `hpagent` with `https-proxy-agent` in each `package.json` that declares it, in whichever dependency section declares it, and updates the lock file to match."}
  fqName={"org.openrewrite.node.migrate.hpagent.swap-hpagent-dependency"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["https-proxy-agent","hpagent"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.hpagent.swap-hpagent-dependency"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.hpagent.swap-hpagent-dependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/hpagent/swap-hpagent-dependency.md"}
  moderneOnly
>

<RecipeHeader.Title>Swap the `hpagent` dependency for `https-proxy-agent`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces `hpagent` with `https-proxy-agent` in each `package.json` that declares it, in whichever dependency section declares it, and updates the lock file to match.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"org.openrewrite.javascript.ChangeDependency","href":"/user-documentation/recipes/recipe-catalog/javascript/changedependency/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"version","required":false,"description":"The version range to declare for `https-proxy-agent`. The default keeps hpagent's Node 14 floor; `https-proxy-agent` 9 and later require Node 20.","example":"^7.0.6"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.hpagent.swap-hpagent-dependency","displayName":"Swap the `hpagent` dependency for `https-proxy-agent`","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

