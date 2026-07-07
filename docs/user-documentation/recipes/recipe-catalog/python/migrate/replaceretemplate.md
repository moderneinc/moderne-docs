---
title: "Replace `re.template()` with `re.compile()` and flag `re.TEMPLATE`/`re.T`"
sidebar_label: "Replace `re.template()` with `re.compile()` and flag `re.TEMPLATE`/`re.T`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `re.template()` with `re.compile()` and flag `re.TEMPLATE`/`re.T`"}
  description={"`re.template()` was deprecated in Python 3.11 and removed in 3.13. Calls are auto-replaced with `re.compile()`. `re.TEMPLATE`/`re.T` flags have no direct replacement and are flagged for manual review."}
  fqName={"org.openrewrite.python.migrate.ReplaceReTemplate"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","re","migration","3.11"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceReTemplate"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceReTemplate"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replaceretemplate.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `re.template()` with `re.compile()` and flag `re.TEMPLATE`/`re.T`</RecipeHeader.Title>

<RecipeHeader.Description>`re.template()` was deprecated in Python 3.11 and removed in 3.13. Calls are auto-replaced with `re.compile()`. `re.TEMPLATE`/`re.T` flags have no direct replacement and are flagged for manual review.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceReTemplate","displayName":"Replace `re.template()` with `re.compile()` and flag `re.TEMPLATE`/`re.T`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

