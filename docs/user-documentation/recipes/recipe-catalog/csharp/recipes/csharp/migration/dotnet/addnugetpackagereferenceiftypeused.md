---
sidebar_label: "Add NuGet package reference when namespace is used"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add NuGet package reference when namespace is used

**OpenRewrite.Recipes.CSharp.Migration.Dotnet.AddNuGetPackageReferenceIfTypeUsed**

_Adds a `<PackageReference>` to a .csproj only when a C# source file in the same project directory has a `using` directive that starts with the trigger namespace prefix. Useful for paired add-package-when-type-is-used migrations._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [csproj](/user-documentation/recipes/lists/recipes-by-tag#csproj)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | PackageName | The NuGet package name to add. | `Newtonsoft.Json` |
| `String` | Version | *Optional*. The package version to add. If omitted, no Version attribute is set. | `13.0.3` |
| `String` | TriggerNamespacePrefix | *Optional*. The package is added if any C# source file in the same project directory has a `using` directive whose namespace starts with this prefix. | `Newtonsoft.Json` |
| `String` | TriggerTypeFqn | *Optional*. The package is added if any C# source file in the same project directory has a fully-qualified reference to this type. Useful for types that live in a namespace that's already in scope via existing usings (so the using directive doesn't change). | `Microsoft.AspNetCore.Mvc.MvcNewtonsoftJsonOptions` |
| `Boolean` | RegenerateMarker | *Optional*. Whether to re-run `dotnet restore` after the edit to refresh the project's MSBuildProject marker. Defaults to `true`. Composite recipes that chain multiple csproj-mutating steps may set this to `false` on intermediate steps and finalize once with `EnsureCsprojAttestation`. |  |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET Core 3.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net3_0/upgradetodotnet3_0)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.Migration.Dotnet.AddNuGetPackageReferenceIfTypeUsed"
  displayName="Add NuGet package reference when namespace is used"
  nugetPackage="OpenRewrite.Recipes.CSharp.Migration.Dotnet"
/>
