---
title: "Replace `backoff` decorators with `tenacity`"
sidebar_label: "Replace `backoff` decorators with `tenacity`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `backoff` decorators with `tenacity`"}
  description={"Rewrite `@backoff.on_exception` and `@backoff.on_predicate` as tenacity's `@retry`, mapping `max_tries` and `max_time` to `stop` strategies and `backoff.expo`/`backoff.constant` to the `wait` strategy matching backoff's jitter setting. `reraise=True` is added so an exhausted decorator keeps raising the original exception rather than tenacity's `RetryError`. Decorators whose behaviour tenacity cannot reproduce are left untouched: `backoff.fibo` and `backoff.runtime`, a `*`/`**` argument, the `on_backoff`, `on_giveup` and `on_success` handlers, `giveup`, and a `max_tries` or `interval` written as a lambda, which backoff evaluates per retry. A callable passed by name in one of those cannot be told from a value, so check those by hand. Run `org.openrewrite.python.migrate.FindBackoffDecoratorsNotMigrated` to list those. Backoff's logging configuration is dropped, because tenacity logs nothing by default; the `backoff` import and dependency are kept when any usage remains."}
  fqName={"org.openrewrite.python.migrate.ReplaceBackoffDecoratorsWithTenacity"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","backoff","tenacity","migration","retry"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceBackoffDecoratorsWithTenacity"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceBackoffDecoratorsWithTenacity"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacebackoffdecoratorswithtenacity.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `backoff` decorators with `tenacity`</RecipeHeader.Title>

<RecipeHeader.Description>Rewrite `@backoff.on_exception` and `@backoff.on_predicate` as tenacity's `@retry`, mapping `max_tries` and `max_time` to `stop` strategies and `backoff.expo`/`backoff.constant` to the `wait` strategy matching backoff's jitter setting. `reraise=True` is added so an exhausted decorator keeps raising the original exception rather than tenacity's `RetryError`. Decorators whose behaviour tenacity cannot reproduce are left untouched: `backoff.fibo` and `backoff.runtime`, a `*`/`**` argument, the `on_backoff`, `on_giveup` and `on_success` handlers, `giveup`, and a `max_tries` or `interval` written as a lambda, which backoff evaluates per retry. A callable passed by name in one of those cannot be told from a value, so check those by hand. Run `org.openrewrite.python.migrate.FindBackoffDecoratorsNotMigrated` to list those. Backoff's logging configuration is dropped, because tenacity logs nothing by default; the `backoff` import and dependency are kept when any usage remains.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceBackoffDecoratorsWithTenacity","displayName":"Replace `backoff` decorators with `tenacity`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

