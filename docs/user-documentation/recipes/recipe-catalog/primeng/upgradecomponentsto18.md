---
title: "Upgrade PrimeNG components to 18"
sidebar_label: "Upgrade PrimeNG components to 18"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade PrimeNG components to 18"}
  description={"Handles component renames, deprecations, and removals for PrimeNG 18. Renames Calendar to DatePicker, Dropdown to Select, InputSwitch to ToggleSwitch, OverlayPanel to Popover, and Sidebar to Drawer (TS imports + identifier usages + HTML selectors). Migrates the `Messages` template usage to the `<p-message>` + `@for` loop. Marks removed modules (Chips, TriStateCheckbox, Messages, DataViewLayoutOptions, pAnimate) with TODO stubs, marks deprecated components (TabMenu, Steps, InlineMessage, TabView, pDefer) with TODO comments on their imports, and marks deprecated CSS classes (`.p-link`, `.p-highlight`, `.p-fluid`) and `<p-drawer>`/`<p-sidebar>` `size` usages with HTML TODO comments. All marked sites are written to the `ManualMigrationSteps` data table."}
  fqName={"org.openrewrite.primeng.UpgradeComponentsTo18"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Upgrade PrimeNG components to 18"}
  description={"Handles component renames, deprecations, and removals for PrimeNG 18. Renames Calendar to DatePicker, Dropdown to Select, InputSwitch to ToggleSwitch, OverlayPanel to Popover, and Sidebar to Drawer (TS imports + identifier usages + HTML selectors). Migrates the `Messages` template usage to the `<p-message>` + `@for` loop. Marks removed modules (Chips, TriStateCheckbox, Messages, DataViewLayoutOptions, pAnimate) with TODO stubs, marks deprecated components (TabMenu, Steps, InlineMessage, TabView, pDefer) with TODO comments on their imports, and marks deprecated CSS classes (`.p-link`, `.p-highlight`, `.p-fluid`) and `<p-drawer>`/`<p-sidebar>` `size` usages with HTML TODO comments. All marked sites are written to the `ManualMigrationSteps` data table."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.primeng.UpgradeComponentsTo18"}
  artifact={"io.moderne.recipe:rewrite-angular"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.primeng.UpgradeComponentsTo18"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/primeng/upgradecomponentsto18.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Rename `Calendar` to `DatePicker`","href":"primeng/renamecalendartodatepicker"},{"name":"Rename `Dropdown` to `Select`","href":"primeng/renamedropdowntoselect"},{"name":"Rename `InputSwitch` to `ToggleSwitch`","href":"primeng/renameinputswitchtotoggleswitch"},{"name":"Rename `OverlayPanel` to `Popover`","href":"primeng/renameoverlaypaneltopopover"},{"name":"Rename `Sidebar` to `Drawer`","href":"primeng/renamesidebartodrawer"},{"name":"Rename `Message` interface to `ToastMessageOptions`","href":"primeng/renamemessageinterface"},{"name":"Rename PrimeNG selectors in HTML templates to their v18 equivalents","href":"primeng/renametemplateselectors"},{"name":"Migrate `<p-messages>` to `<p-message>` with `@for` loop","href":"primeng/migratemessagestomessageloop"},{"name":"Migrate `.p-fluid` to `<p-fluid>` wrapper","href":"primeng/migratepfluidtowrapper"},{"name":"Mark imports of removed PrimeNG modules with TODO stubs","href":"primeng/markremovedprimengmodules"},{"name":"Mark deprecated PrimeNG components with TODO comments","href":"primeng/markdeprecatedprimengcomponents"},{"name":"Mark deprecated PrimeNG CSS classes with TODO comments","href":"primeng/markdeprecatedprimengcssclasses"},{"name":"Mark `<p-drawer>` / `<p-sidebar>` `size` usages with TODO comments","href":"primeng/markdrawersize"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.primeng.UpgradeComponentsTo18","displayName":"Upgrade PrimeNG components to 18","npmPackage":"@openrewrite/recipes-angular"}}>

## Usage

</UsageList>

