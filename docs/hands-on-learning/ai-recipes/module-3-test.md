---
sidebar_label: "Module 3: Test"
description: Run your recipe against real repositories, compare to the production recipe, and practice the iterate-and-fix loop.
---

# Module 3: Test

In this module, you'll run your recipe against real-world repositories, compare the results to the existing production Jackson recipe, and practice the iterate-and-fix loop. This is where the rubber meets the road. Unit tests verify correctness, but real-world testing reveals gaps.

## Exercise 3-1: Set up the test environment

### Goals for this exercise

* Understand how the `create-organization` skill assembles a working set of repos
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

**Option B: Build your own with the `create-organization` skill**

The `create-organization` skill helps find repos by technology. It uses `gh search code` and `gh search repos` to find relevant repositories, then generates a `repos.csv` file. If you'd like to try it:

<details>
<summary>Suggested prompt</summary>

> /moderne:create-organization
>
> Find 5-10 small-to-medium Java repositories on GitHub that use Jackson 2.x (com.fasterxml.jackson). I need a mix of Maven and Gradle projects. Create a repos.csv for testing a Jackson 2→3 migration recipe.

</details>

This takes a few minutes. The skill's workflow includes syncing the working set after generating the repos.csv. If it doesn't sync automatically, run the sync command from Option A yourself. If you'd rather move on, use Option A and try the skill on your own time.

### Takeaways

* The `create-organization` skill automates finding relevant test repositories.
* For workshops, a pre-built repos.csv saves time. Try the skill on your own to learn the full workflow.

---

## Exercise 3-2: Run and analyze

### Goals for this exercise

* Run your recipe against real repositories using the `run-recipe` skill
* Use the agent to perform pre-analysis and set expectations
* Compare predictions to actual results

### Steps

#### Step 1: Run the recipe

Use the `run-recipe` skill to run your recipe against the working set.

<details>
<summary>Suggested prompt</summary>

> /moderne:run-recipe
>
> Run my Jackson 2→3 migration recipe against the working set. The recipe is in this project (development mode). Before running, analyze the source code in the working set to predict which files should be affected.

</details>

The skill handles the full workflow: compiling your recipe, searching the working set for target patterns (pre-analysis), running the recipe, comparing results to predictions, and reporting findings. This will take several minutes. Watch as it goes.

#### Step 2: Review the results

Once the skill finishes, review its output. The skill should have reported:
* Which repos it predicted would be affected (from pre-analysis)
* Which repos actually had changes
* Any mismatches between predictions and results

If the skill finds mismatches or gaps, it may iterate on its own: fixing the recipe, recompiling, and re-running. This is the core workflow for recipe development against real code. Let it run and review the changes it makes.

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
* **Test against more repositories**: Use the `create-organization` skill to find additional Jackson 2.x repositories and run your recipe against a broader set. More repos means more edge cases and a more complete recipe.
* **Try it on your own migration**: Apply the same workflow to a migration that matters to you. Pick a library upgrade or API change relevant to your codebase, use `create-recipe` to plan and build it, and `run-recipe` to validate against your own repositories.
