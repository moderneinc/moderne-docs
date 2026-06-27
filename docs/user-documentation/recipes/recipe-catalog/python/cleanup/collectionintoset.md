---
title: "Prefer set literals in `in` membership tests"
sidebar_label: "Prefer set literals in `in` membership tests"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer set literals in `in` membership tests"}
  description={"When a list or tuple of literals appears on the right side of an `in` test, convert it to a set literal for constant-time lookup."}
  fqName={"org.openrewrite.python.cleanup.CollectionIntoSet"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.CollectionIntoSet"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.CollectionIntoSet"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/collectionintoset.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer set literals in `in` membership tests</RecipeHeader.Title>

<RecipeHeader.Description>When a list or tuple of literals appears on the right side of an `in` test, convert it to a set literal for constant-time lookup.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.CollectionIntoSet","displayName":"Prefer set literals in `in` membership tests","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

