---
title: "Standardize instance method first parameter to `self`"
sidebar_label: "Standardize instance method first parameter to `self`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Standardize instance method first parameter to `self`"}
  description={"Ensure instance methods use `self` as their first parameter per PEP 8 and rename all body references. Methods decorated with `@staticmethod` or `@classmethod` are not affected."}
  fqName={"org.openrewrite.python.cleanup.InstanceMethodFirstArgName"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Standardize instance method first parameter to `self`"}
  description={"Ensure instance methods use `self` as their first parameter per PEP 8 and rename all body references. Methods decorated with `@staticmethod` or `@classmethod` are not affected."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={["python","cleanup","naming","pep8"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.InstanceMethodFirstArgName"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.InstanceMethodFirstArgName"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/instancemethodfirstargname.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.InstanceMethodFirstArgName","displayName":"Standardize instance method first parameter to `self`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

