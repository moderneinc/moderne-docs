---
sidebar_label: Code style configuration
description: How to configure Checkstyle and OpenRewrite styles for LST builds in the Moderne CLI.
---

# Code style configuration

When you run recipes with the Moderne CLI, the results are formatted according to the code styles stored in each repository's LST. By default, the CLI auto-detects styles by analyzing the existing source code — it counts occurrences of certain patterns (tabs vs. spaces, brace placement, etc.) and the most common pattern wins each style rule.

This detection works well for most projects, but it can produce inaccurate results when a codebase is inconsistent or when you want to enforce a specific standard regardless of what the existing code looks like. You may also have a shared Checkstyle configuration or custom OpenRewrite styles that you want to apply across all repositories.

In this guide, you will learn how to explicitly configure Checkstyle and OpenRewrite style files so that they are attached to LSTs during builds. Explicitly configured styles take precedence over auto-detected ones, giving you full control over how recipe results are formatted.

## How styles are applied during builds

When you run `mod build`, the CLI processes styles in the following order:

1. **Auto-detected styles** inferred by analyzing patterns in the existing source code
2. **Configured Checkstyle styles** from `mod config build style checkstyle`
3. **Configured OpenRewrite styles** from `mod config build style openrewrite`

Styles that appear later in this order take precedence. This means your explicitly configured styles will override any auto-detected ones, and OpenRewrite styles will override Checkstyle styles when both define the same formatting rules.

## Configuring OpenRewrite styles

For the most fine-grained control over code formatting, you can provide an OpenRewrite style YAML file. OpenRewrite styles can express formatting preferences that go beyond what Checkstyle covers, such as import ordering, brace placement, and whitespace rules. These styles have the highest precedence.

### Setting the OpenRewrite style file

```bash
mod config build style openrewrite edit /path/to/rewrite.yml
```

The path can be absolute, relative, use tilde expansion (`~/rewrite.yml`), or reference an environment variable (`${REWRITE_STYLE}`). When using an environment variable, the variable is resolved at build time.

The YAML file should follow the [OpenRewrite style format](https://docs.openrewrite.org/concepts-and-explanations/styles). Here is an example:

```yaml
type: specs.openrewrite.org/v1beta/style
name: com.example.MyCodeStyle
displayName: My organization code style
description: Custom formatting rules for our codebase.
styleConfigs:
  - org.openrewrite.java.style.TabsAndIndentsStyle:
      useTabCharacter: false
      tabSize: 4
      indentSize: 4
      continuationIndent: 8
```

### Viewing the current configuration

```bash
mod config build style openrewrite show
```

### Removing the configuration

```bash
mod config build style openrewrite delete
```

## Configuring Checkstyle

If your organization uses a Checkstyle configuration XML file, you can point the CLI to it so that the rules are parsed into OpenRewrite styles and included in every LST build. Checkstyle styles sit between auto-detected and OpenRewrite styles in the precedence order.

### Setting the Checkstyle configuration

```bash
mod config build style checkstyle edit /path/to/checkstyle.xml
```

The path can be absolute, relative, use tilde expansion (`~/checkstyle.xml`), or reference an environment variable (`${CHECKSTYLE_CONFIG}`). When using an environment variable, the variable is resolved at build time.

### Viewing the current configuration

```bash
mod config build style checkstyle show
```

### Removing the configuration

```bash
mod config build style checkstyle delete
```

Once removed, the CLI falls back to auto-detecting styles from the existing source code.

## Additional reading

* [OpenRewrite styles documentation](https://docs.openrewrite.org/concepts-and-explanations/styles) — learn about the OpenRewrite style format.
* [CLI reference docs](../cli-reference.md) — full command reference.
