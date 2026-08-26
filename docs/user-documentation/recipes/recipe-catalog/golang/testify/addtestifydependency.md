---
title: "Add the testify dependency to go.mod"
sidebar_label: "Add the testify dependency to go.mod"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add the testify dependency to go.mod"}
  description={"Add a `require github.com/stretchr/testify` directive to go.mod when a package in the module imports testify but go.mod does not yet require it. Does not sync go.sum or add transitive dependencies; a `go mod tidy` is still needed to complete resolution."}
  fqName={"org.openrewrite.golang.testify.AddTestifyDependency"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.testify.AddTestifyDependency"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.testify.AddTestifyDependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/testify/addtestifydependency.md"}
  moderneOnly
>

<RecipeHeader.Title>Add the testify dependency to go.mod</RecipeHeader.Title>

<RecipeHeader.Description>Add a `require github.com/stretchr/testify` directive to go.mod when a package in the module imports testify but go.mod does not yet require it. Does not sync go.sum or add transitive dependencies; a `go mod tidy` is still needed to complete resolution.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.testify.AddTestifyDependency","displayName":"Add the testify dependency to go.mod","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

