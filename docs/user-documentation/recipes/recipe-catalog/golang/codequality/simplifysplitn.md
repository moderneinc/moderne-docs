---
title: "Simplify strings.SplitN with -1"
sidebar_label: "Simplify strings.SplitN with -1"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify strings.SplitN with -1"}
  description={"Replace `strings.SplitN(s, sep, -1)` with `strings.Split(s, sep)` since -1 means split all."}
  fqName={"org.openrewrite.golang.codequality.SimplifySplitN"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.SimplifySplitN"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.SimplifySplitN"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/simplifysplitn.md"}
  moderneOnly
>

<RecipeHeader.Title>Simplify strings.SplitN with -1</RecipeHeader.Title>

<RecipeHeader.Description>Replace `strings.SplitN(s, sep, -1)` with `strings.Split(s, sep)` since -1 means split all.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.SimplifySplitN","displayName":"Simplify strings.SplitN with -1","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

