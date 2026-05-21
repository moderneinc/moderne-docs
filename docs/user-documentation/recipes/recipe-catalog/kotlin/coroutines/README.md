---
description: Coroutines OpenRewrite recipes.
---

# Coroutines

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Find Flow operator antipatterns](./findflowantipatterns$ktrecipe.md)
* [Find blocking calls inside coroutine contexts](./findblockingonsuspend$ktrecipe.md)
* [Find coroutine sequencing smells](./findcoroutinesequencingsmells$ktrecipe.md)
* [Find structured-concurrency leaks](./findstructuredconcurrencyleaks$ktrecipe.md)
* [Modernize Kotlin coroutines code](./coroutines$ktrecipe.md)

## Recipes

* [Find `Flow.collect` calls inside a `@Composable`](./findflowcollectinsidecompose$ktrecipe.md)
* [Find `Flow.filter \{ \} .filter \{ \}` chains](./findflowfilterfilterchain$ktrecipe.md)
* [Find `Flow.flowOn` placed after a terminal operator](./findflowonafterterminal$ktrecipe.md)
* [Find `Flow.map \{ \} .map \{ \}` chains](./findflowmapmapchain$ktrecipe.md)
* [Find `GlobalScope.actor` calls](./findglobalscopeactor$ktrecipe.md)
* [Find `GlobalScope.async` calls](./findglobalscopeasync$ktrecipe.md)
* [Find `GlobalScope.launch` calls](./findglobalscopelaunch$ktrecipe.md)
* [Find `GlobalScope.produce` calls](./findglobalscopeproduce$ktrecipe.md)
* [Find `MutableStateFlow&lt;T?&gt;(null)` declarations](./findmutablestateflownullable$ktrecipe.md)
* [Find `Object.notify` / `notifyAll` calls inside `suspend` functions](./findobjectnotifyinsuspend$ktrecipe.md)
* [Find `Object.wait` calls inside `suspend` functions](./findobjectwaitinsuspend$ktrecipe.md)
* [Find `Thread.sleep` calls inside `suspend` functions](./findthreadsleepinsuspend$ktrecipe.md)
* [Find `async \{ ... \}.await()` patterns](./findasyncimmediatelyawait$ktrecipe.md)
* [Find `callbackFlow \{ \}` blocks without an `awaitClose \{ \}` terminator](./findcallbackflowwithoutawaitclose$ktrecipe.md)
* [Find `coroutineScope \{ launch \{ ... \} \}` with a single child](./findcoroutinescopebuilderwithsinglelaunch$ktrecipe.md)
* [Find `debounce(...).distinctUntilChanged()` patterns](./finddebouncebeforedistinctuntilchanged$ktrecipe.md)
* [Find `flowOf(...)` calls — verify size](./findflowofwithvararg$ktrecipe.md)
* [Find `forEach \{ it.join() \}` over `List&lt;Job&gt;`](./findforeachjoin$ktrecipe.md)
* [Find `map \{ it.await() \}` over `List&lt;Deferred&lt;T&gt;&gt;`](./findmapawait$ktrecipe.md)
* [Find nested `withContext` calls](./findwithcontextinsidesamedispatcher$ktrecipe.md)
* [Find raw `CoroutineScope(...)` constructions](./findbarecoroutinescopector$ktrecipe.md)
* [Find raw `Job()` allocations](./findjobascontext$ktrecipe.md)
* [Find `runBlocking` calls inside a `launch`/`async` lambda](./findrunblockinginlaunch$ktrecipe.md)
* [Find `runBlocking` calls inside `suspend` functions](./findrunblockinginsuspend$ktrecipe.md)
* [Find `shareIn` calls without a timeout-parameterized start](./findshareinwithouttimeout$ktrecipe.md)
* [Find `stateIn` with `SharingStarted.Eagerly` or unparameterized start](./findstateinwithouttimeout$ktrecipe.md)
* [Find `suspendCoroutine` calls](./findsuspendcoroutinewithoutcancellation$ktrecipe.md)


