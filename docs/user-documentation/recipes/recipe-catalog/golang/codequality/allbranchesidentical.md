---
title: "Remove if/else with identical branches"
sidebar_label: "Remove if/else with identical branches"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove if/else with identical branches"}
  description={"Replace an if/else chain where every branch has the same body with just the body, since the conditions have no effect on the outcome."}
  fqName={"org.openrewrite.golang.codequality.AllBranchesIdentical"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.AllBranchesIdentical"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.AllBranchesIdentical"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/allbranchesidentical.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove if/else with identical branches</RecipeHeader.Title>

<RecipeHeader.Description>Replace an if/else chain where every branch has the same body with just the body, since the conditions have no effect on the outcome.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.AllBranchesIdentical","displayName":"Remove if/else with identical branches","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

