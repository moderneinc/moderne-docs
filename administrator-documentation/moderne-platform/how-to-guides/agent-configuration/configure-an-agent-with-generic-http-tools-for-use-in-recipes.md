# Configure an agent with generic HTTP tools for use in recipes

You have internal services within your enterprise that you may want to use within your recipes. Some possible examples follow:

* Launch Darkly - I want to use a recipe to identify code paths that can no longer be hit due to a Launch Darkly flag that has been turned on for a long time.
* Security advisory database - I have a security advisory database internally, and I want to use a recipe to identify when my dependencies match a security advisory in my internal database.

Setting up a generic HTTP tool will allow you to use `org.openrewrite.ipc.http.HttpSender` from your internal recipes to call tools inside your environment.[ Example usage of HttpSender](https://github.com/openrewrite/rewrite-generative-ai/blob/357d5f39f22cf47f4d5df417c1ddb6c883dd5c24/src/main/java/org/openrewrite/ai/model/GenerativeCodeEditor.java#L48-L57).

<figure><img src="../../../../.gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>

## Agent configuration

The following table contains all the variables/arguments you need to add to your Moderne agent run command to work with your HTTP tool. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne agent guide](agent-configuration.md).

You can configure multiple generic HTTP tools by including multiple entries, each with a different `{index}`.

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_AGENT_HTTPTOOL_{index}_URL` - _Fully qualified URL to your HTTP tool._
* `MODERNE_AGENT_HTTPTOOL_{index}_USERNAME` - _(Optional) Username used to authenticate to HTTP tool. **Note:** Only one of basic auth (username+password) and bearer token can be used. If username and password are specified, bearerToken must not be provided._
* `MODERNE_AGENT_HTTPTOOL_{index}_PASSWORD` - _(Optional) Password used to authenticate to HTTP tool. **Note:** Only one of basic auth (username+password) and bearer token can be used. If username and password are specified, bearerToken must not be provided._
* `MODERNE_AGENT_HTTPTOOL_{index}_BEARERTOKEN` - _(Optional) Bearer token used to authenticate to HTTP tool. **Note:** Only one of basic auth (username+password) and bearer token can be used. If bearerToken is specified, username and password must not be provided._
* `MODERNE_AGENT_HTTPTOOL_{index}_SKIPSSL` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this HTTP tool. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._
* `MODERNE_AGENT_HTTPTOOL_{index}_SKIPVALIDATECONNECTIVITY`– _(Optional) By default, on agent startup, we will validate that we can connect to this HTTP tool, and fail to start up the agent if we cannot. Set this to_ `true` _to skip this validation. Defaults to_ `false`_._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_AGENT_HTTPTOOL_0_URL=https://launchdarkly.mycompany.com \
-e MODERNE_AGENT_HTTPTOOL_0_USERNAME=myUser \
-e MODERNE_AGENT_HTTPTOOL_0_PASSWORD=${SECRET_NAME} \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.agent.httpTool[{index}].url` - _Fully qualified URL to your HTTP tool._
* `--moderne.agent.httpTool[{index}].username` - _(Optional) Username used to authenticate to HTTP tool. **Note:** Only one of basic auth (username+password) and bearer token can be used. If username and password are specified, bearerToken must not be provided._
* `--moderne.agent.httpTool[{index}].password` - _(Optional) Password used to authenticate to HTTP tool. **Note:** Only one of basic auth (username+password) and bearer token can be used. If username and password are specified, bearerToken must not be provided._
* `--moderne.agent.httpTool[{index}].bearerToken` - _(Optional) Bearer token used to authenticate to HTTP tool. **Note:** Only one of basic auth (username+password) and bearer token can be used. If bearerToken is specified, username and password must not be provided._
* `--moderne.agent.httpTool[{index}].skipSsl` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this HTTP tool. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._
* `--moderne.agent.httpTool[{index}].skipValidateConnectivity`– _(Optional) By default, on agent startup, we will validate that we can connect to this HTTP tool, and fail to start up the agent if we cannot. Set this to_ `true` _to skip this validation. Defaults to_ `false`_._

**Example:**

```shell
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.httpTool[0].url=https://launchdarkly.mycompany.com \
--moderne.agent.httpTool[0].username=myUser \
--moderne.agent.httpTool[0].password=${SECRET_NAME} \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}
