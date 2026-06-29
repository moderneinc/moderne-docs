---
title: "Remove duplicate conditions"
sidebar_label: "Remove duplicate conditions"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove duplicate conditions"}
  description={"Remove else-if branches whose condition duplicates an earlier branch in the same if/else-if chain, since the later branch is dead code."}
  fqName={"org.openrewrite.golang.codequality.RemoveDuplicateConditions"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.RemoveDuplicateConditions"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.RemoveDuplicateConditions"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/removeduplicateconditions.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove duplicate conditions</RecipeHeader.Title>

<RecipeHeader.Description>Remove else-if branches whose condition duplicates an earlier branch in the same if/else-if chain, since the later branch is dead code.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.RemoveDuplicateConditions","displayName":"Remove duplicate conditions","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

