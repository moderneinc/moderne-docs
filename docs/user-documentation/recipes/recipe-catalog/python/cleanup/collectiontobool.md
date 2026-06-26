---
title: "Substitute constant collection condition with boolean"
sidebar_label: "Substitute constant collection condition with boolean"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Substitute constant collection condition with boolean"}
  description={"When a list, tuple, dict, or set literal is used as an ``if`` or ``while`` condition, replace it with ``True`` (non-empty) or ``False`` (empty) to state the intent directly."}
  fqName={"org.openrewrite.python.cleanup.CollectionToBool"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Substitute constant collection condition with boolean"}
  description={"When a list, tuple, dict, or set literal is used as an ``if`` or ``while`` condition, replace it with ``True`` (non-empty) or ``False`` (empty) to state the intent directly."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.CollectionToBool"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.CollectionToBool"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/collectiontobool.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.CollectionToBool","displayName":"Substitute constant collection condition with boolean","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

