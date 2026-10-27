---
title: "Find deprecated `ByteString`"
sidebar_label: "Find deprecated `ByteString`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find deprecated `ByteString`"}
  description={"`collections.abc.ByteString` (deprecated in Python 3.12) and `typing.ByteString` (deprecated in Python 3.9) are scheduled for removal in Python 3.17. Use `collections.abc.Buffer` to accept any buffer, or a union of the types the code supports, such as `bytes | bytearray | memoryview`."}
  fqName={"org.openrewrite.python.migrate.FindByteString"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","3.17","migration","typing","3.12"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindByteString"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindByteString"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findbytestring.md"}
  moderneOnly
>

<RecipeHeader.Title>Find deprecated `ByteString`</RecipeHeader.Title>

<RecipeHeader.Description>`collections.abc.ByteString` (deprecated in Python 3.12) and `typing.ByteString` (deprecated in Python 3.9) are scheduled for removal in Python 3.17. Use `collections.abc.Buffer` to accept any buffer, or a union of the types the code supports, such as `bytes | bytearray | memoryview`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindByteString","displayName":"Find deprecated `ByteString`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

