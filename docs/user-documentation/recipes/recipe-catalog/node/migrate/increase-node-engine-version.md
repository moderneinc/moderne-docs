---
title: "Increase Node.js engine version"
sidebar_label: "Increase Node.js engine version"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Increase Node.js engine version"}
  description={"Increases the upper bound of the `engines.node` version range in package.json to allow the specified Node.js version."}
  fqName={"org.openrewrite.node.migrate.increase-node-engine-version"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Increase Node.js engine version"}
  description={"Increases the upper bound of the `engines.node` version range in package.json to allow the specified Node.js version."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.increase-node-engine-version"}
  artifact={"org.openrewrite.recipe:rewrite-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.increase-node-engine-version"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/increase-node-engine-version.md"}
  moderneOnly
/>

<OptionsTable options={[{"type":"String","name":"version","required":true,"description":"The Node.js major version to allow, e.g. 20 or 22.","example":"22"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.increase-node-engine-version","displayName":"Increase Node.js engine version","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

