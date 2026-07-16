---
title: "Upgrade to Python 3.13"
sidebar_label: "Upgrade to Python 3.13"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to Python 3.13"}
  description={"Migrate deprecated and removed APIs for Python 3.13 compatibility. This includes detecting usage of modules removed in PEP 594 ('dead batteries'), other API changes between Python 3.12 and 3.13, and bumping third-party dependencies (`ruff`, `avro-python3`) whose pinned releases do not install cleanly on Python 3.13."}
  fqName={"org.openrewrite.python.migrate.UpgradeToPython313"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={["python","migration","3.13"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.UpgradeToPython313"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.UpgradeToPython313"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython313.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade to Python 3.13</RecipeHeader.Title>

<RecipeHeader.Description>Migrate deprecated and removed APIs for Python 3.13 compatibility. This includes detecting usage of modules removed in PEP 594 ('dead batteries'), other API changes between Python 3.12 and 3.13, and bumping third-party dependencies (`ruff`, `avro-python3`) whose pinned releases do not install cleanly on Python 3.13.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade to Python 3.12","href":"/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython312/"},{"name":"Replace `locale.resetlocale()` with `locale.setlocale(LC_ALL, '')`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacelocaleresetlocale/"},{"name":"Find deprecated `aifc` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findaifcmodule/"},{"name":"Find deprecated `audioop` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findaudioopmodule/"},{"name":"Find deprecated `cgi` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findcgimodule/"},{"name":"Find deprecated `cgitb` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findcgitbmodule/"},{"name":"Find deprecated `chunk` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findchunkmodule/"},{"name":"Find deprecated `crypt` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findcryptmodule/"},{"name":"Find deprecated `imghdr` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findimghdrmodule/"},{"name":"Find deprecated `mailcap` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findmailcapmodule/"},{"name":"Find deprecated `msilib` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findmsilibmodule/"},{"name":"Find deprecated `nis` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findnismodule/"},{"name":"Find deprecated `nntplib` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findnntplibmodule/"},{"name":"Find deprecated `ossaudiodev` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findossaudiodevmodule/"},{"name":"Find deprecated `pipes` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findpipesmodule/"},{"name":"Find deprecated `sndhdr` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findsndhdrmodule/"},{"name":"Find deprecated `spwd` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findspwdmodule/"},{"name":"Find deprecated `sunau` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findsunaumodule/"},{"name":"Find deprecated `telnetlib` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findtelnetlibmodule/"},{"name":"Find deprecated `uu` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/finduumodule/"},{"name":"Find deprecated `xdrlib` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findxdrlibmodule/"},{"name":"org.openrewrite.python.UpgradeDependencyVersion","href":"/user-documentation/recipes/recipe-catalog/python/upgradedependencyversion/"},{"name":"org.openrewrite.python.UpgradeDependencyVersion","href":"/user-documentation/recipes/recipe-catalog/python/upgradedependencyversion/"},{"name":"org.openrewrite.python.migrate.UpgradePythonVersionTo313","href":"/user-documentation/recipes/recipe-catalog/python/migrate/upgradepythonversionto313/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.UpgradeToPython313","displayName":"Upgrade to Python 3.13","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

