---
title: "Find removed `http.server.CGIHTTPRequestHandler`"
sidebar_label: "Find removed `http.server.CGIHTTPRequestHandler`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find removed `http.server.CGIHTTPRequestHandler`"}
  description={"`http.server.CGIHTTPRequestHandler` was removed in Python 3.15, along with the `--cgi` flag of `python -m http.server`. Serve CGI scripts through a WSGI or ASGI server instead."}
  fqName={"org.openrewrite.python.migrate.FindCgiHttpRequestHandler"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","migration","3.15","http.server"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.FindCgiHttpRequestHandler"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.FindCgiHttpRequestHandler"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/findcgihttprequesthandler.md"}
  moderneOnly
>

<RecipeHeader.Title>Find removed `http.server.CGIHTTPRequestHandler`</RecipeHeader.Title>

<RecipeHeader.Description>`http.server.CGIHTTPRequestHandler` was removed in Python 3.15, along with the `--cgi` flag of `python -m http.server`. Serve CGI scripts through a WSGI or ASGI server instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.FindCgiHttpRequestHandler","displayName":"Find removed `http.server.CGIHTTPRequestHandler`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

