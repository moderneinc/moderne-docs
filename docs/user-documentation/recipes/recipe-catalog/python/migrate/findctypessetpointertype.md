---
title: "Find removed `ctypes.SetPointerType()`"
sidebar_label: "Find removed `ctypes.SetPointerType()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find removed `ctypes.SetPointerType()`"}
  description={"The undocumented `ctypes.SetPointerType()` was removed in Python 3.15. Call `set_type()` on the incomplete pointer type instead."}
  fqName={"org.openrewrite.python.migrate.FindCtypesSetPointerType"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","3.15","ctypes"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindCtypesSetPointerType"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindCtypesSetPointerType"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findctypessetpointertype.md"}
  moderneOnly
>

<RecipeHeader.Title>Find removed `ctypes.SetPointerType()`</RecipeHeader.Title>

<RecipeHeader.Description>The undocumented `ctypes.SetPointerType()` was removed in Python 3.15. Call `set_type()` on the incomplete pointer type instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindCtypesSetPointerType","displayName":"Find removed `ctypes.SetPointerType()`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

