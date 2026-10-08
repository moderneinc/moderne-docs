---
title: "Remove unneeded `@angular/animations` providers"
sidebar_label: "Remove unneeded `@angular/animations` providers"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove unneeded `@angular/animations` providers"}
  description={"Angular 20.2 deprecated `@angular/animations` in favor of native CSS animations with `animate.enter`/`animate.leave`, which need no provider. Where an application no longer uses the legacy animation engine, this removes `provideAnimations()`, `provideAnimationsAsync()` and `BrowserAnimationsModule` from providers, `imports` and `importProvidersFrom`, removes `NoopAnimationsModule`/`provideNoopAnimations()` from tests, and drops `@angular/animations` from `package.json`. A package is left alone while anything still uses the legacy engine: an import of `@angular/animations` (a `trigger()` in `animations:` metadata, `AnimationBuilder`), a `[@trigger]`, `(@trigger.done)` or `@HostBinding('@trigger')` binding, Angular Material before 19.2, or a library that depends on `@angular/animations` or is known to ship legacy triggers. Noop providers outside tests are kept, since removing them would enable animations the application turned off. Lock files are not regenerated; run the package manager's install afterwards."}
  fqName={"org.openrewrite.node.migrate.angular-animations.remove-angular-animations-providers"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["angular","animations"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.angular-animations.remove-angular-animations-providers"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.angular-animations.remove-angular-animations-providers"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/angular-animations/remove-angular-animations-providers.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove unneeded `@angular/animations` providers</RecipeHeader.Title>

<RecipeHeader.Description>Angular 20.2 deprecated `@angular/animations` in favor of native CSS animations with `animate.enter`/`animate.leave`, which need no provider. Where an application no longer uses the legacy animation engine, this removes `provideAnimations()`, `provideAnimationsAsync()` and `BrowserAnimationsModule` from providers, `imports` and `importProvidersFrom`, removes `NoopAnimationsModule`/`provideNoopAnimations()` from tests, and drops `@angular/animations` from `package.json`. A package is left alone while anything still uses the legacy engine: an import of `@angular/animations` (a `trigger()` in `animations:` metadata, `AnimationBuilder`), a `[@trigger]`, `(@trigger.done)` or `@HostBinding('@trigger')` binding, Angular Material before 19.2, or a library that depends on `@angular/animations` or is known to ship legacy triggers. Noop providers outside tests are kept, since removing them would enable animations the application turned off. Lock files are not regenerated; run the package manager's install afterwards.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.angular-animations.remove-angular-animations-providers","displayName":"Remove unneeded `@angular/animations` providers","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

