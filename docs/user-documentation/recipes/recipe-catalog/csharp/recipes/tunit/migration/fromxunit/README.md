---
description: Fromxunit OpenRewrite recipes.
---

# Fromxunit

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate from xUnit to TUnit](./migratefromxunit.md)
* [Migrate xUnit NuGet dependencies to TUnit](./migratexunitdependencies.md)
* [Migrate xUnit attributes to TUnit](./migratefromxunitattributes.md)

## Recipes

* [Add NuGet package reference](./addnugetpackagereference.md)
* [Change .NET target framework](./changedotnettargetframework.md)
* [Change xUnit using directives to TUnit](./changexunitusings.md)
* [Extract `Skip` into `[Skip]` attribute](./factskiptoskipattribute.md)
* [Extract `Timeout` into `[Timeout]` attribute](./facttimeouttotimeoutattribute.md)
* [Find `IAsyncLifetime` needing TUnit migration](./asynclifetimetobeforeaftertest.md)
* [Find `IClassFixture&lt;T&gt;` needing TUnit migration](./classfixturetoclassdatasource.md)
* [Find `ITestOutputHelper` needing TUnit migration](./testoutputhelpertotestcontext.md)
* [Find test constructors needing `[Before(Test)]`](./constructortobeforetest.md)
* [Migrate xUnit assertions to TUnit](./migratexunitassertions.md)
* [Remove NuGet package reference](./removenugetpackagereference.md)
* [Replace `IDisposable` with `[After(Test)]`](./disposabletoaftertest.md)
* [Replace `[Collection]` with `[NotInParallel]`](./collectiontonotinparallel.md)
* [Replace `[Fact]` with `[Test]`](./facttotest.md)
* [Replace `[InlineData]` with `[Arguments]`](./inlinedatatoarguments.md)
* [Replace `[MemberData]` with `[MethodDataSource]`](./memberdatatomethoddatasource.md)
* [Replace `[Theory]` with `[Test]`](./theorytotest.md)
* [Replace `[Trait(&quot;Category&quot;, ...)]` with `[Category]`](./traitcategorytocategory.md)
* [Replace `[Trait]` with `[Property]`](./traittoproperty.md)


