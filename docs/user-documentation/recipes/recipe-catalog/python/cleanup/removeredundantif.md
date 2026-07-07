---
title: "Simplify negated ``elif`` to ``else``"
sidebar_label: "Simplify negated ``elif`` to ``else``"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify negated ``elif`` to ``else``"}
  description={"When an ``elif`` condition is the exact negation of the preceding ``if``, replace it with ``else`` since the test is redundant."}
  fqName={"org.openrewrite.python.cleanup.RemoveRedundantIf"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveRedundantIf"}
  artifact={"openrewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveRedundantIf"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removeredundantif.md"}
  moderneOnly
>

<RecipeHeader.Title>Simplify negated ``elif`` to ``else``</RecipeHeader.Title>

<RecipeHeader.Description>When an ``elif`` condition is the exact negation of the preceding ``if``, replace it with ``else`` since the test is redundant.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveRedundantIf","displayName":"Simplify negated ``elif`` to ``else``","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

