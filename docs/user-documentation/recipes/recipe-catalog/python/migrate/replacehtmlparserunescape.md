---
title: "Replace `HTMLParser.unescape()` with `html.unescape()`"
sidebar_label: "Replace `HTMLParser.unescape()` with `html.unescape()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `HTMLParser.unescape()` with `html.unescape()`"}
  description={"`HTMLParser.unescape()` was removed in Python 3.9. Use `html.unescape()` instead. Only fires where the parser's type resolves, and leaves the call alone where `html` already names something other than the module."}
  fqName={"org.openrewrite.python.migrate.ReplaceHtmlParserUnescape"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","html","3.9"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceHtmlParserUnescape"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceHtmlParserUnescape"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacehtmlparserunescape.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `HTMLParser.unescape()` with `html.unescape()`</RecipeHeader.Title>

<RecipeHeader.Description>`HTMLParser.unescape()` was removed in Python 3.9. Use `html.unescape()` instead. Only fires where the parser's type resolves, and leaves the call alone where `html` already names something other than the module.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceHtmlParserUnescape","displayName":"Replace `HTMLParser.unescape()` with `html.unescape()`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

