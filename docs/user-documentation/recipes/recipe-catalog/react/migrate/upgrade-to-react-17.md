---
title: "Upgrade to React 17"
sidebar_label: "Upgrade to React 17"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to React 17"}
  description={"Migrate deprecated APIs for React 17 compatibility. Includes all React 16 migrations plus lifecycle method prefixing, import cleanup, and event.persist() removal."}
  fqName={"org.openrewrite.react.migrate.upgrade-to-react-17"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Upgrade to React 17"}
  description={"Migrate deprecated APIs for React 17 compatibility. Includes all React 16 migrations plus lifecycle method prefixing, import cleanup, and event.persist() removal."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.react.migrate.upgrade-to-react-17"}
  artifact={"io.moderne.recipe:rewrite-react"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.react.migrate.upgrade-to-react-17"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-17.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Upgrade to React 16","href":"react/migrate/upgrade-to-react-16"},{"name":"Add `UNSAFE_` prefix to deprecated lifecycle methods","href":"react/17/rename-unsafe-lifecycles"},{"name":"Remove unnecessary React imports","href":"react/17/update-react-imports"},{"name":"Remove `event.persist()` calls","href":"react/17/remove-event-persist"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.react.migrate.upgrade-to-react-17","displayName":"Upgrade to React 17","npmPackage":"@openrewrite/recipes-react"}}>

## Usage

</UsageList>

