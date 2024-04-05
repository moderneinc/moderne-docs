# Community office hours

### Background

Every week we [host a live office hours session](https://www.youtube.com/@moderne-auto-remediation/streams) where we talk about the latest changes that are happening, answer community questions, and teach you more about specific topics.

You can find each of the office hours sessions below along with a summary of what was discussed and the key links you might find helpful.

### AI integrations at Moderne (April 4th, 2024)

{% embed url="https://www.youtube.com/watch?v=ORqsxJpgmhw" %}

#### Summary and related links

* This week we welcome Justine - our AI/machine learning research engineer!
* Announcements for the week:
  * [DevNexus](https://devnexus.org/presentations/fundamentals-of-migration-engineering-with-openrewrite) is next week! If you're going to be there come say hi.
  * We released a [new video detailing the Moderne DevCenter](https://www.youtube.com/watch?v=KRXDMGt7DRE).
  * To go along with that, we also have a [getting started guide](/user-documentation/moderne-platform/getting-started/dev-center.md) for those of you who are Moderne customers and want to jump in.
* AI topic:
  * We started off by talking through [search in Moderne](/user-documentation/moderne-platform/how-to-guides/moderne-platform-search.md). Prior to AI search being added, it was very hard to discover recipes, typos would result in no recipes being found, and words that were tangentially related did not provide results. Adding AI search helped fix all of these issues.
  * We then provided some more context into how AI search works and how you might get started with your own. Check out [Hugging Face](https://huggingface.co/models) to look through various models - which includes the ones we used.
  * We talked through common questions about these models such as how they work, how they're trained, what type of system you need, etc.
  * If you want to learn more details about AI at Moderne, Justine also wrote a [lovely blog post on fast, secure, and cost-effective AI searching](https://www.moderne.io/blog/building-search-with-ai-embeddings-to-assist-automated-code-refactoring).
  * We then went over [some diagrams that Justine made to explain how AI works across Moderne](https://docs.google.com/document/d/1kUIZWar760LSusfiiutzoA5rf9XWdHt1KaSynkL30YE/edit).
  * Next up was diving into various types of visualizations and how they can be used to discover important elements in your code. For instance, we highlighted a visualization that shows [the different languages that are in use in your comments](https://app.moderne.io/recipes/io.moderne.ai.FindCommentsLanguage) - and one that [clusters method names together](https://app.moderne.io/recipes/io.moderne.ai.research.GetCodeEmbedding?defaults=W3sibmFtZSI6ImNvZGVTbmlwcGV0VHlwZSIsInZhbHVlIjoibWV0aG9kcyJ9XQ%3D%3D).
  * We provided an example of how we used [AI to help one of our customers who had mis-encoded French comments throughout their code base](https://app.moderne.io/recipes/io.moderne.ai.FixMisencodedCommentsInFrench). This made it a struggle to automate some key things they wanted to accomplish such as documentation generation.
  * We concluded by talking through some upcoming AI additions to Moderne. One of these is a way of using AI to search through code. For instance, if you had a general idea of what you wanted to search for but weren't quite sure the exact thing to search for, you could use this to find related code.
  * Another upcoming change is using AI to make suggestions of recipes to run on your code base to make it more secure. For instance, if it saw you were using an improper random number generator, it might recommend running a recipe to change it to use a secure one. These recipe suggestions will appear in the [DevCenter](/user-documentation/moderne-platform/getting-started/dev-center.md) for the organization.

### Dependency management recipes (March 25th, 2024)

{% embed url="https://www.youtube.com/watch?v=a45BJclATjU" %}

#### Summary and related links

* Only a few announcements this week since it's so close to the last office hours:
  * We will be [presenting on Security Boulevard at 11 AM ET on March 28th, 2024](https://webinars.securityboulevard.com/how-to-massively-pay-down-your-tech-debt-fast?hss_channel=lcp-71946171). In that presentation, we'll discuss how to massively pay down your tech debt fast.
  * As a reminder, we will be at [DevNexus 2024](https://devnexus.org/presentations/fundamentals-of-migration-engineering-with-openrewrite) in April.
* The main topic was about dependency management:
  * We talked about [how to gain insight into your dependencies](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.DependencyInsight). For instance, maybe you're curious about if all of your repositories are using the same version of Jackson across all of their modules.
    * You can use the visualizations or data tables produced by this recipe to get detailed information about that.
  * Once you've dug into what dependencies you're using across your repositories, you may want to [upgrade your dependencies to be on the same version](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.UpgradeDependencyVersion).
    * This is also a really useful recipe to use when writing migration recipes such as newer versions of Spring.
  * The code for both of the above recipes can be found in the [rewrite-java-dependencies repository](https://github.com/openrewrite/rewrite-java-dependencies).
  * Another common thing developers need to do is update their Gradle wrapper as new versions of Gradle are released. We demonstrated how you can use the [Update Gradle wrapper recipe](https://app.moderne.io/recipes/org.openrewrite.gradle.UpdateGradleWrapper) to update this across all of your repositories very quickly. 
  * We highlighted some recipes that were enhanced recently to help with dependencies. For instance, in the [change Maven parent recipe](https://app.moderne.io/recipes/org.openrewrite.maven.ChangeParentPom), we've added support so that properties that used to exist in the parent pom (but don't anymore) can be brought down into the child pom so that the project can keep compiling until you can upgrade it.
  * To go along with the above recipe change, we also updated the [Remove redundant explicit dependencies recipe](https://app.moderne.io/recipes/org.openrewrite.maven.RemoveRedundantDependencyVersions) so that you can remove dependencies that exist in both your current pom and the parent pom – with options to let you decide if you only want to do that when the versions match exactly or not.
  * As part of investigating dependencies, it's a good idea to [check for and possibly fix vulnerable dependencies](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.DependencyVulnerabilityCheck).
  * We concluded by highlighting the dependency tree generated by the [dependency report recipe](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.DependencyList). This is a searchable tree that helps you answer the question of, "What do I have that includes this dependency?" or "What uses this specific version of this dependency?"

### Running JavaScript codemods at scale (March 20th, 2024)

{% embed url="https://www.youtube.com/watch?v=tPlGBZTZInI" %}

#### Summary and related links

* As usual, we began by discussing announcements related to OpenRewrite & Moderne:
  * Jonathan and Olga will both be presenting at [DevNexus 2024](https://devnexus.org/presentations/fundamentals-of-migration-engineering-with-openrewrite) in April.
  * Jonathan will also be giving a keynote at [Uberconf 2024](https://uberconf.com/schedule) on Tuesday, July 16th. Definitely stop by if you're going to be there.
  * We released a bunch of new videos on our YouTube channel:
    * [Upgrading a Maven parent pom version](https://www.youtube.com/watch?v=LyQsQYfUlwI)
    * [Writing dynamic recipe tests when the result of a recipe is dependent on an external system state](https://www.youtube.com/watch?v=O9o4y_2TO0w)
    * [Find YAML properties on the Moderne platform](https://www.youtube.com/watch?v=MIEc9IOnfBc)
    * [Regex support on the Moderne platform](https://www.youtube.com/watch?v=fkcDyLRGOUA)
  * OpenRewrite v8.21.0 was released which includes bug fixes and some new recipes from some of our awesome community members.
  * The [find and fix vulnerable dependencies recipe](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.DependencyVulnerabilityCheck) was updated to fix the version of transitive dependencies on top of direct dependencies.
* We then welcomed Scott and Kyle as guest presenters to talk about JavaScript codemods. They are both senior developers here at Moderne, and they primarily specialize in frontend development. They:
  * Started off by explaining why we decided to invest into supporting JavaScript codemods in the platform.
  * Dove into [some examples of codemods](https://app.moderne.io/recipes/org.openrewrite.codemods.cleanup.javascript.NoUselessSpread) and discussed how we curated a list of important codemods.
  * Discussed how we created recipes for each of the ESLint stylistic plugin rules. On top of those recipes, we also made [a larger ESLint recipe for styling recommended by ESLint](https://app.moderne.io/recipes/org.openrewrite.codemods.format.RecommendedESLintStyling).
  * Explained some of the challenges we faced when adding support for upgrading Angular versions.
  * Highlighted how you can use recipes to [upgrade your JavaScript code to replace lodash objects and functions with native JavaScript](https://app.moderne.io/marketplace/org.openrewrite.codemods.migrate.lodash).
  * Detailed what changes we'd still like to do and what things are still giving us trouble.
  * Walked through the [Lint source code with ESLint recipe](https://app.moderne.io/recipes/org.openrewrite.codemods.ESLint) and explained how that recipe returns useful data tables and visualizations for tracking problems with your source code.
  * Explained how to create your own codemod recipes via a YAML file and provided an example for what this looks like.
  * Talked about what codemods they use most often in their day-to-day basis (e.g., [improve regexes by making them shorter, consistent, and safer](https://app.moderne.io/recipes/org.openrewrite.codemods.cleanup.javascript.BetterRegex)).


### Refaster style recipes & Picnic's Error Print Support (March 12th, 2024)

{% embed url="https://www.youtube.com/watch?v=DUc53vuJQ7Q" %}

#### Summary and related links

* A quick run through of everything new in OpenRewrite & Moderne this week:
  * We published our Moderne Monthly newsletter to [LinkedIn](https://www.linkedin.com/pulse/youre-luck-march-moderne-newsletter-here-moderneinc-9gtfc/) as well as [online](https://moderne-19486564.hs-sites.com/moderne-march-newsletter).
    * Be sure to [subscribe to our monthly newsletter](https://www.linkedin.com/newsletters/moderne-monthly-7150204049416409088/) to stay up-to-date with all the latest Moderne news.
  * We added [86 more Refaster style recipes](https://app.moderne.io/marketplace/tech.picnic.errorprone.refasterrules) from [Error Prone Support](https://error-prone.picnic.tech/).
    * These recipes are designed to help you write better code and catch common mistakes, and now helpfully link to the docs to show more details of what changes to expect.
  * We split off a separate [Rewrite recipe module for Apache](https://github.com/openrewrite/rewrite-apache/) projects, which you can also [run through Moderne](https://app.moderne.io/marketplace/org.openrewrite.apache).
    * The reason behind this was to make recipes related to Apache projects easier to find, use and extend.
  * We created a new [Rewrite recipe module for Node.js](https://github.com/openrewrite/rewrite-nodejs) applications.
    * This provides the building blocks to change Node.js applications in a safe and automated way, starting with dependency management.
      * We also allow you to [visualize dependency versions across your organization](https://app.moderne.io/recipes/org.openrewrite.nodejs.search.DependencyInsight), to plan your next modernization steps.
  * Also new is a [module for Struts applications](https://github.com/openrewrite/rewrite-struts), bringing folks from version 2.5 to 6.x.
    * This builds upon our recent addition of [JSP parsing support](https://github.com/openrewrite/rewrite/pull/4075), for more modernization capabilities.
  * Apache Wicket released their long awaited [10.0.0 release](https://wicket.apache.org/news/2024/03/11/wicket-10.0.0-released.html), with an [automated migration using OpenRewrite](https://cwiki.apache.org/confluence/display/WICKET/Migration+to+Wicket+10.0).
    * We're excited to see the community using OpenRewrite to make their migrations easier and safer, and to have those recipes available on the day of the release.
      * Also available on the Moderne Platform, for easy use and extension.
* For the main subject we looked at how the Picnic online supermarket uses both Error Prone Refaster rules and OpenRewrite recipes to enforce coding standards and catch common mistakes.
  * We saw how a team of five is able to support 150 Java developers in their day-to-day needs, through a high level of standardization and automation.
  * We went over some of their history, and how a past choice for [TestNG](https://testng.org/) was converted into JUnit 5 and AssertJ through a series of Refaster rules.
  * For large migrations, the platform team thoroughly prepares, automates and tests the changes, and then rolls them out in a controlled manner, ensuring no one is left behind.
  * Whenever there are multiple ways to do one thing, they build consensus and then automate the change, to ensure everyone is on the same page.
  * As for [their Spring Boot 3 migration](https://docs.openrewrite.org/recipes/java/spring/boot3/springboot3bestpractices), they were able to migrate three million lines of code in just a few weeks through OpenRewrite recipes - with a high level of confidence in the changes.
  * The team at Moderne have since added support for Error Prone Refaster rules to the Moderne Platform, so you can use them in the same way as OpenRewrite recipes.
  * And we saw this in practice when Rick ran a Refaster rule to against [the Apache Hive project](https://hive.apache.org/)'s 21K files in just a couple seconds, and opened [a PR with the changes](https://github.com/apache/hive/pull/5126).
* If you're in Cologne during JCON Europe you can [join Tim and Rick at their shared workshop](https://jconeurope2024.sched.com/event/1Z2tI) on Transforming Code with OpenRewrite and Refaster.

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
  * We wrote a [blog post about using AI in refactoring](https://www.moderne.io/blog/ai-assisted-refactoring-in-the-moderne-platform). One big win was that code written in French would often times have [misencoded special characters that would appear as question marks](https://www.moderne.io/blog/ai-assisted-refactoring-in-the-moderne-platform#toc-2). We were able to use AI to determine what the appropriate character should be for valid French and replace the question mark with said valid character.
  * In a fun community win, Jonathan Leitschuh added the [ability to find constant literal values](https://github.com/openrewrite/rewrite-launchdarkly/commit/f1173512dab1b9ff191fba029be1c41ddd74c684) which can greatly improve turning on feature flags. He also [live streamed the development of this](https://www.twitch.tv/jlleitschuh) while answering questions from the community.
* We then jumped into the main topic for the week: data tables and search recipes:
  * We demonstrated how you can use [search recipes in Moderne](https://app.moderne.io/marketplace/org.openrewrite.java.search) to [find usages of any type you care about](https://app.moderne.io/recipes/org.openrewrite.java.search.FindTypes) (perhaps because you wanted to learn more about it or find some examples to copy).
    * We explained how [Markers](https://docs.openrewrite.org/concepts-explanations/markers) help call out individual elements and how they work in relation to search recipes.
  * We ran and talked through our [Find and fix vulnerable dependencies recipe](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.DependencyVulnerabilityCheck). We also walked through the [data table](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/data-tables) it produced.
    * Using said data table, you can find transitive dependency vulnerabilities many levels deep – complete with CVE numbers and possible fix versions if they're available.
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
