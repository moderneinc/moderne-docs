---
title: "Upgrade to Python 3.10"
sidebar_label: "Upgrade to Python 3.10"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to Python 3.10"}
  description={"Migrate deprecated APIs and adopt new syntax for Python 3.10 compatibility. This includes adopting PEP 604 union type syntax (`X | Y`) and other modernizations between Python 3.9 and 3.10."}
  fqName={"org.openrewrite.python.migrate.UpgradeToPython310"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={["python","migration","3.10"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.UpgradeToPython310"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.UpgradeToPython310"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython310.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade to Python 3.10</RecipeHeader.Title>

<RecipeHeader.Description>Migrate deprecated APIs and adopt new syntax for Python 3.10 compatibility. This includes adopting PEP 604 union type syntax (`X | Y`) and other modernizations between Python 3.9 and 3.10.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade to Python 3.9","href":"/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython39/"},{"name":"Replace `collections` ABC imports with `collections.abc`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacecollectionsabcimports/"},{"name":"Replace `typing.Optional[X]` with `X | None`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacetypingoptionalwithunion/"},{"name":"Replace `typing.Union[X, Y]` with `X | Y`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacetypingunionwithpipe/"},{"name":"Replace `threading.currentThread()` with `threading.current_thread()`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacethreadingcurrentthread/"},{"name":"Replace `threading.activeCount()` with `threading.active_count()`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacethreadingactivecount/"},{"name":"Replace `Condition.notifyAll()` with `Condition.notify_all()`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replaceconditionnotifyall/"},{"name":"Replace `Event.isSet()` with `Event.is_set()`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replaceeventisset/"},{"name":"Replace `Thread.getName()` with `Thread.name`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacethreadgetname/"},{"name":"Replace `Thread.setName()` with `Thread.name = ...`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacethreadsetname/"},{"name":"Replace `Thread.isDaemon()` with `Thread.daemon`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacethreadisdaemon/"},{"name":"Replace `Thread.setDaemon()` with `Thread.daemon = ...`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacethreadsetdaemon/"},{"name":"org.openrewrite.python.migrate.UpgradePythonVersionTo310","href":"/user-documentation/recipes/recipe-catalog/python/migrate/upgradepythonversionto310/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.UpgradeToPython310","displayName":"Upgrade to Python 3.10","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

