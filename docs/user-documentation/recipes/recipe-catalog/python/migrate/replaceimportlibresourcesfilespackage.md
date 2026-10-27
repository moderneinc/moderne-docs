---
title: "Replace `importlib.resources.files(package=...)` with `anchor=...`"
sidebar_label: "Replace `importlib.resources.files(package=...)` with `anchor=...`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `importlib.resources.files(package=...)` with `anchor=...`"}
  description={"The `package` parameter of `importlib.resources.files()` was deprecated in Python 3.12 and removed in Python 3.15. Pass the same value as `anchor` instead."}
  fqName={"org.openrewrite.python.migrate.ReplaceImportlibResourcesFilesPackage"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","importlib","migration","3.15"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceImportlibResourcesFilesPackage"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceImportlibResourcesFilesPackage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replaceimportlibresourcesfilespackage.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `importlib.resources.files(package=...)` with `anchor=...`</RecipeHeader.Title>

<RecipeHeader.Description>The `package` parameter of `importlib.resources.files()` was deprecated in Python 3.12 and removed in Python 3.15. Pass the same value as `anchor` instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceImportlibResourcesFilesPackage","displayName":"Replace `importlib.resources.files(package=...)` with `anchor=...`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

