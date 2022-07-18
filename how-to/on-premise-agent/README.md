---
description: How to run the Moderne on-premise agent
---

# On-premise agent

The Moderne on-premise agent securely connects the Moderne SaaS to customers' environments. It's delivered as an OCI image and can be run using any OCI runtime (e.g., Docker, Podman).

The purpose of the Moderne on-premise agent is to encrypt and ship AST artifacts from artifact repositories (e.g., Artifactory) to the Moderne SaaS, provide the symmetric key to be used for decryption, and forward requests from the Moderne SaaS to your version control system (e.g., Github).

## Getting Started

### Basic Usage

### Run the agent container

The Moderne on-premise agent is available as an OCI image or as a spring-boot executable jar artifact. Contact Moderne to obtain access. Moderne will provide access details appropriate for your chosen platform. In example commands below we will refer to this as `${MODERNE_AGENT_IMAGE_NAME}.` The latest one will be displayed in the "Agent" section of [the releases page](https://docs.moderne.io/releases/releases).

{% tabs %}
{% tab title="OCI Container" %}
The agent container requires several environment variables:

* `MODERNE_AGENT_API_GATEWAY_RSOCKET_URI` - URI used to connect to the Moderne API, provided by Moderne
* `MODERNE_AGENT_TOKEN` - Moderne SaaS agent connection token, provided by Moderne
* `MODERNE_AGENT_CRYPTO_SYMMETRICKEY` - 256 bit AES encryption key, hex encoded
  * example OpenSSL command to generate: `openssl enc -aes-256-cbc -k secret -P` (use key from the output)
* `MODERNE_AGENT_ARTIFACTORY_0_URL` - Artifactory URL
* `MODERNE_AGENT_ARTIFACTORY_0_USERNAME` - username used to connect to Artifactory, requires permission to run AQL queries
* `MODERNE_AGENT_ARTIFACTORY_0_PASSWORD` - password used to connect to Artifactory
* `MODERNE_AGENT_ARTIFACTORY_0_ASTSQUERYFILTERS_0` - AQL query fragment used to select AST artifacts to send to Moderne

Example using Docker (note that agent token and symmetric key are random examples)

```
docker run \
-e MODERNE_AGENT_API_GATEWAY_RSOCKET_URI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_TOKEN=W43qp4h952T4w2qV \
-e MODERNE_AGENT_CRYPTO_SYMMETRICKEY=546A576E5A7234753778217A25432A462D4A614E645267556B58703273357638 \
-e MODERNE_AGENT_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_AGENT_ARTIFACTORY_0_USERNAME=admin \
-e MODERNE_AGENT_ARTIFACTORY_0_PASSWORD=password \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTSQUERYFILTERS_0='{"name":{"$match":"*-ast.jar"}}' \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTSQUERYFILTERS_1='{"repo":{"$eq":"example-maven"}}' \
${MODERNE_AGENT_IMAGE_NAME}
```
{% endtab %}

{% tab title="Executable JAR" %}
The agent application requires several arguments:

* `--moderne.agent.apiGatewayRsocketUri` - URI used to connect to the Moderne API, provided by Moderne
* `--moderne.agent.token` - Moderne SaaS agent connection token, provided by Moderne
* `--moderne.agent.crypto.symmetricKey` - 256 bit AES encryption key, hex encoded
  * example openssl command to generate: `openssl enc -aes-256-cbc -k secret -P` (use key from the output)
* `--moderne.agent.artifactory[0].url` - Artifactory URL
* `--moderne.agent.artifactory[0].username` - username used to connect to Artifactory, requires permission to run AQL queries
* `--moderne.agent.artifactory[0].password` - password used to connect to Artifactory
* `--moderne.agent.artifactory[0].astQueryFilters[0]` - AQL query fragment used to select AST artifacts to send to Moderne

Note: system properties can be used in place of arguments. As an example, use `-Dmoderne.agent.token={token_value}` as an argument instead of `--moderne.agent.token={token_value}` as an argument.

Example (note that agent token and symmetric key are random examples)

```
java -jar moderne-agent-{version}.jar \
--moderne.agent.api-gateway-roscket-uri==https://api.tenant.moderne.io/rsocket \
--moderne.agent.token=W43qp4h952T4w2qV \
--moderne.agent.crypto.symmetricKey=546A576E5A7234753778217A25432A462D4A614E645267556B58703273357638 \
--moderne.agent.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.agent.artifactory[0].username=admin \
--moderne.agent.artifactory[0].password=password \
--moderne.agent.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.agent.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}'
```
{% endtab %}
{% endtabs %}

### Upgrading Agent Version

{% tabs %}
{% tab title="OCI Container" %}
To upgrade your version of the OCI container, just follow the instructions above, but change `${MODERNE_AGENT_IMAGE_NAME}` to the latest release of Agent on [the releases page](../../releases/releases.md).
{% endtab %}

{% tab title="Executable JAR" %}
To update your version of the Executable JAR, change the numbered version of {agent} in the instructions above to the latest on [the releases page](../../releases/releases.md).
{% endtab %}
{% endtabs %}

### Advanced Usage

#### Hashicorp Vault

The Moderne agent optionally fetches secret configuration from Vault. It reads from a KV secret engine named "secret", and reads secret keys at path "moderne-agent". To configure the secret key/value pairs, follow the following procedure:

1. In the Vault management web application, go to Secrets. If there's not already a KV engine named "secret", create it.
2. In the "secret" KV secrets engine, create a new secret using "moderne-agent" as the "Path for this secret".
3. Add the following keys to the moderne-agent secret:
   * `moderne.agent.token` - Moderne SaaS agent connection token, provided by Moderne
   * `moderne.agent.crypto.symmetricKey` - 256 bit AES encryption key, hex encoded
   * `moderne.agent.artifactory[0].password` - Artifactory user password

{% tabs %}
{% tab title="OCI Container" %}
To enable vault integration in the agent, omit environment variables that match keys specified in vault, and specify the following additional environment variables for the agent container:

* `SPRING_PROFILES_ACTIVE` - `vault`
* `SPRING_CLOUD_VAULT_URI` - Vault URI used to retrieve the secret configuration properties below
* `SPRING_CLOUD_VAULT_TOKEN` - Vault authentication token
{% endtab %}

{% tab title="Executable JAR" %}
To enable vault integration in the agent, omit arguments that match keys specified in vault, and specify the following additional arguments for the agent application:

* `spring.profiles.active` - vault
* `spring.cloud.vault.uri` `SPRING_CLOUD_VAULT_URI` - Vault URI used to retrieve the secret configuration properties below
* `SPRING_CLOUD_VAULT_TOKEN` - Vault authentication token
{% endtab %}
{% endtabs %}
