# Architecture

To help you understand how the Moderne platform works and how it interacts with your environment and services, this document will:

* [Explain how Moderne fits into the typical software development lifecycle](#how-moderne-fits-into-the-software-development-lifecycle)
* [Provide you with an architecture diagram that shows how data flows through the core components in both Moderne's environment and yours](#architecture-diagram)
* [Give you high-level details about each of these core components](#key-components)

## How Moderne fits into the software development lifecycle

Moderne’s SaaS allows permitted users to run [recipes](https://docs.openrewrite.org/concepts-and-explanations/recipes) on code in the repositories you've added to the platform. These recipes can yield pull requests (PRs) or commits that transform the code.

As the code changes (either due to recipe results being merged in or due to active development), an artifact that contains a serialized representation of the code's [Lossless Semantic Tree](/concepts/lossless-semantic-trees.md) (LST) will need to be generated and published (See the [customer CI](#customer-ci) section for more information on how to publish artifacts and the [Moderne agent](#moderne-agent) section for more information on how these artifacts are encrypted and securely transmitted).

Once the artifact is published, the Moderne agent will send the changes to Moderne so that the internal state can be updated. After that happens, new recipes can be run against the new artifacts and the process will repeat.

![Moderne + SDL](/.gitbook/assets/moderne-sdl.png)

## Architecture diagram

Below is a high-level architecture diagram that shows the flow of data between Moderne and a typical customer environment. Arrows indicate communication between components. The details of each component can be found in the following sections.

![Moderne architecture](/.gitbook/assets/moderne-architecture.png)

## Key components

### Customer CI

In order for Moderne to know the current state of your code, artifacts will need to be generated that contain a serialized representation of your code's [LSTs](/concepts/lossless-semantic-trees.md). These artifacts must be put inside an artifact repository that the [Moderne agent](#moderne-agent) has access to. 

There are two ways to generate artifacts. You can:

1. Set up a [Jenkins ingest pipeline](https://github.com/moderneinc/enterprise-jenkins-ingest#readme) that runs at scheduled intervals to build and publish artifacts for the repositories you specify in a CSV (**recommended**)
    * Easier to scale and does not require you to modify the build process
    * This is what the [public Moderne tenant](https://public.moderne.io/) uses
2. [Apply a Gradle or Maven plugin](https://docs.moderne.io/how-to/integrating-private-code) directly to each repository that you want artifacts published for
    * Faster to set up originally, but does not scale well for large numbers of repositories and requires the build process to be modified for each

Regardless of which option you choose, the LST artifacts will be published to your existing artifact repository alongside binary, source, and JavaDoc artifacts that are already created by your team's normal publishing mechanisms. Since the LST artifacts are added to your existing artifact repository, _no additional credentials are needed_.

### Moderne agent

At a high level, you can think of the Moderne agent as a bridge between your environment and Moderne. All data that Moderne needs to function will pass over this bridge and flow into the [Moderne API Gateway](#moderne-api-gateway). As this data is sent to Moderne, it's encrypted – with the key being kept in your environment. Whenever Moderne needs to access any data, it will request this key and the data will be decrypted for a short time before it's thrown away. If you decide you no longer want Moderne to have access to anything, you can raise the bridge (shut off the agent) and all of your data that Moderne has will no longer be decryptable.

There are a variety of tools and services that you can configure the agent to be connected to based on the needs of your team.

At a minimum, the agent will need to connect to:

* One or more of your artifact repositories so that changes to the Moderne LST artifacts kept in them can be sent to Moderne
    * This is configured via the [Artifactory Query Language](https://www.jfrog.com/confluence/display/JFROG/Artifactory+Query+Language). Only artifacts that match what you've specified with that language will be sent to Moderne.
* Your SCM(s) so that PRs or commits can be created by approved users in Moderne

Your team may also wish to configure the agent to:

* Look in your artifact repositories for custom recipe JARs your team creates so that those recipes can be run in the Moderne SaaS
* Connect to your team's [Organizations service](https://docs.moderne.io/references/organizations-service) so that the UI can provide a customize experience for some users or repositories

{% hint style="info" %}
You can find all of the documentation for configuring agents in your environment [here](https://docs.moderne.io/how-to/on-premise-agent).
{% endhint %}

**Setup requirements**

You must:

* Deploy a Moderne-provided OCI image adjacent to Artifactory
* Ensure the agent is able to make an outbound HTTPS request to [https://api.TENANT.moderne.io](https://api.tenant.moderne.io)
* Ensure the agent is configured with an Artifactory user that is authorized to make `find` AQL requests against repositories containing LST artifacts
* Ensure the agent is configured with an Artifactory user capable of making `GET` requests to obtain the above LST artifacts
* Ensure that the deployed image is configured with an encryption key (stored in Hashicorp Vault or some other key management service)
* Ensure the agent can connect to your SCM(s) to authorize users to see code in the Moderne SaaS and to allow commits on their behalf

{% hint style="success" %}
Multiple agents can be configured for high availability or to connect to only some of these services. 
{% endhint %}

#### Agent security

Agents initiate connections to the [Moderne API gateway](#moderne-api-gateway) via the [RSocket](https://rsocket.io/) protocol. Moderne will never initiate an API call to the agent. Because of that, only egress from your environment needs to be open.

When you set up an agent, Moderne will share a token with you that you must configure in the Moderne agents you create. Moderne will reject any connection attempts from unauthorized agent instances. In this way, Moderne requires a minimum level of client (agent) verification as an extra security precaution.

The connection to Moderne is established over [layer 7](https://www.cloudflare.com/learning/ddos/what-is-layer-7/), so you may choose to route traffic from the agent through your own layer 7 gateway. This might be chosen to satisfy a desire for [Moderne’s API gateway](#moderne-api-gateway) to perform client verification of an inbound agent connection using a mechanism like X.509 in addition to token-based verification.

These measures act in concert with techniques to limit IP addressability of the Moderne API gateway to enhance the overall security posture.

### Organizations service

The Organizations service is an _optional_ service that you can configure in your environment. It defines the organizational structure that a user or a repository belongs to. The Moderne SaaS will use this information to present different UIs or options for different users and repositories. Please see our [Organizations service doc](/references/organizations-service.md) for more information.

**Setup requirements**

You must:

* Ensure that the Organizations service is capable of receiving requests from the [Moderne agent](#moderne-agent)
* Ensure your service fulfills the GraphQL contract outlined in our [Organizations service documentation](https://docs.moderne.io/references/organizations-service)

### Moderne API gateway

The Moderne API gateway serves as the entry point to Moderne. It talks with the [Moderne agent](#moderne-agent) to get data from your services to Moderne. It is the only component with a public IP address that can communicate with other Moderne services. The [Moderne UI](#moderne-user-interface) and [Keycloak](#keycloak) also have public IP addresses, but they can't communicate with other Moderne services.

The API gateway is responsible for:

* Handling API requests from your developers or your tools
* Handling API requests from the Moderne UI
* Handling encrypted LST artifacts from the Moderne agent(s)
* Handling encrypted custom recipe artifacts from the Moderne agent(s)
* Rate limiting as needed to guard Moderne services against overuse by a particular user

Authorized users in your company can access audit logs for this gateway via an API.

{% hint style="info" %}
The Moderne API gateway is configured with a Moderne-managed SSL certificate.
{% endhint %}

**Setup requirements**

You must:

* Ensure that [https://api.TENANT.moderne.io](https://api.tenant.moderne.io) is on the accept list for outbound HTTPS traffic from the Moderne agent
* Ensure that [https://api.TENANT.moderne.io](https://api.tenant.moderne.io) is on the accept list for outbound HTTPS traffic from the developer's machines

### Moderne user interface

The Moderne UI provides a browser-based interface for:

* Executing search and transformation recipes across your codebase
* Issuing mass commits/PRs based on recipe runs
* Building new recipes based on other recipes
* Viewing audit logs
* Generating access tokens

The Moderne UI is implemented entirely with client-side Javascript. The Moderne UI is one of three components with a public IP address (the other two being the [Moderne API gateway](#moderne-api-gateway) and [Keycloak](#keycloak)).

**Setup requirements**

You must:

* Ensure that [https://TENANT.moderne.io](https://tenant.moderne.io) is on the accept list for outbound HTTPS traffic from the developer's machines

### Keycloak

[Keycloak](https://www.keycloak.org/) is an open-source identity and access management system. Moderne services request authorization information for a user from Keycloak. Keycloak then calls out to your identity provider (such as LDAP, Okta, or Keycloak) to determine who is authorized for what.

**Setup requirements**

You must:

* Ensure that [https://login.TENANT.moderne.io](https://login.tenant.moderne.io) is on the accept list for outbound HTTPS traffic from the developer's machines

{% hint style="success" %}
As configuring identity providers between services can be quite complex, the setup for Keycloak is usually done over a Zoom meeting with Moderne and your company. 
{% endhint %}

### Moderne artifact storage

The Moderne artifact storage service is responsible for receiving pre-encrypted LST artifacts and recipe JARs and storing them in a private object store depending on the cloud provider you use ([Azure Blob Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/), [Google Cloud Storage](https://cloud.google.com/storage), or [AWS S3](https://aws.amazon.com/pm/serv-s3/)).

The artifact storage service will also write high-level information about where to find these artifacts and when they were last updated to Postgres so that the [Moderne workers](#moderne-worker) know where to go to obtain the artifacts they need.

**Setup requirements**
* None

### GraphQL federation

The GraphQL federation is an internal Moderne microservice that composes the GraphQL schemas of individual Moderne microservices into one GraphQL schema. All GraphQL requests pass through the federation service on their way to the individual microservice that supports a piece of the GraphQL schema.

GraphQL federation uses [Netflix Eureka](https://github.com/Netflix/eureka) to locate microservice instances to communicate with and to load-balance requests to those instances.

**Setup requirements**
* None

### Moderne recipe execution

You can think of the Moderne recipe execution service as a manager that helps assign work, direct people on where to go, and provide high-level information. It knows all of the recipes that can be run and it chooses which [workers](#moderne-worker) are responsible for which repositories. 

When a new recipe command comes in (such as run `X` recipe on `Y` repositories with `Z` options), the recipe execution service takes that command and stores all of the details in a Postgres table that acts as a queue. Whenever a [worker](#moderne-worker) is free, it will query the Postgres table and look for commands that haven't been started (for the repositories the worker is responsible for).

The recipe execution service is also responsible for providing the results of a recipe run by either calling Postgres to see what high-level information it has or by calling the worker directly to get the full results (diffs and data tables).

**Setup requirements**
* None

### Moderne worker

Moderne workers are responsible for running recipes and keeping their results. They interact with the [Moderne recipe execution service](#moderne-recipe-execution-re) to coordinate which repositories they should run recipes for before querying Postgres for a recipe to run. When a worker is stopped, all of the data and results from the recipes it has run are destroyed. If you need that data, you'll need to re-run the recipe again.

Worker instances are scaled horizontally in direct response to more code being ingested into the platform.

Workers decrypt LST and recipe artifacts by making a request to the [Moderne Agent](#moderne-agent) via the API Gateway for a customer-provided symmetric key. Workers discard this key at the end of every request.

Workers fetch a user’s SCM OAuth token via the [API gateway](#moderne-api-gateway) in order to make authorization decisions about which repositories said user is allowed to read from. This ensures Moderne’s read access is aligned with a user's SCM access in real-time for every recipe run request.

**Setup requirements**
* None

### Moderne source code management

The Moderne source code management service is responsible for handling all communication with your SCM(s). 

The two primary responsibilities are:

* Creating commits, branches, forks, PRs, etc. in your SCM
* Coordinating authorization with your SCM to see what users are authorized to do or view

Please note that the requests to your SCM will appear to come from the [Moderne agent](#moderne-agent). The Moderne source code management service will talk through the [API gateway](#moderne-api-gateway) to the agent whenever it needs to interact with your SCM.

Authentication and authorization decisions are made in real-time to ensure that they are always up-to-date. 

**Setup requirements**
* None

### Moderne audit log

The Moderne audit log retrieves audit logs from a Postgres database for presentation to privileged users via the [API gateway](#moderne-api-gateway).

Audit logs can be retrieved via a paginated GraphQL API or via a REST call that responds in the CEF format.

Individual Moderne microservices are responsible for contributing to the audit log database when they perform any interaction on behalf of users.

**Setup requirements**
* None

### Moderne tokens

The Moderne tokens service generates and retrieves access tokens tied to a particular user. Access tokens can be used to access the service via IDEs and custom tooling. Users can manage their access tokens via the [Moderne UI](#moderne-user-interface). Tokens are only visible once at creation time and are hidden from that point forward, even from the user that created them.

Please see our [token documentation](/references/create-api-access-tokens.md) for more information on how to create, work with, and revoke tokens.

**Setup requirements**
* None
