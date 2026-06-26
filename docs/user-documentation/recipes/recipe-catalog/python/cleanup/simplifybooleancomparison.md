---
title: "Remove explicit True/False comparisons"
sidebar_label: "Remove explicit True/False comparisons"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove explicit True/False comparisons"}
  description={"Drop unnecessary ``== True``, ``!= False``, and similar tests against boolean literals, leaving just the expression or ``not expr``."}
  fqName={"org.openrewrite.python.cleanup.SimplifyBooleanComparison"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Remove explicit True/False comparisons"}
  description={"Drop unnecessary ``== True``, ``!= False``, and similar tests against boolean literals, leaving just the expression or ``not expr``."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.SimplifyBooleanComparison"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.SimplifyBooleanComparison"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/simplifybooleancomparison.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.SimplifyBooleanComparison","displayName":"Remove explicit True/False comparisons","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

