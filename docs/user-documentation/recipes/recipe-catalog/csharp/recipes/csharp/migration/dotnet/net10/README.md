---
description: Net10 OpenRewrite recipes.
---

# Net10

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate to .NET 10](./upgradetodotnet10.md)

## Recipes

* [Find `ActivitySamplingResult.PropagationData` behavior change](./findactivitysampling.md)
* [Find `BackgroundService.ExecuteAsync` behavior change](./findbackgroundserviceexecuteasync.md)
* [Find `BufferedStream.WriteByte` implicit flush behavior change](./findbufferedstreamwritebyte.md)
* [Find `DistributedContextPropagator` default propagator change](./finddistributedcontextpropagator.md)
* [Find `DllImportSearchPath.AssemblyDirectory` behavior change](./finddllimportsearchpath.md)
* [Find `DriveInfo.DriveFormat` behavior change](./finddriveinfodriveformat.md)
* [Find `GnuTarEntry`/`PaxTarEntry` default timestamp change](./findgnutarpaxtarentry.md)
* [Find `KeyedService.AnyKey` behavior change](./findkeyedserviceanykey.md)
* [Find `Type.MakeGenericSignatureType` validation change](./findmakegenericsignaturetype.md)
* [Find `X500DistinguishedName` string constructor stricter validation](./findx500distinguishednamevalidation.md)
* [Find `catch (OutOfMemoryException)` that may need `ExternalException`](./findsystemdrawingexceptionchange.md)
* [Find deprecated `WithOpenApi` calls (ASPDEPR002)](./findwithopenapideprecated.md)
* [Find obsolete `AddRazorRuntimeCompilation` calls (ASPDEPR003)](./findrazorruntimecompilationobsolete.md)
* [Find obsolete `Clipboard.GetData` calls (WFDEV005)](./findclipboardgetdata.md)
* [Find obsolete `Form.OnClosing`/`OnClosed` usage (WFDEV004)](./findformonclosingobsolete.md)
* [Find obsolete `IActionContextAccessor`/`ActionContextAccessor` (ASPDEPR006)](./findactioncontextaccessorobsolete.md)
* [Find obsolete `IPNetwork`/`KnownNetworks` (ASPDEPR005)](./findipnetworkobsolete.md)
* [Find obsolete `Queryable.MaxBy`/`MinBy` with `IComparer&lt;TSource&gt;` (SYSLIB0061)](./findqueryablemaxbyminbyobsolete.md)
* [Find obsolete `Rfc2898DeriveBytes` constructors (SYSLIB0060)](./findrfc2898derivebytesobsolete.md)
* [Find obsolete SSL authentication enum types](./findsslauthenumtypes.md)
* [Find obsolete `SslStream` cipher properties (SYSLIB0058)](./findsslstreamobsoleteproperties.md)
* [Find obsolete `SystemEvents.EventsThreadShutdown` (SYSLIB0059)](./findsystemeventsthreadshutdownobsolete.md)
* [Find obsolete `WebHostBuilder`/`IWebHost`/`WebHost` usage (ASPDEPR004/ASPDEPR008)](./findwebhostbuilderobsolete.md)
* [Find obsolete Windows Forms APIs (WFDEV004/005/006)](./findwinformsobsoleteapis.md)
* [Find obsolete `XsltSettings.EnableScript` (SYSLIB0062)](./findxsltsettingsenablescriptobsolete.md)
* [Remove deprecated `WithOpenApi` calls (ASPDEPR002)](./withopenapideprecated.md)
* [Remove obsolete `AddRazorRuntimeCompilation` calls (ASPDEPR003)](./razorruntimecompilationobsolete.md)
* [Rename `Form.OnClosing/OnClosed` to `OnFormClosing/OnFormClosed` (WFDEV004)](./formonclosingrename.md)
* [Rename `KnownNetworks` to `KnownIPNetworks` (ASPDEPR005)](./knownnetworksrename.md)
* [Rename MLDsa/SlhDsa `SecretKey` members to `PrivateKey`](./mldsaslhdsasecretkeytoprivatekey.md)
* [Rename `orient` parameter to `orientation` in `HtmlElement.InsertAdjacentElement`](./insertadjacentelementorientparameterrename.md)


