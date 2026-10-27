---
title: "Find removed `glob.glob0()`"
sidebar_label: "Find removed `glob.glob0()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find removed `glob.glob0()`"}
  description={"The undocumented `glob.glob0()` was removed in Python 3.15. Use `glob.glob()` with `root_dir`, escaping the name with `glob.escape()`, or test for the file directly."}
  fqName={"org.openrewrite.python.migrate.FindGlobGlob0"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","3.15","glob"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindGlobGlob0"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindGlobGlob0"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findglobglob0.md"}
  moderneOnly
>

<RecipeHeader.Title>Find removed `glob.glob0()`</RecipeHeader.Title>

<RecipeHeader.Description>The undocumented `glob.glob0()` was removed in Python 3.15. Use `glob.glob()` with `root_dir`, escaping the name with `glob.escape()`, or test for the file directly.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindGlobGlob0","displayName":"Find removed `glob.glob0()`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

