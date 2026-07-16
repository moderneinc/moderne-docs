---
title: "Use `LoggerFactory.Create(...)` instead of `new LoggerFactory()`"
sidebar_label: "Use `LoggerFactory.Create(...)` instead of `new LoggerFactory()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use `LoggerFactory.Create(...)` instead of `new LoggerFactory()`"}
  description={"Rewrites the obsolete `new LoggerFactory()` plus `ILoggerFactory.Add*()` provider configuration to `LoggerFactory.Create(builder => ...)`, moving each provider registration onto the `ILoggingBuilder`. Handles both the chained form and the form where registration calls follow the declaration as separate statements. Argument shapes with no `ILoggingBuilder` equivalent are left in place and flagged for manual migration."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.AspNetCore3.UseLoggerFactoryCreate"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","aspnetcore","migration","logging"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.AspNetCore3.UseLoggerFactoryCreate"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.AspNetCore3.UseLoggerFactoryCreate"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/aspnetcore3/useloggerfactorycreate.md"}
  moderneOnly
>

<RecipeHeader.Title>Use `LoggerFactory.Create(...)` instead of `new LoggerFactory()`</RecipeHeader.Title>

<RecipeHeader.Description>Rewrites the obsolete `new LoggerFactory()` plus `ILoggerFactory.Add*()` provider configuration to `LoggerFactory.Create(builder => ...)`, moving each provider registration onto the `ILoggingBuilder`. Handles both the chained form and the form where registration calls follow the declaration as separate statements. Argument shapes with no `ILoggingBuilder` equivalent are left in place and flagged for manual migration.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.AspNetCore3.UseLoggerFactoryCreate","displayName":"Use `LoggerFactory.Create(...)` instead of `new LoggerFactory()`","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

