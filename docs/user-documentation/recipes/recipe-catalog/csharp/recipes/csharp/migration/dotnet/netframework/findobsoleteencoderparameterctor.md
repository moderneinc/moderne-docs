---
title: "Find obsolete 5-argument `EncoderParameter` constructor"
sidebar_label: "Find obsolete 5-argument `EncoderParameter` constructor"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find obsolete 5-argument `EncoderParameter` constructor"}
  description={"Finds uses of the obsolete `EncoderParameter(Encoder, int, int, int, int)` constructor (obsolete as of .NET Framework 4.5). Use the `EncoderParameter(Encoder, int, EncoderParameterValueType, IntPtr)` overload instead."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindObsoleteEncoderParameterCtor"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","net-framework","drawing"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindObsoleteEncoderParameterCtor"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindObsoleteEncoderParameterCtor"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findobsoleteencoderparameterctor.md"}
  moderneOnly
>

<RecipeHeader.Title>Find obsolete 5-argument `EncoderParameter` constructor</RecipeHeader.Title>

<RecipeHeader.Description>Finds uses of the obsolete `EncoderParameter(Encoder, int, int, int, int)` constructor (obsolete as of .NET Framework 4.5). Use the `EncoderParameter(Encoder, int, EncoderParameterValueType, IntPtr)` overload instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindObsoleteEncoderParameterCtor","displayName":"Find obsolete 5-argument `EncoderParameter` constructor","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

