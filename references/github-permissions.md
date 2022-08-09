# GitHub permissions

Moderne.io uses a GitHub oauth application to perform various actions on your behalf. Below is an explanation of those permissions and how they're uses by Moderne.io.

## OAuth Permission

Moderne.io requires a select number of OAuth scopes necessary to help you transform your code.

![](../.gitbook/assets/authentication-github-permissions.png)

| Permission              | Scope      | Why do we need this                                                                                                                        |
| ----------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Repositories (Public)   | Read/Write | We use this to create branches, create forks of public projects, and push changesets on your behalf.                                       |
| Organizations and teams | Read-only  | We use this to understand the organizations you belong to and your level of access within them.                                            |
| Personal user data      | Read-only  | We use this to recognize your account as a new or returning user. Email and Profile included by default with OpenID Connect through OAuth. |
| Workflow                | Read/Write | Recipes that alter GitHub Action workflow files require this scope to perform write operations.                                            |

## GitHub OAuth applications vs Github applications

Those familiar with GitHub authentication may wonder why Moderne doesn't use Github apps for authentication instead of OAuth apps, since GitHub apparently favors GitHub apps as a replacement for OAuth apps. The reason Moderne is unable to use GitHub app authentication is because creating a user-owned fork of a public repository using Github app authentication requires&#x20;

* The individual user has to install the GitHub app into their personal account (not just an organization they belong to).
* Permissions administration:read and administration:write must be granted.
* The GitHub application must be installed with "all repositories" access.

Creating forks of public repositories is an important workflow for Moderne, and we don't believe users will want to grant such permissive access to our application. With GitHub oauth application, all that is necessary is the public\_repo scope, which doesn't grant Moderne read and write access to all your private repositories, without restriction.
