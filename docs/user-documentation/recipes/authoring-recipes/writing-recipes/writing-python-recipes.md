---
sidebar_label: Writing Python recipes
description: How to write, test, and run a Python refactoring recipe with OpenRewrite and the Moderne CLI.
keywords: [python recipe, python refactoring, openrewrite python, write a python recipe, pythonvisitor]
---

# Writing a Python refactoring recipe

Across a large codebase, you often need to make the same change many times over: renaming a deprecated function, swapping an import, modernizing a pattern. When you run into this situation, the best thing you can do is write a recipe so that these changes can be made consistently and accurately. Then, you can use Moderne to apply these changes to thousands of repositories at once.

While we've done our best to provide you with [a wide variety of Python recipes](../../recipe-catalog/python/README.md), you may find it useful to write your own. In this guide, we will walk you through everything you need to know to get started with creating and publishing your own Python recipe. 

:::info
This guide focuses on authoring recipes in **Python**. If you would rather write recipes in another language, OpenRewrite has companion guides for [writing a Java refactoring recipe](https://docs.openrewrite.org/authoring-recipes/writing-a-java-refactoring-recipe) and [writing a JavaScript refactoring recipe](https://docs.openrewrite.org/authoring-recipes/writing-a-javascript-refactoring-recipe). The core concepts carry over closely, since Python recipes build on the same Java model those guides use.
:::

:::tip
If you would rather start from working code, the [`python-recipe-starter` repository](https://github.com/moderneinc/python-recipe-starter) contains a complete, runnable version of the recipe you'll build below, along with a second worked example and the tests, packaging, and CI already set up. Clone it to follow along, or use it as a scaffold for your own recipe.
:::

## Prerequisites

This guide assumes that:

* You have Python 3.10 or higher installed
* You are comfortable writing and running Python tests
* You have [installed and configured the Moderne CLI](../../../moderne-cli/getting-started/cli-intro.md) so you can test your recipe against real repositories
* You have [configured the Moderne CLI to work for Python projects](../../../moderne-cli/how-to-guides/python.md)

## How Python recipes work

Before we dive into how to write your own recipe, it's a good idea to take a few minutes to learn about Python recipes at a high level.

OpenRewrite represents Python code as a [Lossless Semantic Tree (LST)](../../../../administrator-documentation/moderne-platform/references/lossless-semantic-trees.md): a tree that preserves the code's exact formatting and is [type-attributed](https://docs.openrewrite.org/concepts-and-explanations/type-attribution), so every element carries its resolved type. Working against that tree instead of the raw text is what lets a recipe make precise, type-aware changes.

Every [recipe](https://docs.openrewrite.org/concepts-and-explanations/recipes) is a class that describes itself with a name, a display name, and a description, and that returns a [visitor](https://docs.openrewrite.org/concepts-and-explanations/visitors) from its `editor()` method. The visitor traverses the LST and returns modified nodes wherever it wants to make a change. Anything it returns unchanged is left exactly as it was, formatting included.

The [Python LST](https://github.com/openrewrite/rewrite/blob/main/rewrite-python/src/main/java/org/openrewrite/python/tree/Py.java) builds on the [Java LST](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java). Shared constructs such as method invocations, identifiers, literals, and blocks come from the Java model (the `J` namespace), while Python-specific constructs such as `pass` statements, imports, and comprehensions live in the Python model (the `Py` namespace). Because of this, a Python visitor works with familiar `J` node types for most transformations.

:::tip
The Python LST, parser, and node model live in the [`rewrite-python` module](https://github.com/openrewrite/rewrite/tree/main/rewrite-python). It is a useful reference when you need to know how a particular Python construct is represented.
:::

## Setting up your project

Let's start by creating a virtual environment and installing the `openrewrite` package. This package contains the recipe framework, the Python LST, and the testing helpers:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install openrewrite
```

You'll also want to install a test runner. For this guide, we'll use `pytest` - but, in your actual recipe, you can choose whatever testing framework you want:

```bash
pip install pytest
```

## Outlining the recipe

Before implementing any logic, it's a good idea to sketch out the recipe's general shape. For the sake of an example, let's write a recipe that renames calls to one function so that they use a different name. In order to support that, we'll need to define two configuration options: the old name and the new name.

Here is what a rough outline of this class might look like:

```python title="rename_function_call.py"
from dataclasses import dataclass, field

from rewrite import ExecutionContext, Recipe, TreeVisitor, option
from rewrite.java import J
from rewrite.python.visitor import PythonVisitor


@dataclass
class RenameFunctionCall(Recipe):
    """Rename calls to a function from one name to another."""

    old_name: str = field(default="", metadata=option(
        display_name="Old function name",
        description="The name of the function whose calls should be renamed.",
        example="assertEquals",
    ))

    new_name: str = field(default="", metadata=option(
        display_name="New function name",
        description="The name to rename matching calls to.",
        example="assertEqual",
    ))

    @property
    def name(self) -> str:
        return "com.yourorg.RenameFunctionCall"

    @property
    def display_name(self) -> str:
        return "Rename a function call"

    @property
    def description(self) -> str:
        return "Rename calls to a function from one name to another."

    def editor(self) -> TreeVisitor[J, ExecutionContext]:
        class Visitor(PythonVisitor[ExecutionContext]):
            pass

        return Visitor()
```

A few things to call out here:

* The recipe is a `@dataclass` that subclasses `Recipe`. 
* Each configuration option is a dataclass field whose `metadata` is built with `option()`.
* The `name` follows a reverse-domain convention (`com.yourorg.RenameFunctionCall`) so that it is globally unique. 
    * This is the identifier you will use to run the recipe later.
* For now, `editor()` returns a visitor that does nothing, so the recipe is a no-op. We will add the code for this after we finish writing tests.

:::warning
Give every option a default value (e.g., `default=""`). The framework instantiates your recipe without arguments when it builds the recipe's descriptor, so a recipe whose options lack defaults cannot be discovered or run by the Moderne CLI.
:::

## Writing tests first

OpenRewrite's testing harness parses a _before_ snippet, runs your recipe, and asserts that the result matches an _after_ snippet. Writing the tests first gives you a precise specification of what the recipe should do.

Here is what our tests might look like:

```python title="test_rename_function_call.py"
from rewrite.test import RecipeSpec, python

from rename_function_call import RenameFunctionCall


def test_renames_a_bare_call():
    spec = RecipeSpec(recipe=RenameFunctionCall(
        old_name="assertEquals",
        new_name="assertEqual",
    ))
    spec.rewrite_run(
        python(
            """
            assertEquals(a, b)
            """,
            """
            assertEqual(a, b)
            """,
        )
    )


def test_renames_a_qualified_call():
    spec = RecipeSpec(recipe=RenameFunctionCall(
        old_name="assertEquals",
        new_name="assertEqual",
    ))
    spec.rewrite_run(
        python(
            """
            self.assertEquals(a, b)
            """,
            """
            self.assertEqual(a, b)
            """,
        )
    )


def test_leaves_other_calls_unchanged():
    spec = RecipeSpec(recipe=RenameFunctionCall(
        old_name="assertEquals",
        new_name="assertEqual",
    ))
    spec.rewrite_run(
        python(
            """
            assertTrue(x)
            """
        )
    )
```

The `python()` helper accepts either one or two arguments:

* Two arguments (`python(before, after)`) assert that the recipe transforms `before` into `after`.
* One argument (`python(before)`) asserts that the recipe makes no change.

Always include at least one no-change test, such as `test_leaves_other_calls_unchanged` above, so that you can be confident your recipe does not touch code it should not.

If we run the suite now, we'll see the expected starting state: the two renaming tests fail because the visitor doesn't do anything yet, while the no-change test already passes.

## Implementing the visitor

With the tests written, let's work on making them pass. We'll update the `editor` function to look for and replace code that matches the inputs provided to the recipe. As part of this, we will override `visit_method_invocation` (the visit method the LST uses for function and method calls):

```python title="rename_function_call.py"
from dataclasses import dataclass, field

from rewrite import ExecutionContext, Recipe, TreeVisitor, option
from rewrite.java import J
from rewrite.java.tree import MethodInvocation
from rewrite.python.visitor import PythonVisitor


@dataclass
class RenameFunctionCall(Recipe):
    """Rename calls to a function from one name to another."""

    old_name: str = field(default="", metadata=option(
        display_name="Old function name",
        description="The name of the function whose calls should be renamed.",
        example="assertEquals",
    ))

    new_name: str = field(default="", metadata=option(
        display_name="New function name",
        description="The name to rename matching calls to.",
        example="assertEqual",
    ))

    @property
    def name(self) -> str:
        return "com.yourorg.RenameFunctionCall"

    @property
    def display_name(self) -> str:
        return "Rename a function call"

    @property
    def description(self) -> str:
        return "Rename calls to a function from one name to another."

#highlight-start
    def editor(self) -> TreeVisitor[J, ExecutionContext]:
        old_name = self.old_name
        new_name = self.new_name

        class Visitor(PythonVisitor[ExecutionContext]):
            def visit_method_invocation(self, method: MethodInvocation, p: ExecutionContext) -> J:
                method = super().visit_method_invocation(method, p)
                if method.name.simple_name == old_name:
                    renamed = method.name.replace(_simple_name=new_name)
                    return method.replace(_name=renamed)
                return method

        return Visitor()
#highlight-end
```

Here's what the visitor does, step by step:

* It copies `self.old_name` and `self.new_name` into local variables that the nested visitor can read. Inside the visitor, `self` is the visitor instance rather than the recipe, so `self.old_name` would not be available there.
* It calls `super().visit_method_invocation(...)`, which visits the call's children before the call itself. Visiting from the bottom up is the safe default, because it lets nested calls transform before their parents.
* It checks whether the call should be renamed by comparing `method.name.simple_name` (the name of the function being called) against `old_name`.
* When the name matches, it builds a renamed identifier with `method.name.replace(_simple_name=new_name)` and returns a new method invocation via `method.replace(_name=renamed)`. LST nodes are immutable, so `.replace(...)` returns a new copy instead of mutating in place.
* Otherwise, it returns the original `method` unchanged, so the call is left exactly as it was.

:::tip
Returning `None` from a visit method removes the node entirely - which is how recipes delete code.
:::

## Running the tests

Now that we have the visitor coded, let's run the suite with `pytest`:

```bash
python -m pytest test_rename_function_call.py -v
```

All three tests should now pass:

```bash
test_rename_function_call.py::test_renames_a_bare_call PASSED            [ 33%]
test_rename_function_call.py::test_renames_a_qualified_call PASSED       [ 66%]
test_rename_function_call.py::test_leaves_other_calls_unchanged PASSED   [100%]

============================== 3 passed in 0.20s ===============================
```

## Packaging and running with the Moderne CLI

With our tests passing, let's now test our recipe against some real repositories. We'll use the Moderne CLI to run our recipe. However, in order for the Moderne CLI to discover our recipe, our project needs to expose an `activate()` function that registers it with the recipe marketplace.

Let's add that `activate()` function to `rename_function_call.py`:

```python title="rename_function_call.py"
from dataclasses import dataclass, field

from rewrite import ExecutionContext, Recipe, TreeVisitor, option
from rewrite.java import J
from rewrite.java.tree import MethodInvocation
#highlight-next-line
from rewrite.marketplace import RecipeMarketplace, Python
from rewrite.python.visitor import PythonVisitor

# ... the RenameFunctionCall class from the previous step ...

#highlight-start
def activate(marketplace: RecipeMarketplace) -> None:
    marketplace.install(RenameFunctionCall, Python)
#highlight-end
```

We also will need to describe the package in a `pyproject.toml` file:

```toml title="pyproject.toml"
[build-system]
requires = ["setuptools>=42", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "rename-function-call"
version = "0.1.0"

[tool.setuptools]
py-modules = ["rename_function_call"]
```

With the `activate()` function and `pyproject.toml` file in place, the package is ready to install into the Moderne CLI.

### Running your recipe locally

Install the recipe straight from your project directory:

```bash
mod config recipes pip install /path/to/your/recipe-project
```

You should see `Found 1 recipes` if everything worked correctly - which confirms that your recipe was registered.

When you install from a local path, the CLI reads the `name` from your `pyproject.toml` file, imports the module of that name (with dashes converted to underscores), and calls its `activate()` function. That is why the distribution is named `rename-function-call`: it resolves to the `rename_function_call` module, where `activate()` lives. Make sure to keep those two names aligned.

Now run it against a repository whose Python LSTs you've already built, passing each option as a `-P` parameter:

```bash
mod run . --recipe=com.yourorg.RenameFunctionCall -Pold_name=assertEquals -Pnew_name=assertEqual
```

When you are done, you can remove the recipe from your local marketplace:

```bash
mod config recipes pip delete rename-function-call
```

### Publishing your recipe

To share your recipe so others can install it by name, declare an `openrewrite.recipes` entry point in your `pyproject.toml` file. This is how the CLI discovers recipes inside a published package:

```toml
[project.entry-points."openrewrite.recipes"]
rename-function-call = "rename_function_call:activate"
```

Once your package is published to a package index, anyone can install it by name and run it exactly as you did locally:

```bash
mod config recipes pip install rename-function-call
```

## Next steps

Now that you've written your first Python recipe, you can go deeper:

* Clone the [`python-recipe-starter` repository](https://github.com/moderneinc/python-recipe-starter) for a complete, runnable project: it includes the `RenameFunctionCall` recipe from this guide alongside a `RemoveRedundantPass` example that demonstrates deleting nodes - with tests, packaging, and CI already set up
* Browse the [Python recipes in the Moderne recipe catalog](../../recipe-catalog/python/README.md) for real-world examples to learn from and build on
* Read OpenRewrite's [Java refactoring recipe guide](https://docs.openrewrite.org/authoring-recipes/writing-a-java-refactoring-recipe) and [JavaScript refactoring recipe guide](https://docs.openrewrite.org/authoring-recipes/writing-a-javascript-refactoring-recipe) for deeper coverage of visitors, preconditions, and templates that apply to the shared LST model
* Explore the [`rewrite-python` source](https://github.com/openrewrite/rewrite/tree/main/rewrite-python) to see how the Python LST and its built-in recipes are implemented
* Work through the [recipe authoring fundamentals workshop](../../../../hands-on-learning/fundamentals/workshop-overview.md) for a hands-on introduction to recipe development
