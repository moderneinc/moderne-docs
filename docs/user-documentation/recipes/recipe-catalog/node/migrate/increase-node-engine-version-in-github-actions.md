---
title: "Increase Node.js version in GitHub Actions"
sidebar_label: "Increase Node.js version in GitHub Actions"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Increase Node.js version in GitHub Actions"}
  description={"Increases `node-version` in `actions/setup-node` steps in GitHub Actions workflows. Only modifies plain major version values (e.g. `20`) and x-ranges (e.g. `20.x`). Never decreases the version."}
  fqName={"org.openrewrite.node.migrate.increase-node-engine-version-in-github-actions"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Increase Node.js version in GitHub Actions"}
  description={"Increases `node-version` in `actions/setup-node` steps in GitHub Actions workflows. Only modifies plain major version values (e.g. `20`) and x-ranges (e.g. `20.x`). Never decreases the version."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.increase-node-engine-version-in-github-actions"}
  artifact={"org.openrewrite.recipe:rewrite-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.increase-node-engine-version-in-github-actions"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/increase-node-engine-version-in-github-actions.md"}
  moderneOnly
/>

<OptionsTable options={[{"type":"String","name":"version","required":true,"description":"The Node.js major version to set, e.g. 20 or 22.","example":"22"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.increase-node-engine-version-in-github-actions","displayName":"Increase Node.js version in GitHub Actions","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

