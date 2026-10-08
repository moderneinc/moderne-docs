---
title: "Record New Relic metrics through OpenTelemetry"
sidebar_label: "Record New Relic metrics through OpenTelemetry"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Record New Relic metrics through OpenTelemetry"}
  description={"Rewrite `harvester.RecordMetric(telemetry.Count{…})` and `telemetry.Gauge{…}` as an OpenTelemetry `Float64Counter.Add` / `Float64Gauge.Record` on a meter from the global provider. The instrument is created at the call site inside a scoping block, which keeps one statement replacing one; hoist it to a package-level instrument when reviewing. `Timestamp` and `Interval` are dropped, since OpenTelemetry stamps a measurement when it is collected. A call site is left alone when its attribute values are not all `string`, `bool`, `int`, `int64` or `float64`, when the enclosing function has no `context.Context` in scope, or when the harvester is a local variable the rewrite would leave unused."}
  fqName={"org.openrewrite.golang.migration.MigrateNewRelicMetricRecording"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.MigrateNewRelicMetricRecording"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.MigrateNewRelicMetricRecording"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/migratenewrelicmetricrecording.md"}
  moderneOnly
>

<RecipeHeader.Title>Record New Relic metrics through OpenTelemetry</RecipeHeader.Title>

<RecipeHeader.Description>Rewrite `harvester.RecordMetric(telemetry.Count{…})` and `telemetry.Gauge{…}` as an OpenTelemetry `Float64Counter.Add` / `Float64Gauge.Record` on a meter from the global provider. The instrument is created at the call site inside a scoping block, which keeps one statement replacing one; hoist it to a package-level instrument when reviewing. `Timestamp` and `Interval` are dropped, since OpenTelemetry stamps a measurement when it is collected. A call site is left alone when its attribute values are not all `string`, `bool`, `int`, `int64` or `float64`, when the enclosing function has no `context.Context` in scope, or when the harvester is a local variable the rewrite would leave unused.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.MigrateNewRelicMetricRecording","displayName":"Record New Relic metrics through OpenTelemetry","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

