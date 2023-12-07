# Organizations service

Many organizations desire the ability to dynamically control the organizational structure (repository groupings) of their repositories within the Moderne platform. To facilitate this need, Moderne provides an optional integration with an Organizations service that is hosted in your environment.

Let's walk through everything you need to know to build and integrate such a service with Moderne.

## Integration requirements

In order to dynamically control the organizational structure in Moderne, you will need to:

1. Create and deploy an Organizations service that fulfills [this GraphQL contract](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/schema/moderne-organizations.graphqls) _in your environment_
2. [Configure your Moderne agent to point to this service](../../how-to-guides/on-premise-agent/configure-organizations-service.md)

## Coding the Organizations service

You have two main options for building this service. You can:

1. (**Recommended**) Fork our [Organizations service template](https://github.com/moderneinc/moderne-organizations) and modify it to meet your needs. Please see the [README](https://github.com/moderneinc/moderne-organizations/blob/main/README.md) for how to spin this up quickly. It can be as simple as updating a JSON file that you get from the Moderne platform.
2. Build your own service that fulfills the [GraphQL contract](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/schema/moderne-organizations.graphqls) using any GraphQL stack (e.g., NodeJS, Rust, C#, etc.)

We generally recommend forking the template and modifying it as, in most cases, that will be faster and easier than building it yourself. Regardless of which one you choose, however, some developer time will be required on your end.

## Deploying the service

How you deploy the service is largely up to your company. With that being said, there are a few important things to be aware of:

* Communication with the Organizations service is done through the [Moderne agent](../../how-to-guides/agent-configuration.md). Therefore, this service **must** be accessible from the agent.
* The number of repositories your company has should be factored in when deciding how to size your service compute-wise. Moderne will make a request per repository to the Organizations service once every 10 minutes by default (you can change this interval in your [agent configuration](../../how-to-guides/on-premise-agent/configure-organizations-service.md)). Please ensure that you have metrics to track how this service is performing so you can adjust it over time.
* You'll want a minimum system spec of 2 CPU cores, 8 GB of memory, and at least 10 GB of persistent storage.

## FAQ

### If the Organizations service stops responding (e.g., the service is down), what is the expected behavior?

The organizations a user can see in the Moderne platform are determined by the `userOrganizations` query. If the service is down, then organizations and repositories will be unavailable and recipes would, therefore, be unable to run.

### How do you restrict which commit options are available in the UI?

You can change this in the `commitOptions` array in your JSON resource. ([Example](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/ownership.json#LL296C1-L301C6))

### What would happen if the service returned an empty `commitOptions` array? Would that disable commit capabilities for these organizations?

Violating the GraphQL contract will cause errors and make it so the Moderne platform will not function as expected. Since the GraphQL contract expects `commitOptions` to be populated, the query will error if no options are returned. In turn, users won't be able to run recipes.

### If no Organizations service is active/configured, would it be possible to change the default commit options and repositories in the Moderne UI?

No – it is not possible to change the defaults. If no Organizations service is configured in the agent, then an `All` organization will be returned that contains all of the repositories in your org with all commit options available. If an Organizations service is configured – but not accessible – then nothing will be available in Moderne.

### How often are organizations synced to Moderne?

By default, organizational data is synced every 10 minutes. You can increase or decrease this by modifying your [agent configuration](../../how-to-guides/on-premise-agent/configure-organizations-service.md).

### Is it possible to manually force a sync of the organizations?

Yes. There is a GraphQL admin-only mutation to force a refresh on demand (`refreshOrganizations`).

### What does a query to this service look like?

```shell
curl --request POST \
  --url https://organizations.company-name.com/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"query orgs($repository: RepositoryInput) {\n\torganizations(repository: $repository) {\n\t\tid\n\t\tname\n\t\tcommitOptions\n\t}\n}","operationName":"orgs","variables":{"repository":{"origin":"github.com","path":"Netflix/curator","branch":"master"}}}'
```

### Do you have an architecture diagram that shows where this service fits in?

Yes - see our [architecture documentation](architecture.md).
