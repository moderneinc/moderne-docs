---
title: "Replace `ast.Str` with `ast.Constant`"
sidebar_label: "Replace `ast.Str` with `ast.Constant`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `ast.Str` with `ast.Constant`"}
  description={"The `ast.Str` node type was deprecated in Python 3.8 and removed in Python 3.14. Replace with `ast.Constant` and check `isinstance(node.value, str)`."}
  fqName={"org.openrewrite.python.migrate.ReplaceAstStr"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceAstStr"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceAstStr"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replaceaststr.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `ast.Str` with `ast.Constant`</RecipeHeader.Title>

<RecipeHeader.Description>The `ast.Str` node type was deprecated in Python 3.8 and removed in Python 3.14. Replace with `ast.Constant` and check `isinstance(node.value, str)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceAstStr","displayName":"Replace `ast.Str` with `ast.Constant`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

