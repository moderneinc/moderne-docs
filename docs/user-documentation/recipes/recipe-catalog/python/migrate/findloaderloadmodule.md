---
title: "Find removed `load_module()` on import loaders"
sidebar_label: "Find removed `load_module()` on import loaders"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find removed `load_module()` on import loaders"}
  description={"`importlib.abc.Loader.load_module()` and `zipimport.zipimporter.load_module()` were removed in Python 3.15, and the import system no longer calls `load_module()` on a custom loader. Marks calls to it and its definitions in `Loader` subclasses. Only fires where the receiver's or class's type resolves."}
  fqName={"org.openrewrite.python.migrate.FindLoaderLoadModule"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","importlib","migration","3.15"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindLoaderLoadModule"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindLoaderLoadModule"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findloaderloadmodule.md"}
  moderneOnly
>

<RecipeHeader.Title>Find removed `load_module()` on import loaders</RecipeHeader.Title>

<RecipeHeader.Description>`importlib.abc.Loader.load_module()` and `zipimport.zipimporter.load_module()` were removed in Python 3.15, and the import system no longer calls `load_module()` on a custom loader. Marks calls to it and its definitions in `Loader` subclasses. Only fires where the receiver's or class's type resolves.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindLoaderLoadModule","displayName":"Find removed `load_module()` on import loaders","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

