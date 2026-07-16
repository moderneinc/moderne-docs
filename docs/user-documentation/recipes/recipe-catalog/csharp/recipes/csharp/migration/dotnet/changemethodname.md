---
title: "Change method name"
sidebar_label: "Change method name"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change method name"}
  description={"Rename a method."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.ChangeMethodName"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.ChangeMethodName"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.ChangeMethodName"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changemethodname.md"}
  moderneOnly
>

<RecipeHeader.Title>Change method name</RecipeHeader.Title>

<RecipeHeader.Description>Rename a method.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[]} preconditions={[{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"MethodPattern","required":true,"description":"A method pattern used to find matching method invocations.","example":"System.Uri EscapeUriString(System.String)"},{"type":"String","name":"NewMethodName","required":true,"description":"The method name that will replace the existing name.","example":"EscapeDataString"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.ChangeMethodName","displayName":"Change method name","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

