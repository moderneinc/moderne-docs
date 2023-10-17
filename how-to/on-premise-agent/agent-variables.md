# All agent configuration variables

This document includes all of the variables you can configure the Moderne agent to run with. Your configuration will only use some of these.

## Core variables

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_AGENT_APIGATEWAYRSOCKETURI` – _The URI used to connect to the Moderne API, provided by Moderne._
* `MODERNE_AGENT_CRYPTO_SYMMETRICKEY` – _A 256-bit AES encryption key, hex encoded. Used to encrypt your artifacts._
* `MODERNE_AGENT_NICKNAME` – _A name used to identify your agent in the SaaS agent dashboard UI._
* `MODERNE_AGENT_TOKEN` – _The Moderne SaaS agent connection token, provided by Moderne._
* `MODERNE_AGENT_DOWNLOADPARALLELISM` – _(Optional) How many threads are used to download LSTs. Defaults to `2` threads._
* `MODERNE_AGENT_ARTIFACTINDEXINTERVALSECONDS` – _(Optional) How frequently LSTs will be indexed. Defaults to `120` seconds._
* `MODERNE_AGENT_DEFAULTCOMMITOPTIONS_{index}` – _(Optional) Use to restrict which commit options are available on a tenant level (if the organizations service doesn't return any). Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`. By default all options are available._

**Example:**

```shell
docker run \
-e MODERNE_AGENT_APIGATEWAYRSOCKETURI=https://api.tenant.moderne.io/rsocket \
-e MODERNE_AGENT_CRYPTO_SYMMETRICKEY=yourSymmetricKey \
-e MODERNE_AGENT_NICKNAME=prod-1 \
-e MODERNE_AGENT_TOKEN=yourToken \
-e MODERNE_AGENT_DEFAULTCOMMITOPTIONS_0=PullRequest \
-e MODERNE_AGENT_DEFAULTCOMMITOPTIONS_1=ForkAndPullRequest \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.agent.apiGatewayRsocketUri` – _The URI used to connect to the Moderne API, provided by Moderne._
* `--moderne.agent.crypto.symmetricKey` – _A 256-bit AES encryption key, hex encoded. Used to encrypt your artifacts._
* `--moderne.agent.nickname` – _A name used to identify your agent in the SaaS agent dashboard UI._
* `--moderne.agent.token` – _The Moderne SaaS agent connection token, provided by Moderne._
* `--moderne.agent.downloadParallelism` – _(Optional) How many threads are used to download LSTs. Defaults to `2` threads._
* `--moderne.agent.artifactIndexIntervalSeconds` – _(Optional) How frequently LSTs will be indexed. Defaults to `120` seconds._
* `--moderne.agent.defaultCommitOptions[{index}]` – _(Optional) Use to restrict which commit options are available on a tenant level (if the organizations service doesn't return any). Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`. By default all options are available._

**Example:**

```shell
java -jar moderne-agent-{version}.jar \
--moderne.agent.apiGatewayRsocketUri=https://api.tenant.moderne.io/rsocket \
--moderne.agent.crypto.symmetricKey=yourSymmetricKey
--moderne.agent.nickname=prod-1 \
--moderne.agent.token=yourToken \
--moderne.agent.defaultCommitOptions[0]=PullRequest \
--moderne.agent.defaultCommitOptions[1]=ForkAndPullRequest \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}

## Bitbucket Cloud variables

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_AGENT_BITBUCKET_CLOUD_OAUTH_KEY` – _The key specified in your Bitbucket OAuth consumer._
* `MODERNE_AGENT_BITBUCKET_CLOUD_OAUTH_SECRET` – _The secret specified in your Bitbucket OAuth consumer._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_AGENT_BITBUCKET_CLOUD_OAUTH_KEY=yourOAuthKey \
-e MODERNE_AGENT_BITBUCKET_CLOUD_OAUTH_SECRET=yourSecretKey \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.agent.bitbucket.cloud.oauthKey` – _The key specified in your Bitbucket OAuth consumer._
* `--moderne.agent.bitbucket.cloud.oauthSecret` – _The secret specified in your Bitbucket OAuth consumer._

**Example:**

```shell
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.bitbucket.cloud.oauthKey=yourOAuthKey \
--moderne.agent.bitbucket.cloud.oauthSecret=yourSecretKey \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}

