---
title: "Migrate the deprecated `avro-python3` package to `avro`"
sidebar_label: "Migrate the deprecated `avro-python3` package to `avro`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate the deprecated `avro-python3` package to `avro`"}
  description={"Replace the deprecated `avro-python3` distribution with its maintained successor, Apache `avro`. Both install the same top-level `avro` import package, so module imports are unchanged, but `avro-python3`'s `avro.schema.Parse` was renamed to the lowercase `avro.schema.parse` (and `Parse` removed) in `avro` 1.11+, so that reference is rewritten. The dependency swap is applied by `org.openrewrite.python.ChangeDependency`."}
  fqName={"org.openrewrite.python.migrate.MigrateAvroPython3ToAvro"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={["python","migration","avro","dependencies"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.MigrateAvroPython3ToAvro"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.MigrateAvroPython3ToAvro"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/migrateavropython3toavro.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate the deprecated `avro-python3` package to `avro`</RecipeHeader.Title>

<RecipeHeader.Description>Replace the deprecated `avro-python3` distribution with its maintained successor, Apache `avro`. Both install the same top-level `avro` import package, so module imports are unchanged, but `avro-python3`'s `avro.schema.Parse` was renamed to the lowercase `avro.schema.parse` (and `Parse` removed) in `avro` 1.11+, so that reference is rewritten. The dependency swap is applied by `org.openrewrite.python.ChangeDependency`.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/python/changetype/"},{"name":"org.openrewrite.python.ChangeDependency","href":"/user-documentation/recipes/recipe-catalog/python/changedependency/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.MigrateAvroPython3ToAvro","displayName":"Migrate the deprecated `avro-python3` package to `avro`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

