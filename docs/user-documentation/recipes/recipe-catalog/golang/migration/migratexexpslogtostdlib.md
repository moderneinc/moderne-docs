---
title: "Migrate `golang.org/x/exp/slog` to `log/slog`"
sidebar_label: "Migrate `golang.org/x/exp/slog` to `log/slog`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `golang.org/x/exp/slog` to `log/slog`"}
  description={"Repoint `golang.org/x/exp/slog` at the standard library `log/slog`, added in Go 1.21, and rename the context-taking helpers the standard library spells differently: `DebugCtx`, `InfoCtx`, `WarnCtx` and `ErrorCtx` become `DebugContext`, `InfoContext`, `WarnContext` and `ErrorContext`. x/exp carries both spellings, so a file already on the `Context` ones is a plain path swap."}
  fqName={"org.openrewrite.golang.migration.MigrateXExpSlogToStdlib"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.MigrateXExpSlogToStdlib"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.MigrateXExpSlogToStdlib"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/migratexexpslogtostdlib.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `golang.org/x/exp/slog` to `log/slog`</RecipeHeader.Title>

<RecipeHeader.Description>Repoint `golang.org/x/exp/slog` at the standard library `log/slog`, added in Go 1.21, and rename the context-taking helpers the standard library spells differently: `DebugCtx`, `InfoCtx`, `WarnCtx` and `ErrorCtx` become `DebugContext`, `InfoContext`, `WarnContext` and `ErrorContext`. x/exp carries both spellings, so a file already on the `Context` ones is a plain path swap.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.MigrateXExpSlogToStdlib","displayName":"Migrate `golang.org/x/exp/slog` to `log/slog`","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

