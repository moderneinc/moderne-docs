---
title: "Simplify nil check before Close"
sidebar_label: "Simplify nil check before Close"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify nil check before Close"}
  description={"Replace `if x != nil { x.Close() }` with `x.Close()` where the nil check is redundant."}
  fqName={"org.openrewrite.golang.codequality.SimplifyNilCheckBeforeClose"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.SimplifyNilCheckBeforeClose"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.SimplifyNilCheckBeforeClose"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/simplifynilcheckbeforeclose.md"}
  moderneOnly
>

<RecipeHeader.Title>Simplify nil check before Close</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if x != nil { x.Close() }` with `x.Close()` where the nil check is redundant.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.SimplifyNilCheckBeforeClose","displayName":"Simplify nil check before Close","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

