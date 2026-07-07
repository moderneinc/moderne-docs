---
title: "Upgrade to Python 3.12"
sidebar_label: "Upgrade to Python 3.12"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to Python 3.12"}
  description={"Migrate deprecated and removed APIs for Python 3.12 compatibility. This includes detecting usage of the removed `imp` module and other legacy modules that were removed in Python 3.12."}
  fqName={"org.openrewrite.python.migrate.UpgradeToPython312"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={["python","migration","3.12"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.UpgradeToPython312"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.UpgradeToPython312"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython312.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade to Python 3.12</RecipeHeader.Title>

<RecipeHeader.Description>Migrate deprecated and removed APIs for Python 3.12 compatibility. This includes detecting usage of the removed `imp` module and other legacy modules that were removed in Python 3.12.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade to Python 3.11","href":"/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython311/"},{"name":"Replace `datetime.utcnow()` with `datetime.now(UTC)`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacedatetimeutcnow/"},{"name":"Replace `datetime.utcfromtimestamp()` with `datetime.fromtimestamp(ts, UTC)`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacedatetimeutcfromtimestamp/"},{"name":"Replace deprecated calendar constants with uppercase","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacecalendarconstants/"},{"name":"Change import","href":"/user-documentation/recipes/recipe-catalog/python/changeimport/"},{"name":"Find deprecated imp module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findimpusage/"},{"name":"Replace deprecated distutils.version usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacedistutilsversion/"},{"name":"Find deprecated distutils module usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/finddistutilsusage/"},{"name":"Replace `pkgutil.find_loader()` with `importlib.util.find_spec()`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacepkgutilfindloader/"},{"name":"Replace `pkgutil.get_loader()` with `importlib.util.find_spec()`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacepkgutilgetloader/"},{"name":"Find deprecated `Path.link_to()` usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findpathliblinkto/"},{"name":"Find modules removed in Python 3.12","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findremovedmodules312/"},{"name":"Find deprecated `ssl.match_hostname()`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findsslmatchhostname/"},{"name":"Find deprecated `os.popen()` usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findospopen/"},{"name":"Find deprecated `os.spawn*()` usage","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findosspawn/"},{"name":"Find deprecated `shutil.rmtree(onerror=...)` parameter","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findshutilrmtreeonerror/"},{"name":"Replace `sys.last_type` / `sys.last_value` / `sys.last_traceback` with `sys.last_exc`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacesyslastexcinfo/"},{"name":"org.openrewrite.python.migrate.UpgradePythonVersionTo312","href":"/user-documentation/recipes/recipe-catalog/python/migrate/upgradepythonversionto312/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.UpgradeToPython312","displayName":"Upgrade to Python 3.12","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON"}}>

## Usage

</UsageList>

