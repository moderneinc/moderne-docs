---
title: "Prefer strings.NewReader"
sidebar_label: "Prefer strings.NewReader"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer strings.NewReader"}
  description={"Replace `bytes.NewReader([]byte(s))` with `strings.NewReader(s)` to avoid an unnecessary string-to-byte-slice conversion."}
  fqName={"org.openrewrite.golang.codequality.PreferStringsNewReader"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferStringsNewReader"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferStringsNewReader"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preferstringsnewreader.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer strings.NewReader</RecipeHeader.Title>

<RecipeHeader.Description>Replace `bytes.NewReader([]byte(s))` with `strings.NewReader(s)` to avoid an unnecessary string-to-byte-slice conversion.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferStringsNewReader","displayName":"Prefer strings.NewReader","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

