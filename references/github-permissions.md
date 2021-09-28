# GitHub permissions

Moderne.io uses a GitHub application to perform various actions on your behalf. Below is an explanation of those permissions and how they're uses by Moderne.io.

## OAuth Permission

Moderne.io requires a select number of OAuth scopes necessary to help you transform your code.

![](../.gitbook/assets/authentication-github-permissions.png)

| Permission | Scope | Why do we need this |
| :--- | :--- | :--- |
| Repositories \(Public\) | Read/Write | We use this to create branches, create forks of public projects, and push changesets on your behalf. |
| Organizations and teams | Read-only | We use this to understand the organizations you belong to and your level of access within them. |
| Personal user data | Read-only | We use this to recognize your account as a new or returning user. Email and Profile included by default with OpenID Connect through OAuth. |
| Workflow | Read/Write | Recipes that alter GitHub Action workflow files require this scope to perform write operations. |

