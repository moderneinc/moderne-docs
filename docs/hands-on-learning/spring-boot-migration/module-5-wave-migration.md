---
sidebar_label: "Module 5: Finish migration in waves"
description: Install a custom recipe and complete the Spring Boot 4 upgrade in waves.
---

# Module 5: Finishing your migration in waves

In this module, you will install a custom recipe to handle the QueryDSL issues, build a composite upgrade recipe, and upgrade each wave of repositories to Spring Boot 4. QueryDSL is a common migration blocker because older versions tend to emit code that is tied to `javax.*` APIs and older Spring Boot baselines.

## Exercise 5-1: Install the QueryDSL recipe locally

### Goals for this exercise

* Build and install a custom recipe that upgrades QueryDSL

### Steps

You will need a custom recipe to rename packages, update dependencies, and adjust APIs to match the newer QueryDSL versions used with Spring Boot 3+. Authoring custom recipes is outside the scope of this workshop, so a custom recipe has been provided for you.

:::tip
Check out the [Fundamentals of Recipe Authorship](../fundamentals/workshop-overview.md) if you are interested in learning about writing custom recipes.
:::

To build and install the custom recipe, run the following commands:

```bash
cd $PROJECTS
git clone https://github.com/modernetraining/rewrite-querydsl.git
cd rewrite-querydsl
mvn clean install
mod config recipes jar install org.openrewrite.recipe:rewrite-querydsl:0.1.0-SNAPSHOT
```

## Exercise 5-2: Create the composite upgrade recipe

### Goals for this exercise

* Build a composite recipe for dependency bumps, Spring Boot 4, and QueryDSL

### Steps

You could try to just run the custom QueryDSL recipe, but there is a chicken-and-egg issue: Spring Boot 4 expects `jakarta.*` APIs, but QueryDSL 3 generates `javax.*`-based code that will not compile. The solution is to upgrade QueryDSL and Spring Boot in a single, repeatable recipe. You can do that using a composite YAML recipe similar to the way you built one in Module 1.

Additionally, since you will be upgrading in waves to ensure that custom library dependencies are handled in the proper sequence, you also need to make sure to update the dependency versions in each wave to use the newly released version from the previous wave. So you'll need to include this step in the composite recipe as well.

:::note
This is an example of a migration recipe _freight train_. You'll often build a custom recipe that runs the out-of-the-box recipes and then applies some additional ones that are needed in your particular environment. In this workshop, the composite recipe upgrades internal dependencies, applies the Spring Boot 4 recipe, and then runs the QueryDSL upgrade.
:::

