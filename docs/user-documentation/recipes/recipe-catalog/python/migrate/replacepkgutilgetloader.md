---
title: "Replace `pkgutil.get_loader()` with `importlib.util.find_spec()`"
sidebar_label: "Replace `pkgutil.get_loader()` with `importlib.util.find_spec()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `pkgutil.get_loader()` with `importlib.util.find_spec()`"}
  description={"The `pkgutil.get_loader()` function was deprecated in Python 3.12. Replace with `importlib.util.find_spec()`. Note: returns ModuleSpec, use .loader for loader."}
  fqName={"org.openrewrite.python.migrate.ReplacePkgutilGetLoader"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplacePkgutilGetLoader"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplacePkgutilGetLoader"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacepkgutilgetloader.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `pkgutil.get_loader()` with `importlib.util.find_spec()`</RecipeHeader.Title>

<RecipeHeader.Description>The `pkgutil.get_loader()` function was deprecated in Python 3.12. Replace with `importlib.util.find_spec()`. Note: returns ModuleSpec, use .loader for loader.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplacePkgutilGetLoader","displayName":"Replace `pkgutil.get_loader()` with `importlib.util.find_spec()`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

