---
title: "Remove `propTypes` that no longer check anything"
sidebar_label: "Remove `propTypes` that no longer check anything"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove `propTypes` that no longer check anything"}
  description={"Removes `Component.propTypes = {...}` assignments and `static propTypes` class members where they have become redundant, then the `prop-types` import and, once no source uses it, the `prop-types` dependency. In TypeScript a component's `propTypes` are removed when its props are already typed (an annotated props parameter, `React.FC<Props>`, type arguments on `forwardRef`/`memo`, or `Component<Props>`). In JavaScript they are removed where the package runs React 19 or later, which ignores `propTypes` entirely, unless a documentation tool (Storybook, react-docgen, Styleguidist, Docz) builds prop tables from them. Packages whose `peerDependencies` still admit React before 19 keep them, as do components whose `propTypes` are read elsewhere (spread into another component's, or passed to `checkPropTypes`). Lock files are not regenerated; run the package manager's install afterwards."}
  fqName={"org.openrewrite.node.migrate.prop-types.remove-prop-types"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["prop-types","react"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.node.migrate.prop-types.remove-prop-types"}
  artifact={"@openrewrite/recipes-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.node.migrate.prop-types.remove-prop-types"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/node/migrate/prop-types/remove-prop-types.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove `propTypes` that no longer check anything</RecipeHeader.Title>

<RecipeHeader.Description>Removes `Component.propTypes = {...}` assignments and `static propTypes` class members where they have become redundant, then the `prop-types` import and, once no source uses it, the `prop-types` dependency. In TypeScript a component's `propTypes` are removed when its props are already typed (an annotated props parameter, `React.FC<Props>`, type arguments on `forwardRef`/`memo`, or `Component<Props>`). In JavaScript they are removed where the package runs React 19 or later, which ignores `propTypes` entirely, unless a documentation tool (Storybook, react-docgen, Styleguidist, Docz) builds prop tables from them. Packages whose `peerDependencies` still admit React before 19 keep them, as do components whose `propTypes` are read elsewhere (spread into another component's, or passed to `checkPropTypes`). Lock files are not regenerated; run the package manager's install afterwards.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.node.migrate.prop-types.remove-prop-types","displayName":"Remove `propTypes` that no longer check anything","npmPackage":"@openrewrite/recipes-nodejs"}}>

## Usage

</UsageList>

