---
title: "Drop redundant `.keys()` on dict iteration"
sidebar_label: "Drop redundant `.keys()` on dict iteration"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Drop redundant `.keys()` on dict iteration"}
  description={"Dictionaries iterate over their keys by default, making explicit `.keys()` calls unnecessary in for-loops and `in` expressions."}
  fqName={"org.openrewrite.python.cleanup.RemoveDictKeys"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Drop redundant `.keys()` on dict iteration"}
  description={"Dictionaries iterate over their keys by default, making explicit `.keys()` calls unnecessary in for-loops and `in` expressions."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveDictKeys"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveDictKeys"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removedictkeys.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveDictKeys","displayName":"Drop redundant `.keys()` on dict iteration","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

