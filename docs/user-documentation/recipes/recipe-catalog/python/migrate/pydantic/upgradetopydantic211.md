---
title: "Upgrade to Pydantic 2.11"
sidebar_label: "Upgrade to Pydantic 2.11"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to Pydantic 2.11"}
  description={"Migrate code affected by deprecations introduced in Pydantic 2.11 (and 2.10). Rewrites instance access of `model_fields` / `model_computed_fields` to class access, rewrites `Final` model fields with default values to `ClassVar`, and renames `populate_by_name` to `validate_by_name`."}
  fqName={"org.openrewrite.python.migrate.pydantic.UpgradeToPydantic211"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={["python","pydantic","migration","2.11"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.pydantic.UpgradeToPydantic211"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.pydantic.UpgradeToPydantic211"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/upgradetopydantic211.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade to Pydantic 2.11</RecipeHeader.Title>

<RecipeHeader.Description>Migrate code affected by deprecations introduced in Pydantic 2.11 (and 2.10). Rewrites instance access of `model_fields` / `model_computed_fields` to class access, rewrites `Final` model fields with default values to `ClassVar`, and renames `populate_by_name` to `validate_by_name`.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade to Pydantic 2.10","href":"/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/upgradetopydantic210/"},{"name":"Replace instance access of `model_fields` / `model_computed_fields`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/replacemodelfieldsinstanceaccess/"},{"name":"Replace `Final` model fields with a default with `ClassVar`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/replacefinalfieldwithclassvar/"},{"name":"Replace `populate_by_name` with `validate_by_name`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/replacepopulatebynamewithvalidatebyname/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.pydantic.UpgradeToPydantic211","displayName":"Upgrade to Pydantic 2.11","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

