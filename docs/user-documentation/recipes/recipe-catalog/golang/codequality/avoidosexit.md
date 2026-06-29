---
title: "Avoid os.Exit"
sidebar_label: "Avoid os.Exit"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Avoid os.Exit"}
  description={"Remove `os.Exit(0)` calls and flag non-zero `os.Exit(n)` which bypass deferred functions and cleanup."}
  fqName={"org.openrewrite.golang.codequality.AvoidOsExit"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.AvoidOsExit"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.AvoidOsExit"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/avoidosexit.md"}
  moderneOnly
>

<RecipeHeader.Title>Avoid os.Exit</RecipeHeader.Title>

<RecipeHeader.Description>Remove `os.Exit(0)` calls and flag non-zero `os.Exit(n)` which bypass deferred functions and cleanup.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.AvoidOsExit","displayName":"Avoid os.Exit","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

