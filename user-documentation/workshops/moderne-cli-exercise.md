# Moderne CLI workshop

In this workshop, you will use the [Moderne CLI](../../getting-started/cli-intro.md), a free tool that allows developer to run OpenRewrite recipes without configuring any build plugin, to migrate various repositories from Spring Boot 2 to Spring Boot 3.

After that, we'll provide some additional examples that show other capabilities of the CLI (such as creating and viewing data tables and fixing static code analysis issues across your repositories).

### Prepare your environment

#### Download and configure the Moderne CLI

1. Go to the [Moderne Platform](https://app.moderne.io) and sign in. If you don't have an account, you can sign up for free.
2. Click on help in the bottom left-hand corner and select the version of the CLI you want to download. Then select the way you'd like to install it:

![](../../.gitbook/assets/cli-download.gif)

3. Once you have it downloaded, save it somewhere that your terminal can access. If you want it available in each of your terminal windows, consider updating your `PATH` to point ot this location or aliasing `mod` to the location of the CLI. You could also save the file to a directory that's already on your `PATH` such as a `/usr/bin` directory.
4. Ensure you can run the CLI by typing `mod`.

<details>

<summary>If everything is set up correctly, you should see output similar to the following:</summary>

```
➜ mod

Moderne CLI 3.13.6

Usage:

mod [-h] [--version] [COMMAND]

Description:

Automated code remediation.

Options:

  -h, --help      Display this help message.
      --version   Display version info.

Commands:

  build                Generates LST artifacts for one or more repositories.
  clean                Clean build and run artifacts produced by the CLI.
  config               Global configuration options that are required by some
                         CLI commands.
  exec                 Execute an arbitrary shell command recursively on
                         selected repository roots.
  git                  Multi-repository git operations.
  log                  Manages a log aggregate.
  list                 Lists the repositories that can be built and published.
  monitor              (INCUBATING) Launches an HTTP server used to monitor the
                         CLI.
  publish              Publishes the LST artifacts for one or more projects.
  run                  Runs an OpenRewrite recipe locally on pre-built LSTS.
  run-history          Get information about the most recent recipe runs.
  study                Produces studies from OpenRewrite recipe data tables
                         locally.
  generate-completion  Generate bash/zsh completion script for mod.

MOD SUCCEEDED in (0.01s)
```

</details>

{% hint style="success" %}
If you want to enable tab auto-completion for CLI commands (Unix systems only), you can run:

```shell
source <(mod generate-completion)
```

or you can update your `~/.zshrc` or `~/.bashrc` file and add this command to the bottom of it:

```shell
# The next line enables shell command completion for mod
source <(mod generate-completion)
```
{% endhint %}

5. Before you run any commands, you'll want to connect the CLI to Moderne. This allows you to easily sync the recipe catalog from Moderne to your local machine, and it will allow you to download LSTs that have already been built to save time and compute power. To do this, you will need to create a Moderne access token. Go to [https://app.moderne.io/settings/access-token](https://app.moderne.io/settings/access-token), enter a name for your token, and press `generate`.
   * For more details on access token creation, please check out our [creating a personal access token doc](../moderne-platform/how-to-guides/create-api-access-tokens.md)
6. Once created, copy the token and use it in the following command so that the CLI can communicate with Moderne:

```bash
mod config moderne edit https://app.moderne.io --token mat-YOUR_TOKEN_HERE
```

7. With the Moderne connection established, install the Spring Boot recipe on your machine:

```bash
mod config recipes moderne install UpgradeSpringBoot_3_2
```

8. Select the `Migrate to Spring Boot 3.2` from the list that appears and then enter `Y` to confirm the installation.

<details>

<summary>This will look something like:</summary>

```shell
➜ mod config recipes moderne install UpgradeSpringBoot_3_2

Moderne CLI 3.13.6

[1] Migrate to Spring Boot 3.2
[2] Migrate to Spring Boot 3.1
[3] Migrate to Spring Boot 3.0
[4] Migrate to Spring Boot 2.6
[5] Upgrade to Spring Boot 2.5
[6] Migrate to Spring Boot 2.3
[7] Migrate to Spring Boot 2.2
[8] Migrate to Spring Boot 2.1
[9] Migrate Spring Boot properties to 3.0
[10] Migrate to Spring Boot 2.0
[11] Migrate Spring Boot properties to 2.0
[12] Migrate Spring Boot properties to 2.3
[13] Upgrade to springdoc-openapi 2
[14] Migrate Spring Boot properties to 2.1
[15] Migrate Spring Boot properties to 2.2
[16] Migrate Spring Boot properties to 2.5
[17] Migrate Spring Boot properties to 3.2
[18] Find patterns that require updating for Spring Boot 2.5
[19] Migrate Spring Boot properties to 3.1
[20] Remove the deprecated properties `additional-keys-to-sanitize` from the `configprops` and `env` end points
[21] Migrate to Spring Data 2.3
[22] Upgrade un-managed spring project dependencies
Select a recipe [1-22]: 1

Migrate to Spring Boot 3.2
Migrate applications to the latest Spring Boot 3.2 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 3.1.


Install org.openrewrite.recipe:rewrite-spring:5.2.0-20231219.181744-58 which contains this recipe [Yn]? Y
```

</details>

{% hint style="success" %}
Alternatively, you can sync all recipes available on Moderne with `mod config recipes moderne sync`, although this can take a while to complete.
{% endhint %}


### Migrate to Spring Boot 3 using the Moderne CLI 

{% embed url="https://www.youtube.com/watch?v=zHlVg9H_JRo" %}

Let's use the Moderne CLI to migrate a group of repositories from Spring Boot 2 to Spring Boot 3. 

For this exercise, we have prepared a list of Spring 2.x open-source repositories from the `spring-projects` GitHub organization that can be migrated. These repositories have been added to the Moderne Platform and put inside the `Spring Projects 2.x` organization.

{% embed url="https://www.youtube.com/watch?v=cs-6FJ_mtro" %}

To clone all of these repositories at once:

```bash
mkdir -p $HOME/workshop
mod git clone moderne $HOME/workshop "Spring Projects 2.x"
```

If you look in the `$HOME/workshop/` directory, you should see 3 different repositories:

```bash
ls -ltr $HOME/workshop/ # For Mac/Unix users
dir $HOME/workshop      # For Windows users
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
total 8
drwxr-xr-x@ 19 mikesol  staff   608 Apr  8 14:15 spring-data-commons
drwxr-xr-x@ 13 mikesol  staff   416 Apr  8 14:15 spring-data-release
-rw-r--r--@  1 mikesol  staff  1816 Apr  8 14:15 clone.log
drwxr-xr-x@ 14 mikesol  staff   448 Apr  8 14:15 spring-session-data-mongodb-examples
```

</details>

Now that you have the repositories locally, you can run a recipe against all of them at once. Since all of these repositories have their LSTs published onto the Moderne Platform, the build operation will download the LSTs without having to build the repositories locally. This will save you a lot of time!

```bash
mod build $HOME/workshop
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 3.13.6

> Selecting repositories

> spring-projects/spring-data-commons@main
> spring-projects/spring-data-release@main
> spring-projects/spring-session-data-mongodb-examples@main
Selected 3 repositories (0.26s)

> Building LST(s)

> spring-projects/spring-data-commons@main
    Build output will be written to /Users/mikesol/workshop/spring-data-commons/.moderne/build/20240429092425-0rhlX/build.log
    > Step 1 - download from Moderne
    ! Failed to download the LST from Moderne. Proceeding to build the LST locally
    > Step 1 - build with Maven
        Selected the 17.0.7-tem JDK
    > Step 2 - build with mod-java
        Selected the 21.0.1-oracle JDK
    > Step 3 - build resources using the native CLI
    ✓ Built LST /Users/mikesol/workshop/spring-data-commons/.moderne/build/20240429092425-0rhlX/spring-data-commons-20240429092532-ast.jar
    + Reported build metrics to Moderne
    + Cleaned 0 older builds.
> spring-projects/spring-data-release@main
    Build output will be written to /Users/mikesol/workshop/spring-data-release/.moderne/build/20240429092425-0rhlX/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/spring-data-release/.moderne/build/20240429092425-0rhlX/spring-data-release-20240429025646-ast.jar
    + Cleaned 0 older builds.
> spring-projects/spring-session-data-mongodb-examples@main
    Build output will be written to /Users/mikesol/workshop/spring-session-data-mongodb-examples/.moderne/build/20240429092425-0rhlX/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/spring-session-data-mongodb-examples/.moderne/build/20240429092425-0rhlX/spring-session-data-mongodb-examples-20240429114145-ast.jar
    + Cleaned 0 older builds.
Built 3 repositories. (1m 8s)

2m 17s saved by using previously built LSTs

* What to do next
    > Run mod run /Users/mikesol/workshop --recipe=<RecipeName>

MOD SUCCEEDED in (1m 9s)
```

</details>

```bash
mod run $HOME/workshop --recipe UpgradeSpringBoot_3_2
```

You can preview the changes by command/ctrl clicking on the patch file generated when running the recipe:

```bash
➜  ~ mod run $HOME/workshop --recipe UpgradeSpringBoot_3_2

Moderne CLI 3.13.6

> Selecting repositories

> spring-projects/spring-data-commons@main
> spring-projects/spring-data-release@main
> spring-projects/spring-session-data-mongodb-examples@main
Selected 3 repositories (0.18s)

> Running recipe org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2

> spring-projects/spring-data-commons@main
	# Command/ctrl click on the following file:
    ✓ Fix results at /Users/mikesol/workshop/spring-data-commons/.moderne/run/20240408141902-kHLCn/fix.patch
	...
```

You can then apply the changes to all of these repositories at once with the following command:

```bash
mod git apply $HOME/workshop --last-recipe-run
```

Next, you can add the changes so that they're ready to be committed with the following command:

```bash
mod git add $HOME/workshop --last-recipe-run
```

Finally, you can commit the changes to all the repositories at once with the following command:

{% hint style="info" %}
If you normally GPG sign your commits, please note that the [Moderne CLI does not currently support that](https://github.com/moderneinc/moderne-cli/issues/1543), and you will need to disable it for the `mod git commit` command to run.
{% endhint %}

```bash
mod git commit $HOME/workshop -m "Migrate to Spring Boot 3.2" --last-recipe-run
```

If you'd rather make a branch for each repository and make changes in that, you can use the `mod checkout` command before running `mod commit` to commit the changes. This might be useful if you want to create a pull request for each repository.

### (Optional) Data tables example

If you have time, the following example will demonstrate how to create and view the data tables available after a recipe runs.

#### Step 0: Create a new directory for the repositories:

```bash
mkdir $HOME/workshop/default
cd $HOME/workshop/default
```

#### Step 1: Clone repositories

Run the command:

```bash
mod git clone moderne . "Default"
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 3.13.6

> Listing repositories from Moderne

Moderne contains 12 repositories in Default. Cloning the first 12.

> Cloning repositories

Clone output will be written to /Users/mikesol/workshop/default/./clone.log

> blitz4j@master
> dynomite-manager@dev
> Fenzo@master
> hollow@master
> ndbench@master
> Priam@3.x
> spring-cloud-circuitbreaker@main
> spring-cloud-common-security-config@main
> spring-cloud-core-tests@main
> spring-cloud-netflix@main
> spring-hateoas-examples@main
> spring-petclinic@main
Cloned 12 repositories (32s)
```

</details>

#### Step 2: Build the LSTs

Run the command:

```bash
mod build .
```

<details>

<summary>You should see output similar to the following.</summary>

```bash
Moderne CLI 3.13.6

> Selecting repositories

> Netflix/blitz4j@master
> Netflix/dynomite-manager@dev
> Netflix/Fenzo@master
> Netflix/hollow@master
> Netflix/ndbench@master
> Netflix/Priam@3.x
> spring-cloud/spring-cloud-circuitbreaker@main
> spring-cloud/spring-cloud-common-security-config@main
> spring-cloud/spring-cloud-core-tests@main
> spring-cloud/spring-cloud-netflix@main
> spring-projects/spring-hateoas-examples@main
> spring-projects/spring-petclinic@main
Selected 12 repositories (0.34s)

> Building LST(s)

> Netflix/blitz4j@master
    Build output will be written to /Users/mikesol/workshop/default/blitz4j/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/blitz4j/.moderne/build/20240429093337-JkwaY/blitz4j-20240429013713-ast.jar
    + Cleaned 0 older builds.
> Netflix/dynomite-manager@dev
    Build output will be written to /Users/mikesol/workshop/default/dynomite-manager/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/dynomite-manager/.moderne/build/20240429093337-JkwaY/dynomite-manager-20240429020614-ast.jar
    + Cleaned 0 older builds.
> Netflix/Fenzo@master
    Build output will be written to /Users/mikesol/workshop/default/Fenzo/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/Fenzo/.moderne/build/20240429093337-JkwaY/Fenzo-20240429054936-ast.jar
    + Cleaned 0 older builds.
> Netflix/hollow@master
    Build output will be written to /Users/mikesol/workshop/default/hollow/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/hollow/.moderne/build/20240429093337-JkwaY/hollow-20240429114403-ast.jar
    + Cleaned 0 older builds.
> Netflix/ndbench@master
    Build output will be written to /Users/mikesol/workshop/default/ndbench/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/ndbench/.moderne/build/20240429093337-JkwaY/ndbench-20240429144252-ast.jar
    + Cleaned 0 older builds.
> Netflix/Priam@3.x
    Build output will be written to /Users/mikesol/workshop/default/Priam/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/Priam/.moderne/build/20240429093337-JkwaY/Priam-20240429013913-ast.jar
    + Cleaned 0 older builds.
> spring-cloud/spring-cloud-circuitbreaker@main
    Build output will be written to /Users/mikesol/workshop/default/spring-cloud-circuitbreaker/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/spring-cloud-circuitbreaker/.moderne/build/20240429093337-JkwaY/spring-cloud-circuitbreaker-20240428083116-ast.jar
    + Cleaned 0 older builds.
> spring-cloud/spring-cloud-common-security-config@main
    Build output will be written to /Users/mikesol/workshop/default/spring-cloud-common-security-config/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/spring-cloud-common-security-config/.moderne/build/20240429093337-JkwaY/spring-cloud-common-security-config-20240429141351-ast.jar
    + Cleaned 0 older builds.
> spring-cloud/spring-cloud-core-tests@main
    Build output will be written to /Users/mikesol/workshop/default/spring-cloud-core-tests/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/spring-cloud-core-tests/.moderne/build/20240429093337-JkwaY/spring-cloud-core-tests-20240429070354-ast.jar
    + Cleaned 0 older builds.
> spring-cloud/spring-cloud-netflix@main
    Build output will be written to /Users/mikesol/workshop/default/spring-cloud-netflix/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/spring-cloud-netflix/.moderne/build/20240429093337-JkwaY/spring-cloud-netflix-20240428230728-ast.jar
    + Cleaned 0 older builds.
> spring-projects/spring-hateoas-examples@main
    Build output will be written to /Users/mikesol/workshop/default/spring-hateoas-examples/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/spring-hateoas-examples/.moderne/build/20240429093337-JkwaY/spring-hateoas-examples-20240429083949-ast.jar
    + Cleaned 0 older builds.
> spring-projects/spring-petclinic@main
    Build output will be written to /Users/mikesol/workshop/default/spring-petclinic/.moderne/build/20240429093337-JkwaY/build.log
    > Step 1 - download from Moderne
    ✓ Downloaded LST /Users/mikesol/workshop/default/spring-petclinic/.moderne/build/20240429093337-JkwaY/spring-petclinic-20240428215542-ast.jar
    + Cleaned 0 older builds.
Built 12 repositories. (6s)

31m 13s saved by using previously built LSTs

* What to do next
    > Run mod run . --recipe=<RecipeName>

MOD SUCCEEDED in (6s)
```

</details>

#### Step 3: Install recipes

If you want to install all the recipes in Moderne:

```bash
mod config recipes moderne sync
```

If you want to install just the recipe we'll use below:

```bash
mod config recipes moderne install UpgradeToJava17
```

Then select the `Migrate to Java 17` recipe from the list

#### Step 4: Run the refactoring recipe against all of the repos

```bash
mod run . --recipe UpgradeToJava17
```

<details>

<summary>You should see results similar to the following</summary>

```bash
Moderne CLI 3.13.6

> Selecting repositories

> Netflix/blitz4j@master
> Netflix/dynomite-manager@dev
> Netflix/Fenzo@master
> Netflix/hollow@master
> Netflix/ndbench@master
> Netflix/Priam@3.x
> spring-cloud/spring-cloud-circuitbreaker@main
> spring-cloud/spring-cloud-common-security-config@main
> spring-cloud/spring-cloud-core-tests@main
> spring-cloud/spring-cloud-netflix@main
> spring-projects/spring-hateoas-examples@main
> spring-projects/spring-petclinic@main
Selected 12 repositories (0.35s)

[1] Migrate to Java 17 (org.openrewrite.java.migrate.UpgradeToJava17)
[2] Migrate to Java 17 (io.quarkus.updates.core.quarkus37.UpgradeToJava17)
Select a recipe [1-2]: 1

> Running recipe org.openrewrite.java.migrate.UpgradeToJava17

> Netflix/blitz4j@master
    ✓ Fix results at /Users/mikesol/workshop/default/blitz4j/.moderne/run/20240429093354-reHx5/fix.patch
> Netflix/dynomite-manager@dev
    ✓ Fix results at /Users/mikesol/workshop/default/dynomite-manager/.moderne/run/20240429093354-reHx5/fix.patch
> Netflix/Fenzo@master
    ✓ Fix results at /Users/mikesol/workshop/default/Fenzo/.moderne/run/20240429093354-reHx5/fix.patch
> Netflix/hollow@master
    ✓ Fix results at /Users/mikesol/workshop/default/hollow/.moderne/run/20240429093354-reHx5/fix.patch
> Netflix/ndbench@master
    ✓ Fix results at /Users/mikesol/workshop/default/ndbench/.moderne/run/20240429093354-reHx5/fix.patch
> Netflix/Priam@3.x
    ✓ Fix results at /Users/mikesol/workshop/default/Priam/.moderne/run/20240429093354-reHx5/fix.patch
> spring-cloud/spring-cloud-circuitbreaker@main
    No changes
> spring-cloud/spring-cloud-common-security-config@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-cloud-common-security-config/.moderne/run/20240429093354-reHx5/fix.patch
> spring-cloud/spring-cloud-core-tests@main
    No changes
> spring-cloud/spring-cloud-netflix@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-cloud-netflix/.moderne/run/20240429093354-reHx5/fix.patch
> spring-projects/spring-hateoas-examples@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-hateoas-examples/.moderne/run/20240429093354-reHx5/fix.patch
> spring-projects/spring-petclinic@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-petclinic/.moderne/run/20240429093354-reHx5/fix.patch
Found results on 10 repositories (1m 46s)

31m 13s saved by using previously built LSTs

* What to do next
    > Click on one of the patch links above to view the changes on a particular repository
    > Run mod study . --last-recipe-run --data-table <DATA-TABLE> to examine the following data tables produced by this recipe:
          org.openrewrite.table.RecipeRunStats
          org.openrewrite.table.SourcesFileResults
          org.openrewrite.table.SourcesFiles
    > Run npm install -g diff2html-cli to produce patch files on subsequent runs that are easier to view
    > Run mod git checkout . -b hotfix --last-recipe-run to prepare a hotfix branch for applying the changes
    > Run mod git apply . --last-recipe-run to apply the changes
    > Run mod git apply . --recipe-run 20240429093354-reHx5 to apply the changes

MOD SUCCEEDED in (1m 48s)
```

</details>

{% hint style="info" %}
You can command/control + click the patch file produced for each repository to view the diff.
{% endhint %}

#### Step 5: Run mod study to view a data table

Recipes can produce data tables as a recipe run proceeds. Data tables are, effectively, tabular data in a schema that is defined by the recipe.

Let's take a look at the data table for which source files had results:

```bash
mod study . --last-recipe-run --data-table SourcesFileResults
```

<details>

<summary>You should see results similar to the following.</summary>

```bash
Moderne CLI 3.13.6

Found recipe run 20240429093354-reHx5

> Selecting repositories

> Netflix/blitz4j@master
> Netflix/dynomite-manager@dev
> Netflix/Fenzo@master
> Netflix/hollow@master
> Netflix/ndbench@master
> Netflix/Priam@3.x
> spring-cloud/spring-cloud-circuitbreaker@main
> spring-cloud/spring-cloud-common-security-config@main
> spring-cloud/spring-cloud-core-tests@main
> spring-cloud/spring-cloud-netflix@main
> spring-projects/spring-hateoas-examples@main
> spring-projects/spring-petclinic@main
Selected 12 repositories (0.15s)

> Building a combined data table from results on every repository

> Netflix/blitz4j@master
    ✓ Added 112 rows
> Netflix/dynomite-manager@dev
    ✓ Added 485 rows
> Netflix/Fenzo@master
    ✓ Added 702 rows
> Netflix/hollow@master
    ✓ Added 4763 rows
> Netflix/ndbench@master
    ✓ Added 951 rows
> Netflix/Priam@3.x
    ✓ Added 1419 rows
> spring-cloud/spring-cloud-circuitbreaker@main
    ✓ Did not produce any rows for this data table
> spring-cloud/spring-cloud-common-security-config@main
    ✓ Added 196 rows
> spring-cloud/spring-cloud-core-tests@main
    ✓ Did not produce any rows for this data table
> spring-cloud/spring-cloud-netflix@main
    ✓ Added 13 rows
> spring-projects/spring-hateoas-examples@main
    ✓ Added 332 rows
> spring-projects/spring-petclinic@main
    ✓ Added 1 rows
Studied 12 repositories (24s)

* What to do next
    > Open /Users/mikesol/workshop/default/SourcesFileResults.xlsx

MOD SUCCEEDED in (25s)
```

</details>

You can open up the Excel output that was produced to see that on these 12 repositories, thousands of changes were made.

#### Step 6: Using templates with mod study

You can modify the `mod study` command to add a `--template` argument that lets you change the structure of the produced table.

Let's install and run the `FindMethods` recipe to demonstrate this (if you didn't already install it earlier):

```bash
mod config recipes moderne install FindMethods
# Select the first one (org.openrewrite.java.search.FindMethods)

mod run . --recipe FindMethods -PmethodPattern="java.util.List add(..)"
```

You can then filter the data table down to only a couple columns we're interested in and use a GoTemplate to produce a markdown file containing code samples for all of the matching methods found across all of the repositories:

{% code overflow="wrap" %}
````bash
mod study . --last-recipe-run --data-table MethodCalls --json sourceFile,method --template '{{"# Search results\n\n"}}{{range .}}{{"* "}}{{.sourceFile}}{{"\n```\n"}}{{.method}}{{"\n```\n"}}{{end}}' > methods.md 
````
{% endcode %}

Open up `methods.md` in your favorite markdown editor to view the results.

### (Optional) Fix static code analysis issues

If you have time, we recommend trying out one of the showcase recipes in OpenRewrite: [common static analysis](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CommonStaticAnalysis). This recipe is composed of 50+ recipes that find and fix common mistakes people make.

&#x20;Ensure you're still in the `$HOME/workshop/default` directory:

```bash
cd $HOME/workshop/default
```

1. Run the common static analysis recipe:

```bash
mod run . --recipe org.openrewrite.staticanalysis.CommonStaticAnalysis
```

<details>

<summary>You should see results similar to:</summary>

```bash
Moderne CLI 3.13.6

> Selecting repositories

> Netflix/blitz4j@master
> Netflix/dynomite-manager@dev
> Netflix/Fenzo@master
> Netflix/hollow@master
> Netflix/ndbench@master
> Netflix/Priam@3.x
> spring-cloud/spring-cloud-circuitbreaker@main
> spring-cloud/spring-cloud-common-security-config@main
> spring-cloud/spring-cloud-core-tests@main
> spring-cloud/spring-cloud-netflix@main
> spring-projects/spring-hateoas-examples@main
> spring-projects/spring-petclinic@main
Selected 12 repositories (0.4s)

> Running recipe org.openrewrite.staticanalysis.CommonStaticAnalysis

> Netflix/blitz4j@master
    ✓ Fix results at /Users/mikesol/workshop/default/blitz4j/.moderne/run/20240429094336-dm2W2/fix.patch
> Netflix/dynomite-manager@dev
    ✓ Fix results at /Users/mikesol/workshop/default/dynomite-manager/.moderne/run/20240429094336-dm2W2/fix.patch
> Netflix/Fenzo@master
    ✓ Fix results at /Users/mikesol/workshop/default/Fenzo/.moderne/run/20240429094336-dm2W2/fix.patch
> Netflix/hollow@master
    ✓ Fix results at /Users/mikesol/workshop/default/hollow/.moderne/run/20240429094336-dm2W2/fix.patch
> Netflix/ndbench@master
    ✓ Fix results at /Users/mikesol/workshop/default/ndbench/.moderne/run/20240429094336-dm2W2/fix.patch
> Netflix/Priam@3.x
    ✓ Fix results at /Users/mikesol/workshop/default/Priam/.moderne/run/20240429094336-dm2W2/fix.patch
> spring-cloud/spring-cloud-circuitbreaker@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-cloud-circuitbreaker/.moderne/run/20240429094336-dm2W2/fix.patch
> spring-cloud/spring-cloud-common-security-config@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-cloud-common-security-config/.moderne/run/20240429094336-dm2W2/fix.patch
> spring-cloud/spring-cloud-core-tests@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-cloud-core-tests/.moderne/run/20240429094336-dm2W2/fix.patch
> spring-cloud/spring-cloud-netflix@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-cloud-netflix/.moderne/run/20240429094336-dm2W2/fix.patch
> spring-projects/spring-hateoas-examples@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-hateoas-examples/.moderne/run/20240429094336-dm2W2/fix.patch
> spring-projects/spring-petclinic@main
    ✓ Fix results at /Users/mikesol/workshop/default/spring-petclinic/.moderne/run/20240429094336-dm2W2/fix.patch
Found results on 12 repositories (1m 38s)

31m 13s saved by using previously built LSTs

* What to do next
    > Click on one of the patch links above to view the changes on a particular repository
    > Run mod study . --last-recipe-run --data-table <DATA-TABLE> to examine the following data tables produced by this recipe:
          org.openrewrite.table.RecipeRunStats
          org.openrewrite.table.SourcesFileResults
    > Run npm install -g diff2html-cli to produce patch files on subsequent runs that are easier to view
    > Run mod git checkout . -b hotfix --last-recipe-run to prepare a hotfix branch for applying the changes
    > Run mod git apply . --last-recipe-run to apply the changes
    > Run mod git apply . --recipe-run 20240429094336-dm2W2 to apply the changes

MOD SUCCEEDED in (1m 39s)
```

</details>

2. You can examine all the changes the recipe would make by command/ctrl clicking on the patch file that is generated by the recipe run.

<details>

<summary>You should see results similar to:</summary>

```diff
diff --git a/src/main/java/com/netflix/blitz4j/DefaultBlitz4jConfig.java b/src/main/java/com/netflix/blitz4j/DefaultBlitz4jConfig.java
index bfe7b2f..527895e 100644
--- a/src/main/java/com/netflix/blitz4j/DefaultBlitz4jConfig.java
+++ b/src/main/java/com/netflix/blitz4j/DefaultBlitz4jConfig.java
@@ -46,7 +46,7 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
 
     private static final String NETFLIX_BLITZ4J_LOCKFREE = "netflix.blitz4j.lockfree";
     // Use concurrent hash map to avoid multithreaded contention
-    private Map<String, Object> propsMap = new ConcurrentHashMap<String, Object>();
+    private final Map<String, Object> propsMap = new ConcurrentHashMap<>();
 
     private static final DynamicPropertyFactory CONFIGURATION = DynamicPropertyFactory
             .getInstance();
diff --git a/src/main/java/com/netflix/blitz4j/NFHierarchy.java b/src/main/java/com/netflix/blitz4j/NFHierarchy.java
index 32392e1..db79074 100644
--- a/src/main/java/com/netflix/blitz4j/NFHierarchy.java
+++ b/src/main/java/com/netflix/blitz4j/NFHierarchy.java
@@ -37,12 +37,12 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
  */
 public class NFHierarchy extends Hierarchy {
     private LoggerFactory myFactory;
-    private AbstractQueue<HierarchyEventListener> listeners;
+    private final AbstractQueue<HierarchyEventListener> listeners;
 
     public NFHierarchy(Logger root) {
         super(root);
         myFactory = new NFCategoryFactory();
-        listeners = new ConcurrentLinkedQueue<HierarchyEventListener>();
+        listeners = new ConcurrentLinkedQueue<>();
     }
 
     /*
diff --git a/src/main/java/com/netflix/blitz4j/AsyncAppender.java b/src/main/java/com/netflix/blitz4j/AsyncAppender.java
index 4993d9b..585b490 100644
--- a/src/main/java/com/netflix/blitz4j/AsyncAppender.java
+++ b/src/main/java/com/netflix/blitz4j/AsyncAppender.java
@@ -83,10 +83,10 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
     private MessageBatcher<LoggingEvent> batcher;
     private String originalAppenderName;
     private static final String LOGGER_ASYNC_APPENDER = "asyncAppenders";
-    private AppenderAttachableImpl appenders = new AppenderAttachableImpl();
+    private final AppenderAttachableImpl appenders = new AppenderAttachableImpl();
 
     // The Map to the summary events
-    private ConcurrentMap<String, LogSummary> logSummaryMap = new ConcurrentHashMap<String, LogSummary>();
+    private ConcurrentMap<String, LogSummary> logSummaryMap = new ConcurrentHashMap<>();
 
     private Timer putBufferTimeTracer;
     private Timer putDiscardMapTimeTracer;
@@ -108,25 +108,30 @@
         int result = 1;
         result = prime
                 * result
-                + ((originalAppenderName == null) ? 0 : originalAppenderName
+                + (originalAppenderName == null ? 0 : originalAppenderName
                         .hashCode());
         return result;
     }
 
     @Override
     public boolean equals(Object obj) {
-        if (this == obj)
+        if (this == obj) {
             return true;
-        if (obj == null)
+        }
+        if (obj == null) {
             return false;
-        if (getClass() != obj.getClass())
+        }
+        if (getClass() != obj.getClass()) {
             return false;
+        }
         AsyncAppender other = (AsyncAppender) obj;
         if (originalAppenderName == null) {
-            if (other.originalAppenderName != null)
+            if (other.originalAppenderName != null) {
                 return false;
-        } else if (!originalAppenderName.equals(other.originalAppenderName))
+            }
+        } else if (!originalAppenderName.equals(other.originalAppenderName)) {
             return false;
+        }
         return true;
     }
 
@@ -220,8 +225,8 @@
      * @see org.apache.log4j.AppenderSkeleton#append(org.apache.log4j.spi.LoggingEvent)
      */
     public void append(final LoggingEvent event) {
-        boolean isBufferSpaceAvailable = (batcher.isSpaceAvailable() && (logSummaryMap
-                .size() == 0));
+        boolean isBufferSpaceAvailable = batcher.isSpaceAvailable() && (logSummaryMap
+                .size() == 0);
         boolean isBufferPutSuccessful = false;
         LocationInfo locationInfo = null;
         // Reject it when we have a fast property as these can be expensive
@@ -405,15 +410,14 @@
         public LoggingEvent createEvent() {
             String msg = MessageFormat
                     .format("{1}[Summarized {0} messages of this type because the internal buffer was full]",
-                            new Object[] { new Integer(count),
+                            new Object[] { Integer.valueOf(count),
                                     event.getMessage() });
-            LoggingEvent loggingEvent = new LoggingEvent(
+            return new LoggingEvent(
                     event.getFQNOfLoggerClass(), event.getLogger(),
                     event.getTimeStamp(), event.getLevel(), msg, Thread
                             .currentThread().getName(),
                     event.getThrowableInformation(), null, null,
                     event.getProperties());
-            return loggingEvent;
         }
     }
 
diff --git a/src/main/java/com/netflix/blitz4j/LoggingConfiguration.java b/src/main/java/com/netflix/blitz4j/LoggingConfiguration.java
index 7283e14..f0e9232 100644
--- a/src/main/java/com/netflix/blitz4j/LoggingConfiguration.java
+++ b/src/main/java/com/netflix/blitz4j/LoggingConfiguration.java
@@ -85,18 +85,18 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
     private static final String ASYNC_APPENDERNAME_SUFFIX = "_ASYNC";
     private static final String ROOT_CATEGORY = "rootCategory";
     private static final String ROOT_LOGGER = "rootLogger";
-    
-    private Map<String, String> originalAsyncAppenderNameMap = new HashMap<String, String>();
+
+    private final Map<String, String> originalAsyncAppenderNameMap = new HashMap<>();
     private BlitzConfig blitz4jConfig;
-    private Properties initialProps = new Properties();
-    private Properties overrideProps = new Properties();
+    private final Properties initialProps = new Properties();
+    private final Properties overrideProps = new Properties();
     private final ExecutorService executorPool;
     private final AtomicInteger pendingRefreshes = new AtomicInteger();
     private final AtomicInteger refreshCount = new AtomicInteger();
     private Logger logger;
     private static final int MIN_DELAY_BETWEEN_REFRESHES = 200;
     private static final CharSequence PROP_LOG4J_ASYNC_APPENDERS = "log4j.logger.asyncAppenders";
-    private static LoggingConfiguration instance = new LoggingConfiguration();
+    private static final LoggingConfiguration instance = new LoggingConfiguration();
 
     protected LoggingConfiguration() {
         this.executorPool = Executors.newCachedThreadPool(
@@ -130,7 +130,7 @@
         NFHierarchy nfHierarchy = null;
         
         // Make log4j use blitz4j implementations
-        if ((!NFHierarchy.class.equals(LogManager.getLoggerRepository().getClass()))) {
+        if (!NFHierarchy.class.equals(LogManager.getLoggerRepository().getClass())) {
             nfHierarchy = new NFHierarchy(new NFRootLogger(org.apache.log4j.Level.INFO));
             org.apache.log4j.LogManager.setRepositorySelector(new NFRepositorySelector(nfHierarchy), guard);
         }
@@ -287,7 +287,7 @@
      * java.lang.String, java.lang.Object, boolean)
      */
     public synchronized void addProperty(Object source, String name, Object value, boolean beforeUpdate) {
-        if (beforeUpdate == false && isLog4JProperty(name)) {
+        if (!beforeUpdate && isLog4JProperty(name)) {
             overrideProps.put(name, value);
             reConfigureAsynchronously();
         }
@@ -308,7 +308,7 @@
      * java.lang.String, java.lang.Object, boolean)
      */
     public synchronized void clearProperty(Object source, String name, Object value, boolean beforeUpdate) {
-        if (beforeUpdate == false && isLog4JProperty(name)) {
+        if (!beforeUpdate && isLog4JProperty(name)) {
             overrideProps.remove(name);
             reConfigureAsynchronously();
         }
@@ -345,7 +345,7 @@
      */
     public synchronized void setProperty(Object source, String name, Object value,
             boolean beforeUpdate) {
-        if (beforeUpdate == false && isLog4JProperty(name)) {
+        if (!beforeUpdate && isLog4JProperty(name)) {
             overrideProps.put(name, value);
             reConfigureAsynchronously();
         }
diff --git a/src/main/java/com/netflix/blitz4j/LoggingContext.java b/src/main/java/com/netflix/blitz4j/LoggingContext.java
index 7f523d2..42259f6 100644
--- a/src/main/java/com/netflix/blitz4j/LoggingContext.java
+++ b/src/main/java/com/netflix/blitz4j/LoggingContext.java
@@ -43,18 +43,18 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
  * @author Karthik Ranganathan
  * 
  */
-public class LoggingContext {
+public final class LoggingContext {
 
     public static final String CONTEXT_LEVEL = "contextlevel";
     private static final BlitzConfig CONFIGURATION = LoggingConfiguration.getInstance().getConfiguration();
     private static final String LOCATION_INFO = "locationInfo";
-    private ThreadLocal<StackTraceElement> stackLocal = new ThreadLocal<StackTraceElement>();
-    private ThreadLocal<LoggingEvent> loggingEvent = new ThreadLocal<LoggingEvent>();
-    private ThreadLocal<Level> contextLevel = new ThreadLocal<Level>();
+    private final ThreadLocal<StackTraceElement> stackLocal = new ThreadLocal<>();
+    private final ThreadLocal<LoggingEvent> loggingEvent = new ThreadLocal<>();
+    private final ThreadLocal<Level> contextLevel = new ThreadLocal<>();
     private final AtomicReference<HashSet<Category>> loggerNeedsLocationRef = new AtomicReference<>(new HashSet<Category>());
 
     private static final LoggingContext instance = new LoggingContext();
-    private Timer stackTraceTimer = Monitors.newTimer("getStacktraceElement",
+    private final Timer stackTraceTimer = Monitors.newTimer("getStacktraceElement",
             TimeUnit.NANOSECONDS);
 
     private LoggingContext() {
diff --git a/src/main/java/com/netflix/blitz4j/NFLockFreeLogger.java b/src/main/java/com/netflix/blitz4j/NFLockFreeLogger.java
index da5af48..5fe64eb 100644
--- a/src/main/java/com/netflix/blitz4j/NFLockFreeLogger.java
+++ b/src/main/java/com/netflix/blitz4j/NFLockFreeLogger.java
@@ -39,7 +39,7 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
 public class NFLockFreeLogger extends Logger {
 
     AppenderAttachableImpl aai;
-    private LoggingContext loggingContext = LoggingContext.getInstance();;
+    private final LoggingContext loggingContext = LoggingContext.getInstance();;
 
     protected NFLockFreeLogger(String name) {
         super(name);
@@ -75,7 +75,7 @@
         int writes = 0;
 
         for (Category c = this; c != null; c = c.getParent()) {
-            if (!(NFLockFreeLogger.class.isInstance(c))) {
+            if (!NFLockFreeLogger.class.isInstance(c)) {
                 continue;
             }
             if (((NFLockFreeLogger) c).aai != null) {
@@ -99,10 +99,11 @@
      */
     @Override
     public Enumeration getAllAppenders() {
-        if (aai == null)
+        if (aai == null) {
             return NullEnumeration.getInstance();
-        else
+        } else {
             return aai.getAllAppenders();
+        }
     }
 
     /*
@@ -113,8 +114,9 @@
     @Override
     public Appender getAppender(String name) {
 
-        if (aai == null || name == null)
+        if (aai == null || name == null) {
             return null;
+        }
 
         return aai.getAppender(name);
     }
@@ -126,9 +128,9 @@
      */
     @Override
     public boolean isAttached(Appender appender) {
-        if (appender == null || aai == null)
+        if (appender == null || aai == null) {
             return false;
-        else {
+        } else {
             return aai.isAttached(appender);
         }
     }
diff --git a/src/main/java/com/netflix/blitz4j/LoggerCache.java b/src/main/java/com/netflix/blitz4j/LoggerCache.java
index be52fa6..48f34dd 100644
--- a/src/main/java/com/netflix/blitz4j/LoggerCache.java
+++ b/src/main/java/com/netflix/blitz4j/LoggerCache.java
@@ -32,9 +32,9 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
  * @author Karthik Ranganathan
  *
  */
-public class LoggerCache {
-    private static LoggerCache instance = new LoggerCache();
-    private Map<String, Logger> appenderLoggerMap = new ConcurrentHashMap<String, Logger>(5000);
+public final class LoggerCache {
+    private static final LoggerCache instance = new LoggerCache();
+    private final Map<String, Logger> appenderLoggerMap = new ConcurrentHashMap<>(5000);
     
   
   private LoggerCache() {
diff --git a/src/main/java/com/netflix/blitz4j/NFAppenderAttachableImpl.java b/src/main/java/com/netflix/blitz4j/NFAppenderAttachableImpl.java
index e240e85..194cd6c 100644
--- a/src/main/java/com/netflix/blitz4j/NFAppenderAttachableImpl.java
+++ b/src/main/java/com/netflix/blitz4j/NFAppenderAttachableImpl.java
@@ -37,8 +37,8 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
 public class NFAppenderAttachableImpl extends AppenderAttachableImpl implements
 AppenderAttachable {
 
-    protected AbstractQueue<Appender> appenderList = new ConcurrentLinkedQueue<Appender>();
-    private AbstractQueue<String> configuredAppenderList = new ConcurrentLinkedQueue<String>();
+    protected AbstractQueue<Appender> appenderList = new ConcurrentLinkedQueue<>();
+    private final AbstractQueue<String> configuredAppenderList = new ConcurrentLinkedQueue<>();
 
     /*
      * (non-Javadoc)
@@ -104,9 +104,9 @@
      */
     @Override
     public Enumeration getAllAppenders() {
-        if (appenderList == null)
+        if (appenderList == null) {
             return null;
-        else {
+        } else {
             Iterator<Appender> it = appenderList.iterator();
             return new IteratorEnumeration(it);
         }
@@ -121,8 +121,9 @@
      */
     @Override
     public Appender getAppender(String name) {
-        if (appenderList == null || name == null)
+        if (appenderList == null || name == null) {
             return null;
+        }
         Appender appender;
         Iterator<Appender> it = appenderList.iterator();
         while (it.hasNext()) {
@@ -143,8 +144,9 @@
      */
     @Override
     public boolean isAttached(Appender appender) {
-        if (appenderList == null || appender == null)
+        if (appenderList == null || appender == null) {
             return false;
+        }
         Appender a;
         Iterator<Appender> it = appenderList.iterator();
         while (it.hasNext()) {
@@ -175,7 +177,7 @@
                 // This call is primarily made during dynamic log4 reconfiguration and we will
                 // retain the ability to queue the messages.
                 for (String asyncAppender : asyncAppenders) {
-                    if (!(asyncAppender.equals(a.getClass().getName()))) {
+                    if (!asyncAppender.equals(a.getClass().getName())) {
                          it.remove();
                          a.close();
                     }
@@ -193,8 +195,9 @@
      */
     @Override
     public void removeAppender(Appender appender) {
-        if (appender == null || appenderList == null)
+        if (appender == null || appenderList == null) {
             return;
+        }
         appenderList.remove(appender);
         configuredAppenderList.remove(appender.getName());
     }
@@ -208,8 +211,9 @@
      */
     @Override
     public void removeAppender(String name) {
-        if (name == null || appenderList == null)
+        if (name == null || appenderList == null) {
             return;
+        }
         Iterator<Appender> it = appenderList.iterator();
         while (it.hasNext()) {
             Appender a = (Appender) it.next();
diff --git a/src/main/java/com/netflix/logging/log4jAdapter/NFPatternParser.java b/src/main/java/com/netflix/logging/log4jAdapter/NFPatternParser.java
index 2ce0eb8..a999847 100644
--- a/src/main/java/com/netflix/logging/log4jAdapter/NFPatternParser.java
+++ b/src/main/java/com/netflix/logging/log4jAdapter/NFPatternParser.java
@@ -35,7 +35,7 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
  * @author Karthik Ranganathan
  */
 public class NFPatternParser extends PatternParser {
-    private static List<Character> contextCharList = Arrays.asList(Character.valueOf('c'),
+    private static final List<Character> contextCharList = Arrays.asList(Character.valueOf('c'),
             Character.valueOf('l'),
             Character.valueOf('M'),
             Character.valueOf('C'),
@@ -82,10 +82,10 @@
                 case 'L':
                     return locationInfo.getLineNumber();
                 case 'l':
-                    return (locationInfo.getFileName() + ":"
+                    return locationInfo.getFileName() + ":"
                             + locationInfo.getClassName() + " "
                             + locationInfo.getLineNumber() + " " + locationInfo
-                            .getMethodName());
+                            .getMethodName();
                 case 'F':
                     return locationInfo.getFileName();
             }
diff --git a/src/main/java/com/netflix/logging/messaging/MessageBatcher.java b/src/main/java/com/netflix/logging/messaging/MessageBatcher.java
index b2669be..c3aff7f 100644
--- a/src/main/java/com/netflix/logging/messaging/MessageBatcher.java
+++ b/src/main/java/com/netflix/logging/messaging/MessageBatcher.java
@@ -89,7 +89,7 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
 
     protected ThreadPoolExecutor processor;
 
-    protected MessageProcessor target = null;
+    protected MessageProcessor target;
 
     /**
      * The number of batches that are currently being processed by the target
@@ -111,15 +111,15 @@
 
     private volatile boolean isShutDown;
 
-    private AtomicLong numberAdded = new AtomicLong();
+    private final AtomicLong numberAdded = new AtomicLong();
 
-    private AtomicLong numberDropped = new AtomicLong();
+    private final AtomicLong numberDropped = new AtomicLong();
 
-    private boolean blockingProperty;
+    private final boolean blockingProperty;
 
     private boolean isCollectorPaused;
 
-    private Counter processCount;
+    private final Counter processCount;
     public static final String POOL_MAX_THREADS = "maxThreads";
     public static final String POOL_MIN_THREADS = "minThreads";
     public static final String POOL_KEEP_ALIVE_TIME = "keepAliveTime";
@@ -129,7 +129,7 @@
         this.target = target;
         queue = new ArrayBlockingQueue<T>(CONFIGURATION.getBatcherQueueMaxMessages(this.name));
         setBatchMaxMessages(CONFIGURATION.getBatchSize(this.name));
-        batch = new ArrayList<Object>(maxMessages);
+        batch = new ArrayList<>(maxMessages);
         setBatchMaxDelay(CONFIGURATION
                 .getBatcherMaxDelay(this.name));
         collector = new Collector(this, this.name + COLLECTOR_SUFFIX);
@@ -196,7 +196,7 @@
      * @return - true, if available false otherwise
      */
     public boolean isSpaceAvailable() {
-        return (queue.remainingCapacity() > 0);
+        return queue.remainingCapacity() > 0;
     }
 
     /**
@@ -347,7 +347,7 @@
         
         int waitTimeinMillis = CONFIGURATION.getBatcherWaitTimeBeforeShutdown(this.name);
         long timeToWait = waitTimeinMillis + System.currentTimeMillis();
-        while ((queue.size() > 0 || batch.size() > 0)
+        while ((!queue.isEmpty() || !batch.isEmpty())
                 && (System.currentTimeMillis() < timeToWait)) {
             try {
                 Thread.sleep(1000);
diff --git a/src/main/java/com/netflix/logging/messaging/BatcherFactory.java b/src/main/java/com/netflix/logging/messaging/BatcherFactory.java
index cf47699..cb0f28b 100644
--- a/src/main/java/com/netflix/logging/messaging/BatcherFactory.java
+++ b/src/main/java/com/netflix/logging/messaging/BatcherFactory.java
@@ -35,10 +35,10 @@ org.openrewrite.staticanalysis.CommonStaticAnalysis
  *
  */
 public class BatcherFactory {
-	private static BatcherFactory batcherFactory = new BatcherFactory();
+    private static final BatcherFactory batcherFactory = new BatcherFactory();
 
-	// List of all batchers cached
-	private static Map<String, MessageBatcher> batcherMap = new HashMap<String, MessageBatcher>();;
+    // List of all batchers cached
+    private static final Map<String, MessageBatcher> batcherMap = new HashMap<>();;
 
 	
     /**
@@ -47,8 +47,7 @@
      * @return - the batcher associated with the name
      */
 	public static MessageBatcher getBatcher(String name) {
-		MessageBatcher batcher = batcherMap.get(name);
-		return batcher;
+		return batcherMap.get(name);
 	}
```

</details>

3. As before, if you like the changes, you can apply the changes by running:

```bash
mod git apply . --last-recipe-run
```

4. You could then run tests on each of the projects to ensure everything still builds successfully before committing the results.

You can probably imagine that this recipe resolves a lot of technical debt when run at scale throughout an organization.
