# How to find method invocations based on a pattern using AI

Searching for methods across a code base can not only help you learn more about how a particular method functions or how it's used in code, but it can also enable you to perform impact analysis across all of your repositories to see what depends on what. While this is normally a tricky problem due to the limitations of text-based searching, Moderne offers two recipes that allow you to easily and quickly search for methods – even if you don't know the exact name or parameters they're composed of.

In this guide, we'll give you some background on each of these recipes and then walk through the different ways you might use them.

<figure><img src="../../../.gitbook/assets/AIDoc.gif" alt=""><figcaption></figcaption></figure>

## Recipes that search for methods

The Moderne marketplace has two key recipes that can help you find method invocations throughout your codebases:

1. [Find method usages](https://app.moderne.io/recipes/org.openrewrite.java.search.FindMethods)
2. [Find method invocations that resemble a pattern](https://app.moderne.io/recipes/io.moderne.ai.research.FindCodeThatResembles)

The first recipe, find method usages, uses [method patterns](https://docs.openrewrite.org/reference/method-patterns) to identify a method. If you know the exact method name you're looking for, then this is recipe you should use.

The second recipe, which is backed by AI, is a better candidate for situations where you are looking for multiple method invocations, without knowing the name or even the library it comes from.

Imagine, for instance, that you wanted to change how you authorize HTTP requests across all over your services. To begin, you'd want to figure out which libraries you use. Do you use Spring's WebClient? OkHttp3? Spring's HttpHeaders? Something else? Rather than needing to know exactly what methods you use and how those methods are defined, you could use this recipe to search for something as simple as `HTTP requests with an authorization header`.

Please note, though, that this AI recipe is designed to find results even if they are somewhat ambiguous, rather than rejecting them like a normal recipe might.

## Run the recipes

### Find method usages

1. Navigate to the [find method usages recipe in Moderne](https://app.moderne.io/recipes/org.openrewrite.java.search.FindMethods).
2. Either enter a [method pattern](https://docs.openrewrite.org/reference/method-patterns) directly into the method pattern text box, or click on the wand icon next to it to open a tool to help you build a method pattern.
3. Press `Dry Run` to kick off the recipe.
4. On the recipe results page, you can click on any repository to see the code that matches the method you specified. For instance, if you searched for `Java.util.List add(..)` – you might see results like:

<figure><img src="../../../.gitbook/assets/image (2) (1).png" alt="" width="563"><figcaption><p>Find method usages results</p></figcaption></figure>

### Find method invocations that resemble a pattern

1. Navigate to the [find method invocations that resemble a pattern recipe](https://app.moderne.io/recipes/io.moderne.ai.research.FindCodeThatResembles) in Moderne.
2. In the `Resembles` field, describe the method you want to search for. For best results, please ensure that the description is precise, concise, and does not contain spelling mistakes. We'd also recommend not including verbs and keeping the description in the simple present tense. Here are some examples of a good description:
   * HTTP request with an authorization header
   * Handles user authentication
   * Performs input validation
   * Manages session state
   * Parses XML or JSON

{% hint style="info" %}
The AI search is aware of the arguments inside the method invocation. If you are looking for a specific way a method is used, consider adding that information inside of the query. For instance, instead of saying `HTTP request`, consider specifying `HTTP request with an authorization header`.
{% endhint %}

3. In the `Top-K` field, you can customize the types of results you'll receive. A higher value means the AI search will find more results and take a longer period of time to run. A lower value means the AI search will find less results, but run more quickly. For best results, we'd recommend keeping this value in the 5-10 range.
   * Keep in mind that recipes have a time-out of 8 minutes, so if you enter too high of a value, the recipe will not return any results as it will time out.
4. With those two options specified, press `Dry Run` to kick off the recipe.
5. On the recipe results page, you can click on any repository to see the code that matches the method you described. For instance, if you searched for `HTTP Request` - you might see results like:

<figure><img src="../../../.gitbook/assets/image (1) (1) (1) (1).png" alt="" width="563"><figcaption><p>Find method invocations that resemble a pattern results</p></figcaption></figure>

## Gain insight from the results

After running each of these recipes, you may want to view the results in a different way or learn more about why certain results were or were not included. To assist with this goal, Moderne offers a few data tables and visualizations you can run with the recipe results. Let's take a look at a few of them. You can find these by clicking on the `Visualization` or `Data tables` tab at the top of the recipe results page:

<figure><img src="../../../.gitbook/assets/image (5) (1).png" alt=""><figcaption></figcaption></figure>

### Find uses of method in code

The find uses of method in code visualization creates a table of all the methods that match the method pattern you specified. It will give you the exact file location where a method was found and a snippet of the source code that matched. You can search for specific files or results – or you can download it as a CSV to run your own analytics against the results.

<figure><img src="../../../.gitbook/assets/image (6) (1).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (3) (1).png" alt=""><figcaption></figcaption></figure>

### Find uses of method in code using AI

This visualization uses AI to return method patterns found in your code that match the description you provided in the recipe. It also returns an example of the code that goes with said method pattern.

<figure><img src="../../../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (4) (1).png" alt=""><figcaption></figcaption></figure>

You could then take this method pattern and plug it in to the [find method usages recipe](https://app.moderne.io/recipes/org.openrewrite.java.search.FindMethods) to find results that match just that pattern. Or, if you wanted to create a recipe that will find _all_ of the results that match the method patterns returned here, [we provide a visualization to assist with that](how-to-find-method-invocations-based-on-a-pattern.md#generate-a-search-recipe-from-the-ai-results).

{% hint style="info" %}
Regardless of which option you pick, please note that you may want to modify the method pattern to meet your needs as the method pattern does not include argument matching.
{% endhint %}

### Generate a search recipe from the AI results

This visualization takes the method patterns generated by the AI and creates a declarative YAML recipe that will find methods that match said patterns. You can then directly run that recipe - or you can take it over to the [recipe builder](recipe-builder.md) and modify it to meet your needs.

<figure><img src="../../../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

### Download data tables

Another feature Moderne offers is the ability to download an extremely detailed file that contains all of the results from the recipe or all of the details about the AI search. To download these tables, go to the `Data tables` tab and then select the type of file you'd like to receive (CSV, XLS, or JSON).

![Find method usages data table](../../../.gitbook/assets/method-usage-data-table.png)

![Find method invocations that resemble a pattern data tables](../../../.gitbook/assets/ai-data-tables.png)
