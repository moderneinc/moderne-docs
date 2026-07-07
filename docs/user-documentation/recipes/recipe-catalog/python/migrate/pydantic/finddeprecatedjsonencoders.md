---
title: "Find deprecated `json_encoders` config option"
sidebar_label: "Find deprecated `json_encoders` config option"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find deprecated `json_encoders` config option"}
  description={"Pydantic deprecated the `json_encoders` option in `ConfigDict`. Its replacements (`@field_serializer` / `@model_serializer` or `Annotated[..., PlainSerializer(...)]`) require restructuring, so this recipe flags its use for review."}
  fqName={"org.openrewrite.python.migrate.pydantic.FindDeprecatedJsonEncoders"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","pydantic","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.pydantic.FindDeprecatedJsonEncoders"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.pydantic.FindDeprecatedJsonEncoders"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/finddeprecatedjsonencoders.md"}
  moderneOnly
>

<RecipeHeader.Title>Find deprecated `json_encoders` config option</RecipeHeader.Title>

<RecipeHeader.Description>Pydantic deprecated the `json_encoders` option in `ConfigDict`. Its replacements (`@field_serializer` / `@model_serializer` or `Annotated[..., PlainSerializer(...)]`) require restructuring, so this recipe flags its use for review.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.pydantic.FindDeprecatedJsonEncoders","displayName":"Find deprecated `json_encoders` config option","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

