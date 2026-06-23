---
description: Infer OpenRewrite recipes.
---

# Infer

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Compose JSpecify best practices (intra-body nullability inference)](./composejspecifybestpractices.md)
* [Infer and add `@Nullable` annotations](./infernullability.md)

## Recipes

* [Add `@Nullable` to a functional-interface return type argument fed a null-returning lambda](./addnullabletofunctionalreturnargument.md)
* [Add `@Nullable` to array element types that can hold null](./addnullabletoarrayelementtype.md)
* [Add `@Nullable` to collection and map type arguments that hold null elements](./addnullabletotypeargument.md)
* [Add `@Nullable` to fields that can hold null](./addnullabletofield.md)
* [Add `@Nullable` to method parameters that can receive null](./addnullabletoparametercrossfile.md)
* [Add `@Nullable` to methods that can return null](./addnullabletoreturntype.md)
* [Add a `@Nullable` upper bound to a pass-through type parameter fed a null-returning lambda](./addnullableboundtopassthroughtypeparameter.md)
* [Infer Java `@Nullable` return types from Kotlin call sites](./inferjavanullabilityfromkotlincallsites.md)
* [Propagate `@Nullable` across override relationships](./propagatenullableacrossoverrides.md)
* [Upgrade a lazily-initialized `@Nullable` field to `@MonotonicNonNull`](./upgradelazilyinitializedfieldtomonotonicnonnull.md)


