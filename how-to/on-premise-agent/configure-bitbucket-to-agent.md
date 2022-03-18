# Configure BitBucket with Agent

Configuring your Moderne Agent instance with BitBucket is a prerequisite for both viewing recipe results within the Moderne application and committing changes from a recipe.

This guide will walk you through configuring a new Application Link within your BitBucket Server or BitBucket Data Center instance.

### Prerequisites

* Administrator access to your BitBucket on-premise instance.

## Step 1 - Generate a public and private key for BitBucket

```shell
openssl genrsa -out bitbucket_privatekey.pem 1024
openssl req -newkey rsa:1024 -x509 -key bitbucket_privatekey.pem -out bitbucket_publickey.cer -days 365
openssl pkcs8 -topk8 -nocrypt -in bitbucket_privatekey.pem -out bitbucket_privatekey.pcks8
openssl x509 -pubkey -noout -in bitbucket_publickey.cer  > bitbucket_publickey.pem
```

## Step 2 - Create an Application Link in BitBucket

1. Go to the Administration page of BitBucket
2. Select _Application Links_ from the _System_ section&#x20;
3. Click on "Create link"
4. Ensure that the _Application Type_ is set to _Atlassian product_
5. Enter the the URL for your Moderne instances as the _Application URL_ ![create link](../../.gitbook/assets/agent-bitbucket-create-link.png)
6. Click _Continue_
7.  Define a new Incoming Application with the following settings:

    | Field                 | Value                            |
    | --------------------- | -------------------------------- |
    | Application Name      | `Moderne`                        |
    | Application Type      | Generic Application              |
    | Service Provider Name | `moderne`                        |
    | Consumer key          | `OauthKey`                       |
    | Shared secret         | Enter in your own secret         |
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

## Step 3 - Configure Moderne Agent with BitBucket private key

To complete the set-up of BitBucket with the agent we will need to define the private key, `bitbucket_privatekey.pcks8`, we generated in Step 1 as a run-time parameter for the agent.

1. Open up `bitbucket_privatekey.pcks8` in a text editor.
2. Remove the first and last line (header and footer) of the private key.&#x20;
   1. First and last lines would be: `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
3. Remove all newline and return characters and copy the contents of the file as a single-line string.
4. [Depending on how you run your Agent](./#run-the-agent-container), you will define the run-time variables `moderne.agent.bitbucket[0].private-key` with the single-line private key.

{% hint style="info" %}
**Using Bash or other shells?**&#x20;

Quickly get a single-line instance of your private key with the key header/footer removed

`cat bitbucket_privatekey.pcks8 | sed '1d;$d' | tr -d '\n'`
{% endhint %}

# Argument configuration

{% tabs %}
{% tab title="OCI Container" %}

The following arguments must be provided in addition to the arguments provided in ![on-premise agent](README.md). You can configure multiple bitbuckets by including multiple entries with different indices. The private key of each index must match up with the host for that index.

* `moderne_agent_bitbucket_{index}_private-key` - Private key configured in previous step
* `moderne_agent_bitbucket_{index}_host` - fully-qualified hostname of running bitbucket instance. example: `bitbucket.org`

Example using Docker (note that host and private-key are fake):

```
docker run \
...
-e moderne_agent_bitbucket_0_private-key=ABCDE \
-e moderne_agent_bitbucket_0_host=bitbucket.myorg.com \
-e moderne_agent_bitbucket_1_private-key=FGHIJ \
-e moderne_agent_bitbucket_1_host=bitbucket2.myorg.com \
...
```
{% endtab %}

{% tab title="Executable JAR" %}
The following arguments must be provided in addition to the arguments provided in ![on-premise agent](README.md). You can configure multiple bitbuckets by including multiple entries with different indices. The private key of each index must match up with the host for that index.

* `moderne.agent.bitbucket[{index}].private-key` - Private key configured in previous step
* `moderne.agent.bitbucket[{index}].host` - fully-qualified hostname of running bucketbucket instance. example: `bitbucket.org`

Note: system properties can be used in place of arguments. As an example, use `-Dmoderne.agent.token={token_value}` as an argument instead of `--moderne.agent.token={token_value}` as an argument.

Example (note that host and private-key are fake):

```
java -jar moderne-agent-{version}.jar \
...
--moderne.agent.bitbucket[0].private-key=ABCDE \
--moderne.agent.bitbucket[0].host=bitbucket.myorg.com \
--moderne.agent.bitbucket[1].private-key=FGHIJ \
--moderne.agent.bitbucket[1].host=bitbucket2.myorg.com \
...
```
{% endtab %}
{% endtabs %}
