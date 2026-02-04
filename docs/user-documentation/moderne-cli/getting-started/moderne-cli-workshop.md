---
sidebar_label: Moderne CLI workshop
description: Hands-on workshop for learning how to effectively use the Moderne CLI.
---

import ReactPlayer from 'react-player';

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
The examples in this guide use the latest staging version of the Moderne CLI. We'd strongly recommend you use the same version.
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

For this exercise, we've prepared a list of open-source repositories for you to use. These repositories have been added to the Moderne Platform and put inside the `Default` organization. Clone these repositories by running the following command from inside your `workshop` directory:

```bash
mod git sync moderne . "Default" --with-sources
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 3.56.7

⏺ Retrieving organization from Moderne

Found organization ALL/Default
Organization written to disk at /Users/mikesol/workshop/.moderne/repos.csv

⏺ Synchronizing organization directory structure

Adding organization Default
Adjusted 1 organization directory. (1s)

⏺ Performing Git operations on repositories

A sync log file will be written to /Users/mikesol/workshop/.moderne/sync.log

▶ openrewrite/rewrite-recipe-bom@main
    ✓ Checked out 616ea9b on branch main
▶ finos/messageml-utils@main
    ✓ Checked out 3e0ba74 on branch main
▶ Netflix/ribbon@master
    ✓ Checked out 625e167 on branch master
▶ apache/maven-doxia@master
    ✓ Checked out c15ab5c on branch master
▶ finos/symphony-bdk-java@main
    ✓ Checked out b3e8bdd on branch main
▶ finos/spring-bot@spring-bot-master
    ✓ Checked out 7280971 on branch spring-bot-master
▶ finos/symphony-wdk@master
    ✓ Checked out e965749 on branch master
▶ spring-projects/spring-petclinic@main
    ✓ Checked out 30aab0a on branch main
▶ spring-projects/spring-data-commons@main
    ✓ Checked out 370cb37 on branch main
▶ awslabs/aws-saas-boost@main
    ✓ Checked out 452d7ca on branch main
▶ Netflix/photon@master
    ✓ Checked out 2ee9afa on branch master
Done (1m 35s)

⏺ Downloading LSTs for repositories

▶ openrewrite/rewrite-recipe-bom@main
    ✓ Downloaded rewrite-recipe-bom-20250811065644011-ast.jar
▶ finos/messageml-utils@main
    ✓ Downloaded messageml-utils-20250811063541958-ast.jar
▶ Netflix/photon@master
    ✓ Downloaded photon-20250811065054760-ast.jar
▶ spring-projects/spring-petclinic@main
    ✓ Downloaded spring-petclinic-20250811070048713-ast.jar
▶ apache/maven-doxia@master
    ✓ Downloaded maven-doxia-20250811063325005-ast.jar
▶ Netflix/ribbon@master
    ✓ Downloaded ribbon-20250811065420985-ast.jar
▶ finos/symphony-wdk@master
    ✓ Downloaded symphony-wdk-20250811064658084-ast.jar
▶ spring-projects/spring-data-commons@main
    ✓ Downloaded spring-data-commons-20250811065920996-ast.jar
▶ finos/spring-bot@spring-bot-master
    ✓ Downloaded spring-bot-20250811063701383-ast.jar
▶ finos/symphony-bdk-java@main
    ✓ Downloaded symphony-bdk-java-20250811064446213-ast.jar
▶ awslabs/aws-saas-boost@main
    ✓ Downloaded aws-saas-boost-20250811063509832-ast.jar
Done (55s)

Synced 11 repositories.

MOD SUCCEEDED in 2m 31s
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
apache          awslabs         finos           Netflix         openrewrite     spring-projects
```

</details>

## Part 3: Building LSTs

If the [Lossless Semantic Trees](../../../administrator-documentation/moderne-platform/references/lossless-semantic-trees.md) (LSTs) were available to download from Moderne, then they will have been downloaded with the `mod git sync moderne` command. If the LST(s) were unavailable for some reason, you can generate them locally by running the `mod build .` command.

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
Moderne CLI 3.56.7

⏺ Reading organization

Found 1 organization containing 11 repositories (1s)

⏺ Building LST(s)

▶ apache/maven-doxia@master
    Build output will be written to build.log
    > Download from Moderne
        ✓ Downloaded maven-doxia-20250811063325005-ast.jar
    Cleaned 1 older builds
