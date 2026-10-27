---
title: "Replace `xml.etree.cElementTree` with `xml.etree.ElementTree`"
sidebar_label: "Replace `xml.etree.cElementTree` with `xml.etree.ElementTree`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `xml.etree.cElementTree` with `xml.etree.ElementTree`"}
  description={"`xml.etree.cElementTree` was deprecated in Python 3.3 and removed in Python 3.9. Import `xml.etree.ElementTree` instead, which uses the C accelerator itself."}
  fqName={"org.openrewrite.python.migrate.ReplaceCElementTree"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={["python","xml","migration","3.9"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.ReplaceCElementTree"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.ReplaceCElementTree"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/replacecelementtree.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `xml.etree.cElementTree` with `xml.etree.ElementTree`</RecipeHeader.Title>

<RecipeHeader.Description>`xml.etree.cElementTree` was deprecated in Python 3.3 and removed in Python 3.9. Import `xml.etree.ElementTree` instead, which uses the C accelerator itself.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change import","href":"/user-documentation/recipes/recipe-catalog/python/changeimport/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.ReplaceCElementTree","displayName":"Replace `xml.etree.cElementTree` with `xml.etree.ElementTree`","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

