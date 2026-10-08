---
title: "Find go.mod files that could not be fully resolved offline"
sidebar_label: "Find go.mod files that could not be fully resolved offline"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find go.mod files that could not be fully resolved offline"}
  description={"Find go.mod files whose module graph did not fully resolve at parse time, so `GoModTidy` skipped adding and removing requirements. The offline no-op is safe but silent, making a module that badly needs tidying look identical to one already tidy. This recipe marks such go.mod files and records a data table naming the module, its resolution status, the unresolved imports, and the toolchain failure reason, so a run can be triaged and re-run once the modules resolve. It reports only and does not modify the go.mod."}
  fqName={"org.openrewrite.golang.migration.FindPartiallyResolvedGoMod"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.golang.migration.FindPartiallyResolvedGoMod"}
  artifact={"github.com/moderneinc/recipes-go"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.golang.migration.FindPartiallyResolvedGoMod"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/golang/migration/findpartiallyresolvedgomod.md"}
  moderneOnly
>

<RecipeHeader.Title>Find go.mod files that could not be fully resolved offline</RecipeHeader.Title>

<RecipeHeader.Description>Find go.mod files whose module graph did not fully resolve at parse time, so `GoModTidy` skipped adding and removing requirements. The offline no-op is safe but silent, making a module that badly needs tidying look identical to one already tidy. This recipe marks such go.mod files and records a data table naming the module, its resolution status, the unresolved imports, and the toolchain failure reason, so a run can be triaged and re-run once the modules resolve. It reports only and does not modify the go.mod.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.golang.migration.FindPartiallyResolvedGoMod","displayName":"Find go.mod files that could not be fully resolved offline","goPackage":"github.com/moderneinc/recipes-go","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_RECIPES_GO"}}>

## Usage

</UsageList>

