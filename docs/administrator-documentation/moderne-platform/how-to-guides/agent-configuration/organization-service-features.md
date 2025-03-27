---
sidebar_label: Organizations service configuration
description: How to configure the Moderne agent to access your Organizations service.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Organizations service Features

If you have chosen to use an organization service you will have access to the following features:

## Custom Generated Commit Messages

When a user creates a commit in the Moderne SaaS, the provided commit message is used as it. In some cases 
customers may want to apply a transformation to the message. This can be useful if a JIRA ticket must be associated
with the commit message. The transformation could retrieve the associated JIRA ticket and include it in the commit message.

If you want to apply a transformation your commit messages you will add your custom logic to this [graphQL query](https://github.com/moderneinc/moderne-organizations/blob/fbc92af9e31076c6dea95499517f7f4e53fdc33c/src/main/java/io/moderne/organizations/OrganizationDataFetcher.java#L47).
The `CommitMessageInput` contains a `message` and an `extendedMessage`. In the case were a PR is created the `message`
is used for the title of the PR if an explicit title is not provided, and the `message` and `extendedMessage` are 
concatenated together for the body.
In the case were we are creating a commit, the `message` and the `extendedMessage` are concatenated together like so:
```
`message`


`extendedMessage`
```
