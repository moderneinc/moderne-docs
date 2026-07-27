---
title: "Change method name"
sidebar_label: "Change method name"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change method name"}
  description={"Rename method invocations matching a method pattern."}
  fqName={"org.openrewrite.golang.ChangeMethodName"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.ChangeMethodName"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.ChangeMethodName"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/changemethodname.md"}
  moderneOnly
>

<RecipeHeader.Title>Change method name</RecipeHeader.Title>

<RecipeHeader.Description>Rename method invocations matching a method pattern.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[]} preconditions={[{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"methodPattern","required":true,"description":"A method pattern to match method invocations.","example":"fmt.Println(..)"},{"type":"String","name":"newMethodName","required":true,"description":"The new name for the method.","example":"Printf"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.golang.ChangeMethodName","displayName":"Change method name","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":true,"cliOptions":" --recipe-option \"methodPattern=fmt.Println(..)\" --recipe-option \"newMethodName=Printf\""}}>

## Usage

</UsageList>

