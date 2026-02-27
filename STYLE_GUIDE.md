# Moderne Documentation Style Guide

This document outlines the formatting and style conventions for all Moderne documentation. Following these rules ensures consistency across all documentation files.

## Markdown formatting rules

### 1. Headers and spacing

**Rule**: Every markdown header (`##`, `###`, etc.) must be followed by a blank line.

**Correct example:**

    ## Example Header

    Content starts here after a blank line.

**Incorrect example:**

    ## Example Header
    Content immediately follows without blank line.

### 2. Code blocks

**Rule**: Every code block must be preceded by a blank line.

**Correct example:**

    Explanation text here.

    ```java
    // Code block starts after blank line
    public void example() {
        // code here
    }
    ```

**Incorrect example:**

    Explanation text here.
    ```java
    // No blank line before code block
    ```

### 3. Bullet points

**Rule**: Use asterisks (`*`) for all bullet points, not dashes (`-`).

**Correct example:**

    * Correct bullet point format
    * Another bullet point
    * Third bullet point

**Incorrect example:**

    - Incorrect bullet point format
    - These should use asterisks instead

**Important**: Only change dashes to asterisks when they are actual bullet points at the beginning of lines. Do NOT change:

* Dashes in code comments: `// This is a comment - explanation`
* Dashes in text explanations: `"taintedness" - a property that flows`
* Arrow operators: `(cursor, cfg) -> {`
* YAML front matter delimiters: `---`
* SQL comments: `-- SQL comment`
* Hyphenated words: `field-sensitive`, `cross-site`, `well-formed`

### 4. Bullet list spacing

**Rule**: Bulleted lists should have a blank line between the explanation and the bullets.

**Correct example:**

    Here's an explanation of the concepts:

    * First bullet point
    * Second bullet point
    * Third bullet point

**Incorrect example:**

    Here's an explanation of the concepts:
    * First bullet point
    * Second bullet point
    * Third bullet point

### 5. Description lines

**Rule**: All `description:` lines in YAML front matter must end with exactly one period.

**Correct example:**

    ---
    description: Learn how taint analysis works.
    ---

**Incorrect examples:**

    ---
    description: Learn how taint analysis works  <!-- Missing period -->
    ---

    ---
    description: Learn how taint analysis works..  <!-- Too many periods -->
    ---

### 6. Code examples

**Rule**: Provide context and explanations for code examples.

Always explain what the code demonstrates, then provide the code with proper spacing:

```java
// VULNERABLE - Direct string concatenation
String query = "SELECT * FROM users WHERE id = " + userId;
statement.execute(query);
```

Then follow up with explanation of why this matters.

## File organization rules

### 7. Document titles and headers

**Rule**: Use sentence case for document titles and headers, and do not end with a period.

**Correct examples:**

    # Introduction to taint analysis
    ## Core concepts
    ### Finding vulnerabilities

**Incorrect examples:**

    # Introduction To Taint Analysis    <!-- Title case -->
    ## Core Concepts.                   <!-- Period at end -->
    ### Finding Vulnerabilities         <!-- Title case -->

### 8. Acronym definitions

**Rule**: Always define acronyms on first use before using them throughout the document.

**Correct example:**

    Cross-Site Scripting (XSS) vulnerabilities are common in web applications. 
    XSS attacks can steal user data and compromise sessions.

**Incorrect example:**

    XSS vulnerabilities are common in web applications.    <!-- XSS not defined -->

### 9. Link paths

**Rule**: Use explicit relative paths with `./` for same-directory links and `../` for parent directory links.

**Correct examples:**

    * [Same directory file](./other-file.md)
    * [Parent directory file](../README.md)
    * [Subdirectory file](./subfolder/file.md)

**Incorrect examples:**

    * [Same directory file](other-file.md)    <!-- Missing ./ -->
    * [Parent directory file](README.md)      <!-- Should use ../ -->

### 10. File naming

**Rule**: Use kebab-case for file names.

**Correct:**

