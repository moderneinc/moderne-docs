---
title: "Find `ServerTransferStateModule` usage"
sidebar_label: "Find `ServerTransferStateModule` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `ServerTransferStateModule` usage

**org.openrewrite.angular.search.find-server-transfer-state-module-usage**

_Finds usages of the removed `ServerTransferStateModule` from `@angular/platform-server`. In Angular 18, `TransferState` works without providing this module._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-server-transfer-state-module-usage"
  displayName="Find `ServerTransferStateModule` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
