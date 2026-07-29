---
title: "Add missing go.mod requirements"
sidebar_label: "Add missing go.mod requirements"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add missing go.mod requirements"}
  description={"Add `require` directives for modules the resolved build list needs but go.mod does not declare, at their resolved versions and with the `// indirect` marker the toolchain assigned. Mirrors what `go mod tidy` adds, using the module graph resolved at parse time."}
  fqName={"org.openrewrite.golang.migration.AddMissingGoModRequires"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.AddMissingGoModRequires"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.AddMissingGoModRequires"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/addmissinggomodrequires.md"}
  moderneOnly
>

<RecipeHeader.Title>Add missing go.mod requirements</RecipeHeader.Title>

<RecipeHeader.Description>Add `require` directives for modules the resolved build list needs but go.mod does not declare, at their resolved versions and with the `// indirect` marker the toolchain assigned. Mirrors what `go mod tidy` adds, using the module graph resolved at parse time.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.AddMissingGoModRequires","displayName":"Add missing go.mod requirements","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

