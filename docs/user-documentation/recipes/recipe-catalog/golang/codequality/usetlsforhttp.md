---
title: "Use TLS for HTTP"
sidebar_label: "Use TLS for HTTP"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use TLS for HTTP"}
  description={"Replace `http.ListenAndServe(addr, handler)` with `http.ListenAndServeTLS(addr, \"cert.pem\", \"key.pem\", handler)` to encrypt traffic in transit."}
  fqName={"org.openrewrite.golang.codequality.UseTlsForHttp"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.UseTlsForHttp"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.UseTlsForHttp"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/usetlsforhttp.md"}
  moderneOnly
>

<RecipeHeader.Title>Use TLS for HTTP</RecipeHeader.Title>

<RecipeHeader.Description>Replace `http.ListenAndServe(addr, handler)` with `http.ListenAndServeTLS(addr, "cert.pem", "key.pem", handler)` to encrypt traffic in transit.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.UseTlsForHttp","displayName":"Use TLS for HTTP","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

