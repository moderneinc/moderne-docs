---
title: "Adopt stretchr/testify"
sidebar_label: "Adopt stretchr/testify"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Adopt stretchr/testify"}
  description={"Migrate hand-written test assertions to the `github.com/stretchr/testify` library and add the dependency to go.mod. Converts error guards to `require`/`assert` `NoError`/`Error`, length checks to `Len`, equality checks to `Equal`/`NotEqual`, nil checks to `Nil`/`NotNil`, and boolean checks to `True`/`False`, then adds the testify require. Does not sync go.sum; a `go mod tidy` is still needed to complete resolution."}
  fqName={"org.openrewrite.golang.testify.AdoptTestify"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.testify.AdoptTestify"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.testify.AdoptTestify"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/testify/adopttestify.md"}
  moderneOnly
>

<RecipeHeader.Title>Adopt stretchr/testify</RecipeHeader.Title>

<RecipeHeader.Description>Migrate hand-written test assertions to the `github.com/stretchr/testify` library and add the dependency to go.mod. Converts error guards to `require`/`assert` `NoError`/`Error`, length checks to `Len`, equality checks to `Equal`/`NotEqual`, nil checks to `Nil`/`NotNil`, and boolean checks to `True`/`False`, then adds the testify require. Does not sync go.sum; a `go mod tidy` is still needed to complete resolution.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.testify.AdoptTestify","displayName":"Adopt stretchr/testify","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

