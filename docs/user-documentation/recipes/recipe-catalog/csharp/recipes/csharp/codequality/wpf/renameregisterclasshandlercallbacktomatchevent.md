---
title: "Name the RegisterClassHandler callback OnEventName"
sidebar_label: "Name the RegisterClassHandler callback OnEventName"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Name the RegisterClassHandler callback OnEventName"}
  description={"The callback registered with `EventManager.RegisterClassHandler` should be named after the routed event it handles — `OnSizeChanged` for `SizeChangedEvent`. Renames the method and all references to it."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RenameRegisterClassHandlerCallbackToMatchEvent"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RenameRegisterClassHandlerCallbackToMatchEvent"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RenameRegisterClassHandlerCallbackToMatchEvent"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/renameregisterclasshandlercallbacktomatchevent.md"}
  moderneOnly
>

<RecipeHeader.Title>Name the RegisterClassHandler callback OnEventName</RecipeHeader.Title>

<RecipeHeader.Description>The callback registered with `EventManager.RegisterClassHandler` should be named after the routed event it handles — `OnSizeChanged` for `SizeChangedEvent`. Renames the method and all references to it.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RenameRegisterClassHandlerCallbackToMatchEvent","displayName":"Name the RegisterClassHandler callback OnEventName","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

