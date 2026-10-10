---
title: "Replace Yoda conditions with normal comparisons"
sidebar_label: "Replace Yoda conditions with normal comparisons"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace Yoda conditions with normal comparisons"}
  description={"Replace Yoda conditions (e.g. `None == x`) with the conventional comparison order (e.g. `x == None`). A chained comparison, or one with a constant on both sides, is left alone. See Ruff rule SIM300."}
  fqName={"org.openrewrite.python.cleanup.ReplaceYodaConditions"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","cleanup","ruff","SIM300"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.ReplaceYodaConditions"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.ReplaceYodaConditions"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/replaceyodaconditions.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace Yoda conditions with normal comparisons</RecipeHeader.Title>

<RecipeHeader.Description>Replace Yoda conditions (e.g. `None == x`) with the conventional comparison order (e.g. `x == None`). A chained comparison, or one with a constant on both sides, is left alone. See Ruff rule SIM300.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.ReplaceYodaConditions","displayName":"Replace Yoda conditions with normal comparisons","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

