---
title: "Replace internal `FormattedLogValues` with a type alias"
sidebar_label: "Replace internal `FormattedLogValues` with a type alias"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace internal `FormattedLogValues` with a type alias"}
  description={"`Microsoft.Extensions.Logging.Internal.FormattedLogValues` was made internal in .NET 6+. Replace the now-dead `using Microsoft.Extensions.Logging.Internal;` with a `FormattedLogValues` type alias for `IReadOnlyList<KeyValuePair<string, object>>` (the public interface it implements) so existing references keep compiling."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.ReplaceFormattedLogValues"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","logging"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.ReplaceFormattedLogValues"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.ReplaceFormattedLogValues"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/replaceformattedlogvalues.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace internal `FormattedLogValues` with a type alias</RecipeHeader.Title>

<RecipeHeader.Description>`Microsoft.Extensions.Logging.Internal.FormattedLogValues` was made internal in .NET 6+. Replace the now-dead `using Microsoft.Extensions.Logging.Internal;` with a `FormattedLogValues` type alias for `IReadOnlyList<KeyValuePair<string, object>>` (the public interface it implements) so existing references keep compiling.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.ReplaceFormattedLogValues","displayName":"Replace internal `FormattedLogValues` with a type alias","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

