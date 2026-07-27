---
title: "Find legacy serialization constructors (SYSLIB0051)"
sidebar_label: "Find legacy serialization constructors (SYSLIB0051)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find legacy serialization constructors (SYSLIB0051)"}
  description={"Finds legacy serialization constructors `.ctor(SerializationInfo, StreamingContext)` which are obsolete in .NET 8 (SYSLIB0051). The `ISerializable` pattern is no longer recommended."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.FindSerializationConstructors"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["serialization","search","dotnet","net8"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.FindSerializationConstructors"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.FindSerializationConstructors"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/findserializationconstructors.md"}
  moderneOnly
>

<RecipeHeader.Title>Find legacy serialization constructors (SYSLIB0051)</RecipeHeader.Title>

<RecipeHeader.Description>Finds legacy serialization constructors `.ctor(SerializationInfo, StreamingContext)` which are obsolete in .NET 8 (SYSLIB0051). The `ISerializable` pattern is no longer recommended.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.FindSerializationConstructors","displayName":"Find legacy serialization constructors (SYSLIB0051)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

