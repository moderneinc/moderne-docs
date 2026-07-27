---
title: "Upgrade to Pydantic 2.12"
sidebar_label: "Upgrade to Pydantic 2.12"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to Pydantic 2.12"}
  description={"Migrate code affected by changes introduced in Pydantic 2.12 (and 2.10/2.11). Flags `serialize_as_any` usage affected by the 2.12 unification with the `SerializeAsAny` annotation."}
  fqName={"org.openrewrite.python.migrate.pydantic.UpgradeToPydantic212"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={["python","pydantic","migration","2.12"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.pydantic.UpgradeToPydantic212"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.pydantic.UpgradeToPydantic212"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/upgradetopydantic212.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade to Pydantic 2.12</RecipeHeader.Title>

<RecipeHeader.Description>Migrate code affected by changes introduced in Pydantic 2.12 (and 2.10/2.11). Flags `serialize_as_any` usage affected by the 2.12 unification with the `SerializeAsAny` annotation.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade to Pydantic 2.11","href":"/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/upgradetopydantic211/"},{"name":"Find `serialize_as_any` usage affected by the Pydantic 2.12 unification","href":"/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/findserializeasanyusage/"},{"name":"Find `@model_validator(mode='after')` on a classmethod","href":"/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/findmodelvalidatorafterclassmethod/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.pydantic.UpgradeToPydantic212","displayName":"Upgrade to Pydantic 2.12","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

