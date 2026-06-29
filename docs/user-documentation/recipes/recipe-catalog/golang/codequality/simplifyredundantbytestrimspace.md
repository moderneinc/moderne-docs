---
title: "Simplify redundant bytes.TrimSpace"
sidebar_label: "Simplify redundant bytes.TrimSpace"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify redundant bytes.TrimSpace"}
  description={"Replace `bytes.TrimSpace(bytes.TrimSpace(b))` with `bytes.TrimSpace(b)` since TrimSpace is idempotent."}
  fqName={"org.openrewrite.golang.codequality.SimplifyRedundantBytesTrimSpace"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.SimplifyRedundantBytesTrimSpace"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.SimplifyRedundantBytesTrimSpace"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/simplifyredundantbytestrimspace.md"}
  moderneOnly
>

<RecipeHeader.Title>Simplify redundant bytes.TrimSpace</RecipeHeader.Title>

<RecipeHeader.Description>Replace `bytes.TrimSpace(bytes.TrimSpace(b))` with `bytes.TrimSpace(b)` since TrimSpace is idempotent.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.SimplifyRedundantBytesTrimSpace","displayName":"Simplify redundant bytes.TrimSpace","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

