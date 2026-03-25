---
description: Net9 OpenRewrite recipes.
---

# Net9

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate Swashbuckle to built-in OpenAPI](./migrateswashbuckletoopenapi.md)
* [Migrate to .NET 9](./upgradetodotnet9.md)

## Recipes

* [Find `AuthenticationManager` usage (SYSLIB0009)](./findauthenticationmanager.md)
* [Find `BinaryFormatter` usage (removed in .NET 9)](./findbinaryformatter.md)
* [Find `BinaryReader.ReadString` behavior change](./findbinaryreaderreadstring.md)
* [Find `EnumConverter` constructor validation change](./findenumconverter.md)
* [Find `HttpClientHandler` usage (HttpClientFactory default change)](./findhttpclienthandlercast.md)
* [Find `HttpListenerRequest.UserAgent` nullable change](./findhttplistenerrequestuseragent.md)
* [Find IDistributedCache usage (HybridCache in .NET 9)](./finddistributedcache.md)
* [Find `InMemoryDirectoryInfo` rootDir prepend change](./findinmemorydirectoryinfo.md)
* [Find `IncrementingPollingCounter` async callback change](./findincrementingpollingcounter.md)
* [Find `JsonSerializer.Deserialize` nullable `JsonDocument` change](./findjsondocumentnullable.md)
* [Find `RuntimeHelpers.GetSubArray` return type change](./findruntimehelpersgetsubarray.md)
* [Find `SafeEvpPKeyHandle.DuplicateHandle` up-ref change](./findsafeevppkeyhandleduplicate.md)
* [Find `ServicePointManager` usage (SYSLIB0014)](./findservicepointmanager.md)
* [Find Swashbuckle usage (ASP.NET Core 9 built-in OpenAPI)](./findswashbuckle.md)
* [Find `ZipArchive.CreateEntry` with `CompressionLevel` (bit flag change)](./findziparchivecompressionlevel.md)
* [Find `ZipArchiveEntry` name/comment UTF-8 encoding change](./findziparchiveentryencoding.md)
* [Find implicit authentication default scheme (ASP.NET Core 9)](./findimplicitauthenticationdefault.md)
* [Find non-generic JsonStringEnumConverter](./findjsonstringenumconverter.md)
* [Find obsolete `X509Certificate2`/`X509Certificate` constructors (SYSLIB0057)](./findx509certificateconstructors.md)
* [Find synchronous ExecuteUpdate/ExecuteDelete (EF Core 9)](./findexecuteupdatesync.md)
* [Remove ConfigureAwait(false)](./removeconfigureawaitfalse.md)
* [Use Frozen collections instead of Immutable](./usefrozencollections.md)
* [Use Guid.CreateVersion7()](./useguidcreateversion7.md)
* [Use LINQ AggregateBy()](./uselinqaggregateby.md)
* [Use LINQ CountBy()](./uselinqcountby.md)
* [Use LINQ Index()](./uselinqindex.md)
* [Use MapStaticAssets()](./usemapstaticassets.md)
* [Use System.Threading.Lock for lock fields](./uselockobject.md)
* [Use Task.CompletedTask](./usetaskcompletedtask.md)
* [Use Volatile.Read/Write (SYSLIB0054)](./usevolatilereadwrite.md)
* [Use X509CertificateLoader (SYSLIB0057)](./usex509certificateloader.md)
* [Use \e escape sequence](./useescapesequencee.md)


