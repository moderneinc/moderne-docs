---
title: "Find deprecated `tempfile.mktemp()` usage"
sidebar_label: "Find deprecated `tempfile.mktemp()` usage"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find deprecated `tempfile.mktemp()` usage"}
  description={"Find usage of `tempfile.mktemp()` which is deprecated due to security concerns (race condition). Use `mkstemp()` or `NamedTemporaryFile()` instead."}
  fqName={"org.openrewrite.python.migrate.FindTempfileMktemp"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","security","migration","tempfile","3.14"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindTempfileMktemp"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindTempfileMktemp"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findtempfilemktemp.md"}
  moderneOnly
>

<RecipeHeader.Title>Find deprecated `tempfile.mktemp()` usage</RecipeHeader.Title>

<RecipeHeader.Description>Find usage of `tempfile.mktemp()` which is deprecated due to security concerns (race condition). Use `mkstemp()` or `NamedTemporaryFile()` instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindTempfileMktemp","displayName":"Find deprecated `tempfile.mktemp()` usage","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

