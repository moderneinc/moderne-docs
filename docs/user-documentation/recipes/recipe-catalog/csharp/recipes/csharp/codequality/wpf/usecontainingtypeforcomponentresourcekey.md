---
title: "Use the containing type when creating a ComponentResourceKey"
sidebar_label: "Use the containing type when creating a ComponentResourceKey"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use the containing type when creating a ComponentResourceKey"}
  description={"A `ComponentResourceKey` should name the type that declares it as its `typeInTargetAssembly`, because that is what tells WPF which assembly holds the resource. Corrects a mismatched `typeof(...)`, and supplies the containing type and member when the key is created with no arguments at all."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseContainingTypeForComponentResourceKey"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseContainingTypeForComponentResourceKey"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseContainingTypeForComponentResourceKey"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/usecontainingtypeforcomponentresourcekey.md"}
  moderneOnly
>

<RecipeHeader.Title>Use the containing type when creating a ComponentResourceKey</RecipeHeader.Title>

<RecipeHeader.Description>A `ComponentResourceKey` should name the type that declares it as its `typeInTargetAssembly`, because that is what tells WPF which assembly holds the resource. Corrects a mismatched `typeof(...)`, and supplies the containing type and member when the key is created with no arguments at all.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseContainingTypeForComponentResourceKey","displayName":"Use the containing type when creating a ComponentResourceKey","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

