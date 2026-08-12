---
title: "Target of [DependsOn] should exist"
sidebar_label: "Target of [DependsOn] should exist"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Target of [DependsOn] should exist"}
  description={"`[DependsOn(name)]` names its target as a string, so a missing property is only discovered when XAML is loaded — and then only as an ordering that quietly does not happen. Flags the attribute when no property of that name is reachable on the type."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindDependsOnTargetMissing"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindDependsOnTargetMissing"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindDependsOnTargetMissing"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/finddependsontargetmissing.md"}
  moderneOnly
>

<RecipeHeader.Title>Target of [DependsOn] should exist</RecipeHeader.Title>

<RecipeHeader.Description>`[DependsOn(name)]` names its target as a string, so a missing property is only discovered when XAML is loaded — and then only as an ordering that quietly does not happen. Flags the attribute when no property of that name is reachable on the type.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindDependsOnTargetMissing","displayName":"Target of [DependsOn] should exist","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

