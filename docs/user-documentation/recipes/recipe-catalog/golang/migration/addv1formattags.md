---
title: "Add v1-preserving `format` tags to `time.Duration` and `[N]byte` fields"
sidebar_label: "Add v1-preserving `format` tags to `time.Duration` and `[N]byte` fields"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add v1-preserving `format` tags to `time.Duration` and `[N]byte` fields"}
  description={"Add `json:\",format:nano\"` to `time.Duration` struct fields and `json:\",format:array\"` to fixed `[N]byte` array struct fields, whose default `encoding/json/v2` encoding otherwise diverges from v1 (a duration string rather than a nanosecond number, and a base64 string rather than a number array). With the tag the field encodes identically under `encoding/json` and `encoding/json/v2`, so `MigrateToJSONV2` migrates the file on its default path rather than leaving it for review. An existing `json` tag gains the option while its name and other options are kept, and a field that already pins a `format` is left unchanged."}
  fqName={"org.openrewrite.golang.migration.AddV1FormatTags"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.AddV1FormatTags"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.AddV1FormatTags"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/addv1formattags.md"}
  moderneOnly
>

<RecipeHeader.Title>Add v1-preserving `format` tags to `time.Duration` and `[N]byte` fields</RecipeHeader.Title>

<RecipeHeader.Description>Add `json:",format:nano"` to `time.Duration` struct fields and `json:",format:array"` to fixed `[N]byte` array struct fields, whose default `encoding/json/v2` encoding otherwise diverges from v1 (a duration string rather than a nanosecond number, and a base64 string rather than a number array). With the tag the field encodes identically under `encoding/json` and `encoding/json/v2`, so `MigrateToJSONV2` migrates the file on its default path rather than leaving it for review. An existing `json` tag gains the option while its name and other options are kept, and a field that already pins a `format` is left unchanged.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.AddV1FormatTags","displayName":"Add v1-preserving `format` tags to `time.Duration` and `[N]byte` fields","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

