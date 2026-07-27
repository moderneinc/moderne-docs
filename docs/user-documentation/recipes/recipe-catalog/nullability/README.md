---
description: Nullability OpenRewrite recipes.
---

# Nullability

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Compose JSpecify best practices (intra-body nullability inference)](./composejspecifybestpractices.md)
* [Make a codebase null-safe](./nullsafety.md)

## Recipes

* [Add `@MonotonicNonNull` to a lazily-initialized field](./addmonotonicnonnulltolazilyinitializedfield.md)
* [Add `@MonotonicNonNull` to an uninitialized field](./addmonotonicnonnulltouninitializedfield.md)
* [Add `@NullMarked` to every package](./addnullmarkedtoallpackages.md)
* [Add `@NullMarked` to `package-info.java` for an allowlist of packages](./addnullmarkedtopackageinfo.md)
* [Add `@Nullable` to Java returns from Kotlin call sites](./addnullablefromkotlincallsites.md)
* [Add `@Nullable` to a field assigned a nullable value](./addnullabletonullassignedfield.md)
* [Add `@Nullable` to a functional-interface return type argument fed a null-returning lambda](./addnullabletofunctionalreturnargument.md)
* [Add `@Nullable` to a method that can return null](./addnullabletonullreturningmethod.md)
* [Add `@Nullable` to a mismatched generic type argument](./addnullabletomismatchedtypeargument.md)
* [Add `@Nullable` to array element types that can hold null](./addnullabletoarrayelementtype.md)
* [Add `@Nullable` to collection and map type arguments that hold null elements](./addnullabletotypeargument.md)
* [Add `@Nullable` to fields that can hold null](./addnullabletofield.md)
* [Add `@Nullable` to generated Thrift getters of `optional` fields](./annotatethriftgetternullability.md)
* [Add `@Nullable` to method parameters that can receive null](./addnullabletoparametercrossfile.md)
* [Add `@Nullable` to methods that can return null](./addnullabletoreturntype.md)
* [Add a `@Contract` nullness contract to a validation helper](./addnullnesscontracttovalidationhelper.md)
* [Add a `@Nullable` upper bound to a pass-through type parameter fed a null-returning lambda](./addnullableboundtopassthroughtypeparameter.md)
* [Align override nullability with the supertype](./alignoverridenullabilitywithsupertype.md)
* [Extract a repeated `@Nullable` invocation into a local variable](./extractrepeatednullableinvocationtolocal.md)
* [Hoist a guarded `@Nullable` field read into a local variable](./hoistnullablefieldreadintolocal.md)
* [Make a nullable `Boolean` condition null-safe with `Boolean.TRUE.equals(...)`](./safenullablebooleancondition.md)
* [Migrate `@NonNullApi`/`ParametersAreNonnullByDefault` to JSpecify `@NullMarked`](./migratenonnullapitonullmarked.md)
* [Move a leading `@Nullable` to the type-use position](./movenullabletotypeuseposition.md)
* [Propagate `@Nullable` across override relationships](./propagatenullableacrossoverrides.md)
* [Relax `Optional.of` to `Optional.ofNullable` on nullable values](./relaxoptionaloftoofnullable.md)
* [Relocate a misplaced leading `@Nullable` on a primitive array to the array reference](./relocatenullabletoarrayreference.md)
* [Remove a provably-dead `if (x == null)` guard](./removeprovablydeadnullguard.md)
* [Remove a redundant `@NonNull` annotation under `@NullMarked`](./removeredundantnonnullannotation.md)
* [Remove a redundant declaration-position `@Nullable` on a method return](./removeredundantnullableonmethodreturn.md)
* [Replace `@Nullable` with `@MonotonicNonNull` on a lazily-initialized field](./replacenullablewithmonotonicnonnullonlazyfield.md)
* [Replace nullable `x.toString()` with `String.valueOf(x)`](./replacenullabletostringwithstringvalueof.md)
* [Return an empty collection instead of `null`](./returnemptycollectioninsteadofnull.md)
* [Route a guarded raw accessor through its present `Optional`](./collapseoptionalpresentguardtoget.md)
* [Wrap a nullable for-each iterable in `requireNonNull`](./wrapnullableforeachiterableinrequirenonnull.md)
* [Wrap nullable arguments passed to non-null parameters in `requireNonNull`](./wrapnullableargumentinrequirenonnull.md)
* [Wrap nullable dereferenced values in `requireNonNull`](./wrapnullabledereferenceinrequirenonnull.md)
* [Wrap nullable `switch` selectors in `requireNonNull`](./wrapnullableswitchselectorinrequirenonnull.md)
* [Wrap nullable thrown expressions in `requireNonNull`](./wrapnullablethrownexpressioninrequirenonnull.md)
* [Wrap nullable values that are auto-unboxed in `requireNonNull`](./wrapnullableunboxinginrequirenonnull.md)


