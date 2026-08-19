---
sidebar_label: "Module 3: Test"
description: Run your recipe against real repositories, compare to the production recipe, and practice the iterate-and-fix loop.
---

# Module 3: Test

In this module, you'll run your recipe against real-world repositories, compare the results to the existing production Jackson recipe, and practice the iterate-and-fix loop. This is where the rubber meets the road. Unit tests verify correctness, but real-world testing reveals gaps.

## Exercise 3-1: Set up the test environment

### Goals for this exercise

* Assemble a working set of repositories from a `repos.csv`
* Get ready to run your recipe against real Jackson 2.x codebases

### Steps

#### Step 1: Get a repos.csv

To run your recipe against real repositories, you need a `repos.csv` that lists the repos to test against. You have two options:

**Option A: Use the pre-built repos.csv (recommended for the workshop)**

Download the curated [repos.csv](/ai-recipes-workshop/repos.csv) with Jackson 2.x repositories into your working set directory:

```bash
mkdir -p working-set
grep -q "working-set" .gitignore || echo "working-set*/" >> .gitignore
curl -o working-set/repos.csv https://docs.moderne.io/ai-recipes-workshop/repos.csv
```

Then sync the working set:

```bash
mod git sync csv working-set working-set/repos.csv --with-sources
```

The sync clones the repositories and downloads their LSTs. This may take a few minutes. The `--with-sources` flag downloads source code so the agent can perform pre-analysis in the next exercise.

**Option B: Have your agent find them**

