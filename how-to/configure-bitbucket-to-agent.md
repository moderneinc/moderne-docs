# Connect BitBucket to Moderne Agent

## Step 1 - Generate a public and private key for BitBucket

```shell
openssl genrsa -out bitbucket_privatekey.pem 1024

openssl req -newkey rsa:1024 -x509 -key bitbucket_privatekey.pem -out bitbucket_publickey.cer -days 365

openssl pkcs8 -topk8 -nocrypt -in bitbucket_privatekey.pem -out bitbucket_privatekey.pcks8

openssl x509 -pubkey -noout -in bitbucket_publickey.cer  > bitbucket_publickey.pem
```

## Step 2 - Create an Application Link in BitBucket

1. Go to the Administration page of BitBucket
2. Select _Application Links_ from the _System_ section
   ![app link](../.gitbook/assets/agent-bitbucket-applink.png)
3. Click on "Create link"
4. Ensure that the _Application Type_ is set to _Atlassian product_
5. Enter the the URL for your Moderne instances as the _Application URL_
   ![create link](../.gitbook/assets/agent-bitbucket-create-link.png)
6. Click _Continue_
7. Define a new Incoming Application with the following settings:

   | Field                 | Value                            |
   | --------------------- | -------------------------------- |
   | Application Name      | Moderne                          |
   | Application Type      | Generic Application              |
   | Service Provider Name | `moderne`                        |
   | Consumer key          | `OauthKey`                       |
   | Shared secret         | Enter in your own secret         |
   | Request token URL     | `https://your-domain.moderne.io` |
   | Access token URL      | `https://your-domain.moderne.io` |
   | Authorize URL         | `https://your-domain.moderne.io` |
   | Create incoming link  | ✅                               |

8. Click _Continue_
9. Complete the Incoming Link configuration
   | Field | Value |
   | --------------------- | -------------------------------- |
   | Consumer Key | `OauthKey` |
   | Consumer Name | Moderne |
   | Public Key | Paste the public key (`bitbucket_publickey.pem`) from step 1 |
10. Click _Continue_ to complete the Application Link creation

## Step 3 - Configure Moderne Agent with BitBucket private key

To complete the set-up of BitBucket with the agent we will need to define the private key, `bitbucket_privatekey.pcks8`, we generated in Step 1 as a run-time parameter for the agent.

1. Open up `bitbucket_privatekey.pcks8` in a text editor.
2. Remove the first and last line of the file.
   - `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
3. Remove all newline and return characters and copy the contents of the file as a single-line string.
   - Using bash:
     ```shell
     cat bitbucket_privatekey.pcks8 | sed '1d;$d' | tr -d '\n'
     ```
