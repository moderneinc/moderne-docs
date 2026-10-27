---
title: "Replace `sys.last_type` / `sys.last_value` / `sys.last_traceback` with `sys.last_exc`"
sidebar_label: "Replace `sys.last_type` / `sys.last_value` / `sys.last_traceback` with `sys.last_exc`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `sys.last_type` / `sys.last_value` / `sys.last_traceback` with `sys.last_exc`"}
  description={"`sys.last_type`, `sys.last_value`, and `sys.last_traceback` were deprecated in Python 3.12. Replace reads of them with their `sys.last_exc`-based equivalents: `type(sys.last_exc)`, `sys.last_exc`, and `sys.last_exc.__traceback__` respectively, and a `hasattr(sys, \"last_type\")` guard with `hasattr(sys, \"last_exc\")`. Assignment, `del`, `for` and `with` targets are left alone, and so is every read in a file that assigns or deletes one of the attributes, since `sys.last_exc` would not hold what it set. `sys.last_type` is left alone where `type` is shadowed."}
  fqName={"org.openrewrite.python.migrate.ReplaceSysLastExcInfo"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","3.12","sys"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceSysLastExcInfo"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceSysLastExcInfo"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacesyslastexcinfo.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `sys.last_type` / `sys.last_value` / `sys.last_traceback` with `sys.last_exc`</RecipeHeader.Title>

<RecipeHeader.Description>`sys.last_type`, `sys.last_value`, and `sys.last_traceback` were deprecated in Python 3.12. Replace reads of them with their `sys.last_exc`-based equivalents: `type(sys.last_exc)`, `sys.last_exc`, and `sys.last_exc.__traceback__` respectively, and a `hasattr(sys, "last_type")` guard with `hasattr(sys, "last_exc")`. Assignment, `del`, `for` and `with` targets are left alone, and so is every read in a file that assigns or deletes one of the attributes, since `sys.last_exc` would not hold what it set. `sys.last_type` is left alone where `type` is shadowed.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceSysLastExcInfo","displayName":"Replace `sys.last_type` / `sys.last_value` / `sys.last_traceback` with `sys.last_exc`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