## Bitbucket Data Center variables

{% hint style="info" %}
You can configure multiple Bitbucket instances by including multiple entries, each with a different `{index}`.
{% endhint %}

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_AGENT_BITBUCKET_{index}_PRIVATEKEY` – _The private key you configured for this Bitbucket instance._
* `MODERNE_AGENT_BITBUCKET_{index}_URL` – _The fully-qualified URL of the running Bitbucket instance. For example: `https://bitbucket.myorg.com`_
* `MODERNE_AGENT_BITBUCKET_{index}_ALTERNATEURLS_{index}` – _(Optional) The list of alternative fully-qualified URL of the running Bitbucket instance. For example: `https://bitbucket.myorg.com`_
* `MODERNE_AGENT_BITBUCKET_{index}_SKIPSSL` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this Bitbucket instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._
* `MODERNE_AGENT_BITBUCKET_{index}_SSH_PRIVATEKEY` – _(Optional) The SSH private key used to establish a SSH connection with Bitbucket._
* `MODERNE_AGENT_BITBUCKET_{index}_SSH_PASSPHRASE` – _(Required if the SSH private key is specified and encrypted with a passphrase) The passphrase used to encrypt the SSH private key._
* `MODERNE_AGENT_BITBUCKET_{index}_SSH_SSHFILENAME` – _(Required if the SSH private key is specified) The file name of the private key, which the agent will store locally._
* `MODERNE_AGENT_BITBUCKET_{index}_SSH_USER` – _(Required if the SSH private key is specified) The username used for SSH communication with Bitbucket._
* `MODERNE_AGENT_BITBUCKET_{index}_SSH_PORT` – _(Optional) The port used to communicate via SSH with Bitbucket. Defaults to `7999`._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_AGENT_BITBUCKET_0_PRIVATEKEY=yourPrivateKey \
-e MODERNE_AGENT_BITBUCKET_0_URL=https://bitbucket.myorg.com \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.agent.bitbucket[{index}].privateKey` – _The private key you configured for this Bitbucket instance._
* `--moderne.agent.bitbucket[{index}].url` – _The fully-qualified URL of the running Bitbucket instance. For example: `https://bitbucket.myorg.com`_
* `--moderne.agent.bitbucket[{index}].alternateUrls[{index}]` – _(Optional) The list of alternative fully-qualified URL of the running Bitbucket instance. For example: `https://bitbucket.myorg.com`_
* `--moderne.agent.bitbucket[{index}].skipSsl` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this Bitbucket instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._
* `--moderne.agent.bitbucket[{index}].ssh.privateKey` – _(Optional) The SSH private key used to establish a SSH connection with Bitbucket._
* `--moderne.agent.bitbucket[{index}].ssh.passphrase` – _(Required if the SSH private key is specified and encrypted with a passphrase) The passphrase used to encrypt the SSH private key._
* `--moderne.agent.bitbucket[{index}].ssh.sshFileName` – _(Required if the SSH private key is specified) The file name of the private key, which the agent will store locally._
* `--moderne.agent.bitbucket[{index}].ssh.user` – _(Required if the SSH private key is specified) The username used for SSH communication with Bitbucket._
* `--moderne.agent.bitbucket[{index}].ssh.port` – _(Optional) The port used to communicate via SSH with Bitbucket. Defaults to `7999`._

**Example:**

