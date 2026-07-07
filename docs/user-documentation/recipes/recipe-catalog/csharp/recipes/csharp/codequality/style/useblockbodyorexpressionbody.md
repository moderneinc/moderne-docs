---
title: "Use block body or expression body"
sidebar_label: "Use block body or expression body"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use block body or expression body"}
  description={"Convert between block body and expression body for members."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseBlockBodyOrExpressionBody"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseBlockBodyOrExpressionBody"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseBlockBodyOrExpressionBody"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/useblockbodyorexpressionbody.md"}
  moderneOnly
>

<RecipeHeader.Title>Use block body or expression body</RecipeHeader.Title>

<RecipeHeader.Description>Convert between block body and expression body for members.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"Boolean","name":"AllowMultiLine","required":false,"description":"When true, also flags methods with multi-line return expressions (e.g., switch expressions, multi-line conditionals). Default is false, matching Roslyn's default RCS1016 behavior."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseBlockBodyOrExpressionBody","displayName":"Use block body or expression body","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

