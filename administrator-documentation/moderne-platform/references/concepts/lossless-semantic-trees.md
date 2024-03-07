# Lossless semantic trees

![LST comparison](../../../../.gitbook/assets/LST-comparison.png)

A Lossless Semantic Tree (LST) is a tree representation of code. Unlike the traditional [Abstract Syntax Tree](https://en.wikipedia.org/wiki/Abstract\_syntax\_tree) (AST), OpenRewrite's LST offers a unique set of characteristics that make it possible to perform accurate transformations and searches across a repository:

* **Type-attributed**. Each LST element is imbued with type information. For example, when referencing a field, the source code may just refer to it as `myField`. The OpenRewrite LST element for `myField`, on the other hand, would contain additional information about what the type of `myField` is, even if it isn't defined in the same source file or even the same project.
* **Format-preserving**. Whitespace before and after LST elements is preserved in the tree so the tree can be printed out to reconstitute the original source code without clobbering formatting. Additionally, refactoring operations that insert code are sensitive to the local style of the code around them and match the local style.

Type attribution is necessary for the accurate matching of patterns. For example, if we are looking for [SLF4J](http://www.slf4j.org/) log statements and we see a statement like the following, without type attribution how do we know if `logger` is an SLF4J or a Logback logger?

```java
logger.info("Hi");
```

Format preservation is necessary for any organization that doesn't have 100% consistent formatting across its whole codebase.

## Moderne improvements

Moderne adds tooling on top of the OpenRewrite LST to make it massively scalable, where recipes can be run against thousands of repositories at once.

The production of type-attributed LSTs for a whole organization is arbitrarily computationally complex since it requires dependency resolution, parsing of the source code, and type attribution (basically Java compilation up to the point of bytecode generation). Since Moderne can serialize LSTs, we can store them as a byproduct of compilation and then operate on them _en masse_ later.

{% hint style="info" %}
Moderne's build plugins allow for LSTs to be serialized to disk. This makes the process of consuming and editing large quantities of them much more efficient. OpenRewrite's build plugins, on the other hand, store everything in memory and need to be reparsed every time there is a change.
{% endhint %}

Once we have a serialized LST for a particular source file, and since it also contains type information, it can be refactored/searched completely independently of other source files in the same source package or repository. This makes mass search and refactoring an approximately linearly scalable operation.

{% hint style="info" %}
If you want to see specific examples of Java LSTs, please read our [Java LST Examples doc](https://docs.openrewrite.org/concepts-and-explanations/lst-examples).
{% endhint %}

## LST lifecycle

### With the Moderne CLI

1. Before you can run a recipe against a repository with the [Moderne CLI](../../../../user-documentation/moderne-cli/getting-started/cli-intro.md), you must build the LST for said repository. This LST does not need to fit into memory entirely at once -- it can be built in pieces. The LST could be built locally or it could be pulled down from your artifact repository (if said LST is up-to-date). Regardless, at the end of the build process, you will have an LST artifact saved to disk.
2. When you go to run a recipe, this LST will be read from disk. If the entire LST doesn't fit into memory, it will be read in pieces. As part of reading this LST from disk, the current state of the code will be checked against the code on disk. If Git shows that the two do not match, you will receive a warning that you should rebuild the project.
3. As the recipe runs, it will make transformations on the LST. This could be as simple as adding a search marker (`~~>`) if the recipe is a search recipe -- or it could be as complex as adding classes and methods throughout the repository.
4. Once the recipe has finished running, the **modified LST will be discarded** and the code itself **will not** be changed. Instead, different patch files will be created depending on whether the recipe found or changed anything. For example, a search recipe will produce a `search.patch` file, whereas a recipe that changes the code will produce a `fix.patch` file. These patch files are saved to disk and the locations are output by the CLI.
5. You can review the patch files with your favorite editor or you can apply them directly to the code (via the `mod apply` command). Regardless of what you do, it's important to note that the LST itself **will not** have been updated. If you go to run another recipe at this point, it will be run against the original LST and will not have any of the changes the previous recipe made. If you want future recipe runs to have the updates from previous ones, you must re-build the LST (via the `mod build` command).

### With the Moderne Platform

1. Before you can run a recipe against a repository in the Moderne Platform, you must build the LST for said repository. This is typically done by [setting up mass ingestion with the Moderne CLI](broken-reference).
2. When you go to run a recipe, the LST artifact will be downloaded from your artifact repository. These LSTs are continuously uploaded/updated over time as long as you've set up ingestion for your repositories.
3. As the recipe runs, it will make transformations on the downloaded LST. This could be as simple as adding a search marker (`~~>`) if the recipe is a search recipe -- or it could be as complex as adding classes and methods throughout the repository.
4. Once the recipe has finished running, the **modified LST will be discarded** and the code **will not** be changed. Instead, you will be [provided with a list of the changes it would make](../../../../user-documentation/moderne-platform/getting-started/running-your-first-recipe.md#step-6-run-the-recipe). You can [review them](../../../../user-documentation/moderne-platform/getting-started/running-your-first-recipe.md#step-7-view-the-results) and [choose what to do with them](../../../../user-documentation/moderne-platform/getting-started/running-your-first-recipe.md#step-8-commit-your-changes).
5. Regardless of what you choose to do with the results, future recipe runs **will not** have those changes unless you commit them and the Moderne CLI ingestion job runs again to publish the LSTs to your artifact repository.

{% hint style="info" %}
You might be wondering, "Hey - if LSTs are ingested only once I publish them via the CLI, wouldn't that mean they're out-of-date if we run multiple recipes against them?" While that _can_ be true, in most situations, it's not an issue as Moderne rebases recipe results when committing and recipes rarely conflict in such an extreme way.

Some users may be tempted to combine a bunch of recipes into one giant recipe so that it guarantees that there are no conflicts. However, this can be problematic as it makes the recipe results much more difficult to review and it can lead to performance issues or timeouts.

In general, you should favor running recipes consistently over time. Moderne, for instance, runs a vulnerability check recipe at least once per week. This will not only help ensure your code is compliant over time, but it will also make it less of an issue if LSTs are slightly out-of-date.
{% endhint %}
