---
title: "Chain exceptions with `raise ... from` in except blocks"
sidebar_label: "Chain exceptions with `raise ... from` in except blocks"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Chain exceptions with `raise ... from` in except blocks"}
  description={"Raise statements inside except blocks should use `from` to chain the new exception to the caught one, preserving the full traceback."}
  fqName={"org.openrewrite.python.cleanup.RaiseFromPreviousError"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RaiseFromPreviousError"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RaiseFromPreviousError"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/raisefrompreviouserror.md"}
  moderneOnly
>

<RecipeHeader.Title>Chain exceptions with `raise ... from` in except blocks</RecipeHeader.Title>

<RecipeHeader.Description>Raise statements inside except blocks should use `from` to chain the new exception to the caught one, preserving the full traceback.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RaiseFromPreviousError","displayName":"Chain exceptions with `raise ... from` in except blocks","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

