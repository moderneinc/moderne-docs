---
title: "Migrate `golang.org/x/exp/maps` to `maps`"
sidebar_label: "Migrate `golang.org/x/exp/maps` to `maps`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `golang.org/x/exp/maps` to `maps`"}
  description={"Migrate `golang.org/x/exp/maps` to the standard library. `Clone`, `Copy`, `Equal`, `EqualFunc` and `DeleteFunc` carry over unchanged; `Clear(m)` becomes the `clear(m)` builtin; and `Keys(m)` and `Values(m)`, which return an `iter.Seq` in the standard library rather than a slice, are wrapped as `slices.Collect(maps.Keys(m))`. A file using `Keys` or `Values` needs Go 1.23, the rest Go 1.21."}
  fqName={"org.openrewrite.golang.migration.MigrateXExpMapsToStdlib"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.MigrateXExpMapsToStdlib"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.MigrateXExpMapsToStdlib"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/migratexexpmapstostdlib.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `golang.org/x/exp/maps` to `maps`</RecipeHeader.Title>

<RecipeHeader.Description>Migrate `golang.org/x/exp/maps` to the standard library. `Clone`, `Copy`, `Equal`, `EqualFunc` and `DeleteFunc` carry over unchanged; `Clear(m)` becomes the `clear(m)` builtin; and `Keys(m)` and `Values(m)`, which return an `iter.Seq` in the standard library rather than a slice, are wrapped as `slices.Collect(maps.Keys(m))`. A file using `Keys` or `Values` needs Go 1.23, the rest Go 1.21.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.MigrateXExpMapsToStdlib","displayName":"Migrate `golang.org/x/exp/maps` to `maps`","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

