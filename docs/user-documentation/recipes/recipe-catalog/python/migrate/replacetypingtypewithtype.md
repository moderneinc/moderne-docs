---
title: "Replace `typing.Type` with `type`"
sidebar_label: "Replace `typing.Type` with `type`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `typing.Type` with `type`"}
  description={"PEP 585 deprecated `typing.Type` in Python 3.9. Replace it with the built-in `type` wherever a type is expected, including class base lists, where either spelling subclasses `type`. Applies inside `if TYPE_CHECKING:` blocks as well; the built-in generic is valid at runtime from Python 3.9 on, so no `from __future__ import annotations` is needed. References in a value position are left alone: `typing.Type` and `type` are distinct objects, so substituting one for the other where the name is used as a value would change behaviour."}
  fqName={"org.openrewrite.python.migrate.ReplaceTypingTypeWithType"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceTypingTypeWithType"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceTypingTypeWithType"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacetypingtypewithtype.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `typing.Type` with `type`</RecipeHeader.Title>

<RecipeHeader.Description>PEP 585 deprecated `typing.Type` in Python 3.9. Replace it with the built-in `type` wherever a type is expected, including class base lists, where either spelling subclasses `type`. Applies inside `if TYPE_CHECKING:` blocks as well; the built-in generic is valid at runtime from Python 3.9 on, so no `from __future__ import annotations` is needed. References in a value position are left alone: `typing.Type` and `type` are distinct objects, so substituting one for the other where the name is used as a value would change behaviour.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceTypingTypeWithType","displayName":"Replace `typing.Type` with `type`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

