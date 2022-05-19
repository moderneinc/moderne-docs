# Configure an agent with GitHub

Configuring your Moderne Agent instance with GitHub is a prerequisite for both viewing recipe results within the Moderne application and committing changes from a recipe.\


This guide will walk you through configuring a new OAuth Application in GitHub

**Prerequisites**

* Administrator access to your organization's GitHub account.

#### Step 1 - Create an OAuth application with client id and secret.

1. Navigate to the settings page for your organization: `https://github.com/organizations/<yourorg>/settings/applications`
2. Expand Developer settings on the bottom left of the page.![](<../../.gitbook/assets/Screen Shot 2022-05-19 at 12.56.51 PM.png>)
3. Click the `New OAuth App` button in the upper right of your screen.
4. Supply the required fields and Register the application.                                          ![](<../../.gitbook/assets/Screen Shot 2022-05-19 at 1.01.11 PM.png>)
5. On your newly created application click the `Generate a new client secret` button\
   ![](<../../.gitbook/assets/Screen Shot 2022-05-19 at 1.17.35 PM.png>)
6. Copy the Client ID and Client secret from this page; they will be used as arguments for the Moderne Agent. &#x20;

#### Step 2 - Configure the Moderne Agent arguments

{% tabs %}
{% tab title="OCI Container" %}
The following arguments must be provided in addition to the arguments provided in ![on-premise agent](./). You can configure multiple GitHub OAuth Apps by including multiple entries with different indices. The Client ID and secret of each index must match up with the host for that index.

* `moderne_agent_github[{index}]_githubOauthClientId` - Client id configured in the previous step
* `moderne_agent_github[{index}]_githubOauthClientSecret` - Client secret configured in the previous step
* `moderne_agent_github[{index}]_url` - fully-qualified hostname of running GitHub instance



Example (note that host, client id,  and client secret are fake):

```
docker run \
...
-e moderne_agent_github_0_githubOauthClientId=ABCDE\
-e moderne_agent_github_0_githubOauthClientSecret=d70a0527 \
-e moderne_agent_github_0_url=https://myorg.github.com \
...
```
{% endtab %}

{% tab title="Executeable JAR" %}
The following arguments must be provided in addition to the arguments provided in ![on-premise agent](./). You can configure multiple GitHub OAuth Apps by including multiple entries with different indices. The private key of each index must match up with the host for that index.

* `moderne.agent.github[{index}].githubOauthClientId` - Client id configured in the previous step
* `moderne.agent.github[{index}].githubOauthClientSecret` - Client secret configured in the previous step
* `moderne.agent.github[{index}].url` - fully-qualified hostname of running GitHub instance

Note: system properties can be used in place of arguments. As an example, use `-Dmoderne.agent.token={token_value}` as an argument instead of `--moderne.agent.token={token_value}` as an argument.

Example (note that host, client id,  and client secret are fake):

```
java -jar moderne-agent-{version}.jar \
...
--moderne.agent.github[0].githubOauthClientId=ABCDE \
--moderne.agent.github[0].githubOauthClientSecret=d70a0527 \
--moderne.agent.github[0].url=https://myorg.github.com \
...
```
{% endtab %}
{% endtabs %}

