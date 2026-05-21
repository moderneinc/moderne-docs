---
description: Testing OpenRewrite recipes.
---

# Testing

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Find JUnit 5 setup smells (informational)](./findtestframeworksetupsmells$ktrecipe.md)
* [Find Kotest migration candidates](./findkotestcandidates$ktrecipe.md)
* [Find assertion-library smells](./findassertionlibrarysmells$ktrecipe.md)
* [Find coroutine-test patterns](./findcoroutinetestsmells$ktrecipe.md)
* [Find mockito-kotlin / Mockito patterns](./findmockitosmells$ktrecipe.md)
* [Find test fixture / setup smells](./findtestfixturesmells$ktrecipe.md)
* [Modernize Kotlin test code](./testing$ktrecipe.md)

## Recipes

* [Find `@BeforeEach` methods that reassign `val` properties](./findbeforeeachreinitializingfinal$ktrecipe.md)
* [Find `@Disabled` annotations](./finddisabledtest$ktrecipe.md)
* [Find `@RepeatedTest(N)` annotations](./findrepeatedtestannotation$ktrecipe.md)
* [Find `@Tag(...)` annotations](./findtagannotationusage$ktrecipe.md)
* [Find `@Test` methods with empty bodies](./findemptytestbody$ktrecipe.md)
* [Find `@Test` methods with many assertions](./findtoomanyassertions$ktrecipe.md)
* [Find `@Test` methods with no recognized assertion calls](./findtestnoassertions$ktrecipe.md)
* [Find `@ValueSource(strings = [...])` annotations](./findparameterizedtestwithvaluesourcestrings$ktrecipe.md)
* [Find `ArgumentCaptor.forClass(X::class.java)` allocations](./findmockitoargumentcaptor$ktrecipe.md)
* [Find AssertJ `.extracting(...).contains(...)` chains](./findassertjchainusingextractingthencontains$ktrecipe.md)
* [Find JUnit 4 coroutine-test `@Rule` fields](./findcoroutinetestrule$ktrecipe.md)
* [Find `MatcherAssert.assertThat(...)` (Hamcrest) calls](./findhamcrestassertthatusage$ktrecipe.md)
* [Find Mockito `@InjectMocks` fields](./findmockitoinjectmocks$ktrecipe.md)
* [Find Mockito `@Mock` fields](./findmockitomockfield$ktrecipe.md)
* [Find Mockito argument-matcher `any()` / `eq()` / `isA()` calls](./findmockitoargumentmatchersany$ktrecipe.md)
* [Find Mockito `verify(mock).method(...)` calls](./findmockitoverifycall$ktrecipe.md)
* [Find Mockito `whenever(...).thenReturn(...)` chains](./findmockitowhenthenreturn$ktrecipe.md)
* [Find `Mockito.mock(...)` / `mock&lt;X&gt;()` calls](./findmockitomockcall$ktrecipe.md)
* [Find `Mockito.spy(...)` / `spy(...)` calls](./findmockitospycall$ktrecipe.md)
* [Find `TestCoroutineDispatcher` allocations](./findtestcoroutinedispatcherusage$ktrecipe.md)
* [Find `assertEquals(...)` calls — Kotest migration candidate](./findassertequalscandidateforkotest$ktrecipe.md)
* [Find `assertFalse(...)` calls — Kotest migration candidate](./findassertfalsecandidateforkotest$ktrecipe.md)
* [Find `assertNotNull(...)` calls — Kotest migration candidate](./findassertnotnullcandidateforkotest$ktrecipe.md)
* [Find `assertNull(...)` calls — Kotest migration candidate](./findassertnullcandidateforkotest$ktrecipe.md)
* [Find `assertThrows&lt;X&gt; \{ ... \}` calls — Kotest migration candidate](./findassertthrowscandidateforkotest$ktrecipe.md)
* [Find `assertTrue(...)` calls — Kotest migration candidate](./findasserttruecandidateforkotest$ktrecipe.md)
* [Find `delay(...)` calls inside test methods running on a real dispatcher](./finddelayintest$ktrecipe.md)
* [Find `public` modifier on JUnit 5 test functions](./findjunitfunctionwithpublic$ktrecipe.md)
* [Find `runBlocking \{ ... \}` calls inside test methods](./findrunblockingintest$ktrecipe.md)
* [Find `runBlockingTest \{ ... \}` calls](./findrunblockingtestcall$ktrecipe.md)
* [Find test functions named with snake_case](./findfunctiontestnamedwithunderscores$ktrecipe.md)


