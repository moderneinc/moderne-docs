---
title: "Prefer strings.Builder WriteString"
sidebar_label: "Prefer strings.Builder WriteString"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer strings.Builder WriteString"}
  description={"Replace `fmt.Fprintf(&b, \"%s\", s)` with `b.WriteString(s)` for more efficient string building."}
  fqName={"org.openrewrite.golang.codequality.PreferStringsBuilderWriteString"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.PreferStringsBuilderWriteString"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.PreferStringsBuilderWriteString"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/preferstringsbuilderwritestring.md"}
  moderneOnly
>

<RecipeHeader.Title>Prefer strings.Builder WriteString</RecipeHeader.Title>

<RecipeHeader.Description>Replace `fmt.Fprintf(&b, "%s", s)` with `b.WriteString(s)` for more efficient string building.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.PreferStringsBuilderWriteString","displayName":"Prefer strings.Builder WriteString","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

