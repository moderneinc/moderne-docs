---
title: "Migrate `&lt;p-messages&gt;` to `&lt;p-message&gt;` with `@for` loop"
sidebar_label: "Migrate `&lt;p-messages&gt;` to `&lt;p-message&gt;` with `@for` loop"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `<p-messages>` to `<p-message>` with `@for` loop"}
  description={"Rewrites `<p-messages [value]=\"expr\">…</p-messages>` to `@for (msg of expr; track msg) { <p-message [severity]=\"msg.severity\" [text]=\"msg.detail\"></p-message> }`. The `Messages` component was removed in PrimeNG 18 in favor of looping over the new `Message` component. Each rewritten site is recorded in the `ManualMigrationSteps` data table for follow-up review."}
  fqName={"org.openrewrite.primeng.MigrateMessagesToMessageLoop"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Migrate `<p-messages>` to `<p-message>` with `@for` loop"}
  description={"Rewrites `<p-messages [value]=\"expr\">…</p-messages>` to `@for (msg of expr; track msg) { <p-message [severity]=\"msg.severity\" [text]=\"msg.detail\"></p-message> }`. The `Messages` component was removed in PrimeNG 18 in favor of looping over the new `Message` component. Each rewritten site is recorded in the `ManualMigrationSteps` data table for follow-up review."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.primeng.MigrateMessagesToMessageLoop"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.primeng.MigrateMessagesToMessageLoop"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/primeng/migratemessagestomessageloop.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.primeng.MigrateMessagesToMessageLoop","displayName":"Migrate `<p-messages>` to `<p-message>` with `@for` loop","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

