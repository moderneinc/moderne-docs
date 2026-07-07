---
title: "Replace `ast.Ellipsis` with `ast.Constant`"
sidebar_label: "Replace `ast.Ellipsis` with `ast.Constant`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `ast.Ellipsis` with `ast.Constant`"}
  description={"The `ast.Ellipsis` node type was deprecated in Python 3.8 and removed in Python 3.14. Replace with `ast.Constant` and check `node.value is ...`."}
  fqName={"org.openrewrite.python.migrate.ReplaceAstEllipsis"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceAstEllipsis"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceAstEllipsis"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replaceastellipsis.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `ast.Ellipsis` with `ast.Constant`</RecipeHeader.Title>

<RecipeHeader.Description>The `ast.Ellipsis` node type was deprecated in Python 3.8 and removed in Python 3.14. Replace with `ast.Constant` and check `node.value is ...`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceAstEllipsis","displayName":"Replace `ast.Ellipsis` with `ast.Constant`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

