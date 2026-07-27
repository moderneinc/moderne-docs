---
title: "Simplify bytes.NewBuffer roundtrip"
sidebar_label: "Simplify bytes.NewBuffer roundtrip"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify bytes.NewBuffer roundtrip"}
  description={"Replace `bytes.NewBuffer(b).Bytes()` with `b` since wrapping a byte slice in a buffer only to extract it is a no-op."}
  fqName={"org.openrewrite.golang.codequality.SimplifyBytesBufferRoundtrip"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.SimplifyBytesBufferRoundtrip"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.SimplifyBytesBufferRoundtrip"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/simplifybytesbufferroundtrip.md"}
  moderneOnly
>

<RecipeHeader.Title>Simplify bytes.NewBuffer roundtrip</RecipeHeader.Title>

<RecipeHeader.Description>Replace `bytes.NewBuffer(b).Bytes()` with `b` since wrapping a byte slice in a buffer only to extract it is a no-op.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.SimplifyBytesBufferRoundtrip","displayName":"Simplify bytes.NewBuffer roundtrip","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

