---
title: "Convert `apply('name')` to a direct method invocation"
sidebar_label: "Convert `apply('name')` to a direct method invocation"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Convert `apply('name')` to a direct method invocation"}
  description={"When `apply()` receives a string literal like `'sum'` or `'mean'`, rewrite the call as a direct method invocation on the object."}
  fqName={"org.openrewrite.python.cleanup.ReplaceApplyWithMethodCall"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.ReplaceApplyWithMethodCall"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.ReplaceApplyWithMethodCall"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/replaceapplywithmethodcall.md"}
  moderneOnly
>

<RecipeHeader.Title>Convert `apply('name')` to a direct method invocation</RecipeHeader.Title>

<RecipeHeader.Description>When `apply()` receives a string literal like `'sum'` or `'mean'`, rewrite the call as a direct method invocation on the object.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.ReplaceApplyWithMethodCall","displayName":"Convert `apply('name')` to a direct method invocation","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

