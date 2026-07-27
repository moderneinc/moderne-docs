---
title: "Replace deprecated distutils.version usage"
sidebar_label: "Replace deprecated distutils.version usage"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace deprecated distutils.version usage"}
  description={"Detect usage of deprecated `distutils.version.LooseVersion` and `distutils.version.StrictVersion`. These should be migrated to `packaging.version.Version`. Note: Manual migration is required as `packaging.version.Version` is not a drop-in replacement."}
  fqName={"org.openrewrite.python.migrate.ReplaceDistutilsVersion"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceDistutilsVersion"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceDistutilsVersion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacedistutilsversion.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace deprecated distutils.version usage</RecipeHeader.Title>

<RecipeHeader.Description>Detect usage of deprecated `distutils.version.LooseVersion` and `distutils.version.StrictVersion`. These should be migrated to `packaging.version.Version`. Note: Manual migration is required as `packaging.version.Version` is not a drop-in replacement.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceDistutilsVersion","displayName":"Replace deprecated distutils.version usage","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

