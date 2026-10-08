---
title: "Find `backoff` decorators that need a hand migration"
sidebar_label: "Find `backoff` decorators that need a hand migration"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `backoff` decorators that need a hand migration"}
  description={"Mark every `@backoff.on_exception` and `@backoff.on_predicate` that `org.openrewrite.python.migrate.ReplaceBackoffDecoratorsWithTenacity` declines to rewrite, with the reason, and record it in a data table. This changes no behaviour; it scopes the hand migration left after the mechanical one. The markup it prints is not valid Python, so run it for a report rather than as part of a migration."}
  fqName={"org.openrewrite.python.migrate.FindBackoffDecoratorsNotMigrated"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","search","backoff","tenacity","retry"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindBackoffDecoratorsNotMigrated"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindBackoffDecoratorsNotMigrated"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findbackoffdecoratorsnotmigrated.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `backoff` decorators that need a hand migration</RecipeHeader.Title>

<RecipeHeader.Description>Mark every `@backoff.on_exception` and `@backoff.on_predicate` that `org.openrewrite.python.migrate.ReplaceBackoffDecoratorsWithTenacity` declines to rewrite, with the reason, and record it in a data table. This changes no behaviour; it scopes the hand migration left after the mechanical one. The markup it prints is not valid Python, so run it for a report rather than as part of a migration.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindBackoffDecoratorsNotMigrated","displayName":"Find `backoff` decorators that need a hand migration","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.python.migrate.table.BackoffDecorators","displayName":"Backoff decorators needing a hand migration","description":"Backoff retry decorators whose behaviour tenacity cannot reproduce mechanically.","columns":[{"name":"Source path","description":"The path of the file holding the decorator."},{"name":"Decorator","description":"Which backoff decorator it is, `on_exception` or `on_predicate`."},{"name":"Reason","description":"Why tenacity cannot reproduce the decorator's behaviour."}]}]}>

## Data tables

</DataTableList>

