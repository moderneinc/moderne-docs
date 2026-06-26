---
title: "Migrate `.p-fluid` to `&lt;p-fluid&gt;` wrapper"
sidebar_label: "Migrate `.p-fluid` to `&lt;p-fluid&gt;` wrapper"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `.p-fluid` to `<p-fluid>` wrapper"}
  description={"Rewrites `<div class=\"…p-fluid…\">…</div>` to `<p-fluid class=\"…\">…</p-fluid>` and adds a `FluidModule` import from `primeng/fluid` to the corresponding component file. PrimeNG 18 removed the `.p-fluid` CSS class; the `<p-fluid>` wrapper component is its replacement."}
  fqName={"org.openrewrite.primeng.MigratePFluidToWrapper"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Migrate `.p-fluid` to `<p-fluid>` wrapper"}
  description={"Rewrites `<div class=\"…p-fluid…\">…</div>` to `<p-fluid class=\"…\">…</p-fluid>` and adds a `FluidModule` import from `primeng/fluid` to the corresponding component file. PrimeNG 18 removed the `.p-fluid` CSS class; the `<p-fluid>` wrapper component is its replacement."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.primeng.MigratePFluidToWrapper"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.primeng.MigratePFluidToWrapper"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/primeng/migratepfluidtowrapper.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Rewrite `.p-fluid` divs to `<p-fluid>` wrappers","href":""},{"name":"Add `FluidModule` import to components using `<p-fluid>`","href":""}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.primeng.MigratePFluidToWrapper","displayName":"Migrate `.p-fluid` to `<p-fluid>` wrapper","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

