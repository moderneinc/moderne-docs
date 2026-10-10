---
title: "Collapse `if`/`else` returning boolean literals"
sidebar_label: "Collapse `if`/`else` returning boolean literals"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Collapse `if`/`else` returning boolean literals"}
  description={"Replace `if cond: return True / else: return False` with `return cond` and the inverse with `return not cond`, including the fallthrough variant without an explicit `else`. A condition other than a comparison, a `not`, or an `and`/`or` of those is returned as `bool(cond)`. The rewrite is declined where `bool` is not the builtin or the removed statements hold comments."}
  fqName={"org.openrewrite.python.cleanup.SimplifyBooleanReturn"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","cleanup","ruff","SIM103"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.SimplifyBooleanReturn"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.SimplifyBooleanReturn"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/simplifybooleanreturn.md"}
  moderneOnly
>

<RecipeHeader.Title>Collapse `if`/`else` returning boolean literals</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if cond: return True / else: return False` with `return cond` and the inverse with `return not cond`, including the fallthrough variant without an explicit `else`. A condition other than a comparison, a `not`, or an `and`/`or` of those is returned as `bool(cond)`. The rewrite is declined where `bool` is not the builtin or the removed statements hold comments.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.SimplifyBooleanReturn","displayName":"Collapse `if`/`else` returning boolean literals","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

