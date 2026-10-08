---
title: "Migrate `golang.org/x/exp/slices` to `slices`"
sidebar_label: "Migrate `golang.org/x/exp/slices` to `slices`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `golang.org/x/exp/slices` to `slices`"}
  description={"Repoint `golang.org/x/exp/slices` at the standard library `slices`, added in Go 1.21. Every x/exp function exists there under the same name and signature, so call sites are unchanged. A file is skipped when the module targets an older Go release, when it already imports `slices`, or when it passes a boolean comparator to `SortFunc`, `SortStableFunc`, `IsSortedFunc`, `MinFunc` or `MaxFunc` — the pre-2023 x/exp signature, which needs a hand conversion to a three-way `cmp` function."}
  fqName={"org.openrewrite.golang.migration.MigrateXExpSlicesToStdlib"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.MigrateXExpSlicesToStdlib"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.MigrateXExpSlicesToStdlib"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/migratexexpslicestostdlib.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `golang.org/x/exp/slices` to `slices`</RecipeHeader.Title>

<RecipeHeader.Description>Repoint `golang.org/x/exp/slices` at the standard library `slices`, added in Go 1.21. Every x/exp function exists there under the same name and signature, so call sites are unchanged. A file is skipped when the module targets an older Go release, when it already imports `slices`, or when it passes a boolean comparator to `SortFunc`, `SortStableFunc`, `IsSortedFunc`, `MinFunc` or `MaxFunc` — the pre-2023 x/exp signature, which needs a hand conversion to a three-way `cmp` function.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.MigrateXExpSlicesToStdlib","displayName":"Migrate `golang.org/x/exp/slices` to `slices`","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

