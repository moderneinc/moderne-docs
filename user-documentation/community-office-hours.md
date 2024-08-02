# Code Remix

### Background

Every week we [host a live Code Remix session](https://www.youtube.com/@Moderne-and-OpenRewrite/streams) where we talk about the latest changes that are happening, answer community questions, and teach you more about specific topics.

You can find each of the Code Remix sessions below along with a summary of what was discussed and the key links you might find helpful.

### Recipes that manipulate JSON and YAML (July 31st, 2024)

{% embed url="https://www.youtube.com/watch?v=MRHHGxh4rdU" %}

#### Summary and related links

* Announcements for the week
  * **Releases**:
    * [We did a new full release of OpenRewrite (8.32.0)](https://docs.openrewrite.org/changelog/8-32-0-release). Notable changes include:
      * [Data table exports for Gradle](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v6.17.0)
      * [The Maven plugin can configure a single recipe from command line arguments](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v5.37.0)
      * [A ton of fixes in OpenRewrite itself](https://github.com/openrewrite/rewrite/compare/v8.30.0...v8.32.0)
      * Twelve new contributors across various recipe modules and plugins.
  * **Shoutout**:
    * [Quarkus has joined the Commonhaus foundation](https://quarkus.io/blog/quarkus-moving-to-commonhaus/)
  * **Content**:
    * [One of our friends in the German open-source community wrote up a nice post about their experiences with OpenRewrite](https://www.linkedin.com/feed/update/urn:li:activity:7222539914280595456/)
* [We then jumped over to the main topic for the week (which was a last minute change) - looking over JSON and YAML recipes](https://youtu.be/MRHHGxh4rdU?t=570).
  * We started out by demonstrating [where to find existing YAML recipes](https://app.moderne.io/marketplace/org.openrewrite.yaml).
  * One of the most common things you'll want to do is find certain YAML entries. To assist with that, we provide a [JsonPathMatcher](https://docs.openrewrite.org/reference/jsonpath-and-jsonpathmatcher-reference) that helps with matching and identifying keys.
    * Note that we have our own implementation of JsonPath – and all of the features you may be aware of in other implementations may not be implemented in ours. Feel free to add them, though!
  * Another powerful recipe worth calling out is the [Merge YAML snippet recipe](https://app.moderne.io/recipes/org.openrewrite.yaml.MergeYaml) – which allows you to merge substantial YAML components together.
    * We then took a look at some of the [Merge YAML tests](https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/test/java/org/openrewrite/yaml/MergeYamlTest.java) - which demonstrate some of the functionality. For instance, you can use it to [entirely populate a fresh YAML file](https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/test/java/org/openrewrite/yaml/MergeYamlTest.java#L54-L79) or you can [merge a complex block into an existing YAML document while not overriding existing values](https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/test/java/org/openrewrite/yaml/MergeYamlTest.java#L722-L754). In the latter example, you can see that we identified that `name` is the unique key for the YAML list (`objectIdentifyingProperty`) - so the recipe can know when to add something or not.
  * After that, we took a brief look at the [YAML LST](https://docs.openrewrite.org/concepts-explanations/yaml-lst-examples) – which is much simpler than that Java LST.
  * To go along with that, we then jumped over to review the code for a YAML recipe. Specifically, the [SetupJavaCaching recipe](https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/java/org/openrewrite/github/SetupJavaCaching.java) - which is part of a larger collection of [GitHub action recipes](https://docs.openrewrite.org/recipes/github).
    * You'll notice that the `SetupJavaCaching` recipe is largely implemented through the YAML `FindKey` and `MergeYaml` recipe.
    * One important thing to note is the pattern of "edit-or-add". `MergeYaml` will return a new object rather than updating the existing object. Because of that, you can use referential equality to check if anything has changed after it's run. If nothing changed (i.e., it's referentially the same object as before), then you can add a new key, for instance.
    * Also note that this recipe uses a precondition to limit what source files it runs on.
  * If you're interested in helping out with recipes like this, please reach out. We definitely could use help creating more recipes for things like GitHub CI.

### Enlightening LSTs with traits (July 17th, 2024)

{% embed url="https://www.youtube.com/watch?v=lWy-fRQV9-0" %}

#### Summary and related links

* Announcements for the week:
  * **Content**:
    * We launched a new website with bright new colors and fresh content! Check it out: [https://www.moderne.ai](https://www.moderne.ai/)
    * [We recently related a blog post summarizing the Code Remix session with Jente](https://www.moderne.ai/blog/jente-sondervorst-software-engineer-at-colruyt-moving-code-forward-with-openrewrite-recipes)
  * **Releases**:
    * [We did a new full release of OpenRewrite (8.30.0)](https://docs.openrewrite.org/changelog/8-30-0-release).
      * Notable changes include adding traits to support flexible new use cases with minimal API, 30+ new recipes, and 11 new contributors.
    * There are new recipes to migrate from Gradle Enterprise to Develocity.
    * Rewrite-micrometer now supports `1.13.x` migration
      * Generously contributed by Johannes Jank
    * Rewrite-Quarkus now contains recipes to migrate away from Java EE 7.
    * We upgraded our Gradle wrapper across 40 repositories in under five minutes.
      * Thanks to Shannon for the help with this.
  * **Events**:
    * [We'll be at UberConf in Denver on July 16th-19th](https://uberconf.com/sessions), giving a keynote presentation, a general session, and a workshop.
    * Tim will present at [WeAreDevelopers world conference on July 18th](https://www.wearedevelopers.com/world-congress/program).
* Traits discussion
  * We kicked off this week by giving some background into _why_ we needed to change the OpenRewrite API. 
    * LSTs are, traditionally, a very low-level representation of code. However, there are many use cases where you may want some higher-level semantic constructs, but you have no idea of where those should go. For example, imagine you had a JSON document that represented the customer list at your business. If you were making recipes that operated on this particular kind of JSON document, you may want to have utility methods that would facilitate that. If you added these methods to a random facilities class, they wouldn't be particularly discoverable. Because of that, there's a temptation to put the methods directly onto the classes that represent the LSTs themselves. That poses a problem, though, as we don't want to be continuously expanding the API surface area of these elements. To handle this problem, we have implemented [traits](https://en.wikipedia.org/wiki/Trait_(computer_programming)).
  * We then dove into explaining what is a trait.
    * A trait, in essence, is an interface that has a [cursor](https://docs.openrewrite.org/concepts-explanations/visitors#cursoring) and, inside of the cursor, there is a [tree element](https://docs.openrewrite.org/concepts-explanations/lst-examples#java-lst-types).
  * To help with understanding traits, we took a look at the [Literal Trait](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/trait/Literal.java).
    * The literal trait is either a [J.Literal](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L3271) or a [J.NewArray](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L3271).
    * There are many situations where you'd want to treat these interchangeably even though they are, technically, different elements.
    * Traits typically have a get value method that allow you to get the value of the element regardless of what type is underneath.
    * Traits also tend to have matcher classes which allow you to filter through the LST and match just the parts that match this trait.
  * Next up was talking about the [Namespaced Trait](https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/trait/Namespaced.java)
    * We got some PRs from some helpful members of the community who wanted to add recipes around the concept of namespacing to the XML visitor. However, in the XML LST itself, namespaces aren't any different from any other attribute. Yet, in some domains the namespace of XML document _does_ matter. To support this, people wanted to update the XML element itself – but this is a great example of where traits can be used instead.
  * As part of looking at the above trait, we took a look at some recipes that use it – such as the [HasNamespaceUri recipe](https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/search/HasNamespaceUri.java).
    * This recipe helps you find XML tags that have a certain namespace.
    * If you take a look at the code for this recipe, you can see that it's basically just implemented with the trait itself (using the matchers and visitor provided by the trait).
  * This led into a short discussion of how generative AI might be useful for _creating_ recipes that we can then run with rather than changing the code itself.
  * After that, we took a look at an example where we use traits on a non-search recipe. Specifically, the [ChangeNamespaceValue recipe](https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/ChangeNamespaceValue.java). It's a fairly complex refactoring recipe, but does demonstrate other ways you can use traits.
  * The last bit of code we looked at was the [SpringBean Trait](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/trait/SpringBean.java).
    * This trait crosses the boundaries between two highly different LSTs – an XML document or a Java class.
    * Using traits like this can really help with impact analysis.

### Automating Impact Analysis (July 10th, 2024)

{% embed url="https://www.youtube.com/watch?v=jMxSWB5jJ5M" %}

#### Summary and related links

* Announcements for the week:
  * **Events**:
    * [Jonathan was on another episode of Airhacks.fm where he talked about transforming Java code at scale](https://airhacks.fm/#episode_302).
    * [We'll be at UberConf in Denver on July 16th-19th](https://uberconf.com/sessions), giving a keynote presentation, a general session, and a workshop.
    * Tim will present at [WeAreDevelopers world conference on July 18th](https://www.wearedevelopers.com/world-congress/program).
  * **Releases**:
    * We added incubating trait analysis to OpenRewrite.
      * [https://github.com/openrewrite/rewrite/pull/4309](https://github.com/openrewrite/rewrite/pull/4309)
      * [https://github.com/openrewrite/rewrite/pull/4318](https://github.com/openrewrite/rewrite/pull/4318)
      * [rewrite-spring related update](https://github.com/openrewrite/rewrite-spring/commit/16f82edfb6d8effcefc1c285ab0ca5bc16b1c905)
    * [We also are now publishing our new releases on X](https://x.com/OpenRewrite/status/1809252624304382446?mx=2) (formerly known as Twitter).
  * **Content**:
    * [We recently released a blog post summarizing a previous Code Remix session with Shannon Pamperl](https://www.moderne.io/blog/hear-from-openrewrite-contributor-shannon-pamperl).
  * **Milestone**:
    * [We recently passed 2600 recipes in the Moderne catalog](https://app.moderne.io/marketplace)!
* [We then jumped over to our main topic on automating impact analysis](https://youtu.be/jMxSWB5jJ5M?t=307).
  * When adding new functionality or fixing a bug, it's often times good to think about what the consequences would be. While you _could_ make a change and see who yells at you, it's generally better if you take the time to do your due diligence and figure out what's going to happen. In this talk, we'll go through some recipes that can help you make some informed decisions about your changes.
  * The first recipe we talked about was [find method usages](https://app.moderne.io/recipes/org.openrewrite.java.search.FindMethods) – which will let you know if anyone is using the method. Maybe you'll see it's used in hundreds of places and decide "ehh it's not really worth it". On the other hand, maybe you'll see it's hardly used and you think it's worth it to make the change.
  * Next up was the [find types recipe](https://app.moderne.io/recipes/org.openrewrite.java.search.FindTypes) which is useful if you want to rename a class or make a class-level change. This is particularly useful when you're learning a new API and you want to see how this thing was used in a real way.
  * We then discussed another very common change – updating dependencies. As part of this, we'd recommend using the [Dependency insight for Gradle and Maven recipe](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.DependencyInsight). Using it, you can see whether a particular dependency is in use or not throughout all of your repositories. Going even further, you can [generate a dependency usage visualization](/user-documentation/moderne-platform/how-to-guides/track-migrations.md#viewing-the-visualization) – which is a violin chart that shows what versions exist across everything in one central location.
    * This can be especially beneficial in security situations where you need to quickly know whether or not your repositories are vulnerable or not to a particular CVE.
    * If you do want to go ahead with upgrading versions of a particular dependency, you may find the [Upgrade Gradle or Maven dependency versions recipe](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.UpgradeDependencyVersion) to be useful.
  * After that, we quickly touched on a variety of topics such tracking Maven dependencies, [using data tables](/user-documentation/moderne-platform/getting-started/data-tables.md), [the Moderne DevCenter](/user-documentation/moderne-platform/getting-started/dev-center.md), [seeing what recipes have data tables](https://docs.openrewrite.org/reference/recipes-with-data-tables), etc.
  * Towards the end of our talk, we brought up that you can run all of these recipes locally using the [Moderne Plugin for JetBrains IDEs](/user-documentation/moderne-ide-integration/how-to-guides/moderne-plugin-install.md).
    * [Remember that you can get this for free for a limited time](https://www.moderne.io/moderne-ide-plugin-signup). 

### Interview with Jente Sondervorst (July 3rd, 2024)

{% embed url="https://www.youtube.com/watch?v=LMxnvk1XAwQ" %}

#### Summary and related links

* Announcements for the week:
  * **Releases**:
    * We did a new release of all recipe modules, the Maven and Gradle plugins and the `rewrite-recipe-bom`.
    * You can find the 30+ new recipes in the [8.29.0 changelog](https://docs.openrewrite.org/changelog/8-29-0-release).
    * There were over a dozen new contributors in the past two weeks!
    * [Maven had some notable improvements and fixes](https://github.com/openrewrite/rewrite/releases/tag/v8.29.0).
    * [We also added support for migrating Java Util Logging to SLF4J](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v2.10.0)
    * Furthermore, [we extended support for JMockit to Mockito, and improved Kotlin support](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v2.13.0)
    * [There are also multiple new Java migration recipes](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v2.19.0).
    * For folks using the Moderne CLI, you can upgrade using the command `mod config recipes moderne sync`.
  * **Content**:
    * To help people track data tables, [we've automated a new page which shows all recipes that have unique data tables and what those tables do](https://docs.openrewrite.org/reference/recipes-with-data-tables).
    * There's a new IDE plugin video on [composing a recipe that adds blank lines around fields with annotations](https://youtu.be/WHnJBRzOIEg?si=nGxjaYi4VF0Zl3JT).
      * This neatly shows how we use the IntelliJ plugin to iteratively develop a recipe.
      * [Remember to try out the Moderne IDE plugin](https://www.moderne.io/moderne-ide-plugin-signup)
  * **Events**:
    * [We'll be at UberConf in Denver on July 16th-19th](https://uberconf.com/sessions), giving a keynote presentation, a general session, and a workshop.
    * Tim will present at [WeAreDevelopers world conference on July 18th](https://www.wearedevelopers.com/world-congress/program).
* [We then introduced Jente Sondervorst](https://youtu.be/LMxnvk1XAwQ?t=633). [Jente](https://github.com/Jenson3210) has been a substantial contributor to OpenRewrite where he has both reported and fixed numerous key issues.
  * [Question 1: How did you go from an unfamiliar code base to fixed problems in it so quickly?](https://youtu.be/LMxnvk1XAwQ?t=812)
    * Jente talked about how he attended a workshop from Tim and ran into issues with it and was then inspired to try and fix them. He knows how hard it is running an open-source project and, for things that he particularly cares about, he wants to dive in and try and contribute those back. Although sometimes, he admits, he's a bit over-eager to start off with complex use cases.
  * [Question 2: Do you remember any OpenRewrite concepts that were particularly difficult to learn?](https://youtu.be/LMxnvk1XAwQ?t=1190)
    * Jente mentioned that he had no idea what an LST was before starting to write recipes. He's not someone who looks at a video or reads documentation and understands it. Instead, he dives in and begins experimenting.
    * One of the most important tips Tim gave him was, "Start with the test". This has proven to be incredibly useful with ramping up and learning. 
  * [Question 3: Was the documentation useful to you? Did you reference the documentation? Or did you mostly do your learning inside the debugger?](https://youtu.be/LMxnvk1XAwQ?t=1704)
    * Jente found the documentation quite useful. That being said, he often just tries things even if he really should read the docs first. Other people at his company prefer to read the docs first, though.
  * ["Question 4: Was there anything missing during the learning process? Anything we could have added to improve your experience?](https://youtu.be/LMxnvk1XAwQ?t=1812)
    * Jente reiterated that he didn't have a clue what an LST was - but that what really saved him was the [TreeVisitingPrinter](https://docs.openrewrite.org/concepts-explanations/tree-visiting-printer). That's a tool that allows you to output the whole LST via a simple `System.out.println` call. It helped him wrap his head around what was going on and why.
    * On top of the TreeVisitingPrinter, he also found unit testing and debugging with the CLI to be critical to his success at learning.
  * ["Question 5: If you could wish for one additional thing from OpenRewrite, what would it be?"](https://youtu.be/LMxnvk1XAwQ?t=2618)
    * Jente mentioned that there are a lot of things coming that he already is looking forward to. That being said, he would love if he could migrate his JEE application to a Spring Boot application. That way he could have a uniform framework.
  * [Question 6: Any final thoughts/last things you want to talk about or cool things that you're working on that you want to share?](https://youtu.be/LMxnvk1XAwQ?t=2999)
    * Jente mentioned that he's looking forward to providing even more help to the community. He felt great helping someone with their latest recipe patch and would love to do more of it. It's a difficult game of trying to beat Tim, though. He thinks we should make sure to send Tim on holiday a bit more frequently.

### Overview of third party recipe libraries (June 26th, 2024)

{% embed url="https://www.youtube.com/watch?v=kdqdC6C5UA4" %}

#### Summary and related links

* Announcements for the week:
  * **Development**:
    * [Alex Boyko squashed a number of issues related to bind-api](https://github.com/openrewrite/rewrite/issues/4283#issuecomment-2186741820), preventing unnecessary dependencies from being added as part of a migration. Thanks so much!
  * **Promotion**:
    * We continue our time limited promotion of the Moderne IntelliJ plugin & CLI. If you want to try it out, [fill out our form](https://bit.ly/ModerneIDEplugin).
    * You can now also book time with our experts Sam & Tim to get started quickly with the CLI on your projects.
  * **Content**:
    * [Tim's talk on weeding your Micro Service Landscape is available on YouTube](https://www.youtube.com/watch?v=BZdkiLEDx5Q).
    * Sam's recent NoFluff Just Stuff Webinars on migration engineering with OpenRewrite are now also available. [(Part 1)](https://www.youtube.com/watch?v=gMVTtCLICVU) [(Part 2)](https://www.youtube.com/watch?v=YVgUoisDKWY)
    * [We released a new video on streamlining the cloud migration process with Moderne](https://www.youtube.com/watch?v=klGDVPAWzRE).
    * [We also have a video about improving your tech architecture](https://www.youtube.com/watch?v=jhzJHqYiUiA).
  * **Events**:
    * [We'll be at UberConf in Denver on July 16th-19th](https://uberconf.com/sessions), giving a keynote presentation, a general session, and a workshop.
    * Tim will present at [WeAreDevelopers world conference on July 18th](https://www.wearedevelopers.com/world-congress/program).
* [We then jumped over to our main topic for the week: an overview of third party recipe libraries](https://youtu.be/kdqdC6C5UA4?t=408).
  * [We started off talking about external recipes that were then adopted by OpenRewrite](https://youtu.be/kdqdC6C5UA4?t=488). These include [cucumber-jvm](https://github.com/openrewrite/rewrite-cucumber-jvm), [testcontainers](https://github.com/openrewrite/rewrite-testing-frameworks/tree/main/src/main/java/org/openrewrite/java/testing/testcontainers), and [rewrite-jenkins](https://github.com/openrewrite/rewrite-jenkins/).
    * The process for OpenRewrite adopting recipes is largely informal. Please reach out to us in Slack if you have any questions on this.
  * [Next up was talking through recipes that we've contributed to external projects that they then maintain](https://youtu.be/kdqdC6C5UA4?t=816).
    * One example of this is in the [AxonFramework](https://github.com/AxonFramework/AxonFramework/tree/master/migration) where Tim saw they had a bunch of manual steps that he felt he could easily automate. He did so and contributed back to their project – which they were super grateful for. Since then, they've maintained this and worked with Tim to adjust their recipes as they update their project.
    * Another example of this is [Apache Wicket](https://github.com/apache/wicket/tree/master/wicket-migration). This is also included in the [rewrite-third-party library](https://github.com/openrewrite/rewrite-third-party) for your convenience.
  * [We then went over a few other third-party recipes that have been integrated into the rewrite-third-party library](https://youtu.be/kdqdC6C5UA4?t=1178).
    * These include: [TimeFold](https://docs.timefold.ai/timefold-solver/latest/upgrade-and-migration/migrate-from-optaplanner), [Quarkus](https://github.com/quarkusio/quarkus-updates), and [Morphia](https://github.com/MorphiaOrg/morphia/blob/master/upgrading/UpgradeTo30.yml).
  * [After that, we went through some third-party recipes that _haven't_ been integrated](https://youtu.be/kdqdC6C5UA4?t=1455) - that we discovered via people posting in our community Slack. If you have any recipes you're working on, please let us know there, too!
    * We talked through: [Azure Spring Rewrite](https://github.com/Azure/azure-spring-rewrite), [AWS SDK for Java v2](https://github.com/aws/aws-sdk-java-v2/tree/feature/master/migration-tool/migration-tool), [Redhat's WindUp migrations to Quarkus](https://github.com/windup/windup-rulesets/blob/f02cd0fe1f2400e906446cc7b20c13b02b598eaf/rules/rules-reviewed/openrewrite/jakarta/javax/imports/rewrite.yml), and [Gradle Enterprise to Develocity](https://github.com/jean-andre-gauthier/gradle-enterprise-to-develocity-recipe).
  * [Next was talking through a larger migration effort taking place that we want to eventually integrate back into OpenRewrite](https://youtu.be/kdqdC6C5UA4?t=1773)
    * Specifically, there's work on migrating from [TestNG to JUnit 5](https://github.com/Philzen/rewrite-TestNG-to-JUnit5) and [TestNG to Jupiter](https://github.com/MBoegers/migrate-testngtojupiter-rewrite/).
  * [Lastly, we highlighted an issue where we're tracking all known third-party recipes]()
    * [List of third-party recipes](https://github.com/openrewrite/rewrite-docs/issues/131)

### An in-depth look at the Moderne CLI (June 19th, 2024)

{% embed url="https://www.youtube.com/watch?v=ZHXqYhaB71k" %}

#### Summary and related links

* Announcements for the week:
  * **Releases**:
    * We did a new release of all recipe modules, the Maven and Gradle plugins and the `rewrite-recipe-bom`.
      * Get all aligned versions through https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v2.13.2
      * `rewrite-logging-frameworks` now allows you to [move from Java util logging (JUL) to SLF4J](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v2.9.1).
      * `rewrite-testing-frameworks` now [migrates additional Hamcrest matchers to AssertJ](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v2.12.0), along with assorted fixes.
      * `rewrite-third-party` requires Java 17, due to the inclusion of Java 17 recipes from external sources.
    * We also did a new release of the Moderne IntelliJ plugin: v0.6.0
      * https://plugins.jetbrains.com/plugin/17565-moderne
    * As well as a new release of the Moderne CLI: v3.9.2
      * https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro
  * **Content**:
    * We put out [the June Moderne news letter](https://www.linkedin.com/pulse/summer-heating-up-moderne-moderneinc-1442c/?), showing all that's new over the past month, and suggestion of what recipes to run over the summer.
    * Our [new video on tech stack liquidity](https://www.youtube.com/watch?v=3xY8ht5GFls) shows how you can consolidate from a variety of tech stacks to a single one, showcased through our AssertJ migration recipes.
    * A new blog takes you through [our new recipe builder](https://www.moderne.io/blog/moderne-engineering-building-the-openrewrite-recipe-builder), showing both the functionality available to you, and the process we took to get there.
      * [Use this new builder](https://app.moderne.io/builder) to quickly visualize existing recipes, and customize or extend them to your needs.
  * **Events**:
    * [We'll be at UberConf in Denver on July 16th-19th](https://uberconf.com/sessions), giving a keynote presentation, a general session, and a workshop.
    * Tim will present at [WeAreDevelopers world conference on July 18th](https://www.wearedevelopers.com/world-congress/program).
  * **Promotion**:
    * We continue our time limited promotion of the Moderne IntelliJ plugin & CLI. If you want to try it out, [fill out our form](https://bit.ly/ModerneIDEplugin).
    * You can now also book time with our experts Sam & Tim to get started quickly with the CLI on your projects.

* From there we switched to the main topic for this week: An in-depth look at using the Moderne CLI.
  * We explained how the CLI is aimed at developers who want to run recipes across multiple repositories, and how it complements the Moderne IntelliJ plugin.
  * As a first step, you can use the CLI to discover git repositories, and execute a `mod git pull ./` across all of them.
    * This is great for when you're getting back to a group of repositories after some time, pulling in all the latest changes at once.
  * From there, you might want to prepare to run recipes across all of those repositories, for which you can use the `mod build ./` command.
    * This command will build all the repositories in the current directory, and create a `.moderne` directory with the LSTs of all the repositories.
    * Or alternatively, you can download the LSTs from artifactory, when those are built for you on a schedule.
  * Once you've acquired the LSTs, you'll want to find a recipe to execute, from your local copy of the recipe catalog.
    * There's a `mod config recipes search` option to help you find and select recipes to run.
    * A helpful shorthand is offered in the form of an active recipe, which you can also set from your IDE.
  * After selecting a recipe, you can run the recipe across all repositories, or a selection, using the `mod run` command.
    * `--help` and tab-completion are available to see how you can narrow down which repositories to run the recipe on.
    * When running a recipe, you'll notice changes are produced to a patch file, not directly written out to the repository.
    * This allows you to review the changes before committing them, and to run additional recipes in parallel.
  * Once you're satisfied with the changes, you can commit the results to a branch, and push them to the remote repository.
    * There are familiar git sub commands available to you for git operations across repositories.
    * The `--last-recipe-run` option allows you to only execute git commands against projects that were affected by the last recipe run.
  * Next we showed how the CLI can be used to gather insights across repositories, by running a recipe that produces a data table.
    * We ran a [recipe to find and fix vulnerable dependencies](https://docs.openrewrite.org/recipes/java/dependencies/dependencyvulnerabilitycheck), which analyzes all your direct and transitive dependencies.
    * The dependency versions you're using are cross-referenced against [the GitHub Advisories database](https://docs.github.com/en/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/about-the-github-advisory-database), to find the vulnerabilities that might affect you.
    * We explain how the recipe only confidently makes changes for `.patch` versions, following [the Semantic versioning convention](https://semver.org/).
      * We're able to not just bump direct dependencies, but also transitive dependencies, with respective solutions for Maven and Gradle.
      * This is in contrast to other tools, which typically only handle direct dependencies, and lack insight into transitive dependencies.
      * That means a lot of vulnerabilities might otherwise go unnoticed, and unpatched.
    * Yet, even when the recipe does not produce code changes, we can still give you insight into additional vulnerabilities.
      * For that, we ran the suggested `mod study` to produce an Excel file showing exactly which dependencies are vulnerable.
      * This can be used to inform your team, and to prioritize your next steps based on severity, and mitigation options available to you.
    * Having these insights across repositories, and the tools to affect changes at scale, means you're in great shape when a new distruptive vulnerability might appear.
  * Next Sam demoed how you can run a recipe using the CLI, to then attach a debugger in IntelliJ.
    * This allows you to step through existing recipes, to better understand where they match, and what changes they produce.
    * We use this frequently to help harden our recipes, as there's always more variability in practice than you had thought of in advance in your unit tests.
  * Wrapping up we shared [the form to get access to the Moderne CLI and IntelliJ plugin](https://bit.ly/ModerneIDEplugin), such that you can make this part of your every day development.
 

### Data flow analysis & recipe authoring best practices (June 12th, 2024)

{% embed url="https://www.youtube.com/watch?v=6_w6gx7GPII" %}

#### Summary and related links

* [Announcements for the week](https://youtu.be/6_w6gx7GPII?t=123)
  * **Releases**:
    * [We did a new release of OpenRewrite last week](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v2.12.0). There were a variety of bug fixes and additions so don't forget to grab the latest version.
    * [We also expanded our recipe catalog to include more recipes](https://docs.openrewrite.org/recipes). We now show third-party recipes coming from Picnic, AxonFramework, Apache Wicket, TimeFold and Quarkus.
  * **Moderne IntelliJ plugin**:
    * As a reminder, [we are continuing to offer a free CLI license](https://share.hsforms.com/1cfEbSpZNT8enCckPXmdlmwblnxg) to use with the Moderne IntelliJ plugin. This license is good until July 31st. After that date, you won't have access to serialized LSTs – but you can still operate across repositories for the other commands included with the CLI.
  * **Events**:
    * [We will be at UberConf in Denver on July 16th-19th](https://uberconf.com/sessions). We'll be giving a keynote presentation, a general session, and a workshop. If you're there, come by and say hi!
    * [At the same time, Tim will be at the WeAreDevelopers world conference on July 18th](https://www.wearedevelopers.com/world-congress/program).
  * **Content**:
    * [We released a new video about recruiting and retaining top tech talent](https://www.youtube.com/watch?v=D_2HT2n_3PM).
    * [Tim's session from Spring I/O is also available to watch](https://www.youtube.com/watch?v=KlQZH6WHa2c)
    * [The workshop that Tim gave on creating recipes is also available in our docs](https://docs.moderne.io/user-documentation/workshops/recipe-authoring).
* [We then began our main discussion for the week – recipe authoring best practices](https://youtu.be/6_w6gx7GPII?t=492)
  * [We've created a detailed doc about recipe conventions and best practices that covers a lot of the points being discussed in this session](https://docs.openrewrite.org/authoring-recipes/recipe-conventions-and-best-practices).
  * Sam began by talking about a common mistake people make when first creating recipes – [not making them idempotent and immutable](https://docs.openrewrite.org/authoring-recipes/recipe-conventions-and-best-practices#recipes-must-be-idempotent-and-immutable). What this means is that if a recipe is given the same LST and configuration, it should _always_ produce the same result. To go along with that, a recipe's behaviour _should not_ be influenced by LSTs which have been visited previously.
    * If you do need to make a recipe that gathers data from other LSTs, you need to ensure it's a [ScanningRecipe](https://docs.openrewrite.org/concepts-explanations/recipes#scanning-recipes).
  * To go along with the above point, [Sam also called out that the LSTs themselves should not be changed directly](https://docs.openrewrite.org/authoring-recipes/recipe-conventions-and-best-practices#recipes-must-not-mutate-lsts). People will often accidentally do this when an LST element has a collection as the collection itself is not forced to be immutable at run time.
  * [As part of ensuring other people follow these best practices, Sam created a new recipe that uses data flow analysis](https://youtu.be/6_w6gx7GPII?t=818).
    * [NoCollectionMutation recipe](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/NoCollectionMutation.java)
    * [NoCollectionMutation tests](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/NoCollectionMutationTest.java) 
    * The recipe depends on the functionality added in [rewrite-analysis](https://github.com/openrewrite/rewrite-analysis).
  * [During the discussion of said recipe, a community member asked a pertinent question on mutating markers](https://youtu.be/6_w6gx7GPII?t=1056). Markers are optional metadata attached to an LST element - the question was, effectively, what if you use the `Markers.add()` method? Will that not cause problems because you're modifying a collection?
    * The answer is that this is fine because the [`Markers.add()` method](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/Markers.java#L76-L85) is aware of referential equality and performs a defensive copy of the collection. If that method updated the original `markers` collection instead, then there would have been problems.
  * [We then jumped back to discussing the best-practice recipe](https://youtu.be/6_w6gx7GPII?t=1152)
    * As with all recipes, it's good to start off by reducing the scope of the recipe. In this case, we want this recipe to only be concerned with _methods_ in a class (type) that extends from `org.openrewrite.Tree` (the root of the LST type hierarchy). Furthermore, we want to only do something if the method returns a `java.util.List`, as that is the pattern most people mess up.
    * Sam then explained more about data flow analysis – how to add it to your project, what are "sources" and "sinks", etc.
    * The recipe tries to ensure that a defensive copy was made when working with said collections.
    * Sam then went on to explain some limitations with data flow analysis, such as the fact that this only does _local_ data flow analysis (so if you depend on something else, it won't be detected by this recipe). 
 
### Debugging recipes on real code (June 5th, 2024)

{% embed url="https://www.youtube.com/watch?v=lNLo6i7SVGI" %}

#### Summary and related links

* [Announcements for the week](https://youtu.be/lNLo6i7SVGI?t=28)
  * **Events**:
    * Sam will be doing [another sessions of his fundamentals of migration engineering webinar](https://nofluffjuststuff.com/webinar/116/migration_engineering_w_openrewrite) as the last one was accidentally not recorded.
    * On top of that, Sam will also be giving a webinar about [the fundamentals of migration engineering 2](https://nofluffjuststuff.com/webinar/117/migration_engineering_w_openrewrite_ii) on June 7th – a follow-up to the previous webinar.
  * **Content**:
    * [We released a blog post about the Moderne IDE plugin](https://www.moderne.io/blog/introducing-the-moderne-ide-plugin-for-jetbrains-intellij-idea). This covers a lot of what we discussed in the last office hours.
* [We then jumped over to the main topic for the week – debugging recipes](https://youtu.be/lNLo6i7SVGI?t=264).
  * Sam gave some brief background on Moderne and how, as a recipe author, it's incredibly beneficial to use Moderne to find examples of similar recipes.
  * [He then jumped over to the first debugging example – improperly setting up the classpath of a Java Template](https://youtu.be/lNLo6i7SVGI?t=422). You may see this as "missing or malformed type information" when you try to run tests.
    * As part of finding examples of this, we used the [Find method usages recipe](https://app.moderne.io/recipes/org.openrewrite.java.search.FindMethods)
    * Using that recipe, we came to the [RemoveTryCatchFailBlocks recipe](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/RemoveTryCatchFailBlocks.java) and demonstrated breaking this by [commenting out the classpath line](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/RemoveTryCatchFailBlocks.java#L118-L127) – which is a common thing many new recipe authors miss.
    * By commenting out that classpath and running the tests, we are told that the "LST contains missing or invalid type information". If you executed just this recipe in this state, you would likely end up with text that _is_ totally valid. However, the code that is produced by this recipe wouldn't be typed – so any additional recipes wouldn't actually know how to handle the code. Typing is one of the core foundations of OpenRewrite recipes – without it you wouldn't be able to actually search for or replace code with confidence.
    * To fix an error like this, 90% of the time, you'll want to go to the [JavaTemplate](https://docs.openrewrite.org/concepts-explanations/javatemplate) and specify the JAR that will provide the types for the code you're building with said template.
    * Keep in mind that if the class you're providing in the template extends or implements another type, you will _also_ need to include that in your classpath resources.
  * To help expand on the previous discussion, Sam [explained more about JavaTemplates](https://youtu.be/lNLo6i7SVGI?t=1192).
    * You provide the template a snippet of code, a [cursor](https://docs.openrewrite.org/concepts-explanations/visitors#cursoring) (the context of where said code should go), and import statements required for the code to work. It takes all of that and parses it into a full LST. It then copies over just the parts necessary for the template and puts that where you've specified.
    * If you are struggling with JavaTemplates, we provide a `doBeforeParseTemplate` function that will assist in debugging. It takes in a lambda that receives, as an argument, the full Java source file that's built from the template. Sam demonstrated how to use this method and extract out said source file into its own scratch file so that you can see what's really going on.
    * Once you have this file, you can check if it's a valid Java source file. If it's not, you know something went wrong.
  * With that context provided, [we jumped back to discussing classpathFromResources](https://youtu.be/lNLo6i7SVGI?t=1505).
    * You can find these resources in the `src/main/resources/META-INF/rewrite/classpath` directory. This is a place where you can put JARs that will be bundled in with the recipe module. They can then be loaded up for use in your recipes with this `classpathFromResources` mechanism.
  * [We then wrapped up this topic by providing instructions for how to turn off type checking in tests](https://youtu.be/lNLo6i7SVGI?t=1787). This is not generally recommended, but can be useful if you're confident the recipe is doing what you want and you aren't worried about stringing it together with other recipes. 
  * The next topic was about [debugging a recipe on real code](https://youtu.be/lNLo6i7SVGI?t=1991).
    * We started by running the [Replace fail() in try-catch blocks recipe](https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.RemoveTryCatchFailBlocks) to look for examples we could use to debug on.
      * Sam found an example in the [Netflix/mantis repository](https://github.com/Netflix/mantis) so he cloned that and built it locally
    * To go along with this, [Sam demonstrated how to add the OpenRewrite build plugins to a project](https://youtu.be/lNLo6i7SVGI?t=2215) so that you can use them to debug a recipe.
    * [He then walked through setting up a debugger in IntelliJ IDEA and adding breakpoints that you can start from](https://youtu.be/lNLo6i7SVGI?t=2545).
    * While the project was building, Sam mentioned that one of the downsides of using the OpenRewrite plugins instead of the CLI is that the plugins have to parse all the code every time rather than serializing the code to disk so it can be re-used. For more information about this, check out [our summary of the differences between the two](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro#differences-between-the-moderne-cli-and-the-openrewrite-build-plugins).
    * Next up was [utilizing the debugger to look into what is happening](https://youtu.be/lNLo6i7SVGI?t=2930).
      * Sam demonstrated how to use the cursor to figure out where you are when you're debugging a recipe. 
  * We ran out of time towards the end, but [Sam briefly described the steps needed to use the Moderne CLI to debug a recipe](https://youtu.be/lNLo6i7SVGI?t=3328).

### Moderne IDE plugin onboarding (May 29th, 2024)

{% embed url="https://www.youtube.com/watch?v=egf5Q3fb6W0" %}

#### Summary and related links

* [Announcements for the week](https://youtu.be/egf5Q3fb6W0?t=30)
  * **Events**:
    * Tim will be at [Spring I/O in Barcelona from May 30th - 31st](https://2024.springio.net/sessions/automated-software-refactoring-with-openrewrite-and-generative-ai/). He'll be giving a talk and an interactive workshop there. If you want to check out the workshop for yourself ahead of time, you can find it [in our docs right now](https://docs.moderne.io/user-documentation/workshops/recipe-authoring).
    * Tim also will be at [JNation.pt on June 5th to give a workshop on recipe authorship](https://jnation.pt/workshops/)
    * Sam will be [hosting a No-fluff-just-stuff webinar on the fundamental of migration engineering on Friday, May 31st](https://nofluffjuststuff.com/webinar/116/migration_engineering_w_openrewrite).
  * **Content**:
    * If you prefer reading to watching, [we released a blog post about the Moderne IDE plugin](https://www.moderne.io/blog/introducing-the-moderne-ide-plugin-for-jetbrains-intellij-idea) this week that covers a lot of what we'll discuss in this office hours.
    * We also created a bunch of developer-focused docs about the [Moderne IDE plugin that are focused on installing, configuring, and using the plugin](/user-documentation/moderne-ide-integration/moderne-plugin-for-jetbrains-ides/README.md).
    * Or, if you'd prefer a shorter, sharable video – check out our [new video introducing the Moderne IDE plugin](https://www.youtube.com/watch?v=cMIDGM92ays).
  * [After the announcements, we began our discussion with Jonathan about the Moderne IDE plugin](https://youtu.be/egf5Q3fb6W0?t=163).
    * Jonathan began by giving some background on what Moderne's goals are and how we've got to where we are.
      * He mentioned that people start to get excited about the tool when they can begin to execute recipes on _multiple_ repositories. This is especially noticeable if company's set up the [Moderne Platform](/introduction.md#the-moderne-platform) and the [Moderne DevCenter](/user-documentation/moderne-platform/getting-started/dev-center.md). However, as a developer, you aren't coding in a browser, so we wanted to help bring these "wow" moments down to where developers work – in IDEs.
    * After giving some context, [Jonathan then demonstrated how to install and configure the Moderne IDE plugin](https://youtu.be/egf5Q3fb6W0?t=405).
      * Behind the scenes the Moderne plugin uses the [Moderne CLI](/user-documentation/moderne-cli/getting-started/cli-intro.md).
      * "Multi-repos" will detect what the Moderne CLI is connected to to pull a list of organizations that you can run recipes against.
    * He then demonstrated how if you specify an organization, it will do a meta-data only clone of all of the repositories to your local machine.
      * Meta-data only effectively just creates the directory structure – but does not pull down the code. This is much quicker than cloning everything. 
    * [We then jumped into discussing what you can actually _do_ with the plugin](https://youtu.be/egf5Q3fb6W0?t=675).
      * The first example began by talking about "Usages" in IntelliJ – which developers will often use to try and find code in their projects. Unfortunately, it's limited to only the repository you have open. The Moderne plugin, however, adds a new menu item that lets you find usages across _all_ of the repositories you configured earlier.
      * This is particularly cool because the results from that find usages search will not only quickly get you type-accurate results - but they will also let you look at code in files that _don't even exist on your machine_.
    * To take it a bit further, we then [discussed how you can use the plugin to create your own recipes](https://youtu.be/egf5Q3fb6W0?t=826).
      * You can then modify the generated recipe to meet your needs and run it against all of your repositories – all without leaving the IDE.
      * We also discussed the different types of recipes you can create (search vs. refactor) and how we hope to add support for actually committing the refactor recipe results from the plugin.
    * We then answered a community question of, ["How can you use this plugin if you don't have a Moderne tenant with LSTs set up?"](https://youtu.be/egf5Q3fb6W0?t=1145)
      * When you select "Multi-repos" – you can also select a local folder to use. You will need to use the Moderne CLI to `mod build` the repositories in said directory before the plugin will work, though. After you build them, it will behave the same way as if you specified a Moderne organization.
        * You may want to use this feature of the plugin even if you have a tenant set up as it lets you more easily specify a group of repositories to run on (presuming the group you care about is not already in the tenant).
    * Next up was [talking about where we go from here with the plugin](https://youtu.be/egf5Q3fb6W0?t=1253).
      * Things we're thinking about include: allowing people to mass commit, add mass debugging capabilities, and detecting business priority recipes (such as upgrading to Java 21) and providing intention actions in IntelliJ that warn when some piece of code needs to be updated (it could even fix the code for you).
    * We then briefly jumped back into the plugin to [demonstrate that it's not just limited to Java code](https://youtu.be/egf5Q3fb6W0?t=1665).
      * Jonathan demonstrated how you can use the plugin to find all the `pull_request` YAML tags. This search doesn't just look for the text `pull_request` - it's actually looking for the exact YAML structure of "on" "pull_request". 
      * To go along with that, you can also make recipes that will modify and intelligently update these YAML files.
    * After that, [we announced that we're going to be offering a free, time-limited license for the Moderne CLI so that developers can try this out for themselves](https://youtu.be/egf5Q3fb6W0?t=2122).
      * To get the free license, [please fill out our signup form](https://share.hsforms.com/1cfEbSpZNT8enCckPXmdlmwblnxg).
      * The Moderne IDE plugin is [available directly from IntelliJ](https://plugins.jetbrains.com/plugin/17565-moderne?noRedirect=true).
      * We'd love feedback and suggestions from you!
    * Lastly, we [jumped into smaller discussions about the future](https://youtu.be/egf5Q3fb6W0?t=2216). This included talking about things we could do to improve the developer experience, demonstrating visitor based recipes, discussing how the plugin could be used to create unit tests in the future, highlighting what a data table is and how the plugin could potentially generate those using IntelliJ's data view.

### OSS contributor conversation with DeShaun Carter (May 22nd, 2024)

{% embed url="https://www.youtube.com/watch?v=UyB12RbUPUI" %}

#### Summary and related links

* [Announcements for the week](https://youtu.be/UyB12RbUPUI?t=27):
  * **Cool milestone**:
    * There are now over 2,500 recipes available in the Moderne Platform! 🎉
  * **Events**:
    * Tim will be at [Spring I/O in Barcelona from May 30th - 31st](https://2024.springio.net/sessions/automated-software-refactoring-with-openrewrite-and-generative-ai/). He'll be giving a talk and an interactive workshop there. If you want to check out the workshop for yourself ahead of time, you can find it [in our docs right now](https://docs.moderne.io/user-documentation/workshops/recipe-authoring).
  * **Content**:
    * We recently released a video about [how to fix security vulnerabilities across your entire codebase quickly with Moderne](https://www.youtube.com/watch?v=g97-2br6pug)
  * **Releases**:
    * Spring Boot is doing a release this week. Fortunately, we have you covered with recipes already available to help with migration.
    * We also [released OpenRewrite 8.27.1 along with many new recipes](https://docs.openrewrite.org/changelog/8-27-1-release) (many of which help with the new Spring Boot release).
* [We then welcomed DaShaun Carter to the office hours](https://youtu.be/UyB12RbUPUI?t=263):
  * DaShaun is a developer advocate who is heavily involved in the community and has given numerous talks about OpenRewrite.
  * He started off by giving some context into the talks he's given and why he's doing it. It was exciting to see that it's had a recursive effect where people he's taught then go on to teach others and give their own presentations.
  * [We then asked him to talk about his experience developing recipes](https://youtu.be/UyB12RbUPUI?t=897). He mentioned that he originally started by encouraging people to start with the simplest and easiest recipes first – but now he has seen the benefit of people starting with substantial migrations first as it makes it clear to the team and organization what the benefits of OpenRewrite are.
  * [The next question was about what type of feedback DaShaun has received](https://youtu.be/UyB12RbUPUI?t=1128). He mentioned that he asks teams to measure what percent of their portfolio they were able to fully automate and upgrade with recipes. At the low end, it was 15% of projects – at the high end, it was 70%!
  * One cool thing DaShaun called out was that, unlike other tools that require many experts across many teams (e.g., Kubernetes), OpenRewrite really only needs two or three strong engineers to write recipes that work across the whole company.
  * [The next topic was about people using technology to further their careers](https://youtu.be/UyB12RbUPUI?t=1335). Sam and DaShaun talked about how they've seen engineers have a lot of success at making a bet on key tools (such as OpenRewrite) as a way to propel their career forward by owning substantial changes that nobody else wants to do.
  * [We then talked about shifting the burden of dealing with breaking changes from consumers to maintainers – and how we can help spur that along](https://youtu.be/UyB12RbUPUI?t=1627). DaShaun mentioned that he thinks momentum is building for this and that people telling their stories about their upgrades will help this along. Sam mentioned that even a few years ago people were skeptical that OpenRewrite was even possible – and now people believe and are wanting it to do more and more.
  * [This led into a discussion about skepticism and the excuses people try and give without realizing it's a "them" problem rather than a "gotcha"](https://youtu.be/UyB12RbUPUI?t=1977). Yes, there will be some parts that aren't automatically fixed – but that's no excuse to not work towards upgrading. DaShaun mentioned that one question he likes to ask is, "If your shareholders knew what version of Java you were on, would they be happy or not?" This led into discussing why it's so important to get to the latest versions of tools and how much money and time can be saved by doing so.
  * [The last main discussion point was about the shift we've noticed in upgrading tools](https://youtu.be/UyB12RbUPUI?t=2442). Sam mentioned that at one point in his career he manually updated Checkstyle across thousands of files, and it was incredibly impractical and took such a ridiculous amount of time that he vowed to never do such a migration again. Yet, with the current state of OpenRewrite and his knowledge of recipe authorship, it wouldn't be too bad to do such a migration again.

### OpenRewrite parsers (May 15th, 2024)

{% embed url="https://www.youtube.com/watch?v=svNf6qHUYXA" %}

#### Summary and related links

* [Announcements for the week](https://youtu.be/svNf6qHUYXA?t=31):
  * **Events**:
    * Tim will be at [Spring I/O in Barcelona from May 30th - 31st](https://2024.springio.net/sessions/automated-software-refactoring-with-openrewrite-and-generative-ai/). He'll be giving a talk and an interactive workshop there.
    * Sam will be giving [a webinar about OpenRewrite fundamentals on May 31st at NFJS 2024](https://nofluffjuststuff.com/webinar/116/migration_engineering_w_openrewrite). There will be a second part the following week about writing custom recipes using OpenRewrite. If you want to learn how to write your own recipes, definitely consider checking that out!
  * **Content**:
    * We've released the [latest Moderne monthly newsletter](https://www.linkedin.com/pulse/its-mai-moderne-moderneinc-hqxhc/). It's a high-level summary of key events, talks, presentations, etc. Consider subscribing if you haven't already.
* [OpenRewrite parsers](https://youtu.be/svNf6qHUYXA?t=180):
  * There are two types of parsers in OpenRewrite: parsers we build around an existing language compiler and there are parsers that we build around an [ANTLR grammar](https://www.antlr.org/).
  * We began by discussing the [Java parser](https://youtu.be/svNf6qHUYXA?t=242) (which is based on an existing language compiler) and how we interact with the Java compiler to map objects to our [Lossless Semantic Tree](/administrator-documentation/moderne-platform/references/concepts/lossless-semantic-trees.md).
  * We then stepped through the [ReloadableJava17Parser](https://github.com/openrewrite/rewrite/blob/main/rewrite-java-17/src/main/java/org/openrewrite/java/isolated/ReloadableJava17Parser.java) and explained some key parts of the parser.
  * While stepping through the parser, we also jumped into the [ReloadableJava17ParserVisitor](https://github.com/openrewrite/rewrite/blob/main/rewrite-java-17/src/main/java/org/openrewrite/java/isolated/ReloadableJava17ParserVisitor.java) and talked through why it's a bit different from the traditional visitor you may be used to.
  * A lot of what goes on in the parser is taking the Java compiler's [abstract syntax tree (AST)](https://en.wikipedia.org/wiki/Abstract_syntax_tree) and the raw textual representation of the source file, and traversing through both in tandem to match up white space from the raw source file to the structured objects the Java compiler gives us. That then lets us produce the LST that has both of those pieces married together.
  * To help with stepping through the code and figuring out where in the String we're currently reading from, we use a [cursor object](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/Cursor.java).
  * Next up was talking about type attribution. OpenRewrite has its [own representation of Java types](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/JavaType.java). To get from a Java representation of a type to the OpenRewrite representation of a type, we've created the [ReloadableJava17TypeMapping](https://github.com/openrewrite/rewrite/blob/main/rewrite-java-17/src/main/java/org/openrewrite/java/isolated/ReloadableJava17TypeMapping.java).
  * For testing types, we've created a [JavaTypeGoat class](https://github.com/openrewrite/rewrite/blob/main/rewrite-java-test/src/main/java/org/openrewrite/java/JavaTypeGoat.java). The purpose of this class is to test all of the strange things that go on with typing and make sure we have a sort of all-encompassing class that can test the edge-cases or things you wouldn't normally see.
  * We then jumped over to talking about [parsers that are based on ANTLR grammars](https://youtu.be/svNf6qHUYXA?t=1308) and what the pros/cons of that are compared to a parser based on an existing compiler.
  * As part of demonstrating these types of parsers, we took a look at the [JSON ANTLR files](https://github.com/openrewrite/rewrite/tree/main/rewrite-json/src/main/antlr) and demonstrated how you can test input to see if it matches said grammar.
  * We then looked over what all is generated by ANTLR and how we [translate the generated code to OpenRewrite classes](https://github.com/openrewrite/rewrite/blob/main/rewrite-json/src/main/java/org/openrewrite/json/internal/JsonParserVisitor.java). Similar to before, we use cursors to keep everything aligned as we ensure white space is included.
  * We wrapped up the talk by [taking a brief look at some of the other parsers and compilers](https://youtu.be/svNf6qHUYXA?t=1843) and discussing what the difficulties were with each – including a hint at the upcoming C# parser.

### Weeding your microservice landscape (May 8th, 2024)

{% embed url="https://www.youtube.com/watch?v=sGBxLC5j1Oc" %}

#### Summary and related links

* Announcements for the week:
  * **Releases**:
    * We've done a new full release of `rewrite` and the `rewrite-recipe-bom`. For a full list of changes, check out our [changelog over on the OpenRewrite docs](https://docs.openrewrite.org/changelog/8-25-0-release).
      * It's really exciting to see so many new contributors to OpenRewrite. For [rewrite-spring](https://github.com/openrewrite/rewrite-spring), every commit in the past few weeks has been from a new contributor! One notable addition is an explicit [Spring Framework 6 migration recipe](https://docs.openrewrite.org/recipes/java/spring/framework/upgradespringframework_6_0) added by [@pativa](https://github.com/pativa).
      * With the latest versions of the build plugins, you'll now get a report on how much time you've saved from running a recipe.
      * You'll also find that if you slightly misspell a recipe name that you'll get a hint about what you may have meant instead. This should help improve the debugging experience.
      * We've created a [doc explaining how to use data tables with the Maven plugin](https://docs.openrewrite.org/running-recipes/data-tables). Keep in mind this is fairly limited, and you'll need to use [Moderne](https://docs.moderne.io/) to get the full benefit of data tables.
      * We've added a new recipe module this week - [rewrite-jackson](https://github.com/openrewrite/rewrite-jackson). As part of that, we added [a recipe to help you migrate from Jackson Codehaus to Jackson FasterXML](https://github.com/openrewrite/rewrite-jackson/blob/main/src/main/resources/META-INF/rewrite/codehaus-to-fasterxml.yml).
  * **Events**:
    * Tim will be at [JCON Europe from May 13th - 16th](https://jconeurope2024.sched.com/). He will be giving a talk on [Transforming Code with OpenRewrite and Refaster](https://jconeurope2024.sched.com/event/1Z2tI/transforming-code-with-openrewrite-and-refaster) and [Weeding your Micro Service Landscape](https://jconeurope2024.sched.com/event/1YwSG/weeding-your-micro-service-landscape).
    * We'll be at [Spring I/O in Barcelona from May 30th - 31st](https://2024.springio.net/sessions/automated-software-refactoring-with-openrewrite-and-generative-ai/).
    * Sam will be giving [a webinar about OpenRewrite fundamentals on May 31st at NFJS 2024](https://nofluffjuststuff.com/webinar/116/migration_engineering_w_openrewrite). There will be a second part the following week about writing custom recipes using OpenRewrite. If you want to learn how to write your own recipes, definitely consider checking that out!
  * **Content**:
    * We wrote a blog post about [four ways Moderne hardens your code against security vulnerabilities](https://www.moderne.io/blog/best-practices-for-preventing-cybersecurity-threats). At a high-level, we can help by doing in-depth code analysis, static code analysis, software composition analysis, and third-party code migration.
    * We wrote a LinkedIn post about [using OpenRewrite and Moderne for mass-scale refactoring](https://www.linkedin.com/pulse/game-changer-developers-mass-scale-refactoring-moderneinc-x2eic/). This is a great introduction to both of the tools and could be helpful if you're looking to help onboard someone.
  * **Press/Mentions**:
    * In case you missed it, there was [an interesting podcast about how OpenRewrite came about](https://open.spotify.com/episode/0kR28LMf6P9xB9vwokfnYU) if you were curious to learn more about that. 
* Weeding your microservices
  * [Started out by Tim talking about genetics and how those problems relate to OpenRewrite and recipes](https://youtu.be/sGBxLC5j1Oc?t=651). There are a lot of parallels between the two – which can be useful to think about when making recipes.
  * [We then talked about build tools and the recipes that exist to help you introduce, update, or analyze them](https://youtu.be/sGBxLC5j1Oc?t=1527). It's common for people to add tools and then have them slowly drift apart across your repositories. We can help you track those drifts and standardize them. For example: adding or [updating wrappers](https://app.moderne.io/recipes/org.openrewrite.maven.UpdateMavenWrapper) or switching from `mvn clean install` to `mvn verify`.
    * [Maven recipes](https://app.moderne.io/marketplace/org.openrewrite.maven)
    * [Gradle recipes](https://app.moderne.io/marketplace/org.openrewrite.gradle)
    * [OpenRewrite DevCenter where you can run a Gradle wrapper visualization](https://app.moderne.io/devcenter/OpenRewrite)
  * [Up next was talking about CI recipes](https://youtu.be/sGBxLC5j1Oc?t=1870). There are a lot of workflow descriptors that many people will often not go back and update. These can be things like changing from `master` to `main` for your builds - which isn't a particularly challenging change - but if you want to do that across all of your projects it really helps to have automation. You may also want to use these recipes to help [automate code reviews](https://www.moderne.io/blog/stop-breaking-ci-annotate-prs-with-openrewrite-recipe-fixes-as-quality-gate) 
    * [GitHub Actions recipes](https://app.moderne.io/marketplace/org.openrewrite.github)
    * [Find files](https://app.moderne.io/recipes/org.openrewrite.FindSourceFiles) in combination with [Merge YAML](https://app.moderne.io/recipes/org.openrewrite.yaml.MergeYaml)
  * We then looked at [Kubernetes deployment descriptors](https://youtu.be/sGBxLC5j1Oc?t=2214). Many people will just copy these between projects without really understanding if everything is needed – which can lead to some dangerous scenarios. We've used Kubernetes recipes to update environment variables, change Dockerfiles, switch from `/health` to `/liveness` and `/readiness`, limit resources, gracefully shut down services, etc.
    * [Kubernetes recipes](https://app.moderne.io/marketplace/org.openrewrite.kubernetes)
  * Next, we discussed how you can [update libraries, frameworks, and languages](https://youtu.be/sGBxLC5j1Oc?t=2404). Some examples of this include: 
    * [Migrating to AssertJ](https://app.moderne.io/recipes/org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ)
    * [Migrating from JUnit 4 to 5](https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.UpdateTestAnnotation)
    * [Updating Spring Boot versions](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2).
  * Lastly, we talked about some [general cleanup recipes](https://youtu.be/sGBxLC5j1Oc?t=2464). For instance: 
    * People sometimes commit their `.DS_Store` files from their computers to code, and you may want to use the [Delete files recipe](https://app.moderne.io/recipes/org.openrewrite.DeleteSourceFiles) to clean those up. Automating something like this not only helps clean stuff up _now_ - but also helps prevent or clean up problems that will arise in the future.
    * Tim shared that a [blog post on flowers](https://gigamonkeys.com/flowers/) helped shape what he's decided to pursue as an engineer. After your experiments and learning are done, you want to "weed" the garden and standardize your tools.

### Contributing to OSS through Moderne (May 1st, 2024)

{% embed url="https://www.youtube.com/watch?v=S6408r36Io4" %}

#### Summary and related links

* Announcements for the week:
  * **Releases**:
    * Shout out to [Ryan Hudson](https://github.com/ryan-hudson) who [added support for data tables to the rewrite-maven-plugin](https://github.com/openrewrite/rewrite-maven-plugin/pull/751).
      * Please feel free to jump in and add similar support to the [rewrite-gradle-plugin](https://github.com/openrewrite/rewrite-gradle-plugin).
      * If you want to learn more about data tables, check out our [getting started with data tables doc](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/data-tables) that shows how useful they can be at scale with Moderne.
  * **Events**:
    * Tim will be at [JCON Europe from May 13th - 16th](https://jconeurope2024.sched.com/). He will be giving a talk on [Transforming Code with OpenRewrite and Refaster](https://jconeurope2024.sched.com/event/1Z2tI/transforming-code-with-openrewrite-and-refaster) and [Weeding your Micro Service Landscape](https://jconeurope2024.sched.com/event/1YwSG/weeding-your-micro-service-landscape). He has a limited amount of free tickets to give away if you'd like to attend and are going to be in Germany at that time. Please reach out to him to learn more.
    * We'll be at [Spring I/O in Barcelona from May 30th - 31st](https://2024.springio.net/sessions/automated-software-refactoring-with-openrewrite-and-generative-ai/).
  * **Content**:
    * We released a [new video spotlighting Tim](https://www.youtube.com/watch?v=HDoR7sbx98A)!
    * [Tim's presentation at J-Fall 2023 about modernizing your money-maker is now available to watch](https://www.youtube.com/watch?v=Jgi-n0w8g0U).
    * We've created a [playlist that includes all of the released videos of presentations we've given over the years at various conferences](https://www.youtube.com/watch?v=o3rMdXR2bIU&list=PLIasdWXKABOmU2ZeVToOMJqdmPUeB-y2T). If you're looking to learn more about Moderne or OpenRewrite, definitely consider checking those out.
  * **Press/Mentions**:
    * [Moderne is part of the Sparkcubate program](https://www.linkedin.com/posts/bharish_sparkcubate-is-a-team-within-walmart-that-activity-7188572433501556736-MQQj)! Sparkcubate is a team within Walmart that identifies start-ups and companies that can inject energy into early-stage innovation.
* Contributing to OSS:
  * Moderne offers a variety of [best practice recipes](https://app.moderne.io/search?q=best%20practices) that are a simple, but effective way of beginning to contribute to a project.
    * We'd strongly recommend beginning with a project you're familiar with and actively use. You should then reach out and ask them if they'd be open to best practice contributions and go from there.
    * That being said, if you are looking to discover projects, consider using a tool like [up-for-grabs](https://up-for-grabs.net/#/).
  * We then dove into the [AssertJ best practices recipe](https://app.moderne.io/recipes/org.openrewrite.java.testing.assertj.Assertj). We explored how you can [dive into the recipes it's composed of to learn more about everything it does with our new builder](https://app.moderne.io/builder/org.openrewrite.java.testing.assertj.Assertj).
    * ![AssertJ best practices recipe](/.gitbook/assets/assertj-recipes.png)
    * ![AssertJ best practices sub-recipes](/.gitbook/assets/assertj-sub-recipes.png)
  * On a related note, [here is an example PR where Tim applied some JUnit5 best practices to an open-source project that got accepted and eventually led to discussions about migrating to AssertJ5](https://github.com/apache/shiro/pull/1338#issuecomment-1974747390).
  * We then dove into [how to get started with running recipes](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/running-your-first-recipe) and [creating your own user organization in Moderne](https://docs.moderne.io/user-documentation/moderne-platform/how-to-guides/managing-user-configured-organizations).
  * We then ran the AssertJ best practices recipe against the shrio repository to demonstrate what it does and how effective it is. In ~1 minute, the recipe made nearly 100 changes, and it estimates that saved someone 8 _hours_ of work. You can imagine that this would be even more effective if run across hundreds or thousands of repos at a time.
  * Once the recipe finished, we created a fork with all of the changes (which is how we'd recommend proceeding if you are contributing to a project you don't own). We demonstrated that the project still compiles with all of the changes and discussed some of the issues you may run into - such as a recipe note automating _everything_ (if it doesn't, please consider contributing to the recipe to improve them - as [we saw someone do this past week](https://github.com/openrewrite/rewrite-apache/pull/16)).
  * After that, we took a look at the [Apache Maven Dev Center](https://app.moderne.io/devcenter/Apache%20Maven) and talked through how you can create dashboards like this to track key upgrades or migrations your organization needs to make. In the Maven case, you can see that 75% of their projects are still on Java 8. For each of these issues, a recipe is provided for how to fix the issue – such as a [migrate to Java 21 recipe](https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeToJava21).
    * These Dev Centers are available for many open-source projects such as Jenkins or Spring.
  * We then touched upon building a community. If you work with any open-source project that you'd like to collaborate with us on (perhaps to have a space where many people can contribute recipes for), please fill out our [collaboration proposal form](https://github.com/openrewrite/collaboration-proposals/issues/new/choose).
    * If you have open-source projects and want help setting up your own [Moderne Dev Center](/user-documentation/moderne-platform/getting-started/dev-center.md), please reach out, and we'd be happy to help create one.
  * We wrapped up by talking about how automation can empower developers to make bigger changes to their libraries that _should_ be done but are perhaps not due to fear of breaking changes.

### OSS contributor conversation with Shannon Pamperl (April 24th, 2024)

{% embed url="https://www.youtube.com/watch?v=n2U_8Zgkybs" %}

#### Summary and related links

* Announcements for the week:
  * **Releases**:
    * We've done a new full release of `rewrite` and the `rewrite-recipe-bom`. For a full list of changes, check out our [changelog over on the OpenRewrite docs](https://docs.openrewrite.org/changelog/8-24-0-release). Special shout out to the folks over at IBM who contributed a ton of changes on the `rewrite-migrate-java` project.
  * **Events**:
    * Tim will be at [JCON Europe from May 13th - 16th](https://jconeurope2024.sched.com/). He will be giving a talk on [Transforming Code with OpenRewrite and Refaster](https://jconeurope2024.sched.com/event/1Z2tI/transforming-code-with-openrewrite-and-refaster) and [Weeding your Micro Service Landscape](https://jconeurope2024.sched.com/event/1YwSG/weeding-your-micro-service-landscape). He has a limited amount of free tickets to give away if you'd like to attend and are going to be in Germany at that time. Please reach out to him to learn more.
    * Tim and Jonathan will be at [Spring I/O from May 30th - 31st in Barcelona](https://2024.springio.net/sessions/automated-software-refactoring-with-openrewrite-and-generative-ai/). They'll be giving a talk on automated software refactoring with OpenRewrite and generative AI.
    * Jonathan and Olga will be at [UberConf in Denver on July 16th - 19th](https://uberconf.com/schedule). They will be giving two workshops plus a keynote presentation!
    * Tim gave a short summary of what happened at Devnexus (one of the conferences he recently attended). We were especially proud of the fact that many other speakers mentioned us and OpenRewrite in their presentations. Our AI talk was also packed with people wanting to learn more – which was exciting. We also learned some fascinating things from the community such as the fact that some places are _still_ looking to update from Spring 1 and 2. If you're one of those places, make sure to check out our [Spring Boot 3.x recipes](https://docs.openrewrite.org/recipes/java/spring/boot3) that can help!
  * **Content**:
    * Justine recently put out an excellent blog post on [safe, efficient AI for mass-scale automating refactoring](https://www.moderne.io/blog/ai-automated-code-refactoring-and-analysis-at-mass-scale-with-moderne). If you're interested in learning more about how Moderne uses AI, definitely check it out.
    * We've been collaborating with MILA on AI research. This past week was especially exciting in that regard as Yoshua Bengio, the founder of MILA, was named as one of the [100 most influential people in 2024](https://time.com/6964962/yoshua-bengio/). Congrats to him!
    * We released a new video this week on [how to find sensitive API endpoints in your services](https://www.youtube.com/watch?v=z-bl4RTDH94).
    * If you missed it from last week, Jonathan was recently on an [airhacks.fm podcast talking about the history of OpenRewrite](https://open.spotify.com/episode/0kR28LMf6P9xB9vwokfnYU).
  * **Press/Mentions**:
    * OpenRewrite has joined the [Commonhaus Foundation](https://www.commonhaus.org/). The Commonhaus Foundation is a new model for established open source libraries and frameworks seeing a neutral home. The non-profit's mission is to ensure a place where open source projects can continue to thrive for future generations. This shows our commitment to OpenRewrite remaining safe and open source even if something were to happen to Moderne. For more information, check out the [press release](https://www.commonhaus.org/activity/123.html).
    * Netflix featured us in [their presentation at Devnexus](https://www.slideshare.net/slideshow/keeping-your-build-tool-updated-in-a-multi-repository-world/267196749) where they were talking about modernizing and cleaning up their code.
* We then introduced Shannon Pamperl. He's one of the oldest and most prolific contributors to OpenRewrite. We then asked had a lengthy conversation with him on his history with OpenRewrite. Some of the questions that Shannon answered include:
  * **How did you get started with OpenRewrite?**
    * Knew Jonathan from a previous job and always respected his work. Got a message from Jonathan and began looking into the project right away.
  * **What were some of the problems you used OpenRewrite to solve?**
    * Wanted to use it with Gradle. Helped kick off discussions that led to `rewrite-groovy` and `rewrite-gradle`.
  * **What are some of the challenges you had when learning to use and create recipes for OpenRewrite?**
    * Biggest challenge was getting a grasp on the data model itself such as "What is an LST?" or "What is a Compilation Unit?" (If you want to learn more about these, check out [our Java LST examples doc where we provide visualizations and break each LST type down](https://docs.openrewrite.org/concepts-explanations/lst-examples)). Another complexity was understanding the visitor pattern and how that worked.
      * If you want to learn more about LST types, check out [our Java LST examples doc where we provide visualizations and break each LST type down](https://docs.openrewrite.org/concepts-explanations/lst-examples)
      * If you want to learn more about visitors, check out our [documentation on visitors that also includes some videos we've made on the topic](https://docs.openrewrite.org/concepts-explanations/visitors)
  * **Were there any particularly challenging contributions you made?**
  * **You've been working on Gradle Kotlin support - how has that been going?**
    * For both of these, difficulty has been with type attribution.
    * Happy to have help with this project. If you want to, consider contributing to [rewrite-gradle-experimental](https://github.com/shanman190/rewrite-gradle-experimental).
  * **We've found that Shelter engineers are extremely competent and have technical depth in a variety of fields. Is there something that Shelter does right that helps nurture great engineering talent?**
    * Shelter stands by their engineers. They push you to do your best while also understanding that people don't know everything. When they don't know something, they'll work together to figure it out without judgement. Every individual person is taught and levels up over time – which compounds when there's a team of people like that.
  * **If you could make a wish right now on one thing OpenRewrite or Moderne would do that it doesn't right now, what would that be?**
    * More parsers for more languages. TSX would be super valuable. TypeScript/React/HTML compounded together can be tricky to handle.
  * **Are there any tips/tricks you have that newer recipe authors would benefit from?**
    * Focus on doing one thing _really well_. When making a recipe, make it simple and focused and ensure that it completely solves the core issue. Then, you can combine multiple of these recipes together to make something more substantial – and you can be confident in the individual pieces.
  * **Are there any libraries or common platforms that you wish there was a recipe for?**
    * Most libraries that he uses already have recipes for them, but they lack features in them. When he finds issues that are important, he tries to contribute back recipes for them.
  * **If someone wanted to get started with OpenRewrite, what would you recommend?**
    * Start by coming at OpenRewrite with a problem that you want to solve, so you have some context. Then, join the [OpenRewrite community Slack](https://join.slack.com/t/rewriteoss/shared\_invite/zt-nj42n3ea-b\~62rIHzb3Vo0E1APKCXEA) and ask questions in there. He'd also recommend looking at [RewriteTest](https://github.com/openrewrite/rewrite/blob/4c9a9709399f722b8bd421fe94633c2b2e9de6e5/rewrite-test/src/main/java/org/openrewrite/test/RewriteTest.java#L52) and [rewriteRun](https://github.com/openrewrite/rewrite/blob/4c9a9709399f722b8bd421fe94633c2b2e9de6e5/rewrite-test/src/main/java/org/openrewrite/test/RewriteTest.java#L139) to get a better idea of the flow of recipes.
    * (We'd also recommend checking out [our documentation](https://docs.openrewrite.org/) where we've created numerous tutorials and references to help people get started. If you run into any issues or wish for something to exist that doesn't, please [let us know](https://github.com/openrewrite/rewrite-docs/issues)!)
  * **Could you tell us about the challenges with using feature flags that motivated you to make contributions to** [**LaunchDarkly recipes**](https://docs.openrewrite.org/recipes/launchdarkly)**?**
    * At big enterprise companies, it can be very hard to keep up with the open source community as it moves so fast. Feature flags may get added and then forgotten about. Having recipes to find and remove these has been super helpful.
  * **Are you using LaunchDarkly recipes to get rid of feature flags at Shelter?**
    * Yes. It's much nicer to use recipes than manually doing it across systems.
  * **Is there anything cool that we should have asked that we missed?**
    * Shannon was curious what's going on with [cycles in relation to recipes](https://docs.openrewrite.org/concepts-explanations/recipes#execution-cycles). Sam dove into some of the issues that we've run into with trying to eliminate cycles.
  * **Is there anything missing from the recipe execution lifecycle?**
    * Unsure. Biggest problem right now is ScanningRecipes behaviour when there are multiple of them trying to interact with a single top-level LST element. Mentioned that the individual elements just works but that the combination causes problems.
  * **Is there a way to make it easier to compose ScanningRecipes together?**
    * Probably. Not sure on exact details. If you (the person reading this) have any ideas, definitely let us know!

### Recipe authoring tips (April 17th, 2024)

{% embed url="https://www.youtube.com/watch?v=qKbUM5lKjPE" %}

#### Summary and related links

* Announcements for the week:
  * Jonathan Schneider (our CEO/co-founder) was recently on the [Front Lines podcast](https://www.frontlines.io/podcasts/jonathan-schneider/). They talked through topics ranging from his transition from the military to tech to how Moderne approached getting our first paying customer to what his vision is for the company and the future.
  * If you want to learn more about the history of OpenRewrite, check out [this airhacks.fm podcast with Jonathan Schneider](https://open.spotify.com/episode/0kR28LMf6P9xB9vwokfnYU).
  * We released a [blog post detailing how to deploy LLMs where GPUs are expensive and/or just not available](https://www.moderne.io/blog/deploying-ai-llms-on-cpus-navigating-efficiency-and-scalability). If you're looking to operationalize an LLM in a cost-effective way, definitely give it a read!
  * We also released a [blog post detailing how OpenRewrite and Moderne can streamline feature flag management](https://www.moderne.io/blog/streamline-feature-flag-management-automate-removal-with-openrewrite-moderne) so that you can reduce the risks associated with using feature flags in production code.
  * On the video side of things, we released a video about [creating AI visualizations with Moderne](https://www.youtube.com/watch?v=id5PAzzWueM).
* We then jumped into the main topic for the week – tips and tricks for recipe development:
  * We began by looking at the [Gradle Test use JUnit Jupiter recipe](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/GradleUseJunitJupiter.java), which, on paper, seems like it should a relatively straightforward recipe. The core idea behind it is we want to `useJUnitPlatform()` to the `Test` task configuration for Gradle projects. It's only a line or two of changes - but there are _many_ cases to consider. For instance, the existing project may not have any test tasks set up, in which case you would need to add that along with the changes. Other projects may already have a test task set up, and they are stylized in a certain way, in which case you would want to match their existing style and add the configuration alongside of it.
  * We then went through a pattern we use when developing recipes like this. We start off by [ensuring we don't make changes when they're inapplicable or when we can't be confident enough they would be correct](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/GradleUseJunitJupiter.java#L70-L769). We then try and find [cases where no change is required as the change has already been made](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/GradleUseJunitJupiter.java#L77-L79). This helps ensure the recipe isn't making any unnecessary changing and also helps ensure we aren't wasting processing time or power when it's not needed. After that, there are several layers of [attempting to update existing configuration](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/GradleUseJunitJupiter.java#L80-L91). Only after everything else has been handled, do we [attempt to add new configuration](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/GradleUseJunitJupiter.java#L92-L95).
    * The core idea with this pattern is to start off with the smallest pieces and work your way up to the most complex. This not only helps improve the speed of the recipe results, but it also makes it easier to create tests and gain confidence as you go.
  * Another important note with this recipe is that we created multiple visitors that are used throughout the base part of the recipe. This helps improve readability as the core flow through the recipe is greatly simplified. This also helps improve testability as you can test more focused visitors or paths.
  * We then dove into the individual visitors to help explain what's happening and why. One notable caveat with Gradle visitors is that we can't be as confident in types – so [we have to perform some additional checks to ensure that we are parsing/modifying the correct thing](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/GradleUseJunitJupiter.java#L128-L129).
  * The next topic was talking about the difference between a traditional, imperative recipe and a [scanning recipe](https://docs.openrewrite.org/concepts-explanations/recipes#scanning-recipes). The core idea being that regular recipes can not be used if you need to take information from one file to modify something in another file as they only look at each file once in a non-configurable order. Scanning recipes, on the other hand, get access to different phases of the recipe lifecycle (such as the scanning phase which comes before the edit phase and allows you to look through all the files, but not make any changes to them).
  * We then dove into recipes that are composed of multiple scanning recipes – such as the [AddDependency recipe](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/AddDependency.java). We talked through some things you'll need to think about and be aware of when writing your own scanning recipes – such as [ensuring scanners are created for each recipe you want to use](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/AddDependency.java#L184-L185).

### AI integrations at Moderne (April 4th, 2024)

{% embed url="https://www.youtube.com/watch?v=ORqsxJpgmhw" %}

#### Summary and related links

* This week we welcome Justine - our AI/machine learning research engineer!
* Announcements for the week:
  * [DevNexus](https://devnexus.org/presentations/fundamentals-of-migration-engineering-with-openrewrite) is next week! If you're going to be there come say hi.
  * We released a [new video detailing the Moderne DevCenter](https://www.youtube.com/watch?v=KRXDMGt7DRE).
  * To go along with that, we also have a [getting started guide](moderne-platform/getting-started/dev-center.md) for those of you who are Moderne customers and want to jump in.
* AI topic:
  * We started off by talking through [search in Moderne](moderne-platform/how-to-guides/moderne-platform-search.md). Prior to AI search being added, it was very hard to discover recipes, typos would result in no recipes being found, and words that were tangentially related did not provide results. Adding AI search helped fix all of these issues.
  * We then provided some more context into how AI search works and how you might get started with your own. Check out [Hugging Face](https://huggingface.co/models) to look through various models - which includes the ones we used.
  * We talked through common questions about these models such as how they work, how they're trained, what type of system you need, etc.
  * If you want to learn more details about AI at Moderne, Justine also wrote a [lovely blog post on fast, secure, and cost-effective AI searching](https://www.moderne.io/blog/building-search-with-ai-embeddings-to-assist-automated-code-refactoring).
  * We then went over [some diagrams that Justine made to explain how AI works across Moderne](https://docs.google.com/document/d/1kUIZWar760LSusfiiutzoA5rf9XWdHt1KaSynkL30YE/edit).
  * Next up was diving into various types of visualizations and how they can be used to discover important elements in your code. For instance, we highlighted a visualization that shows [the different languages that are in use in your comments](https://app.moderne.io/recipes/io.moderne.ai.FindCommentsLanguage) - and one that [clusters method names together](https://app.moderne.io/recipes/io.moderne.ai.research.GetCodeEmbedding?defaults=W3sibmFtZSI6ImNvZGVTbmlwcGV0VHlwZSIsInZhbHVlIjoibWV0aG9kcyJ9XQ%3D%3D).
  * We provided an example of how we used [AI to help one of our customers who had mis-encoded French comments throughout their code base](https://app.moderne.io/recipes/io.moderne.ai.FixMisencodedCommentsInFrench). This made it a struggle to automate some key things they wanted to accomplish such as documentation generation.
  * We concluded by talking through some upcoming AI additions to Moderne. One of these is a way of using AI to search through code. For instance, if you had a general idea of what you wanted to search for but weren't quite sure the exact thing to search for, you could use this to find related code.
  * Another upcoming change is using AI to make suggestions of recipes to run on your code base to make it more secure. For instance, if it saw you were using an improper random number generator, it might recommend running a recipe to change it to use a secure one. These recipe suggestions will appear in the [DevCenter](moderne-platform/getting-started/dev-center.md) for the organization.

### Dependency management recipes (March 25th, 2024)

{% embed url="https://www.youtube.com/watch?v=a45BJclATjU" %}

#### Summary and related links

* Only a few announcements this week since it's so close to the last office hours:
  * We will be [presenting on Security Boulevard at 11 AM ET on March 28th, 2024](https://webinars.securityboulevard.com/how-to-massively-pay-down-your-tech-debt-fast?hss\_channel=lcp-71946171). In that presentation, we'll discuss how to massively pay down your tech debt fast.
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
    * [Writing dynamic recipe tests when the result of a recipe is dependent on an external system state](https://www.youtube.com/watch?v=O9o4y\_2TO0w)
    * [Find YAML properties on the Moderne Platform](https://www.youtube.com/watch?v=MIEc9IOnfBc)
    * [Regex support on the Moderne Platform](https://www.youtube.com/watch?v=fkcDyLRGOUA)
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
  * We added [95 Quarkus 3 & Camel migration recipes](https://app.moderne.io/marketplace/io.quarkus) to the Moderne Platform.
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
    * You can find [the curated list of Codemods in the Moderne Platform](https://app.moderne.io/marketplace/org.openrewrite.codemods).
  * We recently [added a bunch of Error Prone recipes to the Moderne Platform](https://app.moderne.io/marketplace/tech.picnic.errorprone.refasterrules).
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