```shell
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.bitbucket[0].privateKey=yourPrivateKey \
--moderne.agent.bitbucket[0].url=https://bitbucket.myorg.com \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}

## GitHub variables

{% hint style="info" %}
You can configure multiple GitHub OAuth apps by including multiple entries, each with a different `{index}`.
{% endhint %}

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_AGENT_GITHUB_{index}_OAUTH_CLIENTID` – _The client id configured in GitHub._
* `MODERNE_AGENT_GITHUB_{index}_OAUTH_CLIENTSECRET` – _The client secret configured in GitHub._
* `MODERNE_AGENT_GITHUB_{index}_URL` – _The fully-qualified hostname of the running GitHub instance._
* `MODERNE_AGENT_GITHUB_{index}_SKIPSSL` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this GitHub instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to false._
* `MODERNE_AGENT_GITHUB_{index}_ALLOWABLE_ORGANIZATIONS_{index}` – _(Optional) Specifies what organizations you can fork recipe results to. By default, there are no restrictions on which organizations can be committed to. If you want multiple organizations, increase the last index and add one per line._
* `MODERNE_AGENT_GITHUB_{index}_OAUTH_INCLUDEPRIVATEREPOS` – _(Optional) By default, the OAuth app will only have access to public repositories within your organization(s). To provide the OAuth app access to private repositories, you can set this to `true`._
* `MODERNE_AGENT_GITHUB_{index}_SSH_PRIVATEKEY` – _(Optional) The SSH private key used to establish a SSH connection with GitHub._
* `MODERNE_AGENT_GITHUB_{index}_SSH_PASSPHRASE` – _(Required if the SSH private key is specified and encrypted with a passphrase) The passphrase used to encrypt the SSH private key._
* `MODERNE_AGENT_GITHUB_{index}_SSH_SSHFILENAME` – _(Required if the SSH private key is specified) The file name of the private key, which the agent will store locally._
* `MODERNE_AGENT_GITHUB_{index}_SSH_USER` – _(Required if the SSH private key is specified) The username used for SSH communication with GitHub._
* `MODERNE_AGENT_GITHUB_{index}_SSH_PORT` – _(Optional) The port used to communicate via SSH with GitHub. Defaults to `7999`._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTID=yourClientId \
-e MODERNE_AGENT_GITHUB_0_OAUTH_CLIENTSECRET=yourClientSecret \
-e MODERNE_AGENT_GITHUB_0_URL=https://myorg.github.com \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_0=moderne \
-e MODERNE_AGENT_GITHUB_0_ALLOWABLE_ORGANIZATIONS_1=openrewrite \
-e MODERNE_AGENT_GITHUB_0_OAUTH_INCLUDEPRIVATEREPOS=true \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.agent.github[{index}].oauth.clientId` – _The client id configured in GitHub._
* `--moderne.agent.github[{index}].oauth.clientSecret` – _The client secret configured in GitHub._
* `--moderne.agent.github[{index}].url` – _The fully-qualified hostname of the running GitHub instance._
* `--moderne.agent.github[{index}].skipSsl` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this GitHub instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to false._
* `--moderne.agent.github[{index}].allowableOrganizations[{index}]` – _(Optional) Specifies what organizations you can fork recipe results to. By default, there are no restrictions on which organizations can be committed to. If you want multiple organizations, increase the last index and add one per line._
* `--moderne.agent.github[{index}].oauth.includePrivateRepos` – _(Optional) By default, the OAuth app will only have access to public repositories within your organization(s). To provide the OAuth app access to private repositories, you can set this to `true`._
* `--moderne.agent.github[{index}].ssh.privateKey` – _(Optional) The SSH private key used to establish a SSH connection with GitHub._
* `--moderne.agent.github[{index}].ssh.passphrase` – _(Required if the SSH private key is specified and encrypted with a passphrase) The passphrase used to encrypt the SSH private key._
* `--moderne.agent.github[{index}].ssh.sshFileName` – _(Required if the SSH private key is specified) The file name of the private key, which the agent will store locally._
* `--moderne.agent.github[{index}].ssh.user` – _(Required if the SSH private key is specified) The username used for SSH communication with GitHub._
* `--moderne.agent.github[{index}].ssh.port` – _(Optional) The port used to communicate via SSH with GitHub. Defaults to `7999`._

**Example:**

```shell
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.github[0].oauth.clientId=yourClientId \
--moderne.agent.github[0].oauth.clientSecret=yourClientSecret \
--moderne.agent.github[0].url=https://myorg.github.com \
--moderne.agent.github[0].allowableOrganizations[0]=moderne \
--moderne.agent.github[0].allowableOrganizations[1]=openrewrite \
--moderne.agent.github[0].oauth.includePrivateRepos=true \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}

