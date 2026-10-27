---
title: "Replace keyword-argument `NamedTuple` fields with a field list"
sidebar_label: "Replace keyword-argument `NamedTuple` fields with a field list"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace keyword-argument `NamedTuple` fields with a field list"}
  description={"The undocumented `NamedTuple(\"Point\", x=int, y=int)` syntax was removed in Python 3.15. Pass the fields as a list of `(name, type)` pairs instead. Calls holding comments are left unchanged."}
  fqName={"org.openrewrite.python.migrate.ReplaceNamedTupleKeywordFields"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","3.15","typing"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceNamedTupleKeywordFields"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceNamedTupleKeywordFields"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacenamedtuplekeywordfields.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace keyword-argument `NamedTuple` fields with a field list</RecipeHeader.Title>

<RecipeHeader.Description>The undocumented `NamedTuple("Point", x=int, y=int)` syntax was removed in Python 3.15. Pass the fields as a list of `(name, type)` pairs instead. Calls holding comments are left unchanged.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceNamedTupleKeywordFields","displayName":"Replace keyword-argument `NamedTuple` fields with a field list","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