* `taint-analysis.md`
* `loop-analysis.md`
* `security-overview.md`

**Incorrect:**

* `taintAnalysis.md`
* `taint_analysis.md`
* `TaintAnalysis.md`

## Writing style rules

### 11. Conversational and instructional tone

**Rule**: Write as if you are guiding the reader through a task. Use "you will need to", "you should", and "you can" instead of impersonal or declarative phrasing.

**Correct examples:**

    You will need to create a `category.yml` file that maps your package structure.
    Each entry should have the type `specs.openrewrite.org/v1beta/category`.
    This task will scan your recipe JAR and generate a CSV file.

**Incorrect examples:**

    A `category.yml` file is created that maps the package structure.
    Each entry has the type `specs.openrewrite.org/v1beta/category`.
    The task scans the recipe JAR and generates a CSV file.

### 12. Section headers should use gerund form

**Rule**: Use the gerund (present participle) form for section headers, especially in how-to guides. This matches the pattern used across existing documentation (e.g., "Running the recipe", "Viewing the visualization").

**Correct examples:**

    ## Defining categories for your own recipes
    ### Creating the `category.yml` file
    ### Generating and validating the `recipes.csv` file

**Incorrect examples:**

    ## Define categories for your own recipes
    ### Create the `category.yml` file
    ### Generate and validate the `recipes.csv` file

### 13. Add "file" after filenames in prose

**Rule**: When referencing a filename inline within a sentence, add "file" after it for readability.

**Correct examples:**

    When generating the `recipes.csv` file, each recipe's name is compared...
    Once the `category.yml` file is ready, you will need to generate the CSV file.

**Incorrect examples:**

    When generating `recipes.csv`, each recipe's name is compared...
    Once the `category.yml` is ready, you will need to generate the CSV.

### 14. Use inline linking, not "see" or "click here"

**Rule**: Place links on descriptive text that tells the reader where the link goes. Do not use signpost phrases like "see", "click here", or "check out this link".

