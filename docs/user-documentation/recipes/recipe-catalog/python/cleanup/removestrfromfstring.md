---
title: "Strip ``str()`` from f-string placeholders"
sidebar_label: "Strip ``str()`` from f-string placeholders"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Strip ``str()`` from f-string placeholders"}
  description={"F-string placeholders convert values to strings automatically, so wrapping expressions in ``str()`` inside ``{...}`` is redundant."}
  fqName={"org.openrewrite.python.cleanup.RemoveStrFromFstring"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveStrFromFstring"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveStrFromFstring"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removestrfromfstring.md"}
  moderneOnly
>

<RecipeHeader.Title>Strip ``str()`` from f-string placeholders</RecipeHeader.Title>

<RecipeHeader.Description>F-string placeholders convert values to strings automatically, so wrapping expressions in ``str()`` inside ``&#123;...}`` is redundant.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveStrFromFstring","displayName":"Strip ``str()`` from f-string placeholders","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

