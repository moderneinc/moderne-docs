---
title: "Replace `datetime.utcnow()` with `datetime.now(UTC)`"
sidebar_label: "Replace `datetime.utcnow()` with `datetime.now(UTC)`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `datetime.utcnow()` with `datetime.now(UTC)`"}
  description={"The `datetime.utcnow()` method is deprecated in Python 3.12. Replace it with `datetime.now(UTC)`, importing `UTC` from `datetime` where the name is not already in scope. The result is timezone-aware where `utcnow()` was naive, so stored or compared values may need migrating alongside the call sites."}
  fqName={"org.openrewrite.python.migrate.ReplaceDatetimeUtcNow"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","datetime","migration","3.12"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceDatetimeUtcNow"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceDatetimeUtcNow"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacedatetimeutcnow.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `datetime.utcnow()` with `datetime.now(UTC)`</RecipeHeader.Title>

<RecipeHeader.Description>The `datetime.utcnow()` method is deprecated in Python 3.12. Replace it with `datetime.now(UTC)`, importing `UTC` from `datetime` where the name is not already in scope. The result is timezone-aware where `utcnow()` was naive, so stored or compared values may need migrating alongside the call sites.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceDatetimeUtcNow","displayName":"Replace `datetime.utcnow()` with `datetime.now(UTC)`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

