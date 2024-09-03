# Configure on-prem source code management (SCM) with Moderne DX

In order for Moderne DX to correctly map repository clone URLs to the right origin and path we need to know the base URL(s) for your SCM server. With SaaS SCM services like GitHub, GitLab, Bitbucket (cloud) and AzureDevOps these are well known URLs, to use these no extra configuration is required.
However, for any on-prem SCM servers we do need to configure the type, base URL and any alternate URLs that are used to access the server. 

## Configuring the Moderne DX service

The following table contains all of the variables/arguments you need to add to your Moderne DX service run command in order for it to correctly map and match the origins from different clone URLs. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne DX service guide](dx-configuration.md).

You can configure multiple SCM servers by including multiple entries, each with a different `{index}`.

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_DX_SCM_{index}_BASEURL` – _The primary URL of your SCM server. This URL will be used as the origin._
* `MODERNE_DX_SCM_{index}_TYPE` – _Specifies the type of the SCM server (case insensitive). Choose between: `GitHub, GitLab, Bitbucket, BitbucketCloud, AzureDevOps`._
* `MODERNE_DX_SCM_{index}_ALTERNATEURLS_{alternate_url_index}` – _One or more alternate URLs (each with a different `{alternate_url_index}`) which point to the same server. Use this to specify all the protocol and port combinations that can be used to reach the same server. _

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_DX_SCM_0_BASEURL=https://bitbucket.example.com/stash \
-e MODERNE_DX_SCM_0_TYPE=Bitbucket \
-e MODERNE_DX_SCM_0_ALTERNATEURLS_0=ssh://bitbucket.example.com:7999 \
-e MODERNE_DX_SCM_0_ALTERNATEURLS_1=http://bitbucket.example.com:8080/stash \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.dx.scm[{index}].baseUrl` – _The primary URL of your SCM server. This URL will be used as the origin._
* `--moderne.dx.scm[{index}].type` – _Specifies the type of the SCM server (case insensitive). Choose between: `GitHub, GitLab, Bitbucket, BitbucketCloud, AzureDevOps`._
* `--moderne.dx.scm[{index}].alternateUrls[{alternate_url_index}]` – _One or more alternate URLs (each with a different `{alternate_url_index}`) which point to the same server. Use this to specify all the protocol and port combinations that can be used to reach the same server. _
* 
**Example:**

```shell
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.scm[0].baseUrl=https://bitbucket.example.com/stash \
--moderne.dx.scm[0].type=Bitbucket \
--moderne.dx.scm[0].alternateUrls[0]=ssh://bitbucket.example.com:7999 \
--moderne.dx.scm[0].alternateUrls[1]=http://bitbucket.example.com:8080/stash \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}
