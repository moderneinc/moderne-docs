---
title: "Replace `platform.popen()` with `subprocess.check_output()`"
sidebar_label: "Replace `platform.popen()` with `subprocess.check_output()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `platform.popen()` with `subprocess.check_output()`"}
  description={"`platform.popen()` was removed in Python 3.8. Use `subprocess.check_output(cmd, shell=True)` instead. Note: this rewrites call sites but does not manage imports."}
  fqName={"org.openrewrite.python.migrate.ReplacePlatformPopen"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","3.8","platform"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplacePlatformPopen"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplacePlatformPopen"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replaceplatformpopen.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `platform.popen()` with `subprocess.check_output()`</RecipeHeader.Title>

<RecipeHeader.Description>`platform.popen()` was removed in Python 3.8. Use `subprocess.check_output(cmd, shell=True)` instead. Note: this rewrites call sites but does not manage imports.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplacePlatformPopen","displayName":"Replace `platform.popen()` with `subprocess.check_output()`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

