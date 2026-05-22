---
description: Idiom OpenRewrite recipes.
---

# Idiom

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Apply Kotlin null-safety and scope-function idioms](./nullsafetyandscopefunctions$ktrecipe.md)
* [Find cast and nullable-shape idioms](./findcastandnullableshapes$ktrecipe.md)
* [Find collection null-safety idioms](./findcollectionnullsafety$ktrecipe.md)
* [Find `let \{ \}` ergonomics](./findletidioms$ktrecipe.md)
* [Find manual null-check idioms](./findnullcheckidioms$ktrecipe.md)
* [Find null-assertion polish opportunities](./findnullassertionpolish$ktrecipe.md)
* [Find scope-function correctness swaps](./findscopefunctionswaps$ktrecipe.md)

## Recipes

* [Find `!!` non-null assertions](./findnotnullassertion$ktrecipe.md)
* [Find `!!` passed as a function argument](./findnotnullassertionasargument$ktrecipe.md)
* [Find `?.apply \{ \}` whose result is discarded](./findapplyresultunused$ktrecipe.md)
* [Find `?.let \{ it \}` no-ops](./findletitidentity$ktrecipe.md)
* [Find `?.let \{ it.foo() \}` that could use `?.foo()`](./findletitcall$ktrecipe.md)
* [Find `?.let \{ \}` calls at statement position](./findletatstatementposition$ktrecipe.md)
* [Find `also \{ \}` blocks that mutate the receiver](./findalsowithmutation$ktrecipe.md)
* [Find `apply \{ \}` blocks that perform no mutation](./findapplywithoutmutation$ktrecipe.md)
* [Find `checkNotNull(x)` without an explanatory message](./findchecknotnullwithoutmessage$ktrecipe.md)
* [Find `filter \{ it != null \}.map \{ it!! \}` chains](./findfiltermaptomapnotnull$ktrecipe.md)
* [Find `firstOrNull \{ \} ?: error(...)` patterns](./findfirstornullelviserror$ktrecipe.md)
* [Find `if (cond) value else null` patterns](./findifelsenulldefault$ktrecipe.md)
* [Find `if (x != null) x.foo()` that could use `?.`](./findifnotnullthencall$ktrecipe.md)
* [Find `if (x != null) y = x.foo()` patterns](./findifnotnullassign$ktrecipe.md)
* [Find `if (x == null) return ...` early-exit patterns](./findifnullreturn$ktrecipe.md)
* [Find `if (x == null) throw ...` patterns](./findifnullthrow$ktrecipe.md)
* [Find `listOf(a, b, c).filterNotNull()` patterns](./findlistoffilternotnull$ktrecipe.md)
* [Find long `?.` safe-call chains](./findsafecallchain$ktrecipe.md)
* [Find `map \{ ... \}.filterNotNull()` chains](./findmapthenfilternotnull$ktrecipe.md)
* [Find nested `let \{ \}` chains](./findnestedlet$ktrecipe.md)
* [Find `obj.let \{ fn(it) \}` where `obj` is non-null](./findletwithfnofit$ktrecipe.md)
* [Find redundant `this.` inside `apply \{ \}` blocks](./findapplythisqualifier$ktrecipe.md)
* [Find `requireNotNull(x)` without an explanatory message](./findrequirenotnullwithoutmessage$ktrecipe.md)
* [Find `return null` in functions with nullable returns](./findreturnnullexplicit$ktrecipe.md)
* [Find `setOf(a, b, c).filterNotNull()` patterns](./findsetoffilternotnull$ktrecipe.md)
* [Find `takeUnless \{ !p \}` (double-negative) patterns](./findtakeunlessnegated$ktrecipe.md)
* [Find unsafe `as` casts](./findunsafecast$ktrecipe.md)
* [Find `with(x) \{ ... \}` used as an expression](./findwithasreceiver$ktrecipe.md)
* [Find `x ?: throw SomeException()` without a message](./findelvisthrowwithoutmessage$ktrecipe.md)
* [Find `x.run \{ ... \}` that doesn't use the receiver](./findrunwithoutreceiveruse$ktrecipe.md)
* [Find `x.takeIf \{ p \}?.let \{ ... \}` patterns](./findtakeifchainedlet$ktrecipe.md)
* [Find `x?.firstOrNull()` calls](./findfirstornullonnullablereceiver$ktrecipe.md)
* [Find `x?.let \{ \} ?: y` patterns](./findletelvis$ktrecipe.md)
* [Find `x?.something.orEmpty()` patterns](./findoremptyaftersafecall$ktrecipe.md)


