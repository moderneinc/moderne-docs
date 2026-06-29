---
title: "Prefer canonical len check"
sidebar_label: "Prefer canonical len check"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer canonical len check"}
  description={"Normalize `len(s) >= 1` to `len(s) > 0` and `len(s) < 1` to `len(s) == 0`."}
  fqName={"org.openrewrite.golang.codequality.PreferLenCheck"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferLenCheck"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferLenCheck"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preferlencheck.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer canonical len check</RecipeHeader.Title>

<RecipeHeader.Description>Normalize `len(s) >= 1` to `len(s) > 0` and `len(s) < 1` to `len(s) == 0`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferLenCheck","displayName":"Prefer canonical len check","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

