---
title: "Find types"
sidebar_label: "Find types"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find types"}
  description={"Find all references to a given type."}
  fqName={"org.openrewrite.golang.search.FindTypes"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.search.FindTypes"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.search.FindTypes"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/search/findtypes.md"}
  moderneOnly
>

<RecipeHeader.Title>Find types</RecipeHeader.Title>

<RecipeHeader.Description>Find all references to a given type.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[]} preconditions={[{"name":"Find types","href":"/user-documentation/recipes/recipe-catalog/java/search/findtypes/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"fullyQualifiedTypeName","required":true,"description":"The fully qualified type name to search for.","example":"fmt.Stringer"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.golang.search.FindTypes","displayName":"Find types","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":true,"cliOptions":" --recipe-option \"fullyQualifiedTypeName=fmt.Stringer\""}}>

## Usage

</UsageList>

