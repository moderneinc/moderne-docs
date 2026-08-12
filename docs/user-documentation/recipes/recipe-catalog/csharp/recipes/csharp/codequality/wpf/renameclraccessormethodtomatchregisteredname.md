---
title: "CLR method for a DependencyProperty must match registered name"
sidebar_label: "CLR method for a DependencyProperty must match registered name"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"CLR method for a DependencyProperty must match registered name"}
  description={"The static accessor methods for an attached property must be named `Get<RegisteredName>` and `Set<RegisteredName>`, which is how the XAML designer pairs them with the registration. Renames the methods and all calls to them."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RenameClrAccessorMethodToMatchRegisteredName"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RenameClrAccessorMethodToMatchRegisteredName"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RenameClrAccessorMethodToMatchRegisteredName"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/renameclraccessormethodtomatchregisteredname.md"}
  moderneOnly
>

<RecipeHeader.Title>CLR method for a DependencyProperty must match registered name</RecipeHeader.Title>

<RecipeHeader.Description>The static accessor methods for an attached property must be named `Get<RegisteredName>` and `Set<RegisteredName>`, which is how the XAML designer pairs them with the registration. Renames the methods and all calls to them.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RenameClrAccessorMethodToMatchRegisteredName","displayName":"CLR method for a DependencyProperty must match registered name","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

