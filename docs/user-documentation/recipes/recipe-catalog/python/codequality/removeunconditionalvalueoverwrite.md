---
title: "Remove unconditional value overwrites"
sidebar_label: "Remove unconditional value overwrites"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove unconditional value overwrites"}
  description={"Remove a constant written to a dict key when the next statement overwrites the same key. Only a dict the enclosing function built with `{...}` or `dict()` and has not yet passed on qualifies, and only for constant keys outside `try` and `with` blocks. Writes to attributes, parameters and globals are left alone, because another thread, an alias or a setter can observe them."}
  fqName={"org.openrewrite.python.codequality.RemoveUnconditionalValueOverwrite"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","RSPEC-S4143","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.codequality.RemoveUnconditionalValueOverwrite"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.codequality.RemoveUnconditionalValueOverwrite"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/codequality/removeunconditionalvalueoverwrite.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove unconditional value overwrites</RecipeHeader.Title>

<RecipeHeader.Description>Remove a constant written to a dict key when the next statement overwrites the same key. Only a dict the enclosing function built with `{...}` or `dict()` and has not yet passed on qualifies, and only for constant keys outside `try` and `with` blocks. Writes to attributes, parameters and globals are left alone, because another thread, an alias or a setter can observe them.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.codequality.RemoveUnconditionalValueOverwrite","displayName":"Remove unconditional value overwrites","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

