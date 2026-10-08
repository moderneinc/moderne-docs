---
title: "Replace `cgi.parse_qs()` with `urllib.parse.parse_qs()`"
sidebar_label: "Replace `cgi.parse_qs()` with `urllib.parse.parse_qs()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `cgi.parse_qs()` with `urllib.parse.parse_qs()`"}
  description={"`cgi.parse_qs()` was removed in Python 3.8. Use `urllib.parse.parse_qs()` instead."}
  fqName={"org.openrewrite.python.migrate.ReplaceCgiParseQs"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
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

<RecipeHeader.Description>`cgi.parse_qs()` was removed in Python 3.8. Use `urllib.parse.parse_qs()` instead.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change import","href":"/user-documentation/recipes/recipe-catalog/python/changeimport/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceCgiParseQs","displayName":"Replace `cgi.parse_qs()` with `urllib.parse.parse_qs()`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

