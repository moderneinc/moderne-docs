---
description: Cleanup OpenRewrite recipes.
---

# Cleanup

## Recipes

* [Avoid `System.exit` in library code](./avoidsystemexit.md)
* [Avoid empty catch blocks](./avoidemptycatchblock.md)
* [Encapsulate public mutable fields](./encapsulatefield.md)
* [Ensure Log4j is patched against CVE-2021-44228](./patchlog4j.md)
* [Externalize hardcoded credentials](./externalizecredentials.md)
* [Externalize hardcoded timeouts](./externalizetimeout.md)
* [Extract magic numbers to named constants](./extractmagicnumber.md)
* [Inventory Typesafe Config usage](./inventorytypesafeconfig.md)
* [Inventory scala-logging usage](./inventoryscalalogging.md)
* [Keep classes small (max 30 members)](./keepclassessmall.md)
* [Keep methods short (max 20 statements)](./keepmethodsshort.md)
* [Prefer `Option` over `null`](./preferoption.md)
* [Prefer Scala-style property access over Java getters](./preferscalapropertyaccess.md)
* [Prefer explicit imports over wildcards](./preferexplicitimports.md)
* [Prefer immutable collections](./preferimmutablecollections.md)
* [Prefer pattern matching over `asInstanceOf` casts](./preferpatternmatch.md)
* [Prefer pattern matching over `isInstanceOf`/`asInstanceOf` chains](./preferpatternmatchoverinstanceof.md)
* [Prefer specific types over `Any`](./preferspecifictypes.md)
* [Prefer string interpolation over concatenation](./preferstringinterpolation.md)
* [Prefer `val` over `var`](./preferimmutableval.md)
* [Reduce deep nesting by extracting methods](./reducenesting.md)
* [Reduce parameter count (max 5 parameters)](./reduceparametercount.md)
* [Remove explicit `return` statements](./removeexplicitreturn.md)
* [Remove redundant `toString` on `String`](./removeredundanttostring.md)
* [Remove unnecessary `: Unit` return type](./removeunitreturntype.md)
* [Remove unused variable bindings](./removeunusedbinding.md)
* [Replace `.getOrElse(null)` with `.orNull`](./useornull.md)
* [Replace `JavaConverters` with `CollectionConverters`](./usecollectionconverters.md)
* [Replace unnecessary intermediate collection before `.toSet`](./usedirecttoset.md)
* [Resolve TODO/FIXME comments](./resolvetodocomment.md)
* [Review deprecated API declarations](./reviewdeprecatedapi.md)
* [Simplify boolean expression](./simplifybooleanexpression.md)
* [Use `Option` safely](./useoptionsafely.md)
* [Use logging framework instead of `printStackTrace`](./useloggerforexceptions.md)
* [Use logging framework instead of `println`](./uselogger.md)


