# Configuring the Moderne DevCenter

The Moderne DevCenter is the mission-control dashboard of the Moderne Platform. It provides you with high-level details about the state of all of your repositories. Using it, you can track the progress of upgrades, migrations, and security vulnerabilities. You can also use it to view [key visualizations](/user-documentation/moderne-platform/getting-started/visualizations.md) you care about – such as a dependency graph or a SQL operation usage chart.

In this doc, we'll walk you through everything you need to know to configure your own DevCenter.

## Prerequisites

In order to configure any DevCenters, there are two things you need to do (which we'll walk through in more detail below):

1. You must have [configured an Organizations service](./organizations-service.md).
2. You must ensure that the [Moderne agent Maven configuration](/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-maven-repository-access.md) only has **one** entry where the recipe source is set to `true`. (Note: this does not apply to one Maven repository configured identically in multiple agents. Only that you cannot have two distinct Maven repositories configured where recipe source is set to `true`.)

### Organizations service

If you are configuring an Organizations service for the first time, we **strongly** recommend that you use our [Organizations service template](https://github.com/moderneinc/moderne-organizations) and modify it to meet your needs. By doing so, you will only need to update some JSON files rather than writing your own code.

If you've chosen to create your own Organizations service without using our template, please ensure your service fulfills the [latest GraphQL schema](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/schema/moderne-organizations.graphqls). After doing so, please ensure you've [set up the Moderne agent with Maven configuration correctly](#moderne-agent-maven-configuration) and then [jump to the section of this doc about card types and what is necessary for each](#upgrade-and-migration-cards).

### Moderne agent Maven configuration

In order for the DevCenter to function correctly, the agent needs to be configured with details about a Maven repository it can use to store and access recipe JARs from.

If you have not configured the Moderne agent with Maven repository access before, please follow [the instructions in our Moderne agent Maven configuration documentation](/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-maven-repository-access.md) to add **one** entry with recipe source set to `true`.

If you have already configured the Moderne agent with Maven repository access, then you need to ensure that only _one_ has the configuration of `MODERNE_AGENT_MAVEN_{index}_RECIPESOURCE` / `moderne.agent.maven[{index}].recipeSource` set to `true`. 

If you have multiple locations where recipes are stored, you will need to create a virtual repository that wraps all of the locations where recipes can be stored. You will also need to ensure that the virtual repository points to the following four repositories (alongside the other repositories where recipe artifacts are stored):

1. `https://oss.sonatype.org/content/repositories/snapshots/`
2. `https://s01.oss.sonatype.org/content/repositories/snapshots/`
3. `https://repo.maven.apache.org/maven2`
4. `https://repo1.maven.org/maven2/` 

## Step 1: Ensure you have a `DevCenterDataFetcher` class

_This step only applies if you used the [Moderne Organizations service template](https://github.com/moderneinc/moderne-organizations). If you made your own, please jump to [step 3](#step-3-create-and-configure-the-devcenter)._

If you've created an Organizations service prior to March 2024, you will need to copy the [new DevCenterDataFetcher file](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/java/io/moderne/organizations/DevCenterDataFetcher.java) to your Organizations service repository. It will go in the same location as the other source classes such as [Application.java](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/java/io/moderne/organizations/Application.java).

If you've created an Organizations service after March 2024, please ensure that you have a `DevCenterDataFetcher.java` file in your Organizations service repository before moving on to step 2.

## Step 2: Ensure you have an up-to-date `moderne-organizations.graphqls` schema

Similar to the previous step, please double-check your [moderne-organizations.graphqls file](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/schema/moderne-organizations.graphqls) and ensure that there is a `devCenter` field in the `Organization` object:

```graphql
type Organization {
    id: ID!
    name: String!

    """
    Ordered list of commit options as they should appear in the UI.
    """
    commitOptions: [CommitOption!]!

    parent: Organization

    devCenter: DevCenter
}
```

The [DevCenter object](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/schema/moderne-organizations.graphqls#L50-L65) is the schema you need to follow in the below step to configure your DevCenter.

## Step 3: Create and configure the DevCenter

Your service must fulfill the [GraphQL contract mentioned in the previous step](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/schema/moderne-organizations.graphqls). If you chose to use [our template repository](https://github.com/moderneinc/moderne-organizations) for your Organizations service, you will need to run `./gradlew generateGraphqlJava copyGeneratedGraphql` to [get the latest types](https://github.com/moderneinc/moderne-organizations/pull/61/files), and then you will need to configure your own [devcenter.json file](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/devcenter.json).

The `devcenter.json` file is where all of the configuration lies for DevCenters. In this file, you can configure things like which organizations should have a DevCenter, what cards should appear on said DevCenter, and what the keys should be on the cards. This file must follow the GraphQL schema mentioned above.

{% hint style="success" %}
When creating a DevCenter for the first time, we **strongly recommend** that you only create a DevCenter for a few key organizations. This will allow you to get data into the platform faster and ensure that you've configured everything correctly. Once everything is working as expected, you can then add more DevCenters as desired.
{% endhint %}

### Upgrade and migration cards

Upgrade and migration cards allow you to see things like what Java version your repositories use, what version of Spring Boot they're on, or what JUnit version they use:

![](/.gitbook/assets/migration-card.png)

To create these cards, you will need three things:

TODO: ADD LINKS TO THE BELOW BULLETS

1. A relevant title for the card (e.g., `Spring Boot 3.2`)
2. A recipe that can be run to fix the core issue the card is highlighting (e.g., `org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2`)
3. Some measures that break up the card into key categories and help your users determine a level of urgency. 

#### Measures

Each measure consists of a name and a recipe that can be used to determine whether or not a repository falls into said measure. We do not recommend that this recipe be the same recipe as the one used to "fix" the card. For instance, in a `Spring Boot 3.2` card, one measure might have a name of `Major` – which represents all repositories that are one or more major versions behind. The corresponding recipe would be `org.openrewrite.java.dependencies.DependencyInsight` and it would include the options of `1-2`. This would mark all repositories that use Spring Boot version `1.x` or `2.x` as being a major version or more behind.

Each card can have up to **three measures**. These measures should be returned in a specific order; with the most urgent being returned first and the least urgent being returned last. In the `Spring Boot 3.2` example, you might have: `Major`, `Minor`, and `Patch` returned in that specific order.

When determining what repositories fall into what measure, Moderne will first check all repositories against the most urgent measure. If any of them are marked by that first recipe, they will be added to that measure and not checked again. The second most urgent measure will then be checked, and the same thing will happen. Lastly the third most urgent measure will be checked. If any repositories have no results for _all_ of the measures, they are considered to be "Completed" and will be marked as such on the card.

{% hint style="warning" %}
If you change any part of any measure on a card (such as the name of the measure or what recipe it should run), you will lose all results for the card until the next rebuild of the DevCenter.
{% endhint %}

#### Example

<details>

<summary>
Below is an example of an upgradesAndMigrations section for a Spring Boot 3.2 card:
</summary>

```json
[
  {
    "devCenter": {
      "upgradesAndMigrations": [
        {
          "title": "Spring boot 3.2",
          "measures": [
            {
              "name": "Major",
              "recipe": {
                "recipeId": "org.openrewrite.java.dependencies.DependencyInsight",
                "options": [
                  {
                    "name": "groupIdPattern",
                    "value": "org.springframework.boot"
                  },
                  {
                    "name": "artifactIdPattern",
                    "value": "spring-boot-starter"
                  },
                  {
                    "name": "version",
                    "value": "1-2"
                  }
                ]
              }
            },
            {
              "name": "Minor",
              "recipe": {
                "recipeId": "org.openrewrite.java.dependencies.DependencyInsight",
                "options": [
                  {
                    "name": "groupIdPattern",
                    "value": "org.springframework.boot"
                  },
                  {
                    "name": "artifactIdPattern",
                    "value": "spring-boot-starter"
                  },
                  {
                    "name": "version",
                    "value": "3-3.1"
                  }
                ]
              }
            },
            {
              "name": "Patch",
              "recipe": {
                "recipeId": "org.openrewrite.java.dependencies.DependencyInsight",
                "options": [
                  {
                    "name": "groupIdPattern",
                    "value": "org.springframework.boot"
                  },
                  {
                    "name": "artifactIdPattern",
                    "value": "spring-boot-starter"
                  },
                  {
                    "name": "version",
                    "value": "3.2-3.2.2"
                  }
                ]
              }
            }
          ],
          "fix": {
            "recipeId": "org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2"
          }
        },
        {
          "title": "Java 21",
          "measures": [
            {
              "name": "Java 8+",
              "recipe": {
                "recipeId": "org.openrewrite.java.search.HasJavaVersion",
                "options": [
                  {
                    "name": "version",
                    "value": "8-10"
                  }
                ]
              }
            },
            {
              "name": "Java 11+",
              "recipe": {
                "recipeId": "org.openrewrite.java.search.HasJavaVersion",
                "options": [
                  {
                    "name": "version",
                    "value": "11-16"
                  }
                ]
              }
            },
            {
              "name": "Java 17+",
              "recipe": {
                "recipeId": "org.openrewrite.java.search.HasJavaVersion",
                "options": [
                  {
                    "name": "version",
                    "value": "17-20"
                  }
                ]
              }
            }
          ],
          "fix": {
            "recipeId": "org.openrewrite.java.migrate.UpgradeToJava21"
          }
        },
        {
          "title": "JUnit 5",
          "measures": [
            {
              "name": "JUnit 4",
              "recipe": {
                "recipeId": "org.openrewrite.java.search.FindAnnotations",
                "options": [
                  {
                    "name": "annotationPattern",
                    "value": "@org.junit.Test"
                  }
                ]
              }
            }
          ],
          "fix": {
            "recipeId": "org.openrewrite.java.testing.junit5.JUnit4to5Migration"
          }
        }
      ],

      // Other things
  }
]
```

</details>

### Visualization cards

If there are some visualizations you find particularly important for your organization, you can add them to your DevCenter so that you can quickly view and share them with others.

![](/.gitbook/assets/visualization-card.png)

To create these cards you need two things:

1. A `visualizationId` that identifies which visualization you want to include (e.g., `io.moderne.DependencyUsageViolin`).
2. Options for the visualization (if any exist).

The `visualizationId` can be found on any visualization card you run in the Moderne platform:

![](/.gitbook/assets/visualization-id.png)

#### Example

<details>

<summary>
Below is an example of an visualizations section you might have in your DevCenter:
</summary>

```json
"visualizations": [
    {
        "visualizationId": "io.moderne.DependencyUsageViolin",
    },
    {
        "visualizationId": "io.moderne.LanguageComposition"
    },
    {
        "visualizationId": "io.moderne-private.SqlHistogram"
    }
],
```

</details>

### Security cards

Security cards give your team a high-level overview of what security issues your repositories have or have not resolved.

Security cards are composed of a list of recipes that fix security issues you care about. You should include no more than 10 security recipes on one DevCenter.

![](/.gitbook/assets/security-card.png)

#### Example

<details>

<summary>
Below is an example of a security section you might have in your DevCenter:
</summary>

```json
"security": [
    {"recipeId": "org.openrewrite.java.security.OwaspA01"},
    {"recipeId": "org.openrewrite.java.security.OwaspA02"},
    {"recipeId": "org.openrewrite.java.security.OwaspA03"},
    {"recipeId": "org.openrewrite.java.security.OwaspA05"},
    {"recipeId": "org.openrewrite.java.security.OwaspA06"},
    {"recipeId": "org.openrewrite.java.security.OwaspA08"},
    {"recipeId": "org.openrewrite.java.security.RegularExpressionDenialOfService"},
    {"recipeId": "org.openrewrite.java.security.SecureRandom"},
    {"recipeId": "org.openrewrite.java.security.ZipSlip"},
    {"recipeId": "org.openrewrite.java.security.XmlParserXXEVulnerability"}
]
```

</details>

## Next steps

Once you've configured a DevCenter, you will need to wait for data to propagate to it. This can take a considerable amount of time depending on how many repositories and recipes you've configured. Please wait at least 24 hours for data to flow in.