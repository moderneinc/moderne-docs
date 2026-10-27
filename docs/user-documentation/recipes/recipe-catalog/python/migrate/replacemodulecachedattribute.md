---
title: "Replace module `__cached__` with `__spec__.cached`"
sidebar_label: "Replace module `__cached__` with `__spec__.cached`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace module `__cached__` with `__spec__.cached`"}
  description={"The import system no longer sets a module's `__cached__` attribute in Python 3.15. Read `__spec__.cached` instead. Rewrites the bare name where the file does not assign it, through `getattr` since a module run as a script has no `__spec__`, and the attribute on a module an import binds or whose type resolves to a module."}
  fqName={"org.openrewrite.python.migrate.ReplaceModuleCachedAttribute"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","3.15"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceModuleCachedAttribute"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceModuleCachedAttribute"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacemodulecachedattribute.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace module `__cached__` with `__spec__.cached`</RecipeHeader.Title>

<RecipeHeader.Description>The import system no longer sets a module's `__cached__` attribute in Python 3.15. Read `__spec__.cached` instead. Rewrites the bare name where the file does not assign it, through `getattr` since a module run as a script has no `__spec__`, and the attribute on a module an import binds or whose type resolves to a module.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceModuleCachedAttribute","displayName":"Replace module `__cached__` with `__spec__.cached`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

