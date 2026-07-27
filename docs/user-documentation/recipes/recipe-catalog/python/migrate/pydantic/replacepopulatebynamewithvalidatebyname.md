---
title: "Replace `populate_by_name` with `validate_by_name`"
sidebar_label: "Replace `populate_by_name` with `validate_by_name`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `populate_by_name` with `validate_by_name`"}
  description={"Pydantic 2.11 introduced `validate_by_name` as the equivalent of `populate_by_name`, which is pending deprecation in Pydantic V3. Rename `ConfigDict(populate_by_name=...)` to `ConfigDict(validate_by_name=...)`. This is behavior-preserving (`validate_by_alias` defaults to `True`) and future-proofs the configuration."}
  fqName={"org.openrewrite.python.migrate.pydantic.ReplacePopulateByNameWithValidateByName"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","pydantic","migration","2.11"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.pydantic.ReplacePopulateByNameWithValidateByName"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.pydantic.ReplacePopulateByNameWithValidateByName"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/replacepopulatebynamewithvalidatebyname.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `populate_by_name` with `validate_by_name`</RecipeHeader.Title>

<RecipeHeader.Description>Pydantic 2.11 introduced `validate_by_name` as the equivalent of `populate_by_name`, which is pending deprecation in Pydantic V3. Rename `ConfigDict(populate_by_name=...)` to `ConfigDict(validate_by_name=...)`. This is behavior-preserving (`validate_by_alias` defaults to `True`) and future-proofs the configuration.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.pydantic.ReplacePopulateByNameWithValidateByName","displayName":"Replace `populate_by_name` with `validate_by_name`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

