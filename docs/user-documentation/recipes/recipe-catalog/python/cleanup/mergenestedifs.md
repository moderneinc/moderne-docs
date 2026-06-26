---
title: "Collapse nested ``if`` into a single ``and`` condition"
sidebar_label: "Collapse nested ``if`` into a single ``and`` condition"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Collapse nested ``if`` into a single ``and`` condition"}
  description={"When two ``if`` statements are nested with no ``else`` on either, join their conditions with ``and`` and flatten the body."}
  fqName={"org.openrewrite.python.cleanup.MergeNestedIfs"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Collapse nested ``if`` into a single ``and`` condition"}
  description={"When two ``if`` statements are nested with no ``else`` on either, join their conditions with ``and`` and flatten the body."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.MergeNestedIfs"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.MergeNestedIfs"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/mergenestedifs.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.MergeNestedIfs","displayName":"Collapse nested ``if`` into a single ``and`` condition","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

