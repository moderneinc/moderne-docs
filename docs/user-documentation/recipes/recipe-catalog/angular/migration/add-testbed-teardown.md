---
title: "Add TestBed module teardown"
sidebar_label: "Add TestBed module teardown"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add TestBed module teardown"}
  description={"Adds `{ teardown: { destroyAfterEach: true } }` as the third argument to `TestBed.initTestEnvironment()` calls. Angular 13 changed the default teardown behavior, and this ensures explicit opt-in for module teardown after each test."}
  fqName={"org.openrewrite.angular.migration.add-testbed-teardown"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.add-testbed-teardown"}
  artifact={"@openrewrite/recipes-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.add-testbed-teardown"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/add-testbed-teardown.md"}
  moderneOnly
>

<RecipeHeader.Title>Add TestBed module teardown</RecipeHeader.Title>

<RecipeHeader.Description>Adds `{ teardown: { destroyAfterEach: true } }` as the third argument to `TestBed.initTestEnvironment()` calls. Angular 13 changed the default teardown behavior, and this ensures explicit opt-in for module teardown after each test.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.add-testbed-teardown","displayName":"Add TestBed module teardown","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

