---
title: "Find unused go.mod requirements"
sidebar_label: "Find unused go.mod requirements"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find unused go.mod requirements"}
  description={"Find direct `require` directives in go.mod that no package in the module imports. A direct requirement is only justified by a direct import, so these are candidates `go mod tidy` would remove or demote to `// indirect`. They are reported rather than removed because deciding whether a module is still needed transitively requires the module graph, which is not available offline."}
  fqName={"org.openrewrite.golang.migration.FindUnusedGoModRequires"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.FindUnusedGoModRequires"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.FindUnusedGoModRequires"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/findunusedgomodrequires.md"}
  moderneOnly
>

<RecipeHeader.Title>Find unused go.mod requirements</RecipeHeader.Title>

<RecipeHeader.Description>Find direct `require` directives in go.mod that no package in the module imports. A direct requirement is only justified by a direct import, so these are candidates `go mod tidy` would remove or demote to `// indirect`. They are reported rather than removed because deciding whether a module is still needed transitively requires the module graph, which is not available offline.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.FindUnusedGoModRequires","displayName":"Find unused go.mod requirements","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

