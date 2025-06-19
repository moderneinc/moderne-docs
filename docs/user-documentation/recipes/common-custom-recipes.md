---
sidebar_label: Common recipe customizations
description: A showcase of common recipe customizations.
---

# Common recipe customizations

The recipes offered by Moderne take care of a lot of changes out of the box. However, with every customer, we get to a point where they have a specific setup, configuration or dependency that requires a custom recipe to be migrated.
This can be achieved by creating custom declarative recipes that build on standard upgrade recipes, while also incorporating your specific customizations.

To help you get started with that, this doc will provide some common customization patterns we've often seen Moderne customers use.

## Proprietary Spring Boot upgrade

Many organizations use custom parent projects that extend Spring Boot with organization-specific standards – such as managed dependency versions, additional plugins, or company-wide configuration details.
This parent then serves as the foundation for a large set of projects within the organization.

In this instance, you typically need to **upgrade the parent project first** before rolling out the Spring Boot upgrade to dependent projects.

For the sake of an example let's assume that parent project is called `moderne-parent`.
The following declarative recipe could be used to upgrade projects using the `moderne-parent`.

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

#### Implementation steps

Once you've created this recipe, you will need to:

1. Run the `io.moderne.java.spring.boot3.UpgradeSpringBoot_3_5` against the parent project to ensure it's updated and properly configured.
2. Run the custom recipe `io.moderne.ModerneSpringBootUpgrade` against any projects that use `io.moderne:moderne-parent` as a parent.

This sequence ensures dependencies are upgraded in the correct order and prevents version conflicts during the upgrade process.