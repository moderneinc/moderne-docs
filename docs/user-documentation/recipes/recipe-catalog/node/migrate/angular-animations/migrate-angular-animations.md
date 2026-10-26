---
title: "Migrate off the deprecated `@angular/animations` package"
sidebar_label: "Migrate off the deprecated `@angular/animations` package"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate off the deprecated `@angular/animations` package"}
  description={"Removes the animation providers and the `@angular/animations` dependency from applications that no longer use the legacy animation engine, and marks the triggers, `AnimationBuilder` uses and noop providers that need a manual move to native CSS animations with `animate.enter`/`animate.leave`."}
  fqName={"org.openrewrite.node.migrate.angular-animations.migrate-angular-animations"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["angular","animations"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.angular-animations.migrate-angular-animations"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.angular-animations.migrate-angular-animations"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/angular-animations/migrate-angular-animations.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate off the deprecated `@angular/animations` package</RecipeHeader.Title>

<RecipeHeader.Description>Removes the animation providers and the `@angular/animations` dependency from applications that no longer use the legacy animation engine, and marks the triggers, `AnimationBuilder` uses and noop providers that need a manual move to native CSS animations with `animate.enter`/`animate.leave`.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Remove unneeded `@angular/animations` providers","href":"/user-documentation/recipes/recipe-catalog/node/migrate/angular-animations/remove-angular-animations-providers/"},{"name":"Find legacy `@angular/animations` usage","href":"/user-documentation/recipes/recipe-catalog/node/migrate/angular-animations/find-legacy-angular-animations/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.angular-animations.migrate-angular-animations","displayName":"Migrate off the deprecated `@angular/animations` package","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