Agents are good at this with surprisingly little direction — they reach for the [`gh` CLI](https://cli.github.com/) on their own, so a broad instruction usually works better than a prescriptive one. Make sure `gh` is installed and authenticated first (`gh auth status`).

<details>
<summary>Suggested prompt</summary>

> Find 5-10 relevant Java repositories to test a Jackson 2.x → 3.x migration recipe on, and write them to `working-set/repos.csv`. Make sure their builds and tests are passing before including them in the test set.

</details>

The "builds and tests are passing" part matters more than it looks. In Module 3 you judge your recipe by whether the repositories still compile after it runs, and that signal is worthless if they were already broken beforehand.

This takes a few minutes. Nothing syncs on its own, so run the sync command from Option A yourself once the file is written. If you'd rather move on, use Option A and try this on your own time.

The four required columns are `cloneUrl`, `branch`, `origin`, and `path`. See [Creating a repos.csv file](../../user-documentation/moderne-cli/references/repos-csv.md) if you want to check the agent's output or write one by hand.

### Takeaways

* A working set is just a directory of cloned repositories described by a `repos.csv`, synced with `mod git sync csv`.
* Only four columns are required: `cloneUrl`, `branch`, `origin`, and `path`. That's little enough that an agent can assemble one from a GitHub search.
* For workshops, a pre-built repos.csv saves time. Building your own is how you'd test a recipe against the codebases you actually care about.

---

## Exercise 3-2: Run and analyze

### Goals for this exercise

* Run your recipe against real repositories with the Moderne CLI
* Use the agent to perform pre-analysis and set expectations
* Compare predictions to actual results

### Steps

#### Step 1: Run the recipe

Have the agent drive the CLI through the full loop.

<details>
<summary>Suggested prompt</summary>

> Run my Jackson 2→3 migration recipe against the working set. The recipe is in this project, so publish it to Maven local, install the JAR, and set it as the active recipe. Before running, search the source code in the working set to predict which files should be affected. Then build the LSTs and run the recipe, and compare the results to your predictions.

</details>

For reference, the underlying commands are:

```bash
./gradlew publishToMavenLocal
mod config recipes jar install <groupId>:<artifactId>:<version>
mod config recipes active set <RECIPE_PATH>
mod build working-set --streaming
mod run working-set --active-recipe --streaming --parallel 2
```

This will take several minutes. Watch as it goes.

:::note
LSTs must be built before the run. If every repo reports `runOutcome=Skipped`, the `mod build` step didn't complete.
:::

#### Step 2: Review the results

Once the run finishes, review the output. You want to know:
* Which repos the agent predicted would be affected (from pre-analysis)
* Which repos actually had changes
* Any mismatches between predictions and results

If the agent finds mismatches or gaps, it may iterate on its own: fixing the recipe, recompiling, and re-running. This is the core workflow for recipe development against real code. Let it run and review the changes it makes.

### Takeaways

* Pre-analysis sets testable expectations before the recipe runs.
* Real-world repositories often reveal issues that unit tests miss (unexpected patterns, edge cases, classpath differences).
* Mismatches between predictions and results tell the agent exactly what to fix.

---

## Exercise 3-3: Compare to the existing recipe

### Goals for this exercise

* Run the production Jackson 2→3 recipe against the same working set
* Compare your recipe's output to the production recipe's output
* Identify gaps and understand why they exist

### Context

This is the "payoff" moment. The existing [`org.openrewrite.java.jackson.UpgradeJackson_2_3`](https://app.moderne.io/recipes/org.openrewrite.java.jackson.UpgradeJackson_2_3) recipe is a production-quality recipe with 11 sub-recipes covering 100+ transformations. Your recipe covers a scoped subset. Comparing the two answers two key questions:

1. **What did your recipe get right?** These are the transformations where your approach matched the production recipe.
2. **What did it miss?** These are the gaps, and understanding them teaches you what the agent needs to do better next time.

:::note
In practice, you won't have a production recipe to compare against. That's the whole reason you're building one. This exercise is unique to the workshop because the existing recipe gives you a concrete way to validate that the workflow produces correct results. The agent gets the structure correct, and closing gaps is just more iterations of the same workflow.
:::

### Steps

#### Step 1: Run the production recipe and compare

Ask the agent to install and run the existing recipe against the same working set, then compare the results.

<details>
<summary>Suggested prompt</summary>

> Now let's compare our recipe to the production Jackson 2→3 recipe. Install `org.openrewrite.recipe:rewrite-jackson:LATEST` and run `org.openrewrite.java.jackson.UpgradeJackson_2_3` against the same working set. Then compare the diffs: what did our recipe get right, what did it miss, and what type of recipe would close each gap?

</details>

The agent knows the `mod` commands from the previous exercise. It should install the recipe, run it, and analyze the differences.

#### Step 2: Review the comparison

Your recipe should match the production recipe on the high-impact structural changes. Common gaps you'll likely find:

* **More method and type renames**: the production recipe covers dozens more, but these are all straightforward declarative additions to your YAML recipe
* **More dependency changes**: other Jackson modules beyond core and databind, same pattern as what you already built
* **More complex transformations**: changes that require inspecting arguments or conditionally removing statements, similar to the one you already wrote.

You may also find that your results are closer to the production recipe than you expected. That's because you chose high-priority changes that cover the most common patterns. Testing against a larger set of repositories would reveal more edge cases and gaps to close.

### Takeaways

* The agent gets the structure and approach right, and closing the gaps is more iterations of the same workflow.
* A production-quality recipe is built the same way: one transformation at a time, tested against real code.

---

## Next steps

You've now been through the full workflow: plan with AI, build with AI, and test against real code. Here are some ways to keep going:

* **Close the gaps**: Pick one or two gaps from the comparison and add them to your recipe. Each one follows the same loop: write a test, add the transformation, rebuild, re-run, verify.
* **Test against more repositories**: Add more Jackson 2.x repositories to your `repos.csv`, re-sync, and run your recipe against the broader set. More repos means more edge cases and a more complete recipe.
* **Try it on your own migration**: Apply the same workflow to a migration that matters to you. Pick a library upgrade or API change relevant to your codebase, plan and build it with your agent, then validate it against your own repositories with `mod build` and `mod run`.
