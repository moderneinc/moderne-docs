---
title: "Find ASP.NET Web Forms usage"
sidebar_label: "Find ASP.NET Web Forms usage"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find ASP.NET Web Forms usage"}
  description={"Finds projects that use ASP.NET Web Forms. Detects attested `System.Web.UI.*` usage in C# code-behind, `.aspx`/`.ascx`/`.asax`/`.master` files referenced from the `.csproj`, and ASP.NET web-application signals (`System.Web` reference, `Microsoft.WebApplication.targets` import, web `ProjectTypeGuids`, `UseIISExpress`/`MvcBuildViews`)."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.FindWebForms"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["aspnet","search","dotnet","framework","webforms","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.FindWebForms"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.FindWebForms"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework48/findwebforms.md"}
  moderneOnly
>

<RecipeHeader.Title>Find ASP.NET Web Forms usage</RecipeHeader.Title>

<RecipeHeader.Description>Finds projects that use ASP.NET Web Forms. Detects attested `System.Web.UI.*` usage in C# code-behind, `.aspx`/`.ascx`/`.asax`/`.master` files referenced from the `.csproj`, and ASP.NET web-application signals (`System.Web` reference, `Microsoft.WebApplication.targets` import, web `ProjectTypeGuids`, `UseIISExpress`/`MvcBuildViews`).</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.FindWebForms","displayName":"Find ASP.NET Web Forms usage","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

