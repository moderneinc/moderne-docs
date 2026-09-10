---
title: "Migrate `encoding/json` to `encoding/json/v2` (all mechanical rewrites)"
sidebar_label: "Migrate `encoding/json` to `encoding/json/v2` (all mechanical rewrites)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `encoding/json` to `encoding/json/v2` (all mechanical rewrites)"}
  description={"Migrate the mechanical `encoding/json` idioms to `encoding/json/v2` by composing the streaming, `MarshalIndent`, function-local `Encoder`/`Decoder`, and `RawMessage` rewrites plus an import-only swap for files whose usage already exists in v2, adopting v2 semantics. To keep v1 output byte-identical instead, run the opt-in `PreserveV1Semantics` recipe afterwards."}
  fqName={"org.openrewrite.golang.migration.MigrateToJSONV2"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.MigrateToJSONV2"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.MigrateToJSONV2"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/migratetojsonv2.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `encoding/json` to `encoding/json/v2` (all mechanical rewrites)</RecipeHeader.Title>

<RecipeHeader.Description>Migrate the mechanical `encoding/json` idioms to `encoding/json/v2` by composing the streaming, `MarshalIndent`, function-local `Encoder`/`Decoder`, and `RawMessage` rewrites plus an import-only swap for files whose usage already exists in v2, adopting v2 semantics. To keep v1 output byte-identical instead, run the opt-in `PreserveV1Semantics` recipe afterwards.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.MigrateToJSONV2","displayName":"Migrate `encoding/json` to `encoding/json/v2` (all mechanical rewrites)","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

