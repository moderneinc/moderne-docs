# Routing requests to agents

In most enterprise environments, deployments of developer tooling like source control management (SCM) systems and artifact repositories are complex and varied. There may be multiple SCM systems on isolated network segments. The scaling characteristics of these solutions are also distinct. Retrieving artifacts from an artifact repository is more intensive than making API requests against an SCM.

Moderne Agents perform actions against these various pieces of tooling on behalf of Moderne users. Below is an illustration of an example Moderne deployment.

![](<../.gitbook/assets/Screen Shot 2022-05-09 at 10.53.57 AM.png>)

Here we have a total of 6 agents running in the customer environment. Not every agent is configured the same. Circular agents are connected to SCM repositories, and square agents are connected to artifact repositories.

{% hint style="info" %}
The combinations of configurations are varied. A single agent instance may be configured to be connected to multiple developer tools. For the purposes of this example we are configuring one tool per agent instance.
{% endhint %}

Depending on the action, requests to these agents are routed differently. Moderne can partition requests across agents based on configuration data and optionally filter agents by additional criteria. 

### High Availability

In addition to efficiently routing to multiple agents in order to reduce the latency of an operation, the Moderne Agent has built-in failover capability for high availability. That means you can have multiple agents with the same configuration that will act as failover targets in case the request to the first agent fails. This functionality is built into the Moderne Agent communication and is not configurable. In order to make use of the high availability feature, you need to have more than one agent connected with the same configuration.

#### Example

Let's say you have a Moderne Agent configured to connect to an internal Bitbucket server named `bitbucket.mydomain.com`. This agent will be tasked with performing operations on source code that originates from this server. In case of an error, without another agent available, the agent will simply return an error for the operation. If more than one agent is connected to the Moderne API server with the same configuration for `bitbucket.mydomain.com`, however, any failures that occur in the first agent will be automatically retried in the other agents until a successful response is returned for the operation. If there are more than two agents connected, the failover will not continue to contact the remaining agents after the first successful response is returned.
