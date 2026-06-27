---
title: "Boolean checks should not be inverted"
sidebar_label: "Boolean checks should not be inverted"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Boolean checks should not be inverted"}
  description={"Replace inverted boolean comparisons like `not (a == b)` with the equivalent direct operator (`a != b`), and remove double negations like `not (not x)`."}
  fqName={"org.openrewrite.python.codequality.BooleanChecksNotInverted"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","code-quality","RSPEC-S1940"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.codequality.BooleanChecksNotInverted"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.codequality.BooleanChecksNotInverted"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/codequality/booleanchecksnotinverted.md"}
  moderneOnly
>

<RecipeHeader.Title>Boolean checks should not be inverted</RecipeHeader.Title>

<RecipeHeader.Description>Replace inverted boolean comparisons like `not (a == b)` with the equivalent direct operator (`a != b`), and remove double negations like `not (not x)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.codequality.BooleanChecksNotInverted","displayName":"Boolean checks should not be inverted","pipPackage":"openrewrite-migrate-python"}}>

## Usage

</UsageList>

