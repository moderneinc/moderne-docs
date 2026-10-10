---
title: "Replace `zip(d.keys(), d.values())` with `d.items()`"
sidebar_label: "Replace `zip(d.keys(), d.values())` with `d.items()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `zip(d.keys(), d.values())` with `d.items()`"}
  description={"When both `.keys()` and `.values()` are zipped together, replace with `.items()` which yields key-value pairs directly. Only a `zip` that a for-loop or comprehension iterates directly is replaced, and only where the receiver is a name or attribute read whose type resolves to `dict`."}
  fqName={"org.openrewrite.python.cleanup.UseItemsForKeyValueIteration"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","cleanup","ruff","SIM911"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.UseItemsForKeyValueIteration"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.UseItemsForKeyValueIteration"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/useitemsforkeyvalueiteration.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `zip(d.keys(), d.values())` with `d.items()`</RecipeHeader.Title>

<RecipeHeader.Description>When both `.keys()` and `.values()` are zipped together, replace with `.items()` which yields key-value pairs directly. Only a `zip` that a for-loop or comprehension iterates directly is replaced, and only where the receiver is a name or attribute read whose type resolves to `dict`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.UseItemsForKeyValueIteration","displayName":"Replace `zip(d.keys(), d.values())` with `d.items()`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

