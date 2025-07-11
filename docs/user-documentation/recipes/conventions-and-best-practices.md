---
sidebar_label: Conventions and best practices
description: Review of conventions and best practices when writing recipes.
---

# Recipe conventions and best practices

We've documented the most important [recipe conventions and best practices](https://docs.openrewrite.org/authoring-recipes/recipe-conventions-and-best-practices) to help you write recipes that are safe, idempotent, and efficient. Where possible, we've automated these checks in the unit testing framework, to help you catch issues early.

You can also run best practice recipes against your custom rewrite recipe modules to resolve issues automatically where possible. These are based on a collection of [best practices for writing OpenRewrite recipes](https://docs.openrewrite.org/recipes/recipes/rewrite/openrewriterecipebestpractices).

You can apply these recommendations to your recipes by running the following command:

```bash
mod run /path/to/your/recipe --recipe=OpenRewriteBestPractices
```
