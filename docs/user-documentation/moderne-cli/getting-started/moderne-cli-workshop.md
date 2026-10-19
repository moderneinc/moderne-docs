---
sidebar_label: Moderne CLI workshop
description: Hands-on workshop for learning how to effectively use the Moderne CLI.
---

import ReactPlayer from '@site/src/components/VideoPlayer';

# Moderne CLI workshop

In this hands-on workshop, you'll learn how to use the Moderne CLI to:

* Clone and manage multiple repositories at once
* Build Lossless Semantic Trees (LSTs) for analysis
* Run recipes across many repositories simultaneously
* Analyze results using data tables
* Create branches, apply changes, and prepare pull requests

This workshop uses open-source repositories so you can follow along exactly without affecting any of your own code.

## Prerequisites

This guide assumes that:

* You have [installed and configured the Moderne CLI](./cli-intro.md)
* You have access to [app.moderne.io](https://app.moderne.io/marketplace) 
* You have Git installed on your machine
* You have a basic understanding of running terminal commands

:::note
The examples in this guide use the latest version of the Moderne CLI. We'd strongly recommend you use the same version.
:::

## Part 1: Setting up your workspace

Let's start by creating a dedicated workspace for this workshop. We'll clone repositories to it and run recipes on it.

```bash
mkdir -p $HOME/workshop
cd $HOME/workshop
```

## Part 2: Working with repositories

:::warning
The Moderne CLI was not designed to run multiple commands simultaneously. In the following sections, please only execute one command at a time.
:::

### Cloning repositories from Moderne

For this exercise, we've prepared a list of open-source repositories for you to use. These repositories are in the `Legacy Java Apps` organization, which is part of the public Sample Estate on the Moderne Platform. Clone them by running the following command from inside your `workshop` directory:

```bash
mod git sync moderne . --organization "Legacy Java Apps" --with-sources
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 4.11.0

● Retrieving organization from Moderne

Found organization ALL/Open Source/Sample Estate/Java Estate/Legacy Java Apps
Organization written to disk at file:///path/to/workshop/.moderne/repos.csv

● Analyzing organization structure

Done

Selected organization ALL/Open Source/Sample Estate/Java Estate/Legacy Java Apps

● Synchronizing organization directory structure

Found 1 organization containing 5 repositories

Adding organization Legacy Java Apps
Adjusted 1 organization directory.

● Performing Git operations on repositories

▶ spring-projects/spring-petclinic@main
    ✓ Checked out 500158f on branch main
▶ rrd4j/rrd4j@master
    ✓ Checked out d928916 on branch master
▶ naveenchr/SeleniumTDD@master
    ✓ Checked out 7535b36 on branch master
▶ zendesk/maxwell@master
    ✓ Checked out f9d96be on branch master
▶ CSPF-Founder/JavaVulnerableLab@master
    ✓ Checked out 626a106 on branch master
Done

● Downloading LSTs for repositories

▶ CSPF-Founder/JavaVulnerableLab@master
    ✓ Downloaded LST from https://api.app.moderne.io/organizations/lsts/2026/1014/20261014170826-XsUqc.jar
▶ naveenchr/SeleniumTDD@master
    ✓ Downloaded LST from https://api.app.moderne.io/organizations/lsts/2026/1014/20261014085954-z4rW9.jar
▶ rrd4j/rrd4j@master
    ✓ Downloaded LST from https://api.app.moderne.io/organizations/lsts/2026/1014/20261014085954-dmMVO.jar
▶ spring-projects/spring-petclinic@main
    ✓ Downloaded LST from https://api.app.moderne.io/organizations/lsts/2026/1015/20261015072859-LYb50.jar
▶ zendesk/maxwell@master
    ✓ Downloaded LST from https://api.app.moderne.io/organizations/lsts/2026/1014/20261014170827-XcXuk.jar
Done

Synced 5 repositories.

● What to do next
    > Run mod build . to build LSTs from the synced sources
    > Run mod log syncs add . syncs.zip --last-sync to aggregate sync logs
    > Examine clone telemetry at file:///path/to/workshop/.moderne/sync/20261015082500-p0bA3/trace.csv

MOD SUCCEEDED in 6s
```

</details>

:::info
If you need to enter an SSH passphrase to clone repositories, please see our [SSH keys with passphrases guide](../how-to-guides/ssh-key.md) before continuing.
:::

Confirm that your repositories were cloned correctly by running the following command:

```bash
ls  .  # For Mac/Unix users
dir .  # For Windows users
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
CSPF-Founder    naveenchr       rrd4j           spring-projects zendesk
```

</details>

## Part 3: Building LSTs

If the [Lossless Semantic Trees](../../recipes/authoring-recipes/concepts/lossless-semantic-trees.md) (LSTs) were available to download from Moderne, then they will have been downloaded with the `mod git sync moderne` command. If the LST(s) were unavailable for some reason, you can generate them locally by running the `mod build .` command.

:::info
By default, the CLI is able to build LSTs for well-formed projects (i.e. projects that build well with a plain `mvn verify` or `gradle build`). At times, however, you may encounter a project that fails to build. This could be because of a hidden dependency on certain tooling, like NPM, or because specific dependencies or repositories are not available without additional configuration.

Through [mod config build](../cli-reference.md#mod-config-build) and other configuration options, you're typically able to get these LSTs built and ingested fairly quickly. For the purposes of this tutorial, however, let's ignore any projects that don't build and focus on running recipes against the ones that do.
:::

```bash
# Only needed if LSTs failed to download in the previous step
mod build .
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 4.11.0

● Reading organization

Found 1 organization containing 5 git repositories

● Building LST(s)

▶ CSPF-Founder/JavaVulnerableLab@master
    Build output will be written to file:///path/to/workshop/CSPF-Founder/JavaVulnerableLab/.moderne/build/20261015082854-RT672/build.log
    ✓ Maven · JDK 1.8.0_392-zulu (14s)
▶ naveenchr/SeleniumTDD@master
    Build output will be written to file:///path/to/workshop/naveenchr/SeleniumTDD/.moderne/build/20261015082854-RT672/build.log
    ✓ Maven · JDK 1.8.0_392-zulu (7s)
▶ rrd4j/rrd4j@master
    Build output will be written to file:///path/to/workshop/rrd4j/rrd4j/.moderne/build/20261015082854-RT672/build.log
    ✓ Maven · JDK 11.0.21-corretto (9s)
▶ spring-projects/spring-petclinic@main
    Build output will be written to file:///path/to/workshop/spring-projects/spring-petclinic/.moderne/build/20261015082854-RT672/build.log
    ✓ Gradle · JDK 17.0.9-tem (34s)
▶ zendesk/maxwell@master
    Build output will be written to file:///path/to/workshop/zendesk/maxwell/.moderne/build/20261015082854-RT672/build.log
    ✓ Maven · JDK 11.0.21-corretto (19s)
Done

Built 5 repositories.

● What to do next
    > Run mod run . --recipe=<RecipeName>
    > Analyze build results with mod trace builds analyze . --last-build
    > Run mod log builds add . logs.zip --last-build to aggregate build logs

MOD SUCCEEDED in 1m 26s
```

</details>

## Part 4: Running your first recipe

### Running DependencyVulnerabilityCheck

With the LSTs built, you can now run recipes against them. Let's run the `DependencyVulnerabilityCheck` recipe to find and fix vulnerable dependencies. Unlike many other tools, this recipe can find and fix dependencies that are _many_ levels deep. For instance, if you depend on a library which depends on a library which depends on a library which contains a vulnerable dependency, this recipe can find that and offer suggestions on how to fix it.

```bash
mod run . --recipe org.openrewrite.java.dependencies.DependencyVulnerabilityCheck
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 4.11.0

● Reading organization

Found 1 organization containing 5 git repositories

● Running recipe org.openrewrite.java.dependencies.DependencyVulnerabilityCheck

▶ spring-projects/spring-petclinic@main
    No changes
    ✓ Recipe run complete
▶ rrd4j/rrd4j@master
    No changes
    ✓ Recipe run complete
▶ naveenchr/SeleniumTDD@master
    No changes
    ✓ Recipe run complete
▶ CSPF-Founder/JavaVulnerableLab@master
    ● Update(pom.xml)
        14         <version>3.8.1</version>
        15         <scope>test</scope>
        16       </dependency>
        17 +     <!-- CVE-2017-3523, CVE-2015-2575, CVE-2017-3586, CVE-2017-3589 -->
        18       <dependency>
        19           <groupId>mysql</groupId>
        20           <artifactId>mysql-connector-java</artifactId>
        20 -         <version>5.1.26</version>
        21 +         <version>5.1.42</version>
        22       </dependency>
        23       <dependency>
        24           <groupId>org.json</groupId>

        48           <artifactId>log4j-api</artifactId>
        49           <version>2.12.1</version>
        50       </dependency>
        51 +     <!-- CVE-2021-44228, CVE-2021-45046, CVE-2021-45105, CVE-2021-44832, CVE-2020-9488 -->
        52       <dependency>
        53           <groupId>org.apache.logging.log4j</groupId>
        54           <artifactId>log4j-core</artifactId>
        53 -         <version>2.12.1</version>
        55 +         <version>2.12.4</version>
        56       </dependency>
        57       <!-- OWASP 2025 A08 Software or Data Integrity Failures: commons-collections
        58            3.1 (2004) carries the InvokerTransformer gadget used by ysoserial's

    Fix results at file:///path/to/workshop/CSPF-Founder/JavaVulnerableLab/.moderne/run/20261015082612-jVdvC/fix.patch
    ✓ Recipe run complete
▶ zendesk/maxwell@master
    ● Update(pom.xml)
        226       <dependency>
        227         <groupId>org.apache.logging.log4j</groupId>
        228         <artifactId>log4j-core</artifactId>
        229 -       <version>2.25.3</version>
        229 +       <version>2.25.4</version>
        230       </dependency>
        231       <dependency>
        232         <groupId>org.apache.logging.log4j</groupId>

    Fix results at file:///path/to/workshop/zendesk/maxwell/.moderne/run/20261015082612-jVdvC/fix.patch
    ✓ Recipe run complete
Done

58s saved by using previously built LSTs
10m saved by using recipes

Produced results for 5 repositories.

● What to do next
    > Run mod study to examine the following data tables produced by this recipe:
          > mod study . --last-recipe-run --data-table DependencyOriginsReport
          > mod study . --last-recipe-run --data-table VulnerabilityReport
          > mod study . --last-recipe-run --data-table RecipeRunStats
          > mod study . --last-recipe-run --data-table SourcesFileResults
    > Run mod git checkout . -b refactor/DependencyVulnerabilityCheck --last-recipe-run to prepare a refactor/DependencyVulnerabilityCheck branch for applying the changes
    > Run mod git apply . --last-recipe-run to apply the changes
    > Run mod git apply . --recipe-run 20261015082612-jVdvC to apply the changes
    > Run mod trace runs analyze . --last-run to launch an interactive trace analyzer for this recipe run
    > Run mod log runs add . logs.zip --last-recipe-run to aggregate run logs
    > Examine run telemetry at file:///path/to/workshop/.moderne/run/20261015082612-jVdvC/trace.csv

MOD SUCCEEDED in 57s
```

</details>

:::info
Some of the repositories may show `(no LST)` and return the message `Skipped recipe run because no LST was found`. This could be because we failed to download the LST from Moderne or because the LST failed to build locally.

For the purposes of this tutorial, we will ignore this message and not worry about the repositories that don't have LSTs.
:::

To learn more about what changed, you can command/ctrl click on the `Fix results` links generated in the above command. If you open one of these patch files up, you'll see that various dependencies in `pom.xml` or `build.gradle` files have been updated. While these updates to the dependencies are useful, they are only a minor part of what this recipe does. In the next section we'll take a look at the real power of this recipe – the data table that is produced.

## Part 5: Analyzing recipe results with data tables

If you've been following along, you'll know that we just ran the `DependencyVulnerabilityCheck` recipe. Let's take another look at the `What to do next` section produced at the end of the recipe run:

```bash
● What to do next
    > Run mod study to examine the following data tables produced by this recipe:
          > mod study . --last-recipe-run --data-table DependencyOriginsReport
          > mod study . --last-recipe-run --data-table VulnerabilityReport
          > mod study . --last-recipe-run --data-table RecipeRunStats
          > mod study . --last-recipe-run --data-table SourcesFileResults
    > Run mod git checkout . -b refactor/DependencyVulnerabilityCheck --last-recipe-run to prepare a refactor/DependencyVulnerabilityCheck branch for applying the changes
    > Run mod git apply . --last-recipe-run to apply the changes
    > Run mod git apply . --recipe-run 20261015082612-jVdvC to apply the changes
    > Run mod trace runs analyze . --last-run to launch an interactive trace analyzer for this recipe run
    > Run mod log runs add . logs.zip --last-recipe-run to aggregate run logs
    > Examine run telemetry at file:///path/to/workshop/.moderne/run/20261015082612-jVdvC/trace.csv
```

You may notice that one of the suggestions on what to do next is the `mod study` command. This command allows you to examine the [data tables](../../moderne-platform/getting-started/data-tables.md) produced by the recipe run. Data tables are columnar data in a schema defined by the recipe.

In the above example, you'll see there are four data tables produced by this recipe:

* DependencyOriginsReport
* VulnerabilityReport
* RecipeRunStats
* SourcesFileResults

The `VulnerabilityReport` contains detailed information about the vulnerabilities that exist in the repositories. For instance, it will tell you what CVE a particular repository is affected by, what the current version is, what the minimum fixed version is, a clear summary of what is wrong, and how many levels deep the dependency is.

Let's generate this data table by running the following command:

```bash
mod study . --last-recipe-run --data-table VulnerabilityReport
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 4.11.0

● Reading organization

Found 1 organization containing 5 git repositories
Found recipe run 20261015082612-jVdvC

● Building CSV output for each organization

▶ Legacy Java Apps
    ✓ Data table produced at file:///path/to/workshop/.moderne/run/20261015082612-jVdvC/datatables/org.openrewrite.java.dependencies.table.VulnerabilityReport.csv
Done

● Converting to Excel for each organization

▶ Legacy Java Apps
    ✓ Added 167 rows
    ✓ Data table produced at file:///path/to/workshop/.moderne/run/20261015082612-jVdvC/datatables/org.openrewrite.java.dependencies.table.VulnerabilityReport.xlsx
Done

Data tables for each organization with rows are linked above

MOD SUCCEEDED in 1s
```

</details>

:::info
We used the short name for the data table (`VulnerabilityReport`) rather than the fully-qualified name. As long as the short name is distinct, you can do this to save some typing.
:::

Open up the Excel file that is produced. You will see that the recipe found more than a hundred vulnerabilities. You can sort them by severity to see what the most important ones to start with are – or you could find the ones that can be fixed with a version update only to quickly address some of the problems. Having a table like this can help you and your organization track and prioritize security issues.

## Part 6: Customizing data table output

Maybe you don't really want an Excel spreadsheet as the output, though. Fortunately, the Moderne CLI lets you customize what you get out of data tables with templates. Let's run a new recipe to demonstrate this. Let's run a recipe to find all locations where the `java.util.List add(..)` method is used (For more information on how to select a particular method, check out our [method patterns documentation](https://docs.openrewrite.org/reference/method-patterns)).

```bash
mod run . --recipe org.openrewrite.java.search.FindMethods -PmethodPattern="java.util.List add(..)"
```

Once that's done running, we _could_ run a similar study command as before to get an Excel file that contains detailed information about all of the places this specific method was found. Let's say, however, that you don't care about all of the columns and that you'd like a markdown file to be produced instead of an Excel spreadsheet.

We can filter the data table to only a couple columns we are interested in and then use a GoTemplate to produce a markdown file containing code samples for all of the matching methods we found:

````bash
mod study . --last-recipe-run --data-table MethodCalls --json sourceFile,method --template '{{"# Search results\n\n"}}{{range .}}{{"* "}}{{.sourceFile}}{{"\n```\n"}}{{.method}}{{"\n```\n"}}{{end}}' > methods.md
````

As you can see, the output is extremely flexible to meet whatever needs you have.

## Part 7: Managing and committing changes

So far, everything we've done has remained local to your machine. In a real-world situation, though, you'd definitely want to commit the results, test the changes, and open a PR in each repository. Let's walk through how to do this.

To begin, make sure you're still in the `$HOME/workshop` directory with the `Legacy Java Apps` organization cloned. Then, run the following recipe to resolve common static analysis issues in all of the repositories:

```bash
mod run . --recipe CommonStaticAnalysis
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 4.11.0

● Reading organization

Found 1 organization containing 5 git repositories

● Running recipe org.openrewrite.staticanalysis.CommonStaticAnalysis

▶ CSPF-Founder/JavaVulnerableLab@master
    ... (diff preview trimmed)

    Fix results at file:///path/to/workshop/CSPF-Founder/JavaVulnerableLab/.moderne/run/20261015082720-aDY1x/fix.patch
    ✓ Recipe run complete
▶ spring-projects/spring-petclinic@main
    ... (diff preview trimmed)

    Fix results at file:///path/to/workshop/spring-projects/spring-petclinic/.moderne/run/20261015082720-aDY1x/fix.patch
    ✓ Recipe run complete
▶ naveenchr/SeleniumTDD@master
    ... (diff preview trimmed)

    Fix results at file:///path/to/workshop/naveenchr/SeleniumTDD/.moderne/run/20261015082720-aDY1x/fix.patch
    ✓ Recipe run complete
▶ rrd4j/rrd4j@master
    ... (diff preview trimmed)

    Fix results at file:///path/to/workshop/rrd4j/rrd4j/.moderne/run/20261015082720-aDY1x/fix.patch
    ✓ Recipe run complete
▶ zendesk/maxwell@master
    ... (diff preview trimmed)

    Fix results at file:///path/to/workshop/zendesk/maxwell/.moderne/run/20261015082720-aDY1x/fix.patch
    ✓ Recipe run complete
Done

Produced results for 5 repositories.

● What to do next
    > Run mod study to examine the following data tables produced by this recipe:
          > mod study . --last-recipe-run --data-table RecipeRunStats
          > mod study . --last-recipe-run --data-table SourcesFileResults
    > Run mod git checkout . -b refactor/CommonStaticAnalysis --last-recipe-run to prepare a refactor/CommonStaticAnalysis branch for applying the changes
    > Run mod git apply . --last-recipe-run to apply the changes
    > Run mod git apply . --recipe-run 20261015082720-aDY1x to apply the changes
    > Run mod trace runs analyze . --last-run to launch an interactive trace analyzer for this recipe run
    > Run mod log runs add . logs.zip --last-recipe-run to aggregate run logs
    > Examine run telemetry at file:///path/to/workshop/.moderne/run/20261015082720-aDY1x/trace.csv

MOD SUCCEEDED in 9s
```

</details>

Right now, if you `cd` to any of the repositories in the `workshop` directory, you won't see any of these changes. While you _could_ apply these changes to the branches you have checked out, it's generally preferable to make changes inside of a branch and then submit a PR for said branch.

### Creating branches

To begin, let's create a branch in each repository that has changes by running the following command:

```bash
mod git checkout . -b workshop-changes --last-recipe-run
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 4.11.0

● Reading organization

Found 1 organization containing 5 git repositories
Found recipe run 20261015082720-aDY1x

● Executing git checkout

▶ CSPF-Founder/JavaVulnerableLab@master
    ✓ Switched to branch workshop-changes
▶ naveenchr/SeleniumTDD@master
    ✓ Switched to branch workshop-changes
▶ rrd4j/rrd4j@master
    ✓ Switched to branch workshop-changes
▶ spring-projects/spring-petclinic@main
    ✓ Switched to branch workshop-changes
▶ zendesk/maxwell@master
    ✓ Switched to branch workshop-changes
Done

Checked out 5 repositories.

● What to do next
    > Run mod git apply . --last-recipe-run to apply the changes
    > Commit your changes using mod git commit . -m "commit message" --last-recipe-run.

MOD SUCCEEDED in 3s
```

</details>

### Applying changes

Next, let's apply the changes from the recipe to these branches:

```bash
mod git apply . --last-recipe-run
```

If you `cd` into the project directories and run `git status`, you will see that you have a bunch of uncommitted and unstaged changes. Normally this would be where you would run tests and confirm that everything still works. For the purposes of the workshop, though, let's just pretend everything worked perfectly and move to the next step of staging the files and committing the changes.

### Staging and committing

To add the files to the list that should be committed, run the following command:

```bash
mod git add . --last-recipe-run
```

Then, to commit these changes, run the following command:

```bash
mod git commit . -m "Test common static analysis changes" --last-recipe-run
```

### Creating pull requests

Normally, the next step you would do would be to push the commit to a branch and open a PR for it. However, as we don't own these repositories and as we don't want to clutter them, **please refrain from running the following commands against the repositories above**.

There are a variety of ways to create PRs based on your goals. We'll provide a few of the most common examples below.

You could push commits to the repositories via:

```bash
# Please don't run this command during the workshop
mod git push . --last-recipe-run
```

:::warning
Depending on the branch you've checked out, you may need to set the upstream tracking reference when running `mod git push`:

```bash
mod git push . --last-recipe-run -u
```
:::

Or you could create a PR directly with the GitHub command line:

```bash
# Please don't run this command during the workshop
mod exec . --last-recipe-run -- gh pr create --title "refactor: Apply common static analysis fixes"
```

For more options, see the [CLI reference documentation](../cli-reference.md#mod-git-push).

## Conclusion and next steps

Congratulations! You've completed the Moderne CLI workshop. You've learned how to:

* Set up a workspace and sync repositories from Moderne
* Build LSTs for multiple repositories
* Run recipes across many repositories at once
* Analyze results using data tables
* Create branches and apply changes
* Prepare changes for pull requests

### Additional resources

If you want to learn more about the Moderne CLI, we'd encourage you to check out the following docs:

* [Layered configuration in the CLI](../how-to-guides/layer-config-cli.md)
* [Java configuration](../how-to-guides/java.md)
* [Using the Moderne IntelliJ plugin with the CLI](../../moderne-ide-integration/how-to-guides/moderne-plugin-install.md)

### Video tutorials

You may also find these videos useful:

<ReactPlayer className="reactPlayer" url='https://www.youtube.com/watch?v=ZHXqYhaB71k' controls="true" />

<ReactPlayer className="reactPlayer" url='https://www.youtube.com/watch?v=zHlVg9H_JRo' controls="true" />

<ReactPlayer className="reactPlayer" url='https://www.youtube.com/watch?v=cs-6FJ_mtro' controls="true" />