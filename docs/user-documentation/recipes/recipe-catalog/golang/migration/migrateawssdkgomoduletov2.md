---
title: "Migrate a module from `aws-sdk-go` to `aws-sdk-go-v2`"
sidebar_label: "Migrate a module from `aws-sdk-go` to `aws-sdk-go-v2`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate a module from `aws-sdk-go` to `aws-sdk-go-v2`"}
  description={"Migrate the files whose `github.com/aws/aws-sdk-go` usage has a faithful `aws-sdk-go-v2` form, and bring go.mod and go.sum along with them. This is a partial migration by design: v2 replaced the session, the error types, the page iterators and the waiters outright, so a file holding one of those is left as it is. go.mod and go.sum gain every module the migrated imports need, so the result builds as it stands under `-mod=readonly`. Then run `go mod tidy`: the build does not need it, but it drops what the migration leaves behind — the requirements only v1 needed, the go.sum lines nothing reads any more, and an `// indirect` marker on a module the source now imports directly. Run `FindAwsSdkGoV1Usage` to enumerate what remains."}
  fqName={"org.openrewrite.golang.migration.MigrateAwsSdkGoModuleToV2"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.MigrateAwsSdkGoModuleToV2"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.MigrateAwsSdkGoModuleToV2"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/migrateawssdkgomoduletov2.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate a module from `aws-sdk-go` to `aws-sdk-go-v2`</RecipeHeader.Title>

<RecipeHeader.Description>Migrate the files whose `github.com/aws/aws-sdk-go` usage has a faithful `aws-sdk-go-v2` form, and bring go.mod and go.sum along with them. This is a partial migration by design: v2 replaced the session, the error types, the page iterators and the waiters outright, so a file holding one of those is left as it is. go.mod and go.sum gain every module the migrated imports need, so the result builds as it stands under `-mod=readonly`. Then run `go mod tidy`: the build does not need it, but it drops what the migration leaves behind — the requirements only v1 needed, the go.sum lines nothing reads any more, and an `// indirect` marker on a module the source now imports directly. Run `FindAwsSdkGoV1Usage` to enumerate what remains.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.MigrateAwsSdkGoModuleToV2","displayName":"Migrate a module from `aws-sdk-go` to `aws-sdk-go-v2`","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

