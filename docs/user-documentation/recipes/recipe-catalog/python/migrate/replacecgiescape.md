---
title: "Replace `cgi.escape()` with `html.escape()`"
sidebar_label: "Replace `cgi.escape()` with `html.escape()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `cgi.escape()` with `html.escape()`"}
  description={"`cgi.escape()` was removed in Python 3.8. Replace it with `html.escape()`, passing `quote=False` where the call gave no `quote` argument, since `html.escape()` escapes quotes by default and `cgi.escape()` did not. An explicit `quote` argument is kept as it is. A file that also refers to `cgi.escape` other than by calling it, or calls it with unpacked `*args` or `**kwargs`, is left as it is, with those references marked for a manual change, as are the calls in a file that binds `html` to something else. A file that never calls it is not visited."}
  fqName={"org.openrewrite.python.migrate.ReplaceCgiEscape"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","cgi","migration","3.8"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceCgiEscape"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceCgiEscape"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacecgiescape.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `cgi.escape()` with `html.escape()`</RecipeHeader.Title>

<RecipeHeader.Description>`cgi.escape()` was removed in Python 3.8. Replace it with `html.escape()`, passing `quote=False` where the call gave no `quote` argument, since `html.escape()` escapes quotes by default and `cgi.escape()` did not. An explicit `quote` argument is kept as it is. A file that also refers to `cgi.escape` other than by calling it, or calls it with unpacked `*args` or `**kwargs`, is left as it is, with those references marked for a manual change, as are the calls in a file that binds `html` to something else. A file that never calls it is not visited.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceCgiEscape","displayName":"Replace `cgi.escape()` with `html.escape()`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

