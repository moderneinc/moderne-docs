---
title: "Simplify redundant len check before range"
sidebar_label: "Simplify redundant len check before range"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify redundant len check before range"}
  description={"Remove `if len(s) > 0 { for ... range s }` where the len check is redundant because range over nil/empty produces zero iterations."}
  fqName={"org.openrewrite.golang.codequality.SimplifyRedundantLenBeforeRange"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.SimplifyRedundantLenBeforeRange"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.SimplifyRedundantLenBeforeRange"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/simplifyredundantlenbeforerange.md"}
  moderneOnly
>

<RecipeHeader.Title>Simplify redundant len check before range</RecipeHeader.Title>

<RecipeHeader.Description>Remove `if len(s) > 0 { for ... range s }` where the len check is redundant because range over nil/empty produces zero iterations.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.SimplifyRedundantLenBeforeRange","displayName":"Simplify redundant len check before range","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

