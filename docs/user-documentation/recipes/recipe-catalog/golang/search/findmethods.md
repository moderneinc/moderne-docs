---
title: "Find methods"
sidebar_label: "Find methods"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find methods"}
  description={"Find all method invocations matching a method pattern."}
  fqName={"org.openrewrite.golang.search.FindMethods"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.search.FindMethods"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.search.FindMethods"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/search/findmethods.md"}
  moderneOnly
>

<RecipeHeader.Title>Find methods</RecipeHeader.Title>

<RecipeHeader.Description>Find all method invocations matching a method pattern.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[]} preconditions={[{"name":"Find method usages","href":"/user-documentation/recipes/recipe-catalog/java/search/findmethods/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"methodPattern","required":true,"description":"A method pattern to match method invocations.","example":"fmt.Println(..)"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.golang.search.FindMethods","displayName":"Find methods","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":true,"cliOptions":" --recipe-option \"methodPattern=fmt.Println(..)\""}}>

## Usage

</UsageList>

