---
title: "Replace `typing.Set` with `set`"
sidebar_label: "Replace `typing.Set` with `set`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `typing.Set` with `set`"}
  description={"PEP 585 deprecated `typing.Set` in Python 3.9. Replace it with the built-in `set` wherever a type is expected, including class base lists, where either spelling subclasses `set`. Applies inside `if TYPE_CHECKING:` blocks as well; the built-in generic is valid at runtime from Python 3.9 on, so no `from __future__ import annotations` is needed. References in a value position are left alone: `typing.Set` and `set` are distinct objects, so substituting one for the other where the name is used as a value would change behaviour."}
  fqName={"org.openrewrite.python.migrate.ReplaceTypingSetWithSet"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceTypingSetWithSet"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceTypingSetWithSet"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacetypingsetwithset.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `typing.Set` with `set`</RecipeHeader.Title>

<RecipeHeader.Description>PEP 585 deprecated `typing.Set` in Python 3.9. Replace it with the built-in `set` wherever a type is expected, including class base lists, where either spelling subclasses `set`. Applies inside `if TYPE_CHECKING:` blocks as well; the built-in generic is valid at runtime from Python 3.9 on, so no `from __future__ import annotations` is needed. References in a value position are left alone: `typing.Set` and `set` are distinct objects, so substituting one for the other where the name is used as a value would change behaviour.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceTypingSetWithSet","displayName":"Replace `typing.Set` with `set`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

