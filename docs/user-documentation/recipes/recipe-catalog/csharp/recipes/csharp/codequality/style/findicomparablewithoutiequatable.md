---
title: "Find IComparable&lt;T&gt; without IEquatable&lt;T&gt;"
sidebar_label: "Find IComparable&lt;T&gt; without IEquatable&lt;T&gt;"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find IComparable<T> without IEquatable<T>"}
  description={"Detect classes that implement `IComparable<T>` but not `IEquatable<T>`. Both interfaces should be implemented together for consistent comparison semantics."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindIComparableWithoutIEquatable"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindIComparableWithoutIEquatable"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindIComparableWithoutIEquatable"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findicomparablewithoutiequatable.md"}
  moderneOnly
>

<RecipeHeader.Title>Find IComparable&lt;T> without IEquatable&lt;T></RecipeHeader.Title>

<RecipeHeader.Description>Detect classes that implement `IComparable<T>` but not `IEquatable<T>`. Both interfaces should be implemented together for consistent comparison semantics.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindIComparableWithoutIEquatable","displayName":"Find IComparable<T> without IEquatable<T>","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

