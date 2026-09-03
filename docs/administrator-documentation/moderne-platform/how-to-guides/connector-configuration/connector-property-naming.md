---
title: Connector property naming
sidebar_label: Property naming
description: How Connector property names map to environment variables and JAR arguments.
---

# Connector property naming

Every Connector setting has one canonical property name, written in lowercase dotted kebab case, such as `moderne.connector.api-gateway-rsocket-uri`. The Connector documentation lists that canonical name once per property. How you supply it depends on how you run the Connector, and both forms are derived from the canonical name by a fixed rule.

:::info
Use the canonical name as written. The Connector also accepts camel case when binding most properties, but a few settings are resolved by direct lookup rather than by binding, and those only match the canonical form.
:::

## Supplying a property

| How you run the Connector | How you supply the property                      | Example                                          |
|---------------------------|--------------------------------------------------|--------------------------------------------------|
| OCI container             | An environment variable                          | `MODERNE_CONNECTOR_NICKNAME=prod-1`              |
| Executable JAR            | A command line argument prefixed with `--`       | `--moderne.connector.nickname=prod-1`            |
| Either                    | A key in a `moderne.yml` file                    | See [YAML](#yaml) below                          |

## Deriving the environment variable name

The Connector is a Spring Boot application, so it follows Spring Boot's [relaxed binding](https://docs.spring.io/spring-boot/reference/features/external-config.html#features.external-config.typesafe-configuration-properties.relaxed-binding) rules. To convert a canonical property name to an environment variable name:

1. Replace dots (`.`) with underscores (`_`).
2. Remove any dashes (`-`).
3. Convert to uppercase.

For a list, surround the element number with underscores.

| Canonical property                                    | Environment variable                              |
|-------------------------------------------------------|---------------------------------------------------|
| `moderne.connector.nickname`                          | `MODERNE_CONNECTOR_NICKNAME`                      |
| `moderne.connector.crypto.symmetric-key`              | `MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY`           |
| `moderne.scm.github[0].oauth.client-id`               | `MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID`             |
| `moderne.scm.github[0].allowable-organizations[1]`    | `MODERNE_SCM_GITHUB_0_ALLOWABLEORGANIZATIONS_1`   |
| `moderne.organization.sources.http[0].bearer-token`   | `MODERNE_ORGANIZATION_SOURCES_HTTP_0_BEARERTOKEN` |

:::warning
A dash is removed, not replaced. `allowable-organizations` becomes `ALLOWABLEORGANIZATIONS`, with no underscore between the two words. An underscore inside a property name is read as another level in the property tree, so an extra underscore names a property that does not exist.
:::

## Deriving the JAR argument

Prefix the canonical name with `--` and leave it otherwise unchanged.

| Canonical property                                 | JAR argument                                          |
|----------------------------------------------------|-------------------------------------------------------|
| `moderne.connector.nickname`                       | `--moderne.connector.nickname`                        |
| `moderne.scm.github[0].oauth.client-id`            | `--moderne.scm.github[0].oauth.client-id`             |
| `moderne.scm.github[0].allowable-organizations[1]` | `--moderne.scm.github[0].allowable-organizations[1]`  |

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

Each configuration guide lists the canonical names for the properties it covers, and every property is listed in the [All Connector configuration variables](./connector-variables.md) reference.
