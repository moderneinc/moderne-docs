---
title: "Rename `Calendar` to `DatePicker`"
sidebar_label: "Rename `Calendar` to `DatePicker`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename `Calendar` to `DatePicker`

**org.openrewrite.primeng.RenameCalendarToDatePicker**

_Renames `Calendar` and `CalendarModule` imports from `primeng/calendar` to `DatePicker` and `DatePickerModule` from `primeng/datepicker`, and updates all identifier usages. The old names are deprecated in PrimeNG 18._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade PrimeNG components to 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/upgradecomponentsto18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.primeng.RenameCalendarToDatePicker"
  displayName="Rename `Calendar` to `DatePicker`"
  npmPackage="@openrewrite/recipes-angular"
/>
