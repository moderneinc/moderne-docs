---
title: "Use OperatingSystem methods instead of RuntimeInformation"
sidebar_label: "Use OperatingSystem methods instead of RuntimeInformation"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use OperatingSystem methods instead of RuntimeInformation"}
  description={"Use `OperatingSystem.IsWindows()` and similar methods instead of `RuntimeInformation.IsOSPlatform()`. The OperatingSystem methods are more concise and can be optimized by the JIT."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseOperatingSystemMethods"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Use OperatingSystem methods instead of RuntimeInformation"}
  description={"Use `OperatingSystem.IsWindows()` and similar methods instead of `RuntimeInformation.IsOSPlatform()`. The OperatingSystem methods are more concise and can be optimized by the JIT."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseOperatingSystemMethods"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseOperatingSystemMethods"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduseoperatingsystemmethods.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseOperatingSystemMethods","displayName":"Use OperatingSystem methods instead of RuntimeInformation","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

