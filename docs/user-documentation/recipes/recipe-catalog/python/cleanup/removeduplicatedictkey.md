---
title: "Deduplicate repeated keys in dict literals"
sidebar_label: "Deduplicate repeated keys in dict literals"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Deduplicate repeated keys in dict literals"}
  description={"When a dict literal contains the same key more than once, only the final value survives at runtime. This removes the shadowed entries."}
  fqName={"org.openrewrite.python.cleanup.RemoveDuplicateDictKey"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveDuplicateDictKey"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveDuplicateDictKey"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removeduplicatedictkey.md"}
  moderneOnly
>

<RecipeHeader.Title>Deduplicate repeated keys in dict literals</RecipeHeader.Title>

<RecipeHeader.Description>When a dict literal contains the same key more than once, only the final value survives at runtime. This removes the shadowed entries.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveDuplicateDictKey","displayName":"Deduplicate repeated keys in dict literals","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

