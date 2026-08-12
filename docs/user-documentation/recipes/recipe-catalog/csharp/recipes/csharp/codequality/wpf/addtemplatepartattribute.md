---
title: "Add [TemplatePart] for a looked-up template part"
sidebar_label: "Add [TemplatePart] for a looked-up template part"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add [TemplatePart] for a looked-up template part"}
  description={"A `GetTemplateChild(\"PART_X\")` call in `OnApplyTemplate` is an undeclared dependency on the control template. Adds `[TemplatePart(Name = ..., Type = ...)]` to the control for every part it looks up but neither it nor a base control declares."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.AddTemplatePartAttribute"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.AddTemplatePartAttribute"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.AddTemplatePartAttribute"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/addtemplatepartattribute.md"}
  moderneOnly
>

<RecipeHeader.Title>Add [TemplatePart] for a looked-up template part</RecipeHeader.Title>

<RecipeHeader.Description>A `GetTemplateChild("PART_X")` call in `OnApplyTemplate` is an undeclared dependency on the control template. Adds `[TemplatePart(Name = ..., Type = ...)]` to the control for every part it looks up but neither it nor a base control declares.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.AddTemplatePartAttribute","displayName":"Add [TemplatePart] for a looked-up template part","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

