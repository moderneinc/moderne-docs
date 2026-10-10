---
title: "Simplify boolean literal comparisons"
sidebar_label: "Simplify boolean literal comparisons"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify boolean literal comparisons"}
  description={"Replace `x != True` and `x is not True` with `not x`, and `x == True` and `x is True` with `x` where only the truth of the result is read. Only fires where `x`'s type resolves to `bool`. A comparison against `False` is left alone, because `x` may be `None` where its type reads as `bool`, and `None` and `False` compare differently."}
  fqName={"org.openrewrite.python.codequality.SimplifyBooleanLiteral"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","code-quality","RSPEC-S1125"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.codequality.SimplifyBooleanLiteral"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.codequality.SimplifyBooleanLiteral"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/codequality/simplifybooleanliteral.md"}
  moderneOnly
>

<RecipeHeader.Title>Simplify boolean literal comparisons</RecipeHeader.Title>

<RecipeHeader.Description>Replace `x != True` and `x is not True` with `not x`, and `x == True` and `x is True` with `x` where only the truth of the result is read. Only fires where `x`'s type resolves to `bool`. A comparison against `False` is left alone, because `x` may be `None` where its type reads as `bool`, and `None` and `False` compare differently.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.codequality.SimplifyBooleanLiteral","displayName":"Simplify boolean literal comparisons","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

