---
title: "Remove redundant type conversion"
sidebar_label: "Remove redundant type conversion"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove redundant type conversion"}
  description={"Remove a conversion whose operand already has the target type, such as `string(s)` where `s` is a `string`. `byte` and `uint8` name one type, as do `rune` and `int32`, so a conversion between either pair is removed too. A conversion of an untyped constant is what gives the constant its type, so it stays."}
  fqName={"org.openrewrite.golang.codequality.RemoveRedundantTypeConversion"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.RemoveRedundantTypeConversion"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.RemoveRedundantTypeConversion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/removeredundanttypeconversion.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove redundant type conversion</RecipeHeader.Title>

<RecipeHeader.Description>Remove a conversion whose operand already has the target type, such as `string(s)` where `s` is a `string`. `byte` and `uint8` name one type, as do `rune` and `int32`, so a conversion between either pair is removed too. A conversion of an untyped constant is what gives the constant its type, so it stays.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.RemoveRedundantTypeConversion","displayName":"Remove redundant type conversion","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

