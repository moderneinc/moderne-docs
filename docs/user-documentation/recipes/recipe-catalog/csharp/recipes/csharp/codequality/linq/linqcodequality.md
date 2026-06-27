---
title: "LINQ code quality"
sidebar_label: "LINQ code quality"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"LINQ code quality"}
  description={"Optimize LINQ method calls for better readability and performance."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.LinqCodeQuality"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","linq","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.LinqCodeQuality"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Linq.LinqCodeQuality"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/linqcodequality.md"}
  moderneOnly
>

<RecipeHeader.Title>LINQ code quality</RecipeHeader.Title>

<RecipeHeader.Description>Optimize LINQ method calls for better readability and performance.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Optimize LINQ Where().Any()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwhereany/"},{"name":"Optimize LINQ Where().Count()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwherecount/"},{"name":"Optimize LINQ Where().First()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwherefirst/"},{"name":"Optimize LINQ Where().FirstOrDefault()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwherefirstordefault/"},{"name":"Optimize LINQ Where().Single()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwheresingle/"},{"name":"Optimize LINQ Where().SingleOrDefault()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwheresingleordefault/"},{"name":"Optimize LINQ Where().Last()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwherelast/"},{"name":"Optimize LINQ Where().LastOrDefault()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwherelastordefault/"},{"name":"Optimize LINQ Where().LongCount()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwherecountlong/"},{"name":"Optimize LINQ Select().Max()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqselectmax/"},{"name":"Optimize LINQ Select().Min()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqselectmin/"},{"name":"Optimize LINQ Select().Sum()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqselectsum/"},{"name":"Optimize LINQ Select().Average()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqselectaverage/"},{"name":"Use ThenBy instead of second OrderBy","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/useorderbythenby/"},{"name":"Use OrderBy().ThenByDescending()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/useorderbythenbydescending/"},{"name":"Use OrderByDescending().ThenByDescending()","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/useorderbydescendingthenbydescending/"},{"name":"Use Order() instead of OrderBy() with identity","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/useorderinsteadoforderby/"},{"name":"Remove useless OrderBy call","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/removeuselessorderby/"},{"name":"Use Cast<T>() instead of Select with cast","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/usecastinsteadofselect/"},{"name":"Combine LINQ methods","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/combinelinqmethods/"},{"name":"Use Where before OrderBy","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/findwherebeforeorderby/"},{"name":"Use Any() instead of Count() > 0","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/useanyinsteadofcount/"},{"name":"Find Count() comparison that could be optimized","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/findoptimizecountusage/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.LinqCodeQuality","displayName":"LINQ code quality","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

