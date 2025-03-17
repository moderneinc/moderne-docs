---
sidebar_label: Upgrading to the latest Organization service
description: How to upgrade your Organization service to the latest released version.
---

# How to upgrade your Organization service to the latest released version

As we continue to expand the functionality of the Organization service, the API contract is also updated. When that happens, you will need to update your own service to match the new contract.

This guide will walk you through everything you need to know about performing this upgrade.

:::tip
Rather than redoing your Organizations service to match the new contract, you should consider [migrating to a file-based organizational config](./migrate-from-an-organization-service-files-on-the-agent.md) instead as it is much simpler and requires less overhead.
:::

## February 2025 contract changes

Four new REST endpoints have been added to the organization service that you will need to implement. Implementation details for these can be found [at the bottom of this doc](#implementation-details). 

* **GET** `/organizations`
* **GET** `/commit-options`
* **GET** `/id-mapping`
* **POST** `/devcenters`
  * **Body paramaters**: `{List<String> organizationIds}`

## Motivation

There were two main motivations for these changes:

1. Customers with a large number of organizations were seeing significant performance issues and timeouts when trying to retrieve the organization details due to the number of requests being made.
2. We wanted to add an easier option for people to configure organizational structure and found that adding REST endpoints that returned files was the simplest and most efficient approach. 

## Implementation details

If you already have files like `repos.csv`, `commitOptions.txt`, and `id-mapping.txt`, we'd recommend that you emulate [our example controller](https://github.com/moderneinc/moderne-organizations/blob/fbc92af9e31076c6dea95499517f7f4e53fdc33c/src/main/java/io/moderne/organizations/OrganizationController.java) to create REST endpoints that return those files.

If you, instead, generate this information via some other means, then you'll need to ensure that the new endpoints return the expected data.

Below we'll walk through each of the new endpoints and clarify what they return and what is expected.

### GET `/organizations`

This endpoint defines your organizational structure. It needs to return the contents of a CSV file that follows this format of: `cloneUrl`, `branch`, and then a list of one or more organizations – with each column being named org + a number (e.g., `org1`, `org2`).

The organization on the left is a child of the organization on its right. If a repository is included in multiple organizations, it will have multiple entries in the file.

Below you can see an example of what this endpoint might return:

```text
cloneUrl,branch,org1,org2,org3,org4,org5,org6,org7,org8,org9,org10
https://github.com/apache/maven-doxia,master,Default,ALL
https://github.com/aws/amazon-documentdb-jdbc-driver,develop,Default,ALL
https://github.com/Netflix/CassJMeter,master,Netflix,Netflix + Spring,Netflix + Spring + Apache,Open Source,ALL
https://github.com/Netflix/EVCache,master,Netflix,Netflix + Spring,Netflix + Spring + Apache,Open Source,ALL
```

### GET `/commit-options`

This endpoint allows you to configure custom commit options for individual organizations. By commit options, we mean the various ways that code can be committed such as only allowing pull requests for code changes –– or allowing people to commit directory to main.

**If you don’t require this level of customization, please return an empty string.**

This endpoint should return the content of a file where each line begins with an `OrganizationId`, then an `=` sign, then a list of commit options for that organization. You should only include an organization if it differs from your default commit options.

Below you can find an example of what this endpoint might return:

```text
Open Source=Branch,PullRequest
Default=Branch,Direct,PullRequest
```

### GET `/id-mapping`

This endpoint allows you to configure multiple organizations to have the same name. 

If your existing organization Ids are the same as your organization names, you do not need this functionality – so please **return an empty string**.

If you do need this functionality, then this endpoint should return the content of a file where each line is an `OrganizationId`, then an `=` sign, and then a name that organization should have.

Below you can find an example of what this endpoint might return:

```text
Open Source=OS
Default=Default Organization
```

### POST `/devcenters`

This endpoint allows you to configure [DevCenters](../dev-center.md) for specific organizations.

**If you do not intend to use this feature, please return an empty list from this function.**

If you want to use this feature, then this endpoint should take in a list of `OrganizationId` Strings and return a [JSON-like structure of DevCenter configurations](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/schema/organizations.graphqls#L131-L150) and the organizations they apply to.

For example, if someone calls this endpoint with the following strings: `Default, Open Source`, then this endpoint should return DevCenter configurations for those `OrganizationIds`.

<details>
    <summary>
      Below is an example of what might be returned:
    </summary>

    ```json
    [
      {
        "devCenter": {
          "upgradesAndMigrations": [
            {
              "title": "Spring boot",
              "measures": [
                {
                  "name": "Major",
                  "recipe": {
                    "recipeId": "org.openrewrite.java.dependencies.search.FindMinimumDependencyVersion",
                    "options": [
                      {
                        "name": "groupIdPattern",
                        "value": "org.springframework.boot"
                      },
                      {
                        "name": "artifactIdPattern",
                        "value": "spring-boot"
                      },
                      {
                        "name": "version",
                        "value": "1-2.999"
                      }
                    ]
                  }
                },
                {
                  "name": "Minor",
                  "recipe": {
                    "recipeId": "org.openrewrite.java.dependencies.search.FindMinimumDependencyVersion",
                    "options": [
                      {
                        "name": "groupIdPattern",
                        "value": "org.springframework.boot"
                      },
                      {
                        "name": "artifactIdPattern",
                        "value": "spring-boot"
                      },
                      {
                        "name": "version",
                        "value": "3-3.2.999"
                      }
                    ]
                  }
                }
              ],
              "fix": {
                "recipeId": "org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2"
              }
            }
          ],
          "visualizations": [
            {
              "visualizationId": "io.moderne.DependencyUsageViolin"
            }
          ],
          "security": [
            {
              "recipeId": "org.openrewrite.java.security.OwaspA01"
            }
          ]
        },
        "organizations": [
          "Default", "Gradle", "Spring"
        ]
      },
      {
        "devCenter": {
          "upgradesAndMigrations": [
            {
              "title": "Spring boot",
              "measures": [
                {
                  "name": "Major",
                  "recipe": {
                    "recipeId": "org.openrewrite.java.dependencies.search.FindMinimumDependencyVersion",
                    "options": [
                      {
                        "name": "groupIdPattern",
                        "value": "org.springframework.boot"
                      },
                      {
                        "name": "artifactIdPattern",
                        "value": "spring-boot"
                      },
                      {
                        "name": "version",
                        "value": "1-2.999"
                      }
                    ]
                  }
                },
                {
                  "name": "Minor",
                  "recipe": {
                    "recipeId": "org.openrewrite.java.dependencies.search.FindMinimumDependencyVersion",
                    "options": [
                      {
                        "name": "groupIdPattern",
                        "value": "org.springframework.boot"
                      },
                      {
                        "name": "artifactIdPattern",
                        "value": "spring-boot"
                      },
                      {
                        "name": "version",
                        "value": "3-3.2.999"
                      }
                    ]
                  }
                }
              ],
              "fix": {
                "recipeId": "org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2"
              }
            }
          ],
          "visualizations": [
            {
              "visualizationId": "io.moderne.DependencyUsageViolin"
            }
          ],
          "security": [
            {
              "recipeId": "org.openrewrite.java.security.OwaspA01"
            }
          ]
        },
        "organizations": [
          "Open Source"
        ]
      },
    ]
    ```
  </details>

For a more detailed example of this file, check out [our example in the moderne-organizations repository](https://github.com/moderneinc/moderne-organizations/blob/fbc92af9e31076c6dea95499517f7f4e53fdc33c/src/main/resources/devcenter.json). You might also find it beneficial to read [our guide on configuring the DevCenter](../dev-center.md).