---
title: "Find `Icon.ToBitmap` usage (PNG-frame behavior change)"
sidebar_label: "Find `Icon.ToBitmap` usage (PNG-frame behavior change)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `Icon.ToBitmap` usage (PNG-frame behavior change)"}
  description={"Icon.ToBitmap succeeds on icons containing PNG frames when retargeting to .NET Framework 4.6 (previously threw ArgumentOutOfRangeException; Switch.System.Drawing.DontSupportPngFramesInIcons to restore throwing). Review Icon.ToBitmap usage."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindIconToBitmapPngFrames"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","net-framework","drawing"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindIconToBitmapPngFrames"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindIconToBitmapPngFrames"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findicontobitmappngframes.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `Icon.ToBitmap` usage (PNG-frame behavior change)</RecipeHeader.Title>

<RecipeHeader.Description>Icon.ToBitmap succeeds on icons containing PNG frames when retargeting to .NET Framework 4.6 (previously threw ArgumentOutOfRangeException; Switch.System.Drawing.DontSupportPngFramesInIcons to restore throwing). Review Icon.ToBitmap usage.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindIconToBitmapPngFrames","displayName":"Find `Icon.ToBitmap` usage (PNG-frame behavior change)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

