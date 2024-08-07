# Configure an agent with Azure DevOps Services

In order to view recipe results and commit changes from a recipe back to Azure DevOps Services, you'll need to register a Microsoft Entra ID OAuth app and configure the Moderne agent with the appropriate variables.

{% hint style="info" %}
Azure DevOps Services supports two OAuth 2.0 models: Microsoft Entra ID OAuth and the legacy Azure DevOps OAuth 2.0 models. The Moderne platform only supports the Microsoft Entra ID OAuth model.
{% endhint %}

## Azure DevOps Services Configuration

### Step 1: Create a Microsoft Entra ID OAuth App registration

1. Natigate to https://portal.azure.com
2. Under Azure services, click on **Microsoft Entra ID**
    * ![](<../../../../.gitbook/assets/azure_services_entra_id.png>)
3. Click on **App registrations**
    * ![](<../../../../.gitbook/assets/azure_entra_id_app_registrations.png>)
4. Click on **New registration**
5. In the Register an application form:
    1. Enter "Moderne client OAuth app" or similar in the **Name** field
    2. Select **Single Tenant** under **Supported account types**
    3. In the **Redirect URI** section, enter a Web platform entry with the URL http://localhost:3000
        * ![](<../../../../.gitbook/assets/azure_entra_id_register_an_application.png>)
6. Click **Register**
7. In the app's Overview page click **Add a certificate or secret**
    * ![](<../../../../.gitbook/assets/azure_oauth_add_client_secret.png>)
8. Click **New client sercret**
9. In the Add a client secret form:
    1. Enter "Moderne client OAuth app client secret" or similar in the **Description** field
    2. Optionally set a non-default secret expiration in the **Expires** field
        * ![](<../../../../.gitbook/assets/azure_oauth_add_client_secret_form.png>)
    3. Click **Add**

## Agent configuration

### Step 2: Configure the Moderne Agent

The following table contains all of the variables/arguments you need to add to your Moderne agent run command in order for it to work with your Azure DevOps Services instance. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne agent guide](agent-configuration.md).

Values for client ID, client secret and tenant ID can be found in the Overview page for your OAuth app's registration:
![](<../../../../.gitbook/assets/azure_oauth_app_registration_overview.png>)

{% hint style="info" %}
You can configure multiple Azure DevOps OAuth apps by including multiple entries, each with a different `{index}`.
{% endhint %}

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_AGENT_AZUREDEVOPS_{index}_OAUTH_CLIENTID` – _The client ID of the registered OAuth app._
* `MODERNE_AGENT_AZUREDEVOPS_{index}_OAUTH_CLIENTSECRET` – _The client secret of the registered OAuth app._
* `MODERNE_AGENT_AZUREDEVOPS_{index}_OAUTH_TENANTID` – _The Azure tenant ID of the registered OAuth app._
* `MODERNE_AGENT_AZUREDEVOPS_{index}_SKIPSSL` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this Azure DevOps instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to false._
* `MODERNE_AGENT_AZUREDEVOPS_{index}_SSH_PRIVATEKEY` – _(Optional) The SSH private key used to establish a SSH connection with Azure DevOps._
* `MODERNE_AGENT_AZUREDEVOPS_{index}_SSH_PASSPHRASE` – **(Required if the SSH private key is specified and encrypted with a passphrase)** _The passphrase used to encrypt the SSH private key._
* `MODERNE_AGENT_AZUREDEVOPS_{index}_SSH_SSHFILENAME` – **(Required if the SSH private key is specified)** _The file name of the private key, which the agent will store locally._
* `MODERNE_AGENT_AZUREDEVOPS_{index}_SSH_USER` – **(Required if the SSH private key is specified)** _The username used for SSH communication with Azure DevOps._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_AGENT_AZUREDEVOPS_0_OAUTH_CLIENTID=4affd674-286d-423f-b643-7ffe4dec0f53 \
-e MODERNE_AGENT_AZUREDEVOPS_0_OAUTH_CLIENTSECRET=yourClientSecret \
-e MODERNE_AGENT_AZUREDEVOPS_0_OAUTH_TENANTID=488bc312-9fdc-43d2-a647-7a7b28066cc4 \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.agent.azuredevops[{index}].oauth.clientId` – _The client ID of the registered OAuth app._
* `--moderne.agent.azuredevops[{index}].oauth.clientSecret` – _The client secret of the registered OAuth app._
* `--moderne.agent.azuredevops[{index}].oauth.tenantId` – _The Azure tenant ID of the registered OAuth app._
* `--moderne.agent.azuredevops[{index}].skipSsl` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this Azure DevOps instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to false._
* `--moderne.agent.azuredevops[{index}].ssh.privateKey` – _(Optional) The SSH private key used to establish a SSH connection with Azure DevOps._
* `--moderne.agent.azuredevops[{index}].ssh.passphrase` – **(Required if the SSH private key is specified and encrypted with a passphrase)** _The passphrase used to encrypt the SSH private key._
* `--moderne.agent.azuredevops[{index}].ssh.sshFileName` – **(Required if the SSH private key is specified)** _The file name of the private key, which the agent will store locally._
* `--moderne.agent.azuredevops[{index}].ssh.user` – **(Required if the SSH private key is specified)** _The username used for SSH communication with Azure DevOps._

**Example:**

```shell
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.azuredevops[0].oauth.clientId=4affd674-286d-423f-b643-7ffe4dec0f53 \
--moderne.agent.azuredevops[0].oauth.clientSecret=yourClientSecret \
--moderne.agent.azuredevops[0].oauth.tenantId=488bc312-9fdc-43d2-a647-7a7b28066cc4 \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}--------
