---
title: "Find `encoding/json` usage for the v2 migration"
sidebar_label: "Find `encoding/json` usage for the v2 migration"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `encoding/json` usage for the v2 migration"}
  description={"Inventory every `encoding/json` (v1) touchpoint that an `encoding/json/v2` migration must address: the import, package functions, `Encoder`/`Decoder` and other type methods (resolved through the type system, so receivers reached via variables, parameters, or fields are all found), exported types, `[N]byte`/`time.Duration` struct fields, `omitempty` and `,string` tags, and custom `MarshalJSON`/`UnmarshalJSON` implementations. Findings populate a data table categorized as import, rewrite, review, or modernize. This recipe reports only and does not modify code."}
  fqName={"org.openrewrite.golang.migration.FindEncodingJsonUsage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.FindEncodingJsonUsage"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.FindEncodingJsonUsage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/findencodingjsonusage.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `encoding/json` usage for the v2 migration</RecipeHeader.Title>

<RecipeHeader.Description>Inventory every `encoding/json` (v1) touchpoint that an `encoding/json/v2` migration must address: the import, package functions, `Encoder`/`Decoder` and other type methods (resolved through the type system, so receivers reached via variables, parameters, or fields are all found), exported types, `[N]byte`/`time.Duration` struct fields, `omitempty` and `,string` tags, and custom `MarshalJSON`/`UnmarshalJSON` implementations. Findings populate a data table categorized as import, rewrite, review, or modernize. This recipe reports only and does not modify code.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.FindEncodingJsonUsage","displayName":"Find `encoding/json` usage for the v2 migration","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

