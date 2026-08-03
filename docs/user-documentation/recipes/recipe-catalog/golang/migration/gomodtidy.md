---
title: "Tidy go.mod"
sidebar_label: "Tidy go.mod"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Tidy go.mod"}
  description={"Apply `go mod tidy` behavior to go.mod: add missing requirements at their resolved versions, remove unused ones, correct the `// indirect` markers, and sort require blocks. Adding and removing require the module graph resolved at parse time, and are no-ops without it. It does not sync go.sum; the `RegenerateGoSum` recipe covers that."}
  fqName={"org.openrewrite.golang.migration.GoModTidy"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.GoModTidy"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.GoModTidy"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/gomodtidy.md"}
  moderneOnly
>

<RecipeHeader.Title>Tidy go.mod</RecipeHeader.Title>

<RecipeHeader.Description>Apply `go mod tidy` behavior to go.mod: add missing requirements at their resolved versions, remove unused ones, correct the `// indirect` markers, and sort require blocks. Adding and removing require the module graph resolved at parse time, and are no-ops without it. It does not sync go.sum; the `RegenerateGoSum` recipe covers that.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.GoModTidy","displayName":"Tidy go.mod","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

