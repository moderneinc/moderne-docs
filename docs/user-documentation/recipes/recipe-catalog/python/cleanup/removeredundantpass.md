---
title: "Delete unnecessary ``pass`` in non-empty blocks"
sidebar_label: "Delete unnecessary ``pass`` in non-empty blocks"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Delete unnecessary ``pass`` in non-empty blocks"}
  description={"Delete ``pass`` when the enclosing block already contains other statements; ``pass`` is only useful as a placeholder in empty blocks."}
  fqName={"org.openrewrite.python.cleanup.RemoveRedundantPass"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveRedundantPass"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveRedundantPass"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removeredundantpass.md"}
  moderneOnly
>

<RecipeHeader.Title>Delete unnecessary ``pass`` in non-empty blocks</RecipeHeader.Title>

<RecipeHeader.Description>Delete ``pass`` when the enclosing block already contains other statements; ``pass`` is only useful as a placeholder in empty blocks.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveRedundantPass","displayName":"Delete unnecessary ``pass`` in non-empty blocks","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

