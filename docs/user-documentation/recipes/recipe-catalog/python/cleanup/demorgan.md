---
title: "Flatten negated logic via De Morgan's identities"
sidebar_label: "Flatten negated logic via De Morgan's identities"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Flatten negated logic via De Morgan's identities"}
  description={"Use De Morgan's identities to remove double negation and to distribute ``not`` into compound conditions, e.g. ``not not finished`` becomes ``finished`` and ``not (m and n)`` becomes ``not m or not n``."}
  fqName={"org.openrewrite.python.cleanup.DeMorgan"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.DeMorgan"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.DeMorgan"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/demorgan.md"}
  moderneOnly
>

<RecipeHeader.Title>Flatten negated logic via De Morgan's identities</RecipeHeader.Title>

<RecipeHeader.Description>Use De Morgan's identities to remove double negation and to distribute ``not`` into compound conditions, e.g. ``not not finished`` becomes ``finished`` and ``not (m and n)`` becomes ``not m or not n``.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.DeMorgan","displayName":"Flatten negated logic via De Morgan's identities","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

