---
title: "Replace `Thread.setDaemon()` with `Thread.daemon = ...`"
sidebar_label: "Replace `Thread.setDaemon()` with `Thread.daemon = ...`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `Thread.setDaemon()` with `Thread.daemon = ...`"}
  description={"Replace `setDaemon()` method calls with `daemon` property assignment. Deprecated in Python 3.10, removed in 3.12."}
  fqName={"org.openrewrite.python.migrate.ReplaceThreadSetDaemon"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","threading","3.12","3.10"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceThreadSetDaemon"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceThreadSetDaemon"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacethreadsetdaemon.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `Thread.setDaemon()` with `Thread.daemon = ...`</RecipeHeader.Title>

<RecipeHeader.Description>Replace `setDaemon()` method calls with `daemon` property assignment. Deprecated in Python 3.10, removed in 3.12.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceThreadSetDaemon","displayName":"Replace `Thread.setDaemon()` with `Thread.daemon = ...`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

