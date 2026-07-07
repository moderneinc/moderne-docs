---
title: "Replace instance access of `model_fields` / `model_computed_fields`"
sidebar_label: "Replace instance access of `model_fields` / `model_computed_fields`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace instance access of `model_fields` / `model_computed_fields`"}
  description={"Pydantic 2.11 deprecated accessing `model_fields` and `model_computed_fields` on a model instance; these are removed in Pydantic 3.0. Replace `<instance>.model_fields` with `type(<instance>).model_fields` (and likewise for `model_computed_fields`) when the receiver resolves to a Pydantic model, so the attribute is accessed on the class. Class access and `cls` access are left untouched."}
  fqName={"org.openrewrite.python.migrate.pydantic.ReplaceModelFieldsInstanceAccess"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","pydantic","migration","2.11"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.pydantic.ReplaceModelFieldsInstanceAccess"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.pydantic.ReplaceModelFieldsInstanceAccess"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/replacemodelfieldsinstanceaccess.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace instance access of `model_fields` / `model_computed_fields`</RecipeHeader.Title>

<RecipeHeader.Description>Pydantic 2.11 deprecated accessing `model_fields` and `model_computed_fields` on a model instance; these are removed in Pydantic 3.0. Replace `<instance>.model_fields` with `type(<instance>).model_fields` (and likewise for `model_computed_fields`) when the receiver resolves to a Pydantic model, so the attribute is accessed on the class. Class access and `cls` access are left untouched.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.pydantic.ReplaceModelFieldsInstanceAccess","displayName":"Replace instance access of `model_fields` / `model_computed_fields`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

