---
title: "Find removed `platform.java_ver()`"
sidebar_label: "Find removed `platform.java_ver()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find removed `platform.java_ver()`"}
  description={"`platform.java_ver()` was removed in Python 3.15. It only returned useful data on Jython, so code calling it can usually drop the call."}
  fqName={"org.openrewrite.python.migrate.FindPlatformJavaVer"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","3.15","platform"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindPlatformJavaVer"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindPlatformJavaVer"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findplatformjavaver.md"}
  moderneOnly
>

<RecipeHeader.Title>Find removed `platform.java_ver()`</RecipeHeader.Title>

<RecipeHeader.Description>`platform.java_ver()` was removed in Python 3.15. It only returned useful data on Jython, so code calling it can usually drop the call.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindPlatformJavaVer","displayName":"Find removed `platform.java_ver()`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

