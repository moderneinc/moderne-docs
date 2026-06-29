---
title: "Prefer regexp.MustCompile for unchecked patterns"
sidebar_label: "Prefer regexp.MustCompile for unchecked patterns"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer regexp.MustCompile for unchecked patterns"}
  description={"Collapse `x, err := regexp.Compile(p)` followed by an `if err != nil` guard into `x := regexp.MustCompile(p)`."}
  fqName={"org.openrewrite.golang.codequality.PreferRegexpMustCompile"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferRegexpMustCompile"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferRegexpMustCompile"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preferregexpmustcompile.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer regexp.MustCompile for unchecked patterns</RecipeHeader.Title>

<RecipeHeader.Description>Collapse `x, err := regexp.Compile(p)` followed by an `if err != nil` guard into `x := regexp.MustCompile(p)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferRegexpMustCompile","displayName":"Prefer regexp.MustCompile for unchecked patterns","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

