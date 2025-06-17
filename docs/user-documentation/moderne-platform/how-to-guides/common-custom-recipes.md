---
sidebar_label: Common recipe customization
description: Showcase of a couple of common recipe customizations.
---

# Common recipe customizations

On this page, we'll showcase some common recipe customizations that we see our customers make.

## Proprietary Spring Boot upgrade
We often see that customers have a custom parent project that depends on Spring Boot and perhaps brings some additional standards in regard to dependency versions, certain plugins to run, etc...
In that case, it's often necessary to run the SpringBoot upgrade on the parent project first, before rolling out a SpringBoot upgrade to the rest of your codebase.

This would mean adding something like the following recipe
```yaml
type: specs.openrewrite.org/v1beta/recipe
name: io.moderne.ModerneSpringBootUpgrade
displayName: ModerneSpringBootUpgrade
description: "Spring Boot upgrade recipe that takes into account the need to update the io.moderne:moderne-parent first."
recipeList:
  - org.openrewrite.maven.UpgradeParentVersion:
     groupId: io.moderne
     artifactId: moderne-parent
     newVersion: 1.2.x
  - io.moderne.java.spring.boot3.UpgradeSpringBoot_3_5
```
* You can then run `io.moderne.java.spring.boot3.UpgradeSpringBoot_3_5` against the parent project
* And run `io.moderne.ModerneSpringBootUpgrade` against any projects using `io.moderne:moderne-parent` as a parent.