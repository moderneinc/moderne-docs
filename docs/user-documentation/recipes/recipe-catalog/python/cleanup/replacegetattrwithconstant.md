---
title: "Replace `getattr(x, 'attr')` with `x.attr`"
sidebar_label: "Replace `getattr(x, 'attr')` with `x.attr`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `getattr(x, 'attr')` with `x.attr`"}
  description={"Replace `getattr(x, \"attr\")` calls with `x.attr` when the attribute name is a constant string that is a valid Python identifier. It leaves alone a shadowed `getattr`, a non-ASCII or name-mangled name, an object that would need parentheses, and a call holding comments."}
  fqName={"org.openrewrite.python.cleanup.ReplaceGetAttrWithConstant"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","cleanup","ruff","B009"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.ReplaceGetAttrWithConstant"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.ReplaceGetAttrWithConstant"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/replacegetattrwithconstant.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `getattr(x, 'attr')` with `x.attr`</RecipeHeader.Title>

<RecipeHeader.Description>Replace `getattr(x, "attr")` calls with `x.attr` when the attribute name is a constant string that is a valid Python identifier. It leaves alone a shadowed `getattr`, a non-ASCII or name-mangled name, an object that would need parentheses, and a call holding comments.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.ReplaceGetAttrWithConstant","displayName":"Replace `getattr(x, 'attr')` with `x.attr`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

