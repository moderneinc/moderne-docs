---
title: "Simplify bytes.SplitN with -1"
sidebar_label: "Simplify bytes.SplitN with -1"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify bytes.SplitN with -1"}
  description={"Replace `bytes.SplitN(b, sep, -1)` with `bytes.Split(b, sep)` since -1 means split all."}
  fqName={"org.openrewrite.golang.codequality.SimplifyBytesSplitN"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.SimplifyBytesSplitN"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.SimplifyBytesSplitN"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/simplifybytessplitn.md"}
  moderneOnly
>

<RecipeHeader.Title>Simplify bytes.SplitN with -1</RecipeHeader.Title>

<RecipeHeader.Description>Replace `bytes.SplitN(b, sep, -1)` with `bytes.Split(b, sep)` since -1 means split all.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.SimplifyBytesSplitN","displayName":"Simplify bytes.SplitN with -1","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

