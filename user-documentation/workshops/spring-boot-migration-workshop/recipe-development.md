# Recipe development

The Java ecosystem is vast, and continuously evolving. As such, it's possible OpenRewrite does not yet cover some parts of your migration. We're always looking for help to expand the coverage of migration recipes, and we've made it as easy as possible to get started with recipe development.

Should you find any parts of your migration are not yet covered, then the first thing to check is whether there is already a corresponding [issue on the backlog](https://github.com/orgs/openrewrite/projects/4/views/10), perhaps with some pointers on an implementation. If not, you can [create a new issue](https://github.com/openrewrite/rewrite-spring/issues/new/choose) to discuss the recipe you'd like to develop. Note that there are separate modules for Spring recipes, Java recipes, testing recipes, logging recipes, and many more. It helps to browse the existing modules for any related work that might be similar and start from there.

### Types of recipes

If there's no existing recipe that covers your use case, then you can write your own. There are three types of recipes you can write, each with their own tradeoffs.

1. [Declarative recipes](https://docs.openrewrite.org/authoring-recipes/types-of-recipes#declarative-recipes) are the simplest to write, and are the most common type of recipe. They are written in YAML, and often tie together existing recipe building blocks with some light configuration.
2. [Refaster rules ](https://docs.openrewrite.org/authoring-recipes/types-of-recipes#refaster-templates)bring you the benefit of compiler support, and work best for straightforward replacements. They generate recipes that can also be used as a starting point for more complex recipe implementations.
3. [Imperative recipes](https://docs.openrewrite.org/authoring-recipes/types-of-recipes#imperative-recipes) are the most powerful, and allow you to write Java code to implement your recipe. By [using the `JavaTemplate` builder](https://docs.openrewrite.org/authoring-recipes/modifying-methods-with-javatemplate), you can keep complexity down, as you define arbitrary code changes.

No matter which method of recipe development you choose, you can always [write unit tests for your recipe](https://docs.openrewrite.org/authoring-recipes/recipe-testing). Beyond that there are [best practices for writing recipes](https://docs.openrewrite.org/authoring-recipes/recipe-conventions-and-best-practices), such as ensuring idempotence, and avoiding harmful changes. In rare cases, such as with Spring, you might need to [use multiple versions of a dependency](https://docs.openrewrite.org/authoring-recipes/multiple-versions). When you get started, be sure to set up the recommended [recipe development environment](https://docs.openrewrite.org/authoring-recipes/recipe-development-environment).
