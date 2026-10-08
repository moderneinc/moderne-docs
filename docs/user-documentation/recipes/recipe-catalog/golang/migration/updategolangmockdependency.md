---
title: "Require `go.uber.org/mock` instead of `github.com/golang/mock`"
sidebar_label: "Require `go.uber.org/mock` instead of `github.com/golang/mock`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Require `go.uber.org/mock` instead of `github.com/golang/mock`"}
  description={"Bring the go.mod `require` into line with what the source imports: repoint `github.com/golang/mock` at `go.uber.org/mock v0.6.0` once nothing imports the archived module any more, and require both while a file still does. Does not sync go.sum, so a `go mod tidy` is still needed to complete resolution."}
  fqName={"org.openrewrite.golang.migration.UpdateGolangMockDependency"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.UpdateGolangMockDependency"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.UpdateGolangMockDependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/updategolangmockdependency.md"}
  moderneOnly
>

<RecipeHeader.Title>Require `go.uber.org/mock` instead of `github.com/golang/mock`</RecipeHeader.Title>

<RecipeHeader.Description>Bring the go.mod `require` into line with what the source imports: repoint `github.com/golang/mock` at `go.uber.org/mock v0.6.0` once nothing imports the archived module any more, and require both while a file still does. Does not sync go.sum, so a `go mod tidy` is still needed to complete resolution.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.UpdateGolangMockDependency","displayName":"Require `go.uber.org/mock` instead of `github.com/golang/mock`","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

