---
title: "Delete method argument"
sidebar_label: "Delete method argument"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Delete method argument"}
  description={"Delete an argument from method invocations."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.DeleteMethodArgument"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.DeleteMethodArgument"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.DeleteMethodArgument"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/deletemethodargument.md"}
  moderneOnly
>

<RecipeHeader.Title>Delete method argument</RecipeHeader.Title>

<RecipeHeader.Description>Delete an argument from method invocations.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[]} preconditions={[{"name":"Delete method argument","href":"/user-documentation/recipes/recipe-catalog/java/deletemethodargument/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"MethodPattern","required":true,"description":"A method pattern used to find matching method invocations.","example":"System.Security.Cryptography.Aes Create(System.String)"},{"type":"Int32","name":"ArgumentIndex","required":true,"description":"The zero-based index of the argument to remove.","example":"0"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.DeleteMethodArgument","displayName":"Delete method argument","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

