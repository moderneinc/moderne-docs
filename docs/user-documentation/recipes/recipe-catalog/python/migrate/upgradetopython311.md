---
title: "Upgrade to Python 3.11"
sidebar_label: "Upgrade to Python 3.11"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to Python 3.11"}
  description={"Migrate deprecated and removed APIs for Python 3.11 compatibility. This includes handling removed modules, deprecated functions, and API changes between Python 3.10 and 3.11."}
  fqName={"org.openrewrite.python.migrate.UpgradeToPython311"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={["python","migration","3.11"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.UpgradeToPython311"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.UpgradeToPython311"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython311.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade to Python 3.11</RecipeHeader.Title>

<RecipeHeader.Description>Migrate deprecated and removed APIs for Python 3.11 compatibility. This includes handling removed modules, deprecated functions, and API changes between Python 3.10 and 3.11.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade to Python 3.10","href":"/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython310/"},{"name":"Change import","href":"/user-documentation/recipes/recipe-catalog/python/changeimport/"},{"name":"Replace `configparser.SafeConfigParser` with `ConfigParser`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replaceconfigparsersafeconfigparser/"},{"name":"Replace `ConfigParser.readfp()` with `read_file()`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replaceconfigparserreadfp/"},{"name":"Replace deprecated gettext l*gettext() functions","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacegettextdeprecations/"},{"name":"Change import","href":"/user-documentation/recipes/recipe-catalog/python/changeimport/"},{"name":"Replace deprecated unittest method aliases","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replaceunittestdeprecatedaliases/"},{"name":"Migrate `@asyncio.coroutine` to `async def`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/migrateasynciocoroutine/"},{"name":"Find deprecated `@asyncio.coroutine` decorator","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findasynciocoroutinedecorator/"},{"name":"Find `socket.getfqdn()` usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findsocketgetfqdn/"},{"name":"Find deprecated `locale.getdefaultlocale()` usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findlocalegetdefaultlocale/"},{"name":"Replace `re.template()` with `re.compile()` and flag `re.TEMPLATE`/`re.T`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replaceretemplate/"},{"name":"org.openrewrite.python.migrate.UpgradePythonVersionTo311","href":"/user-documentation/recipes/recipe-catalog/python/migrate/upgradepythonversionto311/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.UpgradeToPython311","displayName":"Upgrade to Python 3.11","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

