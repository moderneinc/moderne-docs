# Configure an agent to connect to Moderne via an HTTP proxy

If your organization requires an HTTP proxy in order to be able to access the public internet, you can configure this proxy for communication between the Moderne Agent and the Moderne API Gateway.

This proxy will be used for egress, and then the API gateway will establish the Layer 7 connection with the Moderne Agent through which all further communication will pass.

<figure><img src="../../../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

## Agent configuration

The following table contains all the variables/arguments you need to add to your Moderne Agent run command to work with your HTTP proxy. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne agent guide](agent-configuration.md).

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_AGENT_APIGATEWAY_PROXY_HOST` - _Host (without scheme) for proxy server_
* `MODERNE_AGENT_APIGATEWAY_PROXY_PORT` - _Port for proxy server_

{% hint style="info" %}
If you include either a host or port, you must include both.
{% endhint %}

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_AGENT_APIGATEWAY_PROXY_HOST=proxy.mycompany.com \
-e MODERNE_AGENT_APIGATEWAY_PROXY_PORT=8179 \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.agent.apiGateway.proxy.host` - _Host (without scheme) for proxy server_
* `--moderne.agent.apiGateway.proxy.port` - _Port for proxy server_

{% hint style="info" %}
If you include either a host or port, you must include both.
{% endhint %}

**Example:**

```shell
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.apiGateway.proxy.host=proxy.mycompany.com \
--moderne.agent.apiGateway.proxy.port=8179 \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}
