---
title: "XmlnsDefinitions should map all namespaces with public types"
sidebar_label: "XmlnsDefinitions should map all namespaces with public types"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"XmlnsDefinitions should map all namespaces with public types"}
  description={"Adds an `[assembly: XmlnsDefinition]` for every namespace that declares a public type but is not exported to XAML, copying the XAML namespace URL from the existing mappings."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.AddXmlnsDefinitionForUnmappedNamespaces"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.AddXmlnsDefinitionForUnmappedNamespaces"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.AddXmlnsDefinitionForUnmappedNamespaces"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/addxmlnsdefinitionforunmappednamespaces.md"}
  moderneOnly
>

<RecipeHeader.Title>XmlnsDefinitions should map all namespaces with public types</RecipeHeader.Title>

<RecipeHeader.Description>Adds an `[assembly: XmlnsDefinition]` for every namespace that declares a public type but is not exported to XAML, copying the XAML namespace URL from the existing mappings.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.AddXmlnsDefinitionForUnmappedNamespaces","displayName":"XmlnsDefinitions should map all namespaces with public types","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

