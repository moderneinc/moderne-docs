---
title: "Swap `mitchellh/mapstructure` imports to `go-viper/mapstructure/v2`"
sidebar_label: "Swap `mitchellh/mapstructure` imports to `go-viper/mapstructure/v2`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Swap `mitchellh/mapstructure` imports to `go-viper/mapstructure/v2`"}
  description={"Repoint every `github.com/mitchellh/mapstructure` import at `github.com/go-viper/mapstructure/v2`, the maintained fork. The package name is unchanged, so call sites stay as written; only the import path and its type attribution move. A file naming `mapstructure.Error`, the one export v2 dropped, is left alone — see `FindMapstructureErrorUsage`."}
  fqName={"org.openrewrite.golang.migration.SwapMapstructureImports"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.SwapMapstructureImports"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.SwapMapstructureImports"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/swapmapstructureimports.md"}
  moderneOnly
>

<RecipeHeader.Title>Swap `mitchellh/mapstructure` imports to `go-viper/mapstructure/v2`</RecipeHeader.Title>

<RecipeHeader.Description>Repoint every `github.com/mitchellh/mapstructure` import at `github.com/go-viper/mapstructure/v2`, the maintained fork. The package name is unchanged, so call sites stay as written; only the import path and its type attribution move. A file naming `mapstructure.Error`, the one export v2 dropped, is left alone — see `FindMapstructureErrorUsage`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.SwapMapstructureImports","displayName":"Swap `mitchellh/mapstructure` imports to `go-viper/mapstructure/v2`","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

