---
title: "Upgrade to Python 3.15"
sidebar_label: "Upgrade to Python 3.15"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to Python 3.15"}
  description={"Migrate deprecated and removed APIs for Python 3.15 compatibility, applying every earlier upgrade first."}
  fqName={"org.openrewrite.python.migrate.UpgradeToPython315"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Python"]}
  tags={["python","migration","3.15"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.migrate.UpgradeToPython315"}
  artifact={"openrewrite-migrate-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.migrate.UpgradeToPython315"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython315.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade to Python 3.15</RecipeHeader.Title>

<RecipeHeader.Description>Migrate deprecated and removed APIs for Python 3.15 compatibility, applying every earlier upgrade first.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade to Python 3.14","href":"/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython314/"},{"name":"Replace `glob.glob1()` with `glob.glob(root_dir=...)`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replaceglobglob1/"},{"name":"Replace keyword-argument `NamedTuple` fields with a field list","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacenamedtuplekeywordfields/"},{"name":"Pass `[]` to a `NamedTuple` with no fields","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacenamedtuplewithoutfields/"},{"name":"Pass `{}` to a `TypedDict` with no fields","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacetypeddictwithoutfields/"},{"name":"Replace `importlib.resources.files(package=...)` with `anchor=...`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replaceimportlibresourcesfilespackage/"},{"name":"Replace module `__cached__` with `__spec__.cached`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/replacemodulecachedattribute/"},{"name":"Find removed `glob.glob0()`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findglobglob0/"},{"name":"Find removed `PurePath.is_reserved()`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findpathlibisreserved/"},{"name":"Find removed `load_module()` on import loaders","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findloaderloadmodule/"},{"name":"Find removed `sre_*` modules","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findsremodules/"},{"name":"Find removed `http.server.CGIHTTPRequestHandler`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findcgihttprequesthandler/"},{"name":"Find removed `typing.no_type_check_decorator`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findtypingnotypecheckdecorator/"},{"name":"Find removed `ctypes.SetPointerType()`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findctypessetpointertype/"},{"name":"Find removed `platform.java_ver()`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findplatformjavaver/"},{"name":"Find removed `wave` marker methods","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findwavemarkers/"},{"name":"Find removed `co_lnotab` on code objects","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findcodeobjectcolnotab/"},{"name":"Find deprecated `profile` module","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findprofilemodule/"},{"name":"Find deprecated `webbrowser.MacOSXOSAScript`","href":"/user-documentation/recipes/recipe-catalog/python/migrate/findwebbrowsermacosxosascript/"},{"name":"org.openrewrite.python.migrate.UpgradePythonVersionTo315","href":"/user-documentation/recipes/recipe-catalog/python/migrate/upgradepythonversionto315/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.python.migrate.UpgradeToPython315","displayName":"Upgrade to Python 3.15","pipPackage":"openrewrite-migrate-python","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_PYTHON","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-python","companionJars":[{"groupId":"org.openrewrite","artifactId":"rewrite-python","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PYTHON"}]}}>

## Usage

</UsageList>

