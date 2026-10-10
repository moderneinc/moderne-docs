---
title: "Replace `del x[:]` with `x.clear()`"
sidebar_label: "Replace `del x[:]` with `x.clear()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `del x[:]` with `x.clear()`"}
  description={"Use `.clear()` instead of `del x[:]` to empty a list. The method call is more explicit and idiomatic. Only a receiver whose type resolves to `list` or `bytearray` is rewritten, since `del x[:]` raises on a dict or deque that `.clear()` would empty."}
  fqName={"org.openrewrite.python.cleanup.UseListClear"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","FURB131","cleanup","ruff"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.UseListClear"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.UseListClear"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/uselistclear.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `del x[:]` with `x.clear()`</RecipeHeader.Title>

<RecipeHeader.Description>Use `.clear()` instead of `del x[:]` to empty a list. The method call is more explicit and idiomatic. Only a receiver whose type resolves to `list` or `bytearray` is rewritten, since `del x[:]` raises on a dict or deque that `.clear()` would empty.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.UseListClear","displayName":"Replace `del x[:]` with `x.clear()`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

