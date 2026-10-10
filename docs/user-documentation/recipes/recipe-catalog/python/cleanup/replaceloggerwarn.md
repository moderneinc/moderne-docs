---
title: "Replace `logger.warn()` with `logger.warning()`"
sidebar_label: "Replace `logger.warn()` with `logger.warning()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `logger.warn()` with `logger.warning()`"}
  description={"Replace `warn()` calls on a `logging.Logger` or `logging.LoggerAdapter` with `warning()`. The `warn()` method is a deprecated alias that should not be used. It only fires where the receiver's type resolves, and leaves alone the module-level `logging.warn()` and a subclass that overrides `warn()`."}
  fqName={"org.openrewrite.python.cleanup.ReplaceLoggerWarn"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","cleanup","ruff","LOG009"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.ReplaceLoggerWarn"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.ReplaceLoggerWarn"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/replaceloggerwarn.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `logger.warn()` with `logger.warning()`</RecipeHeader.Title>

<RecipeHeader.Description>Replace `warn()` calls on a `logging.Logger` or `logging.LoggerAdapter` with `warning()`. The `warn()` method is a deprecated alias that should not be used. It only fires where the receiver's type resolves, and leaves alone the module-level `logging.warn()` and a subclass that overrides `warn()`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.ReplaceLoggerWarn","displayName":"Replace `logger.warn()` with `logger.warning()`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