## GitLab variables

You can configure multiple GitLab OAuth apps by including multiple entries, each with a different `{index}`.

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_AGENT_GITLAB_{index}_OAUTH_CLIENTID` – _The application id configured in GitLab._
* `MODERNE_AGENT_GITLAB_{index}_OAUTH_CLIENTSECRET` – _The secret configured in GitLab.\`_
* `MODERNE_AGENT_GITLAB_{index}_URL` – _The fully-qualified hostname of your GitLab instance.\`_
* `MODERNE_AGENT_GITLAB_{index}_SKIPSSL` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this GitLab instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._
* `MODERNE_AGENT_GITLAB_{index}_SSH_PRIVATEKEY` – _(Optional) The SSH private key used to establish a SSH connection with GitLab._
* `MODERNE_AGENT_GITLAB_{index}_SSH_PASSPHRASE` – _(Required if the SSH private key is specified and encrypted with a passphrase) The passphrase used to encrypt the SSH private key._
* `MODERNE_AGENT_GITLAB_{index}_SSH_SSHFILENAME` – _(Required if the SSH private key is specified) The file name of the private key, which the agent will store locally._
* `MODERNE_AGENT_GITLAB_{index}_SSH_USER` – _(Required if the SSH private key is specified) The username used for SSH communication with GitLab._
* `MODERNE_AGENT_GITLAB_{index}_SSH_PORT` – _(Optional) The port used to communicate via SSH with GitLab. Defaults to `7999`._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_AGENT_GITLAB_0_OAUTH_CLIENTID=yourClientId \
-e MODERNE_AGENT_GITLAB_0_OAUTH_CLIENTSECRET=yourClientSecret \
-e MODERNE_AGENT_GITLAB_0_URL=https://your-gitlab.com \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.agent.gitlab[{index}].oauth.clientId` – _The application id configured in GitLab._
* `--moderne.agent.gitlab[{index}].oauth.clientSecret` – _The secret configured in GitLab.\`_
* `--moderne.agent.gitlab[{index}].url` – _The fully-qualified hostname of your GitLab instance.\`_
* `--moderne.agent.gitlab[{index}].skipSsl` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this GitLab instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._
* `--moderne.agent.gitlab[{index}].oauth.includePrivateRepos` – _(Optional) By default, the OAuth app will only have access to public repositories within your organization(s). To provide the OAuth app access to private repositories, you can set this to `true`._
* `--moderne.agent.gitlab[{index}].ssh.privateKey` – _(Optional) The SSH private key used to establish a SSH connection with GitLab._
* `--moderne.agent.gitlab[{index}].ssh.passphrase` – _(Required if the SSH private key is specified and encrypted with a passphrase) The passphrase used to encrypt the SSH private key._
* `--moderne.agent.gitlab[{index}].ssh.sshFileName` – _(Required if the SSH private key is specified) The file name of the private key, which the agent will store locally._
* `--moderne.agent.gitlab[{index}].ssh.user` – _(Required if the SSH private key is specified) The username used for SSH communication with GitLab._
* `--moderne.agent.gitlab[{index}].ssh.port` – _(Optional) The port used to communicate via SSH with GitLab. Defaults to `7999`._

**Example:**

```shell
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.gitlab[0].oauth.clientId=yourClientId \
--moderne.agent.gitlab[0].oauth.clientSecret=yourClientSecret \
--moderne.agent.gitlab[0].url=https://your-gitlab.com \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}

