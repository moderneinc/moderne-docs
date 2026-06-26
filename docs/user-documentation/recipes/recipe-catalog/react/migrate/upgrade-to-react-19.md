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
  displayName={"Upgrade to React 19"}
  description={"Migrate deprecated and removed APIs for React 19 compatibility. This includes removing forwardRef, updating Context.Provider usage, replacing useContext with use, and other breaking changes."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.react.migrate.upgrade-to-react-19"}
  artifact={"io.moderne.recipe:rewrite-react"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.react.migrate.upgrade-to-react-19"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-19.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Upgrade to React 18","href":"react/migrate/upgrade-to-react-18"},{"name":"Remove `React.forwardRef` wrapper","href":"react/19/remove-forward-ref"},{"name":"Remove `React.FC` type annotation","href":"react/19/remove-react-fc"},{"name":"Replace `act` import from react-dom/test-utils","href":"react/19/replace-act-import"},{"name":"Remove `Context.Provider` wrapper","href":"react/19/remove-context-provider"},{"name":"Replace `useContext` with `use`","href":"react/19/use-context-hook"},{"name":"Replace `useFormState` with `useActionState`","href":"react/19/replace-use-form-state"},{"name":"Replace string refs with callback refs","href":"react/19/replace-string-ref"},{"name":"Replace `defaultProps` with default parameter values","href":"react/19/replace-default-props"},{"name":"Replace `ReactDOM.hydrate` with `hydrateRoot`","href":"react/19/replace-reactdom-hydrate"},{"name":"Add initial value to `useRef()` calls","href":"react/19/use-ref-required-initial"},{"name":"Remove `propTypes` assignments","href":"react/19/remove-prop-types"},{"name":"Remove implicit ref callback returns","href":"react/19/no-implicit-ref-callback-return"},{"name":"Replace deprecated React types","href":"react/19/deprecated-react-types"},{"name":"Replace `react-test-renderer/shallow` import","href":"react/19/replace-react-shallow-renderer"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.react.migrate.upgrade-to-react-19","displayName":"Upgrade to React 19","npmPackage":"@openrewrite/recipes-react"}}>

## Usage

</UsageList>

