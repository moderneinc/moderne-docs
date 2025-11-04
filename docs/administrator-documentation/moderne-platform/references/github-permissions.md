---
sidebar_label: GitHub permissions
description: A look into the GitHub OAuth permissions needed for Moderne to work correctly.
---

# GitHub permissions

Moderne uses a GitHub OAuth application (GitHub OAuth Apps or GitHub Apps) to perform various actions on your behalf. Below is an explanation of each type, their permissions, and how they're used by Moderne.

## GitHub App permission (preferred)

For GitHub Apps, Modenre requires a select number of OAuth scopes necessary to help you transform your code. The GitHub application can be installed into your personal, organization, or enterprise accounts as desirable.

| Permission                            | Access     | Description                                                                                      |
| ------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| Repositories - Contents               | Read/write | Create branches and push changesets on your behalf.                                              |
| Repositories - Pull Requests          | Read/write | Create, close, monitor status, and merge pull requests on your behalf.                           |
| Repositories - Workflows              | Read/write | Recipes that alter GitHub Action workflow files require this permission to make commits to them. |
| Account Permissions - Email addresses | Read-only  | Recognize your account as a new or returning user.                                               |

> [!NOTE]
> The GitHub application must be installed into all contexts where write actions are desired. To allow personal forks, the application must be installed into the personal account. To allow write to an organization, it must be available within that organization either by being installed directly in the organization or within an enterprise account containing said organization. Failing to install the application will result in write actions being rejected by GitHub.

## GitHub OAuth App permission

Moderne requires a select number of OAuth scopes necessary to help you transform your code.

<figure>
  ![](./assets/authentication-github-permissions.png)
</figure>

| Permission                            | Access     | Description                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Repositories (public)                 | Read/write | Create branches, create forks of public repositories, and push changesets on your behalf.                                                                                                                                                                                                                                                                         |
| Repositories (private) **(optional)** | Read/write | Create branches, create forks of private repositories, and push changesets on your behalf.<br/><br/>Only enabled if `includePrivateRepos=true` is set in agent configuration for GitHub. See [configure an agent with github](../how-to-guides/agent-configuration/configure-an-agent-with-github.md) for more detail.                                            |
| Organizations and teams               | Read-only  | Understand the organizations you belong to and your level of access within them.                                                                                                                                                                                                                                                                                  |
| Workflow                              | Read/write | Recipes that alter GitHub Action workflow files require this permission to make commits to them.                                                                                                                                                                                                                                                                  |
| Personal user data                    | Read-only  | Recognize your account as a new or returning user. Email and Profile are included by default with OpenID Connect through OAuth.                                                                                                                                                                                                                                   |

## GitHub applications vs. GitHub OAuth applications

We advise in following GitHub's own recommendation to utilize GitHub applications. If for your organization installing the application in all contexts required is not acceptable, then you may choose to utilize a GitHub OAuth application. Some things may guide you to make this choice are:

* If you allow personal user forks of repositories, the individual user must install the GitHub app into their personal account (not just an organization they belong to).
* A GitHub administrative user must make the GitHub application available to all contexts that will accept modifications from the Moderne Platform.
    * Installing a GitHub application into a GitHub enterprise account will make that application available to all member organizations.
* If you have many independent GitHub organizations and it is too much administrative setup.
