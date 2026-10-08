---
title: "Require `go-viper/mapstructure/v2` instead of `mitchellh/mapstructure`"
sidebar_label: "Require `go-viper/mapstructure/v2` instead of `mitchellh/mapstructure`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Require `go-viper/mapstructure/v2` instead of `mitchellh/mapstructure`"}
  description={"Bring the go.mod `require` into line with what the source imports: repoint `github.com/mitchellh/mapstructure` at `github.com/go-viper/mapstructure/v2 v2.5.0` once nothing imports the unmaintained module any more, and require both while a file naming the dropped `mapstructure.Error` still does. Does not sync go.sum, so a `go mod tidy` is still needed to complete resolution."}
  fqName={"org.openrewrite.golang.migration.UpdateMapstructureDependency"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.UpdateMapstructureDependency"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.UpdateMapstructureDependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/updatemapstructuredependency.md"}
  moderneOnly
>

<RecipeHeader.Title>Require `go-viper/mapstructure/v2` instead of `mitchellh/mapstructure`</RecipeHeader.Title>

<RecipeHeader.Description>Bring the go.mod `require` into line with what the source imports: repoint `github.com/mitchellh/mapstructure` at `github.com/go-viper/mapstructure/v2 v2.5.0` once nothing imports the unmaintained module any more, and require both while a file naming the dropped `mapstructure.Error` still does. Does not sync go.sum, so a `go mod tidy` is still needed to complete resolution.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.UpdateMapstructureDependency","displayName":"Require `go-viper/mapstructure/v2` instead of `mitchellh/mapstructure`","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

