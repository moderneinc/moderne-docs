---
description: Interop OpenRewrite recipes.
---

# Interop

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Find Java-style call shapes inside Kotlin source](./findjavaidiomsinkotlin$ktrecipe.md)
* [Find Java↔Kotlin interop friction points](./findinteropfriction$ktrecipe.md)
* [Find Kotlin declarations missing `@Jvm*` interop annotations](./findmissingjvmannotations$ktrecipe.md)
* [Find `java.util.Collections` / `Arrays` factory usage inside Kotlin](./findjavautilcollectionsfriction$ktrecipe.md)
* [Find `java.util.Optional` friction inside Kotlin](./findoptionalfriction$ktrecipe.md)
* [Find `java.util.stream.Stream` friction inside Kotlin](./findstreamfriction$ktrecipe.md)
* [Find non-injected clock / I/O calls (testability)](./findclockandtestabilityfriction$ktrecipe.md)
* [Find reactive-framework return types in Kotlin](./findreactiveinteropfriction$ktrecipe.md)
* [Improve Java↔Kotlin interop ergonomics](./interop$ktrecipe.md)

## Recipes

* [Apply Java↔Kotlin interop rewrites](./improvekotlininterop$ktrecipe.md)
* [Find `@RequiresOptIn` annotation declarations](./findrequiresoptinonexperimentalapi$ktrecipe.md)
* [Find `Arrays.asList(...)` calls](./findjavautilarraysaslist$ktrecipe.md)
* [Find `Collections.emptyList/Set/Map()` calls](./findjavautilcollectionsemptylist$ktrecipe.md)
* [Find `Collections.singletonList/Set/Map(...)` calls](./findjavautilcollectionssingleton$ktrecipe.md)
* [Find `Collections.unmodifiableList/Set/Map(...)` wrappers](./findjavautilcollectionsunmodifiable$ktrecipe.md)
* [Find `CompletableFuture` usage in Kotlin](./findcompletablefutureusage$ktrecipe.md)
* [Find Java-style `getX()` calls in Kotlin source](./findjavagettercallstyleinkotlin$ktrecipe.md)
* [Find Java-style `iterable.forEach(Consumer)` calls](./finditerableforeach$ktrecipe.md)
* [Find `LocalDateTime.now()` / `Instant.now()` calls](./findlocaldatetimenow$ktrecipe.md)
* [Find `Optional.get()` / `orElseThrow()` calls](./findoptionalget$ktrecipe.md)
* [Find `Optional.isPresent` / `isEmpty` checks](./findoptionalispresent$ktrecipe.md)
* [Find `Optional.ofNullable(...)` calls](./findoptionalofnullable$ktrecipe.md)
* [Find `Optional.orElse(...)` calls](./findoptionalorelse$ktrecipe.md)
* [Find Reactor `Mono`/`Flux` returns in Kotlin](./findreactorpublisherinkotlin$ktrecipe.md)
* [Find `Stream.of(...)` calls](./findstreamofcall$ktrecipe.md)
* [Find `System.currentTimeMillis()` calls](./findsystemcurrenttimemillis$ktrecipe.md)
* [Find `bufferedReader().lines()` calls](./findbufferedreaderlines$ktrecipe.md)
* [Find classes with manual `equals`/`hashCode` overrides — `data class` candidate](./findmanualequalshashcode$ktrecipe.md)
* [Find `companion object` functions missing `@JvmStatic`](./findmissingjvmstaticincompanion$ktrecipe.md)
* [Find `const val` / companion `val` declarations missing `@JvmField`](./findmissingjvmfieldonconst$ktrecipe.md)
* [Find function parameters typed `Optional&lt;T&gt;`](./findoptionalparam$ktrecipe.md)
* [Find functions returning `CompletableFuture&lt;T&gt;`](./findcompletablefuturereturn$ktrecipe.md)
* [Find functions returning `Optional&lt;T&gt;`](./findoptionalreturn$ktrecipe.md)
* [Find functions returning `java.util.stream.Stream&lt;T&gt;`](./findstreamreturn$ktrecipe.md)
* [Find functions with default parameters missing `@JvmOverloads`](./findmissingjvmoverloadsondefaults$ktrecipe.md)
* [Find functions with `throw` of a checked exception missing `@Throws`](./findmissingthrowsannotation$ktrecipe.md)
* [Find inner `class Builder` classes — default-args candidate](./findbuilderclass$ktrecipe.md)
* [Find interface declarations with default-method bodies](./findkotlindefaultmethodinterface$ktrecipe.md)
* [Find `io.reactivex.Observable`/`Flowable`/`Single`/`Maybe` usage in Kotlin](./findrxobservableinkotlin$ktrecipe.md)
* [Find `java.util.Optional` usage in Kotlin](./findoptionalusage$ktrecipe.md)
* [Find manual `getX()` / `setX(v)` pairs in Kotlin classes](./findmanualgettersetter$ktrecipe.md)
* [Find `object Constants \{ const val A = ... \}` static-constants holders](./findstaticholderobject$ktrecipe.md)
* [Find `object Utils \{ fun foo() = ... \}` static-utility holders](./findstaticutilobject$ktrecipe.md)
* [Find `requireNotNull(javaCall())` patterns](./findrequirenotnullonjavacall$ktrecipe.md)
* [Find `stream.collect(Collectors.toList())` calls](./findstreamcollectorstolist$ktrecipe.md)
* [Find `stream.filter(...).map(...)` chains](./findstreamfiltermap$ktrecipe.md)
* [Find top-level functions missing `@JvmName`](./findmissingjvmnameonextensionfunction$ktrecipe.md)
* [Find `val isX` Boolean properties missing `@get:JvmName`](./findmissingjvmnameonisgetter$ktrecipe.md)
* [Use `x` instead of `Optional.of(x).get()`](./usevalueforoptionalofget$ktrecipe.md)


