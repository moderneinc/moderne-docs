---
title: "Find suspicious chained comparisons"
sidebar_label: "Find suspicious chained comparisons"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find suspicious chained comparisons"}
  description={"Find chained comparisons that mix `<`/`<=` with `>`/`>=` (for example `0 <= x >= 10`), where the links point in opposite directions and the chain is almost always a mistake."}
  fqName={"org.openrewrite.python.codequality.FindSuspiciousChainedComparison"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.codequality.FindSuspiciousChainedComparison"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.codequality.FindSuspiciousChainedComparison"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/codequality/findsuspiciouschainedcomparison.md"}
  moderneOnly
>

<RecipeHeader.Title>Find suspicious chained comparisons</RecipeHeader.Title>

<RecipeHeader.Description>Find chained comparisons that mix `<`/`<=` with `>`/`>=` (for example `0 <= x >= 10`), where the links point in opposite directions and the chain is almost always a mistake.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.codequality.FindSuspiciousChainedComparison","displayName":"Find suspicious chained comparisons","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

