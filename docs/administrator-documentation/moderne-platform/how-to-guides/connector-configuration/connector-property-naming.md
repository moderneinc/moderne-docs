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

Most operating systems restrict what an environment variable name may contain. Linux shell variables allow only letters, numbers, and the underscore, and are uppercase by convention, so the Connector derives the variable name from the canonical property name rather than using it directly.

To convert a canonical property name to an environment variable name:

1. Replace dots (`.`) with underscores (`_`).
2. Remove any dashes (`-`).
3. Convert to uppercase.

For a list, surround the element number with underscores.

| Canonical property                                  | Environment variable                              |
|-----------------------------------------------------|---------------------------------------------------|
| `moderne.connector.nickname`                        | `MODERNE_CONNECTOR_NICKNAME`                      |
| `moderne.connector.crypto.symmetric-key`            | `MODERNE_CONNECTOR_CRYPTO_SYMMETRICKEY`           |
| `moderne.scm.github[0].uri`                         | `MODERNE_SCM_GITHUB_0_URI`                        |
| `moderne.scm.github[0].oauth.client-id`             | `MODERNE_SCM_GITHUB_0_OAUTH_CLIENTID`             |
| `moderne.scm.github[0].allowable-organizations[1]`  | `MODERNE_SCM_GITHUB_0_ALLOWABLEORGANIZATIONS_1`   |
| `moderne.organization.sources.http[0].bearer-token` | `MODERNE_ORGANIZATION_SOURCES_HTTP_0_BEARERTOKEN` |

Spring Boot's [binding from environment variables](https://docs.spring.io/spring-boot/reference/features/external-config.html#features.external-config.typesafe-configuration-properties.relaxed-binding.environment-variables) documentation covers these rules in full.

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

You can also keep your configuration in a YAML file and point the Connector at it with `--spring.config.additional-location=file:moderne.yml`. The canonical name maps onto nested keys.

```yaml
moderne:
  scm:
    github:
      - uri: https://github.example.com
        oauth:
          client-id: yourClientId
          client-secret: yourClientSecret
```

The Connector also writes one for you. On startup it generates a `moderne.yml` showing your active configuration in canonical form, which is the quickest way to see what your current settings look like as property names. Set `moderne.connector.write-migrated-config` to `false` to turn that off, or `moderne.connector.migrated-config-path` to change where it lands.

## Where to find property names

Each configuration guide shows both spellings for the settings it covers. The [All Connector configuration variables](./connector-variables.md) reference covers every setting.
