# Configure an agent with Bitbucket Data Center access

In order to view recipe results and commit changes from a recipe back to Bitbucket, you'll need to create an application link in Bitbucket and configure the Moderne agent with the appropriate variables.

To assist with that, this guide will:

* [Walk you through how to configure your Bitbucket server or Bitbucket Data Center instance to support the agent](#step-1-generate-a-public-and-private-key-for-bitbucket)
* [Provide you with a list of necessary variables the agent needs to communicate with your Bitbucket instance](#step-4-configure-the-moderne-agent)

#### Prerequisites

* You will need administrator access to your Bitbucket on-premise instance

## Bitbucket configuration

### Step 1: Generate a public and private key for Bitbucket

This key will be used by the Moderne agent to talk to Bitbucket.

```shell
openssl genrsa -out bitbucket_privatekey.pem 1024
openssl req -newkey rsa:1024 -x509 -key bitbucket_privatekey.pem -out bitbucket_publickey.cer -days 365
openssl pkcs8 -topk8 -nocrypt -in bitbucket_privatekey.pem -out bitbucket_privatekey.pcks8
openssl x509 -pubkey -noout -in bitbucket_publickey.cer  > bitbucket_publickey.pem
```

### Step 2: Create an Application Link in Bitbucket

1. Go to the Administration page in your Bitbucket instance
2. Select _Application Links_ from the _System_ section
3. Click on "Create link"
4. Ensure that the _Application Type_ is set to _Atlassian product_ (this looks weird, but this is the [documented path](https://confluence.atlassian.com/bitbucketserver/link-to-other-applications-1018764620.html) for external applications to integrate)
5. Enter the URL for your Moderne instances as the _Application URL_: 
    * ![create link](../../.gitbook/assets/agent-bitbucket-create-link.png)
6. Click _Continue_
7. Define a new Incoming Application with the following settings:

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
9. Complete the Incoming Link configuration:

    | Field         | Value                                                        |
    | ------------- | ------------------------------------------------------------ |
    | Consumer Key  | `OauthKey`                                                   |
    | Consumer Name | `Moderne`                                                    |
    | Public Key    | Paste the public key (`bitbucket_publickey.pem`) from step 1 |
10. Click _Continue_ to complete the Application Link creation

## Agent configuration

### Step 3: Configure the Bitbucket private key for the Moderne agent

In order for the Moderne agent to work with your Bitbucket instance, it will need to be provided with the private key you generated in [Step 1](#step-1-generate-a-public-and-private-key-for-bitbucket). Before Moderne can use this key, though, you will need to convert it to a single-line string.

If you're using Bash or another shell, you can obtain the single-line string by copying the results of the following command (for use in [Step 4](#step-4-configure-the-moderne-agent)):

```shell
cat bitbucket_privatekey.pcks8 | sed '1d;$d' | tr -d '\n'
```

If you're not using a shell, please follow these instructions instead:

1. Open up the `bitbucket_privatekey.pcks8` key in a text editor
2. Remove the first and last line (header and footer) of the private key
    * The first line should be: `-----BEGIN PRIVATE KEY-----`
    * The last line should be: `-----END PRIVATE KEY-----`
3. Remove all newline and return characters
4. Copy the contents of the file as a single-line string. This will be used in [Step 4](#step-4-configure-the-moderne-agent)

### Step 4: Configure the Moderne Agent

The following table contains all of the variables/arguments you need to add to your Moderne agent run command in order for it to work with your Bitbucket instance. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne agent guide](/how-to/agent-configuration.md).

{% hint style="info" %}
You can configure multiple Bitbucket instances by including multiple entries, each with a different `{index}`.
{% endhint %}

{% tabs %}
{% tab title="OCI Container" %}

**Variables:**

* `MODERNE_AGENT_BITBUCKET_{index}_PRIVATEKEY` – _The private key you configured for this Bitbucket instance._
* `MODERNE_AGENT_BITBUCKET_{index}_URL` – _The fully-qualified URL of the running Bitbucket instance. For example: `https://bitbucket.myorg.com`_
* `MODERNE_AGENT_BITBUCKET_{index}_SKIPSSL` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this Bitbucket instance. This must be set to true if you use a self-signed SSL/TLS certificate. Defaults to `false`._

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
* `--moderne.agent.bitbucket[{index}].skipSsl` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this Bitbucket instance. This must be set to true if you use a self-signed SSL/TLS certificate. Defaults to `false`._

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