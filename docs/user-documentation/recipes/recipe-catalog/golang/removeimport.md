---
title: "Remove import"
sidebar_label: "Remove import"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove import"}
  description={"Remove an `import` statement from a Go compilation unit. Matches by import path; any form (regular, aliased, dot, blank) is removed."}
  fqName={"org.openrewrite.golang.RemoveImport"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.RemoveImport"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.RemoveImport"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/removeimport.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove import</RecipeHeader.Title>

<RecipeHeader.Description>Remove an `import` statement from a Go compilation unit. Matches by import path; any form (regular, aliased, dot, blank) is removed.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"packagePath","required":true,"description":"The import path to remove.","example":"fmt"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.golang.RemoveImport","displayName":"Remove import","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":true,"cliOptions":" --recipe-option \"packagePath=fmt\""}}>

## Usage

</UsageList>

