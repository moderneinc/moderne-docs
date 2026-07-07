---
title: "Remove conditional with identical branches"
sidebar_label: "Remove conditional with identical branches"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove conditional with identical branches"}
  description={"Replace `if`/`elif`/`else` chains where every branch has the same body with just the body, since the condition has no effect on what code executes."}
  fqName={"org.openrewrite.python.codequality.AllBranchesIdentical"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","RSPEC-S3923","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.codequality.AllBranchesIdentical"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.codequality.AllBranchesIdentical"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/codequality/allbranchesidentical.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove conditional with identical branches</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if`/`elif`/`else` chains where every branch has the same body with just the body, since the condition has no effect on what code executes.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.codequality.AllBranchesIdentical","displayName":"Remove conditional with identical branches","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

