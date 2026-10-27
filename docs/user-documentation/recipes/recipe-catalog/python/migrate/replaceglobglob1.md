---
title: "Replace `glob.glob1()` with `glob.glob(root_dir=...)`"
sidebar_label: "Replace `glob.glob1()` with `glob.glob(root_dir=...)`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `glob.glob1()` with `glob.glob(root_dir=...)`"}
  description={"The undocumented `glob.glob1()` was removed in Python 3.15. Replace `glob1(dirname, pattern)` with `glob.glob(pattern, root_dir=dirname)`, which returns the same names. Only calls whose pattern is a string literal with a wildcard and no path separator are rewritten; calls passing keyword arguments or any other pattern are marked for review."}
  fqName={"org.openrewrite.python.migrate.ReplaceGlobGlob1"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","3.15","glob"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceGlobGlob1"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceGlobGlob1"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replaceglobglob1.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `glob.glob1()` with `glob.glob(root_dir=...)`</RecipeHeader.Title>

<RecipeHeader.Description>The undocumented `glob.glob1()` was removed in Python 3.15. Replace `glob1(dirname, pattern)` with `glob.glob(pattern, root_dir=dirname)`, which returns the same names. Only calls whose pattern is a string literal with a wildcard and no path separator are rewritten; calls passing keyword arguments or any other pattern are marked for review.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceGlobGlob1","displayName":"Replace `glob.glob1()` with `glob.glob(root_dir=...)`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

