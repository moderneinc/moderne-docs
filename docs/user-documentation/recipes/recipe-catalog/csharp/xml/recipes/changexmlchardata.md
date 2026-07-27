---
title: "Change XML CharData text"
sidebar_label: "Change XML CharData text"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change XML CharData text"}
  description={"Replaces occurrences of OldText with NewText in XML CharData nodes."}
  fqName={"OpenRewrite.Xml.Recipes.ChangeXmlCharData"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Xml.Recipes.ChangeXmlCharData"}
  artifact={"OpenRewrite.Recipes.CSharp.Core"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Xml.Recipes.ChangeXmlCharData"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/xml/recipes/changexmlchardata.md"}
  moderneOnly
>

<RecipeHeader.Title>Change XML CharData text</RecipeHeader.Title>

<RecipeHeader.Description>Replaces occurrences of OldText with NewText in XML CharData nodes.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"OldText","required":true,"description":"The text to search for"},{"type":"String","name":"NewText","required":true,"description":"The replacement text"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"OpenRewrite.Xml.Recipes.ChangeXmlCharData","displayName":"Change XML CharData text","nugetPackage":"OpenRewrite.Recipes.CSharp.Core"}}>

## Usage

</UsageList>

