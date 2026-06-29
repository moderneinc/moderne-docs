---
title: "Wrap error before return"
sidebar_label: "Wrap error before return"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Wrap error before return"}
  description={"Replace `return nil, err` with `return nil, fmt.Errorf(\"funcName: %%w\", err)` using the enclosing function name as context."}
  fqName={"org.openrewrite.golang.codequality.WrapErrorBeforeReturn"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.WrapErrorBeforeReturn"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.WrapErrorBeforeReturn"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/wraperrorbeforereturn.md"}
  moderneOnly
>

<RecipeHeader.Title>Wrap error before return</RecipeHeader.Title>

<RecipeHeader.Description>Replace `return nil, err` with `return nil, fmt.Errorf("funcName: %%w", err)` using the enclosing function name as context.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.WrapErrorBeforeReturn","displayName":"Wrap error before return","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

