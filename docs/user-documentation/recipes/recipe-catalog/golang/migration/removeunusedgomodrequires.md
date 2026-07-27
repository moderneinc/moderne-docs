---
title: "Remove unused go.mod requirements"
sidebar_label: "Remove unused go.mod requirements"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove unused go.mod requirements"}
  description={"Remove `require` directives whose module provides no imported package and is unreachable through the module graph from any module that does. Uses the package→module map and module graph resolved at parse time; a no-op when that resolution did not run. Modules that pin a transitive version are kept, so the removal is build-safe."}
  fqName={"org.openrewrite.golang.migration.RemoveUnusedGoModRequires"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.RemoveUnusedGoModRequires"}
  artifact={"org.openrewrite.recipe:recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.RemoveUnusedGoModRequires"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/removeunusedgomodrequires.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove unused go.mod requirements</RecipeHeader.Title>

<RecipeHeader.Description>Remove `require` directives whose module provides no imported package and is unreachable through the module graph from any module that does. Uses the package→module map and module graph resolved at parse time; a no-op when that resolution did not run. Modules that pin a transitive version are kept, so the removal is build-safe.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.RemoveUnusedGoModRequires","displayName":"Remove unused go.mod requirements","groupId":"org.openrewrite.recipe","artifactId":"recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO","requiresConfiguration":false}}>

## Usage

</UsageList>

