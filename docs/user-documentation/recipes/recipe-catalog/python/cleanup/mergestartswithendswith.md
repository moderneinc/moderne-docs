---
title: "Merge multiple `startswith()`/`endswith()` calls into one"
sidebar_label: "Merge multiple `startswith()`/`endswith()` calls into one"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Merge multiple `startswith()`/`endswith()` calls into one"}
  description={"When several `startswith()` or `endswith()` calls on the same receiver are joined by `or`, combine them into a single call with a tuple argument. It only fires where the receiver's type resolves to `str` or `bytes`, the receiver is a name or attribute, every argument is a string literal of the receiver's kind, and no comment would be lost."}
  fqName={"org.openrewrite.python.cleanup.MergeStartswithEndswith"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","PIE810","cleanup","ruff"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.MergeStartswithEndswith"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.MergeStartswithEndswith"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/mergestartswithendswith.md"}
  moderneOnly
>

<RecipeHeader.Title>Merge multiple `startswith()`/`endswith()` calls into one</RecipeHeader.Title>

<RecipeHeader.Description>When several `startswith()` or `endswith()` calls on the same receiver are joined by `or`, combine them into a single call with a tuple argument. It only fires where the receiver's type resolves to `str` or `bytes`, the receiver is a name or attribute, every argument is a string literal of the receiver's kind, and no comment would be lost.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.MergeStartswithEndswith","displayName":"Merge multiple `startswith()`/`endswith()` calls into one","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

