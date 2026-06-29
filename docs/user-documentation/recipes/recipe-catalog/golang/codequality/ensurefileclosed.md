---
title: "Ensure file closed"
sidebar_label: "Ensure file closed"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Ensure file closed"}
  description={"Find calls to `os.Open`, `os.Create`, and `os.OpenFile`. Ensure the returned file is closed to avoid resource leaks."}
  fqName={"org.openrewrite.golang.codequality.EnsureFileClosed"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.EnsureFileClosed"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.EnsureFileClosed"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/ensurefileclosed.md"}
  moderneOnly
>

<RecipeHeader.Title>Ensure file closed</RecipeHeader.Title>

<RecipeHeader.Description>Find calls to `os.Open`, `os.Create`, and `os.OpenFile`. Ensure the returned file is closed to avoid resource leaks.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.EnsureFileClosed","displayName":"Ensure file closed","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

