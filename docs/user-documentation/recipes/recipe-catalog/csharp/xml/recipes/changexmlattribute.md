---
title: "Change XML attribute value"
sidebar_label: "Change XML attribute value"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change XML attribute value"}
  description={"Changes the value of attributes matching AttrName to NewValue."}
  fqName={"OpenRewrite.Xml.Recipes.ChangeXmlAttribute"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Xml.Recipes.ChangeXmlAttribute"}
  artifact={"OpenRewrite.Recipes.CSharp.Core"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Xml.Recipes.ChangeXmlAttribute"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/xml/recipes/changexmlattribute.md"}
  moderneOnly
>

<RecipeHeader.Title>Change XML attribute value</RecipeHeader.Title>

<RecipeHeader.Description>Changes the value of attributes matching AttrName to NewValue.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"AttrName","required":true,"description":"The attribute name to match"},{"type":"String","name":"NewValue","required":true,"description":"The new attribute value"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"OpenRewrite.Xml.Recipes.ChangeXmlAttribute","displayName":"Change XML attribute value","nugetPackage":"OpenRewrite.Recipes.CSharp.Core"}}>

## Usage

</UsageList>

