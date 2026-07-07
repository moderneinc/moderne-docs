---
title: "Find `@model_validator(mode='after')` on a classmethod"
sidebar_label: "Find `@model_validator(mode='after')` on a classmethod"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `@model_validator(mode='after')` on a classmethod"}
  description={"Pydantic 2.12 deprecated `@model_validator` with `mode='after'` on a classmethod; the implicit classmethod conversion for `after` model validators is removed in V3. Such validators should be instance methods (`self`, no `@classmethod`). This recipe flags the decorator for review, since the rewrite is not safe to mechanize. `field_validator` is unaffected."}
  fqName={"org.openrewrite.python.migrate.pydantic.FindModelValidatorAfterClassmethod"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","pydantic","migration","2.12"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.pydantic.FindModelValidatorAfterClassmethod"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.pydantic.FindModelValidatorAfterClassmethod"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/findmodelvalidatorafterclassmethod.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `@model_validator(mode='after')` on a classmethod</RecipeHeader.Title>

<RecipeHeader.Description>Pydantic 2.12 deprecated `@model_validator` with `mode='after'` on a classmethod; the implicit classmethod conversion for `after` model validators is removed in V3. Such validators should be instance methods (`self`, no `@classmethod`). This recipe flags the decorator for review, since the rewrite is not safe to mechanize. `field_validator` is unaffected.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.pydantic.FindModelValidatorAfterClassmethod","displayName":"Find `@model_validator(mode='after')` on a classmethod","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

