---
title: "XmlnsDefinition must map to an existing namespace"
sidebar_label: "XmlnsDefinition must map to an existing namespace"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"XmlnsDefinition must map to an existing namespace"}
  description={"Flags an `[assembly: XmlnsDefinition]` whose `clrNamespace` argument names a namespace that no source file declares, so the mapping exports nothing."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindXmlnsDefinitionForMissingNamespace"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindXmlnsDefinitionForMissingNamespace"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindXmlnsDefinitionForMissingNamespace"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/findxmlnsdefinitionformissingnamespace.md"}
  moderneOnly
>

<RecipeHeader.Title>XmlnsDefinition must map to an existing namespace</RecipeHeader.Title>

<RecipeHeader.Description>Flags an `[assembly: XmlnsDefinition]` whose `clrNamespace` argument names a namespace that no source file declares, so the mapping exports nothing.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindXmlnsDefinitionForMissingNamespace","displayName":"XmlnsDefinition must map to an existing namespace","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

