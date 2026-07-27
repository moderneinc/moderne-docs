---
title: "Replace `datetime.utcfromtimestamp()` with `datetime.fromtimestamp(ts, UTC)`"
sidebar_label: "Replace `datetime.utcfromtimestamp()` with `datetime.fromtimestamp(ts, UTC)`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `datetime.utcfromtimestamp()` with `datetime.fromtimestamp(ts, UTC)`"}
  description={"The `datetime.utcfromtimestamp()` method is deprecated in Python 3.12. Replace it with `datetime.fromtimestamp(ts, datetime.UTC)` for timezone-aware datetime objects."}
  fqName={"org.openrewrite.python.migrate.ReplaceDatetimeUtcFromTimestamp"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceDatetimeUtcFromTimestamp"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceDatetimeUtcFromTimestamp"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacedatetimeutcfromtimestamp.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `datetime.utcfromtimestamp()` with `datetime.fromtimestamp(ts, UTC)`</RecipeHeader.Title>

<RecipeHeader.Description>The `datetime.utcfromtimestamp()` method is deprecated in Python 3.12. Replace it with `datetime.fromtimestamp(ts, datetime.UTC)` for timezone-aware datetime objects.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceDatetimeUtcFromTimestamp","displayName":"Replace `datetime.utcfromtimestamp()` with `datetime.fromtimestamp(ts, UTC)`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

