---
title: "Use 'is' pattern instead of SequenceEqual"
sidebar_label: "Use 'is' pattern instead of SequenceEqual"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use 'is' pattern instead of SequenceEqual"}
  description={"Replace `span.SequenceEqual(\"str\")` with `span is \"str\"`. Pattern matching with string constants is more concise for span comparisons."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseIsPatternInsteadOfSequenceEqual"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseIsPatternInsteadOfSequenceEqual"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseIsPatternInsteadOfSequenceEqual"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/useispatterninsteadofsequenceequal.md"}
  moderneOnly
>

<RecipeHeader.Title>Use 'is' pattern instead of SequenceEqual</RecipeHeader.Title>

<RecipeHeader.Description>Replace `span.SequenceEqual("str")` with `span is "str"`. Pattern matching with string constants is more concise for span comparisons.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseIsPatternInsteadOfSequenceEqual","displayName":"Use 'is' pattern instead of SequenceEqual","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

