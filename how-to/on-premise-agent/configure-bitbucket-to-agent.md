# Configure an agent with Bitbucket Data Center access

Configuring your Moderne Agent instance with Bitbucket is a prerequisite for both viewing recipe results within the Moderne application and committing changes from a recipe.

This guide will walk you through configuring a new Application Link within your Bitbucket Server or Bitbucket Data Center instance.

#### Prerequisites

* Administrator access to your BitBucket on-premise instance.

### Step 1: Generate a public and private key for Bitbucket

```shell
openssl genrsa -out bitbucket_privatekey.pem 1024
openssl req -newkey rsa:1024 -x509 -key bitbucket_privatekey.pem -out bitbucket_publickey.cer -days 365
openssl pkcs8 -topk8 -nocrypt -in bitbucket_privatekey.pem -out bitbucket_privatekey.pcks8
openssl x509 -pubkey -noout -in bitbucket_publickey.cer  > bitbucket_publickey.pem
```

### Step 2: Create an Application Link in Bitbucket

1. Go to the Administration page of Bitbucket
2. Select _Application Links_ from the _System_ section
3. Click on "Create link"
4. Ensure that the _Application Type_ is set to _Atlassian product_ (this looks weird, but this is the [documented path](https://confluence.atlassian.com/bitbucketserver/link-to-other-applications-1018764620.html) for external applications to integrate)
5. Enter the the URL for your Moderne instances as the _Application URL_ ![create link](../../.gitbook/assets/agent-bitbucket-create-link.png)
6. Click _Continue_
7.  Define a new Incoming Application with the following settings:

    | Field                 | Value                            |
    | --------------------- | -------------------------------- |
    | Application Name      | `Moderne`                        |
    | Application Type      | Generic Application              |
    | Service Provider Name | `moderne`                        |
    | Consumer key          | `OauthKey`                       |
    | Request token URL     | `https://your-domain.moderne.io` |
    | Access token URL      | `https://your-domain.moderne.io` |
    | Authorize URL         | `https://your-domain.moderne.io` |
    | Create incoming link  | ✅                                |
8. Click _Continue_
9.  Complete the Incoming Link configuration

    | Field         | Value                                                        |
    | ------------- | ------------------------------------------------------------ |
    | Consumer Key  | `OauthKey`                                                   |
    | Consumer Name | `Moderne`                                                    |
    | Public Key    | Paste the public key (`bitbucket_publickey.pem`) from step 1 |
10. Click _Continue_ to complete the Application Link creation

### Step 3: Configure the Moderne Agent with a Bitbucket private key

To complete the set-up of Bitbucket with the agent we will need to define the private key, `bitbucket_privatekey.pcks8`, we generated in Step 1 as a run-time parameter for the agent.

1. Open up `bitbucket_privatekey.pcks8` in a text editor.
2. Remove the first and last line (header and footer) of the private key.
   1. First and last lines would be: `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
3. Remove all newline and return characters and copy the contents of the file as a single-line string.
4. [Depending on how you run your Agent](./#run-the-agent-container), you will define the run-time variables `moderne.agent.bitbucket[0].private-key` with the single-line private key.

{% hint style="info" %}
**Using Bash or other shells?**

Quickly get a single-line instance of your private key with the key header/footer removed

`cat bitbucket_privatekey.pcks8 | sed '1d;$d' | tr -d '\n'`
{% endhint %}

## Argument configuration

Please note that the commands and options below omit standard options documented at [standard-configuration.md](standard-configuration.md "mention"). You will need to merge the standard options into the commands documented below, which is indicated via ellipses.

{% tabs %}
{% tab title="OCI Container" %}
You can configure multiple bitbuckets by including multiple entries with different indices. The private key of each index must match up with the host for that index.

* `MODERNE_AGENT_BITBUCKET_{index}_PRIVATEKEY` - Private key configured in previous step
* `MODERNE_AGENT_BITBUCKET_{index}_URL` - fully-qualified URL of running bitbucket instance. example: `https://bitbucket.myorg.com`
* `MODERNE_AGENT_BITBUCKET_{index}_SKIPSSL` - skip SSL validation for HTTP connections to this Bitbucket instance (defaults to false)

Example using Docker (note that host and private-key are fake):

```
docker run \
...
-e MODERNE_AGENT_BITBUCKET_0_PRIVATEKEY=ABCDE \
-e MODERNE_AGENT_BITBUCKET_0_URL=https://bitbucket.myorg.com \
-e MODERNE_AGENT_BITBUCKET_1_PRIVATEKEY=FGHIJ \
-e MODERNE_AGENT_BITBUCKET_1_URL=http://bitbucket2.myorg.com \
...
```
{% endtab %}

{% tab title="Executable JAR" %}
You can configure multiple bitbuckets by including multiple entries with different indices. The private key of each index must match up with the host for that index.

* `moderne.agent.bitbucket[{index}].private-key` - Private key configured in previous step
* `moderne.agent.bitbucket[{index}].url` - fully-qualified URL of running bucketbucket instance. example: `https://bitbucket.org`
* `moderne.agent.bitbucket[{index}].skipSsl` - skip SSL validation for HTTP connections to this Bitbucket instance (defaults to false)

Note: system properties can be used in place of arguments. As an example, use `-Dmoderne.agent.token={token_value}` as an argument instead of `--moderne.agent.token={token_value}` as an argument.

Example (note that host and private-key are fake):

```
java -jar moderne-agent-{version}.jar \
...
--moderne.agent.bitbucket[0].private-key=ABCDE \
--moderne.agent.bitbucket[0].url=https://bitbucket.myorg.com \
--moderne.agent.bitbucket[1].private-key=FGHIJ \
--moderne.agent.bitbucket[1].url=http://bitbucket2.myorg.com \
...
```
{% endtab %}
{% endtabs %}
