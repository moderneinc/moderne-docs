# Routing requests to agents

In most enterprise environments, deployments of developer tooling like source control management (SCM) systems and artifact repositories are complex and varied. There may be multiple SCM systems on isolated network segments.

The scaling characteristics of these solutions are also distinct. Retrieving artifacts from an artifact repository is more intensive than making API requests against an SCM.

Moderne Agents perform actions against these various pieces of tooling on behalf of Moderne users. Below is an illustration of an example Moderne deployment.

![](./assets/agent-requests.png)

Here we have a total of 6 agents running in the customer environment. Not every agent is configured the same. Circular agents are connected to SCM repositories, and square agents are connected to artifact repositories.

:::info
The combinations of configurations are varied. A single agent instance may be configured to be connected to multiple developer tools. In our example we are configuring one tool per agent instance, but this is not the only way to work.
:::

Depending on the action, requests to these agents are routed differently. Moderne can partition requests across agents, broadcast to matching agents or not, and filter agents.

| Broadcast | Partition                            | Responses | Examples                                                                                                                   |
| --------- | ------------------------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| yes       | <span style={{color: 'red'}}>N/A</span> | many      | Scraping metrics from every agent                                                                                          |
| no        | yes                                  | many      | Syncing LST artifacts from a representative agent for each distinct artifact repository (partition by artifact repository) |
| yes       | no                                   | many      | No current use case                                                                                                        |
| no        | no                                   | one       | Git commit                                                                                                                 |
