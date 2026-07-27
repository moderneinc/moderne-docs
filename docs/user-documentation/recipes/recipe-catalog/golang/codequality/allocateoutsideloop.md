---
title: "Allocate outside loop"
sidebar_label: "Allocate outside loop"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Allocate outside loop"}
  description={"Find `new()` calls inside for/range loops. Repeated heap allocations in loops add GC pressure; consider reusing the object."}
  fqName={"org.openrewrite.golang.codequality.AllocateOutsideLoop"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.AllocateOutsideLoop"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.AllocateOutsideLoop"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/allocateoutsideloop.md"}
  moderneOnly
>

<RecipeHeader.Title>Allocate outside loop</RecipeHeader.Title>

<RecipeHeader.Description>Find `new()` calls inside for/range loops. Repeated heap allocations in loops add GC pressure; consider reusing the object.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.AllocateOutsideLoop","displayName":"Allocate outside loop","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

