# Enhancing code quality through static analysis remediations

Every programming language has a vast number of conventions and rules that make up "ideal" code. While some of these conventions are stylistic, others can help prevent significant bugs like a `NullPointerException`. Unfortunately, even for the most experienced developers, it's extremely difficult to keep track of these rules and follow them diligently in code. And, even if they do, trying to ensure that other developers follow those same conventions can be like parents trying to tell their kids to clean up their rooms.

Over the years, a variety of static analysis tools have been created to try and help, but these tools do not actually _fix_ your code. Rather, they rely on developers to manually change every line that they warn about. If a new convention is standardized, this can easily result in thousands of lines that need to be changed across a vast number of repositories.

Fortunately, Moderne can help with this tricky problem. Thanks to a [comprehensive Lossless Semantic Tree](../concepts/lossless-semantic-trees.md), Moderne can find _and_ fix static analysis and stylistic issues. Furthermore, for each change made, you can learn _why_ it was changed so that you and your team can write better code in the future. Instead of having to constantly remind your team to clean up the code, you can automate it!

To help you get a better understanding of how Moderne can help improve your code quality, this guide will:

* [Walk you through running a recipe that fixes common static analysis issues](code-quality.md#fixing-common-static-analysis-issues)
* [Show you how to learn what is wrong with the code](code-quality.md#learning-whats-wrong-with-the-code)

## Fixing common static analysis issues

Moderne's [Common static analysis recipe](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CommonStaticAnalysis) looks for and fixes over 50 different types of issues in your code, all of which you can easily enable or disable to meet your needs.

To get to this recipe:

* From the home page, click on `Marketplace` in the top left corner. This will take you to the recipe marketplace.
* From there, click on `Static analysis and remediation`.
*   At the top, you should see a recipe called `Common static analysis issues`. If you click on it, it will expand slightly. Click on `More details` to be taken to the [CommonStaticAnalysis recipe page](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CommonStaticAnalysis):

    ![](../.gitbook/assets/common-static-analysis-recipe.png)

### Running the recipe

The bottom half of the page lists all of the recipes that will be run as part of this analysis. You can click on the checkbox next to any of them to enable or disable that particular recipe from being run. You can also click on the recipes themselves to get more information about that specific recipe or to run just that one.

When you're ready to run the recipe, select the repositories you wish to run on and then press `Dry Run`. You will then be redirected to a page that looks like this:

{% hint style="info" %}
As the code in the SaaS is constantly changing, your results will more than likely be different.
{% endhint %}

![](../.gitbook/assets/common-static-analysis-run.png)

You can click on any of the repositories to look at the suggested changes and learn more about why the code is being changed. Some of these changes are rather complex, such as changing anonymous inner classes that contain only one method into lambdas:

![](../.gitbook/assets/lambda-example.png)

### Learning what's wrong with the code

If you want to learn more about _why_ the code is changing, you can press the three dots (`...`) in the top right-hand corner of any file and select `Why did this change?`:

![](../.gitbook/assets/why-did-this-change.png)

This will display a list of all of the recipes that affected the selected file along with a sentence or two describing the rule in more detail:

![](../.gitbook/assets/example-change-recipes.png)

You can then click on the rule itself to be taken to a page where you can get more information about it or run just that recipe.