## Organizations service variables

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_AGENT_ORGANIZATION_URL` – _The URL of your GraphQL service that provides organization information._
* `MODERNE_AGENT_ORGANIZATION_UPDATE_INTERVAL_SECONDS` – _(Optional) Specifies how often to request your organization information. Defaults to `600` (10 minutes)._
* `MODERNE_AGENT_ORGANIZATION_SKIPSSL` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_AGENT_ORGANIZATION_URL=http://localhost:8091 \
-e MODERNE_AGENT_ORGANIZATION_UPDATE_INTERVAL_SECONDS=600 \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.agent.organization.url` – _The URL of your GraphQL service that provides organization information._
* `--moderne.agent.organization.updateIntervalSeconds` – _(Optional) Specifies how often to request your organization information. Defaults to `600` (10 minutes)._
* `--moderne.agent.organization.skipSsl` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._

**Example:**

```shell
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.organization.url=http://localhost:8091 \
--moderne.agent.organization.updateIntervalSeconds=600 \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}

## Maven repository variables

You can configure multiple Maven repositories by including multiple entries, each with a different `{index}`.

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_AGENT_MAVEN_{index}_URL` – _The URL of your Maven repository._
* `MODERNE_AGENT_MAVEN_{index}_LOCALREPOSITORY` – _The path on disk where LST artifacts and Maven index files will be downloaded to. This is on the disk where the agent is being run and **not** on the Maven instance. Defaults to `~/.moderne-maven`_
  * LST artifacts are deleted from this location after they are transmitted to Moderne. Index files will remain behind to be used to detect diffs in the artifacts. If changes are discovered, only the incremental diffs will be downloaded (to limit the amount of data being transferred).
  * If multiple Maven repositories are configured on the agent, they **must** have different `MODERNE_AGENT_MAVEN_{index}_LOCALREPOSITORY` configured.
* `MODERNE_AGENT_MAVEN_{index}_USERNAME` – _(Optional) The username used to resolve artifacts. Defaults to `null`._
* `MODERNE_AGENT_MAVEN_{index}_PASSWORD` – _(Optional) The password used to resolve artifacts. Defaults to `null`._
* `MODERNE_AGENT_MAVEN_{index}_RELEASES` – _(Optional) Specifies whether or not this repository should be searched for releases. Defaults to `true`._
* `MODERNE_AGENT_MAVEN_{index}_SNAPSHOTS` – _(Optional) Specifies whether or not this repository should be searched for snapshots. Defaults to `true`._
* `MODERNE_AGENT_MAVEN_{index}_ASTSOURCE` – _(Optional) Specifies whether or not this repository should be searched for LST artifacts. Defaults to `true` (Note: LSTs used to be called ASTs)._
* `MODERNE_AGENT_MAVEN_{index}_RECIPESOURCE` – _(Optional) Specifies whether or not this repository should be searched for recipe jars. Defaults to `true`._
* `MODERNE_AGENT_MAVEN_{index}_SKIPSSL` – _(Optional) Whether or not to skip SSL/TLS verification for calls from the agent to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_AGENT_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_AGENT_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_AGENT_MAVEN_0_USERNAME=admin \
-e MODERNE_AGENT_MAVEN_0_PASSWORD=password \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.agent.maven[{index}].url` – _The URL of your Maven repository._
* `--moderne.agent.maven[{index}].localRepository` – _The path on disk where LST artifacts and Maven index files will be downloaded to. This is on the disk where the agent is being run and **not** on the Maven instance. Defaults to `~/.moderne-maven`_
  * LST artifacts are deleted from this location after they are transmitted to Moderne. Index files will remain behind to be used to detect diffs in the artifacts. If changes are discovered, only the incremental diffs will be downloaded (to limit the amount of data being transferred).
  * If multiple Maven repositories are configured on the agent, they **must** have different `MODERNE_AGENT_MAVEN_{index}_LOCALREPOSITORY` configured.
* `--moderne.agent.maven[{index}].username` – _(Optional) The username used to resolve artifacts. Defaults to `null`._
* `--moderne.agent.maven[{index}].password` – _(Optional) The password used to resolve artifacts. Defaults to `null`._
* `--moderne.agent.maven[{index}].releases` – _(Optional) Specifies whether or not this repository should be searched for releases. Defaults to `true`._
* `--moderne.agent.maven[{index}].snapshots` – _(Optional) Specifies whether or not this repository should be searched for snapshots. Defaults to `true`._
* `--moderne.agent.maven[{index}].astSource` – _(Optional) Specifies whether or not this repository should be searched for LST artifacts. Defaults to `true` (Note: LSTs used to be called ASTs)._
* `--moderne.agent.maven[{index}].recipeSource` – _(Optional) Specifies whether or not this repository should be searched for recipe jars. Defaults to `true`._
* `--moderne.agent.maven[{index}].skipSsl` – _(Optional) Whether or not to skip SSL/TLS verification for calls from the agent to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._

**Example:**

```shell
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne-agent.maven[0].localRepository=~/.moderne-maven \
--moderne.agent.maven[0].username=admin \
--moderne.agent.maven[0].password=password \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}

