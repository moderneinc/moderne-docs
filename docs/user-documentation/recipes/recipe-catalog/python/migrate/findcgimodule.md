---
title: "Find deprecated `cgi` module usage"
sidebar_label: "Find deprecated `cgi` module usage"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find deprecated `cgi` module usage"}
  description={"The `cgi` module was deprecated in Python 3.11 and removed in Python 3.13. Use `urllib.parse` for query string parsing, `html.escape()` for escaping, and web frameworks or `email.message` for form handling."}
  fqName={"org.openrewrite.python.migrate.FindCgiModule"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","3.13","PEP 594"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindCgiModule"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindCgiModule"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findcgimodule.md"}
  moderneOnly
>

<RecipeHeader.Title>Find deprecated `cgi` module usage</RecipeHeader.Title>

<RecipeHeader.Description>The `cgi` module was deprecated in Python 3.11 and removed in Python 3.13. Use `urllib.parse` for query string parsing, `html.escape()` for escaping, and web frameworks or `email.message` for form handling.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindCgiModule","displayName":"Find deprecated `cgi` module usage","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

