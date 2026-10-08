---
title: "Remove unused go.mod requirements"
sidebar_label: "Remove unused go.mod requirements"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove unused go.mod requirements"}
  description={"Remove `require` directives that `go mod tidy` would drop, restricted to what can be proven unused from the offline resolution: modules absent from the resolved build list and stray self-references. A require present in the build list is kept even when it is neither imported nor reachable through the recorded module-graph edges, since that graph is pruned and a still-needed test-closure or build-tag-gated dependency can be unreachable in it. Uses the resolved build list attached at parse time; a no-op when that resolution did not run."}
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
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.RemoveUnusedGoModRequires"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/removeunusedgomodrequires.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove unused go.mod requirements</RecipeHeader.Title>

<RecipeHeader.Description>Remove `require` directives that `go mod tidy` would drop, restricted to what can be proven unused from the offline resolution: modules absent from the resolved build list and stray self-references. A require present in the build list is kept even when it is neither imported nor reachable through the recorded module-graph edges, since that graph is pruned and a still-needed test-closure or build-tag-gated dependency can be unreachable in it. Uses the resolved build list attached at parse time; a no-op when that resolution did not run.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.RemoveUnusedGoModRequires","displayName":"Remove unused go.mod requirements","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

