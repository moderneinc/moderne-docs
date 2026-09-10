---
title: "Preallocate slice"
sidebar_label: "Preallocate slice"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Preallocate slice"}
  description={"Add a capacity to a slice made empty and then filled by appending over a range, so `out := make([]int, 0)` before `for _, x := range xs` becomes `make([]int, 0, len(xs))`. The capacity is a hint, so only the allocation changes."}
  fqName={"org.openrewrite.golang.codequality.PreallocateSlice"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreallocateSlice"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreallocateSlice"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preallocateslice.md"}
  moderneOnly
>

<RecipeHeader.Title>Preallocate slice</RecipeHeader.Title>

<RecipeHeader.Description>Add a capacity to a slice made empty and then filled by appending over a range, so `out := make([]int, 0)` before `for _, x := range xs` becomes `make([]int, 0, len(xs))`. The capacity is a hint, so only the allocation changes.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreallocateSlice","displayName":"Preallocate slice","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

