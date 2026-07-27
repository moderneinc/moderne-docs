---
title: "Prefer filepath.Clean over redundant filepath.Join"
sidebar_label: "Prefer filepath.Clean over redundant filepath.Join"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer filepath.Clean over redundant filepath.Join"}
  description={"Replace `filepath.Join(filepath.Clean(p))` with `filepath.Clean(p)` since Join with a single already-cleaned argument is redundant."}
  fqName={"org.openrewrite.golang.codequality.PreferFilepathClean"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferFilepathClean"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferFilepathClean"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preferfilepathclean.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer filepath.Clean over redundant filepath.Join</RecipeHeader.Title>

<RecipeHeader.Description>Replace `filepath.Join(filepath.Clean(p))` with `filepath.Clean(p)` since Join with a single already-cleaned argument is redundant.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferFilepathClean","displayName":"Prefer filepath.Clean over redundant filepath.Join","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

