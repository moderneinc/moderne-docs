---
title: "Fold same-literal `==`/`!=` comparisons to boolean constants"
sidebar_label: "Fold same-literal `==`/`!=` comparisons to boolean constants"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Fold same-literal `==`/`!=` comparisons to boolean constants"}
  description={"When both sides of `==` or `!=` are the same literal, replace the expression with `True` or `False` respectively."}
  fqName={"org.openrewrite.python.cleanup.EqualityIdentity"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Fold same-literal `==`/`!=` comparisons to boolean constants"}
  description={"When both sides of `==` or `!=` are the same literal, replace the expression with `True` or `False` respectively."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.EqualityIdentity"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.EqualityIdentity"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/equalityidentity.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.EqualityIdentity","displayName":"Fold same-literal `==`/`!=` comparisons to boolean constants","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

