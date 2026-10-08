---
title: "Migrate from `github.com/golang/mock` to `go.uber.org/mock`"
sidebar_label: "Migrate from `github.com/golang/mock` to `go.uber.org/mock`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate from `github.com/golang/mock` to `go.uber.org/mock`"}
  description={"Migrate off `github.com/golang/mock`, which Google archived in June 2023, to the maintained fork `go.uber.org/mock`. The fork's `gomock` API is a superset of the original's, so this is a path swap: imports, `//go:generate mockgen` directives and the go.mod `require` all move, and call sites are untouched. Run `RemoveRedundantGomockFinish` afterwards to drop the `defer ctrl.Finish()` calls the fork makes unnecessary, and `go mod tidy` to sync go.sum."}
  fqName={"org.openrewrite.golang.migration.MigrateToUberMock"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.MigrateToUberMock"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.MigrateToUberMock"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/migratetoubermock.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate from `github.com/golang/mock` to `go.uber.org/mock`</RecipeHeader.Title>

<RecipeHeader.Description>Migrate off `github.com/golang/mock`, which Google archived in June 2023, to the maintained fork `go.uber.org/mock`. The fork's `gomock` API is a superset of the original's, so this is a path swap: imports, `//go:generate mockgen` directives and the go.mod `require` all move, and call sites are untouched. Run `RemoveRedundantGomockFinish` afterwards to drop the `defer ctrl.Finish()` calls the fork makes unnecessary, and `go mod tidy` to sync go.sum.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.MigrateToUberMock","displayName":"Migrate from `github.com/golang/mock` to `go.uber.org/mock`","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

