---
title: "Find removed `sys.setcheckinterval()` / `sys.getcheckinterval()`"
sidebar_label: "Find removed `sys.setcheckinterval()` / `sys.getcheckinterval()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find removed `sys.setcheckinterval()` / `sys.getcheckinterval()`"}
  description={"`sys.setcheckinterval()` and `sys.getcheckinterval()` were removed in Python 3.9. `sys.setswitchinterval()` and `sys.getswitchinterval()` replace them but measure seconds rather than bytecode instructions, so each call is marked for a manual change. A reference to either function that is not a call is not marked."}
  fqName={"org.openrewrite.python.migrate.FindSysCheckInterval"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","sys","3.9"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindSysCheckInterval"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindSysCheckInterval"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findsyscheckinterval.md"}
  moderneOnly
>

<RecipeHeader.Title>Find removed `sys.setcheckinterval()` / `sys.getcheckinterval()`</RecipeHeader.Title>

<RecipeHeader.Description>`sys.setcheckinterval()` and `sys.getcheckinterval()` were removed in Python 3.9. `sys.setswitchinterval()` and `sys.getswitchinterval()` replace them but measure seconds rather than bytecode instructions, so each call is marked for a manual change. A reference to either function that is not a call is not marked.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindSysCheckInterval","displayName":"Find removed `sys.setcheckinterval()` / `sys.getcheckinterval()`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

