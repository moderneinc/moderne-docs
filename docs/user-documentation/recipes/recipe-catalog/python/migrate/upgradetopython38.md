---
title: "Upgrade to Python 3.8"
sidebar_label: "Upgrade to Python 3.8"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to Python 3.8"}
  description={"Migrate deprecated APIs and detect legacy patterns for Python 3.8 compatibility."}
  fqName={"org.openrewrite.python.migrate.UpgradeToPython38"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={["python","migration","3.8"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.UpgradeToPython38"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.UpgradeToPython38"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython38.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade to Python 3.8</RecipeHeader.Title>

<RecipeHeader.Description>Migrate deprecated APIs and detect legacy patterns for Python 3.8 compatibility.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change import","href":"/user-documentation/recipes/recipe-catalog/python/changeimport/"},{"name":"Change import","href":"/user-documentation/recipes/recipe-catalog/python/changeimport/"},{"name":"Change import","href":"/user-documentation/recipes/recipe-catalog/python/changeimport/"},{"name":"Change import","href":"/user-documentation/recipes/recipe-catalog/python/changeimport/"},{"name":"Replace `cgi.parse_qs()` with `urllib.parse.parse_qs()`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacecgiparseqs/"},{"name":"Replace `cgi.parse_qsl()` with `urllib.parse.parse_qsl()`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacecgiparseqsl/"},{"name":"Replace `platform.popen()` with `subprocess.check_output()`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replaceplatformpopen/"},{"name":"Find removed `macpath` module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findmacpathmodule/"},{"name":"Replace `tarfile.filemode` with `stat.filemode`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacetarfilefilemode/"},{"name":"Change import","href":"/user-documentation/recipes/recipe-catalog/python/changeimport/"},{"name":"Find removed `sys.set_coroutine_wrapper()` / `sys.get_coroutine_wrapper()`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findsyscoroutinewrapper/"},{"name":"Replace `str.format()` with f-string","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacestrformatwithfstring/"},{"name":"Replace `%` formatting with f-string","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacepercentformatwithfstring/"},{"name":"Find `functools.cmp_to_key()` usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findfunctoolscmptokey/"},{"name":"Remove obsolete `__future__` imports","href":"/user-documentation/recipes/recipe-catalog/python/migrate/removefutureimports/"},{"name":"org.openrewrite.python.migrate.UpgradePythonVersionTo38","href":"/user-documentation/recipes/recipe-catalog/python/migrate/upgradepythonversionto38/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.UpgradeToPython38","displayName":"Upgrade to Python 3.8","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

