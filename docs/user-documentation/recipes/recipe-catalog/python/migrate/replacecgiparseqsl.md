---
title: "Replace `cgi.parse_qsl()` with `urllib.parse.parse_qsl()`"
sidebar_label: "Replace `cgi.parse_qsl()` with `urllib.parse.parse_qsl()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `cgi.parse_qsl()` with `urllib.parse.parse_qsl()`"}
  description={"`cgi.parse_qsl()` was removed in Python 3.8. Use `urllib.parse.parse_qsl()` instead. Note: this rewrites call sites but does not manage imports. Use with `ChangeImport` in a composite recipe to update `from` imports."}
  fqName={"org.openrewrite.python.migrate.ReplaceCgiParseQsl"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","cgi","migration","3.8"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceCgiParseQsl"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceCgiParseQsl"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacecgiparseqsl.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `cgi.parse_qsl()` with `urllib.parse.parse_qsl()`</RecipeHeader.Title>

<RecipeHeader.Description>`cgi.parse_qsl()` was removed in Python 3.8. Use `urllib.parse.parse_qsl()` instead. Note: this rewrites call sites but does not manage imports. Use with `ChangeImport` in a composite recipe to update `from` imports.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceCgiParseQsl","displayName":"Replace `cgi.parse_qsl()` with `urllib.parse.parse_qsl()`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

