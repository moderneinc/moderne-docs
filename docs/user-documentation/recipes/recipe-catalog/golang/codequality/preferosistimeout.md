---
title: "Prefer errors.Is for os timeout checks"
sidebar_label: "Prefer errors.Is for os timeout checks"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer errors.Is for os timeout checks"}
  description={"Replace deprecated `os.IsTimeout(err)` with `errors.Is(err, os.ErrDeadlineExceeded)` (Go 1.16+)."}
  fqName={"org.openrewrite.golang.codequality.PreferOsIsTimeout"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferOsIsTimeout"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferOsIsTimeout"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preferosistimeout.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer errors.Is for os timeout checks</RecipeHeader.Title>

<RecipeHeader.Description>Replace deprecated `os.IsTimeout(err)` with `errors.Is(err, os.ErrDeadlineExceeded)` (Go 1.16+).</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferOsIsTimeout","displayName":"Prefer errors.Is for os timeout checks","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

