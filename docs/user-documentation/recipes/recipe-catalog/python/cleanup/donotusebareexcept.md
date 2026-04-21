---
sidebar_label: "Narrow bare `except:` to `except Exception:`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Narrow bare `except:` to `except Exception:`

**org.openrewrite.python.cleanup.DoNotUseBareExcept**

_An unqualified `except:` intercepts every exception, including `SystemExit` and `KeyboardInterrupt`. Specifying `Exception` restricts the handler to ordinary runtime errors._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.DoNotUseBareExcept"
  displayName="Narrow bare `except:` to `except Exception:`"
  pipPackage="openrewrite-static-analysis"
/>