▶ awslabs/aws-saas-boost@main
    Build output will be written to build.log
    > Download from Moderne
        ✓ Downloaded aws-saas-boost-20250811063509832-ast.jar
    Cleaned 1 older builds
▶ finos/messageml-utils@main
    Build output will be written to build.log
    > Download from Moderne
        ✓ Downloaded messageml-utils-20250811063541958-ast.jar
    Cleaned 1 older builds
▶ finos/spring-bot@spring-bot-master
    Build output will be written to build.log
    > Download from Moderne
        ✓ Downloaded spring-bot-20250811063701383-ast.jar
    Cleaned 1 older builds
▶ finos/symphony-bdk-java@main
    Build output will be written to build.log
    > Download from Moderne
        ✓ Downloaded symphony-bdk-java-20250811064446213-ast.jar
    Cleaned 1 older builds
▶ finos/symphony-wdk@master
    Build output will be written to build.log
    > Download from Moderne
        ✓ Downloaded symphony-wdk-20250811064658084-ast.jar
    Cleaned 1 older builds
▶ Netflix/photon@master
    Build output will be written to build.log
    > Download from Moderne
        ✓ Downloaded photon-20250811065054760-ast.jar
    Cleaned 1 older builds
▶ Netflix/ribbon@master
    Build output will be written to build.log
    > Download from Moderne
        ✓ Downloaded ribbon-20250811065420985-ast.jar
    Cleaned 1 older builds
▶ openrewrite/rewrite-recipe-bom@main
    Build output will be written to build.log
    > Download from Moderne
        ✓ Downloaded rewrite-recipe-bom-20250811065644011-ast.jar
    Cleaned 1 older builds
▶ spring-projects/spring-data-commons@main
    Build output will be written to build.log
    > Download from Moderne
        ✓ Downloaded spring-data-commons-20250811065920996-ast.jar
    Cleaned 1 older builds
▶ spring-projects/spring-petclinic@main
    Build output will be written to build.log
    > Download from Moderne
        ✓ Downloaded spring-petclinic-20250811070048713-ast.jar
    Cleaned 1 older builds
Done (1m 48s)

23m 42s saved by using previously built LSTs

Built 0 repositories.

MOD SUCCEEDED in 1m 49s
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
Moderne CLI 3.56.7

Found 1 organization containing 11 repositories (1s)

⏺ Running recipe org.openrewrite.java.dependencies.DependencyVulnerabilityCheck

Run log

▶ apache/maven-doxia@master
    No changes
    ✓ Recipe run complete
▶ Netflix/photon@master
    ⚠ The latest LST is not up to date
    No changes
    ✓ Recipe run complete
▶ openrewrite/rewrite-recipe-bom@main
    No changes
    ✓ Recipe run complete
▶ finos/symphony-wdk@master
    No changes
    ✓ Recipe run complete
▶ spring-projects/spring-petclinic@main
    No changes
    ✓ Recipe run complete
▶ finos/symphony-bdk-java@main
    No changes
    ✓ Recipe run complete
▶ Netflix/ribbon@master
    Fix results
    ✓ Recipe run complete
▶ finos/messageml-utils@main
    No changes
    ✓ Recipe run complete
▶ spring-projects/spring-data-commons@main
    No changes
    ✓ Recipe run complete
▶ finos/spring-bot@spring-bot-master
    No changes
    ✓ Recipe run complete
▶ awslabs/aws-saas-boost@main
    Fix results
    ✓ Recipe run complete
Done (33s)

23m 42s saved by using previously built LSTs
45m saved by using recipes

Produced results for 11 repositories.

⏺ What to do next
    > A repository's source code doesn't match its LST. Run mod build to update the LSTs.
    > Click on one of the patch links above to view the changes on a particular repository
    > Run mod study to examine the following data tables produced by this recipe:
          > mod study . --last-recipe-run --data-table VulnerabilityReport
          > mod study . --last-recipe-run --data-table MavenMetadataFailures
          > mod study . --last-recipe-run --data-table RecipeRunStats
          > mod study . --last-recipe-run --data-table SourcesFileResults
    > Run npm install -g diff2html-cli to produce patch files on subsequent runs that are easier to view
    > Run mod git checkout . -b refactor/DependencyVulnerabilityCheck --last-recipe-run to prepare a refactor/DependencyVulnerabilityCheck branch for applying the changes
    > Run mod git apply . --last-recipe-run to apply the changes
    > Run mod git apply . --recipe-run 20250811094641-N6e9F to apply the changes
    > Run mod log runs add . logs.zip --last-recipe-run to aggregate run logs