**Correct examples:**

    Once validation passes, you can [publish and deploy the artifact to the Moderne Platform](#deploying-recipe-artifacts).
    An administrator should have [configured this when onboarding the agent](./path/to/doc.md).

**Incorrect examples:**

    Once validation passes, you can publish the artifact — see [Deploying to the Moderne Platform](#deploying-recipe-artifacts).
    For more information, [click here](./path/to/doc.md).

### 15. Keep paragraphs focused and concise

**Rule**: Each paragraph should cover one concept or idea. If a paragraph contains more than two or three sentences, consider whether it is doing too much and should be split. Dense walls of text are harder to scan and understand.

**Correct example:**

    Recipes are assigned to categories based on their package names. When generating
    the `recipes.csv` file, each recipe's fully qualified name is compared against the
    entries in your `category.yml` file.

    For example, a recipe at `com.myorg.UpgradeFramework` would match the
    `com.myorg` entry and appear under **Framework Upgrades**.

**Incorrect example:**

    Recipes are assigned to categories based on their package names. When generating
    the `recipes.csv` file, each recipe's fully qualified name is compared against the
    entries in your `category.yml` file. For example, a recipe at
    `com.myorg.UpgradeFramework` would match the `com.myorg` entry and appear under
    **Framework Upgrades**. Any package segments without an explicit entry will
    automatically generate a fallback category from the capitalized package name.

### 16. How-to guide introduction structure

**Rule**: How-to guide introductions should follow a consistent pattern: start with the problem or scenario the reader faces, briefly explain what solves it, and end with a sentence previewing what the guide covers.

**Correct example:**

    When you publish recipes to the Moderne Platform, organizing them into meaningful
    categories helps users in your organization discover and run them.

    In this guide, we will walk you through how to define categories for your own
    recipes and how to re-categorize existing recipes under a custom structure.

**Incorrect example:**

    Using `recipes.csv` and the `category.yml`, you can define your own category
    structure. In this article, you see three things: how to create categories,
    how to sort recipes, and how to deploy.

### 17. Use Docusaurus admonitions, not blockquotes

**Rule**: Use Docusaurus admonition syntax (`:::tip`, `:::info`, `:::warning`, `:::danger`) for callouts instead of blockquote formatting with bold labels. This renders properly in the Docusaurus theme and matches existing documentation.

**Correct example:**

    :::warning
    `recipeCsvGenerate` only scans your own JAR — recipes from dependencies are not included.
    :::

**Incorrect examples:**

    > **Important:** `recipeCsvGenerate` only scans your own JAR.

    > **Reference:** [Some link](./path.md)

### 18. No absolute URLs for internal documentation pages

**Rule**: Never use absolute `https://docs.moderne.io/...` URLs to link to pages that exist in this repository. Always use relative paths instead. This extends Rule 9 and ensures links work correctly across environments (local dev, staging, production).

**Correct example:**

    For more details, check out the [`recipes.csv` reference](../../moderne-cli/references/recipes-csv.md).

**Incorrect example:**

    For more details, check out the [`recipes.csv` reference](https://docs.moderne.io/user-documentation/moderne-cli/references/recipes-csv/).

### 19. Image alt text

**Rule**: All images must include descriptive alt text for accessibility. The alt text should briefly describe what the image shows so that screen reader users can understand the content.

**Correct example:**

    ![Build trace dashboard showing summary statistics and charts](./assets/dashboard.png)

**Incorrect example:**

    ![](./assets/dashboard.png)

## Complete example

Here's what properly formatted documentation looks like:

    ---
    description: Learn how reaching definitions analysis tracks variable definitions through programs.
    ---

    # Reaching Definitions Analysis

    Reaching definitions analysis is like tracking the genealogy of variables in your program.

    ## Core concepts

    Understanding reaching definitions requires grasping these key ideas:

    * **Definition points**: Where variables receive values
    * **Use points**: Where variables are read
    * **Reaching**: A definition can "reach" a use if there's a path between them

    ### Basic example

    Consider this simple method:

    ```java
    public void processOrder(int quantity) {
        int total = quantity * 10;        // Definition D1
        
        if (total > 100) {
            total = total - 20;           // Definition D2
        }
        
        System.out.println(total);        // Use - which definition reaches here?
    }
    ```

    In this example, both D1 and D2 might reach the print statement.

    ## Next steps

    Learn more about advanced analysis techniques:

    * [Control Flow Analysis](./control-flow/introduction.md)
    * [Data Flow Analysis](./data-flow/introduction.md)

## Quick reference checklist

When editing documentation, verify:

* [ ] All headers followed by blank lines (Rule 1)
* [ ] All code blocks preceded by blank lines (Rule 2)
* [ ] All bullet points use asterisks (`*`) (Rule 3)
* [ ] Blank line before bullet lists (Rule 4)
* [ ] Description lines end with exactly one period (Rule 5)
* [ ] Code examples have proper context and explanations (Rule 6)
* [ ] Document titles and headers use sentence case, no periods (Rule 7)
* [ ] Acronyms defined on first use (Rule 8)
* [ ] Link paths use explicit relative paths (`./`, `../`) (Rule 9)
* [ ] File names use kebab-case (Rule 10)
* [ ] No unintended changes to code, comments, or technical terms
* [ ] Conversational, instructional tone throughout (Rule 11)
* [ ] Section headers use gerund form (Rule 12)
* [ ] Filenames in prose are followed by "file" (Rule 13)
* [ ] Links are inline on descriptive text, no "see X" patterns (Rule 14)
* [ ] Paragraphs are focused and concise, one concept each (Rule 15)
* [ ] How-to guide intros follow problem → solution → preview structure (Rule 16)
* [ ] Callouts use Docusaurus admonitions, not blockquotes (Rule 17)
* [ ] Internal links use relative paths, not absolute URLs (Rule 18)
* [ ] All images include descriptive alt text (Rule 19)

---

*This style guide should be consulted whenever making changes to Moderne documentation to ensure consistency and quality.*