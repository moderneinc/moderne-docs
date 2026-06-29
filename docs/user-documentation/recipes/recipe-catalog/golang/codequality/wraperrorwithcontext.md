---
title: "Wrap error with context"
sidebar_label: "Wrap error with context"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Wrap error with context"}
  description={"Replace bare `return err` with `return fmt.Errorf(\"funcName: %%w\", err)` using the enclosing function name as context."}
  fqName={"org.openrewrite.golang.codequality.WrapErrorWithContext"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.WrapErrorWithContext"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.WrapErrorWithContext"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/wraperrorwithcontext.md"}
  moderneOnly
>

<RecipeHeader.Title>Wrap error with context</RecipeHeader.Title>

<RecipeHeader.Description>Replace bare `return err` with `return fmt.Errorf("funcName: %%w", err)` using the enclosing function name as context.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.WrapErrorWithContext","displayName":"Wrap error with context","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

