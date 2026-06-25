---
sidebar_label: Coordinating migrations with parent POMs
description: How to coordinate migrations across repositories that share a common parent POM.
---

# Coordinating migrations with parent POMs

When your organization uses shared parent POMs, you need to coordinate migrations carefully to ensure dependent projects upgrade in the correct order. This guide shows how to create custom recipes that handle these dependencies.

## Overview

Many organizations use custom parent projects that extend frameworks like Spring Boot with organization-specific standards - such as managed dependency versions, additional plugins, or company-wide configuration. This parent then serves as the foundation for many projects within the organization.

In this scenario, you typically need to **upgrade the parent project first** before rolling out the framework upgrade to dependent projects.

## Example: Spring Boot upgrade with a custom parent

For this example, assume that your parent project is called `moderne-parent`. The following [declarative recipe](https://docs.openrewrite.org/reference/yaml-format-reference) upgrades both the parent version and applies the Spring Boot upgrade:

```yaml
type: specs.openrewrite.org/v1beta/recipe
name: io.moderne.ModerneSpringBootUpgrade
displayName: ModerneSpringBootUpgrade
description: >
  Spring Boot upgrade recipe that takes into account the need to update the
  io.moderne:moderne-parent first.
recipeList:
  # Update the <parent> version
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: io.moderne
      artifactId: moderne-parent
      newVersion: 1.2.x
  # Change the Spring configuration property from `io.moderne.this` to `io.moderne.that`
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: io.moderne.this
      newValue: io.moderne.that
  # Renames an environment variable used in Kubernetes YAML files from `IO_MODERNE_THIS` to `IO_MODERNE_THAT`
  - org.openrewrite.yaml.ChangeValue:
      keyPath: $.spec.template.spec.containers[*].env[?(@.name == 'IO_MODERNE_THIS')].name
      value: IO_MODERNE_THAT
  # Apply the default Spring Boot 3.5 upgrade recipe
  - io.moderne.java.spring.boot3.UpgradeSpringBoot_3_5
```

### Implementation steps

Once you've created this recipe:

1. **Upgrade the parent project first**: Run `io.moderne.java.spring.boot3.UpgradeSpringBoot_3_5` against the parent project to ensure it's updated and properly configured.
2. **Upgrade dependent projects**: Run your custom recipe `io.moderne.ModerneSpringBootUpgrade` against any projects that use `io.moderne:moderne-parent` as a parent.

This sequence ensures dependencies are upgraded in the correct order and prevents version conflicts during the upgrade process.