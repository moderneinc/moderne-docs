---
title: "Replace `setattr()` with constant attribute assignment"
sidebar_label: "Replace `setattr()` with constant attribute assignment"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `setattr()` with constant attribute assignment"}
  description={"Replace a `setattr(x, \"attr\", value)` statement with `x.attr = value` when the attribute name is a constant valid Python identifier. It leaves alone a shadowed `setattr`, a non-ASCII or name-mangled name, a call used as an expression, a call holding comments, and an object or value that may have side effects, since the assignment evaluates the value first."}
  fqName={"org.openrewrite.python.cleanup.ReplaceSetAttrWithConstant"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","B010","cleanup","ruff"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.ReplaceSetAttrWithConstant"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.ReplaceSetAttrWithConstant"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/replacesetattrwithconstant.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `setattr()` with constant attribute assignment</RecipeHeader.Title>

<RecipeHeader.Description>Replace a `setattr(x, "attr", value)` statement with `x.attr = value` when the attribute name is a constant valid Python identifier. It leaves alone a shadowed `setattr`, a non-ASCII or name-mangled name, a call used as an expression, a call holding comments, and an object or value that may have side effects, since the assignment evaluates the value first.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.ReplaceSetAttrWithConstant","displayName":"Replace `setattr()` with constant attribute assignment","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

