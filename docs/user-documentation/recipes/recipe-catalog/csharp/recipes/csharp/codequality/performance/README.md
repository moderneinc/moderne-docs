---
description: Performance OpenRewrite recipes.
---

# Performance

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Performance code quality](./performancecodequality.md)

## Recipes

* [Add timeout to Regex](./findmissingtimeoutforregex.md)
* [Avoid NullReferenceException](./avoidnullreferenceexception.md)
* [Avoid boxing of value type](./avoidboxingofvaluetype.md)
* [Avoid closure when using ConcurrentDictionary](./findavoidclosureinconcurrentdictionary.md)
* [Avoid locking on publicly accessible instance](./avoidlockingonpubliclyaccessible.md)
* [Bitwise operation on enum without Flags attribute](./bitoperationonenumwithoutflags.md)
* [Convert HasFlag to bitwise operation](./converthasflagtobitwiseoperation.md)
* [Do not pass non-read-only struct by read-only reference](./donotpassnonreadonlystructbyreadonlyref.md)
* [Do not use NaN in comparisons](./findnancomparison.md)
* [Do not use ToString on GetType result](./finddonotusetostringifobject.md)
* [Do not use async void](./findasyncvoid.md)
* [Do not use blocking calls on tasks](./finddonotuseblockingcall.md)
* [Find Dictionary/HashSet with struct key type](./findstructwithdefaultequalsaskey.md)
* [Find EqualityComparer&lt;string&gt;.Default usage](./findequalitycomparerdefaultofstring.md)
* [Find FormattableString that could use string.Create](./findstringcreateinsteadofformattable.md)
* [Find GetCustomAttributes that could use Attribute.IsDefined](./finduseattributeisdefined.md)
* [Find GetType() called on System.Type](./findgettypeonsystemtype.md)
* [Find Guid.Parse with constant string](./findoptimizeguidcreation.md)
* [Find LINQ Count() on materialized collection](./findoptimizeenumerablecountvsany.md)
* [Find LINQ methods replaceable with direct methods](./findlinqondirectmethods.md)
* [Find LINQ methods replaceable with indexer](./finduseindexerinsteadoflinq.md)
* [Find Regex that could use source generator](./finduseregexsourcegenerator.md)
* [Find Span&lt;char&gt; equality that should use SequenceEqual](./findsequenceequalforspan.md)
* [Find Values.Contains() instead of ContainsValue()](./findusevaluescontainsinsteadofvalues.md)
* [Find blocking calls in async methods](./findblockingcallsinasync.md)
* [Find calls that could use TimeProvider](./findusetimeprovideroverload.md)
* [Find closure in GetOrAdd that could use factory argument](./findavoidclosurebyusingfactoryarg.md)
* [Find closure in GetOrAdd/AddOrUpdate factory](./findavoidclosureinmethod.md)
* [Find implicit culture-sensitive ToString calls](./findimplicitculturesensitivetostring.md)
* [Find implicit culture-sensitive string methods](./findimplicitculturesensitivemethods.md)
* [Find methods not forwarding CancellationToken](./findmissingcancellationtoken.md)
* [Find methods that could be static](./findmakemethodstatic.md)
* [Find missing WithCancellation on async enumerables](./findmissingwithcancellation.md)
* [Find simplifiable string.Create calls](./findsimplifystringcreate.md)
* [Find string.GetHashCode() without StringComparer](./findstringgethashcode.md)
* [Find structs without StructLayout attribute](./findmissingstructlayout.md)
* [Find unused Stream.Read return value](./findstreamreadresultnotused.md)
* [Make parameter ref read-only](./makeparameterrefreadonly.md)
* [Optimize StringBuilder.Append usage](./optimizestringbuilderappend.md)
* [Optimize method call](./optimizemethodcall.md)
* [Remove unnecessary explicit enumerator](./unnecessaryexplicitenumerator.md)
* [Replace Enum.ToString() with nameof](./replaceenumtostringwithnameof.md)
* [Return completed task instead of null](./returncompletedtask.md)
* [String.Format format string should be constant](./findstringformatshouldbeconstant.md)
* [Throwing of new NotImplementedException](./throwingnotimplementedexception.md)
* [Use Array.Empty&lt;T&gt;() instead of new T[0]](./usearrayempty.md)
* [Use ContainsKey instead of Keys.Contains](./usecontainskey.md)
* [Use ContainsKey instead of TryGetValue with discard](./findusecontainskeyinsteadoftrygetvalue.md)
* [Use Count/Length property instead of Count()](./usecountproperty.md)
* [Use Regex.IsMatch](./useregexismatch.md)
* [Use RegexOptions.ExplicitCapture](./finduseexplicitcaptureregexoption.md)
* [Use StringBuilder.AppendLine](./usestringbuilderappendline.md)
* [Use StringComparison](./usestringcomparison.md)
* [Use char overload for single-character string methods](./findoptimizestartswith.md)
* [Use string.Concat instead of string.Join](./usestringconcatinsteadofjoin.md)


