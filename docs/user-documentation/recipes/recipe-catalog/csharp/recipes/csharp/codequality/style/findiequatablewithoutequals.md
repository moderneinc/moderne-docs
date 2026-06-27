---
title: "Find IEquatable&lt;T&gt; without Equals(object) override"
sidebar_label: "Find IEquatable&lt;T&gt; without Equals(object) override"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find IEquatable<T> without Equals(object) override"}
  description={"Detect classes that implement `IEquatable<T>` but do not override `Equals(object)`, which can lead to inconsistent equality behavior."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindIEquatableWithoutEquals"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindIEquatableWithoutEquals"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindIEquatableWithoutEquals"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findiequatablewithoutequals.md"}
  moderneOnly
>

<RecipeHeader.Title>Find IEquatable&lt;T> without Equals(object) override</RecipeHeader.Title>

<RecipeHeader.Description>Detect classes that implement `IEquatable<T>` but do not override `Equals(object)`, which can lead to inconsistent equality behavior.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindIEquatableWithoutEquals","displayName":"Find IEquatable<T> without Equals(object) override","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

