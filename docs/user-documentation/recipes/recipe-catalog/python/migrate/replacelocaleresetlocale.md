---
title: "Replace `locale.resetlocale()` with `locale.setlocale(LC_ALL, '')`"
sidebar_label: "Replace `locale.resetlocale()` with `locale.setlocale(LC_ALL, '')`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `locale.resetlocale()` with `locale.setlocale(LC_ALL, '')`"}
  description={"The `locale.resetlocale()` function was deprecated in Python 3.11 and removed in Python 3.13. Replace with `locale.setlocale(locale.LC_ALL, '')`."}
  fqName={"org.openrewrite.python.migrate.ReplaceLocaleResetlocale"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceLocaleResetlocale"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceLocaleResetlocale"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacelocaleresetlocale.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `locale.resetlocale()` with `locale.setlocale(LC_ALL, '')`</RecipeHeader.Title>

<RecipeHeader.Description>The `locale.resetlocale()` function was deprecated in Python 3.11 and removed in Python 3.13. Replace with `locale.setlocale(locale.LC_ALL, '')`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceLocaleResetlocale","displayName":"Replace `locale.resetlocale()` with `locale.setlocale(LC_ALL, '')`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

