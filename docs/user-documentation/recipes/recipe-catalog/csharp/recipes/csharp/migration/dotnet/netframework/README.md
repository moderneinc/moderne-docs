---
description: Netframework OpenRewrite recipes.
---

# Netframework

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Retarget .NET Framework 4.0 to 4.5](./upgradetonetframework45.md)
* [Retarget .NET Framework 4.5 to 4.5.1](./upgradetonetframework451.md)
* [Retarget .NET Framework 4.5.1 to 4.5.2](./upgradetonetframework452.md)
* [Retarget .NET Framework 4.5.2 to 4.6](./upgradetonetframework46.md)
* [Retarget .NET Framework 4.6 to 4.6.1](./upgradetonetframework461.md)
* [Retarget .NET Framework 4.6.1 to 4.6.2](./upgradetonetframework462.md)
* [Retarget .NET Framework 4.6.2 to 4.7](./upgradetonetframework47.md)
* [Retarget .NET Framework 4.7 to 4.7.1](./upgradetonetframework471.md)
* [Retarget .NET Framework 4.7.1 to 4.7.2](./upgradetonetframework472.md)
* [Retarget to .NET Framework 4.8](./upgradetonetframework48.md)
* [Retarget to .NET Framework 4.8.1](./upgradetonetframework481.md)

## Recipes

* [Add `override` to `DbParameter.Precision`/`Scale`](./addoverridetodbparameterprecisionscale.md)
* [Find `ClaimsIdentity` Actor clone-on-copy change](./findclaimsidentityactorclone.md)
* [Find `CurrentCulture`/`CurrentUICulture` async flow change](./findasynccurrentcultureflow.md)
* [Find `DataContractJsonSerializer` usage (control-char escaping change)](./finddatacontractjsonserializerescaping.md)
* [Find `DataObject` usage (HTML clipboard now UTF-8)](./finddataobjectgetdatahtml.md)
* [Find `DeflateStream`/`GZipStream` usage (native decompression)](./finddeflatestreamnativedecompression.md)
* [Find `HttpRuntime.AppDomainAppPath` (exception type change)](./findhttpruntimeappdomainapppath.md)
* [Find `Icon.ToBitmap` usage (PNG-frame behavior change)](./findicontobitmappngframes.md)
* [Find `List&lt;T&gt;.ForEach` modification-during-enumeration change](./findlistforeachduringmutation.md)
* [Find `RSACng` usage (non-standard key size behavior)](./findrsacngimportparameters.md)
* [Find `SerialPort` usage (background-thread exception behavior)](./findserialportthreadexception.md)
* [Find `ServiceBase.Run` usage (OnStart exception propagation)](./findservicebaserunonstart.md)
* [Find `ServicePointManager` TLS configuration](./findservicepointmanagersecurityprotocol.md)
* [Find `SignedXml`/`CmsSigner` usage (default hash SHA-1 → SHA-256)](./findsignedxmldefaulthash.md)
* [Find `SslStream` usage (TLS alert behavior change)](./findsslstreamtlsalerts.md)
* [Find `System.IO.Path` normalization change](./findpathnormalizationchange.md)
* [Find `System.Uri` construction (RFC 3986/3987 parsing change)](./finduriparsingchange.md)
* [Find WPF `Grid` usage (star-column allocation change)](./findwpfgridstarallocation.md)
* [Find `XmlWriter` invalid-surrogate-pair change](./findxmlwriterinvalidsurrogate.md)
* [Find `ZipFile`/`ZipArchiveEntry` usage (path separator change)](./findzipfileentryseparator.md)
* [Find managed crypto classes (FIPS mode behavior change)](./findfipsmanagedcryptothrow.md)
* [Find obsolete 5-argument `EncoderParameter` constructor](./findobsoleteencoderparameterctor.md)
* [Find obsolete `MachineKey.Encode`/`Decode`](./findobsoletemachinekeyencryption.md)
* [Find obsolete `System.Workflow.*` (WF 3.x) usage](./findobsoleteworkflowtypes.md)


