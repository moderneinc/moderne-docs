---
title: "Find `XmlWriter` invalid-surrogate-pair change"
sidebar_label: "Find `XmlWriter` invalid-surrogate-pair change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `XmlWriter` invalid-surrogate-pair change"}
  description={"Finds `XmlWriter` usage. The `Write*` methods throw `ArgumentException` on invalid surrogate pairs when retargeting to .NET Framework 4.6 (previously they were written through). Review XmlWriter usage that may emit lone surrogates."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindXmlWriterInvalidSurrogate"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","net-framework","xml"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindXmlWriterInvalidSurrogate"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindXmlWriterInvalidSurrogate"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findxmlwriterinvalidsurrogate.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `XmlWriter` invalid-surrogate-pair change</RecipeHeader.Title>

<RecipeHeader.Description>Finds `XmlWriter` usage. The `Write*` methods throw `ArgumentException` on invalid surrogate pairs when retargeting to .NET Framework 4.6 (previously they were written through). Review XmlWriter usage that may emit lone surrogates.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindXmlWriterInvalidSurrogate","displayName":"Find `XmlWriter` invalid-surrogate-pair change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

