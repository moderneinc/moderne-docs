---
title: "Find `DistributedContextPropagator` default propagator change"
sidebar_label: "Find `DistributedContextPropagator` default propagator change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `DistributedContextPropagator` default propagator change"}
  description={"Finds usages of `DistributedContextPropagator.Current` and `DistributedContextPropagator.CreateDefaultPropagator()` which now default to W3C format in .NET 10. The 'baggage' header is used instead of 'Correlation-Context'."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindDistributedContextPropagator"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["net10","diagnostics","search","dotnet"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindDistributedContextPropagator"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindDistributedContextPropagator"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net10/finddistributedcontextpropagator.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `DistributedContextPropagator` default propagator change</RecipeHeader.Title>

<RecipeHeader.Description>Finds usages of `DistributedContextPropagator.Current` and `DistributedContextPropagator.CreateDefaultPropagator()` which now default to W3C format in .NET 10. The 'baggage' header is used instead of 'Correlation-Context'.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindDistributedContextPropagator","displayName":"Find `DistributedContextPropagator` default propagator change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

