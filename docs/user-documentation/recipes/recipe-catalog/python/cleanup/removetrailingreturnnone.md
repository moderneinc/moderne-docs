---
title: "Remove trailing `return None` from functions"
sidebar_label: "Remove trailing `return None` from functions"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove trailing `return None` from functions"}
  description={"Delete `return None` or a bare `return` when it is the last statement in a function body and no other return yields a non-None value. A return holding a comment is kept, as is one that is the function's only statement."}
  fqName={"org.openrewrite.python.cleanup.RemoveTrailingReturnNone"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["PLR1711","python","cleanup","ruff"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveTrailingReturnNone"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveTrailingReturnNone"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removetrailingreturnnone.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove trailing `return None` from functions</RecipeHeader.Title>

<RecipeHeader.Description>Delete `return None` or a bare `return` when it is the last statement in a function body and no other return yields a non-None value. A return holding a comment is kept, as is one that is the function's only statement.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveTrailingReturnNone","displayName":"Remove trailing `return None` from functions","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

