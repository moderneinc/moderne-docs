# Community office hours

### Background

Every week we [host a live office hours session](https://www.youtube.com/@moderne-auto-remediation/streams) where we talk about the latest changes that are happening, answer community questions, and teach you more about specific topics.

You can find each of the office hours sessions below along with a summary of what was discussed and the key links you might find helpful.

### Automate your code reviews with recipes (March 6th, 2024)

{% embed url="https://www.youtube.com/watch?v=oG5cfPeP7Tc" %}

#### Summary and related links

* We started off by covering all of the OpenRewrite and Moderne news for the past week:
  * We're excited to [announce the Moderne DevCenter](https://www.moderne.io/blog/moderne-devcenter-dashboard-used-to-migrate-secure-visualize-large-codebases)! OSS communities can use this to track progress on their migration goals (such as upgrading Java or Spring versions).
    * Some examples of this include the [Spring DevCenter](https://app.moderne.io/devcenter/Spring) and the [Apache Maven DevCenter](https://app.moderne.io/devcenter/Apache%20Maven).
    * Please note that, while we have the data about security vulnerabilities, we've chosen not to display it for OSS communities.
  * We created a [new video showing you how to upgrade transitive dependencies in Gradle](https://www.youtube.com/watch?v=xicPgKzgz-M) – which can help keep you safe from security vulnerabilities. We also [wrote up a doc on this](moderne-platform/how-to-guides/transitive-dependencies.md) to go along with the video.
  * As a follow-up from last week, OpenRewrite has been officially added into the 2024.1 release of IntelliJ IDEA. You can find more details [in their release blog](https://blog.jetbrains.com/idea/2024/02/intellij-idea-2024-1-eap-7/#support-for-openrewrite).
    * We walked through the various benefits of this integration – such as autocompletion and being able to run recipes directly in IntelliJ.
  * We added [support for parsing and visiting JSP files](https://github.com/openrewrite/rewrite/pull/4075). We hope to use this to upgrade [Struts 2.5 to 6.x](https://github.com/openrewrite/rewrite-struts/issues/1).
  * We announced that we'll be returning to [Spring IO](https://2024.springio.net/) this year. Come find us if you're there!
* We then jumped over to the main topic: automating code reviews with OpenRewrite and the [Moderne CLI](moderne-cli/getting-started/cli-intro.md).
  * We showed off a [high-quality PR where we used this automation to ensure certain standards were followed](https://github.com/openrewrite/rewrite-migrate-java/pull/421) (e.g., not including `System.out.println` in released code). One especially cool part of this is that the bot provides suggestions that the committer can simply accept without ever having to go back to the code themselves.
    * You can find our [OpenRewrite best practices recipe in the rewrite-recommendations repository](https://github.com/openrewrite/rewrite-recommendations/blob/main/src/main/resources/META-INF/rewrite/openrewrite.yml) or in the [Moderne Platform](https://app.moderne.io/recipes/org.openrewrite.recipes.OpenRewriteBestPractices).
  * We then dove into demonstrating how we did this:
    * The first step is [running the receive-pr workflow](https://github.com/openrewrite/rewrite-migrate-java/blob/main/.github/workflows/receive-pr.yml) – which then calls out to [our shared workflow](https://github.com/openrewrite/gh-automation/blob/main/.github/workflows/receive-pr.yml) in [our GitHub automations repository](https://github.com/openrewrite/gh-automation). The shared workflow runs the OpenRewrite recipes against the code in the PR.
    * The last step is commenting the changes back to the PR – which is what the [comment-pr workflow](https://github.com/openrewrite/rewrite-migrate-java/blob/main/.github/workflows/comment-pr.yml) does (which similarly calls out to [our shared one](https://github.com/openrewrite/gh-automation/blob/main/.github/workflows/comment-pr.yml)).
  * If you want to learn more, check out [the PR where we added this to the Langchain4j project](https://github.com/langchain4j/langchain4j/pull/673).
  * We were largely inspired by [this blog post from GitHub Security Lab](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/). Definitely check that out if you're thinking about adding workflows to your projects so you can ensure you're doing so in a secure manner.
  * We then discussed when you may want to use the above automation (for highly homogenous organizations) vs. what options you have if your organization is more heterogenous and larger (in which case the [Moderne CLI](moderne-cli/getting-started/cli-intro.md) is a better fit as it abstracts away multiple languages and versions).

### Data tables & search recipes (Feb 28, 2024)

{% embed url="https://www.youtube.com/watch?v=FFJdU4JA3q0" %}

#### Summary and related links

* As normal, we started off by going over new things that occurred over the past week:
  * We added [95 Quarkus 3 & Camel migration recipes](https://app.moderne.io/marketplace/io.quarkus) to the Moderne platform.
  * We demonstrated how you can use Refaster recipes to make your code clearer and more readable (e.g., [optimizing your use of the Java time APIs](https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.TimeRulesRecipes))
  * In really exciting news, IntelliJ IDEA has added OpenRewrite to their early access branch. What this means is that you get native editor support for [OpenRewrite YAML recipes](https://docs.openrewrite.org/authoring-recipes/types-of-recipes#declarative-recipes) and you can run recipes directly from your IDE. We'll have more information about this when it fully releases.
  * We added a [bunch of reference recipes](https://github.com/moderneinc/rewrite-recipe-starter?tab=readme-ov-file#reference-recipes) to the [rewrite-recipe-starter repository](https://github.com/moderneinc/rewrite-recipe-starter) so that it's easier to find a recipe to get started with. We also added [Maven configuration](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/pom.xml) for those users who prefer to use that over Gradle.
  * We wrote a [blog post about using AI in refactoring](https://www.moderne.io/blog/ai-assisted-refactoring-in-the-moderne-platform). One big win was that code written in French would often times have [misencoded special characters that would appear as question marks](https://www.moderne.io/blog/ai-assisted-refactoring-in-the-moderne-platform#toc-2). We were able to use AI to determine what the appropriate character should be for valid French and replace the question mark with said valid character.&#x20;
  * In a fun community win, Jonathan Leitschuh added the [ability to find constant literal values](https://github.com/openrewrite/rewrite-launchdarkly/commit/f1173512dab1b9ff191fba029be1c41ddd74c684) which can greatly improve turning on feature flags. He also [live streamed the development of this](https://www.twitch.tv/jlleitschuh) while answering questions from the community.
* We then jumped into the main topic for the week: data tables and search recipes:
  * We demonstrated how you can use [search recipes in Moderne](https://app.moderne.io/marketplace/org.openrewrite.java.search) to [find usages of any type you care about](https://app.moderne.io/recipes/org.openrewrite.java.search.FindTypes) (perhaps because you wanted to learn more about it or find some examples to copy).&#x20;
    * We explained how [Markers](https://docs.openrewrite.org/concepts-explanations/markers) help call out individual elements and how they work in relation to search recipes.
  * We ran and talked through our [Find and fix vulnerable dependencies recipe](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.DependencyVulnerabilityCheck). We also walked through the [data table](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/data-tables) it produced.
    * Using said data table, you can find transitive dependency vulnerabilities many levels deep – complete with CVE numbers and possible fix versions if they're available.&#x20;
  * We then showed how you can [produce your own class hierarchy and data table rows](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/data-tables) as well as how to [verify the rows you produced](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/ClassHierarchyTest.java#L36-L37).

### Advanced recipe development: Scanning recipes (Feb 21, 2024)

{% embed url="https://www.youtube.com/watch?v=xio6F53bar4" %}

#### Summary and related links

* We started off by highlighting some of the big changes/additions since the last office hours:
  * We [created a new video showing how to scale JavaScript Codemods with Moderne](https://www.youtube.com/watch?v=lXVPwW30fFk).
    * You can find [the curated list of Codemods in the Moderne platform](https://app.moderne.io/marketplace/org.openrewrite.codemods).
  * We recently [added a bunch of Error Prone recipes to the Moderne platform](https://app.moderne.io/marketplace/tech.picnic.errorprone.refasterrules).
  * There were some great community additions such [as this new recipe on migrating away from Swagger to SpringDoc or OpenAPI](https://app.moderne.io/recipes/org.openrewrite.java.springdoc.SwaggerToSpringDoc).
  * We added [the ability to bump transitive dependencies in Gradle](https://docs.moderne.io/user-documentation/moderne-platform/how-to-guides/transitive-dependencies).
  * We [updated our Spring 3.2 blog](https://www.moderne.io/blog/speed-your-spring-boot-3-0-migration) to contain the latest Spring changes and also discuss Java 21 changes.
* We then jumped into the core topic of [Scanning Recipes](https://docs.openrewrite.org/concepts-explanations/recipes#scanning-recipes). We walked through every part of developing a Scanning Recipe along with examples and tests.

### Easy LST manipulation with Java Template (Feb 14, 2024)

{% embed url="https://www.youtube.com/watch?v=OB_tqS356qU" %}

#### Summary and related links

* We highlighted [a new blog post we put out about using AI search tool for finding recipes](https://www.moderne.io/blog/building-search-with-ai-embeddings-to-assist-automated-code-refactoring). We discussed why this AI search addition was important and what we were struggling with before that was added.
* We discussed how we've started adding automated code reviews to our projects to ensure that code additions are consistent and align with our standards. This was done by running specific recipes against PRs.
* We mentioned that we recently [added JavaScript Codemods to our recipe marketplace](https://app.moderne.io/marketplace/org.openrewrite.codemods). We'll discuss more about this in a different session, though.
* We released [a video in partnership with Choice hotels about how they used Moderne to alleviate technical debt and lower their cybersecurity risk](https://www.youtube.com/watch?v=rXkrczBPsSY).
* We did a deeper dive into [JavaTemplates](https://docs.openrewrite.org/concepts-explanations/javatemplate) and walked through how to debug and test them.
  * We have a [detailed guide that walks you through how to use Java Templates to modify methods](https://docs.openrewrite.org/authoring-recipes/modifying-methods-with-javatemplate) that you might find useful to follow along with.
* We talked through [what a Cursor is and how you might use them in your visitor](https://docs.openrewrite.org/concepts-explanations/visitors#cursoring).
* We discussed [recipe best practices and some things you should keep in mind when developing your own recipe](https://docs.openrewrite.org/authoring-recipes/recipe-conventions-and-best-practices).

### Visitor pattern basics and Java Templating (Feb 7, 2024)

{% embed url="https://www.youtube.com/watch?v=4azJ9Y9De5M" %}

#### Summary and related links

* We started off by going through the latest changes in OpenRewrite and encouraged users to make use of the [rewrite-recipe-bom](https://github.com/openrewrite/rewrite-recipe-bom) to ensure their versions are always aligned and up-to-date.
  * You can find all of the changes on the [rewrite releases page](https://github.com/openrewrite/rewrite/releases). It's great to see so many people contributing!
* We then highlighted some fun collaborations we've had. These include:
  * [Tim being on the Quarkus podcast](https://www.youtube.com/watch?v=BlJk1-SNv9s) where he talked about how to use OpenRewrite to migration to the appropriate Java version to be ready for the latest Quarkus version.
  * [Jonathan was on the DevProdEng Lowdown podcast](https://www.youtube.com/watch?v=6yZ-WGbl3OQ) where he talked about the collaboration between Gradle and Moderne and the new recipes added for Develocity configuration. They also discussed how Moderne has a scalable way to leverage Develocity Failure Analytics to find recipe misconfigurations.
* [We put out a blog recently about how our engineering team migrated to Spring Boot 3.2](https://www.moderne.io/blog/how-moderne-engineering-automated-its-spring-boot-3-migration). Definitely check that out if you're interested in learning more about the entire process.
* The core part of the office hours began with discussing [Visitors](https://docs.openrewrite.org/concepts-explanations/visitors) and [the visitor pattern](https://en.wikipedia.org/wiki/Visitor\_pattern#Java\_example). This is where the main part of each recipe lies. We do an in-depth walkthrough of some recipes and the visitors in them.
* We talked a bit about [Lossless Semantic Trees](https://docs.openrewrite.org/concepts-explanations/lossless-semantic-trees) (LST) and [provided some images that demonstrated what a Java program looks like when it's broken up into LST elements](https://docs.openrewrite.org/concepts-explanations/lst-examples#lst-diagram).
* We briefly explained [how to use JavaTemplates in recipes to construct complex LST elements](https://docs.openrewrite.org/concepts-explanations/javatemplate).
* There was a community question about [what the difference is between an isomorphic visitor and a non-isomorphic visitor](https://docs.openrewrite.org/concepts-explanations/visitors#isomorphic-vs.-non-isomorphic-visitors).
* We discussed how you can use the [rewrite-recipe-starter](https://github.com/moderneinc/rewrite-recipe-starter) and the [TreeVisitingPrinter to see what the LST looks like for the code you're interested in](https://docs.openrewrite.org/concepts-explanations/tree-visiting-printer).

### Moderne and OpenRewrite (Jan 24, 2024)

{% embed url="https://www.youtube.com/watch?v=Wu7huzpdOAE" %}

#### Summary and related links

* We talked through how to get started with developing recipes. If you're looking to get started with that, check out the [OpenRewrite authoring recipe docs](https://docs.openrewrite.org/authoring-recipes/recipe-development-environment).
  * You may also find it useful to start with a repository that let's you jump right into recipe development and provides some sample recipes to look at the code for. If so, check out the [rewrite-recipe-starter](https://github.com/moderneinc/rewrite-recipe-starter) we've made for this purpose.
* We discussed the [three different types of recipes you can create](https://docs.openrewrite.org/authoring-recipes/types-of-recipes) and what the pros/cons are of each.
* We demonstrated how to [create your own custom recipes quickly in Moderne without writing any code](https://docs.moderne.io/user-documentation/moderne-platform/how-to-guides/recipe-builder).
* We talked through [Refaster recipes](https://docs.openrewrite.org/authoring-recipes/types-of-recipes#refaster-template-recipes) and walked through creating and testing one.
  * If you want to make your own Refaster recipe, check out our [Getting started with Refaster template recipes doc](https://docs.openrewrite.org/authoring-recipes/refaster-recipes).
* There was a community question about how to can contribute to OpenRewrite. To get started with that, check out our [contributing doc](https://github.com/openrewrite/.github/blob/main/CONTRIBUTING.md) where we walk through all the different ways you can help – many of which don't even involve writing code.
* We walked through how to use Moderne to combine recipes like [ChangeType](https://app.moderne.io/recipes/org.openrewrite.java.ChangeType) and [Add Gradle or Maven dependency](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.AddDependency) into a larger migration recipe.
* We explained what [Preconditions are and how to use them](https://docs.moderne.io/user-documentation/moderne-platform/how-to-guides/preconditions).
  * You might also consider checking out the [OpenRewrite docs on Preconditions](https://docs.openrewrite.org/reference/yaml-format-reference#preconditions).
