---
sidebar_label: Writing C# recipes
description: How to write, test, and run a C# refactoring recipe with OpenRewrite and the Moderne CLI.
keywords: [csharp recipe, c# recipe, csharp refactoring, openrewrite csharp, write a csharp recipe, csharpvisitor]
---

# Writing a C# refactoring recipe

Across a large codebase, you often need to make the same change many times over: replacing a deprecated API, tightening up a sloppy pattern, modernizing an idiom. When you run into this situation, the best thing you can do is write a recipe so that these changes can be made consistently and accurately. Then, you can use Moderne to apply these changes to thousands of repositories at once.

While we've done our best to provide you with [a wide variety of C# recipes](../recipe-catalog/csharp/README.md), you may find it useful to write your own. In this guide, we will walk you through everything you need to know to get started with creating and publishing your own C# recipe.

:::info
This guide focuses on authoring recipes in **C#**. If you would rather write recipes in another language, OpenRewrite has companion guides for [writing a Java refactoring recipe](https://docs.openrewrite.org/authoring-recipes/writing-a-java-refactoring-recipe), [writing a JavaScript refactoring recipe](https://docs.openrewrite.org/authoring-recipes/writing-a-javascript-refactoring-recipe), and [writing a Python refactoring recipe](./writing-python-recipes.md). The core concepts carry over closely, since C# recipes build on the same Java model those guides use.
:::

## Prerequisites

This guide assumes that:

* You have the [.NET SDK](https://dotnet.microsoft.com/download) 10.0 or higher installed
* You are comfortable writing and running C# unit tests (this guide uses [xUnit](https://xunit.net/))
* You have [installed and configured the Moderne CLI](../../moderne-cli/getting-started/cli-intro.md) so you can test your recipe against real repositories
* You have [configured the Moderne CLI to work for C# projects](../../moderne-cli/how-to-guides/csharp.md)

## How C# recipes work

Before we dive into how to write your own recipe, it's a good idea to take a few minutes to learn about C# recipes at a high level.

OpenRewrite represents C# code as a [Lossless Semantic Tree (LST)](../../../administrator-documentation/moderne-platform/references/lossless-semantic-trees.md): a tree that preserves the code's exact formatting and is [type-attributed](https://docs.openrewrite.org/concepts-and-explanations/type-attribution), so every element carries its resolved type. Working against that tree instead of the raw text is what lets a recipe make precise, type-aware changes.

Every [recipe](https://docs.openrewrite.org/concepts-and-explanations/recipes) is a class that describes itself with a display name and a description, and that returns a [visitor](https://docs.openrewrite.org/concepts-and-explanations/visitors) from its `GetVisitor()` method. The visitor traverses the LST and returns modified nodes wherever it wants to make a change. Anything it returns unchanged is left exactly as it was, formatting included.

The C# LST builds on the [Java LST](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java). Shared constructs such as method invocations, identifiers, literals, and blocks come from the Java model (the `J` namespace), while C#-specific constructs live in the C# model (the `Cs` namespace). Because of this, a C# visitor works with familiar `J` node types — `J.MethodInvocation`, `J.Binary`, `J.Identifier`, and so on — for most transformations.

:::tip
Rather than inspecting and rebuilding LST nodes by hand, most C# recipes are written declaratively with **structural patterns and templates** (`CSharpPattern` and `CSharpTemplate`). A pattern describes the code to match — with _captures_ for the parts that vary — and a template describes the replacement. Because the template is parsed as real C#, its output is fully type-attributed, which keeps downstream recipes working correctly. We use this approach in the example below.
:::

## Setting up your project

A C# recipe is just a .NET class library that references the `OpenRewrite.CSharp` package. That single package provides the recipe framework, the C# LST and pattern/template APIs, and the testing helpers.

Let's create the recipe project:

```bash
dotnet new classlib -n MyOrg.Recipes -f net10.0
cd MyOrg.Recipes
dotnet add package OpenRewrite.CSharp
```

Open `MyOrg.Recipes.csproj` and reference the SDK with `PrivateAssets="all"`. The C# recipe runtime already supplies the SDK at execution time, so it should be a build-time-only dependency that is not forced onto consumers of your package:

```xml title="MyOrg.Recipes.csproj"
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>net10.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
    <!-- NuGet package metadata -->
    <Version>1.0.0</Version>
    <IsPackable>true</IsPackable>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="OpenRewrite.CSharp" Version="*" PrivateAssets="all" />
  </ItemGroup>

</Project>
```

We'll also create a companion test project. OpenRewrite's testing harness runs your recipe over a _before_ snippet and asserts the result matches an _after_ snippet:

```bash
cd ..
dotnet new xunit -n MyOrg.Recipes.Tests
cd MyOrg.Recipes.Tests
dotnet add reference ../MyOrg.Recipes/MyOrg.Recipes.csproj
dotnet add package OpenRewrite.CSharp
```

Because the recipe project references the SDK with `PrivateAssets="all"`, that reference does not flow through to the test project — so the test project references `OpenRewrite.CSharp` directly (this is what gives it the `OpenRewrite.Test` testing helpers).

## Outlining the recipe

Before implementing any logic, it's a good idea to sketch out the recipe's general shape. For the sake of an example, let's write a recipe that cleans up a common code smell: testing the result of `string.IndexOf(...)` against a magic number to ask "does this string contain that substring?". `s.IndexOf(x) >= 0` is clearer written as `s.Contains(x)`, and `s.IndexOf(x) == -1` as `!s.Contains(x)`.

This transformation needs no configuration, so our recipe has no options:

```csharp title="UseStringContains.cs"
using OpenRewrite.Core;
using OpenRewrite.CSharp;
using OpenRewrite.CSharp.Template;
using OpenRewrite.Java;
using static OpenRewrite.Java.J;
using static OpenRewrite.CSharp.Recipes.Categories;
using ExecutionContext = OpenRewrite.Core.ExecutionContext;

namespace MyOrg.Recipes;

/// <summary>
/// Use string.Contains instead of an IndexOf comparison.
/// </summary>
[Category, CSharp]
public class UseStringContains : Recipe
{
    public override string DisplayName => "Use string.Contains instead of IndexOf comparison";

    public override string Description =>
        "Replace `s.IndexOf(x) >= 0` with `s.Contains(x)` and `s.IndexOf(x) == -1` with `!s.Contains(x)`.";

    public override IReadOnlySet<string> Tags => new HashSet<string> { "csharp", "code-quality" };

    public override JavaVisitor<ExecutionContext> GetVisitor()
    {
        // We'll fill this in after writing tests.
        return new CSharpVisitor<ExecutionContext>();
    }
}
```

A few things to call out here:

* The recipe is a class that subclasses `Recipe` and provides a `DisplayName` and a `Description`.
* You do **not** declare a name for the recipe. Its globally-unique identifier is the fully-qualified type name, so this recipe is `MyOrg.Recipes.UseStringContains`. This is the identifier you will use to run the recipe later.
* The `[Category, CSharp]` attribute declares where the recipe appears in the marketplace category tree. **This attribute is required**: the CLI only installs recipes that declare a placement, so a recipe with no `[Category]` marker is silently skipped (you will see `Found 0 recipes` when you install the package). `[Category]` opens a path and the descriptors that follow it (here `CSharp`) form the levels of that path. The SDK ships a few common leaves — `CSharp`, `Csproj`, `Xml`, and `Migration` — in `OpenRewrite.CSharp.Recipes.Categories`, which is why we add `using static OpenRewrite.CSharp.Recipes.Categories;`.
* For now, `GetVisitor()` returns a bare visitor that does nothing, so the recipe is a no-op. We will add the real logic after we finish writing tests.

:::tip
To place a recipe deeper in the tree, define your own leaves as a `Categories` class in your package and combine them with the SDK leaves, for example `[Category, CSharp, MyArea]`:

```csharp
using OpenRewrite.Core;

namespace MyOrg.Recipes;

public static class Categories
{
    public sealed class MyAreaAttribute() : CategoryDescriptorAttribute("My Area", "Recipes for my area");
}
```

Repeat the `[Category, ...]` stack to place one recipe under multiple paths.
:::

:::tip
If your recipe _does_ need configuration, expose it as a public property annotated with `[Option(DisplayName = "...", Description = "...", Example = "...")]`. Only properties carrying `[Option]` are treated as options, and each one becomes a `-P<PropertyName>` flag on the CLI. Always give options a default value — the framework instantiates your recipe with no arguments to build its descriptor, and a recipe whose options can't be read that way can't be discovered or run.
:::

### Registering the package's recipes

The C# recipe runtime does not scan your assembly for `Recipe` subclasses directly. Instead, at install time it looks for **one `IRecipeActivator`** per package and calls it, and the activator registers the assembly's recipes. Add a single `Activator.cs` to the recipe project:

```csharp title="Activator.cs"
using OpenRewrite.Core;

namespace MyOrg.Recipes;

public class Activator : IRecipeActivator
{
    public void Activate(RecipeMarketplace marketplace)
    {
        marketplace.InstallAssembly(typeof(Activator).Assembly);
    }
}
```

You only need one activator per package, regardless of how many recipes it contains — `InstallAssembly` discovers every `[Category]`-annotated recipe in the assembly. Without an activator, the CLI loads your package but installs nothing (again, `Found 0 recipes`).

## Writing tests first

OpenRewrite's testing harness parses a _before_ snippet, runs your recipe, and asserts that the result matches an _after_ snippet. Writing the tests first gives you a precise specification of what the recipe should do.

Add the following to your test project:

```csharp title="UseStringContainsTest.cs"
using MyOrg.Recipes;
using OpenRewrite.Test;

namespace MyOrg.Recipes.Tests;

public class UseStringContainsTest : RewriteTest
{
    [Fact]
    public void ReplacesIndexOfGreaterOrEqualZero()
    {
        RewriteRun(
            spec => spec.SetRecipe(new UseStringContains()),
            CSharp(
                """
                class Test
                {
                    bool M(string s) => s.IndexOf("x") >= 0;
                }
                """,
                """
                class Test
                {
                    bool M(string s) => s.Contains("x");
                }
                """
            )
        );
    }

    [Fact]
    public void ReplacesIndexOfEqualsMinusOneWithNegation()
    {
        RewriteRun(
            spec => spec.SetRecipe(new UseStringContains()),
            CSharp(
                """
                class Test
                {
                    bool M(string s) => s.IndexOf("x") == -1;
                }
                """,
                """
                class Test
                {
                    bool M(string s) => !s.Contains("x");
                }
                """
            )
        );
    }

    [Fact]
    public void LeavesNonStringIndexOfUnchanged()
    {
        RewriteRun(
            spec => spec.SetRecipe(new UseStringContains()),
            CSharp(
                """
                using System.Collections.Generic;

                class Test
                {
                    // List<T>.IndexOf also returns int, but the receiver isn't a string.
                    bool M(List<string> items) => items.IndexOf("x") >= 0;
                }
                """
            )
        );
    }
}
```

The `CSharp()` helper accepts either one or two arguments:

* Two arguments (`CSharp(before, after)`) assert that the recipe transforms `before` into `after`.
* One argument (`CSharp(before)`) asserts that the recipe makes no change.

Always include at least one no-change test — such as `LeavesNonStringIndexOfUnchanged` above — so that you can be confident your recipe does not touch code it should not. That test is important here: `List<T>.IndexOf` returns an `int` too, so a recipe that matched on the printed shape alone would wrongly rewrite it. We'll rely on type attribution to avoid that. The harness also checks output **whitespace-exactly**, so formatting differences are treated as failures.

If we run the suite now, we'll see the expected starting state: the two replacement tests fail because the visitor doesn't do anything yet, while the no-change test already passes.

## Implementing the recipe

With the tests written, let's make them pass. Instead of inspecting and rebuilding nodes by hand, we describe the transformation declaratively with a `CSharpPattern` (what to match) and a `CSharpTemplate` (the replacement).

Start with the common case — a single pattern and template. `CSharpTemplate.Rewrite(pattern, template)` returns a ready-made visitor that finds every match and applies the template, with no visitor boilerplate:

```csharp
public override JavaVisitor<ExecutionContext> GetVisitor()
{
    var s = Capture.Expression(type: "string");
    var x = Capture.Expression(type: "string");

    return CSharpTemplate.Rewrite(
        CSharpPattern.Expression($"{s}.IndexOf({x}) >= 0"),
        CSharpTemplate.Expression($"{s}.Contains({x})"));
}
```

Here's what this does:

* `Capture.Expression(type: "string")` captures a sub-expression **and constrains it by type**. Because both captures are typed as `string`, the pattern only matches when the receiver and argument actually resolve to strings. This is the type attestation that keeps the recipe from rewriting `List<T>.IndexOf` — and it's why our no-change test passes. Matching on resolved type rather than on the printed name is what makes a recipe safe to run across a large codebase.
* `CSharpPattern.Expression(...)` and `CSharpTemplate.Expression(...)` parse their interpolated strings as real C# expressions, splicing the captures in by value. Because the template is parsed as C#, the rewritten `s.Contains(x)` is fully type-attributed.
* `CSharpTemplate.Rewrite(...)` builds the visitor for you and applies the template wherever the pattern matches.

The pattern matcher also handles common C# equivalences automatically — for example `Foo()` matches `this.Foo()` for instance calls, and short type names match their fully-qualified forms — so a single pattern covers more cases than a literal text match would.

### Handling additional forms

The same comparison can be written several equivalent ways (`>= 0`, `> -1`, `== -1`, `< 0`, ...), and the two directions map to different templates (`Contains` vs. `!Contains`). When you need to match a small set of related forms, pair each pattern with its template and apply them in a `J.Binary` visitor — `IndexOf(...)` comparisons are all binary expressions:

```csharp
public override JavaVisitor<ExecutionContext> GetVisitor()
{
    var s = Capture.Expression(type: "string");
    var x = Capture.Expression(type: "string");

    (CSharpPattern pat, CSharpTemplate tmpl)[] rules =
    [
        (CSharpPattern.Expression($"{s}.IndexOf({x}) >= 0"),  CSharpTemplate.Expression($"{s}.Contains({x})")),
        (CSharpPattern.Expression($"{s}.IndexOf({x}) > -1"),  CSharpTemplate.Expression($"{s}.Contains({x})")),
        (CSharpPattern.Expression($"{s}.IndexOf({x}) == -1"), CSharpTemplate.Expression($"!{s}.Contains({x})")),
        (CSharpPattern.Expression($"{s}.IndexOf({x}) < 0"),   CSharpTemplate.Expression($"!{s}.Contains({x})")),
    ];

    return new Visitor(rules);
}

private class Visitor((CSharpPattern pat, CSharpTemplate tmpl)[] rules) : CSharpVisitor<ExecutionContext>
{
    public override J VisitBinary(Binary binary, ExecutionContext ctx)
    {
        binary = (Binary)base.VisitBinary(binary, ctx);
        foreach (var (pat, tmpl) in rules)
        {
            if (pat.Match(binary, Cursor) is { } m)
                return tmpl.Apply(Cursor, values: m)!;
        }
        return binary;
    }
}
```

Notice the visitor calls `base.VisitBinary(...)` first so that children are visited before the node itself (the safe bottom-up default), then tries each rule and applies the first one that matches. Anything that doesn't match is returned unchanged.

## Running the tests

Now that the recipe is implemented, run the suite from the test project:

```bash
dotnet test
```

All three tests should now pass:

```bash
Passed!  - Failed:     0, Passed:     3, Skipped:     0, Total:     3
```

## Packaging and running with the Moderne CLI

With our tests passing, let's test the recipe against some real repositories using the Moderne CLI. C# recipes are distributed as NuGet packages, so we package the project and point the CLI at it.

First, pack the recipe project into a `.nupkg` in a local folder:

```bash
cd MyOrg.Recipes
dotnet pack -c Release -o ./artifacts
```

This produces `./artifacts/MyOrg.Recipes.1.0.0.nupkg`.

Next, register that folder as a NuGet source so the CLI can resolve the package. The Moderne CLI resolves recipe packages from your machine's configured NuGet feeds (additively, on top of nuget.org), so adding a local-folder source is enough:

```bash
dotnet nuget add source "$(pwd)/artifacts" --name myorg-local
```

Now install the package into the CLI's recipe marketplace. You can pin a version with `@`, or omit it to take the latest available:

```bash
mod config recipes nuget install MyOrg.Recipes@1.0.0
```

You should see `Installed 1 recipe package.` if everything worked correctly, which confirms that your recipe was registered.

With the recipe installed, build the LSTs for a repository (if you haven't already) and run the recipe against it:

```bash
mod build /path/to/your/repo

mod run /path/to/your/repo --recipe=MyOrg.Recipes.UseStringContains
```

If your recipe declares options, pass each one as a `-P` flag using the option property name — for example `-PMyOption=value`.

To review and apply the results, use [`mod git apply`](../../moderne-cli/getting-started/cli-intro.md):

```bash
mod git apply /path/to/your/repo --last-recipe-run
```

When you are done, you can remove the recipe from your local marketplace:

```bash
mod config recipes nuget delete MyOrg.Recipes
```

:::tip
When you change the recipe and re-pack, bump the `<Version>` (or clear the cached package) so the CLI resolves your new build rather than a previously-restored copy.
:::

### Publishing your recipe

To share your recipe so others can install it by name, publish the package to a NuGet feed your team can reach:

```bash
dotnet nuget push ./artifacts/MyOrg.Recipes.1.0.0.nupkg \
  --source https://your-nuget-feed --api-key <key>
```

Once the package is on a feed the CLI is configured to read, anyone can install it by name and run it exactly as you did locally:

```bash
mod config recipes nuget install MyOrg.Recipes
```

If the feed requires credentials, register it with the CLI first using [`mod config recipes artifacts nuget add`](../../moderne-cli/how-to-guides/csharp.md).

## Next steps

Now that you've written your first C# recipe, you can go deeper:

* Browse the [C# recipes in the Moderne recipe catalog](../recipe-catalog/csharp/README.md) for real-world examples to learn from and build on
* Read OpenRewrite's [Java refactoring recipe guide](https://docs.openrewrite.org/authoring-recipes/writing-a-java-refactoring-recipe) for deeper coverage of visitors, preconditions, and templates that apply to the shared LST model
* Learn more about [setting up and using C# LSTs with the Moderne CLI](../../moderne-cli/how-to-guides/csharp.md)
* Work through the [recipe authoring fundamentals workshop](../../../hands-on-learning/fundamentals/workshop-overview.md) for a hands-on introduction to recipe development
