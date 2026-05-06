---
sidebar_label: Routing requests to Connectors
description: Information on how Moderne routes requests to Connectors.
---

import VersionBanner from '@site/src/components/VersionBanner';

<VersionBanner version="v2" linkPath="/administrator-documentation/moderne-platform-v1/references/routing-requests-to-agents" />

# Routing requests to Connectors

In most enterprise environments, deployments of developer tooling like source control management (SCM) systems and artifact repositories are complex and varied. There may be multiple SCM systems on isolated network segments.

The scaling characteristics of these solutions are also distinct. Retrieving artifacts from an artifact repository is more intensive than making API requests against an SCM.

Moderne Connectors perform actions against these various pieces of tooling on behalf of Moderne users. Below is an illustration of an example Moderne deployment.

![Deployment diagram showing 6 Connectors connecting Moderne API Gateway to SCM and artifact repositories](./assets/agent-requests.png)

Here we have a total of 6 Connectors running in the customer environment. Not every Connector is configured the same. Circular Connectors are connected to SCM repositories, and square Connectors are connected to artifact repositories.

:::info
The combinations of configurations are varied. A single Connector instance may be configured to be connected to multiple developer tools. In our example we are configuring one tool per Connector instance, but this is not the only way to work.
:::

Depending on the action, requests to these Connectors are routed differently. Moderne can partition requests across Connectors, broadcast to matching Connectors or not, and filter Connectors.

| Broadcast | Partition                            | Responses | Examples                                                                                                                        |
| --------- | ------------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------- |
| yes       | <span style={{color: 'red'}}>N/A</span> | many      | Scraping metrics from every Connector                                                                                           |
| no        | yes                                  | many      | Syncing LST artifacts from a representative Connector for each distinct artifact repository (partition by artifact repository)  |
| yes       | no                                   | many      | No current use case                                                                                                             |
| no        | no                                   | one       | Git commit                                                                                                                      |
