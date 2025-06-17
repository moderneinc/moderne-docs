---
sidebar_label: Common recipe customization
description: Showcase of a couple of common recipe customizations.
---

# Common recipe customizations

We often see that customers have a custom parent project that depends on Spring Boot and includes organization-specific standards—such as fixed dependency versions, additional Maven plugins, or company-wide configuration defaults.
In these cases, we recommend creating a custom, declarative recipe that builds on the standard, out-of-the-box upgrade recipes, while also incorporating your customizations.
This gives you full control over how upgrades are rolled out across projects in your organization.
On this page, we’ll showcase a few common customizations that we often see our customers make when working with OpenRewrite recipes.

## Proprietary Spring Boot upgrade
 
Suppose you have a parent project called `moderne-parent` that:
* manages your Spring Boot version,
* configures shared dependencies and plugins,
* and is used as a parent by most of your projects.

In this case, it’s often necessary to **upgrade the parent project first**, before rolling out the Spring Boot upgrade to the rest of your codebase.
You can achieve this with the following declarative recipe:

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

Once everything is in place, you first run the `io.moderne.java.spring.boot3.UpgradeSpringBoot_3_5` against the parent project first, ensuring it's updated and aligned with the desired setup.
Then run the custom recipe `io.moderne.ModerneSpringBootUpgrade` against any projects using `io.moderne:moderne-parent` as a parent.
