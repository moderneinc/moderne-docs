---
title: "Code quality"
sidebar_label: "Code quality"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Code quality"}
  description={"Apply all Python code quality recipes that change code: simplify boolean expressions, merge and collapse `if` chains, and remove dead conditions and writes. Search-only recipes, which mark code for review, are not included."}
  fqName={"org.openrewrite.python.codequality.CodeQuality"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={["python","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.codequality.CodeQuality"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.codequality.CodeQuality"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/codequality/codequality-recipe.md"}
  moderneOnly
>

<RecipeHeader.Title>Code quality</RecipeHeader.Title>

<RecipeHeader.Description>Apply all Python code quality recipes that change code: simplify boolean expressions, merge and collapse `if` chains, and remove dead conditions and writes. Search-only recipes, which mark code for review, are not included.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Simplify boolean literal comparisons","href":"/user-documentation/recipes/recipe-catalog/python/codequality/simplifybooleanliteral/"},{"name":"Boolean checks should not be inverted","href":"/user-documentation/recipes/recipe-catalog/python/codequality/booleanchecksnotinverted/"},{"name":"Simplify redundant logical expressions","href":"/user-documentation/recipes/recipe-catalog/python/codequality/simplifyredundantlogicalexpression/"},{"name":"Remove duplicate conditions in if/elif chains","href":"/user-documentation/recipes/recipe-catalog/python/codequality/removeduplicateconditions/"},{"name":"Remove conditional with identical branches","href":"/user-documentation/recipes/recipe-catalog/python/codequality/allbranchesidentical/"},{"name":"Merge consecutive branches with identical bodies","href":"/user-documentation/recipes/recipe-catalog/python/codequality/mergeidenticalbranches/"},{"name":"Merge collapsible if statements","href":"/user-documentation/recipes/recipe-catalog/python/codequality/collapsibleifstatements/"},{"name":"Remove self-assignments","href":"/user-documentation/recipes/recipe-catalog/python/codequality/removeselfassignment/"},{"name":"Remove unconditional value overwrites","href":"/user-documentation/recipes/recipe-catalog/python/codequality/removeunconditionalvalueoverwrite/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.python.codequality.CodeQuality","displayName":"Code quality","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

