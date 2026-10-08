---
title: "Migrate `newrelic-telemetry-sdk-go` to the OpenTelemetry Go SDK"
sidebar_label: "Migrate `newrelic-telemetry-sdk-go` to the OpenTelemetry Go SDK"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `newrelic-telemetry-sdk-go` to the OpenTelemetry Go SDK"}
  description={"Move the mechanical part of a `github.com/newrelic/newrelic-telemetry-sdk-go` migration: metric recordings become OpenTelemetry instrument recordings, and go.mod gains the OpenTelemetry requires. This is a partial migration by design — the harvester wiring, spans, events and logs have no faithful one-to-one rewrite, so run `FindNewRelicTelemetrySdkUsage` to enumerate what is left and replace the harvester with an `sdkmetric.MeterProvider` behind an OTLP exporter by hand. Run `go mod tidy` afterwards."}
  fqName={"org.openrewrite.golang.migration.MigrateNewRelicTelemetryToOpenTelemetry"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.MigrateNewRelicTelemetryToOpenTelemetry"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.MigrateNewRelicTelemetryToOpenTelemetry"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/migratenewrelictelemetrytoopentelemetry.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `newrelic-telemetry-sdk-go` to the OpenTelemetry Go SDK</RecipeHeader.Title>

<RecipeHeader.Description>Move the mechanical part of a `github.com/newrelic/newrelic-telemetry-sdk-go` migration: metric recordings become OpenTelemetry instrument recordings, and go.mod gains the OpenTelemetry requires. This is a partial migration by design — the harvester wiring, spans, events and logs have no faithful one-to-one rewrite, so run `FindNewRelicTelemetrySdkUsage` to enumerate what is left and replace the harvester with an `sdkmetric.MeterProvider` behind an OTLP exporter by hand. Run `go mod tidy` afterwards.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.MigrateNewRelicTelemetryToOpenTelemetry","displayName":"Migrate `newrelic-telemetry-sdk-go` to the OpenTelemetry Go SDK","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

