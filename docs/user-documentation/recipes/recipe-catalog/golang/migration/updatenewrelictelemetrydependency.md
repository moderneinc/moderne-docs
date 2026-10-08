---
title: "Require the OpenTelemetry Go SDK instead of `newrelic-telemetry-sdk-go`"
sidebar_label: "Require the OpenTelemetry Go SDK instead of `newrelic-telemetry-sdk-go`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Require the OpenTelemetry Go SDK instead of `newrelic-telemetry-sdk-go`"}
  description={"Require `go.opentelemetry.io/otel v1.46.0` and `go.opentelemetry.io/otel/metric` once the source records through them, and drop `github.com/newrelic/newrelic-telemetry-sdk-go` once nothing imports it. Exporting to New Relic also needs an OTLP exporter and `go.opentelemetry.io/otel/sdk`, which the hand-written provider wiring pulls in. Does not sync go.sum, so a `go mod tidy` is still needed."}
  fqName={"org.openrewrite.golang.migration.UpdateNewRelicTelemetryDependency"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.UpdateNewRelicTelemetryDependency"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.UpdateNewRelicTelemetryDependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/updatenewrelictelemetrydependency.md"}
  moderneOnly
>

<RecipeHeader.Title>Require the OpenTelemetry Go SDK instead of `newrelic-telemetry-sdk-go`</RecipeHeader.Title>

<RecipeHeader.Description>Require `go.opentelemetry.io/otel v1.46.0` and `go.opentelemetry.io/otel/metric` once the source records through them, and drop `github.com/newrelic/newrelic-telemetry-sdk-go` once nothing imports it. Exporting to New Relic also needs an OTLP exporter and `go.opentelemetry.io/otel/sdk`, which the hand-written provider wiring pulls in. Does not sync go.sum, so a `go mod tidy` is still needed.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.UpdateNewRelicTelemetryDependency","displayName":"Require the OpenTelemetry Go SDK instead of `newrelic-telemetry-sdk-go`","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

