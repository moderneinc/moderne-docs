# Configure an agent with GitHub

Configuring your Moderne Agent instance with GitHub is a prerequisite for both viewing recipe results within the Moderne application and committing changes from a recipe.\


This guide will walk you through configuring a new OAuth Application in GitHub

[Why an OAuth app and not a GitHub app?](../../references/github-permissions.md)

**Prerequisites**

* Administrator access to your organization's GitHub account.

#### Step 1 - Create an OAuth application with client id and secret.

1. Navigate to the settings page for your organization: `https://github.com/organizations/<yourorg>/settings/applications`
2. Expand Developer settings on the bottom left of the page.![](<../../.gitbook/assets/Screen Shot 2022-05-19 at 12.56.51 PM.png>)
3. Click the `New OAuth App` button in the upper right of your screen.
4. Supply the required fields and Register the application.  (See examples below)                                  ![](<../../.gitbook/assets/Screen Shot 2022-05-19 at 1.01.11 PM.png>)
5. On your newly created application click the `Generate a new client secret` button\
   ![](<../../.gitbook/assets/Screen Shot 2022-05-19 at 1.17.35 PM.png>)
6. Copy the Client ID and Client secret from this page; they will be used as arguments for the Moderne Agent. &#x20;

#### **Example values**

| Field                      | Example                    |
| -------------------------- | -------------------------- |
| Application Name           | `Moderne SaaS`             |
| Homepage URL               | `https://myorg.moderne.io` |
| Authorization callback URL | `https://myorg.moderne.io` |

#### Step 2 - Configure the Moderne Agent arguments

Please note that the commands and options below omit standard options documented at [standard-configuration.md](standard-configuration.md "mention"). You will need to merge the standard options into the commands documented below, which is indicated via ellipses.

{% tabs %}
{% tab title="OCI Container" %}
You can configure multiple GitHub OAuth Apps by including multiple entries with different indices. The Client ID and secret of each index must match up with the host for that index.

* `MODERNE_AGENT_GITHUB_{index}_OAUTH_CLIENTID` - Client id configured in the previous step
* `MODERNE_AGENT_GITHUB_{index}_OAUTH_CLIENTSECRET` - Client secret configured in the previous step
* `MODERNE_AGENT_GITHUB_{index}_URL` - fully-qualified hostname of running GitHub instance
* `MODERNE_AGENT_GITHUB_{index}_SKIPSSL` - skip SSL validation for HTTP connections to this GitHub instance (defaults to false)
* `MODERNE_AGENT_GITHUB_{index}_OAUTH_INCLUDEPRIVATEREPOS` - By default, the OAuth app will only have access to public repositories within your organization(s). To provide the OAuth app access to private repositories, you can include the following optional configuration:



Example (note that host, client id,  and client secret are fake):

```
docker run \
...
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID=ABCDE\
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET=d70a0527 \
-e MODERNE_AGENT_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
-e MODERNE_AGENT_GITHUB_0_URL=https://myorg.github.com \
...
```
{% endtab %}

{% tab title="Executable JAR" %}
You can configure multiple GitHub OAuth Apps by including multiple entries with different indices. The private key of each index must match up with the host for that index.

* `moderne.agent.github[{index}].oauth.clientId` - Client id configured in the previous step
* `moderne.agent.github[{index}].oauth.clientSecret` - Client secret configured in the previous step
* `moderne.agent.github[{index}].url` - fully-qualified hostname of running GitHub instance
* `moderne.agent.github[{index}].skipSsl` - skip SSL validation for HTTP connections to this GitHub instance (defaults to false)



By default, the OAuth app will only have access to public repositories within your organization(s). To provide the OAuth app access to private repositories, you can include the following optional configuration:

* `moderne_agent_github[{index}]`.`oauth.includePrivateRepos=true`



Note: system properties can be used in place of arguments. As an example, use `-Dmoderne.agent.token={token_value}` as an argument instead of `--moderne.agent.token={token_value}` as an argument.

Example (note that host, client id,  and client secret are fake):

```
java -jar moderne-agent-{version}.jar \
...
--moderne.agent.github[0].oauth.clientId=ABCDE \
--moderne.agent.github[0].oauth.clientSecret=d70a0527 \
--moderne.agent.github[0].oauth.includePrivateRepos=true \
--moderne.agent.github[0].url=https://myorg.github.com \
...
```
{% endtab %}
{% endtabs %}

