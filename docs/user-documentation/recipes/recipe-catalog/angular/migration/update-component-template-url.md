---
sidebar_label: "Update component `templateUrl`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Update component `templateUrl`

**org.openrewrite.angular.migration.update-component-template-url**

_Updates the `templateUrl` property value in Angular `@Component` decorators. Useful for refactoring template file paths or standardizing path conventions._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `null` | oldTemplateUrl | The template URL to replace. Can be an exact path (e.g., `./old.html`) or a pattern. | `./old-template.html` |
| `null` | newTemplateUrl | The new template URL to use. | `./new-template.html` |
| `null` | useRegex | *Optional*. If `true`, treats `oldTemplateUrl` as a regex pattern and supports capture groups in `newTemplateUrl`. Default: `false` | `true` |


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.update-component-template-url"
  displayName="Update component `templateUrl`"
  npmPackage="@openrewrite/recipes-angular"
/>
