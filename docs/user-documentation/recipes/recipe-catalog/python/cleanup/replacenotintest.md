---
title: "Replace `not x in y` with `x not in y`"
sidebar_label: "Replace `not x in y` with `x not in y`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `not x in y` with `x not in y`"}
  description={"Replace `not x in y` with `x not in y`. The `not in` operator is clearer than negating an `in` test. A chained comparison such as `not a in b in c` is left alone."}
  fqName={"org.openrewrite.python.cleanup.ReplaceNotInTest"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","E713","cleanup","ruff"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.ReplaceNotInTest"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.ReplaceNotInTest"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/replacenotintest.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `not x in y` with `x not in y`</RecipeHeader.Title>

<RecipeHeader.Description>Replace `not x in y` with `x not in y`. The `not in` operator is clearer than negating an `in` test. A chained comparison such as `not a in b in c` is left alone.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.ReplaceNotInTest","displayName":"Replace `not x in y` with `x not in y`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

