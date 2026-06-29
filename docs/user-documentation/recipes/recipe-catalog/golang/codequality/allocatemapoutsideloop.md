---
title: "Allocate map outside loop"
sidebar_label: "Allocate map outside loop"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Allocate map outside loop"}
  description={"Hoist `make(map[...]...)` calls out of for/range loops and clear the map each iteration."}
  fqName={"org.openrewrite.golang.codequality.AllocateMapOutsideLoop"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.AllocateMapOutsideLoop"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.AllocateMapOutsideLoop"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/allocatemapoutsideloop.md"}
  moderneOnly
>

<RecipeHeader.Title>Allocate map outside loop</RecipeHeader.Title>

<RecipeHeader.Description>Hoist `make(map[...]...)` calls out of for/range loops and clear the map each iteration.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.AllocateMapOutsideLoop","displayName":"Allocate map outside loop","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

