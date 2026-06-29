---
title: "Change type"
sidebar_label: "Change type"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change type"}
  description={"Change a Go type reference from one fully qualified name to another."}
  fqName={"org.openrewrite.golang.ChangeType"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.ChangeType"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.ChangeType"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/changetype.md"}
  moderneOnly
>

<RecipeHeader.Title>Change type</RecipeHeader.Title>

<RecipeHeader.Description>Change a Go type reference from one fully qualified name to another.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[]} preconditions={[{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"oldFullyQualifiedTypeName","required":true,"description":"The fully qualified Go type name to replace.","example":"github.com/old/pkg.MyType"},{"type":"String","name":"newFullyQualifiedTypeName","required":true,"description":"The fully qualified Go type name to use instead.","example":"github.com/new/pkg.MyType"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.golang.ChangeType","displayName":"Change type","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":true,"cliOptions":" --recipe-option \"oldFullyQualifiedTypeName=github.com/old/pkg.MyType\" --recipe-option \"newFullyQualifiedTypeName=github.com/new/pkg.MyType\""}}>

## Usage

</UsageList>

