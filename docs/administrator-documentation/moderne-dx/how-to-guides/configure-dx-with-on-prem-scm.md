import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure on-prem source code management (SCM) with Moderne DX

In order for Moderne DX to correctly map repository clone URLs to the right origin and path you will need to provide the base URL(s) for your SCM server. For SaaS SCM services like GitHub, GitLab, Bitbucket (cloud) and AzureDevOps – no extra configuration is required. For on-prem SCM servers, though, you will need to provide Moderne with additional information. Specifically the type, base URL, and any alternate URLs that are used to access the server.

## Configuring the Moderne DX service

The following table contains all of the variables/arguments you need to add to your Moderne DX service run command in order for it to correctly map and match the origins from different clone URLs. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne DX service guide](dx-configuration.md).

You can configure multiple SCM servers by including multiple entries, each with a different `{index}`.

<Tabs groupId="dx-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Variable Name                                                | Required | Default | Description                                                                                                                                                                                                      |
|--------------------------------------------------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_DX_SCM_{index}_BASEURL`                             | `true`   |         | The primary URL of your SCM server. This URL will be used as the origin.                                                                                                                                         |
| `MODERNE_DX_SCM_{index}_TYPE`                                | `true`   |         | Specifies the type of the SCM server (case insensitive). Choose between: `GitHub, GitLab, Bitbucket, BitbucketCloud, AzureDevOps`.                                                                               |
| `MODERNE_DX_SCM_{index}_ALTERNATEURLS_{alternate_url_index}` | `true`   |         | One or more alternate URLs (each with a different `{alternate_url_index}`) which point to the same server. Use this to specify all the protocol and port combinations that can be used to reach the same server. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_DX_SCM_0_BASEURL=https://bitbucket.example.com/stash \
-e MODERNE_DX_SCM_0_TYPE=Bitbucket \
-e MODERNE_DX_SCM_0_ALTERNATEURLS_0=ssh://bitbucket.example.com:7999 \
-e MODERNE_DX_SCM_0_ALTERNATEURLS_1=http://bitbucket.example.com:8080/stash \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">


**Arguments:**

| Argument Name                                                | Required | Default | Description                                                                                                                                                                                                      |
|--------------------------------------------------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.dx.scm[{index}].baseUrl`                             | `true`   |         | The primary URL of your SCM server. This URL will be used as the origin.                                                                                                                                         |
| `--moderne.dx.scm[{index}].type`                                | `true`   |         | Specifies the type of the SCM server (case insensitive). Choose between: `GitHub, GitLab, Bitbucket, BitbucketCloud, AzureDevOps`.                                                                               |
| `--moderne.dx.scm[{index}].alternateUrls[{alternate_url_index}]` | `true`   |         | One or more alternate URLs (each with a different `{alternate_url_index}`) which point to the same server. Use this to specify all the protocol and port combinations that can be used to reach the same server. |

**Example:**

```bash
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.scm[0].baseUrl=https://bitbucket.example.com/stash \
--moderne.dx.scm[0].type=Bitbucket \
--moderne.dx.scm[0].alternateUrls[0]=ssh://bitbucket.example.com:7999 \
--moderne.dx.scm[0].alternateUrls[1]=http://bitbucket.example.com:8080/stash \
# ... Additional arguments
```
</TabItem>
</Tabs>

:::info
If you provide a base URL that uses the HTTP(S) protocol **and** you do not provide any alternate URLs, then we will create an SSH URL for your SCM service based on your base URL.

For example, if you only provide the following:
```
java -jar moderne-dx-{version}.jar \
--moderne.dx.scm[0].baseUrl=https://bitbucket.example.com/stash
```
Then we will assume the SSH URL for your SCM service is `ssh://bitbucket.example.com:7999`.
:::
