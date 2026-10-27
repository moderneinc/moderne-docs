---
title: "Replace `backoff` decorators with `tenacity`"
sidebar_label: "Replace `backoff` decorators with `tenacity`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `backoff` decorators with `tenacity`"}
  description={"Rewrite `@backoff.on_exception` and `@backoff.on_predicate` as tenacity's `@retry`, mapping `max_tries` and `max_time` to `stop` strategies and the wait generator to the `wait` strategy matching backoff's jitter setting. `reraise=True` is added so an exhausted decorator keeps raising the original exception rather than tenacity's `RetryError`. The same rewrite is applied to `backoff.on_exception(...)` called rather than written with an `@`, whether or not it is applied to a function on the spot, and a decorator spelled `**SETTINGS` is read by finding that dict at module level anywhere in the repository.\n\nWhere tenacity has no equivalent, helpers are written into one `_backoff_compat` module per package and imported where they are called; a file in no package keeps them to itself. `_backoff_wait` drives one of backoff's own wait generators, vendored alongside it, which is what covers `backoff.fibo`, `backoff.runtime`, a generator of the caller's own, a schedule given as a sequence, a custom jitter, and a keyword backoff would have evaluated per call; `_backoff_exhausted` is the stop condition for a generator that runs out. `_backoff_details` rebuilds the dict a handler was written to take, which `_backoff_handler` hands to tenacity's `before_sleep` and `retry_error_callback`, `_backoff_async_handler` awaits on an `async def`, and `_backoff_succeeded` runs an `on_success` from the `retry` predicate, the one hook tenacity calls on an outcome it does not retry. `_backoff_deadline` clamps the wait to what is left of `max_time`, which is a deadline to backoff rather than only a stopping condition, so the two give up at the same moment. `giveup` becomes the complement of a tenacity `retry` predicate, or a `stop` condition through `_backoff_giveup` when there is an `on_giveup` to run, because tenacity calls back on a stop and never on a predicate that declines. A generator or jitter referenced as a value rather than passed to a decorator becomes the vendored copy, so a project driving `backoff.expo()` by hand can drop the dependency too, and `backoff.types.Details` annotating a handler's parameter becomes `_BackoffDetails`, the same TypedDict vendored alongside them.\n\nA callable `max_tries` or `max_time`, which backoff read once per call where a tenacity stop strategy takes the value as given, becomes `_backoff_max_tries` or `_backoff_max_time`; `raise_on_giveup` is carried by the callback adapter, so a handler can run and the exception still be swallowed, and a flag that is not a literal is read at run time as backoff read it; and an `on_success` on an `async def` goes through `_backoff_async_succeeded`, because tenacity awaits the `retry` predicate on the async path.\n\nLeft untouched: a `*` argument, a `**` whose dict cannot be found at module level -- including one derived rather than copied, where only `{k: v for k, v in NAME.items() if k != \"key\"}` is read -- a decorator with no readable wait generator or exception type, and one holding a comment the rewrite would lose. Run `org.openrewrite.python.migrate.FindBackoffDecoratorsNotMigrated` to list those. Backoff's logging configuration is dropped, because tenacity logs nothing by default; the `backoff` import and dependency are kept wherever any usage remains."}
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

<RecipeHeader.Description>

Rewrite `@backoff.on_exception` and `@backoff.on_predicate` as tenacity's `@retry`, mapping `max_tries` and `max_time` to `stop` strategies and the wait generator to the `wait` strategy matching backoff's jitter setting. `reraise=True` is added so an exhausted decorator keeps raising the original exception rather than tenacity's `RetryError`. The same rewrite is applied to `backoff.on_exception(...)` called rather than written with an `@`, whether or not it is applied to a function on the spot, and a decorator spelled `**SETTINGS` is read by finding that dict at module level anywhere in the repository.

Where tenacity has no equivalent, helpers are written into one `_backoff_compat` module per package and imported where they are called; a file in no package keeps them to itself. `_backoff_wait` drives one of backoff's own wait generators, vendored alongside it, which is what covers `backoff.fibo`, `backoff.runtime`, a generator of the caller's own, a schedule given as a sequence, a custom jitter, and a keyword backoff would have evaluated per call; `_backoff_exhausted` is the stop condition for a generator that runs out. `_backoff_details` rebuilds the dict a handler was written to take, which `_backoff_handler` hands to tenacity's `before_sleep` and `retry_error_callback`, `_backoff_async_handler` awaits on an `async def`, and `_backoff_succeeded` runs an `on_success` from the `retry` predicate, the one hook tenacity calls on an outcome it does not retry. `_backoff_deadline` clamps the wait to what is left of `max_time`, which is a deadline to backoff rather than only a stopping condition, so the two give up at the same moment. `giveup` becomes the complement of a tenacity `retry` predicate, or a `stop` condition through `_backoff_giveup` when there is an `on_giveup` to run, because tenacity calls back on a stop and never on a predicate that declines. A generator or jitter referenced as a value rather than passed to a decorator becomes the vendored copy, so a project driving `backoff.expo()` by hand can drop the dependency too, and `backoff.types.Details` annotating a handler's parameter becomes `_BackoffDetails`, the same TypedDict vendored alongside them.

A callable `max_tries` or `max_time`, which backoff read once per call where a tenacity stop strategy takes the value as given, becomes `_backoff_max_tries` or `_backoff_max_time`; `raise_on_giveup` is carried by the callback adapter, so a handler can run and the exception still be swallowed, and a flag that is not a literal is read at run time as backoff read it; and an `on_success` on an `async def` goes through `_backoff_async_succeeded`, because tenacity awaits the `retry` predicate on the async path.

Left untouched: a `*` argument, a `**` whose dict cannot be found at module level -- including one derived rather than copied, where only `{k: v for k, v in NAME.items() if k != "key"}` is read -- a decorator with no readable wait generator or exception type, and one holding a comment the rewrite would lose. Run `org.openrewrite.python.migrate.FindBackoffDecoratorsNotMigrated` to list those. Backoff's logging configuration is dropped, because tenacity logs nothing by default; the `backoff` import and dependency are kept wherever any usage remains.

</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceBackoffDecoratorsWithTenacity","displayName":"Replace `backoff` decorators with `tenacity`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

