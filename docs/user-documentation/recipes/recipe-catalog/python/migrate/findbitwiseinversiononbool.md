---
title: "Find bitwise inversion `~` on a `bool`"
sidebar_label: "Find bitwise inversion `~` on a `bool`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find bitwise inversion `~` on a `bool`"}
  description={"Bitwise inversion of a `bool` (`~True` is `-2`) was deprecated in Python 3.12 and is scheduled for removal in Python 3.16. Use `not x` for logical negation, or `~int(x)` for the integer inversion. Only fires on a `bool` literal or where the operand's type resolves to `bool`."}
  fqName={"org.openrewrite.python.migrate.FindBitwiseInversionOnBool"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","3.16","migration","3.12"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindBitwiseInversionOnBool"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindBitwiseInversionOnBool"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findbitwiseinversiononbool.md"}
  moderneOnly
>

<RecipeHeader.Title>Find bitwise inversion `~` on a `bool`</RecipeHeader.Title>

<RecipeHeader.Description>Bitwise inversion of a `bool` (`~True` is `-2`) was deprecated in Python 3.12 and is scheduled for removal in Python 3.16. Use `not x` for logical negation, or `~int(x)` for the integer inversion. Only fires on a `bool` literal or where the operand's type resolves to `bool`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindBitwiseInversionOnBool","displayName":"Find bitwise inversion `~` on a `bool`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

