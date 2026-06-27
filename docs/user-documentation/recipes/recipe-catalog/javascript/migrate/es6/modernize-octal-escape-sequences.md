---
title: "Modernize octal escape sequences"
sidebar_label: "Modernize octal escape sequences"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Modernize octal escape sequences"}
  description={"Convert old-style octal escape sequences (e.g., `\\0`, `\\123`) to modern hex escape sequences (e.g., `\\x00`, `\\x53`) or Unicode escape sequences (e.g., `\\u0000`, `\\u0053`)."}
  fqName={"org.openrewrite.javascript.migrate.es6.modernize-octal-escape-sequences"}
  languages={["JavaScript"]}
  license={"Moderne Source Available License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["JavaScript"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.javascript.migrate.es6.modernize-octal-escape-sequences"}
  artifact={"org.openrewrite:rewrite-javascript"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.javascript.migrate.es6.modernize-octal-escape-sequences"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/javascript/migrate/es6/modernize-octal-escape-sequences.md"}
  moderneOnly
>

<RecipeHeader.Title>Modernize octal escape sequences</RecipeHeader.Title>

<RecipeHeader.Description>Convert old-style octal escape sequences (e.g., `\0`, `\123`) to modern hex escape sequences (e.g., `\x00`, `\x53`) or Unicode escape sequences (e.g., `\u0000`, `\u0053`).</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"useUnicodeEscapes","required":false,"description":"Use Unicode escape sequences (`\\uXXXX`) instead of hex escape sequences (`\\xXX`). Default is `false`.","example":"true"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.javascript.migrate.es6.modernize-octal-escape-sequences","displayName":"Modernize octal escape sequences","npmPackage":"@openrewrite/rewrite"}}>

## Usage

</UsageList>

