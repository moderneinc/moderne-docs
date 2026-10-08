---
title: "Migrate `aws-sdk-go` to `aws-sdk-go-v2`"
sidebar_label: "Migrate `aws-sdk-go` to `aws-sdk-go-v2`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `aws-sdk-go` to `aws-sdk-go-v2`"}
  description={"Migrate `github.com/aws/aws-sdk-go`, whose support AWS ended in July 2025, to `github.com/aws/aws-sdk-go-v2`. The go directive rises to the Go 1.24 the v2 modules require; the session becomes a config loaded through a context, with each `aws.Config` field it carried — the region, the endpoint, the retry count, a static or shared credentials provider — becoming the loader option that replaces it; each client is built with `NewFromConfig`, a per-client region override becoming a functional option; and every operation takes a context. A config built field by field instead of in one literal keeps its shape: the load moves to the local's declaration and the writes that follow retarget onto v2's own config, with the S3 addressing style — which v2 holds on the client's options rather than the config — hoisted into a local the constructor reads. Shapes and enums follow the manifest to the `types` sub-package, an enum field losing the `aws.String` its `*string` needed and an enum list changing element type with it; v1's fluent setters become assignments; and a field v2 holds by value loses the dereference that read it, or regains the pointer where it was passed on — v1 could report such a field as nil and v2 cannot, so review a nil test downstream of one. The packages v2 relocated follow too: `s3manager` becomes `feature/s3/manager`, `ec2metadata` becomes `feature/ec2/imds` and `stscreds` moves up beside `credentials`, each bound back to the name the file already spells, and the per-service `iface` packages v2 deleted are regenerated into the module under `internal/awsiface`, so the interfaces mocks embed still exist. Where v2 restructured rather than renamed, a wrapper keeps the v1 call site's shape: a page iterator's callback is driven by the v2 paginator in a function literal called on the spot, a waiter becomes v2's waiter type bounded by a generated constant, an inline `session.New` becomes a generated loader that panics as `session.Must` did, `EC2Metadata.Region` goes through a generated helper, and a list or map v2 holds by value is converted at the API boundary by generated helpers so the code around it keeps its v1 shape. v1 took no context anywhere v2 takes one, so a function with none in scope gets `context.TODO()` — review those and plumb a real context through. A package migrates whole or not at all, since a half-migrated one does not compile, but the module does not: a file holding a construct with no faithful v2 form — the v1 request handler stack, a session compared to nil, a shared-credentials provider assigned to a config field, a v1-only helper the manifest cannot account for — is left as it is along with the rest of its package, each listed in the blockers data table, and the rest of the module moves around it. Both requires then sit in the go.mod side by side. A client and a shape cross package boundaries, so callers of what stayed behind will not compile until it is migrated by hand; that table is the list to work through, and `FindAwsSdkGoV1Usage` marks the constructs within each file. Run `go mod tidy` afterwards to resolve the per-service modules."}
  fqName={"org.openrewrite.golang.migration.MigrateAwsSdkGoToV2"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.MigrateAwsSdkGoToV2"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.MigrateAwsSdkGoToV2"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/migrateawssdkgotov2.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `aws-sdk-go` to `aws-sdk-go-v2`</RecipeHeader.Title>

<RecipeHeader.Description>Migrate `github.com/aws/aws-sdk-go`, whose support AWS ended in July 2025, to `github.com/aws/aws-sdk-go-v2`. The go directive rises to the Go 1.24 the v2 modules require; the session becomes a config loaded through a context, with each `aws.Config` field it carried — the region, the endpoint, the retry count, a static or shared credentials provider — becoming the loader option that replaces it; each client is built with `NewFromConfig`, a per-client region override becoming a functional option; and every operation takes a context. A config built field by field instead of in one literal keeps its shape: the load moves to the local's declaration and the writes that follow retarget onto v2's own config, with the S3 addressing style — which v2 holds on the client's options rather than the config — hoisted into a local the constructor reads. Shapes and enums follow the manifest to the `types` sub-package, an enum field losing the `aws.String` its `*string` needed and an enum list changing element type with it; v1's fluent setters become assignments; and a field v2 holds by value loses the dereference that read it, or regains the pointer where it was passed on — v1 could report such a field as nil and v2 cannot, so review a nil test downstream of one. The packages v2 relocated follow too: `s3manager` becomes `feature/s3/manager`, `ec2metadata` becomes `feature/ec2/imds` and `stscreds` moves up beside `credentials`, each bound back to the name the file already spells, and the per-service `iface` packages v2 deleted are regenerated into the module under `internal/awsiface`, so the interfaces mocks embed still exist. Where v2 restructured rather than renamed, a wrapper keeps the v1 call site's shape: a page iterator's callback is driven by the v2 paginator in a function literal called on the spot, a waiter becomes v2's waiter type bounded by a generated constant, an inline `session.New` becomes a generated loader that panics as `session.Must` did, `EC2Metadata.Region` goes through a generated helper, and a list or map v2 holds by value is converted at the API boundary by generated helpers so the code around it keeps its v1 shape. v1 took no context anywhere v2 takes one, so a function with none in scope gets `context.TODO()` — review those and plumb a real context through. A package migrates whole or not at all, since a half-migrated one does not compile, but the module does not: a file holding a construct with no faithful v2 form — the v1 request handler stack, a session compared to nil, a shared-credentials provider assigned to a config field, a v1-only helper the manifest cannot account for — is left as it is along with the rest of its package, each listed in the blockers data table, and the rest of the module moves around it. Both requires then sit in the go.mod side by side. A client and a shape cross package boundaries, so callers of what stayed behind will not compile until it is migrated by hand; that table is the list to work through, and `FindAwsSdkGoV1Usage` marks the constructs within each file. Run `go mod tidy` afterwards to resolve the per-service modules.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.MigrateAwsSdkGoToV2","displayName":"Migrate `aws-sdk-go` to `aws-sdk-go-v2`","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

