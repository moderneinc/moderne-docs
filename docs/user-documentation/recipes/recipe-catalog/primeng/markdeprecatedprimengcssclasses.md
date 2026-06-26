---
title: "Mark deprecated PrimeNG CSS classes with TODO comments"
sidebar_label: "Mark deprecated PrimeNG CSS classes with TODO comments"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Mark deprecated PrimeNG CSS classes with TODO comments"}
  description={"For every HTML template that references a CSS class removed in PrimeNG 18 (`.p-link`, `.p-highlight`, `.p-fluid`), inserts a `<!-- TODO: ... -->` comment immediately before the offending element and writes a row to the `ManualMigrationSteps` data table. The class itself is left in place — the replacements are context-dependent (component-specific selectors, the new `fluid` input, etc.) and need a human or AI agent to apply."}
  fqName={"org.openrewrite.primeng.MarkDeprecatedPrimengCssClasses"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Mark deprecated PrimeNG CSS classes with TODO comments"}
  description={"For every HTML template that references a CSS class removed in PrimeNG 18 (`.p-link`, `.p-highlight`, `.p-fluid`), inserts a `<!-- TODO: ... -->` comment immediately before the offending element and writes a row to the `ManualMigrationSteps` data table. The class itself is left in place — the replacements are context-dependent (component-specific selectors, the new `fluid` input, etc.) and need a human or AI agent to apply."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.primeng.MarkDeprecatedPrimengCssClasses"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.primeng.MarkDeprecatedPrimengCssClasses"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/primeng/markdeprecatedprimengcssclasses.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.primeng.MarkDeprecatedPrimengCssClasses","displayName":"Mark deprecated PrimeNG CSS classes with TODO comments","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

