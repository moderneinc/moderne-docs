---
title: "Find `SafeEvpPKeyHandle.DuplicateHandle` up-ref change"
sidebar_label: "Find `SafeEvpPKeyHandle.DuplicateHandle` up-ref change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `SafeEvpPKeyHandle.DuplicateHandle` up-ref change"}
  description={"Finds calls to `SafeEvpPKeyHandle.DuplicateHandle()`. In .NET 9, this method now increments the reference count instead of creating a deep copy, which may affect handle lifetime."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindSafeEvpPKeyHandleDuplicate"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","cryptography","net9"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindSafeEvpPKeyHandleDuplicate"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindSafeEvpPKeyHandleDuplicate"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findsafeevppkeyhandleduplicate.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `SafeEvpPKeyHandle.DuplicateHandle` up-ref change</RecipeHeader.Title>

<RecipeHeader.Description>Finds calls to `SafeEvpPKeyHandle.DuplicateHandle()`. In .NET 9, this method now increments the reference count instead of creating a deep copy, which may affect handle lifetime.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindSafeEvpPKeyHandleDuplicate","displayName":"Find `SafeEvpPKeyHandle.DuplicateHandle` up-ref change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

