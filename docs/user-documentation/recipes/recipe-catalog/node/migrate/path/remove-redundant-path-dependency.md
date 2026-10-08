---
title: "Remove the redundant `path` npm package"
sidebar_label: "Remove the redundant `path` npm package"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove the redundant `path` npm package"}
  description={"Removes the `path` npm package, an unmaintained 2015 copy of Node's `path` module, from `package.json`. Node always resolves `require('path')` and `import 'path'` to its built-in module, so the package is never loaded at runtime. It is kept where a browser bundle may still use it: when webpack 5, Vite, esbuild, Parcel, Rspack or Rsbuild (directly or through a framework such as Create React App 5, the Angular CLI, Vue CLI 5, Nuxt 3, SvelteKit or Astro) would bundle a `path` import from browser-side source, when the `browser` field maps `path` to a package, or when code names the package explicitly as `path/`. Lock files are not regenerated; run the package manager's install afterwards."}
  fqName={"org.openrewrite.node.migrate.path.remove-redundant-path-dependency"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["path"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.path.remove-redundant-path-dependency"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.path.remove-redundant-path-dependency"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/path/remove-redundant-path-dependency.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove the redundant `path` npm package</RecipeHeader.Title>

<RecipeHeader.Description>Removes the `path` npm package, an unmaintained 2015 copy of Node's `path` module, from `package.json`. Node always resolves `require('path')` and `import 'path'` to its built-in module, so the package is never loaded at runtime. It is kept where a browser bundle may still use it: when webpack 5, Vite, esbuild, Parcel, Rspack or Rsbuild (directly or through a framework such as Create React App 5, the Angular CLI, Vue CLI 5, Nuxt 3, SvelteKit or Astro) would bundle a `path` import from browser-side source, when the `browser` field maps `path` to a package, or when code names the package explicitly as `path/`. Lock files are not regenerated; run the package manager's install afterwards.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.path.remove-redundant-path-dependency","displayName":"Remove the redundant `path` npm package","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

