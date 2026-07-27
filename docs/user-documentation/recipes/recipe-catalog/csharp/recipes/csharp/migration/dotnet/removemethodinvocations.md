---
title: "Remove method invocations"
sidebar_label: "Remove method invocations"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove method invocations"}
  description={"Remove method invocations if syntactically safe."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.RemoveMethodInvocations"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.RemoveMethodInvocations"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.RemoveMethodInvocations"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/removemethodinvocations.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove method invocations</RecipeHeader.Title>

<RecipeHeader.Description>Remove method invocations if syntactically safe.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[]} preconditions={[{"name":"Remove method invocations","href":"/user-documentation/recipes/recipe-catalog/java/removemethodinvocations/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"MethodPattern","required":true,"description":"A method pattern used to find matching method invocations to remove.","example":"Microsoft.AspNetCore.Builder.SwaggerBuilderExtensions UseSwagger(..)"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.RemoveMethodInvocations","displayName":"Remove method invocations","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

