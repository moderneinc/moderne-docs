---
description: How to run the Moderne on-premise agent
---

# On-Premise Agent

The Moderne on-premise agent securely connects the Moderne SaaS to customers' environments. It's delivered as an OCI image and can be run using any OCI runtime \(i.e. Docker, Podman, etc\). 

The purpose of the Moderne on-premise agent is to encrypt and ship AST artifacts from artifact repositories \(i.e. Artifactory\) to the Moderne SaaS, provide the symmetric key to be used for decryption, and forward requests from the Moderne SaaS to your version control system \(i.e. Github\).

## Getting Started

### Hashicorp Vault

The Moderne agent fetches secret configuration from Vault. It reads from a KV secret engine named "secret", and reads secret keys at path "moderne-agent". To configure the secret key/value pairs, follow the following procedure:

1. In the Vault management web application, go to Secrets. If there's not already a KV engine named "secret", create it.
2. In the "secret" KV secrets engine, create a new secret using "moderne-agent" as the "Path for this secret". 
3. Add the following keys to the moderne-agent secret:
   * moderne.agent.token - Moderne SaaS agent connection token, provided by Moderne
   * moderne.artifact.symmetricKey - 128 bit AES encryption key, base-64 encoded
   * moderne.agent.artifactory.password - Artifactory user password

### Run the agent container

The Moderne on-premise agent is available as an OCI image. Contact Moderne to obtain access. 

The container requires several environment variables:

* MODERNE\_API\_GATEWAY_\__RSOCKET_\__URI - URI used to connect to the Moderne API, provided by Moderne
* MODERNE\_AGENT_\__ARTIFACTORY\_URL - Artifactory URL
* MODERNE\_AGENT_\__ARTIFACTORY\_USERNAME - username used to connect to Artifactory, requires permission to run AQL queries
* MODERNE\_AGENT_\__ARTIFACTORY\_ASTSQUERY - AQL query used to select AST artifacts to send to Moderne
* SPRING\_CLOUD_\__VAULT\_URI - Vault URI used to retrieve the secret configuration properties below
* SPRING\_CLOUD_\__VAULT\_TOKEN - Vault root token used to access vault via token authentication

Example using docker

```text
docker run -e MODERNE_API_GATEWAY_RSOCKET_URI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_ARTIFACTORY_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_AGENT_ARTIFACTORY_USERNAME=admin \
-e MODERNE_AGENT_ARTIFACTORY_ASTSQUERY='items.find({"repo":{"$eq":"example-maven"},"name":{"$match":"*-ast.jar"}})' \
-e SPRING_CLOUD_VAULT_URI=https://myvault.example.com \
-e SPRING_CLOUD_VAULT_TOKEN=vault_token \
moderne/agent:latest
```



