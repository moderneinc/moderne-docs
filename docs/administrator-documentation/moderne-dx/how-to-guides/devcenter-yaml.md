---
sidebar_label: Local DevCenter setup
description: How to create and configure a DevCenter locally using the Moderne CLI. 
---

# How to create a DevCenter locally

The Moderne DevCenter gives you high-level details about the state of all of your repositories. If you don't have access to the Moderne Platform, but you want to create a DevCenter locally, you can do so with the Moderne CLI.

## Creating an `organization.yml` file

To define a DevCenter, you will need to ensure that there is a `.moderne` directory with an `organization.yml` file in it. 

If you've configured an [Organizations service with Moderne DX](../how-to-guides/configure-dx-organizations.md#service-based-organization-structure), and [you've already defined a DevCenter](../../moderne-platform/how-to-guides/dev-center.md), whenever you `mod git clone` an organization, a `.moderne/organization.yml` file will be pulled down for you.

If you haven't configured said service, you can still manually create such a file. Below we'll walk through all of the components that go into making this file.

<details>

<summary>Example `organization.yml` file:</summary>

```yaml
name: Default
devCenterConfiguration:
  upgradesAndMigrations:
    - title: Spring Boot 3
      measures:
        - name: Major
          recipe:
            id: org.openrewrite.java.dependencies.DependencyInsight
            options:
              - name: groupIdPattern
                value: org.springframework.boot
              - name: artifactIdPattern
                value: spring-boot-starter
              - name: version
                value: 1-2.999
        - name: Minor
          recipe:
            id: org.openrewrite.java.dependencies.DependencyInsight
            options:
              - name: groupIdPattern
                value: org.springframework.boot
              - name: artifactIdPattern
                value: spring-boot-starter
              - name: version
                value: 3-3.2
        - name: Patch
          recipe:
            id: org.openrewrite.java.dependencies.DependencyInsight
            options:
              - name: groupIdPattern
                value: org.springframework.boot
              - name: artifactIdPattern
                value: spring-boot-starter
              - name: version
                value: 3.3.0
    - title: Java 21
      measures:
        - name: Java 8+
          recipe:
            id: org.openrewrite.java.search.HasMinimumJavaVersion
            options:
              - name: version
                value: 8-10
        - name: Java 11+
          recipe:
            id: org.openrewrite.java.search.HasMinimumJavaVersion
            options:
              - name: version
                value: 11-16
        - name: Java 17+
          recipe:
            id: org.openrewrite.java.search.HasMinimumJavaVersion
            options:
              - name: version
                value: 17-20
    - title: JUnit 5
      measures:
        - name: JUnit 4
          recipe:
            id: org.openrewrite.java.search.FindAnnotations
            options:
              - name: annotationPattern
                value: '@org.junit.Test'
  security:
    name: Security
    measures:
      - recipe:
          id: org.openrewrite.java.security.OwaspA01
          options: []
      - recipe:
          id: org.openrewrite.java.security.OwaspA02
          options: []
      - recipe:
          id: org.openrewrite.java.security.OwaspA03
          options: []
      - recipe:
          id: org.openrewrite.java.security.OwaspA05
          options: []
      - recipe:
          id: org.openrewrite.java.security.OwaspA06
          options: []
      - recipe:
          id: org.openrewrite.java.security.OwaspA08
          options: []
      - recipe:
          id: org.openrewrite.java.security.RegularExpressionDenialOfService
          options: []
      - recipe:
          id: org.openrewrite.java.security.secrets.FindSecrets
          options: []
      - recipe:
          id: org.openrewrite.java.security.ZipSlip
          options: []
      - recipe:
          id: org.openrewrite.java.security.SecureTempFileCreation
          options: []
```

</details>

## YAML file structure

### Root structure

```yaml
name: OrgName
devCenterConfiguration:
  upgradesAndMigrations: []
  security: {}
```

#### Fields

1. **name**: The name of your Organization. (String)
2. **devCenterConfiguration**: Contains the configuration options for the DevCenter.
    * version: An integer referencing the version of the DevCenter which is being used, should be set to `1` 
    * [upgradesAndMigrations](#upgradesandmigations): A list that defines what update and migration cards should exist for this DevCenter (e.g., Spring Boot 3 upgrade or Java 21 upgrade).
    * [security](#security): If provided, will add a security section to the DevCenter that allows you to track security issues that haven't been resolved (e.g., remediating OWASP failures).

### Detailed breakdown

#### `upgradesAndMigations`

A list that defines what update and migration cards should exist for this DevCenter (e.g., Spring Boot 3 upgrade or Java 21 upgrade).

```yaml
upgradesAndMigrations:
  - title: Spring Boot 3
    measures: []
```

#### Fields

* `title`: The title of the upgrade/migration card. (String)
* [measures](#measures): Each measure consists of a name and a recipe that can be used to determined whether or not a repository falls into said measure.

#### `measures`

Each measure consists of a name and a recipe that can be used to determined whether or not a repository falls into said measure.

```yaml
measures:
  - name: Java 17+
    recipe: {}
```

#### Fields

* `name`: The name of the measure. (String)
* [recipe](#recipe): An object that defines the recipe that should be run to determine whether or not a repository falls into said measure.

#### `recipe`

An object that defines the recipe that should be run to determine whether or not a repository falls into said measure. If the recipe produces results for a repository, that repository will be included in the count for that section.

:::danger
You must ensure that the measure recipes return disjointed results (i.e., the same repository can not be returned by multiple recipes).

For example, if you were tracking Java versions, you may have a repository that contains some code that uses Java 8, 11, and 17. However, you should ensure that your measure recipes only return this repository once.
:::

```yaml
recipe:
  id: org.openrewrite.java.dependencies.DependencyInsight
  options: []
```

#### Fields

* `id`: The ID of the recipe that should be run. (String)
* [options](#options): A list of key-value pairs that the recipe expects. 

#### `options`

A list of key-value pairs that the recipe expects.

```yaml
options:
  - name: groupIdPattern
    value: org.springframework.boot
  - name: artifactIdPattern
    value: spring-boot-starter
  - name: version
    value: 1-2.999
```

#### Fields

* `name`: The name of the option the recipe expects. (String)
* `value`: The value for said option. (String)

#### `security`

Security cards give your team a high-level overview of what security issues your repositories have or have no resolved. They are composed of a list of recipes that fix security issues you care about. You should include **no more than 10 security recipes**.

```yaml
security:
  name: Security
  measures: []
```

#### Fields

* `name`: The name that should be displayed above your security section. (String)
* [measures](#security-measures): The list of recipes that will be run to determine if there are any security issues.

#### security `measures`

The list of recipes that will be run to determine if there are any security issues. You should include **no more than 10 security recipes**.

```yaml
measures:
  - recipe:
      id: org.openrewrite.java.security.OwaspA01
      options: []
  - recipe:
      id: org.openrewrite.java.security.OwaspA02
      options: []
  - recipe:
      id: org.openrewrite.java.security.OwaspA03
      options: []
```

#### Fields

* `id`: The ID of the recipe that should be run. (String)
* `options`: A list of key-value pairs that the recipe expects (see [options](#options) for details).
