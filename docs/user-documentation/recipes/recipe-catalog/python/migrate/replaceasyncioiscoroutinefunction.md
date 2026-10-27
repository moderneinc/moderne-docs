---
title: "Replace `asyncio.iscoroutinefunction()` with `inspect.iscoroutinefunction()`"
sidebar_label: "Replace `asyncio.iscoroutinefunction()` with `inspect.iscoroutinefunction()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `asyncio.iscoroutinefunction()` with `inspect.iscoroutinefunction()`"}
  description={"`asyncio.iscoroutinefunction()` was deprecated in Python 3.14 and is scheduled for removal in Python 3.16. Use `inspect.iscoroutinefunction()` instead."}
  fqName={"org.openrewrite.python.migrate.ReplaceAsyncioIscoroutinefunction"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={["python","asyncio","3.16","migration","3.14"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceAsyncioIscoroutinefunction"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceAsyncioIscoroutinefunction"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replaceasyncioiscoroutinefunction.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `asyncio.iscoroutinefunction()` with `inspect.iscoroutinefunction()`</RecipeHeader.Title>

<RecipeHeader.Description>`asyncio.iscoroutinefunction()` was deprecated in Python 3.14 and is scheduled for removal in Python 3.16. Use `inspect.iscoroutinefunction()` instead.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change import","href":"/user-documentation/recipes/recipe-catalog/python/changeimport/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceAsyncioIscoroutinefunction","displayName":"Replace `asyncio.iscoroutinefunction()` with `inspect.iscoroutinefunction()`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

