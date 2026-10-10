---
title: "Upgrade to pandas 2.0"
sidebar_label: "Upgrade to pandas 2.0"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to pandas 2.0"}
  description={"Migrate code that uses APIs removed in pandas 2.0, such as `DataFrame.append()`, which becomes `pd.concat()`."}
  fqName={"org.openrewrite.python.migrate.pandas.UpgradeToPandas20"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={["pandas","python","2.0","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.pandas.UpgradeToPandas20"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.pandas.UpgradeToPandas20"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/pandas/upgradetopandas20.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade to pandas 2.0</RecipeHeader.Title>

<RecipeHeader.Description>Migrate code that uses APIs removed in pandas 2.0, such as `DataFrame.append()`, which becomes `pd.concat()`.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate removed `DataFrame.append()` to `pd.concat()`","href":"/user-documentation/recipes/recipe-catalog/python/cleanup/dataframeappendtoconcat/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.pandas.UpgradeToPandas20","displayName":"Upgrade to pandas 2.0","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

