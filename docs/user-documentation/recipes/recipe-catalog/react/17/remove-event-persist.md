---
title: "Remove `event.persist()` calls"
sidebar_label: "Remove `event.persist()` calls"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove `event.persist()` calls"}
  description={"Removes `event.persist()` calls. React 17 removed event pooling, making persist() unnecessary."}
  fqName={"org.openrewrite.react.17.remove-event-persist"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.react.17.remove-event-persist"}
  artifact={"@openrewrite/recipes-react"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.react.17.remove-event-persist"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/react/17/remove-event-persist.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove `event.persist()` calls</RecipeHeader.Title>

<RecipeHeader.Description>Removes `event.persist()` calls. React 17 removed event pooling, making persist() unnecessary.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.react.17.remove-event-persist","displayName":"Remove `event.persist()` calls","npmPackage":"@openrewrite/recipes-react"}}>

## Usage

</UsageList>