## Artifactory repository variables

You can configure multiple Artifactory servers by including multiple entries, each with a different `{index}`. Within a given Artifactory server configuration, you can configure multiple LST query filters by including multiple entries, each with a different `{index}`.

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_AGENT_ARTIFACTORY_{index}_URL` – _The URL of your Artifactory instance._
* `MODERNE_AGENT_ARTIFACTORY_{index}_USERNAME` – _The username used to connect to your Artifactory instance. This user must have permission to run AQL queries._
* `MODERNE_AGENT_ARTIFACTORY_{index}_PASSWORD` – _The password used to connect to your Artifactory instance._
* `MODERNE_AGENT_ARTIFACTORY_{index}_ASTQUERYFILTERS_{index}` – _The AQL query fragment used to select LST artifacts to send to Moderne. If multiple are specified, they are combined together with an `AND`._
* `MODERNE_AGENT_ARTIFACTORY_{index}_SKIPSSL` – _(Optional) Specifies whether or not to skip SSL verification for HTTP connections from the agent to this Artifactory instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_AGENT_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_AGENT_ARTIFACTORY_0_USERNAME=admin \
-e MODERNE_AGENT_ARTIFACTORY_0_PASSWORD=password \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_AGENT_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.agent.artifactory[{index}].url` – _The URL of your Artifactory instance._
* `--moderne.agent.artifactory[{index}].username` – _The username used to connect to your Artifactory instance. This user must have permission to run AQL queries._
* `--moderne.agent.artifactory[{index}].password` – _The password used to connect to your Artifactory instance._
* `--moderne.agent.artifactory[{index}].astQueryFilters[{index}]` – _The AQL query fragment used to select LST artifacts to send to Moderne. If multiple are specified, they are combined together with an `AND`._
* `--moderne.agent.artifactory[{index}].skipSsl` – _(Optional) Specifies whether or not to skip SSL verification for HTTP connections from the agent to this Artifactory instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._

**Example:**

