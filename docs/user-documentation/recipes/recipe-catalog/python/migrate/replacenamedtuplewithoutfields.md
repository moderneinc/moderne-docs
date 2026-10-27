---
title: "Pass `[]` to a `NamedTuple` with no fields"
sidebar_label: "Pass `[]` to a `NamedTuple` with no fields"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Pass `[]` to a `NamedTuple` with no fields"}
  description={"`NamedTuple(\"NT\")` and `NamedTuple(\"NT\", None)` raise a `TypeError` in Python 3.15. Pass an empty list, as in `NamedTuple(\"NT\", [])`. Calls holding comments are left unchanged."}
  fqName={"org.openrewrite.python.migrate.ReplaceNamedTupleWithoutFields"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","3.15","typing"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceNamedTupleWithoutFields"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceNamedTupleWithoutFields"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacenamedtuplewithoutfields.md"}
  moderneOnly
>

<RecipeHeader.Title>Pass `[]` to a `NamedTuple` with no fields</RecipeHeader.Title>

<RecipeHeader.Description>`NamedTuple("NT")` and `NamedTuple("NT", None)` raise a `TypeError` in Python 3.15. Pass an empty list, as in `NamedTuple("NT", [])`. Calls holding comments are left unchanged.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceNamedTupleWithoutFields","displayName":"Pass `[]` to a `NamedTuple` with no fields","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

