---
title: "Apply De Morgan's law to `any(not ...)`/`all(not ...)`"
sidebar_label: "Apply De Morgan's law to `any(not ...)`/`all(not ...)`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Apply De Morgan's law to `any(not ...)`/`all(not ...)`"}
  description={"When the generator body just negates the loop variable, De Morgan's law lets us eliminate the generator entirely: `any(not v for v in seq)` becomes `not all(seq)`, and the reverse."}
  fqName={"org.openrewrite.python.cleanup.InvertAnyAllBody"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.InvertAnyAllBody"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.InvertAnyAllBody"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/invertanyallbody.md"}
  moderneOnly
>

<RecipeHeader.Title>Apply De Morgan's law to `any(not ...)`/`all(not ...)`</RecipeHeader.Title>

<RecipeHeader.Description>When the generator body just negates the loop variable, De Morgan's law lets us eliminate the generator entirely: `any(not v for v in seq)` becomes `not all(seq)`, and the reverse.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.InvertAnyAllBody","displayName":"Apply De Morgan's law to `any(not ...)`/`all(not ...)`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