MOD SUCCEEDED in 39s
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
⏺ What to do next
    > A repository's source code doesn't match its LST. Run mod build to update the LSTs.
    > Click on one of the patch links above to view the changes on a particular repository
    > Run mod study to examine the following data tables produced by this recipe:
          > mod study . --last-recipe-run --data-table VulnerabilityReport
          > mod study . --last-recipe-run --data-table MavenMetadataFailures
          > mod study . --last-recipe-run --data-table RecipeRunStats
          > mod study . --last-recipe-run --data-table SourcesFileResults
    > Run npm install -g diff2html-cli to produce patch files on subsequent runs that are easier to view
    > Run mod git checkout . -b refactor/DependencyVulnerabilityCheck --last-recipe-run to prepare a refactor/DependencyVulnerabilityCheck branch for applying the changes
    > Run mod git apply . --last-recipe-run to apply the changes
    > Run mod git apply . --recipe-run 20250811094641-N6e9F to apply the changes
    > Run mod log runs add . logs.zip --last-recipe-run to aggregate run logs
```

You may notice that one of the suggestions on what to do next is the `mod study` command. This command allows you to examine the [data tables](../../moderne-platform/getting-started/data-tables.md) produced by the recipe run. Data tables are columnar data in a schema defined by the recipe.

In the above example, you'll see there are four data tables produced by this recipe:

* VulnerabilityReport
* MavenMetadataFailures
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
Moderne CLI 3.56.7

⏺ Reading organization

Found 1 organization containing 11 repositories (1s)
Found recipe run 20250811094641-N6e9F


⏺ Building CSV output for each organization

▶ Default
    ✓ Data table produced
Done (1s)

⏺ Converting to Excel for each organization

▶ Default
    ✓ Added 214 rows
    ✓ Data table produced
Done (3s)

Data tables for each organization with rows are linked above

MOD SUCCEEDED in 4s
```

</details>

:::info
We used the short name for the data table (`VulnerabilityReport`) rather than the fully-qualified name. As long as the short name is distinct, you can do this to save some typing.
:::

Open up the Excel file that is produced. You will see that the recipe found hundreds of vulnerabilities. You can sort them by severity to see what the most important ones to start with are – or you could find the ones that can be fixed with a version update only to quickly address some of the problems. Having a table like this can help you and your organization track and prioritize security issues.

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

To begin, make sure you're still in the `$HOME/workshop` directory with the `Default` organization cloned. Then, run the following recipe to resolve common static analysis issues in all of the repositories:

