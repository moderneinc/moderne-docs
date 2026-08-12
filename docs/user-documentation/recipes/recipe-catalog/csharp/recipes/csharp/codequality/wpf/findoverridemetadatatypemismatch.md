---
title: "Metadata must be of the same type or a super type"
sidebar_label: "Metadata must be of the same type or a super type"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Metadata must be of the same type or a super type"}
  description={"`OverrideMetadata` merges the new metadata into what the `DependencyProperty` was registered with, and throws when the override cannot represent it. Flags an override whose metadata type is not assignable to the registered metadata type."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindOverrideMetadataTypeMismatch"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindOverrideMetadataTypeMismatch"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindOverrideMetadataTypeMismatch"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/findoverridemetadatatypemismatch.md"}
  moderneOnly
>

<RecipeHeader.Title>Metadata must be of the same type or a super type</RecipeHeader.Title>

<RecipeHeader.Description>`OverrideMetadata` merges the new metadata into what the `DependencyProperty` was registered with, and throws when the override cannot represent it. Flags an override whose metadata type is not assignable to the registered metadata type.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindOverrideMetadataTypeMismatch","displayName":"Metadata must be of the same type or a super type","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

