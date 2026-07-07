---
title: "Replace `Final` model fields with a default with `ClassVar`"
sidebar_label: "Replace `Final` model fields with a default with `ClassVar`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `Final` model fields with a default with `ClassVar`"}
  description={"Pydantic 2.11 deprecates annotating a model field as `Final` with a default value (such fields were treated as class variables). Replace `Final[X] = default` with `ClassVar[X] = default`, which preserves the existing class-variable behavior and is the replacement Pydantic recommends."}
  fqName={"org.openrewrite.python.migrate.pydantic.ReplaceFinalFieldWithClassVar"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","pydantic","migration","2.11"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.pydantic.ReplaceFinalFieldWithClassVar"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.pydantic.ReplaceFinalFieldWithClassVar"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/replacefinalfieldwithclassvar.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `Final` model fields with a default with `ClassVar`</RecipeHeader.Title>

<RecipeHeader.Description>Pydantic 2.11 deprecates annotating a model field as `Final` with a default value (such fields were treated as class variables). Replace `Final[X] = default` with `ClassVar[X] = default`, which preserves the existing class-variable behavior and is the replacement Pydantic recommends.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.pydantic.ReplaceFinalFieldWithClassVar","displayName":"Replace `Final` model fields with a default with `ClassVar`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

