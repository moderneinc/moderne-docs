# On-prem source code management (SCM) server configuration

In order for Moderne to correctly map repository clone URLs to the right origin and path you will need to configure the base URL(s) for your SCM server. For SaaS SCM services like GitHub, GitLab, Bitbucket (cloud) and AzureDevOps – no extra configuration is required. For on-prem SCM servers, though, you will need to provide Moderne with additional information. Specifically the type, base URL, and any alternate URLs that are used to access the server.

## Synchronize servers with Moderne (Agent or DX) configuration

You can use the following command to configure a new SCM server:

```bash
mod config scm moderne sync
```

## Manually configure your on-prem SCM servers

You can use the following command to configure a new SCM server:

```bash
mod config scm add Bitbucket https://bitbucket.example.com/stash --alternate-url ssh://bitbucket.example.com:7999 --alternate-url http://bitbucket.example.com:8080/stash
```

Supported on premise SCM types are: `GitLab` `Bitbucket` and `GitHub`

If a server with this type and base URL already exists, it will be updated with the supplied alternate URLs.

To remove a configuration you can use:

```bash
mod config scm remove Bitbucket https://bitbucket.example.com/stash
```
