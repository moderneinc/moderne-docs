---
title: "Find imports of the deprecated `distutils.version` module"
sidebar_label: "Find imports of the deprecated `distutils.version` module"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find imports of the deprecated `distutils.version` module"}
  description={"Mark each import of the deprecated `distutils.version` module, whose `LooseVersion` and `StrictVersion` should be migrated to `packaging.version.Version`. Note: Manual migration is required as `packaging.version.Version` is not a drop-in replacement. Only import statements are marked, not the uses of what they import."}
  fqName={"org.openrewrite.python.migrate.ReplaceDistutilsVersion"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","distutils","migration","3.12"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceDistutilsVersion"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceDistutilsVersion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacedistutilsversion.md"}
  moderneOnly
>

<RecipeHeader.Title>Find imports of the deprecated `distutils.version` module</RecipeHeader.Title>

<RecipeHeader.Description>Mark each import of the deprecated `distutils.version` module, whose `LooseVersion` and `StrictVersion` should be migrated to `packaging.version.Version`. Note: Manual migration is required as `packaging.version.Version` is not a drop-in replacement. Only import statements are marked, not the uses of what they import.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceDistutilsVersion","displayName":"Find imports of the deprecated `distutils.version` module","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

