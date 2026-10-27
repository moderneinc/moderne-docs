---
title: "Find removed `co_lnotab` on code objects"
sidebar_label: "Find removed `co_lnotab` on code objects"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find removed `co_lnotab` on code objects"}
  description={"`co_lnotab` was removed from code objects in Python 3.15. Use `co_lines()` instead, which yields `(start, end, line)` tuples (PEP 626). Only fires where the code object's type resolves to `types.CodeType`."}
  fqName={"org.openrewrite.python.migrate.FindCodeObjectCoLnotab"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","types","migration","3.15"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindCodeObjectCoLnotab"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindCodeObjectCoLnotab"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findcodeobjectcolnotab.md"}
  moderneOnly
>

<RecipeHeader.Title>Find removed `co_lnotab` on code objects</RecipeHeader.Title>

<RecipeHeader.Description>`co_lnotab` was removed from code objects in Python 3.15. Use `co_lines()` instead, which yields `(start, end, line)` tuples (PEP 626). Only fires where the code object's type resolves to `types.CodeType`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindCodeObjectCoLnotab","displayName":"Find removed `co_lnotab` on code objects","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

