---
title: "Use `is not` instead of `not ... is`"
sidebar_label: "Use `is not` instead of `not ... is`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use `is not` instead of `not ... is`"}
  description={"Replace `not x is y` with `x is not y`. The `is not` operator is clearer than negating an `is` test. A chained comparison such as `not a is b is c` is left alone."}
  fqName={"org.openrewrite.python.cleanup.ReplaceNotIsTest"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","cleanup","E714","ruff"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.ReplaceNotIsTest"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.ReplaceNotIsTest"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/replacenotistest.md"}
  moderneOnly
>

<RecipeHeader.Title>Use `is not` instead of `not ... is`</RecipeHeader.Title>

<RecipeHeader.Description>Replace `not x is y` with `x is not y`. The `is not` operator is clearer than negating an `is` test. A chained comparison such as `not a is b is c` is left alone.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.ReplaceNotIsTest","displayName":"Use `is not` instead of `not ... is`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

