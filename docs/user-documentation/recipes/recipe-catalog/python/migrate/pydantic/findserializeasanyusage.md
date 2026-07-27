---
title: "Find `serialize_as_any` usage affected by the Pydantic 2.12 unification"
sidebar_label: "Find `serialize_as_any` usage affected by the Pydantic 2.12 unification"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `serialize_as_any` usage affected by the Pydantic 2.12 unification"}
  description={"Pydantic 2.12 unified the `serialize_as_any` flag with the `SerializeAsAny` annotation, which can change serialization output versus 2.11. This recipe flags `serialize_as_any=` on `model_dump` / `model_dump_json` (and `TypeAdapter.dump_python` / `dump_json`) for review, since there is no safe mechanical rewrite."}
  fqName={"org.openrewrite.python.migrate.pydantic.FindSerializeAsAnyUsage"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","pydantic","migration","2.12"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.pydantic.FindSerializeAsAnyUsage"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.pydantic.FindSerializeAsAnyUsage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/findserializeasanyusage.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `serialize_as_any` usage affected by the Pydantic 2.12 unification</RecipeHeader.Title>

<RecipeHeader.Description>Pydantic 2.12 unified the `serialize_as_any` flag with the `SerializeAsAny` annotation, which can change serialization output versus 2.11. This recipe flags `serialize_as_any=` on `model_dump` / `model_dump_json` (and `TypeAdapter.dump_python` / `dump_json`) for review, since there is no safe mechanical rewrite.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.pydantic.FindSerializeAsAnyUsage","displayName":"Find `serialize_as_any` usage affected by the Pydantic 2.12 unification","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

