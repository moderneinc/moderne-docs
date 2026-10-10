---
title: "Remove useless `object` inheritance"
sidebar_label: "Remove useless `object` inheritance"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove useless `object` inheritance"}
  description={"Remove redundant `object` base class from class declarations. In Python 3, all classes implicitly inherit from `object`. It only fires where the base's type resolves to the builtin `object`, and leaves alone a base list holding comments."}
  fqName={"org.openrewrite.python.cleanup.RemoveUselessObjectInheritance"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","cleanup","ruff","UP004"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.RemoveUselessObjectInheritance"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.RemoveUselessObjectInheritance"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/removeuselessobjectinheritance.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove useless `object` inheritance</RecipeHeader.Title>

<RecipeHeader.Description>Remove redundant `object` base class from class declarations. In Python 3, all classes implicitly inherit from `object`. It only fires where the base's type resolves to the builtin `object`, and leaves alone a base list holding comments.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.RemoveUselessObjectInheritance","displayName":"Remove useless `object` inheritance","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

