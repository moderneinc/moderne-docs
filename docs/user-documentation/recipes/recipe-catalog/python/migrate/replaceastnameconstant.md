---
title: "Replace `ast.NameConstant` with `ast.Constant`"
sidebar_label: "Replace `ast.NameConstant` with `ast.Constant`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `ast.NameConstant` with `ast.Constant`"}
  description={"The `ast.NameConstant` node type was deprecated in Python 3.8 and removed in Python 3.14. Replace with `ast.Constant` and check `node.value in (True, False, None)`."}
  fqName={"org.openrewrite.python.migrate.ReplaceAstNameConstant"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceAstNameConstant"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceAstNameConstant"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replaceastnameconstant.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `ast.NameConstant` with `ast.Constant`</RecipeHeader.Title>

<RecipeHeader.Description>The `ast.NameConstant` node type was deprecated in Python 3.8 and removed in Python 3.14. Replace with `ast.Constant` and check `node.value in (True, False, None)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceAstNameConstant","displayName":"Replace `ast.NameConstant` with `ast.Constant`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

