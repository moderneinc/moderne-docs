---
title: "Upgrade to Pydantic 2.10"
sidebar_label: "Upgrade to Pydantic 2.10"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to Pydantic 2.10"}
  description={"Flag and migrate code affected by deprecations introduced in Pydantic 2.10, such as the deprecated `schema_generator` config option and the discouraged `Field(...)` Ellipsis form. Also flags the deprecated `json_encoders` config option."}
  fqName={"org.openrewrite.python.migrate.pydantic.UpgradeToPydantic210"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={["python","pydantic","migration","2.10"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.pydantic.UpgradeToPydantic210"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.pydantic.UpgradeToPydantic210"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/upgradetopydantic210.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade to Pydantic 2.10</RecipeHeader.Title>

<RecipeHeader.Description>Flag and migrate code affected by deprecations introduced in Pydantic 2.10, such as the deprecated `schema_generator` config option and the discouraged `Field(...)` Ellipsis form. Also flags the deprecated `json_encoders` config option.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Find deprecated `schema_generator` config option","href":"/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/finddeprecatedschemagenerator/"},{"name":"Find deprecated `json_encoders` config option","href":"/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/finddeprecatedjsonencoders/"},{"name":"Remove `...` (Ellipsis) from `Field()`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/removeellipsisfromfield/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.pydantic.UpgradeToPydantic210","displayName":"Upgrade to Pydantic 2.10","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

