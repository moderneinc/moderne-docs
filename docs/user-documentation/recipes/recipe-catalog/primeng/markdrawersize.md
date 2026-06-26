---
title: "Mark `&lt;p-drawer&gt;` / `&lt;p-sidebar&gt;` `size` usages with TODO comments"
sidebar_label: "Mark `&lt;p-drawer&gt;` / `&lt;p-sidebar&gt;` `size` usages with TODO comments"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Mark `<p-drawer>` / `<p-sidebar>` `size` usages with TODO comments"}
  description={"Inserts an HTML `<!-- TODO: ... -->` comment before any `<p-drawer>` or `<p-sidebar>` element that binds the removed `size` input, and records the site in the `ManualMigrationSteps` data table. Both `[size]=\"...\"` and `size=\"...\"` attribute forms are matched. The attribute is left untouched — the v18 replacement (responsive CSS via `[style]` / `styleClass`) depends on the desired layout and needs manual review."}
  fqName={"org.openrewrite.primeng.MarkDrawerSize"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Mark `<p-drawer>` / `<p-sidebar>` `size` usages with TODO comments"}
  description={"Inserts an HTML `<!-- TODO: ... -->` comment before any `<p-drawer>` or `<p-sidebar>` element that binds the removed `size` input, and records the site in the `ManualMigrationSteps` data table. Both `[size]=\"...\"` and `size=\"...\"` attribute forms are matched. The attribute is left untouched — the v18 replacement (responsive CSS via `[style]` / `styleClass`) depends on the desired layout and needs manual review."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.primeng.MarkDrawerSize"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.primeng.MarkDrawerSize"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/primeng/markdrawersize.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.primeng.MarkDrawerSize","displayName":"Mark `<p-drawer>` / `<p-sidebar>` `size` usages with TODO comments","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

