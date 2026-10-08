---
title: "Migrate `golang.org/x/exp` to the standard library"
sidebar_label: "Migrate `golang.org/x/exp` to the standard library"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `golang.org/x/exp` to the standard library"}
  description={"Migrate `golang.org/x/exp/slices`, `golang.org/x/exp/maps`, `golang.org/x/exp/constraints` and `golang.org/x/exp/slog` to the `slices`, `maps`, `cmp` and `log/slog` packages that absorbed them, and drop the `golang.org/x/exp` requirement once nothing needs it. Each rewrite is gated on the module's `go` directive, and a file using API the standard library never took — the numeric constraints, or the pre-2023 boolean comparators — is left for review. Run `go mod tidy` afterwards to sync go.sum."}
  fqName={"org.openrewrite.golang.migration.MigrateXExpToStdlib"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.MigrateXExpToStdlib"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.MigrateXExpToStdlib"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/migratexexptostdlib.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `golang.org/x/exp` to the standard library</RecipeHeader.Title>

<RecipeHeader.Description>Migrate `golang.org/x/exp/slices`, `golang.org/x/exp/maps`, `golang.org/x/exp/constraints` and `golang.org/x/exp/slog` to the `slices`, `maps`, `cmp` and `log/slog` packages that absorbed them, and drop the `golang.org/x/exp` requirement once nothing needs it. Each rewrite is gated on the module's `go` directive, and a file using API the standard library never took — the numeric constraints, or the pre-2023 boolean comparators — is left for review. Run `go mod tidy` afterwards to sync go.sum.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.MigrateXExpToStdlib","displayName":"Migrate `golang.org/x/exp` to the standard library","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

