---
title: "Find text I/O that relies on the default encoding"
sidebar_label: "Find text I/O that relies on the default encoding"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find text I/O that relies on the default encoding"}
  description={"Python 3.15 uses UTF-8 as the default text encoding whatever the locale (PEP 686). Marks text-mode `open()`, `io.open()`, `pathlib.Path.open()`, `read_text()`, `write_text()`, `io.TextIOWrapper()`, and `subprocess` calls with `text=True` or `universal_newlines=True` that pass no `encoding`. Pass `encoding=\"utf-8\"`, or `encoding=\"locale\"` to keep the previous behaviour. A call whose `mode` is not a literal is not reported."}
  fqName={"org.openrewrite.python.migrate.FindImplicitTextEncoding"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["PLW1514","python","ruff","migration","3.15","PEP 686"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindImplicitTextEncoding"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindImplicitTextEncoding"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findimplicittextencoding.md"}
  moderneOnly
>

<RecipeHeader.Title>Find text I/O that relies on the default encoding</RecipeHeader.Title>

<RecipeHeader.Description>Python 3.15 uses UTF-8 as the default text encoding whatever the locale (PEP 686). Marks text-mode `open()`, `io.open()`, `pathlib.Path.open()`, `read_text()`, `write_text()`, `io.TextIOWrapper()`, and `subprocess` calls with `text=True` or `universal_newlines=True` that pass no `encoding`. Pass `encoding="utf-8"`, or `encoding="locale"` to keep the previous behaviour. A call whose `mode` is not a literal is not reported.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindImplicitTextEncoding","displayName":"Find text I/O that relies on the default encoding","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

