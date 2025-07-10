---
sidebar_label: Workshop overview
description: How to run, create, and test recipes with OpenRewrite and Moderne.
---

# Advanced workshop overview

## Advanced recipe development

Beyond the basics of writing recipes, there are a number of advanced topics that you might want to explore on your own.

### Scanning recipes

When creating new recipes, you may find it desirable to examine multiple source files, potentially of different types, to make key decisions in your visitor. For example, you may want to look for a particular condition to be present in a Maven POM file and, if that condition is met, alter an application property in a YAML file. This is where [scanning recipes](https://docs.openrewrite.org/authoring-recipes/writing-recipes-over-multiple-source-file-types) come in.

The rewrite-recipe starter contains an example in the form of [src/main/java/com/yourorg/AppendToReleaseNotes.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/AppendToReleaseNotes.java) that you might want to explore.

Other examples of scanning recipes can be found across the various OpenRewrite recipe modules, such as for instance this recipe in rewrite-testing-frameworks to [add Hamcrest dependency if a particular JUnit 4 method was used](https://github.com/openrewrite/rewrite-testing-frameworks/blob/b885d120f522eba1edbc74947da962d4696fc37a/src/main/java/org/openrewrite/java/testing/junit5/AddHamcrestJUnitDependency.java#L29-L89) previously, or this recipe where we [retain Mockito's `Strictness.WARN` when migrating from older Mockito versions](https://github.com/openrewrite/rewrite-testing-frameworks/blob/f58e66581c3ee98005b27b2b660321d14f0bd29d/src/main/java/org/openrewrite/java/testing/mockito/RetainStrictnessWarn.java#L33-L100).
Each of these requires evaluating multiple source files, before making targeted changes in particular source files.

### Data tables

Sometimes you're more interested in extracting insights from across your projects, rather than directly making code changes. In those cases [data tables](https://docs.openrewrite.org/running-recipes/data-tables) come in handy, as they allow you to extract data from your projects, and analyze it in a tabular format.

The [src/main/java/com/yourorg/ClassHierarchy.java recipe](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/ClassHierarchy.java) in the starter project is a good example of how to use data tables.

### Traits

LSTs are, traditionally, a very low-level representation of code. However, there are many use cases where you may want some higher-level semantic constructs, but you have no idea of where those should go.

For example, imagine you had a JSON document that represented the customer list at your business. If you were making recipes that operated on this particular kind of JSON document, you may want to have utility methods that would facilitate that. If you added these methods to a random facilities class, they wouldn't be particularly discoverable.

Because of that, there's a temptation to put the methods directly onto the classes that represent the LSTs themselves. That poses a problem, though, as we don't want to be continuously expanding the API surface area of these elements. To handle this problem, we have implemented [traits](https://en.wikipedia.org/wiki/Trait_(computer_programming)).

For a full understanding of traits, check out our [documentation on traits](https://docs.openrewrite.org/concepts-and-explanations/traits).

The [FindSpringBeans recipe](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/FindSpringBeans.java) in the starter project is a good example of how to use traits.

### Automating breaking changes

Now that you've seen the various ways in which you can write recipes, you're perfectly positioned to start [automating breaking changes](https://docs.openrewrite.org/authoring-recipes/automate-breaking-changes).