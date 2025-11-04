---
sidebar_label: GitHub permissions
description: A look into the GitHub OAuth permissions needed for Moderne to work correctly.
---

# GitHub permissions

Moderne uses a GitHub OAuth application (GitHub OAuth Apps or GitHub Apps) to perform various actions on your behalf. Below is an explanation of each type, their permissions, and how they're used by Moderne.

## GitHub App permission (preferred)

For GitHub Apps, Moderne requires a select number of OAuth scopes necessary to help you transform your code. The GitHub application can be installed into your personal, organization, or enterprise accounts as desired.

| Permission                            | Access     | Description                                                                                      |
| ------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| Repositories - Contents               | Read/write | Create branches and push changesets on your behalf.                                              |
| Repositories - Pull Requests          | Read/write | Create, close, monitor status, and merge pull requests on your behalf.                           |
| Repositories - Workflows              | Read/write | Recipes that alter GitHub Action workflow files require this permission to make commits to them. |
| Account Permissions - Email addresses | Read-only  | Recognize your account as a new or returning user.                                               |

:::note
You'll need to install the GitHub application wherever you want to make code changes:

* **For personal forks**: Install it in your personal account.
* **For organization repositories**: Install it directly in the organization, or in your enterprise account (which automatically covers all member organizations).

Without the application installed, GitHub will reject any attempts to commit changes.
:::

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

We recommend using GitHub Apps, which aligns with GitHub's best practices. This is because GitHub Apps offer more granular permissions and better security through short-lived tokens. That being said, GitHub Apps require installation by an admin/owner in every context where they'll be used. This can create problematic administrative overhead in certain scenarios. 

For example, you might prefer a GitHub OAuth application instead if:

* **You support personal forks**: This is because each individual user would need to install the GitHub App in their personal account (not just in organizations they belong to).
* **You have many independent organizations**: This is because an admin would need to install the GitHub App in every organization where Moderne will make changes.
    * Pro tip: Installing the GitHub App at the enterprise level automatically makes it available to all member organizations.
* **Installation overhead is too high**: This is because the administrative burden of installing across multiple contexts may not be practical for your setup.

OAuth Apps require only user authorization (no installation), but they have broader permissions and access all repositories a user can reach.
