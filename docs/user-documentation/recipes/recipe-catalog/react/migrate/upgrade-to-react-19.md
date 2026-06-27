---
title: "Upgrade to React 19"
sidebar_label: "Upgrade to React 19"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade to React 19"}
  description={"Migrate deprecated and removed APIs for React 19 compatibility. This includes removing forwardRef, updating Context.Provider usage, replacing useContext with use, and other breaking changes."}
  fqName={"org.openrewrite.react.migrate.upgrade-to-react-19"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.react.migrate.upgrade-to-react-19"}
  artifact={"io.moderne.recipe:rewrite-react"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.react.migrate.upgrade-to-react-19"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-19.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade to React 19</RecipeHeader.Title>

<RecipeHeader.Description>Migrate deprecated and removed APIs for React 19 compatibility. This includes removing forwardRef, updating Context.Provider usage, replacing useContext with use, and other breaking changes.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade to React 18","href":"/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-18/"},{"name":"Remove `React.forwardRef` wrapper","href":"/user-documentation/recipes/recipe-catalog/react/19/remove-forward-ref/"},{"name":"Remove `React.FC` type annotation","href":"/user-documentation/recipes/recipe-catalog/react/19/remove-react-fc/"},{"name":"Replace `act` import from react-dom/test-utils","href":"/user-documentation/recipes/recipe-catalog/react/19/replace-act-import/"},{"name":"Remove `Context.Provider` wrapper","href":"/user-documentation/recipes/recipe-catalog/react/19/remove-context-provider/"},{"name":"Replace `useContext` with `use`","href":"/user-documentation/recipes/recipe-catalog/react/19/use-context-hook/"},{"name":"Replace `useFormState` with `useActionState`","href":"/user-documentation/recipes/recipe-catalog/react/19/replace-use-form-state/"},{"name":"Replace string refs with callback refs","href":"/user-documentation/recipes/recipe-catalog/react/19/replace-string-ref/"},{"name":"Replace `defaultProps` with default parameter values","href":"/user-documentation/recipes/recipe-catalog/react/19/replace-default-props/"},{"name":"Replace `ReactDOM.hydrate` with `hydrateRoot`","href":"/user-documentation/recipes/recipe-catalog/react/19/replace-reactdom-hydrate/"},{"name":"Add initial value to `useRef()` calls","href":"/user-documentation/recipes/recipe-catalog/react/19/use-ref-required-initial/"},{"name":"Remove `propTypes` assignments","href":"/user-documentation/recipes/recipe-catalog/react/19/remove-prop-types/"},{"name":"Remove implicit ref callback returns","href":"/user-documentation/recipes/recipe-catalog/react/19/no-implicit-ref-callback-return/"},{"name":"Replace deprecated React types","href":"/user-documentation/recipes/recipe-catalog/react/19/deprecated-react-types/"},{"name":"Replace `react-test-renderer/shallow` import","href":"/user-documentation/recipes/recipe-catalog/react/19/replace-react-shallow-renderer/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.react.migrate.upgrade-to-react-19","displayName":"Upgrade to React 19","npmPackage":"@openrewrite/recipes-react"}}>

## Usage

</UsageList>

