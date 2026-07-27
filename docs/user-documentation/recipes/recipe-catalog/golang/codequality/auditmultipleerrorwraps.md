---
title: "Replace extra %w verbs with %v in fmt.Errorf"
sidebar_label: "Replace extra %w verbs with %v in fmt.Errorf"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace extra %w verbs with %v in fmt.Errorf"}
  description={"Replace all but the first `%w` with `%v` in `fmt.Errorf` format strings. Multiple error wrapping is invalid in Go < 1.20 and rare in later versions."}
  fqName={"org.openrewrite.golang.codequality.AuditMultipleErrorWraps"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.codequality.AuditMultipleErrorWraps"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.codequality.AuditMultipleErrorWraps"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/codequality/auditmultipleerrorwraps.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace extra %w verbs with %v in fmt.Errorf</RecipeHeader.Title>

<RecipeHeader.Description>Replace all but the first `%w` with `%v` in `fmt.Errorf` format strings. Multiple error wrapping is invalid in Go &lt; 1.20 and rare in later versions.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.codequality.AuditMultipleErrorWraps","displayName":"Replace extra %w verbs with %v in fmt.Errorf","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

