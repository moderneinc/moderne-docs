# GitHub Permissions

## OAuth Permission

Moderne requires a select number of OAuth scopes necessary to help you transform your code.

![](../.gitbook/assets/authentication-github-permissions.png)

| Permission | Scope | Why we need this |
| :--- | :--- | :--- |
| Repositories \(Public\) | Read/Write | We use this to create branches,  create forks of public projects, and push change sets on your behalf. |
| Organizations and teams | Read-only | We use this to understand the organizations you belong to and your level of access within them. |
| Personal user data | Read-only | We use this to recognize your account as a new or returning user. Email and Profile included by default with OpenID Connect through OAuth.  |

