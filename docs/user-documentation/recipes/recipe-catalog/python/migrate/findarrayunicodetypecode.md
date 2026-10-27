---
title: "Find `array` `'u'` typecode"
sidebar_label: "Find `array` `'u'` typecode"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `array` `'u'` typecode"}
  description={"The `'u'` typecode of `array.array` was deprecated in Python 3.13 and is scheduled for removal in Python 3.16. Use `'w'`, which stores 4-byte `Py_UCS4` code points where `'u'` stored the platform's `wchar_t`, 2 bytes on Windows."}
  fqName={"org.openrewrite.python.migrate.FindArrayUnicodeTypecode"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","array","3.16","migration","3.13"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindArrayUnicodeTypecode"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindArrayUnicodeTypecode"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findarrayunicodetypecode.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `array` `'u'` typecode</RecipeHeader.Title>

<RecipeHeader.Description>The `'u'` typecode of `array.array` was deprecated in Python 3.13 and is scheduled for removal in Python 3.16. Use `'w'`, which stores 4-byte `Py_UCS4` code points where `'u'` stored the platform's `wchar_t`, 2 bytes on Windows.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindArrayUnicodeTypecode","displayName":"Find `array` `'u'` typecode","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