1. Create a local YAML recipe file. This composite recipe is named `org.openrewrite.recipe.querydsl.CustomUpgradeSpringBoot_4_0` and combines [`org.openrewrite.java.dependencies.UpgradeDependencyVersion`](https://docs.openrewrite.org/recipes/java/dependencies/upgradedependencyversion), [`io.moderne.java.spring.boot4.UpgradeSpringBoot_4_0`](https://docs.openrewrite.org/recipes/java/spring/boot4/upgradespringboot_4_0), and `org.openrewrite.recipe.querydsl.UpgradeToQueryDsl5`. If you prefer, you can copy and paste the YAML directly into a new file named `CustomUpgradeSpringBoot_4_0.yml` instead of using the command.

```bash
cat <<'EOF' > CustomUpgradeSpringBoot_4_0.yml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.recipe.querydsl.CustomUpgradeSpringBoot_4_0
displayName: CustomUpgradeSpringBoot_4_0
description: Upgrade internal deps, Spring Boot 4.0, and QueryDSL 5.
recipeList:
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: com.example.ecom
      artifactId: "*"
      newVersion: 1.x
  - io.moderne.java.spring.boot4.UpgradeSpringBoot_4_0
  - org.openrewrite.recipe.querydsl.UpgradeToQueryDsl5
EOF
```

Take a look at each recipe in the recipe list of this YAML file so you understand what steps it will take.

:::warning
You can't use recipe builder in this case since you are referring to a custom recipe that is not available in the platform.
:::

2. Install `org.openrewrite.recipe.querydsl.CustomUpgradeSpringBoot_4_0` locally with the CLI:

```bash
mod config recipes yaml install CustomUpgradeSpringBoot_4_0.yml
```

## Exercise 5-3: Upgrade wave 0

### Goals for this exercise

* Apply the composite recipe to wave 0
* Build and release wave 0

### Steps

Now that the custom upgrade recipe is ready, it's time to upgrade each wave! 

1. Start by upgrading Wave 0 using `org.openrewrite.recipe.querydsl.CustomUpgradeSpringBoot_4_0` with the following commands. 

```bash
mod run $WORKSPACE/Wave0 --recipe org.openrewrite.recipe.querydsl.CustomUpgradeSpringBoot_4_0
mod git apply $WORKSPACE/Wave0 --last-recipe-run
```

:::note
Notice you are referencing the `Wave0` directory for each of the `mod` commands. This is taking advantage of the organizational directory structure to target only the wave you want to apply changes to so you can do each wave individually.
:::

2. Now that the changes have been applied, verify the build and release for the wave:

```bash
$WORKSHOP/release.sh 0
```

This isn't surprising since you saw Wave 0 successfully build earlier. It was Wave 1 that failed last time, so the real test will be upgrading Wave 1.

## Exercise 5-4: Upgrade wave 1

### Goals for this exercise

* Apply the composite recipe to wave 1
* Build and release wave 1

### Steps

1. Once again, run `org.openrewrite.recipe.querydsl.CustomUpgradeSpringBoot_4_0` and apply the changes, but this time, targeting the `Wave1` directory:

```bash
mod run $WORKSPACE/Wave1 --recipe org.openrewrite.recipe.querydsl.CustomUpgradeSpringBoot_4_0
mod git apply $WORKSPACE/Wave1 --last-recipe-run
```

2. This time, build Wave 1 to make sure there are no errors, then release it:

```bash
$WORKSHOP/build.sh 1
$WORKSHOP/release.sh 1
```

## Exercise 5-5: Refresh DevCenter and continue waves

### Goals for this exercise

* Refresh DevCenter and confirm progress
* Continue running wave upgrades sequentially

### Steps

At the end of Module 1, you used an organizational DevCenter to see the status of the migration across repositories. Now that you've successfully upgraded a handful of repositories, you can generate a new DevCenter dashboard locally to compare and track your progress.

1. First, you'll need to rebuild your LSTs since the code has been changed since the last LSTs were built:

```bash
mod build $WORKSPACE
```

2. With the LSTs up-to-date, you can run the DevCenter recipe ([`io.moderne.devcenter.DevCenterStarter`](https://docs.openrewrite.org/recipes/devcenter/devcenterstarter)) and then the `mod devcenter` command to generate the dashboard:

```bash
mod run $WORKSPACE --recipe io.moderne.devcenter.DevCenterStarter
mod devcenter $WORKSPACE --last-recipe-run
```

<details>
<summary>Reference output</summary>

```text
   ▛▀▀▚▖  ▗▄▟▜
   ▌   ▜▄▟▀  ▐
   ▛▀▀█▀▛▀▀▀▀▜
   ▌▟▀  ▛▀▀▀▀▜
   ▀▀▀▀▀▀▀▀▀▀▀
Moderne CLI 3.56.5

⏺ Reading organization

Found 1 organization containing 11 repositories (1s)

⏺ Running recipe io.moderne.devcenter.DevCenterStarter

▶ modernetraining/example-ecom-security@main
    Search results
    ✓ Recipe run complete
▶ modernetraining/example-ecom-rest-client@main
    Search results
    ✓ Recipe run complete
▶ modernetraining/example-ecom-common@main
    Search results
    ✓ Recipe run complete
▶ modernetraining/example-ecom-notification-service@main
    Search results
    ✓ Recipe run complete
▶ modernetraining/example-ecom-risk-score-service@main
    Search results
    ✓ Recipe run complete
▶ modernetraining/example-ecom-kyc-service@main
    Search results
    ✓ Recipe run complete
▶ modernetraining/example-ecom-inventory-service@main
    Search results
    ✓ Recipe run complete
▶ modernetraining/example-ecom-fraud-detection-service@main
    Fix results
    Search results
    ✓ Recipe run complete
▶ modernetraining/example-ecom-customer-service@main
    Fix results
    Search results
    ✓ Recipe run complete
▶ modernetraining/example-ecom-product-service@main
    Fix results
    Search results
    ✓ Recipe run complete
▶ modernetraining/example-ecom-order-service@main
    Fix results
    Search results
    ✓ Recipe run complete
Done (8s)

1m 11s saved by using previously built LSTs
2h 55m saved by using recipes

Produced results for 11 repositories.

⏺ What to do next
    > Click on one of the patch links above to view the changes on a particular repository
    > Run mod study to examine the following data tables produced by this recipe:
          > mod study /Users/somebody/workspaces/migration-practice-workspace --last-recipe-run --data-table SecurityIssues
          > mod study /Users/somebody/workspaces/migration-practice-workspace --last-recipe-run --data-table UpgradesAndMigrations
          > mod study /Users/somebody/workspaces/migration-practice-workspace --last-recipe-run --data-table DependenciesInUse
          > mod study /Users/somebody/workspaces/migration-practice-workspace --last-recipe-run --data-table ExplainDependenciesInUse
          > mod study /Users/somebody/workspaces/migration-practice-workspace --last-recipe-run --data-table RecipeRunStats
          > mod study /Users/somebody/workspaces/migration-practice-workspace --last-recipe-run --data-table SearchResults
          > mod study /Users/somebody/workspaces/migration-practice-workspace --last-recipe-run --data-table SourcesFileResults
    > Run mod devcenter /Users/somebody/workspaces/migration-practice-workspace --last-recipe-run to generate a DevCenter dashboard.
    > Run mod git checkout /Users/somebody/workspaces/migration-practice-workspace -b refactor/DevCenterStarter --last-recipe-run to prepare a refactor/DevCenterStarter branch for applying the changes
    > Run mod git apply /Users/somebody/workspaces/migration-practice-workspace --last-recipe-run to apply the changes
    > Run mod git apply /Users/somebody/workspaces/migration-practice-workspace --recipe-run 20260115175824-jLfJP to apply the changes
    > Run mod log runs add /Users/somebody/workspaces/migration-practice-workspace logs.zip --last-recipe-run to aggregate run logs
    > Examine run telemetry

MOD SUCCEEDED in 9s
   ▛▀▀▚▖  ▗▄▟▜
   ▌   ▜▄▟▀  ▐
   ▛▀▀█▀▛▀▀▀▀▜
   ▌▟▀  ▛▀▀▀▀▜
   ▀▀▀▀▀▀▀▀▀▀▀
Moderne CLI 3.56.5

⏺ Reading organization

Found 1 organization containing 11 repositories (1s)
Found recipe run 20260115175824-jLfJP


⏺ Building CSV for upgrades and migrations

▶ Adhoc repository group
    ✓ Data table produced
Done (1s)

⏺ Building CSV for security issues

▶ Adhoc repository group
    ✓ Data table produced
Done (1s)

⏺ Generate DevCenter dashboard

Full DevCenter log

▶ Adhoc repository group
    ✓ Generated dashboard
Done (3s)

DevCenter generated

MOD SUCCEEDED in 4s
```

</details>

3. Open the generated HTML file from the `mod devcenter` output by using ctrl-click (Windows) or cmd-click (Mac) on the `Generated dashboard` link in the output.

4. You should notice:

  * Java 17 is applied across the org
  * Wave 0 and Wave 1 now show Spring Boot 4.0
  * Remaining waves are still pending

5. You can now continue upgrading waves until every repository is on Spring Boot 4. Use the commands as in exercise 5-4, each time targeting the next wave:

```bash
mod run $WORKSPACE/Wave2 --recipe org.openrewrite.recipe.querydsl.CustomUpgradeSpringBoot_4_0
mod git apply $WORKSPACE/Wave2 --last-recipe-run
$WORKSHOP/build.sh 2
$WORKSHOP/release.sh 2

# ...and so on
```

## Takeaways

* Composite “freight train” recipes bundle prerequisite upgrades with the main migration step
* Wave-by-wave upgrades keep dependency releases aligned and reduce downstream breakage
* DevCenter refreshes provide a quick progress check after each wave

## Learn more

* [Fundamentals of recipe development workshop](../fundamentals/workshop-overview.md)
* [Writing and installing recipes](../../user-documentation/moderne-platform/how-to-guides/writing-and-installing-recipes.md)
* [DevCenter overview](../../user-documentation/moderne-platform/getting-started/dev-center.md)
