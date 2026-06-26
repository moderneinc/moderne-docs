---
title: "Replace self-referencing ternary with `or`"
sidebar_label: "Replace self-referencing ternary with `or`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace self-referencing ternary with `or`"}
  description={"When a ternary's condition and true-branch name the same variable, rewrite ``val if val else fallback`` as ``val or fallback`` to avoid repeating the name."}
  fqName={"org.openrewrite.python.cleanup.OrIfExpIdentity"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Replace self-referencing ternary with `or`"}
  description={"When a ternary's condition and true-branch name the same variable, rewrite ``val if val else fallback`` as ``val or fallback`` to avoid repeating the name."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.OrIfExpIdentity"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.OrIfExpIdentity"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/orifexpidentity.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.OrIfExpIdentity","displayName":"Replace self-referencing ternary with `or`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

