---
title: "List .NET dependencies (SBOM)"
sidebar_label: "List .NET dependencies (SBOM)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"List .NET dependencies (SBOM)"}
  description={"Records every dependency of each .NET project — NuGet packages, assembly references, and project references — into the `Dependencies in use` data table, forming a Software Bill of Materials. Reports the resolved dependency graph when the `MSBuildProject` marker is available and falls back to the raw `.csproj` XML otherwise, so it works for both .NET (Core) and .NET Framework projects."}
  fqName={"OpenRewrite.CSharp.Recipes.ListDependencies"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","csproj","sbom","dependencies"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.CSharp.Recipes.ListDependencies"}
  artifact={"OpenRewrite.Recipes.CSharp.Core"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.CSharp.Recipes.ListDependencies"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/listdependencies.md"}
  moderneOnly
>

<RecipeHeader.Title>List .NET dependencies (SBOM)</RecipeHeader.Title>

<RecipeHeader.Description>Records every dependency of each .NET project — NuGet packages, assembly references, and project references — into the `Dependencies in use` data table, forming a Software Bill of Materials. Reports the resolved dependency graph when the `MSBuildProject` marker is available and falls back to the raw `.csproj` XML otherwise, so it works for both .NET (Core) and .NET Framework projects.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.CSharp.Recipes.ListDependencies","displayName":"List .NET dependencies (SBOM)","nugetPackage":"OpenRewrite.Recipes.CSharp.Core"}}>

## Usage

</UsageList>

