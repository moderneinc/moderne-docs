---
sidebar_label: Type-aware code search
description: An introduction into type-aware code searching in Moderne.
---

import ReactPlayer from 'react-player';

# Introduction to type-aware code search

Imagine you're an author of a Java library. You've defined an [abstract base class](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html) and you want to figure out if people are using a specific method defined in that class. It wouldn't be _too_ difficult to search in the repository where the class was defined, but what if there are hundreds or thousands of repositories that are potentially using it or some subclass of it? Searching for the method name might return thousands of irrelevant matches. A human would certainly struggle to do this search within a reasonable amount of time.

Fortunately, Moderne offers a robust solution to this problem: type-aware search recipes. Using these recipes you can quickly and correctly find things like classes, methods, or fields — even if they are named or imported in different ways.

To help you get accustomed to Moderne's search capabilities, in this guide, we will:

* [Walk through an example of using a search recipe](#using-a-search-recipe)
* [Teach you how to find type-aware search recipes](#finding-type-aware-search-recipes)
* [Demonstrate how you can use regex to improve your searches](#using-regex-in-searches)

## Using a search recipe

As an example, let's say that you are wanting to find all of the places where your team is using the `createFile` method from `java.nio.file.Files`. Maybe there is a security issue with it and you want to find out where it's being used to determine how hard it is to replace it. Or maybe you just want to learn how to use it for yourself in another area.

If you searched for `createFile` in GitHub, you might end up with a ton of irrelevant results as this is a fairly common method name. To find results that match the method name _and_ are from the correct library, please follow these steps:

*   Navigate to the [find method usages recipe](https://app.moderne.io/recipes/org.openrewrite.java.search.FindMethods):

    ![](./assets/find-method-usage-empty.png)
* (Optionally) [Filter down to a specific group of repositories](./managing-user-configured-organizations.md).
* Click on the wand icon next to the method pattern textbox to open the method pattern wizard.
* Enter the fully qualified class name of `java.nio.file.Files` in the fully qualified receiver type field.
* Enter the method name of `createFile` in the method name field.
* Enter `..` in the argument type field to denote that we want to search for any amount of arguments (zero or more).

<figure>
  ![](./assets/find-method-usage-input.png)
  <figcaption></figcaption>
</figure>

* Press `Apply` to add the method pattern to the text box.

:::tip
The combination of the fully qualified receiver type, the method name, and the argument types make up a "method pattern".

For extensive documentation on each of these components and more examples of different ways you can use method patterns to search for methods, please check out the [OpenRewrite docs](https://docs.openrewrite.org/reference/method-patterns).
:::

* Your window should look like:

    ![](./assets/find-method-usage-full.png)
* Press `Dry Run` to begin the search. You will be redirected to a page that looks like:

    ![](./assets/find-method-usage-results.png)

:::info
As the code in the SaaS is constantly changing, your results will more than likely be different.
:::

* On the right side of the screen, you can see methods that exactly matched the method pattern. In other words, if a different `createFile` method was invoked in your code, you wouldn't see it here.

From there, you can make intelligent decisions about the code. For instance, maybe you'll see that there aren't too many instances of this and conclude that you can safely replace it with a new `createFile` method. Or maybe you just wanted to learn how other people use it to safely use it in your new class. Regardless of what you end up doing, you can be confident that you correctly and quickly found all of the places that use this method.

## Finding type-aware search recipes

To discover all of the type-aware search recipes, please follow these steps:

* From the [Moderne Marketplace](https://app.moderne.io/marketplace), click on a category that relates to your needs such as `Java`:

<figure>
  ![](./assets/java-category.png)
  <figcaption></figcaption>
</figure>

* Click on `Search`:

<figure>
  ![](./assets/search-recipe-group.png)
  <figcaption></figcaption>
</figure>

* You will then arrive on a page that includes recipes for all of the different ways you can search for code:

<figure>
  ![](./assets/search-recipe-examples.png)
  <figcaption></figcaption>
</figure>

* Click on whichever one you are interested in exploring.

## Using regex in searches

<ReactPlayer className="reactPlayer" url='https://www.youtube.com/watch?v=fkcDyLRGOUA' controls="true" />

