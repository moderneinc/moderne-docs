---
title: "Migrate from `mitchellh/mapstructure` to `go-viper/mapstructure/v2`"
sidebar_label: "Migrate from `mitchellh/mapstructure` to `go-viper/mapstructure/v2`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate from `mitchellh/mapstructure` to `go-viper/mapstructure/v2`"}
  description={"Migrate off `github.com/mitchellh/mapstructure`, unmaintained since 2023, to the community fork `github.com/go-viper/mapstructure/v2`. v2 keeps every function, hook and `DecoderConfig` field of v1 and adds more, so this is a path swap. The one exception is the exported `Error` struct, which v2 replaced with `errors.Join`; a file naming it is left untouched and reported by `FindMapstructureErrorUsage`. Run `go mod tidy` afterwards to sync go.sum."}
  fqName={"org.openrewrite.golang.migration.MigrateToGoViperMapstructure"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.MigrateToGoViperMapstructure"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.MigrateToGoViperMapstructure"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/migratetogovipermapstructure.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate from `mitchellh/mapstructure` to `go-viper/mapstructure/v2`</RecipeHeader.Title>

<RecipeHeader.Description>Migrate off `github.com/mitchellh/mapstructure`, unmaintained since 2023, to the community fork `github.com/go-viper/mapstructure/v2`. v2 keeps every function, hook and `DecoderConfig` field of v1 and adds more, so this is a path swap. The one exception is the exported `Error` struct, which v2 replaced with `errors.Join`; a file naming it is left untouched and reported by `FindMapstructureErrorUsage`. Run `go mod tidy` afterwards to sync go.sum.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.MigrateToGoViperMapstructure","displayName":"Migrate from `mitchellh/mapstructure` to `go-viper/mapstructure/v2`","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