```shell
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.agent.artifactory[0].username=admin \
--moderne.agent.artifactory[0].password=password \
--moderne.agent.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.agent.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}

## Recipe variables

The platform provides several fallback repositories for recipe loading when an agent has not been configured with any recipe sources. This fallback behavior can be disabled using recipe configuration.

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_AGENT_RECIPE_USEONLYCONFIGURED` – Only use the recipe sources configured in the agent.
* `MODERNE_AGENT_RECIPE_POMCACHE_TYPE` – _(Optional) Used to specify what type of cache the POM should use. Acceptable values: `IN_MEMORY` or `REDIS`._
* `MODERNE_AGENT_RECIPE_POMCACHE_ENTRYTTLMINUTES` – _(Optional) How long entries should live in the POM cache._
* `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_HOST` – _(Required if the POM cache type is set to `REDIS`, Optional otherwise) The URL of the Redis instance._
* `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_PORT` – _(Required if the POM cache type is set to `REDIS`, Optional otherwise) The port number of the Redis instance._
* `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_USERNAME` – _(Optional) The username needed to authenticate to the Redis instance._
* `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_PASSWORD` – _(Optional) The password needed to authenticate with the Redis instance._
* `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_SSL` – _(Optional) If set to `true`, then SSL will be enabled for the connection to the Redis instance. Defaults to `false`._
* `MODERNE_AGENT_RECIPE_POMCACHE_REDIS_DATABASE` – _(Optional) The Redis DB index._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_AGENT_RECIPE_USEONLYCONFIGURED=true \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.agent.recipe.useOnlyConfigured` – Only use the recipe sources configured in the agent.
* `--moderne.agent.recipe.pomCache.type` – _(Optional) Used to specify what type of cache the POM should use. Acceptable values: `IN_MEMORY` or `REDIS`._
* `--moderne.agent.recipe.pomCache.entryTtlMinutes` – _(Optional) How long entries should live in the POM cache._
* `--moderne.agent.recipe.pomCache.redis.host` – _(Required if the POM cache type is set to `REDIS`, Optional otherwise) The URL of the Redis instance._
* `--moderne.agent.recipe.pomCache.redis.port` – _(Required if the POM cache type is set to `REDIS`, Optional otherwise) The port number of the Redis instance._
* `--moderne.agent.recipe.pomCache.redis.username` – _(Optional) The username needed to authenticate to the Redis instance._
* `--moderne.agent.recipe.pomCache.redis.password` – _(Optional) The password needed to authenticate with the Redis instance._
* `--moderne.agent.recipe.pomCache.redis.ssl` – _(Optional) If set to `true`, then SSL will be enabled for the connection to the Redis instance. Defaults to `false`._
* `--moderne.agent.recipe.pomCache.redis.database` – _(Optional) The Redis DB index._

**Example:**

```shell
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.recipe.useOnlyConfigured=true \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}

## PyPI variables

{% hint style="info" %}
You can configure multiple PyPI package indexes by including multiple entries, each with a different `{index}`.
{% endhint %}

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_AGENT_PYPI_{index}_URL` – _The URL of your PyPI package index._
* `MODERNE_AGENT_PYPI_{index}_USERNAME` – _(Optional) The username used to access the index. Defaults to `null`._
* `MODERNE_AGENT_PYPI_{index}_PASSWORD` – _(Optional) The password used to access the index. Defaults to `null`._
* `MODERNE_AGENT_PYPI_{index}_SKIPSSL` – _(Optional) Whether or not to skip SSL/TLS verification for calls from the agent to this PyPI package index. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_AGENT_PYPI_0_URL=https://pypi.example.com/simple \
-e MODERNE_AGENT_PYPI_0_USERNAME=admin \
-e MODERNE_AGENT_PYPI_0_PASSWORD=password \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.agent.pypi[{index}].url` – _The URL of your PyPI package index._
* `--moderne.agent.`pypi`[{index}].username` –_(Optional) The username used to access the index. Defaults to `null`._
* `--moderne.agent.`pypi`[{index}].password` – _(Optional) The password used to access the index. Defaults to `null`._
* `--moderne.agent.`pypi`[{index}].skipSsl` – _(Optional) Whether or not to skip SSL/TLS verification for calls from the agent to this PyPI package index. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._

**Example:**

```shell
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.pypi[0].url=https://pypi.example.com/simple \
--moderne.agent.pypi[0].username=admin \
--moderne.agent.pypi[0].password=password \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}

##
