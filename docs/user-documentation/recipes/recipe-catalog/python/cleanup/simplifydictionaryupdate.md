---
title: "Convert one-item `dict.update()` to bracket assignment"
sidebar_label: "Convert one-item `dict.update()` to bracket assignment"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Convert one-item `dict.update()` to bracket assignment"}
  description={"When `.update()` receives a dictionary literal containing exactly one key, rewrite it as a direct key assignment for clarity and efficiency."}
  fqName={"org.openrewrite.python.cleanup.SimplifyDictionaryUpdate"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.SimplifyDictionaryUpdate"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.SimplifyDictionaryUpdate"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/simplifydictionaryupdate.md"}
  moderneOnly
>

<RecipeHeader.Title>Convert one-item `dict.update()` to bracket assignment</RecipeHeader.Title>

<RecipeHeader.Description>When `.update()` receives a dictionary literal containing exactly one key, rewrite it as a direct key assignment for clarity and efficiency.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.SimplifyDictionaryUpdate","displayName":"Convert one-item `dict.update()` to bracket assignment","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

