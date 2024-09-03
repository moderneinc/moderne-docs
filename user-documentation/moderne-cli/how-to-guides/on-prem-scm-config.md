# On prem source code management (SCM) server configuration

In order for Moderne DX to correctly map repository clone URLs to the right origin and path we need to know the base URL(s) for your SCM server. With SaaS SCM services like GitHub, GitLab, Bitbucket (cloud) and AzureDevOps these are well known URLs, to use these no extra configuration is required. However, for any on-prem SCM servers we do need to configure the type, base URL and any alternate URLs that are used to access the server.

## Configure your on prem SCM servers

You can use the following command to configure a new SCM server:

{% code overflow="wrap" %}
```shell
mod config scm add Bitbucket https://bitbucket.example.com/stash --alternate-url ssh://bitbucket.example.com:7999 --alternate-url http://bitbucket.example.com:8080/stash
```
{% endcode %}

If a server with this type and base URL already exists, it will be updated with the supplied alternate URLs.

To remove a configuration you can use:

```shell
mod config scm remove Bitbucket https://bitbucket.example.com/stash
```
