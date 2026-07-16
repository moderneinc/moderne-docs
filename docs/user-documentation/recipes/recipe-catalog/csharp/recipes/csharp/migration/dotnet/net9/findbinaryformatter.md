---
title: "Find `BinaryFormatter` usage (removed in .NET 9)"
sidebar_label: "Find `BinaryFormatter` usage (removed in .NET 9)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `BinaryFormatter` usage (removed in .NET 9)"}
  description={"Finds usages of `BinaryFormatter` which always throws `NotSupportedException` in .NET 9. Migrate to a different serializer such as `System.Text.Json`, `XmlSerializer`, or `DataContractSerializer`."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindBinaryFormatter"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["serialization","search","dotnet","net9"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindBinaryFormatter"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindBinaryFormatter"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findbinaryformatter.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `BinaryFormatter` usage (removed in .NET 9)</RecipeHeader.Title>

<RecipeHeader.Description>Finds usages of `BinaryFormatter` which always throws `NotSupportedException` in .NET 9. Migrate to a different serializer such as `System.Text.Json`, `XmlSerializer`, or `DataContractSerializer`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindBinaryFormatter","displayName":"Find `BinaryFormatter` usage (removed in .NET 9)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

