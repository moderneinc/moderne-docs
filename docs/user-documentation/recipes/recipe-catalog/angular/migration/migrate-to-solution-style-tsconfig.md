---
title: "Migrate to solution-style tsconfig"
sidebar_label: "Migrate to solution-style tsconfig"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to solution-style tsconfig"}
  description={"Migrates a project to use a solution-style `tsconfig.json`. The original `tsconfig.json` content is moved to `tsconfig.base.json` (with project-specific fields removed), and `tsconfig.json` is replaced with a solution-style config that references the project's TypeScript configurations. Other tsconfig files that extend `./tsconfig.json` are updated to extend `./tsconfig.base.json`."}
  fqName={"org.openrewrite.angular.migration.migrate-to-solution-style-tsconfig"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Migrate to solution-style tsconfig"}
  description={"Migrates a project to use a solution-style `tsconfig.json`. The original `tsconfig.json` content is moved to `tsconfig.base.json` (with project-specific fields removed), and `tsconfig.json` is replaced with a solution-style config that references the project's TypeScript configurations. Other tsconfig files that extend `./tsconfig.json` are updated to extend `./tsconfig.base.json`."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.migrate-to-solution-style-tsconfig"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.migrate-to-solution-style-tsconfig"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/migrate-to-solution-style-tsconfig.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.migrate-to-solution-style-tsconfig","displayName":"Migrate to solution-style tsconfig","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

