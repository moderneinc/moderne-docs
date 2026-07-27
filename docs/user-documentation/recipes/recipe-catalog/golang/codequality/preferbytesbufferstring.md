---
title: "Prefer buf.String() over string(buf.Bytes())"
sidebar_label: "Prefer buf.String() over string(buf.Bytes())"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer buf.String() over string(buf.Bytes())"}
  description={"Replace `string(buf.Bytes())` with `buf.String()` for better performance and readability."}
  fqName={"org.openrewrite.golang.codequality.PreferBytesBufferString"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferBytesBufferString"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferBytesBufferString"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preferbytesbufferstring.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer buf.String() over string(buf.Bytes())</RecipeHeader.Title>

<RecipeHeader.Description>Replace `string(buf.Bytes())` with `buf.String()` for better performance and readability.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferBytesBufferString","displayName":"Prefer buf.String() over string(buf.Bytes())","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

