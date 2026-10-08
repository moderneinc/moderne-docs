---
title: "Find `mapstructure.Error` usage"
sidebar_label: "Find `mapstructure.Error` usage"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `mapstructure.Error` usage"}
  description={"Mark every reference to `mapstructure.Error`, the one `github.com/mitchellh/mapstructure` export that `github.com/go-viper/mapstructure/v2` dropped. v2 joins its decode failures with `errors.Join` and exposes `Error` as an interface, so code reading the struct's `Errors []string` field has to be reworked by hand before the module can move."}
  fqName={"org.openrewrite.golang.migration.FindMapstructureErrorUsage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.FindMapstructureErrorUsage"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.FindMapstructureErrorUsage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/findmapstructureerrorusage.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `mapstructure.Error` usage</RecipeHeader.Title>

<RecipeHeader.Description>Mark every reference to `mapstructure.Error`, the one `github.com/mitchellh/mapstructure` export that `github.com/go-viper/mapstructure/v2` dropped. v2 joins its decode failures with `errors.Join` and exposes `Error` as an interface, so code reading the struct's `Errors []string` field has to be reworked by hand before the module can move.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.FindMapstructureErrorUsage","displayName":"Find `mapstructure.Error` usage","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

