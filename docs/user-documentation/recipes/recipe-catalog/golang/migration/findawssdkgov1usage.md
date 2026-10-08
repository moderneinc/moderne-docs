---
title: "Find `aws-sdk-go` v1 usage"
sidebar_label: "Find `aws-sdk-go` v1 usage"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `aws-sdk-go` v1 usage"}
  description={"Mark every `github.com/aws/aws-sdk-go` construct with the `aws-sdk-go-v2` shape that replaces it. AWS ended support for v1 in July 2025. The rewrite recipes cover the constructs with a faithful one-to-one v2 form; this reports those alongside the ones that need a hand migration — the `awserr` error matching, the page iterators and waiters that became types, and the service enums that moved to a `types` sub-package."}
  fqName={"org.openrewrite.golang.migration.FindAwsSdkGoV1Usage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.FindAwsSdkGoV1Usage"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.FindAwsSdkGoV1Usage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/findawssdkgov1usage.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `aws-sdk-go` v1 usage</RecipeHeader.Title>

<RecipeHeader.Description>Mark every `github.com/aws/aws-sdk-go` construct with the `aws-sdk-go-v2` shape that replaces it. AWS ended support for v1 in July 2025. The rewrite recipes cover the constructs with a faithful one-to-one v2 form; this reports those alongside the ones that need a hand migration — the `awserr` error matching, the page iterators and waiters that became types, and the service enums that moved to a `types` sub-package.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.FindAwsSdkGoV1Usage","displayName":"Find `aws-sdk-go` v1 usage","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

