---
sidebar_label: Migrating to the latest Organization Service
description: How to migrate from an your Organization service to the latest released version.
---

# Organization Service Migration

Sometimes changes are made to the Organization service contract. This guide will help you understand what has changed and how to update your Organization service to match the new contract.
This guide highlights changes required when upgrading from to the February 2025 contract changes. 

## What has changed?
Four REST endpoints have been added to the organization service. If you are using the organization template you can use [this example controller to implement them](https://github.com/moderneinc/moderne-organizations/blob/fbc92af9e31076c6dea95499517f7f4e53fdc33c/src/main/java/io/moderne/organizations/OrganizationController.java).

GET `/organizations`
- Returns: The contents of `repos.csv`

GET `/commit-options`
- Returns: The contents of `commitOptions.txt`

GET `/id-mapping`
- Returns: The contents of `id-mapping.txt`

POST `/devcenters`
- Body parameters: `{List<String> organizationIds}`
- Returns:
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
     "myOrganizationId"
   ]
 }
]
```
For a more [detailed example view this example](https://github.com/moderneinc/moderne-organizations/blob/fbc92af9e31076c6dea95499517f7f4e53fdc33c/src/main/resources/devcenter.json#L3).

## Motivation

There are 2 motivations for this change. The first was to decrease the number of calls which are being made to the Organization service
when retrieving the organization's details. We are moving from a previously paged graphQL endpoint to 4 REST endpoints.
For customers with a large number of organizations, we were seeing performance issues when retrieving the organization details
due to the number of requests being made.

The second was to allow customers who don’t have custom logic on their Organization to provided the required files on their agent.
For customers who are looking to migrate off of their existing Organization service, [follow these instructions](migrate-from-an-organization-service-files-on-the-agent.md).

## Adding the next REST endpoints to your Organization service

To implement these endpoints you can use [this example controller](https://github.com/moderneinc/moderne-organizations/blob/fbc92af9e31076c6dea95499517f7f4e53fdc33c/src/main/java/io/moderne/organizations/OrganizationController.java).

For customers who generate the data returned by the graphQL endpoint through other means than reading from the mentioned files,
there could be a couple of changes which are required. As some of these endpoints return the content of some optional files it first imports
to identify if the required endpoint has data to return or can return the contents of an “empty” file.

### Adding GET /organizations

Returns: The contents of `repos.csv`
This endpoint returns the content of a CSV file that follows this format of: clone URL, branch, and then a list of one or more organizations – with each column being named org + a number (e.g., org1, org2). Each row represents a repository and its associated organization tree. If a repositories is included in multiple organizations it will have multiple entries in the file.
For example:

```text
cloneUrl,branch,org1,org2,org3,org4,org5,org6,org7,org8,org9,org10
https://github.com/apache/maven-doxia,master,Default,ALL
https://github.com/aws/amazon-documentdb-jdbc-driver,develop,Default,ALL
https://github.com/Netflix/CassJMeter,master,Netflix,Netflix + Spring,Netflix + Spring + Apache,Open Source,ALL
https://github.com/Netflix/EVCache,master,Netflix,Netflix + Spring,Netflix + Spring + Apache,Open Source,ALL
```

### Adding GET /commit-options

Returns: The contents of `commitOptions.txt`
This is an optional file which allows you to configure custom commit options for an individual organization. By commit options, we mean the various ways that code can be committed such as only allowing pull requests for code changes –– or allowing people to commit directly to main.

If you don’t require this customization return an empty string.

To configure this endpoint returns the equivalent of the content of a file where each line is `Organization_ID=Application_Commit_Options_seperated_by_comma`. Only include organizations which are different from your defaults
For example:
```text
Open Source=Branch,PullRequest
Default=Branch,Direct,PullRequest
```

### Adding GET /id-mapping

Returns: The contents of `id-mapping.txt`
If your organization IDs are the same are your organization names, you do not require this.


If you don’t require this customization return an empty string.

To configure this endpoint returns the equivalent of the content of a file where each line is `Organization_ID=Organization_Name`. Only include organizations which are different from your defaults
For example:
```text
Open Source=OS
Default=Default Organization
```

### Adding POST /devcenters

Returns:  A list of DevCenters associated with the organizations they apply
```json
[
 {
   "devCenter": {
     "upgradesAndMigrations": [],
     "visualizations": [],
     "security": []
   },
   "organizations": [
     "myOrganizationId",
     "myOrganizationId2"
   ]
 }
]
```


If you are using a customer devCenter you will need this if not it can return an empty list.


You should have some logic to provide the devCenter object related to an organization. You will need return a list of objects which contain the devCenter and a list of the organizations IDs associated with it.
