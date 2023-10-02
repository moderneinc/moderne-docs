# Lossless semantic trees

![LST comparison](/.gitbook/assets/LST-comparison.png)

A Lossless Semantic Tree (LST) is a tree representation of code. Unlike the traditional [Abstract Syntax Tree](https://en.wikipedia.org/wiki/Abstract\_syntax\_tree) (AST), Moderne's LST offers a unique set of characteristics that make it suitable for both single-repository and mass transformation operations:

* **Type-attributed**. Each LST element is imbued with type information. For example, when referencing a field, the source code may just refer to it as `myField`. The OpenRewrite LST element for `myField`, on the other hand, would contain additional information about what the type of `myField` is, even if it isn't defined in the same source file or even the same project.
* **Format-preserving**. Whitespace before and after LST elements is preserved in the tree so the tree can be printed out to reconstitute the original source code without clobbering formatting. Additionally, refactoring operations that insert code are sensitive to the local style of the code around them and match the local style.
* **Acyclic and serializable**. Most LSTs containing type information are potentially _cyclic_. Cycles usually come from generic type signatures like `class A<T extends A<T>>`. This kind of pattern is generally found in things like abstract builder types in Java. OpenRewrite cuts these cycles off and adds serialization annotations to its types so the LST can be serialized/deserialized with libraries like Jackson.

All of these properties are necessary for scalable organization-wide search and transformation.

Format preservation is necessary in any organization that doesn't have 100% consistent formatting across its whole codebase.

Type attribution is necessary for the accurate matching of patterns. For example, if we are looking for [SLF4J](http://www.slf4j.org/) log statements and we see a statement like the following, without type attribution how do we know if `logger` is an SLF4J or a Logback logger?

```java
logger.info("Hi");
```

The production of type-attributed LSTs for a whole organization is arbitrarily computationally complex since it requires dependency resolution, parsing of the source code, and type attribution (basically Java compilation up to the point of bytecode generation). Since OpenRewrite LSTs are serializable, we can store them as a byproduct of compilation and then operate on them _en masse_ later.

{% hint style="info" %}
Moderne's build plugins allow for LSTs to be serialized to disk. This makes the process of consuming and editing large quantities of them much more efficient. OpenRewrite's build plugins, on the other hand, store everything in memory and need to be reparsed every time there is a change.
{% endhint %}

Once we have a serialized LST for a particular source file, and since it also contains type information, it can be refactored/searched completely independently of other source files in the same source package or repository. This makes mass search and refactoring an approximately linearly scalable operation.

{% hint style="info" %}
If you want to see specific examples of Java LSTs, please read our [Java LST Examples doc](https://docs.openrewrite.org/concepts-and-explanations/lst-examples).
{% endhint %}

## LST lifecycle

### With the Moderne CLI

1. Before you can run a recipe against a repository with the [Moderne CLI](/cli/cli-intro.md), you must build the LST for said repository. This LST does not need to fit into memory entirely at once -- it can be built in pieces. The LST could be built locally or it could be pulled down from your artifact repository (if said LST is up-to-date). Regardless, at the end of the build process, you will have an LST artifact saved to disk.

2. When you go to run a recipe, this LST will be read from disk. If the entire LST doesn't fit into memory, it will be read in pieces. As part of reading this LST from disk, the current state of the code will be checked against the code on disk. If Git shows that the two do not match, you will receive a warning that you should rebuild the project.

3. As the recipe runs, it will make transformations on the LST. This could be as simple as adding a search marker (`~~>`) if the recipe is a search recipe -- or it could be as complex as adding classes and methods throughout the repository.

4. Once the recipe has finished running, the **modified LST will be discarded** and the code itself **will not** be changed. Instead, different patch files will be created depending on whether the recipe found or changed anything. For example, a search recipe will produce a `search.patch` file, whereas a recipe that changes the code will produce a `fix.patch` file. These patch files are saved to disk and the locations are output by the CLI.

5. You can review the patch files with your favorite editor or you can apply them directly to the code (via the `mod apply` command). Regardless of what you do, it's important to note that the LST itself **will not** have been updated. If you go to run another recipe at this point, it will be run against the original LST and will not have any of the changes the previous recipe made. If you want future recipe runs to have the updates from previous ones, you must re-build the LST (via the `mod build` command).

### With the Moderne Platform

1. Before you can run a recipe against a repository in the Moderne Platform, you must build the LST for said repository. This is typically done via a CI job (usually configured by the [mod connect tool](https://github.com/moderneinc/mod-connect)). This CI job builds LST artifacts for each repository you want ingested and then publishes the LST artifacts to your artifact repository. You can configure how often this runs, but most people run these jobs once per day as it can be prohibitively expensive to continuously build large projects over and over.

2. When you go to run a recipe, behind the scenes, the LST artifact will be downloaded from your artifact repository.

3. As the recipe runs, it will make transformations on the downloaded LST. This could be as simple as adding a search marker (`~~>`) if the recipe is a search recipe -- or it could be as complex as adding classes and methods throughout the repository.

4. Once the recipe has finished running, the **modified LST will be discarded** and the code **will not** be changed. Instead, you will be [provided with a list of the changes it would make](/user-documentation/running-your-first-recipe.md#step-6-run-the-recipe). You can [review them](/user-documentation/running-your-first-recipe.md#step-7-view-the-results) and [choose what to do with them](/user-documentation/running-your-first-recipe.md#step-8-commit-your-changes).

5. Regardless of what you choose to do with the results, future recipe runs **will not** have those changes unless you commit them and have the CI job re-build/publish the LST to your artifact repository.

{% hint style="info" %}
You might be wondering, "Hey - if LSTs are ingested only once a day, wouldn't that mean they're out-of-date if we run multiple recipes against them?" While that _can_ be true, in most situations, it's not an issue as Moderne rebases recipe results when committing and recipes rarely conflict in such an extreme way.

Some users may be tempted to combine a bunch of recipes into one giant recipe so that it guarantees that there are no conflicts. However, this can be problematic as it makes the recipe results much more difficult to review and it can lead to performance issues or timeouts.

In general, you should favor running recipes consistently over time. Moderne, for instance, runs a vulnerability check recipe once per week. This will not only help ensure your code is compliant over time, but it will also make it less of an issue if LSTs are slightly out-of-date.
{% endhint %}