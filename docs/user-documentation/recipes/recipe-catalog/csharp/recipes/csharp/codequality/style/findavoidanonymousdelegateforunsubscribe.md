---
title: "Do not use anonymous delegates to unsubscribe from events"
sidebar_label: "Do not use anonymous delegates to unsubscribe from events"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Do not use anonymous delegates to unsubscribe from events"}
  description={"Unsubscribing from events using anonymous delegates or lambdas has no effect because each lambda creates a new delegate instance."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindAvoidAnonymousDelegateForUnsubscribe"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindAvoidAnonymousDelegateForUnsubscribe"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindAvoidAnonymousDelegateForUnsubscribe"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findavoidanonymousdelegateforunsubscribe.md"}
  moderneOnly
>

<RecipeHeader.Title>Do not use anonymous delegates to unsubscribe from events</RecipeHeader.Title>

<RecipeHeader.Description>Unsubscribing from events using anonymous delegates or lambdas has no effect because each lambda creates a new delegate instance.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindAvoidAnonymousDelegateForUnsubscribe","displayName":"Do not use anonymous delegates to unsubscribe from events","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

