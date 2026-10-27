---
title: "Find deprecated `profile` module"
sidebar_label: "Find deprecated `profile` module"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find deprecated `profile` module"}
  description={"The pure-Python `profile` module was deprecated in Python 3.15 and is scheduled for removal in Python 3.17. Use `profiling.tracing` (new in 3.15) or `cProfile`, which provide a compatible API but no custom timers or bias calibration."}
  fqName={"org.openrewrite.python.migrate.FindProfileModule"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","3.17","profile","migration","3.15"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindProfileModule"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindProfileModule"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findprofilemodule.md"}
  moderneOnly
>

<RecipeHeader.Title>Find deprecated `profile` module</RecipeHeader.Title>

<RecipeHeader.Description>The pure-Python `profile` module was deprecated in Python 3.15 and is scheduled for removal in Python 3.17. Use `profiling.tracing` (new in 3.15) or `cProfile`, which provide a compatible API but no custom timers or bias calibration.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindProfileModule","displayName":"Find deprecated `profile` module","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

