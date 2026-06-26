---
title: "Delete no-op `assert True` statements"
sidebar_label: "Delete no-op `assert True` statements"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Delete no-op `assert True` statements"}
  description={"Delete bare `assert True` statements, which are always satisfied and have no effect. Assertions that carry a message string are preserved."}
  fqName={"org.openrewrite.python.cleanup.RemoveAssertTrue"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Delete no-op `assert True` statements"}
  description={"Delete bare `assert True` statements, which are always satisfied and have no effect. Assertions that carry a message string are preserved."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveAssertTrue"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveAssertTrue"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removeasserttrue.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveAssertTrue","displayName":"Delete no-op `assert True` statements","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

