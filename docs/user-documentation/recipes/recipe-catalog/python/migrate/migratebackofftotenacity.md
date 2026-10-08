---
title: "Migrate `backoff` to `tenacity`"
sidebar_label: "Migrate `backoff` to `tenacity`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `backoff` to `tenacity`"}
  description={"Replace `backoff`'s retry decorators with tenacity's `@retry`, and add the `tenacity` dependency to exactly the projects where a decorator converted -- a project whose every decorator needs a hand migration gains no dependency, and neither does a repository this leaves unchanged. `backoff` itself stays, because a decorator tenacity cannot reproduce still needs it. Run `org.openrewrite.python.migrate.FindBackoffDecoratorsNotMigrated` for the decorators left to migrate by hand, then drop `backoff` once that list is empty."}
  fqName={"org.openrewrite.python.migrate.MigrateBackoffToTenacity"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={["python","backoff","tenacity","migration","retry"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.MigrateBackoffToTenacity"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.MigrateBackoffToTenacity"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/migratebackofftotenacity.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `backoff` to `tenacity`</RecipeHeader.Title>

<RecipeHeader.Description>Replace `backoff`'s retry decorators with tenacity's `@retry`, and add the `tenacity` dependency to exactly the projects where a decorator converted -- a project whose every decorator needs a hand migration gains no dependency, and neither does a repository this leaves unchanged. `backoff` itself stays, because a decorator tenacity cannot reproduce still needs it. Run `org.openrewrite.python.migrate.FindBackoffDecoratorsNotMigrated` for the decorators left to migrate by hand, then drop `backoff` once that list is empty.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Replace `backoff` decorators with `tenacity`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacebackoffdecoratorswithtenacity/"},{"name":"org.openrewrite.python.AddDependency","href":"/user-documentation/recipes/recipe-catalog/python/adddependency/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.MigrateBackoffToTenacity","displayName":"Migrate `backoff` to `tenacity`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

