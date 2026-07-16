---
title: "Find `HttpRuntime.AppDomainAppPath` (exception type change)"
sidebar_label: "Find `HttpRuntime.AppDomainAppPath` (exception type change)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `HttpRuntime.AppDomainAppPath` (exception type change)"}
  description={"HttpRuntime.AppDomainAppPath throws NullReferenceException (instead of ArgumentNullException) for paths with null characters when retargeting to .NET Framework 4.6.2; this reverts to ArgumentNullException at 4.7. Review exception handling."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindHttpRuntimeAppDomainAppPath"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["aspnet","search","dotnet","net-framework"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindHttpRuntimeAppDomainAppPath"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindHttpRuntimeAppDomainAppPath"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findhttpruntimeappdomainapppath.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `HttpRuntime.AppDomainAppPath` (exception type change)</RecipeHeader.Title>

<RecipeHeader.Description>HttpRuntime.AppDomainAppPath throws NullReferenceException (instead of ArgumentNullException) for paths with null characters when retargeting to .NET Framework 4.6.2; this reverts to ArgumentNullException at 4.7. Review exception handling.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindHttpRuntimeAppDomainAppPath","displayName":"Find `HttpRuntime.AppDomainAppPath` (exception type change)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

