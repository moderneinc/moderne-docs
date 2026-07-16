---
title: "Add NuGet package reference when namespace is used"
sidebar_label: "Add NuGet package reference when namespace is used"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add NuGet package reference when namespace is used"}
  description={"Adds a `<PackageReference>` to a .csproj only when a C# source file in the same project directory has a `using` directive that starts with the trigger namespace prefix. Useful for paired add-package-when-type-is-used migrations."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.AddNuGetPackageReferenceIfTypeUsed"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","csproj"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.AddNuGetPackageReferenceIfTypeUsed"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.AddNuGetPackageReferenceIfTypeUsed"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/addnugetpackagereferenceiftypeused.md"}
  moderneOnly
>

<RecipeHeader.Title>Add NuGet package reference when namespace is used</RecipeHeader.Title>

<RecipeHeader.Description>Adds a `<PackageReference>` to a .csproj only when a C# source file in the same project directory has a `using` directive that starts with the trigger namespace prefix. Useful for paired add-package-when-type-is-used migrations.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"PackageName","required":true,"description":"The NuGet package name to add.","example":"Newtonsoft.Json"},{"type":"String","name":"Version","required":false,"description":"The package version to add. If omitted, no Version attribute is set.","example":"13.0.3"},{"type":"String","name":"TriggerNamespacePrefix","required":false,"description":"The package is added if any C# source file in the same project directory has a `using` directive whose namespace starts with this prefix.","example":"Newtonsoft.Json"},{"type":"String","name":"TriggerTypeFqn","required":false,"description":"The package is added if any C# source file in the same project directory has a fully-qualified reference to this type. Useful for types that live in a namespace that's already in scope via existing usings (so the using directive doesn't change).","example":"Microsoft.AspNetCore.Mvc.MvcNewtonsoftJsonOptions"},{"type":"Boolean","name":"RegenerateMarker","required":false,"description":"Whether to re-run `dotnet restore` after the edit to refresh the project's MSBuildProject marker. Defaults to `true`. Composite recipes that chain multiple csproj-mutating steps may set this to `false` on intermediate steps and finalize once with `EnsureCsprojAttestation`."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.AddNuGetPackageReferenceIfTypeUsed","displayName":"Add NuGet package reference when namespace is used","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

