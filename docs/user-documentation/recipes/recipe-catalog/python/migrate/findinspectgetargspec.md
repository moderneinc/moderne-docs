---
title: "Find removed `inspect.getargspec()`"
sidebar_label: "Find removed `inspect.getargspec()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find removed `inspect.getargspec()`"}
  description={"`inspect.getargspec()` was removed in Python 3.11. `inspect.getfullargspec()` returns seven fields where `getargspec()` returned four, and calls the `keywords` field `varkw`, so each call is marked for a manual change. A reference to the function that is not a call is not marked."}
  fqName={"org.openrewrite.python.migrate.FindInspectGetargspec"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","inspect","3.11"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindInspectGetargspec"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindInspectGetargspec"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findinspectgetargspec.md"}
  moderneOnly
>

<RecipeHeader.Title>Find removed `inspect.getargspec()`</RecipeHeader.Title>

<RecipeHeader.Description>`inspect.getargspec()` was removed in Python 3.11. `inspect.getfullargspec()` returns seven fields where `getargspec()` returned four, and calls the `keywords` field `varkw`, so each call is marked for a manual change. A reference to the function that is not a call is not marked.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindInspectGetargspec","displayName":"Find removed `inspect.getargspec()`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

