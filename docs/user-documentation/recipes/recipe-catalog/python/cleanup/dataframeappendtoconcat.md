---
title: "Migrate deprecated `.append()` to `pd.concat()`"
sidebar_label: "Migrate deprecated `.append()` to `pd.concat()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate deprecated `.append()` to `pd.concat()`"}
  description={"`DataFrame.append()` no longer exists in pandas 2.0+. This recipe rewrites `.append(x)` calls to `pd.concat([df, x])`."}
  fqName={"org.openrewrite.python.cleanup.DataframeAppendToConcat"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Migrate deprecated `.append()` to `pd.concat()`"}
  description={"`DataFrame.append()` no longer exists in pandas 2.0+. This recipe rewrites `.append(x)` calls to `pd.concat([df, x])`."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.DataframeAppendToConcat"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.DataframeAppendToConcat"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/dataframeappendtoconcat.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.DataframeAppendToConcat","displayName":"Migrate deprecated `.append()` to `pd.concat()`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

