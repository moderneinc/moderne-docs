---
title: "Remove `.njsproj` projects from solution"
sidebar_label: "Remove `.njsproj` projects from solution"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove `.njsproj` projects from solution"}
  description={"Removes Project entries with the `.njsproj` extension (Node.js Tools projects) from Visual Studio Solution (.sln/.slnx) files. Node.js Tools projects can't be built by `dotnet build` and break dotnet-CLI-driven build pipelines."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.RemoveNjsprojFromSolution"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.RemoveNjsprojFromSolution"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.RemoveNjsprojFromSolution"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/removenjsprojfromsolution.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove `.njsproj` projects from solution</RecipeHeader.Title>

<RecipeHeader.Description>Removes Project entries with the `.njsproj` extension (Node.js Tools projects) from Visual Studio Solution (.sln/.slnx) files. Node.js Tools projects can't be built by `dotnet build` and break dotnet-CLI-driven build pipelines.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[]} preconditions={[{"name":"Remove `.njsproj` projects from solution","href":"/user-documentation/recipes/recipe-catalog/csharp/sln/removenjsprojfromsolution/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.RemoveNjsprojFromSolution","displayName":"Remove `.njsproj` projects from solution","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

