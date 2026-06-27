---
title: "Strip trailing ``continue`` from loop body"
sidebar_label: "Strip trailing ``continue`` from loop body"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Strip trailing ``continue`` from loop body"}
  description={"Strip ``continue`` when it is the final statement in a loop body, since the loop naturally advances to the next iteration."}
  fqName={"org.openrewrite.python.cleanup.RemoveRedundantContinue"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveRedundantContinue"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveRedundantContinue"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removeredundantcontinue.md"}
  moderneOnly
>

<RecipeHeader.Title>Strip trailing ``continue`` from loop body</RecipeHeader.Title>

<RecipeHeader.Description>Strip ``continue`` when it is the final statement in a loop body, since the loop naturally advances to the next iteration.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveRedundantContinue","displayName":"Strip trailing ``continue`` from loop body","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

