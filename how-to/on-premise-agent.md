---
description: How to run the Moderne on-premise agent
---

# On-Premise Agent

The Moderne on-premise agent securely connects the Moderne SaaS to customers' environments. It's delivered as an OCI image and can be run using any OCI runtime (e.g., Docker, Podman).&#x20;

The purpose of the Moderne on-premise agent is to encrypt and ship AST artifacts from artifact repositories (e.g., Artifactory) to the Moderne SaaS, provide the symmetric key to be used for decryption, and forward requests from the Moderne SaaS to your version control system (e.g., Github).

## Getting Started

### Basic Usage

### Run the agent container

The Moderne on-premise agent is available as an OCI image. Contact Moderne to obtain access. Moderne will provide private registry and image names appropriate for your cloud platform. In example commands below we will refer to this as `${MODERNE_AGENT_IMAGE_NAME}.`

The container requires several environment variables:

* MODERNE\_API\_GATEWAY_\__RSOCKET_\__URI - URI used to connect to the Moderne API, provided by Moderne
* MODERNE\_AGENT\_TOKEN - Moderne SaaS agent connection token, provided by Moderne
* MODERNE\_ARTIFACT_\__SYMMETRICKEY - 256 bit AES encryption key, hex encoded
* MODERNE\_AGENT_\__ARTIFACTORY\_URL - Artifactory URL
* MODERNE\_AGENT_\__ARTIFACTORY\_USERNAME - username used to connect to Artifactory, requires permission to run AQL queries
* MODERNE\_AGENT_\__ARTIFACTORY\_PASSWORD - password used to connect to Artifactory
* MODERNE\_AGENT_\__ARTIFACTORY\_ASTSQUERY - AQL query used to select AST artifacts to send to Moderne

Example using docker (note that agent token and artifact symmetric key are random examples)

```
docker run \
-e MODERNE_API_GATEWAY_RSOCKET_URI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_TOKEN=W43qp4h952T4w2qV \
-e MODERNE_ARTIFACT_SYMMETRICKEY=546A576E5A7234753778217A25432A462D4A614E645267556B58703273357638 \
-e MODERNE_AGENT_ARTIFACTORY_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_AGENT_ARTIFACTORY_USERNAME=admin \
-e MODENRE_AGENT_ARTIFACTORY_PASSWORD=password \
-e MODERNE_AGENT_ARTIFACTORY_ASTSQUERY='items.find({"repo":{"$eq":"example-maven"},"name":{"$match":"*-ast.jar"}})' \
${MODERNE_AGENT_IMAGE_NAME}
```

### Advanced Usage

#### Hashicorp Vault

The Moderne agent optionally fetches secret configuration from Vault. It reads from a KV secret engine named "secret", and reads secret keys at path "moderne-agent". To configure the secret key/value pairs, follow the following procedure:

1. In the Vault management web application, go to Secrets. If there's not already a KV engine named "secret", create it.
2. In the "secret" KV secrets engine, create a new secret using "moderne-agent" as the "Path for this secret".&#x20;
3. Add the following keys to the moderne-agent secret:
   * moderne.agent.token - Moderne SaaS agent connection token, provided by Moderne
   * moderne.artifact.symmetricKey - 256 bit AES encryption key, hex encoded
   * moderne.agent.artifactory.password - Artifactory user password

To enable vault integration in the agent, omit environment variables that match keys specified in vault, and specify the following environment variables for the container:

* SPRING\_PROFILES_\__ACTIVE - `vault`
* SPRING\_CLOUD_\__VAULT\_URI - Vault URI used to retrieve the secret configuration properties below
* SPRING\_CLOUD_\__VAULT\_TOKEN - Vault authentication token

