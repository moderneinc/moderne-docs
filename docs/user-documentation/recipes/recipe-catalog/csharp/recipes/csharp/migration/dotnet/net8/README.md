---
description: Net8 OpenRewrite recipes.
---

# Net8

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate to .NET 8](./upgradetodotnet8.md)

## Recipes

* [Find `AesGcm` constructor without tag size (SYSLIB0053)](./findaesgcmoldconstructor.md)
* [Find DateTime.Now/UtcNow usage (TimeProvider in .NET 8)](./findtimeabstraction.md)
* [Find `JsonSerializerOptions.AddContext` usage (SYSLIB0049)](./findaddcontext.md)
* [Find `Regex.CompileToAssembly` usage (SYSLIB0052)](./findregexcompiletoassembly.md)
* [Find ToImmutable*() that could use Frozen collections](./findfrozencollection.md)
* [Find formatter-based serialization types (SYSLIB0050/0051)](./findformatterbasedserialization.md)
* [Find legacy serialization constructors (SYSLIB0051)](./findserializationconstructors.md)
* [Use ArgumentException.ThrowIfNullOrWhiteSpace()](./usethrowifnullorwhitespace.md)
* [Use ArgumentOutOfRangeException.ThrowIfGreaterThan()](./usethrowifgreaterthan.md)
* [Use ArgumentOutOfRangeException.ThrowIfLessThan()](./usethrowiflessthan.md)
* [Use ArgumentOutOfRangeException.ThrowIfZero()](./usethrowifzero.md)
* [Use TimeProvider instead of DateTime/DateTimeOffset static properties](./usetimeprovider.md)


