---
title: "Replace `ast.Num` with `ast.Constant`"
sidebar_label: "Replace `ast.Num` with `ast.Constant`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `ast.Num` with `ast.Constant`"}
  description={"The `ast.Num` node type was deprecated in Python 3.8 and removed in Python 3.14. Replace with `ast.Constant` and check `isinstance(node.value, (int, float, complex))`."}
  fqName={"org.openrewrite.python.migrate.ReplaceAstNum"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceAstNum"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceAstNum"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replaceastnum.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `ast.Num` with `ast.Constant`</RecipeHeader.Title>

<RecipeHeader.Description>The `ast.Num` node type was deprecated in Python 3.8 and removed in Python 3.14. Replace with `ast.Constant` and check `isinstance(node.value, (int, float, complex))`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceAstNum","displayName":"Replace `ast.Num` with `ast.Constant`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

