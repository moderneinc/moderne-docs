---
title: User roles
sidebar_label: User roles
description: Outlines what permissions different types of users have in the Moderne Platform.
---

import VersionBanner from '@site/src/components/VersionBanner';

<VersionBanner version="v2" linkPath="/administrator-documentation/moderne-platform-v1/references/user-roles" />

# User roles

| Action                                                | Everyone                             | Administrators                       |
| ----------------------------------------------------- | :----------------------------------: | :----------------------------------: |
| Interact with DevCenter                               | Users with organization access       | :white_check_mark:                   |
| View Marketplace                                      | :white_check_mark:                   | :white_check_mark:                   |
| Build recipes                                         | :white_check_mark:                   | :white_check_mark:                   |
| Create and use access tokens                          | :white_check_mark:                   | :white_check_mark:                   |
| Deploy recipe and visualization artifacts             | :x:                                  | :white_check_mark:                   |
| View list of repositories                             | Users with organization access       | :white_check_mark:                   |
| View activity log                                     | Users with organization access       | :white_check_mark:                   |
| Run recipes and visualizations                        | Users with organization access       | :white_check_mark:                   |
| View recipe results                                   | [Users with SCM access](#scm-access) | [Users with SCM access](#scm-access) |
| Commit recipe results                                 | [Users with SCM access](#scm-access) | [Users with SCM access](#scm-access) |
| Download data tables                                  | Users with organization access       | :white_check_mark:                   |
| View audit logs                                       | :x:                                  | :white_check_mark:                   |
| View connected connectors and associated technologies | :white_check_mark:                   | :white_check_mark:                   |
| [Manage Moddy organization prompts](#moddy-prompts)   | :x:                                  | :white_check_mark:                   |
| View and delete user access tokens                    | :x:                                  | :white_check_mark:                   |

## SCM access

In order to view recipe results or commit recipe results, users will need to have [SCM access to the repositories](./flow.md#integrating-with-scms). This restriction applies even for admins in Moderne. Viewing results is gated per repository: if you lack access to a given repository, you'll see the file and change counts but not the underlying diffs. Committing uses your own SCM credentials, so a commit will only succeed for repositories you can push to.

## Moddy prompts

Administrators can set the system prompt that steers [Moddy](../../../user-documentation/moddy/moddy-platform.md) for an entire organization, as well as the universal prompt that applies across the tenant. Any user can set their own personal prompt, which overrides the organization and universal prompts for that user.
