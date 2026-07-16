---
title: "Change type"
sidebar_label: "Change type"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change type"}
  description={"Change a type reference to another type."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.ChangeType"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.ChangeType"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.ChangeType"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/changetype.md"}
  moderneOnly
>

<RecipeHeader.Title>Change type</RecipeHeader.Title>

<RecipeHeader.Description>Change a type reference to another type.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[]} preconditions={[{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"OldFullyQualifiedTypeName","required":true,"description":"Fully-qualified class name of the original type.","example":"System.Security.Cryptography.AesCryptoServiceProvider"},{"type":"String","name":"NewFullyQualifiedTypeName","required":true,"description":"Fully-qualified class name of the replacement type.","example":"System.Security.Cryptography.Aes"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.ChangeType","displayName":"Change type","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

