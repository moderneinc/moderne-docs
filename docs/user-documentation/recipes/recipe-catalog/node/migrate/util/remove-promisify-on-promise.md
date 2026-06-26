---
title: "Remove unnecessary `util.promisify()` on Promise-returning functions"
sidebar_label: "Remove unnecessary `util.promisify()` on Promise-returning functions"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove unnecessary `util.promisify()` on Promise-returning functions"}
  description={"Removes `util.promisify()` calls on functions that already return a Promise. Since Node.js v17.0.0, calling promisify on a function that returns a Promise emits a runtime deprecation warning (DEP0174)."}
  fqName={"org.openrewrite.node.migrate.util.remove-promisify-on-promise"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Remove unnecessary `util.promisify()` on Promise-returning functions"}
  description={"Removes `util.promisify()` calls on functions that already return a Promise. Since Node.js v17.0.0, calling promisify on a function that returns a Promise emits a runtime deprecation warning (DEP0174)."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["DEP0174"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.util.remove-promisify-on-promise"}
  artifact={"org.openrewrite.recipe:rewrite-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.util.remove-promisify-on-promise"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/util/remove-promisify-on-promise.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.util.remove-promisify-on-promise","displayName":"Remove unnecessary `util.promisify()` on Promise-returning functions","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

