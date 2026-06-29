---
title: "Use package-level error sentinel"
sidebar_label: "Use package-level error sentinel"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use package-level error sentinel"}
  description={"Move inline `errors.New(\"...\")` calls to package-level sentinel variables so they can be compared with `errors.Is`."}
  fqName={"org.openrewrite.golang.codequality.UsePackageLevelErrorSentinel"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.UsePackageLevelErrorSentinel"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.UsePackageLevelErrorSentinel"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/usepackagelevelerrorsentinel.md"}
  moderneOnly
>

<RecipeHeader.Title>Use package-level error sentinel</RecipeHeader.Title>

<RecipeHeader.Description>Move inline `errors.New("...")` calls to package-level sentinel variables so they can be compared with `errors.Is`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.UsePackageLevelErrorSentinel","displayName":"Use package-level error sentinel","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

