---
description: Recipes in the io.moderne.recipe module.
---

# io.moderne.recipe


## recipes-code-quality

_License: Moderne Proprietary License_

_407 recipes_

* [OpenRewrite.Recipes.CSharp.CodeQuality.CodeQuality](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/codequality-recipe.md)
  * **Code quality**
  * All C# code quality recipes, organized by category.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Formatting.AddNewLineAfterOpeningBrace](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/formatting/addnewlineafteropeningbrace.md)
  * **Add newline after opening brace**
  * Add newline after opening brace so the first statement starts on its own line.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Formatting.AddNewLineBeforeReturn](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/formatting/addnewlinebeforereturn.md)
  * **Add newline before return**
  * Add a blank line before return statements that follow other statements.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Formatting.AddParagraphToDocComment](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/formatting/addparagraphtodoccomment.md)
  * **Add paragraph to documentation comment**
  * Format multi-line documentation comments with paragraph elements.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Formatting.AddParameterToDocComment](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/formatting/addparametertodoccomment.md)
  * **Add parameter name to documentation comment**
  * Add missing param elements to XML documentation comments.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Formatting.AddSummaryElementToDocComment](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/formatting/addsummaryelementtodoccomment.md)
  * **Add summary to documentation comment**
  * Add summary text to documentation comments with empty summary elements.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Formatting.AddSummaryToDocComment](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/formatting/addsummarytodoccomment.md)
  * **Add summary element to documentation comment**
  * Add missing summary element to XML documentation comments.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Formatting.AddTypeParamToDocComment](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/formatting/addtypeparamtodoccomment.md)
  * **Add 'typeparam' element to documentation comment**
  * Add missing 'typeparam' elements to XML documentation comments.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Formatting.FixDocCommentTag](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/formatting/fixdoccommenttag.md)
  * **Fix documentation comment tag**
  * Replace inline &lt;code&gt; elements with &lt;c&gt; elements in XML documentation comments.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Formatting.FormatAccessorList](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/formatting/formataccessorlist.md)
  * **Format accessor list**
  * Format property accessor list for consistent whitespace.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Formatting.FormatDocumentationSummary](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/formatting/formatdocumentationsummary.md)
  * **Format documentation summary**
  * Format XML documentation summary on a single line or multiple lines.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Formatting.FormatSwitchSection](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/formatting/formatswitchsection.md)
  * **Format switch section**
  * Ensure consistent formatting of switch sections.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Formatting.FormattingCodeQuality](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/formatting/formattingcodequality.md)
  * **Formatting code quality**
  * Code formatting recipes for C#.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Formatting.InvalidDocCommentReference](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/formatting/invaliddoccommentreference.md)
  * **Invalid reference in a documentation comment**
  * Find invalid cref or paramref references in XML documentation comments.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Formatting.NormalizeWhitespace](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/formatting/normalizewhitespace.md)
  * **Normalize whitespace**
  * Normalize whitespace for consistent formatting.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Formatting.OrderDocCommentElements](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/formatting/orderdoccommentelements.md)
  * **Order elements in documentation comment**
  * Order param/typeparam elements to match declaration order.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.CombineLinqMethods](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/combinelinqmethods.md)
  * **Combine LINQ methods**
  * Combine `.Where(predicate).First()` and similar patterns into `.First(predicate)`, and consecutive `.Where().Where()` calls into a single `.Where()` with a combined predicate. Eliminating intermediate LINQ calls improves readability.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.FindOptimizeCountUsage](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/findoptimizecountusage.md)
  * **Find Count() comparison that could be optimized**
  * Detect `Count(pred) == n` and `Count() &gt; n` comparisons which could use `Where().Take(n+1).Count()` or `Skip(n).Any()` for better performance.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.FindWhereBeforeOrderBy](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/findwherebeforeorderby.md)
  * **Use Where before OrderBy**
  * Place `.Where()` before `.OrderBy()` to filter elements before sorting. This reduces the number of items that need to be sorted.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.LinqCodeQuality](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/linqcodequality.md)
  * **LINQ code quality**
  * Optimize LINQ method calls for better readability and performance.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqSelectAverage](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqselectaverage.md)
  * **Optimize LINQ Select().Average()**
  * Replace `items.Select(selector).Average()` with `items.Average(selector)`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqSelectMax](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqselectmax.md)
  * **Optimize LINQ Select().Max()**
  * Replace `items.Select(selector).Max()` with `items.Max(selector)`. Passing the selector directly to `Max` avoids an intermediate iterator.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqSelectMin](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqselectmin.md)
  * **Optimize LINQ Select().Min()**
  * Replace `items.Select(selector).Min()` with `items.Min(selector)`. Passing the selector directly to `Min` avoids an intermediate iterator.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqSelectSum](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqselectsum.md)
  * **Optimize LINQ Select().Sum()**
  * Replace `items.Select(selector).Sum()` with `items.Sum(selector)`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereAny](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwhereany.md)
  * **Optimize LINQ Where().Any()**
  * Replace `items.Where(predicate).Any()` with `items.Any(predicate)`. Passing the predicate directly to `Any` avoids an intermediate iterator.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereCount](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwherecount.md)
  * **Optimize LINQ Where().Count()**
  * Replace `items.Where(predicate).Count()` with `items.Count(predicate)`. Passing the predicate directly to `Count` avoids an intermediate iterator.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereCountLong](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwherecountlong.md)
  * **Optimize LINQ Where().LongCount()**
  * Replace `.Where(predicate).LongCount()` with `.LongCount(predicate)`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereFirst](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwherefirst.md)
  * **Optimize LINQ Where().First()**
  * Replace `items.Where(predicate).First()` with `items.First(predicate)`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereFirstOrDefault](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwherefirstordefault.md)
  * **Optimize LINQ Where().FirstOrDefault()**
  * Replace `items.Where(predicate).FirstOrDefault()` with `items.FirstOrDefault(predicate)`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereLast](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwherelast.md)
  * **Optimize LINQ Where().Last()**
  * Replace `items.Where(predicate).Last()` with `items.Last(predicate)`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereLastOrDefault](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwherelastordefault.md)
  * **Optimize LINQ Where().LastOrDefault()**
  * Replace `.Where(predicate).LastOrDefault()` with `.LastOrDefault(predicate)`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereSingle](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwheresingle.md)
  * **Optimize LINQ Where().Single()**
  * Replace `items.Where(predicate).Single()` with `items.Single(predicate)`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereSingleOrDefault](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwheresingleordefault.md)
  * **Optimize LINQ Where().SingleOrDefault()**
  * Replace `items.Where(predicate).SingleOrDefault()` with `items.SingleOrDefault(predicate)`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.RemoveUselessOrderBy](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/removeuselessorderby.md)
  * **Remove useless OrderBy call**
  * Replace `.OrderBy(a).OrderBy(b)` with `.OrderBy(b)`. A second `OrderBy` completely replaces the first sort, making the first call useless.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.UseAnyInsteadOfCount](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/useanyinsteadofcount.md)
  * **Use Any() instead of Count() &gt; 0**
  * Replace `.Count() &gt; 0` with `.Any()`. `Any()` short-circuits after the first match, while `Count()` enumerates all elements.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.UseCastInsteadOfSelect](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/usecastinsteadofselect.md)
  * **Use Cast&lt;T&gt;() instead of Select with cast**
  * Replace `.Select(x =&gt; (T)x)` with `.Cast&lt;T&gt;()`. The `Cast&lt;T&gt;()` method is more concise and clearly expresses the intent.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.UseOrderByDescendingThenByDescending](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/useorderbydescendingthenbydescending.md)
  * **Use OrderByDescending().ThenByDescending()**
  * Replace `.OrderByDescending(a).OrderByDescending(b)` with `.OrderByDescending(a).ThenByDescending(b)`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.UseOrderByThenBy](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/useorderbythenby.md)
  * **Use ThenBy instead of second OrderBy**
  * Replace `items.OrderBy(a).OrderBy(b)` with `items.OrderBy(a).ThenBy(b)`. A second `OrderBy` discards the first sort; `ThenBy` preserves it as a secondary key.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.UseOrderByThenByDescending](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/useorderbythenbydescending.md)
  * **Use OrderBy().ThenByDescending()**
  * Replace `.OrderBy(a).OrderByDescending(b)` with `.OrderBy(a).ThenByDescending(b)`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Linq.UseOrderInsteadOfOrderBy](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/useorderinsteadoforderby.md)
  * **Use Order() instead of OrderBy() with identity**
  * Replace `.OrderBy(x =&gt; x)` with `.Order()`. The `Order()` method (available since .NET 7) is a cleaner way to sort elements in their natural order.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Naming.AsyncMethodNameShouldEndWithAsync](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/naming/asyncmethodnameshouldendwithasync.md)
  * **Async method name should end with Async**
  * Find async methods whose names don't end with 'Async' suffix.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Naming.FindAttributeNameShouldEndWithAttribute](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/naming/findattributenameshouldendwithattribute.md)
  * **Attribute name should end with 'Attribute'**
  * Classes that inherit from `System.Attribute` should have names ending with 'Attribute' by convention.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Naming.FindEventArgsNameConvention](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/naming/findeventargsnameconvention.md)
  * **EventArgs name should end with 'EventArgs'**
  * Classes that inherit from `System.EventArgs` should have names ending with 'EventArgs' by convention.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Naming.FindExceptionNameShouldEndWithException](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/naming/findexceptionnameshouldendwithexception.md)
  * **Exception name should end with 'Exception'**
  * Classes that inherit from `System.Exception` should have names ending with 'Exception' by convention.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Naming.FindFixTodoComment](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/naming/findfixtodocomment.md)
  * **Find TODO/HACK/FIXME comments**
  * Detect TODO, HACK, UNDONE, and FIXME comments that indicate unfinished work.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Naming.NamingCodeQuality](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/naming/namingcodequality.md)
  * **Naming code quality**
  * Naming convention recipes for C# code.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Naming.NonAsyncMethodNameShouldNotEndWithAsync](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/naming/nonasyncmethodnameshouldnotendwithasync.md)
  * **Non-async method should not end with Async**
  * Find non-async methods whose names end with 'Async' suffix.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Naming.ParameterNameMatchesBase](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/naming/parameternamematchesbase.md)
  * **Parameter name should match base definition**
  * Ensure parameter names match the names used in base class or interface.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Naming.RenameParameterAccordingToConvention](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/naming/renameparameteraccordingtoconvention.md)
  * **Rename parameter to camelCase**
  * Detect parameters not following camelCase naming convention.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Naming.RenamePrivateFieldAccordingToConvention](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/naming/renameprivatefieldaccordingtoconvention.md)
  * **Rename private field according to _camelCase convention**
  * Detect private fields not following _camelCase naming convention.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Naming.UseNameofOperator](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/naming/usenameofoperator.md)
  * **Use nameof operator**
  * Use nameof(parameter) instead of string literal for argument exception constructors.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.AvoidBoxingOfValueType](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/avoidboxingofvaluetype.md)
  * **Avoid boxing of value type**
  * Avoid boxing of value type by using generic overloads or ToString().
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.AvoidLockingOnPubliclyAccessible](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/avoidlockingonpubliclyaccessible.md)
  * **Avoid locking on publicly accessible instance**
  * Avoid lock(this), lock(typeof(T)), or lock on string literals which can cause deadlocks.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.AvoidNullReferenceException](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/avoidnullreferenceexception.md)
  * **Avoid NullReferenceException**
  * Flag patterns that may throw NullReferenceException, such as using 'as' cast result without null check.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.BitOperationOnEnumWithoutFlags](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/bitoperationonenumwithoutflags.md)
  * **Bitwise operation on enum without Flags attribute**
  * Flag bitwise operations on enums that lack the Flags attribute.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.ConvertHasFlagToBitwiseOperation](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/converthasflagtobitwiseoperation.md)
  * **Convert HasFlag to bitwise operation**
  * Replace flags.HasFlag(value) with (flags &amp; value) != 0.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.DoNotPassNonReadOnlyStructByReadOnlyRef](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/donotpassnonreadonlystructbyreadonlyref.md)
  * **Do not pass non-read-only struct by read-only reference**
  * Remove 'in' modifier from parameters of non-readonly struct type to avoid defensive copies.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindAsyncVoid](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findasyncvoid.md)
  * **Do not use async void**
  * Async void methods cannot be awaited and exceptions cannot be caught. Use `async Task` instead, except for event handlers.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindAvoidClosureByUsingFactoryArg](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findavoidclosurebyusingfactoryarg.md)
  * **Find closure in GetOrAdd that could use factory argument**
  * Detect `ConcurrentDictionary.GetOrAdd` calls with lambdas that capture variables. Use the overload with a factory argument parameter to avoid allocation.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindAvoidClosureInConcurrentDictionary](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findavoidclosureinconcurrentdictionary.md)
  * **Avoid closure when using ConcurrentDictionary**
  * ConcurrentDictionary methods like `GetOrAdd` may evaluate the factory even when the key exists. Use the overload with a factory argument to avoid closure allocation.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindAvoidClosureInMethod](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findavoidclosureinmethod.md)
  * **Find closure in GetOrAdd/AddOrUpdate factory**
  * Detect closures in lambdas passed to `GetOrAdd` or `AddOrUpdate`. Use the factory overload that accepts a state argument to avoid allocations.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindBlockingCallsInAsync](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findblockingcallsinasync.md)
  * **Find blocking calls in async methods**
  * Detect `.Wait()`, `.Result`, and `.GetAwaiter().GetResult()` calls in async methods. Blocking calls in async methods can cause deadlocks.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindDoNotUseBlockingCall](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/finddonotuseblockingcall.md)
  * **Do not use blocking calls on tasks**
  * Avoid `.Wait()`, `.Result`, and `.GetAwaiter().GetResult()` on tasks. These can cause deadlocks. Use `await` instead.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindDoNotUseToStringIfObject](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/finddonotusetostringifobject.md)
  * **Do not use ToString on GetType result**
  * Using `.GetType().ToString()` returns the full type name. Consider using `.GetType().Name` or `.GetType().FullName` instead for clarity.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindEqualityComparerDefaultOfString](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findequalitycomparerdefaultofstring.md)
  * **Find EqualityComparer&lt;string&gt;.Default usage**
  * Detect `EqualityComparer&lt;string&gt;.Default` which uses ordinal comparison. Consider using an explicit `StringComparer` instead.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindGetTypeOnSystemType](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findgettypeonsystemtype.md)
  * **Find GetType() called on System.Type**
  * Detect `typeof(T).GetType()` which returns `System.RuntimeType` instead of the expected `System.Type`. Use `typeof(T)` directly.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindImplicitCultureSensitiveMethods](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findimplicitculturesensitivemethods.md)
  * **Find implicit culture-sensitive string methods**
  * Detect calls to `ToLower()` and `ToUpper()` without culture parameters. These methods use the current thread culture, which may cause unexpected behavior.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindImplicitCultureSensitiveToString](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findimplicitculturesensitivetostring.md)
  * **Find implicit culture-sensitive ToString calls**
  * Detect `.ToString()` calls without format arguments. On numeric and DateTime types, these use the current thread culture.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindLinqOnDirectMethods](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findlinqondirectmethods.md)
  * **Find LINQ methods replaceable with direct methods**
  * Detect LINQ methods like `.Count()` that could be replaced with direct collection properties. Direct access avoids enumeration overhead.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMakeMethodStatic](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findmakemethodstatic.md)
  * **Find methods that could be static**
  * Detect private methods that don't appear to use instance members and could be marked `static` for clarity and performance.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingCancellationToken](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findmissingcancellationtoken.md)
  * **Find methods not forwarding CancellationToken**
  * Detect calls to async methods that may have CancellationToken overloads but are called without one. Uses name-based heuristics.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingStructLayout](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findmissingstructlayout.md)
  * **Find structs without StructLayout attribute**
  * Detect struct declarations without `[StructLayout]` attribute. Adding `[StructLayout(LayoutKind.Auto)]` allows the CLR to optimize field layout for better memory usage.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingTimeoutForRegex](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findmissingtimeoutforregex.md)
  * **Add timeout to Regex**
  * Regex without a timeout can be vulnerable to ReDoS attacks. Specify a `TimeSpan` timeout or use `RegexOptions.NonBacktracking`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingWithCancellation](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findmissingwithcancellation.md)
  * **Find missing WithCancellation on async enumerables**
  * Detect async enumerable iteration without `.WithCancellation()`. Async enumerables should forward CancellationToken via WithCancellation.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindNaNComparison](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findnancomparison.md)
  * **Do not use NaN in comparisons**
  * Comparing with `NaN` using `==` always returns false. Use `double.IsNaN(x)` instead.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindOptimizeEnumerableCountVsAny](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findoptimizeenumerablecountvsany.md)
  * **Find LINQ Count() on materialized collection**
  * Detect LINQ `Count()` or `Any()` on types that have a `Count` or `Length` property. Use the property directly for O(1) performance.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindOptimizeGuidCreation](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findoptimizeguidcreation.md)
  * **Find Guid.Parse with constant string**
  * Detect `Guid.Parse(&quot;...&quot;)` with constant strings. Consider using `new Guid(&quot;...&quot;)` or a static readonly field for better performance.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindOptimizeStartsWith](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findoptimizestartswith.md)
  * **Use char overload for single-character string methods**
  * Convert string methods with single-character string literals to use char overloads for better performance.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindSequenceEqualForSpan](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findsequenceequalforspan.md)
  * **Find Span&lt;char&gt; equality that should use SequenceEqual**
  * Detect `==` and `!=` operators on `Span&lt;char&gt;` or `ReadOnlySpan&lt;char&gt;` which compare references. Use `SequenceEqual` for content comparison.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindSimplifyStringCreate](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findsimplifystringcreate.md)
  * **Find simplifiable string.Create calls**
  * Detect `string.Create(CultureInfo.InvariantCulture, ...)` calls that could be simplified to string interpolation when all parameters are culture-invariant.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindStreamReadResultNotUsed](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findstreamreadresultnotused.md)
  * **Find unused Stream.Read return value**
  * Detect calls to `Stream.Read` or `Stream.ReadAsync` where the return value is discarded. The return value indicates how many bytes were actually read.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindStringCreateInsteadOfFormattable](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findstringcreateinsteadofformattable.md)
  * **Find FormattableString that could use string.Create**
  * Detect `FormattableString` usage where `string.Create` with an `IFormatProvider` could be used for better performance.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindStringFormatShouldBeConstant](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findstringformatshouldbeconstant.md)
  * **String.Format format string should be constant**
  * The format string passed to `string.Format` should be a compile-time constant to enable analysis and avoid runtime format errors.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindStringGetHashCode](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findstringgethashcode.md)
  * **Find string.GetHashCode() without StringComparer**
  * Detect calls to `string.GetHashCode()` without a `StringComparer`. The default `GetHashCode()` may produce different results across platforms.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindStructWithDefaultEqualsAsKey](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findstructwithdefaultequalsaskey.md)
  * **Find Dictionary/HashSet with struct key type**
  * Detect `Dictionary` or `HashSet` usage with struct types as keys. Structs without overridden `Equals`/`GetHashCode` use slow reflection-based comparison.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindUseAttributeIsDefined](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/finduseattributeisdefined.md)
  * **Find GetCustomAttributes that could use Attribute.IsDefined**
  * Detect `GetCustomAttributes().Any()` or similar patterns where `Attribute.IsDefined` would be more efficient.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindUseContainsKeyInsteadOfTryGetValue](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findusecontainskeyinsteadoftrygetvalue.md)
  * **Use ContainsKey instead of TryGetValue with discard**
  * When only checking if a key exists, use `ContainsKey` instead of `TryGetValue` with a discarded out parameter.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindUseExplicitCaptureRegexOption](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/finduseexplicitcaptureregexoption.md)
  * **Use RegexOptions.ExplicitCapture**
  * Use `RegexOptions.ExplicitCapture` to avoid capturing unnamed groups, which improves performance.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindUseIndexerInsteadOfLinq](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/finduseindexerinsteadoflinq.md)
  * **Find LINQ methods replaceable with indexer**
  * Detect LINQ methods like `.First()` and `.Last()` that could be replaced with direct indexer access for better performance.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindUseRegexSourceGenerator](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/finduseregexsourcegenerator.md)
  * **Find Regex that could use source generator**
  * Detect `new Regex(...)` calls that could benefit from the `[GeneratedRegex]` source generator attribute for better performance (.NET 7+).
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindUseTimeProviderOverload](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findusetimeprovideroverload.md)
  * **Find calls that could use TimeProvider**
  * Detect `DateTime.UtcNow`, `DateTimeOffset.UtcNow`, and `Task.Delay` calls that could use a `TimeProvider` parameter for better testability (.NET 8+).
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindUseValuesContainsInsteadOfValues](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findusevaluescontainsinsteadofvalues.md)
  * **Find Values.Contains() instead of ContainsValue()**
  * Detect `.Values.Contains(value)` on dictionaries. Use `.ContainsValue(value)` instead.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.MakeParameterRefReadOnly](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/makeparameterrefreadonly.md)
  * **Make parameter ref read-only**
  * Use in parameter modifier for large struct parameters.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.OptimizeMethodCall](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/optimizemethodcall.md)
  * **Optimize method call**
  * Replace inefficient method calls with more optimal equivalents.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.OptimizeStringBuilderAppend](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/optimizestringbuilderappend.md)
  * **Optimize StringBuilder.Append usage**
  * Optimize StringBuilder method calls: use char overloads for single-character strings, remove redundant ToString() calls, replace string.Format with AppendFormat, and split string concatenation into chained Append calls.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.PerformanceCodeQuality](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/performancecodequality.md)
  * **Performance code quality**
  * Performance optimization recipes for C# code.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.ReplaceEnumToStringWithNameof](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/replaceenumtostringwithnameof.md)
  * **Replace Enum.ToString() with nameof**
  * Replace `MyEnum.Value.ToString()` with `nameof(MyEnum.Value)`. The `nameof` operator is evaluated at compile time, avoiding runtime reflection.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.ReturnCompletedTask](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/returncompletedtask.md)
  * **Return completed task instead of null**
  * Replace return null in Task-returning methods with return Task.CompletedTask.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.ThrowingNotImplementedException](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/throwingnotimplementedexception.md)
  * **Throwing of new NotImplementedException**
  * Find code that throws new NotImplementedException, which may indicate unfinished implementation.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.UnnecessaryExplicitEnumerator](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/unnecessaryexplicitenumerator.md)
  * **Remove unnecessary explicit enumerator**
  * Use foreach instead of explicit enumerator pattern.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.UseArrayEmpty](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/usearrayempty.md)
  * **Use Array.Empty&lt;T&gt;() instead of new T[0]**
  * Use Array.Empty&lt;T&gt;() instead of allocating empty arrays.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.UseContainsKey](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/usecontainskey.md)
  * **Use ContainsKey instead of Keys.Contains**
  * Replace `.Keys.Contains(key)` with `.ContainsKey(key)` on dictionaries for O(1) performance.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.UseCountProperty](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/usecountproperty.md)
  * **Use Count/Length property instead of Count()**
  * Replace collection.Count() with collection.Count when available.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.UseRegexIsMatch](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/useregexismatch.md)
  * **Use Regex.IsMatch**
  * Replace Regex.Match(s, p).Success with Regex.IsMatch(s, p).
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.UseStringBuilderAppendLine](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/usestringbuilderappendline.md)
  * **Use StringBuilder.AppendLine**
  * Replace `sb.Append(&quot;\n&quot;)` with `sb.AppendLine()`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.UseStringComparison](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/usestringcomparison.md)
  * **Use StringComparison**
  * Replace case-insensitive string comparisons using `ToLower()`/`ToUpper()` with overloads that accept `StringComparison.OrdinalIgnoreCase`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Performance.UseStringConcatInsteadOfJoin](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/usestringconcatinsteadofjoin.md)
  * **Use string.Concat instead of string.Join**
  * Replace `string.Join(&quot;&quot;, args)` with `string.Concat(args)`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.AllBranchesIdentical](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/allbranchesidentical.md)
  * **Remove if/else with identical branches**
  * Replace an if/else chain where every branch has the same body with just the body, since the conditions have no effect on the outcome.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.FileContainsNoCode](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/filecontainsnocode.md)
  * **File contains no code**
  * Find files that contain no code, only using directives, comments, or whitespace.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.FindUnusedInternalType](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/findunusedinternaltype.md)
  * **Find internal types that may be unused**
  * Detect `internal` (non-public) classes that may be unused. Review these types and remove them if they are no longer needed.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RedundancyCodeQuality](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/redundancycodequality.md)
  * **Redundancy code quality**
  * Remove redundant code from C# sources.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveArgumentListFromAttribute](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeargumentlistfromattribute.md)
  * **Remove argument list from attribute**
  * Remove empty argument list from attribute.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveBracesFromRecordDeclaration](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removebracesfromrecorddeclaration.md)
  * **Remove braces from record declaration**
  * Remove unnecessary braces from record declarations with no body.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveDuplicateConditions](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeduplicateconditions.md)
  * **Remove duplicate conditions**
  * Remove else-if branches whose condition duplicates an earlier branch in the same if/else-if chain, since the later branch is dead code.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveEmptyCatchClause](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeemptycatchclause.md)
  * **Find empty catch clause**
  * Find empty catch clauses that silently swallow exceptions without any logging or handling.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveEmptyDestructor](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeemptydestructor.md)
  * **Remove empty destructor**
  * Remove destructors (finalizers) with empty bodies.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveEmptyFinallyClause](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeemptyfinallyclause.md)
  * **Remove empty finally clause**
  * Remove `finally \{ \}` clauses that contain no statements. An empty finally block serves no purpose.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveEmptyForBody](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeemptyforbody.md)
  * **Flag empty for loop body**
  * Flag `for` loops with empty bodies as potential dead code.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveEmptyForEachBody](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeemptyforeachbody.md)
  * **Remove empty foreach body**
  * Remove `foreach` loops with empty bodies, which iterate without effect.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveEmptySyntax](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeemptysyntax.md)
  * **Find empty syntax**
  * Find empty namespace, class, struct, interface, and enum declarations.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveEmptyWhileBody](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeemptywhilebody.md)
  * **Remove empty while body**
  * Remove `while (cond) \{ \}` loops with empty bodies as they serve no purpose.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveEnumDefaultUnderlyingType](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeenumdefaultunderlyingtype.md)
  * **Remove enum default underlying type**
  * Remove : int from enum declaration since int is the default.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveExplicitClassFromRecord](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeexplicitclassfromrecord.md)
  * **Remove explicit 'class' from record**
  * Remove the redundant `class` keyword from `record class` declarations. Records are reference types by default.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemovePartialModifierFromSinglePart](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removepartialmodifierfromsinglepart.md)
  * **Remove partial modifier from single-part type**
  * Remove `partial` modifier from types that have only one part.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantAsOperator](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantasoperator.md)
  * **Remove redundant as operator**
  * Remove redundant 'as' operator when the expression already has the target type.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantAssignment](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantassignment.md)
  * **Remove redundant assignment**
  * Remove assignments where the value is immediately returned.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantAsyncAwait](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantasyncawait.md)
  * **Remove redundant async/await**
  * Remove redundant async/await when a Task can be returned directly.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantAutoPropertyInit](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantautopropertyinit.md)
  * **Remove redundant constructor**
  * Remove empty parameterless constructors that duplicate the implicit default.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantAutoPropertyInitialization](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantautopropertyinitialization.md)
  * **Remove redundant auto-property initialization**
  * Remove auto-property initializers that assign the default value.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantBaseConstructorCall](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantbaseconstructorcall.md)
  * **Remove redundant base constructor call**
  * Remove `: base()` parameterless base constructor call since it's implicit.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantBaseInterface](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantbaseinterface.md)
  * **Remove redundant base interface**
  * Remove interface that is already inherited by another implemented interface.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantCast](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantcast.md)
  * **Remove redundant cast**
  * Remove unnecessary casts when the expression already has the target type.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantCatchBlock](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantcatchblock.md)
  * **Remove redundant catch block**
  * Remove try-catch blocks where every catch clause only rethrows the exception.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantComma](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantcomma.md)
  * **Remove redundant comma**
  * Remove redundant trailing comma in enum declarations.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantDefaultFieldInitialization](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantdefaultfieldinitialization.md)
  * **Remove redundant default field initialization**
  * Remove field initializations that assign the default value (e.g., `int x = 0`, `bool b = false`, `string s = null`, `object o = default`).
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantDefaultSwitchSection](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantdefaultswitchsection.md)
  * **Remove redundant default switch section**
  * Remove default switch section that only contains break.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantDelegateCreation](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantdelegatecreation.md)
  * **Remove redundant delegate creation**
  * Remove unnecessary `new EventHandler(M)` when `M` can be used directly.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantDisposeOrClose](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantdisposeorclose.md)
  * **Remove redundant Dispose/Close call**
  * Remove Dispose/Close calls on objects already in a using block.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantOverridingMember](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantoverridingmember.md)
  * **Remove redundant overriding member**
  * Remove overriding member that only calls the base implementation.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantParentheses](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantparentheses.md)
  * **Remove redundant parentheses**
  * Remove unnecessary parentheses around expressions in return statements and assignments.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantRegion](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantregion.md)
  * **Remove redundant region**
  * Remove #region/#endregion directives.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantSealedModifier](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantsealedmodifier.md)
  * **Remove redundant sealed modifier**
  * Remove `sealed` modifier on members of sealed classes, since it's redundant.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantSealedModifierFromOverride](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantsealedmodifierfromoverride.md)
  * **Remove redundant 'sealed' modifier from override**
  * Remove redundant 'sealed' modifier from an overriding member in a sealed class.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantStatement](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantstatement.md)
  * **Remove redundant statement**
  * Remove redundant `return;` at end of void method or `continue;` at end of loop body.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantStringToCharArrayCall](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundantstringtochararraycall.md)
  * **Remove redundant ToCharArray() call**
  * Remove `ToCharArray()` calls in foreach loops where iterating over the string directly produces the same result.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveRedundantToStringCall](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeredundanttostringcall.md)
  * **Remove redundant ToString() call**
  * Remove `ToString()` calls on expressions that are already strings.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveSelfAssignment](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeselfassignment.md)
  * **Remove self-assignment**
  * Remove assignment statements where the variable is assigned to itself, such as `x = x`. These have no effect and are likely copy-paste errors.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveUnconditionalValueOverwrite](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeunconditionalvalueoverwrite.md)
  * **Remove unconditional value overwrite**
  * Remove consecutive assignments to the same collection key or index where the first value is immediately overwritten and never read.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveUnnecessaryCaseLabel](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeunnecessarycaselabel.md)
  * **Remove unnecessary case label**
  * Remove case labels from switch section that has default label.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveUnnecessaryElse](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeunnecessaryelse.md)
  * **Remove unnecessary else clause**
  * Remove `else` clause when the `if` body always terminates with `return`, `throw`, `break`, `continue`, or `goto`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveUnnecessarySemicolon](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeunnecessarysemicolon.md)
  * **Remove unnecessary semicolon at end of declaration**
  * Remove unnecessary semicolon at the end of a declaration.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveUnusedDocCommentElement](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeunuseddoccommentelement.md)
  * **Unused element in documentation comment**
  * Remove unused param/typeparam elements from XML documentation.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveUnusedMemberDeclaration](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeunusedmemberdeclaration.md)
  * **Remove unused member declaration**
  * Remove member declarations that are never referenced.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveUnusedThisParameter](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/removeunusedthisparameter.md)
  * **Unused 'this' parameter**
  * Remove unused 'this' parameter from extension methods.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.ResourceCanBeDisposedAsynchronously](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/resourcecanbedisposedasynchronously.md)
  * **Resource can be disposed asynchronously**
  * Use `await using` instead of `using` when the resource implements IAsyncDisposable.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.UnnecessaryEnumFlag](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/unnecessaryenumflag.md)
  * **Unnecessary enum flag**
  * Remove unnecessary enum flag value that is a combination of other flags.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.UnnecessaryInterpolatedString](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/unnecessaryinterpolatedstring.md)
  * **Remove unnecessary interpolated string**
  * Replace interpolated strings with no interpolations with regular strings.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.UnnecessaryInterpolation](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/unnecessaryinterpolation.md)
  * **Unnecessary interpolation**
  * Remove unnecessary string interpolation, for example simplifying `$&quot;\{x\}&quot;` to `x.ToString()`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.UnnecessaryNullCheck](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/unnecessarynullcheck.md)
  * **Remove unnecessary null check**
  * Remove null check that is unnecessary because the value is known to be non-null.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.UnnecessaryNullForgivingOperator](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/unnecessarynullforgivingoperator.md)
  * **Remove unnecessary null-forgiving operator**
  * Remove ! operator where expression is already non-nullable.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.UnnecessaryRawStringLiteral](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/unnecessaryrawstringliteral.md)
  * **Remove unnecessary raw string literal**
  * Convert raw string literal to regular string when not needed.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.UnnecessaryUnsafeContext](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/unnecessaryunsafecontext.md)
  * **Remove unnecessary unsafe context**
  * Remove unsafe blocks that do not contain unsafe code.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.UnnecessaryVerbatimStringLiteral](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/unnecessaryverbatimstringliteral.md)
  * **Remove unnecessary verbatim string literal**
  * Remove @ prefix from string literals that do not contain escape sequences.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.UseRethrow](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/userethrow.md)
  * **Use rethrow instead of throw ex**
  * Replace `throw ex;` with `throw;` inside catch clauses when `ex` is the caught exception variable. A bare `throw` preserves the original stack trace.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.CombineWhereMethodChain](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/combinewheremethodchain.md)
  * **Combine 'Enumerable.Where' method chain**
  * Combine consecutive Enumerable.Where method calls into a single call with a combined predicate.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.ConvertAnonymousMethodToLambda](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/convertanonymousmethodtolambda.md)
  * **Convert anonymous method to lambda**
  * Convert anonymous method delegate syntax to lambda expression.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.ConvertIfToAssignment](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/convertiftoassignment.md)
  * **Convert 'if' to assignment**
  * Convert 'if' statement that assigns boolean literals to a simple assignment with the condition expression.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.ConvertInterpolatedStringToConcatenation](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/convertinterpolatedstringtoconcatenation.md)
  * **Convert interpolated string to concatenation**
  * Detect string interpolations that could be simplified to concatenation.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.ExpressionAlwaysTrueOrFalse](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/expressionalwaystrueorfalse.md)
  * **Expression is always true or false**
  * Simplify `x == x` to `true` and `x != x` to `false`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.InlineLazyInitialization](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/inlinelazyinitialization.md)
  * **Inline lazy initialization**
  * Use null-coalescing assignment (??=) for lazy initialization.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.InlineLocalVariable](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/inlinelocalvariable.md)
  * **Inline local variable**
  * Inline local variable that is assigned once and used once immediately.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.JoinStringExpressions](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/joinstringexpressions.md)
  * **Join string expressions**
  * Join consecutive string literal concatenations into a single literal.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.MergeElseWithNestedIf](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/mergeelsewithnestedif.md)
  * **Merge else with nested if**
  * Merge `else \{ if (...) \{ \} \}` into `else if (...) \{ \}` when the else block contains only a single if statement.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.MergeIdenticalBranches](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/mergeidenticalbranches.md)
  * **Merge identical branches**
  * Merge consecutive if/else-if branches that have identical bodies by combining their conditions with `||`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.MergeIfWithParentIf](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/mergeifwithparentif.md)
  * **Merge if with parent if**
  * Merge `if (a) \{ if (b) \{ ... \} \}` into `if (a &amp;&amp; b) \{ ... \}` when the outer if body contains only a single nested if without else.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.MergeSwitchSections](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/mergeswitchsections.md)
  * **Merge switch sections with equivalent content**
  * Merge switch case labels that have identical bodies.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.RemoveRedundantBooleanLiteral](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/removeredundantbooleanliteral.md)
  * **Remove redundant boolean literal**
  * Remove redundant `== true` comparison from boolean expressions.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.RemoveUnnecessaryBraces](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/removeunnecessarybraces.md)
  * **Remove unnecessary braces**
  * Remove braces from single-statement blocks where they are optional.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplificationCodeQuality](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/simplificationcodequality.md)
  * **Simplification code quality**
  * Simplify expressions and patterns in C# code.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyArgumentNullCheck](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/simplifyargumentnullcheck.md)
  * **Simplify argument null check**
  * Use ArgumentNullException.ThrowIfNull(arg) instead of manual null check.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyBooleanComparison](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/simplifybooleancomparison.md)
  * **Simplify boolean comparison**
  * Simplify `true == x` to `x`, `false == x` to `!x`, `true != x` to `!x`, and `false != x` to `x`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyCoalesceExpression](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/simplifycoalesceexpression.md)
  * **Simplify coalesce expression**
  * Simplify x ?? x to x.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyCodeBranching](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/simplifycodebranching.md)
  * **Simplify code branching**
  * Simplify code branching patterns such as empty if-else, while(true) with break, and trailing return/continue in if-else.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyConditionalExpression](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/simplifyconditionalexpression.md)
  * **Simplify conditional expression**
  * Simplify `cond ? true : false` to `cond` and `cond ? false : true` to `!cond`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyDoWhileToWhile](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/simplifydowhiletowhile.md)
  * **Simplify do-while(true) to while(true)**
  * Convert `do \{ ... \} while (true)` to `while (true) \{ ... \}`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyLazyInitialization](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/simplifylazyinitialization.md)
  * **Simplify lazy initialization**
  * Simplify lazy initialization using ??= operator.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyLogicalNegation](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/simplifylogicalnegation.md)
  * **Simplify logical negation**
  * Simplify negated comparison expressions. For example, `!(x == y)` becomes `x != y`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyNegatedIsNull](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/simplifynegatedisnull.md)
  * **Simplify negated is null pattern**
  * Simplify `!(x is null)` to `x is not null` and `!(x is not null)` to `x is null`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyNestedUsingStatement](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/simplifynestedusingstatement.md)
  * **Simplify nested using statement**
  * Merge nested `using` statements into a single `using` declaration.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyNullableHasValue](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/simplifynullablehasvalue.md)
  * **Simplify Nullable&lt;T&gt;.HasValue**
  * Replace `x.HasValue` with `x != null` and `!x.HasValue` with `x == null`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyNullableToShorthand](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/simplifynullabletoshorthand.md)
  * **Simplify Nullable&lt;T&gt; to T?**
  * Use T? shorthand instead of Nullable&lt;T&gt;.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyNumericComparison](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/simplifynumericcomparison.md)
  * **Simplify numeric comparison**
  * Simplify `x - y &gt; 0` to `x &gt; y`, `x - y &lt; 0` to `x &lt; y`, `x - y &gt;= 0` to `x &gt;= y`, and `x - y &lt;= 0` to `x &lt;= y`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyRedundantLogicalExpression](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/simplifyredundantlogicalexpression.md)
  * **Simplify redundant logical expression**
  * Simplify `x &amp;&amp; x` to `x`, `x || x` to `x`, and similarly for `&amp;` and `|`, where both sides of a logical or bitwise operator are identical.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyRedundantWhereWhere](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/simplifyredundantwherewhere.md)
  * **Merge consecutive Where calls**
  * Detect consecutive `.Where(p).Where(q)` calls that could be merged.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UnconstrainedTypeParamNullCheck](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/unconstrainedtypeparamnullcheck.md)
  * **Unconstrained type parameter checked for null**
  * Find null checks on unconstrained type parameters, which may not be reference types.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UnnecessaryOperator](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/unnecessaryoperator.md)
  * **Operator is unnecessary**
  * Remove unnecessary operators such as unary plus.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseAnonymousFunctionOrMethodGroup](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/useanonymousfunctionormethodgroup.md)
  * **Use anonymous function or method group**
  * Convert a lambda expression to a method group where appropriate.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseCoalesceExpression](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usecoalesceexpression.md)
  * **Use coalesce expression**
  * Replace `x != null ? x : y` and `x == null ? y : x` with `x ?? y`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseCoalesceExpressionInsteadOfIf](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usecoalesceexpressioninsteadofif.md)
  * **Use coalesce expression instead of 'if'**
  * Replace `if (x == null) x = y;` with `x ??= y`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseCompoundAssignment](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usecompoundassignment.md)
  * **Use compound assignment**
  * Replace `x = x op y` with `x op= y` for arithmetic, bitwise, shift, and null-coalescing operators.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseConditionalAccess](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/useconditionalaccess.md)
  * **Use conditional access**
  * Transform null-check patterns to use conditional access (?.).
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseConditionalAccessInsteadOfIf](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/useconditionalaccessinsteadofif.md)
  * **Use conditional access instead of conditional expression**
  * Transform ternary null-check expressions to use conditional access (?.) with null-coalescing (??) where needed.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseConditionalExpressionForDeclaration](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/useconditionalexpressionfordeclaration.md)
  * **Use conditional expression in declaration**
  * Convert `int x; if (cond) x = a; else x = b;` to `int x = cond ? a : b;`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseConditionalExpressionForReturn](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/useconditionalexpressionforreturn.md)
  * **Use conditional return expression**
  * Convert `if (c) return a; return b;` to `return c ? a : b;`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseConditionalExpressionForThrow](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/useconditionalexpressionforthrow.md)
  * **Use conditional throw expression**
  * Detect `if (x == null) throw ...` patterns that could use `x ?? throw ...`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseDateTimeOffsetUnixEpoch](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usedatetimeoffsetunixepoch.md)
  * **Use DateTimeOffset.UnixEpoch**
  * Replace `new DateTimeOffset(1970, 1, 1, 0, 0, 0, TimeSpan.Zero)` with `DateTimeOffset.UnixEpoch`. Available since .NET 8, `DateTimeOffset.UnixEpoch` is more readable.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseDateTimeUnixEpoch](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usedatetimeunixepoch.md)
  * **Use DateTime.UnixEpoch**
  * Replace `new DateTime(1970, 1, 1)` with `DateTime.UnixEpoch`. Available since .NET 8, `DateTime.UnixEpoch` is more readable and avoids magic numbers.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseDefaultLiteral](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usedefaultliteral.md)
  * **Use default literal**
  * Simplify default(T) expressions to default. Note: in rare cases where the type cannot be inferred (e.g., overload resolution), manual review may be needed.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseExceptionFilter](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/useexceptionfilter.md)
  * **Use exception filter**
  * Detect catch blocks with if/throw pattern that could use a when clause.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseExpressionBodiedLambda](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/useexpressionbodiedlambda.md)
  * **Use expression-bodied lambda**
  * Convert block-body lambdas with a single statement to expression-body lambdas.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseForInsteadOfWhile](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/useforinsteadofwhile.md)
  * **Use for statement instead of while**
  * Convert while loops with counter to for loops.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseGuidEmpty](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/useguidempty.md)
  * **Use Guid.Empty**
  * Replace `new Guid()` with `Guid.Empty`. The static `Guid.Empty` field avoids unnecessary allocations and clearly expresses intent.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseIsOperatorInsteadOfAs](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/useisoperatorinsteadofas.md)
  * **Use 'is' operator instead of 'as' operator**
  * Replace 'as' operator followed by null check with 'is' operator.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseIsPatternInsteadOfSequenceEqual](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/useispatterninsteadofsequenceequal.md)
  * **Use 'is' pattern instead of SequenceEqual**
  * Replace `span.SequenceEqual(&quot;str&quot;)` with `span is &quot;str&quot;`. Pattern matching with string constants is more concise for span comparisons.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseNotPattern](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usenotpattern.md)
  * **Use 'not' pattern instead of negation**
  * Detect `!(x is Type)` patterns that can use `x is not Type`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UsePatternMatchingForEquality](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usepatternmatchingforequality.md)
  * **Use pattern matching for equality comparison**
  * Replace `x == constant` with `x is constant` for improved readability using C# pattern matching.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UsePatternMatchingForInequality](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usepatternmatchingforinequality.md)
  * **Use pattern matching for inequality comparison**
  * Replace `x != constant` with `x is not constant` for improved readability using C# pattern matching.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UsePatternMatchingInsteadOfAs](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usepatternmatchinginsteadofas.md)
  * **Use pattern matching instead of as**
  * Use pattern matching instead of as. Note: Needs type resolution.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UsePatternMatchingInsteadOfHasValue](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usepatternmatchinginsteadofhasvalue.md)
  * **Use pattern matching instead of HasValue**
  * Replace `nullable.HasValue` with `nullable is not null`. Pattern matching is more idiomatic in modern C#. Note: this recipe uses name-based matching and may match non-Nullable types with a `HasValue` property.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UsePatternMatchingInsteadOfIs](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usepatternmatchinginsteadofis.md)
  * **Use pattern matching instead of is**
  * Use pattern matching instead of is. Note: Needs type resolution.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UsePatternMatchingNullCheck](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usepatternmatchingnullcheck.md)
  * **Use pattern matching for null check**
  * Replace `x == null` with `x is null` and `x != null` with `x is not null`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UsePostfixIncrement](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usepostfixincrement.md)
  * **Use postfix increment/decrement**
  * Replace `x = x + 1` with `x++` and `x = x - 1` with `x--`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseRangeOperator](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/userangeoperator.md)
  * **Use range operator**
  * Detect Substring calls that could use C# 8 range syntax.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseShortCircuitOperator](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/useshortcircuitoperator.md)
  * **Use short-circuit operator**
  * Replace bitwise `&amp;` with `&amp;&amp;` and `|` with `||` in boolean contexts.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseStringEndsWith](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usestringendswith.md)
  * **Use string.EndsWith**
  * Detect substring comparison patterns that could use EndsWith.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseStringEquals](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usestringequals.md)
  * **Use string.Equals instead of == for string comparison**
  * Replace `==` string comparisons with `string.Equals(a, b, StringComparison.Ordinal)` for explicit comparison semantics.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseStringInterpolation](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usestringinterpolation.md)
  * **Use string interpolation instead of string.Format**
  * Replace simple `string.Format(&quot;\{0\}&quot;, x)` calls with `$&quot;\{x\}&quot;`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseStringInterpolationInsteadOfConcat](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usestringinterpolationinsteadofconcat.md)
  * **Use string interpolation instead of concatenation**
  * Replace string.Concat with string interpolation.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseStringStartsWith](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usestringstartswith.md)
  * **Use string.StartsWith instead of IndexOf comparison**
  * Replace `s.IndexOf(x) == 0` with `s.StartsWith(x)`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseSwitchExpression](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/useswitchexpression.md)
  * **Use switch expression**
  * Convert simple switch statements to switch expressions (C# 8+).
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseThrowExpression](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usethrowexpression.md)
  * **Use throw expression**
  * Convert null-check-then-throw patterns to throw expressions.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseTimeSpanZero](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usetimespanzero.md)
  * **Use TimeSpan.Zero**
  * Replace `new TimeSpan(0)` and `TimeSpan.FromX(0)` with `TimeSpan.Zero`. The static `TimeSpan.Zero` field is more readable and avoids unnecessary object creation.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UseXorForBooleanInequality](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usexorforbooleaninequality.md)
  * **Use ^ operator for boolean inequality**
  * Replace a != b with a ^ b when both operands are boolean.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.AbstractTypeShouldNotHavePublicConstructors](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/abstracttypeshouldnothavepublicconstructors.md)
  * **Abstract type should not have public constructors**
  * Change public constructors of abstract types to protected.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.AddParenthesesForClarity](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/addparenthesesforclarity.md)
  * **Add parentheses for clarity**
  * Add parentheses to expressions where operator precedence might be unclear to improve readability.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.AddParenthesesToConditionalExpression](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/addparenthesestoconditionalexpression.md)
  * **Add parentheses to conditional expression condition**
  * Add or remove parentheses from the condition in a conditional operator.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.AddRemoveTrailingComma](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/addremovetrailingcomma.md)
  * **Add trailing comma to last enum member**
  * Add trailing comma to the last member of enum declarations for cleaner diffs when adding new members.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.AddStaticToMembersOfStaticClass](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/addstatictomembersofstaticclass.md)
  * **Add static modifier to all members of static class**
  * Ensure all members of a static class are also declared static.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.AddTrailingComma](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/addtrailingcomma.md)
  * **Add trailing comma**
  * Add trailing commas to multi-line initializers and enum declarations for cleaner diffs.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.AvoidChainOfAssignments](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/avoidchainofassignments.md)
  * **Avoid chain of assignments**
  * Flag chained assignment expressions like a = b = c = value.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.AvoidNestingTernary](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/avoidnestingternary.md)
  * **Avoid nested ternary operator**
  * Replace nested ternary expressions with if/else chains for clarity.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.CallExtensionMethodAsInstance](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/callextensionmethodasinstance.md)
  * **Call extension method as instance method**
  * Use instance method syntax instead of static extension method call.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.CompositeEnumContainsUndefinedFlag](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/compositeenumcontainsundefinedflag.md)
  * **Composite enum value contains undefined flag**
  * Find composite enum values that contain a flag which is not defined in the enum type.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.ConstantValuesOnRightSide](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/constantvaluesonrightside.md)
  * **Place constant values on right side of comparisons**
  * Move constant values (literals, null) from the left side of comparisons to the right side for consistency and readability.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.ConvertCommentToDocComment](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/convertcommenttodoccomment.md)
  * **Convert comment to documentation comment**
  * Convert single-line or multi-line comments above declarations to XML documentation comments.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.DeclareEachAttributeSeparately](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/declareeachattributeseparately.md)
  * **Declare each attribute separately**
  * Declare each attribute in a separate attribute list.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.DeclareEachTypeInSeparateFile](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/declareeachtypeinseparatefile.md)
  * **Declare each type in separate file**
  * Declare each type in a separate file.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.DeclareEachTypeSeparately](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/declareeachtypeseparately.md)
  * **Declare each type in separate file**
  * Flag files containing multiple top-level type declarations.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.DeclareEnumMemberWithZeroValue](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/declareenummemberwithzerovalue.md)
  * **Declare enum member with zero value**
  * Ensure [Flags] enums have a member explicitly assigned the value 0.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.DeclareEnumValueAsCombination](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/declareenumvalueascombination.md)
  * **Declare enum value as combination of names**
  * Declare Flags enum values as combinations of named values.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.DeclareUsingDirectiveOnTopLevel](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/declareusingdirectiveontoplevel.md)
  * **Declare using directive on top level**
  * Move using directives outside of namespace declarations to the top level of the file.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.DefaultLabelShouldBeLast](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/defaultlabelshouldbelast.md)
  * **Default label should be last**
  * Move default label to the last position in switch statement.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.DuplicateEnumValue](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/duplicateenumvalue.md)
  * **Flag duplicate enum value**
  * Flag enum members that have the same underlying value.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.DuplicateWordInComment](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/duplicatewordincomment.md)
  * **Duplicate word in a comment**
  * Find and fix duplicate consecutive words in comments.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.EnumShouldDeclareExplicitValues](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/enumshoulddeclareexplicitvalues.md)
  * **Enum should declare explicit values**
  * Add explicit values to enum members that do not have them.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindArgumentExceptionParameterName](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findargumentexceptionparametername.md)
  * **ArgumentException should specify argument name**
  * When throwing `ArgumentException` or derived types, specify the parameter name using `nameof()`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindAsyncMethodReturnsNull](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findasyncmethodreturnsnull.md)
  * **Find async void method**
  * Detect `async void` methods. Use `async Task` instead so callers can await and exceptions propagate correctly.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindAsyncVoidDelegate](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findasyncvoiddelegate.md)
  * **Find async void delegate**
  * Detect async lambdas used as delegates where the return type is void. Use `Func&lt;Task&gt;` instead of `Action` for async delegates.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindAvoidAnonymousDelegateForUnsubscribe](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findavoidanonymousdelegateforunsubscribe.md)
  * **Do not use anonymous delegates to unsubscribe from events**
  * Unsubscribing from events using anonymous delegates or lambdas has no effect because each lambda creates a new delegate instance.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindAwaitTaskBeforeDisposing](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findawaittaskbeforedisposing.md)
  * **Find unawaited task return in using block**
  * Detect `return` of a Task inside a `using` block without `await`. The resource may be disposed before the task completes.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindBothConditionSidesIdentical](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findbothconditionsidesidentical.md)
  * **Find binary expression with identical sides**
  * Detect binary expressions where both sides are identical, e.g. `x == x` or `a &amp;&amp; a`. This is likely a copy-paste bug.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindClassWithEqualsButNoIEquatable](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findclasswithequalsbutnoiequatable.md)
  * **Find class with Equals(T) but no IEquatable&lt;T&gt;**
  * Detect classes that define `Equals(T)` but do not implement `IEquatable&lt;T&gt;`. Implementing the interface ensures consistency and enables value-based equality.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindCompareToWithoutIComparable](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findcomparetowithouticomparable.md)
  * **Find CompareTo without IComparable**
  * Detect classes that provide a `CompareTo` method but do not implement `IComparable&lt;T&gt;`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDangerousThreadingMethods](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddangerousthreadingmethods.md)
  * **Do not use dangerous threading methods**
  * Avoid `Thread.Abort()`, `Thread.Suspend()`, and `Thread.Resume()`. These methods are unreliable and can corrupt state.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDefaultParameterValueNeedsOptional](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddefaultparametervalueneedsoptional.md)
  * **Find [DefaultParameterValue] without [Optional]**
  * Detect parameters with `[DefaultParameterValue]` that are missing `[Optional]`. Both attributes are needed for COM interop default parameter behavior.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotCallVirtualMethodInConstructor](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddonotcallvirtualmethodinconstructor.md)
  * **Find virtual method call in constructor**
  * Detect calls to virtual or abstract methods within constructors. Derived classes may not be fully initialized when these methods execute.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotCompareWithNaN](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddonotcomparewithnan.md)
  * **Find comparison with NaN**
  * Detect comparisons with `NaN` using `==` or `!=`. Use `double.IsNaN()` or `float.IsNaN()` instead, as `x == NaN` is always false.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotCreateTypeWithBCLName](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddonotcreatetypewithbclname.md)
  * **Find type with BCL name**
  * Detect class declarations that use names from well-known BCL types like `Task`, `Action`, `String`, which can cause confusion.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotDeclareStaticMembersOnGenericTypes](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddonotdeclarestaticmembersongenerictypes.md)
  * **Find static members on generic types**
  * Detect static members declared on generic types. Static members on generic types require specifying type arguments at the call site, reducing discoverability.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotOverwriteParameterValue](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddonotoverwriteparametervalue.md)
  * **Find overwritten parameter values**
  * Detect assignments to method parameters, which can mask the original argument and lead to confusion.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotPassNullForCancellationToken](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddonotpassnullforcancellationtoken.md)
  * **Find null passed for CancellationToken**
  * Detect `null` or `default` passed for `CancellationToken` parameters. Use `CancellationToken.None` instead.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotRaiseApplicationException](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddonotraiseapplicationexception.md)
  * **Do not raise ApplicationException**
  * Avoid throwing `ApplicationException`. Use a more specific exception type.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotRaiseNotImplementedException](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddonotraisenotimplementedexception.md)
  * **Do not throw NotImplementedException**
  * Throwing `NotImplementedException` indicates incomplete implementation. Implement the functionality or throw a more specific exception.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotRaiseReservedExceptionType](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddonotraisereservedexceptiontype.md)
  * **Do not raise reserved exception types**
  * Avoid throwing `Exception`, `SystemException`, or `ApplicationException`. Use more specific exception types.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotThrowFromFinalizer](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddonotthrowfromfinalizer.md)
  * **Find throw statements in finalizer**
  * Detect `throw` statements inside finalizer/destructor methods. Throwing from a finalizer can terminate the process.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotThrowFromFinallyBlock](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddonotthrowfromfinallyblock.md)
  * **Do not throw from finally block**
  * Throwing from a `finally` block can mask the original exception and make debugging difficult.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotUseCertificateValidationCallback](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddonotusecertificatevalidationcallback.md)
  * **Do not write custom certificate validation**
  * Custom certificate validation callbacks can introduce security vulnerabilities by accidentally accepting invalid certificates.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotUseEqualityComparerDefaultOfString](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddonotuseequalitycomparerdefaultofstring.md)
  * **Find EqualityComparer&lt;string&gt;.Default**
  * Detect `EqualityComparer&lt;string&gt;.Default` which may use different comparison semantics across platforms. Use an explicit `StringComparer`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotUseGetHashCodeForString](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddonotusegethashcodeforstring.md)
  * **Find GetType() on Type instance**
  * Detect `.GetType()` called on an object that is already a `System.Type`. Use `typeof()` directly.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotUseObjectToString](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddonotuseobjecttostring.md)
  * **Find ToString on object-typed parameter**
  * Detect `.ToString()` calls on `object`-typed parameters. The default `object.ToString()` returns the type name, which is rarely the intended behavior.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotUseSleep](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddonotusesleep.md)
  * **Find Thread.Sleep usage**
  * Detect `Thread.Sleep()` which blocks the thread. Use `await Task.Delay()` in async contexts instead.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotUseStringGetHashCode](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddonotusestringgethashcode.md)
  * **Find string.GetHashCode() usage**
  * Detect `string.GetHashCode()` which is not stable across runs. Use `StringComparer.GetHashCode()` or `string.GetHashCode(StringComparison)` instead.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindEmbedCaughtExceptionAsInner](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findembedcaughtexceptionasinner.md)
  * **Embed caught exception as inner exception**
  * When rethrowing a different exception in a catch block, pass the original exception as the inner exception to preserve the stack trace.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindEnumDefaultValueZero](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findenumdefaultvaluezero.md)
  * **Find explicit zero initialization in enum**
  * Detect enum members explicitly initialized to `0`. The default value of an enum is already `0`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindEqualsWithoutNotNullWhen](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findequalswithoutnotnullwhen.md)
  * **Find Equals without [NotNullWhen(true)]**
  * Detect `Equals(object?)` overrides that are missing `[NotNullWhen(true)]` on the parameter, which helps nullable analysis.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindEventArgsSenderNotNull](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findeventargssendernotnull.md)
  * **Find event raised with null EventArgs**
  * Detect event invocations that pass `null` for EventArgs. Use `EventArgs.Empty` instead.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindFlowCancellationTokenInAwaitForEach](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findflowcancellationtokeninawaitforeach.md)
  * **Find await foreach without CancellationToken**
  * Detect `await foreach` loops that don't pass a `CancellationToken` via `WithCancellation()` when one is available in the enclosing method.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindIComparableWithoutComparisonOperators](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findicomparablewithoutcomparisonoperators.md)
  * **Find IComparable without comparison operators**
  * Detect classes that implement `IComparable&lt;T&gt;` but do not override comparison operators (`&lt;`, `&gt;`, `&lt;=`, `&gt;=`).
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindIComparableWithoutIEquatable](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findicomparablewithoutiequatable.md)
  * **Find IComparable&lt;T&gt; without IEquatable&lt;T&gt;**
  * Detect classes that implement `IComparable&lt;T&gt;` but not `IEquatable&lt;T&gt;`. Both interfaces should be implemented together for consistent comparison semantics.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindIEquatableWithoutEquals](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findiequatablewithoutequals.md)
  * **Find IEquatable&lt;T&gt; without Equals(object) override**
  * Detect classes that implement `IEquatable&lt;T&gt;` but do not override `Equals(object)`, which can lead to inconsistent equality behavior.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindILoggerTypeMismatch](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findiloggertypemismatch.md)
  * **Find ILogger&lt;T&gt; type parameter mismatch**
  * Detect `ILogger&lt;T&gt;` fields or parameters where `T` doesn't match the containing type name.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindIfElseBranchesIdentical](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findifelsebranchesidentical.md)
  * **Find if/else with identical branches**
  * Detect `if/else` statements where both branches contain identical code. This is likely a copy-paste bug.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindImplementNonGenericInterface](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findimplementnongenericinterface.md)
  * **Find missing non-generic interface implementation**
  * Detect types implementing `IComparable&lt;T&gt;` without `IComparable`, or `IEquatable&lt;T&gt;` without proper Equals override.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindImplicitCultureSensitiveToStringDirect](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findimplicitculturesensitivetostringdirect.md)
  * **Find implicit culture-sensitive ToString in concatenation**
  * Detect string concatenation with numeric types that implicitly call culture-sensitive `ToString()`. Use an explicit format or `CultureInfo.InvariantCulture`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindImplicitDateTimeOffsetConversion](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findimplicitdatetimeoffsetconversion.md)
  * **Find implicit DateTime to DateTimeOffset conversion**
  * Detect implicit conversion from `DateTime` to `DateTimeOffset` which uses the local time zone and can produce unexpected results.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindInterpolatedStringWithoutParameters](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findinterpolatedstringwithoutparameters.md)
  * **Find interpolated string without parameters**
  * Detect interpolated strings (`$&quot;...&quot;`) that contain no interpolation expressions. Use a regular string literal instead.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindInvalidAttributeArgumentType](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findinvalidattributeargumenttype.md)
  * **Find potentially invalid attribute argument type**
  * Detect attribute arguments that use types not valid in attribute constructors (only primitives, string, Type, enums, and arrays of these are allowed).
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindMethodReturningIAsyncEnumerable](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findmethodreturningiasyncenumerable.md)
  * **Find IAsyncEnumerable method without Async suffix**
  * Detect methods returning `IAsyncEnumerable&lt;T&gt;` that don't end with `Async`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindMethodTooLong](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findmethodtoolong.md)
  * **Find method that is too long**
  * Detect methods with more than 60 statements. Long methods are harder to understand and maintain.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindMissingCancellationTokenOverload](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findmissingcancellationtokenoverload.md)
  * **Find async call missing CancellationToken**
  * Detect async method calls that don't pass a `CancellationToken` when the enclosing method has one available as a parameter.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindMissingNamedParameter](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findmissingnamedparameter.md)
  * **Find boolean literal arguments without parameter name**
  * Detect method calls passing `true` or `false` literals as arguments. Using named parameters improves readability.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindMissingParamsInOverride](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findmissingparamsinoverride.md)
  * **Find override method missing params keyword**
  * Detect override methods that may be missing the `params` keyword on array parameters that the base method declares as `params`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindMissingStringComparison](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findmissingstringcomparison.md)
  * **Find string method missing StringComparison**
  * Detect string methods like `Equals`, `Contains`, `StartsWith`, `EndsWith` called without an explicit `StringComparison` parameter.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindMissingStringEqualityComparer](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findmissingstringequalitycomparer.md)
  * **Find missing string equality comparer**
  * Detect `Dictionary&lt;string, T&gt;` and `HashSet&lt;string&gt;` created without an explicit `StringComparer`. Without a comparer, the default ordinal comparison is used.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindMultiLineXmlComment](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findmultilinexmlcomment.md)
  * **Find multi-line XML doc comments**
  * Detect `/** */` style XML documentation comments that could use the `///` single-line syntax for consistency.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindNonConstantStaticFieldsVisible](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findnonconstantstaticfieldsvisible.md)
  * **Non-constant static fields should not be visible**
  * Public static fields that are not `const` or `readonly` can be modified by any code, breaking encapsulation. Make them `readonly` or use a property.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindNonDeterministicEndOfLine](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findnondeterministicendofline.md)
  * **Find non-deterministic end-of-line in strings**
  * Detect string literals containing `\n` that may behave differently across platforms. Consider using `Environment.NewLine` instead.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindNonFlagsEnumWithFlagsAttribute](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findnonflagsenumwithflagsattribute.md)
  * **Find non-flags enum with [Flags]**
  * Detect enums marked with `[Flags]` whose values are not powers of two, indicating they are not truly flags enums.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindNotNullIfNotNullAttribute](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findnotnullifnotnullattribute.md)
  * **Find missing NotNullIfNotNull attribute**
  * Detect methods with nullable return types depending on nullable parameters that lack `[NotNullIfNotNull]` attribute.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindObserveAsyncResult](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findobserveasyncresult.md)
  * **Find unobserved async call result**
  * Detect calls to async methods where the returned Task is not awaited, assigned, or otherwise observed. Unobserved tasks may silently swallow exceptions.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindObsoleteWithoutMessage](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findobsoletewithoutmessage.md)
  * **Obsolete attribute should include explanation**
  * The `[Obsolete]` attribute should include a message explaining why the member is obsolete and what to use instead.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindOverrideChangesParameterDefaults](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findoverridechangesparameterdefaults.md)
  * **Find overrides that change parameter defaults**
  * Detect `override` methods with default parameter values. Overrides should not change defaults from the base method as this causes confusing behavior depending on the reference type.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindPreferCollectionAbstraction](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findprefercollectionabstraction.md)
  * **Find concrete collection in public API**
  * Detect public method parameters or return types that use concrete collection types like `List&lt;T&gt;` instead of `IList&lt;T&gt;` or `IEnumerable&lt;T&gt;`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindPrimaryConstructorReadonly](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findprimaryconstructorreadonly.md)
  * **Find reassigned primary constructor parameter**
  * Detect primary constructor parameters that are reassigned in the class body. Primary constructor parameters should be treated as readonly.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindRawStringImplicitEndOfLine](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findrawstringimplicitendofline.md)
  * **Find raw string with implicit end of line**
  * Detect raw string literals (`&quot;&quot;&quot;...&quot;&quot;&quot;`) that contain implicit end-of-line characters which may behave differently across platforms.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindReadOnlyStructMembers](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findreadonlystructmembers.md)
  * **Find struct member that could be readonly**
  * Detect struct methods and properties that don't modify state and could be marked `readonly` to prevent defensive copies.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindRedundantArgumentValue](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findredundantargumentvalue.md)
  * **Find redundant default argument values**
  * Detect named arguments that explicitly pass a default value. Removing them simplifies the call.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindSenderNullForStaticEvents](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findsendernullforstaticevents.md)
  * **Find static event with non-null sender**
  * Detect static event invocations that pass `this` as the sender. Static events should use `null` as the sender.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindSingleLineXmlComment](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findsinglelinexmlcomment.md)
  * **Find multi-line XML doc comment style**
  * Detect `/** ... */` style XML doc comments. Use `///` single-line style instead for consistency.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindSpanEqualityOperator](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findspanequalityoperator.md)
  * **Find equality operator on Span&lt;T&gt;**
  * Detect `==` or `!=` operators on `Span&lt;T&gt;` or `ReadOnlySpan&lt;T&gt;`. Use `SequenceEqual` instead.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindStreamReadIgnored](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findstreamreadignored.md)
  * **Find Stream.Read() return value ignored**
  * Detect `Stream.Read()` calls where the return value (bytes read) is not used. This can lead to incomplete reads.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindStringFormatConstant](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findstringformatconstant.md)
  * **Find non-constant string.Format format string**
  * Detect non-constant format strings passed to `string.Format`. Use a constant to prevent format string injection.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindTaskInUsing](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findtaskinusing.md)
  * **Find unawaited task in using statement**
  * Detect `using` statements where a Task is not awaited, which can cause premature disposal before the task completes.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindThreadStaticOnInstanceField](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findthreadstaticoninstancefield.md)
  * **Do not use ThreadStatic on instance fields**
  * `[ThreadStatic]` only works on static fields. Using it on instance fields has no effect.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindThrowIfNullWithNonNullable](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findthrowifnullwithnonnullable.md)
  * **Find ThrowIfNull with value type argument**
  * Detect `ArgumentNullException.ThrowIfNull` called with value type parameters that can never be null.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindTypeNameMatchesNamespace](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findtypenamematchesnamespace.md)
  * **Find type name matching namespace**
  * Detect type names that match their containing namespace, which can cause ambiguous references.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindTypeShouldNotExtendApplicationException](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findtypeshouldnotextendapplicationexception.md)
  * **Types should not extend ApplicationException**
  * Do not create custom exceptions that inherit from `ApplicationException`. Inherit from `Exception` or a more specific exception type.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseCallerArgumentExpression](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findusecallerargumentexpression.md)
  * **Find redundant nameof with CallerArgumentExpression**
  * Detect `nameof(param)` passed to parameters marked with `[CallerArgumentExpression]`. The attribute fills the value automatically.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseDateTimeOffsetInsteadOfDateTime](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findusedatetimeoffsetinsteadofdatetime.md)
  * **Find DateTime.Now/UtcNow usage**
  * Detect `DateTime.Now` and `DateTime.UtcNow` usage. Use `DateTimeOffset` instead for unambiguous time representation across time zones.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseDebuggerDisplayAttribute](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findusedebuggerdisplayattribute.md)
  * **Find ToString override without DebuggerDisplay**
  * Detect classes that override `ToString()` but lack `[DebuggerDisplay]` attribute for debugger integration.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseDefaultParameterValue](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findusedefaultparametervalue.md)
  * **Find [DefaultValue] on parameter**
  * Detect `[DefaultValue]` on method parameters. Use `[DefaultParameterValue]` instead, as `[DefaultValue]` is for component model metadata only.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseElementAccessInsteadOfLinq](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduseelementaccessinsteadoflinq.md)
  * **Find ElementAt() that could use indexer**
  * Detect LINQ `.ElementAt(index)` calls that could be replaced with direct indexer access `[index]`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseEqualsMethodInsteadOfOperator](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduseequalsmethodinsteadofoperator.md)
  * **Find == comparison that should use Equals()**
  * Detect `==` comparisons on reference types that override `Equals`. Using `==` may compare references instead of values.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseExplicitEnumValue](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduseexplicitenumvalue.md)
  * **Find integer 0 used instead of named enum value**
  * Detect usage of integer literal `0` where a named enum member should be used for clarity.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseFormatProviderInToString](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduseformatproviderintostring.md)
  * **Find Parse/ToString without IFormatProvider**
  * Detect calls to culture-sensitive methods like `int.Parse`, `double.Parse` without an explicit `IFormatProvider` or `CultureInfo`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseIFormatProvider](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduseiformatprovider.md)
  * **Find Parse/TryParse without IFormatProvider**
  * Detect `int.Parse(str)` and similar calls without an `IFormatProvider` parameter. Use `CultureInfo.InvariantCulture` for culture-independent parsing.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseLangwordInXmlComment](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduselangwordinxmlcomment.md)
  * **Find missing langword in XML comment**
  * Detect XML doc comments that reference `null`, `true`, `false` as plain text instead of using `&lt;see langword=&quot;...&quot;/&gt;`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseLazyInitializerEnsureInitialize](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduselazyinitializerensureinitialize.md)
  * **Find Interlocked.CompareExchange lazy init pattern**
  * Detect `Interlocked.CompareExchange(ref field, new T(), null)` pattern. Use `LazyInitializer.EnsureInitialized` for cleaner lazy initialization.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseListPatternMatching](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduselistpatternmatching.md)
  * **Find collection emptiness check**
  * Detect `.Length == 0` or `.Count == 0` checks that could use list patterns like `is []` in C# 11+.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseNamedParameter](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findusenamedparameter.md)
  * **Find boolean literal argument without name**
  * Detect boolean literal arguments (`true`/`false`) passed without named parameters. Named arguments improve readability.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseOperatingSystemMethods](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduseoperatingsystemmethods.md)
  * **Use OperatingSystem methods instead of RuntimeInformation**
  * Use `OperatingSystem.IsWindows()` and similar methods instead of `RuntimeInformation.IsOSPlatform()`. The OperatingSystem methods are more concise and can be optimized by the JIT.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseProcessStartWithStartInfo](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduseprocessstartwithstartinfo.md)
  * **Find Process.Start with string argument**
  * Detect `Process.Start(&quot;filename&quot;)` which should use the `ProcessStartInfo` overload for explicit control over `UseShellExecute` and other settings.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseRecordClassExplicitly](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduserecordclassexplicitly.md)
  * **Find implicit record class declaration**
  * Detect `record` declarations that should use `record class` explicitly to clarify that they are reference types.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseRegexOptions](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduseregexoptions.md)
  * **Find Regex without ExplicitCapture option**
  * Detect `new Regex()` or `Regex.IsMatch()` without `RegexOptions.ExplicitCapture`. Using this option avoids unnecessary unnamed captures.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseShellExecuteFalseWhenRedirecting](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduseshellexecutefalsewhenredirecting.md)
  * **Find redirect without UseShellExecute=false**
  * Detect `ProcessStartInfo` that sets `RedirectStandard*` without explicitly setting `UseShellExecute = false`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseShellExecuteNotSet](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduseshellexecutenotset.md)
  * **Find ProcessStartInfo without UseShellExecute**
  * Detect `new ProcessStartInfo()` without explicitly setting `UseShellExecute`. The default changed between .NET Framework (true) and .NET Core (false).
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseStringComparer](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findusestringcomparer.md)
  * **Find Dictionary/HashSet without StringComparer**
  * Detect `Dictionary&lt;string, T&gt;` or `HashSet&lt;string&gt;` created without an explicit `StringComparer`. Use `StringComparer.Ordinal` or `StringComparer.OrdinalIgnoreCase`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseStringCreateInsteadOfConcat](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findusestringcreateinsteadofconcat.md)
  * **Find FormattableString usage**
  * Detect `FormattableString` usage. Consider using `String.Create` on .NET 6+ for better performance.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseStringEqualsInsteadOfIsPattern](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findusestringequalsinsteadofispattern.md)
  * **Find 'is' pattern with string literal**
  * Detect `x is &quot;literal&quot;` patterns that should use `string.Equals` with explicit `StringComparison` for culture-aware or case-insensitive comparisons.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseSystemThreadingLock](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findusesystemthreadinglock.md)
  * **Use System.Threading.Lock instead of object for locking**
  * In .NET 9+, use `System.Threading.Lock` instead of `object` for lock objects. The dedicated Lock type provides better performance.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseTaskUnwrap](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findusetaskunwrap.md)
  * **Find double await pattern**
  * Detect `await await` pattern which can be replaced with `.Unwrap()` for clarity.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseTimeProviderInsteadOfCustom](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findusetimeproviderinsteadofcustom.md)
  * **Find custom time abstraction**
  * Detect interfaces or abstract classes that appear to be custom time providers. Use `System.TimeProvider` (available in .NET 8+) instead.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindValidateArgumentsBeforeYield](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findvalidateargumentsbeforeyield.md)
  * **Find argument validation in iterator method**
  * Detect iterator methods that validate arguments after `yield return`. Argument validation in iterators is deferred until enumeration begins.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.ImplementExceptionConstructors](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/implementexceptionconstructors.md)
  * **Implement exception constructors**
  * Ensure custom exception classes implement standard constructors.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.ImplementNonGenericCounterpart](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/implementnongenericcounterpart.md)
  * **Implement non-generic counterpart**
  * Implement non-generic interface when implementing generic counterpart.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.InvalidArgumentNullCheck](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/invalidargumentnullcheck.md)
  * **Fix invalid argument null check**
  * Fix invalid argument null check patterns.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.MakeClassSealed](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/makeclasssealed.md)
  * **Make class sealed**
  * A class that has only private constructors should be marked as sealed.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.MakeClassStatic](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/makeclassstatic.md)
  * **Make class static**
  * Make classes that contain only static members static.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.MakeFieldReadOnly](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/makefieldreadonly.md)
  * **Make field read-only**
  * Make field read-only when it is only assigned in the constructor or initializer.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.MakeMethodExtensionMethod](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/makemethodextensionmethod.md)
  * **Make method an extension method**
  * Convert a static method to an extension method where appropriate.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.MarkLocalVariableAsConst](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/marklocalvariableasconst.md)
  * **Mark local variable as const**
  * Mark local variable as const when its value never changes.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.MarkTypeWithDebuggerDisplay](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/marktypewithdebuggerdisplay.md)
  * **Mark type with DebuggerDisplay attribute**
  * Add DebuggerDisplay attribute to publicly visible types to improve debugging experience.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.MergePreprocessorDirectives](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/mergepreprocessordirectives.md)
  * **Merge preprocessor directives**
  * Merge consecutive preprocessor directives that can be combined into a single directive.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.NormalizeEnumFlagValue](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/normalizeenumflagvalue.md)
  * **Normalize format of enum flag value**
  * Normalize the format of Flags enum values.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.OrderModifiers](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/ordermodifiers.md)
  * **Order modifiers**
  * Reorder modifiers to the canonical C# order: access, new, abstract/virtual/override/sealed, static, readonly, extern, unsafe, volatile, async, partial, const.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.OrderNamedArguments](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/ordernamedarguments.md)
  * **Order named arguments by parameters**
  * Reorder named arguments to match parameter order.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.OrderTypeParameterConstraints](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/ordertypeparameterconstraints.md)
  * **Order type parameter constraints**
  * Order type parameter constraints consistently.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.OverridingMemberShouldNotChangeParams](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/overridingmembershouldnotchangeparams.md)
  * **Overriding member should not change 'params' modifier**
  * An overriding member should not add or remove the 'params' modifier compared to its base declaration.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.ParameterNameDiffersFromBase](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/parameternamediffersfrombase.md)
  * **Parameter name differs from base**
  * Rename parameter to match base class or interface definition.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.ParenthesizeNotPattern](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/parenthesizenotpattern.md)
  * **Parenthesize not pattern for clarity**
  * Add parentheses to `not A or B` → `(not A) or B` to clarify that `not` binds tighter than `or`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.PreferNullCheckOverTypeCheck](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/prefernullcheckovertypecheck.md)
  * **Prefer null check over type check**
  * Replace `x is object` with `x is not null` for clarity.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.SimplifyBooleanLogic](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/simplifybooleanlogic.md)
  * **Simplify boolean logic with constants**
  * Simplify `x || true` to `true`, `x &amp;&amp; false` to `false`, `x || false` to `x`, and `x &amp;&amp; true` to `x`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.SortEnumMembers](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/sortenummembers.md)
  * **Sort enum members**
  * Sort enum members by their resolved constant value.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.SplitVariableDeclaration](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/splitvariabledeclaration.md)
  * **Split variable declaration**
  * Split multi-variable declarations into separate declarations.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.StaticMemberInGenericType](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/staticmemberingenerictype.md)
  * **Static member in generic type should use a type parameter**
  * Find static members in generic types that do not use any of the type's type parameters.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.StyleCodeQuality](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/stylecodequality.md)
  * **Style code quality**
  * Code style modernization recipes for C#.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UnusedParameter](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/unusedparameter.md)
  * **Remove unused parameter**
  * Rename unused lambda parameters to discard (_).
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UnusedTypeParameter](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/unusedtypeparameter.md)
  * **Remove unused type parameter**
  * Flag type parameters that are not used.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseAsyncAwait](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/useasyncawait.md)
  * **Use async/await when necessary**
  * Add async/await to methods that return Task but don't use await.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseAttributeUsageAttribute](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/useattributeusageattribute.md)
  * **Use AttributeUsageAttribute**
  * Add AttributeUsage to custom attribute classes.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseAutoProperty](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/useautoproperty.md)
  * **Use auto property**
  * Use auto property instead of property with backing field.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseBlockBodyOrExpressionBody](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/useblockbodyorexpressionbody.md)
  * **Use block body or expression body**
  * Convert between block body and expression body for members.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseCoalesceExpressionFromNullCheck](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/usecoalesceexpressionfromnullcheck.md)
  * **Use coalesce expression**
  * Convert null-check conditional to null-coalescing expression.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseCollectionExpression](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/usecollectionexpression.md)
  * **Use collection expression**
  * Replace array/list creation with collection expressions (C# 12).
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseConstantInsteadOfField](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/useconstantinsteadoffield.md)
  * **Use constant instead of field**
  * Convert `static readonly` fields with literal initializers to `const`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseElementAccess](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/useelementaccess.md)
  * **Use element access**
  * Use indexer instead of First()/Last()/ElementAt() when the collection supports indexer access.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseEnumFieldExplicitly](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/useenumfieldexplicitly.md)
  * **Use enum field explicitly**
  * Use named enum field instead of cast integer value.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseEventArgsEmpty](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/useeventargsempty.md)
  * **Use EventArgs.Empty**
  * Replace `new EventArgs()` with `EventArgs.Empty`. The static `EventArgs.Empty` field avoids unnecessary allocations.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseEventArgsEmptyForNull](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/useeventargsemptyfornull.md)
  * **Use EventArgs.Empty instead of null**
  * Replace `null` with `EventArgs.Empty` when raising events. Passing `null` for EventArgs can cause NullReferenceException in event handlers.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseEventHandlerT](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/useeventhandlert.md)
  * **Use EventHandler&lt;T&gt;**
  * Use generic EventHandler&lt;T&gt; instead of custom delegate types.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseExplicitTypeInsteadOfVar](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/useexplicittypeinsteadofvar.md)
  * **Use explicit type instead of var**
  * Use explicit type instead of `var` when the type is not evident.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseExplicitlyTypedArray](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/useexplicitlytypedarray.md)
  * **Use explicitly typed array**
  * Use explicitly or implicitly typed array.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseFileScopedNamespace](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/usefilescopednamespace.md)
  * **Use file-scoped namespace**
  * Detect block-scoped namespace declarations that could use file-scoped syntax (C# 10).
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseMethodChaining](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/usemethodchaining.md)
  * **Use method chaining**
  * Chain consecutive method calls on the same receiver into a fluent chain.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseMethodGroupConversion](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/usemethodgroupconversion.md)
  * **Use method group conversion**
  * Replace `x =&gt; Foo(x)` with `Foo` where method group conversion applies.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UsePredefinedType](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/usepredefinedtype.md)
  * **Use predefined type**
  * Use predefined type keyword (e.g., int instead of Int32).
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UsePrimaryConstructor](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/useprimaryconstructor.md)
  * **Use primary constructor**
  * Convert classes with a single constructor into primary constructor syntax (C# 12).
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseReadOnlyAutoProperty](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/usereadonlyautoproperty.md)
  * **Use read-only auto property**
  * Use read-only auto property when the setter is never used.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseStringContains](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/usestringcontains.md)
  * **Use string.Contains instead of IndexOf comparison**
  * Replace `s.IndexOf(x) &gt;= 0` with `s.Contains(x)` and `s.IndexOf(x) == -1` with `!s.Contains(x)`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseStringIsNullOrEmpty](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/usestringisnullorempty.md)
  * **Use string.IsNullOrEmpty method**
  * Replace `s == null || s == &quot;&quot;` and `s == null || s.Length == 0` with `string.IsNullOrEmpty(s)`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseStringLengthComparison](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/usestringlengthcomparison.md)
  * **Use string.Length instead of comparison with empty string**
  * Replace `s == &quot;&quot;` with `s.Length == 0` and `s != &quot;&quot;` with `s.Length != 0`.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseThisForEventSender](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/usethisforeventsender.md)
  * **Use 'this' for event sender**
  * Replace `null` with `this` as the sender argument when raising instance events. The sender should be the object raising the event.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseUsingDeclaration](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/useusingdeclaration.md)
  * **Use using declaration**
  * Convert using statement to using declaration.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseVarInForEach](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/usevarinforeach.md)
  * **Use var instead of explicit type in foreach**
  * Replace explicit type in foreach with var when type is evident.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseVarOrExplicitType](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/usevarorexplicittype.md)
  * **Use 'var' or explicit type**
  * Enforce consistent use of 'var' or explicit type in local variable declarations.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.ValidateArgumentsCorrectly](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/validateargumentscorrectly.md)
  * **Validate arguments correctly**
  * Ensure argument validation in iterator methods runs immediately by flagging iterator methods that contain argument validation.
* [OpenRewrite.Recipes.CSharp.CodeQuality.Style.ValueTypeIsNeverEqualToNull](/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/valuetypeisneverequaltonull.md)
  * **Value type is never equal to null**
  * Replace null with default in comparisons of value types.

## recipes-kotlin

_License: Moderne Proprietary License_

_1011 recipes_

* [org.openrewrite.kotlin.android.Android$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/android$ktrecipe.md)
  * **Find Android smells**
  * Search-only Android recipe family covering the deprecated-API surface (Activity / Fragment / Handler / kotlinx.android.synthetic / parcel / Vibrator / registerReceiver), storage-layer footguns (`SharedPreferences.commit`, Room `@Query` shape, `ContentResolver.query`), lifecycle smells (`LiveData.observe(this, ...)`, public `MutableLiveData`), permissions/security (`requestPermissions`, `MODE_WORLD_*`), Android-specific performance (`findViewById` in `onDraw`, raw `BitmapFactory`, `Handler.postDelayed`, `runOnUiThread`), WebView smells (`loadUrl`, `setJavaScriptEnabled`), logging smells (`Log.*`, `System.out`), and modernization candidates (manual `Parcelable`/`Serializable`, RxJava, raw Dagger, manual `ViewModelProvider`, `ObjectAnimator`, `Runtime.exec`).
* [org.openrewrite.kotlin.android.FindAlertDialogBuilderConstructor$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findalertdialogbuilderconstructor$ktrecipe.md)
  * **Find `AlertDialog.Builder(this)` constructions**
  * `android.app.AlertDialog.Builder` does not pick up app-bar themes or Material styles. For consistent theming on AppCompat surfaces, use `androidx.appcompat.app.AlertDialog.Builder` (or `MaterialAlertDialogBuilder` for Material apps). Each match is worth a quick accessibility/theming review.
* [org.openrewrite.kotlin.android.FindAndroidLifecycleSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findandroidlifecyclesmells$ktrecipe.md)
  * **Find Android lifecycle / LiveData smells**
  * Lifecycle and observable-state patterns that leak across configuration changes or expose internal mutability: `LiveData.observe(this, ...)` inside fragments, `MutableLiveData.postValue` from main-thread contexts, public `MutableLiveData` properties, and raw `MutableLiveData` allocations.
* [org.openrewrite.kotlin.android.FindAndroidLogUsage$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findandroidlogusage$ktrecipe.md)
  * **Find `android.util.Log.v/d/i/w/e(...)` calls**
  * `android.util.Log` is a flat global logger with no routing, no structured fields, and no off-by-default for release builds. Migrate to Timber (per-tree fan-out, automatic tag detection) or AndroidX `androidx.tracing` for performance-trace integration. Each match is a candidate for the migration.
* [org.openrewrite.kotlin.android.FindAndroidLoggingSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findandroidloggingsmells$ktrecipe.md)
  * **Find Android logging smells**
  * Logging shapes that don't compose with structured logging: `android.util.Log.v/d/i/w/e` calls (flat global logger; prefer Timber or `androidx.tracing`) and `System.out.println` on Android (untagged logcat output).
* [org.openrewrite.kotlin.android.FindAndroidModernizationCandidates$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findandroidmodernizationcandidates$ktrecipe.md)
  * **Find Android modernization candidates**
  * Patterns that work but predate the modern Android toolchain: manual `Parcelable` (`@Parcelize`), `java.io.Serializable` on Android transports, RxJava imports (coroutines + Flow), `Dagger*Component.builder()` (Hilt), direct `ViewModelProvider` construction (`by viewModels()`), `ObjectAnimator` (Compose animation APIs), and `Runtime.exec` (audit for app-sandbox fit).
* [org.openrewrite.kotlin.android.FindAndroidPerformanceSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findandroidperformancesmells$ktrecipe.md)
  * **Find Android-specific performance smells**
  * Patterns that drop UI-thread frames or allocate at draw time: `findViewById` inside `onDraw`/`onMeasure`/`onLayout`, unbounded `BitmapFactory.decode*` (no `inSampleSize`), hand-rolled `Thread.start()` from UI components, `Handler.postDelayed` (no lifecycle), and pre-coroutine `runOnUiThread` / `View.post` dispatch.
* [org.openrewrite.kotlin.android.FindAndroidPermissionsSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findandroidpermissionssmells$ktrecipe.md)
  * **Find Android permissions / security smells**
  * Permission-handling patterns the platform has deprecated: direct `requestPermissions(...)` calls and `onRequestPermissionsResult` overrides (use `ActivityResultContracts.RequestPermission`), and `MODE_WORLD_READABLE` / `WORLD_WRITEABLE` (use `FileProvider`).
* [org.openrewrite.kotlin.android.FindAndroidStorageSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findandroidstoragesmells$ktrecipe.md)
  * **Find Android storage / data-layer smells**
  * Storage-tier patterns that block the main thread or sit on deprecated APIs: `SharedPreferences.Editor.commit()`, bare `prefs.edit()` calls, Room `@Query` methods returning synchronous results, `ContentResolver.query`, and Realm usage.
* [org.openrewrite.kotlin.android.FindAndroidViewModelInjection$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findandroidviewmodelinjection$ktrecipe.md)
  * **Find `ViewModelProvider(...)` direct constructions**
  * `ViewModelProvider(this).get(MyViewModel::class.java)` predates the `by viewModels()` / `by activityViewModels()` Kotlin property delegates. With Hilt, those delegates pick up the `@HiltViewModel` annotation — no factory plumbing needed at the call site.
* [org.openrewrite.kotlin.android.FindAndroidWebViewSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findandroidwebviewsmells$ktrecipe.md)
  * **Find Android WebView smells**
  * WebView call sites that need a security review: `WebView.loadUrl(...)` (URL trust boundary) and `WebSettings.setJavaScriptEnabled(true)` (script-execution trust boundary). For untrusted content, Chrome Custom Tabs (`CustomTabsIntent`) is the safer alternative.
* [org.openrewrite.kotlin.android.FindAsyncTask$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findasynctask$ktrecipe.md)
  * **Find `AsyncTask` instantiations**
  * `AsyncTask` was deprecated in API 30. The Kotlin replacement is `viewModelScope.launch \{ withContext(Dispatchers.IO) \{ … \} \}` or another coroutine-aware framework. Each match is a candidate for migration.
* [org.openrewrite.kotlin.android.FindAsyncTaskExecute$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findasynctaskexecute$ktrecipe.md)
  * **Find `AsyncTask.execute` / `executeOnExecutor` calls**
  * Beyond `AsyncTask` instantiation, the `execute`/`executeOnExecutor` call sites are the place the background work actually starts. Migration to `viewModelScope.launch \{ withContext(Dispatchers.IO) \{ … \} \}` happens at the call site, not the declaration — flag both.
* [org.openrewrite.kotlin.android.FindBareHandlerConstructor$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findbarehandlerconstructor$ktrecipe.md)
  * **Find `Handler()` constructor calls without an explicit `Looper`**
  * The zero-arg `Handler` constructor was deprecated in API 30 because it implicitly captures the current thread's looper — a footgun when called from a background thread. Always pass an explicit `Looper`, e.g. `Handler(Looper.getMainLooper())`.
* [org.openrewrite.kotlin.android.FindBitmapFactoryDecode$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findbitmapfactorydecode$ktrecipe.md)
  * **Find `BitmapFactory.decode*` calls**
  * `BitmapFactory.decode*` without an explicit `BitmapFactory.Options.inSampleSize` allocates the bitmap at full source resolution. For UI use, downsample via `inSampleSize` (or move the entire concern to Coil/Glide, which handle pooling, lifecycle, and downsampling for you).
* [org.openrewrite.kotlin.android.FindContentResolverQuery$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findcontentresolverquery$ktrecipe.md)
  * **Find `ContentResolver.query(...)` calls**
  * `ContentResolver.query(...)` blocks the calling thread for the full lifetime of the underlying IPC and cursor walk. Wrap the call in `withContext(Dispatchers.IO) \{ … \}`, expose it as a `Flow` (`contentResolver.observe(uri)`-style), or move to a Room `@Query` if the data is backed by SQLite.
* [org.openrewrite.kotlin.android.FindContextRegisterReceiver$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findcontextregisterreceiver$ktrecipe.md)
  * **Find `Context.registerReceiver(...)` calls**
  * On API 33+ `registerReceiver(...)` requires an explicit `RECEIVER_EXPORTED` / `RECEIVER_NOT_EXPORTED` flag — calls without it throw `SecurityException`. Migrate to `ContextCompat.registerReceiver(...)`, which forwards the flag and is backwards-compatible.
* [org.openrewrite.kotlin.android.FindDeprecatedAndroidApis$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/finddeprecatedandroidapis$ktrecipe.md)
  * **Find deprecated Android APIs**
  * Search-only bundle that flags Android APIs the platform has deprecated or removed: `findViewById`, `AsyncTask`, the single-arg `getColor`/`getDrawable`/`getColorStateList` resource getters, the zero-arg `Handler()` constructor, `kotlinx.android.synthetic` imports, the moved `kotlinx.android.parcel.Parcelize` import, `startActivityForResult`/`onActivityResult`/`requestPermissions`, `LocalBroadcastManager`, deprecated `Fragment` lifecycle methods, `Resources.getDrawable` / `getColor`, `startService`, `PreferenceManager`, `Vibrator.vibrate(long)`, `Context.registerReceiver` without flags, and `MutableLiveData` allocations.
* [org.openrewrite.kotlin.android.FindDeprecatedParcelizeImport$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/finddeprecatedparcelizeimport$ktrecipe.md)
  * **Find `kotlinx.android.parcel` imports**
  * The `kotlinx.android.parcel` package was moved to `kotlinx.parcelize` in 2020 when the standalone Parcelize plugin shipped. Replace the import and the Gradle plugin coordinate.
* [org.openrewrite.kotlin.android.FindDeprecatedResourceGetters$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/finddeprecatedresourcegetters$ktrecipe.md)
  * **Find deprecated `Context.getColor`/`getDrawable`/`getColorStateList` calls**
  * The single-argument forms on `Context`/`Resources` are deprecated — they don't take a theme and behave inconsistently across API levels. Use `ContextCompat.getColor(context, id)`/`ContextCompat.getDrawable(context, id)`/`AppCompatResources.getColorStateList(context, id)` instead.
* [org.openrewrite.kotlin.android.FindFindViewById$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findfindviewbyid$ktrecipe.md)
  * **Find `findViewById` call sites**
  * `findViewById` is the legacy view-lookup API. Modern Android uses ViewBinding (auto-generated `Binding` classes per layout) which is type-safe, null-safe, and avoids the per-call HashMap walk. Each match is a candidate for migration.
* [org.openrewrite.kotlin.android.FindFindViewByIdInHotPath$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findfindviewbyidinhotpath$ktrecipe.md)
  * **Find `findViewById` inside `onDraw` / `onMeasure` / `onLayout`**
  * View tree-walking inside the draw/measure/layout pass costs frame budget on every pass. Cache the lookup once (in `onFinishInflate` or a `lateinit` initialized when the view attaches), or — better — migrate to ViewBinding so the cache is generated.
* [org.openrewrite.kotlin.android.FindFragmentManagerExecutePendingTransactions$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findfragmentmanagerexecutependingtransactions$ktrecipe.md)
  * **Find `FragmentManager.executePendingTransactions()` calls**
  * `executePendingTransactions()` forces synchronous fragment-transaction execution on the calling thread — usually a workaround for code that races a not-yet-attached fragment. Prefer `commitNow()`/`commitNowAllowingStateLoss()` at the call site that scheduled the transaction, or restructure the call to read state from the resulting fragment's `onViewCreated`.
* [org.openrewrite.kotlin.android.FindFragmentOnActivityCreated$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findfragmentonactivitycreated$ktrecipe.md)
  * **Find `Fragment.onActivityCreated` overrides**
  * `Fragment.onActivityCreated(Bundle)` was deprecated in Fragment 1.3 because the host-activity lifecycle is no longer a reliable signal for fragment readiness. Move the work to `onViewCreated` (view-state setup) or to a `LifecycleObserver` on `viewLifecycleOwner` (cross-component coordination).
* [org.openrewrite.kotlin.android.FindFragmentOnAttachActivity$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findfragmentonattachactivity$ktrecipe.md)
  * **Find `Fragment.onAttach(Activity)` overrides**
  * The `onAttach(Activity)` overload was deprecated in API 23 — use `onAttach(Context)` instead. The `Context` parameter is the activity for activity-hosted fragments and the application context for headless cases, and works on devices where the parent is not an activity.
* [org.openrewrite.kotlin.android.FindFragmentSetRetainInstance$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findfragmentsetretaininstance$ktrecipe.md)
  * **Find `Fragment.setRetainInstance(true)` calls**
  * `Fragment.setRetainInstance(true)` was deprecated in Fragment 1.3 because retained fragments break process-death restoration and tangle the lifecycle owner with the host activity. Move retained state to a `ViewModel` scoped to the navigation host.
* [org.openrewrite.kotlin.android.FindHandlerPostDelayed$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findhandlerpostdelayed$ktrecipe.md)
  * **Find `Handler.postDelayed(...)` calls**
  * `Handler.postDelayed(runnable, ms)` schedules main-thread work without a story for cancellation — the canonical bug is the activity dying while the runnable is still scheduled, then running with a stale view reference. Use `lifecycleScope.launch \{ delay(ms); … \}` instead: cancellation is automatic on lifecycle teardown.
* [org.openrewrite.kotlin.android.FindIntentActionGetContent$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findintentactiongetcontent$ktrecipe.md)
  * **Find legacy `Intent.ACTION_PICK` / `ACTION_GET_CONTENT` references**
  * `ACTION_PICK` / `ACTION_GET_CONTENT` predate the Photo Picker (`ACTION_PICK_IMAGES`, API 33+ with backport) and the Storage Access Framework (`ACTION_OPEN_DOCUMENT`). For media, prefer `ActivityResultContracts.PickVisualMedia`; for documents, `OpenDocument`.
* [org.openrewrite.kotlin.android.FindKotlinAndroidSyntheticImports$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findkotlinandroidsyntheticimports$ktrecipe.md)
  * **Find `kotlinx.android.synthetic.*` imports**
  * The Kotlin Android Extensions synthetic-view plugin was deprecated in 1.4.20 and removed entirely in later AGP versions. Migrate the call sites to ViewBinding. Each reference here corresponds to a usage that won't compile without the (removed) plugin.
* [org.openrewrite.kotlin.android.FindLifecycleObserveLiveData$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findlifecycleobservelivedata$ktrecipe.md)
  * **Find `LiveData.observe(this, observer)` calls inside `Fragment`**
  * Inside a `Fragment`, `liveData.observe(this, observer)` ties the subscription to the fragment's lifecycle — which outlives the view across `onDestroyView`/`onCreateView` recreation and produces dangling references to a destroyed view. Use `viewLifecycleOwner` instead.
* [org.openrewrite.kotlin.android.FindLiveDataPostValueFromMain$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findlivedatapostvaluefrommain$ktrecipe.md)
  * **Find `MutableLiveData.postValue(...)` calls inside coroutine main-thread contexts**
  * `postValue` exists for background-thread updaters — it marshals through the main looper and coalesces consecutive updates. When called from a place that already runs on the main thread (UI callbacks, view-model initialization, `Dispatchers.Main` blocks), the coalescing is a footgun: intermediate values silently drop. Use `setValue`/`.value =` on the main thread, `postValue` only from background threads.
* [org.openrewrite.kotlin.android.FindLocalBroadcastManager$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findlocalbroadcastmanager$ktrecipe.md)
  * **Find `LocalBroadcastManager.getInstance(...)` usage**
  * `LocalBroadcastManager` was deprecated in AndroidX 1.1 — the project effectively documents it as a global event bus, with all the ordering and lifetime trouble that implies. Migrate to `LiveData`, `StateFlow`, or `SharedFlow` for in-process pub/sub.
* [org.openrewrite.kotlin.android.FindManualDaggerProvision$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findmanualdaggerprovision$ktrecipe.md)
  * **Find `Dagger*Component.builder().build()` patterns**
  * Calls of the form `DaggerXComponent.builder().build()` indicate the application is composing its dependency graph by hand. Hilt (`@HiltAndroidApp` / `@AndroidEntryPoint`) generates the same graph automatically and integrates with Compose, ViewModel, and WorkManager out of the box.
* [org.openrewrite.kotlin.android.FindManualThreadingInActivity$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findmanualthreadinginactivity$ktrecipe.md)
  * **Find `Thread \{ \}.start()` calls inside `Activity` / `Fragment`**
  * Hand-rolled `Thread \{ … \}.start()` inside a UI component leaks across configuration changes (the thread outlives the activity) and has no story for cancellation. Migrate to `lifecycleScope.launch(Dispatchers.IO) \{ … \}` or `viewModelScope.launch \{ … \}` — both cancel when the lifecycle ends.
* [org.openrewrite.kotlin.android.FindModeWorldReadable$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findmodeworldreadable$ktrecipe.md)
  * **Find `MODE_WORLD_READABLE` / `MODE_WORLD_WRITEABLE` references**
  * Both constants were deprecated in API 17 — they grant any app on the device read or write access to the file. Use a `FileProvider` to share content URIs, or scope the file via `Context.getFilesDir()` and expose it through your own content provider with explicit permissions.
* [org.openrewrite.kotlin.android.FindMutableLiveDataAllocation$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findmutablelivedataallocation$ktrecipe.md)
  * **Find `MutableLiveData` allocations**
  * In Kotlin Android code, `MutableStateFlow&lt;T&gt;` is the modern equivalent. It integrates with structured concurrency, exposes the current value synchronously, and composes cleanly with Compose's `collectAsState`/`collectAsStateWithLifecycle`. Each `MutableLiveData()` here is a candidate for migration.
* [org.openrewrite.kotlin.android.FindObjectAnimator$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findobjectanimator$ktrecipe.md)
  * **Find `ObjectAnimator.ofInt/ofFloat(...)` calls**
  * Direct `ObjectAnimator` use is a candidate for review — for Compose UIs the idiomatic replacement is `animate*AsState` / `Animatable`, which integrate with recomposition and cancellation. For view-system code, `SpringAnimation`/`PhysicsAnimation` cover more interaction shapes than the time-based `ObjectAnimator`.
* [org.openrewrite.kotlin.android.FindOnActivityResultOverride$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findonactivityresultoverride$ktrecipe.md)
  * **Find `onActivityResult` overrides**
  * Every override of `Activity.onActivityResult` / `Fragment.onActivityResult` is half of the deprecated `startActivityForResult` pair. The new Activity Result APIs (`registerForActivityResult(ActivityResultContracts.X) \{ … \}`) deliver results to a lambda colocated with the launcher — the override goes away.
* [org.openrewrite.kotlin.android.FindOnRequestPermissionsResultOverride$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findonrequestpermissionsresultoverride$ktrecipe.md)
  * **Find `onRequestPermissionsResult` overrides**
  * Override of `Activity.onRequestPermissionsResult` / `Fragment.onRequestPermissionsResult` — the result-callback half of the deprecated `requestPermissions(...)` pair. Replace with a `registerForActivityResult(ActivityResultContracts.RequestPermission)` lambda.
* [org.openrewrite.kotlin.android.FindParcelableJavaImpl$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findparcelablejavaimpl$ktrecipe.md)
  * **Find Kotlin classes implementing `Parcelable` without `@Parcelize`**
  * Manual `writeToParcel` / `CREATOR` implementations are pure boilerplate that the `kotlin-parcelize` plugin generates for any class annotated `@Parcelize`. Each manual implementation is a candidate for migration to the annotation.
* [org.openrewrite.kotlin.android.FindPreferenceManagerGetDefaultSharedPreferences$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findpreferencemanagergetdefaultsharedpreferences$ktrecipe.md)
  * **Find `PreferenceManager.getDefaultSharedPreferences(...)` calls**
  * `android.preference.*` (framework) was deprecated in API 29. AndroidX `androidx.preference.*` is the supported path, and even there the modern shape for KV state is Jetpack DataStore (`Preferences DataStore` for key/value, `Proto DataStore` for typed records) — which works in `suspend` contexts and survives process death without main-thread blocking.
* [org.openrewrite.kotlin.android.FindPreferenceManagerImport$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findpreferencemanagerimport$ktrecipe.md)
  * **Find `android.preference.PreferenceManager` imports**
  * The framework `android.preference.*` package was deprecated in API 29. Move to `androidx.preference.*` (drop-in replacement) or, for KV state, Jetpack DataStore — which composes with coroutines and `Flow` instead of running on the main thread.
* [org.openrewrite.kotlin.android.FindPublicMutableLiveDataProperty$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findpublicmutablelivedataproperty$ktrecipe.md)
  * **Find public `MutableLiveData` properties**
  * Exposing `MutableLiveData&lt;T&gt;` (or `MutableStateFlow&lt;T&gt;`) to observers lets them mutate the model from the consumer side. The convention is to keep the mutable handle `private` and expose a read-only `LiveData&lt;T&gt;` / `StateFlow&lt;T&gt;` getter, so the owner is the only one that can publish updates.
* [org.openrewrite.kotlin.android.FindRealmUsage$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findrealmusage$ktrecipe.md)
  * **Find `Realm.getDefaultInstance()` calls**
  * Realm Java/Kotlin is in maintenance and was effectively superseded by Realm Kotlin (`io.realm.kotlin`) and ultimately by MongoDB Atlas Device SDKs. Each `Realm.getDefaultInstance()` is a candidate for migration to Room + DataStore, or to the modern Realm Kotlin SDK.
* [org.openrewrite.kotlin.android.FindRequestPermissions$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findrequestpermissions$ktrecipe.md)
  * **Find direct `requestPermissions(...)` calls**
  * Calling `requestPermissions(...)` directly couples the request to a screen and a request code that has to be matched in `onRequestPermissionsResult`. The modern shape is `registerForActivityResult(ActivityResultContracts.RequestPermission()) \{ granted -&gt; … \}` — the result lands in a lambda next to the launcher.
* [org.openrewrite.kotlin.android.FindResourcesGetColor$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findresourcesgetcolor$ktrecipe.md)
  * **Find `resources.getColor(...)` (one-arg) calls**
  * `Resources.getColor(int)` was deprecated in API 23 — it doesn't take a theme. Replace with `ContextCompat.getColor(context, id)`, which threads the theme through and respects `?attr` references.
* [org.openrewrite.kotlin.android.FindResourcesGetDrawable$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findresourcesgetdrawable$ktrecipe.md)
  * **Find `resources.getDrawable(...)` (one-arg) calls**
  * `Resources.getDrawable(int)` was deprecated in API 22 — it doesn't take a theme. Replace with `ResourcesCompat.getDrawable(resources, id, theme)` to render themed drawables consistently across API levels.
* [org.openrewrite.kotlin.android.FindRoomQueryWithoutLiveDataOrFlow$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findroomquerywithoutlivedataorflow$ktrecipe.md)
  * **Find `@Query` DAO methods returning a synchronous result**
  * A non-suspend `@Query` returning `List&lt;X&gt;`, `X?`, or a scalar runs the DB query on the calling thread — by default Room throws `IllegalStateException` if that's the main thread. Mark the function `suspend` (single-shot) or return `Flow&lt;...&gt;` / `LiveData&lt;...&gt;` (observable) so Room can dispatch the query off the main thread.
* [org.openrewrite.kotlin.android.FindRunOnUiThread$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findrunonuithread$ktrecipe.md)
  * **Find `Activity.runOnUiThread \{ \}` / `View.post \{ \}` calls**
  * Hand-rolled main-thread dispatch (`runOnUiThread`, `view.post`) was the pre-coroutine pattern for crossing thread boundaries from a background worker. In Kotlin, prefer `withContext(Dispatchers.Main) \{ … \}` — it composes with structured cancellation and surfaces in the call site's coroutine context.
* [org.openrewrite.kotlin.android.FindRuntimeExecInAndroid$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findruntimeexecinandroid$ktrecipe.md)
  * **Find `Runtime.exec(...)` / `ProcessBuilder.start()` calls**
  * Forking a process from an Android app is almost never the right shape — the system imposes strict app-sandbox limits (no `su`, no arbitrary binaries) and process lifetime is unrelated to the activity that spawned it. Audit each call site against `WorkManager`, foreground services, or — if you genuinely need shell tools — `java.lang.ProcessBuilder` with explicit lifecycle management.
* [org.openrewrite.kotlin.android.FindRxJavaImports$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findrxjavaimports$ktrecipe.md)
  * **Find `io.reactivex.*` imports**
  * RxJava is in maintenance and Kotlin's idiomatic story is coroutines + `Flow`. Each import is a candidate for migration to `kotlinx.coroutines.flow.*` (or, at the boundary, `kotlinx-coroutines-rx3`/`kotlinx-coroutines-rx2` adapters during incremental migration).
* [org.openrewrite.kotlin.android.FindSerializableUsage$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findserializableusage$ktrecipe.md)
  * **Find Kotlin classes implementing `java.io.Serializable`**
  * `java.io.Serializable` is reflection-based and slow on Android — it allocates substantially more than `Parcelable` and pulls in field-by-field reflection at deserialize time. For inter-component transport, prefer `@Parcelize` (`kotlin-parcelize`) or `kotlinx.serialization`.
* [org.openrewrite.kotlin.android.FindSharedPreferencesCommit$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findsharedpreferencescommit$ktrecipe.md)
  * **Find `SharedPreferences.Editor.commit()` calls**
  * `commit()` writes to disk on the calling thread (often the main thread, where it can drop a frame). `apply()` writes asynchronously and atomically, returning immediately — use it unless you specifically need the boolean result on the spot.
* [org.openrewrite.kotlin.android.FindSharedPreferencesEdit$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findsharedpreferencesedit$ktrecipe.md)
  * **Find `sharedPrefs.edit()` calls**
  * Raw `edit()` calls predate AndroidX `SharedPreferences.edit \{ … \}`, the Kotlin extension that handles `apply`/`commit` for the caller. Replace each `prefs.edit().put*(...).apply()` chain with `prefs.edit \{ put*(...) \}` — same disk write, less ceremony, and harder to drop the apply by accident.
* [org.openrewrite.kotlin.android.FindStartActivityForResult$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findstartactivityforresult$ktrecipe.md)
  * **Find `startActivityForResult` calls**
  * `startActivityForResult` was deprecated in AndroidX Activity 1.2 / Fragment 1.3 in favor of the Activity Result APIs (`registerForActivityResult(ActivityResultContracts.X) \{ result -&gt; … \}`). The new API survives process death, decouples the launcher from the lifecycle owner, and removes the per-screen `onActivityResult` switch.
* [org.openrewrite.kotlin.android.FindStartService$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findstartservice$ktrecipe.md)
  * **Find `startService(...)` calls**
  * On API 26+ background apps cannot call `startService(...)` — the system throws `IllegalStateException`. For services that must run while the app is backgrounded, call `ContextCompat.startForegroundService(context, intent)` and post a notification within five seconds. For one-shot work, use `WorkManager` instead.
* [org.openrewrite.kotlin.android.FindSystemOutInAndroid$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findsystemoutinandroid$ktrecipe.md)
  * **Find `System.out.println(...)` calls**
  * `System.out` on Android writes to logcat under a default tag that's easy to lose. Use `Log.d`/`Log.i` for tagged output (or, better, Timber) — both route through Android's logging pipeline with filterable tags.
* [org.openrewrite.kotlin.android.FindVibratorVibrateLong$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findvibratorvibratelong$ktrecipe.md)
  * **Find `Vibrator.vibrate(long)` (one-arg) calls**
  * The single-`long` `Vibrator.vibrate(ms)` was deprecated in API 26. Use `Vibrator.vibrate(VibrationEffect.createOneShot(...))` (or `VibratorManager` on API 31+) — both let the platform pick the appropriate amplitude.
* [org.openrewrite.kotlin.android.FindWebViewJavaScriptEnabled$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findwebviewjavascriptenabled$ktrecipe.md)
  * **Find `WebSettings.setJavaScriptEnabled(true)` calls**
  * Enabling JavaScript in a WebView lets the loaded page run arbitrary script in your app's context. For first-party content this is often fine; for any third-party content it's a critical security boundary. Each match is worth reviewing alongside the trust model of the loaded URLs.
* [org.openrewrite.kotlin.android.FindWebViewLoadUrl$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/android/findwebviewloadurl$ktrecipe.md)
  * **Find `WebView.loadUrl(...)` calls**
  * Each `WebView.loadUrl(...)` is worth a security review: arbitrary http://-scheme URLs bypass the system browser and inherit the WebView's privileges (cookies, JS bridges). For untrusted content prefer `CustomTabsIntent` (Chrome Custom Tabs) — better security, better UX, no JS bridge.
* [org.openrewrite.kotlin.bestpractices.BestPractices$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/bestpractices$ktrecipe.md)
  * **Apply Kotlin best-practice idioms**
  * Opinionated bundle of every best-practice recipe in this module: collection / string round-trip collapses, stdlib accessor swaps, and a broad set of search-only flags covering class structure, function declarations, string construction, Boolean conditionals, lambdas, and exception handling. For diff-only output, use `ImproveKotlinBestPractices` instead.
* [org.openrewrite.kotlin.bestpractices.CollapseRedundantConversions$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/collapseredundantconversions$ktrecipe.md)
  * **Collapse redundant collection / string conversions**
  * Drops needless `toList()`/`toMutableList()`/`toSet()`/`toTypedArray()` round-trips and `trimStart().trimEnd()`-style chains that allocate one or more intermediate copies. The replacement performs the same conversion in one pass.
* [org.openrewrite.kotlin.bestpractices.FindAbstractClassWithoutMembers$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findabstractclasswithoutmembers$ktrecipe.md)
  * **Find `abstract class` declarations without abstract members**
  * An `abstract class` with no abstract members and no state offers nothing over `interface` — and `interface` composes better (multiple inheritance, no constructor coupling). If the class is being used as a marker, consider `sealed interface` for stronger exhaustiveness checks.
* [org.openrewrite.kotlin.bestpractices.FindAlsoPrintln$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findalsoprintln$ktrecipe.md)
  * **Find `.also \{ println(it) \}` debug patterns**
  * `.also \{ println(it) \}` is a side-channel print left over from debugging. It survives compilation, runs in production, and is invisible at the call site — remove it or route the value through a logger.
* [org.openrewrite.kotlin.bestpractices.FindAlsoWithEmptyBody$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findalsowithemptybody$ktrecipe.md)
  * **Find `x.also \{ \}` calls with an empty body**
  * `x.also \{ \}` with an empty block is a no-op that returns `x`. Drop the call — it adds an allocation for the captured lambda and obscures the value flow.
* [org.openrewrite.kotlin.bestpractices.FindAnonymousObjectSingleMethod$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findanonymousobjectsinglemethod$ktrecipe.md)
  * **Find anonymous `object : Interface \{ override fun … \}` with a single override**
  * An anonymous object that implements one interface with a single function override is the canonical SAM-conversion target. If the interface is declared `fun interface I \{ … \}`, the call site collapses to a lambda.
* [org.openrewrite.kotlin.bestpractices.FindBareExceptionThrow$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findbareexceptionthrow$ktrecipe.md)
  * **Find `throw Exception(&quot;…&quot;)` calls**
  * Throwing bare `Exception` (or `RuntimeException`) loses information that a more specific type would carry. Prefer `IllegalArgumentException` (bad input), `IllegalStateException` (object in wrong state), or a domain-specific subclass.
* [org.openrewrite.kotlin.bestpractices.FindBareRuntimeExceptionThrow$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findbareruntimeexceptionthrow$ktrecipe.md)
  * **Find `throw RuntimeException(&quot;…&quot;)` calls**
  * Same family as `throw Exception(&quot;...&quot;)` — flag for replacement with `IllegalArgumentException`/`IllegalStateException`/domain-specific subclass.
* [org.openrewrite.kotlin.bestpractices.FindBestPracticeCandidates$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findbestpracticecandidates$ktrecipe.md)
  * **Find best-practice candidates**
  * Search-only bundle: flags places where a more idiomatic Kotlin spelling is available. Each match shows up as a `SearchResult` for review; nothing is rewritten automatically because the migration is a judgment call.
* [org.openrewrite.kotlin.bestpractices.FindBooleanConditionalSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findbooleanconditionalsmells$ktrecipe.md)
  * **Find Boolean-conditional smells**
  * `if (x) true else false`, its inverse, `!x.isEmpty()` / `!x.isBlank()` family negations, `if (x == null) null else x.foo()`, `if (x != null) x.foo()` patterns, and `if (return …) else …` early-return ladders — each is the long form of a single Kotlin operator or method.
* [org.openrewrite.kotlin.bestpractices.FindBooleanLiteralReturnType$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findbooleanliteralreturntype$ktrecipe.md)
  * **Find `fun f(): Boolean = true|false` literal-returning functions**
  * A function whose body is literally `true` or `false` is rarely the right shape — either the predicate was a stub left in by mistake, or the value is genuinely constant and should be a `const val`. Either way, surface the call site for human review.
* [org.openrewrite.kotlin.bestpractices.FindCatchReturningNull$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findcatchreturningnull$ktrecipe.md)
  * **Find `try \{ … \} catch (e: Exception) \{ null \}` patterns**
  * Swallowing every exception into `null` discards diagnostic information and conflates 'no value' with 'I lost the cause'. `runCatching \{ \}` returns a `Result&lt;T&gt;` whose `getOrNull()` matches this shape, and `onFailure \{ \}` keeps a hook for diagnostics.
* [org.openrewrite.kotlin.bestpractices.FindClassExtendsAny$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findclassextendsany$ktrecipe.md)
  * **Find `class Foo : Any()` declarations**
  * Every class implicitly extends `Any` — writing it explicitly only adds noise and a redundant supertype clause.
* [org.openrewrite.kotlin.bestpractices.FindClassStructureSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findclassstructuresmells$ktrecipe.md)
  * **Find class-declaration smells**
  * Search-only bundle: flags class-level structural smells (empty companion, empty class body, redundant `: Any()`, manual `toString`/`equals`/`hashCode` trio, named companion of constants, multiple secondary constructors, sealed-class-without-state, marker-object-without-data, empty init, all-val classes that could be `data class`, mutable `data class`/object state, abstract classes without abstract members, and `open` classes with no overridable members).
* [org.openrewrite.kotlin.bestpractices.FindClassWithoutDataAnnotation$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findclasswithoutdataannotation$ktrecipe.md)
  * **Find classes that could be `data class`**
  * A class whose only members are `val` constructor parameters — no methods, no init, no extra properties — is the canonical shape `data class` exists for. Adding `data` synthesizes `toString`/`equals`/`hashCode`/`copy`/`componentN` without changing any other semantics.
* [org.openrewrite.kotlin.bestpractices.FindCompareToInsteadOfOperator$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findcomparetoinsteadofoperator$ktrecipe.md)
  * **Find `x.compareTo(y) &lt;op&gt; 0` patterns**
  * `x.compareTo(y) &gt; 0` is the long form of `x &gt; y` for any `Comparable&lt;T&gt;` — and `&gt;`/`&lt;`/`&gt;=`/`&lt;=` are defined on `Comparable` to use exactly that call. The operator form reads as the comparison it is, and the bytecode emitted is identical.
* [org.openrewrite.kotlin.bestpractices.FindDataClassWithMutableProperty$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/finddataclasswithmutableproperty$ktrecipe.md)
  * **Find `data class` declarations with `var` properties**
  * `data class` generates `equals` and `hashCode` over the primary-constructor properties. Mutating a `var` property after the instance is stored in a hash-based collection breaks the invariant — the entry can no longer be found by lookup. Prefer `val`; if mutation is needed, model it through `copy(...)`.
* [org.openrewrite.kotlin.bestpractices.FindDataObjectCandidates$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/finddataobjectcandidates$ktrecipe.md)
  * **Find marker `object` declarations that could be `data object`**
  * A bare `object Foo` declaration with no body inherits `Any.toString()`, which prints as `Foo$Companion@&lt;hash&gt;`-style identity strings. `data object Foo` (Kotlin 1.9+) generates a readable `toString` (`&quot;Foo&quot;`), `equals` (identity), and `hashCode` — preferred for marker singletons used in `when` exhaustiveness checks and serialization.
* [org.openrewrite.kotlin.bestpractices.FindDoubleBangChain$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/finddoublebangchain$ktrecipe.md)
  * **Find chained `!!` assertions in a single expression**
  * `x!!.y!!.z` chains multiple `!!` assertions in one expression. Each one is a separate NPE risk with no diagnostic. Either the intermediate values are non-null (and the assertions can be dropped) or the chain should be modeled with `?.let \{ \}` to surface the absent case explicitly.
* [org.openrewrite.kotlin.bestpractices.FindElseAfterReturn$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findelseafterreturn$ktrecipe.md)
  * **Find `if (x) \{ return … \} else \{ … \}` patterns**
  * When the `if` branch returns, the `else` is unreachable as a fall-through guard — the body after the `else` can be moved out of the `else` block, which makes the early-return shape obvious to readers.
* [org.openrewrite.kotlin.bestpractices.FindEmptyClassBody$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findemptyclassbody$ktrecipe.md)
  * **Find `class Foo \{\}` declarations with an empty body**
  * An empty class body `\{\}` adds no information. Kotlin allows the body to be omitted entirely: `class Foo` is the same declaration without the redundant braces.
* [org.openrewrite.kotlin.bestpractices.FindEmptyCompanionObject$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findemptycompanionobject$ktrecipe.md)
  * **Find empty `companion object` declarations**
  * A `companion object \{\}` with no members generates a synthetic `Companion` holder class that's never used. Remove it — Kotlin doesn't require an empty companion object for any feature.
* [org.openrewrite.kotlin.bestpractices.FindEmptyInitBlock$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findemptyinitblock$ktrecipe.md)
  * **Find empty `init \{ \}` blocks**
  * An empty `init \{\}` block is a no-op. Remove it — every empty initializer is a place a future reader pauses before noticing it does nothing.
* [org.openrewrite.kotlin.bestpractices.FindEqualitySmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findequalitysmells$ktrecipe.md)
  * **Find equality / comparison smells**
  * `===` / `!==` referential checks (usually `==` is meant), `x == true|false` longhand for Boolean, and `x.compareTo(y) &gt; 0` calls that should use the comparison operator directly.
* [org.openrewrite.kotlin.bestpractices.FindEqualsToBooleanLiteral$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findequalstobooleanliteral$ktrecipe.md)
  * **Find `b == true` / `b == false` comparisons**
  * When `b` is `Boolean`, `b == true` is just `b` and `b == false` is `!b`. The longhand only obscures intent. For `Boolean?` the longhand is meaningful — it returns `false` for `null` rather than failing on `!!` — so leave those alone; flag only the comparison and let the reviewer decide.
* [org.openrewrite.kotlin.bestpractices.FindExceptionHandlingSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findexceptionhandlingsmells$ktrecipe.md)
  * **Find exception-handling smells**
  * `Throwable.printStackTrace()` (bypasses the logger), bare `throw Exception(&quot;…&quot;)` / `throw RuntimeException(&quot;…&quot;)` allocations (lose type information), and `try \{ \} catch (e: Exception) \{ null \}` patterns (collapsible to `runCatching \{ \}.getOrNull()`).
* [org.openrewrite.kotlin.bestpractices.FindExplicitUnitReturnType$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findexplicitunitreturntype$ktrecipe.md)
  * **Find functions with explicit `: Unit` return type**
  * Kotlin functions that don't declare a return type return `Unit` by convention. Writing `: Unit` explicitly adds noise — drop it unless the explicit form aids a generated API surface (e.g. `@JvmOverloads`).
* [org.openrewrite.kotlin.bestpractices.FindForEachAddCandidate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findforeachaddcandidate$ktrecipe.md)
  * **Find `xs.forEach \{ ys.add(it) \}` patterns**
  * `xs.forEach \{ ys.add(it) \}` is the loop-form of `ys.addAll(xs)`. The bulk operation is a single method call and uses the most efficient copy strategy the receiver supports.
* [org.openrewrite.kotlin.bestpractices.FindForEachPrintln$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findforeachprintln$ktrecipe.md)
  * **Find `forEach \{ println(it) \}` patterns**
  * `forEach \{ println(it) \}` is the loop-form `for (x in xs) println(x)` — verify whether the print is debug-only. If it is intended output, consider `joinToString(&quot;\n&quot;).let(::println)` to write the whole thing in one syscall.
* [org.openrewrite.kotlin.bestpractices.FindForceUnwrapInLet$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findforceunwrapinlet$ktrecipe.md)
  * **Find `!!` inside a `?.let \{ \}` body**
  * `x?.let \{ it!! \}` (or `it.foo()!!`) is internally inconsistent: the safe-call entry already guards null, so the `!!` on `it` can never trigger. Drop the `!!` — the lambda body has a non-null receiver by construction.
* [org.openrewrite.kotlin.bestpractices.FindFunctionDeclarationSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findfunctiondeclarationsmells$ktrecipe.md)
  * **Find function-declaration smells**
  * Search-only bundle: explicit `: Unit` / `: Nothing` return type, block bodies that are a single `return expr`, literal-Boolean-returning functions, `Pair`/`Triple` returns that could be data classes, default-before-required parameters, `suspend fun` declarations returning `Job`/`Deferred`, and explicit `return Unit` statements.
* [org.openrewrite.kotlin.bestpractices.FindFunctionReturningPair$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findfunctionreturningpair$ktrecipe.md)
  * **Find functions returning `Pair&lt;A, B&gt;`**
  * A function returning `Pair&lt;A, B&gt;` forces every caller to remember which side is which. A small `data class Result(val a: A, val b: B)` documents the role of each component and gains `componentN()` / `copy()` for free.
* [org.openrewrite.kotlin.bestpractices.FindFunctionReturningTriple$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findfunctionreturningtriple$ktrecipe.md)
  * **Find functions returning `Triple&lt;A, B, C&gt;`**
  * Same shape as the `Pair` case but the readability cost compounds — three positional components is the limit where most readers stop guessing which is which. Replace with a `data class`.
* [org.openrewrite.kotlin.bestpractices.FindIfNullElseExpression$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findifnullelseexpression$ktrecipe.md)
  * **Find `if (x == null) null else x.foo()` patterns**
  * An `if (x == null) null else x.foo()` collapses to the safe-call `x?.foo()`. The safe-call is structurally null-aware — the longhand re-checks for null without surfacing the absent case in the type system.
* [org.openrewrite.kotlin.bestpractices.FindIfReturnFalseElseTrue$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findifreturnfalseelsetrue$ktrecipe.md)
  * **Find `if (x) false else true` patterns**
  * `if (x) false else true` is just `!x`. Replace the inverted Boolean conditional with the negation it already expresses.
* [org.openrewrite.kotlin.bestpractices.FindIfReturnTrueElseFalse$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findifreturntrueelsefalse$ktrecipe.md)
  * **Find `if (x) true else false` patterns**
  * `if (x) true else false` is just `x` after Boolean simplification. The longhand only hides intent.
* [org.openrewrite.kotlin.bestpractices.FindIsNotEmptyOnString$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findisnotemptyonstring$ktrecipe.md)
  * **Find `x.isNotEmpty()` on `String` where `isNotBlank()` might be wanted**
  * `String.isNotEmpty()` returns true for whitespace-only strings. When the check exists to guard against missing user input, `isNotBlank()` is usually closer to the intent.
* [org.openrewrite.kotlin.bestpractices.FindLambdaSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findlambdasmells$ktrecipe.md)
  * **Find lambda / functional smells**
  * Redundant `map \{ it.toString() \}` / `forEach \{ it.toString() \}`, debug-leftover `.also \{ println(it) \}` / `forEach \{ println(it) \}`, `xs.toList().forEach \{ \}` over already-iterable receivers, `.also \{ it.add(...) \}`-built mutable collections, and `forEach \{ ys.add(it) \}` (use `addAll`).
* [org.openrewrite.kotlin.bestpractices.FindLazyWithoutMode$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findlazywithoutmode$ktrecipe.md)
  * **Find `lazy \{ \}` calls without an explicit `LazyThreadSafetyMode`**
  * `lazy \{ \}` defaults to `LazyThreadSafetyMode.SYNCHRONIZED` — every read passes a synchronized check. For thread-confined state (UI, single-threaded actors), `lazy(LazyThreadSafetyMode.NONE) \{ \}` avoids the synchronization entirely.
* [org.openrewrite.kotlin.bestpractices.FindLetForNotNullCheck$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findletfornotnullcheck$ktrecipe.md)
  * **Find `if (x != null) x.foo()` patterns**
  * `if (x != null) \{ x.foo() \}` is the long form of `x?.let \{ it.foo() \}` — or, when only one call is needed and `x` is a local, `x?.foo()`. The safe-call form makes the null-aware path part of the type system rather than a separate Boolean check.
* [org.openrewrite.kotlin.bestpractices.FindManualToStringEqualsHashCode$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findmanualtostringequalshashcode$ktrecipe.md)
  * **Find classes with manual `toString`/`equals`/`hashCode` overrides**
  * A class that overrides all three of `toString`, `equals`, and `hashCode` over its own fields is the canonical shape `data class` exists for. Migrate to `data class C(val a: A, …)` to delete the boilerplate and gain `copy()` plus `componentN()` for free.
* [org.openrewrite.kotlin.bestpractices.FindMultipleSecondaryConstructors$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findmultiplesecondaryconstructors$ktrecipe.md)
  * **Find classes with multiple overloaded secondary constructors**
  * Two or more secondary constructors with different arities almost always collapse into a single primary constructor with default arguments. The default-arg form composes with named arguments and `@JvmOverloads` for cross-language interop.
* [org.openrewrite.kotlin.bestpractices.FindMutableListAlsoAdd$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findmutablelistalsoadd$ktrecipe.md)
  * **Find `mutableListOf&lt;T&gt;().also \{ it.add(x) \}` patterns**
  * Building a list through `mutableListOf&lt;T&gt;().also \{ it.add(...) \}` is the side-channel form of `buildList \{ add(...) \}` (or just `mutableListOf(x)` if every element is known up front). The builder form makes intent explicit.
* [org.openrewrite.kotlin.bestpractices.FindMutableMapAlsoPut$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findmutablemapalsoput$ktrecipe.md)
  * **Find `mutableMapOf&lt;K,V&gt;().also \{ it.put(...) \}` patterns**
  * Same shape as `mutableListOf().also \{ it.add(...) \}` for maps. The builder form (`buildMap \{ put(...) \}`) makes the entries visible without the side-channel `it.put`.
* [org.openrewrite.kotlin.bestpractices.FindMutableSetAlsoAdd$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findmutablesetalsoadd$ktrecipe.md)
  * **Find `mutableSetOf&lt;T&gt;().also \{ it.add(x) \}` patterns**
  * Same shape as the `mutableListOf` variant — use `buildSet \{ add(...) \}` for the same readability gain.
* [org.openrewrite.kotlin.bestpractices.FindNamedCompanionObjectOfConstants$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findnamedcompanionobjectofconstants$ktrecipe.md)
  * **Find named `companion object Constants` patterns**
  * A `companion object Constants \{ const val X = ... \}` adds a named singleton to hold what are essentially file-level constants. Promote the constants to top-level `const val`s — they read the same and avoid the synthetic holder class.
* [org.openrewrite.kotlin.bestpractices.FindNegatedIsBlank$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findnegatedisblank$ktrecipe.md)
  * **Find `!x.isBlank()` calls**
  * Kotlin's `String.isNotBlank()` is the direct positive form. The negated-blank check reads the same value without the leading `!`.
* [org.openrewrite.kotlin.bestpractices.FindNegatedIsEmpty$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findnegatedisempty$ktrecipe.md)
  * **Find `!x.isEmpty()` calls**
  * Kotlin ships `isNotEmpty()` directly on `String`, `Collection`, and `Map`. The negation reads top-down without re-parsing the `!`.
* [org.openrewrite.kotlin.bestpractices.FindNegatedIsNotBlank$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findnegatedisnotblank$ktrecipe.md)
  * **Find `!x.isNotBlank()` calls**
  * `!x.isNotBlank()` is the long form of `x.isBlank()`.
* [org.openrewrite.kotlin.bestpractices.FindNegatedIsNotEmpty$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findnegatedisnotempty$ktrecipe.md)
  * **Find `!x.isNotEmpty()` calls**
  * `!x.isNotEmpty()` is the long form of `x.isEmpty()`. Use the direct positive call.
* [org.openrewrite.kotlin.bestpractices.FindObjectWithMutableState$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findobjectwithmutablestate$ktrecipe.md)
  * **Find `object` declarations with `var` properties**
  * An `object` is a singleton — its `var` properties are shared global mutable state. Concurrent reads/writes race without synchronization, and the value can change in surprising ways across modules.
* [org.openrewrite.kotlin.bestpractices.FindOpenClassWithoutOverrides$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findopenclasswithoutoverrides$ktrecipe.md)
  * **Find `open class` declarations without overridable members**
  * The `open` modifier on a class only matters if subclasses override something. A bare `open class Foo` (or one whose members are all `final`) signals an intent — &quot;this class is meant to be extended&quot; — that the type system can't actually enforce. Either declare specific members `open` (and drop the class-level `open`) or remove the modifier entirely.
* [org.openrewrite.kotlin.bestpractices.FindRedundantReturnUnit$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findredundantreturnunit$ktrecipe.md)
  * **Find `return Unit` / `return kotlin.Unit` statements**
  * Functions that return `Unit` don't need an explicit return at all — `return` (no expression) or simply falling off the end is the conventional shape. Writing `return Unit` repeats the implicit value.
* [org.openrewrite.kotlin.bestpractices.FindRedundantToStringInForEach$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findredundanttostringinforeach$ktrecipe.md)
  * **Find `forEach \{ it.toString() \}` patterns**
  * `it.toString()` inside a `forEach` evaluates the call but discards the result — equivalent to `forEach \{\}`. Either the side effect on `toString()` is the goal (very unusual) or the call is dead code.
* [org.openrewrite.kotlin.bestpractices.FindRedundantToStringInMap$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findredundanttostringinmap$ktrecipe.md)
  * **Find `map \{ it.toString() \}` / `map \{ x -&gt; x.toString() \}` patterns**
  * If the producer already returns a type whose `toString()` is the desired representation, the `map` is a no-op. If the goal is to materialize the `String`s up-front, `joinToString()` / `toString()` on the collection is usually a better fit.
* [org.openrewrite.kotlin.bestpractices.FindReferentialEquality$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findreferentialequality$ktrecipe.md)
  * **Find `===` / `!==` referential-equality comparisons**
  * Kotlin's `===` checks reference identity, ignoring `equals`. For `data class` and other value-like types this almost always wants `==` instead. Flag every referential check for review — true reference comparisons (e.g. sentinel `Any` objects) are legitimate but rare.
* [org.openrewrite.kotlin.bestpractices.FindReturnTypeNothing$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findreturntypenothing$ktrecipe.md)
  * **Find functions declared with `: Nothing` return type**
  * `Nothing` means 'this function never returns normally' — the body must `throw`, loop forever, or call another `Nothing`-returning function. Flag for review: if the body actually does return, the type is wrong; if it always throws, the call sites can rely on Kotlin's exhaustiveness checks.
* [org.openrewrite.kotlin.bestpractices.FindRunWithEmptyBody$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findrunwithemptybody$ktrecipe.md)
  * **Find `run \{ \}` calls with an empty body**
  * `run \{ \}` is a scope function for evaluating a block as an expression with an implicit `this` receiver. If the block is empty, the call evaluates to `Unit` and does nothing — drop it.
* [org.openrewrite.kotlin.bestpractices.FindScopeFunctionSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findscopefunctionsmells$ktrecipe.md)
  * **Find scope-function smells**
  * `run \{ \}` with empty or no-`this` bodies, `also \{ \}` with empty bodies, and `?.let \{ … !! \}` patterns where the null-guard and force-unwrap contradict each other.
* [org.openrewrite.kotlin.bestpractices.FindSealedClassWithoutStateCandidates$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findsealedclasswithoutstatecandidates$ktrecipe.md)
  * **Find `sealed class` declarations that could be `sealed interface`**
  * A `sealed class` with no constructor parameters and no fields adds no expressive power over `sealed interface`. The interface form composes better (allows multiple inheritance, supports `data object` direct implementation, makes the no-state contract explicit).
* [org.openrewrite.kotlin.bestpractices.FindSingleExpressionBodyCandidate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findsingleexpressionbodycandidate$ktrecipe.md)
  * **Find `fun foo(): T \{ return x \}` block bodies**
  * A function whose entire body is a single `return expr` is the canonical shape for Kotlin's single-expression-body syntax (`fun foo(): T = expr`). The expression form makes type inference more useful and removes one level of brace nesting.
* [org.openrewrite.kotlin.bestpractices.FindStandaloneRunWithoutThis$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findstandalonerunwithoutthis$ktrecipe.md)
  * **Find top-level `run \{ … \}` whose body never uses `this`**
  * Top-level `run \{ … \}` (no receiver) is meaningful only when the block uses the implicit `this` or executes multiple statements as an expression. If the body neither references `this` nor depends on the scoping it provides, the wrapper just adds an unnecessary lambda allocation.
* [org.openrewrite.kotlin.bestpractices.FindStringConcatWithEmptyLeft$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findstringconcatwithemptyleft$ktrecipe.md)
  * **Find `&quot;&quot; + x` patterns**
  * Prepending an empty `&quot;&quot;` is a Java idiom for forcing a `toString()` conversion. In Kotlin write `x.toString()` or the template `&quot;$x&quot;` for the same effect with explicit intent.
* [org.openrewrite.kotlin.bestpractices.FindStringConcatWithEmptyRight$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findstringconcatwithemptyright$ktrecipe.md)
  * **Find `x + &quot;&quot;` patterns**
  * Appending an empty `&quot;&quot;` is the inverse of the Java `&quot;&quot; + x` idiom. Use `x.toString()` or `&quot;$x&quot;` instead.
* [org.openrewrite.kotlin.bestpractices.FindStringConstructionSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findstringconstructionsmells$ktrecipe.md)
  * **Find string-construction smells**
  * Trivial `String.format(&quot;%s&quot;, x)` calls and `&quot;&quot; + x` / `x + &quot;&quot;` concatenations that read more clearly as Kotlin string templates.
* [org.openrewrite.kotlin.bestpractices.FindStringFormatTrivial$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findstringformattrivial$ktrecipe.md)
  * **Find trivial `String.format(&quot;%s&quot;, x)` calls**
  * `String.format(&quot;%s&quot;, x)` is the long-hand for the Kotlin string template `&quot;$x&quot;`. The template avoids the per-call format-string parse and reads as the thing it produces.
* [org.openrewrite.kotlin.bestpractices.FindSuspendFunctionReturningJob$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findsuspendfunctionreturningjob$ktrecipe.md)
  * **Find `suspend fun` declarations returning `Job` / `Deferred`**
  * A `suspend fun foo(): Job` is almost always a confusion of two patterns — either the function should suspend and return a value (drop the `Job`/`Deferred`), or it should launch and return the handle (drop `suspend`, and call `coroutineScope \{ launch \{ … \} \}` internally).
* [org.openrewrite.kotlin.bestpractices.FindThrowablePrintStackTrace$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findthrowableprintstacktrace$ktrecipe.md)
  * **Find `Throwable.printStackTrace()` calls**
  * `printStackTrace()` writes the throwable straight to `System.err`, bypassing whatever structured logger the application uses. Route the throwable through a logger so log levels, MDCs, and sinks apply.
* [org.openrewrite.kotlin.bestpractices.FindToListBeforeForEach$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findtolistbeforeforeach$ktrecipe.md)
  * **Find `xs.toList().forEach \{ … \}` patterns**
  * `Iterable.forEach` already iterates without materializing a list. The intermediate `toList()` allocates a copy that's read once and discarded.
* [org.openrewrite.kotlin.bestpractices.FindWhenAsStatement$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findwhenasstatement$ktrecipe.md)
  * **Find `when (x) \{ … \}` used as a statement**
  * A `when` used as a statement (its result is discarded) often obscures intent — either the writer expected an expression value or each branch is a side-effecting block that would read more clearly as `if`/`else if`. Flag for review.
* [org.openrewrite.kotlin.bestpractices.FindWhenSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findwhensmells$ktrecipe.md)
  * **Find `when`-statement smells**
  * `when` expressions that read awkwardly: missing `else`, single-branch, used as statement, with duplicate branch bodies that should collapse to comma-separated labels, or with a Boolean selector that should be `if`.
* [org.openrewrite.kotlin.bestpractices.FindWhenWithBooleanSubject$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findwhenwithbooleansubject$ktrecipe.md)
  * **Find `when (b: Boolean)` selectors**
  * `when (b) \{ true -&gt; … false -&gt; … \}` is the long form of `if (b) …` — and the `when` reads as if it might gain a third branch, which Boolean cannot. Replace with `if`.
* [org.openrewrite.kotlin.bestpractices.FindWhenWithIdenticalBranches$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findwhenwithidenticalbranches$ktrecipe.md)
  * **Find `when` with two or more branches having identical bodies**
  * `when (x) \{ A -&gt; f(); B -&gt; f() \}` repeats the same body for distinct labels — collapse to a single branch with comma-separated labels: `A, B -&gt; f()`.
* [org.openrewrite.kotlin.bestpractices.FindWhenWithSingleBranch$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findwhenwithsinglebranch$ktrecipe.md)
  * **Find `when (x) \{ A -&gt; … \}` with a single branch**
  * A single-branch `when (x) \{ A -&gt; … \}` is the long form of `if (x == A) …`. The `if` reads more directly and doesn't suggest the branch list will grow.
* [org.openrewrite.kotlin.bestpractices.FindWhenWithoutElse$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findwhenwithoutelse$ktrecipe.md)
  * **Find `when (x)` expressions without an `else` branch**
  * A `when (x)` used as an expression requires exhaustiveness — without an `else`, the compiler can only prove it for sealed/`enum` selectors. Used as a statement, the missing `else` is a tripwire: any new variant silently falls through. Flag for review.
* [org.openrewrite.kotlin.bestpractices.FindWildcardImport$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findwildcardimport$ktrecipe.md)
  * **Find wildcard `import a.b.*` statements**
  * Wildcard imports pull every public symbol from a package — they hide the dependency surface and make incremental compilation more conservative. Prefer explicit per-symbol imports.
* [org.openrewrite.kotlin.bestpractices.ImproveKotlinBestPractices$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/improvekotlinbestpractices$ktrecipe.md)
  * **Apply Kotlin best-practice rewrites**
  * Autofix-only best-practice bundle: collection / string round-trip collapses and stdlib accessor swaps. Excludes the search-only `Find*` recipes so the run output is just diffs, not a flood of search results.
* [org.openrewrite.kotlin.bestpractices.UseFirstForGetZero$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/usefirstforgetzero$ktrecipe.md)
  * **Use `first()` instead of `get(0)`**
  * `first()` reads more naturally than `get(0)` and gives the same compile-time bounds guarantees — both throw `NoSuchElementException`/`IndexOutOfBoundsException` on an empty list.
* [org.openrewrite.kotlin.bestpractices.UseLengthForCountNoPredicate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/uselengthforcountnopredicate$ktrecipe.md)
  * **Use `length` instead of `String.count()`**
  * `String.count()` walks every character and increments a counter. `length` reads the precomputed size off the `String` header.
* [org.openrewrite.kotlin.bestpractices.UseSizeForCountNoPredicate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/usesizeforcountnopredicate$ktrecipe.md)
  * **Use `size` instead of `Collection.count()`**
  * `Collection.count()` without a predicate walks the iterable. `size` reads the precomputed property on `Collection`.
* [org.openrewrite.kotlin.bestpractices.UseStdlibAccessors$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/usestdlibaccessors$ktrecipe.md)
  * **Use stdlib accessors for size / first**
  * Replaces walk-based accessors with their O(1) property/method equivalents — `count()`/`length`/`size` and `get(0)`/`first()`.
* [org.openrewrite.kotlin.bestpractices.UseToListForToMutableListThenToList$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/usetolistfortomutablelistthentolist$ktrecipe.md)
  * **Use `toList()` instead of `toMutableList().toList()`**
  * `toMutableList()` allocates a mutable copy, then `toList()` copies it again to an immutable list. `toList()` directly does what's needed in one pass.
* [org.openrewrite.kotlin.bestpractices.UseToListForToSetThenToList$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/usetolistfortosetthentolist$ktrecipe.md)
  * **Use `distinct()` instead of `toSet().toList()`**
  * `distinct()` returns a `List` with duplicates removed in one pass. `toSet().toList()` allocates a set and then copies its contents into a list — two allocations to do the same job, and the order semantics differ subtly because hash-based sets don't preserve insertion order across all platforms.
* [org.openrewrite.kotlin.bestpractices.UseToSetForDistinctThenToSet$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/usetosetfordistinctthentoset$ktrecipe.md)
  * **Use `toSet()` instead of `distinct().toSet()`**
  * `toSet()` deduplicates while building the set. `distinct().toSet()` allocates a `List` of distinct elements first, then copies into the set.
* [org.openrewrite.kotlin.bestpractices.UseToSetForToListThenToSet$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/usetosetfortolistthentoset$ktrecipe.md)
  * **Use `toSet()` instead of `toList().toSet()`**
  * `toSet()` works on any `Iterable`. The intermediate `toList()` just allocates a list that's immediately discarded.
* [org.openrewrite.kotlin.bestpractices.UseToStringForStringToString$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/usetostringforstringtostring$ktrecipe.md)
  * **Drop redundant `String.toString()`**
  * Calling `toString()` on a value that is already a `String` is a no-op that compiles to a method call returning the same reference.
* [org.openrewrite.kotlin.bestpractices.UseToTypedArrayForToListThenToTypedArray$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/usetotypedarrayfortolistthentotypedarray$ktrecipe.md)
  * **Use `toTypedArray()` instead of `toList().toTypedArray()`**
  * `toTypedArray()` accepts any `Collection`; the intermediate `toList()` just allocates a list that's immediately discarded.
* [org.openrewrite.kotlin.bestpractices.UseTrimForTrimEndThenTrimStart$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/usetrimfortrimendthentrimstart$ktrecipe.md)
  * **Use `trim()` instead of `trimEnd().trimStart()`**
  * Same as the inverse — `trim()` strips both ends in one pass without the intermediate `String` allocation.
* [org.openrewrite.kotlin.bestpractices.UseTrimForTrimStartThenTrimEnd$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/usetrimfortrimstartthentrimend$ktrecipe.md)
  * **Use `trim()` instead of `trimStart().trimEnd()`**
  * `trim()` strips whitespace from both ends in a single pass with no intermediate allocation. `trimStart().trimEnd()` builds a temporary `String` for the left-trimmed value before the second pass.
* [org.openrewrite.kotlin.compose.Compose$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/compose$ktrecipe.md)
  * **Find Compose stability and recomposition issues**
  * Search-only recipes that surface Jetpack Compose anti-patterns the Android docs and Compose stability guide call out: unstable parameter types, mutable classes annotated `@Stable`/`@Immutable`, inline `Modifier` allocations, missing `remember` keys, effect-handler misuse, navigation inside composable bodies, single-child layout wrappers, lazy-list items without keys, and API-shape violations. Each match is a `SearchResult` for human review — Compose remedies are judgement calls (hoist? wrap? annotate? split?) that depend on context outside any one expression. For diff-only output on the small autofix set, use `ImproveKotlinCompose`.
* [org.openrewrite.kotlin.compose.FindArrayParameterOnComposable$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findarrayparameteroncomposable$ktrecipe.md)
  * **Find `Array&lt;T&gt;` parameters on `@Composable` functions**
  * JVM arrays are mutable references — Compose's stability inferrer marks an `Array&lt;T&gt;` parameter unstable, forcing the composable to recompose every time the parent recomposes. Prefer `ImmutableList&lt;T&gt;` or a `@Stable` wrapper.
* [org.openrewrite.kotlin.compose.FindBoxWithSingleChild$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findboxwithsinglechild$ktrecipe.md)
  * **Find `Box \{ … \}` with a single child**
  * A `Box \{ OneChild() \}` adds a layout node and a measurement pass for no compositional benefit — the child could be invoked directly with the same `Modifier`. Either pull the modifier onto the child or use the explicit `Box` placement APIs if alignment is doing real work.
* [org.openrewrite.kotlin.compose.FindByRememberWithoutMutableState$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findbyrememberwithoutmutablestate$ktrecipe.md)
  * **Find `by remember \{ … \}` delegations whose body isn't a `mutableStateOf`**
  * `by remember \{ … \}` pairs with a `MutableState&lt;T&gt;` so the property delegates its read/write through the snapshot system. If the `remember \{ \}` body returns a plain `T`, the `by` does nothing useful — and is a strong hint the author forgot to wrap the value in `mutableStateOf(...)` or `derivedStateOf \{ … \}`.
* [org.openrewrite.kotlin.compose.FindCanvasInComposable$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcanvasincomposable$ktrecipe.md)
  * **Find `Canvas \{ … \}` blocks inside a `@Composable`**
  * `Canvas \{ drawXxx(...) \}` re-runs the draw lambda on every recomposition; allocating `Paint`, `Path`, or `Brush` instances inside the lambda creates GC pressure that shows up as jank. Review for hoistable allocations (`remember \{ Paint().apply \{ … \} \}`) and for `drawWithCache \{ … \}` opportunities.
* [org.openrewrite.kotlin.compose.FindCardWithSingleChild$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcardwithsinglechild$ktrecipe.md)
  * **Find `Card \{ OneChild() \}` patterns**
  * A `Card \{ OneChild() \}` allocates a layout node and an elevation surface for exactly one composable. If the child already styles itself (`Modifier.background`/`Modifier.shadow`), the `Card` is decorative duplication — pull the styling into the child's `Modifier` chain.
* [org.openrewrite.kotlin.compose.FindColumnWithSingleChild$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcolumnwithsinglechild$ktrecipe.md)
  * **Find `Column \{ … \}` with a single child**
  * A `Column \{ OneChild() \}` allocates a layout node and runs the column measurement to position exactly one child. Either remove the column or replace with `Box(modifier = m)` if the column's `verticalArrangement` actually does work the parent isn't.
* [org.openrewrite.kotlin.compose.FindComposableCallInNonComposableLambda$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcomposablecallinnoncomposablelambda$ktrecipe.md)
  * **Find `@Composable` calls inside non-`@Composable` lambda parameters**
  * A `@Composable` function called from inside a non-Composable lambda (e.g., a `forEach \{ \}`) won't enter the composition tree correctly — the function executes but its emitted nodes don't get tracked for invalidation. Either move the call out of the lambda, or use a Compose-aware iterator (`items(list) \{ … \}`).
* [org.openrewrite.kotlin.compose.FindComposableConventionSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcomposableconventionsmells$ktrecipe.md)
  * **Find Compose function-naming conventions**
  * Function-naming patterns the Compose API guide calls out: non-`@Composable` functions that use composable APIs (`remember`/`LaunchedEffect`/`rememberCoroutineScope`) without the annotation.
* [org.openrewrite.kotlin.compose.FindComposableLambdaParamMissingDefault$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcomposablelambdaparammissingdefault$ktrecipe.md)
  * **Find `@Composable` functions with a content lambda parameter not defaulted to `\{\}`**
  * By Material/Compose convention, content slot lambdas (`content: @Composable () -&gt; Unit`) default to `\{\}` so callers can compose the function without supplying a body when they only want the surrounding chrome. Flag content slots without defaults so the API gets the convention-conforming overload.
* [org.openrewrite.kotlin.compose.FindComposableMissingModifierParam$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcomposablemissingmodifierparam$ktrecipe.md)
  * **Find `@Composable` functions without a `Modifier` parameter**
  * The Compose API guideline says every composable that emits UI should accept a `Modifier` parameter (named `modifier`, defaulted to `Modifier`) so callers can size, layout, and decorate without subclassing. Flag composables that emit content but expose no `Modifier` slot.
* [org.openrewrite.kotlin.compose.FindComposableWithReturnValue$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcomposablewithreturnvalue$ktrecipe.md)
  * **Find `@Composable fun … (): X` functions returning a non-`Unit` value**
  * A `@Composable` function that returns a value either emits UI as a side-effect (anti-pattern: invocation order is now load-bearing) or computes a derived value that should be a `@ReadOnlyComposable`. Mark explicit value-returning composables `@ReadOnlyComposable` so callers know they don't emit, or split into emitting-vs-returning pairs.
* [org.openrewrite.kotlin.compose.FindComposeApiDesignIssues$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcomposeapidesignissues$ktrecipe.md)
  * **Find Compose API design issues**
  * Composable functions that don't follow the Compose API guidelines: lowercase name (UI emitters should be `PascalCase`), non-`Unit` return without `@ReadOnlyComposable`, content slot without a default `\{\}`, missing `Modifier` parameter, and `@Composable` invocations from non-Composable lambdas.
* [org.openrewrite.kotlin.compose.FindComposeEffectIssues$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcomposeeffectissues$ktrecipe.md)
  * **Find Compose effect handler issues**
  * Effect handlers misused: `LaunchedEffect(Unit)`/`LaunchedEffect(true)` placeholder keys, `DisposableEffect` lambdas missing `onDispose \{ \}`, `rememberCoroutineScope()` mis-placed inside a lambda, `LaunchedEffect` inside loops, and side-effecting calls (logging, `File`) inside the composable body rather than an effect block.
* [org.openrewrite.kotlin.compose.FindComposeLayoutIssues$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcomposelayoutissues$ktrecipe.md)
  * **Find Compose layout hierarchy smells**
  * Layout containers that exist for no compositional benefit: `Box`/`Column`/`Row` wrapping a single child, and `LazyColumn`/`LazyRow` items missing a stable `key` (which churns composition state on reorder).
* [org.openrewrite.kotlin.compose.FindComposeModifierIssues$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcomposemodifierissues$ktrecipe.md)
  * **Find Compose `Modifier` smells**
  * Modifier-chain shapes that allocate per recomposition (`Modifier.padding(...)` inline), branch with structurally distinct chains (`if (x) Modifier.foo() else Modifier`), or stack `fillMax`/`padding` in a layout-changing order. Each match needs the author's intent to fix correctly.
* [org.openrewrite.kotlin.compose.FindComposeNavigationIssues$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcomposenavigationissues$ktrecipe.md)
  * **Find Compose navigation / coroutine misuse**
  * Calls that need to be wrapped in an effect handler or event handler: `navController.navigate(...)` from a composable body, `scope.launch \{ … \}` outside `LaunchedEffect`, lifecycle-naive `collectAsState` instead of `collectAsStateWithLifecycle`.
* [org.openrewrite.kotlin.compose.FindComposeRememberIssues$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcomposerememberissues$ktrecipe.md)
  * **Find Compose `remember` key issues**
  * `remember \{ … \}` calls where the keys do not align with the values the block reads — keyless `remember` that captures changing variables, and `remember \{ mutableStateOf(call()) \}` candidates for `derivedStateOf`.
* [org.openrewrite.kotlin.compose.FindComposeStabilityIssues$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcomposestabilityissues$ktrecipe.md)
  * **Find Compose stability issues**
  * Surface declarations where Compose's stability inferrer will refuse to mark a parameter, property, or class as stable: `MutableList`/`MutableMap`/`MutableSet` parameters, read-only `List` parameters, `@Stable`/`@Immutable` annotations applied to classes with `var` fields, and `data class` declarations holding `List&lt;T&gt;` properties.
* [org.openrewrite.kotlin.compose.FindComposeStateReadIssues$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcomposestatereadissues$ktrecipe.md)
  * **Find Compose state read/write issues**
  * Patterns where a `MutableState`/`State` is read or constructed in a way that loses the snapshot value: explicit `.value` reads, bare `mutableStateOf` without `remember`, class-field state ownership, missing `derivedStateOf`, transient collection allocations.
* [org.openrewrite.kotlin.compose.FindComposeViewModelIssues$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcomposeviewmodelissues$ktrecipe.md)
  * **Find Compose ViewModel wiring issues**
  * ViewModel acquisition inside composables — `hiltViewModel&lt;X&gt;()` and `viewModel&lt;X&gt;()` — and StateFlow exposure: `MutableStateFlow` without an `asStateFlow()` read-only view.
* [org.openrewrite.kotlin.compose.FindConditionalModifier$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findconditionalmodifier$ktrecipe.md)
  * **Find `if (x) Modifier.foo() else Modifier` patterns**
  * `if (cond) Modifier.foo() else Modifier` returns two structurally different `Modifier` chains, breaking memoization on the consumer. Use `Modifier.then(if (cond) Modifier.foo() else Modifier)` or `Modifier.composed \{ if (cond) padding(8.dp) else this \}` so the consumer sees a single stable reference.
* [org.openrewrite.kotlin.compose.FindContextParameterOnComposable$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcontextparameteroncomposable$ktrecipe.md)
  * **Find `android.content.Context` parameters on `@Composable` functions**
  * Passing a `Context` into a composable couples it to the activity instance and makes the function harder to preview/test. Use `LocalContext.current` inside the composable instead — it works through the composition tree and is preview-safe.
* [org.openrewrite.kotlin.compose.FindCoroutineLaunchInComposableBody$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcoroutinelaunchincomposablebody$ktrecipe.md)
  * **Find `scope.launch \{ … \}` calls inside a `@Composable` body**
  * `scope.launch \{ … \}` in a `@Composable` body starts a new coroutine on every recomposition — none of them get cancelled until the scope dies. Use `LaunchedEffect(key) \{ … \}`, which is automatically cancelled and restarted by the composition's lifecycle.
* [org.openrewrite.kotlin.compose.FindCoroutineLaunchInsideLaunchedEffectInLoop$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findcoroutinelaunchinsidelaunchedeffectinloop$ktrecipe.md)
  * **Find `for (...) \{ LaunchedEffect(...) \{ … \} \}` patterns**
  * A `LaunchedEffect` inside a loop creates a separate coroutine per iteration. That is rarely the intended structure — it is usually a mis-placement of effect logic. Prefer a single `LaunchedEffect(keys = arrayOf(...)) \{ for (...) \{ … \} \}` or restructure the loop to live inside the effect.
* [org.openrewrite.kotlin.compose.FindDataClassWithListProperty$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/finddataclasswithlistproperty$ktrecipe.md)
  * **Find `data class` declarations with `List&lt;T&gt;` properties**
  * When a `data class` is passed to a `@Composable` and one of its properties is a `kotlin.collections.List&lt;T&gt;`, Compose marks the entire class unstable. Wrap the list in `ImmutableList&lt;T&gt;` from `kotlinx.collections.immutable` (or split the list out and remember it separately) so stability inference can prove the holder is `@Stable`.
* [org.openrewrite.kotlin.compose.FindDerivedStateOfCandidate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findderivedstateofcandidate$ktrecipe.md)
  * **Find `remember \{ mutableStateOf(expensiveCall()) \}` patterns**
  * `remember \{ mutableStateOf(expensiveCall()) \}` evaluates the expression once and stores it — but if the expression depends on snapshot state, you want it to recompute when that state changes. `derivedStateOf \{ expensiveCall() \}` (inside a `remember \{ \}`) recomputes lazily only when its tracked reads invalidate, instead of either staling out or recomputing on every recomposition.
* [org.openrewrite.kotlin.compose.FindDisposableEffectMissingOnDispose$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/finddisposableeffectmissingondispose$ktrecipe.md)
  * **Find `DisposableEffect \{ … \}` blocks missing an `onDispose \{ \}`**
  * `DisposableEffect`'s contract is to return a `DisposableEffectResult` from `onDispose \{ … \}` — without it, the compiler should reject the block, but easy mistakes (early `return`, wrong receiver) silently bypass cleanup. Confirm the final statement of every `DisposableEffect` lambda is an `onDispose \{ \}` call so resources are released on leave-the-composition.
* [org.openrewrite.kotlin.compose.FindDpAllocationInComposableBody$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/finddpallocationincomposablebody$ktrecipe.md)
  * **Find `n.dp` allocations inside a `@Composable` body**
  * `Dp` is an inline value class — most `.dp` accesses compile to a primitive. But certain platforms (older Kotlin, KMP non-JVM targets) box the value. In hot composables, prefer hoisting `private val padding = 8.dp` to file scope so the conversion runs once.
* [org.openrewrite.kotlin.compose.FindFlowCollectAsState$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findflowcollectasstate$ktrecipe.md)
  * **Find `Flow.collectAsState()` calls — prefer `collectAsStateWithLifecycle()`**
  * `collectAsState()` keeps collecting whenever the composition is alive, including while the host activity is stopped. `collectAsStateWithLifecycle()` (from `androidx.lifecycle:lifecycle-runtime-compose`) ties collection to the lifecycle owner, dropping subscription while in the background and freeing the upstream `Flow` from doing work nothing will display.
* [org.openrewrite.kotlin.compose.FindFlowParameterOnComposable$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findflowparameteroncomposable$ktrecipe.md)
  * **Find `Flow&lt;T&gt;` / `StateFlow&lt;T&gt;` parameters on `@Composable` functions**
  * Passing a `Flow&lt;T&gt;` into a `@Composable` shifts collection from a `LaunchedEffect` to the consumer — but if the caller re-creates the `Flow` per recomposition, collection restarts every time. Prefer collecting at the call site and passing the resulting `State&lt;T&gt;` (or `T` directly).
* [org.openrewrite.kotlin.compose.FindHardcodedColor$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findhardcodedcolor$ktrecipe.md)
  * **Find `Color(0xFF…)` / `Color.X` literals inside `@Composable`**
  * Hardcoded `Color` literals inside a composable bypass `MaterialTheme.colorScheme.X`, breaking light/dark theme adaptation and theming overrides. Move the literal into the theme (a `ColorScheme` extension or a top-level theme val) and read it via `MaterialTheme.colorScheme` at the call site.
* [org.openrewrite.kotlin.compose.FindHardcodedDesignTokens$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findhardcodeddesigntokens$ktrecipe.md)
  * **Find hardcoded color literals inside `@Composable`**
  * `Color(0xFF…)` literals inside composables break theming and accessibility (light/dark). Hoist into `MaterialTheme.colorScheme.*`.
* [org.openrewrite.kotlin.compose.FindHiltViewModelInComposable$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findhiltviewmodelincomposable$ktrecipe.md)
  * **Find `hiltViewModel&lt;X&gt;()` calls inside `@Composable`**
  * `hiltViewModel&lt;MyViewModel&gt;()` inside a `@Composable` couples the screen-level dependency injection to that composable. That is the recommended pattern at navigation entry points, but flagged for review when the same ViewModel is injected from multiple composables (you'll get distinct instances per nav graph entry).
* [org.openrewrite.kotlin.compose.FindImmutableAnnotationOnMutableClass$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findimmutableannotationonmutableclass$ktrecipe.md)
  * **Find `@Immutable` on classes with `var` properties**
  * `@Immutable` is the stronger sibling of `@Stable`: it promises that all public properties are observably unchangeable after construction. A `var` field is by definition observably changeable — Compose will assume it can skip recompositions safely and miss updates. Drop the annotation or convert the property to `val` (and a private backing var if needed).
* [org.openrewrite.kotlin.compose.FindInlineModifierConstruction$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findinlinemodifierconstruction$ktrecipe.md)
  * **Find `Modifier.xxx()` allocations inside a `@Composable` body**
  * Each `Modifier.padding(...)`-style chain allocates a fresh `Modifier` instance, and a fresh `Modifier` defeats Compose's structural-equality skip — every recomposition allocates again and forces re-layout. Hoist the modifier into a `remember \{ Modifier… \}`, accept a `Modifier` parameter from the caller, or build static modifiers as top-level vals.
* [org.openrewrite.kotlin.compose.FindLambdaAsComposableParamWithoutNoinline$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findlambdaascomposableparamwithoutnoinline$ktrecipe.md)
  * **Find lambda parameters on `@Composable` functions**
  * Function-typed parameters are unstable from Compose's stability inferrer perspective unless the lambda reference is stable (e.g., function reference or `remember`d). For frequently-recomposed composables, accept a `(T) -&gt; Unit` and document caller responsibility, or fold the callback into a stable holder. Flag for review when the API is performance-sensitive.
* [org.openrewrite.kotlin.compose.FindLambdaCapturingMutableStateInItems$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findlambdacapturingmutablestateinitems$ktrecipe.md)
  * **Find lazy-list `items(...) \{ … \}` content lambdas that read a `MutableState` from the enclosing scope**
  * When a `LazyColumn`/`LazyRow` content lambda reads a `MutableState`/`State` from the enclosing scope, every change to that state invalidates the entire item composition. Hoist the state into a per-item `remember`, or read it inside a child composable so only the affected item recomposes.
* [org.openrewrite.kotlin.compose.FindLaunchedEffectMultipleSuspendCalls$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findlaunchedeffectmultiplesuspendcalls$ktrecipe.md)
  * **Find `LaunchedEffect` bodies with several distinct suspend calls**
  * A `LaunchedEffect` lambda that issues several distinct top-level suspend calls is usually doing two things: a long-running collector plus an unrelated kickoff. Split them into separate `LaunchedEffect`s keyed independently so canceling one doesn't cancel the other on key changes.
* [org.openrewrite.kotlin.compose.FindLaunchedEffectWithTrueKey$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findlaunchedeffectwithtruekey$ktrecipe.md)
  * **Find `LaunchedEffect(true) \{ … \}` blocks**
  * `LaunchedEffect(true)` (or any literal `true`/`false` key) is a one-shot effect dressed up to look like it has a key. It is structurally identical to `LaunchedEffect(Unit)` but reads as if the author meant to pass a variable. Switch to `Unit` for clarity or pass the real dependency.
* [org.openrewrite.kotlin.compose.FindLaunchedEffectWithUnitKey$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findlaunchedeffectwithunitkey$ktrecipe.md)
  * **Find `LaunchedEffect(Unit) \{ … \}` blocks**
  * `LaunchedEffect(Unit) \{ … \}` runs exactly once per composition lifetime — that's intentional for one-shot startup work, but it is also the easiest spelling when the author wanted lifecycle-aware re-launch on a real key. Confirm `Unit` was intentional and not a placeholder for the actual dependencies the effect reads.
* [org.openrewrite.kotlin.compose.FindLaunchedEffectWithoutKey$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findlaunchedeffectwithoutkey$ktrecipe.md)
  * **Find `LaunchedEffect \{ … \}` calls with no key argument**
  * `LaunchedEffect` always takes at least one key — without one the call is a compile error (or silently rebound to a `(suspend () -&gt; Unit)` overload in stubbed builds). Confirm a key is supplied; `LaunchedEffect(Unit) \{ … \}` is the canonical one-shot spelling.
* [org.openrewrite.kotlin.compose.FindLazyColumnDirectCall$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findlazycolumndirectcall$ktrecipe.md)
  * **Find `LazyColumn \{ … \}` calls — verify items use stable keys**
  * A `LazyColumn \{ items(...) \{ … \} \}` whose inner `items` call has no `key = \{ … \}` recomposes every visible row on every reorder/insertion. Audit the call to add a stable key.
* [org.openrewrite.kotlin.compose.FindLazyListItemMissingKey$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findlazylistitemmissingkey$ktrecipe.md)
  * **Find `LazyColumn`/`LazyRow` `items(...)` calls missing a `key = \{ … \}` argument**
  * Without a stable `key`, `LazyColumn`/`LazyRow` indexes items by position. Inserting an item shifts every following index and Compose has to recompose every visible child, recreating their state. A stable `key` (typically an id) lets Compose preserve composition state across reorderings and animations.
* [org.openrewrite.kotlin.compose.FindLazyRowDirectCall$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findlazyrowdirectcall$ktrecipe.md)
  * **Find `LazyRow \{ … \}` calls — verify items use stable keys**
  * A `LazyRow \{ items(...) \{ … \} \}` whose inner `items` call has no `key = \{ … \}` recomposes every visible cell on every reorder. Audit the call to add a stable key.
* [org.openrewrite.kotlin.compose.FindLazyVerticalGridDirectCall$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findlazyverticalgriddirectcall$ktrecipe.md)
  * **Find `LazyVerticalGrid \{ … \}` calls — verify items use stable keys**
  * A `LazyVerticalGrid \{ items(...) \{ … \} \}` whose inner `items` call has no `key = \{ … \}` recomposes every visible cell on every reorder. Audit the call to add a stable key.
* [org.openrewrite.kotlin.compose.FindLifecycleAwareFlowSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findlifecycleawareflowsmells$ktrecipe.md)
  * **Find lifecycle-naive flow / LiveData collection in Composables**
  * Collectors and observers that keep running while the host activity is stopped: `LiveData.observeAsState()`, `viewModel.uiState.collectAsState()` (vs `collectAsStateWithLifecycle()`), and `LiveData.observe(...)` called directly from a `@Composable`.
* [org.openrewrite.kotlin.compose.FindListAsComposableParam$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findlistascomposableparam$ktrecipe.md)
  * **Find `@Composable` functions with `List`/`Map`/`Set` parameters**
  * `kotlin.collections.List` (and friends) are read-only views, not immutable types — a `List&lt;T&gt;` can be a `MutableList&lt;T&gt;` upcast, so Compose's stability inferrer marks the parameter unstable and re-invokes the composable on every parent recomposition. Use `ImmutableList&lt;T&gt;` from `kotlinx.collections.immutable` or wrap in a `@Immutable` data holder.
* [org.openrewrite.kotlin.compose.FindListOfInComposableBody$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findlistofincomposablebody$ktrecipe.md)
  * **Find `listOf(...)` / `mapOf(...)` / `setOf(...)` calls inside a `@Composable`**
  * `listOf(a, b)` allocates a fresh `List` on every recomposition. If the composable downstream is `@Stable` and compares its inputs by reference, the new list defeats memoization. Hoist into a `remember \{ listOf(a, b) \}` or convert to an `ImmutableList` declared at file scope.
* [org.openrewrite.kotlin.compose.FindLiveDataObserveInComposable$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findlivedataobserveincomposable$ktrecipe.md)
  * **Find `LiveData.observe(...)` calls inside `@Composable`**
  * `LiveData.observe(lifecycleOwner, observer)` is for `Activity`/`Fragment` code; inside a `@Composable` it registers a brand-new observer on every recomposition and never removes it. Use `observeAsState()` (or migrate to `StateFlow` and `collectAsStateWithLifecycle()`).
* [org.openrewrite.kotlin.compose.FindLongModifierChain$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findlongmodifierchain$ktrecipe.md)
  * **Find `Modifier.xxx().yyy()...` chains longer than five operations**
  * A `Modifier` chain with more than five operations is hard to read, hard to memoize, and often hides a hoist-into-a-named-Modifier opportunity. Extract the chain into a `val styled = Modifier…` declaration (ideally `remember`ed at the call site) so the composable body reads as intent rather than plumbing.
* [org.openrewrite.kotlin.compose.FindLowercaseComposableFunction$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findlowercasecomposablefunction$ktrecipe.md)
  * **Find `@Composable` functions whose name starts with a lowercase letter**
  * Compose convention: composables that emit UI use `PascalCase` to set them apart from regular Kotlin functions in IDE auto-complete and stack traces. Lowercase-named composables either should be renamed or, if they return a value rather than emit UI, marked `@ReadOnlyComposable` to signal they don't compose.
* [org.openrewrite.kotlin.compose.FindModifierClickableBeforeBackground$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findmodifierclickablebeforebackground$ktrecipe.md)
  * **Find `Modifier.clickable \{ \}.background(...)` chains**
  * When `clickable` precedes `background` in a `Modifier` chain, the background paints on top of the touch target — the visible color is the background, but the ripple/feedback originates from the layer underneath, which usually isn't the look the author wanted. Place `background(...)` first and `clickable \{ … \}` last so the touch surface sits above the visual fill.
* [org.openrewrite.kotlin.compose.FindModifierFillMaxAndPaddingOrderSmell$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findmodifierfillmaxandpaddingordersmell$ktrecipe.md)
  * **Find `Modifier.fillMaxXxx().padding(...)` chains**
  * Modifier order matters: `Modifier.fillMaxSize().padding(8.dp)` fills the parent first and then insets — the visible content is smaller than the parent. `Modifier.padding(8.dp).fillMaxSize()` insets the available space and then fills it, producing a layout that hugs the padded box. The right order is intent-specific; flag chains for review.
* [org.openrewrite.kotlin.compose.FindModifierFillMaxWidthAfterFillMaxSize$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findmodifierfillmaxwidthafterfillmaxsize$ktrecipe.md)
  * **Find `Modifier.fillMaxSize().fillMaxWidth()` chains**
  * `fillMaxSize()` already constrains both width and height — appending `fillMaxWidth()` is redundant and signals the author wasn't sure which size operator they wanted. Drop the second call or swap to the single operator that captures the intent.
* [org.openrewrite.kotlin.compose.FindModifierOrderingSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findmodifierorderingsmells$ktrecipe.md)
  * **Find Compose `Modifier` ordering smells**
  * Modifier chains whose order produces a subtly wrong visual or interactive shape: `clickable` painted over by a later `background`, `fillMaxWidth` followed by `padding` (inset *after* the fill), and `fillMaxSize` immediately followed by a redundant `fillMaxWidth`/`fillMaxHeight`. Also surfaces `Modifier.weight(...)` calls outside a `Row`/`Column` scope, and overly long chains that could be hoisted into a named modifier.
* [org.openrewrite.kotlin.compose.FindModifierPaddingAfterFillMaxWidth$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findmodifierpaddingafterfillmaxwidth$ktrecipe.md)
  * **Find `Modifier.fillMaxWidth().padding(...)` chains**
  * `fillMaxWidth()` followed by `padding(...)` reserves the full width and then insets — the visible content is narrower than the parent. Most authors who write that chain meant `padding(...).fillMaxWidth()` so the inset comes first and the fill happens inside the inset region. The right order is intent-specific; flag for review.
* [org.openrewrite.kotlin.compose.FindModifierPaddingAllEqual$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findmodifierpaddingallequal$ktrecipe.md)
  * **Find `padding(start = x, end = x, top = x, bottom = x)` shorthand opportunities**
  * When every named `padding(...)` argument carries the same value, `padding(all = x)` (or just `padding(x)`) communicates the uniform inset in a single token. Mixed-value `padding(...)` is fine; equal-on-all-sides is a shorthand candidate.
* [org.openrewrite.kotlin.compose.FindModifierPaddingHorizontalEqualToVertical$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findmodifierpaddinghorizontalequaltovertical$ktrecipe.md)
  * **Find `padding(start = x, end = x, top = y, bottom = y)` shorthand opportunities**
  * `Modifier.padding(start = 8.dp, end = 8.dp, top = 16.dp, bottom = 16.dp)` reads as four independent insets but really means &quot;8 horizontal, 16 vertical&quot;. The shorter `padding(horizontal = 8.dp, vertical = 16.dp)` says that intent up front and survives a future change to one axis without re-pairing the values.
* [org.openrewrite.kotlin.compose.FindModifierPaddingZero$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findmodifierpaddingzero$ktrecipe.md)
  * **Find zero-valued `Modifier.padding(...)` calls**
  * `Modifier.padding(0.dp)` allocates a `PaddingValues` and a layout pass to inset by zero — the call is a no-op in terms of layout but not at runtime. Drop the call (or split out the surrounding chain so the zero edge isn't expressed at all).
* [org.openrewrite.kotlin.compose.FindModifierShorthands$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findmodifiershorthands$ktrecipe.md)
  * **Find `Modifier.padding(...)` shorthand opportunities**
  * Named-argument `padding(...)` calls whose values reduce to a shorter spelling: equal start/end + equal top/bottom collapses to `padding(horizontal = x, vertical = y)`; all-equal collapses to `padding(all = x)`; all-zero is a removable no-op.
* [org.openrewrite.kotlin.compose.FindModifierWeightOutsideRowColumn$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findmodifierweightoutsiderowcolumn$ktrecipe.md)
  * **Find `Modifier.weight(...)` calls outside a `Row`/`Column` scope**
  * `Modifier.weight(weight)` is an extension on `RowScope`/`ColumnScope` — calling it elsewhere is a compile error in well-typed code, but stub builds and intrinsic-measurement hacks let mis-scoped calls slip through. Flag any `weight(...)` on a `Modifier` chain whose nearest enclosing scoped builder isn't a `Row` or `Column`.
* [org.openrewrite.kotlin.compose.FindMutableCollectionAsComposableParam$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findmutablecollectionascomposableparam$ktrecipe.md)
  * **Find `@Composable` functions with `MutableList`/`MutableMap`/`MutableSet` parameters**
  * Compose's stability inferrer treats `MutableList`/`MutableMap`/`MutableSet` parameters as unstable — every recomposition compares by identity and re-invokes the composable even if no element changed. Use `kotlinx.collections.immutable.ImmutableList` (or wrap in a `@Stable` class) so equality checks short-circuit and recomposition is skipped.
* [org.openrewrite.kotlin.compose.FindMutableStateInClassField$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findmutablestateinclassfield$ktrecipe.md)
  * **Find `mutableStateOf(...)` stored in a class field**
  * `private val x = mutableStateOf(...)` at class scope ties the state to the lifetime of the enclosing class — ViewModel scope is fine, but UI-layer classes shouldn't be holding state for the composable. Hoist into a ViewModel or accept the state from the caller via parameters so recomposition and lifecycle agree on ownership.
* [org.openrewrite.kotlin.compose.FindMutableStateInComposableWithoutRemember$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findmutablestateincomposablewithoutremember$ktrecipe.md)
  * **Find bare `mutableStateOf(...)` inside `@Composable` without `remember \{ \}`**
  * A bare `mutableStateOf(...)` call inside a `@Composable` allocates a fresh `MutableState` on every recomposition, throwing away the previous value. Wrap in `remember \{ mutableStateOf(...) \}` so the snapshot survives recomposition (or hoist into a ViewModel if it needs to survive process death).
* [org.openrewrite.kotlin.compose.FindNavigateInComposableBody$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findnavigateincomposablebody$ktrecipe.md)
  * **Find `NavController.navigate(...)` calls in a `@Composable` body**
  * `navController.navigate(...)` called directly in the body fires on every recomposition, leading to navigation loops or back-stack corruption. Wrap in a `LaunchedEffect(key) \{ … \}` keyed by the condition that should trigger the navigation, or move the call into an event handler (`onClick = \{ … \}`).
* [org.openrewrite.kotlin.compose.FindNonComposableUsingComposableApis$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findnoncomposableusingcomposableapis$ktrecipe.md)
  * **Find non-`@Composable` functions calling `@Composable`-only APIs**
  * A function that calls `LaunchedEffect`/`remember`/`rememberCoroutineScope` but isn't annotated `@Composable` itself is a compile error in well-typed code, but suppressors and hand-rolled annotations let it slip through. Add `@Composable` to the function declaration so the contract is explicit.
* [org.openrewrite.kotlin.compose.FindObserveAsState$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findobserveasstate$ktrecipe.md)
  * **Find `LiveData.observeAsState()` calls — prefer `collectAsStateWithLifecycle()`**
  * `observeAsState()` ties subscription to the composition, not to the lifecycle owner — collection keeps running while the host activity is `STOPPED`. Migrate to `StateFlow` and `collectAsStateWithLifecycle()` (or stay on LiveData and use `androidx.lifecycle.compose.observeAsState`, which is lifecycle-aware in newer versions).
* [org.openrewrite.kotlin.compose.FindPublicMutableStateFlowProperty$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findpublicmutablestateflowproperty$ktrecipe.md)
  * **Find non-`private` `MutableStateFlow` properties**
  * Convention pattern: `private val _state = MutableStateFlow(...); val state: StateFlow&lt;T&gt; = _state.asStateFlow()`. A non-`private` `MutableStateFlow` property exposes the writable handle to consumers — anyone who can read it can also call `.value = …` or `tryEmit(...)`, breaking the unidirectional-data-flow contract the ViewModel is supposed to enforce. Make the field `private` and expose a read-only `StateFlow` view.
* [org.openrewrite.kotlin.compose.FindRecompositionSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findrecompositionsmells$ktrecipe.md)
  * **Find Compose recomposition smells**
  * Recomposition-related patterns whose default behavior surprises authors: `LazyColumn`/`LazyRow`/`LazyVerticalGrid` whose inner `items(...)` calls have no `key` (composition state churns on reorder), and lazy-list content lambdas that read snapshot state from the enclosing scope (every state change invalidates the entire list).
* [org.openrewrite.kotlin.compose.FindRememberCoroutineScopeInLambda$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findremembercoroutinescopeinlambda$ktrecipe.md)
  * **Find `rememberCoroutineScope()` calls inside a lambda**
  * `rememberCoroutineScope()` must be called from a composition-aware position — inside a lambda (like an `onClick`) it's a compile error. The recipe surfaces such mis-positioned calls so they migrate to the composable body proper.
* [org.openrewrite.kotlin.compose.FindRememberMutableListOfWithoutMutableState$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findremembermutablelistofwithoutmutablestate$ktrecipe.md)
  * **Find `remember \{ mutableListOf&lt;T&gt;() \}` patterns**
  * `remember \{ mutableListOf&lt;T&gt;() \}` survives recomposition but mutations to the list are invisible to Compose — adding an item won't trigger a re-render of any consumer that reads the list. Use `remember \{ mutableStateListOf&lt;T&gt;() \}` (or hoist to `mutableStateListOf&lt;T&gt;()` at file scope) so writes register as snapshot writes.
* [org.openrewrite.kotlin.compose.FindRememberNoKeys$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findremembernokeys$ktrecipe.md)
  * **Find `remember \{ … \}` calls with no keys**
  * `remember \{ … \}` with no key arguments caches once per call site forever. If the block references variables that vary between recompositions, the cache holds a stale value. Either pass the referenced variables as keys (`remember(input) \{ … \}`) or — if the value really is invariant — leave a comment justifying it.
* [org.openrewrite.kotlin.compose.FindRememberWithUnstableKey$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findrememberwithunstablekey$ktrecipe.md)
  * **Find `remember(mutableListOf(...), …)` and similar unstable-key calls**
  * A `remember(key, calc)` whose key is a fresh allocation — `mutableListOf(...)`, `arrayOf(...)`, `listOf(...)` — is structurally a new key on every recomposition. The cache resets every time, defeating the entire purpose of `remember`. Pass the underlying values that *do* survive recomposition (or stable references) as the keys.
* [org.openrewrite.kotlin.compose.FindRowWithSingleChild$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findrowwithsinglechild$ktrecipe.md)
  * **Find `Row \{ … \}` with a single child**
  * A `Row \{ OneChild() \}` allocates a layout node and runs the row measurement to position exactly one child. Either remove the row or replace with `Box(modifier = m)` if the row's `horizontalArrangement` actually does work the parent isn't.
* [org.openrewrite.kotlin.compose.FindSideEffectAllocationsInBody$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findsideeffectallocationsinbody$ktrecipe.md)
  * **Find `java.io.File(...)` allocations inside a `@Composable` body**
  * Filesystem objects allocated inside a `@Composable` body get rebuilt on every recomposition. Even if the constructor is cheap, the I/O performed by callers (`File.exists()`, `File.length()`) often is not. Move the allocation into a `remember \{ File(...) \}` block or out of the composable entirely.
* [org.openrewrite.kotlin.compose.FindSideEffectInComposableBody$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findsideeffectincomposablebody$ktrecipe.md)
  * **Find logging calls in `@Composable` bodies**
  * `android.util.Log`/`println` inside a `@Composable` body runs on every recomposition — often dozens of times during a single user interaction — producing log spam and disguising real telemetry. Move the call into a `SideEffect \{ \}` (or a `LaunchedEffect(key) \{ \}`) so it fires once per successful composition, or out of the composable entirely.
* [org.openrewrite.kotlin.compose.FindSideEffectSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findsideeffectsmells$ktrecipe.md)
  * **Find Compose effect-handler misuse**
  * Effect calls whose shape mismatches the effect's contract: `SideEffect(key) \{ \}` (`SideEffect` takes no keys); `LaunchedEffect \{ \}` with no key (use `LaunchedEffect(Unit)`); `LaunchedEffect` lambdas with several distinct suspend calls that probably want splitting.
* [org.openrewrite.kotlin.compose.FindSideEffectWithKey$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findsideeffectwithkey$ktrecipe.md)
  * **Find `SideEffect(key) \{ … \}` calls**
  * `SideEffect \{ \}` takes no keys — it runs after every successful composition. Passing an argument suggests the author meant `LaunchedEffect(key) \{ \}` (lifecycle-tied) or `DisposableEffect(key) \{ … \}` (cleanup-tied). Either drop the argument or switch to the keyed effect type.
* [org.openrewrite.kotlin.compose.FindStableAnnotationOnClassWithMutableCollection$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findstableannotationonclasswithmutablecollection$ktrecipe.md)
  * **Find `@Stable` classes holding mutable-collection properties**
  * An `@Stable` class with a `MutableList`/`MutableMap`/`MutableSet` property cannot uphold the contract: the collection can mutate without `equals`/`hashCode` reflecting the change, so Compose's skip-when-equal heuristic produces stale UI. Replace with `ImmutableList`/`PersistentList` or drop the `@Stable` annotation.
* [org.openrewrite.kotlin.compose.FindStableAnnotationOnMutableClass$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findstableannotationonmutableclass$ktrecipe.md)
  * **Find `@Stable` on classes with `var` properties**
  * `@Stable` is a contract: callers may skip recomposition when input references compare equal, and the class promises that `equals`/`hashCode` reflect all observable state. A `var` property breaks both halves — the value can mutate without anyone updating the snapshot system, so the annotation lies and downstream `@Composable`s silently skip required recompositions.
* [org.openrewrite.kotlin.compose.FindStateAndRememberSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findstateandremembersmells$ktrecipe.md)
  * **Find Compose state + remember misuse**
  * State that does not survive recomposition the way the author intended: `remember(unstableKey, …)` whose key is itself a fresh allocation; `by remember \{ … \}` whose body isn't a `MutableState` (the delegate is a no-op); `remember \{ mutableListOf(...) \}` where the mutations bypass the snapshot system.
* [org.openrewrite.kotlin.compose.FindStateFlowDirectCollect$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findstateflowdirectcollect$ktrecipe.md)
  * **Find `viewModel.uiState.collectAsState()` calls — confirm lifecycle-aware collection**
  * `viewModel.uiState.collectAsState()` keeps the collector active while the host is in the background — `collectAsStateWithLifecycle()` is the lifecycle-aware analogue. Both work; the recipe surfaces the call so each ViewModel-collection site is verified rather than defaulted.
* [org.openrewrite.kotlin.compose.FindStateValueRead$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findstatevalueread$ktrecipe.md)
  * **Find `state.value` reads inside a `@Composable`**
  * Reading `state.value` works but loses the `by` delegate ergonomics — and worse, with `remember \{ mutableStateOf(...) \}` plus `.value`, it is easy to forget the `remember` and create a fresh `MutableState` per recomposition. Prefer `val state by remember \{ mutableStateOf(...) \}` so the type checker keeps the snapshot read implicit.
* [org.openrewrite.kotlin.compose.FindSurfaceWithSingleChild$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findsurfacewithsinglechild$ktrecipe.md)
  * **Find `Surface \{ OneChild() \}` patterns**
  * A `Surface \{ OneChild() \}` wrapper that only sets a tonal elevation or color is rarely the right place to live — the same effect is achievable by passing `Modifier.background(...)` or `Modifier.shadow(...)` directly to the child. Audit single-child surfaces for redundancy.
* [org.openrewrite.kotlin.compose.FindUnnecessaryComposeWrappers$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findunnecessarycomposewrappers$ktrecipe.md)
  * **Find single-child wrapper composables (Material 3)**
  * Material 3 wrapper composables that add a layout node and a styling pass for exactly one child: `Surface \{ OneChild() \}` and `Card \{ OneChild() \}`. Audit for redundancy — the same styling can usually be expressed by passing `Modifier.background`/`Modifier.shadow` to the child.
* [org.openrewrite.kotlin.compose.FindViewModelInComposable$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/findviewmodelincomposable$ktrecipe.md)
  * **Find `viewModel&lt;X&gt;()` calls inside `@Composable`**
  * `viewModel&lt;X&gt;()` retrieves a `ViewModel` scoped to the nearest `ViewModelStoreOwner`. Inside a generic composable this couples the composable to the host's `ViewModelStoreOwner` provision — fine at screen entry points, surprising deep in a component tree. Flag to confirm intent.
* [org.openrewrite.kotlin.compose.ImproveKotlinCompose$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/improvekotlincompose$ktrecipe.md)
  * **Apply Compose autofix rewrites**
  * Autofix-only Compose bundle: promotes `remember \{ mutableStateOf(emptyList/Map()) \}` to the snapshot-aware `mutableStateListOf` / `mutableStateMapOf` containers. The bulk of Compose remediation is judgement-call work flagged by `Compose` — for diff-only output, use this recipe instead.
* [org.openrewrite.kotlin.compose.UseMutableStateListOf$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/usemutablestatelistof$ktrecipe.md)
  * **Find `remember \{ mutableStateOf(emptyList&lt;T&gt;()) \}` candidates for `mutableStateListOf`**
  * `remember \{ mutableStateOf(emptyList()) \}` boxes the list in a `MutableState`, so writes require `state.value = state.value + item`. `mutableStateListOf&lt;T&gt;()` is a snapshot-aware list: `add`/`remove` register as snapshot writes and trigger recomposition for readers.
* [org.openrewrite.kotlin.compose.UseMutableStateMapOf$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/usemutablestatemapof$ktrecipe.md)
  * **Find `remember \{ mutableStateOf(emptyMap&lt;K, V&gt;()) \}` candidates for `mutableStateMapOf`**
  * `remember \{ mutableStateOf(emptyMap()) \}` boxes the map in a `MutableState`, so writes require `state.value = state.value + …` (or a clone). `mutableStateMapOf&lt;K, V&gt;()` is a snapshot-aware map: direct `put`/`remove` calls register as snapshot writes and trigger recomposition for readers.
* [org.openrewrite.kotlin.compose.UseSpecializedComposeStateContainers$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/compose/usespecializedcomposestatecontainers$ktrecipe.md)
  * **Find `remember \{ mutableStateOf(emptyList/Map()) \}` candidates for snapshot-aware containers**
  * Patterns like `remember \{ mutableStateOf(emptyList()) \}` box the collection in a `MutableState` — direct `add`/`put` calls bypass the snapshot system. `mutableStateListOf&lt;T&gt;()` / `mutableStateMapOf&lt;K, V&gt;()` are snapshot-aware containers whose mutations register as snapshot writes and notify readers.
* [org.openrewrite.kotlin.coroutines.Coroutines$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/coroutines$ktrecipe.md)
  * **Modernize Kotlin coroutines code**
  * Search-only recipes that surface coroutine-related issues IntelliJ IDEA 2026.1's coroutine inspections flag: structured-concurrency leaks, blocking on suspend contexts, Flow operator misorder, and hand-rolled sequencing where a canonical operator exists. Each match is a `SearchResult` for review — nothing is rewritten automatically.
* [org.openrewrite.kotlin.coroutines.FindAsyncImmediatelyAwait$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findasyncimmediatelyawait$ktrecipe.md)
  * **Find `async \{ ... \}.await()` patterns**
  * `async \{ … \}.await()` on its own is structurally identical to `withContext \{ … \}` plus an extra `Deferred` allocation. Use `withContext(ctx) \{ … \}` (or just inline the body) — `async` is for concurrency, not sequencing.
* [org.openrewrite.kotlin.coroutines.FindBareCoroutineScopeCtor$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findbarecoroutinescopector$ktrecipe.md)
  * **Find raw `CoroutineScope(...)` constructions**
  * A `CoroutineScope(...)` constructed inline must be cancelled explicitly when its owner is torn down; nothing automatic ties it to a lifecycle. Prefer one of the framework scopes (`viewModelScope`, `lifecycleScope`) or own the cancellation explicitly in a `Closeable`.
* [org.openrewrite.kotlin.coroutines.FindBlockingOnSuspend$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findblockingonsuspend$ktrecipe.md)
  * **Find blocking calls inside coroutine contexts**
  * Java-monitor and `runBlocking` primitives that pin the dispatcher thread when invoked from a suspend function or coroutine builder. Each match needs to migrate to a coroutine-aware signaling primitive (`delay`, `Channel`, `Mutex`, `CompletableDeferred`).
* [org.openrewrite.kotlin.coroutines.FindCallbackFlowWithoutAwaitClose$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findcallbackflowwithoutawaitclose$ktrecipe.md)
  * **Find `callbackFlow \{ \}` blocks without an `awaitClose \{ \}` terminator**
  * `callbackFlow \{ \}` must end with `awaitClose \{ \}` to suspend until the consumer cancels. Without it, the producer either completes immediately (silent drop) or throws — the same flow needs to register its cleanup hook in `awaitClose \{ \}`.
* [org.openrewrite.kotlin.coroutines.FindCoroutineScopeBuilderWithSingleLaunch$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findcoroutinescopebuilderwithsinglelaunch$ktrecipe.md)
  * **Find `coroutineScope \{ launch \{ ... \} \}` with a single child**
  * A `coroutineScope \{ launch \{ … \} \}` containing a single `launch` is equivalent to just running the launch body inline — the surrounding scope adds an allocation and a synchronization point with nothing to coordinate.
* [org.openrewrite.kotlin.coroutines.FindCoroutineSequencingSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findcoroutinesequencingsmells$ktrecipe.md)
  * **Find coroutine sequencing smells**
  * Hand-rolled sequencing that would be cleaner with the canonical operators: `map \{ it.await() \}` (use `awaitAll`), `forEach \{ it.join() \}` (use `joinAll`), `async \{ \}.await()` (use `withContext` or inline), nested `withContext`, `coroutineScope \{ launch \{ \} \}` with a single child.
* [org.openrewrite.kotlin.coroutines.FindDebounceBeforeDistinctUntilChanged$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/finddebouncebeforedistinctuntilchanged$ktrecipe.md)
  * **Find `debounce(...).distinctUntilChanged()` patterns**
  * `debounce` already drops intermediate values within the window; adding `distinctUntilChanged` after it is redundant if the upstream is already deduped. Verify whether `distinctUntilChanged` belongs before `debounce`, where it can prevent re-firing the debounce window for repeated values.
* [org.openrewrite.kotlin.coroutines.FindFlowAntiPatterns$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findflowantipatterns$ktrecipe.md)
  * **Find Flow operator antipatterns**
  * Flow chains where operator order, sharing configuration, or terminal placement undermines the intended behavior — collapsible `map.map` / `filter.filter`, `flowOn` past a terminal, `stateIn`/`shareIn` without an explicit timeout, `Flow.collect` inside `@Composable`, etc.
* [org.openrewrite.kotlin.coroutines.FindFlowCollectInsideCompose$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findflowcollectinsidecompose$ktrecipe.md)
  * **Find `Flow.collect` calls inside a `@Composable`**
  * `Flow.collect` inside a `@Composable` ties collection to recomposition rather than the composable's lifecycle, leaking work on re-entry. Use `collectAsStateWithLifecycle` (Compose) or wrap with `LaunchedEffect \{ flow.collect \{ … \} \}`.
* [org.openrewrite.kotlin.coroutines.FindFlowFilterFilterChain$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findflowfilterfilterchain$ktrecipe.md)
  * **Find `Flow.filter \{ \} .filter \{ \}` chains**
  * Adjacent `Flow.filter \{ \}` calls do twice the work a combined predicate would do. Fold them into one `filter \{ p1(it) &amp;&amp; p2(it) \}`.
* [org.openrewrite.kotlin.coroutines.FindFlowMapMapChain$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findflowmapmapchain$ktrecipe.md)
  * **Find `Flow.map \{ \} .map \{ \}` chains**
  * Two adjacent `Flow.map \{ \}` operators emit through two `transform` stages where one would do. Fold them into a single `map`, or use `map \{ (a, b) -&gt; … \}` destructuring.
* [org.openrewrite.kotlin.coroutines.FindFlowOfWithVararg$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findflowofwithvararg$ktrecipe.md)
  * **Find `flowOf(...)` calls — verify size**
  * `flowOf(items)` materializes each item upfront — for hot data or large fanout, prefer `flow \{ items.forEach \{ emit(it) \} \}` or a `Channel`-backed flow to avoid the upfront vararg array.
* [org.openrewrite.kotlin.coroutines.FindFlowOnAfterTerminal$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findflowonafterterminal$ktrecipe.md)
  * **Find `Flow.flowOn` placed after a terminal operator**
  * `flowOn(...)` applies to upstream operators only. Placing it after a terminal like `collect`, `first`, or `toList` is a no-op — the producer dispatcher is whatever the collector inherits.
* [org.openrewrite.kotlin.coroutines.FindForEachJoin$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findforeachjoin$ktrecipe.md)
  * **Find `forEach \{ it.join() \}` over `List&lt;Job&gt;`**
  * Sequential `.forEach \{ it.join() \}` waits for each `Job` to complete before starting the next wait. `joinAll()` waits for all jobs concurrently with a single suspension point.
* [org.openrewrite.kotlin.coroutines.FindGlobalScopeActor$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findglobalscopeactor$ktrecipe.md)
  * **Find `GlobalScope.actor` calls**
  * `GlobalScope.actor \{ \}` is structurally identical to `GlobalScope.launch`: the actor coroutine has no parent and cannot be cancelled cooperatively. Use a lifecycle-scoped `actor` instead.
* [org.openrewrite.kotlin.coroutines.FindGlobalScopeAsync$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findglobalscopeasync$ktrecipe.md)
  * **Find `GlobalScope.async` calls**
  * `GlobalScope.async \{ \}` produces an orphan `Deferred` that has no parent in the structured-concurrency tree. Exceptions thrown from this coroutine are dropped until something `await()`s the result — and if nothing does, they vanish silently.
* [org.openrewrite.kotlin.coroutines.FindGlobalScopeLaunch$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findglobalscopelaunch$ktrecipe.md)
  * **Find `GlobalScope.launch` calls**
  * `GlobalScope.launch \{ \}` is a fire-and-forget coroutine builder with no parent — it cannot be cancelled with the lifecycle that started it and leaks if the work outlives the screen/process. Prefer a scoped `CoroutineScope` tied to the lifecycle (`viewModelScope`, `lifecycleScope`, or an explicit scope cancelled in `onCleared`).
* [org.openrewrite.kotlin.coroutines.FindGlobalScopeProduce$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findglobalscopeproduce$ktrecipe.md)
  * **Find `GlobalScope.produce` calls**
  * `GlobalScope.produce \{ \}` returns an unscoped `ReceiveChannel` that keeps running until its producer block returns. Anchor the channel to a scope owned by the surrounding lifecycle.
* [org.openrewrite.kotlin.coroutines.FindJobAsContext$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findjobascontext$ktrecipe.md)
  * **Find raw `Job()` allocations**
  * Raw `Job()` calls usually feed a `CoroutineScope(...)` context, where they signal an intent to manage coroutine lifecycle manually. That manual lifecycle is easy to forget to cancel; prefer `SupervisorJob()` paired with a scope tied to the surrounding lifecycle (e.g. `viewModelScope`).
* [org.openrewrite.kotlin.coroutines.FindMapAwait$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findmapawait$ktrecipe.md)
  * **Find `map \{ it.await() \}` over `List&lt;Deferred&lt;T&gt;&gt;`**
  * Sequential `.map \{ it.await() \}` waits for each `Deferred` in turn and rethrows the first exception only after every earlier element completes. `awaitAll()` waits concurrently and rethrows immediately on the first failure.
* [org.openrewrite.kotlin.coroutines.FindMutableStateFlowNullable$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findmutablestateflownullable$ktrecipe.md)
  * **Find `MutableStateFlow&lt;T?&gt;(null)` declarations**
  * Nullable `MutableStateFlow&lt;T?&gt;` is a common pattern for 'no value yet', but collapses the empty state and the value-is-null state into one. A `SharedFlow&lt;T&gt;` with `replay = 0` and explicit `tryEmit` (or a sealed wrapper `UiState.Empty | Loaded(T)`) usually expresses intent more precisely.
* [org.openrewrite.kotlin.coroutines.FindObjectNotifyInSuspend$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findobjectnotifyinsuspend$ktrecipe.md)
  * **Find `Object.notify` / `notifyAll` calls inside `suspend` functions**
  * Monitor-based signaling (`notify`/`notifyAll`) doesn't compose with coroutine cancellation or structured concurrency. Replace with a `Channel`, `MutableSharedFlow`, or `CompletableDeferred` to wake suspended coroutines.
* [org.openrewrite.kotlin.coroutines.FindObjectWaitInSuspend$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findobjectwaitinsuspend$ktrecipe.md)
  * **Find `Object.wait` calls inside `suspend` functions**
  * `Object.wait()` blocks the dispatcher thread on a monitor and cannot be interrupted by coroutine cancellation. Migrate to `Channel`/`Flow`/`Mutex` or a `CompletableDeferred` for cross-coroutine signaling.
* [org.openrewrite.kotlin.coroutines.FindRunBlockingInLaunch$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findrunblockinginlaunch$ktrecipe.md)
  * **Find `runBlocking` calls inside a `launch`/`async` lambda**
  * `runBlocking` inside an outer coroutine builder pins the dispatcher thread until the inner block returns, defeating the cooperative scheduling the outer builder set up. Inline the suspending body — you're already in a suspend context.
* [org.openrewrite.kotlin.coroutines.FindRunBlockingInSuspend$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findrunblockinginsuspend$ktrecipe.md)
  * **Find `runBlocking` calls inside `suspend` functions**
  * `runBlocking` inside a `suspend` function blocks the calling thread until the inner block finishes, defeating cooperative cancellation and pinning a thread that the dispatcher could otherwise reuse. From a suspend context, the block can be inlined or wrapped in `withContext(...)` instead.
* [org.openrewrite.kotlin.coroutines.FindShareInWithoutTimeout$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findshareinwithouttimeout$ktrecipe.md)
  * **Find `shareIn` calls without a timeout-parameterized start**
  * Same trap as `stateIn` — without an explicit `WhileSubscribed(timeoutMillis)`, an unused upstream producer keeps running, and config changes (which momentarily drop subscriber counts) can either drop state or hold work alive.
* [org.openrewrite.kotlin.coroutines.FindStateInWithoutTimeout$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findstateinwithouttimeout$ktrecipe.md)
  * **Find `stateIn` with `SharingStarted.Eagerly` or unparameterized start**
  * `stateIn(scope)` with the default `Eagerly` start keeps the upstream Flow producing forever (no last-subscriber timeout). For UI state, `WhileSubscribed(5_000)` is the canonical setting — it survives configuration changes without leaking the producer.
* [org.openrewrite.kotlin.coroutines.FindStructuredConcurrencyLeaks$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findstructuredconcurrencyleaks$ktrecipe.md)
  * **Find structured-concurrency leaks**
  * Coroutine builders that escape the structured-concurrency tree: `GlobalScope` builders, raw `Job()` / `CoroutineScope(...)` allocations, and `suspendCoroutine` calls that ignore cancellation. Each match is a `SearchResult` for review.
* [org.openrewrite.kotlin.coroutines.FindSuspendCoroutineWithoutCancellation$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findsuspendcoroutinewithoutcancellation$ktrecipe.md)
  * **Find `suspendCoroutine` calls**
  * `suspendCoroutine` lacks cancellation hooks — if the surrounding coroutine is cancelled before the continuation resumes, the underlying callback work runs to completion uselessly. Switch to `suspendCancellableCoroutine` so the continuation block can register an `invokeOnCancellation` callback.
* [org.openrewrite.kotlin.coroutines.FindThreadSleepInSuspend$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findthreadsleepinsuspend$ktrecipe.md)
  * **Find `Thread.sleep` calls inside `suspend` functions**
  * `Thread.sleep` parks the underlying dispatcher thread and ignores coroutine cancellation. From a suspend function, use `delay(ms)` — it suspends without blocking and integrates with structured cancellation.
* [org.openrewrite.kotlin.coroutines.FindWithContextInsideSameDispatcher$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/coroutines/findwithcontextinsidesamedispatcher$ktrecipe.md)
  * **Find nested `withContext` calls**
  * A `withContext(...)` nested inside another `withContext(...)` rarely makes sense — the inner switch only matters if the dispatchers differ, and in either case the redundancy is worth a second look.
* [org.openrewrite.kotlin.functional.FindCatchAllException$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findcatchallexception$ktrecipe.md)
  * **Find broad `catch (e: Exception)` / `catch (e: Throwable)` clauses**
  * `catch (e: Exception)` catches almost everything — `IllegalArgumentException`, `ConcurrentModificationException`, even programmer-error `NullPointerException`. `catch (e: Throwable)` is worse: it catches `OutOfMemoryError` and `kotlinx.coroutines.CancellationException`. Each broad catch is a candidate for narrowing to the specific exceptions the surrounding code is prepared to handle.
* [org.openrewrite.kotlin.functional.FindCatchAndRethrowNewExceptionWithoutCause$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findcatchandrethrownewexceptionwithoutcause$ktrecipe.md)
  * **Find `catch (e: Exception) \{ throw OtherException(...) \}` without `e` as cause**
  * Catching one exception and throwing a different one without passing the original as the `cause` argument loses the original stack trace at the throw site — debugging then starts from the wrapping exception with no breadcrumbs to the actual failure. Include `e` in the new exception's constructor (or use `.initCause(e)`).
* [org.openrewrite.kotlin.functional.FindCatchAndRethrowSameException$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findcatchandrethrowsameexception$ktrecipe.md)
  * **Find `catch (e: Exception) \{ throw e \}` patterns**
  * A catch whose only statement is `throw e` is a no-op: the same exception flows through the same way it would have without the try. Drop the entire try/catch (or, if there's a `finally`, switch to a try/finally).
* [org.openrewrite.kotlin.functional.FindCatchBindingUnusedException$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findcatchbindingunusedexception$ktrecipe.md)
  * **Find `catch (e: Exception)` clauses whose body never references `e`**
  * If the catch body never reads the bound exception parameter — and there's still some statement that handles the recovery — the binding name is dead weight. Use `catch (_: Exception)` to make 'I have no use for the exception' explicit, and so future readers don't waste time looking for where `e` gets used.
* [org.openrewrite.kotlin.functional.FindCatchWithoutLogging$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findcatchwithoutlogging$ktrecipe.md)
  * **Find non-empty catch blocks that neither log nor rethrow**
  * A catch that handles the exception by silently absorbing it (without logging, without rethrowing, without storing it) loses every detail of the failure. Either log with the exception as the cause (`log.error(&quot;context&quot;, e)`), rethrow as a wrapping exception, or capture the exception into a `Result`/sealed result type.
* [org.openrewrite.kotlin.functional.FindNestedTryCatch$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findnestedtrycatch$ktrecipe.md)
  * **Find `try \{ \} catch \{ \}` nested inside another `try \{ \} catch \{ \}`**
  * A try nested inside another try usually means two failure modes are being handled at two different recovery points in the same control-flow tree. Pull each failure mode into its own helper function (or into a `runCatching \{ \}.fold(...)` chain) so the recovery strategy is visible at each level.
* [org.openrewrite.kotlin.functional.FindNullabilityErgonomics$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findnullabilityergonomics$ktrecipe.md)
  * **Find nullability idiom opportunities**
  * Search-only bundle for nullable-handling `if/else` shapes that map to Kotlin idioms: `if (x != null) x else default` (use `?:`), `if (x != null) f(x) else null` (use `x?.let \{ f(it) \}`), `if (x == null) throw IllegalArgumentException` (use `requireNotNull`), `if (x == null) throw IllegalStateException` (use `checkNotNull`), and `if (p(x)) x else null` (use `x.takeIf \{ p(it) \}`).
* [org.openrewrite.kotlin.functional.FindPrintStackTraceInCatch$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findprintstacktraceincatch$ktrecipe.md)
  * **Find `e.printStackTrace()` calls inside a catch block**
  * `e.printStackTrace()` writes to stderr — which in most server environments is either unread, unrotated, or both. Replace with a real logger call (`log.error(&quot;context&quot;, e)`) so the stack trace lands in the same place every other error in the application does.
* [org.openrewrite.kotlin.functional.FindResultErgonomics$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findresultergonomics$ktrecipe.md)
  * **Find `Result&lt;T&gt;` API ergonomics opportunities**
  * Search-only bundle for `Result&lt;T&gt;` call sites where a different operator would be clearer: `if (result.isSuccess) … else …` (use `.fold(...)`), `Result.map \{ … \}.getOrThrow()` (drop the Result wrapper or use `.fold(...)`), and `getOrElse \{ default \}` whose lambda ignores the failure (use `getOrDefault(default)`).
* [org.openrewrite.kotlin.functional.FindResultFoldImperative$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findresultfoldimperative$ktrecipe.md)
  * **Find `if (result.isSuccess) … else …` patterns**
  * Branching on `Result.isSuccess` / `Result.isFailure` and then unwrapping with `getOrNull()` / `exceptionOrNull()` is the imperative form of `result.fold(onSuccess, onFailure)`. The `.fold(...)` form is total (the compiler verifies both branches are present) and reads as the value-producing expression it actually is.
* [org.openrewrite.kotlin.functional.FindResultGetOrElseIgnoringFailure$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findresultgetorelseignoringfailure$ktrecipe.md)
  * **Find `Result.getOrElse \{ \}` whose lambda ignores the failure parameter**
  * `result.getOrElse \{ default \}` (lambda ignores its parameter) is exactly `result.getOrDefault(default)`. The `getOrDefault` form makes the intent — 'a constant fallback, the exception type is irrelevant' — explicit in the call name.
* [org.openrewrite.kotlin.functional.FindResultGetOrThrow$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findresultgetorthrow$ktrecipe.md)
  * **Find `.getOrThrow()` calls on a `Result&lt;T&gt;`**
  * `Result.getOrThrow()` unwraps success or rethrows the captured failure. If the call site does that immediately after `runCatching \{ … \}`, the `Result` round-trip is pure ceremony — the same value with the same failure mode comes out of the bare expression. Prefer the bare expression, or use `.fold(...)` / `.getOrElse \{ … \}` to actually do something with the failure.
* [org.openrewrite.kotlin.functional.FindResultMapWithoutErrorHandling$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findresultmapwithouterrorhandling$ktrecipe.md)
  * **Find `Result.map \{ \}.getOrThrow()` chains**
  * `result.map \{ transform(it) \}.getOrThrow()` is `result.fold(::transform, \{ throw it \})` written long-hand — and `.fold(...)` keeps the transformation and the failure handling next to each other. If the failure branch really is 'rethrow', drop the `Result` wrapper entirely and put the transformation inside `runCatching \{ \}`.
* [org.openrewrite.kotlin.functional.FindRunCatchingForLogOnly$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findruncatchingforlogonly$ktrecipe.md)
  * **Find `runCatching \{ \}.onFailure \{ log… \}` chains with no further handling**
  * `runCatching \{ … \}.onFailure \{ log.error(&quot;…&quot;, it) \}` — when nothing follows the `onFailure` — succeeds-on-error rather than just observing. Often fine, but worth a glance: usually the caller still needs to know success/failure happened (return the `Result`, or chain `.getOrElse \{ fallback \}`).
* [org.openrewrite.kotlin.functional.FindRunCatchingGetOrNullDiscardingError$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findruncatchinggetornulldiscardingerror$ktrecipe.md)
  * **Find `runCatching \{ \}.getOrNull()` chains**
  * `runCatching \{ … \}.getOrNull()` silently swallows every failure and replaces it with `null`. The shape is fine for fire-and-forget side effects, but for value-producing calls you usually want at least an `onFailure \{ \}` hook for diagnostics, or `.getOrElse \{ default \}` so the failure is observable.
* [org.openrewrite.kotlin.functional.FindRunCatchingOnSuccessOnly$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findruncatchingonsuccessonly$ktrecipe.md)
  * **Find `runCatching \{ \}.onSuccess \{ … \}` chains with no failure handler**
  * `runCatching \{ \}.onSuccess \{ … \}` with nothing after it discards the failure side of the `Result`. The success block runs only on success; the failure case vanishes silently. Add a paired `.onFailure \{ \}` for diagnostics, or `.fold(::onSuccess, ::onFailure)` to make both cases explicit.
* [org.openrewrite.kotlin.functional.FindRunCatchingSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findruncatchingsmells$ktrecipe.md)
  * **Find `runCatching \{ \}` smells**
  * Search-only bundle covering the most common `runCatching \{ \}` pitfalls: swallowing `CancellationException`, collapsing failures into `null` via `.getOrNull()`, discarding the `Result` in statement context, log-only handlers that drop the failure on the floor, `.onSuccess \{ \}` chains with no failure handler, and `.getOrThrow()` patterns that turn the `Result` round-trip into pure ceremony.
* [org.openrewrite.kotlin.functional.FindRunCatchingSwallowingCancellation$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findruncatchingswallowingcancellation$ktrecipe.md)
  * **Find `runCatching \{ \}` blocks that may swallow `CancellationException`**
  * `runCatching \{ \}` catches every `Throwable`, including `kotlinx.coroutines.CancellationException`. Inside a coroutine that's a bug — `CancellationException` is the cooperative-cancellation signal, and swallowing it stops the coroutine from cancelling. Either avoid `runCatching` in suspending code, or rethrow with `.onFailure \{ if (it is CancellationException) throw it \}` before any other handling.
* [org.openrewrite.kotlin.functional.FindRunCatchingWithoutHandling$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findruncatchingwithouthandling$ktrecipe.md)
  * **Find `runCatching \{ \}` calls whose result is discarded**
  * A `runCatching \{ \}` in statement context throws nothing and returns nothing — the `Result&lt;T&gt;` is allocated and dropped on the floor. If the intent was 'do this, but don't fail the caller', wrap with `.onFailure \{ log(it) \}`; if the intent was 'do this, ignoring exceptions', say so with `try \{ … \} catch (_: Exception) \{ \}` (or rethink whether to swallow at all).
* [org.openrewrite.kotlin.functional.FindThrowCatchSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findthrowcatchsmells$ktrecipe.md)
  * **Find throw/catch shape smells**
  * Search-only bundle for throw shapes inside catch blocks: bare-`RuntimeException`/`Exception` wrappers that discard contextual messages, useless `catch \{ throw e \}` blocks, and rethrows of new exception types that don't pass the caught exception as `cause`.
* [org.openrewrite.kotlin.functional.FindTryCatchReturningDefault$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findtrycatchreturningdefault$ktrecipe.md)
  * **Find `try \{ x \} catch (e: Exception) \{ default \}` patterns**
  * A try whose catch returns a non-null default value maps directly to `runCatching \{ x \}.getOrDefault(default)` or `.getOrElse \{ default \}`. The latter is preferred when the default depends on the exception type.
* [org.openrewrite.kotlin.functional.FindTryCatchReturningNull$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findtrycatchreturningnull$ktrecipe.md)
  * **Find `try \{ x \} catch (e: Exception) \{ null \}` patterns**
  * Swallowing every exception into `null` discards diagnostic information and conflates 'no value' with 'I lost the cause'. `runCatching \{ x \}.getOrNull()` matches the shape, and `.onFailure \{ … \}` keeps a hook for diagnostics if you decide you want one later.
* [org.openrewrite.kotlin.functional.FindTryCatchSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findtrycatchsmells$ktrecipe.md)
  * **Find raw `try`/`catch` smells**
  * Search-only bundle for try/catch shapes worth reviewing: collapse-to-null and collapse-to-default branches (candidates for `runCatching \{ \}.getOrNull()` / `.getOrDefault(...)`), empty catches that lose every detail of the failure, broad `catch (Exception)` / `catch (Throwable)` clauses, catches that absorb the exception without logging or rethrowing, `e.printStackTrace()` calls that should be logger calls, nested try/catch trees, and catch parameters that are bound but never read.
* [org.openrewrite.kotlin.functional.FindTryCatchSwallowingException$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findtrycatchswallowingexception$ktrecipe.md)
  * **Find empty catch blocks**
  * An empty catch (`catch (e: Exception) \{ \}`) eats every exception and produces no record of it ever happening. Even a logger call records that something went wrong; an empty block makes the failure undebuggable.
* [org.openrewrite.kotlin.functional.FindUseCheckForState$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findusecheckforstate$ktrecipe.md)
  * **Find `if (x == null) throw IllegalStateException(...)` patterns**
  * `checkNotNull(x) \{ &quot;…&quot; \}` is the state-precondition twin of `requireNotNull`: throws `IllegalStateException` when `x` is null and smart-casts to non-nullable on return. Use it for invariants about the object's state, leaving `requireNotNull` for arguments.
* [org.openrewrite.kotlin.functional.FindUseElvisForNullableDefault$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/finduseelvisfornullabledefault$ktrecipe.md)
  * **Find `if (x != null) x else default` patterns**
  * `if (x != null) x else default` is the elvis operator written long-hand: `x ?: default`. The elvis form composes naturally with chains (`a ?: b ?: c`) and keeps the value derivation in a single expression.
* [org.openrewrite.kotlin.functional.FindUseLetForNullableMap$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/finduseletfornullablemap$ktrecipe.md)
  * **Find `if (x != null) f(x) else null` patterns**
  * `if (x != null) f(x) else null` is `x?.let \{ f(it) \}` written long-hand. The `?.let \{ \}` form is more concise and (when `f` is a member call) collapses further to `x?.f(...)`.
* [org.openrewrite.kotlin.functional.FindUseRequireForPrecondition$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/finduserequireforprecondition$ktrecipe.md)
  * **Find `if (x == null) throw IllegalArgumentException(...)` patterns**
  * Kotlin's `requireNotNull(x) \{ &quot;…&quot; \}` is the idiomatic precondition check: it throws `IllegalArgumentException` when `x` is null, smart-casts `x` to its non-nullable type after the call, and reads as the assertion it is. The `if/throw` form does the same thing without the smart-cast.
* [org.openrewrite.kotlin.functional.FindUseTakeIfForFilter$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findusetakeifforfilter$ktrecipe.md)
  * **Find `if (predicate(x)) x else null` patterns**
  * `if (predicate(x)) x else null` is `x.takeIf \{ predicate(it) \}` written long-hand. The `takeIf` form keeps the value as the focal point and composes with `?.let \{ \}` / elvis (`x.takeIf \{ … \} ?: default`).
* [org.openrewrite.kotlin.functional.FindWrappingExceptionInCatch$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/findwrappingexceptionincatch$ktrecipe.md)
  * **Find `throw RuntimeException(e)` inside a catch block**
  * Wrapping the caught exception in a bare `RuntimeException`/`Exception` discards the contextual message the catch site should be adding. Wrap with a domain-specific subclass and a real message (`throw FetchFailedException(&quot;fetch profile for $userId&quot;, e)`), or rethrow `e` directly if there's nothing to add.
* [org.openrewrite.kotlin.functional.Functional$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/functional/functional$ktrecipe.md)
  * **Modernize Kotlin functional / `Result` ergonomics**
  * Search-only recipes that surface `kotlin.Result` / `runCatching \{ \}` smells and try/catch shapes that map cleanly to Kotlin idioms (`.fold(...)`, `.getOrNull()`, `.getOrDefault(...)`, `?:`, `?.let \{ \}`, `requireNotNull`, `checkNotNull`). Most of the actual rewrites involve moving statements between try-body / catch-body / Result-chain shapes, which the declarative `rewrite \{ \} to \{ \}` DSL doesn't model yet — so each match is a `SearchResult` for human review.
* [org.openrewrite.kotlin.idiom.FindAlsoWithMutation$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findalsowithmutation$ktrecipe.md)
  * **Find `also \{ \}` blocks that mutate the receiver**
  * `also \{ \}` is for side effects that don't change the receiver — logging, validation, registering a callback. If the lambda mutates `it`, prefer `apply \{ … \}`, which is built for that and reads as configuration.
* [org.openrewrite.kotlin.idiom.FindApplyResultUnused$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findapplyresultunused$ktrecipe.md)
  * **Find `?.apply \{ \}` whose result is discarded**
  * `x?.apply \{ … \}` returns the receiver, but if the result is discarded the safe-call's return value adds nothing. Use `x?.also \{ … \}` or move the side effect out of `apply`, where the receiver isn't needed.
* [org.openrewrite.kotlin.idiom.FindApplyThisQualifier$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findapplythisqualifier$ktrecipe.md)
  * **Find redundant `this.` inside `apply \{ \}` blocks**
  * Inside `apply \{ \}`, every member access resolves against the implicit receiver — `this.prop = v` is just `prop = v`. Drop the qualifier; the whole point of `apply` is the implicit receiver.
* [org.openrewrite.kotlin.idiom.FindApplyWithoutMutation$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findapplywithoutmutation$ktrecipe.md)
  * **Find `apply \{ \}` blocks that perform no mutation**
  * `apply \{ \}` is for configuring the receiver and returning it. If the block has no assignments or property writes, `also \{ \}` (which exposes the receiver as `it` and runs for side effects) or just inlining the call expresses the intent more clearly.
* [org.openrewrite.kotlin.idiom.FindCastAndNullableShapes$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findcastandnullableshapes$ktrecipe.md)
  * **Find cast and nullable-shape idioms**
  * Unsafe `as` casts vs `as?`, `takeIf \{ \}?.let \{ \}` chains, `takeUnless \{ !p \}` double-negatives, deep `?.` safe-call chains, explicit `return null` statements.
* [org.openrewrite.kotlin.idiom.FindCheckNotNullWithoutMessage$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findchecknotnullwithoutmessage$ktrecipe.md)
  * **Find `checkNotNull(x)` without an explanatory message**
  * `checkNotNull(x)` throws an `IllegalStateException` with a generic message. Pass a lazy message — `checkNotNull(x) \{ &quot;state invariant: x ready after init&quot; \}` — to make the failure self-documenting.
* [org.openrewrite.kotlin.idiom.FindCollectionNullSafety$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findcollectionnullsafety$ktrecipe.md)
  * **Find collection null-safety idioms**
  * `listOf(...).filterNotNull()` vs `listOfNotNull(...)`, `map \{ \}.filterNotNull()` vs `mapNotNull \{ \}`, `filter \{ it != null \}.map \{ it!! \}` chains, `firstOrNull` patterns where `single` is intended, `?.x.orEmpty()` mixed-call shapes.
* [org.openrewrite.kotlin.idiom.FindElvisThrowWithoutMessage$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findelvisthrowwithoutmessage$ktrecipe.md)
  * **Find `x ?: throw SomeException()` without a message**
  * `x ?: throw IllegalStateException()` (no message arg) throws with a stack trace and no context. Pass an argument that explains why `x` was expected non-null at this point — error reports are the cheapest tool we have.
* [org.openrewrite.kotlin.idiom.FindFilterMapToMapNotNull$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findfiltermaptomapnotnull$ktrecipe.md)
  * **Find `filter \{ it != null \}.map \{ it!! \}` chains**
  * `filter \{ it != null \}.map \{ it!! \}` is the long form of `mapNotNull \{ it \}`. Both passes can be folded into a single `filterNotNull` (when no transform is needed) or `mapNotNull` (with a transform).
* [org.openrewrite.kotlin.idiom.FindFirstOrNullElvisError$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findfirstornullelviserror$ktrecipe.md)
  * **Find `firstOrNull \{ \} ?: error(...)` patterns**
  * `firstOrNull \{ p \}.let \{ it ?: error(&quot;missing&quot;) \}` (or the `?: error` form) is a manual `single \{ p \}` — `single` throws when there's no match or more than one, which is usually the intended precondition.
* [org.openrewrite.kotlin.idiom.FindFirstOrNullOnNullableReceiver$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findfirstornullonnullablereceiver$ktrecipe.md)
  * **Find `x?.firstOrNull()` calls**
  * `x?.firstOrNull()` produces `null` either when `x` is null OR when `x` is empty — the two cases collapse. Use `x?.firstOrNull() ?: default` only when both null-cases should yield the same fallback.
* [org.openrewrite.kotlin.idiom.FindIfElseNullDefault$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findifelsenulldefault$ktrecipe.md)
  * **Find `if (cond) value else null` patterns**
  * `if (cond) value else null` is `value.takeIf \{ cond \}` (when `value` doesn't depend on `cond`) — the extension makes the predicate's role visible at the call site.
* [org.openrewrite.kotlin.idiom.FindIfNotNullAssign$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findifnotnullassign$ktrecipe.md)
  * **Find `if (x != null) y = x.foo()` patterns**
  * `if (x != null) y = x.foo()` followed by a default elsewhere reads as a hand-rolled `y = x?.foo() ?: default`. The elvis form keeps the value derivation in one expression.
* [org.openrewrite.kotlin.idiom.FindIfNotNullThenCall$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findifnotnullthencall$ktrecipe.md)
  * **Find `if (x != null) x.foo()` that could use `?.`**
  * An `if (x != null) x.foo()` ladder reads as a manual nullable dispatch where Kotlin already has `x?.foo()`. The safe-call form is shorter and folds into expression position, where the `if` cannot.
* [org.openrewrite.kotlin.idiom.FindIfNullReturn$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findifnullreturn$ktrecipe.md)
  * **Find `if (x == null) return ...` early-exit patterns**
  * An `if (x == null) return …` reads as a manual null guard where Kotlin's `x ?: return …` says the same thing inline. The elvis form keeps the expression in line with its consumer and avoids a separate control-flow statement.
* [org.openrewrite.kotlin.idiom.FindIfNullThrow$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findifnullthrow$ktrecipe.md)
  * **Find `if (x == null) throw ...` patterns**
  * An `if (x == null) throw …` is the elvis-throw idiom written long-hand. `x ?: throw …` keeps the throw expression in line and reads as the assertion it is, rather than as a control-flow branch.
* [org.openrewrite.kotlin.idiom.FindLetAtStatementPosition$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findletatstatementposition$ktrecipe.md)
  * **Find `?.let \{ \}` calls at statement position**
  * `x?.let \{ … \}` at statement position discards its return value, behaving identically to `x?.also \{ … \}` but reading as a transform. `also` makes the side-effect-only intent explicit.
* [org.openrewrite.kotlin.idiom.FindLetElvis$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findletelvis$ktrecipe.md)
  * **Find `x?.let \{ \} ?: y` patterns**
  * `x?.let \{ … \} ?: y` mixes two intents — transform-when-present and fall-back — into a single expression. Inverts the natural reading order; consider an explicit `if (x != null) … else y` or pull the elvis branch out for clarity.
* [org.openrewrite.kotlin.idiom.FindLetIdioms$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findletidioms$ktrecipe.md)
  * **Find `let \{ \}` ergonomics**
  * `?.let \{ it \}`, `?.let \{ it.foo() \}` (including property reads), nested `let` ladders, `let` blocks at statement position, and the `?.let \{ \} ?: y` pattern — all cases where `let \{ \}` adds shape without clarity.
* [org.openrewrite.kotlin.idiom.FindLetItCall$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findletitcall$ktrecipe.md)
  * **Find `?.let \{ it.foo() \}` that could use `?.foo()`**
  * `x?.let \{ it.foo() \}` is the long form of `x?.foo()` — the safe call already provides the non-null receiver, and the `let` introduces an unused binding. Drop `.let \{ \}` and call `foo()` directly.
* [org.openrewrite.kotlin.idiom.FindLetItIdentity$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findletitidentity$ktrecipe.md)
  * **Find `?.let \{ it \}` no-ops**
  * `x?.let \{ it \}` is structurally equivalent to `x` — the lambda introduces a binding and immediately returns it without transforming. Drop the `.let \{ it \}` call.
* [org.openrewrite.kotlin.idiom.FindLetWithFnOfIt$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findletwithfnofit$ktrecipe.md)
  * **Find `obj.let \{ fn(it) \}` where `obj` is non-null**
  * When `obj` is non-nullable, `obj.let \{ fn(it) \}` only adds a binding around `fn(obj)`. Save the lambda allocation and pass `obj` directly.
* [org.openrewrite.kotlin.idiom.FindListOfFilterNotNull$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findlistoffilternotnull$ktrecipe.md)
  * **Find `listOf(a, b, c).filterNotNull()` patterns**
  * `listOf(a, b, c).filterNotNull()` materializes a list with `null` entries only to discard them. `listOfNotNull(a, b, c)` skips the `null`s up front and returns the same result with one fewer allocation and one fewer pass.
* [org.openrewrite.kotlin.idiom.FindMapThenFilterNotNull$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findmapthenfilternotnull$ktrecipe.md)
  * **Find `map \{ ... \}.filterNotNull()` chains**
  * Two-pass `map \{ … \}.filterNotNull()` builds an intermediate list of nullable values. `mapNotNull \{ … \}` does both in one pass with a single allocation and propagates `null` returns naturally.
* [org.openrewrite.kotlin.idiom.FindNestedLet$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findnestedlet$ktrecipe.md)
  * **Find nested `let \{ \}` chains**
  * `a?.let \{ b?.let \{ … \} \}` ladders for combining nullable values are clearer as a single `if (a != null &amp;&amp; b != null) …` or a sealed pair. Two-level nesting is a code smell; three or more is almost always a refactor opportunity.
* [org.openrewrite.kotlin.idiom.FindNotNullAssertion$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findnotnullassertion$ktrecipe.md)
  * **Find `!!` non-null assertions**
  * The `!!` operator throws a generic `NullPointerException` with no context. `requireNotNull(x) \{ &quot;explain why&quot; \}` or `x ?: error(&quot;explain why&quot;)` produces a message that points at the assumption.
* [org.openrewrite.kotlin.idiom.FindNotNullAssertionAsArgument$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findnotnullassertionasargument$ktrecipe.md)
  * **Find `!!` passed as a function argument**
  * `foo(x!!)` pushes the null-check onto the call site, where the function signature could just accept `T?` and document the contract. If `foo` must have a non-null `x`, prefer `requireNotNull(x) \{ ... \}` at the call site to produce a contextual error.
* [org.openrewrite.kotlin.idiom.FindNullAssertionPolish$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findnullassertionpolish$ktrecipe.md)
  * **Find null-assertion polish opportunities**
  * `!!` operators (including as arguments), `requireNotNull` / `checkNotNull` calls without a lazy message, and `throw SomeException()` without a contextual message inside an elvis.
* [org.openrewrite.kotlin.idiom.FindNullCheckIdioms$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findnullcheckidioms$ktrecipe.md)
  * **Find manual null-check idioms**
  * `if (x != null) x.foo()` / `if (x == null) return …` / `if (x == null) throw …` patterns where Kotlin's `?.`, `?: return`, and `?: throw` operators express the same intent in expression position.
* [org.openrewrite.kotlin.idiom.FindOrEmptyAfterSafeCall$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findoremptyaftersafecall$ktrecipe.md)
  * **Find `x?.something.orEmpty()` patterns**
  * `x?.something.orEmpty()` mixes safe-call and a null-coalescing extension. Either drop the `?.` (if `x` is non-null) or chain through `?: emptyList()` — the mix obscures which call is providing the fallback.
* [org.openrewrite.kotlin.idiom.FindRequireNotNullWithoutMessage$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findrequirenotnullwithoutmessage$ktrecipe.md)
  * **Find `requireNotNull(x)` without an explanatory message**
  * `requireNotNull(x)` throws an `IllegalArgumentException` with a generic message. Pass a lazy message — `requireNotNull(x) \{ &quot;x must be set before init&quot; \}` — so the stack trace explains the precondition.
* [org.openrewrite.kotlin.idiom.FindReturnNullExplicit$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findreturnnullexplicit$ktrecipe.md)
  * **Find `return null` in functions with nullable returns**
  * An explicit `return null` is rarely the clearest expression of intent — usually the calling chain that produces the nullable can use `?:` or `mapNotNull` to handle the no-value case at the boundary, not the inside.
* [org.openrewrite.kotlin.idiom.FindRunWithoutReceiverUse$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findrunwithoutreceiveruse$ktrecipe.md)
  * **Find `x.run \{ ... \}` that doesn't use the receiver**
  * `run \{ \}` is meaningful when the lambda references `this`; otherwise `x.let \{ … \}` (binding via `it`) or even no scope function at all is clearer. The runtime cost is identical — the value is purely readability.
* [org.openrewrite.kotlin.idiom.FindSafeCallChain$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findsafecallchain$ktrecipe.md)
  * **Find long `?.` safe-call chains**
  * `a?.b?.c?.d?.e` chains beyond 3 hops indicate a domain object hierarchy with too many nullable boundaries — the chain hides which boundary is the real concern. Flatten with `let` blocks at the boundary that matters, or refactor to non-nullable intermediates.
* [org.openrewrite.kotlin.idiom.FindScopeFunctionSwaps$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findscopefunctionswaps$ktrecipe.md)
  * **Find scope-function correctness swaps**
  * The 12 well-known scope-function correctness rules: `with(x)` used as a receiver expression vs `x.run \{ \}`, `?.apply \{ \}` whose result is discarded vs `?.also \{ \}`, `apply \{ \}` without mutation vs `also \{ \}`, `also \{ \}` with mutation vs `apply \{ \}`, redundant `this.` inside `apply \{ \}`, `run` without `this` references.
* [org.openrewrite.kotlin.idiom.FindSetOfFilterNotNull$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findsetoffilternotnull$ktrecipe.md)
  * **Find `setOf(a, b, c).filterNotNull()` patterns**
  * Same shape as `listOf(...).filterNotNull()` — building a set with `null`s and filtering them out. `setOfNotNull(a, b, c)` exists for exactly this case.
* [org.openrewrite.kotlin.idiom.FindTakeIfChainedLet$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findtakeifchainedlet$ktrecipe.md)
  * **Find `x.takeIf \{ p \}?.let \{ ... \}` patterns**
  * `x.takeIf \{ p \}?.let \{ … \}` is a guard-then-transform expressed as two calls plus a safe-call. `if (p) x.let \{ … \} else null` (or `x.takeIf(p)?.run \{ … \}`) is the same in one operator without the implicit `null` bridge.
* [org.openrewrite.kotlin.idiom.FindTakeUnlessNegated$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findtakeunlessnegated$ktrecipe.md)
  * **Find `takeUnless \{ !p \}` (double-negative) patterns**
  * `takeUnless \{ !p \}` is `takeIf \{ p \}` written with a double negative. Inverting `takeUnless`'s predicate to positive form makes the intent immediate.
* [org.openrewrite.kotlin.idiom.FindUnsafeCast$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findunsafecast$ktrecipe.md)
  * **Find unsafe `as` casts**
  * `x as T` throws `ClassCastException` on mismatch — there's no diagnostic, just the JVM exception. `x as? T` returns `null` on mismatch and folds into elvis/`requireNotNull(...)` with a better message.
* [org.openrewrite.kotlin.idiom.FindWithAsReceiver$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/findwithasreceiver$ktrecipe.md)
  * **Find `with(x) \{ ... \}` used as an expression**
  * `with(x) \{ … \}` returns the lambda result, which makes it interchangeable with `x.run \{ … \}`. The extension form chains better in safe-call sequences (`x?.run \{ … \}`) and reads as receiver-style throughout.
* [org.openrewrite.kotlin.idiom.NullSafetyAndScopeFunctions$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/idiom/nullsafetyandscopefunctions$ktrecipe.md)
  * **Apply Kotlin null-safety and scope-function idioms**
  * Search-only recipes covering the two most-cited stylistic categories in IntelliJ's Kotlin inspections: null-safety (`if (x != null)` ladders, `!!`, `requireNotNull` polish, `mapNotNull` / `listOfNotNull` adoption, unsafe casts) and scope-function ergonomics (the 12 well-defined `let`/`run`/`with`/`apply`/`also` correctness rules). Each match is a `SearchResult` for review — nothing is rewritten automatically.
* [org.openrewrite.kotlin.interop.FindBufferedReaderLines$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findbufferedreaderlines$ktrecipe.md)
  * **Find `bufferedReader().lines()` calls**
  * `BufferedReader.lines()` returns a `Stream&lt;String&gt;` that must be closed explicitly and consumed exactly once. Kotlin offers `lineSequence()` (lazy `Sequence&lt;String&gt;`) and `useLines \{ sequence -&gt; … \}` (auto-closing) for the same use cases.
* [org.openrewrite.kotlin.interop.FindBuilderClass$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findbuilderclass$ktrecipe.md)
  * **Find inner `class Builder` classes — default-args candidate**
  * A Java-style nested `class Builder` mirrors the outer class fields with setters that return `this`, then a terminal `build()`. In Kotlin, a `data class` with default arguments composes with named-argument call syntax to express the same intent — usually with less code and no double maintenance.
* [org.openrewrite.kotlin.interop.FindClockAndTestabilityFriction$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findclockandtestabilityfriction$ktrecipe.md)
  * **Find non-injected clock / I/O calls (testability)**
  * `System.currentTimeMillis()` / `System.nanoTime()` / `LocalDateTime.now()` and friends read the system clock implicitly. Each flagged call site is a candidate to receive a `Clock` (or the JDK `java.time.Clock`) so tests can advance time deterministically. Also flags `BufferedReader.lines()` — usually a `lineSequence`/`useLines` migration.
* [org.openrewrite.kotlin.interop.FindCompletableFutureReturn$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findcompletablefuturereturn$ktrecipe.md)
  * **Find functions returning `CompletableFuture&lt;T&gt;`**
  * Returning `CompletableFuture&lt;T&gt;` from Kotlin code obliges every caller to either `.thenCompose` chain or `.await()` through the `kotlinx-coroutines-jdk8` bridge. A `suspend fun foo(): T` integrates with structured concurrency at the language level — keep the future shape only at the Java boundary.
* [org.openrewrite.kotlin.interop.FindCompletableFutureUsage$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findcompletablefutureusage$ktrecipe.md)
  * **Find `CompletableFuture` usage in Kotlin**
  * `CompletableFuture&lt;T&gt;` is the JVM equivalent of a `Deferred&lt;T&gt;` or single-emission `Flow&lt;T&gt;`. In Kotlin, `suspend fun`/`Flow` integrate with structured concurrency, cancellation, and exception handling at the language level — prefer them inside Kotlin modules and bridge with `kotlinx-coroutines-jdk8` at the boundary.
* [org.openrewrite.kotlin.interop.FindInteropFriction$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findinteropfriction$ktrecipe.md)
  * **Find Java↔Kotlin interop friction points**
  * Search-only bundle: every interop-flavored `Find*` recipe in this module. Covers `Optional`/`Stream`/`Collections` Java factories with Kotlin replacements, `CompletableFuture`/Rx/Reactor types with coroutine replacements, missing `@Jvm*` annotations on Kotlin-defined declarations Java callers reach for, and Java-style call shapes inside Kotlin source.
* [org.openrewrite.kotlin.interop.FindIterableForEach$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/finditerableforeach$ktrecipe.md)
  * **Find Java-style `iterable.forEach(Consumer)` calls**
  * `Iterable.forEach(Consumer&lt;T&gt;)` is the Java-8 functional terminal; Kotlin source can use the same shape but the inline `kotlin.collections.forEach` is preferred — it doesn't allocate a `Consumer` and integrates with non-local `return`/`break` inside the lambda.
* [org.openrewrite.kotlin.interop.FindJavaGetterCallStyleInKotlin$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findjavagettercallstyleinkotlin$ktrecipe.md)
  * **Find Java-style `getX()` calls in Kotlin source**
  * Kotlin synthesizes property syntax for any Java getter that follows the `getX()`/`isX()` no-arg convention: `obj.x` reads the same value as `obj.getX()`. Writing the JVM-style call in Kotlin source obscures that — flag the call sites for migration to property access.
* [org.openrewrite.kotlin.interop.FindJavaIdiomsInKotlin$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findjavaidiomsinkotlin$ktrecipe.md)
  * **Find Java-style call shapes inside Kotlin source**
  * Search-only bundle of Java idioms that have idiomatic Kotlin equivalents at the call site: `getX()`/`isX()` getters where property syntax reads the same value, `iterable.forEach(Consumer)`, `requireNotNull(javaCall())` over platform types, manual `getX`/`setX` pairs, static-utility/constants `object` holders, `Builder` classes, and manual `equals`/`hashCode`.
* [org.openrewrite.kotlin.interop.FindJavaUtilArraysAsList$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findjavautilarraysaslist$ktrecipe.md)
  * **Find `Arrays.asList(...)` calls**
  * `Arrays.asList(a, b, c)` is the Java idiom for a small read-only `List`. In Kotlin, `listOf(a, b, c)` is more concise, properly read-only (the returned list is structurally immutable), and avoids leaking the array-backed quirk where `set` is allowed but `add` is not.
* [org.openrewrite.kotlin.interop.FindJavaUtilCollectionsEmptyList$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findjavautilcollectionsemptylist$ktrecipe.md)
  * **Find `Collections.emptyList/Set/Map()` calls**
  * `Collections.emptyList()` (and its `emptySet`/`emptyMap` siblings) predate Kotlin's stdlib factories. `emptyList&lt;T&gt;()`/`emptySet&lt;T&gt;()`/`emptyMap&lt;K, V&gt;()` carry the same singletons, infer the type parameter at the call site, and don't drag the `java.util.Collections` import into Kotlin code.
* [org.openrewrite.kotlin.interop.FindJavaUtilCollectionsFriction$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findjavautilcollectionsfriction$ktrecipe.md)
  * **Find `java.util.Collections` / `Arrays` factory usage inside Kotlin**
  * `Arrays.asList`, `Collections.emptyList`, `Collections.singletonList`, and `Collections.unmodifiableList` (plus Set/Map siblings) all have idiomatic Kotlin stdlib replacements — `listOf`, `emptyList&lt;T&gt;()`, `setOf`, `mapOf`, and `.toList()`/`.toSet()`/`.toMap()` for immutable copies.
* [org.openrewrite.kotlin.interop.FindJavaUtilCollectionsSingleton$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findjavautilcollectionssingleton$ktrecipe.md)
  * **Find `Collections.singletonList/Set/Map(...)` calls**
  * `Collections.singletonList(x)` is the Java idiom for a one-element read-only list. `listOf(x)` returns the same shape with cleaner syntax and consistent overload selection for `setOf`/`mapOf`.
* [org.openrewrite.kotlin.interop.FindJavaUtilCollectionsUnmodifiable$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findjavautilcollectionsunmodifiable$ktrecipe.md)
  * **Find `Collections.unmodifiableList/Set/Map(...)` wrappers**
  * `Collections.unmodifiableList(x)` wraps a collection in a view that throws on mutation. Kotlin's `x.toList()`/`x.toSet()`/`x.toMap()` produce a fresh immutable copy — safer in concurrent contexts and removes the runtime wrapper.
* [org.openrewrite.kotlin.interop.FindKotlinDefaultMethodInterface$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findkotlindefaultmethodinterface$ktrecipe.md)
  * **Find interface declarations with default-method bodies**
  * An `interface I \{ fun foo() \{ … \} \}` exposes the body to Java callers only on JDK-8+ targets and only when the Kotlin compiler emits real default methods (`@JvmDefault` / `-Xjvm-default=all`). Without the right compiler flags, the body lives in a synthetic `DefaultImpls` and Java sees an abstract method.
* [org.openrewrite.kotlin.interop.FindLocalDateTimeNow$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findlocaldatetimenow$ktrecipe.md)
  * **Find `LocalDateTime.now()` / `Instant.now()` calls**
  * `LocalDateTime.now()` (and its `Instant`/`LocalDate`/`ZonedDateTime` siblings) read the system clock implicitly. Inject a `Clock` and use the overload `LocalDateTime.now(clock)` so tests can advance time deterministically.
* [org.openrewrite.kotlin.interop.FindManualEqualsHashCode$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findmanualequalshashcode$ktrecipe.md)
  * **Find classes with manual `equals`/`hashCode` overrides — `data class` candidate**
  * A non-`data` class that overrides both `equals` and `hashCode` over its own fields is the canonical shape `data class` exists for. Migrating gives `equals`/`hashCode`/`toString`/`copy()`/`componentN()` for free and removes the maintenance hazard of editing one of the two implementations.
* [org.openrewrite.kotlin.interop.FindManualGetterSetter$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findmanualgettersetter$ktrecipe.md)
  * **Find manual `getX()` / `setX(v)` pairs in Kotlin classes**
  * A class that exposes state through hand-rolled `getX()`/`setX(v)` is reimplementing what `var x: T` already provides — Kotlin generates the same accessors on the JVM. Migrate to a property and let the compiler emit the getter/setter pair.
* [org.openrewrite.kotlin.interop.FindMissingJvmAnnotations$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findmissingjvmannotations$ktrecipe.md)
  * **Find Kotlin declarations missing `@Jvm*` interop annotations**
  * Search-only bundle of declarations where the JVM-visible API surface would benefit from one of the `@JvmStatic` / `@JvmField` / `@JvmOverloads` / `@JvmName` / `@Throws` annotations. Each match is a candidate for review — none should be applied blindly, but the absence is the primary friction Java callers feel.
* [org.openrewrite.kotlin.interop.FindMissingJvmFieldOnConst$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findmissingjvmfieldonconst$ktrecipe.md)
  * **Find `const val` / companion `val` declarations missing `@JvmField`**
  * A companion-object `val` without `@JvmField` is exposed to Java as `Outer.Companion.getX()` — a getter on a synthetic singleton. `@JvmField` lifts the property to a true static `public final` field on `Outer`, matching the Java idiom of named constants.
* [org.openrewrite.kotlin.interop.FindMissingJvmNameOnExtensionFunction$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findmissingjvmnameonextensionfunction$ktrecipe.md)
  * **Find top-level functions missing `@JvmName`**
  * Top-level Kotlin functions (including extension functions) compile to static methods on a `&lt;FileName&gt;Kt` facade — Java callers see `MyKotlinUtilsKt.bar(...)` with a name the source file doesn't suggest. `@JvmName(&quot;bar&quot;)` on the function (or `@file:JvmName(&quot;...&quot;)` on the file) gives Java callers a name to bind against.
* [org.openrewrite.kotlin.interop.FindMissingJvmNameOnIsGetter$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findmissingjvmnameonisgetter$ktrecipe.md)
  * **Find `val isX` Boolean properties missing `@get:JvmName`**
  * A Kotlin property named `isEnabled` compiles to a Java getter `getIsEnabled()` — not the idiomatic `isEnabled()`. `@get:JvmName(&quot;isEnabled&quot;)` (or naming the underlying property differently) restores the boolean-getter convention Java callers expect.
* [org.openrewrite.kotlin.interop.FindMissingJvmOverloadsOnDefaults$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findmissingjvmoverloadsondefaults$ktrecipe.md)
  * **Find functions with default parameters missing `@JvmOverloads`**
  * A Kotlin function with default arguments compiles to a single JVM method — Java callers see only the all-parameters form. `@JvmOverloads` synthesizes overloads at every default-parameter boundary so Java callers can drop trailing arguments naturally.
* [org.openrewrite.kotlin.interop.FindMissingJvmStaticInCompanion$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findmissingjvmstaticincompanion$ktrecipe.md)
  * **Find `companion object` functions missing `@JvmStatic`**
  * Without `@JvmStatic`, Java callers must reach companion-object functions through the synthetic `Companion` holder: `Outer.Companion.foo(...)`. Adding `@JvmStatic` lifts the function to `Outer.foo(...)`, matching what a Java reader expects from a class with static methods. Flag-only — sometimes the wrapper is intentional.
* [org.openrewrite.kotlin.interop.FindMissingThrowsAnnotation$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findmissingthrowsannotation$ktrecipe.md)
  * **Find functions with `throw` of a checked exception missing `@Throws`**
  * Kotlin doesn't track checked exceptions, so a function that throws `IOException` looks unchecked to a Java caller — `try \{ … \} catch (IOException e) \{ … \}` won't compile without `@Throws(IOException::class)` on the Kotlin declaration. Flag declarations that throw a `Throwable` whose Java analog is checked.
* [org.openrewrite.kotlin.interop.FindOptionalFriction$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findoptionalfriction$ktrecipe.md)
  * **Find `java.util.Optional` friction inside Kotlin**
  * Bundle every `Optional`-related search: declarations that return or accept `Optional&lt;T&gt;`, `Optional.ofNullable(...)` constructions, and `.isPresent`/`.get()`/`.orElse(...)` consumption sites. Once an upstream switches `Optional&lt;T&gt;` to `T?`, each flagged call site collapses to a `?:` / `?.let \{ … \}` / `!!` expression.
* [org.openrewrite.kotlin.interop.FindOptionalGet$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findoptionalget$ktrecipe.md)
  * **Find `Optional.get()` / `orElseThrow()` calls**
  * `opt.get()` is the unsafe unwrap that throws `NoSuchElementException` when the Optional is empty — the equivalent of Kotlin's `!!` on a nullable. Once the underlying value type is `T?`, the call site becomes `value!!` (or, better, a `requireNotNull(value)`).
* [org.openrewrite.kotlin.interop.FindOptionalIsPresent$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findoptionalispresent$ktrecipe.md)
  * **Find `Optional.isPresent` / `isEmpty` checks**
  * `opt.isPresent` and `opt.isEmpty` are the Optional-flavored analogs of `x != null` and `x == null`. Once the upstream returns `T?` instead of `Optional&lt;T&gt;`, the check collapses to a Kotlin null comparison plus a smart-cast.
* [org.openrewrite.kotlin.interop.FindOptionalOfNullable$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findoptionalofnullable$ktrecipe.md)
  * **Find `Optional.ofNullable(...)` calls**
  * `Optional.ofNullable(x)` is the conversion `T? -&gt; Optional&lt;T&gt;` — the very wrapping Kotlin's null type system was designed to make unnecessary. Inside Kotlin code, return `x` and let `?:`/`?.let \{ … \}` express the absent-value branch directly.
* [org.openrewrite.kotlin.interop.FindOptionalOrElse$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findoptionalorelse$ktrecipe.md)
  * **Find `Optional.orElse(...)` calls**
  * `opt.orElse(default)` is the Optional version of `value ?: default`. Once the producer returns `T?` directly, the elvis operator reads more naturally and produces tighter bytecode.
* [org.openrewrite.kotlin.interop.FindOptionalParam$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findoptionalparam$ktrecipe.md)
  * **Find function parameters typed `Optional&lt;T&gt;`**
  * Taking `Optional&lt;T&gt;` as a parameter is strictly weaker than `T?` — every caller wraps the same value in an Optional, the function unwraps it, and the type system stops helping with null checking. The nullable parameter form composes with default arguments and `?.`/`?:` operators.
* [org.openrewrite.kotlin.interop.FindOptionalReturn$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findoptionalreturn$ktrecipe.md)
  * **Find functions returning `Optional&lt;T&gt;`**
  * A Kotlin function that returns `Optional&lt;T&gt;` forces every caller into a `.isPresent`/`.get()` dance the language already expresses with `T?`. Returning the nullable type instead lets the call site use `?:`, `let`, and smart-casts directly.
* [org.openrewrite.kotlin.interop.FindOptionalUsage$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findoptionalusage$ktrecipe.md)
  * **Find `java.util.Optional` usage in Kotlin**
  * Kotlin already models the absent-value case with the nullable type system (`T?`). `Optional&lt;T&gt;` is a JVM-only crutch that's worth keeping at the Java boundary only — converting Kotlin-internal `Optional` usage to `T?` improves null-safety and removes one wrapper allocation per call.
* [org.openrewrite.kotlin.interop.FindReactiveInteropFriction$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findreactiveinteropfriction$ktrecipe.md)
  * **Find reactive-framework return types in Kotlin**
  * RxJava's `Observable`/`Flowable`/`Single`/`Maybe`/`Completable` and Reactor's `Mono`/`Flux` predate Kotlin coroutines. Each match is a candidate for migration to `suspend fun` (single-shot) or `Flow&lt;T&gt;` (stream); the corresponding `kotlinx-coroutines-rx*`/`-reactor` adapters cover the boundary to downstream Java callers.
* [org.openrewrite.kotlin.interop.FindReactorPublisherInKotlin$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findreactorpublisherinkotlin$ktrecipe.md)
  * **Find Reactor `Mono`/`Flux` returns in Kotlin**
  * Project Reactor's `Mono&lt;T&gt;`/`Flux&lt;T&gt;` are the Spring-WebFlux reactive types. Inside Kotlin code the canonical shape is `suspend fun` (for `Mono`) and `Flow&lt;T&gt;` (for `Flux`); `kotlinx-coroutines-reactor` provides the boundary adapters for downstream Reactor APIs.
* [org.openrewrite.kotlin.interop.FindRequireNotNullOnJavaCall$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findrequirenotnullonjavacall$ktrecipe.md)
  * **Find `requireNotNull(javaCall())` patterns**
  * `requireNotNull(javaApi.something())` is the safe-conversion idiom when a Java API returns an unannotated reference (platform type `T!`). Once the underlying API is annotated `@Nullable`/`@NotNull` (or migrated to Kotlin), the wrapper either becomes `javaApi.something()!!` or disappears entirely.
* [org.openrewrite.kotlin.interop.FindRequiresOptInOnExperimentalApi$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findrequiresoptinonexperimentalapi$ktrecipe.md)
  * **Find `@RequiresOptIn` annotation declarations**
  * `@RequiresOptIn` marks an annotation as a feature opt-in marker — every caller of an annotated declaration must acknowledge the experimental status via `@OptIn(...)`. The marker itself is a stability contract worth surfacing for review whenever a new Kotlin-defined API claims experimental status.
* [org.openrewrite.kotlin.interop.FindRxObservableInKotlin$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findrxobservableinkotlin$ktrecipe.md)
  * **Find `io.reactivex.Observable`/`Flowable`/`Single`/`Maybe` usage in Kotlin**
  * RxJava's reactive types predate Kotlin coroutines. `Flow&lt;T&gt;` covers cold-stream `Observable`/`Flowable`, `suspend fun` covers `Single`/`Maybe`, and `kotlinx-coroutines-rx2`/`-rx3` bridges the interop boundary. Inside Kotlin code, migrate to the coroutine equivalent.
* [org.openrewrite.kotlin.interop.FindStaticHolderObject$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findstaticholderobject$ktrecipe.md)
  * **Find `object Constants \{ const val A = ... \}` static-constants holders**
  * An `object Constants` whose body is exclusively `const val` declarations is a holder for compile-time constants. Promote each `const val` to a top-level declaration — both forms inline identically at the JVM bytecode level, but the top-level form is one import shorter at every call site.
* [org.openrewrite.kotlin.interop.FindStaticUtilObject$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findstaticutilobject$ktrecipe.md)
  * **Find `object Utils \{ fun foo() = ... \}` static-utility holders**
  * An `object Utils` whose members are all functions (no state) is the Kotlin spelling of a Java static-utility class. Promote the functions to top-level — they're indexable, importable directly, and don't carry the synthetic singleton-load overhead Java callers see.
* [org.openrewrite.kotlin.interop.FindStreamCollectorsToList$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findstreamcollectorstolist$ktrecipe.md)
  * **Find `stream.collect(Collectors.toList())` calls**
  * The `collect(Collectors.toList())` terminal materializes a `Stream` into a `List`. In Kotlin source, the natural shape is `iterable.toList()` (eager) or `sequence.toList()` (lazy) — both avoid the `Collector` machinery and read at a glance.
* [org.openrewrite.kotlin.interop.FindStreamFilterMap$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findstreamfiltermap$ktrecipe.md)
  * **Find `stream.filter(...).map(...)` chains**
  * A `filter().map()` chain on `Stream` is structurally identical to the same chain on `Iterable`/`Sequence` — the Stream machinery just adds Collector requirements at the terminal. Migrate to Kotlin collections; if laziness matters, use `asSequence()` once at the head.
* [org.openrewrite.kotlin.interop.FindStreamFriction$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findstreamfriction$ktrecipe.md)
  * **Find `java.util.stream.Stream` friction inside Kotlin**
  * Bundle every Stream-related search: declarations returning `Stream&lt;T&gt;`, `Collectors.toList()` terminals, `filter.map` chains, and `Stream.of` constructions. Each match has a Kotlin equivalent in `Sequence`/`Iterable`/`Flow` that's idiomatic at the same call site.
* [org.openrewrite.kotlin.interop.FindStreamOfCall$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findstreamofcall$ktrecipe.md)
  * **Find `Stream.of(...)` calls**
  * `Stream.of(...)` is a varargs-to-Stream constructor used to bootstrap a Stream pipeline. In Kotlin, `sequenceOf(...)` (lazy) or `listOf(...)` (eager) cover the same uses without committing to the Stream type at the boundary.
* [org.openrewrite.kotlin.interop.FindStreamReturn$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findstreamreturn$ktrecipe.md)
  * **Find functions returning `java.util.stream.Stream&lt;T&gt;`**
  * `Stream&lt;T&gt;` is the Java 8 lazy-pipeline type — single-use, no built-in cancellation, only consumable through `collect`. In Kotlin, `Sequence&lt;T&gt;` is the equivalent for lazy iterable pipelines; `List&lt;T&gt;` and `Flow&lt;T&gt;` cover the eager and async-lazy cases respectively.
* [org.openrewrite.kotlin.interop.FindSystemCurrentTimeMillis$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/findsystemcurrenttimemillis$ktrecipe.md)
  * **Find `System.currentTimeMillis()` calls**
  * Direct `System.currentTimeMillis()` calls are convenient but couple the call site to wall-clock time, making tests deterministic only by mocking the whole class. Inject a `Clock` (or, on JDK 8+, `java.time.Clock`) and read time through it.
* [org.openrewrite.kotlin.interop.ImproveKotlinInterop$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/improvekotlininterop$ktrecipe.md)
  * **Apply Java↔Kotlin interop rewrites**
  * Autofix-only interop bundle: collapses `Optional.of(x).get()` round-trips that have a direct value equivalent. Excludes the search-only `Find*` recipes (Optional / CompletableFuture / Stream / Collections factories, Jvm-annotation gaps, Java-style call shapes, reactive return types) — for diff-only output, use this recipe instead.
* [org.openrewrite.kotlin.interop.Interop$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/interop$ktrecipe.md)
  * **Improve Java↔Kotlin interop ergonomics**
  * Opinionated bundle of every interop recipe in this module: the `Optional.of(x).get()` collapse plus search-only flags for Java idioms that have first-class Kotlin replacements (Optional, CompletableFuture, Stream, Collections factories, `@Jvm*`-annotation gaps, Java-style call shapes, reactive return types, non-injected clocks). For diff-only output, use `ImproveKotlinInterop`.
* [org.openrewrite.kotlin.interop.UseValueForOptionalOfGet$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/interop/usevalueforoptionalofget$ktrecipe.md)
  * **Use `x` instead of `Optional.of(x).get()`**
  * `Optional.of(x).get()` is a JVM-style round-trip that's equivalent to `x`. In Kotlin you'd model the same thing with a non-nullable `x` directly, and Java callers already see the same value via the cross-language binding.
* [org.openrewrite.kotlin.logging.FindCompanionLoggerWithoutPrivate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findcompanionloggerwithoutprivate$ktrecipe.md)
  * **Find companion-object loggers missing `private`**
  * A companion-object `val log = LoggerFactory.getLogger(...)` without `private` is exposed to Java callers as `Foo.Companion.getLog()` — they can mutate the logger reference (well, not the val, but the visibility is wider than needed). Mark it `private`.
* [org.openrewrite.kotlin.logging.FindEagerLogMessages$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findeagerlogmessages$ktrecipe.md)
  * **Find eager log-message construction**
  * Bundles the trace/debug/info/warn/error eager-interpolation and string-concatenation finders. Every hit is a candidate for migration to kotlin-logging's lambda form (`log.debug \{ &quot;...&quot; \}`) or SLF4J's parameterized form (`log.debug(&quot;x=\{\}&quot;, x)`).
* [org.openrewrite.kotlin.logging.FindEagerStringInterpolationInLogDebug$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findeagerstringinterpolationinlogdebug$ktrecipe.md)
  * **Find eager string interpolation in `log.debug(...)`**
  * `log.debug(&quot;x=$x&quot;)` evaluates the template (including any `toString()` work on `x`) before the call even reaches the logger — if debug is disabled, the work is wasted. With kotlin-logging use `log.debug \{ &quot;x=$x&quot; \}`; with SLF4J use the parameterized form `log.debug(&quot;x=\{\}&quot;, x)`.
* [org.openrewrite.kotlin.logging.FindEagerStringInterpolationInLogError$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findeagerstringinterpolationinlogerror$ktrecipe.md)
  * **Find eager string interpolation in `log.error(...)`**
  * Error logs almost always fire, so cost is rarely the issue — but a parameterized message keeps the template stable for log aggregators that group errors by template hash, and lets the throwable argument flow through SLF4J's last-arg-is-Throwable convention cleanly.
* [org.openrewrite.kotlin.logging.FindEagerStringInterpolationInLogInfo$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findeagerstringinterpolationinloginfo$ktrecipe.md)
  * **Find eager string interpolation in `log.info(...)`**
  * `log.info(&quot;x=$x&quot;)` evaluates the template eagerly. If your application turns info off in production, the `toString()` calls inside the template still run. Use the lambda form (kotlin-logging) or the SLF4J `\{\}` placeholder form.
* [org.openrewrite.kotlin.logging.FindEagerStringInterpolationInLogTrace$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findeagerstringinterpolationinlogtrace$ktrecipe.md)
  * **Find eager string interpolation in `log.trace(...)`**
  * `log.trace(&quot;x=$x&quot;)` evaluates the template (including any `toString()` work on `x`) before the call even reaches the logger — if trace is disabled, the work is wasted. With kotlin-logging use `log.trace \{ &quot;x=$x&quot; \}`; with SLF4J use the parameterized form `log.trace(&quot;x=\{\}&quot;, x)`.
* [org.openrewrite.kotlin.logging.FindEagerStringInterpolationInLogWarn$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findeagerstringinterpolationinlogwarn$ktrecipe.md)
  * **Find eager string interpolation in `log.warn(...)`**
  * Warning logs are usually enabled in production, so eager interpolation is less of a hot-path issue — but the parameterized form (`log.warn(&quot;x=\{\}&quot;, x)`) still keeps the message template stable for log aggregators that group by template hash.
* [org.openrewrite.kotlin.logging.FindIsDebugEnabledGuard$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findisdebugenabledguard$ktrecipe.md)
  * **Find `if (log.isDebugEnabled) ...` guards**
  * `if (log.isDebugEnabled) log.debug(...)` is the Java-1.4-era idiom — replaced by kotlin-logging's `log.debug \{ &quot;...&quot; \}` lambda or SLF4J's `log.debug(&quot;x=\{\}&quot;, x)` placeholder form. Either defers the work without the explicit guard.
* [org.openrewrite.kotlin.logging.FindIsErrorEnabledGuard$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findiserrorenabledguard$ktrecipe.md)
  * **Find `if (log.isErrorEnabled) ...` guards**
  * Errors are practically always enabled. The guard suggests the code was once shared with debug/trace machinery — drop it.
* [org.openrewrite.kotlin.logging.FindIsInfoEnabledGuard$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findisinfoenabledguard$ktrecipe.md)
  * **Find `if (log.isInfoEnabled) ...` guards**
  * Info is usually on in production, so the guard rarely saves anything. If you keep it, prefer the lambda or `\{\}`-placeholder form for consistency with debug/trace.
* [org.openrewrite.kotlin.logging.FindIsTraceEnabledGuard$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findistraceenabledguard$ktrecipe.md)
  * **Find `if (log.isTraceEnabled) ...` guards**
  * With kotlin-logging's lambda form (`log.trace \{ &quot;...&quot; \}`) the level-check is built into the call — wrapping it in `if (log.isTraceEnabled)` repeats the check. With SLF4J's parameterized form, the placeholder substitution is also deferred, so the explicit guard is only worthwhile if the argument construction itself is expensive.
* [org.openrewrite.kotlin.logging.FindIsWarnEnabledGuard$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findiswarnenabledguard$ktrecipe.md)
  * **Find `if (log.isWarnEnabled) ...` guards**
  * Warning logs are nearly always enabled. The guard is almost certainly dead code — drop it and use the parameterized form.
* [org.openrewrite.kotlin.logging.FindJulLoggerGetLogger$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findjulloggergetlogger$ktrecipe.md)
  * **Find `java.util.logging.Logger.getLogger(...)` calls**
  * `java.util.logging` ships with the JDK but lacks the structured-logging, MDC, and parameterized-message ergonomics of SLF4J or kotlin-logging. Migrate `j.u.l.Logger.getLogger(...)` to `LoggerFactory.getLogger(...)` (SLF4J) or `KotlinLogging.logger \{ \}` (kotlin-logging).
* [org.openrewrite.kotlin.logging.FindJulLoggerLog$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findjulloggerlog$ktrecipe.md)
  * **Find `julLogger.log(level, msg)` and level-specific `julLogger.fine/info/severe/...` calls**
  * Each `j.u.l.Logger.log(Level, ...)` call (and the level-specific shortcuts `fine`/`info`/`warning`/`severe`/`config`) needs to be re-expressed against SLF4J/kotlin-logging when migrating. Flag for review.
* [org.openrewrite.kotlin.logging.FindLegacyLoggerLibraries$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findlegacyloggerlibraries$ktrecipe.md)
  * **Find legacy logger-library usage**
  * Bundles `java.util.logging` and log4j 1.x finders. Both predate structured logging and should migrate to SLF4J or kotlin-logging.
* [org.openrewrite.kotlin.logging.FindLog4j1Logger$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findlog4j1logger$ktrecipe.md)
  * **Find `org.apache.log4j.Logger` references**
  * Log4j 1.x reached end-of-life in 2015 and has known unfixed vulnerabilities. Migrate to log4j 2.x (`org.apache.logging.log4j.Logger`) or SLF4J. The migration is mechanical for the basic getLogger / log methods, but custom appenders and layouts need a manual rewrite.
* [org.openrewrite.kotlin.logging.FindLoggerDeclarationSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findloggerdeclarationsmells$ktrecipe.md)
  * **Find logger declaration smells**
  * Bundles `log` vs `logger` naming, missing `private` on companion-object loggers, and instance-field loggers (one per allocation). The shape consensus is `private val log = LoggerFactory.getLogger(...)` in a companion object.
* [org.openrewrite.kotlin.logging.FindLoggerFactoryGetLogger$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findloggerfactorygetlogger$ktrecipe.md)
  * **Find `LoggerFactory.getLogger(SomeClass::class.java)` calls**
  * `LoggerFactory.getLogger(Foo::class.java)` is the Java idiom Kotlin code inherited. kotlin-logging's `KotlinLogging.logger \{ \}` infers the enclosing class automatically (via the stack frame at site of declaration) and avoids the `::class.java` reflection round-trip.
* [org.openrewrite.kotlin.logging.FindLoggerFactoryGetLoggerWithStringName$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findloggerfactorygetloggerwithstringname$ktrecipe.md)
  * **Find `LoggerFactory.getLogger(&quot;some-name&quot;)` calls**
  * A string logger name is fine for named/structured loggers but is a smell when the string happens to spell out a class FQN — that should be `getLogger(Foo::class.java)` (or `KotlinLogging.logger \{ \}`) so renames track. Flag for human review.
* [org.openrewrite.kotlin.logging.FindLoggerFactoryGetLoggerWithThisClass$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findloggerfactorygetloggerwiththisclass$ktrecipe.md)
  * **Find `LoggerFactory.getLogger(this::class.java)` calls**
  * `this::class.java` resolves the runtime class — fine for non-final classes, but kotlin-logging's `KotlinLogging.logger \{ \}` already infers the declaring class lexically and avoids the runtime reflection. Either form binds the same logger name for a final class.
* [org.openrewrite.kotlin.logging.FindLoggerFactoryMigrationCandidates$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findloggerfactorymigrationcandidates$ktrecipe.md)
  * **Find `LoggerFactory.getLogger` migration candidates**
  * Bundles the SLF4J `LoggerFactory.getLogger` shapes — class-literal, `this::class.java`, and string-name. Each is a candidate for kotlin-logging's `KotlinLogging.logger \{ \}`.
* [org.openrewrite.kotlin.logging.FindLoggerFieldNamedLog$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findloggerfieldnamedlog$ktrecipe.md)
  * **Find top-level/companion logger fields named `log`**
  * Both `log` and `logger` are common — pick one and stick with it across the codebase. The naming convention is the only thing that lets a reader skim a file and spot the logger declaration in two seconds. Flag `log`-named declarations so the team can confirm the project convention.
* [org.openrewrite.kotlin.logging.FindLoggerGuards$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findloggerguards$ktrecipe.md)
  * **Find redundant logger level-check guards**
  * Bundles `if (log.isXxxEnabled) ...` finders. With kotlin-logging's lambda form or SLF4J's `\{\}` placeholder form, the level check is built into the call.
* [org.openrewrite.kotlin.logging.FindLoggerNotInCompanion$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findloggernotincompanion$ktrecipe.md)
  * **Find loggers declared as instance fields (one per object)**
  * An instance-field `val log = LoggerFactory.getLogger(...)` allocates one logger per object. Logger factories cache by name, so the runtime cost is one extra map lookup per allocation — but the conventional shape is a `private val log` in the companion object (or a top-level `private val log` for top-level functions), so a per-instance logger usually reflects accidental code placement.
* [org.openrewrite.kotlin.logging.FindPrintAndPrintStackTrace$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findprintandprintstacktrace$ktrecipe.md)
  * **Find `println` / `System.err.println` / `printStackTrace`**
  * Bundles the unstructured-output finders. Each call writes outside the logger pipeline, so it bypasses level filters, MDCs, and structured sinks.
* [org.openrewrite.kotlin.logging.FindPrintErr$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findprinterr$ktrecipe.md)
  * **Find `System.err.println(...)` calls**
  * `System.err.println` writes to stderr — better than stdout for errors, but still bypasses whatever structured logger the application uses. Route through `log.error(&quot;...&quot;, throwable)` so log aggregators see the context.
* [org.openrewrite.kotlin.logging.FindPrintStackTrace$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findprintstacktrace$ktrecipe.md)
  * **Find `Throwable.printStackTrace()` calls**
  * `e.printStackTrace()` writes the throwable's stack frames straight to `System.err`, bypassing whatever logger the application configures. Use `log.error(&quot;context&quot;, e)` so the throwable flows through SLF4J's last-arg-is-Throwable convention and ends up in the same sink as the rest of your errors.
* [org.openrewrite.kotlin.logging.FindPrintln$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findprintln$ktrecipe.md)
  * **Find `println(...)` calls**
  * `println` writes to stdout, which in containerized deployments lands in log files without structure, level filtering, or correlation IDs. Replace with a proper logger; if this is a CLI tool, consider the kotlin-logging level filter so tests can silence noisy output.
* [org.openrewrite.kotlin.logging.FindStringConcatInLogDebug$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findstringconcatinlogdebug$ktrecipe.md)
  * **Find string concatenation in `log.debug(...)`**
  * `log.debug(&quot;x=&quot; + x)` performs the concatenation eagerly. Use kotlin-logging's `log.debug \{ &quot;x=$x&quot; \}` lambda form or SLF4J's `log.debug(&quot;x=\{\}&quot;, x)` placeholder form.
* [org.openrewrite.kotlin.logging.FindStringConcatInLogError$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findstringconcatinlogerror$ktrecipe.md)
  * **Find string concatenation in `log.error(...)`**
  * `log.error(&quot;failed: &quot; + e)` mixes the throwable into the message string, losing the stack trace. Use the parameterized form with the throwable as the last argument: `log.error(&quot;failed&quot;, e)`.
* [org.openrewrite.kotlin.logging.FindStringConcatInLogInfo$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findstringconcatinloginfo$ktrecipe.md)
  * **Find string concatenation in `log.info(...)`**
  * `log.info(&quot;x=&quot; + x)` is the Java-1.4-era logging idiom — replaced in SLF4J by `log.info(&quot;x=\{\}&quot;, x)` so the template is stable and the work is deferred.
* [org.openrewrite.kotlin.logging.FindStringConcatInLogTrace$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findstringconcatinlogtrace$ktrecipe.md)
  * **Find string concatenation in `log.trace(...)`**
  * `log.trace(&quot;x=&quot; + x)` performs the concatenation (and the `toString` on `x`) before the call — wasted work if trace is disabled. Use the lambda form or SLF4J `\{\}` placeholders.
* [org.openrewrite.kotlin.logging.FindStringConcatInLogWarn$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findstringconcatinlogwarn$ktrecipe.md)
  * **Find string concatenation in `log.warn(...)`**
  * `log.warn(&quot;x=&quot; + x)` does the concatenation up front. Use the parameterized form so log aggregators can group by message template.
* [org.openrewrite.kotlin.logging.FindThrowablePrintStackTraceWithStream$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/findthrowableprintstacktracewithstream$ktrecipe.md)
  * **Find `e.printStackTrace(out)` calls**
  * Writing the stack trace to a `PrintStream` / `PrintWriter` is the Java idiom for re-routing it manually. With a structured logger you don't need to — `log.error(&quot;context&quot;, e)` already carries the throwable to the configured sink. Review whether the explicit redirection still serves a purpose.
* [org.openrewrite.kotlin.logging.Logging$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/logging/logging$ktrecipe.md)
  * **Find Kotlin logging smells**
  * Search-only recipes for SLF4J, kotlin-logging, `java.util.logging`, log4j 1.x, and `println`/`printStackTrace` usage. Covers eager-message construction (string templates and concatenation), redundant level-check guards, `LoggerFactory.getLogger` shapes that could be `KotlinLogging.logger \{ \}`, unstructured-output calls that bypass the logger, and logger-declaration smells (naming, visibility, instance-field placement).
* [org.openrewrite.kotlin.migrate.Kotlin1To2$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/kotlin1to2$ktrecipe.md)
  * **Migrate to Kotlin 2.x**
  * Modernizes a Kotlin 1.x codebase for Kotlin 2.x: replaces stdlib APIs deprecated between 1.4 and 2.0 with their modern equivalents, swaps JVM-only `java.lang`/`java.util` helpers for multiplatform Kotlin extensions, migrates `inline class` to `@JvmInline value class`, and removes `@OptIn` annotations for experimental markers that have since graduated to stable.
* [org.openrewrite.kotlin.migrate.RemoveRedundantOptIns$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/removeredundantoptins$ktrecipe.md)
  * **Remove redundant `@OptIn` annotations**
  * Removes `@OptIn` annotations for stdlib experimental markers that have since graduated to stable (`ExperimentalStdlibApi`, `ExperimentalTime`, `ExperimentalUnsignedTypes`, `ExperimentalPathApi`). The annotations no longer suppress anything and just add noise.
* [org.openrewrite.kotlin.migrate.UseAppendLine$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useappendline$ktrecipe.md)
  * **Use `appendLine()` instead of `appendln()`**
  * `Appendable.appendln()` was deprecated in Kotlin 1.4 in favor of `appendLine()` (consistent naming with `Reader.readLine()`).
* [org.openrewrite.kotlin.migrate.UseAppendLineAny$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useappendlineany$ktrecipe.md)
  * **Use `appendLine(value)` instead of `appendln(value)` (Any?)**
  * `StringBuilder.appendln(value: Any?)` was deprecated in Kotlin 1.4 in favor of `appendLine(value: Any?)`.
* [org.openrewrite.kotlin.migrate.UseAppendLineChar$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useappendlinechar$ktrecipe.md)
  * **Use `appendLine(char)` instead of `appendln(char)`**
  * `Appendable.appendln(value: Char)` was deprecated in Kotlin 1.4 in favor of `appendLine(value: Char)`.
* [org.openrewrite.kotlin.migrate.UseAppendLineCharSequence$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useappendlinecharsequence$ktrecipe.md)
  * **Use `appendLine(cs)` instead of `appendln(cs)` (CharSequence)**
  * `Appendable.appendln(value: CharSequence?)` was deprecated in Kotlin 1.4 in favor of `appendLine(value: CharSequence?)`.
* [org.openrewrite.kotlin.migrate.UseAppendLineWithValue$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useappendlinewithvalue$ktrecipe.md)
  * **Use `appendLine(value)` instead of `appendln(value)`**
  * `Appendable.appendln(value)` was deprecated in Kotlin 1.4 in favor of `appendLine(value)`.
* [org.openrewrite.kotlin.migrate.UseArrayContentDeepEquals$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usearraycontentdeepequals$ktrecipe.md)
  * **Use `Array.contentDeepEquals()` instead of `Arrays.deepEquals(a, b)`**
  * `java.util.Arrays.deepEquals(a, b)` recursively compares nested arrays; `a.contentDeepEquals(b)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseArrayContentDeepHashCode$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usearraycontentdeephashcode$ktrecipe.md)
  * **Use `Array.contentDeepHashCode()` instead of `Arrays.deepHashCode(arr)`**
  * `java.util.Arrays.deepHashCode(arr)` recursively hashes nested arrays; `arr.contentDeepHashCode()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseArrayContentDeepToString$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usearraycontentdeeptostring$ktrecipe.md)
  * **Use `Array.contentDeepToString()` instead of `Arrays.deepToString(arr)`**
  * `java.util.Arrays.deepToString(arr)` recursively unrolls nested arrays; `arr.contentDeepToString()` is the multiplatform Kotlin extension producing the same representation.
* [org.openrewrite.kotlin.migrate.UseArrayContentEquals$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usearraycontentequals$ktrecipe.md)
  * **Use `Array.contentEquals()` instead of `Arrays.equals(a, b)`**
  * `java.util.Arrays.equals(a: Object[], b: Object[])` is JVM-only; `a.contentEquals(b)` is the multiplatform Kotlin extension. For nested arrays use the deep variant.
* [org.openrewrite.kotlin.migrate.UseArrayContentHashCode$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usearraycontenthashcode$ktrecipe.md)
  * **Use `Array.contentHashCode()` instead of `Arrays.hashCode(arr)`**
  * `java.util.Arrays.hashCode(arr: Object[])` is JVM-only; `arr.contentHashCode()` is the multiplatform Kotlin extension. For nested arrays use the deep variant.
* [org.openrewrite.kotlin.migrate.UseArrayContentToString$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usearraycontenttostring$ktrecipe.md)
  * **Use `Array.contentToString()` instead of `Arrays.toString(arr)`**
  * `java.util.Arrays.toString(arr: Object[])` is JVM-only; `arr.contentToString()` is the multiplatform Kotlin extension. For nested arrays use the deep variant.
* [org.openrewrite.kotlin.migrate.UseBooleanArrayContentEquals$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usebooleanarraycontentequals$ktrecipe.md)
  * **Use `BooleanArray.contentEquals()` instead of `Arrays.equals(a, b)`**
  * `java.util.Arrays.equals(a: boolean[], b: boolean[])` is JVM-only; `a.contentEquals(b)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseBooleanArrayContentHashCode$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usebooleanarraycontenthashcode$ktrecipe.md)
  * **Use `BooleanArray.contentHashCode()` instead of `Arrays.hashCode(arr)`**
  * `java.util.Arrays.hashCode(arr: boolean[])` is JVM-only; `arr.contentHashCode()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseBooleanArrayContentToString$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usebooleanarraycontenttostring$ktrecipe.md)
  * **Use `BooleanArray.contentToString()` instead of `Arrays.toString(arr)`**
  * `java.util.Arrays.toString(arr: boolean[])` is JVM-only; `arr.contentToString()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseBooleanArrayCopyOf$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usebooleanarraycopyof$ktrecipe.md)
  * **Use `BooleanArray.copyOf()` instead of `Arrays.copyOf(arr, newLength)`**
  * `java.util.Arrays.copyOf(arr: boolean[], newLength)` is JVM-only; `arr.copyOf(newLength)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseBooleanArrayFill$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usebooleanarrayfill$ktrecipe.md)
  * **Use `BooleanArray.fill()` instead of `Arrays.fill(arr, value)`**
  * `java.util.Arrays.fill(arr: boolean[], value)` is JVM-only; `arr.fill(value)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseByteArrayBinarySearch$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usebytearraybinarysearch$ktrecipe.md)
  * **Use `ByteArray.binarySearch()` instead of `Arrays.binarySearch(arr, key)`**
  * `java.util.Arrays.binarySearch(arr: byte[], key: Byte)` is JVM-only; `arr.binarySearch(key)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseByteArrayContentEquals$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usebytearraycontentequals$ktrecipe.md)
  * **Use `ByteArray.contentEquals()` instead of `Arrays.equals(a, b)`**
  * `java.util.Arrays.equals(a: byte[], b: byte[])` is JVM-only; `a.contentEquals(b)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseByteArrayContentHashCode$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usebytearraycontenthashcode$ktrecipe.md)
  * **Use `ByteArray.contentHashCode()` instead of `Arrays.hashCode(arr)`**
  * `java.util.Arrays.hashCode(arr: byte[])` is JVM-only; `arr.contentHashCode()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseByteArrayContentToString$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usebytearraycontenttostring$ktrecipe.md)
  * **Use `ByteArray.contentToString()` instead of `Arrays.toString(arr)`**
  * `java.util.Arrays.toString(arr: byte[])` is JVM-only; `arr.contentToString()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseByteArrayCopyOf$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usebytearraycopyof$ktrecipe.md)
  * **Use `ByteArray.copyOf()` instead of `Arrays.copyOf(arr, newLength)`**
  * `java.util.Arrays.copyOf(arr: byte[], newLength)` is JVM-only; `arr.copyOf(newLength)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseByteArrayFill$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usebytearrayfill$ktrecipe.md)
  * **Use `ByteArray.fill()` instead of `Arrays.fill(arr, value)`**
  * `java.util.Arrays.fill(arr: byte[], value)` is JVM-only; `arr.fill(value)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseByteArraySort$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usebytearraysort$ktrecipe.md)
  * **Use `ByteArray.sort()` instead of `Arrays.sort(arr)`**
  * `java.util.Arrays.sort(arr: byte[])` is JVM-only; `arr.sort()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseCapitalize$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecapitalize$ktrecipe.md)
  * **Use `replaceFirstChar \{ … \}` instead of `capitalize()`**
  * `String.capitalize()` was deprecated in Kotlin 1.5 in favor of the locale-explicit `replaceFirstChar \{ if (it.isLowerCase()) it.titlecase() else it.toString() \}`.
* [org.openrewrite.kotlin.migrate.UseCharArrayBinarySearch$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usechararraybinarysearch$ktrecipe.md)
  * **Use `CharArray.binarySearch()` instead of `Arrays.binarySearch(arr, key)`**
  * `java.util.Arrays.binarySearch(arr: char[], key: Char)` is JVM-only; `arr.binarySearch(key)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseCharArrayContentEquals$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usechararraycontentequals$ktrecipe.md)
  * **Use `CharArray.contentEquals()` instead of `Arrays.equals(a, b)`**
  * `java.util.Arrays.equals(a: char[], b: char[])` is JVM-only; `a.contentEquals(b)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseCharArrayContentHashCode$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usechararraycontenthashcode$ktrecipe.md)
  * **Use `CharArray.contentHashCode()` instead of `Arrays.hashCode(arr)`**
  * `java.util.Arrays.hashCode(arr: char[])` is JVM-only; `arr.contentHashCode()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseCharArrayContentToString$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usechararraycontenttostring$ktrecipe.md)
  * **Use `CharArray.contentToString()` instead of `Arrays.toString(arr)`**
  * `java.util.Arrays.toString(arr: char[])` is JVM-only; `arr.contentToString()` is the multiplatform Kotlin extension. Note this produces a bracketed list — use `String(arr)` if you want a String view of the characters.
* [org.openrewrite.kotlin.migrate.UseCharArrayCopyOf$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usechararraycopyof$ktrecipe.md)
  * **Use `CharArray.copyOf()` instead of `Arrays.copyOf(arr, newLength)`**
  * `java.util.Arrays.copyOf(arr: char[], newLength)` is JVM-only; `arr.copyOf(newLength)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseCharArrayFill$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usechararrayfill$ktrecipe.md)
  * **Use `CharArray.fill()` instead of `Arrays.fill(arr, value)`**
  * `java.util.Arrays.fill(arr: char[], value)` is JVM-only; `arr.fill(value)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseCharArraySort$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usechararraysort$ktrecipe.md)
  * **Use `CharArray.sort()` instead of `Arrays.sort(arr)`**
  * `java.util.Arrays.sort(arr: char[])` is JVM-only; `arr.sort()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseCharCode$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharcode$ktrecipe.md)
  * **Use `Char.code` instead of `Char.toInt()`**
  * `Char.toInt()` was deprecated in Kotlin 1.5; the replacement `Char.code` makes the conversion-to-codepoint intent explicit (the old name collided with `Number.toInt()`).
* [org.openrewrite.kotlin.migrate.UseCharCodeAsByte$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharcodeasbyte$ktrecipe.md)
  * **Use `Char.code.toByte()` instead of `Char.toByte()`**
  * `Char.toByte()` was deprecated in Kotlin 1.5 in favor of going through `Char.code`.
* [org.openrewrite.kotlin.migrate.UseCharCodeAsDouble$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharcodeasdouble$ktrecipe.md)
  * **Use `Char.code.toDouble()` instead of `Char.toDouble()`**
  * `Char.toDouble()` was deprecated in Kotlin 1.5 in favor of going through `Char.code`.
* [org.openrewrite.kotlin.migrate.UseCharCodeAsFloat$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharcodeasfloat$ktrecipe.md)
  * **Use `Char.code.toFloat()` instead of `Char.toFloat()`**
  * `Char.toFloat()` was deprecated in Kotlin 1.5 in favor of going through `Char.code`.
* [org.openrewrite.kotlin.migrate.UseCharCodeAsLong$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharcodeaslong$ktrecipe.md)
  * **Use `Char.code.toLong()` instead of `Char.toLong()`**
  * `Char.toLong()` was deprecated in Kotlin 1.5 in favor of going through `Char.code`.
* [org.openrewrite.kotlin.migrate.UseCharCodeAsShort$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharcodeasshort$ktrecipe.md)
  * **Use `Char.code.toShort()` instead of `Char.toShort()`**
  * `Char.toShort()` was deprecated in Kotlin 1.5 in favor of going through `Char.code`.
* [org.openrewrite.kotlin.migrate.UseCharCompareTo$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharcompareto$ktrecipe.md)
  * **Use `Char.compareTo` instead of `java.lang.Character.compare`**
  * `Character.compare(a, b)` becomes `a.compareTo(b)` — the multiplatform receiver call on `Char` returns the same `Int` ordering.
* [org.openrewrite.kotlin.migrate.UseCharCtor$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharctor$ktrecipe.md)
  * **Use `Char(int)` instead of `Int.toChar()`**
  * `Int.toChar()` was deprecated in Kotlin 1.5; the replacement `Char(int)` constructor expresses the codepoint-to-char intent symmetrically with `Char.code`.
* [org.openrewrite.kotlin.migrate.UseCharDigitToInt$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usechardigittoint$ktrecipe.md)
  * **Use `Char.digitToInt(radix)` instead of `Character.digit(c, radix)`**
  * `Character.digit(c, radix)` returns -1 for non-digits; the Kotlin extension `c.digitToInt(radix)` throws `IllegalArgumentException` instead. Use `c.digitToIntOrNull(radix)` if the JVM null-on-failure semantic is required.
* [org.openrewrite.kotlin.migrate.UseCharIsDefined$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharisdefined$ktrecipe.md)
  * **Use `Char.isDefined()` instead of `Character.isDefined(c)`**
  * Prefer the multiplatform Kotlin extension `c.isDefined()` over the JVM-only `Character.isDefined(c)`.
* [org.openrewrite.kotlin.migrate.UseCharIsDigit$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharisdigit$ktrecipe.md)
  * **Use `Char.isDigit()` instead of `Character.isDigit(c)`**
  * Java's `Character.isDigit(c)` is JVM-only; the Kotlin extension `c.isDigit()` is multiplatform and reads more naturally as a receiver call.
* [org.openrewrite.kotlin.migrate.UseCharIsHighSurrogate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharishighsurrogate$ktrecipe.md)
  * **Use `Char.isHighSurrogate()` instead of `Character.isHighSurrogate(c)`**
  * Prefer the multiplatform Kotlin extension `c.isHighSurrogate()` over the JVM-only `Character.isHighSurrogate(c)`.
* [org.openrewrite.kotlin.migrate.UseCharIsISOControl$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharisisocontrol$ktrecipe.md)
  * **Use `Char.isISOControl()` instead of `Character.isISOControl(c)`**
  * Prefer the multiplatform Kotlin extension `c.isISOControl()` over the JVM-only `Character.isISOControl(c)`.
* [org.openrewrite.kotlin.migrate.UseCharIsLetter$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharisletter$ktrecipe.md)
  * **Use `Char.isLetter()` instead of `Character.isLetter(c)`**
  * Prefer the multiplatform Kotlin extension `c.isLetter()` over the JVM-only `Character.isLetter(c)`.
* [org.openrewrite.kotlin.migrate.UseCharIsLetterOrDigit$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharisletterordigit$ktrecipe.md)
  * **Use `Char.isLetterOrDigit()` instead of `Character.isLetterOrDigit(c)`**
  * Prefer the multiplatform Kotlin extension `c.isLetterOrDigit()` over the JVM-only `Character.isLetterOrDigit(c)`.
* [org.openrewrite.kotlin.migrate.UseCharIsLowSurrogate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharislowsurrogate$ktrecipe.md)
  * **Use `Char.isLowSurrogate()` instead of `Character.isLowSurrogate(c)`**
  * Prefer the multiplatform Kotlin extension `c.isLowSurrogate()` over the JVM-only `Character.isLowSurrogate(c)`.
* [org.openrewrite.kotlin.migrate.UseCharIsLowerCase$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharislowercase$ktrecipe.md)
  * **Use `Char.isLowerCase()` instead of `Character.isLowerCase(c)`**
  * Prefer the multiplatform Kotlin extension `c.isLowerCase()` over the JVM-only `Character.isLowerCase(c)`.
* [org.openrewrite.kotlin.migrate.UseCharIsTitleCase$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharistitlecase$ktrecipe.md)
  * **Use `Char.isTitleCase()` instead of `Character.isTitleCase(c)`**
  * Prefer the multiplatform Kotlin extension `c.isTitleCase()` over the JVM-only `Character.isTitleCase(c)`.
* [org.openrewrite.kotlin.migrate.UseCharIsUpperCase$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharisuppercase$ktrecipe.md)
  * **Use `Char.isUpperCase()` instead of `Character.isUpperCase(c)`**
  * Prefer the multiplatform Kotlin extension `c.isUpperCase()` over the JVM-only `Character.isUpperCase(c)`.
* [org.openrewrite.kotlin.migrate.UseCharIsWhitespace$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usechariswhitespace$ktrecipe.md)
  * **Use `Char.isWhitespace()` instead of `Character.isWhitespace(c)`**
  * Prefer the multiplatform Kotlin extension `c.isWhitespace()` over the JVM-only `Character.isWhitespace(c)`.
* [org.openrewrite.kotlin.migrate.UseCharLowercaseCharForCharacter$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharlowercasecharforcharacter$ktrecipe.md)
  * **Use `Char.lowercaseChar()` instead of `Character.toLowerCase(c)`**
  * Prefer the multiplatform Kotlin extension `c.lowercaseChar()` over the JVM-only `Character.toLowerCase(c)`.
* [org.openrewrite.kotlin.migrate.UseCharToString$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usechartostring$ktrecipe.md)
  * **Use `Char.toString()` instead of `Character.toString(c)`**
  * `java.lang.Character.toString(c)` is JVM-only; `c.toString()` is the multiplatform receiver call and produces the same one-character `String`.
* [org.openrewrite.kotlin.migrate.UseCharUppercaseCharForCharacter$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharuppercasecharforcharacter$ktrecipe.md)
  * **Use `Char.uppercaseChar()` instead of `Character.toUpperCase(c)`**
  * Prefer the multiplatform Kotlin extension `c.uppercaseChar()` over the JVM-only `Character.toUpperCase(c)`.
* [org.openrewrite.kotlin.migrate.UseCollectionMax$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecollectionmax$ktrecipe.md)
  * **Use `Collection.max()` instead of `Collections.max(coll)`**
  * `java.util.Collections.max(coll)` is JVM-only; Kotlin's `Collection.max()` extension is multiplatform and reads as a receiver call. Both throw `NoSuchElementException` on an empty collection.
* [org.openrewrite.kotlin.migrate.UseCollectionMin$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecollectionmin$ktrecipe.md)
  * **Use `Collection.min()` instead of `Collections.min(coll)`**
  * `java.util.Collections.min(coll)` is JVM-only; Kotlin's `Collection.min()` extension is multiplatform and reads as a receiver call. Both throw `NoSuchElementException` on an empty collection.
* [org.openrewrite.kotlin.migrate.UseConcatToString$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useconcattostring$ktrecipe.md)
  * **Use `CharArray.concatToString()` instead of `String(charArray)`**
  * The `String(CharArray)` constructor is JVM-only; `charArray.concatToString()` is the multiplatform Kotlin extension producing the same `String`.
* [org.openrewrite.kotlin.migrate.UseDecapitalize$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usedecapitalize$ktrecipe.md)
  * **Use `replaceFirstChar \{ it.lowercase() \}` instead of `decapitalize()`**
  * `String.decapitalize()` was deprecated in Kotlin 1.5 in favor of `replaceFirstChar \{ it.lowercase() \}`.
* [org.openrewrite.kotlin.migrate.UseDecodeToString$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usedecodetostring$ktrecipe.md)
  * **Use `ByteArray.decodeToString()` instead of `String(byteArray)`**
  * The `String(ByteArray)` constructor is JVM-only and uses the platform default charset; `byteArray.decodeToString()` is the multiplatform Kotlin extension and always uses UTF-8.
* [org.openrewrite.kotlin.migrate.UseDoubleArrayBinarySearch$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usedoublearraybinarysearch$ktrecipe.md)
  * **Use `DoubleArray.binarySearch()` instead of `Arrays.binarySearch(arr, key)`**
  * `java.util.Arrays.binarySearch(arr: double[], key: Double)` is JVM-only; `arr.binarySearch(key)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseDoubleArrayContentEquals$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usedoublearraycontentequals$ktrecipe.md)
  * **Use `DoubleArray.contentEquals()` instead of `Arrays.equals(a, b)`**
  * `java.util.Arrays.equals(a: double[], b: double[])` is JVM-only; `a.contentEquals(b)` is the multiplatform Kotlin extension. Like `Arrays.equals`, NaN compares equal to NaN.
* [org.openrewrite.kotlin.migrate.UseDoubleArrayContentHashCode$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usedoublearraycontenthashcode$ktrecipe.md)
  * **Use `DoubleArray.contentHashCode()` instead of `Arrays.hashCode(arr)`**
  * `java.util.Arrays.hashCode(arr: double[])` is JVM-only; `arr.contentHashCode()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseDoubleArrayContentToString$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usedoublearraycontenttostring$ktrecipe.md)
  * **Use `DoubleArray.contentToString()` instead of `Arrays.toString(arr)`**
  * `java.util.Arrays.toString(arr: double[])` is JVM-only; `arr.contentToString()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseDoubleArrayCopyOf$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usedoublearraycopyof$ktrecipe.md)
  * **Use `DoubleArray.copyOf()` instead of `Arrays.copyOf(arr, newLength)`**
  * `java.util.Arrays.copyOf(arr: double[], newLength)` is JVM-only; `arr.copyOf(newLength)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseDoubleArrayFill$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usedoublearrayfill$ktrecipe.md)
  * **Use `DoubleArray.fill()` instead of `Arrays.fill(arr, value)`**
  * `java.util.Arrays.fill(arr: double[], value)` is JVM-only; `arr.fill(value)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseDoubleArraySort$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usedoublearraysort$ktrecipe.md)
  * **Use `DoubleArray.sort()` instead of `Arrays.sort(arr)`**
  * `java.util.Arrays.sort(arr: double[])` is JVM-only; `arr.sort()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseDoubleIEEErem$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usedoubleieeerem$ktrecipe.md)
  * **Use `Double.IEEErem` instead of `java.lang.Math.IEEEremainder`**
  * `Math.IEEEremainder(x, y)` becomes `x.IEEErem(y)` — the multiplatform Kotlin extension, also shorter.
* [org.openrewrite.kotlin.migrate.UseDoubleNextDown$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usedoublenextdown$ktrecipe.md)
  * **Use `Double.nextDown()` instead of `java.lang.Math.nextDown`**
  * `Math.nextDown(x)` becomes `x.nextDown()` — multiplatform Kotlin extension on `Double`.
* [org.openrewrite.kotlin.migrate.UseDoubleNextTowards$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usedoublenexttowards$ktrecipe.md)
  * **Use `Double.nextTowards()` instead of `java.lang.Math.nextAfter`**
  * `Math.nextAfter(x, y)` becomes `x.nextTowards(y)` — multiplatform Kotlin extension on `Double`. Only the `(Double, Double)` overload is rewritten; the `(Float, Double)` overload's mixed types don't line up with Kotlin's `Float.nextTowards(Float)`.
* [org.openrewrite.kotlin.migrate.UseDoubleNextUp$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usedoublenextup$ktrecipe.md)
  * **Use `Double.nextUp()` instead of `java.lang.Math.nextUp`**
  * `Math.nextUp(x)` becomes `x.nextUp()` — multiplatform Kotlin extension on `Double`.
* [org.openrewrite.kotlin.migrate.UseDoublePow$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usedoublepow$ktrecipe.md)
  * **Use `Double.pow` instead of `java.lang.Math.pow`**
  * `Math.pow(x, y)` is JVM-only; the Kotlin extension `x.pow(y)` reads as a receiver call and is multiplatform.
* [org.openrewrite.kotlin.migrate.UseDoubleRoundToLong$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usedoubleroundtolong$ktrecipe.md)
  * **Use `Double.roundToLong()` instead of `java.lang.Math.round`**
  * `Math.round(d: Double): Long` becomes `d.roundToLong()` as a multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseDoubleWithSign$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usedoublewithsign$ktrecipe.md)
  * **Use `Double.withSign` instead of `java.lang.Math.copySign`**
  * `Math.copySign(magnitude, sign)` becomes `magnitude.withSign(sign)` — the multiplatform Kotlin extension expresses the same magnitude/sign combination as a receiver call.
* [org.openrewrite.kotlin.migrate.UseEnumEntries$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useenumentries$ktrecipe.md)
  * **Use `enumEntries&lt;T&gt;()` instead of `enumValues&lt;T&gt;()`**
  * Kotlin 1.9 introduced `enumEntries&lt;T&gt;()` returning a stable `EnumEntries&lt;T&gt;` view. Prefer it over `enumValues&lt;T&gt;()`, which allocates a fresh array on each call.
* [org.openrewrite.kotlin.migrate.UseFloatArrayBinarySearch$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usefloatarraybinarysearch$ktrecipe.md)
  * **Use `FloatArray.binarySearch()` instead of `Arrays.binarySearch(arr, key)`**
  * `java.util.Arrays.binarySearch(arr: float[], key: Float)` is JVM-only; `arr.binarySearch(key)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseFloatArrayContentEquals$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usefloatarraycontentequals$ktrecipe.md)
  * **Use `FloatArray.contentEquals()` instead of `Arrays.equals(a, b)`**
  * `java.util.Arrays.equals(a: float[], b: float[])` is JVM-only; `a.contentEquals(b)` is the multiplatform Kotlin extension. Like `Arrays.equals`, NaN compares equal to NaN.
* [org.openrewrite.kotlin.migrate.UseFloatArrayContentHashCode$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usefloatarraycontenthashcode$ktrecipe.md)
  * **Use `FloatArray.contentHashCode()` instead of `Arrays.hashCode(arr)`**
  * `java.util.Arrays.hashCode(arr: float[])` is JVM-only; `arr.contentHashCode()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseFloatArrayContentToString$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usefloatarraycontenttostring$ktrecipe.md)
  * **Use `FloatArray.contentToString()` instead of `Arrays.toString(arr)`**
  * `java.util.Arrays.toString(arr: float[])` is JVM-only; `arr.contentToString()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseFloatArrayCopyOf$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usefloatarraycopyof$ktrecipe.md)
  * **Use `FloatArray.copyOf()` instead of `Arrays.copyOf(arr, newLength)`**
  * `java.util.Arrays.copyOf(arr: float[], newLength)` is JVM-only; `arr.copyOf(newLength)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseFloatArrayFill$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usefloatarrayfill$ktrecipe.md)
  * **Use `FloatArray.fill()` instead of `Arrays.fill(arr, value)`**
  * `java.util.Arrays.fill(arr: float[], value)` is JVM-only; `arr.fill(value)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseFloatArraySort$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usefloatarraysort$ktrecipe.md)
  * **Use `FloatArray.sort()` instead of `Arrays.sort(arr)`**
  * `java.util.Arrays.sort(arr: float[])` is JVM-only; `arr.sort()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseFloatRoundToInt$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usefloatroundtoint$ktrecipe.md)
  * **Use `Float.roundToInt()` instead of `java.lang.Math.round`**
  * `Math.round(f: Float): Int` becomes `f.roundToInt()` as a multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseIntArrayBinarySearch$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useintarraybinarysearch$ktrecipe.md)
  * **Use `IntArray.binarySearch()` instead of `Arrays.binarySearch(arr, key)`**
  * `java.util.Arrays.binarySearch(arr: int[], key: Int)` is JVM-only; `arr.binarySearch(key)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseIntArrayContentEquals$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useintarraycontentequals$ktrecipe.md)
  * **Use `IntArray.contentEquals()` instead of `Arrays.equals(a, b)`**
  * `java.util.Arrays.equals(a: int[], b: int[])` is JVM-only; `a.contentEquals(b)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseIntArrayContentHashCode$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useintarraycontenthashcode$ktrecipe.md)
  * **Use `IntArray.contentHashCode()` instead of `Arrays.hashCode(arr)`**
  * `java.util.Arrays.hashCode(arr: int[])` is JVM-only; `arr.contentHashCode()` is the multiplatform Kotlin extension and produces the same value.
* [org.openrewrite.kotlin.migrate.UseIntArrayContentToString$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useintarraycontenttostring$ktrecipe.md)
  * **Use `IntArray.contentToString()` instead of `Arrays.toString(arr)`**
  * `java.util.Arrays.toString(arr: int[])` is JVM-only; `arr.contentToString()` is the multiplatform Kotlin extension producing the same bracketed representation.
* [org.openrewrite.kotlin.migrate.UseIntArrayCopyOf$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useintarraycopyof$ktrecipe.md)
  * **Use `IntArray.copyOf()` instead of `Arrays.copyOf(arr, newLength)`**
  * `java.util.Arrays.copyOf(arr: int[], newLength)` is JVM-only; `arr.copyOf(newLength)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseIntArrayFill$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useintarrayfill$ktrecipe.md)
  * **Use `IntArray.fill()` instead of `Arrays.fill(arr, value)`**
  * `java.util.Arrays.fill(arr: int[], value)` is JVM-only; `arr.fill(value)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseIntArraySort$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useintarraysort$ktrecipe.md)
  * **Use `IntArray.sort()` instead of `Arrays.sort(arr)`**
  * `java.util.Arrays.sort(arr: int[])` is JVM-only; `arr.sort()` is the multiplatform Kotlin extension that sorts in place ascending.
* [org.openrewrite.kotlin.migrate.UseIntCompareTo$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useintcompareto$ktrecipe.md)
  * **Use `Int.compareTo` instead of `java.lang.Integer.compare`**
  * `Integer.compare(a, b)` is the JVM-only static comparator; the multiplatform `a.compareTo(b)` reads as a receiver call and returns the same `Int` ordering.
* [org.openrewrite.kotlin.migrate.UseIntCountLeadingZeroBits$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useintcountleadingzerobits$ktrecipe.md)
  * **Use `Int.countLeadingZeroBits()` instead of `Integer.numberOfLeadingZeros`**
  * `Integer.numberOfLeadingZeros(i)` becomes `i.countLeadingZeroBits()` — the multiplatform Kotlin extension reads as a receiver call.
* [org.openrewrite.kotlin.migrate.UseIntCountOneBits$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useintcountonebits$ktrecipe.md)
  * **Use `Int.countOneBits()` instead of `java.lang.Integer.bitCount`**
  * `Integer.bitCount(i)` is the JVM-only popcount; the multiplatform `i.countOneBits()` extension reads as a receiver call.
* [org.openrewrite.kotlin.migrate.UseIntCountTrailingZeroBits$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useintcounttrailingzerobits$ktrecipe.md)
  * **Use `Int.countTrailingZeroBits()` instead of `Integer.numberOfTrailingZeros`**
  * `Integer.numberOfTrailingZeros(i)` becomes `i.countTrailingZeroBits()` — the multiplatform Kotlin extension reads as a receiver call.
* [org.openrewrite.kotlin.migrate.UseIntDigitToChar$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useintdigittochar$ktrecipe.md)
  * **Use `Int.digitToChar(radix)` instead of `Character.forDigit(digit, radix)`**
  * `Character.forDigit(digit, radix)` returns the null `'\u0000'` for invalid input; the Kotlin extension `digit.digitToChar(radix)` throws `IllegalArgumentException` instead.
* [org.openrewrite.kotlin.migrate.UseIntFloorDiv$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useintfloordiv$ktrecipe.md)
  * **Use `Int.floorDiv` instead of `java.lang.Math.floorDiv`**
  * `Math.floorDiv(a, b)` becomes `a.floorDiv(b)` — the multiplatform Kotlin extension on `Int`.
* [org.openrewrite.kotlin.migrate.UseIntMod$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useintmod$ktrecipe.md)
  * **Use `Int.mod()` instead of `java.lang.Math.floorMod`**
  * `Math.floorMod(a, b)` becomes `a.mod(b)`. Kotlin's `Int.mod` uses floored-division semantics — the result is non-negative when the divisor is positive — matching `Math.floorMod`. Reads as a receiver call and is multiplatform.
* [org.openrewrite.kotlin.migrate.UseIntRotateLeft$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useintrotateleft$ktrecipe.md)
  * **Use `Int.rotateLeft(n)` instead of `Integer.rotateLeft(i, n)`**
  * `Integer.rotateLeft(i, n)` is JVM-only; the multiplatform `i.rotateLeft(n)` extension reads as a receiver call.
* [org.openrewrite.kotlin.migrate.UseIntRotateRight$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useintrotateright$ktrecipe.md)
  * **Use `Int.rotateRight(n)` instead of `Integer.rotateRight(i, n)`**
  * `Integer.rotateRight(i, n)` is JVM-only; the multiplatform `i.rotateRight(n)` extension reads as a receiver call.
* [org.openrewrite.kotlin.migrate.UseIntToString$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useinttostring$ktrecipe.md)
  * **Use `Int.toString()` instead of `Integer.toString(i)`**
  * `Integer.toString(i)` is the JVM-only spelling; `i.toString()` reads as a receiver call and is multiplatform.
* [org.openrewrite.kotlin.migrate.UseIntToStringBinary$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useinttostringbinary$ktrecipe.md)
  * **Use `Int.toString(2)` instead of `Integer.toBinaryString`**
  * `Integer.toBinaryString(i)` is JVM-only; the multiplatform `i.toString(2)` produces the same binary text.
* [org.openrewrite.kotlin.migrate.UseIntToStringHex$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useinttostringhex$ktrecipe.md)
  * **Use `Int.toString(16)` instead of `Integer.toHexString`**
  * `Integer.toHexString(i)` is JVM-only; the multiplatform `i.toString(16)` produces the same hexadecimal text.
* [org.openrewrite.kotlin.migrate.UseIntToStringOctal$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useinttostringoctal$ktrecipe.md)
  * **Use `Int.toString(8)` instead of `Integer.toOctalString`**
  * `Integer.toOctalString(i)` is JVM-only; the multiplatform `i.toString(8)` produces the same octal text.
* [org.openrewrite.kotlin.migrate.UseIntToStringWithRadix$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useinttostringwithradix$ktrecipe.md)
  * **Use `Int.toString(radix)` instead of `Integer.toString(i, radix)`**
  * `Integer.toString(i, radix)` is the JVM-only spelling; `i.toString(radix)` is the multiplatform Kotlin receiver call.
* [org.openrewrite.kotlin.migrate.UseKotlinArray$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinarray$ktrecipe.md)
  * **Use Kotlin array extensions instead of `java.util.Arrays`**
  * Replaces JVM-only `java.util.Arrays` static helpers with the multiplatform Kotlin extensions on each primitive array (and `Array&lt;*&gt;`): `contentToString()`, `contentEquals()`, `contentHashCode()`, `fill()`, `sort()`, `binarySearch()`, `copyOf()`, the deep variants for nested arrays, and the `String(charArray)`/`String(byteArray)` constructors that become `charArray.concatToString()`/`byteArray.decodeToString()`.
* [org.openrewrite.kotlin.migrate.UseKotlinChar$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinchar$ktrecipe.md)
  * **Use `Char` extensions instead of `java.lang.Character`**
  * Replaces JVM-only static helpers on `java.lang.Character` (`isDigit(c)`, `isLetter(c)`, `toUpperCase(c)`, `digit(c, radix)`, `compare(a, b)`, `toString(c)`, surrogate predicates) with the multiplatform Kotlin extensions on `Char` (`c.isDigit()`, `c.uppercaseChar()`, `c.digitToInt(radix)`, …).
* [org.openrewrite.kotlin.migrate.UseKotlinCollections$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlincollections$ktrecipe.md)
  * **Use Kotlin collection extensions instead of `java.util.Collections`**
  * Replaces JVM-only `java.util.Collections` static helpers with the multiplatform Kotlin equivalents: `list.sort()`, `list.reverse()`, `list.shuffle()`, `listOf(x)`/`setOf(x)`, and `Collection.max()`/`min()`.
* [org.openrewrite.kotlin.migrate.UseKotlinIntMax$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinintmax$ktrecipe.md)
  * **Use `Int.MAX_VALUE` instead of `java.lang.Integer.MAX_VALUE`**
  * `Integer.MAX_VALUE` is the JVM-only spelling; Kotlin's `Int.MAX_VALUE` is the multiplatform equivalent.
* [org.openrewrite.kotlin.migrate.UseKotlinIntMin$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinintmin$ktrecipe.md)
  * **Use `Int.MIN_VALUE` instead of `java.lang.Integer.MIN_VALUE`**
  * `Integer.MIN_VALUE` is the JVM-only spelling; Kotlin's `Int.MIN_VALUE` is the multiplatform equivalent.
* [org.openrewrite.kotlin.migrate.UseKotlinMath$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmath$ktrecipe.md)
  * **Use `kotlin.math` instead of `java.lang.Math`**
  * Replaces JVM-only `java.lang.Math` calls with their multiplatform `kotlin.math` equivalents — top-level functions (`abs`, `sqrt`, `sin`, …), constants (`PI`, `E`), and receiver-style extensions on `Double`/`Int`/`Long` (`pow`, `roundToInt`, `floorDiv`, `mod`, …).
* [org.openrewrite.kotlin.migrate.UseKotlinMathAbs$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathabs$ktrecipe.md)
  * **Use `kotlin.math.abs` instead of `java.lang.Math.abs`**
  * `kotlin.math.abs` is the multiplatform-friendly form. Java's `Math.abs` only works on the JVM and is a thin pass-through; the Kotlin call site reads more naturally in shared modules.
* [org.openrewrite.kotlin.migrate.UseKotlinMathAcos$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathacos$ktrecipe.md)
  * **Use `kotlin.math.acos` instead of `java.lang.Math.acos`**
  * Prefer the multiplatform-friendly `kotlin.math.acos` over the JVM-only `Math.acos`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathAsin$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathasin$ktrecipe.md)
  * **Use `kotlin.math.asin` instead of `java.lang.Math.asin`**
  * Prefer the multiplatform-friendly `kotlin.math.asin` over the JVM-only `Math.asin`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathAtan$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathatan$ktrecipe.md)
  * **Use `kotlin.math.atan` instead of `java.lang.Math.atan`**
  * Prefer the multiplatform-friendly `kotlin.math.atan` over the JVM-only `Math.atan`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathAtan2$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathatan2$ktrecipe.md)
  * **Use `kotlin.math.atan2` instead of `java.lang.Math.atan2`**
  * Prefer the multiplatform-friendly `kotlin.math.atan2` over the JVM-only `Math.atan2`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathCbrt$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathcbrt$ktrecipe.md)
  * **Use `kotlin.math.cbrt` instead of `java.lang.Math.cbrt`**
  * Prefer the multiplatform-friendly `kotlin.math.cbrt` over the JVM-only `Math.cbrt`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathCeil$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathceil$ktrecipe.md)
  * **Use `kotlin.math.ceil` instead of `java.lang.Math.ceil`**
  * Prefer the multiplatform-friendly `kotlin.math.ceil` over the JVM-only `Math.ceil`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathCos$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathcos$ktrecipe.md)
  * **Use `kotlin.math.cos` instead of `java.lang.Math.cos`**
  * Prefer the multiplatform-friendly `kotlin.math.cos` over the JVM-only `Math.cos`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathCosh$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathcosh$ktrecipe.md)
  * **Use `kotlin.math.cosh` instead of `java.lang.Math.cosh`**
  * Prefer the multiplatform-friendly `kotlin.math.cosh` over the JVM-only `Math.cosh`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathE$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathe$ktrecipe.md)
  * **Use `kotlin.math.E` instead of `java.lang.Math.E`**
  * Prefer the multiplatform-friendly `kotlin.math.E` over the JVM-only `Math.E`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathExp$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathexp$ktrecipe.md)
  * **Use `kotlin.math.exp` instead of `java.lang.Math.exp`**
  * Prefer the multiplatform-friendly `kotlin.math.exp` over the JVM-only `Math.exp`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathExpm1$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathexpm1$ktrecipe.md)
  * **Use `kotlin.math.expm1` instead of `java.lang.Math.expm1`**
  * Prefer the multiplatform-friendly `kotlin.math.expm1` over the JVM-only `Math.expm1`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathFloor$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathfloor$ktrecipe.md)
  * **Use `kotlin.math.floor` instead of `java.lang.Math.floor`**
  * Prefer the multiplatform-friendly `kotlin.math.floor` over the JVM-only `Math.floor`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathHypot$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathhypot$ktrecipe.md)
  * **Use `kotlin.math.hypot` instead of `java.lang.Math.hypot`**
  * Prefer the multiplatform-friendly `kotlin.math.hypot` over the JVM-only `Math.hypot`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathLn$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathln$ktrecipe.md)
  * **Use `kotlin.math.ln` instead of `java.lang.Math.log`**
  * `Math.log` is natural log; the multiplatform `kotlin.math` package spells it `ln` to disambiguate from `log(b, x)` (log base b).
* [org.openrewrite.kotlin.migrate.UseKotlinMathLn1p$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathln1p$ktrecipe.md)
  * **Use `kotlin.math.ln1p` instead of `java.lang.Math.log1p`**
  * `Math.log1p(x)` computes `ln(1 + x)`. The multiplatform `kotlin.math` package spells it `ln1p`, mirroring the `log`→`ln` rename.
* [org.openrewrite.kotlin.migrate.UseKotlinMathLog10$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathlog10$ktrecipe.md)
  * **Use `kotlin.math.log10` instead of `java.lang.Math.log10`**
  * Prefer the multiplatform-friendly `kotlin.math.log10` over the JVM-only `Math.log10`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathMax$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathmax$ktrecipe.md)
  * **Use `kotlin.math.max` instead of `java.lang.Math.max`**
  * Prefer the multiplatform-friendly `kotlin.math.max` over the JVM-only `Math.max`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathMin$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathmin$ktrecipe.md)
  * **Use `kotlin.math.min` instead of `java.lang.Math.min`**
  * Prefer the multiplatform-friendly `kotlin.math.min` over the JVM-only `Math.min`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathPi$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathpi$ktrecipe.md)
  * **Use `kotlin.math.PI` instead of `java.lang.Math.PI`**
  * Prefer the multiplatform-friendly `kotlin.math.PI` over the JVM-only `Math.PI`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathSign$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathsign$ktrecipe.md)
  * **Use `kotlin.math.sign` instead of `java.lang.Math.signum`**
  * `Math.signum(x)` is renamed to `kotlin.math.sign(x)` in the multiplatform `kotlin.math` package.
* [org.openrewrite.kotlin.migrate.UseKotlinMathSin$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathsin$ktrecipe.md)
  * **Use `kotlin.math.sin` instead of `java.lang.Math.sin`**
  * Prefer the multiplatform-friendly `kotlin.math.sin` over the JVM-only `Math.sin`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathSinh$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathsinh$ktrecipe.md)
  * **Use `kotlin.math.sinh` instead of `java.lang.Math.sinh`**
  * Prefer the multiplatform-friendly `kotlin.math.sinh` over the JVM-only `Math.sinh`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathSqrt$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathsqrt$ktrecipe.md)
  * **Use `kotlin.math.sqrt` instead of `java.lang.Math.sqrt`**
  * Prefer the multiplatform-friendly `kotlin.math.sqrt` over the JVM-only `Math.sqrt`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathTan$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathtan$ktrecipe.md)
  * **Use `kotlin.math.tan` instead of `java.lang.Math.tan`**
  * Prefer the multiplatform-friendly `kotlin.math.tan` over the JVM-only `Math.tan`.
* [org.openrewrite.kotlin.migrate.UseKotlinMathTanh$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinmathtanh$ktrecipe.md)
  * **Use `kotlin.math.tanh` instead of `java.lang.Math.tanh`**
  * Prefer the multiplatform-friendly `kotlin.math.tanh` over the JVM-only `Math.tanh`.
* [org.openrewrite.kotlin.migrate.UseKotlinNumberApis$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinnumberapis$ktrecipe.md)
  * **Use Kotlin number extensions instead of `java.lang.Integer`/`Long`/`Double`/`Float`/`Boolean`**
  * Replaces JVM-only static helpers on boxed primitive types with their multiplatform Kotlin counterparts: parsing (`s.toInt()`, `s.toLong(radix)`, `s.toDouble()`, `s.toBoolean()`), formatting (`i.toString(2)`, `l.toString(16)`), bit operations (`i.countOneBits()`, `l.rotateLeft(n)`), constants (`Int.MIN_VALUE`), and `compareTo`.
* [org.openrewrite.kotlin.migrate.UseKotlinRegex$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinregex$ktrecipe.md)
  * **Use `kotlin.text.Regex` instead of `java.util.regex.Pattern`**
  * Replaces JVM-only `java.util.regex.Pattern` calls with their multiplatform Kotlin equivalents: `s.toRegex()` and `Regex.escape(s)`.
* [org.openrewrite.kotlin.migrate.UseListOf$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselistof$ktrecipe.md)
  * **Use `listOf(x)` instead of `Collections.singletonList(x)`**
  * `java.util.Collections.singletonList(x)` is JVM-only; Kotlin's multiplatform `listOf(x)` produces an immutable single-element list.
* [org.openrewrite.kotlin.migrate.UseListReverse$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselistreverse$ktrecipe.md)
  * **Use `MutableList.reverse()` instead of `Collections.reverse(list)`**
  * `java.util.Collections.reverse(list)` is JVM-only; Kotlin's `MutableList.reverse()` extension is multiplatform and reads as a receiver call.
* [org.openrewrite.kotlin.migrate.UseListShuffle$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselistshuffle$ktrecipe.md)
  * **Use `MutableList.shuffle()` instead of `Collections.shuffle(list)`**
  * `java.util.Collections.shuffle(list)` is JVM-only; Kotlin's `MutableList.shuffle()` extension is multiplatform and reads as a receiver call.
* [org.openrewrite.kotlin.migrate.UseListSort$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselistsort$ktrecipe.md)
  * **Use `MutableList.sort()` instead of `Collections.sort(list)`**
  * `java.util.Collections.sort(list)` is JVM-only; Kotlin's `MutableList.sort()` extension is multiplatform and reads as a receiver call.
* [org.openrewrite.kotlin.migrate.UseLocalizedMessage$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselocalizedmessage$ktrecipe.md)
  * **Use `Throwable.localizedMessage` instead of `Throwable.message`**
  * Prefer the i18n-aware `localizedMessage` property over `message` when surfacing exception text to end users. Both are Kotlin properties on `java.lang.Throwable` — the rewrite is a pure property-access rename.
* [org.openrewrite.kotlin.migrate.UseLongArrayBinarySearch$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselongarraybinarysearch$ktrecipe.md)
  * **Use `LongArray.binarySearch()` instead of `Arrays.binarySearch(arr, key)`**
  * `java.util.Arrays.binarySearch(arr: long[], key: Long)` is JVM-only; `arr.binarySearch(key)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseLongArrayContentEquals$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselongarraycontentequals$ktrecipe.md)
  * **Use `LongArray.contentEquals()` instead of `Arrays.equals(a, b)`**
  * `java.util.Arrays.equals(a: long[], b: long[])` is JVM-only; `a.contentEquals(b)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseLongArrayContentHashCode$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselongarraycontenthashcode$ktrecipe.md)
  * **Use `LongArray.contentHashCode()` instead of `Arrays.hashCode(arr)`**
  * `java.util.Arrays.hashCode(arr: long[])` is JVM-only; `arr.contentHashCode()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseLongArrayContentToString$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselongarraycontenttostring$ktrecipe.md)
  * **Use `LongArray.contentToString()` instead of `Arrays.toString(arr)`**
  * `java.util.Arrays.toString(arr: long[])` is JVM-only; `arr.contentToString()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseLongArrayCopyOf$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselongarraycopyof$ktrecipe.md)
  * **Use `LongArray.copyOf()` instead of `Arrays.copyOf(arr, newLength)`**
  * `java.util.Arrays.copyOf(arr: long[], newLength)` is JVM-only; `arr.copyOf(newLength)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseLongArrayFill$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselongarrayfill$ktrecipe.md)
  * **Use `LongArray.fill()` instead of `Arrays.fill(arr, value)`**
  * `java.util.Arrays.fill(arr: long[], value)` is JVM-only; `arr.fill(value)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseLongArraySort$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselongarraysort$ktrecipe.md)
  * **Use `LongArray.sort()` instead of `Arrays.sort(arr)`**
  * `java.util.Arrays.sort(arr: long[])` is JVM-only; `arr.sort()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseLongCountOneBits$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselongcountonebits$ktrecipe.md)
  * **Use `Long.countOneBits()` instead of `java.lang.Long.bitCount`**
  * `Long.bitCount(l)` is the JVM-only popcount; the multiplatform `l.countOneBits()` extension reads as a receiver call.
* [org.openrewrite.kotlin.migrate.UseLongFloorDiv$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselongfloordiv$ktrecipe.md)
  * **Use `Long.floorDiv` instead of `java.lang.Math.floorDiv`**
  * `Math.floorDiv(a, b)` becomes `a.floorDiv(b)` — the multiplatform Kotlin extension on `Long`.
* [org.openrewrite.kotlin.migrate.UseLongMod$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselongmod$ktrecipe.md)
  * **Use `Long.mod()` instead of `java.lang.Math.floorMod`**
  * `Math.floorMod(a, b)` becomes `a.mod(b)` for the `(Long, Long)` overload. Kotlin's `Long.mod` matches `Math.floorMod` floored-division semantics.
* [org.openrewrite.kotlin.migrate.UseLongModInt$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselongmodint$ktrecipe.md)
  * **Use `Long.mod(Int)` instead of `java.lang.Math.floorMod`**
  * `Math.floorMod(a: Long, b: Int): Int` becomes `a.mod(b)`. Like the Java overload, `Long.mod(Int)` returns an `Int`.
* [org.openrewrite.kotlin.migrate.UseLongRotateLeft$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselongrotateleft$ktrecipe.md)
  * **Use `Long.rotateLeft(n)` instead of `Long.rotateLeft(l, n)`**
  * `java.lang.Long.rotateLeft(l, n)` is JVM-only; the multiplatform `l.rotateLeft(n)` extension reads as a receiver call.
* [org.openrewrite.kotlin.migrate.UseLongRotateRight$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselongrotateright$ktrecipe.md)
  * **Use `Long.rotateRight(n)` instead of `Long.rotateRight(l, n)`**
  * `java.lang.Long.rotateRight(l, n)` is JVM-only; the multiplatform `l.rotateRight(n)` extension reads as a receiver call.
* [org.openrewrite.kotlin.migrate.UseLongToString$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselongtostring$ktrecipe.md)
  * **Use `Long.toString()` instead of `Long.toString(l)`**
  * `java.lang.Long.toString(l)` is the JVM-only spelling; `l.toString()` reads as a receiver call and is multiplatform.
* [org.openrewrite.kotlin.migrate.UseLongToStringWithRadix$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselongtostringwithradix$ktrecipe.md)
  * **Use `Long.toString(radix)` instead of `Long.toString(l, radix)`**
  * `java.lang.Long.toString(l, radix)` is the JVM-only spelling; `l.toString(radix)` is the multiplatform Kotlin receiver call.
* [org.openrewrite.kotlin.migrate.UseLowercase$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselowercase$ktrecipe.md)
  * **Use `lowercase()` instead of `toLowerCase()`**
  * `String.toLowerCase()` was deprecated in Kotlin 1.5 in favor of the locale-explicit `lowercase()`.
* [org.openrewrite.kotlin.migrate.UseLowercaseChar$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselowercasechar$ktrecipe.md)
  * **Use `Char.lowercaseChar()` instead of `Char.toLowerCase()`**
  * `Char.toLowerCase()` was deprecated in Kotlin 1.5 in favor of the locale-explicit `lowercaseChar()`.
* [org.openrewrite.kotlin.migrate.UseLowercaseWithLocale$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselowercasewithlocale$ktrecipe.md)
  * **Use `lowercase(locale)` instead of `toLowerCase(locale)`**
  * The JVM `String.toLowerCase(Locale)` overload was deprecated in Kotlin 1.5 alongside the no-arg form; the replacement `lowercase(Locale)` keeps the locale parameter and uses the new spelling.
* [org.openrewrite.kotlin.migrate.UseModernKotlinStdlibApis$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usemodernkotlinstdlibapis$ktrecipe.md)
  * **Use modern Kotlin stdlib idioms**
  * Replaces Kotlin stdlib APIs deprecated between 1.4 and 2.0 with their modern equivalents, and adopts newer language features (open-ended range `..&lt;`, `enumEntries&lt;T&gt;()`) where the older spelling still compiles but reads worse.
* [org.openrewrite.kotlin.migrate.UseRangeUntilOperator$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/userangeuntiloperator$ktrecipe.md)
  * **Use `..&lt;` instead of `until`**
  * Kotlin 1.7.20 introduced the `..&lt;` open-ended range operator. Prefer it over the older `until` infix function.
* [org.openrewrite.kotlin.migrate.UseReadln$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usereadln$ktrecipe.md)
  * **Use `readln()` instead of `readLine()!!`**
  * Kotlin 1.6 introduced `readln()` to replace the common `readLine()!!` idiom — the new spelling makes the EOF-throws contract explicit and drops the not-null assertion.
* [org.openrewrite.kotlin.migrate.UseReadlnOrNull$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usereadlnornull$ktrecipe.md)
  * **Use `readlnOrNull()` instead of `readLine()`**
  * `readLine()` was deprecated in Kotlin 1.6 in favor of `readlnOrNull()` (and the asserting `readln()`), which spells the EOF-handling intent explicitly.
* [org.openrewrite.kotlin.migrate.UseRegexEscape$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useregexescape$ktrecipe.md)
  * **Use `Regex.escape(s)` instead of `Pattern.quote(s)`**
  * `java.util.regex.Pattern.quote(s)` migrates to `kotlin.text.Regex.escape(s)` — same behavior, multiplatform.
* [org.openrewrite.kotlin.migrate.UseRemoveAtLastIndexForRemoveLast$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useremoveatlastindexforremovelast$ktrecipe.md)
  * **Use `removeAt(lastIndex)` instead of `removeLast()`**
  * `MutableList.removeLast()` was deprecated in Kotlin 2.0 alongside `removeFirst()` for the same SequencedCollection conflict. Prefer `removeAt(lastIndex)`.
* [org.openrewrite.kotlin.migrate.UseRemoveAtZeroForRemoveFirst$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useremoveatzeroforremovefirst$ktrecipe.md)
  * **Use `removeAt(0)` instead of `removeFirst()`**
  * `MutableList.removeFirst()` was deprecated in Kotlin 2.0 because Java 21's `SequencedCollection.removeFirst()` introduced a conflicting signature with different return-on-empty semantics. Prefer `removeAt(0)` to keep the throwing behavior unambiguous.
* [org.openrewrite.kotlin.migrate.UseSetOf$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usesetof$ktrecipe.md)
  * **Use `setOf(x)` instead of `Collections.singleton(x)`**
  * `java.util.Collections.singleton(x)` is JVM-only; Kotlin's multiplatform `setOf(x)` produces an immutable single-element set.
* [org.openrewrite.kotlin.migrate.UseShortArrayBinarySearch$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useshortarraybinarysearch$ktrecipe.md)
  * **Use `ShortArray.binarySearch()` instead of `Arrays.binarySearch(arr, key)`**
  * `java.util.Arrays.binarySearch(arr: short[], key: Short)` is JVM-only; `arr.binarySearch(key)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseShortArrayContentEquals$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useshortarraycontentequals$ktrecipe.md)
  * **Use `ShortArray.contentEquals()` instead of `Arrays.equals(a, b)`**
  * `java.util.Arrays.equals(a: short[], b: short[])` is JVM-only; `a.contentEquals(b)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseShortArrayContentHashCode$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useshortarraycontenthashcode$ktrecipe.md)
  * **Use `ShortArray.contentHashCode()` instead of `Arrays.hashCode(arr)`**
  * `java.util.Arrays.hashCode(arr: short[])` is JVM-only; `arr.contentHashCode()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseShortArrayContentToString$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useshortarraycontenttostring$ktrecipe.md)
  * **Use `ShortArray.contentToString()` instead of `Arrays.toString(arr)`**
  * `java.util.Arrays.toString(arr: short[])` is JVM-only; `arr.contentToString()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseShortArrayCopyOf$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useshortarraycopyof$ktrecipe.md)
  * **Use `ShortArray.copyOf()` instead of `Arrays.copyOf(arr, newLength)`**
  * `java.util.Arrays.copyOf(arr: short[], newLength)` is JVM-only; `arr.copyOf(newLength)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseShortArrayFill$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useshortarrayfill$ktrecipe.md)
  * **Use `ShortArray.fill()` instead of `Arrays.fill(arr, value)`**
  * `java.util.Arrays.fill(arr: short[], value)` is JVM-only; `arr.fill(value)` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseShortArraySort$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useshortarraysort$ktrecipe.md)
  * **Use `ShortArray.sort()` instead of `Arrays.sort(arr)`**
  * `java.util.Arrays.sort(arr: short[])` is JVM-only; `arr.sort()` is the multiplatform Kotlin extension.
* [org.openrewrite.kotlin.migrate.UseStringToBoolean$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usestringtoboolean$ktrecipe.md)
  * **Use `String.toBoolean()` instead of `java.lang.Boolean.parseBoolean(s)`**
  * Java-idiom `Boolean.parseBoolean(s)` migrates to the Kotlin extension `s.toBoolean()`; for strict parsing that throws on non-`true`/`false`, use `s.toBooleanStrict()` instead.
* [org.openrewrite.kotlin.migrate.UseStringToDouble$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usestringtodouble$ktrecipe.md)
  * **Use `String.toDouble()` instead of `java.lang.Double.parseDouble(s)`**
  * Java-idiom `Double.parseDouble(s)` migrates to the Kotlin extension `s.toDouble()`.
* [org.openrewrite.kotlin.migrate.UseStringToFloat$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usestringtofloat$ktrecipe.md)
  * **Use `String.toFloat()` instead of `java.lang.Float.parseFloat(s)`**
  * Java-idiom `Float.parseFloat(s)` migrates to the Kotlin extension `s.toFloat()`.
* [org.openrewrite.kotlin.migrate.UseStringToInt$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usestringtoint$ktrecipe.md)
  * **Use `String.toInt()` instead of `Integer.parseInt(s)`**
  * Java-idiom `Integer.parseInt(s)` migrates to the Kotlin extension `s.toInt()`. The behavior is identical — both throw `NumberFormatException` on invalid input.
* [org.openrewrite.kotlin.migrate.UseStringToIntWithRadix$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usestringtointwithradix$ktrecipe.md)
  * **Use `String.toInt(radix)` instead of `Integer.parseInt(s, radix)`**
  * `Integer.parseInt(s, radix)` is JVM-only; the Kotlin extension `s.toInt(radix)` is multiplatform and reads as a receiver call.
* [org.openrewrite.kotlin.migrate.UseStringToLong$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usestringtolong$ktrecipe.md)
  * **Use `String.toLong()` instead of `java.lang.Long.parseLong(s)`**
  * Java-idiom `Long.parseLong(s)` migrates to the Kotlin extension `s.toLong()`.
* [org.openrewrite.kotlin.migrate.UseStringToLongWithRadix$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usestringtolongwithradix$ktrecipe.md)
  * **Use `String.toLong(radix)` instead of `Long.parseLong(s, radix)`**
  * `java.lang.Long.parseLong(s, radix)` is JVM-only; the Kotlin extension `s.toLong(radix)` is multiplatform and reads as a receiver call.
* [org.openrewrite.kotlin.migrate.UseStringToRegex$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usestringtoregex$ktrecipe.md)
  * **Use `String.toRegex()` instead of `Pattern.compile(s)`**
  * `java.util.regex.Pattern.compile(s)` migrates to the Kotlin extension `s.toRegex()`, which returns a `kotlin.text.Regex` and reads more naturally.
* [org.openrewrite.kotlin.migrate.UseSumOf$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usesumof$ktrecipe.md)
  * **Use `sumOf` instead of `sumBy`**
  * `Iterable.sumBy \{ … \}` was deprecated in Kotlin 1.5 in favor of the type-inferred `sumOf \{ … \}` (which avoids the unchecked Int return).
* [org.openrewrite.kotlin.migrate.UseSumOfDouble$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usesumofdouble$ktrecipe.md)
  * **Use `sumOf` instead of `sumByDouble`**
  * `Iterable.sumByDouble \{ … \}` was deprecated in Kotlin 1.5 in favor of the type-inferred `sumOf \{ … \}`.
* [org.openrewrite.kotlin.migrate.UseUppercase$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useuppercase$ktrecipe.md)
  * **Use `uppercase()` instead of `toUpperCase()`**
  * `String.toUpperCase()` was deprecated in Kotlin 1.5 in favor of the locale-explicit `uppercase()`.
* [org.openrewrite.kotlin.migrate.UseUppercaseChar$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useuppercasechar$ktrecipe.md)
  * **Use `Char.uppercaseChar()` instead of `Char.toUpperCase()`**
  * `Char.toUpperCase()` was deprecated in Kotlin 1.5 in favor of the locale-explicit `uppercaseChar()`.
* [org.openrewrite.kotlin.migrate.UseUppercaseWithLocale$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/useuppercasewithlocale$ktrecipe.md)
  * **Use `uppercase(locale)` instead of `toUpperCase(locale)`**
  * The JVM `String.toUpperCase(Locale)` overload was deprecated in Kotlin 1.5 alongside the no-arg form; the replacement `uppercase(Locale)` keeps the locale parameter and uses the new spelling.
* [org.openrewrite.kotlin.migrate.UseValueClass$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/migrate/usevalueclass$ktrecipe.md)
  * **Use `@JvmInline value class` instead of `inline class`**
  * `inline class` was deprecated in Kotlin 1.5 in favor of the explicit `@JvmInline value class` pair; the new spelling separates the JVM mapping (`@JvmInline`) from the language-level semantics (`value`).
* [org.openrewrite.kotlin.performance.CollapseFilterTerminals$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/collapsefilterterminals$ktrecipe.md)
  * **Collapse `filter \{ p \}.&lt;terminal&gt;()` chains**
  * Folds predicate-taking terminals (`first`, `last`, `count`, `any`, `none`, `single`, `firstOrNull`, `lastOrNull`, `singleOrNull`) and `sumOf`/`maxOf`/`minOf` selectors into the upstream `filter` or `map`, avoiding the intermediate list materialization.
* [org.openrewrite.kotlin.performance.CollapseSortAndReverse$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/collapsesortandreverse$ktrecipe.md)
  * **Collapse `sorted().first/last()` and `reversed().first/last()` chains**
  * Replaces O(n log n) sorts whose only purpose is to read one element with the equivalent O(n) `min`/`max`/`minBy`/`maxBy`, and elides unnecessary `reversed()` copies before `first`/`last`.
* [org.openrewrite.kotlin.performance.FindAllocationsInCollectionLambdas$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findallocationsincollectionlambdas$ktrecipe.md)
  * **Find expensive allocations inside collection lambdas**
  * Search-only recipes that flag heavyweight allocations sitting inside the trailing lambda of a `map` / `filter` / `forEach` / `flatMap` call. Each such lambda runs once per element — the same allocation-cost profile as a loop body.
* [org.openrewrite.kotlin.performance.FindAllocationsInHotPaths$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findallocationsinhotpaths$ktrecipe.md)
  * **Find expensive allocations on hot paths**
  * Search-only recipes that flag heavyweight allocations sitting on a path the runtime exercises repeatedly — inside a loop, inside `View.onDraw`/`onMeasure`/`onLayout`. Each match shows up as a `SearchResult` for review; nothing is rewritten automatically.
* [org.openrewrite.kotlin.performance.FindAllocationsInOnDraw$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findallocationsinondraw$ktrecipe.md)
  * **Find graphics allocations inside `View.onDraw`**
  * Android views call `onDraw` on every frame. Allocating `Paint`, `Path`, `Rect`, `RectF`, `Region`, `Matrix`, or `Bitmap` instances per draw causes GC pressure and dropped frames — hoist them into field initializers or `lazy \{ \}` properties.
* [org.openrewrite.kotlin.performance.FindAllocationsInOnLayout$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findallocationsinonlayout$ktrecipe.md)
  * **Find graphics allocations inside `View.onLayout`**
  * `onLayout` runs whenever a view's children are repositioned. Allocating `Paint`, `Path`, `Rect`, `RectF`, `Region`, `Matrix`, or `Bitmap` instances per layout causes per-frame GC pressure — hoist them to fields.
* [org.openrewrite.kotlin.performance.FindAllocationsInOnMeasure$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findallocationsinonmeasure$ktrecipe.md)
  * **Find graphics allocations inside `View.onMeasure`**
  * `onMeasure` runs whenever the measurement pass walks a view. Allocating `Paint`, `Path`, `Rect`, `RectF`, `Region`, `Matrix`, or `Bitmap` instances per measure makes layout reflows hit the GC — hoist them to fields.
* [org.openrewrite.kotlin.performance.FindBase64GetDecoderInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findbase64getdecoderinloops$ktrecipe.md)
  * **Find `Base64.getDecoder()` calls inside loops**
  * `Base64.getDecoder()` returns a shared singleton, so the call itself is cheap — but reading the decoder from a `final` field is cheaper still. Hoist the decoder to a top-level `private val` for clarity.
* [org.openrewrite.kotlin.performance.FindBigDecimalFromStringInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findbigdecimalfromstringinloops$ktrecipe.md)
  * **Find `BigDecimal(&quot;...&quot;)` allocations inside loops**
  * Parsing a `BigDecimal` from a `String` literal inside a loop reparses the same value every iteration. Hoist the literal `BigDecimal` out of the loop or use a cached constant.
* [org.openrewrite.kotlin.performance.FindBigIntegerFromStringInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findbigintegerfromstringinloops$ktrecipe.md)
  * **Find `BigInteger(&quot;...&quot;)` allocations inside loops**
  * Parsing a `BigInteger` from a `String` literal inside a loop reparses the same value every iteration. Hoist the literal `BigInteger` to a top-level property or `BigInteger.valueOf` constant.
* [org.openrewrite.kotlin.performance.FindBigIntegerValueOfInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findbigintegervalueofinloops$ktrecipe.md)
  * **Find `BigInteger.valueOf(long)` calls inside loops**
  * `BigInteger.valueOf` caches small values (-16..16) but allocates fresh `BigInteger` instances outside that range. Loop bodies frequently feed it dynamic values — hoist a constant where possible or accept the allocation cost.
* [org.openrewrite.kotlin.performance.FindCalendarGetInstanceInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findcalendargetinstanceinloops$ktrecipe.md)
  * **Find `Calendar.getInstance()` calls inside loops**
  * `Calendar.getInstance()` resolves the default `TimeZone` and `Locale` and allocates a fresh `GregorianCalendar` on every call. Inside a loop the timezone lookup dominates — hoist the calendar or migrate to `java.time` types.
* [org.openrewrite.kotlin.performance.FindCharsetForNameInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findcharsetfornameinloops$ktrecipe.md)
  * **Find `Charset.forName(...)` calls inside loops**
  * `Charset.forName(&quot;UTF-8&quot;)` walks the charset alias map on every call. Prefer the cached constants on `kotlin.text.Charsets` (`Charsets.UTF_8`, `Charsets.ISO_8859_1`, etc.) — or hoist a single `Charset` out of the loop.
* [org.openrewrite.kotlin.performance.FindClassForNameInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findclassfornameinloops$ktrecipe.md)
  * **Find `Class.forName` calls inside loops**
  * `Class.forName(...)` walks the classloader hierarchy on every call. Resolving the same class on every loop iteration burns CPU — cache the resolved `Class&lt;*&gt;` in a top-level property.
* [org.openrewrite.kotlin.performance.FindDateTimeFormatterInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/finddatetimeformatterinloops$ktrecipe.md)
  * **Find `DateTimeFormatter.ofPattern` allocations inside loops**
  * `DateTimeFormatter.ofPattern(...)` parses the pattern up-front. Doing that on every loop iteration burns CPU repeatedly — hoist the formatter into a top-level property. Unlike `SimpleDateFormat`, `DateTimeFormatter` is thread-safe, so the hoisted instance can be shared.
* [org.openrewrite.kotlin.performance.FindEagerMapOnSequence$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findeagermaponsequence$ktrecipe.md)
  * **Find `seq.toList().map \{ ... \}` patterns**
  * Calling `.toList()` on a `Sequence` and then `.map \{ … \}` materializes the full sequence into a `List` and then walks it again — defeating the lazy-pipeline purpose of `Sequence`. Drop the `toList()` so the `map` stays in the sequence.
* [org.openrewrite.kotlin.performance.FindFileNewBufferedReaderInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findfilenewbufferedreaderinloops$ktrecipe.md)
  * **Find `File(...).bufferedReader()` calls inside loops**
  * Constructing a `File` and opening a `BufferedReader` per loop iteration multiplies the OS-level open/read/close cost. If the same path is read each pass, read it once before the loop; if every iteration reads a different path, batch the work or reuse a `Reader`.
* [org.openrewrite.kotlin.performance.FindForEachWithIndexedAccess$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findforeachwithindexedaccess$ktrecipe.md)
  * **Find `for (i in xs.indices) \{ val x = xs[i] \}` patterns**
  * Iterating over `xs.indices` and indexing back into `xs[i]` is the explicit-index form of `xs.forEachIndexed \{ i, x -&gt; \}`. The indexed form is clearer and avoids re-resolving `xs[i]` on every access.
* [org.openrewrite.kotlin.performance.FindGsonInCollectionLambdas$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findgsonincollectionlambdas$ktrecipe.md)
  * **Find `Gson()` allocations inside collection lambdas**
  * Gson's default constructor builds the type-adapter registry up front. Allocating a fresh `Gson` per element repeats that work — hoist one `Gson` instance to a top-level property.
* [org.openrewrite.kotlin.performance.FindGsonInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findgsoninloops$ktrecipe.md)
  * **Find `Gson()` allocations inside loops**
  * Gson's default constructor builds the type-adapter registry up front. Allocating one per loop iteration repeats that work — hoist a single `Gson` instance to a top-level property.
* [org.openrewrite.kotlin.performance.FindIterationSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/finditerationsmells$ktrecipe.md)
  * **Find iteration-shape smells**
  * Flags iteration idioms that have a clearer, allocation-equivalent Kotlin form — currently the `for (i in xs.indices) \{ val x = xs[i] \}` shape that `forEachIndexed \{ i, x -&gt; \}` replaces.
* [org.openrewrite.kotlin.performance.FindLargeListPipeline$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findlargelistpipeline$ktrecipe.md)
  * **Find long `List` pipelines that should use `Sequence`**
  * A pipeline with three or more chained collection operations (`map`/`filter`/`flatMap`/etc.) on a `List` materializes an intermediate collection per stage. Long pipelines on large inputs typically run faster (and allocate less) as `xs.asSequence().…toList()`.
* [org.openrewrite.kotlin.performance.FindListOfInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findlistofinloops$ktrecipe.md)
  * **Find `listOf(...)` calls inside loops**
  * An immutable `listOf(...)` built inside a loop allocates a fresh list every iteration. If the contents are constant, hoist the list to a `val` outside the loop. If the contents change per iteration, the allocation is necessary — review and accept.
* [org.openrewrite.kotlin.performance.FindLocaleConstructionInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findlocaleconstructioninloops$ktrecipe.md)
  * **Find `Locale(...)` allocations inside loops**
  * `Locale(&quot;en&quot;, &quot;US&quot;)` walks the locale provider list on every construction. For common locales prefer the cached constants on `Locale` (e.g. `Locale.US`, `Locale.ENGLISH`). Otherwise hoist a single `Locale` out of the loop.
* [org.openrewrite.kotlin.performance.FindLoggerFactoryGetLoggerInCollectionLambdas$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findloggerfactorygetloggerincollectionlambdas$ktrecipe.md)
  * **Find `LoggerFactory.getLogger` calls inside collection lambdas**
  * `LoggerFactory.getLogger(...)` resolves the logger through SLF4J on every call. Inside a collection lambda that resolves the same logger per element — hoist it to a `private val` companion property.
* [org.openrewrite.kotlin.performance.FindLoggerFactoryGetLoggerInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findloggerfactorygetloggerinloops$ktrecipe.md)
  * **Find `LoggerFactory.getLogger` calls inside loops**
  * `LoggerFactory.getLogger(...)` resolves the logger through the SLF4J binding on every call. Hoist the logger to a `private val` companion property — there's exactly one logger per class.
* [org.openrewrite.kotlin.performance.FindLoopAllocations$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findloopallocations$ktrecipe.md)
  * **Find collection construction inside loops**
  * Flags `listOf` / `mutableListOf` / `mutableMapOf` calls that allocate a fresh collection on every loop iteration. Hoist constants or `clear()`-and-reuse a single instance.
* [org.openrewrite.kotlin.performance.FindMessageDigestGetInstanceInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findmessagedigestgetinstanceinloops$ktrecipe.md)
  * **Find `MessageDigest.getInstance` calls inside loops**
  * `MessageDigest.getInstance(&quot;MD5&quot;)` walks the security-provider list on every call. Hoist the digest to a per-thread cache or reset it per use.
* [org.openrewrite.kotlin.performance.FindMutableListOfInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findmutablelistofinloops$ktrecipe.md)
  * **Find `mutableListOf&lt;T&gt;()` allocations inside loops**
  * A `mutableListOf&lt;T&gt;()` allocated per iteration produces garbage proportional to the loop count. If the list is filled and consumed each pass, consider `clear()`-and-reuse on a single hoisted list.
* [org.openrewrite.kotlin.performance.FindMutableMapOfInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findmutablemapofinloops$ktrecipe.md)
  * **Find `mutableMapOf&lt;K, V&gt;()` allocations inside loops**
  * A `mutableMapOf&lt;K, V&gt;()` allocated per iteration produces garbage proportional to the loop count. If the map is filled and consumed each pass, consider `clear()`-and-reuse on a single hoisted map.
* [org.openrewrite.kotlin.performance.FindObjectMapperInCollectionLambdas$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findobjectmapperincollectionlambdas$ktrecipe.md)
  * **Find Jackson `ObjectMapper()` allocations inside collection lambdas**
  * Allocating a fresh `ObjectMapper` per element rebuilds Jackson's module/serializer registry on every call. Hoist one mapper to a top-level property — it is thread-safe once configured.
* [org.openrewrite.kotlin.performance.FindObjectMapperInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findobjectmapperinloops$ktrecipe.md)
  * **Find Jackson `ObjectMapper()` allocations inside loops**
  * Jackson's `ObjectMapper` is expensive to construct — it builds the default module and serializer registries on every allocation. Hoist a single `ObjectMapper` instance to a top-level property; it is thread-safe once configured.
* [org.openrewrite.kotlin.performance.FindOptionalGetInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findoptionalgetinloops$ktrecipe.md)
  * **Find `Optional.get()` calls inside loops**
  * `Optional.get()` throws `NoSuchElementException` when the optional is empty — the loop body usually relies on a preceding `isPresent` check. Prefer `orElse`, `orElseThrow`, or `ifPresent \{ \}` to make the empty branch explicit and avoid the double-check.
* [org.openrewrite.kotlin.performance.FindPatternCompileInCollectionLambdas$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findpatterncompileincollectionlambdas$ktrecipe.md)
  * **Find `Pattern.compile` calls inside collection lambdas**
  * `Pattern.compile(...)` parses the pattern up front; running it inside a `map`/`filter`/`forEach` lambda recompiles the pattern for every element. Hoist the `Pattern` to a top-level property.
* [org.openrewrite.kotlin.performance.FindPatternCompileInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findpatterncompileinloops$ktrecipe.md)
  * **Find `Pattern.compile` allocations inside loops**
  * Compiling a `java.util.regex.Pattern` is expensive — allocating one inside a loop recompiles it on every iteration. Hoist the `Pattern` out of the loop or cache it in a top-level property.
* [org.openrewrite.kotlin.performance.FindRegexAllocationsInCollectionLambdas$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findregexallocationsincollectionlambdas$ktrecipe.md)
  * **Find `Regex` allocations inside collection lambdas**
  * A `Regex` allocated inside the lambda passed to `map`, `filter`, `forEach`, `flatMap`, etc. is compiled once per element. Hoist the regex to a top-level property — collection-pipeline lambdas run on every element, just like a loop body.
* [org.openrewrite.kotlin.performance.FindRegexAllocationsInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findregexallocationsinloops$ktrecipe.md)
  * **Find `Regex` allocations inside loops**
  * Compiling a `Regex` is expensive — allocating one inside a loop pays the cost on every iteration. Hoist the regex out of the loop or cache it in a top-level property.
* [org.openrewrite.kotlin.performance.FindSequencePipelineSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findsequencepipelinesmells$ktrecipe.md)
  * **Find `Sequence`/`List` pipeline shape smells**
  * Flags pipelines where the `List`/`Sequence` choice fights the data flow — long `List` pipelines that materialize between every stage, and `Sequence` pipelines that eagerly fall back to `List` mid-pipeline.
* [org.openrewrite.kotlin.performance.FindSimpleDateFormatInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findsimpledateformatinloops$ktrecipe.md)
  * **Find `SimpleDateFormat` allocations inside loops**
  * `SimpleDateFormat` parses its pattern string in the constructor and is not thread-safe — allocating one per iteration is a common per-row hot spot. Hoist it out of the loop or use a thread-local cache (or migrate to `DateTimeFormatter`).
* [org.openrewrite.kotlin.performance.FindStringConcatSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findstringconcatsmells$ktrecipe.md)
  * **Find string-allocation smells**
  * Flags `s = s + &quot;…&quot;`-inside-loop patterns that allocate a fresh `String` on every iteration. The `StringBuilder.length`-vs-`size` rewrite lives in the autofix bundle.
* [org.openrewrite.kotlin.performance.FindStringFormatInCollectionLambdas$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findstringformatincollectionlambdas$ktrecipe.md)
  * **Find `String.format` calls inside collection lambdas**
  * `String.format(...)` reparses the format string on every call. Inside a collection lambda that runs per element — prefer Kotlin string templates (`&quot;$\{x\}&quot;`) or hoist a `Formatter`.
* [org.openrewrite.kotlin.performance.FindStringFormatInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findstringformatinloops$ktrecipe.md)
  * **Find `String.format` calls inside loops**
  * `String.format(...)` parses the format string on every call. Inside a loop this re-parses the same template every iteration — prefer string templates (`&quot;$\{x\}&quot;`) or extract the `Formatter` if you must use `%`-style specifiers.
* [org.openrewrite.kotlin.performance.FindStringPlusInLoop$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findstringplusinloop$ktrecipe.md)
  * **Find `s = s + &quot;...&quot;` string concatenation inside loops**
  * Repeated `String` concatenation inside a loop allocates a new `String` on every iteration — each `+` produces a fresh `StringBuilder`. Prefer building once with `StringBuilder` (or `buildString \{ … \}`).
* [org.openrewrite.kotlin.performance.FindURIConstructorInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/finduriconstructorinloops$ktrecipe.md)
  * **Find `URI(&quot;...&quot;)` allocations inside loops**
  * `java.net.URI`'s constructor parses and validates the URI string. Doing that per loop iteration burns CPU on the same string — hoist constants out of the loop.
* [org.openrewrite.kotlin.performance.FindURLConstructorInLoops$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/findurlconstructorinloops$ktrecipe.md)
  * **Find `URL(&quot;...&quot;)` allocations inside loops**
  * `java.net.URL`'s constructor parses the URL string and dispatches through `URLStreamHandlerFactory`. Inside a loop that adds up — hoist URLs that don't change per iteration, or migrate to `URI`/`HttpRequest` builders.
* [org.openrewrite.kotlin.performance.ImproveKotlinPerformance$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/improvekotlinperformance$ktrecipe.md)
  * **Improve performance of Kotlin code**
  * Autofix-only performance bundle: collapses allocating call chains (filter/map/sort/reverse), promotes Compose primitive state holders, and rewrites `StringBuilder.length` to `size`. Excludes the search-only `Find*` recipes so the run output is just diffs, not a flood of search results.
* [org.openrewrite.kotlin.performance.Performance$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/performance$ktrecipe.md)
  * **Apply Kotlin performance idioms**
  * Opinionated bundle of every performance recipe in this module: chain collapses (filter/map/sort/reverse), Compose primitive-state holders, and hot-path allocation finders. Search-result recipes coexist with rewriting recipes — for diff-only output, use `ImproveKotlinPerformance` instead.
* [org.openrewrite.kotlin.performance.UseAnyWithPredicate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/useanywithpredicate$ktrecipe.md)
  * **Use `any \{ predicate \}` instead of `filter \{ predicate \}.isNotEmpty()`**
  * `any \{ predicate \}` short-circuits on the first match and avoids materializing the intermediate filtered list.
* [org.openrewrite.kotlin.performance.UseAnyWithPredicateInsteadOfFilterAny$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/useanywithpredicateinsteadoffilterany$ktrecipe.md)
  * **Use `any \{ predicate \}` instead of `filter \{ predicate \}.any()`**
  * `any \{ predicate \}` short-circuits on the first match. Calling `any()` after `filter` first materializes the entire filtered list.
* [org.openrewrite.kotlin.performance.UseComposePrimitiveStateOf$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usecomposeprimitivestateof$ktrecipe.md)
  * **Use primitive `mutable&lt;Int|Long|Float|Double&gt;StateOf` in Compose**
  * Inside `@Composable` functions, replaces `mutableStateOf(&lt;primitive&gt;)` with the matching primitive-specialized `mutableIntStateOf`/`mutableLongStateOf`/`mutableFloatStateOf`/`mutableDoubleStateOf`. The specialized state holders keep the wrapped value unboxed across reads and writes during recomposition.
* [org.openrewrite.kotlin.performance.UseCountWithPredicate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usecountwithpredicate$ktrecipe.md)
  * **Use `count \{ predicate \}` instead of `filter \{ predicate \}.count()`**
  * Folding the predicate into `count` avoids materializing the intermediate filtered list.
* [org.openrewrite.kotlin.performance.UseFilterNotToForFilterNotToMutableList$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usefilternottoforfilternottomutablelist$ktrecipe.md)
  * **Use `filterNotTo(mutableListOf(), p)` instead of `filterNot(p).toMutableList()`**
  * `filterNot \{ p \}` allocates a `List&lt;T&gt;` and `toMutableList` copies it. `filterNotTo(mutableListOf(), p)` writes directly into the target without the intermediate.
* [org.openrewrite.kotlin.performance.UseFilterToForFilterToMutableList$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usefiltertoforfiltertomutablelist$ktrecipe.md)
  * **Use `filterTo(mutableListOf(), p)` instead of `filter(p).toMutableList()`**
  * `filter \{ p \}` allocates a `List&lt;T&gt;` and `toMutableList` copies it. `filterTo(mutableListOf(), p)` writes directly into the target without the intermediate.
* [org.openrewrite.kotlin.performance.UseFirstForReversedLast$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usefirstforreversedlast$ktrecipe.md)
  * **Use `first()` instead of `reversed().last()`**
  * `reversed()` allocates an intermediate reversed copy. `first()` returns the same element directly.
* [org.openrewrite.kotlin.performance.UseFirstNotNullOfForMapFirst$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usefirstnotnullofformapfirst$ktrecipe.md)
  * **Use `firstNotNullOf \{ f \}` instead of `mapNotNull \{ f \}.first()`**
  * `firstNotNullOf` short-circuits on the first non-null result. `mapNotNull \{ f \}.first()` walks the whole input.
* [org.openrewrite.kotlin.performance.UseFirstNotNullOfOrNullForMapFirstOrNull$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usefirstnotnullofornullformapfirstornull$ktrecipe.md)
  * **Use `firstNotNullOfOrNull \{ f \}` instead of `mapNotNull \{ f \}.firstOrNull()`**
  * `firstNotNullOfOrNull` short-circuits on the first non-null result. `mapNotNull \{ f \}.firstOrNull()` walks the whole input.
* [org.openrewrite.kotlin.performance.UseFirstOrNullWithPredicate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usefirstornullwithpredicate$ktrecipe.md)
  * **Use `firstOrNull \{ predicate \}` instead of `filter \{ predicate \}.firstOrNull()`**
  * Folding the predicate into `firstOrNull` short-circuits on the first match and avoids materializing the intermediate filtered list.
* [org.openrewrite.kotlin.performance.UseFirstWithPredicate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usefirstwithpredicate$ktrecipe.md)
  * **Use `first \{ predicate \}` instead of `filter \{ predicate \}.first()`**
  * Folding the predicate into `first` avoids materializing the intermediate filtered list and short-circuits on the first match.
* [org.openrewrite.kotlin.performance.UseFlatMapToForFlatMapToMutableList$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/useflatmaptoforflatmaptomutablelist$ktrecipe.md)
  * **Use `flatMapTo(mutableListOf(), f)` instead of `flatMap(f).toMutableList()`**
  * `flatMap \{ f \}` allocates a `List&lt;R&gt;` and `toMutableList` copies it. `flatMapTo(mutableListOf(), f)` writes directly into the target without the intermediate.
* [org.openrewrite.kotlin.performance.UseLastForReversedFirst$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/uselastforreversedfirst$ktrecipe.md)
  * **Use `last()` instead of `reversed().first()`**
  * `reversed()` allocates an intermediate reversed copy. `last()` walks to the same element directly.
* [org.openrewrite.kotlin.performance.UseLastOrNullWithPredicate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/uselastornullwithpredicate$ktrecipe.md)
  * **Use `lastOrNull \{ predicate \}` instead of `filter \{ predicate \}.lastOrNull()`**
  * Folding the predicate into `lastOrNull` avoids materializing the intermediate filtered list.
* [org.openrewrite.kotlin.performance.UseLastWithPredicate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/uselastwithpredicate$ktrecipe.md)
  * **Use `last \{ predicate \}` instead of `filter \{ predicate \}.last()`**
  * Folding the predicate into `last` avoids materializing the intermediate filtered list.
* [org.openrewrite.kotlin.performance.UseLengthForStringBuilderSize$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/uselengthforstringbuildersize$ktrecipe.md)
  * **Use `sb.length` instead of `sb.toString().length`**
  * Calling `toString()` on a `StringBuilder` allocates a snapshot `String` just to read its length. `StringBuilder` exposes `length` directly without the copy.
* [org.openrewrite.kotlin.performance.UseMapNotNullForMapFilterNotNull$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usemapnotnullformapfilternotnull$ktrecipe.md)
  * **Use `mapNotNull \{ f \}` instead of `map \{ f \}.filterNotNull()`**
  * `mapNotNull` drops nulls in the same pass that produces them. `map \{ f \}.filterNotNull()` materializes the full `List&lt;R?&gt;` first.
* [org.openrewrite.kotlin.performance.UseMapToForMapToMutableList$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usemaptoformaptomutablelist$ktrecipe.md)
  * **Use `mapTo(mutableListOf(), f)` instead of `map(f).toMutableList()`**
  * `map \{ f \}` allocates a `List&lt;R&gt;` and `toMutableList` copies it. `mapTo(mutableListOf(), f)` writes directly into the target without the intermediate.
* [org.openrewrite.kotlin.performance.UseMaxByForSortedByLast$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usemaxbyforsortedbylast$ktrecipe.md)
  * **Use `maxBy \{ selector \}` instead of `sortedBy \{ selector \}.last()`**
  * `sortedBy(f).last()` does an O(n log n) sort just to read the maximum-by-`f`. `maxBy(f)` finds it in a single linear pass.
* [org.openrewrite.kotlin.performance.UseMaxForSortedDescendingFirst$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usemaxforsorteddescendingfirst$ktrecipe.md)
  * **Use `max()` instead of `sortedDescending().first()`**
  * `sortedDescending().first()` does an O(n log n) sort just to read the maximum. `max()` finds it in a single linear pass.
* [org.openrewrite.kotlin.performance.UseMaxForSortedLast$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usemaxforsortedlast$ktrecipe.md)
  * **Use `max()` instead of `sorted().last()`**
  * `sorted().last()` does an O(n log n) sort just to read the maximum. `max()` finds it in a single linear pass.
* [org.openrewrite.kotlin.performance.UseMaxOfWithSelector$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usemaxofwithselector$ktrecipe.md)
  * **Use `maxOf \{ selector \}` instead of `map \{ selector \}.max()`**
  * `maxOf` walks the input once and tracks the running maximum without materializing the intermediate `List&lt;Int&gt;`.
* [org.openrewrite.kotlin.performance.UseMinByForSortedByFirst$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/useminbyforsortedbyfirst$ktrecipe.md)
  * **Use `minBy \{ selector \}` instead of `sortedBy \{ selector \}.first()`**
  * `sortedBy(f).first()` does an O(n log n) sort just to read the minimum-by-`f`. `minBy(f)` finds it in a single linear pass.
* [org.openrewrite.kotlin.performance.UseMinForSortedDescendingLast$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/useminforsorteddescendinglast$ktrecipe.md)
  * **Use `min()` instead of `sortedDescending().last()`**
  * `sortedDescending().last()` does an O(n log n) sort just to read the minimum. `min()` finds it in a single linear pass.
* [org.openrewrite.kotlin.performance.UseMinForSortedFirst$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/useminforsortedfirst$ktrecipe.md)
  * **Use `min()` instead of `sorted().first()`**
  * `sorted().first()` does an O(n log n) sort just to read the minimum. `min()` finds it in a single linear pass.
* [org.openrewrite.kotlin.performance.UseMinOfWithSelector$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/useminofwithselector$ktrecipe.md)
  * **Use `minOf \{ selector \}` instead of `map \{ selector \}.min()`**
  * `minOf` walks the input once and tracks the running minimum without materializing the intermediate `List&lt;Int&gt;`.
* [org.openrewrite.kotlin.performance.UseMutableDoubleStateOf$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usemutabledoublestateof$ktrecipe.md)
  * **Use `mutableDoubleStateOf` instead of `mutableStateOf&lt;Double&gt;` in Compose**
  * Compose's `mutableDoubleStateOf` keeps the wrapped value as a primitive `Double`, avoiding the autobox-and-unbox cost that `mutableStateOf&lt;Double&gt;` pays on every read and write inside a recomposition.
* [org.openrewrite.kotlin.performance.UseMutableFloatStateOf$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usemutablefloatstateof$ktrecipe.md)
  * **Use `mutableFloatStateOf` instead of `mutableStateOf&lt;Float&gt;` in Compose**
  * Compose's `mutableFloatStateOf` keeps the wrapped value as a primitive `Float`, avoiding the autobox-and-unbox cost that `mutableStateOf&lt;Float&gt;` pays on every read and write inside a recomposition.
* [org.openrewrite.kotlin.performance.UseMutableIntStateOf$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usemutableintstateof$ktrecipe.md)
  * **Use `mutableIntStateOf` instead of `mutableStateOf&lt;Int&gt;` in Compose**
  * Compose's `mutableIntStateOf` keeps the wrapped value as a primitive `Int`, avoiding the autobox-and-unbox cost that `mutableStateOf&lt;Int&gt;` pays on every read and write inside a recomposition.
* [org.openrewrite.kotlin.performance.UseMutableLongStateOf$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usemutablelongstateof$ktrecipe.md)
  * **Use `mutableLongStateOf` instead of `mutableStateOf&lt;Long&gt;` in Compose**
  * Compose's `mutableLongStateOf` keeps the wrapped value as a primitive `Long`, avoiding the autobox-and-unbox cost that `mutableStateOf&lt;Long&gt;` pays on every read and write inside a recomposition.
* [org.openrewrite.kotlin.performance.UseNoneWithPredicate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usenonewithpredicate$ktrecipe.md)
  * **Use `none \{ predicate \}` instead of `filter \{ predicate \}.isEmpty()`**
  * `none \{ predicate \}` short-circuits on the first match and avoids materializing the intermediate filtered list.
* [org.openrewrite.kotlin.performance.UseNoneWithPredicateInsteadOfFilterNone$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usenonewithpredicateinsteadoffilternone$ktrecipe.md)
  * **Use `none \{ predicate \}` instead of `filter \{ predicate \}.none()`**
  * `none \{ predicate \}` short-circuits on the first match. Calling `none()` after `filter` first materializes the entire filtered list.
* [org.openrewrite.kotlin.performance.UseSingleOrNullWithPredicate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usesingleornullwithpredicate$ktrecipe.md)
  * **Use `singleOrNull \{ predicate \}` instead of `filter \{ predicate \}.singleOrNull()`**
  * Folding the predicate into `singleOrNull` avoids materializing the intermediate filtered list.
* [org.openrewrite.kotlin.performance.UseSingleWithPredicate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usesinglewithpredicate$ktrecipe.md)
  * **Use `single \{ predicate \}` instead of `filter \{ predicate \}.single()`**
  * Folding the predicate into `single` avoids materializing the intermediate filtered list and preserves the same throwing semantics on the no-match and multi-match cases.
* [org.openrewrite.kotlin.performance.UseSortedByDescendingForSortedByReversed$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usesortedbydescendingforsortedbyreversed$ktrecipe.md)
  * **Use `sortedByDescending \{ f \}` instead of `sortedBy \{ f \}.reversed()`**
  * `sortedByDescending` sorts directly into the target order. `sortedBy(f).reversed()` allocates an intermediate ascending-sorted list and then a reversed copy.
* [org.openrewrite.kotlin.performance.UseSortedDescendingForSortedReversed$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usesorteddescendingforsortedreversed$ktrecipe.md)
  * **Use `sortedDescending()` instead of `sorted().reversed()`**
  * `sortedDescending` sorts directly into descending order. `sorted().reversed()` allocates an intermediate ascending-sorted list and then a reversed copy.
* [org.openrewrite.kotlin.performance.UseSumOfWithSelector$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/performance/usesumofwithselector$ktrecipe.md)
  * **Use `sumOf \{ selector \}` instead of `map \{ selector \}.sum()`**
  * `sumOf` accumulates the result directly without materializing the intermediate `List&lt;Int&gt;`.
* [org.openrewrite.kotlin.search.FindApiSurface$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findapisurface$ktrecipe.md)
  * **Find public-API and binary-stability surface**
  * Public `const val` / `lateinit var` declarations, `@OptIn` / `@RequiresOptIn` annotations, `@Deprecated` declarations, and JVM-interop annotations (`@JvmStatic`, `@JvmField`, `@JvmOverloads`). Each match is a position where API stability or external-consumer constraints are encoded in the source.
* [org.openrewrite.kotlin.search.FindAssertJChains$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findassertjchains$ktrecipe.md)
  * **Find AssertJ `assertThat(...)` assertion chains**
  * AssertJ chains are the heart of the test suite's verification logic. Surfacing them helps a reviewer or LLM agent locate the assertions in a long test method and reason about coverage.
* [org.openrewrite.kotlin.search.FindAtomicAllocations$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findatomicallocations$ktrecipe.md)
  * **Find `AtomicReference`/`AtomicInteger`/`AtomicLong`/`AtomicBoolean` allocations**
  * Atomic primitives indicate concurrent state — each one is a place where a reviewer or LLM agent should look for happens-before reasoning. In coroutine-only code, `MutableStateFlow` or `Mutex`-guarded state is usually a clearer alternative.
* [org.openrewrite.kotlin.search.FindBuildHygiene$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findbuildhygiene$ktrecipe.md)
  * **Find build- and source-hygiene smells**
  * Wildcard imports and similar source-organization smells that obscure where names come from.
* [org.openrewrite.kotlin.search.FindClassForName$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findclassforname$ktrecipe.md)
  * **Find `Class.forName(...)` calls**
  * `Class.forName` is the entrypoint to runtime reflection — the receiver type isn't known at compile time, so type-safety analyses can't follow what happens next. Each match is a position an LLM agent should single out when reasoning about what a function can touch.
* [org.openrewrite.kotlin.search.FindClipboardAccess$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findclipboardaccess$ktrecipe.md)
  * **Find Android `ClipboardManager` access**
  * Clipboard reads and writes carry user data into and out of a process boundary the user typically does not associate with the app. Each call is a candidate for review of secret-leak and accidental-paste scenarios.
* [org.openrewrite.kotlin.search.FindCommandExecutionSinks$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findcommandexecutionsinks$ktrecipe.md)
  * **Find process-execution sinks (`Runtime.exec`, `ProcessBuilder.start`)**
  * Spawning a process with attacker-controlled arguments is the canonical command-injection sink. Each call here is a position where a reviewer or LLM agent should verify that the argument list is statically built or properly quoted.
* [org.openrewrite.kotlin.search.FindConcurrencySurface$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findconcurrencysurface$ktrecipe.md)
  * **Find concurrency primitives**
  * Raw threads, executor-service factories, JUC locks, atomic primitives, futures, synchronized blocks, `@Volatile` fields, `ThreadLocal` allocations, and JUC coordination primitives (`Semaphore`, `CountDownLatch`, `CyclicBarrier`). Each match is a position to inspect for cancellation semantics, happens-before edges, and pool lifecycle.
* [org.openrewrite.kotlin.search.FindCryptoSeeds$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findcryptoseeds$ktrecipe.md)
  * **Find cryptographic primitive entries (`KeyGenerator.generateKey`, `Cipher.getInstance`, etc.)**
  * Every cryptographic operation is a place where algorithm choice and key handling matter — `Cipher.getInstance(&quot;AES&quot;)` is not the same as `Cipher.getInstance(&quot;AES/GCM/NoPadding&quot;)`. Each match is a position for security review.
* [org.openrewrite.kotlin.search.FindDataFlowSinks$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/finddataflowsinks$ktrecipe.md)
  * **Find data-flow sink positions**
  * Locations where data crosses a trust or persistence boundary: SQL execution, filesystem writes, process execution, logger writes, outbound network, cryptographic operations, and Android clipboard access. Each match is a seed an LLM agent can connect back to upstream sources.
* [org.openrewrite.kotlin.search.FindDataFlowSources$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/finddataflowsources$ktrecipe.md)
  * **Find data-flow source positions**
  * Locations where untrusted or configuration-controlled data enters the program: `readLine`/`Scanner` reads, environment/system-property reads, HTTP request reads, and filesystem reads. Each match is a seed an LLM agent (or human reviewer) can connect to downstream sinks.
* [org.openrewrite.kotlin.search.FindDatabaseSeeds$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/finddatabaseseeds$ktrecipe.md)
  * **Find database-query seeds**
  * Individual SQL execution and JPA query construction calls (`Statement.executeQuery`, `Statement.executeUpdate`, `EntityManager.createQuery`). Each match is a position where a SQL/JPQL string crosses into the database layer.
* [org.openrewrite.kotlin.search.FindDeepNesting$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/finddeepnesting$ktrecipe.md)
  * **Find functions with nesting depth greater than 4**
  * Deeply nested control flow is the canonical hard-to-read code smell. For human reviewers and LLM agents alike, nesting beyond 4 levels signals the body should be split or flattened with early returns.
* [org.openrewrite.kotlin.search.FindDeprecatedDeclarations$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/finddeprecateddeclarations$ktrecipe.md)
  * **Find declarations annotated `@Deprecated`**
  * A `@Deprecated` declaration is API the maintainers want callers to migrate away from. Each match is a candidate to revisit either the deprecation timeline or the replacement strategy.
* [org.openrewrite.kotlin.search.FindEmptyCatchBlocks$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findemptycatchblocks$ktrecipe.md)
  * **Find `catch` blocks with empty bodies**
  * An empty `catch` block silently swallows failures — usually a bug or, at minimum, a missing comment explaining the intent. Flag for review so a reviewer or LLM agent can either log, rethrow, or document the swallow.
* [org.openrewrite.kotlin.search.FindEmptyFunctions$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findemptyfunctions$ktrecipe.md)
  * **Find functions with empty bodies**
  * An empty function body either belongs to a stub, an abstract-method override that intentionally does nothing, or forgotten work. For a reviewer or LLM agent reading the file, each match is a position where the contract claims something happens but nothing does.
* [org.openrewrite.kotlin.search.FindEntityManagerCreateQuery$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findentitymanagercreatequery$ktrecipe.md)
  * **Find `EntityManager.createQuery(...)` calls**
  * Each JPA `createQuery` is a JPQL/HQL execution seed — when the query string is built from user input, the same injection class applies as for raw SQL. Flag for parameter-binding review.
* [org.openrewrite.kotlin.search.FindEnvironmentSources$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findenvironmentsources$ktrecipe.md)
  * **Find `System.getenv(...)` / `System.getProperty(...)` reads**
  * Environment variables and system properties are operator-controlled configuration values. Each read is a configuration seam — a reviewer or LLM agent reading the code should know which knobs the program exposes.
* [org.openrewrite.kotlin.search.FindExecutorServiceFactories$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findexecutorservicefactories$ktrecipe.md)
  * **Find `Executors.newXxxThreadPool` factory calls**
  * Each `Executors.newXxx` call allocates a thread pool that needs explicit lifecycle (`shutdown` on teardown). For services that need bounded resources, each allocation is a candidate for review — and for an LLM agent, the call site reveals where the application's parallelism budget lives.
* [org.openrewrite.kotlin.search.FindFieldReflection$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findfieldreflection$ktrecipe.md)
  * **Find `java.lang.reflect.Field.get/set` calls**
  * Direct field reads/writes via reflection bypass property accessors and `private` visibility. Each call is a position where invariants the surrounding code relies on can be silently violated.
* [org.openrewrite.kotlin.search.FindFileReadBytes$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findfilereadbytes$ktrecipe.md)
  * **Find `File.readBytes()` calls**
  * Each `File.readBytes` call reads a file's raw bytes into memory — useful as a filesystem-read seed and as a hint that the program holds the whole file in memory (vs. streaming).
* [org.openrewrite.kotlin.search.FindFileReadSources$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findfilereadsources$ktrecipe.md)
  * **Find filesystem read calls (`File.readText`, `Files.readString`, etc.)**
  * Filesystem reads are the application's IO surface — each call is data crossing a trust boundary set by the deployment's filesystem permissions. Useful as a seed for reasoning about cold-path latency, security boundaries, and what the program depends on at runtime.
* [org.openrewrite.kotlin.search.FindFileReadText$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findfilereadtext$ktrecipe.md)
  * **Find `File.readText()` calls**
  * Each `File.readText` call reads bytes off the filesystem — a trust-boundary position where the file's content becomes program data. Useful as an individual read seed for path-traversal or cold-path latency analysis.
* [org.openrewrite.kotlin.search.FindFileSystemSeeds$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findfilesystemseeds$ktrecipe.md)
  * **Find filesystem-operation seeds**
  * Individual filesystem reads, writes, deletes, and copies via `java.io.File` and `java.nio.file.Files`. Each match is a position where the program crosses the filesystem trust boundary.
* [org.openrewrite.kotlin.search.FindFileWriteSinks$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findfilewritesinks$ktrecipe.md)
  * **Find filesystem write calls (`File.writeText`, `Files.write`, etc.)**
  * Filesystem writes are persistent side effects — each call is data crossing a trust boundary in the other direction. Useful as a seed for reasoning about what the application persists and where path-traversal vulnerabilities can land.
* [org.openrewrite.kotlin.search.FindFileWriteText$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findfilewritetext$ktrecipe.md)
  * **Find `File.writeText(...)` calls**
  * Each `File.writeText` call writes data to disk — a persistent side effect at the application's IO boundary. Useful as an individual write seed for path-traversal or trust-boundary analysis.
* [org.openrewrite.kotlin.search.FindFilesCopy$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findfilescopy$ktrecipe.md)
  * **Find `Files.copy(...)` calls**
  * Each `Files.copy` call duplicates filesystem content — flag as a write seed where source/destination path provenance and `CopyOption`s (REPLACE_EXISTING, etc.) should be reviewed.
* [org.openrewrite.kotlin.search.FindFilesDelete$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findfilesdelete$ktrecipe.md)
  * **Find `Files.delete(...)` / `Files.deleteIfExists(...)` calls**
  * Each call deletes a file from disk — a destructive filesystem operation. Flag as a seed for review of path provenance, e.g. whether the path is attacker-controlled and whether the deletion is intentional.
* [org.openrewrite.kotlin.search.FindFilesNewBufferedWriter$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findfilesnewbufferedwriter$ktrecipe.md)
  * **Find `Files.newBufferedWriter(...)` calls**
  * Each `Files.newBufferedWriter` call opens a streaming writer to a file — a long-lived write seed where charset, `OpenOption`s, and close handling all matter.
* [org.openrewrite.kotlin.search.FindFilesWriteString$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findfileswritestring$ktrecipe.md)
  * **Find `Files.writeString(...)` calls**
  * Each `java.nio.file.Files.writeString` call commits text to disk via the NIO API. Useful as an individual write seed and a position where charset and `OpenOption`s should be reviewed.
* [org.openrewrite.kotlin.search.FindFutureAllocations$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findfutureallocations$ktrecipe.md)
  * **Find `CompletableFuture` / `FutureTask` allocations**
  * `CompletableFuture` (and `FutureTask`) interleave with their own thread pool; from Kotlin, `Deferred`/`async` integrates with structured concurrency. Each allocation is a candidate to migrate or at minimum to review for cancellation handling.
* [org.openrewrite.kotlin.search.FindGenericExceptionCatch$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findgenericexceptioncatch$ktrecipe.md)
  * **Find `catch (e: Exception)` and `catch (e: Throwable)` clauses**
  * Catching `Exception` or `Throwable` is almost always too broad — it sweeps up `NullPointerException`, `IllegalStateException`, and `OutOfMemoryError` into one branch. Narrow the catch to the specific exception types the block actually handles.
* [org.openrewrite.kotlin.search.FindGodClasses$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findgodclasses$ktrecipe.md)
  * **Find classes with more than 25 methods**
  * A class with this many methods has likely accreted responsibility over time. Flag for splitting along the methods' natural seams — repository vs mapper, view-model vs presenter, etc.
* [org.openrewrite.kotlin.search.FindHardcodedColorLiterals$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findhardcodedcolorliterals$ktrecipe.md)
  * **Find `Color(0xFF...)` color-literal constructions**
  * Hardcoded ARGB literals inside `Color(0xFF...)` calls are a design-token leak — they should usually live in a theme or material color scheme. Each match is a candidate to extract to `MaterialTheme.colorScheme.X`.
* [org.openrewrite.kotlin.search.FindHardcodedLiterals$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findhardcodedliterals$ktrecipe.md)
  * **Find hardcoded literals and error-handling smells**
  * Hardcoded design tokens (`Color(0xFF...)`), empty `catch` blocks, overly-broad `catch (e: Exception)` clauses, and `throw RuntimeException(...)` calls. Each match is a position where intent is unclear or recovery is too broad.
* [org.openrewrite.kotlin.search.FindHotspots$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findhotspots$ktrecipe.md)
  * **Find hotspots and complexity points**
  * Surface large classes, long functions, wide parameter lists, sprawling `when` expressions, deep nesting, god classes, magic numbers, and unmarked self-recursion. Each match is a candidate for a reviewer (or LLM agent) to refactor or to read carefully when building a mental model of the file.
* [org.openrewrite.kotlin.search.FindHttpClientConstructions$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findhttpclientconstructions$ktrecipe.md)
  * **Find HTTP client construction sites**
  * Each HTTP client construction is a place where connection pooling, timeouts, retry policy, and TLS settings are committed. Flag for review so a reviewer or LLM agent can confirm the call site picks the right policy rather than the defaults.
* [org.openrewrite.kotlin.search.FindHttpRequestSources$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findhttprequestsources$ktrecipe.md)
  * **Find `HttpServletRequest.getParameter/getHeader/getCookies` reads**
  * Servlet-API request reads return raw, attacker-controlled strings. Each call is a taint root — anywhere the returned value flows into an SQL query, a filesystem path, or HTML output is a candidate vulnerability the reviewer should trace.
* [org.openrewrite.kotlin.search.FindHttpURLConnection$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findhttpurlconnection$ktrecipe.md)
  * **Find `HttpURLConnection` references**
  * `HttpURLConnection` is the JVM's built-in HTTP client — each reference is a position where external HTTP traffic is configured (timeouts, redirects, request method). Flag as an outbound-network seed.
* [org.openrewrite.kotlin.search.FindIgnoredTests$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findignoredtests$ktrecipe.md)
  * **Find `@Disabled` / `@Ignore` test annotations**
  * An ignored test is a regression-detection gap — at minimum it represents technical debt; at worst it's a silenced failure that turned chronic. Each match is a candidate to triage.
* [org.openrewrite.kotlin.search.FindInsecureRandomSources$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findinsecurerandomsources$ktrecipe.md)
  * **Find non-cryptographic random sources (`Math.random`, `kotlin.random.Random`, `java.util.Random`)**
  * Non-cryptographic randomness is fine for jitter, simulation, sampling — but each call is a position to verify that no security-relevant value (session token, password reset link, nonce) flows from it. Use `SecureRandom` instead in those positions.
* [org.openrewrite.kotlin.search.FindJacksonObjectMapperReadValue$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findjacksonobjectmapperreadvalue$ktrecipe.md)
  * **Find Jackson `ObjectMapper.readValue(...)` calls**
  * Each `readValue` is a JSON-deserialization sink — when the input bytes are attacker-controlled, the configured polymorphic-typing and visibility settings of the `ObjectMapper` become security-relevant. Flag as a deserialization seed.
* [org.openrewrite.kotlin.search.FindJacksonObjectMapperWriteValue$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findjacksonobjectmapperwritevalue$ktrecipe.md)
  * **Find Jackson `ObjectMapper.writeValue*(...)` calls**
  * Each `writeValue` / `writeValueAsString` / `writeValueAsBytes` call serializes a Kotlin object to JSON — useful as a seed for tracking which types cross the JSON boundary (DTO surface) and where sensitive fields might leak.
* [org.openrewrite.kotlin.search.FindJvmFieldAnnotations$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findjvmfieldannotations$ktrecipe.md)
  * **Find `@JvmField` annotations**
  * `@JvmField` exposes a Kotlin property as a public Java field — bypassing the generated getter/setter and freezing the storage layout in the binary API. Each match is a constraint on future refactors.
* [org.openrewrite.kotlin.search.FindJvmOverloadsAnnotations$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findjvmoverloadsannotations$ktrecipe.md)
  * **Find `@JvmOverloads` annotations**
  * `@JvmOverloads` emits N synthetic Java overloads for a Kotlin function with default parameters. Each annotation is a hint the function is part of the Java-facing surface; reordering parameters or changing defaults breaks the synthetic overloads.
* [org.openrewrite.kotlin.search.FindJvmStaticAnnotations$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findjvmstaticannotations$ktrecipe.md)
  * **Find `@JvmStatic` annotations**
  * `@JvmStatic` declares a member function that should appear as a JVM static — a Java-interop affordance. Each annotation is a hint that the API is consumed from Java code, which constrains how it can evolve.
* [org.openrewrite.kotlin.search.FindKClassConstructors$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findkclassconstructors$ktrecipe.md)
  * **Find `KClass.constructors` access**
  * Reflective access to `KClass.constructors` reveals every constructor of a Kotlin class at runtime. Each match is a seed where reflective allocation is plausible — opaque to static analysis.
* [org.openrewrite.kotlin.search.FindKClassDeclaredFunctions$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findkclassdeclaredfunctions$ktrecipe.md)
  * **Find `KClass.declaredFunctions` / `declaredMemberFunctions` access**
  * Access to `KClass.declaredFunctions` (and its variants) walks every declared function of a Kotlin class via reflection. Each call is a reflection seed — opaque to static analysis and requires `kotlin-reflect.jar` at runtime.
* [org.openrewrite.kotlin.search.FindKClassMembers$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findkclassmembers$ktrecipe.md)
  * **Find `KClass.members` / `memberFunctions` / `memberProperties` access**
  * Access to `KClass.members` (and its sibling reflective collections) requires `kotlin-reflect.jar` at runtime and walks every declared member of the class. Each call is a position where reflection over a Kotlin type is happening — opaque to static analysis.
* [org.openrewrite.kotlin.search.FindKClassMembersAccess$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findkclassmembersaccess$ktrecipe.md)
  * **Find Kotlin reflection (`KClass.memberFunctions`, `KClass.members`, etc.)**
  * Kotlin reflection (`kotlin.reflect.*`) needs `kotlin-reflect.jar` on the classpath and adds significant cold-start cost. Each call is also a reflective dispatch — invisible to static analysis — so a reviewer/agent should know it's there.
* [org.openrewrite.kotlin.search.FindKotestSpecs$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findkotestspecs$ktrecipe.md)
  * **Find Kotest spec classes**
  * A class extending a Kotest spec (`FunSpec`, `BehaviorSpec`, etc.) is a test entrypoint. Listing them helps a reviewer or LLM agent map a module's test surface without crawling annotations.
* [org.openrewrite.kotlin.search.FindLargeClasses$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findlargeclasses$ktrecipe.md)
  * **Find classes with more than 200 statements**
  * Large classes accumulate responsibility — they bury invariants and slow every cross-cutting edit. As LLM context, an oversized class dominates the window with details that may not be relevant to the task; flagging them helps a reviewer (or an agent) decide where to split.
* [org.openrewrite.kotlin.search.FindLargeWhenBranches$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findlargewhenbranches$ktrecipe.md)
  * **Find `when` expressions with more than 10 branches**
  * A `when` with many branches is often hiding a sealed-class or strategy-table refactor — and even when it isn't, it's a hotspot a reviewer or LLM agent should see when scanning a file. Each match is a candidate for restructuring.
* [org.openrewrite.kotlin.search.FindLogWriteSinks$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findlogwritesinks$ktrecipe.md)
  * **Find logger write calls (`info`/`warn`/`error`/`debug`)**
  * Logger calls can persistently capture user-controlled data into log aggregators — a PII-leak seed. Each match is a candidate to verify that the format arguments don't include sensitive fields or that a redaction layer wraps the call.
* [org.openrewrite.kotlin.search.FindLongFunctions$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findlongfunctions$ktrecipe.md)
  * **Find functions with more than 30 statements**
  * Long functions hide branching and are harder to test, refactor, and reason about. For an LLM agent reading the file, an oversized body eats tokens disproportionately and obscures the contract — flag for review or extraction.
* [org.openrewrite.kotlin.search.FindMagicNumbers$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findmagicnumbers$ktrecipe.md)
  * **Find numeric literals other than 0, 1, -1**
  * Magic numbers in code hide units, bounds, and protocol constants from a reader. Each match is a candidate to extract to a named `const val` so a reviewer or LLM agent can see the intent (`MAX_RETRIES`, `BUFFER_BYTES`, etc.) rather than the bare literal.
* [org.openrewrite.kotlin.search.FindManyParameters$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findmanyparameters$ktrecipe.md)
  * **Find functions with more than 5 parameters**
  * A long parameter list usually signals a missing aggregate (data class, builder, parameter object). For a reviewer or LLM agent, the parameter signature is the contract — when it's too wide, the call sites become hard to read and refactor in lockstep.
* [org.openrewrite.kotlin.search.FindMethodInvoke$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findmethodinvoke$ktrecipe.md)
  * **Find `java.lang.reflect.Method.invoke(...)` calls**
  * Calls through `Method.invoke` are reflective dispatch — the target body is opaque to static analysis. Flag for review whenever a reader needs to know which functions are actually reachable.
* [org.openrewrite.kotlin.search.FindMockkAllocations$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findmockkallocations$ktrecipe.md)
  * **Find `mockk&lt;X&gt;()` / `mockk(...)` calls**
  * Each `mockk` allocation is a test-time fake — the production type it stands in for is the seam under test. Flagging them helps a reviewer or LLM agent see what is real and what is faked inside a test.
* [org.openrewrite.kotlin.search.FindNetworkSinks$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findnetworksinks$ktrecipe.md)
  * **Find outbound-network sinks (`URL.openConnection`, `OkHttpClient.newCall`, etc.)**
  * Outbound network calls are SSRF candidates whenever the URL or request body flows from a request parameter. Each match is a seed for tracing where the program reaches into the outside world.
* [org.openrewrite.kotlin.search.FindNetworkingSeeds$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findnetworkingseeds$ktrecipe.md)
  * **Find outbound-networking seeds**
  * HTTP client and connection construction sites: `HttpURLConnection`, `okhttp3.OkHttpClient`, `okhttp3.Request.Builder`. Each match is a position where the program reaches out to the network.
* [org.openrewrite.kotlin.search.FindNotNullAssertions$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findnotnullassertions$ktrecipe.md)
  * **Find `!!` not-null assertions**
  * Each `!!` is a runtime promise — when the receiver turns out to be `null`, the program crashes with a `NullPointerException`. A reviewer or LLM agent reading the code should know which positions are betting against the type system; many of them are candidates for `?.let \{ … \}` or a `requireNotNull` with a better diagnostic.
* [org.openrewrite.kotlin.search.FindObjectOutputStreamWriteObject$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findobjectoutputstreamwriteobject$ktrecipe.md)
  * **Find `ObjectOutputStream.writeObject(...)` calls**
  * Java serialization is brittle and a known security hazard on the read side; the write side is a seed where the on-wire/on-disk format gets fixed. Flag for review when migrating away from Java serialization.
* [org.openrewrite.kotlin.search.FindOkHttpClient$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findokhttpclient$ktrecipe.md)
  * **Find `okhttp3.OkHttpClient` constructions**
  * Each `OkHttpClient` allocation commits a set of timeouts, interceptors, and connection-pool settings for outbound HTTP. Flag as an outbound-network seed and a configuration-policy review point.
* [org.openrewrite.kotlin.search.FindOkHttpRequestBuilder$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findokhttprequestbuilder$ktrecipe.md)
  * **Find `okhttp3.Request.Builder()` constructions**
  * Each `Request.Builder()` is the construction site of an outbound OkHttp request. Flag as an outbound-network seed — a reviewer or LLM agent should check the URL source and request body for attacker-controlled data.
* [org.openrewrite.kotlin.search.FindOptInAnnotations$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findoptinannotations$ktrecipe.md)
  * **Find `@OptIn(...)` annotations**
  * An `@OptIn` annotation acknowledges that the annotated declaration uses an experimental API. The site of the opt-in is where the contract risk lives — if the upstream changes the API, this is the file that breaks.
* [org.openrewrite.kotlin.search.FindParameterizedTests$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findparameterizedtests$ktrecipe.md)
  * **Find `@ParameterizedTest` annotations**
  * Parameterized tests cover families of inputs in a single declaration. Each annotation is a position where one test class line generates many test instances — useful context when reading coverage reports.
* [org.openrewrite.kotlin.search.FindPublicConstants$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findpublicconstants$ktrecipe.md)
  * **Find public `const val` declarations**
  * A public `const val` is part of the binary API surface — changing its value at the source recompiles dependents, but stale clients keep the old constant inlined. Flag for awareness when reviewing API stability.
* [org.openrewrite.kotlin.search.FindPublicLateinit$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findpubliclateinit$ktrecipe.md)
  * **Find public `lateinit var` declarations**
  * `lateinit var` defers initialization but exposes a mutable, possibly-uninitialized property. As public API, every caller can both read (and potentially trigger `UninitializedPropertyAccessException`) and write the field. Flag for review of encapsulation.
* [org.openrewrite.kotlin.search.FindRecursionWithoutTailrec$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findrecursionwithouttailrec$ktrecipe.md)
  * **Find recursive functions not marked `tailrec`**
  * A self-recursive function that doesn't carry the `tailrec` modifier won't get the Kotlin compiler's stack-elimination transform. Each match is a candidate to either annotate (if the recursive call is in tail position) or rewrite to an iterative form.
* [org.openrewrite.kotlin.search.FindReentrantLockAllocations$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findreentrantlockallocations$ktrecipe.md)
  * **Find `ReentrantLock()` / `ReentrantReadWriteLock()` allocations**
  * Each `ReentrantLock` allocation is a manual concurrency primitive. Flag for review — in coroutine code, `Mutex` is usually the cooperative-cancellation-friendly replacement.
* [org.openrewrite.kotlin.search.FindReflectionGetField$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findreflectiongetfield$ktrecipe.md)
  * **Find `Class.getDeclaredField` / `Class.getField` calls**
  * Each `getDeclaredField` / `getField` call is a reflective lookup of a field by name — the name is opaque to static analysis, so the field reference is invisible to rename refactorings. Flag as a reflection seed.
* [org.openrewrite.kotlin.search.FindReflectionSeeds$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findreflectionseeds$ktrecipe.md)
  * **Find reflection seeds**
  * Field/member/constructor reflection over Java and Kotlin types (`Class.getDeclaredField`, `KClass.members`, `KClass.declaredFunctions`, `KClass.constructors`). Each match is a position where program behavior is opaque to static analysis and depends on runtime symbol lookup.
* [org.openrewrite.kotlin.search.FindReflectionSurface$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findreflectionsurface$ktrecipe.md)
  * **Find reflection and runtime introspection**
  * Reflection entry points (`Class.forName`, `Method.invoke`, `Field.get/set`, kotlin.reflect calls, `ServiceLoader.load`), visibility overrides (`setAccessible(true)`), and unsafe `as` casts. Each match is opaque to static analysis — a reviewer/agent should know it's there before reasoning about what the program touches.
* [org.openrewrite.kotlin.search.FindRequiresOptInDeclarations$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findrequiresoptindeclarations$ktrecipe.md)
  * **Find declarations annotated `@RequiresOptIn`**
  * A `@RequiresOptIn` annotation defines a new opt-in marker — every caller must explicitly acknowledge it via `@OptIn`. Each match here is a place where stability semantics are being defined, not just consumed.
* [org.openrewrite.kotlin.search.FindSemaphoreOrLatchAllocations$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findsemaphoreorlatchallocations$ktrecipe.md)
  * **Find `Semaphore` / `CountDownLatch` / `CyclicBarrier` allocations**
  * Classic JUC coordination primitives indicate hand-rolled concurrency. In coroutine code, `kotlinx.coroutines.sync.Semaphore` and `CompletableDeferred` are the cooperative equivalents. Flag the call site for review.
* [org.openrewrite.kotlin.search.FindSerializationSeeds$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findserializationseeds$ktrecipe.md)
  * **Find serialization seeds**
  * Java serialization writes and Jackson read/write calls (`ObjectOutputStream.writeObject`, `ObjectMapper.readValue`, `ObjectMapper.writeValue*`). Each match is a position where Kotlin objects cross an external wire/disk format boundary.
* [org.openrewrite.kotlin.search.FindServiceLoader$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findserviceloader$ktrecipe.md)
  * **Find `ServiceLoader.load(...)` calls**
  * `ServiceLoader.load` walks META-INF/services at boot time and instantiates each provider via reflection. The set of loaded classes isn't visible to static analysis — each call is a fan-out point for a reviewer to understand.
* [org.openrewrite.kotlin.search.FindSetAccessibleTrue$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findsetaccessibletrue$ktrecipe.md)
  * **Find `AccessibleObject.setAccessible(true)` calls**
  * `setAccessible(true)` bypasses Java/Kotlin visibility. It's a strong signal of either a serialization library at work or a workaround for a missing API — either way, a reviewer/agent reading the code should be aware that visibility cannot be trusted here.
* [org.openrewrite.kotlin.search.FindSqlExecutionSinks$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findsqlexecutionsinks$ktrecipe.md)
  * **Find SQL execution sinks (`Statement.execute*`, `prepareStatement`, `createNativeQuery`)**
  * SQL execution is the canonical SQL-injection sink — every string argument that reaches one of these calls without parameter binding is a candidate vulnerability. As a data-flow seed, the call site is where untrusted strings either become parameter-bound or stay concatenated.
* [org.openrewrite.kotlin.search.FindStatementExecuteQuery$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findstatementexecutequery$ktrecipe.md)
  * **Find `Statement.executeQuery(sql)` calls**
  * Each `executeQuery` is a SQL read sink — if `sql` is built from user-controlled strings without binding, it's a SQL-injection candidate. Useful as an individual seed even when the broader `FindSqlExecutionSinks` composite is too coarse.
* [org.openrewrite.kotlin.search.FindStatementExecuteUpdate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findstatementexecuteupdate$ktrecipe.md)
  * **Find `Statement.executeUpdate(sql)` calls**
  * Each `executeUpdate` is a SQL write sink — INSERT/UPDATE/DELETE built from string concatenation is the canonical injection pattern. Useful as an individual seed even when the broader composite is too coarse.
* [org.openrewrite.kotlin.search.FindStdinSources$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findstdinsources$ktrecipe.md)
  * **Find `readLine()` / `Scanner.next*()` calls**
  * Standard-input reads are user-controlled bytes — every downstream use of the returned string is a candidate taint root. Tagging the call site lets a downstream analysis (human or LLM agent) trace where untrusted data flows.
* [org.openrewrite.kotlin.search.FindSynchronizedBlocks$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findsynchronizedblocks$ktrecipe.md)
  * **Find `synchronized(lock) \{ ... \}` calls**
  * Each `synchronized` block is a JVM monitor-acquire/release — incompatible with coroutine cancellation and a candidate for `Mutex`/`withLock` in suspend code. Flag for review of contention and cancellation semantics.
* [org.openrewrite.kotlin.search.FindTestNameAnnotations$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findtestnameannotations$ktrecipe.md)
  * **Find `@DisplayName(...)` test annotations**
  * JUnit 5 `@DisplayName` overrides the rendered test name. Listing them helps a reviewer or LLM agent see where the source's function name and the test's reported name diverge — relevant for triaging CI failures.
* [org.openrewrite.kotlin.search.FindTestSurface$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findtestsurface$ktrecipe.md)
  * **Find test-surface positions**
  * Disabled/ignored tests, slow-tagged tests, mockk fakes, AssertJ assertion chains, and Kotest spec classes. Each match helps a reviewer or LLM agent navigate a module's test surface and verification logic.
* [org.openrewrite.kotlin.search.FindTestsTaggedSlow$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findteststaggedslow$ktrecipe.md)
  * **Find tests tagged `@Tag(&quot;slow&quot;)`**
  * Slow-tagged tests usually live behind a separate CI lane. Each match is a candidate to either speed up (find the underlying source of slowness) or to verify the tag is wired into the build's test selection.
* [org.openrewrite.kotlin.search.FindThreadConstructors$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findthreadconstructors$ktrecipe.md)
  * **Find `Thread(...)` constructor calls**
  * Each raw `Thread(...)` constructor is an unmanaged thread allocation — no pool, no lifecycle. On JVM/Android code that ships with Kotlin coroutines or a structured executor service, these are usually candidates to migrate to a managed scope.
* [org.openrewrite.kotlin.search.FindThreadLocalAllocations$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findthreadlocalallocations$ktrecipe.md)
  * **Find `ThreadLocal()` allocations**
  * `ThreadLocal` ties state to a thread identity that coroutines do not preserve across suspension. Each allocation is a candidate to migrate to a `CoroutineContext.Element` or to confirm the call site is non-suspending.
* [org.openrewrite.kotlin.search.FindThrowGenericException$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findthrowgenericexception$ktrecipe.md)
  * **Find `throw Exception(...)` and `throw RuntimeException(...)` calls**
  * Throwing a bare `Exception` / `RuntimeException` forces every caller into a generic catch. Each match is a candidate to use a more specific exception type (`IllegalArgumentException`, `IllegalStateException`, a domain-specific subclass).
* [org.openrewrite.kotlin.search.FindUnsafeCast$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findunsafecast$ktrecipe.md)
  * **Find bare `as` casts (unsafe)**
  * A bare `as` cast throws `ClassCastException` on a mismatch — every cast is a runtime contract the compiler can't enforce. Where the result might legitimately be the wrong type, prefer `as?` (returning `null`) so the failure surfaces as a nullable handling decision rather than an exception.
* [org.openrewrite.kotlin.search.FindVolatileFields$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findvolatilefields$ktrecipe.md)
  * **Find `@Volatile` properties**
  * `@Volatile` properties announce concurrent mutation — every read/write is a happens-before edge that downstream code relies on. Each match is a position a reviewer or LLM agent should inspect for memory-ordering bugs.
* [org.openrewrite.kotlin.search.FindWildcardImports$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/findwildcardimports$ktrecipe.md)
  * **Find `import x.*` wildcard imports**
  * Wildcard imports pull every public name from a package into the file's symbol table — making it harder for a reviewer or LLM agent to tell where a name comes from. Each match is a candidate to expand into explicit imports.
* [org.openrewrite.kotlin.search.Search$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/search/search$ktrecipe.md)
  * **Surface impact-analysis findings**
  * Search-only recipes that help an LLM coding agent or human reviewer build a mental map of the codebase: hotspots, hardcoded literals, reflection, concurrency primitives, public-API stability surface, dataflow source/sink locations, the test surface, and source-organization smells. Each match is a `SearchResult` — nothing is rewritten automatically.
* [org.openrewrite.kotlin.security.FindAesDefaultMode$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findaesdefaultmode$ktrecipe.md)
  * **Find `Cipher.getInstance(&quot;AES&quot;)` calls without a mode**
  * Bare `&quot;AES&quot;` defaults to `AES/ECB/PKCS5Padding` on the SunJCE provider — ECB mode is broken for any data with structure. Specify `&quot;AES/GCM/NoPadding&quot;` explicitly so the cipher is portable and authenticated.
* [org.openrewrite.kotlin.security.FindAllowAllHostnameVerifierLambda$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findallowallhostnameverifierlambda$ktrecipe.md)
  * **Find `HostnameVerifier \{ _, _ -&gt; true \}` lambdas**
  * A `HostnameVerifier` that returns `true` accepts a certificate for any hostname — defeats the purpose of TLS hostname pinning and enables straightforward MITM. Verify the hostname against the cert's CN/SAN, or use the platform default verifier.
* [org.openrewrite.kotlin.security.FindAndroidLogSensitive$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findandroidlogsensitive$ktrecipe.md)
  * **Find `android.util.Log.\{d,i,v,w,e\}` calls with sensitive content**
  * `android.util.Log` writes to `logcat`, which on rooted devices and via `adb logcat` is world-readable. Don't put `password`, `token`, or any PII into log messages — production builds should strip logging via R8/ProGuard rules.
* [org.openrewrite.kotlin.security.FindAndroidSecuritySmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findandroidsecuritysmells$ktrecipe.md)
  * **Find Android-specific security smells**
  * Deprecated world-readable/writeable file modes, `WebView` JavaScript enablement and `addJavascriptInterface` exposure, plaintext `SharedPreferences` for sensitive data, and implicit `Intent` broadcasts that any app on the device can intercept.
* [org.openrewrite.kotlin.security.FindAwsAccessKeyLiteral$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findawsaccesskeyliteral$ktrecipe.md)
  * **Find AWS Access Key literals (`AKIA…`)**
  * AWS access keys begin with `AKIA` followed by 16+ uppercase/digit characters. A literal `AKIA…` in source means the key is in every artifact build, every git commit, and every developer machine. Rotate immediately and load from environment or `SecretsManager`.
* [org.openrewrite.kotlin.security.FindBasicAuthLiteral$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findbasicauthliteral$ktrecipe.md)
  * **Find `&quot;Basic &lt;base64&gt;&quot;` literals in source**
  * A literal `Basic &lt;base64&gt;` header in source is a static credential; rotating it requires a deploy. Build the header from credentials loaded at startup.
* [org.openrewrite.kotlin.security.FindCipherCbcWithoutMac$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findciphercbcwithoutmac$ktrecipe.md)
  * **Find `Cipher.getInstance(&quot;AES/CBC/...&quot;)` calls — verify integrity**
  * AES/CBC is unauthenticated — without a separate MAC, the ciphertext is vulnerable to padding-oracle attacks (BEAST, POODLE family). Prefer `AES/GCM/NoPadding` for AEAD in one step, or pair CBC with an HMAC under encrypt-then-MAC.
* [org.openrewrite.kotlin.security.FindCipherEcbMode$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findcipherecbmode$ktrecipe.md)
  * **Find `Cipher.getInstance(&quot;AES/ECB/...&quot;)` calls**
  * ECB mode encrypts identical plaintext blocks to identical ciphertext blocks, leaking structure (the famous &quot;ECB penguin&quot;). Use AES/GCM/NoPadding or AES/CBC/PKCS5Padding with a random IV per message.
* [org.openrewrite.kotlin.security.FindCipherInitWithoutSecureRandom$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findcipherinitwithoutsecurerandom$ktrecipe.md)
  * **Find two-argument `Cipher.init(opmode, key)` calls**
  * The two-argument `Cipher.init(opmode, key)` lets the JCE pick an IV — that IV is generated from a provider-default `SecureRandom`, which is fine, but for CBC/GCM you usually want to control the IV explicitly so it can be transmitted alongside the ciphertext. Pass an `IvParameterSpec` (or `GCMParameterSpec`) generated from `SecureRandom`.
* [org.openrewrite.kotlin.security.FindClassForNameWithNonLiteral$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findclassfornamewithnonliteral$ktrecipe.md)
  * **Find `Class.forName(...)` calls with non-literal arguments**
  * `Class.forName(input)` lets the caller choose a class to load — the classic gadget chain for deserialization-style attacks and unsafe reflection. Match against a sealed allowlist instead.
* [org.openrewrite.kotlin.security.FindCookieHttpOnlyFalse$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findcookiehttponlyfalse$ktrecipe.md)
  * **Find `Cookie.setHttpOnly(false)` calls**
  * `setHttpOnly(false)` makes the cookie readable from JavaScript — directly exfiltratable by any XSS bug in the same origin. Set `httpOnly = true` for every session cookie.
* [org.openrewrite.kotlin.security.FindCookieSecureFalse$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findcookiesecurefalse$ktrecipe.md)
  * **Find `Cookie.setSecure(false)` calls**
  * `setSecure(false)` lets the cookie travel over plain HTTP — anyone on the path (coffee-shop wifi, ISP) can read it. For any session cookie, set `secure = true` and `httpOnly = true`, and prefer `SameSite=Strict`.
* [org.openrewrite.kotlin.security.FindFilePathConcat$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findfilepathconcat$ktrecipe.md)
  * **Find `File(&quot;...&quot; + input)` constructions**
  * Concatenating user input into a `File(...)` path is the canonical path-traversal vector (`../etc/passwd`). Resolve against a fixed base with `File(base, name)` plus an explicit `canonicalPath.startsWith(baseCanonicalPath)` check.
* [org.openrewrite.kotlin.security.FindGitHubPatLiteral$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findgithubpatliteral$ktrecipe.md)
  * **Find GitHub PAT literals (`ghp_…`)**
  * GitHub personal access tokens begin with `ghp_` and are full-scope unless the PAT is fine-grained. A literal `ghp_…` in source must be revoked at github.com/settings/tokens immediately.
* [org.openrewrite.kotlin.security.FindGoogleApiKeyLiteral$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findgoogleapikeyliteral$ktrecipe.md)
  * **Find Google API key literals (`AIza…`)**
  * Google Cloud / Firebase / Maps API keys follow the `AIza…` 39-char pattern. Even when client-restricted, a leaked literal lets attackers fingerprint your project and run up bills via unrestricted endpoints.
* [org.openrewrite.kotlin.security.FindHardCodedSecrets$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findhardcodedsecrets$ktrecipe.md)
  * **Find hard-coded secret literals**
  * High-confidence regex matches for AWS access keys, GitHub PATs, Stripe API keys, Google API keys, Slack tokens, and JWTs — plus a heuristic match for properties named `password`/`secret`/`token`/`apiKey` with non-empty string defaults. Each match needs immediate rotation if it is a real credential.
* [org.openrewrite.kotlin.security.FindHttpUrlLiteral$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findhttpurlliteral$ktrecipe.md)
  * **Find `URL(&quot;http://...&quot;)` literal constructions**
  * Constructing a `java.net.URL` from an `http://` literal opts out of TLS. If the host genuinely is HTTP-only, document the exception; otherwise switch the literal to `https://`.
* [org.openrewrite.kotlin.security.FindInjectionVectors$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findinjectionvectors$ktrecipe.md)
  * **Find injection vectors**
  * SQL string concatenation into `Statement`/`PreparedStatement`, command injection via `Runtime.exec` and `ProcessBuilder`, path traversal via `File` concatenation, unsafe reflection via `Class.forName(input)`, and dynamic-script evaluation via `ScriptEngine`.
* [org.openrewrite.kotlin.security.FindInsecureSessionConfig$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findinsecuresessionconfig$ktrecipe.md)
  * **Find insecure cookie / session configuration**
  * Cookies missing the `Secure` or `HttpOnly` flag leak to plain HTTP or JavaScript. Each match should set both flags to `true` and consider `SameSite=Strict`.
* [org.openrewrite.kotlin.security.FindInsecureTls$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findinsecuretls$ktrecipe.md)
  * **Find insecure TLS configuration**
  * Trust-everything `X509TrustManager` implementations, allow-all `HostnameVerifier` lambdas / setters, deprecated SSL/TLS protocol versions, and plain-HTTP URL literals.
* [org.openrewrite.kotlin.security.FindIntentExplicitActionLiteral$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findintentexplicitactionliteral$ktrecipe.md)
  * **Find `Intent(&quot;some.implicit.action&quot;)` constructions**
  * An `Intent` constructed with a string action becomes an implicit broadcast — any app declaring a matching `&lt;intent-filter&gt;` can receive it (and potentially read PII the sender attached). Prefer explicit intents with `Intent(context, Activity::class.java)`, or send with `LocalBroadcastManager` / `setPackage(...)`.
* [org.openrewrite.kotlin.security.FindJavaUtilRandomForSecurity$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findjavautilrandomforsecurity$ktrecipe.md)
  * **Find `java.util.Random()` allocations**
  * `java.util.Random` is a linear-congruential generator — its state is recoverable from a handful of outputs, so it must not produce session IDs, tokens, salts, IVs, or password reset values. Use `java.security.SecureRandom` for any security-adjacent randomness.
* [org.openrewrite.kotlin.security.FindJjwtSetSigningKeyLiteral$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findjjwtsetsigningkeyliteral$ktrecipe.md)
  * **Find `JwtBuilder.setSigningKey(&quot;literal&quot;.toByteArray())` patterns**
  * A hard-coded signing key compromises every token your service ever issues — anyone with the source (or the artifact, since literals end up in the constant pool) can forge tokens. Load the key from a secret store; rotate on a schedule.
* [org.openrewrite.kotlin.security.FindJjwtSignWithNone$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findjjwtsignwithnone$ktrecipe.md)
  * **Find `JwtBuilder.signWith(SignatureAlgorithm.NONE, ...)` patterns**
  * `alg=none` lets anyone forge a JWT — there is no signature to verify. Use HS256 (with a strong secret) or RS256/ES256 (with an asymmetric key pair).
* [org.openrewrite.kotlin.security.FindJndiLookupWithNonLiteral$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findjndilookupwithnonliteral$ktrecipe.md)
  * **Find `InitialContext.lookup(input)` calls with non-literal arguments**
  * Dynamic JNDI lookups are the Log4Shell (CVE-2021-44228) pattern — a controlled URL can fetch a remote class file and execute it. Pin lookup names to a literal allowlist; disable remote codebase loading.
* [org.openrewrite.kotlin.security.FindJwtAlgNoneLiteral$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findjwtalgnoneliteral$ktrecipe.md)
  * **Find `&quot;alg&quot;:&quot;none&quot;` literal strings**
  * Any literal containing `alg=none` is suspicious — even in tests, copy-paste tends to leak these into production assertions. Replace with HS256/RS256/ES256.
* [org.openrewrite.kotlin.security.FindJwtLiteral$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findjwtliteral$ktrecipe.md)
  * **Find JWT literals (`eyJ…`-prefixed three-segment tokens)**
  * A literal JWT in source is a long-lived signed token sitting in git history. Even if it's expired, it documents the claims structure and signing context. Replace with a fixture-generated token in tests; remove entirely from production code.
* [org.openrewrite.kotlin.security.FindJwtMisuse$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findjwtmisuse$ktrecipe.md)
  * **Find JWT misuse**
  * Hard-coded JJWT signing keys, `signWith(NONE)` patterns that produce unsigned tokens, and literal `&quot;alg&quot;:&quot;none&quot;` strings that show up in headers and test fixtures alike.
* [org.openrewrite.kotlin.security.FindKeyGeneratorDes$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findkeygeneratordes$ktrecipe.md)
  * **Find `KeyGenerator.getInstance(&quot;DES&quot;)` calls**
  * Generating a DES key feeds a known-broken cipher. Use `KeyGenerator.getInstance(&quot;AES&quot;).apply \{ init(256) \}` instead.
* [org.openrewrite.kotlin.security.FindKotlinRandomForSecurity$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findkotlinrandomforsecurity$ktrecipe.md)
  * **Find `kotlin.random.Random.Default` references**
  * `kotlin.random.Random.Default` delegates to a platform default RNG that on JVM is `ThreadLocalRandom` — not cryptographically secure. For tokens, session IDs, salts, etc. use `java.security.SecureRandom`.
* [org.openrewrite.kotlin.security.FindModeWorldReadable$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findmodeworldreadable$ktrecipe.md)
  * **Find `MODE_WORLD_READABLE` references**
  * `MODE_WORLD_READABLE` (and `MODE_WORLD_WRITEABLE`) were deprecated in API 17 and removed for security reasons — any other app on the device can read/write the file. Use the default `MODE_PRIVATE` mode and grant explicit cross-app access via `FileProvider`.
* [org.openrewrite.kotlin.security.FindNullCipher$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findnullcipher$ktrecipe.md)
  * **Find `NullCipher()` allocations**
  * `javax.crypto.NullCipher` is a no-op cipher — its `doFinal` returns the plaintext unchanged. Useful only for testing; if it ships in production code, the data is effectively unencrypted.
* [org.openrewrite.kotlin.security.FindObjectInputStream$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findobjectinputstream$ktrecipe.md)
  * **Find `ObjectInputStream(...)` constructions**
  * Java native deserialization is the source of the CVE-2015-4852 / Apache Commons gadget-chain family — any classpath gadget can fire on `readObject`. Replace with a JSON or Protobuf decoder; if you must keep Java serialization, install an `ObjectInputFilter`.
* [org.openrewrite.kotlin.security.FindPathsGetWithConcat$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findpathsgetwithconcat$ktrecipe.md)
  * **Find `Paths.get(&quot;...&quot; + input)` calls**
  * Same path-traversal risk as `File(...)` concatenation. Resolve against a fixed base with `Path.resolve(name)` plus an explicit `normalize().startsWith(base)` check.
* [org.openrewrite.kotlin.security.FindPbkdf2LowIterationCount$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findpbkdf2lowiterationcount$ktrecipe.md)
  * **Find `PBEKeySpec(..., iterations, ...)` with low iteration counts**
  * OWASP's PBKDF2 guidance (2023) recommends 600,000 iterations for SHA-256, 210,000 for SHA-512. Counts below 10,000 leak passwords to cheap GPU brute force.
* [org.openrewrite.kotlin.security.FindPredictableIv$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findpredictableiv$ktrecipe.md)
  * **Find `IvParameterSpec(byteArrayOf(...))` constructions with a literal IV**
  * A constant IV defeats the IND-CPA guarantees of CBC/GCM/CTR — every message encrypted under the same key/IV pair leaks the same prefix structure. Generate a fresh IV per message from `SecureRandom` and prepend it to the ciphertext.
* [org.openrewrite.kotlin.security.FindPrepareStatementWithConcat$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findpreparestatementwithconcat$ktrecipe.md)
  * **Find `prepareStatement(&quot;... &quot; + x)` calls**
  * `PreparedStatement` is only safe if the SQL is a fixed template — concatenating user input into the template before `prepareStatement` defeats the parameter binding. Parameterize the variable portion with `?`.
* [org.openrewrite.kotlin.security.FindPrintlnSensitive$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findprintlnsensitive$ktrecipe.md)
  * **Find `println(&quot;... password ...&quot;)` patterns**
  * `println` writes to stdout, which on production tends to land in container logs. Treat it like any other log sink — strip sensitive values before printing, or use a structured logger that redacts at the formatter.
* [org.openrewrite.kotlin.security.FindPrivateKeyHeaderLiteral$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findprivatekeyheaderliteral$ktrecipe.md)
  * **Find `-----BEGIN ... PRIVATE KEY-----` literals**
  * A PEM-formatted private key in source means the private key is in every artifact, every git commit, and every developer machine. Load from a secrets store or a file outside the build.
* [org.openrewrite.kotlin.security.FindProcessBuilderWithNonLiteral$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findprocessbuilderwithnonliteral$ktrecipe.md)
  * **Find `ProcessBuilder(varargs)` constructions whose first arg is non-literal**
  * `ProcessBuilder` is safer than `Runtime.exec` because it bypasses the shell, but a dynamic program name (the first argument) still lets the caller pick any executable on the `PATH`. Pin the program name to a literal.
* [org.openrewrite.kotlin.security.FindResponseSendRedirectWithNonLiteral$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findresponsesendredirectwithnonliteral$ktrecipe.md)
  * **Find `HttpServletResponse.sendRedirect(input)` calls with non-literal arguments**
  * An unvalidated redirect URL lets an attacker craft a link that looks like it leads to your site but bounces to an attacker-controlled page (open-redirect / phishing). Validate against an allowlist or use a relative path.
* [org.openrewrite.kotlin.security.FindRsaKeySizeBelow2048$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findrsakeysizebelow2048$ktrecipe.md)
  * **Find `KeyPairGenerator.getInstance(&quot;RSA&quot;)` callers — verify 2048+ key size**
  * RSA key sizes below 2048 bits are deprecated by NIST. Without seeing the `initialize(...)` call this recipe surfaces every `getInstance(&quot;RSA&quot;)` for review — confirm the key size is at least 2048 (preferably 3072 or migrate to Ed25519/X25519).
* [org.openrewrite.kotlin.security.FindRuntimeExecWithNonLiteral$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findruntimeexecwithnonliteral$ktrecipe.md)
  * **Find `Runtime.getRuntime().exec(...)` calls with non-literal arguments**
  * `Runtime.exec(...)` passes its argument to the shell on some platforms — concatenating any user input invites command injection. Use `ProcessBuilder(arrayOf(&quot;prog&quot;, arg))` so each argument is passed as a discrete argv slot.
* [org.openrewrite.kotlin.security.FindScriptEngineEval$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findscriptengineeval$ktrecipe.md)
  * **Find `ScriptEngine.eval(...)` calls**
  * `ScriptEngine.eval(input)` executes its argument as JavaScript (or Groovy / JRuby) — full code execution from a string. Replace with a domain-specific parser, or whitelist the script before evaluation.
* [org.openrewrite.kotlin.security.FindScriptEngineManager$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findscriptenginemanager$ktrecipe.md)
  * **Find `ScriptEngineManager.getEngineByName(...)` calls**
  * Constructing a `ScriptEngine` at all is usually a smell — once present, the engine is one `eval(...)` away from a remote-code-execution finding. Confirm the engine is loaded from a trusted source and the inputs it receives are not user-controlled.
* [org.openrewrite.kotlin.security.FindSecretKeySpecDes$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findsecretkeyspecdes$ktrecipe.md)
  * **Find `SecretKeySpec(_, &quot;DES&quot;)` constructions**
  * A `SecretKeySpec` tagged for `&quot;DES&quot;` will only feed `Cipher.getInstance(&quot;DES&quot;)` — the algorithm name flows through the JCE provider lookup. Replace with `&quot;AES&quot;` and a 256-bit key.
* [org.openrewrite.kotlin.security.FindSecureRandomSetSeed$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findsecurerandomsetseed$ktrecipe.md)
  * **Find `SecureRandom.setSeed(...)` with a literal seed**
  * `SecureRandom.setSeed(literal)` makes the RNG deterministic — defeats the whole point of using a CSPRNG. Let `SecureRandom` seed itself from the platform entropy source.
* [org.openrewrite.kotlin.security.FindSensitiveDataInLogs$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findsensitivedatainlogs$ktrecipe.md)
  * **Find sensitive data in log calls**
  * Log calls (SLF4J, `println`, `android.util.Log`) whose message string mentions `password`/`token`/`secret`/`api_key`/`credit_card` — each match likely renders the secret value into a log destination that isn't designed for secret storage.
* [org.openrewrite.kotlin.security.FindSensitiveNamedVariableLiteral$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findsensitivenamedvariableliteral$ktrecipe.md)
  * **Find variables named `password`/`secret`/`token`/`apiKey` with a non-empty literal default**
  * A property literally named `password = &quot;hunter2&quot;` (or `val token = &quot;…&quot;`, etc.) is almost always a hard-coded secret. False positives include unit-test fixtures and placeholder strings — review each match before treating as a CVE.
* [org.openrewrite.kotlin.security.FindSetAllHostnameVerifier$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findsetallhostnameverifier$ktrecipe.md)
  * **Find `setHostnameVerifier(ALLOW_ALL)` calls**
  * Setting an Apache-style `ALLOW_ALL` (or a custom always-true) hostname verifier disables one of TLS's two integrity checks. Remove the override and let the default verifier run.
* [org.openrewrite.kotlin.security.FindSharedPreferencesForSensitiveData$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findsharedpreferencesforsensitivedata$ktrecipe.md)
  * **Find `getSharedPreferences(_, MODE_PRIVATE)` callers**
  * `SharedPreferences` is stored as plain XML in app-private storage — on rooted or backed-up devices, that's readable. For tokens, refresh credentials, or PII use `EncryptedSharedPreferences` (androidx.security.crypto).
* [org.openrewrite.kotlin.security.FindSlackTokenLiteral$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findslacktokenliteral$ktrecipe.md)
  * **Find Slack token literals (`xoxb-`/`xoxp-`/`xoxa-`/`xoxr-`/`xoxs-`)**
  * Slack bot/user/app tokens follow the `xox[abprs]-` pattern. A leaked token lets a third party read channels, post as your bot, and pull workspace metadata.
* [org.openrewrite.kotlin.security.FindSlf4jLogSensitive$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findslf4jlogsensitive$ktrecipe.md)
  * **Find SLF4J log calls with sensitive field names in the format string**
  * Log messages mentioning `password`, `secret`, `token`, `api_key`, `credit_card`, `ssn`, etc. usually concatenate or substitute the secret itself. Logs propagate to disk, log aggregators, and alerting pipelines — none of which are designed as a secret store.
* [org.openrewrite.kotlin.security.FindSqlExecuteQueryWithConcat$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findsqlexecutequerywithconcat$ktrecipe.md)
  * **Find `Statement.executeQuery(&quot;... &quot; + x)` calls**
  * String concatenation into `executeQuery` is the canonical SQL-injection vector. Switch to `PreparedStatement` with `?` placeholders so the driver escapes the parameter for you.
* [org.openrewrite.kotlin.security.FindSqlExecuteWithConcat$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findsqlexecutewithconcat$ktrecipe.md)
  * **Find `Statement.execute(&quot;... &quot; + x)` / `executeUpdate` calls**
  * Same injection class as `executeQuery` — string concatenation into a `Statement` is unsafe for any execute variant. Use `PreparedStatement.setX(index, value)`.
* [org.openrewrite.kotlin.security.FindStringToByteArrayDefaultCharset$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findstringtobytearraydefaultcharset$ktrecipe.md)
  * **Find `String.toByteArray()` calls without an explicit charset**
  * `String.toByteArray()` uses the platform default charset, which differs across operating systems and produces non-portable bytes when hashed or signed. Pass `Charsets.UTF_8` (or another explicit charset) so the resulting bytes are stable.
* [org.openrewrite.kotlin.security.FindStripeKeyLiteral$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findstripekeyliteral$ktrecipe.md)
  * **Find Stripe API key literals (`sk_live_…` / `sk_test_…`)**
  * Stripe secret keys grant full account access; `sk_live_…` lets the holder create charges on your account. Rotate at dashboard.stripe.com/apikeys.
* [org.openrewrite.kotlin.security.FindTrustAllX509TrustManager$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findtrustallx509trustmanager$ktrecipe.md)
  * **Find `X509TrustManager` implementations with empty `checkServerTrusted`**
  * An `X509TrustManager` whose `checkServerTrusted`/`checkClientTrusted` body is empty accepts any certificate chain, defeating TLS authentication. Remove the override and use the JDK default trust manager, or pin against an explicit CA.
* [org.openrewrite.kotlin.security.FindUnsafeDeserialization$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findunsafedeserialization$ktrecipe.md)
  * **Find unsafe Java deserialization**
  * Java native deserialization is the source of the Apache Commons gadget-chain RCE family. Each `ObjectInputStream` allocation needs an explicit `ObjectInputFilter` (Java 9+) or a replacement encoding.
* [org.openrewrite.kotlin.security.FindWeakCipherBlowfish$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findweakcipherblowfish$ktrecipe.md)
  * **Find `Cipher.getInstance(&quot;Blowfish&quot;)` calls**
  * Blowfish has a 64-bit block size and is vulnerable to Sweet32 birthday collisions on long-lived sessions. Its successor Twofish is also legacy — prefer AES-GCM.
* [org.openrewrite.kotlin.security.FindWeakCipherDes$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findweakcipherdes$ktrecipe.md)
  * **Find `Cipher.getInstance(&quot;DES...&quot;)` calls**
  * DES has a 56-bit effective key length and is brute-forceable in hours on commodity GPUs. Replace with AES-256/GCM for new code; for legacy data, decrypt-and-re-encrypt under AES.
* [org.openrewrite.kotlin.security.FindWeakCipherRc2$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findweakcipherrc2$ktrecipe.md)
  * **Find `Cipher.getInstance(&quot;RC2&quot;)` calls**
  * RC2 has known cryptanalytic weaknesses and a 40-bit export-grade variant; the JCE accepts both. Migrate to AES-GCM.
* [org.openrewrite.kotlin.security.FindWeakCipherRc4$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findweakcipherrc4$ktrecipe.md)
  * **Find `Cipher.getInstance(&quot;RC4&quot;/&quot;ARCFOUR&quot;)` calls**
  * RC4 has been removed from TLS for biased-keystream reasons (IETF RFC 7465). Replace with AES-GCM or ChaCha20-Poly1305.
* [org.openrewrite.kotlin.security.FindWeakCipherTripleDes$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findweakciphertripledes$ktrecipe.md)
  * **Find `Cipher.getInstance(&quot;DESede&quot;/&quot;TripleDES&quot;)` calls**
  * Triple-DES (3DES, DESede) is deprecated by NIST as of 2023 due to its 64-bit block size making it vulnerable to Sweet32-style birthday attacks. Migrate to AES-GCM.
* [org.openrewrite.kotlin.security.FindWeakCryptography$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findweakcryptography$ktrecipe.md)
  * **Find weak cryptographic primitives**
  * Broken hash algorithms (MD2/MD5/SHA-1), broken or undersized ciphers (DES / 3DES / RC2 / RC4 / Blowfish / bare AES / AES-ECB), weak key material (DES key generation, DES `SecretKeySpec`, sub-2048-bit RSA), predictable IVs, and non-cryptographic random sources used in security-adjacent code.
* [org.openrewrite.kotlin.security.FindWeakHashMd2$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findweakhashmd2$ktrecipe.md)
  * **Find `MessageDigest.getInstance(&quot;MD2&quot;)` calls**
  * MD2 is older and weaker than MD5 — preimage and collision attacks are well-known. It exists in the JDK only for legacy interop and should never appear in new code.
* [org.openrewrite.kotlin.security.FindWeakHashMd5$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findweakhashmd5$ktrecipe.md)
  * **Find `MessageDigest.getInstance(&quot;MD5&quot;)` calls**
  * MD5 is cryptographically broken; collisions are computable in seconds on commodity hardware. Use SHA-256 for non-secret hashing or HMAC-SHA-256 / Argon2id for authenticated or derived secrets.
* [org.openrewrite.kotlin.security.FindWeakHashSha1$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findweakhashsha1$ktrecipe.md)
  * **Find `MessageDigest.getInstance(&quot;SHA-1&quot;)` calls**
  * SHA-1 collisions are computationally feasible (SHAttered, 2017). NIST has deprecated SHA-1 for signature use; migrate to SHA-256 or a SHA-3 variant.
* [org.openrewrite.kotlin.security.FindWeakSslProtocol$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findweaksslprotocol$ktrecipe.md)
  * **Find `SSLContext.getInstance(&quot;SSL&quot;/&quot;TLSv1&quot;/&quot;TLSv1.1&quot;)` calls**
  * `SSL`, `TLSv1`, and `TLSv1.1` are RFC-deprecated and disabled by browsers — POODLE / BEAST / Lucky13 attacks all apply. Use `TLSv1.2` or `TLSv1.3` (or `&quot;TLS&quot;` to let the JDK pick the strongest mutually-supported version).
* [org.openrewrite.kotlin.security.FindWebViewAddJsInterface$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findwebviewaddjsinterface$ktrecipe.md)
  * **Find `WebView.addJavascriptInterface(...)` calls**
  * `addJavascriptInterface` exposes a Kotlin/Java object to in-WebView JavaScript — pre-API-17 devices could call any reflectively-reachable method (CVE-2012-6636). Even on modern devices, every annotated method becomes attack surface for whatever content the WebView loads.
* [org.openrewrite.kotlin.security.FindWebViewJavaScriptEnabled$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findwebviewjavascriptenabled$ktrecipe.md)
  * **Find `WebView.settings.javaScriptEnabled = true` / `setJavaScriptEnabled(true)`**
  * Enabling JavaScript inside a `WebView` is the precondition for the entire WebView attack surface — `addJavascriptInterface` exposure, XSS in cached HTML, prompts-as-UI-spoofs. Disable it unless you control the loaded content.
* [org.openrewrite.kotlin.security.FindWebViewLoadUrlHttp$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findwebviewloadurlhttp$ktrecipe.md)
  * **Find `WebView.loadUrl(&quot;http://...&quot;)` calls**
  * Loading an `http://` URL into a WebView opts out of TLS and lets any on-path attacker rewrite the page (script injection, credential theft). Use `https://`, and if you must load HTTP, set `setAllowFileAccess(false)` plus a restricted `WebViewClient`.
* [org.openrewrite.kotlin.security.FindWebViewSavePassword$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findwebviewsavepassword$ktrecipe.md)
  * **Find `WebView.settings.setSavePassword(true)` calls**
  * `setSavePassword(true)` stores form passwords in plaintext inside the WebView database. Deprecated in API 18 for this reason. Don't enable it.
* [org.openrewrite.kotlin.security.FindWebViewSetAllowFileAccessTrue$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findwebviewsetallowfileaccesstrue$ktrecipe.md)
  * **Find `WebView.settings.setAllowFileAccessFromFileURLs(true)` calls**
  * `setAllowFileAccessFromFileURLs(true)` (and `setAllowUniversalAccessFromFileURLs(true)`) let HTML loaded from `file://` URLs read arbitrary local files — a popular Android XSS gadget. Default to `false`.
* [org.openrewrite.kotlin.security.FindWebViewSetMixedContentAlwaysAllow$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/findwebviewsetmixedcontentalwaysallow$ktrecipe.md)
  * **Find `WebView.settings.mixedContentMode = MIXED_CONTENT_ALWAYS_ALLOW` settings**
  * `MIXED_CONTENT_ALWAYS_ALLOW` lets an HTTPS page pull HTTP subresources — the moment a single subresource loads over HTTP, the page's integrity is compromised. Use `MIXED_CONTENT_NEVER_ALLOW`.
* [org.openrewrite.kotlin.security.Security$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/security/security$ktrecipe.md)
  * **Find security smells in Kotlin code**
  * OWASP-aligned search-only recipes covering weak cryptography, insecure TLS configuration, injection vectors, Java deserialization, JWT misuse, sensitive data in logs, Android-specific security smells, and hard-coded secret literals. Each match is a `SearchResult` for review — nothing is rewritten automatically because security findings nearly always need a human to pick the migration target.
* [org.openrewrite.kotlin.spring.FindAsyncOnFinal$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findasynconfinal$ktrecipe.md)
  * **Find `@Async` methods on classes that aren't `open`**
  * Spring's `@Async` proxy is the same CGLIB subclass mechanism `@Transactional` uses; it can only intercept methods on a non-final, non-private surface. Mark the surrounding class and method `open`, or apply the `kotlin-spring` compiler plugin to do it for you.
* [org.openrewrite.kotlin.spring.FindAsyncOnPrivate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findasynconprivate$ktrecipe.md)
  * **Find `@Async` on `private` functions**
  * Like `@Transactional`, `@Async` is implemented by a Spring proxy that intercepts calls through the bean's public interface. `private` methods bypass the proxy and run synchronously on the caller's thread — the annotation has no effect.
* [org.openrewrite.kotlin.spring.FindAutowiredLogger$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findautowiredlogger$ktrecipe.md)
  * **Find `@Autowired lateinit var` Logger fields**
  * Injecting a `Logger` through Spring is unnecessarily exotic — the Logger isn't a Spring bean in any standard configuration, and `LoggerFactory.getLogger(MyClass::class.java)` produces an identical instance with zero container plumbing. Move the declaration into a companion object: `companion object \{ private val log = LoggerFactory.getLogger(MyClass::class.java) \}`.
* [org.openrewrite.kotlin.spring.FindAutowiredOnConstructor$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findautowiredonconstructor$ktrecipe.md)
  * **Find `@Autowired` on a single constructor**
  * Spring 4.3+ automatically autowires the single primary constructor — the `@Autowired` annotation is redundant and adds noise. Drop it from the constructor declaration.
* [org.openrewrite.kotlin.spring.FindAutowiredOnField$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findautowiredonfield$ktrecipe.md)
  * **Find `@Autowired lateinit var` field injection**
  * Field injection through `@Autowired lateinit var` hides the dependency from the constructor, makes the class harder to test (no compile-time guarantee the field is wired), and breaks immutability. Move the dependency into the primary constructor.
* [org.openrewrite.kotlin.spring.FindAutowiredOnLateinitVar$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findautowiredonlateinitvar$ktrecipe.md)
  * **Find `@Autowired lateinit var` properties (ctor-injection candidate)**
  * `@Autowired lateinit var x: X` is the most common Kotlin-Spring field-injection shape. Compared with `@Autowired constructor(val x: X)`, it hides the dependency from the constructor signature and prevents the compiler from enforcing initialization order. Constructor inject instead.
* [org.openrewrite.kotlin.spring.FindAutowiredOnVar$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findautowiredonvar$ktrecipe.md)
  * **Find `@Autowired var` properties (not `lateinit`)**
  * A `@Autowired var x: X` property is mutable after wiring — the Spring container sets it once, but any subsequent caller can replace the dependency at runtime. Move the dependency into a primary constructor parameter (`val`) so it's `final` end-to-end.
* [org.openrewrite.kotlin.spring.FindBeanLambdaCandidate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findbeanlambdacandidate$ktrecipe.md)
  * **Find `@Bean fun foo(): X = X()` candidates for the `beans \{ \}` DSL**
  * Single-expression `@Bean` declarations that just construct a bean are one of the cases the Spring Kotlin `beans \{ \}` DSL was designed for — the DSL form drops the annotation overhead and reads as plain Kotlin. Each match here is a candidate for the migration.
* [org.openrewrite.kotlin.spring.FindCacheableOnPrivate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findcacheableonprivate$ktrecipe.md)
  * **Find `@Cacheable` on `private` functions**
  * `@Cacheable` works through the same proxy mechanism as `@Transactional` and `@Async` — invisible on `private` (and `internal`) methods. Either widen visibility or move the caching boundary up the call chain.
* [org.openrewrite.kotlin.spring.FindCircularDependencyHint$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findcirculardependencyhint$ktrecipe.md)
  * **Find `@Lazy` annotations on `@Autowired` properties**
  * `@Lazy @Autowired` is Spring's escape hatch for circular bean references. It works, but each one is a hint that the dependency graph has a cycle that should be untangled by extracting a third bean or reorganising responsibilities. Flag every occurrence for design review.
* [org.openrewrite.kotlin.spring.FindConfigurationPropertiesWithoutData$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findconfigurationpropertieswithoutdata$ktrecipe.md)
  * **Find `@ConfigurationProperties` classes that aren't `data class`**
  * A `@ConfigurationProperties` carrier should be a `data class` with `val` properties: immutable, `equals`/`hashCode`/`toString` for free, and the constructor binder works without `@ConstructorBinding`. Plain `class` carriers either require mutable `lateinit var` or lose the value-class benefits.
* [org.openrewrite.kotlin.spring.FindControllerInsteadOfRestController$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findcontrollerinsteadofrestcontroller$ktrecipe.md)
  * **Find `@Controller` classes whose methods all return data (consider `@RestController`)**
  * A `@Controller` class needs `@ResponseBody` on each handler that returns data; `@RestController` applies `@ResponseBody` to every method in one annotation. Where every method on a `@Controller` is data-returning, `@RestController` reads more cleanly. Flag for review — view-rendering controllers are correct as-is.
* [org.openrewrite.kotlin.spring.FindControllerReturningResponseEntity$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findcontrollerreturningresponseentity$ktrecipe.md)
  * **Find `@RestController` methods returning `ResponseEntity&lt;T&gt;`**
  * When the only thing a controller does with `ResponseEntity` is `ResponseEntity.ok(body)`, returning `T` directly produces the same 200 OK response with less boilerplate. Reserve `ResponseEntity` for endpoints that actually vary status/headers per call.
* [org.openrewrite.kotlin.spring.FindCoroutineControllerCandidate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findcoroutinecontrollercandidate$ktrecipe.md)
  * **Find `@GetMapping`/`@PostMapping`/... methods returning `Mono&lt;T&gt;`**
  * A controller method returning `Mono&lt;T&gt;` is a candidate for `suspend fun foo(): T`. The suspending form reads as plain Kotlin, integrates with structured concurrency, and Spring WebFlux handles the bridge automatically.
* [org.openrewrite.kotlin.spring.FindCrudRepositoryGenericList$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findcrudrepositorygenericlist$ktrecipe.md)
  * **Find repository interfaces extending `CrudRepository` instead of `JpaRepository`**
  * `CrudRepository&lt;T, ID&gt;` returns `Iterable&lt;T&gt;` from `findAll()` — fine for streaming, awkward for everything else. `JpaRepository&lt;T, ID&gt;` returns `List&lt;T&gt;` and adds pagination, sorting, and batch operations. Most JPA repositories should extend `JpaRepository`.
* [org.openrewrite.kotlin.spring.FindDataAccessSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/finddataaccesssmells$ktrecipe.md)
  * **Find Spring Data / repository access smells**
  * Repository call patterns that hide a problem: `repo.findById(id).get()` (use `findByIdOrNull` or `getReferenceById`) and `findByIdOrNull(id!!)` (contradictory nullability).
* [org.openrewrite.kotlin.spring.FindEnableWebMvcOnBootApp$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findenablewebmvconbootapp$ktrecipe.md)
  * **Find `@EnableWebMvc` on a Spring Boot application**
  * `@EnableWebMvc` opts out of Spring Boot's Web MVC auto-configuration. Most applications shouldn't apply it — they want Boot's defaults plus a `WebMvcConfigurer` for tweaks. Flag the annotation so reviewers can confirm it's intentional.
* [org.openrewrite.kotlin.spring.FindEnvironmentGetProperty$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findenvironmentgetproperty$ktrecipe.md)
  * **Find `Environment.getProperty(...)` calls**
  * `environment.getProperty(&quot;foo&quot;)` is the lowest-level Spring config API — string-typed, untyped default, no IDE completion. Promote frequently-used properties to a `@ConfigurationProperties data class` so the property name and type are encoded once.
* [org.openrewrite.kotlin.spring.FindEventListenerWithReturn$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findeventlistenerwithreturn$ktrecipe.md)
  * **Find `@EventListener` methods with non-`Unit` return types**
  * Spring's `@EventListener` republishes any non-`Unit` return value as a new event. That's a useful feature when intentional, but easy to trip over — a function written to `return result` for the caller's convenience ends up firing the event loop. Make the intent explicit (`return Unit` if the caller value isn't supposed to publish, or document that it should).
* [org.openrewrite.kotlin.spring.FindFieldInjection$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findfieldinjection$ktrecipe.md)
  * **Find `@Inject lateinit var` field injection**
  * The JSR-330 `@Inject` annotation has the same drawbacks as `@Autowired` for field injection: hidden dependencies, harder testing, mutable state. Migrate to constructor injection.
* [org.openrewrite.kotlin.spring.FindFieldInjectionOverConstructor$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findfieldinjectionoverconstructor$ktrecipe.md)
  * **Find `@Autowired val` field declarations (not in ctor)**
  * A `@Autowired private val x: X` written as a class-body declaration (not a primary-constructor parameter) is functionally close to constructor injection but hides the dependency from the public constructor signature. Pull the parameter up into the primary constructor so callers and tests see the contract.
* [org.openrewrite.kotlin.spring.FindFindByIdOrNullWithNonNullableId$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findfindbyidornullwithnonnullableid$ktrecipe.md)
  * **Find `findByIdOrNull(id!!)` calls**
  * Calling `findByIdOrNull(id!!)` says two contradictory things at once: the caller insists the id is non-null (`!!`) but is willing to accept a null result if no row matches. If the id is genuinely non-null, the `!!` is dead weight; if it might be null, the call should branch before the lookup.
* [org.openrewrite.kotlin.spring.FindFluxBlockFirstInNonTest$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findfluxblockfirstinnontest$ktrecipe.md)
  * **Find `Flux.blockFirst()` calls outside `@Test` methods**
  * `Flux.blockFirst()` blocks the calling thread waiting for the first element of a Flux — fine in tests, a thread-pool hazard in production. Bridge with `awaitFirst()` / `awaitFirstOrNull()` from `kotlinx-coroutines-reactor` inside a `suspend fun`.
* [org.openrewrite.kotlin.spring.FindFluxBlockLastInNonTest$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findfluxblocklastinnontest$ktrecipe.md)
  * **Find `Flux.blockLast()` calls outside `@Test` methods**
  * `Flux.blockLast()` drains the entire Flux on the calling thread to return the final element. In production code, that's almost never the intent — surface the elements through `asFlow().collect \{ \}` or call from a coroutine with `awaitLast()`.
* [org.openrewrite.kotlin.spring.FindFluxFlatMapReturningFluxJust$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findfluxflatmapreturningfluxjust$ktrecipe.md)
  * **Find `Flux.flatMap \{ x -&gt; Mono.just(f(x)) \}` patterns**
  * A `Flux.flatMap` whose lambda only wraps a value back into `Mono.just` (or `Flux.just`) is doing the work of `map`. Drop the publisher boxing and the runtime cost of subscribing to a one-shot inner publisher per element.
* [org.openrewrite.kotlin.spring.FindFluxFromIterableWithList$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findfluxfromiterablewithlist$ktrecipe.md)
  * **Find `Flux.fromIterable(listOf(...))` patterns**
  * When the source list is a constant `listOf(a, b, c)` known at compile time, `Flux.just(a, b, c)` is the same shape with one fewer allocation (no intermediate `List`). `fromIterable` only earns its keep when the iterable is already in hand.
* [org.openrewrite.kotlin.spring.FindFluxSubscribeWithoutOnError$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findfluxsubscribewithoutonerror$ktrecipe.md)
  * **Find `Flux.subscribe \{ ... \}` without an error consumer**
  * Single-argument `subscribe(consumer)` swallows upstream errors into Reactor's default `onErrorDropped` hook — silent in most environments and frustrating to debug. The two-argument form `subscribe(consumer, errorConsumer)` (or four-argument with `onComplete` / `Context`) forces an explicit choice.
* [org.openrewrite.kotlin.spring.FindHttpServletRequestParameter$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findhttpservletrequestparameter$ktrecipe.md)
  * **Find `HttpServletRequest` parameters in controllers**
  * Reaching for `HttpServletRequest` inside a controller handler bypasses Spring's argument-resolver chain (`@PathVariable`, `@RequestParam`, `@RequestHeader`, `@RequestBody`, etc.). Each of those binds the value with type conversion and validation; using the raw servlet request loses that and couples the handler to the servlet API.
* [org.openrewrite.kotlin.spring.FindJpaEntityWithVarsOnly$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findjpaentitywithvarsonly$ktrecipe.md)
  * **Find `@Entity` classes with `var` properties only**
  * JPA entities need mutable properties for the persistence provider to hydrate them, but a `class X(var a: A, var b: B)` form mixes that JPA requirement with full external mutability. Promote to `data class` (still mutable for JPA via the `kotlin-jpa` compiler plugin's synthesized no-arg ctor) to get `equals`/`hashCode`/`toString` and `copy`.
* [org.openrewrite.kotlin.spring.FindJpaRepositoryFindByIdWithoutOptional$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findjparepositoryfindbyidwithoutoptional$ktrecipe.md)
  * **Find `repo.findById(id).get()` chains**
  * `Optional.get()` on a JPA repository result throws `NoSuchElementException` when the row is missing — the same outcome as `getReferenceById(id)` but without the explicit Optional dance. In Kotlin, `findByIdOrNull(id)` plus a null check (or `?: throw`) is even more direct.
* [org.openrewrite.kotlin.spring.FindLateinitInjectedField$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findlateinitinjectedfield$ktrecipe.md)
  * **Find any `lateinit var` injected field (`@Autowired` / `@Inject` / `@Value`)**
  * Any property wired via `lateinit var` + injection annotation pattern is a candidate for constructor injection. This recipe catches the union of `@Autowired`, `@Inject`, and `@Value` lateinit-var declarations.
* [org.openrewrite.kotlin.spring.FindMainMethodWithSpringApplicationRun$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findmainmethodwithspringapplicationrun$ktrecipe.md)
  * **Find top-level `main` functions wrapping `SpringApplication.run`**
  * A top-level `main(args: Array&lt;String&gt;) \{ SpringApplication.run(MyApp::class.java, *args) \}` collapses to one line with the reified `runApplication&lt;MyApp&gt;(*args)` builder. Flag the `main` entry point for migration.
* [org.openrewrite.kotlin.spring.FindMissingResponseStatus$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findmissingresponsestatus$ktrecipe.md)
  * **Find `@PostMapping` methods missing `@ResponseStatus(HttpStatus.CREATED)`**
  * By convention, a successful POST that creates a resource should return `201 Created`, not the default `200 OK`. Add `@ResponseStatus(HttpStatus.CREATED)` to the controller method so the status is consistent with the action.
* [org.openrewrite.kotlin.spring.FindMockBeanOnField$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findmockbeanonfield$ktrecipe.md)
  * **Find `@MockBean` on `lateinit var` fields**
  * `@MockBean lateinit var x` mutates the bean at field-injection time, which works but ties the test to Spring's container even when the unit under test could be exercised with constructor injection of a plain `mockk&lt;X&gt;()`. Flag for review — preferred where the surrounding test can be a plain unit test.
* [org.openrewrite.kotlin.spring.FindMockMvcStandalone$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findmockmvcstandalone$ktrecipe.md)
  * **Find `MockMvcBuilders.standaloneSetup(...)` calls**
  * `standaloneSetup` wires a single controller into a minimal MockMvc — fast, but misses any application-level configuration (interceptors, exception handlers, argument resolvers). `@AutoConfigureMockMvc` produces a MockMvc that mirrors the running application; flag standalone setups as candidates for replacement.
* [org.openrewrite.kotlin.spring.FindMonoAwaitSingle$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findmonoawaitsingle$ktrecipe.md)
  * **Find `mono.awaitSingle()` calls inside Flux/Flow collectors**
  * `awaitSingle()` is the right bridge from a single-value `Mono` into a coroutine. Inside a `Flux.collect` / `Flow.collect` over many elements, however, the pattern often signals that the surrounding code is mixing two stream models — flag for review.
* [org.openrewrite.kotlin.spring.FindMonoBlockInNonTest$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findmonoblockinnontest$ktrecipe.md)
  * **Find `Mono.block()` calls outside `@Test` methods**
  * `Mono.block()` parks the calling thread until the upstream Mono completes, which is fine in a test but a footgun in production code. On Netty's small event-loop pool, one `block()` can stall every concurrent request. Bridge with `awaitSingle()` from `kotlinx-coroutines-reactor` inside a `suspend fun` instead.
* [org.openrewrite.kotlin.spring.FindMonoErrorInsteadOfThrow$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findmonoerrorinsteadofthrow$ktrecipe.md)
  * **Find `throw ...` statements inside Mono/Flux operator lambdas**
  * Reactor expects errors to be *signaled* through the publisher (`Mono.error(...)`) rather than thrown. A raw `throw` inside `flatMap` / `map` works through Reactor's `Exceptions.propagate` fallback, but loses stack-walking guarantees and trips up the assembly-time error handling.
* [org.openrewrite.kotlin.spring.FindMonoFlatMapBlock$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findmonoflatmapblock$ktrecipe.md)
  * **Find `Mono.block()` calls in non-test code**
  * Outside of `@Test` methods, `Mono.block()` is almost always a bug: it bridges reactive code into a blocking call, defeating the purpose of WebFlux. In Kotlin, the bridge should go the other direction — `awaitSingle()` from `kotlinx-coroutines-reactor`.
* [org.openrewrite.kotlin.spring.FindMonoFlatMapReturningMonoJust$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findmonoflatmapreturningmonojust$ktrecipe.md)
  * **Find `Mono.flatMap \{ x -&gt; Mono.just(f(x)) \}` patterns**
  * When a `flatMap` lambda's only job is to wrap a synchronous result in `Mono.just`, the whole step collapses to `map \{ x -&gt; f(x) \}`. `map` is cheaper (no inner Mono allocation) and signals that the transform is synchronous.
* [org.openrewrite.kotlin.spring.FindMonoFluxSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findmonofluxsmells$ktrecipe.md)
  * **Find Mono/Flux ergonomic smells**
  * Reactive-pipeline shapes that read more naturally a different way: `flatMap \{ Mono.just(...) \}` → `map`, `block()` / `blockFirst()` / `blockLast()` outside `@Test` methods, single-argument `Flux.subscribe` (missing error consumer), raw `throw` inside operator lambdas (use `Mono.error`), `Mono.zip` (verify independent operands), and `Flux.fromIterable(listOf(...))` (use `Flux.just`).
* [org.openrewrite.kotlin.spring.FindMonoZipWithoutAllOperands$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findmonozipwithoutalloperands$ktrecipe.md)
  * **Find `Mono.zip(...)` calls**
  * `Mono.zip` waits for all of its sources to emit, then combines them. Useful when two requests are genuinely independent, but easy to misuse — flag for review to confirm the operands are independent and that the desired error semantics match `zip`'s eager-cancellation behaviour.
* [org.openrewrite.kotlin.spring.FindNoArgConstructorMissing$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findnoargconstructormissing$ktrecipe.md)
  * **Find `@Entity data class` declarations (verify `kotlin-jpa` plugin)**
  * A `@Entity data class X(val a: A)` only works with JPA when the `kotlin-jpa` compiler plugin synthesizes a no-arg constructor. Without the plugin, JPA's `findById` fails at runtime with `InstantiationException: No default constructor`. Flag entity data classes so reviewers can confirm the plugin is applied.
* [org.openrewrite.kotlin.spring.FindOpenClassForSpring$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findopenclassforspring$ktrecipe.md)
  * **Find Spring stereotype classes not declared `open`**
  * Kotlin classes are `final` by default, but Spring needs a non-final target to create CGLIB proxies (which is how `@Transactional`, `@Async`, scope-proxied beans, etc. work). The `kotlin-spring` compiler plugin opens them automatically, but if it isn't applied — or the class is in a module that doesn't apply it — Spring's proxy machinery fails at runtime. Flag stereotype classes that aren't explicitly `open` for review.
* [org.openrewrite.kotlin.spring.FindPathVariableWithoutName$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findpathvariablewithoutname$ktrecipe.md)
  * **Find `@PathVariable` parameters without an explicit name**
  * `@PathVariable name: String` works only as long as the JVM preserves parameter names, which requires the `-parameters` javac flag and `-java-parameters` kotlinc flag. If either is missing, Spring resolves the path variable by ordinal — a footgun on rename. Set the name explicitly: `@PathVariable(&quot;id&quot;) id: String`.
* [org.openrewrite.kotlin.spring.FindPropertySourceOnNonConfiguration$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findpropertysourceonnonconfiguration$ktrecipe.md)
  * **Find `@PropertySource` on classes that lack `@Configuration`**
  * `@PropertySource` only takes effect on a Spring `@Configuration` class — when applied to a stereotype like `@Component` or `@Service`, the property file is silently ignored. Move the annotation to a `@Configuration` class or change the surrounding class accordingly.
* [org.openrewrite.kotlin.spring.FindQualifierOnLateinitField$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findqualifieronlateinitfield$ktrecipe.md)
  * **Find `@Qualifier` on `lateinit var` fields**
  * `@Qualifier` annotating a `lateinit var` doubles down on field injection. Move both the qualifier and the dependency to a constructor parameter so callers (and tests) can see what's required.
* [org.openrewrite.kotlin.spring.FindReactiveCoroutineInterop$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findreactivecoroutineinterop$ktrecipe.md)
  * **Find reactive / coroutine interop hazards**
  * Bridges between Reactor and coroutines that usually point at a missed opportunity: `WebClient.bodyToMono(...).block()` (use `awaitBody&lt;T&gt;()`), `Mono.deferContextual \{ \}` inside a `suspend fun` (context propagation goes through `coroutineContext`), and `awaitSingle()` patterns worth a review.
* [org.openrewrite.kotlin.spring.FindReactiveTestWithoutStepVerifier$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findreactivetestwithoutstepverifier$ktrecipe.md)
  * **Find `WebTestClient` test classes that don't use `StepVerifier`**
  * `WebTestClient` makes the call, but assertions on a `Mono&lt;T&gt;` body typically need `StepVerifier.create(...).expectNext(...).verifyComplete()` to fully drain the publisher and assert ordering. Without it, a reactive bug can hide behind the test's premature completion.
* [org.openrewrite.kotlin.spring.FindReactorContextInsideSuspendFun$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findreactorcontextinsidesuspendfun$ktrecipe.md)
  * **Find `Mono.deferContextual \{ ... \}` inside `suspend fun`**
  * Reactor's `deferContextual` reads context from a reactive Subscriber. Inside a `suspend fun`, that subscriber isn't the active continuation — context propagation should go through `kotlin.coroutines.coroutineContext` or `kotlinx.coroutines.reactor.ReactorContext` instead. Flag for review.
* [org.openrewrite.kotlin.spring.FindRepositoryReturnsOptional$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findrepositoryreturnsoptional$ktrecipe.md)
  * **Find Spring Data repository methods returning `Optional&lt;T&gt;`**
  * On the JVM, `Optional&lt;T&gt;` is the only way to model 'maybe absent' in Java APIs. In Kotlin, `T?` is the language-native equivalent — Spring Data auto-detects nullable return types since 2.0. Convert `Optional&lt;T&gt;` returns to `T?`.
* [org.openrewrite.kotlin.spring.FindRequestBodyOnPrimitive$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findrequestbodyonprimitive$ktrecipe.md)
  * **Find `@RequestBody` on primitive parameters**
  * `@RequestBody Int` or `@RequestBody String` parses the entire HTTP body as a single value — a fragile contract that breaks the moment the API evolves to include a second field. Wrap the parameter in a DTO so future additions don't require client-side changes.
* [org.openrewrite.kotlin.spring.FindRequestMappingMethodGetMapping$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findrequestmappingmethodgetmapping$ktrecipe.md)
  * **Find `@RequestMapping(method = [RequestMethod.GET])` candidates for `@GetMapping`**
  * `@RequestMapping` with an explicit `method = [...]` is the long-form spelling of `@GetMapping`/`@PostMapping`/etc. The shortcut annotations were introduced specifically to replace this pattern.
* [org.openrewrite.kotlin.spring.FindRequestMappingWithoutVerb$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findrequestmappingwithoutverb$ktrecipe.md)
  * **Find `@RequestMapping(...)` without an HTTP method**
  * `@RequestMapping(&quot;/x&quot;)` matches every HTTP verb, which is rarely the intent. The verb-specific shortcuts (`@GetMapping`/`@PostMapping`/...) are clearer at a glance and prevent accidental dual-method routes.
* [org.openrewrite.kotlin.spring.FindRequiredOnSetter$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findrequiredonsetter$ktrecipe.md)
  * **Find `@Required` annotations**
  * `@Required` was deprecated in Spring 5.1 and removed in 6.0 — its only purpose was to mandate setter injection. The modern equivalent is mandatory constructor injection, which is enforced by Kotlin's non-null types.
* [org.openrewrite.kotlin.spring.FindResponseEntityWithoutStatus$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findresponseentitywithoutstatus$ktrecipe.md)
  * **Find `ResponseEntity(body, HttpStatus.OK)` constructor calls**
  * The two-argument `ResponseEntity` constructor with `HttpStatus.OK` is exactly what `ResponseEntity.ok(body)` produces — using the factory makes the 200-OK intent explicit and removes the dependency on `HttpStatus`. Save the constructor form for genuinely status-varying responses.
* [org.openrewrite.kotlin.spring.FindRestTemplateUsage$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findresttemplateusage$ktrecipe.md)
  * **Find `RestTemplate` allocations**
  * `RestTemplate` was placed in maintenance mode in Spring 5 — Spring's docs explicitly steer new code to `WebClient` (reactive) or `RestClient` (Spring 6.1+, synchronous). Each `RestTemplate()` allocation is a candidate for migration.
* [org.openrewrite.kotlin.spring.FindSpringAnnotationSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findspringannotationsmells$ktrecipe.md)
  * **Find Spring annotation-shape smells**
  * Stereotype/injection annotations applied to the wrong Kotlin shape: `@Component` on `data class`, `@Service` on `object`, `@Bean` without `@Scope`, `@Autowired` on `var` / `lateinit var` / class-body `val`, and `@Lazy @Autowired` (a hint of circular dependencies).
* [org.openrewrite.kotlin.spring.FindSpringApplicationRunJava$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findspringapplicationrunjava$ktrecipe.md)
  * **Find `SpringApplication.run(MyApp::class.java, ...)` calls**
  * Kotlin Spring Boot ships a reified helper `runApplication&lt;MyApp&gt;(*args)` that drops the `::class.java` token and the explicit `SpringApplication` reference. The Java-style form here works but reads as a Java port — flag for migration.
* [org.openrewrite.kotlin.spring.FindSpringBeanWithoutScope$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findspringbeanwithoutscope$ktrecipe.md)
  * **Find `@Bean` methods without `@Scope`**
  * `@Bean` without `@Scope` produces a singleton, which is almost always correct — but for stateful beans (`@RequestScope`, `@SessionScope`, prototype-scoped builders) the default is wrong. Flag for review when the bean's nature suggests a scope decision is in order.
* [org.openrewrite.kotlin.spring.FindSpringBootstrappingSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findspringbootstrappingsmells$ktrecipe.md)
  * **Find Spring Boot bootstrapping smells**
  * Bootstrap code that hasn't been Kotlinized: Java-style `SpringApplication.run(MyApp::class.java, ...)` calls and `main` wrappers that could collapse to a one-line `runApplication&lt;MyApp&gt;(*args)`.
* [org.openrewrite.kotlin.spring.FindSpringComponentOnDataClass$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findspringcomponentondataclass$ktrecipe.md)
  * **Find `@Component` / `@Service` / `@Repository` on `data class`**
  * Spring stereotype classes have proxy-friendly identity (Spring wires them as singletons keyed by class). `data class` overrides `equals`/`hashCode` over the constructor properties — two beans with the same fields compare equal, which is rarely desirable for a service-shaped component. Promote to a regular class.
* [org.openrewrite.kotlin.spring.FindSpringConfigurationSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findspringconfigurationsmells$ktrecipe.md)
  * **Find Spring configuration smells**
  * Configuration scattered across `@Value` lateinit-var reads, untyped `Environment.getProperty(...)` calls, `@ConfigurationProperties` carriers that aren't `data class`, `@Bean fun foo(): X = X()` candidates for the `beans \{ \}` Kotlin DSL, and misplaced `@PropertySource` on non-`@Configuration` classes.
* [org.openrewrite.kotlin.spring.FindSpringCoroutineCandidates$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findspringcoroutinecandidates$ktrecipe.md)
  * **Find Spring coroutine-migration candidates**
  * Controllers and clients that work today with `Mono`/`Flux` chaining but read more naturally as suspending Kotlin: `Mono&lt;T&gt;` returns from mapping methods (could be `suspend fun foo(): T`) and `bodyToMono(X::class.java)` patterns (`awaitBody&lt;X&gt;()`).
* [org.openrewrite.kotlin.spring.FindSpringDataSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findspringdatasmells$ktrecipe.md)
  * **Find Spring Data smells**
  * Repository methods returning `Optional&lt;T&gt;` instead of `T?`, `@Entity` classes that should be `data class`, `@Entity data class` declarations whose JPA-friendliness depends on the `kotlin-jpa` plugin, `CrudRepository` candidates for `JpaRepository`, and `@Transactional` annotations on `private` methods or `final` classes (Spring's proxy can't intercept them).
* [org.openrewrite.kotlin.spring.FindSpringDependencyInjectionSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findspringdependencyinjectionsmells$ktrecipe.md)
  * **Find Spring dependency-injection smells**
  * Field injection (`@Autowired` / `@Inject` / `@Qualifier` on `lateinit var`), redundant `@Autowired` on single ctors, the deprecated `@Required` setter annotation, and Spring stereotype classes that aren't `open` (Kotlin's `final` default breaks CGLIB proxies unless `kotlin-spring` is applied).
* [org.openrewrite.kotlin.spring.FindSpringLegacyApiSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findspringlegacyapismells$ktrecipe.md)
  * **Find Spring legacy / deprecated API smells**
  * `RestTemplate` (in maintenance mode — use `WebClient` or `RestClient`), `@EnableWebMvc` on a Boot application (disables auto-config), `HttpServletRequest` parameters in controllers (use binding annotations), `@Controller` whose handlers all return data (consider `@RestController`), and `@Autowired` Logger fields (use companion `LoggerFactory`).
* [org.openrewrite.kotlin.spring.FindSpringProxiedAnnotationSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findspringproxiedannotationsmells$ktrecipe.md)
  * **Find Spring proxied-annotation smells**
  * Proxy-backed annotations beyond `@Transactional` that hit the same Kotlin-default-final trap: `@Async` and `@Cacheable` on `private` methods or final classes, plus `@EventListener` methods that accidentally republish their return values as new events.
* [org.openrewrite.kotlin.spring.FindSpringServiceOnObject$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findspringserviceonobject$ktrecipe.md)
  * **Find `@Service object Foo` declarations**
  * A Spring `@Service` / `@Component` declared as `object` is a singleton at the language level — Spring will still register it as a bean, but autowiring into the object's properties is fragile (`object` initialization runs at class-load time, before the Spring context exists). Use a regular class so the container controls the lifecycle.
* [org.openrewrite.kotlin.spring.FindSpringTestingSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findspringtestingsmells$ktrecipe.md)
  * **Find Spring testing smells**
  * `@MockBean` / `@SpyBean` lateinit-var fields (often a plain unit test would do), `MockMvcBuilders.standaloneSetup` (consider `@AutoConfigureMockMvc`), and `WebTestClient` tests that don't drain the publisher with `StepVerifier`.
* [org.openrewrite.kotlin.spring.FindSpringWebSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findspringwebsmells$ktrecipe.md)
  * **Find Spring Web / WebFlux smells**
  * Controller endpoints worth a closer look: `ResponseEntity&lt;T&gt;` returns that always emit 200, verb-less `@RequestMapping`, `@RequestMapping(method = [...])` candidates for shortcut annotations, `@PathVariable` parameters without explicit names, primitive `@RequestBody` shapes, POST endpoints missing `@ResponseStatus(CREATED)`, and reactive `block()` calls that stall the event loop.
* [org.openrewrite.kotlin.spring.FindSpyBeanOnField$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findspybeanonfield$ktrecipe.md)
  * **Find `@SpyBean` on `lateinit var` fields**
  * `@SpyBean` carries the same coupling to the Spring container as `@MockBean`, plus the extra surprise of partially mocking real implementation code. Where possible, exercise the unit under test directly with `mockk&lt;X&gt;(relaxed = true)` and verify against a spy of a single dependency.
* [org.openrewrite.kotlin.spring.FindTransactionalOnFinal$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findtransactionalonfinal$ktrecipe.md)
  * **Find `@Transactional` methods on classes that aren't `open`**
  * Spring proxies a `@Transactional` bean by subclassing it (CGLIB); for the subclass to override the method, both the class and the method must be non-final. Kotlin's default `final` defeats this — either apply the `kotlin-spring` compiler plugin or mark the class and method `open`.
* [org.openrewrite.kotlin.spring.FindTransactionalOnPrivate$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findtransactionalonprivate$ktrecipe.md)
  * **Find `@Transactional` on `private` functions**
  * Spring's transaction proxy intercepts calls through the bean's public interface — `private` (and `internal`) methods are invoked directly on the target instance, bypassing the proxy entirely. The annotation is silently no-op. Make the method `public` or move the transaction boundary up the call chain.
* [org.openrewrite.kotlin.spring.FindValueAnnotationOnLateinit$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findvalueannotationonlateinit$ktrecipe.md)
  * **Find `@Value` on `lateinit var` properties**
  * Individual `@Value(&quot;\$\{x\}&quot;)` reads scatter configuration access across the codebase. Grouping related properties under a single `@ConfigurationProperties` data class produces typed, validated, IDE-discoverable config — and works seamlessly with `data class` + non-null types in Kotlin.
* [org.openrewrite.kotlin.spring.FindWebClientBlockOnResponse$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findwebclientblockonresponse$ktrecipe.md)
  * **Find `webClient...bodyToMono(X::class).block()` chains**
  * Chaining `block()` onto a `WebClient.bodyToMono(...)` call defeats the reactive request entirely — the calling thread blocks for the HTTP round-trip, throwing away every concurrency benefit of WebClient. In a `suspend fun`, `awaitBody&lt;X&gt;()` produces the same value without blocking the event loop.
* [org.openrewrite.kotlin.spring.FindWebClientCreateWithoutBuilder$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findwebclientcreatewithoutbuilder$ktrecipe.md)
  * **Find `WebClient.create()` / `WebClient.create(url)` calls**
  * The static `WebClient.create(...)` shortcut returns a client with default codecs, no `baseUrl` chain, no filters, no exchange-strategy tuning. Production WebClients almost always need at least one of those — promote to `WebClient.builder().baseUrl(...).build()` so the configuration shape is visible at the call site.
* [org.openrewrite.kotlin.spring.FindWebClientRestTemplateSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findwebclientresttemplatesmells$ktrecipe.md)
  * **Find WebClient / RestTemplate / ResponseEntity smells**
  * HTTP-client and response-shape patterns: `RestTemplate` allocations (maintenance mode — use `WebClient` / `RestClient`), `WebClient.create()` without the builder (use `WebClient.builder().baseUrl(...)`), and `ResponseEntity(body, HttpStatus.OK)` (use the `ok(body)` factory).
* [org.openrewrite.kotlin.spring.FindWebClientWithoutAwait$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findwebclientwithoutawait$ktrecipe.md)
  * **Find `WebClient.bodyToMono(X::class.java)` calls**
  * In suspending controllers and services, `bodyToMono(X::class.java).awaitSingle()` is more naturally spelled as `awaitBody&lt;X&gt;()` from `kotlinx-coroutines-reactor`. The reified form removes the `::class.java` token and the `.awaitSingle()` chain.
* [org.openrewrite.kotlin.spring.FindWebFluxBlocking$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/findwebfluxblocking$ktrecipe.md)
  * **Find `Mono.block` / `Flux.blockFirst` / `Flux.blockLast` calls**
  * Calling `block()` on a reactive pipeline parks the calling thread until the upstream completes, which is exactly what the reactive runtime is built to avoid. On Netty's small event-loop pool, a single `block()` can stall every concurrent request the server is processing.
* [org.openrewrite.kotlin.spring.Spring$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/spring/spring$ktrecipe.md)
  * **Modernize Spring Boot Kotlin code**
  * Find Kotlin-idiomatic violations in Spring Boot applications: Java-style `SpringApplication.run`, `@Autowired` / `@Inject` field injection, missing `open` on Spring-proxied classes, blocking `Mono.block()` calls, `@RequestMapping` candidates for `@GetMapping`, `Mono&lt;T&gt;` controllers that could be suspending, `@ConfigurationProperties` data class candidates, `@Entity` data class plugin reminders, `@Transactional`/`@Async`/`@Cacheable` on private/final methods, deprecated `RestTemplate` allocations, Mono/Flux ergonomic shapes, reactive-coroutine interop hazards, Spring annotation shapes, repository access patterns, and WebClient/ResponseEntity shapes.
* [org.openrewrite.kotlin.stdlib.CollectionShorthands$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/stdlib/collectionshorthands$ktrecipe.md)
  * **Apply Kotlin collection shorthands**
  * Replaces round-trip conversions (`asSequence().toList()`, `toList().toSet()`, `toSet().toList()`, …) with the dedicated stdlib operator they're imitating.
* [org.openrewrite.kotlin.stdlib.EmptyConstructorShorthands$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/stdlib/emptyconstructorshorthands$ktrecipe.md)
  * **Prefer `emptyList()` / `emptySet()` / `emptyMap()` over zero-arg builders**
  * When `listOf()` / `setOf()` / `mapOf()` are called with no entries, replace them with the explicit `emptyList()` / `emptySet()` / `emptyMap()` factories so the empty-by-construction intent is visible at the call site.
* [org.openrewrite.kotlin.stdlib.Stdlib$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/stdlib/stdlib$ktrecipe.md)
  * **Apply Kotlin standard-library idioms**
  * Opinionated bundle of every Kotlin stdlib-shorthand recipe in this module: round-trip elimination, empty-factory preference, and string `isBlank`/`take`/`drop` folds. Complementary to `Performance` (which focuses on chain collapses) and `BestPractices` (which focuses on flagging smells).
* [org.openrewrite.kotlin.stdlib.StringShorthands$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/stdlib/stringshorthands$ktrecipe.md)
  * **Apply Kotlin string shorthands**
  * Folds `trim().isEmpty()` into `isBlank()`, and prefers `take`/`drop` over `substring` indexing.
* [org.openrewrite.kotlin.stdlib.UseAsSequenceToListIdentity$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/stdlib/useassequencetolistidentity$ktrecipe.md)
  * **Use `toList()` instead of `asSequence().toList()`**
  * `asSequence()` wraps the iterable in a `Sequence` only to immediately tear it back into a `List`. The intermediate `Sequence` allocation does no work.
* [org.openrewrite.kotlin.stdlib.UseDistinctForToHashSetToList$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/stdlib/usedistinctfortohashsettolist$ktrecipe.md)
  * **Use `distinct()` instead of `toHashSet().toList()`**
  * Round-tripping through a `HashSet` to drop duplicates obscures intent and allocates an intermediate. `distinct()` says what it does and returns a `List` directly.
* [org.openrewrite.kotlin.stdlib.UseDistinctForToSetToList$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/stdlib/usedistinctfortosettolist$ktrecipe.md)
  * **Use `distinct()` instead of `toSet().toList()`**
  * Round-tripping through a `Set` to drop duplicates obscures intent and allocates an intermediate. `distinct()` says what it does and returns a `List` directly.
* [org.openrewrite.kotlin.stdlib.UseDistinctForToSetToMutableList$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/stdlib/usedistinctfortosettomutablelist$ktrecipe.md)
  * **Use `distinct().toMutableList()` instead of `toSet().toMutableList()`**
  * Round-tripping through a `Set` to drop duplicates obscures intent. `distinct()` says what it does; chain `toMutableList()` if you actually need a mutable result.
* [org.openrewrite.kotlin.stdlib.UseEmptyListForListOfNoArgs$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/stdlib/useemptylistforlistofnoargs$ktrecipe.md)
  * **Use `emptyList&lt;T&gt;()` instead of `listOf&lt;T&gt;()`**
  * `listOf()` with no entries delegates to `emptyList()`. Call the named factory directly to make the empty-by-construction intent visible.
* [org.openrewrite.kotlin.stdlib.UseEmptyMapForMapOfNoArgs$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/stdlib/useemptymapformapofnoargs$ktrecipe.md)
  * **Use `emptyMap&lt;K, V&gt;()` instead of `mapOf&lt;K, V&gt;()`**
  * `mapOf()` with no entries delegates to `emptyMap()`. Call the named factory directly to make the empty-by-construction intent visible.
* [org.openrewrite.kotlin.stdlib.UseEmptySetForSetOfNoArgs$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/stdlib/useemptysetforsetofnoargs$ktrecipe.md)
  * **Use `emptySet&lt;T&gt;()` instead of `setOf&lt;T&gt;()`**
  * `setOf()` with no entries delegates to `emptySet()`. Call the named factory directly to make the empty-by-construction intent visible.
* [org.openrewrite.kotlin.stdlib.UseSetForMutableSetToSet$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/stdlib/usesetformutablesettoset$ktrecipe.md)
  * **Use `toSet()` instead of `toMutableSet().toSet()`**
  * `toMutableSet()` already allocates a fresh set — calling `toSet()` on it copies again. Go directly to `toSet()`.
* [org.openrewrite.kotlin.stdlib.UseStringDropForSubstring$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/stdlib/usestringdropforsubstring$ktrecipe.md)
  * **Use `drop(n)` instead of `substring(n)` on a `String`**
  * `drop(n)` is the named form for skipping the first `n` characters and returns the empty string for over-long `n` instead of throwing.
* [org.openrewrite.kotlin.stdlib.UseStringIsBlankForTrimIsEmpty$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/stdlib/usestringisblankfortrimisempty$ktrecipe.md)
  * **Use `isBlank()` instead of `trim().isEmpty()` on a `String`**
  * `trim().isEmpty()` allocates a trimmed copy just to check whether the result has no characters. `isBlank()` answers the same question by scanning in place.
* [org.openrewrite.kotlin.stdlib.UseStringIsNotBlankForTrimIsNotEmpty$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/stdlib/usestringisnotblankfortrimisnotempty$ktrecipe.md)
  * **Use `isNotBlank()` instead of `trim().isNotEmpty()` on a `String`**
  * `trim().isNotEmpty()` allocates a trimmed copy to check whether anything is left. `isNotBlank()` answers the same question by scanning in place.
* [org.openrewrite.kotlin.stdlib.UseStringTakeForSubstringFromZero$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/stdlib/usestringtakeforsubstringfromzero$ktrecipe.md)
  * **Use `take(n)` instead of `substring(0, n)` on a `String`**
  * `take(n)` is the named form on `CharSequence` and uniformly returns the empty string when `n` is larger than `length`. `substring(0, n)` throws on that case — the named form is both clearer and friendlier.
* [org.openrewrite.kotlin.stdlib.UseTakeForSubListFromZero$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/stdlib/usetakeforsublistfromzero$ktrecipe.md)
  * **Use `take(n)` instead of `subList(0, n)`**
  * `take(n)` returns the first `n` elements as a stable copy. `subList(0, n)` returns a live view backed by the original list — surprising aliasing if the source is mutated.
* [org.openrewrite.kotlin.stdlib.UseToListForListToList$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/stdlib/usetolistforlisttolist$ktrecipe.md)
  * **Use `toList()` instead of `toMutableList().toList()`**
  * `toMutableList()` already allocates a fresh list — wrapping it in another `toList()` copies it again. Go directly to `toList()`.
* [org.openrewrite.kotlin.stdlib.UseToSetForToListToSet$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/stdlib/usetosetfortolisttoset$ktrecipe.md)
  * **Use `toSet()` instead of `toList().toSet()`**
  * Materializing a `List` first and then a `Set` allocates one collection that's thrown away. `toSet()` builds the deduplicating collection directly.
* [org.openrewrite.kotlin.testing.FindAssertEqualsCandidateForKotest$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findassertequalscandidateforkotest$ktrecipe.md)
  * **Find `assertEquals(...)` calls — Kotest migration candidate**
  * Kotest's idiomatic form for `assertEquals(expected, actual)` is `actual shouldBe expected` — the receiver is the subject under test, which composes naturally with chained matchers (`actual shouldBe expected; actual.shouldBeOfType&lt;T&gt;()`). Each match is a candidate when migrating to Kotest.
* [org.openrewrite.kotlin.testing.FindAssertFalseCandidateForKotest$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findassertfalsecandidateforkotest$ktrecipe.md)
  * **Find `assertFalse(...)` calls — Kotest migration candidate**
  * Same shape as `assertTrue`: the predicate is collapsed to a boolean and the failure message loses fidelity. Kotest's `actual.shouldBeFalse()` (or specialized matchers like `actual.shouldNotContain(...)`) records the original expression.
* [org.openrewrite.kotlin.testing.FindAssertJChainUsingExtractingThenContains$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findassertjchainusingextractingthencontains$ktrecipe.md)
  * **Find AssertJ `.extracting(...).contains(...)` chains**
  * AssertJ's `.extracting(&quot;name&quot;)` uses reflection; `.extracting \{ it.name \}` (lambda form) is type-safe. Each match is a candidate for the lambda form, or for moving to a `.allMatch \{ … \}` predicate when the collection-level invariant is what you actually want to assert.
* [org.openrewrite.kotlin.testing.FindAssertNotNullCandidateForKotest$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findassertnotnullcandidateforkotest$ktrecipe.md)
  * **Find `assertNotNull(...)` calls — Kotest migration candidate**
  * Kotest's `actual.shouldNotBeNull()` is a contract function: after it returns, the compiler smart-casts `actual` to its non-nullable type, so the chained matcher can call methods without `!!`. JUnit's `assertNotNull` does not smart-cast.
* [org.openrewrite.kotlin.testing.FindAssertNullCandidateForKotest$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findassertnullcandidateforkotest$ktrecipe.md)
  * **Find `assertNull(...)` calls — Kotest migration candidate**
  * `assertNull(actual)` → `actual.shouldBeNull()` in Kotest. The receiver-style form keeps the subject as the focal point, which composes more cleanly into specialized matchers (`actual.shouldBeNullOrEmpty()` etc).
* [org.openrewrite.kotlin.testing.FindAssertThrowsCandidateForKotest$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findassertthrowscandidateforkotest$ktrecipe.md)
  * **Find `assertThrows&lt;X&gt; \{ ... \}` calls — Kotest migration candidate**
  * JUnit 5's `assertThrows&lt;X&gt; \{ … \}` and Kotest's `shouldThrow&lt;X&gt; \{ … \}` have the same shape. Migrating gives access to Kotest's `shouldThrowExactly&lt;X&gt;` (rejects subclass exceptions) and `shouldThrowMessage(text) \{ … \}`, which are tighter than JUnit's catch-and-introspect pattern.
* [org.openrewrite.kotlin.testing.FindAssertTrueCandidateForKotest$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findasserttruecandidateforkotest$ktrecipe.md)
  * **Find `assertTrue(...)` calls — Kotest migration candidate**
  * `assertTrue(condition)` collapses the predicate into a boolean before failure formatting can capture *what* the value actually was. Kotest's `actual.shouldBeTrue()` (and the matcher library generally — `actual shouldBe true`, `actual.shouldStartWith(...)`) carries the original expression into the failure message.
* [org.openrewrite.kotlin.testing.FindAssertionLibrarySmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findassertionlibrarysmells$ktrecipe.md)
  * **Find assertion-library smells**
  * Search-only bundle for assertion-library specifics: Hamcrest's `assertThat(actual, is(expected))` form, and AssertJ's reflective `.extracting(&quot;name&quot;)` followed by `.contains(...)`.
* [org.openrewrite.kotlin.testing.FindBeforeEachReinitializingFinal$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findbeforeeachreinitializingfinal$ktrecipe.md)
  * **Find `@BeforeEach` methods that reassign `val` properties**
  * `@BeforeEach` runs before every test, but `val` property assignment only happens at construction. If `setUp` looks like `value = ...` against a `val`, it doesn't compile — but the related anti-pattern (reassigning a `lateinit var` per test where the type-safe shape would be a `val` initialized in the constructor) is worth surfacing.
* [org.openrewrite.kotlin.testing.FindCoroutineTestRule$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findcoroutinetestrule$ktrecipe.md)
  * **Find JUnit 4 coroutine-test `@Rule` fields**
  * Hand-rolled `MainCoroutineRule` / `CoroutineTestRule` patterns predate `kotlinx-coroutines-test`'s `Dispatchers.setMain`/`resetMain` helpers. With `runTest \{ \} ` + `Dispatchers.setMain(StandardTestDispatcher())` the rule's responsibilities are spread across `@BeforeEach`/`@AfterEach` cleanly enough that the rule itself becomes redundant.
* [org.openrewrite.kotlin.testing.FindCoroutineTestSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findcoroutinetestsmells$ktrecipe.md)
  * **Find coroutine-test patterns**
  * Search-only bundle for coroutine-testing primitives: `runBlocking` inside `@Test`, `runBlockingTest` (deprecated), `TestCoroutineDispatcher` (deprecated), JUnit 4 `@Rule` fields named after coroutines (hand-rolled `MainCoroutineRule`-style), and `delay(...)` calls inside a `runBlocking` test body.
* [org.openrewrite.kotlin.testing.FindDelayInTest$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/finddelayintest$ktrecipe.md)
  * **Find `delay(...)` calls inside test methods running on a real dispatcher**
  * `delay(ms)` inside a test that uses `runBlocking` (not `runTest`) waits the literal duration in real time — a fast suite slows to a crawl. Inside `runTest \{ \}`, `delay` advances virtual time instantly; the call shape is identical but the runner makes the difference.
* [org.openrewrite.kotlin.testing.FindDisabledTest$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/finddisabledtest$ktrecipe.md)
  * **Find `@Disabled` annotations**
  * `@Disabled` is the JUnit 5 skip annotation — typically used for tests that are flaky, broken, or pending an upstream fix. Each match is a tech-debt marker worth reviewing: confirm the skip is still warranted, the reason still applies, and the test isn't hiding a real regression.
* [org.openrewrite.kotlin.testing.FindEmptyTestBody$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findemptytestbody$ktrecipe.md)
  * **Find `@Test` methods with empty bodies**
  * An empty `@Test fun foo() \{ \}` passes unconditionally. The reasons it lands in a codebase are usually disabled-during-WIP, scaffolded-then-forgotten, or a stand-in for a TODO. Each match should either gain assertions, be annotated `@Disabled` with a reason, or be deleted.
* [org.openrewrite.kotlin.testing.FindFunctionTestNamedWithUnderscores$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findfunctiontestnamedwithunderscores$ktrecipe.md)
  * **Find test functions named with snake_case**
  * Kotlin's backtick syntax lets test names read as sentences: `fun \`returns 404 when user not found\`()`. Names like `fun test_returns_404_when_user_not_found()` predate that convention — usually the result of porting Java tests directly.
* [org.openrewrite.kotlin.testing.FindHamcrestAssertThatUsage$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findhamcrestassertthatusage$ktrecipe.md)
  * **Find `MatcherAssert.assertThat(...)` (Hamcrest) calls**
  * Hamcrest's `assertThat(actual, is(expected))` was the inspiration for both AssertJ's fluent chains and Kotest's matcher library. On a Kotlin codebase both alternatives compose better with the language (AssertJ via type-safe builders, Kotest via infix and extension functions).
* [org.openrewrite.kotlin.testing.FindJUnitFunctionWithPublic$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findjunitfunctionwithpublic$ktrecipe.md)
  * **Find `public` modifier on JUnit 5 test functions**
  * JUnit 5 dropped the JUnit 4 requirement that test methods be public — package-private (Java) or no modifier (Kotlin default) is the convention. Each `public fun test...()` is a JUnit 4 holdover that can be dropped.
* [org.openrewrite.kotlin.testing.FindKotestCandidates$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findkotestcandidates$ktrecipe.md)
  * **Find Kotest migration candidates**
  * Search-only bundle for assertion call sites that have direct Kotest equivalents: `assertEquals` (`shouldBe`), `assertTrue`/`assertFalse` (`shouldBeTrue`/`shouldBeFalse`), `assertNull`/`assertNotNull` (`shouldBeNull`/`shouldNotBeNull` with smart-cast), `assertThrows` (`shouldThrow`), plus snake_case test names that Kotlin's backtick syntax can replace with sentence-style names.
* [org.openrewrite.kotlin.testing.FindMockitoArgumentCaptor$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findmockitoargumentcaptor$ktrecipe.md)
  * **Find `ArgumentCaptor.forClass(X::class.java)` allocations**
  * `ArgumentCaptor.forClass(X::class.java)` plus a later `verify(mock).method(captor.capture())` is the Mockito idiom for asserting on the actual argument passed in. mockk's `slot&lt;X&gt;()` + `every \{ mock.method(capture(slot)) \} answers \{ … \}` records the value as part of the recording block.
* [org.openrewrite.kotlin.testing.FindMockitoArgumentMatchersAny$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findmockitoargumentmatchersany$ktrecipe.md)
  * **Find Mockito argument-matcher `any()` / `eq()` / `isA()` calls**
  * Mockito's argument matchers (`any()`, `eq(value)`, `isA(X::class.java)`) only work inside a `whenever`/`verify` call — they throw if used elsewhere. mockk's matchers (`any()`, `eq(value)`, `match \{ … \}`) work the same way but live in `every \{ \}` / `verify \{ \}` blocks, so the matcher and the recording context are co-located.
* [org.openrewrite.kotlin.testing.FindMockitoInjectMocks$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findmockitoinjectmocks$ktrecipe.md)
  * **Find Mockito `@InjectMocks` fields**
  * `@InjectMocks` asks Mockito to wire `@Mock`-annotated fields into the target's constructor / setters / fields by reflection. In Kotlin code with constructor injection, the cleaner equivalent is to declare the target inside `@BeforeEach`: `val target = Service(mockA, mockB)`. mockk has no analogous annotation — the explicit constructor call is the convention.
* [org.openrewrite.kotlin.testing.FindMockitoMockCall$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findmockitomockcall$ktrecipe.md)
  * **Find `Mockito.mock(...)` / `mock&lt;X&gt;()` calls**
  * Mockito's `mock(X::class.java)` (or mockito-kotlin's `mock&lt;X&gt;()`) builds a relaxed proxy that returns sensible defaults for unstubbed calls. The mockk equivalent is `mockk&lt;X&gt;()` — strict by default (unstubbed calls throw) with `mockk&lt;X&gt;(relaxed = true)` for the Mockito-style default behavior.
* [org.openrewrite.kotlin.testing.FindMockitoMockField$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findmockitomockfield$ktrecipe.md)
  * **Find Mockito `@Mock` fields**
  * `@Mock`-annotated fields are populated by `MockitoAnnotations.openMocks(this)` (or the `MockitoExtension`). In mockk the convention is an inline assignment: `private val service = mockk&lt;Service&gt;(relaxed = true)`. Each match is a candidate for that conversion.
* [org.openrewrite.kotlin.testing.FindMockitoSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findmockitosmells$ktrecipe.md)
  * **Find mockito-kotlin / Mockito patterns**
  * Search-only bundle covering the Mockito surface most worth reviewing when migrating to mockk: `mock`/`spy` allocations, `whenever.thenReturn` chains, `verify(...)` calls, argument matchers, `ArgumentCaptor.forClass`, and `@Mock`/`@InjectMocks` field annotations.
* [org.openrewrite.kotlin.testing.FindMockitoSpyCall$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findmockitospycall$ktrecipe.md)
  * **Find `Mockito.spy(...)` / `spy(...)` calls**
  * Mockito's `spy(realInstance)` wraps a real object so unstubbed methods call the real implementation. mockk uses `spyk(realInstance)` — same idea, different semantics around `every \{ \} returns ...` (mockk records the call, Mockito intercepts the invocation).
* [org.openrewrite.kotlin.testing.FindMockitoVerifyCall$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findmockitoverifycall$ktrecipe.md)
  * **Find Mockito `verify(mock).method(...)` calls**
  * Mockito's `verify(mock).method(arg)` records a verification at the call site. mockk inverts the form: `verify \{ mock.method(arg) \}` — the lambda block makes the verified invocations explicit and supports `exactly = n`, `atLeast = n`, etc., as named arguments to the outer call.
* [org.openrewrite.kotlin.testing.FindMockitoWhenThenReturn$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findmockitowhenthenreturn$ktrecipe.md)
  * **Find Mockito `whenever(...).thenReturn(...)` chains**
  * Mockito's `whenever(call).thenReturn(value)` (or `whenever(call).thenAnswer \{ … \}`) intercepts the method invocation as it happens. mockk records the invocation in a DSL block: `every \{ mock.foo() \} returns value`. The mockk form composes more naturally with property access and suspending calls.
* [org.openrewrite.kotlin.testing.FindParameterizedTestWithValueSourceStrings$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findparameterizedtestwithvaluesourcestrings$ktrecipe.md)
  * **Find `@ValueSource(strings = [...])` annotations**
  * `@ValueSource(strings = [...])` is the simplest `@ParameterizedTest` data source. For tests where each row drives multiple parameters, `@CsvSource(...)` or `@MethodSource(...)` carry more information per case and read more like a table.
* [org.openrewrite.kotlin.testing.FindRepeatedTestAnnotation$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findrepeatedtestannotation$ktrecipe.md)
  * **Find `@RepeatedTest(N)` annotations**
  * `@RepeatedTest(N)` runs the same test body N times — useful for flaky-test reproduction, suspicious for asserting on randomized inputs (use `@ParameterizedTest` + `@MethodSource` for that). Each match is worth a glance at N and at what the repetition is meant to prove.
* [org.openrewrite.kotlin.testing.FindRunBlockingInTest$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findrunblockingintest$ktrecipe.md)
  * **Find `runBlocking \{ ... \}` calls inside test methods**
  * `runBlocking` inside a test method ties the test's wait to real wall-clock time — `delay(60_000)` is a literal minute. `runTest \{ … \}` from `kotlinx-coroutines-test` skips virtual time forward instead, so the same test finishes immediately while preserving suspend ordering.
* [org.openrewrite.kotlin.testing.FindRunBlockingTestCall$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findrunblockingtestcall$ktrecipe.md)
  * **Find `runBlockingTest \{ ... \}` calls**
  * `runBlockingTest` was deprecated in `kotlinx-coroutines-test` 1.6 in favor of `runTest \{ … \}`, which uses a `TestCoroutineScheduler` instead of the old `DelayController`. The new API has a cleaner contract around how child coroutines are awaited.
* [org.openrewrite.kotlin.testing.FindTagAnnotationUsage$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findtagannotationusage$ktrecipe.md)
  * **Find `@Tag(...)` annotations**
  * `@Tag(&quot;slow&quot;)` is JUnit 5's mechanism for grouping tests so the build can include/exclude them by tag. Useful to flag for tag-name consistency review across modules — if every module has its own spelling of &quot;integration&quot;, the build's tag filter doesn't catch them uniformly.
* [org.openrewrite.kotlin.testing.FindTestCoroutineDispatcherUsage$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findtestcoroutinedispatcherusage$ktrecipe.md)
  * **Find `TestCoroutineDispatcher` allocations**
  * `TestCoroutineDispatcher` was deprecated alongside `runBlockingTest`. The replacements are `StandardTestDispatcher` (queues all coroutines to a scheduler) and `UnconfinedTestDispatcher` (runs them eagerly on the current thread) — pick based on whether the test wants explicit advancement of virtual time.
* [org.openrewrite.kotlin.testing.FindTestFixtureSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findtestfixturesmells$ktrecipe.md)
  * **Find test fixture / setup smells**
  * Search-only bundle for test-method shape issues: empty `@Test` bodies, `@Test` methods without any recognized assertion call, `@Test` methods with many assertions (consider parameterized), and `@BeforeEach`/`@Before` methods reassigning instance state (lateinit var hint).
* [org.openrewrite.kotlin.testing.FindTestFrameworkSetupSmells$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findtestframeworksetupsmells$ktrecipe.md)
  * **Find JUnit 5 setup smells (informational)**
  * Search-only bundle for informational `@ParameterizedTest` / `@RepeatedTest` / `@Tag` / `@Disabled` review markers. None of these are anti-patterns on their own — each one is worth a once-over for parameter-source choice, repetition intent, tag spelling, or whether the disable is still warranted.
* [org.openrewrite.kotlin.testing.FindTestNoAssertions$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findtestnoassertions$ktrecipe.md)
  * **Find `@Test` methods with no recognized assertion calls**
  * A test with no `assert*` / `should*` / `assertThat` calls relies on its setup to throw on failure — fine for some smoke tests, suspicious for most. Each match is a candidate for adding an explicit assertion that documents what the test is actually verifying.
* [org.openrewrite.kotlin.testing.FindTooManyAssertions$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/findtoomanyassertions$ktrecipe.md)
  * **Find `@Test` methods with many assertions**
  * A test with more than ~7 assertions is usually testing several behaviors at once — when one fails the others go unreported, and the failure message rarely points at the right cause. Split into focused tests, or move to `@ParameterizedTest` if the assertions are repeating with different inputs.
* [org.openrewrite.kotlin.testing.Testing$KtRecipe](/user-documentation/recipes/recipe-catalog/kotlin/testing/testing$ktrecipe.md)
  * **Modernize Kotlin test code**
  * Find Kotlin-specific test patterns: mockito-kotlin usage where mockk would be idiomatic, deprecated `runBlocking` / `TestCoroutineDispatcher` patterns, Kotest assertion migration candidates, empty / assertion-less / many-assertion test bodies, snake_case test names, and Hamcrest call sites that fluent assertion libraries (AssertJ, Kotest) replace cleanly. Each match is a `SearchResult` for review — nothing is rewritten automatically. For bulk JUnit 4 → JUnit 5 annotation/assertion migration, apply `JUnit4to5Migration` from `rewrite-testing-frameworks`.

## recipes-scala

_License: Moderne Proprietary License_

_96 recipes_

* [org.openrewrite.scala.recipes.cleanup.AvoidEmptyCatchBlock](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/avoidemptycatchblock.md)
  * **Avoid empty catch blocks**
  * Finds catch blocks that contain no statements, which silently swallow exceptions.
* [org.openrewrite.scala.recipes.cleanup.AvoidSystemExit](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/avoidsystemexit.md)
  * **Avoid `System.exit` in library code**
  * Finds `System.exit` and `sys.exit` calls which terminate the JVM. Avoid using these in library code; prefer exceptions or controlled shutdown.
* [org.openrewrite.scala.recipes.cleanup.EncapsulateField](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/encapsulatefield.md)
  * **Encapsulate public mutable fields**
  * Finds public `var` fields in classes. Public mutable fields break encapsulation; consider using a private var with accessor methods.
* [org.openrewrite.scala.recipes.cleanup.ExternalizeCredentials](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/externalizecredentials.md)
  * **Externalize hardcoded credentials**
  * Finds variable declarations whose name contains credential-related keywords (password, secret, token, apikey, api_key) with a non-empty string literal initializer. Hardcoded credentials are a security risk.
* [org.openrewrite.scala.recipes.cleanup.ExternalizeTimeout](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/externalizetimeout.md)
  * **Externalize hardcoded timeouts**
  * Finds hardcoded timeout values such as `Duration(5, ...)`, `5.seconds`, or `Timeout(...)` with numeric literals. Consider making timeouts configurable.
* [org.openrewrite.scala.recipes.cleanup.ExtractMagicNumber](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/extractmagicnumber.md)
  * **Extract magic numbers to named constants**
  * Finds magic numbers (literal integers other than -1, 0, 1, 2) used in expressions or method arguments. Consider extracting them to named constants.
* [org.openrewrite.scala.recipes.cleanup.InventoryScalaLogging](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/inventoryscalalogging.md)
  * **Inventory scala-logging usage**
  * Finds imports of the Typesafe scala-logging library (`com.typesafe.scalalogging`). Use this recipe to inventory logging framework usage across a codebase.
* [org.openrewrite.scala.recipes.cleanup.InventoryTypesafeConfig](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/inventorytypesafeconfig.md)
  * **Inventory Typesafe Config usage**
  * Finds imports of the Typesafe Config library (`com.typesafe.config`). Use this recipe to inventory configuration library usage across a codebase.
* [org.openrewrite.scala.recipes.cleanup.KeepClassesSmall](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/keepclassessmall.md)
  * **Keep classes small (max 30 members)**
  * Finds classes with more than 30 members. Large classes are harder to maintain; consider splitting into smaller classes.
* [org.openrewrite.scala.recipes.cleanup.KeepMethodsShort](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/keepmethodsshort.md)
  * **Keep methods short (max 20 statements)**
  * Finds methods with more than 20 statements. Long methods are harder to understand and maintain; consider refactoring.
* [org.openrewrite.scala.recipes.cleanup.PatchLog4j](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/patchlog4j.md)
  * **Ensure Log4j is patched against CVE-2021-44228**
  * Finds imports of Log4j 1.x (`org.apache.log4j`) or Log4j 2.x (`org.apache.logging.log4j`). Ensure your Log4j version is patched against CVE-2021-44228.
* [org.openrewrite.scala.recipes.cleanup.PreferExplicitImports](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/preferexplicitimports.md)
  * **Prefer explicit imports over wildcards**
  * Finds wildcard imports (`import foo._` or `import foo.*`). Explicit imports are generally preferred for clarity.
* [org.openrewrite.scala.recipes.cleanup.PreferImmutableCollections](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/preferimmutablecollections.md)
  * **Prefer immutable collections**
  * Replaces imports of `scala.collection.mutable.*` with `scala.collection.immutable.*`. Idiomatic Scala prefers immutable collections.
* [org.openrewrite.scala.recipes.cleanup.PreferImmutableVal](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/preferimmutableval.md)
  * **Prefer `val` over `var`**
  * Finds mutable `var` declarations in Scala code. Idiomatic Scala prefers immutable `val` over mutable `var`.
* [org.openrewrite.scala.recipes.cleanup.PreferOption](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/preferoption.md)
  * **Prefer `Option` over `null`**
  * Replaces `null` literal with `None`. Idiomatic Scala uses `Option` instead of null.
* [org.openrewrite.scala.recipes.cleanup.PreferPatternMatch](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/preferpatternmatch.md)
  * **Prefer pattern matching over `asInstanceOf` casts**
  * Finds `.asInstanceOf[T]` type casts that should be replaced with pattern matching. Idiomatic Scala prefers pattern matching over explicit casts.
* [org.openrewrite.scala.recipes.cleanup.PreferPatternMatchOverInstanceOf](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/preferpatternmatchoverinstanceof.md)
  * **Prefer pattern matching over `isInstanceOf`/`asInstanceOf` chains**
  * Finds `if` statements that check `isInstanceOf` in the condition and use `asInstanceOf` in the then-part. Replace with pattern matching for idiomatic Scala.
* [org.openrewrite.scala.recipes.cleanup.PreferScalaPropertyAccess](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/preferscalapropertyaccess.md)
  * **Prefer Scala-style property access over Java getters**
  * Finds Java-style getter methods (`getName`, `getValue`, etc.) that could be replaced with Scala-style property access.
* [org.openrewrite.scala.recipes.cleanup.PreferSpecificTypes](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/preferspecifictypes.md)
  * **Prefer specific types over `Any`**
  * Finds variable declarations whose type expression contains `Any`. Type `Any` is the Scala equivalent of `Object` and is usually too broad.
* [org.openrewrite.scala.recipes.cleanup.PreferStringInterpolation](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/preferstringinterpolation.md)
  * **Prefer string interpolation over concatenation**
  * Finds string concatenation using the `+` operator. Idiomatic Scala prefers string interpolation (e.g., `s&quot;hello $name&quot;`) over concatenation with `+`.
* [org.openrewrite.scala.recipes.cleanup.ReduceNesting](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/reducenesting.md)
  * **Reduce deep nesting by extracting methods**
  * Finds `def` methods with deeply nested code (5+ indentation levels). Deeply nested code is hard to follow; consider extracting methods.
* [org.openrewrite.scala.recipes.cleanup.ReduceParameterCount](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/reduceparametercount.md)
  * **Reduce parameter count (max 5 parameters)**
  * Finds `def` methods with more than 5 parameters. Long parameter lists hurt readability; consider using a case class.
* [org.openrewrite.scala.recipes.cleanup.RemoveExplicitReturn](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/removeexplicitreturn.md)
  * **Remove explicit `return` statements**
  * Removes explicit `return` statements in Scala code. In Scala, the last expression in a method is automatically the return value, so explicit `return` is not idiomatic.
* [org.openrewrite.scala.recipes.cleanup.RemoveRedundantToString](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/removeredundanttostring.md)
  * **Remove redundant `toString` on `String`**
  * Removes calls to `.toString` on expressions that are already of type `String`. Such calls are redundant.
* [org.openrewrite.scala.recipes.cleanup.RemoveUnitReturnType](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/removeunitreturntype.md)
  * **Remove unnecessary `: Unit` return type**
  * Removes the explicit `Unit` return type annotation from Scala methods. In Scala, methods returning `Unit` do not need the `: Unit` annotation.
* [org.openrewrite.scala.recipes.cleanup.RemoveUnusedBinding](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/removeunusedbinding.md)
  * **Remove unused variable bindings**
  * Removes variable declarations whose name starts with `_` (underscore-prefixed binding). This removes unused variables that represent dead code.
* [org.openrewrite.scala.recipes.cleanup.ResolveTodoComment](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/resolvetodocomment.md)
  * **Resolve TODO/FIXME comments**
  * Finds comments containing TODO, FIXME, HACK, or XXX. These indicate incomplete work that should be tracked and resolved.
* [org.openrewrite.scala.recipes.cleanup.ReviewDeprecatedApi](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/reviewdeprecatedapi.md)
  * **Review deprecated API declarations**
  * Finds declarations annotated with `@deprecated` in Scala code. Deprecated APIs should be reviewed for removal or migration.
* [org.openrewrite.scala.recipes.cleanup.SimplifyBooleanExpression](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/simplifybooleanexpression.md)
  * **Simplify boolean expression**
  * Simplifies redundant boolean comparisons such as `x == true` to `x` and `x == false` to `!x`.
* [org.openrewrite.scala.recipes.cleanup.UseCollectionConverters](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/usecollectionconverters.md)
  * **Replace `JavaConverters` with `CollectionConverters`**
  * `scala.collection.JavaConverters` was deprecated in Scala 2.13 in favor of `scala.jdk.CollectionConverters`. This recipe replaces the import automatically.
* [org.openrewrite.scala.recipes.cleanup.UseDirectToSet](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/usedirecttoset.md)
  * **Replace unnecessary intermediate collection before `.toSet`**
  * Replaces patterns like `.toList.toSet` or `.toSeq.toSet` with `.toSet` to avoid creating an unnecessary intermediate collection.
* [org.openrewrite.scala.recipes.cleanup.UseLogger](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/uselogger.md)
  * **Use logging framework instead of `println`**
  * Finds `println` calls in Scala code. Using `println` directly is not suitable for production; use a logging framework instead.
* [org.openrewrite.scala.recipes.cleanup.UseLoggerForExceptions](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/useloggerforexceptions.md)
  * **Use logging framework instead of `printStackTrace`**
  * Finds `.printStackTrace` calls. Use a logging framework instead of writing directly to `System.err`.
* [org.openrewrite.scala.recipes.cleanup.UseOptionSafely](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/useoptionsafely.md)
  * **Use `Option` safely**
  * Finds calls to `.get` on `Option` values. Calling `.get` on `Option` can throw `NoSuchElementException`; prefer `getOrElse`, `map`, `fold`, or pattern matching.
* [org.openrewrite.scala.recipes.cleanup.UseOrNull](/user-documentation/recipes/recipe-catalog/scala/recipes/cleanup/useornull.md)
  * **Replace `.getOrElse(null)` with `.orNull`**
  * Replaces `.getOrElse(null)` on `Option` values with `.orNull` for a cleaner, idiomatic alternative.
* [org.openrewrite.scala.recipes.concurrency.AvoidBlockingCalls](/user-documentation/recipes/recipe-catalog/scala/recipes/concurrency/avoidblockingcalls.md)
  * **Avoid blocking calls (`Await.result`/`Await.ready`)**
  * Finds `Await.result` and `Await.ready` calls which block the current thread. Consider using non-blocking Future composition with map, flatMap, or for-comprehensions.
* [org.openrewrite.scala.recipes.concurrency.AvoidThreadSleep](/user-documentation/recipes/recipe-catalog/scala/recipes/concurrency/avoidthreadsleep.md)
  * **Avoid `Thread.sleep`**
  * Finds `Thread.sleep` calls which block the current thread. Consider using scheduled executors or akka scheduler instead.
* [org.openrewrite.scala.recipes.concurrency.PreferCustomExecutionContext](/user-documentation/recipes/recipe-catalog/scala/recipes/concurrency/prefercustomexecutioncontext.md)
  * **Prefer custom `ExecutionContext` over global**
  * Finds imports of `scala.concurrent.ExecutionContext.Implicits.global`. The global ExecutionContext may not be appropriate for blocking I/O operations; prefer a custom ExecutionContext backed by a dedicated thread pool.
* [org.openrewrite.scala.recipes.concurrency.SynchronizeMutableState](/user-documentation/recipes/recipe-catalog/scala/recipes/concurrency/synchronizemutablestate.md)
  * **Synchronize mutable shared state**
  * Finds `var` declarations at class level that lack `@volatile` or other synchronization annotations. Mutable shared state without synchronization is a common source of concurrency bugs.
* [org.openrewrite.scala.recipes.errorhandling.PreferDirectEitherOps](/user-documentation/recipes/recipe-catalog/scala/recipes/errorhandling/preferdirecteitherops.md)
  * **Prefer direct `Either` operations over projections**
  * Finds usages of `.left` and `.right` projections on `Either`. Since Scala 2.13, `Either` is right-biased so `map`/`flatMap` work directly. Use `swap` to operate on the `Left` side instead of `.left`.
* [org.openrewrite.scala.recipes.errorhandling.PreferFunctionalErrorHandling](/user-documentation/recipes/recipe-catalog/scala/recipes/errorhandling/preferfunctionalerrorhandling.md)
  * **Prefer functional error handling over `throw` expressions**
  * Finds `throw` expressions inside method bodies that should use functional error handling. Throwing exceptions breaks referential transparency; prefer returning `Try`, `Either`, or `Option`.
* [org.openrewrite.scala.recipes.errorhandling.UseNonFatalMatcher](/user-documentation/recipes/recipe-catalog/scala/recipes/errorhandling/usenonfatalmatcher.md)
  * **Use `NonFatal` matcher for broad catch patterns**
  * Finds catch blocks using broad patterns like `case e: Exception =&gt;` or `case _ =&gt;` that should use `scala.util.control.NonFatal` to catch all non-fatal exceptions while allowing fatal errors to propagate.
* [org.openrewrite.scala.recipes.errorhandling.UseTrySafely](/user-documentation/recipes/recipe-catalog/scala/recipes/errorhandling/usetrysafely.md)
  * **Use `Try` safely without calling `.get`**
  * Finds calls to `.get` on `scala.util.Try` values that should use safer alternatives. Calling `.get` on a `Failure` throws the contained exception; prefer `getOrElse`, `map`, or pattern matching.
* [org.openrewrite.scala.recipes.migrate.MigrateImplicitToGivenUsing](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/migrateimplicittogivenusing.md)
  * **Migrate `implicit` to `given`/`using` (Scala 3)**
  * Finds `implicit` keyword usage on methods and parameters. In Scala 3, `implicit` is replaced with `given`/`using`.
* [org.openrewrite.scala.recipes.migrate.MigrateProcedureSyntax](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/migrateproceduresyntax.md)
  * **Migrate deprecated procedure syntax**
  * Finds method declarations that use deprecated Scala procedure syntax (methods with a body block but no explicit return type or `=` sign). Procedure syntax was deprecated in Scala 2.13 and removed in Scala 3.
* [org.openrewrite.scala.recipes.migrate.RemoveAny2StringAdd](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/removeany2stringadd.md)
  * **Remove deprecated `any2stringadd` usage**
  * Finds expressions like `1 + &quot;string&quot;` that rely on the deprecated `any2stringadd` implicit conversion. This was deprecated in Scala 2.13 and removed in Scala 3. Use string interpolation or `.toString` instead.
* [org.openrewrite.scala.recipes.migrate.RemoveExistentialTypes](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/removeexistentialtypes.md)
  * **Remove existential types (removed in Scala 3)**
  * Finds existential types using `forSome` syntax. Existential types were removed in Scala 3 and must be rewritten.
* [org.openrewrite.scala.recipes.migrate.RemoveSymbolLiterals](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/removesymbolliterals.md)
  * **Remove deprecated symbol literals**
  * Finds symbol literals like `'foo` which were deprecated in Scala 2.13 and removed in Scala 3. Use `Symbol(&quot;foo&quot;)` instead.
* [org.openrewrite.scala.recipes.migrate.ReviewAbstractOverride](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/reviewabstractoverride.md)
  * **Review abstract override for Scala 3**
  * Finds methods or fields with both `abstract` and `override` modifiers. The stackable trait pattern using `abstract override` may need review for Scala 3.
* [org.openrewrite.scala.recipes.migrate.ReviewTraitVarInit](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/reviewtraitvarinit.md)
  * **Review trait var initialization for Scala 3**
  * Finds traits that have initialized `var` fields. In Scala 3, trait initialization semantics changed and these may need review.
* [org.openrewrite.scala.recipes.migrate.UpgradeSbtVersion](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/upgradesbtversion.md)
  * **Upgrade sbt version**
  * Update the `sbt.version` property in `project/build.properties` to the specified version. Only modifies files at `**/project/build.properties`.
* [org.openrewrite.scala.recipes.migrate.UseQuestionMarkWildcard](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/usequestionmarkwildcard.md)
  * **Use `?` instead of `_` for wildcard types (Scala 3)**
  * Finds usage of `_` as a wildcard type in type parameters (e.g., `List[_]`). In Scala 3, the wildcard type syntax changed from `_` to `?`.
* [org.openrewrite.scala.recipes.migrate.akka.MigrateActorRefTell](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/akka/migrateactorreftell.md)
  * **Migrate classic actor tell to typed ActorRef**
  * Finds classic Akka actor messaging patterns (`actorRef ! msg` or `actorRef.tell(msg)`). Consider migrating to typed `ActorRef` messaging.
* [org.openrewrite.scala.recipes.migrate.akka.MigrateToTypedActor](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/akka/migratetotypedactor.md)
  * **Migrate classic Actor to Akka Typed Behavior**
  * Removes `akka.actor.Actor` imports and marks classes extending `Actor` or `UntypedActor` from classic Akka for migration to Akka Typed `Behavior`.
* [org.openrewrite.scala.recipes.migrate.akka.MigrateToTypedActorSystem](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/akka/migratetotypedactorsystem.md)
  * **Migrate `akka.actor.ActorSystem` to `akka.actor.typed.ActorSystem`**
  * Replaces the import `akka.actor.ActorSystem` with `akka.actor.typed.ActorSystem` to migrate from the classic untyped actor system to Akka Typed.
* [org.openrewrite.scala.recipes.migrate.akka.RemoveDeprecatedAkkaImports](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/akka/removedeprecatedakkaimports.md)
  * **Remove deprecated Akka imports**
  * Removes imports of deprecated Akka APIs such as `akka.pattern.ask` (old ask pattern) and `akka.actor.PoisonPill`. These have no direct drop-in replacement and should be replaced with their modern Akka Typed equivalents.
* [org.openrewrite.scala.recipes.migrate.database.MigrateAnorm](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/database/migrateanorm.md)
  * **Migrate Anorm to Doobie, Quill, or Skunk**
  * Removes imports of the Anorm SQL library (`anorm.*`). Consider evaluating modern alternatives such as Doobie, Quill, or Skunk.
* [org.openrewrite.scala.recipes.migrate.database.MigratePhantomDsl](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/database/migratephantomdsl.md)
  * **Migrate Phantom DSL to Datastax driver or quill-cassandra**
  * Removes imports of the Phantom DSL library (`com.outworkers.phantom.*`). Consider migrating to the direct Datastax driver or quill-cassandra.
* [org.openrewrite.scala.recipes.migrate.database.MigrateScalikeJdbc](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/database/migratescalikejdbc.md)
  * **Migrate ScalikeJDBC to Doobie or Quill**
  * Removes imports of the ScalikeJDBC library (`scalikejdbc.*`). Consider evaluating modern alternatives such as Doobie or Quill.
* [org.openrewrite.scala.recipes.migrate.database.SecureSqlQueries](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/database/securesqlqueries.md)
  * **Ensure parameterized SQL queries**
  * Finds raw SQL string patterns such as `sql&quot;...&quot;`, `SQL(...)`, or `s&quot;SELECT...&quot;`. Ensure parameterized queries are used to prevent SQL injection.
* [org.openrewrite.scala.recipes.migrate.ecosystem.AvoidBlockingSlick](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/ecosystem/avoidblockingslick.md)
  * **Avoid blocking Slick database calls**
  * Finds methods that combine `Await.result` with `db.run`, indicating a blocking Slick database call. Use streaming or async patterns instead.
* [org.openrewrite.scala.recipes.migrate.ecosystem.MigrateCatsEffect2To3](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/ecosystem/migratecatseffect2to3.md)
  * **Migrate Cats Effect 2 to Cats Effect 3**
  * Finds Cats Effect 2 imports by detecting `cats.effect.IO` without `cats.effect.unsafe`, or CE2-specific types like `ContextShift` and `Timer`. Consider migrating to Cats Effect 3.
* [org.openrewrite.scala.recipes.migrate.ecosystem.MigrateScalazToCats](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/ecosystem/migratescalaztocats.md)
  * **Migrate Scalaz to Cats**
  * Removes imports of `scalaz.` packages. Scalaz is a legacy FP library; consider migrating to Cats or ZIO.
* [org.openrewrite.scala.recipes.migrate.ecosystem.UseCirceDerivation](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/ecosystem/usecircederivation.md)
  * **Use circe `derives` for Scala 3**
  * Finds imports of `io.circe.generic.auto` which uses Shapeless-based automatic derivation. In Scala 3, consider using `derives` syntax for codec derivation instead.
* [org.openrewrite.scala.recipes.migrate.http.MigrateAkkaHttpToPekko](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/http/migrateakkahttptopekko.md)
  * **Find Akka HTTP imports to migrate to Apache Pekko**
  * Finds imports starting with `akka.http`. Akka HTTP should be migrated to Apache Pekko HTTP (`org.apache.pekko.http`), the community-maintained fork.
* [org.openrewrite.scala.recipes.migrate.http.MigrateDispatch](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/http/migratedispatch.md)
  * **Migrate Dispatch to sttp or http4s-client**
  * Removes imports starting with `dispatch.`. Dispatch is an unmaintained HTTP client library; consider using sttp, http4s-client, or requests-scala.
* [org.openrewrite.scala.recipes.migrate.http.MigrateFinagle](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/http/migratefinagle.md)
  * **Migrate Finagle to http4s, tapir, or pekko-http**
  * Removes imports starting with `com.twitter.finagle`. Finagle is a legacy RPC framework; consider evaluating http4s, tapir, or pekko-http as alternatives.
* [org.openrewrite.scala.recipes.migrate.http.MigrateScalatra](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/http/migratescalatra.md)
  * **Migrate Scalatra to http4s, tapir, or Play**
  * Removes imports starting with `org.scalatra`. Scalatra is a servlet-based framework with declining activity; consider migrating to http4s, tapir, or Play Framework.
* [org.openrewrite.scala.recipes.migrate.json.MigrateJacksonScala](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/json/migratejacksonscala.md)
  * **Remove Jackson Scala module imports**
  * Removes imports of the Jackson Scala module (`com.fasterxml.jackson.module.scala.*`). Jackson is a Java-centric library and its Scala module can cause issues with Scala types. Consider using a Scala-native JSON library such as circe or zio-json. Removing the imports causes the compiler to highlight all usage sites that need updating.
* [org.openrewrite.scala.recipes.migrate.json.MigrateJson4s](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/json/migratejson4s.md)
  * **Remove json4s imports**
  * Removes imports of the json4s library (`org.json4s.*`). json4s has known performance and maintenance concerns and should be replaced with a modern Scala JSON library such as circe or zio-json. Removing the imports causes the compiler to highlight all usage sites that need updating.
* [org.openrewrite.scala.recipes.migrate.json.MigrateLiftJson](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/json/migrateliftjson.md)
  * **Remove lift-json imports**
  * Removes imports of the lift-json library (`net.liftweb.json.*`). lift-json is tightly coupled to the Lift framework and should be replaced with a standalone Scala JSON library such as circe or play-json. Removing the imports causes the compiler to highlight all usage sites that need updating.
* [org.openrewrite.scala.recipes.migrate.json.MigrateSprayJson](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/json/migratesprayjson.md)
  * **Remove spray-json imports**
  * Removes imports of the spray-json library (`spray.json.*`). spray-json is no longer actively maintained and should be replaced with a modern Scala JSON library such as circe, play-json, or zio-json. Removing the imports causes the compiler to highlight all usage sites that need updating.
* [org.openrewrite.scala.recipes.migrate.play.InjectWsClient](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/play/injectwsclient.md)
  * **Inject `WSClient` instead of using deprecated `WS`**
  * Finds imports of the deprecated `play.api.libs.ws.WS` object. In Play 2.6+, `WS` was deprecated; inject `WSClient` instead.
* [org.openrewrite.scala.recipes.migrate.play.MigratePlayGlobalSettings](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/play/migrateplayglobalsettings.md)
  * **Migrate `GlobalSettings` to dependency injection (Play 2.6+)**
  * Finds classes extending `GlobalSettings` and imports of `play.api.GlobalSettings`. GlobalSettings is deprecated in Play 2.6+; use dependency injection instead.
* [org.openrewrite.scala.recipes.migrate.play.UseAsyncPlayAction](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/play/useasyncplayaction.md)
  * **Use `Action.async` with `Future` instead of blocking**
  * Finds Play controller actions (`Action \{` or `Action.async \{`) that contain `Await.result` blocking calls. Blocking inside Play Actions can exhaust the thread pool; use `Action.async` with `Future` instead.
* [org.openrewrite.scala.recipes.migrate.play.UsePlayJsonDirectly](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/play/useplayjsondirectly.md)
  * **Use Play JSON `JsValue` directly**
  * Finds imports of `play.api.libs.json.Json` and usages of `Json.parse` or `Json.toJson` that may rely on deprecated implicit conversions. Consider using `play.api.libs.json.JsValue` directly.
* [org.openrewrite.scala.recipes.migrate.scala3.MigrateDelayedInit](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/scala3/migratedelayedinit.md)
  * **Migrate from `DelayedInit`/`App` to `@main`**
  * Finds classes or objects extending `DelayedInit` or `App`. The `DelayedInit` trait was deprecated in Scala 2.13 and removed in Scala 3. Use `@main` annotation instead.
* [org.openrewrite.scala.recipes.migrate.scala3.MigrateXmlLiterals](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/scala3/migratexmlliterals.md)
  * **Migrate XML literals to scala-xml interpolation**
  * Finds XML literal usage in Scala code. XML literals were removed in Scala 3; use scala-xml library string interpolation instead.
* [org.openrewrite.scala.recipes.migrate.scala3.RemoveAutoTupling](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/scala3/removeautotupling.md)
  * **Remove auto-tupling (not available in Scala 3)**
  * Finds imports of `scala.language.autoTupling`. Auto-tupling is not available in Scala 3 and code relying on it must be rewritten.
* [org.openrewrite.scala.recipes.migrate.scala3.ReplaceDoWhileLoop](/user-documentation/recipes/recipe-catalog/scala/recipes/migrate/scala3/replacedowhileloop.md)
  * **Replace do-while loops (removed in Scala 3)**
  * Finds `do-while` loops which were removed in Scala 3. Rewrite using a `while` loop with initial execution of the loop body.
* [org.openrewrite.scala.recipes.performance.PreferVectorOrPrepend](/user-documentation/recipes/recipe-catalog/scala/recipes/performance/prefervectororprepend.md)
  * **Prefer Vector or prepend for append-heavy workloads**
  * Finds usage of the `:+` operator to append to a List, which is O(n). Prefer Vector for append-heavy workloads or prepend with `::` instead.
* [org.openrewrite.scala.recipes.performance.PreferViewMapValues](/user-documentation/recipes/recipe-catalog/scala/recipes/performance/preferviewmapvalues.md)
  * **Prefer `.view.mapValues` for Scala 2.13+**
  * Finds calls to `.mapValues` which is deprecated in Scala 2.13+ and returns a lazy view instead of a strict Map. Use `.view.mapValues(...).toMap` instead.
* [org.openrewrite.scala.recipes.performance.UseCount](/user-documentation/recipes/recipe-catalog/scala/recipes/performance/usecount.md)
  * **Replace `filter` then `size` with `count`**
  * Replaces `.filter(f).size` or `.filter(f).length` chains with `.count(f)` to avoid creating an unnecessary intermediate collection.
* [org.openrewrite.scala.recipes.performance.UseFlatMap](/user-documentation/recipes/recipe-catalog/scala/recipes/performance/useflatmap.md)
  * **Replace `map` then `flatten` with `flatMap`**
  * Replaces `.map(f).flatten` chains with `.flatMap(f)` for clarity and to avoid creating an unnecessary intermediate collection.
* [org.openrewrite.scala.recipes.performance.UseHeadOption](/user-documentation/recipes/recipe-catalog/scala/recipes/performance/useheadoption.md)
  * **Replace `.head` with `.headOption`**
  * Replaces `.head` calls on collections with `.headOption` to avoid `NoSuchElementException` on empty collections.
* [org.openrewrite.scala.recipes.performance.UseIsEmpty](/user-documentation/recipes/recipe-catalog/scala/recipes/performance/useisempty.md)
  * **Use `isEmpty` instead of `size == 0`**
  * Replaces `collection.size == 0` with `collection.isEmpty` for clarity and potential performance benefits.
* [org.openrewrite.scala.recipes.performance.UseLastOption](/user-documentation/recipes/recipe-catalog/scala/recipes/performance/uselastoption.md)
  * **Replace `.last` with `.lastOption`**
  * Replaces `.last` calls on collections with `.lastOption` to avoid `NoSuchElementException` on empty collections.
* [org.openrewrite.scala.recipes.performance.UseNonEmpty](/user-documentation/recipes/recipe-catalog/scala/recipes/performance/usenonempty.md)
  * **Use `nonEmpty` instead of `size &gt; 0`**
  * Replaces `collection.size &gt; 0` with `collection.nonEmpty` for clarity and potential performance benefits.
* [org.openrewrite.scala.recipes.safety.AvoidThrowInFinally](/user-documentation/recipes/recipe-catalog/scala/recipes/safety/avoidthrowinfinally.md)
  * **Avoid throwing in finally blocks**
  * Finds `throw` statements inside `finally` blocks. Throwing in a `finally` block can mask the original exception, making debugging harder.
* [org.openrewrite.scala.recipes.safety.NarrowCatchClause](/user-documentation/recipes/recipe-catalog/scala/recipes/safety/narrowcatchclause.md)
  * **Narrow catch clauses that catch `Throwable`**
  * Finds catch blocks that catch `Throwable` and should be narrowed to specific exception types. Catching `Throwable` also catches fatal errors like `OutOfMemoryError` and `StackOverflowError`. Prefer catching specific exception types.
* [org.openrewrite.scala.recipes.safety.PreferConcurrentUtils](/user-documentation/recipes/recipe-catalog/scala/recipes/safety/preferconcurrentutils.md)
  * **Prefer `java.util.concurrent` over `synchronized`**
  * Finds `synchronized` blocks in Scala code. Consider using `java.util.concurrent` alternatives for better performance and composability.
* [org.openrewrite.scala.recipes.safety.RemoveUnusedImport](/user-documentation/recipes/recipe-catalog/scala/recipes/safety/removeunusedimport.md)
  * **Remove potentially unused imports (heuristic)**
  * Removes imports where the imported simple name does not appear in the rest of the file. This is an approximate heuristic and may produce false positives.
* [org.openrewrite.scala.recipes.testing.MigrateSpecs2](/user-documentation/recipes/recipe-catalog/scala/recipes/testing/migratespecs2.md)
  * **Migrate specs2 to ScalaTest or MUnit**
  * Finds imports of `org.specs2`. Consider migrating to ScalaTest or MUnit.
* [org.openrewrite.scala.recipes.testing.MigrateToAnyFlatSpec](/user-documentation/recipes/recipe-catalog/scala/recipes/testing/migratetoanyflatspec.md)
  * **Migrate from `FlatSpec` to `AnyFlatSpec`**
  * Renames `FlatSpec` to `AnyFlatSpec` in extends clauses and updates the import from `org.scalatest.FlatSpec` to `org.scalatest.flatspec.AnyFlatSpec` (ScalaTest 3.x).
* [org.openrewrite.scala.recipes.testing.UseNewScalaTestMatchers](/user-documentation/recipes/recipe-catalog/scala/recipes/testing/usenewscalatestmatchers.md)
  * **Migrate to `org.scalatest.matchers.should.Matchers`**
  * Replaces imports of `org.scalatest.Matchers` or `org.scalatest.ShouldMatchers` with `org.scalatest.matchers.should.Matchers`.
* [org.openrewrite.scala.recipes.testing.UseScalaTestMatchers](/user-documentation/recipes/recipe-catalog/scala/recipes/testing/usescalatestmatchers.md)
  * **Use ScalaTest matchers instead of `assert(x == y)`**
  * Finds `assert(x == y)` patterns and `assertEquals` calls. Consider using ScalaTest matchers: `x shouldBe y`.

## rewrite-ai

_License: Moderne Proprietary License_

_3 recipes_

* [io.moderne.ai.FindAgentsInUse](/user-documentation/recipes/recipe-catalog/ai/findagentsinuse.md)
  * **Find AI agents configuration files**
  * Scans codebases to identify usage of AI agents by looking at the agent configuration files present in the repository.
* [io.moderne.ai.FindLibrariesInUse](/user-documentation/recipes/recipe-catalog/ai/findlibrariesinuse.md)
  * **Find AI libraries in use**
  * Scans codebases to identify usage of AI services. Detects AI libraries across Java dependencies. Useful for auditing and understanding AI integration patterns.
* [io.moderne.ai.FindModelsInUse](/user-documentation/recipes/recipe-catalog/ai/findmodelsinuse.md)
  * **Find AI models in use**
  * Scans codebases to identify usage of Large Language Models (LLMs). Detects model references and configuration patterns across Java classes, properties files, YAML configs... Useful for identifying model usage.

## rewrite-angular

_License: Moderne Proprietary License_

_123 recipes_

* [org.openrewrite.angular.UpgradeToAngular10](/user-documentation/recipes/recipe-catalog/angular/upgradetoangular10.md)
  * **Upgrade to Angular 10**
  * Migrates Angular 9.x applications to Angular 10. This includes removing the deprecated `es5BrowserSupport` option from `angular.json`, renaming deprecated `validator`/`asyncValidator` to their plural forms, renaming `browserslist` to `.browserslistrc`, migrating to solution-style `tsconfig.json`, and upgrading Angular, TypeScript, and related dependency versions.
* [org.openrewrite.angular.UpgradeToAngular11](/user-documentation/recipes/recipe-catalog/angular/upgradetoangular11.md)
  * **Upgrade to Angular 11**
  * Migrates Angular 10.x applications to Angular 11. This includes replacing `ViewEncapsulation.Native` with `ViewEncapsulation.ShadowDom`, removing the deprecated `extractCss` build option from `angular.json`, flagging deprecated string-based `loadChildren` and `preserveQueryParams` usage, and upgrading Angular, TypeScript, and related dependency versions.
* [org.openrewrite.angular.UpgradeToAngular12](/user-documentation/recipes/recipe-catalog/angular/upgradetoangular12.md)
  * **Upgrade to Angular 12**
  * Migrates Angular 11.x applications to Angular 12. This includes adding `defaultConfiguration: &quot;production&quot;` to build targets in `angular.json`, replacing `node-sass` with `sass` (Dart Sass), flagging deprecated `async` test helper and View Engine APIs, and upgrading Angular, TypeScript, and related dependency versions.
* [org.openrewrite.angular.UpgradeToAngular13](/user-documentation/recipes/recipe-catalog/angular/upgradetoangular13.md)
  * **Upgrade to Angular 13**
  * Migrates Angular 12.x applications to Angular 13. This includes updating `tsconfig.json` target to `es2017`, removing IE11 polyfills, removing `defaultProject` from `angular.json`, adding TestBed module teardown, simplifying `ComponentFactoryResolver` usage, and upgrading Angular, TypeScript, and related dependency versions.
* [org.openrewrite.angular.UpgradeToAngular14](/user-documentation/recipes/recipe-catalog/angular/upgradetoangular14.md)
  * **Upgrade to Angular 14**
  * Migrates Angular 13.x applications to Angular 14. This includes replacing form classes with their `Untyped*` equivalents for backward compatibility with typed forms, updating deprecated `initialNavigation` router option values, removing `aotSummaries` from TestBed calls, and flagging `pathMatch` properties that may need type narrowing.
* [org.openrewrite.angular.UpgradeToAngular15](/user-documentation/recipes/recipe-catalog/angular/upgradetoangular15.md)
  * **Upgrade to Angular 15**
  * Migrates Angular 14.x applications to Angular 15. This includes removing the `relativeLinkResolution` option from `RouterModule.forRoot()`, removing the `enableIvy` compiler option from `tsconfig.json`, flagging the deprecated `DATE_PIPE_DEFAULT_TIMEZONE` token and `providedIn: NgModule`/`'any'` usage, and upgrading Angular, TypeScript, and related dependency versions.
* [org.openrewrite.angular.UpgradeToAngular16](/user-documentation/recipes/recipe-catalog/angular/upgradetoangular16.md)
  * **Upgrade to Angular 16**
  * Migrates Angular 15.x applications to Angular 16. This includes removing `entryComponents` and `moduleId` from decorators, replacing `RouterLinkWithHref` with `RouterLink`, moving the `XhrFactory` import to `@angular/common`, and flagging removed APIs like `ReflectiveInjector`, `renderModuleFactory`, and `BrowserTransferStateModule`.
* [org.openrewrite.angular.UpgradeToAngular17](/user-documentation/recipes/recipe-catalog/angular/upgradetoangular17.md)
  * **Upgrade to Angular 17**
  * Migrates Angular 16.x applications to Angular 17. This includes updating Angular package versions, replacing legacy deep `zone.js` imports, flagging the removed `withNoDomReuse` and `setupTestingRouter` APIs, and upgrading TypeScript and `zone.js` dependencies.
* [org.openrewrite.angular.UpgradeToAngular18](/user-documentation/recipes/recipe-catalog/angular/upgradetoangular18.md)
  * **Upgrade to Angular 18**
  * Migrates Angular 17.x applications to Angular 18. This includes replacing the deprecated `async` test helper with `waitForAsync`, migrating `HttpClientModule` to `provideHttpClient()`, moving Transfer State APIs to `@angular/core`, and flagging removed platform APIs.
* [org.openrewrite.angular.UpgradeToAngular19](/user-documentation/recipes/recipe-catalog/angular/upgradetoangular19.md)
  * **Upgrade to Angular 19**
  * Migrates Angular 18.x applications to Angular 19. This includes updating Angular package versions, adjusting the standalone default, renaming `ExperimentalPendingTasks` to `PendingTasks`, moving the `ApplicationConfig` import to `@angular/core`, and updating `zone.js`.
* [org.openrewrite.angular.UpgradeToAngular20](/user-documentation/recipes/recipe-catalog/angular/upgradetoangular20.md)
  * **Upgrade to Angular 20**
  * Migrates Angular 19.x applications to Angular 20. This includes running the Angular 19 migration first, then updating Angular package versions, renaming experimental APIs promoted to stable, and upgrading TypeScript to 5.8.x.
* [org.openrewrite.angular.UpgradeToAngular21](/user-documentation/recipes/recipe-catalog/angular/upgradetoangular21.md)
  * **Upgrade to Angular 21**
  * Migrates Angular 20.x applications to Angular 21. This includes running the Angular 20 migration first, flagging Karma test runner usage for Vitest migration, deprecated NgClass, zone.js-dependent test helpers, and upgrading TypeScript to 5.9.x.
* [org.openrewrite.angular.UpgradeToAngular8](/user-documentation/recipes/recipe-catalog/angular/upgradetoangular8.md)
  * **Upgrade to Angular 8**
  * Migrates Angular 7.x applications to Angular 8. This includes adding the now-required `static: false` to `@ViewChild` and `@ContentChild` decorators, moving the `DOCUMENT` import from `@angular/platform-browser` to `@angular/common`, removing `rxjs-compat` and flagging any remaining RxJS 5-style imports, flagging removed `@angular/http` imports, converting deprecated string-based `loadChildren` to dynamic imports, and upgrading Angular, TypeScript, and related dependency versions.
* [org.openrewrite.angular.UpgradeToAngular9](/user-documentation/recipes/recipe-catalog/angular/upgradetoangular9.md)
  * **Upgrade to Angular 9**
  * Migrates Angular 8.x applications to Angular 9. This includes removing the now-default `static: false` from view query decorators, replacing `TestBed.get()` with `TestBed.inject()`, adding generic type parameters to `ModuleWithProviders`, enabling AOT compilation in `angular.json`, updating `tsconfig.json` module settings for Ivy, flagging removed View Engine APIs (`Renderer`, `RenderComponentType`, `RootRenderer`), and upgrading Angular, TypeScript, and related dependency versions.
* [org.openrewrite.angular.migration.add-default-configuration](/user-documentation/recipes/recipe-catalog/angular/migration/add-default-configuration.md)
  * **Add `defaultConfiguration` to build targets**
  * Adds `&quot;defaultConfiguration&quot;: &quot;production&quot;` to build architect targets in `angular.json`. Angular 12 changed `ng build` to produce production bundles by default.
* [org.openrewrite.angular.migration.add-localize-polyfill](/user-documentation/recipes/recipe-catalog/angular/migration/add-localize-polyfill.md)
  * **Add `@angular/localize/init` polyfill import**
  * Adds `import '@angular/localize/init'` to `polyfills.ts`. Angular 9 introduced the `$localize` runtime API for i18n. Projects using internationalization must import this polyfill or the application will fail at runtime with `$localize is not defined`. The `@angular/localize` package must also be added as a dependency.
* [org.openrewrite.angular.migration.add-module-with-providers-generic](/user-documentation/recipes/recipe-catalog/angular/migration/add-module-with-providers-generic.md)
  * **Add generic type to `ModuleWithProviders`**
  * Adds the required generic type parameter to bare `ModuleWithProviders` return types. Angular 10 requires `ModuleWithProviders&lt;T&gt;` where `T` is the NgModule type. The module type is inferred from the `ngModule` property in the return statement.
* [org.openrewrite.angular.migration.add-static-false-to-view-queries](/user-documentation/recipes/recipe-catalog/angular/migration/add-static-false-to-view-queries.md)
  * **Add `static: false` to view queries**
  * Adds `static: false` to `@ViewChild` and `@ContentChild` decorators that don't have the `static` property. Angular 8 requires an explicit `static` flag for view query decorators. Using `static: false` preserves the Angular 7 default behavior (queries resolved after change detection).
* [org.openrewrite.angular.migration.add-testbed-teardown](/user-documentation/recipes/recipe-catalog/angular/migration/add-testbed-teardown.md)
  * **Add TestBed module teardown**
  * Adds `\{ teardown: \{ destroyAfterEach: true \} \}` as the third argument to `TestBed.initTestEnvironment()` calls. Angular 13 changed the default teardown behavior, and this ensures explicit opt-in for module teardown after each test.
* [org.openrewrite.angular.migration.enable-aot-build](/user-documentation/recipes/recipe-catalog/angular/migration/enable-aot-build.md)
  * **Enable AOT compilation in `angular.json`**
  * Adds `&quot;aot&quot;: true` to build options in `angular.json`. Angular 9 made AOT compilation the default, and projects upgrading from Angular 8 should enable it explicitly.
* [org.openrewrite.angular.migration.explicit-standalone-flag](/user-documentation/recipes/recipe-catalog/angular/migration/explicit-standalone-flag.md)
  * **Make standalone flag explicit**
  * Adds `standalone: false` to non-standalone Angular components, directives, and pipes, and removes redundant `standalone: true` since it became the default in Angular 19.
* [org.openrewrite.angular.migration.migrate-constructor-to-inject](/user-documentation/recipes/recipe-catalog/angular/migration/migrate-constructor-to-inject.md)
  * **Migrate constructor injection to `inject()`**
  * Converts constructor parameter properties in Angular classes to field declarations using the `inject()` function. For example, `constructor(private svc: MyService) \{\}` becomes `private svc = inject(MyService);`.
* [org.openrewrite.angular.migration.migrate-input-to-signal](/user-documentation/recipes/recipe-catalog/angular/migration/migrate-input-to-signal.md)
  * **Migrate `@Input()` to signal-based `input()`**
  * Converts `@Input()` decorated properties in Angular classes to signal-based `input()` declarations. For example, `@Input() name: string` becomes `name = input&lt;string&gt;()`, and `@Input(\{ required: true \}) name!: string` becomes `name = input.required&lt;string&gt;()`.
* [org.openrewrite.angular.migration.migrate-output-to-signal](/user-documentation/recipes/recipe-catalog/angular/migration/migrate-output-to-signal.md)
  * **Migrate `@Output()` to signal-based `output()`**
  * Converts `@Output()` decorated properties using `EventEmitter` in Angular classes to signal-based `output()` declarations. For example, `@Output() clicked = new EventEmitter&lt;void&gt;()` becomes `clicked = output&lt;void&gt;()`.
* [org.openrewrite.angular.migration.migrate-query-to-signal](/user-documentation/recipes/recipe-catalog/angular/migration/migrate-query-to-signal.md)
  * **Migrate query decorators to signal-based functions**
  * Converts `@ViewChild()`, `@ViewChildren()`, `@ContentChild()`, and `@ContentChildren()` decorated properties to signal-based query functions. For example, `@ViewChild('ref') el: ElementRef` becomes `el = viewChild&lt;ElementRef&gt;('ref')`.
* [org.openrewrite.angular.migration.migrate-to-solution-style-tsconfig](/user-documentation/recipes/recipe-catalog/angular/migration/migrate-to-solution-style-tsconfig.md)
  * **Migrate to solution-style tsconfig**
  * Migrates a project to use a solution-style `tsconfig.json`. The original `tsconfig.json` content is moved to `tsconfig.base.json` (with project-specific fields removed), and `tsconfig.json` is replaced with a solution-style config that references the project's TypeScript configurations. Other tsconfig files that extend `./tsconfig.json` are updated to extend `./tsconfig.base.json`.
* [org.openrewrite.angular.migration.move-document-import](/user-documentation/recipes/recipe-catalog/angular/migration/move-document-import.md)
  * **Move `DOCUMENT` import to `@angular/core`**
  * Moves the `DOCUMENT` import from older Angular modules to `@angular/core`.
* [org.openrewrite.angular.migration.remove-aot-summaries](/user-documentation/recipes/recipe-catalog/angular/migration/remove-aot-summaries.md)
  * **Remove `aotSummaries` from TestBed**
  * Removes the `aotSummaries` property from `TestBed.configureTestingModule()` and `TestBed.initTestEnvironment()` calls. The `aotSummaries` parameter was removed in Angular 14 as it was only needed for the View Engine compiler.
* [org.openrewrite.angular.migration.remove-browser-module-with-server-transition](/user-documentation/recipes/recipe-catalog/angular/migration/remove-browser-module-with-server-transition.md)
  * **Remove `BrowserModule.withServerTransition`**
  * Replaces `BrowserModule.withServerTransition(\{ appId: '...' \})` with `BrowserModule` and adds `\{ provide: APP_ID, useValue: '...' \}` to the NgModule providers. The `withServerTransition` method was removed in Angular 19.
* [org.openrewrite.angular.migration.remove-component-factory-resolver](/user-documentation/recipes/recipe-catalog/angular/migration/remove-component-factory-resolver.md)
  * **Remove `ComponentFactoryResolver`**
  * Replaces `resolver.resolveComponentFactory(Component)` with just `Component` and removes the `ComponentFactoryResolver` import. Since Ivy, `ViewContainerRef.createComponent` accepts the component class directly. `ComponentFactoryResolver` was deprecated in Angular 13 and removed in Angular 16.
* [org.openrewrite.angular.migration.remove-default-project](/user-documentation/recipes/recipe-catalog/angular/migration/remove-default-project.md)
  * **Remove `defaultProject` from `angular.json`**
  * Removes the deprecated `defaultProject` property from `angular.json`. The `defaultProject` option was deprecated in Angular 13 and the CLI infers the default project from the workspace.
* [org.openrewrite.angular.migration.remove-empty-ng-on-init](/user-documentation/recipes/recipe-catalog/angular/migration/remove-empty-ng-on-init.md)
  * **Remove empty `ngOnInit` lifecycle hooks**
  * Removes empty `ngOnInit` lifecycle hook methods and OnInit interface from Angular components.
* [org.openrewrite.angular.migration.remove-enable-ivy](/user-documentation/recipes/recipe-catalog/angular/migration/remove-enable-ivy.md)
  * **Remove `enableIvy` compiler option**
  * Removes the `enableIvy` option from `angularCompilerOptions` in `tsconfig.json`. Ivy is the only rendering engine since Angular 12, and the option was removed in Angular 15.
* [org.openrewrite.angular.migration.remove-entry-components](/user-documentation/recipes/recipe-catalog/angular/migration/remove-entry-components.md)
  * **Remove `entryComponents`**
  * Removes the `entryComponents` property from `@NgModule` and `@Component` decorators, and removes the `ANALYZE_FOR_ENTRY_COMPONENTS` import. These were removed in Angular 16 as they served no purpose since Ivy.
* [org.openrewrite.angular.migration.remove-es5-browser-support](/user-documentation/recipes/recipe-catalog/angular/migration/remove-es5-browser-support.md)
  * **Remove `es5BrowserSupport` from `angular.json`**
  * Removes the deprecated `es5BrowserSupport` option from `angular.json`. `es5BrowserSupport` was deprecated in Angular 7.3 and removed in Angular 10. Differential loading is now handled automatically by the Angular CLI based on the project's browserslist configuration.
* [org.openrewrite.angular.migration.remove-extract-css](/user-documentation/recipes/recipe-catalog/angular/migration/remove-extract-css.md)
  * **Remove `extractCss` from `angular.json`**
  * Removes the deprecated `extractCss` build option from `angular.json`. In Angular 11, CSS extraction became the default behavior for production builds and the option was deprecated.
* [org.openrewrite.angular.migration.remove-ie-polyfills](/user-documentation/recipes/recipe-catalog/angular/migration/remove-ie-polyfills.md)
  * **Remove IE11 polyfills**
  * Removes IE11-specific polyfill imports (`core-js`, `classlist.js`, `web-animations-js`) from `polyfills.ts` and `angular.json`. Angular 13 dropped IE11 support, making these polyfills unnecessary.
* [org.openrewrite.angular.migration.remove-module-id](/user-documentation/recipes/recipe-catalog/angular/migration/remove-module-id.md)
  * **Remove `moduleId`**
  * Removes the `moduleId` property from `@Component` and `@Directive` decorators. `moduleId` was deprecated in Angular 16 and removed in Angular 17 as it served no purpose since Ivy.
* [org.openrewrite.angular.migration.remove-relative-link-resolution](/user-documentation/recipes/recipe-catalog/angular/migration/remove-relative-link-resolution.md)
  * **Remove `relativeLinkResolution`**
  * Removes the `relativeLinkResolution` option from `RouterModule.forRoot()` calls. This option was deprecated in Angular 14 and removed in Angular 15.
* [org.openrewrite.angular.migration.remove-standalone-true](/user-documentation/recipes/recipe-catalog/angular/migration/remove-standalone-true.md)
  * **Remove redundant `standalone: true`**
  * Removes the `standalone: true` property from Angular component, directive, and pipe decorators since standalone is the default in Angular 19+.
* [org.openrewrite.angular.migration.remove-static-false](/user-documentation/recipes/recipe-catalog/angular/migration/remove-static-false.md)
  * **Remove `static: false` from view queries**
  * Removes `static: false` from `@ViewChild`, `@ContentChild`, `@ViewChildren`, and `@ContentChildren` decorators. In Angular 9 with Ivy, `static: false` became the default behavior, making the explicit option unnecessary.
* [org.openrewrite.angular.migration.remove-zone-js-polyfill](/user-documentation/recipes/recipe-catalog/angular/migration/remove-zone-js-polyfill.md)
  * **Remove zone.js polyfill from angular.json**
  * Removes zone.js entries from the `polyfills` array in `angular.json`. Angular 20 supports zoneless change detection via `provideZonelessChangeDetection()`, making the zone.js polyfill unnecessary.
* [org.openrewrite.angular.migration.rename-after-render](/user-documentation/recipes/recipe-catalog/angular/migration/rename-after-render.md)
  * **Rename `afterRender` to `afterEveryRender`**
  * Renames `afterRender` to `afterEveryRender` in imports and usages. The `afterRender` function was renamed to `afterEveryRender` in Angular 20, and Angular provides no migration schematic for this change.
* [org.openrewrite.angular.migration.rename-check-no-changes](/user-documentation/recipes/recipe-catalog/angular/migration/rename-check-no-changes.md)
  * **Rename `provideExperimentalCheckNoChangesForDebug` to `provideCheckNoChangesForDebug`**
  * Renames `provideExperimentalCheckNoChangesForDebug` to `provideCheckNoChangesForDebug` in imports and usages. The experimental API was promoted to developer preview in Angular 20.
* [org.openrewrite.angular.migration.rename-file](/user-documentation/recipes/recipe-catalog/angular/migration/rename-file.md)
  * **Rename file**
  * Renames files matching a glob pattern to a new file name, preserving the directory.
* [org.openrewrite.angular.migration.rename-pending-tasks](/user-documentation/recipes/recipe-catalog/angular/migration/rename-pending-tasks.md)
  * **Rename `ExperimentalPendingTasks` to `PendingTasks`**
  * Renames `ExperimentalPendingTasks` to `PendingTasks` in imports and usages. `ExperimentalPendingTasks` was renamed in Angular 19.
* [org.openrewrite.angular.migration.rename-zoneless-provider](/user-documentation/recipes/recipe-catalog/angular/migration/rename-zoneless-provider.md)
  * **Rename `provideExperimentalZonelessChangeDetection` to `provideZonelessChangeDetection`**
  * Renames `provideExperimentalZonelessChangeDetection` to `provideZonelessChangeDetection` in imports and usages. The experimental API was promoted to developer preview in Angular 20.
* [org.openrewrite.angular.migration.replace-async-with-wait-for-async](/user-documentation/recipes/recipe-catalog/angular/migration/replace-async-with-wait-for-async.md)
  * **Replace `async` with `waitForAsync`**
  * Replaces the removed `async` test helper from `@angular/core/testing` with `waitForAsync`. The `async` function was deprecated in Angular 11 and removed in Angular 18.
* [org.openrewrite.angular.migration.replace-deep-zone-js-imports](/user-documentation/recipes/recipe-catalog/angular/migration/replace-deep-zone-js-imports.md)
  * **Replace deep `zone.js` imports**
  * Replaces legacy deep imports from `zone.js` such as `zone.js/dist/zone` or `zone.js/bundles/zone-testing.js` with the standard `zone.js` or `zone.js/testing` imports, in both TypeScript files and `angular.json` polyfills. Deep imports are no longer allowed in Angular 17.
* [org.openrewrite.angular.migration.replace-http-client-module](/user-documentation/recipes/recipe-catalog/angular/migration/replace-http-client-module.md)
  * **Replace `HttpClientModule` with `provideHttpClient()`**
  * Replaces deprecated `HttpClientModule`, `HttpClientJsonpModule`, `HttpClientXsrfModule`, and `HttpClientTestingModule` with their functional equivalents: `provideHttpClient()` with feature functions and `provideHttpClientTesting()`.
* [org.openrewrite.angular.migration.replace-initial-navigation](/user-documentation/recipes/recipe-catalog/angular/migration/replace-initial-navigation.md)
  * **Replace `initialNavigation` option values**
  * Replaces deprecated `initialNavigation` router option values: `'legacy_enabled'` and `true` become `'enabledBlocking'`, `'legacy_disabled'` and `false` become `'disabled'`, and `'enabled'` becomes `'enabledNonBlocking'`. The legacy values were removed in Angular 11; `'enabled'` was renamed in Angular 14.
* [org.openrewrite.angular.migration.replace-inject-flags](/user-documentation/recipes/recipe-catalog/angular/migration/replace-inject-flags.md)
  * **Replace `InjectFlags` with options object**
  * Replaces deprecated `InjectFlags` enum usage in `inject()` calls with the corresponding options object. For example, `inject(MyService, InjectFlags.Optional)` becomes `inject(MyService, \{ optional: true \})`.
* [org.openrewrite.angular.migration.replace-load-children-string](/user-documentation/recipes/recipe-catalog/angular/migration/replace-load-children-string.md)
  * **Replace string-based `loadChildren` with dynamic `import()`**
  * Converts the deprecated string-based `loadChildren: 'path#Module'` syntax to dynamic imports: `loadChildren: () =&gt; import('path').then(m =&gt; m.Module)`.
* [org.openrewrite.angular.migration.replace-node-sass-with-sass](/user-documentation/recipes/recipe-catalog/angular/migration/replace-node-sass-with-sass.md)
  * **Replace `node-sass` with `sass`**
  * Replaces the deprecated `node-sass` package with `sass` (Dart Sass). Angular 12 requires Dart Sass; `node-sass` is no longer supported.
* [org.openrewrite.angular.migration.replace-router-link-with-href](/user-documentation/recipes/recipe-catalog/angular/migration/replace-router-link-with-href.md)
  * **Replace `RouterLinkWithHref` with `RouterLink`**
  * Replaces `RouterLinkWithHref` with `RouterLink` in imports and usages. `RouterLinkWithHref` was merged into `RouterLink` in Angular 16.
* [org.openrewrite.angular.migration.replace-testbed-get-with-inject](/user-documentation/recipes/recipe-catalog/angular/migration/replace-testbed-get-with-inject.md)
  * **Replace `TestBed.get()` with `TestBed.inject()`**
  * Replaces deprecated `TestBed.get()` calls with `TestBed.inject()`. `TestBed.get()` was deprecated in Angular 9 and removed in Angular 13.
* [org.openrewrite.angular.migration.replace-untyped-forms](/user-documentation/recipes/recipe-catalog/angular/migration/replace-untyped-forms.md)
  * **Replace form classes with untyped variants**
  * Renames `FormControl`, `FormGroup`, `FormArray`, and `FormBuilder` to their `Untyped*` equivalents in imports and usages. Angular 14 introduced strictly typed forms, requiring existing untyped usages to migrate to the `Untyped*` aliases. Classes used in parameterized type positions (e.g. `FormGroup&lt;T&gt;`) are left unchanged because the user already opted into typed forms.
* [org.openrewrite.angular.migration.replace-validator-with-validators](/user-documentation/recipes/recipe-catalog/angular/migration/replace-validator-with-validators.md)
  * **Replace `validator`/`asyncValidator` with plural forms**
  * Renames the deprecated singular `validator` and `asyncValidator` property names to `validators` and `asyncValidators` (plural). Angular 10 deprecated the singular forms in favor of `AbstractControlOptions`.
* [org.openrewrite.angular.migration.replace-view-encapsulation-native](/user-documentation/recipes/recipe-catalog/angular/migration/replace-view-encapsulation-native.md)
  * **Replace `ViewEncapsulation.Native` with `ViewEncapsulation.ShadowDom`**
  * Replaces `ViewEncapsulation.Native` with `ViewEncapsulation.ShadowDom`. `ViewEncapsulation.Native` was deprecated in Angular 6 and removed in Angular 11.
* [org.openrewrite.angular.migration.update-component-template-url](/user-documentation/recipes/recipe-catalog/angular/migration/update-component-template-url.md)
  * **Update component `templateUrl`**
  * Updates the `templateUrl` property value in Angular `@Component` decorators. Useful for refactoring template file paths or standardizing path conventions.
* [org.openrewrite.angular.migration.update-tsconfig-module](/user-documentation/recipes/recipe-catalog/angular/migration/update-tsconfig-module.md)
  * **Update `tsconfig.json` module settings for Ivy**
  * Updates `compilerOptions.module` to `esnext` and `compilerOptions.moduleResolution` to `node` in `tsconfig.json`. Angular 9's Ivy compiler requires ES module format. Already-current values like `es2020`, `node16`, `nodenext`, or `bundler` are left unchanged.
* [org.openrewrite.angular.migration.update-tsconfig-target](/user-documentation/recipes/recipe-catalog/angular/migration/update-tsconfig-target.md)
  * **Update `tsconfig.json` target to `es2017`**
  * Updates the `compilerOptions.target` in `tsconfig.json` from `es5`, `es2015`, or `es2016` to `es2017`. Angular 13 dropped IE11 support and requires at least ES2017.
* [org.openrewrite.angular.search.FindAngularComponent](/user-documentation/recipes/recipe-catalog/angular/search/findangularcomponent.md)
  * **Find Angular component**
  * Locates usages of Angular components across the codebase including template elements and other references. If `componentName` is `null`, finds all Angular components.
* [org.openrewrite.angular.search.find-analyze-for-entry-components-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-analyze-for-entry-components-usage.md)
  * **Find deprecated `ANALYZE_FOR_ENTRY_COMPONENTS` usage**
  * Finds usages of the deprecated `ANALYZE_FOR_ENTRY_COMPONENTS` injection token from `@angular/core`. `ANALYZE_FOR_ENTRY_COMPONENTS` was deprecated in Angular 9 and removed in Angular 13.
* [org.openrewrite.angular.search.find-angular-decorator](/user-documentation/recipes/recipe-catalog/angular/search/find-angular-decorator.md)
  * **Find Angular decorators**
  * Finds all Angular decorators like @Component, @Directive, @Injectable, etc.
* [org.openrewrite.angular.search.find-angular-http-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-angular-http-usage.md)
  * **Find removed `@angular/http` usage**
  * Finds imports from the `@angular/http` module, which was deprecated in Angular 5 and removed in Angular 8. Use `@angular/common/http` (`HttpClient`, `HttpClientModule`) instead.
* [org.openrewrite.angular.search.find-animation-driver-matches-element](/user-documentation/recipes/recipe-catalog/angular/search/find-animation-driver-matches-element.md)
  * **Find `AnimationDriver.matchesElement` usage**
  * Finds imports of `AnimationDriver` from `@angular/animations/browser`, which had its `matchesElement` method removed in Angular 18.
* [org.openrewrite.angular.search.find-async-test-helper-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-async-test-helper-usage.md)
  * **Find deprecated `async` test helper usage**
  * Finds usages of the deprecated `async` test helper from `@angular/core/testing`. The `async` function was deprecated in Angular 11 and should be replaced with `waitForAsync`.
* [org.openrewrite.angular.search.find-bare-module-with-providers](/user-documentation/recipes/recipe-catalog/angular/search/find-bare-module-with-providers.md)
  * **Find `ModuleWithProviders` without generic type**
  * Finds imports of `ModuleWithProviders` from `@angular/core`. Starting in Angular 10, `ModuleWithProviders` requires a generic type parameter (e.g. `ModuleWithProviders&lt;MyModule&gt;`). Ensure all usages specify the module type.
* [org.openrewrite.angular.search.find-browser-transfer-state-module-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-browser-transfer-state-module-usage.md)
  * **Find `BrowserTransferStateModule` usage**
  * Finds usages of `BrowserTransferStateModule` from `@angular/platform-browser` which was removed in Angular 16. `TransferState` can be used directly without this module.
* [org.openrewrite.angular.search.find-common-module-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-common-module-usage.md)
  * **Find `CommonModule` usage**
  * Finds imports of `CommonModule` from `@angular/common`. Since Angular 19, standalone components are the default and `CommonModule` is no longer needed in component `imports` arrays. Built-in directives and pipes are available automatically.
* [org.openrewrite.angular.search.find-compiler-factory-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-compiler-factory-usage.md)
  * **Find View Engine API usage**
  * Finds usages of View Engine APIs from `@angular/core` (`CompilerFactory`, `Compiler`, `CompilerOptions`, `ModuleWithComponentFactories`, `NgModuleFactory`, `NgModuleFactoryLoader`) which were deprecated in Angular 13.
* [org.openrewrite.angular.search.find-date-pipe-default-timezone-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-date-pipe-default-timezone-usage.md)
  * **Find `DATE_PIPE_DEFAULT_TIMEZONE` usage**
  * Finds usages of `DATE_PIPE_DEFAULT_TIMEZONE` which was deprecated in Angular 15. Use `DATE_PIPE_DEFAULT_OPTIONS` with a `\{timezone: '...'\}` object value instead.
* [org.openrewrite.angular.search.find-effect-timing-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-effect-timing-usage.md)
  * **Find `effect()` usage affected by Angular 19 timing changes**
  * Finds `effect()` calls from `@angular/core`. In Angular 19, effects triggered outside change detection now run as part of the change detection process instead of as a microtask, and effects triggered during change detection run earlier, before the component's template.
* [org.openrewrite.angular.search.find-empty-projectable-nodes](/user-documentation/recipes/recipe-catalog/angular/search/find-empty-projectable-nodes.md)
  * **Find `createComponent` calls with empty `projectableNodes`**
  * Finds `createComponent()` calls that pass empty arrays in `projectableNodes`. In Angular 19, passing an empty array now renders the default `ng-content` fallback content. To suppress fallback content, pass `[document.createTextNode('')]` instead.
* [org.openrewrite.angular.search.find-fake-async-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-fake-async-usage.md)
  * **Find zone.js-dependent test helper usage**
  * Finds `fakeAsync()`, `tick()`, and `waitForAsync()` calls from `@angular/core/testing`. These zone.js-dependent test helpers are incompatible with Vitest, the default test runner in Angular 21. Migrate to native async/await patterns instead.
* [org.openrewrite.angular.search.find-hammer-js-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-hammer-js-usage.md)
  * **Find HammerJS usage**
  * Finds `HammerModule` imports and HammerJS references. Angular has deprecated HammerJS support and it will be removed in Angular 21.
* [org.openrewrite.angular.search.find-i18n-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-i18n-usage.md)
  * **Find i18n usage**
  * Finds i18n usage indicators: legacy i18n configuration in `angular.json` (`i18nLocale`, `i18nFile`, `i18nFormat`, `i18nMissingTranslation`), `$localize` tagged template literals, and `@angular/localize` imports. Projects with these markers need `@angular/localize` installed and `import '@angular/localize/init'` in `polyfills.ts` for Angular 9+.
* [org.openrewrite.angular.search.find-karma-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-karma-usage.md)
  * **Find Karma test runner usage**
  * Finds Karma test runner configuration in package.json dependencies and angular.json test builder. Angular 21 replaces Karma with Vitest as the default test runner.
* [org.openrewrite.angular.search.find-load-children-string-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-load-children-string-usage.md)
  * **Find deprecated string-based `loadChildren` usage**
  * Finds usages of the deprecated string-based `loadChildren` syntax (e.g. `loadChildren: './path/to/module#ModuleName'`). String-based lazy loading was deprecated in Angular 8 and removed in Angular 11. Use dynamic imports instead: `loadChildren: () =&gt; import('./path/to/module').then(m =&gt; m.ModuleName)`.
* [org.openrewrite.angular.search.find-missing-injectable](/user-documentation/recipes/recipe-catalog/angular/search/find-missing-injectable.md)
  * **Find classes with DI dependencies but missing `@Injectable()`**
  * Finds classes that have constructor parameters (suggesting dependency injection) but lack an `@Injectable()` or other Angular class-level decorator. Angular 9 with Ivy requires an explicit `@Injectable()` decorator for all services that use dependency injection.
* [org.openrewrite.angular.search.find-ng-class-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-ng-class-usage.md)
  * **Find `NgClass` usage**
  * Finds imports of `NgClass` from `@angular/common`. The `ngClass` directive is soft deprecated in Angular 21 in favor of native `[class.*]` bindings.
* [org.openrewrite.angular.search.find-ng-style-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-ng-style-usage.md)
  * **Find `NgStyle` usage**
  * Finds imports of `NgStyle` from `@angular/common`. The `ngStyle` directive is soft deprecated in Angular 21 in favor of native `[style.*]` bindings.
* [org.openrewrite.angular.search.find-path-match-type-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-path-match-type-usage.md)
  * **Find `pathMatch` route properties that may need type narrowing**
  * Finds `pathMatch` property assignments in route configurations. In Angular 14, the `pathMatch` type was narrowed from `string` to `'full' | 'prefix'`. Routes defined as plain objects without explicit `Route` or `Routes` typing may fail type checking.
* [org.openrewrite.angular.search.find-platform-dynamic-server-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-platform-dynamic-server-usage.md)
  * **Find `platformDynamicServer` usage**
  * Finds usages of the removed `platformDynamicServer` API from `@angular/platform-server`. In Angular 18, replace with `platformServer` and add `import '@angular/compiler'`.
* [org.openrewrite.angular.search.find-platform-webworker-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-platform-webworker-usage.md)
  * **Find removed `@angular/platform-webworker` usage**
  * Finds imports from `@angular/platform-webworker` and `@angular/platform-webworker-dynamic`, which were removed in Angular 8 with no direct replacement.
* [org.openrewrite.angular.search.find-platform-worker-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-platform-worker-usage.md)
  * **Find `isPlatformWorkerUi` and `isPlatformWorkerApp` usage**
  * Finds usages of the removed `isPlatformWorkerUi` and `isPlatformWorkerApp` APIs from `@angular/common`. These were removed in Angular 18 with no replacement, as they served no purpose since the removal of the WebWorker platform.
* [org.openrewrite.angular.search.find-preserve-fragment-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-preserve-fragment-usage.md)
  * **Find deprecated `preserveFragment` usage**
  * Finds usages of the deprecated `preserveFragment` navigation option. `preserveFragment` was deprecated in Angular 4 and removed in Angular 11. Fragments are now preserved by default.
* [org.openrewrite.angular.search.find-preserve-query-params-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-preserve-query-params-usage.md)
  * **Find deprecated `preserveQueryParams` usage**
  * Finds usages of the deprecated `preserveQueryParams` navigation option. `preserveQueryParams` was deprecated in Angular 4 and removed in Angular 11. Use `queryParamsHandling: 'preserve'` instead.
* [org.openrewrite.angular.search.find-provided-in-deprecated-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-provided-in-deprecated-usage.md)
  * **Find deprecated `providedIn` values**
  * Finds usages of `providedIn: 'any'` and `providedIn: NgModule` in `@Injectable` and `InjectionToken` declarations. These were deprecated in Angular 15. Use `providedIn: 'root'` or add the service to `NgModule.providers` instead.
* [org.openrewrite.angular.search.find-reflective-injector-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-reflective-injector-usage.md)
  * **Find `ReflectiveInjector` usage**
  * Finds usages of `ReflectiveInjector` which was removed in Angular 16. Use `Injector.create` as a replacement.
* [org.openrewrite.angular.search.find-render-application-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-render-application-usage.md)
  * **Find `renderApplication` usage**
  * Finds usages of `renderApplication` from `@angular/platform-server`. In Angular 16 the signature changed: it no longer accepts a root component as the first argument. Use a bootstrapping function that returns `Promise&lt;ApplicationRef&gt;` instead.
* [org.openrewrite.angular.search.find-render-component-type-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-render-component-type-usage.md)
  * **Find deprecated `RenderComponentType` usage**
  * Finds imports of the deprecated `RenderComponentType` from `@angular/core`. `RenderComponentType` was part of the View Engine API, deprecated in Angular 4, and removed in Angular 9.
* [org.openrewrite.angular.search.find-render-module-factory-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-render-module-factory-usage.md)
  * **Find `renderModuleFactory` usage**
  * Finds usages of `renderModuleFactory` from `@angular/platform-server` which was removed in Angular 16. Use `renderModule` instead.
* [org.openrewrite.angular.search.find-renderer-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-renderer-usage.md)
  * **Find deprecated `Renderer` usage**
  * Finds imports of the deprecated `Renderer` from `@angular/core`. `Renderer` was deprecated in Angular 4 and removed in Angular 9. Users should use `Renderer2` instead.
* [org.openrewrite.angular.search.find-resource-cache-provider-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-resource-cache-provider-usage.md)
  * **Find `RESOURCE_CACHE_PROVIDER` usage**
  * Finds usages of the removed `RESOURCE_CACHE_PROVIDER` from `@angular/platform-browser-dynamic`. This unused API was removed in Angular 18.
* [org.openrewrite.angular.search.find-root-renderer-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-root-renderer-usage.md)
  * **Find deprecated `RootRenderer` usage**
  * Finds imports of the deprecated `RootRenderer` from `@angular/core`. `RootRenderer` was part of the View Engine API, deprecated in Angular 4, and removed in Angular 9. Use `RendererFactory2` instead.
* [org.openrewrite.angular.search.find-rxjs-compat-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-rxjs-compat-usage.md)
  * **Find RxJS 5-style imports requiring `rxjs-compat`**
  * Finds imports using RxJS 5-style deep import paths (e.g. `rxjs/Observable`, `rxjs/add/operator/map`) that require the `rxjs-compat` package. These should be migrated to RxJS 6+ import paths before removing `rxjs-compat`.
* [org.openrewrite.angular.search.find-server-transfer-state-module-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-server-transfer-state-module-usage.md)
  * **Find `ServerTransferStateModule` usage**
  * Finds usages of the removed `ServerTransferStateModule` from `@angular/platform-server`. In Angular 18, `TransferState` works without providing this module.
* [org.openrewrite.angular.search.find-setup-testing-router-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-setup-testing-router-usage.md)
  * **Find `setupTestingRouter` usage**
  * Finds usages of the removed `setupTestingRouter` function from `@angular/router/testing`. This function was removed in Angular 17. Use `RouterModule.forRoot` or `provideRouter` to set up the Router for tests instead.
* [org.openrewrite.angular.search.find-testability-pending-request-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-testability-pending-request-usage.md)
  * **Find removed Testability pending request methods**
  * Finds imports of `Testability` from `@angular/core`, which had `increasePendingRequestCount`, `decreasePendingRequestCount`, and `getPendingRequestCount` removed in Angular 18. These are now tracked with zones.
* [org.openrewrite.angular.search.find-undecorated-angular-class](/user-documentation/recipes/recipe-catalog/angular/search/find-undecorated-angular-class.md)
  * **Find undecorated classes with Angular features**
  * Finds classes that use Angular member decorators (`@Input`, `@Output`, `@ViewChild`, etc.) or implement lifecycle hooks (`ngOnInit`, `ngOnDestroy`, etc.) but lack a class-level Angular decorator. Angular 9 with Ivy requires all classes using Angular features to have an explicit decorator.
* [org.openrewrite.angular.search.find-with-no-dom-reuse-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-with-no-dom-reuse-usage.md)
  * **Find `withNoDomReuse` usage**
  * Finds usages of the removed `withNoDomReuse` function from `@angular/platform-browser`. This function was removed in Angular 17. To disable hydration, remove the `provideClientHydration()` call from your providers or use the `ngSkipHydration` attribute on specific components.
* [org.openrewrite.angular.search.find-wrapped-value-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-wrapped-value-usage.md)
  * **Find deprecated `WrappedValue` usage**
  * Finds usages of the deprecated `WrappedValue` from `@angular/core`. `WrappedValue` was deprecated in Angular 11 and removed in Angular 13.
* [org.openrewrite.angular.search.find-zone-js-usage](/user-documentation/recipes/recipe-catalog/angular/search/find-zone-js-usage.md)
  * **Find zone.js usage**
  * Finds zone.js imports and NgZone references. Angular 20 supports zoneless change detection via `provideZonelessChangeDetection()`, making zone.js optional.
* [org.openrewrite.primeng.AddPrimengProvider](/user-documentation/recipes/recipe-catalog/primeng/addprimengprovider.md)
  * **Add `providePrimeNG` with a detected theme preset to the root NgModule**
  * Wires the v18 styled mode into an NgModule-based app by adding `providePrimeNG(\{ theme: \{ preset: &lt;Preset&gt; \} \})` to the root `@NgModule`'s providers array (detected by the presence of a `bootstrap:` field). The preset is chosen by scanning `angular.json` for a `primeng/resources/themes/&lt;themeName&gt;/theme.css` entry: `lara-*` maps to Lara, `md-*`/`mdc-*` to Material, `nora`/`nano` to Nora, and any other v17 theme (mira, nova, saga, vela, soho, fluent, viva, rhea, tailwind, bootstrap4, arya, luna, ...) falls back to Aura. The matching imports for `providePrimeNG` and the chosen preset are added automatically. Also deletes the now-defunct `primeng/resources` style entries from `angular.json` so the build doesn't try to load missing files. Idempotent: skips files that already call `providePrimeNG`.
* [org.openrewrite.primeng.MarkDeprecatedPrimengComponents](/user-documentation/recipes/recipe-catalog/primeng/markdeprecatedprimengcomponents.md)
  * **Mark deprecated PrimeNG components with TODO comments**
  * For every TS file that imports a component / module deprecated in PrimeNG 18 (`TabMenu`, `Steps`, `InlineMessage`, `TabView`, `pDefer`), prepends a TODO comment to the import describing the recommended v18 replacement and writes a row to the `ManualMigrationSteps` data table. The import itself is left intact — these modules still exist in v18 but their replacements have different APIs that require manual migration.
* [org.openrewrite.primeng.MarkDeprecatedPrimengCssClasses](/user-documentation/recipes/recipe-catalog/primeng/markdeprecatedprimengcssclasses.md)
  * **Mark deprecated PrimeNG CSS classes with TODO comments**
  * For every HTML template that references a CSS class removed in PrimeNG 18 (`.p-link`, `.p-highlight`, `.p-fluid`), inserts a `&lt;!-- TODO: ... --&gt;` comment immediately before the offending element and writes a row to the `ManualMigrationSteps` data table. The class itself is left in place — the replacements are context-dependent (component-specific selectors, the new `fluid` input, etc.) and need a human or AI agent to apply.
* [org.openrewrite.primeng.MarkDrawerSize](/user-documentation/recipes/recipe-catalog/primeng/markdrawersize.md)
  * **Mark `&lt;p-drawer&gt;` / `&lt;p-sidebar&gt;` `size` usages with TODO comments**
  * Inserts an HTML `&lt;!-- TODO: ... --&gt;` comment before any `&lt;p-drawer&gt;` or `&lt;p-sidebar&gt;` element that binds the removed `size` input, and records the site in the `ManualMigrationSteps` data table. Both `[size]=&quot;...&quot;` and `size=&quot;...&quot;` attribute forms are matched. The attribute is left untouched — the v18 replacement (responsive CSS via `[style]` / `styleClass`) depends on the desired layout and needs manual review.
* [org.openrewrite.primeng.MarkRemovedPrimengModules](/user-documentation/recipes/recipe-catalog/primeng/markremovedprimengmodules.md)
  * **Mark imports of removed PrimeNG modules with TODO stubs**
  * For each `import` of a PrimeNG module that no longer exists in v18 (`primeng/chips`, `primeng/tristatecheckbox`, `primeng/messages`, `primeng/dataviewlayoutoptions`), replaces the broken import statement with a `const &lt;Name&gt;: any = null;` stub annotated by a TODO comment that describes the v18 replacement. Also strips the corresponding entries from `@NgModule` `imports`, `declarations`, and `exports` arrays since Angular's compiler rejects `null` values there. Each flagged site is also recorded in the `ManualMigrationSteps` data table so downstream tooling can enumerate the remaining work.
* [org.openrewrite.primeng.MigrateMessagesToMessageLoop](/user-documentation/recipes/recipe-catalog/primeng/migratemessagestomessageloop.md)
  * **Migrate `&lt;p-messages&gt;` to `&lt;p-message&gt;` with `@for` loop**
  * Rewrites `&lt;p-messages [value]=&quot;expr&quot;&gt;…&lt;/p-messages&gt;` to `@for (msg of expr; track msg) \{ &lt;p-message [severity]=&quot;msg.severity&quot; [text]=&quot;msg.detail&quot;&gt;&lt;/p-message&gt; \}`. The `Messages` component was removed in PrimeNG 18 in favor of looping over the new `Message` component. Each rewritten site is recorded in the `ManualMigrationSteps` data table for follow-up review.
* [org.openrewrite.primeng.MigratePFluidToWrapper](/user-documentation/recipes/recipe-catalog/primeng/migratepfluidtowrapper.md)
  * **Migrate `.p-fluid` to `&lt;p-fluid&gt;` wrapper**
  * Rewrites `&lt;div class=&quot;…p-fluid…&quot;&gt;…&lt;/div&gt;` to `&lt;p-fluid class=&quot;…&quot;&gt;…&lt;/p-fluid&gt;` and adds a `FluidModule` import from `primeng/fluid` to the corresponding component file. PrimeNG 18 removed the `.p-fluid` CSS class; the `&lt;p-fluid&gt;` wrapper component is its replacement.
* [org.openrewrite.primeng.MigratePrimeNGSignalAssignments](/user-documentation/recipes/recipe-catalog/primeng/migrateprimengsignalassignments.md)
  * **Migrate `PrimeNG` config field assignments to `.set()`**
  * In PrimeNG 18, fields on the `PrimeNG` config service like `ripple`, `inputStyle`, `inputVariant`, and `csp` are `WritableSignal&lt;T&gt;` rather than plain fields. Direct assignment (`service.ripple = true`) no longer compiles. This recipe rewrites such assignments to use the signal's `set()` method (`service.ripple.set(true)`) when the file imports `PrimeNG` from `primeng/config`.
* [org.openrewrite.primeng.MigratePrimeNgConfigToPrimeNG](/user-documentation/recipes/recipe-catalog/primeng/migrateprimengconfigtoprimeng.md)
  * **Migrate `PrimeNGConfig` to `PrimeNG`**
  * Renames the `PrimeNGConfig` import from `primeng/api` to `PrimeNG` from `primeng/config`, renames all identifier usages, and flags injection sites that should be migrated to `providePrimeNG()` in application providers.
* [org.openrewrite.primeng.RenameCalendarToDatePicker](/user-documentation/recipes/recipe-catalog/primeng/renamecalendartodatepicker.md)
  * **Rename `Calendar` to `DatePicker`**
  * Renames `Calendar` and `CalendarModule` imports from `primeng/calendar` to `DatePicker` and `DatePickerModule` from `primeng/datepicker`, and updates all identifier usages. The old names are deprecated in PrimeNG 18.
* [org.openrewrite.primeng.RenameDropdownToSelect](/user-documentation/recipes/recipe-catalog/primeng/renamedropdowntoselect.md)
  * **Rename `Dropdown` to `Select`**
  * Renames `Dropdown` and `DropdownModule` imports from `primeng/dropdown` to `Select` and `SelectModule` from `primeng/select`, and updates all identifier usages. The old names are deprecated in PrimeNG 18.
* [org.openrewrite.primeng.RenameInputSwitchToToggleSwitch](/user-documentation/recipes/recipe-catalog/primeng/renameinputswitchtotoggleswitch.md)
  * **Rename `InputSwitch` to `ToggleSwitch`**
  * Renames `InputSwitch` and `InputSwitchModule` imports from `primeng/inputswitch` to `ToggleSwitch` and `ToggleSwitchModule` from `primeng/toggleswitch`, and updates all identifier usages. The old names are deprecated in PrimeNG 18.
* [org.openrewrite.primeng.RenameMessageInterface](/user-documentation/recipes/recipe-catalog/primeng/renamemessageinterface.md)
  * **Rename `Message` interface to `ToastMessageOptions`**
  * Renames the `Message` interface import from `primeng/api` to `ToastMessageOptions` and updates all identifier usages. The `Message` interface was renamed in PrimeNG 18 due to name collision with the `Message` component.
* [org.openrewrite.primeng.RenameOverlayPanelToPopover](/user-documentation/recipes/recipe-catalog/primeng/renameoverlaypaneltopopover.md)
  * **Rename `OverlayPanel` to `Popover`**
  * Renames `OverlayPanel` and `OverlayPanelModule` imports from `primeng/overlaypanel` to `Popover` and `PopoverModule` from `primeng/popover`, and updates all identifier usages. The old names are deprecated in PrimeNG 18.
* [org.openrewrite.primeng.RenameSidebarToDrawer](/user-documentation/recipes/recipe-catalog/primeng/renamesidebartodrawer.md)
  * **Rename `Sidebar` to `Drawer`**
  * Renames `Sidebar` and `SidebarModule` imports from `primeng/sidebar` to `Drawer` and `DrawerModule` from `primeng/drawer`, and updates all identifier usages. The old names are deprecated in PrimeNG 18.
* [org.openrewrite.primeng.RenameTemplateSelectors](/user-documentation/recipes/recipe-catalog/primeng/renametemplateselectors.md)
  * **Rename PrimeNG selectors in HTML templates to their v18 equivalents**
  * Renames v17 PrimeNG component selectors in `.html` templates to their v18 names: `&lt;p-calendar&gt;` → `&lt;p-datepicker&gt;`, `&lt;p-dropdown&gt;` → `&lt;p-select&gt;`, `&lt;p-inputSwitch&gt;` → `&lt;p-toggleSwitch&gt;`, `&lt;p-overlayPanel&gt;` → `&lt;p-popover&gt;`, `&lt;p-sidebar&gt;` → `&lt;p-drawer&gt;`. Both opening and closing tags are rewritten.
* [org.openrewrite.primeng.UpgradeComponentsTo18](/user-documentation/recipes/recipe-catalog/primeng/upgradecomponentsto18.md)
  * **Upgrade PrimeNG components to 18**
  * Handles component renames, deprecations, and removals for PrimeNG 18. Renames Calendar to DatePicker, Dropdown to Select, InputSwitch to ToggleSwitch, OverlayPanel to Popover, and Sidebar to Drawer (TS imports + identifier usages + HTML selectors). Migrates the `Messages` template usage to the `&lt;p-message&gt;` + `@for` loop. Marks removed modules (Chips, TriStateCheckbox, Messages, DataViewLayoutOptions, pAnimate) with TODO stubs, marks deprecated components (TabMenu, Steps, InlineMessage, TabView, pDefer) with TODO comments on their imports, and marks deprecated CSS classes (`.p-link`, `.p-highlight`, `.p-fluid`) and `&lt;p-drawer&gt;`/`&lt;p-sidebar&gt;` `size` usages with HTML TODO comments. All marked sites are written to the `ManualMigrationSteps` data table.
* [org.openrewrite.primeng.UpgradeTo18](/user-documentation/recipes/recipe-catalog/primeng/upgradeto18.md)
  * **Upgrade to PrimeNG 18**
  * Migrates PrimeNG 17.x applications to PrimeNG 18. Renames components, migrates `PrimeNGConfig` to `PrimeNG` (with signal-backed setters), comments out the obsolete `primeng/resources` style entries in `angular.json`, wires `providePrimeNG(\{ theme: \{ preset: Aura \} \})` into the root NgModule and adds `@primeng/themes` to `package.json`. Anything that can't be deterministically migrated (removed-and-no-direct-replacement components, deprecated CSS classes, structural template changes) gets a TODO comment in source plus a row in the `ManualMigrationSteps` data table for an agent or human to finish.

## rewrite-cryptography

_License: Moderne Proprietary License_

_17 recipes_

* [io.moderne.cryptography.FindCryptoVulnerabilitiesPipeline](/user-documentation/recipes/recipe-catalog/cryptography/findcryptovulnerabilitiespipeline.md)
  * **Find cryptographic vulnerability chains**
  * Detects cryptographic vulnerabilities that span multiple operations, tracking flow from hardcoded algorithms through key material to encryption operations.
* [io.moderne.cryptography.FindDirectSSLConfigurationEditing](/user-documentation/recipes/recipe-catalog/cryptography/finddirectsslconfigurationediting.md)
  * **Find direct SSL configuration editing**
  * Detects direct configuration of protocols or cipher suites on SSL objects like SSLSocket, SSLServerSocket, or SSLEngine. This pattern makes SSL/TLS configuration scattered throughout the codebase and prevents centralized security policy management, hindering crypto-agility.
* [io.moderne.cryptography.FindHardcodedAlgorithmChoice](/user-documentation/recipes/recipe-catalog/cryptography/findhardcodedalgorithmchoice.md)
  * **Find hardcoded algorithm choices**
  * Detects hardcoded algorithm choices in cryptographic operations. Hardcoded algorithms prevent easy migration to stronger or quantum-resistant algorithms when needed. This is a critical crypto-agility issue that makes systems vulnerable to future attacks.
* [io.moderne.cryptography.FindHardcodedAlgorithmParameters](/user-documentation/recipes/recipe-catalog/cryptography/findhardcodedalgorithmparameters.md)
  * **Find hardcoded algorithm-specific parameters**
  * Detects hardcoded algorithm-specific parameters like RSA public exponents or EC curve parameters. These hardcoded values prevent algorithm agility and may use weak or non-standard parameters that compromise security.
* [io.moderne.cryptography.FindHardcodedCertificate](/user-documentation/recipes/recipe-catalog/cryptography/findhardcodedcertificate.md)
  * **Find hardcoded certificates**
  * Detects hardcoded certificates in the code, including certificates that are hardcoded as strings and used to generate X509Certificate instances via CertificateFactory. Hardcoded certificates can lead to security issues when they expire or need to be revoked.
* [io.moderne.cryptography.FindHardcodedCiphersuiteChoice](/user-documentation/recipes/recipe-catalog/cryptography/findhardcodedciphersuitechoice.md)
  * **Find hardcoded cipher suite choices**
  * Detects hardcoded cipher suite choices used in SSL/TLS configurations. Hardcoded cipher suites prevent easy updates when cipher suites become weak or need to be changed for compliance reasons.
* [io.moderne.cryptography.FindHardcodedKeyLength](/user-documentation/recipes/recipe-catalog/cryptography/findhardcodedkeylength.md)
  * **Find hardcoded cryptographic key lengths**
  * Detects hardcoded key lengths used in cryptographic operations like KeyGenerator.init(), KeyPairGenerator.initialize(), RSAKeyGenParameterSpec, and PBEKeySpec. Hardcoded key lengths reduce flexibility and may not meet changing security requirements.
* [io.moderne.cryptography.FindHardcodedPrivateKey](/user-documentation/recipes/recipe-catalog/cryptography/findhardcodedprivatekey.md)
  * **Find hardcoded private keys**
  * Detects hardcoded private keys in the code, including PEM-encoded keys that flow into KeyFactory.generatePrivate() calls. Hardcoded private keys are a severe security vulnerability as they compromise the entire cryptographic system.
* [io.moderne.cryptography.FindHardcodedProtocolChoice](/user-documentation/recipes/recipe-catalog/cryptography/findhardcodedprotocolchoice.md)
  * **Find hardcoded SSL/TLS protocol choices**
  * Detects hardcoded SSL/TLS protocol choices like 'TLSv1.2', 'SSLv3' used in SSLContext.getInstance() and setProtocols() calls. Hardcoded protocols prevent easy updates when protocols become obsolete or insecure.
* [io.moderne.cryptography.FindHardcodedProviderName](/user-documentation/recipes/recipe-catalog/cryptography/findhardcodedprovidername.md)
  * **Find hardcoded cryptographic provider names**
  * Detects hardcoded cryptographic provider names (like 'BC', 'SunJCE') used in getInstance() calls. Hardcoding provider names reduces portability and can cause issues when the provider is not available on different systems.
* [io.moderne.cryptography.FindProgrammaticProviderEditing](/user-documentation/recipes/recipe-catalog/cryptography/findprogrammaticproviderediting.md)
  * **Find programmatic security provider editing**
  * Detects programmatic modifications to the Java Security Provider list through Security.addProvider(), insertProviderAt(), or removeProvider() calls. Modifying providers at runtime makes the security configuration unpredictable and prevents crypto-agility by hardcoding provider dependencies.
* [io.moderne.cryptography.FindRSAKeyGenParameters](/user-documentation/recipes/recipe-catalog/cryptography/findrsakeygenparameters.md)
  * **Find RSA key generation parameters**
  * Finds RSAKeyGenParameterSpec instantiations and extracts their parameter values into a data table.
* [io.moderne.cryptography.FindSSLContextSetDefault](/user-documentation/recipes/recipe-catalog/cryptography/findsslcontextsetdefault.md)
  * **Find SSLContext.setDefault() usage**
  * Detects calls to SSLContext.setDefault() which sets the system-wide default SSL context. This is problematic because it affects all SSL/TLS connections in the JVM, potentially overriding security configurations set by other parts of the application or libraries. It also prevents crypto-agility as the configuration becomes global.
* [io.moderne.cryptography.FindSSLSocketParameters](/user-documentation/recipes/recipe-catalog/cryptography/findsslsocketparameters.md)
  * **Find SSL socket configuration parameters**
  * Finds SSLSocket setter method invocations and extracts their parameter values into a data table.
* [io.moderne.cryptography.FindSecurityModifications](/user-documentation/recipes/recipe-catalog/cryptography/findsecuritymodifications.md)
  * **Find Security class modifications**
  * Finds invocations of java.security.Security methods that modify security configuration such as removeProvider, addProvider, insertProviderAt, setProperty, and removeProperty.
* [io.moderne.cryptography.FindSecuritySetProperties](/user-documentation/recipes/recipe-catalog/cryptography/findsecuritysetproperties.md)
  * **Find `Security.setProperty(..)` calls for certain properties**
  * There is a defined set of properties that should not be set using `Security.setProperty(..)` as they can lead to security vulnerabilities.
* [io.moderne.cryptography.PostQuantumCryptography](/user-documentation/recipes/recipe-catalog/cryptography/postquantumcryptography.md)
  * **Post quantum cryptography**
  * This recipe searches for instances in code that may be impacted by post quantum cryptography. Applications may need to support larger key sizes, different algorithms, or use crypto agility to handle the migration. The recipe includes detection of hardcoded values that affect behavior in a post-quantum world, programmatic configuration that may prevent algorithm changes, and general cryptographic usage patterns that should be reviewed.

## rewrite-cve-2026-22732

_License: Moderne Proprietary License_

_3 recipes_

* [io.moderne.recipe.cve202622732.FindHttpResponseContentLengthHeader](/user-documentation/recipes/recipe-catalog/recipe/cve202622732/findhttpresponsecontentlengthheader.md)
  * **Find `Content-Length` header writes on `HttpServletResponse` (CVE-2026-22732)**
  * Detects `HttpServletResponse.setHeader`, `setIntHeader`, or `addIntHeader` calls whose first argument resolves (directly or via local variable) to the literal `Content-Length` (case-insensitive). These three overloads are NOT overridden by Spring Security's `OnCommittedResponseWrapper`, so `onResponseCommitted()` never fires and the lazy-added security headers (X-Frame-Options, X-Content-Type-Options, Cache-Control, etc.) are silently dropped — CVE-2026-22732. `addHeader` is intentionally excluded: the wrapper special-cases it. Also covers WebFlux `HttpHeaders.set` / `add` for `Content-Length`. In addition to marking Java sinks, attaches a \{@code SearchResult\} marker to every source file in the affected project so this recipe can be used as a declarative precondition for build-level recipes.
* [io.moderne.recipe.cve202622732.FindHttpResponseContentLengthOrFlushBuffer](/user-documentation/recipes/recipe-catalog/recipe/cve202622732/findhttpresponsecontentlengthorflushbuffer.md)
  * **Find unconditional WebFlux response commit calls (CVE-2026-22732)**
  * Detects WebFlux calls that commit a `ServerHttpResponse` outside the lazy header-writing path: `writeWith(..)`, `writeAndFlushWith(..)`, `setComplete()`, and `HttpHeaders.setContentLength(long)`. Under CVE-2026-22732 these patterns cause Spring Security's lazy-added security headers to be dropped. The sibling recipe `FindHttpResponseContentLengthHeader` covers the servlet `setHeader` / `setIntHeader` / `addIntHeader` case. In addition to marking Java sinks, attaches a \{@code SearchResult\} marker to every source file in the affected project so this recipe can be used as a declarative precondition for build-level recipes.
* [io.moderne.recipe.cve202622732.FindSpringSecurityHeaderSuppression](/user-documentation/recipes/recipe-catalog/recipe/cve202622732/findspringsecurityheadersuppression.md)
  * **Find CVE-2026-22732 (Spring Security header suppression)**
  * Detects code susceptible to CVE-2026-22732, where setting `Content-Length` via `HttpServletResponse.setHeader` / `setIntHeader` / `addIntHeader` (or the WebFlux equivalents) bypasses Spring Security's `OnCommittedResponseWrapper`, letting the container commit the response before the lazy header-writing filter runs and silently dropping security headers (X-Frame-Options, X-Content-Type-Options, Cache-Control, etc.). Also emits one data-table row per project recording the resolved Spring Security version.

## rewrite-devcenter

_License: Moderne Source Available License_

_36 recipes_

* [io.moderne.devcenter.AngularVersionUpgrade](/user-documentation/recipes/recipe-catalog/devcenter/angularversionupgrade.md)
  * **Move to a later Angular version**
  * Determine the current state of a repository relative to a desired Angular version upgrade.
* [io.moderne.devcenter.ApacheDevCenter](/user-documentation/recipes/recipe-catalog/devcenter/apachedevcenter.md)
  * **DevCenter for Apache**
  * A DevCenter that tracks the latest Apache Maven parent POM versions and applies best practices.
* [io.moderne.devcenter.ApacheMavenBestPractices](/user-documentation/recipes/recipe-catalog/devcenter/apachemavenbestpractices.md)
  * **Apache Maven best practices**
  * A collection of recipes that apply best practices to Maven POMs. Some of these recipes affect build stability, so they are reported as security issues in the DevCenter card.
* [io.moderne.devcenter.ApacheMavenDevCenter](/user-documentation/recipes/recipe-catalog/devcenter/apachemavendevcenter.md)
  * **DevCenter for Apache Maven**
  * A DevCenter that tracks the latest Apache Maven parent POM versions and applies best practices. This DevCenter includes recipes to upgrade the parent POMs of Apache Maven, as well as a collection of best practices for Maven POMs.
* [io.moderne.devcenter.BucketedMetricCard](/user-documentation/recipes/recipe-catalog/devcenter/bucketedmetriccard.md)
  * **DevCenter card from a data table column**
  * Read rows from a previously emitted data table, aggregate a numeric column across all rows for this repository, and bucket the result into ordinal DevCenter measures.
* [io.moderne.devcenter.BuildToolCard](/user-documentation/recipes/recipe-catalog/devcenter/buildtoolcard.md)
  * **Build tool**
  * Track build tool versions across repositories.
* [io.moderne.devcenter.BuildToolStarter](/user-documentation/recipes/recipe-catalog/devcenter/buildtoolstarter.md)
  * **DevCenter for Gradle and Maven**
  * Track and automate upgrades for Gradle, Maven, and Java versions.
* [io.moderne.devcenter.CSharpVersionUpgrade](/user-documentation/recipes/recipe-catalog/devcenter/csharpversionupgrade.md)
  * **Move to a later .NET version**
  * Determine the current state of a repository relative to a desired .NET version upgrade.
* [io.moderne.devcenter.ClassCohesionDevCenter](/user-documentation/recipes/recipe-catalog/devcenter/classcohesiondevcenter.md)
  * **Class cohesion DevCenter**
  * A DevCenter that finds class quality metrics for repositories and buckets the average LCOM4 (Lack of Cohesion of Methods, version 4) into HIGH / MEDIUM / LOW cohesion categories.
* [io.moderne.devcenter.DependencyVulnerabilityCheck](/user-documentation/recipes/recipe-catalog/devcenter/dependencyvulnerabilitycheck.md)
  * **Vulnerabilities status**
  * Determine the current state of a repository relative to its vulnerabilities.
* [io.moderne.devcenter.DevCenterAngularStarter](/user-documentation/recipes/recipe-catalog/devcenter/devcenterangularstarter.md)
  * **DevCenter for Angular**
  * A default DevCenter configuration for Angular repositories. Track Angular version adoption across your organization.
* [io.moderne.devcenter.DevCenterCSharpStarter](/user-documentation/recipes/recipe-catalog/devcenter/devcentercsharpstarter.md)
  * **DevCenter for C#**
  * A default DevCenter configuration for C# repositories. Track .NET version adoption across your organization.
* [io.moderne.devcenter.DevCenterKotlin](/user-documentation/recipes/recipe-catalog/devcenter/devcenterkotlin.md)
  * **DevCenter Kotlin**
  * This is a DevCenter helping you to track general Kotlin Modernisations.
* [io.moderne.devcenter.DevCenterNodeStarter](/user-documentation/recipes/recipe-catalog/devcenter/devcenternodestarter.md)
  * **DevCenter for Node.js**
  * A default DevCenter configuration for Node.js repositories. Track Node.js version adoption across your organization.
* [io.moderne.devcenter.DevCenterPythonStarter](/user-documentation/recipes/recipe-catalog/devcenter/devcenterpythonstarter.md)
  * **DevCenter for Python**
  * A default DevCenter configuration for Python repositories. Track Python version adoption across your organization.
* [io.moderne.devcenter.DevCenterStarter](/user-documentation/recipes/recipe-catalog/devcenter/devcenterstarter.md)
  * **DevCenter**
  * This is a default DevCenter configuration that can be used as a starting point for your own DevCenter configuration. It includes a combination of upgrades, migrations, and security fixes. You can customize this configuration to suit your needs. For more information on how to customize your DevCenter configuration, see the [DevCenter documentation](https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/recipe-based-devcenter-beta/).
* [io.moderne.devcenter.FindOrganizationStatistics](/user-documentation/recipes/recipe-catalog/devcenter/findorganizationstatistics.md)
  * **Find organization statistics**
  * Counts lines of code per repository for organization-level statistics.
* [io.moderne.devcenter.GroovyVersionUpgrade](/user-documentation/recipes/recipe-catalog/devcenter/groovyversionupgrade.md)
  * **Move to a later Groovy version**
  * Determine the current state of a repository relative to a desired Groovy version upgrade.
* [io.moderne.devcenter.JUnitJupiterUpgrade](/user-documentation/recipes/recipe-catalog/devcenter/junitjupiterupgrade.md)
  * **Move to JUnit 6**
  * Move to JUnit Jupiter.
* [io.moderne.devcenter.JavaVersionUpgrade](/user-documentation/recipes/recipe-catalog/devcenter/javaversionupgrade.md)
  * **Move to a later Java version**
  * Determine the current state of a repository relative to a desired Java version upgrade.
* [io.moderne.devcenter.KotlinVersionUpgrade](/user-documentation/recipes/recipe-catalog/devcenter/kotlinversionupgrade.md)
  * **Move to a later Kotlin version**
  * Determine the current state of a repository relative to a desired Kotlin version upgrade.
* [io.moderne.devcenter.LibraryUpgrade](/user-documentation/recipes/recipe-catalog/devcenter/libraryupgrade.md)
  * **Library upgrade**
  * Determine the current state of a repository relative to a desired library upgrade.
* [io.moderne.devcenter.NodeVersionUpgrade](/user-documentation/recipes/recipe-catalog/devcenter/nodeversionupgrade.md)
  * **Move to a later Node.js version**
  * Determine the current state of a repository relative to a desired Node.js version upgrade.
* [io.moderne.devcenter.ParentPomUpgrade](/user-documentation/recipes/recipe-catalog/devcenter/parentpomupgrade.md)
  * **Parent POM upgrade**
  * Determine the current state of a repository relative to a desired parent POM upgrade.
* [io.moderne.devcenter.PythonVersionUpgrade](/user-documentation/recipes/recipe-catalog/devcenter/pythonversionupgrade.md)
  * **Move to a later Python version**
  * Determine the current state of a repository relative to a desired Python version upgrade.
* [io.moderne.devcenter.QuarkusDevCenter](/user-documentation/recipes/recipe-catalog/devcenter/quarkusdevcenter.md)
  * **DevCenter for Quarkus**
  * A DevCenter that tracks the latest Quarkus framework versions and applies best practices. This DevCenter includes recipes to upgrade Quarkus versions, migrate from deprecated APIs, and ensure compatibility with the latest Java versions and testing frameworks.
* [io.moderne.devcenter.ReportAsSecurityIssues](/user-documentation/recipes/recipe-catalog/devcenter/reportassecurityissues.md)
  * **Report as security issues**
  * Look for results produced by recipes in the same recipe list that this recipe is part of, and report them as security issues in DevCenter.
* [io.moderne.devcenter.ScalaVersionUpgrade](/user-documentation/recipes/recipe-catalog/devcenter/scalaversionupgrade.md)
  * **Move to a later Scala version**
  * Determine the current state of a repository relative to a desired Scala version upgrade.
* [io.moderne.devcenter.SecurityStarter](/user-documentation/recipes/recipe-catalog/devcenter/securitystarter.md)
  * **OWASP top ten**
  * This recipe is a starter card to reveal common OWASP Top 10 issues in your source code. You can customize this configuration to suit your needs. For more information on how to customize your DevCenter configuration, see the [DevCenter documentation](https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/recipe-based-devcenter-beta/).
* [io.moderne.devcenter.UpgradeApacheParent](/user-documentation/recipes/recipe-catalog/devcenter/upgradeapacheparent.md)
  * **Upgrade Apache Parent POM**
  * Upgrades the Apache parent POM to the latest version.
* [io.moderne.devcenter.UpgradeMavenParent](/user-documentation/recipes/recipe-catalog/devcenter/upgrademavenparent.md)
  * **Upgrade Apache Maven Parent**
  * Upgrades the Apache Maven parent POM to the latest version.
* [io.moderne.devcenter.UpgradeMavenPluginsParent](/user-documentation/recipes/recipe-catalog/devcenter/upgrademavenpluginsparent.md)
  * **Upgrade Maven Plugins Parent**
  * Upgrades the Apache Maven parent POM to the latest version.
* [io.moderne.devcenter.UpgradeMavenSharedParent](/user-documentation/recipes/recipe-catalog/devcenter/upgrademavensharedparent.md)
  * **Upgrade Maven Shared Parent**
  * Upgrades the Apache Maven parent POM to the latest version.
* [io.moderne.devcenter.UpgradeQuarkus3_x](/user-documentation/recipes/recipe-catalog/devcenter/upgradequarkus3_x.md)
  * **Upgrade to Quarkus 3.26**
  * Upgrades Quarkus dependencies to version 3.26.x, including core, extensions, and tooling.
* [io.moderne.devcenter.UpgradeQuarkusUniverseBom](/user-documentation/recipes/recipe-catalog/devcenter/upgradequarkusuniversebom.md)
  * **Upgrade Quarkus Universe BOM**
  * Upgrades the Quarkus Universe BOM parent to the latest version.
* [io.moderne.devcenter.VulnerabilitiesDevCenter](/user-documentation/recipes/recipe-catalog/devcenter/vulnerabilitiesdevcenter.md)
  * **DevCenter for Vulnerability Management**
  * Recipes to analyze and manage dependency vulnerabilities using Moderne DevCenter.

## rewrite-dropwizard

_License: Moderne Proprietary License_

_26 recipes_

* [io.moderne.java.dropwizard.MigrateToDropwizard5](/user-documentation/recipes/recipe-catalog/java/dropwizard/migratetodropwizard5.md)
  * **Migrate to Dropwizard 5.0.x from 4.x**
  * Apply changes required to upgrade a Dropwizard 4.x application to 5.0.x. This includes upgrading dependencies, removing deprecated configuration options, and migrating Jetty handler implementations. Includes required migrations to Java 17, Jakarta EE 10, JUnit 5, Jackson 2.x, and Hibernate 6.6. See [the upgrade guide](https://www.dropwizard.io/en/stable/manual/upgrade-notes/upgrade-notes-5_0_x.html).
* [io.moderne.java.dropwizard.boot.MigrateApplicationRunMethod](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/migrateapplicationrunmethod.md)
  * **Migrate Dropwizard Application.run() to SpringApplication.run()**
  * Replaces the `new MyApp().run(args)` pattern in the main method with `SpringApplication.run(MyApp.class, args)`.
* [io.moderne.java.dropwizard.boot.MigrateDropwizardToSpringBoot3](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/migratedropwizardtospringboot3.md)
  * **Migrate Dropwizard to Spring Boot 3**
  * Migrate a Dropwizard application to Spring Boot 3. First applies the Dropwizard to Spring Boot 2.7 migration, then adds managed lifecycle and health check migrations on top.
* [io.moderne.java.dropwizard.boot.annotation.AddClassAnnotationIfAnnotationExists](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/annotation/addclassannotationifannotationexists.md)
  * **Add annotation if target annotation exists**
  * Adds an annotation to a class if it already has a specified target annotation.
* [io.moderne.java.dropwizard.boot.annotation.AddClassAnnotationIfSuperTypeExists](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/annotation/addclassannotationifsupertypeexists.md)
  * **Add annotation if target supertype exists**
  * Adds an annotation to a class if it extends or implements a specified target type.
* [io.moderne.java.dropwizard.boot.bundle.MigrateMultiPartBundle](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/bundle/migratemultipartbundle.md)
  * **Migrate Dropwizard `MultiPartBundle` to Spring multipart configuration**
  * Removes `bootstrap.addBundle(new MultiPartBundle())` and its import, and adds `spring.servlet.multipart` configuration (enabled, unlimited sizes) to the module's Spring configuration, creating `application.yml` if none exists. Spring Boot enables multipart support automatically. Only modules that actually registered `MultiPartBundle` are configured.
* [io.moderne.java.dropwizard.boot.datasource.RemoveDataSourceFactoryBuildChain](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/datasource/removedatasourcefactorybuildchain.md)
  * **Replace DataSourceFactory build chain with @Autowired DataSource**
  * Replaces `DataSourceFactory.build(MetricRegistry, String)` variable declarations with `@Autowired DataSource` fields. Spring Boot auto-configures the DataSource from `spring.datasource.*` properties. Note: connection pool metrics previously wired via `MetricRegistry` require `spring-boot-starter-actuator` for equivalent observability.
* [io.moderne.java.dropwizard.boot.datasource.RemoveLifecycleManageCalls](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/datasource/removelifecyclemanagecalls.md)
  * **Remove Dropwizard lifecycle.manage() calls**
  * Removes `environment.lifecycle().manage()` calls. Spring Boot manages bean lifecycle automatically through its IoC container.
* [io.moderne.java.dropwizard.boot.general.RemoveMethodsByPackage](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/general/removemethodsbypackage.md)
  * **Remove methods referencing specified package**
  * Removes any method that has a return type or parameter type from the specified package.
* [io.moderne.java.dropwizard.boot.general.RemoveVariablesByPackage](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/general/removevariablesbypackage.md)
  * **Remove class variables matching package filter**
  * Removes variable declarations whose type belongs to the specified package.
* [io.moderne.java.dropwizard.boot.health.MigrateHealthCheckMethod](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/health/migratehealthcheckmethod.md)
  * **Migrate Dropwizard health check Result calls and wrap exceptions**
  * Transforms `Result.healthy()`/`Result.unhealthy()` calls to `Health.up().build()`/`Health.down().build()` and wraps throwing `check()` methods in try-catch.
* [io.moderne.java.dropwizard.boot.jackson.ReplaceJacksonNewObjectMapper](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/jackson/replacejacksonnewobjectmapper.md)
  * **Replace `Jackson.newObjectMapper()` with `new ObjectMapper().findAndRegisterModules()`**
  * Replaces Dropwizard's `Jackson.newObjectMapper()` with `new ObjectMapper().findAndRegisterModules()`, which provides equivalent module auto-discovery using the standard Jackson SPI mechanism.
* [io.moderne.java.dropwizard.boot.lifecycle.MigrateManagedLifecycle](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/lifecycle/migratemanagedlifecycle.md)
  * **Add lifecycle annotations to Dropwizard Managed methods**
  * Adds `@PostConstruct` to `start()` and `@PreDestroy` to `stop()` on classes implementing `io.dropwizard.lifecycle.Managed`.
* [io.moderne.java.dropwizard.boot.method.ChangeSuperType](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/method/changesupertype.md)
  * **Change supertype**
  * Changes the supertype of a class, optionally converting from extends to implements.
* [io.moderne.java.dropwizard.boot.method.RemoveSuperTypeByType](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/method/removesupertypebytype.md)
  * **Remove supertype by fully qualified name**
  * Removes a specified type from class extends or implements clauses.
* [io.moderne.java.dropwizard.boot.method.RemoveUnnecessaryOverride](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/method/removeunnecessaryoverride.md)
  * **Remove unnecessary `@Override` annotations**
  * Removes `@Override` annotations from methods that don't actually override or implement any method. This helps maintain clean code by removing incorrect annotations that could be misleading.
* [io.moderne.java.dropwizard.boot.method.RemoveUnnecessarySuperCalls](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/method/removeunnecessarysupercalls.md)
  * **Remove `super` calls when the class does not extend another class**
  * Removes calls to `super(...)` or `super.someMethod(...)` if the class does not have a real superclass besides `java.lang.Object`.
* [io.moderne.java.dropwizard.boot.test.AddSpringBootTestForDropwizardAppExtension](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/test/addspringboottestfordropwizardappextension.md)
  * **Add `@SpringBootTest` to classes using `DropwizardAppExtension`**
  * Adds `@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)` to test classes that contain a `DropwizardAppExtension` field, when no Spring test annotation is already present.
* [io.moderne.java.dropwizard.boot.test.DropwizardRulesJUnit4ToSpringBoot](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/test/dropwizardrulesjunit4tospringboot.md)
  * **Replace Dropwizard rules with Spring Boot test configuration**
  * Remove Dropwizard JUnit4 rules and add Spring Boot test annotations and extensions.
* [io.moderne.java.dropwizard.boot.test.MethodLambdaExtractor](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/test/methodlambdaextractor.md)
  * **Inline lambda body from matched method invocations**
  * Extracts the body of lambda expressions passed to matched method invocations and inlines them into the surrounding code.
* [io.moderne.java.dropwizard.boot.test.MockitoVariableToMockBean](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/test/mockitovariabletomockbean.md)
  * **Convert Mockito mock() to @MockBean**
  * Converts static final Mockito mock fields to Spring Boot @MockBean fields.
* [io.moderne.java.dropwizard.boot.test.ReplaceDropwizardApplicationWithAutowired](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/test/replacedropwizardapplicationwithautowired.md)
  * **Replace `DropwizardAppExtension.getApplication()` with `@Autowired` application field**
  * Replaces calls to `DropwizardAppExtension.getApplication()` with a reference to a new `@Autowired &lt;AppType&gt; application` field on the enclosing class. The application type is extracted from the constructor's first argument (`new DropwizardAppExtension&lt;&gt;(TestApp.class, ...)`); skips the rewrite if not resolvable. The application class must be a top-level class.
* [io.moderne.java.dropwizard.boot.test.ReplaceDropwizardConfigurationWithAutowired](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/test/replacedropwizardconfigurationwithautowired.md)
  * **Replace `DropwizardAppExtension.getConfiguration()` with `@Autowired` configuration field**
  * Replaces calls to `DropwizardAppExtension.getConfiguration()` with a reference to a new `@Autowired &lt;ConfigType&gt; configuration` field on the enclosing class. The configuration type is extracted from `DropwizardAppExtension&lt;ConfigType&gt;` generic parameter; skips the rewrite if the type is raw, wildcard, or otherwise unresolvable. The configuration class must be a top-level class.
* [io.moderne.java.dropwizard.boot.test.ReplaceMethodInvocationWithAnnotatedField](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/test/replacemethodinvocationwithannotatedfield.md)
  * **Replace a method invocation with a reference to an annotated field**
  * For each class containing an invocation matching the configured method pattern, introduces an annotated field of the requested type and rewrites every matching invocation in that class to reference the new field. If a field with the same annotation and type already exists, its name is reused.
* [io.moderne.java.dropwizard.boot.test.TransformDropwizardRuleInvocations](/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/test/transformdropwizardruleinvocations.md)
  * **Convert Dropwizard test rule calls to RestTemplate**
  * Transforms Dropwizard AppRule and ResourceTestRule testing calls to their equivalent RestTemplate calls.
* [io.moderne.java.dropwizard.dw5.MigrateJettyHandlerSignature](/user-documentation/recipes/recipe-catalog/java/dropwizard/dw5/migratejettyhandlersignature.md)
  * **Migrate Jetty `AbstractHandler` to Jetty 12 `Handler.Abstract`**
  * Migrates custom Jetty handler implementations from Jetty 11's `AbstractHandler` (used in Dropwizard 4.x) to Jetty 12's `Handler.Abstract` (used in Dropwizard 5.x). This changes the `handle` method signature and updates `baseRequest.setHandled(true)` to use `Callback` and return `true`.

## rewrite-elastic

_License: Moderne Proprietary License_

_13 recipes_

* [io.moderne.elastic.elastic9.ChangeApiNumericFieldType](/user-documentation/recipes/recipe-catalog/elastic/elastic9/changeapinumericfieldtype.md)
  * **Change numeric field type with conversion**
  * Adds conversion methods with null checks for numeric type changes in Elasticsearch 9 API.
* [io.moderne.elastic.elastic9.ChangeApiNumericFieldTypes](/user-documentation/recipes/recipe-catalog/elastic/elastic9/changeapinumericfieldtypes.md)
  * **Change numeric field types for Elasticsearch 9**
  * Handles changes between different numeric types (`Long` to `Integer`, `int` to `Long`...) in Elasticsearch 9 API responses by adding appropriate conversion methods with null checks.
* [io.moderne.elastic.elastic9.MigrateDenseVectorElementType](/user-documentation/recipes/recipe-catalog/elastic/elastic9/migratedensevectorelementtype.md)
  * **Migrate DenseVectorProperty.elementType from String to DenseVectorElementType enum**
  * In Elasticsearch 9, `DenseVectorProperty.elementType()` returns `DenseVectorElementType` enum instead of `String`, and the builder method `elementType(String)` now accepts the enum type. This recipe handles both builder calls and getter calls.
* [io.moderne.elastic.elastic9.MigrateDenseVectorSimilarity](/user-documentation/recipes/recipe-catalog/elastic/elastic9/migratedensevectorsimilarity.md)
  * **Migrate DenseVectorProperty.similarity from String to DenseVectorSimilarity enum**
  * In Elasticsearch 9, `DenseVectorProperty.similarity()` returns `DenseVectorSimilarity` enum instead of `String`, and the builder method `similarity(String)` now accepts the enum type. This recipe handles both builder calls and getter calls.
* [io.moderne.elastic.elastic9.MigrateMatchedQueries](/user-documentation/recipes/recipe-catalog/elastic/elastic9/migratematchedqueries.md)
  * **Migrate `matchedQueries` from List to Map**
  * In Elasticsearch Java Client 9.0, `Hit.matchedQueries()` changed from returning `List&lt;String&gt;` to `Map&lt;String, Double&gt;`. This recipe migrates the usage by adding `.keySet()` for iterations and using `new ArrayList&lt;&gt;(result.keySet())` for assignments.
* [io.moderne.elastic.elastic9.MigrateScriptSource](/user-documentation/recipes/recipe-catalog/elastic/elastic9/migratescriptsource.md)
  * **Migrate script source from String to Script/ScriptSource**
  * Migrates `Script.source(String)` calls to use `ScriptSource.scriptString(String)` wrapper in Elasticsearch Java client 9.x.
* [io.moderne.elastic.elastic9.MigrateSpanTermQueryValue](/user-documentation/recipes/recipe-catalog/elastic/elastic9/migratespantermqueryvalue.md)
  * **Migrate `SpanTermQuery.value()` from String to FieldValue**
  * In Elasticsearch 9, `SpanTermQuery.value()` returns a `FieldValue` instead of `String`. This recipe updates calls to handle the new return type by checking if it's a string and extracting the string value.
* [io.moderne.elastic.elastic9.MigrateToElasticsearch9](/user-documentation/recipes/recipe-catalog/elastic/elastic9/migratetoelasticsearch9.md)
  * **Migrate from Elasticsearch 8 to 9**
  * This recipe performs a comprehensive migration from Elasticsearch 8 to Elasticsearch 9, addressing breaking changes, API removals, deprecations, and required code modifications. Migrates to the `co.elastic.clients:elasticsearch-rest5-client` transport (Apache HttpClient 5.x), which is Elastic's recommended path for the 9.x line. To retain the legacy Apache HttpClient 4.x transport, run `io.moderne.elastic.elastic9.MigrateToElasticsearch9LegacyTransport` instead.
* [io.moderne.elastic.elastic9.MigrateToElasticsearch9Core](/user-documentation/recipes/recipe-catalog/elastic/elastic9/migratetoelasticsearch9core.md)
  * **Migrate from Elasticsearch 8 to 9 (API renames, transport-agnostic)**
  * The transport-agnostic portion of the Elasticsearch 8 to 9 migration — API renames, field renames, numeric type changes, and removed-class comments. Used as a building block by `io.moderne.elastic.elastic9.MigrateToElasticsearch9` and `io.moderne.elastic.elastic9.MigrateToElasticsearch9LegacyTransport`.
* [io.moderne.elastic.elastic9.MigrateToElasticsearch9LegacyTransport](/user-documentation/recipes/recipe-catalog/elastic/elastic9/migratetoelasticsearch9legacytransport.md)
  * **Migrate from Elasticsearch 8 to 9 (legacy Apache HttpClient 4.x transport)**
  * Same API/type migrations as `io.moderne.elastic.elastic9.MigrateToElasticsearch9`, but keeps the legacy `org.elasticsearch.client:elasticsearch-rest-client` transport (Apache HttpClient 4.x). Use this only when you intentionally cannot adopt Apache HttpClient 5.x. Not safe to chain inside the Spring Boot 4 migration.
* [io.moderne.elastic.elastic9.RenameApiField](/user-documentation/recipes/recipe-catalog/elastic/elastic9/renameapifield.md)
  * **Rename `Elasticsearch valueBody()` methods**
  * In Elasticsearch Java Client 9.0, the generic `valueBody()` method and `valueBody(...)` builder methods have been replaced with specific getter and setter methods that better reflect the type of data being returned. Similarly, for `GetRepositoryResponse`, the `result` field also got altered to `repositories`.
* [io.moderne.elastic.elastic9.RenameApiFields](/user-documentation/recipes/recipe-catalog/elastic/elastic9/renameapifields.md)
  * **Rename API fields for Elasticsearch 9**
  * Renames various API response fields from `valueBody` to align with Elasticsearch 9 specifications.
* [io.moderne.elastic.elastic9.UseNamedValueParameters](/user-documentation/recipes/recipe-catalog/elastic/elastic9/usenamedvalueparameters.md)
  * **Use NamedValue parameters instead of Map**
  * Migrates `indicesBoost` and `dynamicTemplates` parameters from `Map` to `NamedValue` in Elasticsearch Java client 9.x.

## rewrite-hibernate

_License: Moderne Proprietary License_

_38 recipes_

* [io.moderne.hibernate.MigrateToHibernate40](/user-documentation/recipes/recipe-catalog/hibernate/migratetohibernate40.md)
  * **Migrate to Hibernate 4.0.x**
  * This recipe will apply changes commonly needed when migrating from Hibernate 3.x to 4.0.x, including migration of collection annotations to their JPA 2.0 equivalents.
* [io.moderne.hibernate.MigrateToHibernate60](/user-documentation/recipes/recipe-catalog/hibernate/migratetohibernate60-moderne-edition.md)
  * **Migrate to Hibernate 6.0.x (Moderne Edition)**
  * This recipe will apply changes commonly needed when migrating to Hibernate 6.0.x.
* [io.moderne.hibernate.MigrateToHibernate66](/user-documentation/recipes/recipe-catalog/hibernate/migratetohibernate66-moderne-edition.md)
  * **Migrate to Hibernate 6.6.x (Moderne Edition)**
  * This recipe will apply changes commonly needed when migrating to Hibernate 6.6.x.
* [io.moderne.hibernate.MigrateToHibernate70](/user-documentation/recipes/recipe-catalog/hibernate/migratetohibernate70-moderne-edition.md)
  * **Migrate to Hibernate 7.0.x (Moderne Edition)**
  * This recipe will apply changes commonly needed when migrating to Hibernate 7.0.x.
* [io.moderne.hibernate.MigrateToHibernate71](/user-documentation/recipes/recipe-catalog/hibernate/migratetohibernate71-moderne-edition.md)
  * **Migrate to Hibernate 7.1.x (Moderne Edition)**
  * This recipe will apply changes commonly needed when migrating to Hibernate 7.0.x.
* [io.moderne.hibernate.MigrateToHibernate72](/user-documentation/recipes/recipe-catalog/hibernate/migratetohibernate72.md)
  * **Migrate to Hibernate 7.2.x**
  * This recipe will apply changes commonly needed when migrating to Hibernate 7.2.x.
* [io.moderne.hibernate.search.FindJPQLDefinitions](/user-documentation/recipes/recipe-catalog/hibernate/search/findjpqldefinitions.md)
  * **Find JPQL definitions**
  * Find Java Persistence Query Language definitions in the codebase.
* [io.moderne.hibernate.update40.IndexHqlAnnotationPositionalParameters](/user-documentation/recipes/recipe-catalog/hibernate/update40/indexhqlannotationpositionalparameters.md)
  * **Index HQL/JPQL positional parameters in annotations**
  * Replaces unindexed `?` positional parameters with indexed `?1`, `?2`, etc. in an HQL/JPQL query string held in an annotation attribute matching the given pattern.
* [io.moderne.hibernate.update40.IndexHqlMethodPositionalParameters](/user-documentation/recipes/recipe-catalog/hibernate/update40/indexhqlmethodpositionalparameters.md)
  * **Index HQL/JPQL positional parameters in method calls**
  * Replaces unindexed `?` positional parameters with indexed `?1`, `?2`, etc. in an HQL/JPQL query string passed as the first argument of a method matching the given pattern.
* [io.moderne.hibernate.update40.MigrateJoinTableToCollectionTable](/user-documentation/recipes/recipe-catalog/hibernate/update40/migratejointabletocollectiontable.md)
  * **Migrate `@JoinTable` to `@CollectionTable` for element collections**
  * Replaces `@JoinTable` with `@CollectionTable` when used alongside `@CollectionOfElements` or `@ElementCollection`. `@CollectionTable` is the JPA 2.0 standard for defining the table that stores element collections. When `inverseJoinColumns` is present, its column name is preserved as a `@Column` annotation.
* [io.moderne.hibernate.update60.MigrateHibernateCriteriaToJpaCriteria](/user-documentation/recipes/recipe-catalog/hibernate/update60/migratehibernatecriteriatojpacriteria.md)
  * **Migrate Hibernate Criteria API to JPA Criteria API**
  * Migrates code using the legacy Hibernate Criteria API (org.hibernate.Criteria, org.hibernate.criterion.*) to the JPA Criteria API (jakarta.persistence.criteria.*). Handles common patterns including Restrictions (with and/or), Order, Projections, list(), and uniqueResult().
* [io.moderne.hibernate.update60.MigrateRemovedUuidTypes](/user-documentation/recipes/recipe-catalog/hibernate/update60/migrateremoveduuidtypes.md)
  * **Migrate removed Hibernate UUID `@Type` to `@JdbcTypeCode`**
  * Hibernate 6.x removed `UUIDCharType`, `UUIDBinaryType` and `PostgresUUIDType`. Replace `@Type` annotations referencing these with `@JdbcTypeCode` and the corresponding `SqlTypes` constant.
* [io.moderne.hibernate.update66.FixConflictingClassTypeAnnotations](/user-documentation/recipes/recipe-catalog/hibernate/update66/fixconflictingclasstypeannotations.md)
  * **Fix conflicting class type annotation Hibernate 6.6**
  * Since Hibernate 6.6 a mapped class can have *either* `@MappedSuperclass` or `@Embeddable`, or `@Entity`. This recipe removes `@Entity` from classes annotated with `@MappedSuperclass` or `@Embeddable`. For the moment die combination of `@MappedSuperclass` or `@Embeddable` is advised to migrate to [Single Table Inheritance](https://docs.jboss.org/hibernate/orm/6.6/userguide/html_single/Hibernate_User_Guide.html#entity-inheritance-single-table) but still accepted and therefore stays.
* [io.moderne.hibernate.update66.MigrateCascadeTypes](/user-documentation/recipes/recipe-catalog/hibernate/update66/migratecascadetypes.md)
  * **Migrate Hibernate CascadeType constants**
  * Moving away from deprecated Hibernate CascadeType constants. CascadeType.SAVE_UPDATE -&gt; CascadeType.PERSIST and/or CascadeType.MERGE, CascadeType.DELETE -&gt; CascadeType.REMOVE.
* [io.moderne.hibernate.update66.RemoveTableFromInheritedEntity](/user-documentation/recipes/recipe-catalog/hibernate/update66/removetablefrominheritedentity.md)
  * **Remove table from single table inherited entity**
  * For Single Table Inherited Entities Hibernate ignores the `@Table` annotation on child entities. From Version 6.6 it is considered an error.
* [io.moderne.hibernate.update70.AddCascadePersistToIdMappedAssociations](/user-documentation/recipes/recipe-catalog/hibernate/update70/addcascadepersisttoidmappedassociations.md)
  * **Migrate implicit cascade=PERSIST for @Id and @MapsId associations**
  * Hibernate used to automatically enable cascade=PERSIST for association fields annotated @Id or @MapsId. This was undocumented and unexpected behavior, and no longer supported in Hibernate 7. Existing code which relies on this behavior will be modified by addition of explicit cascade=PERSIST to the association fields.
* [io.moderne.hibernate.update70.CompositeUserTypeSessionFactoryImplementor](/user-documentation/recipes/recipe-catalog/hibernate/update70/compositeusertypesessionfactoryimplementor.md)
  * **Remove leaking of SessionFactoryImplementor from `org.hibernate.usertype.CompositeUserType` invocations and implementations**
  * Remove leaking of SessionFactoryImplementor from `org.hibernate.usertype.CompositeUserType` invocations and implementations.
* [io.moderne.hibernate.update70.FindNativeQueryRawEnumParameters](/user-documentation/recipes/recipe-catalog/hibernate/update70/findnativequeryrawenumparameters.md)
  * **Find native queries with enum parameters requiring SpEL conversion**
  * When using `@NativeQuery` or `@Query(nativeQuery = true)`, enum parameters are not automatically converted by JPA. This recipe finds native queries with raw enum bind parameters that need SpEL expressions like `:#\{#status.name()\}` or `:#\{#status.ordinal()\}` depending on how the enum is persisted.
* [io.moderne.hibernate.update70.MigrateConfigurableToGeneratorCreationContext](/user-documentation/recipes/recipe-catalog/hibernate/update70/migrateconfigurabletogeneratorcreationcontext.md)
  * **Migrate `Configurable.configure()` to use `GeneratorCreationContext`**
  * In Hibernate 7.0, `Configurable.configure()` now takes a `GeneratorCreationContext` parameter instead of `ServiceRegistry`. This recipe migrates method signatures and call sites.
* [io.moderne.hibernate.update70.MigrateIntegratorMethod](/user-documentation/recipes/recipe-catalog/hibernate/update70/migrateintegratormethod.md)
  * **Migrate Hibernate `Integrator#integrate` method**
  * Migrate Hibernate `Integrator#integrate` method from deprecated signature to Hibernate 7 compatible signature. Changes `integrate(Metadata, SessionFactoryImplementor, SessionFactoryServiceRegistry)` to `integrate(Metadata, BootstrapContext, SessionFactoryImplementor)`.
* [io.moderne.hibernate.update70.MigrateJdbcTypeToJdbcTypeCode](/user-documentation/recipes/recipe-catalog/hibernate/update70/migratejdbctypetojdbctypecode.md)
  * **Migrate `@JdbcType` and legacy `@Type` to `@JdbcTypeCode`**
  * In Hibernate 7.0, various JDBC types were moved to internal packages. Use `@JdbcTypeCode` with `SqlTypes` constants instead of `@JdbcType` with specific classes. Also rewrites `@Type(LegacyType.class)` references to deprecated Hibernate basic types (e.g. `MaterializedBlobType`, `ImageType`) into the equivalent `@JdbcTypeCode(SqlTypes.X)`.
* [io.moderne.hibernate.update70.MigrateJpqlTruncToDateCast](/user-documentation/recipes/recipe-catalog/hibernate/update70/migratejpqltrunctodatecast.md)
  * **Migrate JPQL `trunc()` to `cast(... as date)`**
  * Hibernate 7 maps the JPQL `trunc()` function to numeric truncation only (SQL standard). For date truncation, single-argument `trunc(expr)` must be replaced with `cast(expr as date)`.
* [io.moderne.hibernate.update70.MigrateLockOptionsToDirectParameters](/user-documentation/recipes/recipe-catalog/hibernate/update70/migratelockoptionstodirectparameters.md)
  * **Migrate LockOptions to direct parameters**
  * Migrates deprecated `LockOptions` usage to direct parameters in method calls. As of JPA 3.2 and Hibernate 7, `LockMode`, `Timeout`, and `PessimisticLockScope` are passed directly to `find()`, `refresh()`, and `lock()` methods instead of being wrapped in a `LockOptions` object.
* [io.moderne.hibernate.update70.MigrateMetamodelImplementor](/user-documentation/recipes/recipe-catalog/hibernate/update70/migratemetamodelimplementor.md)
  * **Migrate `MetamodelImplementor` to Hibernate 7.0**
  * In Hibernate 7.0, `MetamodelImplementor` has been split into `MappingMetamodel` for ORM-specific operations and `JpaMetamodel` for JPA-standard operations. This recipe migrates the usage based on which methods are called.
* [io.moderne.hibernate.update70.MigrateNaturalIdLoadAccess](/user-documentation/recipes/recipe-catalog/hibernate/update70/migratenaturalidloadaccess.md)
  * **Migrate NaturalIdLoadAccess method calls**
  * Migrates NaturalIdLoadAccess#using(Object...) to using(Map.of(...)) variants for Hibernate 7.0.
* [io.moderne.hibernate.update70.MigrateNaturalIdMultiLoadAccess](/user-documentation/recipes/recipe-catalog/hibernate/update70/migratenaturalidmultiloadaccess.md)
  * **Migrate NaturalIdMultiLoadAccess method calls**
  * Migrates NaturalIdMultiLoadAccess#compoundValue(Object...) to Map.of(...) variants for Hibernate 7.0.
* [io.moderne.hibernate.update70.MigrateQueryToNativeQuery](/user-documentation/recipes/recipe-catalog/hibernate/update70/migratequerytonativequery.md)
  * **Migrate @Query to @NativeQuery for unsupported JPQL**
  * Converts Spring Data `@Query` annotations to `@NativeQuery` when the JPQL query contains patterns unsupported by Hibernate 7's stricter JPQL parser, such as multi-argument `trunc(date, 'format')`.
* [io.moderne.hibernate.update70.MigrateSessionInterface](/user-documentation/recipes/recipe-catalog/hibernate/update70/migratesessioninterface.md)
  * **Migrate Session interface method calls**
  * Migrates code using deprecated Session interface methods to their Hibernate 7.0 replacements.
* [io.moderne.hibernate.update70.MigrateSessionToDeferToJPA](/user-documentation/recipes/recipe-catalog/hibernate/update70/migratesessiontodefertojpa.md)
  * **Migrate Session save/update/delete method calls**
  * Migrates code using deprecated Session load/get/refresh/save/update/delete methods to their Hibernate 7.0 replacements.
* [io.moderne.hibernate.update70.MigrateSetFlushModeToSetQueryFlushMode](/user-documentation/recipes/recipe-catalog/hibernate/update70/migratesetflushmodetosetqueryflushmode.md)
  * **Migrate `setFlushMode()` to `setQueryFlushMode()`**
  * In Hibernate 7.0, `CommonQueryContract.setFlushMode(FlushModeType)` has been replaced with `setQueryFlushMode(QueryFlushMode)`. This recipe migrates the method call and converts `FlushModeType` parameters to their `QueryFlushMode` equivalents.
* [io.moderne.hibernate.update70.MigrateToHibernate7JFR](/user-documentation/recipes/recipe-catalog/hibernate/update70/migratetohibernate7jfr.md)
  * **Migrate to Hibernate 7 JFR APIs**
  * Migrates deprecated JFR integration APIs to their Hibernate 7 replacements. `EventManager` becomes `EventMonitor` and `HibernateMonitoringEvent` becomes `DiagnosticEvent`.
* [io.moderne.hibernate.update70.MigrateToTargetEmbeddable](/user-documentation/recipes/recipe-catalog/hibernate/update70/migratetotargetembeddable.md)
  * **Migrate to @TargetEmbeddable**
  * Migrates code using removed @Target to to Hibernate 7.0's @TargetEmbeddable equivalent. Removes misused @Target annotations.
* [io.moderne.hibernate.update70.RemoveUnnecessaryCastToSession](/user-documentation/recipes/recipe-catalog/hibernate/update70/removeunnecessarycasttosession.md)
  * **Remove unnecessary cast to `Session` for `SessionFactory.createEntityManager()`**
  * In Hibernate 7.0, `SessionFactory.createEntityManager()` explicitly returns Session, making casts to Session unnecessary.
* [io.moderne.hibernate.update70.ReplaceHibernateWithJakartaAnnotations](/user-documentation/recipes/recipe-catalog/hibernate/update70/replacehibernatewithjakartaannotations.md)
  * **Replace hibernate annotations with Jakarta variants**
  * Tries to replaces annotations that have been removed in Hibernate 7.0 with its Jakarta equivalent, such as Table, @Where, @OrderBy, etc. If a annotation is used with arguments that do not have a direct replacement, the annotation is not replaced at all.
* [io.moderne.hibernate.update70.ReplaceSessionLockRequest](/user-documentation/recipes/recipe-catalog/hibernate/update70/replacesessionlockrequest.md)
  * **Replace Session.buildLockRequest with LockOptions**
  * Migrates Session.buildLockRequest(LockOptions.X) calls to use session.lock(entity, new LockOptions(LockMode.X)) in Hibernate 7.0.
* [io.moderne.hibernate.update70.UnboxingTransactionTimeout](/user-documentation/recipes/recipe-catalog/hibernate/update70/unboxingtransactiontimeout.md)
  * **Null safe Transaction#getTimeout()**
  * JPA 3.2 adds `#getTimeout` but uses `Integer` whereas Hibernate has historically used `int`. Note that this raises the possibility of a `NullPointerException` during migration if, e.g., performing direct comparisons on the timeout value against an in (auto unboxing). This recipe adds ternary operators where `Transaction#getTimeout()` is used and a negative value will be used if the `getTimeout()` resulted in a null value.
* [io.moderne.hibernate.update70.UserTypeNullSafeGetSharedSessionContractImplementorRecipe](/user-documentation/recipes/recipe-catalog/hibernate/update70/usertypenullsafegetsharedsessioncontractimplementorrecipe.md)
  * **Remove leaking of SharedSessionContractImplementor from `org.hibernate.usertype.UserType` invocations**
  * Remove leaking of SharedSessionContractImplementor from `org.hibernate.usertype.UserType` invocations.
* [io.moderne.hibernate.update70.UserTypeSharedSessionContractImplementor](/user-documentation/recipes/recipe-catalog/hibernate/update70/usertypesharedsessioncontractimplementor.md)
  * **Remove leaking of SharedSessionContractImplementor from `org.hibernate.usertype.UserType` implementations**
  * Remove leaking of SharedSessionContractImplementor from `org.hibernate.usertype.UserType` implementations.

## rewrite-jasperreports

_License: Moderne Proprietary License_

_6 recipes_

* [io.moderne.jasperreports.MigrateExporterConfigToJasper6](/user-documentation/recipes/recipe-catalog/jasperreports/migrateexporterconfigtojasper6.md)
  * **Update JasperReports exporter configuration**
  * Updates deprecated exporter parameter imports to the new configuration classes introduced in JasperReports 6. This includes migrating from parameter classes to configuration classes for PDF, HTML, CSV, and other exporters.
* [io.moderne.jasperreports.MigrateXlsToXlsxExporter](/user-documentation/recipes/recipe-catalog/jasperreports/migratexlstoxlsxexporter.md)
  * **Migrate JRXlsExporter to JRXlsxExporter**
  * Migrates the deprecated `JRXlsExporter` to the new `JRXlsxExporter` class in JasperReports 6. Also updates related configuration classes from XLS to XLSX variants.
* [io.moderne.jasperreports.UpgradeToJasperReports5](/user-documentation/recipes/recipe-catalog/jasperreports/upgradetojasperreports5.md)
  * **Migrate to JasperReports 5.6.x**
  * Migrates JasperReports from 4.6.0 to 5.6.x. This recipe includes minimal breaking changes, allowing teams to test and validate the migration before proceeding to version 6.
* [io.moderne.jasperreports.UpgradeToJasperReports6](/user-documentation/recipes/recipe-catalog/jasperreports/upgradetojasperreports6.md)
  * **Migrate to JasperReports 6**
  * Migrates JasperReports from 5.x to 6.x with the new exporter API, XLS to XLSX move, and removal of Spring JasperReports views.
* [io.moderne.jasperreports.v5.MigrateExporterSetParameter](/user-documentation/recipes/recipe-catalog/jasperreports/v5/migrateexportersetparameter.md)
  * **Migrate JasperReports exporter setParameter to new API**
  * Migrates deprecated `setParameter` calls on JasperReports exporters to the new API using `setExporterInput` and `setExporterOutput`.
* [io.moderne.jasperreports.v5.MigratePrintServiceExporterConfiguration](/user-documentation/recipes/recipe-catalog/jasperreports/v5/migrateprintserviceexporterconfiguration.md)
  * **Migrate JRPrintServiceExporterParameter to SimplePrintServiceExporterConfiguration**
  * Migrates `JRPrintServiceExporterParameter` setParameter calls to use `SimplePrintServiceExporterConfiguration`.

## rewrite-java-application-server

_License: Moderne Proprietary License_

_17 recipes_

* [io.moderne.java.server.jboss.ConfigureGradleApplicationPlugin](/user-documentation/recipes/recipe-catalog/java/server/jboss/configuregradleapplicationplugin.md)
  * **Configure Gradle `application` plugin main class**
  * Adds or updates `application \{ mainClass = '...' \}` in a Gradle build script. Supports both Groovy DSL (`build.gradle`) and Kotlin DSL (`build.gradle.kts`).
* [io.moderne.java.server.jboss.ConfigureGradleFatJar](/user-documentation/recipes/recipe-catalog/java/server/jboss/configuregradlefatjar.md)
  * **Configure Gradle `jar` task for fat JAR**
  * Configures the Gradle `jar` task to produce a self-contained fat JAR with all runtime dependencies bundled. Supports both Groovy DSL (`build.gradle`) and Kotlin DSL (`build.gradle.kts`).
* [io.moderne.java.server.jboss.ModuleHasJBossDescriptor](/user-documentation/recipes/recipe-catalog/java/server/jboss/modulehasjbossdescriptor.md)
  * **Module has JBoss descriptor**
  * Searches for modules containing JBoss descriptor files (`jboss-web.xml`, `jboss-deployment-structure.xml`). Places a `SearchResult` marker on all source files within a module with a JBoss descriptor. This recipe is intended to be used as a precondition for other recipes.
* [io.moderne.java.server.jboss.MoveWebXml](/user-documentation/recipes/recipe-catalog/java/server/jboss/movewebxml.md)
  * **Move `web.xml` to resources**
  * Moves `src/main/webapp/WEB-INF/web.xml` to `src/main/resources/web.xml`.
* [io.moderne.java.server.jboss.PlanJBossMigration](/user-documentation/recipes/recipe-catalog/java/server/jboss/planjbossmigration.md)
  * **Plan JBoss migration**
  * Analyzes the repository to plan a JBoss migration, identifying JBoss descriptor files (jboss-web.xml, jboss-deployment-structure.xml) and recording them in a data table.
* [io.moderne.java.server.jboss.jetty.CreateJettyEnvXml](/user-documentation/recipes/recipe-catalog/java/server/jboss/jetty/createjettyenvxml.md)
  * **Create Jetty environment XML**
  * Creates a `jetty-env.xml` file for projects containing JBoss descriptor files.
* [io.moderne.java.server.jboss.jetty.CreateJettyFilesInPath](/user-documentation/recipes/recipe-catalog/java/server/jboss/jetty/createjettyfilesinpath.md)
  * **Migrate JBoss to Jetty**
  * Comprehensive migration from JBoss to Jetty.
* [io.moderne.java.server.jboss.jetty.CreateJettySourceFile](/user-documentation/recipes/recipe-catalog/java/server/jboss/jetty/createjettysourcefile.md)
  * **Create Jetty server source file**
  * Creates a `JettyServer.java` source file for projects containing JBoss descriptor files.
* [io.moderne.java.server.jboss.jetty.MigrateJBossToJetty](/user-documentation/recipes/recipe-catalog/java/server/jboss/jetty/migratejbosstojetty.md)
  * **Migrate JBoss to Jetty**
  * Comprehensive migration from JBoss to Jetty.
* [io.moderne.java.server.jboss.jetty.devcenter.JBossToJettyMigrationCard](/user-documentation/recipes/recipe-catalog/java/server/jboss/jetty/devcenter/jbosstojettymigrationcard.md)
  * **JBoss to Jetty migration**
  * Measures the progress of migrating applications from JBoss to Jetty. Analyzes the presence of JBoss descriptor files (jboss-web.xml, jboss-deployment-structure.xml) and Jetty jetty-env.xml configuration files to determine migration state.
* [io.moderne.java.server.jboss.jetty.devcenter.JBossToJettyMigrationCard$Scanner](/user-documentation/recipes/recipe-catalog/java/server/jboss/jetty/devcenter/jbosstojettymigrationcard$scanner.md)
  * **JBoss to Jetty migration scanner**
  * Scans for JBoss and Jetty configuration files.
* [io.moderne.java.server.jboss.tomcat.CreateTomcatContextXml](/user-documentation/recipes/recipe-catalog/java/server/jboss/tomcat/createtomcatcontextxml.md)
  * **Create Tomcat context XML**
  * Creates a `context.xml` file for projects containing JBoss descriptor files.
* [io.moderne.java.server.jboss.tomcat.CreateTomcatFilesInPath](/user-documentation/recipes/recipe-catalog/java/server/jboss/tomcat/createtomcatfilesinpath.md)
  * **Migrate JBoss to Tomcat**
  * Comprehensive migration from JBoss to Tomcat.
* [io.moderne.java.server.jboss.tomcat.CreateTomcatSourceFile](/user-documentation/recipes/recipe-catalog/java/server/jboss/tomcat/createtomcatsourcefile.md)
  * **Create Tomcat server source file**
  * Creates a `TomcatServer.java` source file for projects containing JBoss descriptor files.
* [io.moderne.java.server.jboss.tomcat.MigrateJBossToTomcat](/user-documentation/recipes/recipe-catalog/java/server/jboss/tomcat/migratejbosstotomcat.md)
  * **Migrate JBoss to Tomcat**
  * Comprehensive migration from JBoss to embedded Tomcat.
* [io.moderne.java.server.jboss.tomcat.devcenter.JBossToTomcatMigrationCard](/user-documentation/recipes/recipe-catalog/java/server/jboss/tomcat/devcenter/jbosstotomcatmigrationcard.md)
  * **JBoss to Tomcat migration**
  * Measures the progress of migrating applications from JBoss to Tomcat. Analyzes the presence of JBoss descriptor files (jboss-web.xml, jboss-deployment-structure.xml) and Tomcat context.xml configuration files to determine migration state.
* [io.moderne.java.server.jboss.tomcat.devcenter.JBossToTomcatMigrationCard$Scanner](/user-documentation/recipes/recipe-catalog/java/server/jboss/tomcat/devcenter/jbosstotomcatmigrationcard$scanner.md)
  * **JBoss to Tomcat migration scanner**
  * Scans for JBoss and Tomcat configuration files.

## rewrite-kafka

_License: Moderne Proprietary License_

_32 recipes_

* [io.moderne.kafka.MigrateAdminListConsumerGroups](/user-documentation/recipes/recipe-catalog/kafka/migrateadminlistconsumergroups.md)
  * **Migrate `Admin.listConsumerGroups()` to `listGroups()`**
  * Migrates the deprecated `Admin.listConsumerGroups()` method to `listGroups()` and updates related types for Kafka 4.1 compatibility.
* [io.moderne.kafka.MigrateAlterConfigsToIncrementalAlterConfigs](/user-documentation/recipes/recipe-catalog/kafka/migratealterconfigstoincrementalalterconfigs.md)
  * **Migrate `AdminClient.alterConfigs()` to `incrementalAlterConfigs()`**
  * Migrates the removed `AdminClient.alterConfigs()` method to `incrementalAlterConfigs()` for Kafka 4.0 compatibility.
* [io.moderne.kafka.MigrateConsumerCommittedToSet](/user-documentation/recipes/recipe-catalog/kafka/migrateconsumercommittedtoset.md)
  * **Migrate `KafkaConsumer.committed(TopicPartition)` to `committed(Set&lt;TopicPartition&gt;)`**
  * Migrates from the removed `KafkaConsumer.committed(TopicPartition)` to `committed(Set&lt;TopicPartition&gt;)` for Kafka 4.0 compatibility. Converts single `TopicPartition` arguments to `Collections.singleton()` calls.
* [io.moderne.kafka.MigrateConsumerGroupStateToGroupState](/user-documentation/recipes/recipe-catalog/kafka/migrateconsumergroupstatetogroupstate.md)
  * **Migrate `ConsumerGroupState` to `GroupState`**
  * Migrates from the deprecated `ConsumerGroupState` to `GroupState` for Kafka 4.0 compatibility. `ConsumerGroupState` was deprecated in favor of `GroupState` which supports both consumer groups and share groups.
* [io.moderne.kafka.MigrateConsumerPollToDuration](/user-documentation/recipes/recipe-catalog/kafka/migrateconsumerpolltoduration.md)
  * **Migrate `KafkaConsumer.poll(long)` to `poll(Duration)`**
  * Migrates from the deprecated `KafkaConsumer.poll(long)` to `poll(Duration)` for Kafka 4.0 compatibility. Converts millisecond timeout values to `Duration.ofMillis()` calls.
* [io.moderne.kafka.MigrateSendOffsetsToTransaction](/user-documentation/recipes/recipe-catalog/kafka/migratesendoffsetstotransaction.md)
  * **Migrate deprecated `sendOffsetsToTransaction` to use `ConsumerGroupMetadata`**
  * Migrates from the deprecated `KafkaProducer.sendOffsetsToTransaction(Map, String)` to `sendOffsetsToTransaction(Map, ConsumerGroupMetadata)` for Kafka 4.0 compatibility. This recipe uses a conservative approach with `new ConsumerGroupMetadata(groupId)`.
* [io.moderne.kafka.MigrateToKafka23](/user-documentation/recipes/recipe-catalog/kafka/migratetokafka23.md)
  * **Migrate to Kafka 2.3**
  * Migrate applications to the latest Kafka 2.3 release.
* [io.moderne.kafka.MigrateToKafka24](/user-documentation/recipes/recipe-catalog/kafka/migratetokafka24.md)
  * **Migrate to Kafka 2.4**
  * Migrate applications to the latest Kafka 2.4 release.
* [io.moderne.kafka.MigrateToKafka25](/user-documentation/recipes/recipe-catalog/kafka/migratetokafka25.md)
  * **Migrate to Kafka 2.5**
  * Migrate applications to the latest Kafka 2.5 release.
* [io.moderne.kafka.MigrateToKafka26](/user-documentation/recipes/recipe-catalog/kafka/migratetokafka26.md)
  * **Migrate to Kafka 2.6**
  * Migrate applications to the latest Kafka 2.6 release.
* [io.moderne.kafka.MigrateToKafka27](/user-documentation/recipes/recipe-catalog/kafka/migratetokafka27.md)
  * **Migrate to Kafka 2.7**
  * Migrate applications to the latest Kafka 2.7 release.
* [io.moderne.kafka.MigrateToKafka28](/user-documentation/recipes/recipe-catalog/kafka/migratetokafka28.md)
  * **Migrate to Kafka 2.8**
  * Migrate applications to the latest Kafka 2.8 release.
* [io.moderne.kafka.MigrateToKafka30](/user-documentation/recipes/recipe-catalog/kafka/migratetokafka30.md)
  * **Migrate to Kafka 3.0**
  * Migrate applications to the latest Kafka 3.0 release.
* [io.moderne.kafka.MigrateToKafka31](/user-documentation/recipes/recipe-catalog/kafka/migratetokafka31.md)
  * **Migrate to Kafka 3.1**
  * Migrate applications to the latest Kafka 3.1 release.
* [io.moderne.kafka.MigrateToKafka32](/user-documentation/recipes/recipe-catalog/kafka/migratetokafka32.md)
  * **Migrate to Kafka 3.2**
  * Migrate applications to the latest Kafka 3.2 release.
* [io.moderne.kafka.MigrateToKafka33](/user-documentation/recipes/recipe-catalog/kafka/migratetokafka33.md)
  * **Migrate to Kafka 3.3**
  * Migrate applications to the latest Kafka 3.3 release.
* [io.moderne.kafka.MigrateToKafka40](/user-documentation/recipes/recipe-catalog/kafka/migratetokafka40.md)
  * **Migrate to Kafka 4.0**
  * Migrate applications to the latest Kafka 4.0 release. This includes updating dependencies to 4.0.x, ensuring Java 11+ for clients and Java 17+ for brokers/tools, and handling changes.
* [io.moderne.kafka.MigrateToKafka41](/user-documentation/recipes/recipe-catalog/kafka/migratetokafka41.md)
  * **Migrate to Kafka 4.1**
  * Migrate applications to the latest Kafka 4.1 release. This includes updating dependencies to 4.1.x, migrating deprecated Admin API methods, updating Streams configuration properties, and removing deprecated broker properties.
* [io.moderne.kafka.RemoveDeprecatedKafkaProperties](/user-documentation/recipes/recipe-catalog/kafka/removedeprecatedkafkaproperties.md)
  * **Remove deprecated Kafka property**
  * Removes a specific Kafka property that is no longer supported in Kafka 4.0.
* [io.moderne.kafka.UpgradeJavaForKafkaBroker](/user-documentation/recipes/recipe-catalog/kafka/upgradejavaforkafkabroker.md)
  * **Upgrade Java to 17+ for Kafka broker/tools**
  * Ensures Java 17 or higher is used when Kafka broker or tools dependencies are present.
* [io.moderne.kafka.UpgradeJavaForKafkaClients](/user-documentation/recipes/recipe-catalog/kafka/upgradejavaforkafkaclients.md)
  * **Upgrade Java to 11+ for Kafka clients**
  * Ensures Java 11 or higher is used when Kafka client libraries are present.
* [io.moderne.kafka.streams.MigrateJoinedNameMethod](/user-documentation/recipes/recipe-catalog/kafka/streams/migratejoinednamemethod.md)
  * **Migrate `Joined.named()` to `Joined.as()`**
  * In Kafka Streams 2.3, `Joined.named()` was deprecated in favor of `Joined.as()`. Additionally, the `name()` method was deprecated for removal and should not be used.
* [io.moderne.kafka.streams.MigrateKStreamToTable](/user-documentation/recipes/recipe-catalog/kafka/streams/migratekstreamtotable.md)
  * **Migrate KStream to KTable conversion to use `toTable()` method**
  * In Kafka Streams 2.5, a new `toTable()` method was added to simplify converting a KStream to a KTable. This recipe replaces the manual aggregation pattern `.groupByKey().reduce((oldVal, newVal) -&gt; newVal)` with the more concise `.toTable()` method.
* [io.moderne.kafka.streams.MigrateKafkaStreamsStoreMethod](/user-documentation/recipes/recipe-catalog/kafka/streams/migratekafkastreamsstoremethod.md)
  * **Migrate deprecated `KafkaStreams#store` method**
  * In Kafka Streams 2.5, the method `KafkaStreams#store(String storeName, QueryableStoreType&lt;T&gt; storeType)` was deprecated. It only allowed querying active stores and did not support any additional query options. Use the new `StoreQueryParameters` API instead.
* [io.moderne.kafka.streams.MigrateRetryConfiguration](/user-documentation/recipes/recipe-catalog/kafka/streams/migrateretryconfiguration.md)
  * **Migrate deprecated retry configuration to task timeout**
  * In Kafka 2.7, `RETRIES_CONFIG` and `RETRY_BACKOFF_MS_CONFIG` were deprecated in favor of `TASK_TIMEOUT_MS_CONFIG`. This recipe migrates the old retry configuration to the new task timeout configuration, attempting to preserve the retry budget by multiplying retries × backoff time. If only one config is present, it falls back to 60000ms (1 minute).
* [io.moderne.kafka.streams.MigrateStreamsUncaughtExceptionHandler](/user-documentation/recipes/recipe-catalog/kafka/streams/migratestreamsuncaughtexceptionhandler.md)
  * **Migrate to StreamsUncaughtExceptionHandler API**
  * Migrates from the JVM-level Thread.UncaughtExceptionHandler to Kafka Streams' StreamsUncaughtExceptionHandler API introduced in version 2.8. This new API provides explicit control over how the Streams client should respond to uncaught exceptions (REPLACE_THREAD, SHUTDOWN_CLIENT, or SHUTDOWN_APPLICATION).
* [io.moderne.kafka.streams.MigrateTaskAndThreadMetadata](/user-documentation/recipes/recipe-catalog/kafka/streams/migratetaskandthreadmetadata.md)
  * **Migrate TaskMetadata and ThreadMetadata**
  * Migrates TaskMetadata and ThreadMetadata from org.apache.kafka.streams.processor package to org.apache.kafka.streams package, and updates TaskMetadata.taskId() calls to include .toString() for String compatibility.
* [io.moderne.kafka.streams.MigrateTaskMetadataTaskId](/user-documentation/recipes/recipe-catalog/kafka/streams/migratetaskmetadatataskid.md)
  * **Migrate `TaskMetadata.taskId()` to return `TaskId`**
  * In Kafka Streams 3.0, `TaskMetadata.taskId()` changed its return type from `String` to `TaskId`. This recipe adds `.toString()` calls where necessary to maintain String compatibility.
* [io.moderne.kafka.streams.MigrateWindowStorePutMethod](/user-documentation/recipes/recipe-catalog/kafka/streams/migratewindowstoreputmethod.md)
  * **Migrate `WindowStore.put()` to include timestamp**
  * In Kafka Streams 2.4, `WindowStore.put()` requires a timestamp parameter. This recipe adds `context.timestamp()` as the third parameter.
* [io.moderne.kafka.streams.ProcessingGuaranteeExactlyOnceToBeta](/user-documentation/recipes/recipe-catalog/kafka/streams/processingguaranteeexactlyoncetobeta.md)
  * **Migrate `exactly_once` to `exactly_once_beta`**
  * Kafka Streams 2.6 introduces the exactly-once semantics v2, which is a more efficient implementation with improved internal handling. Though it is beta, it’s fully backward-compatible from the API standpoint, but internally it uses a different transaction/commit protocol. Starting from 3.0, it becomes the default &quot;exactly_once_v2&quot;.
* [io.moderne.kafka.streams.ProcessingGuaranteeExactlyOnceToV2](/user-documentation/recipes/recipe-catalog/kafka/streams/processingguaranteeexactlyoncetov2.md)
  * **Migrate `exactly_once` and `exactly_once_beta` to `exactly_once_v2`**
  * Kafka Streams 2.6 introduces the exactly-once semantics v2, which is a more efficient implementation with improved internal handling. Starting from 3.0, it becomes the default &quot;exactly_once_v2&quot;.
* [io.moderne.kafka.streams.RemovePartitionGrouperConfiguration](/user-documentation/recipes/recipe-catalog/kafka/streams/removepartitiongrouperconfiguration.md)
  * **Remove `PartitionGrouper` configuration**
  * Starting with Kafka Streams 2.4, the `PartitionGrouper` API was deprecated and partition grouping is now fully handled internally by the library. This recipe removes the deprecated `PARTITION_GROUPER_CLASS_CONFIG` configuration.

## rewrite-nullability

_License: Moderne Proprietary License_

_41 recipes_

* [io.moderne.nullability.AddMonotonicNonNullToLazilyInitializedField](/user-documentation/recipes/recipe-catalog/nullability/addmonotonicnonnulltolazilyinitializedfield.md)
  * **Add `@MonotonicNonNull` to a lazily-initialized field**
  * Annotates a lazily-initialized field with the Checker Framework `@org.checkerframework.checker.nullness.qual.MonotonicNonNull` annotation, the correct contract for a field that NullAway flags as not assigned in the constructor but that is set lazily and never reset to null (so `@Nullable` would needlessly force readers to handle null). A field qualifies when at least one assignment to it is guarded by a `f == null` check, it is never assigned null except in its declaration initializer, and it is not assigned non-null at its declaration or unconditionally in a constructor. Primitive, `final`, `static`, and already-annotated fields are skipped, and only Java fields are modified.
* [io.moderne.nullability.AddMonotonicNonNullToUninitializedField](/user-documentation/recipes/recipe-catalog/nullability/addmonotonicnonnulltouninitializedfield.md)
  * **Add `@MonotonicNonNull` to an uninitialized field**
  * Adds the Checker Framework `@MonotonicNonNull` to a non-primitive, non-`final` reference field inside a `@NullMarked` scope that has no nullability annotation, no initializer, no dependency-injection annotation, and is not definitely assigned by the end of construction (or is read before assignment) — the condition for NullAway's &quot;@NonNull field not initialized&quot; error. A field that is also assigned a literal `null` is genuinely nullable and gets JSpecify `@Nullable` instead. Java sources only; idempotent; only annotations are added.
* [io.moderne.nullability.AddNullMarkedToAllPackages](/user-documentation/recipes/recipe-catalog/nullability/addnullmarkedtoallpackages.md)
  * **Add `@NullMarked` to every package**
  * Brings a whole repository into JSpecify checked scope: generates a bare `package-info.java` for any package that has Java sources but lacks one, then adds the `@NullMarked` annotation to every `package-info.java` (existing or generated). Unconditional — intended to run first in the `NullSafety` recipe so the inference and repair recipes that follow treat the entire project as checked scope and fix whatever marking exposes. The default package, packages explicitly `@NullUnmarked`, and generated sources (a `/generated/` path or a `@Generated` class) are skipped. Idempotent and Java only.
* [io.moderne.nullability.AddNullMarkedToPackageInfo](/user-documentation/recipes/recipe-catalog/nullability/addnullmarkedtopackageinfo.md)
  * **Add `@NullMarked` to `package-info.java` for an allowlist of packages**
  * Adds the JSpecify `@NullMarked` annotation to the `package-info.java` of an explicit allowlist of packages. The allowlist supports exact package names and a trailing `.*` prefix wildcard; an empty allowlist is a no-op. When `generateMissing` is enabled, an allowlisted package that has Java sources but no `package-info.java` gets one generated. Idempotent and Java only.
* [io.moderne.nullability.AddNullableBoundToPassthroughTypeParameter](/user-documentation/recipes/recipe-catalog/nullability/addnullableboundtopassthroughtypeparameter.md)
  * **Add a `@Nullable` upper bound to a pass-through type parameter fed a null-returning lambda**
  * When a `null`-returning lambda is passed to a generic method whose single, unbounded type parameter is also its return type (a value pass-through such as `&lt;T&gt; T record(String, Supplier&lt;T&gt;)`), widen the declaration to `&lt;T extends @Nullable Object&gt;` so returning `null` through it is legal under JSpecify/NullAway. Relaxing the upper bound is sound; it never rejects previously-valid code. Only methods declared in the working set, with exactly one unbounded type parameter that is the return type, are changed.
* [io.moderne.nullability.AddNullableFromKotlinCallSites](/user-documentation/recipes/recipe-catalog/nullability/addnullablefromkotlincallsites.md)
  * **Add `@Nullable` to Java returns from Kotlin call sites**
  * Adds the JSpecify `@Nullable` annotation to the return type of **Java** methods based on how those methods are used in **Kotlin** code. A Java method returning a reference type appears to Kotlin as a platform type (`String!`) of unknown nullability; Kotlin call sites that treat the result as possibly null reveal the intended contract. This recipe scans Kotlin sources for such usage — a safe call (`call()?.x`), an elvis operand (`call() ?: fallback`), a not-null assertion (`call()!!`), or a comparison to `null` — and writes `@Nullable` onto the matching Java method declaration. Only Java sources are modified; Kotlin sources are read for evidence and left unchanged. Conservative by design: it skips primitive and `void` returns, methods that already carry a nullability annotation, and `@Override` methods.
* [io.moderne.nullability.AddNullableToArrayElementType](/user-documentation/recipes/recipe-catalog/nullability/addnullabletoarrayelementtype.md)
  * **Add `@Nullable` to array element types that can hold null**
  * Adds the JSpecify `@Nullable` annotation to the element type of a Java array whose elements are provably nullable, producing `@Nullable String[]` (the array's *elements* may be null) rather than `String @Nullable []` (the array *reference* may be null), which NullAway checks in JSpecify mode. An array declaration (field, local, parameter, or return type) is annotated when its initializer is an array literal containing a `null` element (`String[] a = \{null\}`) or when an element is assigned a provably-null value (`arr[i] = null`) — within the same method body for a local or parameter, or anywhere in the enclosing class for a field (so a field array nulled in a separate method is still detected). Conservative by design: it skips primitive-element arrays, arrays whose element type already carries a nullability annotation, and non-Java sources.
* [io.moderne.nullability.AddNullableToField](/user-documentation/recipes/recipe-catalog/nullability/addnullabletofield.md)
  * **Add `@Nullable` to fields that can hold null**
  * Adds the JSpecify `@Nullable` annotation to a Java field when that field is provably assigned a nullable value anywhere in the project: a declaration initializer or an assignment (`f = expr`, `this.f = expr`, or `obj.f = expr`) whose value is the `null` literal (directly, through a cast or parentheses, or via either branch of a ternary) or a call to a nullable-returning method. Nullability propagates from every assignment site to the field's declaration across the project, preparing the code for NullAway. Conservative by design: it skips primitive fields, `final` fields with a non-null initializer, record components, fields already annotated, and fields with a dependency-injection annotation (`@Inject`, `@Autowired`, `@Resource`, `@Mock`, `@Value`, `@Bean`). Only Java fields are modified.
* [io.moderne.nullability.AddNullableToFunctionalReturnArgument](/user-documentation/recipes/recipe-catalog/nullability/addnullabletofunctionalreturnargument.md)
  * **Add `@Nullable` to a functional-interface return type argument fed a null-returning lambda**
  * When a `null`-returning lambda is passed for a functional-interface parameter (such as `Function&lt;R, T&gt;`) of a method that consumes the produced value in a null-tolerant way, annotates that interface's return type argument `@Nullable` (`Function&lt;R, @Nullable T&gt;`) so returning `null` through the callback is legal under JSpecify/NullAway. This is distinct from widening a pass-through type-parameter bound (handled separately); a de-overlap guard keeps the two from both firing. Only parameters of recognized functional interfaces, on methods declared in the working set, are changed; already-`@Nullable` and wildcard/raw arguments are left untouched.
* [io.moderne.nullability.AddNullableToMismatchedTypeArgument](/user-documentation/recipes/recipe-catalog/nullability/addnullabletomismatchedtypeargument.md)
  * **Add `@Nullable` to a mismatched generic type argument**
  * Adds `@Nullable` to a nested generic type argument when a variable initializer or `return` has a wider nested element nullness than its target (such as a `List&lt;@Nullable String&gt;` assigned into a `List&lt;String&gt;`) by adding `@Nullable` to the target's nested type argument. A generic container is invariant in its element nullness, so the mismatch is a NullAway error. Gated on JSpecify `@NullMarked` scope and applied only where the fix is local to a declaration this recipe owns (a variable initializer or a method return type); raw types, unresolved bases, arity mismatches, and the diamond `new B&lt;&gt;()` target are left unchanged. Idempotent.
* [io.moderne.nullability.AddNullableToNullAssignedField](/user-documentation/recipes/recipe-catalog/nullability/addnullabletonullassignedfield.md)
  * **Add `@Nullable` to a field assigned a nullable value**
  * Adds a JSpecify `@Nullable` to a `@NonNull` reference field that is assigned a provably-nullable value, which would otherwise trigger NullAway's &quot;assigning @Nullable expression to @NonNull field&quot; error inside a `@NullMarked` scope. A value is provably nullable when it is the `null` literal, a call to a nullable-returning method, or a reference to a `@Nullable` variable or field. Only fires where NullAway is active; idempotent, and leaves a field unchanged when it cannot be resolved. Java sources only.
* [io.moderne.nullability.AddNullableToNullReturningMethod](/user-documentation/recipes/recipe-catalog/nullability/addnullabletonullreturningmethod.md)
  * **Add `@Nullable` to a method that can return null**
  * Adds JSpecify `@Nullable` to a method or lambda whose effective return type is non-null but that returns a provably-nullable value, a NullAway error inside a `@NullMarked` scope. A regular method has its return type widened to JSpecify `@Nullable` in the type-use position; when the non-null return contract cannot be widened (an override of a non-null supertype return, or a lambda whose functional-interface return is non-null) the returned expression is wrapped in `java.util.Objects.requireNonNull(...)` instead, leaving runtime behavior unchanged. Nullability is determined from type attribution, and an unconditional `return null` is left for a human. The recipe is idempotent and conservative; only Java sources are modified.
* [io.moderne.nullability.AddNullableToParameterCrossFile](/user-documentation/recipes/recipe-catalog/nullability/addnullabletoparametercrossfile.md)
  * **Add `@Nullable` to method parameters that can receive null**
  * Adds the JSpecify `@Nullable` annotation to a Java method parameter when some call site anywhere in the project provably passes a nullable argument in that position: the `null` literal (directly, through a cast or parentheses, or via either branch of a ternary), or a call to a method whose return is itself nullable. Conservative by design: it skips primitive parameters, parameters that already carry a nullability annotation, varargs parameters, and `@Override` methods (where widening a parameter would break override consistency). Only Java parameters are modified.
* [io.moderne.nullability.AddNullableToReturnType](/user-documentation/recipes/recipe-catalog/nullability/addnullabletoreturntype.md)
  * **Add `@Nullable` to methods that can return null**
  * Adds the JSpecify `@Nullable` annotation to the return type of Java methods whose body returns a provably-nullable value: an explicit `return null` (directly, through a cast or parentheses, or via either branch of a ternary), or a call to a method whose return is itself nullable. Conservative by design: it skips primitive and `void` returns, methods that already carry a nullability annotation, and `@Override` methods (where annotating the return could violate the supertype contract). Only Java return types are modified.
* [io.moderne.nullability.AddNullableToTypeArgument](/user-documentation/recipes/recipe-catalog/nullability/addnullabletotypeargument.md)
  * **Add `@Nullable` to collection and map type arguments that hold null elements**
  * Places the JSpecify `@Nullable` annotation on a collection or map type argument when its elements or values are provably nullable, producing `List&lt;@Nullable String&gt;` or `Map&lt;String, @Nullable String&gt;` (the list may hold `null` elements) rather than `@Nullable List&lt;String&gt;` (the list reference may be `null`), which NullAway enforces in JSpecify mode. A type argument is annotated when `Collection.add(...)` is called with a provably-null element, `Map.put(...)` with a provably-null value, or the declaration's initializer is a `List.of(...)`/`Set.of(...)`/`Arrays.asList(...)` containing a `null`. The receiver is resolved to its declaration within the same compilation unit (cross-file declarations are not handled). Conservative by design: it skips wildcard and raw type arguments and ones already `@Nullable`.
* [io.moderne.nullability.AddNullnessContractToValidationHelper](/user-documentation/recipes/recipe-catalog/nullability/addnullnesscontracttovalidationhelper.md)
  * **Add a `@Contract` nullness contract to a validation helper**
  * Adds an `org.jetbrains.annotations.@Contract` annotation to a single-`@Nullable`-parameter helper method whose body provably encodes a nullness contract, so the checker can narrow at every call site without any runtime assertion. Three canonical body shapes are recognized: a `boolean`-returning method whose body is `return arg != null &amp;&amp; ...;` (the argument's non-nullity is a required conjunct) becomes `@Contract(&quot;null -&gt; false&quot;)`; a method that unconditionally throws — or delegates to `requireNonNull` / `checkNotNull` — when the argument is `null` becomes `@Contract(&quot;null -&gt; fail&quot;)`; and an identity pass-through that returns the argument unchanged becomes `@Contract(&quot;null -&gt; null&quot;)`. Only methods with exactly one parameter, a simple recognizable body, and no existing `@Contract` are annotated. The edit is annotation-only and behavior-preserving — runtime semantics are unchanged. Idempotent and conservative; only Java sources are modified.
* [io.moderne.nullability.AlignOverrideNullabilityWithSupertype](/user-documentation/recipes/recipe-catalog/nullability/alignoverridenullabilitywithsupertype.md)
  * **Align override nullability with the supertype**
  * Aligns a method or lambda parameter whose declared nullability is inconsistent with the supertype member it overrides, a contract violation under [NullAway](https://github.com/uber/NullAway). An override that restricts a `@Nullable` supertype parameter to non-null has JSpecify `@Nullable` added to that parameter (parameters are contravariant); an override that widens a non-null supertype return to `@Nullable` has the erroneous `@Nullable` removed from its return type and its `@Nullable` returns wrapped in `java.util.Objects.requireNonNull(...)` (return types are covariant), which leaves runtime behavior unchanged. Conservative: a supertype's annotations are trusted only when the supertype is itself in an annotated scope, a `return null` and a null-guarded return are never wrapped, and nothing is changed when a participating type cannot be resolved. Idempotent; Java sources only.
* [io.moderne.nullability.AnnotateThriftGetterNullability](/user-documentation/recipes/recipe-catalog/nullability/annotatethriftgetternullability.md)
  * **Add `@Nullable` to generated Thrift getters of `optional` fields**
  * Annotates the generated-Java getter of a Thrift `optional` field with the JSpecify `@Nullable` annotation, reading the field's requiredness from the `.thrift` IDL (which appears as a plain-text source). In an Apache-Thrift-generated struct only an `optional` field may be left unset, so only its getter (`getFoo()`, or `isFoo()` for a `bool`) can return `null`; a `required` field, the Airbnb `non_null` extension, and an unqualified default field are populated and left untouched. A scanning pass parses each `.thrift` for `struct`/`union`/`exception` blocks and their `optional` fields; the edit pass annotates the matching getter on the generated Java class whose simple name equals the struct name and which implements `org.apache.thrift.TBase`. Adding `@Nullable` only states the contract the IDL already declares, so behavior is unchanged. Conservative by design: a getter is annotated only when its owning class is a recognized Thrift struct, its name matches an `optional` field, and it is not already nullable. Gated off the `NullSafety` apex (generated source); only Java sources are modified, and re-running after regeneration converges.
* [io.moderne.nullability.CollapseOptionalPresentGuardToGet](/user-documentation/recipes/recipe-catalog/nullability/collapseoptionalpresentguardtoget.md)
  * **Route a guarded raw accessor through its present `Optional`**
  * Inside the then-branch of an `if (xOpt().isPresent()) \{ ... \}` guard, rewrites a sibling raw nullable accessor `getX()` to `xOpt().get()`, so the checker flows non-null through the `Optional` instead of needing a `requireNonNull`. NullAway flags the bare `getX()` dereference because the accessor is `@Nullable`, but the enclosing `isPresent()` guard already proves the corresponding `Optional` is present; reading through `xOpt().get()` re-expresses the same value via the guarded, provably-present `Optional`. The rewrite is gated for correctness over coverage: the guard must be exactly `&lt;recv&gt;.isPresent()` on a no-argument, side-effect-free `Optional` accessor; the rewritten `getX()` must be the matching no-argument raw accessor (same enclosing receiver, and `&lt;recv&gt;` named `getX` plus an `Optional` suffix) that is provably `@Nullable` here; and the use must be lexically inside the then-block so the guard dominates it. Because the `Optional` is proven present in the guarded branch, `.get()` cannot throw where the raw accessor did not, so runtime behavior is unchanged. Idempotent and conservative; only Java sources are modified.
* [io.moderne.nullability.ComposeJSpecifyBestPractices](/user-documentation/recipes/recipe-catalog/nullability/composejspecifybestpractices.md)
  * **Compose JSpecify best practices (intra-body nullability inference)**
  * Run the OpenRewrite static-analysis inference recipes that derive nullability from signals inside each method body: methods whose bodies can return `null` (standard-library aware, e.g. `Map.get`/`Queue.poll`) and parameters that are null-checked in the body, emitting JSpecify `@Nullable`. Complements the cross-file inference recipes.
* [io.moderne.nullability.ExtractRepeatedNullableInvocationToLocal](/user-documentation/recipes/recipe-catalog/nullability/extractrepeatednullableinvocationtolocal.md)
  * **Extract a repeated `@Nullable` invocation into a local variable**
  * When the same side-effect-free `@Nullable` method invocation (textually identical receiver, name, and no arguments — e.g. `source.get()`) appears two or more times in one block, hoists it into a single local `@Nullable Type x = source.get();` declared just before the first use and replaces every occurrence with `x`. NullAway cannot refine a `@Nullable` return across two separate calls — the second could return a different value — so `if (source.get() != null) \{ source.get().foo(); \}` is rejected; one local gives the checker a single narrowing point. The rewrite is strictly gated: the call must be provably `@Nullable` (resolved from the nullability model), side-effect free (only a no-argument getter-style call whose receiver is a simple identifier or `this`, never an argument-bearing or unresolved-type call), all occurrences must be in the same block, and the receiver must not be reassigned anywhere in that block (which could change the value between calls). A pure call evaluated once rather than N times yields the same value, so runtime behavior is unchanged. Idempotent and conservative; only Java sources are modified.
* [io.moderne.nullability.HoistNullableFieldReadIntoLocal](/user-documentation/recipes/recipe-catalog/nullability/hoistnullablefieldreadintolocal.md)
  * **Hoist a guarded `@Nullable` field read into a local variable**
  * NullAway cannot refine a `@Nullable` field across a dereference, because the field could be mutated between the null check and the use, so `if (this.f != null) \{ this.f.foo(); \}` is rejected. This recipe reads the field into a local once before the `if` — `String f = this.f; if (f != null) \{ f.foo(); \}` — which NullAway can refine. Only `@Nullable` instance fields guarded by a `!= null` check are rewritten, and the field must not be reassigned inside the then-block.
* [io.moderne.nullability.MigrateNonNullApiToNullMarked](/user-documentation/recipes/recipe-catalog/nullability/migratenonnullapitonullmarked.md)
  * **Migrate `@NonNullApi`/`ParametersAreNonnullByDefault` to JSpecify `@NullMarked`**
  * Replaces an existing package-level &quot;non-null by default&quot; convention with the JSpecify `@org.jspecify.annotations.NullMarked` annotation so that NullAway recognizes the null-marked scope. Converts `@org.springframework.lang.NonNullApi`, `@org.springframework.lang.NonNullFields`, `@javax.annotation.ParametersAreNonnullByDefault`, and `@jakarta.annotation.ParametersAreNonnullByDefault` (on `package-info.java` package declarations and on type declarations), collapsing the Spring `@NonNullApi`/`@NonNullFields` pair to a single `@NullMarked`. Idempotent and Java only.
* [io.moderne.nullability.MoveNullableToTypeUsePosition](/user-documentation/recipes/recipe-catalog/nullability/movenullabletotypeuseposition.md)
  * **Move a leading `@Nullable` to the type-use position**
  * Relocates a leading (declaration-position) JSpecify `@Nullable` to immediately before the type when modifiers separate them, turning `@Nullable private final String f` into `private final @Nullable String f` (and the same for method returns). JSpecify `@Nullable` is a `TYPE_USE` annotation, so the type-use position is the precise, conventional placement; the leading form compiles and means the same but reads less clearly. Only the `Nullable` simple name is moved (declaration-only flavors like `@CheckForNull` are left alone), the existing annotation is reused, and it only acts when a modifier precedes the type.
* [io.moderne.nullability.NullSafety](/user-documentation/recipes/recipe-catalog/nullability/nullsafety.md)
  * **Make a codebase null-safe**
  * Make Java code null-safe end to end. Infers and adds JSpecify `@Nullable`/`@MonotonicNonNull` from the code's own signals (returns, parameters, fields, override hierarchies, Kotlin call sites, and the JSpecify generic frontier), then detects and repairs the residual nullability violations — dereferences, unboxing, `switch`, enhanced-`for`, passing a nullable argument, nullable returns, uninitialized non-null fields, and override consistency — directly from the LST. Behavior-preserving and idempotent; run to a fixpoint over recipe cycles. If the code still uses non-JSpecify annotation flavors, run `org.openrewrite.java.jspecify.MigrateToJSpecify` first.
* [io.moderne.nullability.PropagateNullableAcrossOverrides](/user-documentation/recipes/recipe-catalog/nullability/propagatenullableacrossoverrides.md)
  * **Propagate `@Nullable` across override relationships**
  * Propagates existing JSpecify `@Nullable` annotations across `@Override` relationships so overrides honor their supertype's nullability contract. A `@Nullable` return propagates up to the overridden supertype method (returns are covariant); a `@Nullable` parameter propagates down to every overriding method (parameters are contravariant). Methods are matched across files by erased signature `name(paramTypes)` plus a declaring-type subtype relationship. Conservative by design: it never widens a legal covariant return narrowing, skips primitive/`void` returns and already-annotated positions, and does nothing when a participating type cannot be resolved. Only Java sources are modified.
* [io.moderne.nullability.RelaxOptionalOfToOfNullable](/user-documentation/recipes/recipe-catalog/nullability/relaxoptionaloftoofnullable.md)
  * **Relax `Optional.of` to `Optional.ofNullable` on nullable values**
  * Rewrites `Optional.of(x)` to `Optional.ofNullable(x)` where the argument `x` is provably `@Nullable` at the call site. `Optional.of(null)` throws `NullPointerException`, while `Optional.ofNullable(null)` yields `Optional.empty()`, so the two factories diverge on the `null` path: this rewrite **changes observable runtime behavior** (an NPE becomes an empty optional) and therefore marks every call it changes for human review. The call is matched on `java.util.Optional of(..)`; the argument's nullness is resolved from the nullness oracle and the path-sensitive flow engine (no name-based heuristics), so a value already null-checked on the path is not flagged. A non-null literal argument, or one already protected by a non-null assertion (`requireNonNull` / `castToNonNull` / …), is left untouched, keeping the recipe idempotent. Gated on the call site being in an annotated scope; only Java sources are modified.
* [io.moderne.nullability.RelocateNullableToArrayReference](/user-documentation/recipes/recipe-catalog/nullability/relocatenullabletoarrayreference.md)
  * **Relocate a misplaced leading `@Nullable` on a primitive array to the array reference**
  * Turns `@Nullable long[] x` into `long @Nullable [] x`. On a primitive-element array a leading `@Nullable` binds to the (impossible-to-be-null) element type, so NullAway still treats the array reference as `@NonNull`; moving the annotation to the array-reference position that NullAway reads fixes that without changing intent. Only primitive-element arrays are changed; object-element arrays, where a leading `@Nullable` legitimately means nullable elements, are left untouched.
* [io.moderne.nullability.RemoveProvablyDeadNullGuard](/user-documentation/recipes/recipe-catalog/nullability/removeprovablydeadnullguard.md)
  * **Remove a provably-dead `if (x == null)` guard**
  * Removes an `if (x == null) \{ ... \}` guard whose then-branch the flow engine proves unreachable because `x` is already non-null at that point (e.g. after an earlier assertion, guard, or assignment). Such a guard is dead code: the `x == null` test can never be true, so its then-branch never executes and deleting it — while keeping any `else` body, the only live path — preserves behavior. To match the aggressiveness Airbnb endorses and no further, the removal fires only when the path-sensitive flow analysis decisively proves `x` non-null at the guard, and never on a parameter of a `public` method (the service-edge / untrusted-input validation point NullAway guidance explicitly excludes). The condition must be a bare `x == null` / `null == x` on a simple local or parameter; a compound condition, a field, or anything not flow-proven is left untouched. Behavior-preserving (it removes only unreachable code), idempotent, and conservative; only Java sources are modified.
* [io.moderne.nullability.RemoveRedundantNonNullAnnotation](/user-documentation/recipes/recipe-catalog/nullability/removeredundantnonnullannotation.md)
  * **Remove a redundant `@NonNull` annotation under `@NullMarked`**
  * Removes an explicit `@NonNull` / `@Nonnull` annotation that is redundant inside a `@NullMarked` scope, where non-null is already the default. In JSpecify-normalized code an unannotated declaration in an annotated scope is already non-null, so the annotation merely restates the default; removing it leaves the declared nullability — and therefore runtime behavior — unchanged. Conservative: it acts only on a declaration whose enclosing type is in the fix scope (`@NullMarked` / `AnnotatedPackages`), removing the annotation from either the leading (declaration) position or the TYPE_USE position; it never touches `@Nullable`, `@CheckForNull`, or `@MonotonicNonNull`. The annotation import is dropped when this was its last use. Annotation-only and idempotent; only Java sources are modified.
* [io.moderne.nullability.RemoveRedundantNullableOnMethodReturn](/user-documentation/recipes/recipe-catalog/nullability/removeredundantnullableonmethodreturn.md)
  * **Remove a redundant declaration-position `@Nullable` on a method return**
  * When a method return type already carries a TYPE_USE `@Nullable` (for example `&lt;T&gt; @Nullable T` or `pkg.@Nullable Type`), a second `@Nullable` in the leading (declaration) position or before the type parameters is redundant, and on generic, qualified, or nested return types it is rejected by `javac`. This removes that duplicate so the JSpecify annotation survives in the single, valid TYPE_USE position. It only ever removes an annotation that is provably duplicated by one on the return type itself, so it never changes a method's nullability.
* [io.moderne.nullability.ReplaceNullableToStringWithStringValueOf](/user-documentation/recipes/recipe-catalog/nullability/replacenullabletostringwithstringvalueof.md)
  * **Replace nullable `x.toString()` with `String.valueOf(x)`**
  * Rewrites `x.toString()` to `String.valueOf(x)` when the receiver `x` is provably nullable at that site. `x.toString()` dereferences `x` and throws `NullPointerException` when `x` is `null`, which NullAway flags inside an annotated scope; `String.valueOf(x)` returns the string `&quot;null&quot;` instead. This is a behavior change on the null path (`NullPointerException` becomes the string `&quot;null&quot;`), so every rewritten call is marked for review — it is not behavior-preserving. Only the no-arg `toString()` whose receiver is a reference value is rewritten; a primitive receiver, a type or package qualifier, a `.class` literal, and `this`/`super` are never touched, and a receiver already asserted non-null is skipped. The receiver's nullness is resolved by attribution from the nullability model and a path-sensitive flow analysis (a value already null-checked on the path is not flagged). The fix never rewrites a call whose receiver is genuinely non-null at the site. Conservative; only Java sources are modified.
* [io.moderne.nullability.ReplaceNullableWithMonotonicNonNullOnLazyField](/user-documentation/recipes/recipe-catalog/nullability/replacenullablewithmonotonicnonnullonlazyfield.md)
  * **Replace `@Nullable` with `@MonotonicNonNull` on a lazily-initialized field**
  * Replaces the JSpecify `@Nullable` on a `private`, non-`final` reference field with the Checker Framework `@org.checkerframework.checker.nullness.qual.MonotonicNonNull` annotation when it is a lazily-initialized-non-null field, so NullAway treats reads of it as non-null and drops the `requireNonNull` noise a plain `@Nullable` forces at every read. A field qualifies only if it is `private` and non-`final`, declares exactly one reference-typed variable, every assignment has a provably-non-null right-hand side, at least one assignment is outside a constructor, and every null-observation of the field is a lazy-init guard (the condition of an `if` whose then-branch assigns the field). Because `private` bounds the analysis to the declaring class and no use handles `null` gracefully, the upgrade is behavior-preserving. Only Java sources are modified.
* [io.moderne.nullability.ReturnEmptyCollectionInsteadOfNull](/user-documentation/recipes/recipe-catalog/nullability/returnemptycollectioninsteadofnull.md)
  * **Return an empty collection instead of `null`**
  * Rewrites a bare `return null;` to return an empty immutable collection when the enclosing method's declared return type is `java.util.List`, `java.util.Set`, `java.util.Collection`, or `java.util.Map` (raw or generic): `List` and `Collection` become `Collections.emptyList()`, `Set` becomes `Collections.emptySet()`, and `Map` becomes `Collections.emptyMap()` (each statically imported). Returning an empty collection rather than `null` spares every caller a null check, but a caller that distinguishes `null` from empty observes a different result, so this is a behavior change and every rewritten `return` is flagged for review. Only the literal `return null;` statement is rewritten — a `return someNullableExpr;` is left untouched — and a method whose return is annotated `@Nullable` is skipped, since there the `null` is intended. The recipe is gated on `@NullMarked` scope, idempotent, and conservative; only Java sources are modified.
* [io.moderne.nullability.SafeNullableBooleanCondition](/user-documentation/recipes/recipe-catalog/nullability/safenullablebooleancondition.md)
  * **Make a nullable `Boolean` condition null-safe with `Boolean.TRUE.equals(...)`**
  * Rewrites a provably-nullable boxed `Boolean` used as a condition that auto-unboxes to `boolean` — the control expression of an `if`, `while`, or `do`/`while`, the condition of a `for`, or the condition of a ternary `?:` — to `Boolean.TRUE.equals(cond)`. Inside an annotated scope NullAway flags such an unboxing because it throws `NullPointerException` when the `Boolean` is `null`; the `Boolean.TRUE.equals(...)` form yields `false` on `null` instead. This is a behavior change on the null path (a thrown `NullPointerException` becomes `false`), so each rewritten condition is stamped with a behavior-change marker recording exactly that. The fix fires only when the condition's static type is the boxed `java.lang.Boolean` (a primitive `boolean` is never touched) and it is provably nullable at the site; nullability comes from type attribution and a path-sensitive flow analysis (a value already null-checked on the path is not rewritten). A condition already wrapped in `Boolean.TRUE.equals(...)` or `requireNonNull(...)` is left unchanged (idempotent). The recipe is conservative — a value not proven nullable is never rewritten; only Java sources are modified.
* [io.moderne.nullability.WrapNullableArgumentInRequireNonNull](/user-documentation/recipes/recipe-catalog/nullability/wrapnullableargumentinrequirenonnull.md)
  * **Wrap nullable arguments passed to non-null parameters in `requireNonNull`**
  * Wraps in `java.util.Objects.requireNonNull(...)` (statically imported) each argument that passes a provably-nullable value to a callee parameter that is not declared `@Nullable`. Inside a `@NullMarked` scope NullAway treats every unannotated parameter as non-null, so such a call is an error; `requireNonNull` throws only where the `@NonNull` callee would already misbehave on `null`, so runtime behavior is unchanged. Argument and parameter nullness are resolved from the nullness oracle and the flow engine (no name-based heuristics). The fix only fires where the call site is `@NullMarked` and the callee is itself in an annotated scope, and never asserts non-null on a value that is genuinely nullable at the site (a value read inside its own null-check is left for a human). A value that is explicitly `null` on some path (a bare `null` literal or a ternary with a `null` arm) is not wrapped but flagged for review with an advisory marker, since the parameter likely should be `@Nullable`. Idempotent and conservative; only Java sources are modified.
* [io.moderne.nullability.WrapNullableDereferenceInRequireNonNull](/user-documentation/recipes/recipe-catalog/nullability/wrapnullabledereferenceinrequirenonnull.md)
  * **Wrap nullable dereferenced values in `requireNonNull`**
  * Wraps in `java.util.Objects.requireNonNull(...)` (statically imported) a provably-nullable value that is being dereferenced — the receiver of a method call (`x.foo()`), the target of a field access (`x.field`, including `x.length`), the base of an array index (`x[i]`), the qualifier of a method reference (`x::foo`), the outer instance of a qualified `new`, or the lock of a `synchronized (x)`. Inside an annotated scope NullAway treats such a dereference as an error because it throws `NullPointerException` when the value is `null`; `requireNonNull` throws exactly when the dereference already would, so runtime behavior is unchanged. The value's nullness is resolved by attribution from the nullability model and a path-sensitive flow analysis (a value already null-checked on the path is not flagged). A `.class` literal, a type or package qualifier, a primitive, and a `throw` expression are never touched. The fix never asserts non-null on a value that is genuinely nullable at the site. Idempotent and conservative; only Java sources are modified.
* [io.moderne.nullability.WrapNullableForEachIterableInRequireNonNull](/user-documentation/recipes/recipe-catalog/nullability/wrapnullableforeachiterableinrequirenonnull.md)
  * **Wrap a nullable for-each iterable in `requireNonNull`**
  * Wraps the iterable of an enhanced-for (for-each) loop in `java.util.Objects.requireNonNull(...)` (statically imported) when it is a provably-nullable value. Inside an annotated scope NullAway treats the for-each iterable as non-null, so iterating a nullable expression is an error; iterating a `null` already throws `NullPointerException` when the loop obtains its iterator, so `requireNonNull` throws exactly where the loop already would and runtime behavior is unchanged. The iterable's nullness is resolved by attribution from the nullability model and a path-sensitive flow analysis. The fix never asserts non-null on a value that is genuinely nullable at the site. Idempotent and conservative; only Java sources are modified.
* [io.moderne.nullability.WrapNullableSwitchSelectorInRequireNonNull](/user-documentation/recipes/recipe-catalog/nullability/wrapnullableswitchselectorinrequirenonnull.md)
  * **Wrap nullable `switch` selectors in `requireNonNull`**
  * Wraps a provably-nullable `switch` selector in `java.util.Objects.requireNonNull(...)` (statically imported). Switching on a `null` selector already throws `NullPointerException` (the selector is dereferenced before any case matches), so inside an annotated scope NullAway flags a nullable selector as an error; `requireNonNull` throws only where the `switch` would already fail, so runtime behavior is unchanged. The selector's nullness is resolved by attribution from the nullability model and a path-sensitive flow analysis. A `switch` that already has a `case null` label is never touched. The fix never asserts non-null on a value that is genuinely nullable at the site. Idempotent and conservative; only Java sources are modified.
* [io.moderne.nullability.WrapNullableThrownExpressionInRequireNonNull](/user-documentation/recipes/recipe-catalog/nullability/wrapnullablethrownexpressioninrequirenonnull.md)
  * **Wrap nullable thrown expressions in `requireNonNull`**
  * Wraps a provably-nullable `throw` operand in `java.util.Objects.requireNonNull(...)` (statically imported), turning `throw ex;` into `throw requireNonNull(ex);`. A `throw` of a `null` `Throwable` itself throws `NullPointerException` (the JVM dereferences the operand to raise it), so inside an annotated scope NullAway flags a nullable thrown value as an error; `requireNonNull` throws exactly where the bare `throw` already would, so runtime behavior is unchanged. The operand's nullness is resolved by attribution from the nullability model and a path-sensitive flow analysis (a value already null-checked on the path is not flagged). The fix never asserts non-null on a value that is genuinely nullable at the site. Idempotent and conservative; only Java sources are modified.
* [io.moderne.nullability.WrapNullableUnboxingInRequireNonNull](/user-documentation/recipes/recipe-catalog/nullability/wrapnullableunboxinginrequirenonnull.md)
  * **Wrap nullable values that are auto-unboxed in `requireNonNull`**
  * Wraps a provably-nullable boxed value (`Integer`, `Long`, `Boolean`, ...) that is used in a primitive context in `java.util.Objects.requireNonNull(...)` (statically imported). Unboxing such a value is a NullAway error inside an annotated scope, and auto-unboxing a `null` already throws `NullPointerException`, so `requireNonNull` throws exactly where the unboxing already would and runtime behavior is unchanged. The primitive contexts handled are an operand of an arithmetic, relational, or bitwise expression whose other side is a primitive (including `==`/`!=` against a primitive, but not a reference comparison or string concatenation), an argument bound to a primitive callee parameter, an array index, an `if`/`while`/`do`/`for`/ternary condition, and the `return` of a primitive-returning method. Nullability is determined from type attribution. The fix only fires where NullAway is active and never asserts non-null on a value that is genuinely nullable at the site. The recipe is idempotent and conservative; only Java sources are modified.

## rewrite-prethink

_License: Moderne Proprietary License_

_107 recipes_

* [io.moderne.prethink.ExtractCodingConventions](/user-documentation/recipes/recipe-catalog/prethink/extractcodingconventions.md)
  * **Extract coding conventions**
  * Analyze the codebase to extract coding conventions including naming patterns, import organization, and documentation patterns.
* [io.moderne.prethink.ExtractDependencyUsage](/user-documentation/recipes/recipe-catalog/prethink/extractdependencyusage.md)
  * **Extract dependency usage patterns**
  * Analyze the codebase to extract dependency usage patterns by examining which types from external libraries are actually used in the code.
* [io.moderne.prethink.ExtractErrorPatterns](/user-documentation/recipes/recipe-catalog/prethink/extracterrorpatterns.md)
  * **Extract error handling patterns**
  * Analyze the codebase to extract error handling patterns including exception types, handling strategies, and logging frameworks used.
* [io.moderne.prethink.ExtractGoDependencies](/user-documentation/recipes/recipe-catalog/prethink/extractgodependencies.md)
  * **Extract Go dependencies and usage**
  * Scan go.mod and Go source imports to produce a DependencyUsage entry per actually-imported module, including file-count and sample imports.
* [io.moderne.prethink.FindGoCodingConventions](/user-documentation/recipes/recipe-catalog/prethink/findgocodingconventions.md)
  * **Find Go coding conventions**
  * Detect Go naming patterns (package names, exported vs unexported, interface -er suffix, error variable prefix, test prefix).
* [io.moderne.prethink.FindGoErrorPatterns](/user-documentation/recipes/recipe-catalog/prethink/findgoerrorpatterns.md)
  * **Find Go error handling patterns**
  * Detect Go error-handling idioms: error returns, fmt.Errorf %w wrapping, errors.Is/As, panic/recover, and sentinel error variables.
* [io.moderne.prethink.UpdatePrethinkContextNoAiStarter](/user-documentation/recipes/recipe-catalog/prethink/updateprethinkcontextnoaistarter.md)
  * **Update Prethink context (no AI)**
  * Generate Moderne Prethink context files with architectural discovery, test coverage mapping, dependency inventory, and FINOS CALM architecture diagrams. This recipe does not require an LLM provider.
* [io.moderne.prethink.calm.FindAspNetCoreEndpoints](/user-documentation/recipes/recipe-catalog/prethink/calm/findaspnetcoreendpoints.md)
  * **Find ASP.NET Core endpoints**
  * Identify HTTP endpoints declared via ASP.NET Core controllers ([ApiController], [Route], [HttpGet/Post/...]) and Minimal APIs (app.MapGet/MapPost/MapPut/MapDelete/MapPatch).
* [io.moderne.prethink.calm.FindCalmRelationships](/user-documentation/recipes/recipe-catalog/prethink/calm/findcalmrelationships.md)
  * **Find CALM relationships**
  * Discover method call relationships within the repository for building interaction diagrams. Captures all method-to-method calls between in-repo classes. Entity IDs are resolved by GenerateCalmArchitecture when building CALM relationships.
* [io.moderne.prethink.calm.FindDataAssets](/user-documentation/recipes/recipe-catalog/prethink/calm/finddataassets.md)
  * **Find data assets**
  * Identify data assets including JPA entities, MongoDB documents, Java records, and DTOs in the application.
* [io.moderne.prethink.calm.FindDatabaseConnections](/user-documentation/recipes/recipe-catalog/prethink/calm/finddatabaseconnections.md)
  * **Find database connections**
  * Identify database connections and data access patterns in the application. Detects JPA entities, Spring Data repositories, JDBC templates, MyBatis mappers, and Quarkus Panache.
* [io.moderne.prethink.calm.FindDeploymentArtifacts](/user-documentation/recipes/recipe-catalog/prethink/calm/finddeploymentartifacts.md)
  * **Find deployment artifacts**
  * Identify deployment artifacts including Dockerfiles, docker-compose files, and Kubernetes manifests.
* [io.moderne.prethink.calm.FindDjangoEndpoints](/user-documentation/recipes/recipe-catalog/prethink/calm/finddjangoendpoints.md)
  * **Find Django endpoints**
  * Identify REST/HTTP endpoints in Django and Django REST Framework applications. Detects class-based views, function-based views with @api_view, and regular Django views with @require_http_methods decorators.
* [io.moderne.prethink.calm.FindDotnetDataAssets](/user-documentation/recipes/recipe-catalog/prethink/calm/finddotnetdataassets.md)
  * **Find .NET data assets**
  * Detect C# DTOs, records, and entity types based on property/method ratio, [DataContract] / [Table] attributes, and `record` keyword.
* [io.moderne.prethink.calm.FindDotnetDtoFieldSchemas](/user-documentation/recipes/recipe-catalog/prethink/calm/finddotnetdtofieldschemas.md)
  * **Find .NET DTO field schemas**
  * Per-property schema rows for C# DTOs: serialized name (JsonPropertyName/JsonProperty), OpenAPI format, required flag (DataAnnotations.RequiredAttribute / non-nullable value types), and a validations JSON map.
* [io.moderne.prethink.calm.FindDotnetEndpointContracts](/user-documentation/recipes/recipe-catalog/prethink/calm/finddotnetendpointcontracts.md)
  * **Find .NET endpoint contracts**
  * Extract request body, response body (unwrapping ActionResult&lt;T&gt;/Task&lt;T&gt;), and per-parameter binding source ([FromBody/Query/Route/Header/Form]) for ASP.NET Core controller endpoints.
* [io.moderne.prethink.calm.FindDotnetEndpointSecurity](/user-documentation/recipes/recipe-catalog/prethink/calm/finddotnetendpointsecurity.md)
  * **Find .NET endpoint security**
  * Per-endpoint security requirements derived from ASP.NET Core [Authorize] (Policy/Roles/AuthenticationSchemes) and [AllowAnonymous].
* [io.moderne.prethink.calm.FindDotnetExceptionHandlers](/user-documentation/recipes/recipe-catalog/prethink/calm/finddotnetexceptionhandlers.md)
  * **Find .NET exception handlers**
  * Detect IExceptionFilter / IAsyncExceptionFilter / IExceptionHandler implementations and ExceptionFilterAttribute-derived classes in ASP.NET Core projects.
* [io.moderne.prethink.calm.FindDotnetGraphQLEndpoints](/user-documentation/recipes/recipe-catalog/prethink/calm/finddotnetgraphqlendpoints.md)
  * **Find .NET GraphQL endpoints**
  * Detect HotChocolate query/mutation/subscription types and GraphQL.NET schema types in .NET projects.
* [io.moderne.prethink.calm.FindDotnetGrpcServices](/user-documentation/recipes/recipe-catalog/prethink/calm/finddotnetgrpcservices.md)
  * **Find .NET gRPC services**
  * Detect gRPC service implementations (classes deriving from generated *Base types under Grpc.Core / Grpc.AspNetCore) and ASP.NET Core gRPC endpoint registrations via MapGrpcService&lt;T&gt;().
* [io.moderne.prethink.calm.FindDotnetHttpClients](/user-documentation/recipes/recipe-catalog/prethink/calm/finddotnethttpclients.md)
  * **Find .NET HTTP clients**
  * Detect outbound HTTP client usage via HttpClient, IHttpClientFactory.CreateClient, Refit interfaces, RestSharp, and Flurl.
* [io.moderne.prethink.calm.FindDotnetMessagingConnections](/user-documentation/recipes/recipe-catalog/prethink/calm/finddotnetmessagingconnections.md)
  * **Find .NET messaging connections**
  * Detect MassTransit IConsumer&lt;T&gt;, NServiceBus IHandleMessages&lt;T&gt;, MediatR IRequestHandler/INotificationHandler, Confluent.Kafka producers/consumers, Azure Service Bus, and RabbitMQ.Client usage.
* [io.moderne.prethink.calm.FindDotnetProjectMetadata](/user-documentation/recipes/recipe-catalog/prethink/calm/finddotnetprojectmetadata.md)
  * **Find .NET project metadata**
  * Extract project metadata (SDK, target framework(s), package list) from MSBuild project files. Reads the MSBuildProject marker which captures values resolved across the project file, Directory.Build.props, Directory.Packages.props, global.json and nuget.config.
* [io.moderne.prethink.calm.FindDotnetScheduledTasks](/user-documentation/recipes/recipe-catalog/prethink/calm/finddotnetscheduledtasks.md)
  * **Find .NET scheduled tasks**
  * Detect Hangfire RecurringJob.AddOrUpdate, Quartz.IJob implementations, BackgroundService/IHostedService classes, and Azure Functions TimerTrigger methods.
* [io.moderne.prethink.calm.FindDotnetSecurityConfiguration](/user-documentation/recipes/recipe-catalog/prethink/calm/finddotnetsecurityconfiguration.md)
  * **Find .NET security configuration**
  * Detect ASP.NET Core authentication (JwtBearer/OpenIdConnect/Cookie), authorization, CORS, HSTS, and HTTPS redirection middleware registrations.
* [io.moderne.prethink.calm.FindDotnetServerConfiguration](/user-documentation/recipes/recipe-catalog/prethink/calm/finddotnetserverconfiguration.md)
  * **Find .NET server configuration**
  * Read appsettings*.json and launchSettings.json for Kestrel Urls/ApplicationUrl entries and emit ServerConfiguration rows (port, sslEnabled, contextPath, protocol).
* [io.moderne.prethink.calm.FindDotnetServiceComponents](/user-documentation/recipes/recipe-catalog/prethink/calm/finddotnetservicecomponents.md)
  * **Find .NET service components**
  * Detect IServiceCollection.AddSingleton/AddScoped/AddTransient/AddHttpClient registrations and emit one row per registered service.
* [io.moderne.prethink.calm.FindDotnetTestCoverage](/user-documentation/recipes/recipe-catalog/prethink/calm/finddotnettestcoverage.md)
  * **Find .NET test coverage**
  * Identify xUnit ([Fact]/[Theory]), NUnit ([Test]/[TestCase]) and MSTest ([TestMethod]/[DataTestMethod]) test methods in C# source and record them in the test mapping table for downstream coverage linking.
* [io.moderne.prethink.calm.FindDtoFieldSchemas](/user-documentation/recipes/recipe-catalog/prethink/calm/finddtofieldschemas.md)
  * **Find DTO field schemas**
  * Emit per-field rows for request/response DTO classes: wire name, type, required flag, OpenAPI format, validation constraints, and @Schema(example = ...) values. Supports OpenAPI 3.0.3 generation by providing the full field schema for each DTO an endpoint references.
* [io.moderne.prethink.calm.FindEndpointContracts](/user-documentation/recipes/recipe-catalog/prethink/calm/findendpointcontracts.md)
  * **Find endpoint contracts**
  * Extract per-endpoint request body, response body (per status code), and parameter details from Spring/JAX-RS/Micronaut handlers to support OpenAPI 3.0.3 spec generation and consumer/provider contract-test generation. Walks interface inheritance for OpenAPI-codegen-first projects.
* [io.moderne.prethink.calm.FindEndpointSecurity](/user-documentation/recipes/recipe-catalog/prethink/calm/findendpointsecurity.md)
  * **Find endpoint security**
  * Per-endpoint security requirements (roles, scopes, raw expressions) extracted from @PreAuthorize/@Secured/@RolesAllowed/@PermitAll annotations at method or class level. Joins to service-endpoints.csv via endpointId.
* [io.moderne.prethink.calm.FindEntityFrameworkConnections](/user-documentation/recipes/recipe-catalog/prethink/calm/findentityframeworkconnections.md)
  * **Find Entity Framework / Dapper / ADO.NET database access**
  * Detect Entity Framework Core DbContext subclasses, DbSet&lt;T&gt; properties, [Table]/[Column]/[Key] annotated entity classes, Dapper Query/Execute calls, and raw SqlConnection usage.
* [io.moderne.prethink.calm.FindExceptionHandlers](/user-documentation/recipes/recipe-catalog/prethink/calm/findexceptionhandlers.md)
  * **Find exception handlers**
  * Capture @ControllerAdvice and controller-local @ExceptionHandler methods so that OpenAPI 3.0.3 specs include non-2xx response branches. Emits one row per (scope, exception type, status) triple.
* [io.moderne.prethink.calm.FindExpressEndpoints](/user-documentation/recipes/recipe-catalog/prethink/calm/findexpressendpoints.md)
  * **Find Express endpoints**
  * Identify REST/HTTP endpoints in Express and Fastify applications. Detects app.get(), router.post(), and similar route definition patterns.
* [io.moderne.prethink.calm.FindExternalServiceCalls](/user-documentation/recipes/recipe-catalog/prethink/calm/findexternalservicecalls.md)
  * **Find external service calls**
  * Identify outbound HTTP calls to external services. Detects RestTemplate, WebClient, Feign clients, MicroProfile REST Client, Apache HttpClient, OkHttp, and JAX-RS clients.
* [io.moderne.prethink.calm.FindFastAPIEndpoints](/user-documentation/recipes/recipe-catalog/prethink/calm/findfastapiendpoints.md)
  * **Find FastAPI endpoints**
  * Identify REST/HTTP endpoints in FastAPI applications. Detects @app.get(), @router.post(), and similar route decorator patterns.
* [io.moderne.prethink.calm.FindFieldExamplesFromFixtures](/user-documentation/recipes/recipe-catalog/prethink/calm/findfieldexamplesfromfixtures.md)
  * **Find field examples from JSON fixtures**
  * Walk JSON and YAML fixture files under src/test/resources and emit raw (fixturePath, jsonPath, value, valueType) rows so that an LLM can mine realistic example values for OpenAPI specs and contract tests.
* [io.moderne.prethink.calm.FindFlaskEndpoints](/user-documentation/recipes/recipe-catalog/prethink/calm/findflaskendpoints.md)
  * **Find Flask endpoints**
  * Identify REST/HTTP endpoints in Flask applications. Detects @app.route(), @blueprint.route(), and Flask 2.0+ shortcut decorators like @app.get() and @app.post().
* [io.moderne.prethink.calm.FindGoDatabaseConnections](/user-documentation/recipes/recipe-catalog/prethink/calm/findgodatabaseconnections.md)
  * **Find Go database connections**
  * Detect database/sql, GORM, sqlx, pgx, and ent usage in Go source.
* [io.moderne.prethink.calm.FindGoGrpcServices](/user-documentation/recipes/recipe-catalog/prethink/calm/findgogrpcservices.md)
  * **Find Go gRPC services**
  * Detect gRPC service registrations via grpc-go RegisterXxxServer calls.
* [io.moderne.prethink.calm.FindGoHttpClients](/user-documentation/recipes/recipe-catalog/prethink/calm/findgohttpclients.md)
  * **Find Go HTTP clients**
  * Detect outbound HTTP calls made through net/http, resty, go-retryablehttp, or imroc/req.
* [io.moderne.prethink.calm.FindGoMessagingConnections](/user-documentation/recipes/recipe-catalog/prethink/calm/findgomessagingconnections.md)
  * **Find Go messaging connections**
  * Detect Kafka, NATS, RabbitMQ/AMQP client usage in Go source.
* [io.moderne.prethink.calm.FindGoProjectMetadata](/user-documentation/recipes/recipe-catalog/prethink/calm/findgoprojectmetadata.md)
  * **Find Go project metadata**
  * Extract project metadata (module path, go version) from Go go.mod files.
* [io.moderne.prethink.calm.FindGoServiceEndpoints](/user-documentation/recipes/recipe-catalog/prethink/calm/findgoserviceendpoints.md)
  * **Find Go service endpoints**
  * Detect HTTP endpoints registered via net/http, gin, echo, chi, gorilla/mux, and fiber routers.
* [io.moderne.prethink.calm.FindGoTestCoverage](/user-documentation/recipes/recipe-catalog/prethink/calm/findgotestcoverage.md)
  * **Find Go test coverage**
  * Identify Go test/benchmark/fuzz functions in *_test.go files and record them in the test mapping table.
* [io.moderne.prethink.calm.FindGraphQLEndpoints](/user-documentation/recipes/recipe-catalog/prethink/calm/findgraphqlendpoints.md)
  * **Find GraphQL endpoints**
  * Identify GraphQL endpoints exposed by the application. Supports Spring GraphQL, Netflix DGS, and GraphQL Java (graphql-java-tools).
* [io.moderne.prethink.calm.FindGrpcServices](/user-documentation/recipes/recipe-catalog/prethink/calm/findgrpcservices.md)
  * **Find gRPC services**
  * Identify gRPC service implementations in the application. Detects classes extending generated ImplBase classes and @GrpcService annotations.
* [io.moderne.prethink.calm.FindMessagingConnections](/user-documentation/recipes/recipe-catalog/prethink/calm/findmessagingconnections.md)
  * **Find messaging connections**
  * Identify message queue producers and consumers. Detects Kafka, RabbitMQ, JMS, Spring Cloud Stream, AWS SQS, and SmallRye Reactive Messaging.
* [io.moderne.prethink.calm.FindMongooseSchemas](/user-documentation/recipes/recipe-catalog/prethink/calm/findmongooseschemas.md)
  * **Find Mongoose schemas**
  * Identify Mongoose models and schemas in Node.js applications. Detects mongoose.model() calls and populates the DatabaseConnections table.
* [io.moderne.prethink.calm.FindNestJSEndpoints](/user-documentation/recipes/recipe-catalog/prethink/calm/findnestjsendpoints.md)
  * **Find NestJS endpoints**
  * Identify REST/HTTP endpoints in NestJS controllers. Detects @Controller, @Get, @Post, @Put, @Delete, and @Patch decorators and populates the ServiceEndpoints data table.
* [io.moderne.prethink.calm.FindNodeErrorPatterns](/user-documentation/recipes/recipe-catalog/prethink/calm/findnodeerrorpatterns.md)
  * **Find Node.js error patterns**
  * Identify error handling patterns in Node.js applications. Detects try/catch blocks and identifies logging frameworks used.
* [io.moderne.prethink.calm.FindNodeHttpClients](/user-documentation/recipes/recipe-catalog/prethink/calm/findnodehttpclients.md)
  * **Find Node.js HTTP clients**
  * Identify HTTP client usage in Node.js applications. Detects axios, fetch, got, and superagent call patterns.
* [io.moderne.prethink.calm.FindNodeMessaging](/user-documentation/recipes/recipe-catalog/prethink/calm/findnodemessaging.md)
  * **Find Node.js messaging**
  * Identify messaging patterns in Node.js applications. Detects KafkaJS, amqplib, and Bull/BullMQ usage.
* [io.moderne.prethink.calm.FindNodeProjectMetadata](/user-documentation/recipes/recipe-catalog/prethink/calm/findnodeprojectmetadata.md)
  * **Find Node.js project metadata**
  * Extract project metadata (name, version, description) from Node.js package.json files.
* [io.moderne.prethink.calm.FindNodeSecurityConfig](/user-documentation/recipes/recipe-catalog/prethink/calm/findnodesecurityconfig.md)
  * **Find Node.js security configuration**
  * Identify security middleware in Node.js applications. Detects cors, helmet, passport, and JWT middleware usage.
* [io.moderne.prethink.calm.FindNodeTestCoverage](/user-documentation/recipes/recipe-catalog/prethink/calm/findnodetestcoverage.md)
  * **Find Node.js test coverage**
  * Identify test methods in Jest, Mocha, and Vitest test files. Detects describe(), it(), and test() blocks and populates the TestMapping table.
* [io.moderne.prethink.calm.FindPrismaUsage](/user-documentation/recipes/recipe-catalog/prethink/calm/findprismausage.md)
  * **Find Prisma usage**
  * Identify Prisma ORM usage in Node.js applications. Detects prisma.model.findMany() and similar Prisma Client query patterns.
* [io.moderne.prethink.calm.FindProjectMetadata](/user-documentation/recipes/recipe-catalog/prethink/calm/findprojectmetadata.md)
  * **Find project metadata**
  * Extract project metadata (artifact ID, group ID, name, description) from Maven pom.xml files.
* [io.moderne.prethink.calm.FindPythonProjectMetadata](/user-documentation/recipes/recipe-catalog/prethink/calm/findpythonprojectmetadata.md)
  * **Find Python project metadata**
  * Extract project metadata (name, version, description) from Python pyproject.toml files.
* [io.moderne.prethink.calm.FindPythonTestCoverage](/user-documentation/recipes/recipe-catalog/prethink/calm/findpythontestcoverage.md)
  * **Find Python test coverage**
  * Identify test methods in Python test files. Detects pytest test functions/classes, unittest.TestCase subclasses, and behave/pytest-bdd/lettuce BDD step definitions, and populates the TestMapping table.
* [io.moderne.prethink.calm.FindSQLAlchemyModels](/user-documentation/recipes/recipe-catalog/prethink/calm/findsqlalchemymodels.md)
  * **Find SQLAlchemy and Django ORM models**
  * Identify ORM model classes in Python applications. Detects SQLAlchemy models with DeclarativeBase inheritance, Flask-SQLAlchemy models with db.Model, and Django ORM models extending models.Model.
* [io.moderne.prethink.calm.FindScheduledTasks](/user-documentation/recipes/recipe-catalog/prethink/calm/findscheduledtasks.md)
  * **Find scheduled tasks**
  * Identify scheduled tasks and background jobs in the application. Supports Spring @Scheduled, Quarkus @Scheduled, Quartz Job, Jakarta/Javax EJB Timer, and JobRunr @Recurring annotations.
* [io.moderne.prethink.calm.FindSecurityConfiguration](/user-documentation/recipes/recipe-catalog/prethink/calm/findsecurityconfiguration.md)
  * **Find security configuration**
  * Identify security configurations including Spring Security, OAuth2, CORS, Jakarta Security (@RolesAllowed, @PermitAll, @DenyAll), and Quarkus Security settings.
* [io.moderne.prethink.calm.FindServerConfiguration](/user-documentation/recipes/recipe-catalog/prethink/calm/findserverconfiguration.md)
  * **Find server configuration**
  * Extract server configuration (port, SSL, context path) from application.properties and application.yml files.
* [io.moderne.prethink.calm.FindServiceComponents](/user-documentation/recipes/recipe-catalog/prethink/calm/findservicecomponents.md)
  * **Find service components**
  * Identify service layer components (@Service, @Component, @Named) in the application. Excludes controllers and repositories which are handled by dedicated recipes.
* [io.moderne.prethink.calm.FindServiceEndpoints](/user-documentation/recipes/recipe-catalog/prethink/calm/findserviceendpoints.md)
  * **Find service endpoints**
  * Identify all REST/HTTP service endpoints exposed by the application. Supports Spring MVC, JAX-RS, Micronaut, and Quarkus REST endpoints. Also walks interface inheritance to detect endpoints in OpenAPI-codegen-first projects where @GetMapping etc. live on the interface methods.
* [io.moderne.prethink.calm.FindSignalRHubs](/user-documentation/recipes/recipe-catalog/prethink/calm/findsignalrhubs.md)
  * **Find ASP.NET Core SignalR hubs**
  * Detect SignalR Hub subclasses, their methods (with optional [HubMethodName]), and MapHub&lt;T&gt; registrations.
* [io.moderne.prethink.calm.FindTypeORMEntities](/user-documentation/recipes/recipe-catalog/prethink/calm/findtypeormentities.md)
  * **Find TypeORM entities**
  * Identify TypeORM entities in Node.js applications. Detects @Entity() decorator on classes and populates the DatabaseConnections table.
* [io.moderne.prethink.calm.FindWebSocketEndpoints](/user-documentation/recipes/recipe-catalog/prethink/calm/findwebsocketendpoints.md)
  * **Find WebSocket endpoints**
  * Identify WebSocket endpoints in the application. Supports Spring WebSocket, Spring STOMP messaging, and Jakarta/Javax WebSocket.
* [io.moderne.prethink.calm.GenerateCalmMermaidDiagram](/user-documentation/recipes/recipe-catalog/prethink/calm/generatecalmmermaiddiagram.md)
  * **Generate architecture mermaid diagram**
  * Generate a markdown file with a mermaid architecture diagram from discovered service endpoints, database connections, external service calls, and messaging connections.
* [io.moderne.prethink.quality.FindClassMetrics](/user-documentation/recipes/recipe-catalog/prethink/quality/findclassmetrics.md)
  * **Find class quality metrics**
  * Compute per-class code quality metrics including WMC, LCOM4, TCC, CBO, and maintainability index.
* [io.moderne.prethink.quality.FindCodeSmells](/user-documentation/recipes/recipe-catalog/prethink/quality/findcodesmells.md)
  * **Find code smells**
  * Detect code smells including God Class, Feature Envy, and Data Class using composite metric thresholds with severity ratings.
* [io.moderne.prethink.quality.FindDotnetErrorPatterns](/user-documentation/recipes/recipe-catalog/prethink/quality/finddotneterrorpatterns.md)
  * **Find .NET error patterns**
  * Detect .NET logging frameworks (Microsoft.Extensions.Logging, Serilog, NLog, log4net) and catch-block strategies (swallow, rethrow, log, wrap).
* [io.moderne.prethink.quality.FindGoCodeSmells](/user-documentation/recipes/recipe-catalog/prethink/quality/findgocodesmells.md)
  * **Find Go code smells**
  * Detect God Struct, Feature Envy, Large Interface, and Long Function code smells in Go. Data Class is intentionally excluded (idiomatic in Go).
* [io.moderne.prethink.quality.FindGoPackageMetrics](/user-documentation/recipes/recipe-catalog/prethink/quality/findgopackagemetrics.md)
  * **Find Go package quality metrics**
  * Per-package architectural metrics for Go: afferent/efferent coupling, instability, abstractness (interface ratio), distance from main sequence, and cycle detection.
* [io.moderne.prethink.quality.FindGoTypeMetrics](/user-documentation/recipes/recipe-catalog/prethink/quality/findgotypemetrics.md)
  * **Find Go type quality metrics**
  * Compute per-struct code quality metrics for Go including WMC, LCOM4, TCC, CBO, and maintainability index. Aggregates methods with the same receiver type across files.
* [io.moderne.prethink.quality.FindMethodComplexity](/user-documentation/recipes/recipe-catalog/prethink/quality/findmethodcomplexity.md)
  * **Find method complexity**
  * Compute per-method code quality metrics including cyclomatic complexity, cognitive complexity, max nesting depth, line count, parameter count, ABC metric, and Halstead measures.
* [io.moderne.prethink.quality.FindPackageMetrics](/user-documentation/recipes/recipe-catalog/prethink/quality/findpackagemetrics.md)
  * **Find package quality metrics**
  * Compute per-package architectural quality metrics including afferent/efferent coupling, instability, abstractness, distance from the main sequence, and dependency cycle detection using Tarjan's strongly connected components algorithm.
* [io.moderne.prethink.testing.coverage.FindTestCoverage](/user-documentation/recipes/recipe-catalog/prethink/testing/coverage/findtestcoverage.md)
  * **Find test coverage mapping**
  * Map test methods to their corresponding implementation methods. Uses JavaType.Method matching to determine coverage relationships.
* [io.moderne.prethink.testing.coverage.FindTestGaps](/user-documentation/recipes/recipe-catalog/prethink/testing/coverage/findtestgaps.md)
  * **Find test coverage gaps**
  * Identify public non-trivial methods that lack test coverage. Reports gaps with cyclomatic complexity and risk scores to help prioritize where to add tests.
* [io.moderne.prethink.testing.quality.FindDotnetFlakyTestPatterns](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/finddotnetflakytestpatterns.md)
  * **Find .NET flaky test patterns**
  * Detect Thread.Sleep, Task.Delay (without CancellationToken), and .Result/.Wait() on Task in .NET tests — patterns that cause flakiness or deadlocks.
* [io.moderne.prethink.testing.quality.FindDotnetFragileTestData](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/finddotnetfragiletestdata.md)
  * **Find .NET fragile test data**
  * Detect hardcoded dates/paths/ports, DateTime.Now usage, and Guid.NewGuid/ Random in .NET tests — sources of timing- or environment-dependent flakiness.
* [io.moderne.prethink.testing.quality.FindDotnetGhostTests](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/finddotnetghosttests.md)
  * **Find .NET ghost tests**
  * Detect empty test bodies and suppressed tests ([Ignore], [Fact(Skip=...)]) in .NET tests.
* [io.moderne.prethink.testing.quality.FindDotnetOverlyBroadMocks](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/finddotnetoverlybroadmocks.md)
  * **Find overly broad mocks in .NET tests**
  * Detect It.IsAny&lt;T&gt; (Moq), Arg.Any&lt;T&gt; (NSubstitute) and A&lt;T&gt;.Ignored (FakeItEasy) matcher overuse in .NET tests.
* [io.moderne.prethink.testing.quality.FindDotnetSilentTestFailures](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/finddotnetsilenttestfailures.md)
  * **Find .NET silent test failures**
  * Detect .NET test methods with no assertions, and swallowed exceptions inside tests.
* [io.moderne.prethink.testing.quality.FindDotnetTestCodeSmells](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/finddotnettestcodesmells.md)
  * **Find .NET test code smells**
  * Detect poor test names, magic numbers in assertions, generic catch in tests, and Debug.Assert misuse in .NET tests.
* [io.moderne.prethink.testing.quality.FindDotnetUnmockedExternalCalls](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/finddotnetunmockedexternalcalls.md)
  * **Find unmocked external calls in .NET tests**
  * Detect direct HttpClient/SqlConnection/EF DbContext/File/Socket usage inside .NET unit tests that should typically be mocked.
* [io.moderne.prethink.testing.quality.FindFlakyTestPatterns](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findflakytestpatterns.md)
  * **Find flaky test patterns**
  * Detect patterns that commonly cause flaky tests in Java and Python code, including static waits (Thread.sleep, TimeUnit.sleep) and shared mutable state (static non-final fields in test classes).
* [io.moderne.prethink.testing.quality.FindFragileTestData](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findfragiletestdata.md)
  * **Find fragile test data**
  * Detect hardcoded dates, timing-dependent assertions, and hardcoded ports/paths in test code that may cause flaky or environment-dependent test failures.
* [io.moderne.prethink.testing.quality.FindGhostTests](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findghosttests.md)
  * **Find ghost tests**
  * Detect methods that look like tests but will not be executed by the test runner, and tests skipped without a documented reason.
* [io.moderne.prethink.testing.quality.FindGoFlakyTestPatterns](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findgoflakytestpatterns.md)
  * **Find Go flaky test patterns**
  * Detect time.Sleep and non-deterministic randomness in Go *_test.go files.
* [io.moderne.prethink.testing.quality.FindGoFragileTestData](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findgofragiletestdata.md)
  * **Find Go fragile test data**
  * Detect hardcoded dates, absolute paths, and hardcoded ports in Go tests.
* [io.moderne.prethink.testing.quality.FindGoGhostTests](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findgoghosttests.md)
  * **Find Go ghost tests**
  * Detect empty test bodies and unexplained skips in Go tests.
* [io.moderne.prethink.testing.quality.FindGoOverlyBroadMocks](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findgooverlybroadmocks.md)
  * **Find Go overly broad mocks**
  * Detect testify mock.Anything / mock.AnythingOfType usage in Go tests.
* [io.moderne.prethink.testing.quality.FindGoSilentTestFailures](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findgosilenttestfailures.md)
  * **Find Go silent test failures**
  * Detect discarded error returns and assertion-less test bodies in Go tests.
* [io.moderne.prethink.testing.quality.FindGoTestCodeSmells](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findgotestcodesmells.md)
  * **Find Go test code smells**
  * Detect magic numbers, over-long test names, and over-grown table-driven tests.
* [io.moderne.prethink.testing.quality.FindGoUnmockedExternalCalls](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findgounmockedexternalcalls.md)
  * **Find Go unmocked external calls**
  * Detect net/http, os.Open, net.Dial, sql.Open calls directly in Go tests.
* [io.moderne.prethink.testing.quality.FindNodeFlakyTestPatterns](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findnodeflakytestpatterns.md)
  * **Find Node.js flaky test patterns**
  * Detect patterns that commonly cause flaky tests in JavaScript and TypeScript code, including static waits (setTimeout, setInterval), prototype mutation, and shared mutable state (module-scope let/var declarations).
* [io.moderne.prethink.testing.quality.FindNodeFragileTestData](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findnodefragiletestdata.md)
  * **Find Node.js fragile test data**
  * Detect hardcoded dates, timing-dependent assertions, and hardcoded ports in JavaScript and TypeScript test files.
* [io.moderne.prethink.testing.quality.FindNodeGhostTests](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findnodeghosttests.md)
  * **Find Node.js ghost tests**
  * Detect skipped tests in JavaScript and TypeScript test files. Flags xtest(), xit(), test.skip(), it.skip(), and describe.skip() calls that lack a documented reason in their description.
* [io.moderne.prethink.testing.quality.FindNodeSilentTestFailures](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findnodesilenttestfailures.md)
  * **Find Node.js silent test failures**
  * Detect silent test failures in JavaScript and TypeScript test files including empty .catch() handlers and test functions missing expect() calls.
* [io.moderne.prethink.testing.quality.FindNodeTestCodeSmells](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findnodetestcodesmells.md)
  * **Find Node.js test code smells**
  * Detect code smells in JavaScript and TypeScript test files including empty catch blocks and magic numbers.
* [io.moderne.prethink.testing.quality.FindNodeUnmockedExternalCalls](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findnodeunmockedexternalcalls.md)
  * **Find unmocked external calls in Node.js tests**
  * Detect direct HTTP, database, and network calls in JavaScript/TypeScript test files that are not mocked. Integration and e2e test files are excluded.
* [io.moderne.prethink.testing.quality.FindOverlyBroadMocks](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findoverlybroadmocks.md)
  * **Find overly broad mocks**
  * Detect Mockito stubbing or verification calls that use 3 or more any() matchers, which can hide incorrect arguments and reduce test effectiveness.
* [io.moderne.prethink.testing.quality.FindSilentTestFailures](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findsilenttestfailures.md)
  * **Find silent test failures**
  * Detect silent test failures including Java assert keyword usage, swallowed exceptions in try/catch blocks, and test methods missing assertions.
* [io.moderne.prethink.testing.quality.FindTestCodeSmells](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findtestcodesmells.md)
  * **Find test code smells**
  * Detect code smells in test files including empty catch blocks, deprecated test APIs, magic numbers, and poorly named test methods.
* [io.moderne.prethink.testing.quality.FindUnmockedExternalCalls](/user-documentation/recipes/recipe-catalog/prethink/testing/quality/findunmockedexternalcalls.md)
  * **Find unmocked external calls in tests**
  * Detect direct HTTP, database, and network calls in unit tests that are not mocked. These cause flaky and slow tests. Integration tests (annotated with @SpringBootTest, @Testcontainers, etc.) are excluded.

## rewrite-program-analysis

_License: Moderne Proprietary License_

_26 recipes_

* [io.moderne.recipe.rewrite-program-analysis.InlineDeprecatedMethods](/user-documentation/recipes/recipe-catalog/recipe/rewrite-program-analysis/inlinedeprecatedmethods.md)
  * **Inline deprecated delegating methods**
  * Automatically generated recipes to inline deprecated method calls that delegate to other methods in the same class.
* [org.openrewrite.analysis.java.FindNullPointerIssues](/user-documentation/recipes/recipe-catalog/analysis/java/findnullpointerissues.md)
  * **Find null pointer issues**
  * Detects potential null pointer dereferences using path-sensitive analysis to distinguish between definite NPEs, possible NPEs, and safe dereferences.
* [org.openrewrite.analysis.java.controlflow.FindUnusedDefinitions](/user-documentation/recipes/recipe-catalog/analysis/java/controlflow/findunuseddefinitions.md)
  * **Find unused variable definitions**
  * Identifies variable assignments whose values are never used before being overwritten.
* [org.openrewrite.analysis.java.controlflow.search.FindCyclomaticComplexity](/user-documentation/recipes/recipe-catalog/analysis/java/controlflow/search/findcyclomaticcomplexity.md)
  * **Find cyclomatic complexity**
  * Calculates the cyclomatic complexity of methods and produces a data table containing the class name, method name, argument types, complexity value, and complexity threshold.
* [org.openrewrite.analysis.java.controlflow.search.FindUnreachableCode](/user-documentation/recipes/recipe-catalog/analysis/java/controlflow/search/findunreachablecode.md)
  * **Find unreachable code**
  * Uses control flow analysis to identify statements that can never be executed.
* [org.openrewrite.analysis.java.dataflow.FindDeadStores](/user-documentation/recipes/recipe-catalog/analysis/java/dataflow/finddeadstores.md)
  * **Find dead stores**
  * Identifies variable assignments whose values are never used before being overwritten or going out of scope.
* [org.openrewrite.analysis.java.dataflow.FindUnclosedResources](/user-documentation/recipes/recipe-catalog/analysis/java/dataflow/findunclosedresources.md)
  * **Find unclosed resources (S2095)**
  * Identifies resources implementing AutoCloseable/Closeable that are opened but not properly closed on all execution paths. Unclosed resources can lead to resource leaks that degrade application performance and stability.
* [org.openrewrite.analysis.java.dataflow.ParameterizeRawCollection](/user-documentation/recipes/recipe-catalog/analysis/java/dataflow/parameterizerawcollection.md)
  * **Parameterize raw `Collection`-typed local variables**
  * Infers a single element type for raw single-arg-generic `java.util.Collection` local variables (`List`, `Set`, `Collection`, `Queue`, `Deque`, `Iterable`) from the arguments passed to their `add(..)` calls and rewrites the declaration to use that type. Initializers are rewritten to use the diamond operator. The original LHS interface and RHS implementation class are preserved. Prototype scope: single-variable declarations, no alias or escape tracking.
* [org.openrewrite.analysis.java.datalineage.TrackDataLineage](/user-documentation/recipes/recipe-catalog/analysis/java/datalineage/trackdatalineage.md)
  * **Track data lineage**
  * Tracks the flow of data from database sources to API sinks to understand data dependencies and support compliance requirements.  ## Prerequisites for detecting a data flow  All of the following conditions must be met for the recipe to report a flow:  1. The source code must contain at least one method call matching a recognized **source** (see below). 2. The source code must contain at least one method call matching a recognized **sink** (see below). 3. The tainted data must propagate from the source to the sink through variable assignments within the same method or via fields across methods in the same compilation unit. 4. No **flow breaker** (see below) may appear on the path between source and sink. 5. The relevant library types (e.g., `java.sql.ResultSet`, `javax.ws.rs.core.Response`) must be on the classpath so that OpenRewrite can resolve types. If types are unresolved, method matchers will not trigger and no flows will be detected.  ## Recognized sources (database reads)  | Category | Classes | | --- | --- | | JDBC | `java.sql.ResultSet` | | JPA (javax) | `javax.persistence.EntityManager`, `Query`, `TypedQuery` | | JPA (jakarta) | `jakarta.persistence.EntityManager`, `Query`, `TypedQuery` | | Hibernate | `org.hibernate.Session`, `org.hibernate.query.Query` | | Spring Data | `org.springframework.data.repository.CrudRepository` | | Spring JDBC | `org.springframework.jdbc.core.JdbcTemplate` | | MyBatis | `org.apache.ibatis.session.SqlSession`, `org.mybatis.spring.SqlSessionTemplate` | | MongoDB | `com.mongodb.client.MongoCollection`, `org.springframework.data.mongodb.core.MongoTemplate` | | Redis | `redis.clients.jedis.Jedis`, `org.springframework.data.redis.core.RedisTemplate`, `ValueOperations`, `HashOperations` | | Cassandra | `com.datastax.driver.core.Session`, `org.springframework.data.cassandra.core.CassandraTemplate` | | Elasticsearch | `org.elasticsearch.client.RestHighLevelClient`, `org.springframework.data.elasticsearch.core.ElasticsearchTemplate` | | Heuristic | Any class with `Repository`, `Dao`, or `Mapper` in its name calling methods starting with find, get, query, search, load, fetch, or select |  ## Recognized sinks (API responses)  | Category | Classes | | --- | --- | | JAX-RS (javax) | `javax.ws.rs.core.Response`, `Response.ResponseBuilder` | | JAX-RS (jakarta) | `jakarta.ws.rs.core.Response`, `Response.ResponseBuilder` | | Spring MVC | `org.springframework.http.ResponseEntity`, `ResponseEntity.BodyBuilder` | | Servlet (javax) | `javax.servlet.http.HttpServletResponse`, `javax.servlet.ServletOutputStream` | | Servlet (jakarta) | `jakarta.servlet.http.HttpServletResponse`, `jakarta.servlet.ServletOutputStream` | | Java I/O | `java.io.PrintWriter`, `java.io.Writer`, `java.io.OutputStream` | | Jackson | `com.fasterxml.jackson.databind.ObjectMapper`, `com.fasterxml.jackson.core.JsonGenerator` | | Gson | `com.google.gson.Gson`, `com.google.gson.JsonWriter` | | GraphQL | `graphql.schema.DataFetcher`, `graphql.schema.PropertyDataFetcher` | | Spring WebFlux | `ServerResponse`, `reactor.core.publisher.Mono`, `reactor.core.publisher.Flux` | | gRPC | `io.grpc.stub.StreamObserver` | | WebSocket | `javax.websocket.Session`, `RemoteEndpoint.Basic`, `jakarta.websocket.*`, `org.springframework.web.socket.WebSocketSession` |  ## Flow breakers  Flows are broken by methods matching common sanitization patterns (anonymize, redact, mask, encrypt, hash, sanitize, etc.) or authorization checks (isAuthorized, hasPermission, hasRole, etc.).
* [org.openrewrite.analysis.java.privacy.FindPiiExposure](/user-documentation/recipes/recipe-catalog/analysis/java/privacy/findpiiexposure.md)
  * **Find PII exposure in logs and external APIs**
  * Detects when Personally Identifiable Information (PII) is exposed through logging statements or sent to external APIs without proper sanitization. This helps prevent data leaks and ensures compliance with privacy regulations like GDPR and CCPA.
* [org.openrewrite.analysis.java.security.FindArrayIndexInjection](/user-documentation/recipes/recipe-catalog/analysis/java/security/findarrayindexinjection.md)
  * **Find improper validation of array index**
  * Detects when user-controlled input flows into array or collection index expressions without proper bounds validation, which could allow out-of-bounds access or denial of service (CWE-129).
* [org.openrewrite.analysis.java.security.FindCommandInjection](/user-documentation/recipes/recipe-catalog/analysis/java/security/findcommandinjection.md)
  * **Find command injection vulnerabilities**
  * Detects when user-controlled input flows into system command execution methods like Runtime.exec() or ProcessBuilder, which could allow attackers to execute arbitrary commands.
* [org.openrewrite.analysis.java.security.FindInsecureCryptoComparison](/user-documentation/recipes/recipe-catalog/analysis/java/security/findinsecurecryptocomparison.md)
  * **Find non-constant-time comparison of cryptographic digests**
  * Detects when the output of `MessageDigest.digest(..)` or `Mac.doFinal(..)` flows into `Arrays.equals(byte[], byte[])`, a non-constant-time comparison that is vulnerable to timing attacks (CWE-208). Use `MessageDigest.isEqual(byte[], byte[])` for security-sensitive byte-array comparisons.
* [org.openrewrite.analysis.java.security.FindJndiInjection](/user-documentation/recipes/recipe-catalog/analysis/java/security/findjndiinjection.md)
  * **Find JNDI injection vulnerabilities**
  * Detects when user-controlled input flows into JNDI lookup operations without proper validation, which could allow an attacker to connect to malicious naming/directory services (CWE-99).
* [org.openrewrite.analysis.java.security.FindLdapInjection](/user-documentation/recipes/recipe-catalog/analysis/java/security/findldapinjection.md)
  * **Find LDAP injection vulnerabilities**
  * Finds LDAP injection vulnerabilities by tracking tainted data flow from user input to LDAP queries.
* [org.openrewrite.analysis.java.security.FindLogInjection](/user-documentation/recipes/recipe-catalog/analysis/java/security/findloginjection.md)
  * **Find log injection vulnerabilities**
  * Detects when user-controlled input flows into logging methods without sanitization, which could allow attackers to forge log entries by injecting newline characters.
* [org.openrewrite.analysis.java.security.FindPathTraversal](/user-documentation/recipes/recipe-catalog/analysis/java/security/findpathtraversal.md)
  * **Find path traversal vulnerabilities**
  * Detects potential path traversal vulnerabilities where user input flows to file system operations without proper validation.
* [org.openrewrite.analysis.java.security.FindProcessControlInjection](/user-documentation/recipes/recipe-catalog/analysis/java/security/findprocesscontrolinjection.md)
  * **Find process control vulnerabilities**
  * Detects when user-controlled input flows into native library loading methods without proper validation, which could allow an attacker to load arbitrary native code (CWE-114).
* [org.openrewrite.analysis.java.security.FindSecurityVulnerabilities](/user-documentation/recipes/recipe-catalog/analysis/java/security/findsecurityvulnerabilities.md)
  * **Find security vulnerabilities using taint analysis**
  * Identifies potential security vulnerabilities where untrusted data from sources flows to sensitive sinks without proper sanitization.
* [org.openrewrite.analysis.java.security.FindSqlInjection](/user-documentation/recipes/recipe-catalog/analysis/java/security/findsqlinjection.md)
  * **Find SQL injection vulnerabilities**
  * Detects potential SQL injection vulnerabilities where user input flows to SQL execution methods without proper sanitization.
* [org.openrewrite.analysis.java.security.FindUnencryptedPiiStorage](/user-documentation/recipes/recipe-catalog/analysis/java/security/findunencryptedpiistorage.md)
  * **Find unencrypted PII storage**
  * Identifies when personally identifiable information (PII) is stored in databases, files, or other persistent storage without encryption.
* [org.openrewrite.analysis.java.security.FindUnsafeReflectionInjection](/user-documentation/recipes/recipe-catalog/analysis/java/security/findunsafereflectioninjection.md)
  * **Find unsafe reflection vulnerabilities**
  * Detects when user-controlled input flows into reflection-based class loading or instantiation without proper validation, which could allow an attacker to instantiate arbitrary classes (CWE-470).
* [org.openrewrite.analysis.java.security.FindXssVulnerability](/user-documentation/recipes/recipe-catalog/analysis/java/security/findxssvulnerability.md)
  * **Find XSS vulnerabilities**
  * Detects potential cross-site scripting vulnerabilities where user input flows to output methods without proper sanitization.
* [org.openrewrite.analysis.java.security.FindXxeVulnerability](/user-documentation/recipes/recipe-catalog/analysis/java/security/findxxevulnerability.md)
  * **Find XXE vulnerabilities**
  * Locates XML parsers that are not configured to prevent XML External Entity (XXE) attacks.
* [org.openrewrite.analysis.java.security.FixXssVulnerabilityJava](/user-documentation/recipes/recipe-catalog/analysis/java/security/fixxssvulnerabilityjava.md)
  * **Fix XSS vulnerabilities in Java sources**
  * Wraps tainted arguments flowing into HTML output sinks with an HTML-escape helper. Reuses `FindXssVulnerability`'s taint spec so the fix's source/sink/sanitizer coverage stays in sync with the detector. The escape helper is picked per `JavaProject` based on which dependency is declared (direct or transitive) in the project's Maven or Gradle build, preferring Spring `HtmlUtils` (`org.springframework:spring-web`), then OWASP `Encode` (`org.owasp.encoder:encoder`), then Commons Text (`org.apache.commons:commons-text`), then deprecated Commons Lang3 (`org.apache.commons:commons-lang3`). Projects with no recognised helper dependency are skipped; arguments already wrapped in a recognised sanitizer are also skipped. For detection without remediation, use `FindXssVulnerability` directly.
* [org.openrewrite.analysis.java.security.SanitizeLogInjection](/user-documentation/recipes/recipe-catalog/analysis/java/security/sanitizeloginjection.md)
  * **Sanitize log injection vulnerabilities**
  * Sanitizes user-controlled input before it flows into logging methods by stripping newline, carriage return, and tab characters that could enable log forging.

## rewrite-react

_License: Moderne Proprietary License_

_51 recipes_

* [org.openrewrite.javascript.cleanup.simplify-object-pattern-property](/user-documentation/recipes/recipe-catalog/javascript/cleanup/simplify-object-pattern-property.md)
  * **Simplify object pattern properties**
  * Simplifies object destructuring patterns where the property name and variable name are the same (e.g., `\{ x: x \}` becomes `\{ x \}`).
* [org.openrewrite.react.16.error-boundaries](/user-documentation/recipes/recipe-catalog/react/16/error-boundaries.md)
  * **Rename `unstable_handleError` to `componentDidCatch`**
  * Renames the unstable error boundary method to the official `componentDidCatch` API introduced in React 16.
* [org.openrewrite.react.16.find-dom-node](/user-documentation/recipes/recipe-catalog/react/16/find-dom-node.md)
  * **Replace `getDOMNode()` with `React.findDOMNode()`**
  * Migrates deprecated `getDOMNode()` calls to `React.findDOMNode()`.
* [org.openrewrite.react.16.react-dom-factories](/user-documentation/recipes/recipe-catalog/react/16/react-dom-factories.md)
  * **Replace `React.DOM` factories with `createElement`**
  * Converts deprecated `React.DOM.xxx()` factory calls to `React.createElement('xxx', ...)`.
* [org.openrewrite.react.16.react-prop-types](/user-documentation/recipes/recipe-catalog/react/16/react-prop-types.md)
  * **Move `React.PropTypes` to `prop-types` package**
  * Extracts PropTypes usage from the React namespace to the separate `prop-types` package introduced in React 15.5.
* [org.openrewrite.react.16.react-to-react-dom](/user-documentation/recipes/recipe-catalog/react/16/react-to-react-dom.md)
  * **Split `React` DOM methods to `ReactDOM`**
  * Moves DOM-specific methods like `React.render()` and `React.findDOMNode()` to `ReactDOM` from the `react-dom` package.
* [org.openrewrite.react.16.replace-create-factory](/user-documentation/recipes/recipe-catalog/react/16/replace-create-factory.md)
  * **Replace `React.createFactory` with `React.createElement`**
  * Replaces `React.createFactory(type)(props, children)` with `React.createElement(type, props, children)`. React.createFactory was deprecated in React 15.6 and removed in React 16.
* [org.openrewrite.react.17.remove-event-persist](/user-documentation/recipes/recipe-catalog/react/17/remove-event-persist.md)
  * **Remove `event.persist()` calls**
  * Removes `event.persist()` calls. React 17 removed event pooling, making persist() unnecessary.
* [org.openrewrite.react.17.rename-unsafe-lifecycles](/user-documentation/recipes/recipe-catalog/react/17/rename-unsafe-lifecycles.md)
  * **Add `UNSAFE_` prefix to deprecated lifecycle methods**
  * Renames `componentWillMount`, `componentWillReceiveProps`, and `componentWillUpdate` to their UNSAFE_ prefixed versions.
* [org.openrewrite.react.17.update-react-imports](/user-documentation/recipes/recipe-catalog/react/17/update-react-imports.md)
  * **Remove unnecessary React imports**
  * Removes the default `import React from 'react'` when React is only used for JSX, which is no longer necessary with the new JSX transform in React 17+.
* [org.openrewrite.react.18.remove-unstable-batched-updates](/user-documentation/recipes/recipe-catalog/react/18/remove-unstable-batched-updates.md)
  * **Remove `unstable_batchedUpdates`**
  * Removes `unstable_batchedUpdates` wrappers from `react-dom`. React 18 automatically batches all state updates, making this function unnecessary.
* [org.openrewrite.react.18.replace-reactdom-render](/user-documentation/recipes/recipe-catalog/react/18/replace-reactdom-render.md)
  * **Replace `ReactDOM.render` with `createRoot`**
  * Migrates from the legacy `ReactDOM.render()` API to the `createRoot()` API from `react-dom/client` introduced in React 18.
* [org.openrewrite.react.18.replace-render-callback](/user-documentation/recipes/recipe-catalog/react/18/replace-render-callback.md)
  * **Remove `ReactDOM.render` callback argument**
  * Removes the third callback argument from `ReactDOM.render(element, container, callback)` calls. Callbacks are not supported in React 18's `createRoot` API.
* [org.openrewrite.react.18.replace-unmount-component-at-node](/user-documentation/recipes/recipe-catalog/react/18/replace-unmount-component-at-node.md)
  * **Replace `unmountComponentAtNode` with `createRoot().unmount()`**
  * Replaces `ReactDOM.unmountComponentAtNode(container)` with `createRoot(container).unmount()` from `react-dom/client`.
* [org.openrewrite.react.19.deprecated-react-types](/user-documentation/recipes/recipe-catalog/react/19/deprecated-react-types.md)
  * **Replace deprecated React types**
  * Replaces deprecated React TypeScript types (`SFC`, `StatelessComponent`, `VFC`, `VoidFunctionComponent`) with their modern equivalents.
* [org.openrewrite.react.19.find-context-consumer](/user-documentation/recipes/recipe-catalog/react/19/find-context-consumer.md)
  * **Find `Context.Consumer` usage**
  * Finds usage of the deprecated `&lt;Context.Consumer&gt;` pattern. In React 19, use the `use()` hook instead.
* [org.openrewrite.react.19.find-deprecated-reactdom-apis](/user-documentation/recipes/recipe-catalog/react/19/find-deprecated-reactdom-apis.md)
  * **Find deprecated ReactDOM APIs**
  * Finds usage of deprecated or removed ReactDOM APIs (`findDOMNode`, `unmountComponentAtNode`, `createFactory`, `renderToNodeStream`) that were removed in React 19.
* [org.openrewrite.react.19.find-element-ref](/user-documentation/recipes/recipe-catalog/react/19/find-element-ref.md)
  * **Find `element.ref` access**
  * Finds direct access of `element.ref` on React elements. In React 19, `element.ref` is deprecated; use `element.props.ref` instead.
* [org.openrewrite.react.19.find-legacy-context-api](/user-documentation/recipes/recipe-catalog/react/19/find-legacy-context-api.md)
  * **Find legacy Context API usage**
  * Finds usage of the legacy Context API (`contextTypes`, `childContextTypes`, `getChildContext`) that was removed in React 19. These must be migrated to `React.createContext()`.
* [org.openrewrite.react.19.no-implicit-ref-callback-return](/user-documentation/recipes/recipe-catalog/react/19/no-implicit-ref-callback-return.md)
  * **Remove implicit ref callback returns**
  * In React 19, ref callbacks can return cleanup functions. Arrow functions with expression bodies implicitly return values, which React would interpret as cleanup functions. This recipe wraps them in block bodies.
* [org.openrewrite.react.19.remove-context-provider](/user-documentation/recipes/recipe-catalog/react/19/remove-context-provider.md)
  * **Remove `Context.Provider` wrapper**
  * In React 19, `&lt;Context.Provider&gt;` is deprecated. Render `&lt;Context&gt;` directly as a provider instead.
* [org.openrewrite.react.19.remove-forward-ref](/user-documentation/recipes/recipe-catalog/react/19/remove-forward-ref.md)
  * **Remove `React.forwardRef` wrapper**
  * `React.forwardRef` is deprecated for Function Components in React 19. This recipe removes the `forwardRef` wrapper and converts ref to a regular prop.
* [org.openrewrite.react.19.remove-prop-types](/user-documentation/recipes/recipe-catalog/react/19/remove-prop-types.md)
  * **Remove `propTypes` assignments**
  * Removes `Component.propTypes = \{...\}` assignments. PropTypes are silently ignored in React 19.
* [org.openrewrite.react.19.remove-react-fc](/user-documentation/recipes/recipe-catalog/react/19/remove-react-fc.md)
  * **Remove `React.FC` type annotation**
  * Removes `React.FC` and `FC` type annotations from functional components, moving the props type to the function parameter instead.
* [org.openrewrite.react.19.replace-act-import](/user-documentation/recipes/recipe-catalog/react/19/replace-act-import.md)
  * **Replace `act` import from react-dom/test-utils**
  * In React 19, `act` has been moved from `react-dom/test-utils` to `react`. This recipe updates the import statement.
* [org.openrewrite.react.19.replace-default-props](/user-documentation/recipes/recipe-catalog/react/19/replace-default-props.md)
  * **Replace `defaultProps` with default parameter values**
  * Converts `Component.defaultProps = \{...\}` to ES6 default parameter values in function components. `defaultProps` for function components is deprecated in React 19.
* [org.openrewrite.react.19.replace-react-shallow-renderer](/user-documentation/recipes/recipe-catalog/react/19/replace-react-shallow-renderer.md)
  * **Replace `react-test-renderer/shallow` import**
  * Changes import of shallow renderer from `react-test-renderer/shallow` to the standalone `react-shallow-renderer` package, as it was removed from React 19.
* [org.openrewrite.react.19.replace-reactdom-hydrate](/user-documentation/recipes/recipe-catalog/react/19/replace-reactdom-hydrate.md)
  * **Replace `ReactDOM.hydrate` with `hydrateRoot`**
  * Migrates from the legacy `ReactDOM.hydrate()` API to the `hydrateRoot()` API from `react-dom/client`.
* [org.openrewrite.react.19.replace-string-ref](/user-documentation/recipes/recipe-catalog/react/19/replace-string-ref.md)
  * **Replace string refs with callback refs**
  * String refs are removed in React 19. This recipe converts them to callback refs.
* [org.openrewrite.react.19.replace-use-form-state](/user-documentation/recipes/recipe-catalog/react/19/replace-use-form-state.md)
  * **Replace `useFormState` with `useActionState`**
  * In React 19, `useFormState` from `react-dom` has been renamed to `useActionState` and moved to `react`.
* [org.openrewrite.react.19.use-context-hook](/user-documentation/recipes/recipe-catalog/react/19/use-context-hook.md)
  * **Replace `useContext` with `use`**
  * In React 19, `useContext` is replaced by the `use` API. This recipe updates both direct and namespace imports.
* [org.openrewrite.react.19.use-ref-required-initial](/user-documentation/recipes/recipe-catalog/react/19/use-ref-required-initial.md)
  * **Add initial value to `useRef()` calls**
  * Adds `undefined` as initial argument to `useRef()` calls with no arguments. Required by `@types/react` 19.
* [org.openrewrite.react.migrate.upgrade-to-react-16](/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-16.md)
  * **Upgrade to React 16**
  * Migrate deprecated APIs for React 16 compatibility. Includes PropTypes extraction, ReactDOM split, DOM factory replacement, createFactory replacement, and error boundary API updates.
* [org.openrewrite.react.migrate.upgrade-to-react-17](/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-17.md)
  * **Upgrade to React 17**
  * Migrate deprecated APIs for React 17 compatibility. Includes all React 16 migrations plus lifecycle method prefixing, import cleanup, and event.persist() removal.
* [org.openrewrite.react.migrate.upgrade-to-react-18](/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-18.md)
  * **Upgrade to React 18**
  * Migrate deprecated APIs for React 18 compatibility. Includes all React 16 and 17 migrations plus the createRoot API migration, removal of unstable_batchedUpdates, unmountComponentAtNode replacement, and render callback removal.
* [org.openrewrite.react.migrate.upgrade-to-react-19](/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-19.md)
  * **Upgrade to React 19**
  * Migrate deprecated and removed APIs for React 19 compatibility. This includes removing forwardRef, updating Context.Provider usage, replacing useContext with use, and other breaking changes.
* [org.openrewrite.react.migration.change-component-prop-value](/user-documentation/recipes/recipe-catalog/react/migration/change-component-prop-value.md)
  * **Change React component prop value**
  * Changes literal prop values on React components. Useful for library upgrades where prop values were renamed (e.g., Material-UI, Ant Design).
* [org.openrewrite.react.native.view-prop-types](/user-documentation/recipes/recipe-catalog/react/native/view-prop-types.md)
  * **Replace `View.propTypes` with `ViewPropTypes`**
  * Migrates deprecated `View.propTypes` references to `ViewPropTypes` from `deprecated-react-native-prop-types`.
* [org.openrewrite.react.refactoring.class-to-functional](/user-documentation/recipes/recipe-catalog/react/refactoring/class-to-functional.md)
  * **Convert class components to functional components**
  * Converts simple render-only class components to functional components.
* [org.openrewrite.react.refactoring.create-class-to-es6](/user-documentation/recipes/recipe-catalog/react/refactoring/create-class-to-es6.md)
  * **Convert `createClass` to ES6 class**
  * Converts `React.createClass()` and `createReactClass()` calls to ES6 class syntax.
* [org.openrewrite.react.refactoring.create-element-to-jsx](/user-documentation/recipes/recipe-catalog/react/refactoring/create-element-to-jsx.md)
  * **Convert `createElement` to JSX**
  * Converts `React.createElement()` calls to JSX syntax for improved readability.
* [org.openrewrite.react.refactoring.manual-bind-to-arrow](/user-documentation/recipes/recipe-catalog/react/refactoring/manual-bind-to-arrow.md)
  * **Convert manual `.bind(this)` to arrow functions**
  * Converts `this.method = this.method.bind(this)` in constructors to class field arrow function syntax.
* [org.openrewrite.react.refactoring.pure-render-mixin](/user-documentation/recipes/recipe-catalog/react/refactoring/pure-render-mixin.md)
  * **Remove `PureRenderMixin`**
  * Removes `PureRenderMixin` from `React.createClass` mixins and adds an explicit `shouldComponentUpdate` method.
* [org.openrewrite.react.refactoring.sort-comp](/user-documentation/recipes/recipe-catalog/react/refactoring/sort-comp.md)
  * **Sort React component methods**
  * Reorders React component methods to follow the recommended lifecycle ordering convention.
* [org.openrewrite.react.search.FindPropUsage](/user-documentation/recipes/recipe-catalog/react/search/findpropusage.md)
  * **Find React prop usage**
  * Locates usages of a specific prop of a React component.
* [org.openrewrite.react.search.FindReactComponent](/user-documentation/recipes/recipe-catalog/react/search/findreactcomponent.md)
  * **Find React component**
  * Locates usages of React components across the codebase including JSX elements and other references. If `componentName` is `null`, finds all React components.
* [org.openrewrite.react.search.find-hook-usage](/user-documentation/recipes/recipe-catalog/react/search/find-hook-usage.md)
  * **Find React hook usage**
  * Finds all React hook usages including built-in and custom hooks, and detects Rules of Hooks violations.
* [org.openrewrite.react.search.find-prop-usage](/user-documentation/recipes/recipe-catalog/react/search/find-prop-usage.md)
  * **Find React prop usage**
  * Finds all prop usages on React JSX elements, with optional filtering by component and prop name.
* [org.openrewrite.react.search.find-react-component](/user-documentation/recipes/recipe-catalog/react/search/find-react-component.md)
  * **Find React component**
  * Finds all usages of a specific React component including imports, JSX elements, and exports.
* [org.openrewrite.react.search.find-server-rendering-usage](/user-documentation/recipes/recipe-catalog/react/search/find-server-rendering-usage.md)
  * **Find server-side rendering API usage**
  * Finds usage of React server-side rendering APIs from `react-dom/server` including `renderToString`, `renderToStaticMarkup`, `renderToNodeStream`, and `renderToStaticNodeStream` to help plan SSR migration.
* [org.openrewrite.react.simplify-react-imports](/user-documentation/recipes/recipe-catalog/react/simplify-react-imports.md)
  * **Simplify `React.xxx` to direct imports**
  * Converts `React.useState`, `React.useEffect`, and other React namespace accesses to direct named imports.

## rewrite-release-metromap

_License: Moderne Proprietary License_

_6 recipes_

* [io.moderne.recipe.releasemetro.FindGradleParentRelationships](/user-documentation/recipes/recipe-catalog/recipe/releasemetro/findgradleparentrelationships.md)
  * **Find Gradle root project to subproject relationships**
  * Gradle has no parent-project concept like Maven. The closest analog is the root project of a multi-project build, so this recipe records the GAV coordinates of each subproject paired with the root project.
* [io.moderne.recipe.releasemetro.FindGradleProjectIDs](/user-documentation/recipes/recipe-catalog/recipe/releasemetro/findgradleprojectids.md)
  * **Find Gradle project IDs**
  * Find Gradle project IDs in build.gradle files to determine the project ID.
* [io.moderne.recipe.releasemetro.FindMavenParentRelationships](/user-documentation/recipes/recipe-catalog/recipe/releasemetro/findmavenparentrelationships.md)
  * **Find Maven parent relationships**
  * Find Maven parent POM relationships to understand project hierarchies in multi-module builds.
* [io.moderne.recipe.releasemetro.FindMavenProjectIDs](/user-documentation/recipes/recipe-catalog/recipe/releasemetro/findmavenprojectids.md)
  * **Find maven project IDs**
  * Find Maven group Id and artifactId in pom.xml files to determine the project ID.
* [io.moderne.recipe.releasemetro.FindPotentiallyUnusedDependencies](/user-documentation/recipes/recipe-catalog/recipe/releasemetro/findpotentiallyunuseddependencies.md)
  * **Find potentially unused dependencies**
  * Collects import information to help identify potentially unused dependencies.
* [io.moderne.recipe.releasemetro.ReleaseMetroPlan](/user-documentation/recipes/recipe-catalog/recipe/releasemetro/releasemetroplan.md)
  * **Analyse Organization's Release Train Metro Plan**
  * Gathers the basic information to create and understand the organizations release train metro plan.

## rewrite-spring

_License: Moderne Proprietary License_

_195 recipes_

* [io.moderne.java.jsf.MigrateToJsf_2_3](/user-documentation/recipes/recipe-catalog/java/jsf/migratetojsf_2_3.md)
  * **Migrate to JSF 2.3**
  * Complete migration to JSF 2.3, including associated technologies like RichFaces. Updates dependencies, transforms XHTML views, and migrates Java APIs.
* [io.moderne.java.jsf.richfaces.ConvertExtendedDataTableHeightToStyle](/user-documentation/recipes/recipe-catalog/java/jsf/richfaces/convertextendeddatatableheighttostyle.md)
  * **Convert height/width attributes to `extendedDataTable` style**
  * Converts height and width attributes to inline style attribute for RichFaces `extendedDataTable` components.
* [io.moderne.java.jsf.richfaces.MigrateRichFaces_4_5](/user-documentation/recipes/recipe-catalog/java/jsf/richfaces/migraterichfaces_4_5.md)
  * **Migrate RichFaces 3.x to 4.5**
  * Complete RichFaces 3.x to 4.5 migration including tag renames, attribute migrations, and Java API updates.
* [io.moderne.java.jsf.richfaces.update45.UpdateXHTMLTags](/user-documentation/recipes/recipe-catalog/java/jsf/richfaces/update45/updatexhtmltags.md)
  * **Migrate RichFaces tags in `xhtml` files**
  * Migrate RichFaces tags in `xhtml` files to RichFaces 4.
* [io.moderne.java.spring.batch.AddEnableJdbcJobRepository](/user-documentation/recipes/recipe-catalog/java/spring/batch/addenablejdbcjobrepository.md)
  * **Add `@EnableJdbcJobRepository` alongside `@EnableBatchProcessing`**
  * In Spring Batch 6, `@EnableBatchProcessing` no longer configures a JDBC-based `JobRepository` on its own: the JDBC store configuration moved to a new `@EnableJdbcJobRepository` annotation, and a bare `@EnableBatchProcessing` now registers an in-memory `ResourcelessJobRepository`. This recipe adds `@EnableJdbcJobRepository` next to every `@EnableBatchProcessing` so JDBC-backed persistence is preserved, moving the JDBC-specific attributes (`dataSourceRef`, `tablePrefix`, etc.) to the new annotation, copying `transactionManagerRef` to it (kept on `@EnableBatchProcessing` as well), converting `isolationLevelForCreate` from its Spring Batch 5 `String` form to the `Isolation` enum, and dropping the removed `lobHandlerRef` attribute. Classes that already declare `@EnableJdbcJobRepository` or `@EnableMongoJobRepository`, and programmatic `DefaultBatchConfiguration` subclasses, are left unchanged. A non-literal `isolationLevelForCreate` value is left in place for manual migration.
* [io.moderne.java.spring.batch.AddJobRegistryToTaskExecutorJobOperator](/user-documentation/recipes/recipe-catalog/java/spring/batch/addjobregistrytotaskexecutorjoboperator.md)
  * **Add `setJobRegistry(..)` to manually configured `TaskExecutorJobOperator`**
  * Spring Batch 6 replaced `TaskExecutorJobLauncher` with `TaskExecutorJobOperator`, which requires both `setJobRepository(..)` and `setJobRegistry(..)` to be called before `afterPropertiesSet()`. When a `TaskExecutorJobOperator` is constructed and initialized manually (typically in a `@Bean` factory method) without a `setJobRegistry(..)` call, add a `JobRegistry` parameter to the enclosing method and call `setJobRegistry(..)` so the operator is fully configured.
* [io.moderne.java.spring.batch.FlagChunkListenerForManualMigration](/user-documentation/recipes/recipe-catalog/java/spring/batch/flagchunklistenerformanualmigration.md)
  * **Flag deprecated `ChunkListener` callbacks for manual migration to `ChunkListener&lt;I, O&gt;`**
  * Spring Batch 6 made `ChunkListener` generic (`ChunkListener&lt;I, O&gt;`) and deprecated the three `ChunkContext`-based callbacks for removal in Spring Batch 7. Their replacements accept the chunk of items (`beforeChunk(Chunk&lt;I&gt;)`, `afterChunk(Chunk&lt;O&gt;)`, `onChunkError(Exception, Chunk&lt;O&gt;)`), which is a disjoint API from `ChunkContext` and fires at a different point in the chunk lifecycle, so the change cannot be performed mechanically. This recipe adds a comment to each deprecated callback naming its exact replacement so the remaining body changes can be done by hand. It does not add type parameters or rewrite method bodies.
* [io.moderne.java.spring.boot.AddSpringBootApplication](/user-documentation/recipes/recipe-catalog/java/spring/boot/addspringbootapplication.md)
  * **Add `@SpringBootApplication` class**
  * Adds a `@SpringBootApplication` class containing a main method to bootify your Spring Framework application.
* [io.moderne.java.spring.boot.FieldToConstructorInjection](/user-documentation/recipes/recipe-catalog/java/spring/boot/fieldtoconstructorinjection.md)
  * **Convert field injection to constructor injection**
  * Converts `@Autowired` field injection to constructor injection pattern. For non-final classes, adds both a no-args constructor and the autowired constructor to maintain compatibility with extending classes. Moves `@Qualifier` annotations to constructor parameters.
* [io.moderne.java.spring.boot.IsLikelyNotSpringBoot](/user-documentation/recipes/recipe-catalog/java/spring/boot/islikelynotspringboot.md)
  * **Is likely not a Spring Boot project**
  * Marks the project if it's likely not a Spring Boot project.
* [io.moderne.java.spring.boot.IsLikelySpringBoot](/user-documentation/recipes/recipe-catalog/java/spring/boot/islikelyspringboot.md)
  * **Is likely a Spring Boot project**
  * Marks the project if it's likely a Spring Boot project.
* [io.moderne.java.spring.boot.MarkEmbeddedServerProvidedForWar](/user-documentation/recipes/recipe-catalog/java/spring/boot/markembeddedserverprovidedforwar.md)
  * **Mark embedded server as provided for WAR projects**
  * For WAR-packaged projects migrating to Spring Boot, add the embedded Tomcat starter with provided scope to prevent conflicts with the external servlet container.
* [io.moderne.java.spring.boot.MigrateSpringFrameworkDependenciesToSpringBoot](/user-documentation/recipes/recipe-catalog/java/spring/boot/migratespringframeworkdependenciestospringboot.md)
  * **Migrate Spring Framework dependencies to Spring Boot**
  * Migrate Spring Framework dependencies to Spring Boot.
* [io.moderne.java.spring.boot.ReplaceSpringFrameworkDepsWithBootStarters](/user-documentation/recipes/recipe-catalog/java/spring/boot/replacespringframeworkdepswithbootstarters.md)
  * **Replace Spring Framework dependencies with Spring Boot starters**
  * Replace common Spring Framework dependencies with their Spring Boot starter equivalents. This recipe handles the direct dependency replacement; any remaining Spring Framework dependencies that become transitively available through starters are cleaned up separately by RemoveRedundantDependencies.
* [io.moderne.java.spring.boot.SpringToSpringBoot](/user-documentation/recipes/recipe-catalog/java/spring/boot/springtospringboot.md)
  * **Migrate Spring Framework to Spring Boot**
  * Migrate non Spring Boot applications to the latest compatible Spring Boot release. This recipe will modify an application's build files introducing Maven dependency management for Spring Boot, or adding the Gradle Spring Boot build plugin.
* [io.moderne.java.spring.boot3.AddValidToConfigurationPropertiesFields](/user-documentation/recipes/recipe-catalog/java/spring/boot3/addvalidtoconfigurationpropertiesfields.md)
  * **Add `@Valid` annotation to fields**
  * In Spring Boot 3.4, validation of `@ConfigurationProperties` classes annotated with `@Validated` now follows the Bean Validation specification, only cascading to nested properties if the corresponding field is annotated with `@Valid`. The recipe will add a `@Valid` annotation to each field which has a type that has a field which is annotated with a `jakarta.validation.constraints.*` annotation.
* [io.moderne.java.spring.boot3.CommentDeprecations](/user-documentation/recipes/recipe-catalog/java/spring/boot3/commentdeprecations.md)
  * **Comment deprecated methods in Spring 3.4**
  * Spring Boot 3.4 deprecates methods that are not commonly used or need manual interaction.
* [io.moderne.java.spring.boot3.CommentOnMockAndSpyBeansInConfigSpring34](/user-documentation/recipes/recipe-catalog/java/spring/boot3/commentonmockandspybeansinconfigspring34.md)
  * **Comment on `@MockitoSpyBean` and `@MockitoBean` in `@Configuration`**
  * **Deprecated**: use `io.moderne.java.spring.boot3.ReplaceMockitoBeanWithBeanMethod` instead, which rewrites the field into a working `@Bean` method rather than adding a TODO comment. As stated in [Spring Docs](https://docs.spring.io/spring-framework/reference/testing/annotations/integration-spring/annotation-mockitobean.html) `@MockitoSpyBean` and `@MockitoBean` will only work in tests, explicitly not in `@Configuration` annotated classes.
* [io.moderne.java.spring.boot3.ConditionalOnAvailableEndpointMigrationSpring34](/user-documentation/recipes/recipe-catalog/java/spring/boot3/conditionalonavailableendpointmigrationspring34.md)
  * **Migrate `ConditionalOnAvailableEndpoint` for Spring Boot 3.4**
  * Migrate `@ConditionalOnAvailableEndpoint(EndpointExposure.CLOUD_FOUNDRY)` to `@ConditionalOnAvailableEndpoint(EndpointExposure.WEB)` for Spring Boot 3.4.
* [io.moderne.java.spring.boot3.MigrateAbstractDiscoveredEndpointConstructor](/user-documentation/recipes/recipe-catalog/java/spring/boot3/migrateabstractdiscoveredendpointconstructor.md)
  * **Migrate `AbstractDiscoveredEndpoint` deprecated constructor**
  * The boolean-parameter constructor of `AbstractDiscoveredEndpoint` has been deprecated in Spring Boot 3.4. This recipe transforms it to use the new constructor with an `Access` parameter.
* [io.moderne.java.spring.boot3.MigrateAbstractExposableEndpointConstructor](/user-documentation/recipes/recipe-catalog/java/spring/boot3/migrateabstractexposableendpointconstructor.md)
  * **Migrate `AbstractExposableEndpoint` deprecated constructor**
  * The boolean-parameter constructor of `AbstractExposableEndpoint` has been deprecated in Spring Boot 3.4. This recipe transforms it to use the new constructor with an `Access` parameter instead of boolean `enableByDefault`.
* [io.moderne.java.spring.boot3.MigrateEndpointAnnotationAccessValueSpring34](/user-documentation/recipes/recipe-catalog/java/spring/boot3/migrateendpointannotationaccessvaluespring34.md)
  * **Migrate `@Endpoint`s `defaultAccess` value**
  * Since Spring Boot 3.4 the `@Endpoint` access configuration values are no longer `true|false` but `none|read-only|unrestricted`.
* [io.moderne.java.spring.boot3.MigrateEndpointDiscovererConstructor](/user-documentation/recipes/recipe-catalog/java/spring/boot3/migrateendpointdiscovererconstructor.md)
  * **Migrate `EndpointDiscoverer` deprecated constructor**
  * The 4-parameter constructor of `EndpointDiscoverer` has been deprecated in Spring Boot 3.4. This recipe transforms it to use the new 5-parameter constructor with an additional Collection parameter.
* [io.moderne.java.spring.boot3.MigrateEntityManagerFactoryBuilderConstructor](/user-documentation/recipes/recipe-catalog/java/spring/boot3/migrateentitymanagerfactorybuilderconstructor.md)
  * **Migrate `EntityManagerFactoryBuilder` deprecated constructor**
  * The constructors of `EntityManagerFactoryBuilder` have been deprecated in Spring Boot 3.4. This recipe transforms them to use the new constructor with a Function parameter for property mapping.
* [io.moderne.java.spring.boot3.MigrateJmxEndpointDiscovererConstructor](/user-documentation/recipes/recipe-catalog/java/spring/boot3/migratejmxendpointdiscovererconstructor.md)
  * **Migrate `JmxEndpointDiscoverer` deprecated constructor**
  * The 4-parameter constructor of `JmxEndpointDiscoverer` has been deprecated in Spring Boot 3.4. This recipe transforms it to use the new 5-parameter constructor with an additional Collection parameter.
* [io.moderne.java.spring.boot3.MigrateRestTemplateToRestClient](/user-documentation/recipes/recipe-catalog/java/spring/boot3/migrateresttemplatetorestclient.md)
  * **Migrate `RestTemplate` to `RestClient`**
  * Migrates Spring's `RestTemplate` to the modern `RestClient` API introduced in Spring Framework 6.1. `RestClient` provides a fluent, synchronous API that is the recommended approach for new development. This recipe converts constructor calls, type declarations, and common method invocations (`getForObject`, `getForEntity`, `postForObject`, `postForEntity`, `patchForObject`, `put`, `delete`, `headForHeaders`, `postForLocation`, `optionsForAllow`, `exchange`) to their `RestClient` equivalents.
* [io.moderne.java.spring.boot3.MigrateWebEndpointDiscovererConstructor](/user-documentation/recipes/recipe-catalog/java/spring/boot3/migratewebendpointdiscovererconstructor.md)
  * **Migrate WebEndpointDiscoverer 6-parameter constructor to 8-parameter**
  * The 6-parameter constructor of `WebEndpointDiscoverer` has been deprecated in Spring Boot 3.3. This recipe adds two new parameters (`AdditionalPathsMapper` and `OperationFilter&lt;WebOperation&gt;`) to the constructor and updates the Bean method signature to inject them as `ObjectProvider` types.
* [io.moderne.java.spring.boot3.RemoveDeprecatedConditions](/user-documentation/recipes/recipe-catalog/java/spring/boot3/removedeprecatedconditions.md)
  * **Remove Spring Boot 3.5 deprecated conditions**
  * Replace Spring Boot 3.5 deprecated condition classes with their corresponding conditional annotations.
* [io.moderne.java.spring.boot3.RemoveReplaceNoneFromAutoConfigureTestDatabase](/user-documentation/recipes/recipe-catalog/java/spring/boot3/removereplacenonefromautoconfiguretestdatabase.md)
  * **Remove `Replace.NONE` from `@AutoConfigureTestDatabase`**
  * `Replace.NONE` is the default value for `@AutoConfigureTestDatabase` since Spring Boot 3.4.
* [io.moderne.java.spring.boot3.RemoveTestRestTemplateEnableRedirectsOptionRecipe](/user-documentation/recipes/recipe-catalog/java/spring/boot3/removetestresttemplateenableredirectsoptionrecipe.md)
  * **Remove `TestRestTemplate.HttpClientOption.ENABLE_REDIRECTS` option**
  * The `TestRestTemplate` now uses the same follow redirects settings as the regular RestTemplate. The `HttpOption.ENABLE_REDIRECTS` option has also been deprecated. This recipe removes the option from the `TestRestTemplate` constructor arguments.
* [io.moderne.java.spring.boot3.ReplaceConditionalOutcomeInverse](/user-documentation/recipes/recipe-catalog/java/spring/boot3/replaceconditionaloutcomeinverse.md)
  * **Replace ConditionOutcome.inverse() with constructor**
  * Replace deprecated `ConditionOutcome.inverse(ConditionOutcome outcome)` calls with `new ConditionOutcome(!outcome.isMatch(), outcome.getConditionMessage())`.
* [io.moderne.java.spring.boot3.ReplaceDeprecatedKafkaConnectionDetailsBootstrapServerGetters](/user-documentation/recipes/recipe-catalog/java/spring/boot3/replacedeprecatedkafkaconnectiondetailsbootstrapservergetters.md)
  * **Replace deprecated `KafkaConnectionDetails` bootstrap server methods**
  * Replace deprecated `KafkaConnectionDetails` bootstrap server methods with chained calls. For example, `getProducerBootstrapServers()` becomes `getProducer().getBootstrapServers()`.
* [io.moderne.java.spring.boot3.ReplaceDeprecatedThreadPoolTaskSchedulerConstructor](/user-documentation/recipes/recipe-catalog/java/spring/boot3/replacedeprecatedthreadpooltaskschedulerconstructor.md)
  * **Replace deprecated ThreadPoolTaskSchedulerBuilder 5-argument constructor**
  * The 5-parameter constructor of `ThreadPoolTaskSchedulerBuilder` has been deprecated in Spring Boot 3.5. This recipe transforms it to use the builder pattern instead, omitting null values and defaults.
* [io.moderne.java.spring.boot3.ReplaceKafkaTransactionManagerSetter](/user-documentation/recipes/recipe-catalog/java/spring/boot3/replacekafkatransactionmanagersetter.md)
  * **Use `kafkaAwareTransactionManager` setter**
  * Replace deprecated `ContainerProperties#setTransactionManager(org.springframework.transaction.PlatformTransactionManager)` method with `ContainerProperties#setKafkaAwareTransactionManager(org.springframework.kafka.transaction.KafkaAwareTransactionManager)`. The method will be replaced only if its argument has the type `KafkaAwareTransactionManager`.
* [io.moderne.java.spring.boot3.ReplaceMockitoBeanWithBeanMethod](/user-documentation/recipes/recipe-catalog/java/spring/boot3/replacemockitobeanwithbeanmethod.md)
  * **Replace `@MockitoBean` and `@MockitoSpyBean` with `@Bean` methods in `@Configuration` classes**
  * `@MockitoBean` and `@MockitoSpyBean` only work in test classes, not in `@Configuration` classes. This recipe converts annotated fields into `@Bean` methods using `Mockito.mock()` or `Mockito.spy()`.
* [io.moderne.java.spring.boot3.ReplaceTaskExecutorNameByApplicationTaskExecutorName](/user-documentation/recipes/recipe-catalog/java/spring/boot3/replacetaskexecutornamebyapplicationtaskexecutorname.md)
  * **Use bean name `applicationTaskExecutor` instead of `taskExecutor`**
  * Spring Boot 3.5 removed the bean name `taskExecutor`. Where this bean name is used, the recipe replaces the bean name to `applicationTaskExecutor`. This also includes instances where the developer provided their own bean named `taskExecutor`. This also includes scenarios where JSR-250's `@Resource` annotation is used.
* [io.moderne.java.spring.boot3.ResolveDeprecationsSpringBoot_3_3](/user-documentation/recipes/recipe-catalog/java/spring/boot3/resolvedeprecationsspringboot_3_3.md)
  * **Resolve Deprecations in Spring Boot 3.3**
  * Migrates Deprecations in the Spring Boot 3.3 Release. Contains the removal of `DefaultJmsListenerContainerFactoryConfigurer.setObservationRegistry` and adds new parameter of `WebEndpointDiscoverer` constructor.
* [io.moderne.java.spring.boot3.ResolveTaskExecutorFromContext](/user-documentation/recipes/recipe-catalog/java/spring/boot3/resolvetaskexecutorfromcontext.md)
  * **Replace `taskExecutor` with `applicationTaskExecutor`**
  * Use bean name `applicationTaskExecutor` instead of `taskExecutor` when resolving `TaskExecutor` Bean from application context.
* [io.moderne.java.spring.boot3.SpringBoot34Deprecations](/user-documentation/recipes/recipe-catalog/java/spring/boot3/springboot34deprecations.md)
  * **Migrate Spring Boot 3.4 deprecated classes and methods**
  * Migrate deprecated classes and methods that have been marked for removal in Spring Boot 4.0. This includes constructor changes for `EntityManagerFactoryBuilder`, `HikariCheckpointRestoreLifecycle`, and various actuator endpoint discovery classes.
* [io.moderne.java.spring.boot3.SpringBoot35Deprecations](/user-documentation/recipes/recipe-catalog/java/spring/boot3/springboot35deprecations.md)
  * **Migrate Spring Boot 3.5 deprecated classes and methods**
  * Migrate deprecated classes and methods that have been marked for removal in Spring Boot 3.5.
* [io.moderne.java.spring.boot3.SpringBoot3BestPractices](/user-documentation/recipes/recipe-catalog/java/spring/boot3/springboot3bestpractices.md)
  * **Spring Boot 3.5 best practices**
  * Applies best practices to Spring Boot 3.5+ applications.
* [io.moderne.java.spring.boot3.SpringBootProperties_3_4](/user-documentation/recipes/recipe-catalog/java/spring/boot3/springbootproperties_3_4-moderne-edition.md)
  * **Migrate `@Endpoint` Security properties to 3.4 (Moderne Edition)**
  * Migrate the settings for Spring Boot Management Endpoint Security from `true`|`false` to `read-only`|`none`.
* [io.moderne.java.spring.boot3.UpdateOpenTelemetryResourceAttributes](/user-documentation/recipes/recipe-catalog/java/spring/boot3/updateopentelemetryresourceattributes.md)
  * **Update OpenTelemetry resource attributes**
  * The `service.group` resource attribute has been deprecated for OpenTelemetry in Spring Boot 3.5. Consider using alternative attributes or remove the deprecated attribute.
* [io.moderne.java.spring.boot3.UpgradeGradle7Spring34](/user-documentation/recipes/recipe-catalog/java/spring/boot3/upgradegradle7spring34.md)
  * **Upgrade Gradle to 7.6.4+ for Spring Boot 3.4**
  * Spring Boot 3.4 requires Gradle 7.6.4.
* [io.moderne.java.spring.boot3.UpgradeGradle8Spring34](/user-documentation/recipes/recipe-catalog/java/spring/boot3/upgradegradle8spring34.md)
  * **Upgrade Gradle 8 to 8.4+ for Spring Boot 3.4**
  * Spring Boot 3.4 requires Gradle 8.4+.
* [io.moderne.java.spring.boot3.UpgradeMyBatisToSpringBoot_3_4](/user-documentation/recipes/recipe-catalog/java/spring/boot3/upgrademybatistospringboot_3_4.md)
  * **Upgrade MyBatis to Spring Boot 3.4**
  * Upgrade MyBatis Spring modules to a version corresponding to Spring Boot 3.4.
* [io.moderne.java.spring.boot3.UpgradeMyBatisToSpringBoot_3_5](/user-documentation/recipes/recipe-catalog/java/spring/boot3/upgrademybatistospringboot_3_5.md)
  * **Upgrade MyBatis to Spring Boot 3.5**
  * Upgrade MyBatis Spring modules to a version corresponding to Spring Boot 3.5.
* [io.moderne.java.spring.boot3.UpgradeSpringBoot_3_0](/user-documentation/recipes/recipe-catalog/java/spring/boot3/upgradespringboot_3_0-moderne-edition.md)
  * **Migrate to Spring Boot 3.0 (Moderne Edition)**
  * Migrate applications to the latest Spring Boot 3.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations that are required as part of the migration to Spring Boot 3.0, including the Tomcat 10.1 upgrade which removes `LegacyCookieProcessor`.
* [io.moderne.java.spring.boot3.UpgradeSpringBoot_3_4](/user-documentation/recipes/recipe-catalog/java/spring/boot3/upgradespringboot_3_4-moderne-edition.md)
  * **Migrate to Spring Boot 3.4 (Moderne Edition)**
  * Migrate applications to the latest Spring Boot 3.4 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 3.4.
* [io.moderne.java.spring.boot3.UpgradeSpringBoot_3_5](/user-documentation/recipes/recipe-catalog/java/spring/boot3/upgradespringboot_3_5-moderne-edition.md)
  * **Migrate to Spring Boot 3.5 (Moderne Edition)**
  * Migrate applications to the latest Spring Boot 3.5 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 3.5.
* [io.moderne.java.spring.boot3.UpgradeSpringCloudAWSToSpringBoot_3_4](/user-documentation/recipes/recipe-catalog/java/spring/boot3/upgradespringcloudawstospringboot_3_4.md)
  * **Upgrade Spring Cloud AWS to Spring Boot 3.4 compatible version**
  * Upgrade the Spring Cloud AWS dependency to a version compatible with Spring Boot 3.4.
* [io.moderne.java.spring.boot3.UpgradeSpringKafka_3_3](/user-documentation/recipes/recipe-catalog/java/spring/boot3/upgradespringkafka_3_3.md)
  * **Migrate to Spring Kafka 3.3**
  * Migrate applications to the latest Spring Kafka 3.3 release.
* [io.moderne.java.spring.boot4.AddAutoConfigureMockMvc](/user-documentation/recipes/recipe-catalog/java/spring/boot4/addautoconfiguremockmvc.md)
  * **Add `@AutoConfigureMockMvc` to `@SpringBootTest` classes using `MockMvc`**
  * Adds `@AutoConfigureMockMvc` annotation to classes annotated with `@SpringBootTest` that use `MockMvc`.
* [io.moderne.java.spring.boot4.AddFlywayStarters](/user-documentation/recipes/recipe-catalog/java/spring/boot4/addflywaystarters.md)
  * **Add Flyway starters**
  * Adds spring-boot-starter-flyway and spring-boot-starter-flyway-test dependencies when Flyway usage is detected in the module.
* [io.moderne.java.spring.boot4.AddJackson2ForJerseyJson](/user-documentation/recipes/recipe-catalog/java/spring/boot4/addjackson2forjerseyjson.md)
  * **Add Jackson2 for Jersey using JSON**
  * Check whether a module uses Jersey on combination with JSON and adds the needed `spring-boot-jackson` dependency and conditionally `spring-boot-jackson2` dependency.
* [io.moderne.java.spring.boot4.AddLenientMockitoSettings](/user-documentation/recipes/recipe-catalog/java/spring/boot4/addlenientmockitosettings.md)
  * **Add `@MockitoSettings(strictness = Strictness.LENIENT)` for `@MockitoBean` tests**
  * When migrating from `@MockBean` to `@MockitoBean`, the implicit LENIENT Mockito strictness from Spring Boot's `MockitoPostProcessor` is lost. If `@ExtendWith(MockitoExtension.class)` is present, Mockito enforces STRICT_STUBS by default, causing `UnnecessaryStubbingException` for tests with unused stubs. This recipe adds `@MockitoSettings(strictness = Strictness.LENIENT)` to preserve the original behavior.
* [io.moderne.java.spring.boot4.AddLiquibaseStarters](/user-documentation/recipes/recipe-catalog/java/spring/boot4/addliquibasestarters.md)
  * **Add Liquibase starters**
  * Adds spring-boot-starter-liquibase and spring-boot-starter-liquibase-test dependencies when Liquibase usage is detected in the module.
* [io.moderne.java.spring.boot4.AddModularStarters](/user-documentation/recipes/recipe-catalog/java/spring/boot4/addmodularstarters.md)
  * **Add Spring Boot 4.0 modular starters**
  * Add Spring Boot 4.0 starter dependencies based on package usage. Note: Higher-level starters (like data-jpa) include lower-level ones (like jdbc) transitively, so only the highest-level detected starter is added for each technology.
* [io.moderne.java.spring.boot4.AddMongoDbRepresentationProperties](/user-documentation/recipes/recipe-catalog/java/spring/boot4/addmongodbrepresentationproperties.md)
  * **Add MongoDB representation properties for UUID and BigDecimal**
  * Adds the 'spring.mongodb.representation.uuid' property with value 'standard' and the 'spring.data.mongodb.representation.big-decimal' property with the value 'decimal128' to Spring configuration files when a MongoDB dependency is detected.
* [io.moderne.java.spring.boot4.AddMssqlKerberosJaasConfig](/user-documentation/recipes/recipe-catalog/java/spring/boot4/addmssqlkerberosjaasconfig.md)
  * **Add `useDefaultJaasConfig=true` to MSSQL Kerberos JDBC URLs**
  * For MSSQL JDBC connections using Kerberos authentication (`authenticationScheme=JavaKerberos` or `integratedSecurity=true`), adds `useDefaultJaasConfig=true` to the connection string. This is required for compatibility with Keycloak 26.4+ which changes JAAS configuration handling.
* [io.moderne.java.spring.boot4.AddValidationStarterDependency](/user-documentation/recipes/recipe-catalog/java/spring/boot4/addvalidationstarterdependency.md)
  * **Add `spring-boot-starter-validation` dependency**
  * In Spring Boot 4, validation is no longer auto-included from the web starter. This recipe adds the `spring-boot-starter-validation` dependency when Jakarta Validation annotations are used in the project.
* [io.moderne.java.spring.boot4.AddWithHttpClientDefaultsToReactorBuilders](/user-documentation/recipes/recipe-catalog/java/spring/boot4/addwithhttpclientdefaultstoreactorbuilders.md)
  * **Preserve system-proxy defaults on Reactor HTTP client builders**
  * Spring Boot 4.1 no longer applies `proxyWithSystemProperties()` by default on `ReactorClientHttpRequestFactoryBuilder` and `ReactorClientHttpConnectorBuilder`. This recipe appends `.withHttpClientDefaults()` to chains starting at `ClientHttpRequestFactoryBuilder.reactor()` or `ClientHttpConnectorBuilder.reactor()` to restore the previous behavior. Chains that already call `withHttpClientDefaults(..)` or `proxyWithSystemProperties(..)` are left untouched.
* [io.moderne.java.spring.boot4.AdoptJackson3](/user-documentation/recipes/recipe-catalog/java/spring/boot4/adoptjackson3.md)
  * **Adopt Jackson 3**
  * Adopt Jackson 3 which is supported by Spring Boot 4 and Jackson 2 support is deprecated.
* [io.moderne.java.spring.boot4.FlagDeprecatedReactorNettyHttpClientMapper](/user-documentation/recipes/recipe-catalog/java/spring/boot4/flagdeprecatedreactornettyhttpclientmapper.md)
  * **Flag deprecated ReactorNettyHttpClientMapper for migration**
  * Adds a TODO comment to classes implementing the deprecated `ReactorNettyHttpClientMapper` interface. Migration to `ClientHttpConnectorBuilderCustomizer&lt;ReactorClientHttpConnectorBuilder&gt;` requires wrapping the HttpClient configuration in `builder.withHttpClientCustomizer(...)`.
* [io.moderne.java.spring.boot4.FlagGrpcClientStubsForImportGrpcClients](/user-documentation/recipes/recipe-catalog/java/spring/boot4/flaggrpcclientstubsforimportgrpcclients.md)
  * **Flag gRPC client stub injections that need `@ImportGrpcClients`**
  * Spring gRPC 1.0 auto-scanned generated proto stubs and registered them as client beans; Spring gRPC 1.1 no longer does, so each stub must be imported explicitly with `@ImportGrpcClients`. The correct stub list and annotation location are application-specific, so rather than editing code this recipe adds a TODO comment to classes that inject a gRPC client stub (a field or constructor/method parameter whose type extends `io.grpc.stub.AbstractStub`) so the annotation can be added by hand.
* [io.moderne.java.spring.boot4.InsertPropertyMapperAlwaysMethodInvocation](/user-documentation/recipes/recipe-catalog/java/spring/boot4/insertpropertymapperalwaysmethodinvocation.md)
  * **Preserve `PropertyMapper` null-passing behavior**
  * Spring Boot 4.0 changes the `PropertyMapper` behavior so that `from()` no longer calls `to()` when the source value is `null`. This recipe inserts `.always()` before terminal mapping methods to preserve the previous behavior. Chains that already contain `.whenNonNull()` or `.alwaysApplyingWhenNonNull()` are skipped, as they explicitly opted into null-skipping behavior which is now the default.
* [io.moderne.java.spring.boot4.MigrateAutoConfigureMockMvcHtmlUnit](/user-documentation/recipes/recipe-catalog/java/spring/boot4/migrateautoconfiguremockmvchtmlunit.md)
  * **Migrate `@AutoConfigureMockMvc` HtmlUnit attributes to nested `@HtmlUnit`**
  * Spring Boot 4 moved `webClientEnabled` and `webDriverEnabled` on `@AutoConfigureMockMvc` under a nested `@HtmlUnit` annotation as `webClient` and `webDriver`, and relocated the annotation to `org.springframework.boot.webmvc.test.autoconfigure`. This recipe rewrites the attribute syntax and relocates the annotation in one step, so it must run before any package-relocation recipe touches `@AutoConfigureMockMvc`.
* [io.moderne.java.spring.boot4.MigrateAwspringSqsMessageConverter](/user-documentation/recipes/recipe-catalog/java/spring/boot4/migrateawspringsqsmessageconverter.md)
  * **Migrate awspring SQS default converter `setObjectMapper` to constructor injection**
  * In spring-cloud-aws 4.0 `AbstractMessagingMessageConverter.setObjectMapper(...)` was removed and the `JsonMapper` is supplied through the `SqsMessagingMessageConverter` constructor. Rewrites `SqsTemplate.builder().configureDefaultConverter(c -&gt; c.setObjectMapper(mapper))` to `SqsTemplate.builder().messageConverter(new SqsMessagingMessageConverter(mapper))`, or adds a TODO comment when the configurer does more than set the object mapper.
* [io.moderne.java.spring.boot4.MigrateHazelcastSpringSession](/user-documentation/recipes/recipe-catalog/java/spring/boot4/migratehazelcastspringsession.md)
  * **Migrate Spring Session Hazelcast to Hazelcast Spring Session**
  * Spring Boot 4.0 removed direct support for Spring Session Hazelcast. The Hazelcast team now maintains their own Spring Session integration. This recipe changes the dependency from `org.springframework.session:spring-session-hazelcast` to `com.hazelcast.spring:hazelcast-spring-session` and updates the package from `org.springframework.session.hazelcast` to `com.hazelcast.spring.session`.
* [io.moderne.java.spring.boot4.MigrateJsonFactoryDecorator](/user-documentation/recipes/recipe-catalog/java/spring/boot4/migratejsonfactorydecorator.md)
  * **Migrate `JsonFactoryDecorator` to `TokenStreamFactoryBuilderDecorator`**
  * Migrates classes that implement `net.logstash.logback.decorate.JsonFactoryDecorator` (removed in logstash-logback-encoder 9.0) to implement `TokenStreamFactoryBuilderDecorator&lt;JsonFactory, JsonFactoryBuilder&gt;`. The `decorate(JsonFactory)` method is rewritten to take and return a `JsonFactoryBuilder`, and mutator calls inside the body (e.g. `setCharacterEscapes`) are folded into the equivalent builder calls (e.g. `characterEscapes`) where a mapping is known. Unmapped mutators are kept by name with a `TODO` comment for manual review.
* [io.moderne.java.spring.boot4.MigrateLayertoolsToTools_4_1](/user-documentation/recipes/recipe-catalog/java/spring/boot4/migratelayertoolstotools_4_1.md)
  * **Migrate `layertools` jarmode to `tools`**
  * The `layertools` jar mode was deprecated in Spring Boot 3.3 and removed in Spring Boot 4.1. Replace `-Djarmode=layertools` invocations (commonly found in Dockerfiles and shell scripts) with `-Djarmode=tools`, which provides equivalent and expanded functionality.
* [io.moderne.java.spring.boot4.MigrateMockMvcToAssertJ](/user-documentation/recipes/recipe-catalog/java/spring/boot4/migratemockmvctoassertj.md)
  * **Migrate MockMvc to AssertJ assertions**
  * Migrates Spring MockMvc tests from Hamcrest-style `andExpect()` assertions to AssertJ-style fluent assertions. Changes `MockMvc` to `MockMvcTester` and converts assertion chains.
* [io.moderne.java.spring.boot4.MigratePropertyMapper](/user-documentation/recipes/recipe-catalog/java/spring/boot4/migratepropertymapper.md)
  * **Migrate `PropertyMapper` API for Spring Boot 4.0**
  * Migrates `PropertyMapper` usage to accommodate Spring Boot 4.0 behavioral changes. In Boot 4.0, `PropertyMapper.from()` no longer calls `to()` when the source value is `null`. This recipe first inserts `.always()` on bare chains to preserve null-passing behavior, then removes the now-redundant `.whenNonNull()` and `.alwaysApplyingWhenNonNull()` calls. Guarded by a Spring Boot &lt; 4.0 precondition so that on subsequent recipe cycles (after the version is bumped by the parent migration recipe), this recipe becomes a no-op — preventing it from incorrectly adding `.always()` to chains that just had `.whenNonNull()` stripped.
* [io.moderne.java.spring.boot4.MigrateRestAssured](/user-documentation/recipes/recipe-catalog/java/spring/boot4/migraterestassured.md)
  * **Add explicit version for REST Assured**
  * REST Assured is no longer managed by Spring Boot 4.0. This recipe adds an explicit version to REST Assured dependencies.
* [io.moderne.java.spring.boot4.MigrateSpringGrpcClientChannelProperties](/user-documentation/recipes/recipe-catalog/java/spring/boot4/migratespringgrpcclientchannelproperties.md)
  * **Migrate Spring gRPC client channel properties to 1.1**
  * Migrate the per-channel client properties renamed in Spring gRPC 1.1, in `application.properties` and `application.yml`. The `spring.grpc.client.channels` map became `spring.grpc.client.channel`, and several leaf keys were restructured (for example `address` to `target`, `default-deadline` to `default.deadline`, `keep-alive-time` to `keepalive.time`, and `max-inbound-message-size` to `inbound.message.max-size`). Keys that only changed parent keep their suffix. In `.properties` files only kebab-case keys are matched.
* [io.moderne.java.spring.boot4.MigrateSpringGrpc_1_1](/user-documentation/recipes/recipe-catalog/java/spring/boot4/migratespringgrpc_1_1.md)
  * **Migrate from standalone Spring gRPC 1.0 to Spring Boot 4.1 (Spring gRPC 1.1)**
  * Migrate applications from the standalone Spring gRPC project (`org.springframework.grpc:*`, Spring gRPC 1.0) to the version bundled with Spring Boot 4.1 (Spring gRPC 1.1). Spring gRPC graduated into Spring Boot in 4.1, so its starters, BOM, configuration properties, and test annotations move under `org.springframework.boot`. Following the [Spring gRPC 1.1 Migration Guide](https://github.com/spring-projects/spring-grpc/wiki/Spring-gRPC-1.1-Migration-Guide), this recipe swaps the `org.springframework.grpc` starters for the Spring Boot `spring-boot-starter-grpc-*` starters (splitting the combined runtime and test starters) and removes the standalone `spring-grpc-dependencies` BOM; renames the `spring.grpc.server.*` and per-channel `spring.grpc.client.channels.&lt;name&gt;.*` properties that changed in 1.1 and splits `spring.grpc.server.address: host:port` into separate `address` and `port`; renames the `@AutoConfigureInProcessTransport` and `@LocalGrpcPort` test annotations; and, because 1.1 no longer auto-scans generated proto stubs, flags classes that inject gRPC client stubs with a TODO so an explicit `@ImportGrpcClients` annotation can be added by hand. Not automated: pinning the `reactor-grpc-stub` version. Spring gRPC 1.1 no longer manages it, so a version-less declaration must be given an explicit version once the standalone BOM is removed (Spring gRPC 1.0 managed `1.2.4`).
* [io.moderne.java.spring.boot4.MigrateSpringRetry](/user-documentation/recipes/recipe-catalog/java/spring/boot4/migratespringretry.md)
  * **Migrate Spring Retry to Spring Resilience**
  * Handle spring-retry no longer managed by Spring Boot and the possible migration to Spring Core Resilience.
* [io.moderne.java.spring.boot4.MigrateSpringRetryRecoverToRetryTemplate](/user-documentation/recipes/recipe-catalog/java/spring/boot4/migratespringretryrecovertoretrytemplate.md)
  * **Migrate `@Retryable(recover=...)` + `@Recover` to programmatic `RetryTemplate`**
  * Convert spring-retry `@Retryable` methods that name a `@Recover` method into Spring Framework 7's programmatic `org.springframework.core.retry.RetryTemplate` wrapped in a try/catch that dispatches to the (now plain) recover method. Spring Framework 7's resilience `@Retryable` annotation has no equivalent to `@Recover`, so this conversion is required for recover-method semantics to survive the migration.
* [io.moderne.java.spring.boot4.MigrateSpringRetryToSpringFramework7](/user-documentation/recipes/recipe-catalog/java/spring/boot4/migratespringretrytospringframework7.md)
  * **Migrate `spring-retry` to Spring Framework resilience**
  * Migrate `spring-retry`s `@Retryable` and `@Backoff` annotation to Spring Framework 7 Resilience annotations.
* [io.moderne.java.spring.boot4.MigrateToModularStarters](/user-documentation/recipes/recipe-catalog/java/spring/boot4/migratetomodularstarters-moderne-edition.md)
  * **Migrate to Spring Boot 4.0 modular starters (Moderne Edition)**
  * Adds Spring Boot 4.0 modular starter dependencies based on package usage and rewrites the classic starters to the minimal `spring-boot-starter` / `spring-boot-starter-test`. The minimal starter is retained so that modules whose code only references core Spring annotations (e.g. `@SpringBootApplication`, `@Configuration`, `@Component`) still compile after migration.
* [io.moderne.java.spring.boot4.MigrateToModularStarters_4_1](/user-documentation/recipes/recipe-catalog/java/spring/boot4/migratetomodularstarters_4_1.md)
  * **Migrate to Spring Boot 4.1 modular starters**
  * Add Spring Boot 4.1 starter dependencies for modules introduced in 4.1 (gRPC server, gRPC client, and Spring Batch with MongoDB support). This recipe complements `MigrateToModularStarters` from 4.0 and only adds the new starters; it does not rewrite or remove anything else.
* [io.moderne.java.spring.boot4.MockMvcAssertionsToAssertJ](/user-documentation/recipes/recipe-catalog/java/spring/boot4/mockmvcassertionstoassertj.md)
  * **Migrate MockMvc `andExpect()` chains to AssertJ assertions**
  * Converts MockMvc Hamcrest-style `andExpect()` assertion chains to AssertJ-style fluent assertions using `assertThat()`. Handles status, content, JSON path, header, redirect, and forward assertions.
* [io.moderne.java.spring.boot4.MockMvcRequestBuildersToMockMvcTester](/user-documentation/recipes/recipe-catalog/java/spring/boot4/mockmvcrequestbuilderstomockmvctester.md)
  * **Migrate `MockMvcRequestBuilders` to `MockMvcTester` request methods**
  * Converts `mockMvcTester.perform(get(&quot;/api&quot;).param(&quot;k&quot;,&quot;v&quot;))` to `mockMvcTester.get().uri(&quot;/api&quot;).param(&quot;k&quot;,&quot;v&quot;)`, removing the `perform()` wrapper and `MockMvcRequestBuilders` static method calls.
* [io.moderne.java.spring.boot4.MockMvcToMockMvcTester](/user-documentation/recipes/recipe-catalog/java/spring/boot4/mockmvctomockmvctester.md)
  * **Migrate `MockMvc` to `MockMvcTester`**
  * Converts `MockMvc` fields and initialization to `MockMvcTester`. Changes field types, renames fields from `mockMvc` to `mockMvcTester`, and converts `MockMvcBuilders.standaloneSetup().build()` to `MockMvcTester.of()` and `MockMvcBuilders.webAppContextSetup().build()` to `MockMvcTester.from()`.
* [io.moderne.java.spring.boot4.ModuleHasMonolithicStarter](/user-documentation/recipes/recipe-catalog/java/spring/boot4/modulehasmonolithicstarter.md)
  * **Module has monolithic Spring Boot starter**
  * Precondition that matches modules with the monolithic Spring Boot starters that need to be migrated to modular starters. Matches the production monolithic spring-boot-starter and spring-boot-starter-classic, but not specific modular starters like spring-boot-starter-test or spring-boot-starter-ldap.
* [io.moderne.java.spring.boot4.ModuleStarterRelocations](/user-documentation/recipes/recipe-catalog/java/spring/boot4/modulestarterrelocations.md)
  * **Spring Boot 4.0 Module Starter Relocations**
  * Relocate types and packages for Spring Boot 4.0 modular starters.
* [io.moderne.java.spring.boot4.ModuleUsesFlyway](/user-documentation/recipes/recipe-catalog/java/spring/boot4/moduleusesflyway.md)
  * **Module uses Flyway**
  * Precondition that marks all files in a module if Flyway usage is detected. Detection is based on having a Flyway dependency, using Flyway types, or having migration files.
* [io.moderne.java.spring.boot4.ModuleUsesLiquibase](/user-documentation/recipes/recipe-catalog/java/spring/boot4/moduleusesliquibase.md)
  * **Module uses Liquibase**
  * Precondition that marks all files in a module if Liquibase usage is detected. Detection is based on having a Liquibase dependency, using Liquibase types, or having changelog files.
* [io.moderne.java.spring.boot4.RemoveContentNegotiationFavorPathExtension](/user-documentation/recipes/recipe-catalog/java/spring/boot4/removecontentnegotiationfavorpathextension.md)
  * **Remove `ContentNegotiationConfigurer.favorPathExtension()` calls**
  * Spring Framework 7 removed `favorPathExtension()` from `ContentNegotiationConfigurer`. Path extension content negotiation is no longer supported. This recipe removes calls to `favorPathExtension()`.
* [io.moderne.java.spring.boot4.RemoveDevtoolsLiveReloadProperties_4_1](/user-documentation/recipes/recipe-catalog/java/spring/boot4/removedevtoolslivereloadproperties_4_1.md)
  * **Comment out deprecated DevTools LiveReload properties**
  * Spring Boot 4.1.0-M3 deprecated the LiveReload feature in DevTools with no replacement. The feature still functions in 4.1, so this recipe comments out `spring.devtools.livereload.*` properties (rather than deleting them) to flag the deprecation while leaving the values recoverable.
* [io.moderne.java.spring.boot4.RemoveGradleUberJarLoaderImplementationConfig](/user-documentation/recipes/recipe-catalog/java/spring/boot4/removegradleuberjarloaderimplementationconfig.md)
  * **Remove `loaderImplementation` from Gradle**
  * Removes the Spring Boot Uber-Jar `loaderImplementation` configuration from Gradle build files.
* [io.moderne.java.spring.boot4.RemoveHttpMessageConvertersAutoConfigurationReferences](/user-documentation/recipes/recipe-catalog/java/spring/boot4/removehttpmessageconvertersautoconfigurationreferences.md)
  * **Remove `HttpMessageConvertersAutoConfiguration` references**
  * Removes references to the deprecated `HttpMessageConvertersAutoConfiguration` class which was removed in Spring Boot 4.0. For `@AutoConfigureAfter` and `@AutoConfigureBefore` annotations, the reference is removed. For `@Import` annotations, a TODO comment is added since manual migration may be required.
* [io.moderne.java.spring.boot4.RemoveKafkaPropertiesSslBundlesParameter](/user-documentation/recipes/recipe-catalog/java/spring/boot4/removekafkapropertiessslbundlesparameter.md)
  * **Remove `SslBundles` parameter from `KafkaProperties` build methods**
  * In Spring Boot 4.0, the `SslBundles` parameter was removed from `KafkaProperties.buildProducerProperties`, `buildConsumerProperties`, `buildAdminProperties`, and `buildStreamsProperties`. This recipe removes the argument from method calls.
* [io.moderne.java.spring.boot4.RemoveSpringPulsarReactive](/user-documentation/recipes/recipe-catalog/java/spring/boot4/removespringpulsarreactive.md)
  * **Remove Spring Pulsar Reactive support**
  * Spring Boot 4.0 removed support for Spring Pulsar Reactive as it is no longer maintained. This recipe removes the Spring Pulsar Reactive dependencies.
* [io.moderne.java.spring.boot4.RemoveSpringRetryVersionPin](/user-documentation/recipes/recipe-catalog/java/spring/boot4/removespringretryversionpin.md)
  * **Remove the orphaned Spring Retry version pin**
  * The Spring Boot 4.0 upgrade pins an explicit `spring-retry` version up front (a `spring-retry.version` property backing `&lt;version&gt;$\{spring-retry.version\}&lt;/version&gt;`, plus a `&lt;dependencyManagement&gt;` entry added by `AddManagedDependency`) so the project stays resolvable once Spring Boot 4.0 stops managing spring-retry. When usage is fully migrated to Spring resilience and the dependency is removed, that pin is left orphaned (customer-requests#2615). Remove it, but only where spring-retry is no longer a direct dependency, so a partially-migrated module that still declares spring-retry (e.g. a remaining `@Recover`) keeps its pin.
* [io.moderne.java.spring.boot4.RemoveZipkinAutoConfigurationExclude](/user-documentation/recipes/recipe-catalog/java/spring/boot4/removezipkinautoconfigurationexclude.md)
  * **Remove `ZipkinAutoConfiguration`**
  * Zipkin is no longer auto-configured by default in Spring Boot 4.0; remove references to it from exclusions on annotations.
* [io.moderne.java.spring.boot4.ReplaceDeprecatedAutoconfigureMongoApi](/user-documentation/recipes/recipe-catalog/java/spring/boot4/replacedeprecatedautoconfiguremongoapi.md)
  * **Replace deprecated `org.springframework.boot.autoconfigure.mongo` API**
  * Replace deprecated `org.springframework.boot.autoconfigure.mongo` API.
* [io.moderne.java.spring.boot4.ReplaceDeprecatedDockerApi](/user-documentation/recipes/recipe-catalog/java/spring/boot4/replacedeprecateddockerapi.md)
  * **Replace deprecated `DockerApi`**
  * Replaces deprecated `DockerApi` constructors and configuration methods with their modern equivalents.
* [io.moderne.java.spring.boot4.ReplaceDeprecatedRequestMatcherProvider](/user-documentation/recipes/recipe-catalog/java/spring/boot4/replacedeprecatedrequestmatcherprovider.md)
  * **Replace deprecated RequestMatcherProvider with new API**
  * Replaces the deprecated `org.springframework.boot.autoconfigure.security.servlet.RequestMatcherProvider` with `org.springframework.boot.security.autoconfigure.actuate.web.servlet.RequestMatcherProvider`. The new interface adds an `HttpMethod` parameter to the `getRequestMatcher` method.
* [io.moderne.java.spring.boot4.ReplaceDeprecatedThreadPoolTaskSchedulerBuilderApi](/user-documentation/recipes/recipe-catalog/java/spring/boot4/replacedeprecatedthreadpooltaskschedulerbuilderapi.md)
  * **Replace deprecated `ThreadPoolTaskSchedulerBuilder` constructor**
  * Replaces the deprecated 5-argument constructor of `ThreadPoolTaskSchedulerBuilder` with the builder pattern.
* [io.moderne.java.spring.boot4.SimplifyOptionalConfigurationPropertiesNullChecks](/user-documentation/recipes/recipe-catalog/java/spring/boot4/simplifyoptionalconfigurationpropertiesnullchecks.md)
  * **Simplify null checks on `Optional` `@ConfigurationProperties` parameters**
  * Spring Boot 4.1 changes constructor-bound `@ConfigurationProperties` so that `Optional&lt;T&gt;` parameters bind to `Optional.empty()` rather than `null`. This recipe replaces `== null` / `!= null` checks against such parameters (or same-named fields in the binding constructor's class) with the constant they will always evaluate to, then runs `SimplifyConstantIfBranchExecution` to remove the dead branches.
* [io.moderne.java.spring.boot4.SplitSpringGrpcCombinedStarter](/user-documentation/recipes/recipe-catalog/java/spring/boot4/splitspringgrpccombinedstarter.md)
  * **Split the combined Spring gRPC starter into server and client starters**
  * The combined `org.springframework.grpc:spring-grpc-spring-boot-starter` was removed in Spring gRPC 1.1. Replace it with the Spring Boot 4.1 `spring-boot-starter-grpc-server` starter and add the matching `spring-boot-starter-grpc-client` starter so both the server and client remain available.
* [io.moderne.java.spring.boot4.SplitSpringGrpcCombinedTestStarter](/user-documentation/recipes/recipe-catalog/java/spring/boot4/splitspringgrpccombinedteststarter.md)
  * **Split the Spring gRPC test starter into server-test and client-test starters**
  * The standalone `org.springframework.grpc:spring-grpc-test` artifact split into the Spring Boot 4.1 `spring-boot-starter-grpc-server-test` and `spring-boot-starter-grpc-client-test` starters. Replace it with the server-test starter and add the matching client-test starter, both at test scope.
* [io.moderne.java.spring.boot4.SplitSpringGrpcServerAddress](/user-documentation/recipes/recipe-catalog/java/spring/boot4/splitspringgrpcserveraddress.md)
  * **Split `spring.grpc.server.address` into `address` and `port`**
  * In Spring gRPC 1.0 `spring.grpc.server.address` accepted a combined `host:port` value. Spring gRPC 1.1 binds `address` to an `InetAddress` and reads the port from a separate `spring.grpc.server.port`, so this recipe splits a plain `host:port` value across the two properties in `application.properties` and `application.yml`. Pseudo-URLs (e.g. `static://...`), IPv6 literals, property placeholders, and values that already declare a `port` are left unchanged.
* [io.moderne.java.spring.boot4.SpringBoot4BestPractices](/user-documentation/recipes/recipe-catalog/java/spring/boot4/springboot4bestpractices.md)
  * **Spring Boot 4.0 best practices**
  * Applies best practices to Spring Boot 4.+ applications.
* [io.moderne.java.spring.boot4.SpringBootProperties_4_1](/user-documentation/recipes/recipe-catalog/java/spring/boot4/springbootproperties_4_1.md)
  * **Migrate Spring Boot properties to 4.1**
  * Migrate properties found in `application.properties` and `application.yml`.
* [io.moderne.java.spring.boot4.UpgradeAwspringCloud_4_0](/user-documentation/recipes/recipe-catalog/java/spring/boot4/upgradeawspringcloud_4_0.md)
  * **Migrate Spring Cloud AWS (awspring) to 4.0**
  * Upgrade `io.awspring.cloud` dependencies to 4.0.x and migrate code for the breaking API changes in Spring Cloud AWS 4.0. Spring Cloud AWS 4.0 aligns with Spring Boot 4 / Spring Framework 7 and adopts Jackson 3 by default; this recipe moves usages off the deprecated Jackson 2 variants to their Jackson 3 replacements and migrates the SQS default-converter `setObjectMapper` configurer. Run after the Jackson 2 to 3 migration so user mappers are already `tools.jackson` `JsonMapper`s.
* [io.moderne.java.spring.boot4.UpgradeMyBatisToSpringBoot_4_0](/user-documentation/recipes/recipe-catalog/java/spring/boot4/upgrademybatistospringboot_4_0.md)
  * **Upgrade MyBatis to Spring Boot 4.0**
  * Upgrade MyBatis Spring modules to a version corresponding to Spring Boot 4.0.
* [io.moderne.java.spring.boot4.UpgradeSpringBoot_4_0](/user-documentation/recipes/recipe-catalog/java/spring/boot4/upgradespringboot_4_0-moderne-edition.md)
  * **Migrate to Spring Boot 4.0 (Moderne Edition)**
  * Migrate applications to the latest Spring Boot 4.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 4.0.
* [io.moderne.java.spring.boot4.UpgradeSpringBoot_4_1](/user-documentation/recipes/recipe-catalog/java/spring/boot4/upgradespringboot_4_1.md)
  * **Migrate to Spring Boot 4.1**
  * Migrate applications to the latest Spring Boot 4.1 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 4.1.
* [io.moderne.java.spring.boot4.UpgradeSpringKafka_4_0](/user-documentation/recipes/recipe-catalog/java/spring/boot4/upgradespringkafka_4_0.md)
  * **Migrate to Spring Kafka 4.0**
  * Migrate applications to Spring Kafka 4.0. This includes removing deprecated configuration options that are no longer supported.
* [io.moderne.java.spring.boot4.UpgradeSpringKafka_4_1](/user-documentation/recipes/recipe-catalog/java/spring/boot4/upgradespringkafka_4_1.md)
  * **Migrate to Spring Kafka 4.1**
  * Migrate applications to Spring Kafka 4.1. This builds on the Spring Kafka 4.0 migration and rewrites APIs deprecated in 4.1 to their replacements.
* [io.moderne.java.spring.boot4.UpgradeToJava21WhenUsingJooq](/user-documentation/recipes/recipe-catalog/java/spring/boot4/upgradetojava21whenusingjooq.md)
  * **Upgrade to Java 21 when using jOOQ**
  * Spring Boot 4 keeps a Java 17 baseline, but the jOOQ version it manages (3.20+) requires Java 21 or later. This recipe upgrades modules that depend on jOOQ to Java 21 so they remain compatible after the Spring Boot 4.0 upgrade. Modules that do not use jOOQ are left on their current Java baseline. See https://github.com/spring-projects/spring-boot/issues/48619.
* [io.moderne.java.spring.cloud2020.SpringCloudProperties_2020](/user-documentation/recipes/recipe-catalog/java/spring/cloud2020/springcloudproperties_2020.md)
  * **Migrate Spring Cloud properties to 2020**
  * Migrate properties found in `application.properties` and `application.yml`.
* [io.moderne.java.spring.cloud2021.SpringCloudProperties_2021](/user-documentation/recipes/recipe-catalog/java/spring/cloud2021/springcloudproperties_2021.md)
  * **Migrate Spring Cloud properties to 2021**
  * Migrate properties found in `application.properties` and `application.yml`.
* [io.moderne.java.spring.cloud2022.SpringCloudProperties_2022](/user-documentation/recipes/recipe-catalog/java/spring/cloud2022/springcloudproperties_2022.md)
  * **Migrate Spring Cloud properties to 2022**
  * Migrate properties found in `application.properties` and `application.yml`.
* [io.moderne.java.spring.cloud2023.SpringCloudProperties_2023](/user-documentation/recipes/recipe-catalog/java/spring/cloud2023/springcloudproperties_2023.md)
  * **Migrate Spring Cloud properties to 2023**
  * Migrate properties found in `application.properties` and `application.yml`.
* [io.moderne.java.spring.cloud2024.SpringCloudProperties_2024](/user-documentation/recipes/recipe-catalog/java/spring/cloud2024/springcloudproperties_2024.md)
  * **Migrate Spring Cloud properties to 2024**
  * Migrate properties found in `application.properties` and `application.yml`.
* [io.moderne.java.spring.cloud2025.SpringCloudProperties_2025](/user-documentation/recipes/recipe-catalog/java/spring/cloud2025/springcloudproperties_2025.md)
  * **Migrate Spring Cloud properties to 2025**
  * Migrate properties found in `application.properties` and `application.yml`.
* [io.moderne.java.spring.cloud20251.SpringCloudProperties_2025_1](/user-documentation/recipes/recipe-catalog/java/spring/cloud20251/springcloudproperties_2025_1.md)
  * **Migrate Spring Cloud properties to 2025.1**
  * Migrate properties found in `application.properties` and `application.yml` for Spring Cloud 2025.1 (Oakwood). This includes the stubrunner property prefix migration from `stubrunner.` to `spring.cloud.contract.stubrunner.`.
* [io.moderne.java.spring.cloud20251.UpgradeSpringCloud_2025_1](/user-documentation/recipes/recipe-catalog/java/spring/cloud20251/upgradespringcloud_2025_1.md)
  * **Upgrade to Spring Cloud 2025.1**
  * Upgrade to Spring Cloud 2025.1 (Oakwood). This release is based on Spring Framework 7 and Spring Boot 4. Each Spring Cloud project has been updated to version 5.0.0.
* [io.moderne.java.spring.data.AddProjectedPayloadAnnotation](/user-documentation/recipes/recipe-catalog/java/spring/data/addprojectedpayloadannotation.md)
  * **Add `@ProjectedPayload` to web projection interfaces**
  * As of Spring Data 2026.0 (Spring Boot 4.1), interface-based projections used as Spring MVC controller handler-method parameters must be annotated with `@ProjectedPayload`. Unannotated projection types still work but log a deprecation warning, and the lenient behavior is slated for removal in Spring Data 2026.1. This recipe annotates project interfaces that are bound as web projection parameters.
* [io.moderne.java.spring.framework.AddSetUseSuffixPatternMatch](/user-documentation/recipes/recipe-catalog/java/spring/framework/addsetusesuffixpatternmatch.md)
  * **Add `setUseSuffixPatternMatch(true)` in Spring MVC configuration**
  * In Spring Framework 5.2.4 and earlier, suffix pattern matching was enabled by default. This meant a controller method mapped to `/users` would also match `/users.json`, `/users.xml`, etc. Spring Framework 5.3 deprecated this behavior and changed the default to false. This recipe adds `setUseSuffixPatternMatch(true)` to `WebMvcConfigurer` implementations to preserve the legacy behavior during migration. Note: This only applies to Spring MVC; Spring WebFlux does not support suffix pattern matching.
* [io.moderne.java.spring.framework.AddSetUseSuffixPatternMatchIfPreSpring53](/user-documentation/recipes/recipe-catalog/java/spring/framework/addsetusesuffixpatternmatchifprespring53.md)
  * **Add `setUseSuffixPatternMatch(true)` for pre-Spring Framework 5.3 projects**
  * Only adds `setUseSuffixPatternMatch(true)` when the project is on Spring Framework &lt; 5.3, where suffix pattern matching was enabled by default. Projects already on 5.3+ have been running with the new default (false) and should not get this configuration added.
* [io.moderne.java.spring.framework.FindDeprecatedPathMatcherUsage](/user-documentation/recipes/recipe-catalog/java/spring/framework/finddeprecatedpathmatcherusage.md)
  * **Find deprecated `PathMatcher` usage**
  * In Spring Framework 7.0, `PathMatcher` and `AntPathMatcher` are deprecated in favor of `PathPatternParser`. This recipe finds usages of the deprecated `AntPathMatcher` class that may require manual migration to `PathPatternParser`.
* [io.moderne.java.spring.framework.FlagSuffixPatternMatchUsage](/user-documentation/recipes/recipe-catalog/java/spring/framework/flagsuffixpatternmatchusage.md)
  * **Flag deprecated suffix pattern matching usage for manual review**
  * Handles deprecated `setUseSuffixPatternMatch()` and `setUseRegisteredSuffixPatternMatch()` calls. When suffix pattern matching is explicitly enabled, adds TODO comments and search markers since there is no automatic migration path. When explicitly disabled, the call is safely removed since `false` is already the default since Spring Framework 5.3.
* [io.moderne.java.spring.framework.IsLikelySpringFramework](/user-documentation/recipes/recipe-catalog/java/spring/framework/islikelyspringframework.md)
  * **Is likely a Spring Framework project**
  * Marks the project if it's likely a Spring Framework project.
* [io.moderne.java.spring.framework.JaxRsToSpringWeb](/user-documentation/recipes/recipe-catalog/java/spring/framework/jaxrstospringweb.md)
  * **Convert JAX-RS annotations to Spring Web**
  * Converts JAX-RS annotations such as `@Path`, `@GET`, `@POST`, etc., to their Spring Web equivalents like `@RestController`, `@RequestMapping`, `@GetMapping`, etc.
* [io.moderne.java.spring.framework.MigrateChannelInterceptorAdapter](/user-documentation/recipes/recipe-catalog/java/spring/framework/migratechannelinterceptoradapter.md)
  * **Replace `ChannelInterceptorAdapter` with `ChannelInterceptor`**
  * As of 5.0 `ChannelInterceptor` has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter.
* [io.moderne.java.spring.framework.MigrateConverterSetObjectMapper](/user-documentation/recipes/recipe-catalog/java/spring/framework/migrateconvertersetobjectmapper.md)
  * **Replace `setObjectMapper` with constructor injection**
  * Folds `setObjectMapper` calls on `MappingJackson2HttpMessageConverter` into the constructor. If the converter is instantiated in the same block with no other invocations, the setter call is replaced with constructor injection. Otherwise, a TODO comment is added.
* [io.moderne.java.spring.framework.MigrateDefaultResponseErrorHandler](/user-documentation/recipes/recipe-catalog/java/spring/framework/migratedefaultresponseerrorhandler.md)
  * **Migrate `DefaultResponseErrorHandler.handleError` method signature**
  * Migrates overridden `handleError(ClientHttpResponse response)` methods to the new signature `handleError(URI url, HttpMethod method, ClientHttpResponse response)` in classes extending `DefaultResponseErrorHandler`. The old single-argument method was removed in Spring Framework 7.0.
* [io.moderne.java.spring.framework.MigrateDeprecatedBeanXmlProperties](/user-documentation/recipes/recipe-catalog/java/spring/framework/migratedeprecatedbeanxmlproperties.md)
  * **Migrate Bean XML properties deprecated in Spring Framework 3.0**
  * Migrate Bean XML properties that were deprecated in Spring Framework 3.0.
* [io.moderne.java.spring.framework.MigrateFilterToOncePerRequestFilter](/user-documentation/recipes/recipe-catalog/java/spring/framework/migratefiltertoonceperrequestfilter.md)
  * **Migrate `Filter` to `OncePerRequestFilter`**
  * Migrates classes that implement `javax.servlet.Filter` (or `jakarta.servlet.Filter`) to extend `org.springframework.web.filter.OncePerRequestFilter`. This transformation renames `doFilter` to `doFilterInternal`, changes parameter types to HTTP variants, removes manual casting, and removes empty `init()` and `destroy()` methods.
* [io.moderne.java.spring.framework.MigrateHandleErrorMethodInvocations](/user-documentation/recipes/recipe-catalog/java/spring/framework/migratehandleerrormethodinvocations.md)
  * **Migrate `handleError` method invocations to new signature**
  * Updates invocations of `handleError(ClientHttpResponse)` to the new `handleError(URI, HttpMethod, ClientHttpResponse)` signature introduced in Spring Framework 7.0. In test sources, example values are used. In main sources, `null` is passed with a TODO comment.
* [io.moderne.java.spring.framework.MigrateHttpHeadersMultiValueMapMethods](/user-documentation/recipes/recipe-catalog/java/spring/framework/migratehttpheadersmultivaluemapmethods.md)
  * **Migrate `HttpHeaders` methods removed when `MultiValueMap` contract was dropped**
  * Spring Framework 7.0 changed `HttpHeaders` to no longer implement `MultiValueMap`. This recipe replaces removed inherited method calls: `containsKey()` with `containsHeader()`, `keySet()` with `headerNames()`, and `entrySet()` with `headerSet()`.
* [io.moderne.java.spring.framework.MigrateTrailingSlashMatch](/user-documentation/recipes/recipe-catalog/java/spring/framework/migratetrailingslashmatch.md)
  * **Register a `UrlHandlerFilter` to preserve trailing slash matching**
  * Spring Framework 7.0 removes `PathMatchConfigurer.setUseTrailingSlashMatch(true)`. When trailing slash matching was enabled, this recipe registers a `UrlHandlerFilter` bean (Spring Framework 6.2+/Boot 4) that transparently handles trailing slashes, preserving behavior regardless of how routes are declared. The filter is ordered ahead of the security filter chain (per its javadoc): the servlet variant via a `FilterRegistrationBean`, the reactive variant as an `@Order`ed `WebFilter` bean. A literal `false` argument enables nothing, so no filter is registered.
* [io.moderne.java.spring.framework.ModularSpringFrameworkDependencies](/user-documentation/recipes/recipe-catalog/java/spring/framework/modularspringframeworkdependencies.md)
  * **Add Spring Framework modular dependencies**
  * Adds Spring Framework modular dependencies based on package usage, replacing legacy monolithic `org.springframework:spring`.
* [io.moderne.java.spring.framework.NullableSpringWebParameters](/user-documentation/recipes/recipe-catalog/java/spring/framework/nullablespringwebparameters.md)
  * **Add `@Nullable` to optional Spring web parameters**
  * In Spring Boot 4, JSpecify's `@Nullable` annotation should be used to indicate that a parameter can be null. This recipe adds `@Nullable` to parameters annotated with `@PathVariable(required = false)` or `@RequestParam(required = false)` and removes the now-redundant `required = false` attribute.
* [io.moderne.java.spring.framework.RemoveDeprecatedPathMappingOptions](/user-documentation/recipes/recipe-catalog/java/spring/framework/removedeprecatedpathmappingoptions.md)
  * **Migrate deprecated path mapping options**
  * Migrates deprecated path mapping configuration options that have been removed in Spring Framework 7.0. For trailing slash matching, this recipe adds explicit dual routes to controller methods before removing the deprecated configuration. For suffix pattern matching, this recipe flags usages for manual review since there is no automatic migration path. Path extension content negotiation options are removed as they should be replaced with query parameter-based negotiation.
* [io.moderne.java.spring.framework.RemoveEmptyPathMatchConfiguration](/user-documentation/recipes/recipe-catalog/java/spring/framework/removeemptypathmatchconfiguration.md)
  * **Remove empty path match configuration methods**
  * Removes empty `configurePathMatch` (WebMvc) and `configurePathMatching` (WebFlux) method overrides. These methods may become empty after deprecated path matching options are removed.
* [io.moderne.java.spring.framework.RemovePathExtensionContentNegotiation](/user-documentation/recipes/recipe-catalog/java/spring/framework/removepathextensioncontentnegotiation.md)
  * **Remove path extension content negotiation methods**
  * Remove calls to `favorPathExtension()` and `ignoreUnknownPathExtensions()` on `ContentNegotiationConfigurer`. These methods and the underlying `PathExtensionContentNegotiationStrategy` were removed in Spring Framework 7.0. Path extension content negotiation was deprecated due to URI handling issues. Use query parameter-based negotiation with `favorParameter(true)` as an alternative.
* [io.moderne.java.spring.framework.RemoveSetPathMatcherCall](/user-documentation/recipes/recipe-catalog/java/spring/framework/removesetpathmatchercall.md)
  * **Remove deprecated `setPathMatcher()` calls**
  * In Spring Framework 7.0, `PathMatcher` and `AntPathMatcher` are deprecated in favor of `PathPatternParser`, which has been the default in Spring MVC since 6.0. This recipe removes calls to `setPathMatcher(new AntPathMatcher())` since they are now redundant. The default `PathPatternParser` provides better performance through pre-parsed patterns.
* [io.moderne.java.spring.framework.ReplaceControllerWithRestController](/user-documentation/recipes/recipe-catalog/java/spring/framework/replacecontrollerwithrestcontroller.md)
  * **Replace `@Controller` with `@RestController`**
  * When a class is annotated with `@Controller` and either the class itself or all of its handler methods are annotated with `@ResponseBody`, the class can use `@RestController` instead. This removes the need for individual `@ResponseBody` annotations.
* [io.moderne.java.spring.framework.UpgradeSpringFramework_3_0](/user-documentation/recipes/recipe-catalog/java/spring/framework/upgradespringframework_3_0.md)
  * **Migrate to Spring Framework 3.x**
  * Migrate applications to the latest Spring Framework 3 release, pulling in additional proprietary Moderne recipes.
* [io.moderne.java.spring.framework.UpgradeSpringFramework_4_0](/user-documentation/recipes/recipe-catalog/java/spring/framework/upgradespringframework_4_0.md)
  * **Migrate to Spring Framework 4.0**
  * Migrate applications to the latest Spring Framework 4.0 release. This composite focuses on dependency upgrades and the mechanical package moves that accompanied the 3.x to 4.0 transition. Removed APIs that do not have a 1:1 replacement (for example `JpaTemplate`, the `AbstractCommandController` family, Hibernate 3 support classes) still require code changes that this recipe does not perform.
* [io.moderne.java.spring.framework.UpgradeSpringFramework_5_0](/user-documentation/recipes/recipe-catalog/java/spring/framework/upgradespringframework_5_0-moderne-edition.md)
  * **Migrate to Spring Framework 5.0 (Moderne Edition)**
  * Migrate applications to Spring Framework 5.0, layering proprietary Moderne recipes on top of the OSS `org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_0`. Chains through `UpgradeSpringFramework_4_0` (and transitively `_3_0`) so a customer on Spring 3.x lands on a 5.0 baseline after one composite run.
* [io.moderne.java.spring.framework.UpgradeSpringFramework_5_3](/user-documentation/recipes/recipe-catalog/java/spring/framework/upgradespringframework_5_3-moderne-edition.md)
  * **Migrate to Spring Framework 5.3 (Moderne Edition)**
  * Migrate applications to the latest Spring Framework 5.3 release, pulling in additional proprietary Moderne recipes.
* [io.moderne.java.spring.framework.UpgradeSpringFramework_6_0](/user-documentation/recipes/recipe-catalog/java/spring/framework/upgradespringframework_6_0-moderne-edition.md)
  * **Migrate to Spring Framework 6.0 (Moderne Edition)**
  * Migrate applications to the latest Spring Framework 6.0 release. Chains through `UpgradeSpringFramework_5_3` (and transitively `_5_0`/`_4_0`/`_3_0`) and layers Spring Integration XML attribute migrations on top of the OSS Spring Framework 6.0 upgrade. The OSS recipe handles the `org.springframework:*` version bump and Jakarta EE 10 package moves; this composite additionally bumps `org.springframework.security:*` to 6.0.x (Spring Security tracks Spring's major) and cleans up Spring Integration XML configurations.
* [io.moderne.java.spring.framework.beansxml.BeansXmlToConfiguration](/user-documentation/recipes/recipe-catalog/java/spring/framework/beansxml/beansxmltoconfiguration.md)
  * **Migrate `beans.xml` to Spring Framework configuration class**
  * Converts Java/Jakarta EE `beans.xml` configuration files to Spring Framework `@Configuration` classes.
* [io.moderne.java.spring.framework.jsf23.MigrateFacesConfig](/user-documentation/recipes/recipe-catalog/java/spring/framework/jsf23/migratefacesconfig.md)
  * **Migrate JSF variable-resolver to el-resolver**
  * Migrates JSF faces-config.xml from namespaces, tags and values that was deprecated in JSF 1.2 and removed in later versions, to the JSF 2.3 compatible constructs.
* [io.moderne.java.spring.framework.webxml.FindWelcomeFileConfiguration](/user-documentation/recipes/recipe-catalog/java/spring/framework/webxml/findwelcomefileconfiguration.md)
  * **Add landing page controller for welcome file configuration**
  * Generates a `LandingPageController` when `welcome-file-list` is found in `web.xml` or `context-root` in `jboss-web.xml`. When migrating to Spring Framework 5.3+, applications that rely on these server-side landing page configurations need a `@Controller` with a `@RequestMapping` for `/` to avoid 404 errors, as Spring MVC can take over the root mapping. Skips generation if a controller already maps to `/`.
* [io.moderne.java.spring.framework.webxml.WebXmlToWebApplicationInitializer](/user-documentation/recipes/recipe-catalog/java/spring/framework/webxml/webxmltowebapplicationinitializer.md)
  * **Migrate `web.xml` to `WebApplicationInitializer`**
  * Migrate `web.xml` to `WebApplicationInitializer` for Spring applications. This allows for programmatic configuration of the web application context, replacing the need for XML-based configuration. This recipe only picks up `web.xml` files located in the `src/main/webapp/WEB-INF` directory to avoid inference with tests. It creates a `WebXmlWebAppInitializer` class in `src/main/java` with respect to submodules if they contain java files. **If it finds an existing `WebXmlWebAppInitializer`, it skips the creation**.
* [io.moderne.java.spring.framework7.AddDynamicDestinationResolverToJmsTemplate](/user-documentation/recipes/recipe-catalog/java/spring/framework7/adddynamicdestinationresolvertojmstemplate.md)
  * **Explicitly set DynamicDestinationResolver on JmsTemplate**
  * Spring Framework 7.0 changed the default `DestinationResolver` for `JmsTemplate` from `DynamicDestinationResolver` to `SimpleDestinationResolver`, which caches Session-resolved Queue and Topic instances. This recipe adds an explicit call to `setDestinationResolver(new DynamicDestinationResolver())` to preserve the previous behavior. The caching behavior of `SimpleDestinationResolver` should be fine for most JMS brokers, so this explicit configuration can be removed once compatibility with the new default is verified.
* [io.moderne.java.spring.framework7.AddSpringExtensionConfigForNestedTests](/user-documentation/recipes/recipe-catalog/java/spring/framework7/addspringextensionconfigfornestedtests.md)
  * **Add `@SpringExtensionConfig` for nested tests**
  * Spring Framework 7.0 changed `SpringExtension` to use test-method scoped `ExtensionContext` instead of test-class scoped. This can break `@Nested` test class hierarchies. Adding `@SpringExtensionConfig(useTestClassScopedExtensionContext = true)` restores the previous behavior.
* [io.moderne.java.spring.framework7.FindOkHttp3IntegrationUsage](/user-documentation/recipes/recipe-catalog/java/spring/framework7/findokhttp3integrationusage.md)
  * **Find Spring OkHttp3 integration usage**
  * Spring Framework 7.0 removes OkHttp3 integration classes. This recipe identifies usages of `OkHttp3ClientHttpRequestFactory` and `OkHttp3ClientHttpConnector` that need to be replaced. Consider migrating to Java's built-in `HttpClient` with `JdkClientHttpRequestFactory` or `JdkClientHttpConnector`, or to Apache HttpClient 5 with `HttpComponentsClientHttpRequestFactory`.
* [io.moderne.java.spring.framework7.FindRemovedAPIs](/user-documentation/recipes/recipe-catalog/java/spring/framework7/findremovedapis.md)
  * **Find removed APIs in Spring Framework 7.0**
  * Finds usages of APIs that were removed in Spring Framework 7.0 and require manual intervention. This includes Theme support, OkHttp3 integration, and servlet view document/feed classes which have no direct automated replacement.
* [io.moderne.java.spring.framework7.FindServletViewSupportUsage](/user-documentation/recipes/recipe-catalog/java/spring/framework7/findservletviewsupportusage.md)
  * **Find removed Spring servlet view classes**
  * Spring Framework 7.0 removes the `org.springframework.web.servlet.view.document` and `org.springframework.web.servlet.view.feed` packages. This recipe adds TODO comments to imports of `AbstractPdfView`, `AbstractXlsView`, `AbstractXlsxView`, `AbstractXlsxStreamingView`, `AbstractPdfStampView`, `AbstractFeedView`, `AbstractAtomFeedView`, and `AbstractRssFeedView` that need to be replaced with direct usage of the underlying libraries (Apache POI, OpenPDF/iText, ROME) in web handlers.
* [io.moderne.java.spring.framework7.FindThemeSupportUsage](/user-documentation/recipes/recipe-catalog/java/spring/framework7/findthemesupportusage.md)
  * **Find Spring Theme support usage**
  * Spring Framework 7.0 removes Theme support entirely. This recipe identifies usages of Theme-related classes like `ThemeResolver`, `ThemeSource`, and `ThemeChangeInterceptor` that need to be removed or replaced with CSS-based alternatives. The Spring team recommends using CSS directly for theming functionality.
* [io.moderne.java.spring.framework7.MigrateAbstractClientHttpResponse](/user-documentation/recipes/recipe-catalog/java/spring/framework7/migrateabstractclienthttpresponse.md)
  * **Migrate `AbstractClientHttpResponse` to `ClientHttpResponse`**
  * Spring Framework 6.0 removed `org.springframework.http.client.AbstractClientHttpResponse`. This recipe rewrites `extends AbstractClientHttpResponse` to `implements ClientHttpResponse`, flags any `super.*()` calls inside the converted class with a TODO comment (those calls no longer compile), and renames remaining type references (variables, parameters, fields, casts, generics, return types) to the `ClientHttpResponse` interface.
* [io.moderne.java.spring.framework7.MigrateDeprecatedAPIs](/user-documentation/recipes/recipe-catalog/java/spring/framework7/migratedeprecatedapis.md)
  * **Migrate deprecated APIs removed in Spring Framework 7.0**
  * Migrates deprecated APIs that were removed in Spring Framework 7.0. This includes ListenableFuture to CompletableFuture migration, ContentCachingRequestWrapper constructor changes, and NestedServletException to ServletException type migration.
* [io.moderne.java.spring.framework7.MigrateHttpStatusToRfc9110](/user-documentation/recipes/recipe-catalog/java/spring/framework7/migratehttpstatustorfc9110.md)
  * **Migrate `HttpStatus` enum values to RFC 9110 names**
  * Spring Framework 7.0 aligns HttpStatus enum values with RFC 9110. This recipe replaces deprecated status code constants with their RFC 9110 equivalents: `PAYLOAD_TOO_LARGE` becomes `CONTENT_TOO_LARGE` and `UNPROCESSABLE_ENTITY` becomes `UNPROCESSABLE_CONTENT`.
* [io.moderne.java.spring.framework7.MigrateJackson2ObjectMapperBuilder](/user-documentation/recipes/recipe-catalog/java/spring/framework7/migratejackson2objectmapperbuilder.md)
  * **Migrate `Jackson2ObjectMapperBuilder` to mapper builder pattern**
  * Replaces `Jackson2ObjectMapperBuilder.json().build()` and similar factory methods with the corresponding Jackson mapper builder pattern (e.g. `JsonMapper.builder()...build()`). Setter calls on the resulting mapper are folded into the builder chain when safe, or annotated with a TODO comment when automatic migration is not possible.
* [io.moderne.java.spring.framework7.MigrateJmsDestinationResolver](/user-documentation/recipes/recipe-catalog/java/spring/framework7/migratejmsdestinationresolver.md)
  * **Preserve DynamicDestinationResolver behavior for JmsTemplate**
  * Spring Framework 7.0 changed the default `DestinationResolver` for `JmsTemplate` from `DynamicDestinationResolver` to `SimpleDestinationResolver`, which caches Session-resolved Queue and Topic instances. This recipe explicitly configures `DynamicDestinationResolver` to preserve the pre-7.0 behavior. The caching behavior of `SimpleDestinationResolver` should be fine for most JMS brokers, so this explicit configuration can be removed once verified.
* [io.moderne.java.spring.framework7.MigrateListenableFuture](/user-documentation/recipes/recipe-catalog/java/spring/framework7/migratelistenablefuture.md)
  * **Migrate `ListenableFuture` to `CompletableFuture`**
  * Spring Framework 6.0 deprecated `ListenableFuture` in favor of `CompletableFuture`. Spring Framework 7.0 removes `ListenableFuture` entirely. This recipe migrates usages of `ListenableFuture` and its callbacks to use `CompletableFuture` and `BiConsumer` instead.
* [io.moderne.java.spring.framework7.MigrateResponseEntityGetStatusCodeValueMethod](/user-documentation/recipes/recipe-catalog/java/spring/framework7/migrateresponseentitygetstatuscodevaluemethod.md)
  * **Migrate `ResponseEntity#getStatusCodeValue()` to `getStatusCode().value()`**
  * Replaces calls to `ResponseEntity#getStatusCodeValue()` which was deprecated in Spring Framework 6.0 and removed in Spring Framework 7.0 with `getStatusCode().value()`.
* [io.moderne.java.spring.framework7.RemoveNullabilityFromSpringHttpEntityTypeArguments](/user-documentation/recipes/recipe-catalog/java/spring/framework7/removenullabilityfromspringhttpentitytypearguments.md)
  * **Remove Kotlin nullability from Spring HTTP entity type arguments**
  * Spring Framework 7 narrowed `HttpEntity&lt;T&gt;` (and its subtypes `ResponseEntity` and `RequestEntity`) to `&lt;T : Any&gt;`. This recipe removes Kotlin's `?` nullable marker from the type argument of these types in declared parameterized types and in explicit method-invocation type arguments, so Kotlin sources continue to compile.
* [io.moderne.java.spring.framework7.RemoveSpringJcl](/user-documentation/recipes/recipe-catalog/java/spring/framework7/removespringjcl.md)
  * **Remove spring-jcl dependency**
  * The `spring-jcl` module has been removed in Spring Framework 7.0 in favor of Apache Commons Logging 1.3.0. This recipe removes any explicit dependency on `org.springframework:spring-jcl`. The change should be transparent for most applications, as spring-jcl was typically a transitive dependency and the logging API calls (`org.apache.commons.logging.*`) remain unchanged.
* [io.moderne.java.spring.framework7.RenameMemberCategoryConstants](/user-documentation/recipes/recipe-catalog/java/spring/framework7/renamemembercategoryconstants.md)
  * **Rename MemberCategory field constants for Spring Framework 7.0**
  * Renames deprecated `MemberCategory` constants to their new names in Spring Framework 7.0. `MemberCategory.PUBLIC_FIELDS` is renamed to `MemberCategory.INVOKE_PUBLIC_FIELDS` and `MemberCategory.DECLARED_FIELDS` is renamed to `MemberCategory.INVOKE_DECLARED_FIELDS`. These renames clarify the original intent of these categories and align with the rest of the API.
* [io.moderne.java.spring.framework7.RenameRequestContextJstlPresent](/user-documentation/recipes/recipe-catalog/java/spring/framework7/renamerequestcontextjstlpresent.md)
  * **Rename `RequestContext.jstPresent` to `JSTL_PRESENT`**
  * Renames the protected static field `RequestContext.jstPresent` to `JSTL_PRESENT` in Spring Framework 7.0. This field was renamed as part of a codebase-wide effort to use uppercase for classpath-related static final field names (see https://github.com/spring-projects/spring-framework/issues/35525).
* [io.moderne.java.spring.framework7.ReplaceJUnit4SpringTestBaseClasses](/user-documentation/recipes/recipe-catalog/java/spring/framework7/replacejunit4springtestbaseclasses.md)
  * **Replace JUnit 4 Spring test base classes with JUnit Jupiter annotations**
  * Replace `AbstractJUnit4SpringContextTests` and `AbstractTransactionalJUnit4SpringContextTests` base classes with `@ExtendWith(SpringExtension.class)` and `@Transactional` annotations. These base classes are deprecated in Spring Framework 7.0 in favor of the SpringExtension for JUnit Jupiter.
* [io.moderne.java.spring.framework7.SimplifyReflectionHintRegistration](/user-documentation/recipes/recipe-catalog/java/spring/framework7/simplifyreflectionhintregistration.md)
  * **Simplify reflection hint registrations for Spring Framework 7.0**
  * Removes deprecated `MemberCategory` arguments from `registerType()` calls on `ReflectionHints`. In Spring Framework 7.0, registering a reflection hint for a type now implies methods, constructors, and fields introspection. All `MemberCategory` values except `INVOKE_*` have been deprecated. This recipe removes those deprecated arguments, simplifying code like `hints.reflection().registerType(MyType.class, MemberCategory.DECLARED_FIELDS)` to `hints.reflection().registerType(MyType.class)`.
* [io.moderne.java.spring.framework7.UpdateGraalVmNativeHints](/user-documentation/recipes/recipe-catalog/java/spring/framework7/updategraalvmnativehints.md)
  * **Update GraalVM native reflection hints for Spring Framework 7.0**
  * Migrates GraalVM native reflection hints to Spring Framework 7.0 conventions. Spring Framework 7.0 adopts the unified reachability metadata format for GraalVM. This recipe renames deprecated `MemberCategory` constants and simplifies reflection hint registrations where explicit member categories are no longer needed.
* [io.moderne.java.spring.framework7.UpgradeSpringFramework_7_0](/user-documentation/recipes/recipe-catalog/java/spring/framework7/upgradespringframework_7_0.md)
  * **Migrate to Spring Framework 7.0**
  * Migrates applications to Spring Framework 7.0. This recipe applies all necessary changes including API migrations, removed feature detection, and configuration updates.
* [io.moderne.java.spring.framework7.WrapGenericMessageMapInMessageHeaders](/user-documentation/recipes/recipe-catalog/java/spring/framework7/wrapgenericmessagemapinmessageheaders.md)
  * **Wrap `GenericMessage` map argument in `MessageHeaders`**
  * Wraps the `Map` argument in `GenericMessage` constructors in Kotlin sources with `MessageHeaders(map)` to explicitly use the `MessageHeaders` overload. This resolves Kotlin overload resolution ambiguity between the `Map` and `MessageHeaders` constructor overloads.
* [io.moderne.java.spring.hibernate.MigrateDaoSupportGetSession](/user-documentation/recipes/recipe-catalog/java/spring/hibernate/migratedaosupportgetsession.md)
  * **Migrate `HibernateDaoSupport#getSession()` usage**
  * Migrate `HibernateDaoSupport#getSession()` usage to `HibernateDaoSupport#getSessionFactory()#getCurrentSession()` and annotate the methods with `@Transactional`.
* [io.moderne.java.spring.hibernate.MigrateSaveOrUpdateAll](/user-documentation/recipes/recipe-catalog/java/spring/hibernate/migratesaveorupdateall.md)
  * **Migrate `HibernateDaoSupport#getHibernateTemplate#saveOrUpdateAll`**
  * Migrate removed `HibernateDaoSupport#getHibernateTemplate#.saveOrUpdateAll` to an iterative `HibernateDaoSupport#getHibernateTemplate#.saveOrUpdate`.
* [io.moderne.java.spring.integration.MigrateSpringFramework6DeprecatedIntegrationXmlAttributes](/user-documentation/recipes/recipe-catalog/java/spring/integration/migratespringframework6deprecatedintegrationxmlattributes.md)
  * **Migrate Spring Integration XML attributes deprecated by Spring Integration 6.x**
  * Renames or removes Spring Integration XML attributes that were deprecated or removed between Spring Integration 5.x and 6.x. Scoped to XML files using the Spring Integration namespace.
* [io.moderne.java.spring.kafka.MigrateShareAcknowledgmentMode](/user-documentation/recipes/recipe-catalog/java/spring/kafka/migrateshareacknowledgmentmode.md)
  * **Migrate `setExplicitShareAcknowledgment` to `setShareAckMode`**
  * `ContainerProperties.setExplicitShareAcknowledgment(boolean)` was deprecated in Spring Kafka 4.1 in favor of `setShareAckMode(ShareAckMode)`. Mirroring the deprecated method's own implementation, this recipe rewrites `setExplicitShareAcknowledgment(true)` to `setShareAckMode(ShareAckMode.MANUAL)` and `setExplicitShareAcknowledgment(false)` to `setShareAckMode(ShareAckMode.EXPLICIT)`; a non-literal argument is migrated using a ternary expression.
* [io.moderne.java.spring.kafka.consumer.FindKafkaListenerWithoutErrorHandling](/user-documentation/recipes/recipe-catalog/java/spring/kafka/consumer/findkafkalistenerwithouterrorhandling.md)
  * **Find `@KafkaListener` methods without error handling**
  * Flags `@KafkaListener` methods that lack proper error handling. Methods should have `@RetryableTopic`, specify an `errorHandler` in the annotation, or implement try-catch blocks for error handling.
* [io.moderne.java.spring.kafka.consumer.FindMissingDltHandler](/user-documentation/recipes/recipe-catalog/java/spring/kafka/consumer/findmissingdlthandler.md)
  * **Find `@RetryableTopic` without `@DltHandler`**
  * Flags classes that use `@RetryableTopic` without a corresponding `@DltHandler` method. A DLT handler should be defined to process messages that have exhausted all retries.
* [io.moderne.java.spring.kafka.consumer.IsKafkaConsumer](/user-documentation/recipes/recipe-catalog/java/spring/kafka/consumer/iskafkaconsumer.md)
  * **Is likely a Kafka consumer module**
  * Marks the project if it's likely a Kafka consumer module.
* [io.moderne.java.spring.kafka.producer.FindCustomKeyUsage](/user-documentation/recipes/recipe-catalog/java/spring/kafka/producer/findcustomkeyusage.md)
  * **Find `KafkaTemplate.send()` with custom key**
  * Flags `KafkaTemplate.send()` calls that use a custom key (3+ arguments). Custom keys should be reviewed to ensure they provide appropriate partition distribution.
* [io.moderne.java.spring.kafka.producer.IsKafkaProducer](/user-documentation/recipes/recipe-catalog/java/spring/kafka/producer/iskafkaproducer.md)
  * **Is likely a Kafka producer module**
  * Marks the project if it's likely a Kafka producer module.
* [io.moderne.java.spring.kotlin.ReplaceKotlinPropertyAssignmentWithSetterCall](/user-documentation/recipes/recipe-catalog/java/spring/kotlin/replacekotlinpropertyassignmentwithsettercall.md)
  * **Replace Kotlin property assignment with setter call**
  * Rewrites a Kotlin property-style assignment (`obj.prop = value`) to an explicit setter invocation (`obj.setProp(value)`). Use when a Java library adopts JSpecify `@NullMarked` and a previously-`var` synthetic property is demoted to `val`: Kotlin requires the getter's return type and the setter's parameter type to share the same nullability, and once they diverge the assignment stops compiling.
* [io.moderne.java.spring.orm.SpringORM5](/user-documentation/recipes/recipe-catalog/java/spring/orm/springorm5.md)
  * **Migrate to Spring ORM to 5**
  * Migrate applications using Spring ORM Hibernate Support to Hibernate 5 compatible version. This will enable a further migration by the Spring Framework migration past 5.
* [io.moderne.java.spring.security.MigrateAcegiToSpringSecurity_5_0](/user-documentation/recipes/recipe-catalog/java/spring/security/migrateacegitospringsecurity_5_0.md)
  * **Migrate from Acegi Security 1.0.x to Spring Security 5.0**
  * Migrates Acegi Security 1.0.x directly to Spring Security 5.0. This recipe handles dependency changes, type renames, XML configuration updates, web.xml filter migration, and adds TODO comments for password encoders that require manual migration.
* [io.moderne.java.spring.security6.MigrateAntPathRequestMatcher](/user-documentation/recipes/recipe-catalog/java/spring/security6/migrateantpathrequestmatcher.md)
  * **Migrate antPathRequestMatcher to pathPatternRequestMatcher**
  * In Spring Security 6.5, `AntPathRequestMatcher` is deprecated in favor of `PathPatternRequestMatcher`. This recipe migrates static method calls and constructor usage to the new pattern in both Java and Kotlin sources.
* [io.moderne.java.spring.security6.UpgradeSpringSecurity_6_5](/user-documentation/recipes/recipe-catalog/java/spring/security6/upgradespringsecurity_6_5-moderne-edition.md)
  * **Migrate to Spring Security 6.5 (Moderne Edition)**
  * Migrate applications to the latest Spring Security 6.5 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions.
* [io.moderne.java.spring.security7.CommentOnSecurityContextAuthenticationInKotlin](/user-documentation/recipes/recipe-catalog/java/spring/security7/commentonsecuritycontextauthenticationinkotlin.md)
  * **Comment on Kotlin usages of `SecurityContext.getAuthentication()`**
  * Spring Security 7 made `SecurityContext.getAuthentication()` return `@Nullable Authentication`. In Kotlin this becomes `Authentication?`, so existing chains like `SecurityContextHolder.getContext().authentication.credentials` no longer compile. This recipe adds a TODO comment on the line above each Kotlin statement that reads the authentication — both the explicit `getAuthentication()` form and the Kotlin property form `.authentication` — so a developer can decide per call site whether to use a safe-call (`?.`) or a non-null assertion (`!!`).
* [io.moderne.java.spring.security7.MigrateDaoAuthenticationProviderConstructor](/user-documentation/recipes/recipe-catalog/java/spring/security7/migratedaoauthenticationproviderconstructor.md)
  * **Use constructor injection for `DaoAuthenticationProvider`**
  * Spring Security 7.0 removed the no-arg `DaoAuthenticationProvider()` constructor and the `setUserDetailsService(UserDetailsService)` setter; `UserDetailsService` is now a required constructor argument. This recipe folds `setUserDetailsService(x)` into the constructor (`new DaoAuthenticationProvider(x)`) and removes the setter when the provider is created with the no-arg constructor in the same block, for both Java and Kotlin sources. `setPasswordEncoder(...)` and other configuration are preserved. When the setter cannot be safely folded, a TODO comment with migration guidance is added instead.
* [io.moderne.java.spring.security7.MigrateMvcRequestMatcher](/user-documentation/recipes/recipe-catalog/java/spring/security7/migratemvcrequestmatcher.md)
  * **Migrate `MvcRequestMatcher` to `PathPatternRequestMatcher`**
  * In Spring Security 7.0, `MvcRequestMatcher` which depends on the deprecated `HandlerMappingIntrospector` is removed in favor of `PathPatternRequestMatcher`. This recipe migrates constructor and builder usage to the new pattern.
* [io.moderne.java.spring.security7.MigrateOAuth2AccessTokenResponseClient](/user-documentation/recipes/recipe-catalog/java/spring/security7/migrateoauth2accesstokenresponseclient.md)
  * **Migrate `OAuth2AccessTokenResponseClient` from `RestOperations` to `RestClient` based implementations**
  * A new set of `OAuth2AccessTokenResponseClient` implementations were introduced based on `RestClient`. This recipe replaces the `RestOperations`-based implementations which have been deprecated. The `RestClient` implementations are drop-in replacements for the deprecated implementations.
* [io.moderne.java.spring.security7.MigrateOAuth2RestOperationsToRestClient](/user-documentation/recipes/recipe-catalog/java/spring/security7/migrateoauth2restoperationstorestclient.md)
  * **Migrate OAuth2 token response client from `RestOperations` to `RestClient`**
  * Migrates `setRestOperations(RestOperations)` calls to `setRestClient(RestClient)` on the new `RestClient`-based OAuth2 `AccessTokenResponseClient` implementations. The `RestClient`-based implementations introduced in Spring Security 7 use `RestClient` instead of `RestOperations`.
* [io.moderne.java.spring.security7.MigrateRequiresChannelToRedirectToHttps](/user-documentation/recipes/recipe-catalog/java/spring/security7/migraterequireschanneltoredirecttohttps.md)
  * **Migrate `requiresChannel()` to `redirectToHttps()`**
  * In Spring Security 7.0, `HttpSecurity.requiresChannel()` is deprecated in favor of `HttpSecurity.redirectToHttps()`. This recipe renames the method call and simplifies `anyRequest().requiresSecure()` to `Customizer.withDefaults()`.
* [io.moderne.java.spring.security7.ModularizeSpringSecurity7](/user-documentation/recipes/recipe-catalog/java/spring/security7/modularizespringsecurity7.md)
  * **Spring Security 7 modularization**
  * Spring Security Core was modularized in version 7, deprecated classes that are still a crucial part of some applications are moved to `spring-security-access`.

## rewrite-tapestry

_License: Moderne Proprietary License_

_11 recipes_

* [org.openrewrite.tapestry.ChangeTapestryPackages](/user-documentation/recipes/recipe-catalog/tapestry/changetapestrypackages.md)
  * **Change Tapestry 4 packages to Tapestry 5**
  * Updates package imports from org.apache.tapestry to org.apache.tapestry5. Only renames packages that have direct equivalents in Tapestry 5.
* [org.openrewrite.tapestry.ChangeTapestryTypes](/user-documentation/recipes/recipe-catalog/tapestry/changetapestrytypes.md)
  * **Change Tapestry 4 types to Tapestry 5 equivalents**
  * Renames Tapestry 4 types that have direct equivalents in Tapestry 5. This handles types from different packages that were reorganized in T5.
* [org.openrewrite.tapestry.ConvertAnnotatedMethodToField](/user-documentation/recipes/recipe-catalog/tapestry/convertannotatedmethodtofield.md)
  * **Convert annotated abstract method to field**
  * Converts abstract getter methods annotated with `sourceAnnotation` to private fields annotated with `targetAnnotation`. Also removes corresponding abstract setter methods.
* [org.openrewrite.tapestry.ConvertBeanAnnotation](/user-documentation/recipes/recipe-catalog/tapestry/convertbeanannotation.md)
  * **Convert Tapestry 4 `@Bean` to `@Property`**
  * Converts Tapestry 4's `@Bean` annotation to `@Property` fields. Bean initialization with 'initializer' attribute requires manual migration.
* [org.openrewrite.tapestry.ConvertListenerInterfaces](/user-documentation/recipes/recipe-catalog/tapestry/convertlistenerinterfaces.md)
  * **Convert Tapestry 4 listener interfaces to Tapestry 5 annotations**
  * Converts Tapestry 4 page lifecycle listener interfaces (`PageBeginRenderListener`, `PageEndRenderListener`, etc.) to Tapestry 5 lifecycle annotations (`@SetupRender`, `@CleanupRender`, etc.) and removes the interface implementations.
* [org.openrewrite.tapestry.MigrateTapestry4To5](/user-documentation/recipes/recipe-catalog/tapestry/migratetapestry4to5.md)
  * **Migrate Tapestry 4 to Tapestry 5**
  * Migrates Apache Tapestry 4 applications to Tapestry 5. This includes package renames, removing base class inheritance, converting listener interfaces to annotations, and updating dependencies.
* [org.openrewrite.tapestry.RemoveIRequestCycleParameter](/user-documentation/recipes/recipe-catalog/tapestry/removeirequestcycleparameter.md)
  * **Remove `IRequestCycle` parameters**
  * Removes `IRequestCycle` parameters from methods. In Tapestry 5, event handler methods don't receive the request cycle as a parameter.
* [org.openrewrite.tapestry.RemoveObsoleteFormTypes](/user-documentation/recipes/recipe-catalog/tapestry/removeobsoleteformtypes.md)
  * **Remove obsolete Tapestry form types**
  * Removes field declarations and imports for Tapestry 4 form component types (`IPropertySelectionModel`, `StringPropertySelectionModel`, etc.) that don't exist in Tapestry 5. Code using these types will need manual refactoring to use Tapestry 5's `SelectModel` pattern.
* [org.openrewrite.tapestry.RemoveTapestryBaseClasses](/user-documentation/recipes/recipe-catalog/tapestry/removetapestrybaseclasses.md)
  * **Remove Tapestry 4 base classes**
  * Removes Tapestry 4 base class inheritance (`BasePage`, `BaseComponent`, `AbstractComponent`) and converts the class to a POJO suitable for Tapestry 5. Abstract getter/setter methods are converted to fields with `@Property` annotation.
* [org.openrewrite.tapestry.ReplaceReverseComparator](/user-documentation/recipes/recipe-catalog/tapestry/replacereversecomparator.md)
  * **Replace `ReverseComparator` with `Collections.reverseOrder()`**
  * Replaces tapestry-contrib's `ReverseComparator` with the standard Java `Collections.reverseOrder()` method.
* [org.openrewrite.tapestry.UpdateTapestryDependencies](/user-documentation/recipes/recipe-catalog/tapestry/updatetapestrydependencies.md)
  * **Update Tapestry dependencies**
  * Updates dependencies from Tapestry 4 to Tapestry 5.

## rewrite-vulncheck

_License: Moderne Proprietary License_

_1 recipe_

* [io.moderne.vulncheck.FixVulnCheckVulnerabilities](/user-documentation/recipes/recipe-catalog/vulncheck/fixvulncheckvulnerabilities.md)
  * **Use VulnCheck Exploit Intelligence to fix vulnerabilities**
  * This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe by default only upgrades to the latest **patch** version.  If a minor or major upgrade is required to reach the fixed version, this can be controlled using the `maximumUpgradeDelta` option. Vulnerability information comes from VulnCheck Vulnerability Intelligence. The recipe has an option to limit fixes to only those vulnerabilities that have evidence of exploitation at various levels of severity.
