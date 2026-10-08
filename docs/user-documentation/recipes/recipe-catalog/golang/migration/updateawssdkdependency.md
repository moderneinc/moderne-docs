---
title: "Require `aws-sdk-go-v2` instead of `aws-sdk-go`"
sidebar_label: "Require `aws-sdk-go-v2` instead of `aws-sdk-go`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Require `aws-sdk-go-v2` instead of `aws-sdk-go`"}
  description={"Require the `github.com/aws/aws-sdk-go-v2` modules the migrated source imports, and drop `github.com/aws/aws-sdk-go` once no file imports it. Only the core, `config` and `credentials` modules are pinned here; every service is its own independently versioned module, so `go mod tidy` adds those from the imports. Does not sync go.sum."}
  fqName={"org.openrewrite.golang.migration.UpdateAwsSdkDependency"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.UpdateAwsSdkDependency"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.UpdateAwsSdkDependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/updateawssdkdependency.md"}
  moderneOnly
>

<RecipeHeader.Title>Require `aws-sdk-go-v2` instead of `aws-sdk-go`</RecipeHeader.Title>

<RecipeHeader.Description>Require the `github.com/aws/aws-sdk-go-v2` modules the migrated source imports, and drop `github.com/aws/aws-sdk-go` once no file imports it. Only the core, `config` and `credentials` modules are pinned here; every service is its own independently versioned module, so `go mod tidy` adds those from the imports. Does not sync go.sum.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.UpdateAwsSdkDependency","displayName":"Require `aws-sdk-go-v2` instead of `aws-sdk-go`","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

