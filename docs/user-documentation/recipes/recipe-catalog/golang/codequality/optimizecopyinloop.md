---
title: "Optimize copy in loop"
sidebar_label: "Optimize copy in loop"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Optimize copy in loop"}
  description={"Find `copy()` calls inside for/range loops. Repeated copying in loops may indicate a buffer reuse opportunity."}
  fqName={"org.openrewrite.golang.codequality.OptimizeCopyInLoop"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.OptimizeCopyInLoop"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.OptimizeCopyInLoop"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/optimizecopyinloop.md"}
  moderneOnly
>

<RecipeHeader.Title>Optimize copy in loop</RecipeHeader.Title>

<RecipeHeader.Description>Find `copy()` calls inside for/range loops. Repeated copying in loops may indicate a buffer reuse opportunity.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.OptimizeCopyInLoop","displayName":"Optimize copy in loop","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

