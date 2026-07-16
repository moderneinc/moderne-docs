---
title: "Find WPF `Grid` usage (star-column allocation change)"
sidebar_label: "Find WPF `Grid` usage (star-column allocation change)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find WPF `Grid` usage (star-column allocation change)"}
  description={"The WPF Grid star-column space allocation algorithm was replaced when retargeting to .NET Framework 4.7 (Switch.System.Windows.Controls.Grid.StarDefinitionsCanExceedAvailableSpace=true restores the old algorithm). Review layouts that depend on the previous star-sizing behavior."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindWpfGridStarAllocation"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","net-framework","wpf"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindWpfGridStarAllocation"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindWpfGridStarAllocation"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findwpfgridstarallocation.md"}
  moderneOnly
>

<RecipeHeader.Title>Find WPF `Grid` usage (star-column allocation change)</RecipeHeader.Title>

<RecipeHeader.Description>The WPF Grid star-column space allocation algorithm was replaced when retargeting to .NET Framework 4.7 (Switch.System.Windows.Controls.Grid.StarDefinitionsCanExceedAvailableSpace=true restores the old algorithm). Review layouts that depend on the previous star-sizing behavior.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindWpfGridStarAllocation","displayName":"Find WPF `Grid` usage (star-column allocation change)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

