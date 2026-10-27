---
title: "Find removed `PurePath.is_reserved()`"
sidebar_label: "Find removed `PurePath.is_reserved()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find removed `PurePath.is_reserved()`"}
  description={"`pathlib.PurePath.is_reserved()` was removed in Python 3.15. Use `os.path.isreserved()`, which is only available on Windows. Only fires where the receiver's type resolves to a `pathlib` path."}
  fqName={"org.openrewrite.python.migrate.FindPathlibIsReserved"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","pathlib","migration","3.15"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindPathlibIsReserved"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindPathlibIsReserved"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findpathlibisreserved.md"}
  moderneOnly
>

<RecipeHeader.Title>Find removed `PurePath.is_reserved()`</RecipeHeader.Title>

<RecipeHeader.Description>`pathlib.PurePath.is_reserved()` was removed in Python 3.15. Use `os.path.isreserved()`, which is only available on Windows. Only fires where the receiver's type resolves to a `pathlib` path.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindPathlibIsReserved","displayName":"Find removed `PurePath.is_reserved()`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

