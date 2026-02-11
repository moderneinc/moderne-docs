---
sidebar_label: "Module 3: Test"
description: Run your recipe against real repositories, compare to the production recipe, and practice the iterate-and-fix loop.
---

# Module 3: Test

In this module, you'll run your recipe against real-world repositories, compare the results to the existing production Jackson recipe, and practice the iterate-and-fix loop. This is where the rubber meets the road. Unit tests verify correctness, but real-world testing reveals gaps.

## Exercise 3-1: Set up the test environment

### Goals for this exercise

* Understand how to use the `run-recipe` skill to test against real repositories
* See how the `create-organization` skill assembles a working set of repos
* Get ready to run your recipe against real Jackson 2.x codebases

### Steps

#### Step 1: Watch the instructor demo the `create-organization` skill

The instructor will show how to find and assemble a curated set of repositories that use Jackson 2.x. This involves searching for repos with `com.fasterxml.jackson` in their `pom.xml` or `build.gradle` files.

<details>
<summary>What the instructor is doing</summary>

The `create-organization` skill helps find repos by technology. For Jackson, the prompt would be something like:

> /moderne:create-organization
>
> Find 15-20 small-to-medium Java repositories on GitHub that use Jackson 2.x (com.fasterxml.jackson). I need a mix of Maven and Gradle projects. Create a repos.csv for testing a Jackson 2→3 migration recipe.

The skill uses `gh search code` and `gh search repos` to find relevant repositories, then generates a `repos.csv` file.

</details>

#### Step 2: Use the pre-configured working set

To save time, a `repos.csv` with curated Jackson 2.x repositories is provided. Copy it to your recipe project:

```bash
mkdir -p working-set
cp /path/to/resources/repos.csv working-set/repos.csv
```

:::tip
Make sure your `.gitignore` includes `working-set*/` to keep cloned repos out of version control.
:::

#### Step 3: Sync the working set

This clones the repositories and downloads their LSTs:

```bash
mod git sync csv working-set working-set/repos.csv --with-sources
```

This may take a few minutes depending on the number of repositories. The `--with-sources` flag downloads source code so the agent can perform pre-analysis in the next step.

### Takeaways

* The `create-organization` skill automates finding relevant test repositories
* For lab exercises, pre-configured working sets save time
* The `--with-sources` flag enables pre-analysis but takes longer to sync

---

## Exercise 3-2: Run and analyze

### Goals for this exercise

* Run your recipe against real repositories using the `run-recipe` skill
* Use the agent to perform pre-analysis and set expectations
* Compare predictions to actual results

### Steps

#### Step 1: Run the recipe

Use the `run-recipe` skill to run your recipe. In Claude Code:

<details>
<summary>Suggested prompt</summary>

> /moderne:run-recipe
>
> Run my Jackson 2→3 migration recipe against the working set. The recipe is in this project (development mode). Before running, analyze the source code in the working set to predict which files should be affected.

</details>

The skill will:
* Set your recipe as the active recipe (`mod config recipes active set ...`)
* Compile your recipe (`./gradlew jar`)
* Search the working set sources for target patterns (e.g., `grep` for `com.fasterxml.jackson`)
* Run the recipe and monitor output
* Report results

#### Step 2: Review the pre-analysis

Before the recipe runs, the skill searches for target patterns in the working set. Check:
* Which repos does the agent predict will be affected?
* Which specific files contain Jackson 2.x imports?
* Does the prediction seem reasonable?

#### Step 3: Review the recipe run output

After the run completes, examine:
* **Which repos had changes?** Look at the trace output for repos with `filesWithFixResults > 0`
* **What changed?** Review the diffs in `.moderne/run/{runId}/fix.patch`
* **Any errors?** Check `.moderne/run/{runId}/run.log` for failures

<details>
<summary>Suggested prompt (after run completes)</summary>

> The recipe run is complete. Please:
> 1. Summarize which repos had changes and how many files were affected
> 2. Show me the diff for one of the affected repos
> 3. Compare the results to your pre-analysis predictions. Did you expect these repos to be affected?
> 4. Were there any repos you expected to be affected that weren't?

</details>

#### Step 4: Diagnose mismatches

If the agent predicted changes in a repo but the recipe didn't produce them:
* Read the source file that should have matched
* Verify the pattern exists as expected
* Check your recipe's matchers (are the fully qualified names correct? Are the method patterns right?)
* The issue is almost always in the recipe's logic, not in the LST

