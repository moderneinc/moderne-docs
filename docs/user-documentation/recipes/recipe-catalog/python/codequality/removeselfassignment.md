---
title: "Remove self-assignments"
sidebar_label: "Remove self-assignments"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove self-assignments"}
  description={"Remove statements inside a function that assign a plain local name to itself (`x = x`), since they have no effect. Class-body and module-level `X = X` bind a new name from an enclosing one and are left alone, as are attribute and subscript targets, which run `__set__` and `__setitem__`."}
  fqName={"org.openrewrite.python.codequality.RemoveSelfAssignment"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["RSPEC-S1656","python","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.codequality.RemoveSelfAssignment"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.codequality.RemoveSelfAssignment"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/codequality/removeselfassignment.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove self-assignments</RecipeHeader.Title>

<RecipeHeader.Description>Remove statements inside a function that assign a plain local name to itself (`x = x`), since they have no effect. Class-body and module-level `X = X` bind a new name from an enclosing one and are left alone, as are attribute and subscript targets, which run `__set__` and `__setitem__`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.codequality.RemoveSelfAssignment","displayName":"Remove self-assignments","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

