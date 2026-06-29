---
title: "Handle swallowed error"
sidebar_label: "Handle swallowed error"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Handle swallowed error"}
  description={"Replace `if err != nil { return }` with `if err != nil { return err }` so the error is propagated."}
  fqName={"org.openrewrite.golang.codequality.HandleSwallowedError"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.HandleSwallowedError"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.HandleSwallowedError"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/handleswallowederror.md"}
  moderneOnly
>

<RecipeHeader.Title>Handle swallowed error</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if err != nil { return }` with `if err != nil { return err }` so the error is propagated.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.HandleSwallowedError","displayName":"Handle swallowed error","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

