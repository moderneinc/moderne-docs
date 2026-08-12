---
title: "XmlnsPrefix must map to the same url as XmlnsDefinition"
sidebar_label: "XmlnsPrefix must map to the same url as XmlnsDefinition"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"XmlnsPrefix must map to the same url as XmlnsDefinition"}
  description={"Flags an `[assembly: XmlnsPrefix]` with no `[assembly: XmlnsDefinition]` for the same XAML namespace URL, and the other way round. The two attributes are correlated across the whole assembly rather than within a single file."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindXmlnsPrefixDefinitionMismatch"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindXmlnsPrefixDefinitionMismatch"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindXmlnsPrefixDefinitionMismatch"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/findxmlnsprefixdefinitionmismatch.md"}
  moderneOnly
>

<RecipeHeader.Title>XmlnsPrefix must map to the same url as XmlnsDefinition</RecipeHeader.Title>

<RecipeHeader.Description>Flags an `[assembly: XmlnsPrefix]` with no `[assembly: XmlnsDefinition]` for the same XAML namespace URL, and the other way round. The two attributes are correlated across the whole assembly rather than within a single file.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindXmlnsPrefixDefinitionMismatch","displayName":"XmlnsPrefix must map to the same url as XmlnsDefinition","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

