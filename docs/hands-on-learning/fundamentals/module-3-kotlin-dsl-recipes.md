---
sidebar_label: "Module 3: Kotlin DSL recipes"
description: Exploring and writing recipes with the Kotlin recipe DSL.
---

# Module 3: Kotlin DSL recipes

Most refactorings you want to apply to a codebase are pattern-shaped: this expression should look like that expression. The [Kotlin recipe domain-specific language (DSL)](../../user-documentation/recipes/authoring-recipes/writing-recipes/writing-kotlin-recipes.md) lets you express that shape directly, as a before/after pair of Kotlin lambdas, without writing a visitor by hand.

The DSL is a [K2 compiler plugin](https://kotlinlang.org/docs/whatsnew20.html) shipped inside `rewrite-kotlin`. At recipe-compile time it reads your `rewrite { } to { }` pair and synthesizes a `Recipe` subclass, so what you ship is an ordinary OpenRewrite recipe that anyone can run.

Kotlin DSL recipes are an easy step-up to writing imperative recipes. They are written in Kotlin, so your compiler catches syntax and type errors, and your IDE can navigate to definitions and references. When a pattern-shaped rewrite is not enough, the DSL drops into a full [visitor](../../user-documentation/recipes/authoring-recipes/concepts/visitors.md) with the `kotlin { visit… }` scope, which is a natural bridge into the imperative recipes you'll write in the next module.

One more thing worth knowing up front: a Kotlin DSL recipe is not limited to rewriting Kotlin. The [Kotlin Lossless Semantic Tree (LST)](../../user-documentation/recipes/authoring-recipes/concepts/lossless-semantic-trees.md) extends the Java LST, and the recipe the compiler plugin generates is `MethodMatcher`-driven over that shared model. When your pattern names a pure-Java API, the same recipe rewrites Java, Groovy, and Scala sources too. You'll see that in Exercise 3-1.

If you get stuck, the [`kotlin-recipe-starter`](https://github.com/moderneinc/kotlin-recipe-starter) repository contains complete, runnable versions of the recipes referenced in this module (and you'll also see code embedded inline throughout the steps).

This module builds a different starter project than the previous ones, so not everything set up in [Module 1](./module-1-recipe-development-environment.md) carries over. You'll also want:

* A JDK 21 that Gradle can find. The build pins a Java 21 toolchain, so a JDK 21 has to be installed even when your default JDK is newer. The starter ships an `.sdkmanrc` pinning `21.0.5-tem`.
* Gradle. The `kotlin-recipe-starter` has no Maven build, so the Maven commands from the earlier modules do not apply here. Step 1 explains why the DSL needs Gradle.
* Code Genome Project credentials, to resolve the most recent OpenRewrite artifacts. Step 1 covers where to get them and where to put them.

## Exercise 3-1: Explore and run Kotlin DSL recipes

In this exercise, you will set up a Kotlin recipe project, read through the recipes it ships with, and run their tests to validate them.

### Goals for this exercise

* Understand what makes a Gradle build capable of compiling Kotlin DSL recipes.
* See how a `rewrite { } to { }` pattern reads, and what the compiler plugin turns it into.
* Confirm that a Kotlin-authored recipe can rewrite Java sources as well as Kotlin ones.

### Steps

#### Step 1: Clone and open the Kotlin recipe starter

The previous modules used the [`rewrite-recipe-starter`](https://github.com/moderneinc/rewrite-recipe-starter) project, which builds with either Maven or Gradle. The Kotlin DSL needs its own project, because the compiler plugin has to be on the Kotlin compiler's plugin classpath, which requires a Gradle build with the Kotlin plugin applied.

1. Clone or fork the [`kotlin-recipe-starter`](https://github.com/moderneinc/kotlin-recipe-starter) project or [use it as a template](https://github.com/new?template_name=kotlin-recipe-starter&template_owner=moderneinc).
2. Open the project in your IDE and import the Gradle build.
3. Open [build.gradle.kts](https://github.com/moderneinc/kotlin-recipe-starter/blob/main/build.gradle.kts) and find the lines that enable the DSL:

```kotlin
// The Kotlin recipe DSL is authored in Kotlin and compiled by the K2 compiler.
kotlin("jvm") version "2.4.10"

// ...

// This is the line that enables the DSL: the K2 compiler plugin ships inside rewrite-kotlin.
kotlinCompilerPluginClasspath(platform("org.openrewrite:rewrite-bom:latest.release"))
kotlinCompilerPluginClasspath("org.openrewrite:rewrite-kotlin")
```

:::info
Without `kotlinCompilerPluginClasspath("org.openrewrite:rewrite-kotlin")`, your `recipe(...)` declarations still compile, but they produce nothing runnable. Nothing in the failure names the missing plugin - every test fails inside Jackson instead:

```text
Cannot construct instance of `org.openrewrite.RecipeBuilder$buildSimpleRecipe$1`
(no Creators, like default constructor, exist)
```
:::

:::note
OpenRewrite artifacts are published to the [Code Genome Project](https://artifacts.codegenomeproject.org/maven), which requires authentication. Moderne customers receive a username, password, and download token directly from Moderne; see [Accessing the Code Genome Project](../../administrator-documentation/moderne-platform/how-to-guides/accessing-the-code-genome-project.md) for how to get them and what each one covers.

Add them to `~/.gradle/gradle.properties` before building, using the token as the password:

```properties
codegenomeUsername=<your username>
codegenomePassword=<your token>
```

Set them before building. Without them Gradle silently falls back to Maven Central, which no longer receives every OpenRewrite release and will fall further behind over time - the build still succeeds, but can resolve a version that predates the DSL. The starter's `README.md` covers the same credentials as environment variables for CI.
:::

#### Step 2: Read a pattern-shaped recipe

1. Open [src/main/kotlin/com/yourorg/UseModernKotlinApis.kt](https://github.com/moderneinc/kotlin-recipe-starter/blob/main/src/main/kotlin/com/yourorg/UseModernKotlinApis.kt). A recipe here is a top-level Kotlin property, with no annotations, no separate template class, and no annotation processor to configure:

```kotlin
val UseUppercase: Recipe = recipe(
    displayName = "Use `uppercase()` instead of `toUpperCase()`",
    description = "`String.toUpperCase()` was deprecated in Kotlin 1.5 in favor of the locale-explicit `uppercase()`.",
) {
    edit {
        rewrite { s: String -> s.toUpperCase() } to { s -> s.uppercase() }
    }
}
```

2. Read through the rest of the file and note how the lambdas vary:
   * `UseUppercase`, `UseLowercase`, and `UseCharCode` bind a single parameter, which is threaded through to the `to { }` side by name.
   * `UseSumOf` binds two parameters, one of which is itself a lambda: `rewrite { xs: Iterable<Int>, selector: (Int) -> Int -> xs.sumBy(selector) } to { xs, selector -> xs.sumOf(selector) }`.
   * `UseKotlinMathPi` uses a zero-parameter pattern (`{ -> … }`), which matches an expression that binds no arguments - a constant field access rather than a method call.
   * `UseModernKotlinApis` at the bottom uses `recipes(...)` to bundle all of them into one runnable recipe. Each sub-recipe remains runnable on its own.
3. Note the `edit` block wrapping each pattern. It's one of three phases the DSL exposes, lining up with the [three recipe types](../../user-documentation/recipes/authoring-recipes/writing-recipes/types-of-recipes.md) you'd otherwise write by hand:
   * `scan` accumulates information across files before any edits are made.
   * `edit` rewrites trees in place.
   * `generate` adds new source files.
4. Note the `@file:Suppress("DEPRECATION", "DEPRECATION_ERROR")` at the top of the file. Migration recipes name deprecated APIs constantly, because the deprecated call is the pattern being matched, not code that runs.

:::warning
Write the `displayName` and `description` arguments inline as compile-time constants: a string literal, a concatenation of literals (`"a" + "b"`), or a text block with `trimIndent()`. Referencing a `val`, a parameter, or a `const val` fails the build, since the code generator cannot resolve the value and would otherwise drop it.
:::

:::tip
You never see the K2 plugin at work, but it's worth knowing what it does. It extracts a [`MethodMatcher`](../../user-documentation/recipes/authoring-recipes/references/method-patterns.md) spec from the before lambda's resolved root call, builds a template from the after lambda's source, and synthesizes a `Recipe` whose visitor walks the LST replacing matches. Every generated visitor is wrapped in a precondition (`UsesMethod`, or `UsesField` for property-access patterns), so files that never reference the targeted member are skipped without being walked.
:::

#### Step 3: Validate the recipes with tests

Kotlin recipes are tested with the same `RewriteTest` harness you used in previous modules, via the `kotlin(...)` source helper from `rewrite-kotlin`.

1. Open [src/test/kotlin/com/yourorg/UseModernKotlinApisTest.kt](https://github.com/moderneinc/kotlin-recipe-starter/blob/main/src/test/kotlin/com/yourorg/UseModernKotlinApisTest.kt) and review the test cases. As with the Java tests you've already seen, two arguments (`kotlin(before, after)`) assert a transformation, and one argument (`kotlin(before)`) asserts that no change is made.
2. Run all the tests with `./gradlew test` (or from your IDE) and confirm they pass.

#### Step 4: See how one recipe reaches other JVM languages

`G.CompilationUnit` (Groovy) and `S.CompilationUnit` (Scala) implement `JavaSourceFile` just as `K.CompilationUnit` does. Because the compiled recipe is `MethodMatcher`-driven over that shared Java LST, a pattern whose before and after lambdas name a pure-Java API rewrites Java, Groovy, and Scala sources as readily as Kotlin ones.

1. Open [src/main/kotlin/com/yourorg/UseIsWhitespace.kt](https://github.com/moderneinc/kotlin-recipe-starter/blob/main/src/main/kotlin/com/yourorg/UseIsWhitespace.kt). `Character.isSpace(char)` has been deprecated since JDK 1.1 in favor of the identically shaped `Character.isWhitespace(char)`:

```kotlin
val UseIsWhitespace: Recipe = recipe(
    displayName = "Use `Character.isWhitespace` instead of the deprecated `Character.isSpace`",
    description = "`java.lang.Character.isSpace(char)` has been deprecated since JDK 1.1 in favor of `Character.isWhitespace(char)`, which also recognizes Unicode whitespace.",
) {
    edit {
        rewrite { c: Char -> Character.isSpace(c) } to { c -> Character.isWhitespace(c) }
    }
}
```

2. Open [src/test/kotlin/com/yourorg/UseIsWhitespaceTest.kt](https://github.com/moderneinc/kotlin-recipe-starter/blob/main/src/test/kotlin/com/yourorg/UseIsWhitespaceTest.kt) and notice that the same recipe is asserted through two different helpers: `kotlin(...)` from `rewrite-kotlin` and `java(...)` from `rewrite-java`. Run the test class and confirm both pass.

:::info
Two conditions have to hold for that reach. The API named in the lambdas must be a pure-Java one, so the matcher resolves to a type every JVM language sees rather than to a Kotlin-only synthetic facade. And the replacement must be valid syntax in each target language, which for a plain method rename it generally is.
:::

### Takeaways

* The Kotlin recipe DSL turns a before/after pair of lambdas into a regular OpenRewrite recipe at compile time.
* The `kotlinCompilerPluginClasspath` entry is what enables the DSL; a Gradle build with the Kotlin plugin is required.
* Patterns can bind zero, one, or several parameters, including lambda parameters, and `recipes(...)` composes them.
* Because the Kotlin LST extends the Java LST, a pattern naming a pure-Java API rewrites Java, Groovy, and Scala sources too.

## Exercise 3-2: Write a Kotlin DSL recipe

Now that you've seen how the DSL works, you can write your own. The starter project already migrates `Math.max` and `Math.PI` to their `kotlin.math` equivalents. In this exercise, you'll finish that migration and compose the whole set into one recipe.

### Goals for this exercise

* Write pattern-shaped recipes that bind one, two, and zero parameters.
* Compose several recipes into a single runnable recipe with `recipes(...)`.
* Use tests to drive each addition, including a no-change case.

### Steps

#### Step 1: Create the recipe and test files

1. In the starter project, create `src/main/kotlin/com/yourorg/UseKotlinMath.kt` with the package declaration and the imports the DSL needs:

```kotlin
package com.yourorg

import org.openrewrite.Recipe
import org.openrewrite.recipe
import org.openrewrite.recipes
```

2. Create `src/test/kotlin/com/yourorg/UseKotlinMathTest.kt` as an empty `RewriteTest` implementation. You'll add a test alongside each recipe as you go:

```kotlin
package com.yourorg

import org.junit.jupiter.api.Test
import org.openrewrite.kotlin.Assertions.kotlin
import org.openrewrite.test.RewriteTest

class UseKotlinMathTest : RewriteTest {
}
```

#### Step 2: Bind a single parameter

`Math.abs(x)` is JVM-only, while `kotlin.math.abs(x)` reads the same and works in Kotlin Multiplatform modules.

1. Using `UseUppercase` from the previous exercise as a reference, add a `UseKotlinMathAbs` recipe that rewrites `Math.abs(x)` to `kotlin.math.abs(x)` for a `Double` argument. Think about what the parameter needs to be named and typed in the before lambda, and how it is referenced again in the after lambda.
2. Add a test that asserts the transformation, then run it:

```kotlin
@Test
fun `Math abs becomes kotlin math abs`() = rewriteRun(
    { spec -> spec.recipe(UseKotlinMathAbs) },
    kotlin(
        """
        fun a(x: Double): Double = Math.abs(x)
        """,
        """
        fun a(x: Double): Double = kotlin.math.abs(x)
        """,
    ),
)
```

:::tip
The parameter needs a type annotation for the pattern to resolve, and that type is carried into the after-template - but it does not narrow the match. The compiler plugin builds the matcher spec with a wildcard per argument (`java.lang.Math abs(*)`), so `UseKotlinMathAbs` also rewrites `Math.abs(x)` where `x` is an `Int` or a `Long`. For this migration that is harmless, since `kotlin.math.abs` is overloaded the same way - but keep it in mind when a pattern is meant to apply to one overload only. [openrewrite/rewrite#8694](https://github.com/openrewrite/rewrite/pull/8694) types the non-varargs matcher parameters, which narrows the match to the declared type once it ships.
:::

#### Step 3: Bind two parameters

1. Add a `UseKotlinMathMin` recipe that rewrites `Math.min(a, b)` to `kotlin.math.min(a, b)` for two `Double` arguments. Both parameters are bound positionally in the before lambda and reused by name on the after side.
2. Add a test for it and run it.

#### Step 4: Bind no parameters

A constant field access binds no arguments, so it needs the zero-parameter form.

1. Add a `UseKotlinMathE` recipe that rewrites `Math.E` to `kotlin.math.E`, using the `{ -> … }` form you saw in `UseKotlinMathPi`.
2. Add a test for it and run it.

#### Step 5: Compose the set into one recipe

Consumers shouldn't have to run five recipes to migrate their math calls.

1. Add a `UseKotlinMath` composite that bundles your three new recipes together with `UseKotlinMathMax` and `UseKotlinMathPi` from `UseModernKotlinApis.kt`. Sub-recipes compose across files, so you can reference them directly.
2. Add a test that runs the composite against a source file exercising several of the patterns at once.

#### Step 6: Add a no-change test

Always include at least one no-change test so that you can be confident your recipe does not touch code it should not.

1. Add a test that passes a single `kotlin(before)` source using a `Math` method your recipes don't target, such as `Math.floor(x)`, and confirm the recipe leaves it alone.
2. Run the full test class and confirm everything passes.

:::info
`java.lang.Math` is a pure-Java API - the same condition that let `UseIsWhitespace` reach Java sources in Exercise 3-1. Your `kotlin.math` recipes still do not touch Java, because the second condition fails: `kotlin.math.abs(x)` is not valid Java. Rather than emit code that would not compile, the recipe leaves Java sources unchanged. Add a `java(...)` no-change assertion if you want to prove it to yourself.
:::

<details>
<summary>Reference example: Completed UseKotlinMath.kt</summary>

```kotlin
package com.yourorg

import org.openrewrite.Recipe
import org.openrewrite.recipe
import org.openrewrite.recipes

val UseKotlinMathAbs: Recipe = recipe(
    displayName = "Use `kotlin.math.abs` instead of `java.lang.Math.abs`",
    description = "`Math.abs(x)` is JVM-only; the multiplatform `kotlin.math.abs(x)` reads the same and works in Kotlin Multiplatform modules.",
) {
    edit {
        rewrite { x: Double -> Math.abs(x) } to { x -> kotlin.math.abs(x) }
    }
}

val UseKotlinMathMin: Recipe = recipe(
    displayName = "Use `kotlin.math.min` instead of `java.lang.Math.min`",
    description = "`Math.min(a, b)` is JVM-only; the multiplatform `kotlin.math.min(a, b)` reads the same and works in Kotlin Multiplatform modules.",
) {
    edit {
        rewrite { a: Double, b: Double -> Math.min(a, b) } to { a, b -> kotlin.math.min(a, b) }
    }
}

val UseKotlinMathE: Recipe = recipe(
    displayName = "Use `kotlin.math.E` instead of `java.lang.Math.E`",
    description = "Prefer the multiplatform `kotlin.math.E` constant over the JVM-only `Math.E`.",
) {
    edit {
        rewrite { -> Math.E } to { -> kotlin.math.E }
    }
}

val UseKotlinMath: Recipe = recipes(
    displayName = "Use `kotlin.math` instead of `java.lang.Math`",
    description = "Replaces JVM-only `java.lang.Math` members with their multiplatform `kotlin.math` equivalents.",
    UseKotlinMathAbs,
    UseKotlinMathMin,
    UseKotlinMathE,
    UseKotlinMathMax,
    UseKotlinMathPi,
)
```
</details>

<details>
<summary>Reference example: Completed UseKotlinMathTest.kt</summary>

```kotlin
package com.yourorg

import org.junit.jupiter.api.Test
import org.openrewrite.kotlin.Assertions.kotlin
import org.openrewrite.test.RewriteTest

class UseKotlinMathTest : RewriteTest {

    @Test
    fun `Math abs becomes kotlin math abs`() = rewriteRun(
        { spec -> spec.recipe(UseKotlinMathAbs) },
        kotlin(
            """
            fun a(x: Double): Double = Math.abs(x)
            """,
            """
            fun a(x: Double): Double = kotlin.math.abs(x)
            """,
        ),
    )

    @Test
    fun `Math min becomes kotlin math min`() = rewriteRun(
        { spec -> spec.recipe(UseKotlinMathMin) },
        kotlin(
            """
            fun m(a: Double, b: Double): Double = Math.min(a, b)
            """,
            """
            fun m(a: Double, b: Double): Double = kotlin.math.min(a, b)
            """,
        ),
    )

    @Test
    fun `Math E becomes kotlin math E`() = rewriteRun(
        { spec -> spec.recipe(UseKotlinMathE) },
        kotlin(
            """
            fun growth(t: Double): Double = Math.E * t
            """,
            """
            fun growth(t: Double): Double = kotlin.math.E * t
            """,
        ),
    )

    @Test
    fun `the composite runs every sub-recipe`() = rewriteRun(
        { spec -> spec.recipe(UseKotlinMath) },
        kotlin(
            """
            fun a(x: Double): Double = Math.abs(x)
            fun lo(a: Double, b: Double): Double = Math.min(a, b)
            fun hi(a: Double, b: Double): Double = Math.max(a, b)
            fun circumference(r: Double): Double = 2 * Math.PI * r
            """,
            """
            fun a(x: Double): Double = kotlin.math.abs(x)
            fun lo(a: Double, b: Double): Double = kotlin.math.min(a, b)
            fun hi(a: Double, b: Double): Double = kotlin.math.max(a, b)
            fun circumference(r: Double): Double = 2 * kotlin.math.PI * r
            """,
        ),
    )

    @Test
    fun `untargeted Math calls are left alone`() = rewriteRun(
        { spec -> spec.recipe(UseKotlinMath) },
        kotlin(
            """
            fun f(x: Double): Double = Math.floor(x)
            """,
        ),
    )
}
```
</details>

#### Step 7: _(Optional)_ Run your recipe against a codebase

Once your tests pass, you can point the [Moderne CLI](../../user-documentation/moderne-cli/getting-started/cli-intro.md) at your compiled classes and try the recipe on real repositories, exactly as you did with the active recipe in Module 1:

```bash
./gradlew classes
mod config recipes active set src/main/kotlin/com/yourorg/UseKotlinMath.kt \
  --recipe='com.yourorg.UseKotlinMath$KtRecipe'
```

From there, `mod run <path> --active-recipe` runs it, and each edit to your recipe costs one `./gradlew classes` rather than a publish.

:::info
Kotlin sources are accepted by [`mod config recipes active set`](../../user-documentation/moderne-cli/cli-reference.md#mod-config-recipes-active-set) as of Moderne CLI 4.5.2. Earlier versions take only `.java`, `.yml`, and `.yaml` files.
:::

:::warning
Pass `--recipe` whenever a file declares more than one recipe. Without it the CLI selects the first declaration in the file - here `UseKotlinMathAbs`, not the `UseKotlinMath` composite you just built - and prints the alternatives you could have chosen instead, which is easy to scroll past.

The compiler plugin synthesizes a class for each recipe declared with the DSL, and that class name - not the property name - is the recipe ID, so `val UseKotlinMath: Recipe = recipes(…)` compiles to `com.yourorg.UseKotlinMath$KtRecipe`. Wrap any recipe ID containing `$` in single quotes. An unquoted `$KtRecipe` is expanded to an empty string by most shells, and the CLI then reports the recipe as not found.
:::

### Takeaways

* A Kotlin DSL recipe is a top-level property, not a class, and needs no annotations or processor configuration.
* Parameter types in the before lambda are required to resolve the pattern and type the after-template, but they do not currently narrow which overload the generated `MethodMatcher` matches.
* Zero-parameter patterns match field accesses; multi-parameter patterns thread every binding through to the after side.
* `recipes(...)` composes sub-recipes across files into one runnable recipe, while each remains runnable on its own.
* Tests should cover both transformation cases and no-change cases.

## When a pattern isn't enough

A fixed before/after pair cannot express a change that depends on where a call sits, what annotations surround it, or how two call sites relate. For those, the DSL exposes an imperative scope that gives you the full visitor underneath:

```kotlin
edit {
    check(
        or(usesMethod(PRINTLN_SPEC), usesMethod(PRINT_SPEC)),
        kotlin {
            visitMethodInvocation { mi ->
                // Full access to the LST node and the cursor
            }
        },
    )
}
```

See [FindPrintlnCalls.kt](https://github.com/moderneinc/kotlin-recipe-starter/blob/main/src/main/kotlin/com/yourorg/FindPrintlnCalls.kt) in the starter project for a complete example, which uses the [cursor](../../user-documentation/recipes/authoring-recipes/concepts/cursors.md) to skip `println` calls inside a `fun main`.

:::warning
Unlike `rewrite { } to { }`, an imperative visitor is **not** wrapped in a `UsesMethod` precondition for you. Add one with `check(...)` so that files which never call the targeted method are skipped before the LST is traversed.
:::

That imperative scope is the same visitor model you'll work with directly in the next module, so it's a good preview of what comes next. For the full picture on the DSL, including `KotlinTemplate`, data tables, and publishing, see the [writing Kotlin recipes guide](../../user-documentation/recipes/authoring-recipes/writing-recipes/writing-kotlin-recipes.md).
