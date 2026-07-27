---
title: "Use `.isna()` instead of `== np.nan` comparisons"
sidebar_label: "Use `.isna()` instead of `== np.nan` comparisons"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use `.isna()` instead of `== np.nan` comparisons"}
  description={"Rewrite `== np.nan` and `== numpy.nan` equality tests as `.isna()` calls, since direct NaN comparison always evaluates to False."}
  fqName={"org.openrewrite.python.cleanup.UseIsna"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.UseIsna"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.UseIsna"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/useisna.md"}
  moderneOnly
>

<RecipeHeader.Title>Use `.isna()` instead of `== np.nan` comparisons</RecipeHeader.Title>

<RecipeHeader.Description>Rewrite `== np.nan` and `== numpy.nan` equality tests as `.isna()` calls, since direct NaN comparison always evaluates to False.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.UseIsna","displayName":"Use `.isna()` instead of `== np.nan` comparisons","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

