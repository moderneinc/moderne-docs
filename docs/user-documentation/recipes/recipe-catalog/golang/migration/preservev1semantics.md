---
title: "Preserve v1 semantics on `encoding/json/v2` calls"
sidebar_label: "Preserve v1 semantics on `encoding/json/v2` calls"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Preserve v1 semantics on `encoding/json/v2` calls"}
  description={"Append `jsonv1.DefaultOptionsV1()` to `encoding/json/v2` marshal and unmarshal calls, adding the `jsonv1 \"encoding/json\"` import, to re-enable the v1 defaults that v2 changed. `DefaultOptionsV1` is the v1 compatibility bundle from the `encoding/json` package."}
  fqName={"org.openrewrite.golang.migration.PreserveV1Semantics"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.PreserveV1Semantics"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.PreserveV1Semantics"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/preservev1semantics.md"}
  moderneOnly
>

<RecipeHeader.Title>Preserve v1 semantics on `encoding/json/v2` calls</RecipeHeader.Title>

<RecipeHeader.Description>Append `jsonv1.DefaultOptionsV1()` to `encoding/json/v2` marshal and unmarshal calls, adding the `jsonv1 "encoding/json"` import, to re-enable the v1 defaults that v2 changed. `DefaultOptionsV1` is the v1 compatibility bundle from the `encoding/json` package.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.PreserveV1Semantics","displayName":"Preserve v1 semantics on `encoding/json/v2` calls","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

