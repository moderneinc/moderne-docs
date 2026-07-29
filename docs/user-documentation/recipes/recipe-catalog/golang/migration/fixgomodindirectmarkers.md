---
title: "Fix go.mod `// indirect` markers"
sidebar_label: "Fix go.mod `// indirect` markers"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Fix go.mod `// indirect` markers"}
  description={"Correct the `// indirect` markers on `require` directives in go.mod: a requirement is direct when a package in the module imports it and indirect otherwise. Requirements are never removed, so the change is always build-safe; a genuinely unused requirement is marked `// indirect` rather than removed."}
  fqName={"org.openrewrite.golang.migration.FixGoModIndirectMarkers"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.FixGoModIndirectMarkers"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.FixGoModIndirectMarkers"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/fixgomodindirectmarkers.md"}
  moderneOnly
>

<RecipeHeader.Title>Fix go.mod `// indirect` markers</RecipeHeader.Title>

<RecipeHeader.Description>Correct the `// indirect` markers on `require` directives in go.mod: a requirement is direct when a package in the module imports it and indirect otherwise. Requirements are never removed, so the change is always build-safe; a genuinely unused requirement is marked `// indirect` rather than removed.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.FixGoModIndirectMarkers","displayName":"Fix go.mod `// indirect` markers","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

