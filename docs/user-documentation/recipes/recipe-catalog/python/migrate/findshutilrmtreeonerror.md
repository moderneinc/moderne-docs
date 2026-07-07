---
title: "Find deprecated `shutil.rmtree(onerror=...)` parameter"
sidebar_label: "Find deprecated `shutil.rmtree(onerror=...)` parameter"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find deprecated `shutil.rmtree(onerror=...)` parameter"}
  description={"The `onerror` parameter of `shutil.rmtree()` was deprecated in Python 3.12 in favor of `onexc`. The `onexc` callback receives the exception object directly rather than an exc_info tuple."}
  fqName={"org.openrewrite.python.migrate.FindShutilRmtreeOnerror"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","shutil","3.12"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindShutilRmtreeOnerror"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindShutilRmtreeOnerror"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findshutilrmtreeonerror.md"}
  moderneOnly
>

<RecipeHeader.Title>Find deprecated `shutil.rmtree(onerror=...)` parameter</RecipeHeader.Title>

<RecipeHeader.Description>The `onerror` parameter of `shutil.rmtree()` was deprecated in Python 3.12 in favor of `onexc`. The `onexc` callback receives the exception object directly rather than an exc_info tuple.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindShutilRmtreeOnerror","displayName":"Find deprecated `shutil.rmtree(onerror=...)` parameter","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

