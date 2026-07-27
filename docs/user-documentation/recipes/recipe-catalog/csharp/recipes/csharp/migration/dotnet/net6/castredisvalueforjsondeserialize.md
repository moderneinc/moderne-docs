---
title: "Cast `RedisValue` to `string` for `JsonSerializer.Deserialize`"
sidebar_label: "Cast `RedisValue` to `string` for `JsonSerializer.Deserialize`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Cast `RedisValue` to `string` for `JsonSerializer.Deserialize`"}
  description={"`JsonSerializer.Deserialize<T>(RedisValue)` is an ambiguous call (CS0121) because StackExchange.Redis `RedisValue` implicitly converts to both `string` and `ReadOnlySpan<byte>`. Add an explicit `(string)` cast to disambiguate."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.CastRedisValueForJsonDeserialize"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","redis"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.CastRedisValueForJsonDeserialize"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.CastRedisValueForJsonDeserialize"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/castredisvalueforjsondeserialize.md"}
  moderneOnly
>

<RecipeHeader.Title>Cast `RedisValue` to `string` for `JsonSerializer.Deserialize`</RecipeHeader.Title>

<RecipeHeader.Description>`JsonSerializer.Deserialize<T>(RedisValue)` is an ambiguous call (CS0121) because StackExchange.Redis `RedisValue` implicitly converts to both `string` and `ReadOnlySpan<byte>`. Add an explicit `(string)` cast to disambiguate.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.CastRedisValueForJsonDeserialize","displayName":"Cast `RedisValue` to `string` for `JsonSerializer.Deserialize`","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

