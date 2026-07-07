---
title: "Upgrade to Python 3.14"
sidebar_label: "Upgrade to Python 3.14"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to Python 3.14"}
  description={"Migrate deprecated and removed APIs for Python 3.14 compatibility. This includes replacing deprecated AST node types with `ast.Constant` and other API changes between Python 3.13 and 3.14."}
  fqName={"org.openrewrite.python.migrate.UpgradeToPython314"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={["python","migration","3.14"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.UpgradeToPython314"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.UpgradeToPython314"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython314.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade to Python 3.14</RecipeHeader.Title>

<RecipeHeader.Description>Migrate deprecated and removed APIs for Python 3.14 compatibility. This includes replacing deprecated AST node types with `ast.Constant` and other API changes between Python 3.13 and 3.14.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade to Python 3.13","href":"/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython313/"},{"name":"Replace `array.tostring()` with `array.tobytes()`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacearraytostring/"},{"name":"Replace `array.fromstring()` with `array.frombytes()`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacearrayfromstring/"},{"name":"Replace `ast.Num` with `ast.Constant`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replaceastnum/"},{"name":"Replace `ast.Str` with `ast.Constant`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replaceaststr/"},{"name":"Replace `ast.Bytes` with `ast.Constant`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replaceastbytes/"},{"name":"Replace `ast.NameConstant` with `ast.Constant`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replaceastnameconstant/"},{"name":"Replace `ast.Ellipsis` with `ast.Constant`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replaceastellipsis/"},{"name":"Find deprecated `tempfile.mktemp()` usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findtempfilemktemp/"},{"name":"Find deprecated urllib.parse split functions","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findurllibparsesplitfunctions/"},{"name":"Find deprecated `urllib.parse.to_bytes()` usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findurllibparsetobytes/"},{"name":"org.openrewrite.python.migrate.UpgradePythonVersionTo314","href":"/user-documentation/recipes/recipe-catalog/python/migrate/upgradepythonversionto314/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.UpgradeToPython314","displayName":"Upgrade to Python 3.14","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

