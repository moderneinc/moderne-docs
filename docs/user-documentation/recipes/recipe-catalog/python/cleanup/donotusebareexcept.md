---
title: "Narrow bare `except:` to `except Exception:`"
sidebar_label: "Narrow bare `except:` to `except Exception:`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Narrow bare `except:` to `except Exception:`"}
  description={"An unqualified `except:` intercepts every exception, including `SystemExit` and `KeyboardInterrupt`. Specifying `Exception` restricts the handler to ordinary runtime errors."}
  fqName={"org.openrewrite.python.cleanup.DoNotUseBareExcept"}
  languages={["Python"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Narrow bare `except:` to `except Exception:`"}
  description={"An unqualified `except:` intercepts every exception, including `SystemExit` and `KeyboardInterrupt`. Specifying `Exception` restricts the handler to ordinary runtime errors."}
  type={"Single recipe"}
  languages={["Python"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.python.cleanup.DoNotUseBareExcept"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis-python"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.python.cleanup.DoNotUseBareExcept"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/python/cleanup/donotusebareexcept.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"org.openrewrite.python.cleanup.DoNotUseBareExcept","displayName":"Narrow bare `except:` to `except Exception:`","pipPackage":"openrewrite-static-analysis"}}>

## Usage

</UsageList>

