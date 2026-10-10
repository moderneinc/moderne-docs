---
title: "Merge nested `with` statements into one"
sidebar_label: "Merge nested `with` statements into one"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Merge nested `with` statements into one"}
  description={"Combine directly nested `with` statements into a single `with` when the outer body contains only the inner `with`. An `async with` is left alone, as is a comment between the two, an outer `with` holding other statements, and a pair whose context managers the merge would leave split across lines outside parentheses."}
  fqName={"org.openrewrite.python.cleanup.MergeNestedWithStatements"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","cleanup","ruff","SIM117"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.MergeNestedWithStatements"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.MergeNestedWithStatements"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/mergenestedwithstatements.md"}
  moderneOnly
>

<RecipeHeader.Title>Merge nested `with` statements into one</RecipeHeader.Title>

<RecipeHeader.Description>Combine directly nested `with` statements into a single `with` when the outer body contains only the inner `with`. An `async with` is left alone, as is a comment between the two, an outer `with` holding other statements, and a pair whose context managers the merge would leave split across lines outside parentheses.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.MergeNestedWithStatements","displayName":"Merge nested `with` statements into one","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

