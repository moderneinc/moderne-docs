# Moderne Documentation Style Guide

This document outlines the formatting and style conventions for all Moderne documentation. Following these rules ensures consistency across all documentation files.

## Markdown Formatting Rules

### 1. Headers and Spacing

**Rule**: Every markdown header (`##`, `###`, etc.) must be followed by a blank line.

**Correct example:**

    ## Example Header

    Content starts here after a blank line.

**Incorrect example:**

    ## Example Header
    Content immediately follows without blank line.

### 2. Code Blocks

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

### 3. Bullet Points

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

### 4. Bullet List Spacing

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

### 5. Description Lines

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

### 6. Code Examples

**Rule**: Provide context and explanations for code examples.

Always explain what the code demonstrates, then provide the code with proper spacing:

```java
// VULNERABLE - Direct string concatenation
String query = "SELECT * FROM users WHERE id = " + userId;
statement.execute(query);
```

Then follow up with explanation of why this matters.

## File Organization Rules

### 7. Document Titles and Headers

**Rule**: Use sentence case for document titles and headers, and do not end with a period.

**Correct examples:**

    # Introduction to taint analysis
    ## Core concepts
    ### Finding vulnerabilities

**Incorrect examples:**

    # Introduction To Taint Analysis    <!-- Title case -->
    ## Core Concepts.                   <!-- Period at end -->
    ### Finding Vulnerabilities         <!-- Title case -->

### 8. Acronym Definitions

**Rule**: Always define acronyms on first use before using them throughout the document.

**Correct example:**

    Cross-Site Scripting (XSS) vulnerabilities are common in web applications. 
    XSS attacks can steal user data and compromise sessions.

**Incorrect example:**

    XSS vulnerabilities are common in web applications.    <!-- XSS not defined -->

### 9. Link Paths

**Rule**: Use explicit relative paths with `./` for same-directory links and `../` for parent directory links.

**Correct examples:**

    * [Same directory file](./other-file.md)
    * [Parent directory file](../README.md)
    * [Subdirectory file](./subfolder/file.md)

**Incorrect examples:**

    * [Same directory file](other-file.md)    <!-- Missing ./ -->
    * [Parent directory file](README.md)      <!-- Should use ../ -->

### 10. File Naming

**Rule**: Use kebab-case for file names.

**Correct:**

* `taint-analysis.md`
* `loop-analysis.md`
* `security-overview.md`

**Incorrect:**

* `taintAnalysis.md`
* `taint_analysis.md`
* `TaintAnalysis.md`

## Complete Example

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

## Quick Reference Checklist

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

---

*This style guide should be consulted whenever making changes to Moderne documentation to ensure consistency and quality.*