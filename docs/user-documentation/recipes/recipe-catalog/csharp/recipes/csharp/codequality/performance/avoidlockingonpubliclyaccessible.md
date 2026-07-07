---
title: "Avoid locking on publicly accessible instance"
sidebar_label: "Avoid locking on publicly accessible instance"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Avoid locking on publicly accessible instance"}
  description={"Avoid lock(this), lock(typeof(T)), or lock on string literals which can cause deadlocks."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.AvoidLockingOnPubliclyAccessible"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.AvoidLockingOnPubliclyAccessible"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.AvoidLockingOnPubliclyAccessible"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/avoidlockingonpubliclyaccessible.md"}
  moderneOnly
>

<RecipeHeader.Title>Avoid locking on publicly accessible instance</RecipeHeader.Title>

<RecipeHeader.Description>Avoid lock(this), lock(typeof(T)), or lock on string literals which can cause deadlocks.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.AvoidLockingOnPubliclyAccessible","displayName":"Avoid locking on publicly accessible instance","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

