---
title: "Guard mutable default arguments with `None` sentinel"
sidebar_label: "Guard mutable default arguments with `None` sentinel"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Guard mutable default arguments with `None` sentinel"}
  description={"Change mutable default values (`[]`, `{}`, `set()`) to `None` and prepend an `if arg is None: arg = <original>` guard so each call gets its own fresh instance."}
  fqName={"org.openrewrite.python.cleanup.DefaultMutableArg"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.DefaultMutableArg"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.DefaultMutableArg"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/defaultmutablearg.md"}
  moderneOnly
>

<RecipeHeader.Title>Guard mutable default arguments with `None` sentinel</RecipeHeader.Title>

<RecipeHeader.Description>Change mutable default values (`[]`, `{}`, `set()`) to `None` and prepend an `if arg is None: arg = <original>` guard so each call gets its own fresh instance.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.DefaultMutableArg","displayName":"Guard mutable default arguments with `None` sentinel","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

