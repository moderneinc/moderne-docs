---
title: Connector property naming
sidebar_label: Property naming
description: How Connector property names map to environment variables and JAR arguments.
---

# Connector property naming

Every Connector setting has one canonical property name, written in lowercase dotted kebab case (e.g., `moderne.connector.api-gateway-rsocket-uri`).

These settings can be supplied in different ways - depending on how you choose to run the Connector. Throughout the documentation these are presented in environment variables and command line arguments formats.

Regardless of how you run the Connector, the spelling of the settings will be derived from the canonical property name.


## Supplying a property

If you run the Connecting as an OCI container, you will set environment variable (e.g., `MODERNE_CONNECTOR_NICKNAME=prod-1`). If you run the Connector as an executable JAR, you will pass a command line argument (e.g., `--moderne.connector.nickname=prod-1`).

## Deriving the environment variable name

To turn a canonical property name into an environment variable, apply Spring Boot's [relaxed binding](https://docs.spring.io/spring-boot/reference/features/external-config.html#features.external-config.typesafe-configuration-properties.relaxed-binding) rules:

1. Replace dots (`.`) with underscores (`_`).
2. Remove any dashes (`-`).
3. Convert to uppercase.

For a list, surround the element number with underscores.

| Canonical property                                  | Environment variable                              |
|-----------------------------------------------------|---------------------------------------------------|
| `moderne.connector.nickname`                        | `MODERNE_CONNECTOR_NICKNAME`                      |
| `moderne.connector.crypto.symmetric-key`            | `MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY`           |
| `moderne.scm.github[0].oauth.client-id`             | `MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID`             |
| `moderne.scm.github[0].allowable-organizations[1]`  | `MODERNE_SCM_GITHUB_0_ALLOWABLEORGANIZATIONS_1`   |
| `moderne.organization.sources.http[0].bearer-token` | `MODERNE_ORGANIZATION_SOURCES_HTTP_0_BEARERTOKEN` |

:::warning
A dash is removed, not replaced. `allowable-organizations` becomes `ALLOWABLEORGANIZATIONS`, with no underscore between the two words. An underscore inside a property name is read as another level in the property tree, so an extra underscore names a property that does not exist.
:::

## Deriving the JAR argument

Prefix the canonical name with `--` and leave it otherwise unchanged.

| Canonical property                                 | JAR argument                                         |
|----------------------------------------------------|------------------------------------------------------|
| `moderne.connector.nickname`                       | `--moderne.connector.nickname`                       |
| `moderne.scm.github[0].oauth.client-id`            | `--moderne.scm.github[0].oauth.client-id`            |
| `moderne.scm.github[0].allowable-organizations[1]` | `--moderne.scm.github[0].allowable-organizations[1]` |

Exporting an environment variable also works when running the JAR, so you can mix the two forms. This is useful for secrets you would rather not put on the command line.

## Indexes

A property with `[{index}]` in its name can be repeated. Start at `0` and increase by one for each additional entry. Indexes must be contiguous.

```bash
--moderne.scm.github[0].uri=https://github.example.com \
--moderne.scm.github[1].uri=https://github-eu.example.com \
```

## YAML

The Connector also reads a `moderne.yml` file. The canonical name maps onto nested keys.

```yaml
moderne:
  scm:
    github:
      - uri: https://github.example.com
        oauth:
          client-id: yourClientId
          client-secret: yourClientSecret
```

## Where to find property names

Each configuration guide shows both spellings for the settings it covers. The [All Connector configuration variables](./connector-variables.md) reference covers every setting.