```bash
mod run . --recipe CommonStaticAnalysis
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 3.56.7

⏺ Reading organization

Found 1 organization containing 12 repositories (1s)

⏺ Running recipe org.openrewrite.staticanalysis.CommonStaticAnalysis

Run log

▶ aws/amazon-documentdb-jdbc-driver@develop (no LST)
    Skipped recipe run because no LST was found
▶ openrewrite/rewrite-recipe-bom@main
    ✓ Fix results
    ✓ Recipe run complete
▶ Netflix/ribbon@master
    ✓ Fix results
    ✓ Recipe run complete
▶ spring-projects/spring-petclinic@main
    ✓ Fix results
    ✓ Recipe run complete
▶ finos/spring-bot@spring-bot-master
    ✓ Fix results
    ✓ Recipe run complete
▶ finos/symphony-wdk@master
    ✓ Fix results
    ✓ Recipe run complete
▶ finos/messageml-utils@main
    ✓ Fix results
    ✓ Recipe run complete
▶ Netflix/photon@master
    ⚠ The latest LST is not up to date
    ✓ Fix results
    ✓ Recipe run complete
▶ awslabs/aws-saas-boost@main
    ✓ Fix results
    ✓ Recipe run complete
▶ apache/maven-doxia@master
    ✓ Fix results
    ✓ Recipe run complete
▶ spring-projects/spring-data-commons@main
    ✓ Fix results
    ✓ Recipe run complete
▶ finos/symphony-bdk-java@main
    ✓ Fix results
    ✓ Recipe run complete
Done (44s)

24m 7s saved by using previously built LSTs
182h 40m saved by using recipes

Produced results for 11 repositories.

⏺ What to do next
    > A repository's source code doesn't match its LST. Run mod build to update the LSTs.
    > Click on one of the patch links above to view the changes on a particular repository
    > Run mod study to examine the following data tables produced by this recipe:
          > mod study . --last-recipe-run --data-table RecipeRunStats
          > mod study . --last-recipe-run --data-table SourcesFileResults
    > Run npm install -g diff2html-cli to produce patch files on subsequent runs that are easier to view
    > Run mod git checkout . -b refactor/CommonStaticAnalysis --last-recipe-run to prepare a refactor/CommonStaticAnalysis branch for applying the changes
    > Run mod git apply . --last-recipe-run to apply the changes
    > Run mod git apply . --recipe-run 20250723102607-DvrxN to apply the changes
    > Run mod log runs add . logs.zip --last-run to aggregate run logs

MOD SUCCEEDED in 45s
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
Moderne CLI 3.56.7

⏺ Reading organization

Found 1 organization containing 12 repositories (1s)
Found recipe run 20250723102607-DvrxN


⏺ Executing git checkout

Command output will be written to log

▶ apache/maven-doxia@master
    ✓ Switched to branch workshop-changes
▶ aws/amazon-documentdb-jdbc-driver@develop
    Skipped because there are no results to commit
▶ awslabs/aws-saas-boost@main
    ✓ Switched to branch workshop-changes
▶ finos/messageml-utils@main
    ✓ Switched to branch workshop-changes
▶ finos/spring-bot@spring-bot-master
    ✓ Switched to branch workshop-changes
▶ finos/symphony-bdk-java@main
    ✓ Switched to branch workshop-changes
▶ finos/symphony-wdk@master
    ✓ Switched to branch workshop-changes
▶ Netflix/photon@master
    ✓ Switched to branch workshop-changes
▶ Netflix/ribbon@master
    ✓ Switched to branch workshop-changes
▶ openrewrite/rewrite-recipe-bom@main
    ✓ Switched to branch workshop-changes
▶ spring-projects/spring-data-commons@main
    ✓ Switched to branch workshop-changes
▶ spring-projects/spring-petclinic@main
    ✓ Switched to branch workshop-changes
Done (1s)

Checked out 11 repositories.

⏺ What to do next
    > Commit your changes using mod git commit . -m "commit message" io.moderne.cli.commands.RecipeRun$Selected@3e9aac24.

MOD SUCCEEDED in 1s
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

:::warning
Right now, GPG signing is not supported by the `mod git commit` command. If you use GPG signing, you'll either need to disable that temporarily or manually commit the changes in each repository without using the CLI.
:::

### Creating pull requests

Normally, the next step you would do would be to push the commit to a branch and open a PR for it. However, as we don't own these repositories and as we don't want to clutter them, **please refrain from running the following commands against the repositories above**.

There are a variety of ways to create PRs based on your goals. We'll provide a few of the most common examples below.

You could push commits to the repositories via:

```bash
# Please don't run this command during the workshop
mod git push . --last-recipe-run
```

:::warning
Depending on the branch you've checked out, you may need to specify an upstream branch when running `mod git push` such as in:

```bash
mod git push . --last-recipe-run --set-upstream <MigrationBranchName>
```
:::

Or you could create a PR directly with the GitHub command line:

```bash
# Please don't run this command during the workshop
mod exec . --last-recipe-run -- gh pr create --title "refactor: Apply AssertJ best practices"
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
* [JDK selection and configuration](../how-to-guides/jdk-selection-and-config.md)
* [Using the Moderne IntelliJ plugin with the CLI](../../moderne-ide-integration/how-to-guides/moderne-plugin-install.md)

### Video tutorials

You may also find these videos useful:

<ReactPlayer className="reactPlayer" url='https://www.youtube.com/watch?v=ZHXqYhaB71k' controls="true" />

<ReactPlayer className="reactPlayer" url='https://www.youtube.com/watch?v=zHlVg9H_JRo' controls="true" />

<ReactPlayer className="reactPlayer" url='https://www.youtube.com/watch?v=cs-6FJ_mtro' controls="true" />