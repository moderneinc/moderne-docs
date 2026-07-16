---
title: "Convert classic csproj to SDK-style (net48)"
sidebar_label: "Convert classic csproj to SDK-style (net48)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Convert classic csproj to SDK-style (net48)"}
  description={"Rewrites a non-SDK .NET Framework 4.8 .csproj into SDK-style form: sets `Sdk=\"Microsoft.NET.Sdk\"`, removes the legacy MSBuild boilerplate (`<Import>`s, default `<Compile>` items, configuration-conditional `<PropertyGroup>` blocks, SDK-managed properties), and replaces `<TargetFrameworkVersion>v4.8</TargetFrameworkVersion>` with `<TargetFramework>net48</TargetFramework>`."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.ConvertClassicCsprojToSdk"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","csproj","net48","sdk-style"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.ConvertClassicCsprojToSdk"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.ConvertClassicCsprojToSdk"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework48/convertclassiccsprojtosdk.md"}
  moderneOnly
>

<RecipeHeader.Title>Convert classic csproj to SDK-style (net48)</RecipeHeader.Title>

<RecipeHeader.Description>Rewrites a non-SDK .NET Framework 4.8 .csproj into SDK-style form: sets `Sdk="Microsoft.NET.Sdk"`, removes the legacy MSBuild boilerplate (`<Import>`s, default `<Compile>` items, configuration-conditional `<PropertyGroup>` blocks, SDK-managed properties), and replaces `<TargetFrameworkVersion>v4.8</TargetFrameworkVersion>` with `<TargetFramework>net48</TargetFramework>`.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"SystemWebSdkVersion","required":false,"description":"Version of the `MSBuild.SDK.SystemWeb` SDK to pin in the `Sdk` attribute of ASP.NET web projects. Defaults to a recent stable release.","example":"4.0.110"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.ConvertClassicCsprojToSdk","displayName":"Convert classic csproj to SDK-style (net48)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

