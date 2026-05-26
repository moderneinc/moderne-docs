---
description: Functional OpenRewrite recipes.
---

# Functional

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Find `Result&lt;T&gt;` API ergonomics opportunities](./findresultergonomics$ktrecipe.md)
* [Find nullability idiom opportunities](./findnullabilityergonomics$ktrecipe.md)
* [Find raw `try`/`catch` smells](./findtrycatchsmells$ktrecipe.md)
* [Find `runCatching \{ \}` smells](./findruncatchingsmells$ktrecipe.md)
* [Find throw/catch shape smells](./findthrowcatchsmells$ktrecipe.md)
* [Modernize Kotlin functional / `Result` ergonomics](./functional$ktrecipe.md)

## Recipes

* [Find `.getOrThrow()` calls on a `Result&lt;T&gt;`](./findresultgetorthrow$ktrecipe.md)
* [Find `Result.getOrElse \{ \}` whose lambda ignores the failure parameter](./findresultgetorelseignoringfailure$ktrecipe.md)
* [Find `Result.map \{ \}.getOrThrow()` chains](./findresultmapwithouterrorhandling$ktrecipe.md)
* [Find broad `catch (e: Exception)` / `catch (e: Throwable)` clauses](./findcatchallexception$ktrecipe.md)
* [Find `catch (e: Exception)` clauses whose body never references `e`](./findcatchbindingunusedexception$ktrecipe.md)
* [Find `catch (e: Exception) \{ throw OtherException(...) \}` without `e` as cause](./findcatchandrethrownewexceptionwithoutcause$ktrecipe.md)
* [Find `catch (e: Exception) \{ throw e \}` patterns](./findcatchandrethrowsameexception$ktrecipe.md)
* [Find `e.printStackTrace()` calls inside a catch block](./findprintstacktraceincatch$ktrecipe.md)
* [Find empty catch blocks](./findtrycatchswallowingexception$ktrecipe.md)
* [Find `if (predicate(x)) x else null` patterns](./findusetakeifforfilter$ktrecipe.md)
* [Find `if (result.isSuccess) … else …` patterns](./findresultfoldimperative$ktrecipe.md)
* [Find `if (x != null) f(x) else null` patterns](./finduseletfornullablemap$ktrecipe.md)
* [Find `if (x != null) x else default` patterns](./finduseelvisfornullabledefault$ktrecipe.md)
* [Find `if (x == null) throw IllegalArgumentException(...)` patterns](./finduserequireforprecondition$ktrecipe.md)
* [Find `if (x == null) throw IllegalStateException(...)` patterns](./findusecheckforstate$ktrecipe.md)
* [Find non-empty catch blocks that neither log nor rethrow](./findcatchwithoutlogging$ktrecipe.md)
* [Find `runCatching \{ \}` blocks that may swallow `CancellationException`](./findruncatchingswallowingcancellation$ktrecipe.md)
* [Find `runCatching \{ \}` calls whose result is discarded](./findruncatchingwithouthandling$ktrecipe.md)
* [Find `runCatching \{ \}.getOrNull()` chains](./findruncatchinggetornulldiscardingerror$ktrecipe.md)
* [Find `runCatching \{ \}.onFailure \{ log… \}` chains with no further handling](./findruncatchingforlogonly$ktrecipe.md)
* [Find `runCatching \{ \}.onSuccess \{ … \}` chains with no failure handler](./findruncatchingonsuccessonly$ktrecipe.md)
* [Find `throw RuntimeException(e)` inside a catch block](./findwrappingexceptionincatch$ktrecipe.md)
* [Find `try \{ x \} catch (e: Exception) \{ default \}` patterns](./findtrycatchreturningdefault$ktrecipe.md)
* [Find `try \{ x \} catch (e: Exception) \{ null \}` patterns](./findtrycatchreturningnull$ktrecipe.md)
* [Find `try \{ \} catch \{ \}` nested inside another `try \{ \} catch \{ \}`](./findnestedtrycatch$ktrecipe.md)


