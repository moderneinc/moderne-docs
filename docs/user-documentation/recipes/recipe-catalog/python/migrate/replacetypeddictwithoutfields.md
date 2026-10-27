---
title: "Pass `{}` to a `TypedDict` with no fields"
sidebar_label: "Pass `{}` to a `TypedDict` with no fields"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Pass `{}` to a `TypedDict` with no fields"}
  description={"`TypedDict(\"TD\")` and `TypedDict(\"TD\", None)` no longer create a `TypedDict` with no fields in Python 3.15. Pass an empty dict, as in `TypedDict(\"TD\", {})`. Calls holding comments are left unchanged."}
  fqName={"org.openrewrite.python.migrate.ReplaceTypedDictWithoutFields"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","3.15","typing"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceTypedDictWithoutFields"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceTypedDictWithoutFields"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacetypeddictwithoutfields.md"}
  moderneOnly
>

<RecipeHeader.Title>Pass `{}` to a `TypedDict` with no fields</RecipeHeader.Title>

<RecipeHeader.Description>`TypedDict("TD")` and `TypedDict("TD", None)` no longer create a `TypedDict` with no fields in Python 3.15. Pass an empty dict, as in `TypedDict("TD", {})`. Calls holding comments are left unchanged.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceTypedDictWithoutFields","displayName":"Pass `{}` to a `TypedDict` with no fields","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

