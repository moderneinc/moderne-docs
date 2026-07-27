---
title: "Replace `cgi.parse_qs()` with `urllib.parse.parse_qs()`"
sidebar_label: "Replace `cgi.parse_qs()` with `urllib.parse.parse_qs()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `cgi.parse_qs()` with `urllib.parse.parse_qs()`"}
  description={"`cgi.parse_qs()` was removed in Python 3.8. Use `urllib.parse.parse_qs()` instead. Note: this rewrites call sites but does not manage imports. Use with `ChangeImport` in a composite recipe to update `from` imports."}
  fqName={"org.openrewrite.python.migrate.ReplaceCgiParseQs"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","cgi","migration","3.8"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceCgiParseQs"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceCgiParseQs"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacecgiparseqs.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `cgi.parse_qs()` with `urllib.parse.parse_qs()`</RecipeHeader.Title>

<RecipeHeader.Description>`cgi.parse_qs()` was removed in Python 3.8. Use `urllib.parse.parse_qs()` instead. Note: this rewrites call sites but does not manage imports. Use with `ChangeImport` in a composite recipe to update `from` imports.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceCgiParseQs","displayName":"Replace `cgi.parse_qs()` with `urllib.parse.parse_qs()`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

