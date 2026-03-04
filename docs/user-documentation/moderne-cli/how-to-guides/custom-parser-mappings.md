---
sidebar_label: Custom parser mappings
description: How to configure custom file-extension-to-parser mappings so non-standard file types are parsed structurally.
---

# Custom parser mappings

Some codebases use non-standard file extensions for files that are actually XML, JSON, YAML, or other structured formats. For example, a project might use `.mst` files for XML-based templates or `.cfg` files for JSON configuration. By default, the Moderne CLI parses these as plain text, which means recipes cannot inspect or transform their structure.

The `build.parsers` configuration lets you tell the CLI which parser to use for files matching specific glob patterns. Once configured, these files will be parsed into the appropriate [Lossless Semantic Tree (LST)](../../../administrator-documentation/moderne-platform/references/lossless-semantic-trees.md) type, enabling recipes to work with their full structure.

In this guide, you will learn how to add, view, and remove custom parser mappings using the CLI or `moderne.yml` configuration.

## Adding parser mappings via the CLI

To map file extensions to a parser type, use `mod config build parsers add` followed by the parser type and one or more glob patterns:

```bash
mod config build parsers add xml "**/*.mst" "**/*.xbind"
```

You can add mappings for multiple parser types:

```bash
mod config build parsers add json "**/*.cfg"
```

If you add patterns for a parser type that already has mappings, the new patterns are merged with the existing ones.

### Supported parser types

The following parser types are available:

* `json`
* `xml`
* `yaml`
* `properties`
* `proto`
* `toml`
* `docker`
* `hcl`
* `plaintext`
* `groovy`
* `gradle`

:::info
File extensions for compiled language types (Java, Kotlin, etc.) are managed by their respective build tool steps and cannot be customized here.
:::

## Configuring parser mappings in `moderne.yml`

You can also define parser mappings directly in the `moderne.yml` file. This is useful when you want to commit the configuration to source control or manage it alongside other build settings.

```yaml
build:
  parsers:
    - type: xml
      inclusion: |-
        **/*.mst
        **/*.xbind
    - type: json
      inclusion: |-
        **/*.cfg
```

See the [layered configuration guide](./layer-config-cli.md) for details on global vs. local configuration files.

## Viewing configured mappings

To see what parser mappings are currently configured:

```bash
mod config build parsers show
```

## Removing parser mappings

To remove mappings for a specific parser type:

```bash
mod config build parsers delete xml
```

To remove all custom parser mappings:

```bash
mod config build parsers delete
```

## Using local and saved configuration

Like other CLI configuration, parser mappings support the `--local` and `--save` flags:

```bash
# Apply mappings to repositories in a specific directory (not committed to source control)
mod config build parsers add xml "**/*.mst" --local ./working-set

# Apply mappings and save them so they can be committed to source control
mod config build parsers add xml "**/*.mst" --local ./working-set --save
```

For more details on how these flags work, see the [layered configuration guide](./layer-config-cli.md).
