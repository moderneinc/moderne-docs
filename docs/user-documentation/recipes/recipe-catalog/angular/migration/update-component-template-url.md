---
title: "Update component `templateUrl`"
sidebar_label: "Update component `templateUrl`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Update component `templateUrl`"}
  description={"Updates the `templateUrl` property value in Angular `@Component` decorators. Useful for refactoring template file paths or standardizing path conventions."}
  fqName={"org.openrewrite.angular.migration.update-component-template-url"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.angular.migration.update-component-template-url"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.angular.migration.update-component-template-url"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/angular/migration/update-component-template-url.md"}
  moderneOnly
>

<RecipeHeader.Title>Update component `templateUrl`</RecipeHeader.Title>

<RecipeHeader.Description>Updates the `templateUrl` property value in Angular `@Component` decorators. Useful for refactoring template file paths or standardizing path conventions.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"oldTemplateUrl","required":true,"description":"The template URL to replace. Can be an exact path (e.g., `./old.html`) or a pattern.","example":"./old-template.html"},{"type":"String","name":"newTemplateUrl","required":true,"description":"The new template URL to use.","example":"./new-template.html"},{"type":"String","name":"useRegex","required":false,"description":"If `true`, treats `oldTemplateUrl` as a regex pattern and supports capture groups in `newTemplateUrl`. Default: `false`","example":"true"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.angular.migration.update-component-template-url","displayName":"Update component `templateUrl`","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

