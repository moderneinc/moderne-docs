---
title: "Replace `str.format()` with f-string"
sidebar_label: "Replace `str.format()` with f-string"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `str.format()` with f-string"}
  description={"Replace `\"...\".format(...)` calls with f-strings (Python 3.6+). Only converts cases where the format string is a literal and the conversion is safe. A format string with a backslash escape, a raw or bytes prefix, or a field reading an attribute or index is left alone. So is a call with an unpacked argument, a string literal argument, or an argument that has side effects and is used more than once, and a call with a comment inside it, which the f-string would drop."}
  fqName={"org.openrewrite.python.migrate.ReplaceStrFormatWithFString"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","ruff","UP032","migration","3.6","f-string"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceStrFormatWithFString"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceStrFormatWithFString"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacestrformatwithfstring.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `str.format()` with f-string</RecipeHeader.Title>

<RecipeHeader.Description>Replace `"...".format(...)` calls with f-strings (Python 3.6+). Only converts cases where the format string is a literal and the conversion is safe. A format string with a backslash escape, a raw or bytes prefix, or a field reading an attribute or index is left alone. So is a call with an unpacked argument, a string literal argument, or an argument that has side effects and is used more than once, and a call with a comment inside it, which the f-string would drop.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceStrFormatWithFString","displayName":"Replace `str.format()` with f-string","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

