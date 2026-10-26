---
title: "Require `aws-sdk-go-v2` instead of `aws-sdk-go`"
sidebar_label: "Require `aws-sdk-go-v2` instead of `aws-sdk-go`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Require `aws-sdk-go-v2` instead of `aws-sdk-go`"}
  description={"Require the `github.com/aws/aws-sdk-go-v2` modules the migrated source imports — the core, `config`, `credentials`, the relocated `feature` packages and each service — along with the indirect requirements they bring, and add their go.sum lines, so the module builds without a `go mod tidy`. Drop `github.com/aws/aws-sdk-go` once no file imports it. A module the build list already selects at a higher version keeps it. Then run `go mod tidy`: the build does not need it, but it drops what the migration leaves behind — the requirements only v1 needed, the go.sum lines nothing reads any more, and an `// indirect` marker on a module the source now imports directly."}
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

<RecipeHeader.Description>Require the `github.com/aws/aws-sdk-go-v2` modules the migrated source imports — the core, `config`, `credentials`, the relocated `feature` packages and each service — along with the indirect requirements they bring, and add their go.sum lines, so the module builds without a `go mod tidy`. Drop `github.com/aws/aws-sdk-go` once no file imports it. A module the build list already selects at a higher version keeps it. Then run `go mod tidy`: the build does not need it, but it drops what the migration leaves behind — the requirements only v1 needed, the go.sum lines nothing reads any more, and an `// indirect` marker on a module the source now imports directly.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.UpdateAwsSdkDependency","displayName":"Require `aws-sdk-go-v2` instead of `aws-sdk-go`","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

