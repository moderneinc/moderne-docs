---
title: "Find removed `sre_*` modules"
sidebar_label: "Find removed `sre_*` modules"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find removed `sre_*` modules"}
  description={"The `sre_compile`, `sre_constants` and `sre_parse` modules were removed in Python 3.15. Use the public `re` API; the private `re._compiler`, `re._constants` and `re._parser` modules have no compatibility guarantee."}
  fqName={"org.openrewrite.python.migrate.FindSreModules"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","re","migration","3.15"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindSreModules"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindSreModules"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findsremodules.md"}
  moderneOnly
>

<RecipeHeader.Title>Find removed `sre_*` modules</RecipeHeader.Title>

<RecipeHeader.Description>The `sre_compile`, `sre_constants` and `sre_parse` modules were removed in Python 3.15. Use the public `re` API; the private `re._compiler`, `re._constants` and `re._parser` modules have no compatibility guarantee.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindSreModules","displayName":"Find removed `sre_*` modules","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

