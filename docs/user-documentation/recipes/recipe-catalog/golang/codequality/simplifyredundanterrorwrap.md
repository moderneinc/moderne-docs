---
title: "Simplify redundant error wrap"
sidebar_label: "Simplify redundant error wrap"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify redundant error wrap"}
  description={"Replace `fmt.Errorf(\"%w\", err)` with `err` when wrapping adds no context."}
  fqName={"org.openrewrite.golang.codequality.SimplifyRedundantErrorWrap"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.SimplifyRedundantErrorWrap"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.SimplifyRedundantErrorWrap"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/simplifyredundanterrorwrap.md"}
  moderneOnly
>

<RecipeHeader.Title>Simplify redundant error wrap</RecipeHeader.Title>

<RecipeHeader.Description>Replace `fmt.Errorf("%w", err)` with `err` when wrapping adds no context.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.SimplifyRedundantErrorWrap","displayName":"Simplify redundant error wrap","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

