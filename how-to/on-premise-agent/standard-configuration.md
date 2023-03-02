# Standard configuration

The Moderne on-premise agent securely connects the Moderne SaaS to customers' environments. It's delivered as an OCI image and can be run using any OCI runtime (e.g., Docker, Podman).

The purpose of the Moderne on-premise agent is to encrypt and ship AST artifacts from artifact repositories (e.g., Artifactory) to the Moderne SaaS, provide the symmetric key to be used for decryption, and forward requests from the Moderne SaaS to your version control system (e.g., Github).

### Run the agent container

The Moderne on-premise agent is available as an OCI image or as a spring-boot executable jar artifact. Contact Moderne to obtain access. Moderne will provide access details appropriate for your chosen platform. In the example commands below we will refer to this as `${MODERNE_AGENT_IMAGE_NAME}.` The latest one will be displayed in the "Agent" section of [the releases page](https://docs.moderne.io/releases/releases). Please note that additional integration-specific configuration is required, and consult the other subpages of  [.](./ "mention").

### AST encryption symmetric key

The Moderne agent requires customers to provide a hex encoded 256 bit AES encryption key to be used to encrypt ASTs before they are sent to the SaaS tenant. To generate a key, the following openssl command can be used:

`openssl enc -aes-256-cbc -k secret -P`

Take the key property output by the command above and use it for the symmetric key configuration environment variable or argument below.

{% tabs %}
{% tab title="OCI Container" %}
Authenticate:

```
docker login -u moderne-tenant -p <ACR password, provided by Moderne> moderne.azurecr.io
```



Pull:

```
docker pull moderne.azurecr.io/moderne-dev/moderne/moderne-agent:latest
```

The agent container requires several environment variables:

* `MODERNE_AGENT_APIGATEWAYRSOCKETURI` - URI used to connect to the Moderne API, provided by Moderne
* `MODERNE_AGENT_TOKEN` - Moderne SaaS agent connection token, provided by Moderne
*   `MODERNE_AGENT_CRYPTO_SYMMETRICKEY` - 256 bit AES encryption key, hex encoded



Example using Docker (note that agent token and symmetric key are random examples)

```
docker run \
-e MODERNE_AGENT_NICKNAME=prod-1 \
-e MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_TOKEN=W43qp4h952T4w2qV \
-e MODERNE_AGENT_CRYPTO_SYMMETRICKEY=546A576E5A7234753778217A25432A462D4A614E645267556B58703273357638 \
-p 8080:8080
${MODERNE_AGENT_IMAGE_NAME}
```
{% endtab %}

{% tab title="Executable JAR" %}
The agent application requires several arguments:

* `--moderne.agent.apiGatewayRsocketUri` - URI used to connect to the Moderne API, provided by Moderne
* `--moderne.agent.token` - Moderne SaaS agent connection token, provided by Moderne
* `--moderne.agent.crypto.symmetricKey` - 256-bit AES encryption key, hex-encoded



Note: system properties can be used in place of arguments. As an example, use `-Dmoderne.agent.token={token_value}` as an argument instead of `--moderne.agent.token={token_value}` as an argument.



Example (note that agent token and symmetric key are random examples)

```
java -jar moderne-agent-{version}.jar \
--moderne.agent.nickname=prod-1 \
--moderne.agent.api-gateway-rsocket-uri==https://api.tenant.moderne.io/rsocket \
--moderne.agent.token=W43qp4h952T4w2qV \
--moderne.agent.crypto.symmetricKey=546A576E5A7234753778217A25432A462D4A614E645267556B58703273357638
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