:::warning
Do NOT try to read or parse the `.moderne/` LST files. They are serialized binary data, not human-readable. Focus on the recipe logic and source code.
:::

### Takeaways

* Pre-analysis sets testable expectations before the recipe runs
* Real-world repositories often reveal issues that unit tests miss (unexpected patterns, edge cases, classpath differences)
* Mismatches between predictions and results are diagnostic gold. They tell you exactly what to fix

---

## Exercise 3-3: Compare to the existing recipe

### Goals for this exercise

* Run the production Jackson 2→3 recipe against the same working set
* Compare your recipe's output to the production recipe's output
* Identify gaps and understand why they exist

### Context

This is the "payoff" moment. The existing `org.openrewrite.java.jackson.UpgradeJackson_2_3` recipe is a production-quality recipe with 11 sub-recipes covering 100+ transformations. Your recipe covers a scoped subset. Comparing the two answers two key questions:

1. **What did your recipe get right?** These are the transformations where your approach matched the production recipe.
2. **What did it miss?** These are the gaps, and understanding them teaches you what the agent needs to do better next time.

### Steps

#### Step 1: Install and run the existing Jackson recipe

```bash
mod config recipes jar install org.openrewrite.recipe:rewrite-jackson:LATEST
mod run working-set --recipe org.openrewrite.java.jackson.UpgradeJackson_2_3 --streaming --parallel 2
```

#### Step 2: Compare the outputs

Ask the agent to help you analyze the differences.

<details>
<summary>Suggested prompt</summary>

> I just ran the production Jackson 2→3 recipe against the same working set. Please:
>
> 1. Compare the diffs from our recipe run vs. the production recipe run
> 2. What transformations did the production recipe make that ours didn't?
> 3. What did our recipe get right?
> 4. For each gap, what type of recipe would I need to close it? (declarative, Refaster, or imperative)

</details>

#### Step 3: Discuss the gaps

Common gaps you'll likely find:
* **More type renames**: the production recipe covers ~21 type changes; you covered 4
* **More method renames**: the production recipe covers ~36 method renames; you covered 2
* **Feature flag handling**: complex conditional logic for removing deprecated feature configurations
* **Additional dependency changes**: other Jackson modules beyond core and databind
* **Builder pattern changes**: `JsonFactory` immutability requires builder pattern migration

#### Step 4: Reflect

What this means for agent-assisted recipe development:
* The agent got the structure right. The recipe type choices were correct
* The scoped subset worked as expected, but a production recipe requires more breadth
* The iterative workflow (plan → build → test → compare) is how you'd close the gaps over time
* This is exactly how the production recipe was built: one transformation at a time, tested against real code

### Takeaways

* Comparing to a known-good recipe is the most effective way to validate your work
* Agent-built recipes get the structure and approach right, but may miss breadth (rare type renames, edge cases)
* Closing the gaps is a matter of iteration, not a fundamentally different approach
* A production-quality recipe is built the same way: one transformation at a time, tested against real code

---

## Exercise 3-4 (if time): Iterate

### Goals for this exercise

* Practice the iterate-and-fix loop
* Add one more transformation to close a gap identified in Exercise 3-3

### Steps

#### Step 1: Pick one gap

Pick one gap from the comparison in Exercise 3-3. Choose something achievable, for example an additional `ChangeType` or `ChangeMethodName` that the production recipe handles but yours doesn't.

#### Step 2: Add the transformation

Ask the agent to add it:

<details>
<summary>Suggested prompt</summary>

> Looking at the comparison, our recipe misses the type rename from `JsonStreamContext` to `TokenStreamContext`. Let's add it. Please:
> 1. Write a test case for this transformation
> 2. Add the ChangeType to our YAML recipe
> 3. Rebuild and run the tests

</details>

#### Step 3: Recompile, re-run, verify

```bash
./gradlew jar
mod run working-set --active-recipe --streaming --parallel 2
```

#### Step 4: Verify the gap is closed

The new transformation should now appear in the diff output.

### Takeaways

* The iterate loop is the core workflow: fix → recompile → re-run → verify
* Each iteration makes the recipe more complete
* This is exactly how production recipes are developed and maintained
* The agent makes each iteration faster, but human judgment ensures each addition is correct
