---
title: "Avoid fmt in loop"
sidebar_label: "Avoid fmt in loop"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Avoid fmt in loop"}
  description={"Find `fmt.Sprintf`, `fmt.Sprint`, or `fmt.Fprintf` calls inside for/range loops. These allocate on every call; prefer direct string operations or strconv."}
  fqName={"org.openrewrite.golang.codequality.AvoidFmtInLoop"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.AvoidFmtInLoop"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.AvoidFmtInLoop"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/avoidfmtinloop.md"}
  moderneOnly
>

<RecipeHeader.Title>Avoid fmt in loop</RecipeHeader.Title>

<RecipeHeader.Description>Find `fmt.Sprintf`, `fmt.Sprint`, or `fmt.Fprintf` calls inside for/range loops. These allocate on every call; prefer direct string operations or strconv.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.AvoidFmtInLoop","displayName":"Avoid fmt in loop","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

