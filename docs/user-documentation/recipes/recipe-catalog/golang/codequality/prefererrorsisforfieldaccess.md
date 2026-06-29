---
title: "Prefer errors.Is for package-qualified sentinel comparison"
sidebar_label: "Prefer errors.Is for package-qualified sentinel comparison"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer errors.Is for package-qualified sentinel comparison"}
  description={"Replace `err == sentinel` with `errors.Is(err, sentinel)` where the sentinel is a package-qualified value (e.g., `sql.ErrNoRows`). Use `errors.Is` for correct wrapped error handling."}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsForFieldAccess"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferErrorsIsForFieldAccess"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferErrorsIsForFieldAccess"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/prefererrorsisforfieldaccess.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer errors.Is for package-qualified sentinel comparison</RecipeHeader.Title>

<RecipeHeader.Description>Replace `err == sentinel` with `errors.Is(err, sentinel)` where the sentinel is a package-qualified value (e.g., `sql.ErrNoRows`). Use `errors.Is` for correct wrapped error handling.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferErrorsIsForFieldAccess","displayName":"Prefer errors.Is for package-qualified sentinel comparison","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

