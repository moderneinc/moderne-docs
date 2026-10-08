---
title: "Swap `github.com/golang/mock` imports to `go.uber.org/mock`"
sidebar_label: "Swap `github.com/golang/mock` imports to `go.uber.org/mock`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Swap `github.com/golang/mock` imports to `go.uber.org/mock`"}
  description={"Repoint every `github.com/golang/mock` import at `go.uber.org/mock`, which covers `gomock`, `mockgen` and `mockgen/model`. The fork's API is a superset of the original's, so call sites are unchanged; only the import path and its type attribution move."}
  fqName={"org.openrewrite.golang.migration.SwapGolangMockImports"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.SwapGolangMockImports"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.SwapGolangMockImports"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/swapgolangmockimports.md"}
  moderneOnly
>

<RecipeHeader.Title>Swap `github.com/golang/mock` imports to `go.uber.org/mock`</RecipeHeader.Title>

<RecipeHeader.Description>Repoint every `github.com/golang/mock` import at `go.uber.org/mock`, which covers `gomock`, `mockgen` and `mockgen/model`. The fork's API is a superset of the original's, so call sites are unchanged; only the import path and its type attribution move.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.SwapGolangMockImports","displayName":"Swap `github.com/golang/mock` imports to `go.uber.org/mock`","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

