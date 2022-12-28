# Configure an agent with GitLab

Configuring your Moderne Agent instance with GitLab is a prerequisite for both viewing recipe results within the Moderne application and committing changes from a recipe.\


This guide will walk you through configuring a new OAuth Application in GitLab

**Prerequisites**

* Administrator access to your organization's GitLab account.

#### Step 1 - Create an OAuth application with application id and secret.

1. Navigate to the Applications page for your organization: `https://gitlab.com/groups/<yourorg>/-/settings/applications`
2.  Provide an application name and redirect URI.\
    The redirect URI will be in this format: `https://<tenantname>.moderne.io`



    <figure><img src="../../.gitbook/assets/Screenshot 2022-12-27 at 8.59.50 AM (1).png" alt=""><figcaption></figcaption></figure>
3.  Supply the following selections                          &#x20;

    <figure><img src="../../.gitbook/assets/Screenshot 2022-12-27 at 7.52.35 AM.png" alt=""><figcaption></figcaption></figure>
4. Click the Save application button
5.  Copy the application ID and secret from this page; they will be used as arguments for the Moderne Agent.  \


    <figure><img src="../../.gitbook/assets/Screenshot 2022-12-27 at 8.03.35 AM.png" alt=""><figcaption></figcaption></figure>

#### Step 2 - Configure the Moderne Agent arguments

Please note that the commands and options below omit standard options documented at [standard-configuration.md](standard-configuration.md "mention"). You will need to merge the standard options into the commands documented below, which are indicated via ellipses.

{% tabs %}
{% tab title="OCI Container" %}
You can configure multiple GitLab OAuth Apps by including multiple entries with different indices. The Client ID and secret of each index must match up with the host for that index.

* `MODERNE_AGENT_GITLAB_{index}_OAUTH_CLIENTID` - Application id configured in the previous step
* `MODERNE_AGENT_GITLAB_{index}_OAUTH_CLIENTSECRET` - Secret configured in the previous step
* `MODERNE_AGENT_GITLAB_{index}_URL` - fully-qualified hostname of running GitLab instance
* `MODERNE_AGENT_GITLAB_{index}_SKIPSSL` - skip SSL validation for HTTP connections to this GitLab instance (defaults to false)



Example (note that host, client id,  and client secret are fake):

```
docker run \
...
-e MODERNE_AGENT_GITLAB_0_OAUTH_CLIENTID=ABCDE\
-e MODERNE_AGENT_GITLAB_0_OAUTH_CLIENTSECRET=d70a0527 \
-e MODERNE_AGENT_GITLAB_0_URL=https://gitlab.com \
...
```
{% endtab %}

{% tab title="Executable JAR" %}
You can configure multiple GitHub OAuth Apps by including multiple entries with different indices. The private key of each index must match up with the host for that index.

* `moderne.agent.gitlab[{index}].oauth.clientId` - Application id configured in the previous step
* `moderne.agent.gitlab[{index}].oauth.clientSecret` - Secret configured in the previous step
* `moderne.agent.gitlab[{index}].url` - fully-qualified hostname of running GitLab instance
* `moderne.agent.gitlab[{index}].skipSsl` - skip SSL validation for HTTP connections to this GitLab instance (defaults to false)

Note: system properties can be used in place of arguments. As an example, use `-Dmoderne.agent.token={token_value}` as an argument instead of `--moderne.agent.token={token_value}` as an argument.

Example (note that host, client id,  and client secret are fake):

```
java -jar moderne-agent-{version}.jar \
...
--moderne.agent.gitlab[0].oauth.clientId=ABCDE \
--moderne.agent.gitlab[0].oauth.clientSecret=d70a0527 \
--moderne.agent.gitlab[0].url=https://gitlab.com \
...
```
{% endtab %}
{% endtabs %}

