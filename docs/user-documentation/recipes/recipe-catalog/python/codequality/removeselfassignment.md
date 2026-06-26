---
title: "Remove self-assignments"
sidebar_label: "Remove self-assignments"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove self-assignments"}
  description={"Remove statements that assign a variable to itself (`x = x`, `self.x = self.x`), since they have no effect."}
  fqName={"org.openrewrite.python.codequality.RemoveSelfAssignment"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Remove self-assignments"}
  description={"Remove statements that assign a variable to itself (`x = x`, `self.x = self.x`), since they have no effect."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={["RSPEC-S1656","python","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.codequality.RemoveSelfAssignment"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.codequality.RemoveSelfAssignment"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/codequality/removeselfassignment.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.codequality.RemoveSelfAssignment","displayName":"Remove self-assignments","pipPackage":"openrewrite-migrate-python"}}>

## Usage

</UsageList>

