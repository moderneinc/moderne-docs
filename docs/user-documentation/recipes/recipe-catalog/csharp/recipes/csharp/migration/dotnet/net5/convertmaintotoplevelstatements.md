---
title: "Convert `static Main` entry point to top-level statements"
sidebar_label: "Convert `static Main` entry point to top-level statements"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Convert `static Main` entry point to top-level statements"}
  description={"Converts a `class Program { static Main(...) { ... } }` entry point to C# 9 top-level statements: the body of `Main` is lifted to the file level and the `Program` class and any enclosing namespace are removed. Scoped to the unambiguous single-type/single-`Main` case."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net5.ConvertMainToTopLevelStatements"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","migration","top-level-statements"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net5.ConvertMainToTopLevelStatements"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net5.ConvertMainToTopLevelStatements"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net5/convertmaintotoplevelstatements.md"}
  moderneOnly
>

<RecipeHeader.Title>Convert `static Main` entry point to top-level statements</RecipeHeader.Title>

<RecipeHeader.Description>Converts a `class Program { static Main(...) { ... } }` entry point to C# 9 top-level statements: the body of `Main` is lifted to the file level and the `Program` class and any enclosing namespace are removed. Scoped to the unambiguous single-type/single-`Main` case.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net5.ConvertMainToTopLevelStatements","displayName":"Convert `static Main` entry point to top-level statements","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

