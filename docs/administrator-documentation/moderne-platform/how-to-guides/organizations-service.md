---
sidebar_label: Configuring the Organizations service
description: How to create and configure an Organizations service to group repositories.
---

# Configuring the Organizations service

Many organizations desire the ability to dynamically control the organizational structure (repository groupings) of their repositories within the Moderne Platform. To facilitate this need, Moderne provides an optional integration with an Organizations service that is hosted in your environment.

Let's walk through everything you need to know to build and integrate such a service with Moderne.

## Integration requirements

This can be done by either providing the required files to the Agent or by setting up an organization service. 
Running an Organization service allows for more flexibility when setting up the required GraphQL and REST endpoint. On the other hand, providing the agent with the files requires less setup at the cost of limited flexibility.

:::tip
When selecting which option is best for you, keep in mind that you can change the approach you have taken later. 
:::

## Providing the files on the Agent service
When providing files on the Agent service, 

1. Create and deploy an Organizations service that fulfills [this GraphQL contract](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/schema/organizations.graphqls)  and [this REST contract](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/java/io/moderne/organizations/OrganizationController.java) your environment_
2. [Configure your Moderne agent to point to this service](./agent-configuration/configure-agent-file-service.md)

## Running an Organization service
In order to dynamically control the organizational structure in Moderne, you will need to:

1. Create and deploy an Organizations service that fulfills [this GraphQL contract](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/schema/organizations.graphqls)  and [this REST contract](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/java/io/moderne/organizations/OrganizationController.java) your environment_
2. [Configure your Moderne agent to point to this service](./agent-configuration/configure-organizations-service.md)

### Coding the Organizations service

You have two main options for building this service. You can:

1. (**Recommended**) Fork our [Organizations service template](https://github.com/moderneinc/moderne-organizations) and modify it to meet your needs. Please see the [README](https://github.com/moderneinc/moderne-organizations/blob/main/README.md) for how to spin this up quickly. It can be as simple as updating a JSON file that you get from the Moderne Platform.
2. Build your own service that fulfills the [GraphQL contract](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/schema/organizations.graphqls) using any GraphQL stack (e.g., NodeJS, Rust, C#, etc.)

We generally recommend forking the template and modifying it as, in most cases, that will be faster and easier than building it yourself. Regardless of which one you choose, however, some developer time will be required on your end.

### Deploying the service

How you deploy the service is largely up to your company. With that being said, there are a few important things to be aware of:

* Communication with the Organizations service is done through the [Moderne agent](./agent-configuration/agent-config.md). Therefore, this service **must** be accessible from the agent.
* Moderne will make a request per repository to the Organizations service once every 10 minutes by default (you can change this interval in your [agent configuration](./agent-configuration/configure-organizations-service.md)). Please ensure that you have metrics to track how this service is performing so you can adjust it over time.
* You'll want a minimum system spec of 2 CPU cores, 8 GB of memory, and at least 10 GB of persistent storage.

## FAQ

### If the Organizations service stops responding (e.g., the service is down), what is the expected behavior?

The organizations a user can see in the Moderne Platform are determined by the `userOrganizations` query. If the service is down, then organizations and repositories will be unavailable and recipes would, therefore, be unable to run.

### How do you restrict which commit options are available in the UI?

You can change this in the `commitOptions` array in your organizations service.
[See the configuration options on our reference implementation](https://github.com/moderneinc/moderne-organizations/tree/main?tab=readme-ov-file#commit-options).

### What would happen if the service returned an empty `commitOptions` array? Would that disable commit capabilities for these organizations?

Violating the GraphQL contract will cause errors and make it so the Moderne Platform will not function as expected. Since the GraphQL contract expects `commitOptions` to be populated, the query will error if no options are returned. In turn, users won't be able to run recipes.

### If no Organizations service is active/configured, would it be possible to change the default commit options and repositories in the Moderne UI?

No – it is not possible to change the defaults. If no Organizations service is configured in the agent, then an `All` organization will be returned that contains all of the repositories in your org with all commit options available. If an Organizations service is configured – but not accessible – then nothing will be available in Moderne.

### How often are organizations synced to Moderne?

By default, organizational data is synced every 10 minutes. You can increase or decrease this by modifying your [agent configuration](./agent-configuration/configure-organizations-service.md).

### Is it possible to manually force a sync of the organizations?

Yes. There is a GraphQL admin-only mutation to force a refresh on demand (`refreshOrganizations`).

### What does a query to this service look like?

```bash
curl --request POST \
  --url https://organizations.company-name.com/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"query orgs($repository: RepositoryInput) {\n\torganizations(repository: $repository) {\n\t\tid\n\t\tname\n\t\tcommitOptions\n\t}\n}","operationName":"orgs","variables":{"repository":{"origin":"github.com","path":"Netflix/curator","branch":"master"}}}'
```

### Do you have an architecture diagram that shows where this service fits in?

Yes - see our [architecture documentation](../references/architecture.md).
