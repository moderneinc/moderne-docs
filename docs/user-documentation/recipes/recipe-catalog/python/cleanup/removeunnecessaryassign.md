---
title: "Remove unnecessary assignment before return"
sidebar_label: "Remove unnecessary assignment before return"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove unnecessary assignment before return"}
  description={"Return the value directly where a variable is assigned and then immediately returned. A name that appears anywhere else in the function, a `yield` value, and a comment before the `return` are left alone."}
  fqName={"org.openrewrite.python.cleanup.RemoveUnnecessaryAssign"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","cleanup","ruff","RET504"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveUnnecessaryAssign"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveUnnecessaryAssign"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removeunnecessaryassign.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove unnecessary assignment before return</RecipeHeader.Title>

<RecipeHeader.Description>Return the value directly where a variable is assigned and then immediately returned. A name that appears anywhere else in the function, a `yield` value, and a comment before the `return` are left alone.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveUnnecessaryAssign","displayName":"Remove unnecessary assignment before return","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

